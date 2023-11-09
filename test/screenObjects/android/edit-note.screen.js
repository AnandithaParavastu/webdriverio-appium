const AddNoteScreen = require("../../screenObjects/android/add-note.screen");
class EditNoteScreen{

    get getTitle(){
        return $('//android.widget.TextView[@text="Fav TV Show"]');
    }
    
    get more(){
        return  $('//android.widget.ImageButton[@content-desc="More"]');
    }
    
    get delete(){
        return $('//android.widget.TextView[@text="Delete"]');
    }
    
    get nav(){
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }
    
    get trashCan(){
        return $('//android.widget.TextView[@text="Trash Can"]');
    }    

    async skipTutorial(){

        console.log('User in skip tutorial function')
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.textNote).toBeDisplayed();
    }

    async saveAndverify(title, body){
        console.log('User in saveVerify function')
        await AddNoteScreen.textNote.click();
        await AddNoteScreen.text.click();
        await expect(AddNoteScreen.editing).toBeDisplayed();
        //add note title
        await AddNoteScreen.editTitle.addValue(title);
        await AddNoteScreen.editnote.addValue(body);
        await AddNoteScreen.saveNote();
        await expect(AddNoteScreen.editButton).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText(body);
    }

}

//module.exports = new EditNoteScreen();
export default new EditNoteScreen(); //babel