#target bridge;

if (BridgeTalk.appName == "bridge") {
    var psRem = new MenuElement("command", "PS Reminder", "at the end of Tools");
}

// Change this path to your path where you put BackupSaver script
var ptohoshopScriptFolder = "D:/Photoshop/Scripts/"; 

// Change this varible if you rename BackupSaver script
var backupSaverName = "BackupSaver.jsx";

psRem.onSelect = function () { 
    // Change value to any esle for set how minuts must past then photoshop will run BackyupSaver script
    var minutes = 1;
    var milliseconds = minutes * 60000;

    psReminder = function(){
        var bt = new BridgeTalk();
        bt.target = "photoshop";
        bt.body = "var scriptFile = File('" + ptohoshopScriptFolder + backupSaverName + "');\
                   var script = '#include' + scriptFile.fullName; \
                   eval(script);";
        bt.send(4)
    }

    id = app.scheduleTask("psReminder()", milliseconds, true); 

    var win = new Window("palette","Photoshop Reminder");
    win.bu1 = win.add("button",undefined,"Stop Reminder");
    win.bu1.onClick = function(){
        win.close(0);
        app.cancelTask (id);
    }

    win.show();
};