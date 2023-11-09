class AddNoteScreen{
get skipBtn(){
    return $('android.widget.Button');
}

get textNote(){
    return $('//android.widget.TextView[@text=\'Add note\']');
}

get text(){
    return $('//android.widget.TextView[@text=\'Text\']');
}

get editing(){
    return $('//android.widget.TextView[@text=\'Editing\']');
}

get editTitle(){
    return $('//android.widget.EditText[@resource-id=\'com.socialnmobile.dictapps.notepad.color.note:id/edit_title\']');
}

get editnote(){
    return $('//android.widget.EditText[@resource-id=\'com.socialnmobile.dictapps.notepad.color.note:id/edit_note\']');
}

get editButton(){
    return $('//android.widget.ImageButton[@resource-id=\'com.socialnmobile.dictapps.notepad.color.note:id/edit_btn\']');
}

get viewNote(){
    return $('//android.widget.TextView[@resource-id=\'com.socialnmobile.dictapps.notepad.color.note:id/view_note\']');
}

get getTitle(){
    return $('//android.widget.TextView[@text="Fav Animie List"]');
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

async saveNote(){
    await driver.back();
        await driver.back();
}

}

//export default new AddNoteScreen();
module.exports = new AddNoteScreen();