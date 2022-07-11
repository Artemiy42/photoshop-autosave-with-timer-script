# photoshop-autosave-with-timer-script

## Install

* **Install Bridge**
* **Download the files**: `BackupSaver.jsx` and `Reminder.jsx`
* **BackupSaver.jsx**: Put this file where you want but after putting file somewhere you need to change path in Reminder.jsx script.
  * Open Reminder.jsx in any plain text editor (Notepat, SublimeText, VS Code) and change path in line 8

  var ptohoshopScriptFolder = "D:/Photoshop/Scripts/"; 

  to your new path of BackupSaver.jsx

  Example:

  var ptohoshopScriptFolder = "C:/New Folder/Test/Scripts/"; 

* **Reminder.jsx**: Put this file in `C:\Users\{Your_User_Name}\AppData\Roaming\Adobe\Bridge\Startup Scripts\Reminder PSD.jsx`
  * Or check instructions for Windows [link](http://kasyan.ho.ua/tips/bridge/how_to_install_scripts_in_bridge.html) or for Mac [link](https://jetsetcom.net/178-install-script-javascript-adobe-bridge.html).
  * Next time you open Bridge he ask you, whick you want to add new script to Bridge you must say **Yes**.

## Things you should know

* The script has been tested in Photoshop 2022 Windows and with Bridge 2022

## Possible changes?
* Scripting functionality that enables me to get rid of the Action file. It's not super cumbersome to *install*, but I'd rather get rid of it.
* Name change to something more fitting.
* Some sort of notification system to inform user that the file has been saved. 
  * Currently you need to just trust that the script saves the file.
  * If you accidentally press another key combination to save the file, you'd have no idea that the additional `.psd` file wasn't saved.
     * Assuming that this notification was implemented. The lack of notification would help you to realize the mistake.
