describe('Android Elements Tests', () => {
    it('Find Element by accessibility id', async () => {
        //find elements by accessibility id
        const appOption = await $('~App');
        //clicl on element
        await appOption.click();
        //assert
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
 })

 it('Find Element by class name', async () => {
    //find element by class name
    const className = await $('android.widget.TextView');
    console.log(await className.getText());
    //assert
    await expect(className).toHaveText("API Demos");
 })

 it ('Find elements by xpath', async () => {
    //xpath - @tagName[@attribute = value]
    await $('//android.widget.TextView[@content-desc=\'Alert Dialogs\']').click();
    //find by resource-id
    await $('//android.widget.Button[@resource-id=\'io.appium.android.apis:id/select_button\']').click();
    //find by text
    await $('//android.widget.TextView[@text=\'Command two\']').click();
    //find by class assetion
    const textAssertion = await $('android.widget.TextView');
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
 })

 it('Find elements by UIAutomator', async() => {
    //find by text contains
    await $$('android=new UiSelector().textContains("Alert")').click();
 })

 it('Find multiple elements', async() => {
    const expectedList = ['API Demos', "Access'ibility", 'Accessibility', 'Animation', 'App', 'Content', 'Graphics', 'Media', 'NFC',
     'OS', 'Preference'
   ]
    const actualList = []
    //find multiple elements
const textList = await $$('android.widget.TextView');
//loop through them
for (const element of textList){
actualList.push(await element.getText());
}
//assert the list
await expect(actualList).toEqual(expectedList);
 })

 it.only('Validate the country name', async() => {
   const view = await $('//android.widget.TextView[@content-desc="Views"]');
   //await view.scrollIntoView();
   //await view.scrollIntoView({ block: 'center', inline: 'center' });

   await view.click();

   await $('~Auto Complete').click();
   await $('~1. Screen Top').click();
   const country = await $('android.widget.EditText');
   await country.setValue('Canada');
   console.log(await country.getText());
   await expect(country).toHaveText("Canada");

 })

 
    });