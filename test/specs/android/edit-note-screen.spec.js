//const AddNoteScreen = require("../../screenObjects/android/add-note.screen");
//const EditNoteScreen = require("../../screenObjects/android/edit-note.screen");
import EditNoteScreen from '../../screenObjects/android/edit-note.screen';   //baabel

describe('Delete Notes', () => {
   
 it('delete note, verify trash can', async () => {
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

 });
});