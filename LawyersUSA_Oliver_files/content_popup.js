<!--

// The code on this page is used to open dialog boxes from the View Content page
// (dsp_content_info.cfm) and Edit Content page (dsp_content_form.cfm).

// Global for brower version branching.
var Nav4 = ((navigator.appName == "Netscape") && (parseInt(navigator.appVersion) == 4))
// This object tracks the current dialog box opened from this page.
var dialogWin = new Object();
// This variable contains a refererence to the currently-open dialog.
var wnd;

// Generate a dialog. Parameters:
//    url -- URL of the page/frameset to be loaded into dialog
//    width -- pixel width of the dialog
//    height -- pixel height of the dialog
//    returnFunc -- reference to the function (on this page)
//                  that is to act on the data returned from the dialog
function openDialog(url, width, height, returnFunc, args) {
	//CloseDlg();
    if (!dialogWin.win || (dialogWin.win && dialogWin.win.closed)) {
            // Initialize the properties of the modal dialog object.
            dialogWin.returnFunc = returnFunc
            dialogWin.returnedValue = ""
            dialogWin.args = args
            dialogWin.url = url
            dialogWin.width = width
            dialogWin.height = height
            // Keep the name unique so Navigator doesn't overwrite an existing dialog.
            dialogWin.name = (new Date()).getSeconds().toString()
            // Assemble the window attributes and try to center the dialog.
            if (Nav4) {
					// Adjust the size to handle large fonts in Netscape
                    dialogWin.width = dialogWin.width * 1.2
					dialogWin.height = dialogWin.height * 1.2
                    dialogWin.left = window.screenX + 
                       ((window.outerWidth - dialogWin.width) / 2)
                    dialogWin.top = window.screenY + 
                       ((window.outerHeight - dialogWin.height) / 2)
                    var attr = "screenX=" + dialogWin.left + ",screenY=" + 
					   dialogWin.top + ",resizable=yes,scrollbars=yes,width=" + 
                       dialogWin.width + ",height=" + dialogWin.height
            } else {
                    dialogWin.left = (screen.width - dialogWin.width) / 2
                    dialogWin.top = (screen.height - dialogWin.height) / 2
                    var attr = "left=" + dialogWin.left + ",top=" + 
                       dialogWin.top + ",resizable=yes,scrollbars=yes,width=" + 
					   dialogWin.width + ",height=" + dialogWin.height
            }
            
            // Generate the dialog and make sure it has focus.
            dialogWin.win = window.open(dialogWin.url, dialogWin.name, attr);
			wnd = dialogWin.win;
            dialogWin.win.focus();
    } else {
            dialogWin.win.focus();
    }
}

function SmallPopup(url) {
	//CloseDlg();
	wnd = open( url,"Small","height=360,width=600,directories=no,toolbar=no,resizable=yes,menubar=no,scrollbars=yes,left=100,top=125");
	wnd.focus();
}

function MediumPopup(url) {
	//CloseDlg();
	wnd = open( url,"Medium","height=450,width=600,directories=no,toolbar=no,resizable=yes,menubar=no,scrollbars=yes,left=100,top=50");
	wnd.focus();
}

function LargePopup(url) {
	//CloseDlg();
	wnd = open( url,"Large","height=580,width=780,directories=no,toolbar=no,resizable=yes,menubar=no,scrollbars=yes,left=100,top=0");
	wnd.focus();
}

function CloseDlg() {
	// If there's another window open, close it before opening a new one.
	if (wnd && !wnd.closed) {
		wnd.close();
	}
}
//-->