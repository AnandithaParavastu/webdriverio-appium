//const AddNoteScreen = require("../../screenObjects/android/add-note.screen");
//const EditNoteScreen = require("../../screenObjects/android/edit-note.screen");
import EditNoteScreen from '../../screenObjects/android/edit-note.screen';   //baabel

describe('Delete Notes', () => {
   
 it.only('delete note, verify trash can', async () => {
    console.log("User in delete note function")
    await EditNoteScreen.skipTutorial();
    await EditNoteScreen.saveAndverify("Fav TV Show", "Naruto\nTom and Jerry\nNoddy");
    await driver.back();
    await EditNoteScreen.getTitle.click();
    await EditNoteScreen.more.click();
    await EditNoteScreen.delete.click();
    await driver.acceptAlert();
    //android.widget.Button[@text='OK']
    await expect(EditNoteScreen.getTitle).not.toExist();
    await EditNoteScreen.nav.click();
    await EditNoteScreen.trashCan.click();
    await expect(EditNoteScreen.getTitle).toExist();

 })

 it('acces webvie elements', async() => {
console.log('user in switch contect funcyion')
await EditNoteScreen.skipTutorial();
await EditNoteScreen.nav.click();
//click on the fb link
await $('//*[@text="Like us on Facebook"]').click();
//get current context
console.log(await driver.getContext());
//get all the contexts
//driver.pause(2000);
//console.log(await driver.getContexts());

//wait until you get multiple contexts
await driver.waitUntil(async() => {
   const contexts = await driver.getContexts();
   await driver.switchContext(contexts[1]);
 return contexts.length()>1;
   
}, {timeout: 3000, timeoutMsg: 'Timed out waiting for another context'});
//switch to webview chrome context
//await driver.switchContext('WEBVIEW_chrome');
//asser thr cover image displayed
//await expect(await $('.img.coverPhoto')).toBeDisplayed();
   //switch back to the native app
   await driver.switchContext('NATIVE_APP');
   await driver.back();
   //await with app stuff
   await expect(EditNoteScreen.trashCan).toBeDisplayed();
 });
});