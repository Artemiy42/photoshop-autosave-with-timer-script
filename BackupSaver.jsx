// Change this path to your path where you what to photoshop save opened files
var saveDirPath = "D:/Photoshop/Backup/";
var documents = app.documents;
var startDisplayDialogs = app.displayDialogs;
app.displayDialogs = DialogModes.NO;

if (app.documents.length > 0) {
    var theFirst = app.activeDocument;
    var allOpenDocs = app.documents;
    
    var psdOpts = new PhotoshopSaveOptions();
    psdOpts.embedColorProfile = true;
    psdOpts.alphaChannels = true;
    psdOpts.layers = true;
    psdOpts.spotColors = true;
    
	for (var i = 0; i < allOpenDocs.length; i++) {
        var curDoc = allOpenDocs[i];
        app.activeDocument = curDoc;
        curDoc.saveAs((new File(saveDirPath + curDoc.name + ".psd")), psdOpts, true, Extension.LOWERCASE);
	}

    app.activeDocument = theFirst;
}

app.displayDialogs = startDisplayDialogs;