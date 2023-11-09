describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await $('android.widget.Button').click();
        await expect($('//android.widget.TextView[@text=\'Add note\']')).toBeDisplayed();
    })

    it('add a note, save changes and verify note', async () => {
        await $('//android.widget.TextView[@text=\'Add note\']').click();
        await $('//android.widget.TextView[@text=\'Text\']').click();
        await expect($('//android.widget.TextView[@text=\'Editing\']')).toBeDisplayed();
        //add note title
        await $('//android.widget.EditText[@resource-id=\'com.socialnmobile.dictapps.notepad.color.note:id/edit_title\']').addValue("Fav Animie List");
        await $('//android.widget.EditText[@resource-id=\'com.socialnmobile.dictapps.notepad.color.note:id/edit_note\']').addValue("Naruto\nOne Piece\nAOT");
        await driver.back();
        await driver.back();
        await expect($('//android.widget.ImageButton[@resource-id=\'com.socialnmobile.dictapps.notepad.color.note:id/edit_btn\']')).toBeDisplayed();
        await expect($('//android.widget.TextView[@resource-id=\'com.socialnmobile.dictapps.notepad.color.note:id/view_note\']')).toHaveText("Naruto\nOne Piece\nAOT");
 })

 it('delete note, verify trash can', async () => {
    await driver.back();
    await $('//android.widget.TextView[@text="Fav Animie List"]').click();
    await $('//android.widget.ImageButton[@content-desc="More"]').click();
    await $('//android.widget.TextView[@text="Delete"]').click();
    await driver.acceptAlert();
    //android.widget.Button[@text='OK']
    await expect($('//android.widget.TextView[@text="Fav Animie List"]')).not.toExist();
    await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
    await $('//android.widget.TextView[@text="Trash Can"]').click();
    await expect($('//android.widget.TextView[@text="Fav Animie List"]')).toHaveText("Fav Animie List");

 });
});