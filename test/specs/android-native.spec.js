describe('Android native feature tests', () => {
    it('Access an activity directly', async () => {
        //accessing direct page through activitu syntax await driver.startActivity("appPackage", "appPackage.appActivity")
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        //assert the page
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Working with dialog box', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        //click on the first dialog
        await $('//android.widget.Button[@content-desc="OK Cancel dialog with a message"]').click();

        //get text 
        console.log('ALERT TEXR -->', await driver.getAlertText());

        //accept alert
        //await driver.acceptAlert();

        //dismiss alert
        // await driver.dismissAlert();

        //click on the ok/cancel button
        await $('//*[@resource-id="android:id/button1"]').click();

        //assert -alert box is no longer visisble
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();

    })

    it('Vertical Scrolling', async() => {
        await $('~App').click();
        await $('~Activity').click();
        //scroll to the end
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        //await $('~Secure Surfaces').click();

        //scrollTextIntoView - scroll untill it finds the text
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //assert
        await expect ($('~Secure Dialog')).toExist();
    })

    it('Horizontal scrolling', async() => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");

        //horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await driver.pause(3000);

        //scrollbackward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    })

    it.only('Date picker', async() => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();
        await $('//android.widget.Button[@content-desc="change the date"]').click();
        //scroll forward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await driver.pause(3000);

        await $('//android.view.View[@text ="10"]').click();
        await $('//android.widget.Button[@text ="OK"]').click();

        //assert
        await expect(await date.getText()).not.toEqual(currentDate);
    })
});