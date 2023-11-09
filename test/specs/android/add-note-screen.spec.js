const AddNoteScreen = require("../../screenObjects/android/add-note.screen");

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        console.log('screen page');
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.textNote).toBeDisplayed();
    })

    it('add a note, save changes and verify note', async () => {
        await AddNoteScreen.textNote.click();
        await AddNoteScreen.text.click();
        await expect(AddNoteScreen.editing).toBeDisplayed();
        //add note title
        await AddNoteScreen.editTitle.addValue("Fav Animie List");
        await AddNoteScreen.editnote.addValue("Naruto\nOne Piece\nAOT");
        await AddNoteScreen.saveNote();
        await expect(AddNoteScreen.editButton).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOne Piece\nAOT");
 })

 it('delete note, verify trash can', async () => {
    await driver.back();
    await AddNoteScreen.getTitle.click();
    await AddNoteScreen.more.click();
    await AddNoteScreen.delete.click();
    await driver.acceptAlert();
    //android.widget.Button[@text='OK']
    await expect(AddNoteScreen.getTitle).not.toExist();
    await AddNoteScreen.nav.click();
    await AddNoteScreen.trashCan.click();
    await expect(AddNoteScreen.getTitle).toHaveText("Fav Animie List");

 });
});