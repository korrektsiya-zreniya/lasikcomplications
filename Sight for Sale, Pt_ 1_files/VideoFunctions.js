// Global Video Params

var objVideoPopup;

var nativeWin = null;



// Writes query string for on demand video clip. If hostDomain is passed then it uses it as the players base domain

function playVideoClip(objID)

{

	if (document.getElementById)

	{	

		var objElement = document.getElementById(objID);



		var strQuery = 'ClipID1=' + objElement.getAttribute('ClipID') + '&';

		strQuery += 'h1=' + escape(objElement.getAttribute('headline')) + '&';

		strQuery += 'vt1=' + objElement.getAttribute('videoType') + '&';

		strQuery += 'at1=' + escape(objElement.getAttribute('adTag')) + '&';

		strQuery += 'd1=' + (objElement.getAttribute('duration')!=''? objElement.getAttribute('duration'): '0') + '&';

		strQuery += (objElement.getAttribute('launchPageAdTag')!='' ? 'LaunchPageAdTag=' + objElement.getAttribute('launchPageAdTag') : '');	

		strQuery += '&activePane=info'; 



		var hostDomain = objElement.getAttribute('hostDomain')!='' ? objElement.getAttribute('hostDomain'): '';

		

		objVideoPopup = selectVideoPlayer(strQuery, null, hostDomain);  

				

	} else {

		//displayVideoHelp();

		setVideoHelpPage();

	}

}



// Writes query string for on demand video clip selected from featured video buckets

function playVideoClips(formName)

{

	if (document.getElementById)

	{

		var objElement;

		var strQuery = '';

		var intCount = 1;

		var blnClipsSelected = false;

		

		var objForm = document.getElementById(formName);

		

		if (objForm.elements.length > 1)

		{

			strQuery += 'LaunchPageAdTag=' + objForm.LaunchPageAdTag.value + '&';

			

			for (var i=0; i<objForm.elements.length; i++)

			{

				objElement = objForm.elements[i];	



				if (objElement.type == 'checkbox' && objElement.checked)

				{

					strQuery += 'ClipID' + intCount + '=' + objElement.getAttribute('ClipID') + '&';  

					strQuery += 'h' + intCount + '=' + escape(objElement.getAttribute('headline')) + '&';

					strQuery += 'vt' + intCount + '=' + objElement.getAttribute('videoType') + '&';

					strQuery += 'at' + intCount + '=' + escape(objElement.getAttribute('adTag')) + '&';

					strQuery += 'd' + intCount + '=' + (objElement.getAttribute('duration')!=''? objElement.getAttribute('duration'): '0') + '&';

					intCount += 1;

					blnClipsSelected = true;

				}

			}

			

			if (blnClipsSelected)

			{		

				strQuery += 'activePane=playlist';

				objVideoPopup = selectVideoPlayer(strQuery, null, null); 

			} else {

				// if no checkbox is checked

				alert ('You must select at least one video.');

			}

		}

	} else {

		//displayVideoHelp();

		setVideoHelpPage();

	}

}



// Writes query string for live streaming video

function playLiveVideo(strLiveURI, strHeadline, strAdTag)

{

	var strQuery = "vt1=l&d1=0&ClipId1=" + escape(strLiveURI) + "&LiveURI=" + escape(strLiveURI) + "&h1=" + strHeadline + "&at1=" + escape(strAdTag) + "&LiveURITitle=" + escape(strHeadline);

	//alert(strQuery);

	objVideoPopup = selectVideoPlayer(strQuery, '', '');

}



// Launches appropriate player for video

function selectVideoPlayer(query, whichPlayer, hostDomain)

{	

	var whichPlayer = detectWMP(); 

	switch (whichPlayer)

	{



		case '6':	

			// For WMP6.4 users

			query += '&playerVersion=6';

			if (hostDomain == '' || hostDomain == null)

				var nativeURL = 'http://' + document.domain + '/global/video/WorldNowASX.asp?playerType=native&' + query;

			else 	

				var nativeURL = 'http://' + hostDomain + '/global/video/WorldNowASX.asp?playerType=native&' + query;

			

			if (!window.GeckoActiveXObject)

			{

				location.href = nativeURL; 

			} else { 

				// For Netscape 7.1 users. Avoid setting the media address to the location field

				var playerFrame = document.createElement("iframe");

				playerFrame.id = "nsPlayer";

				playerFrame.width = "0";

				playerFrame.height = "0";

				playerFrame.style.visibility = "";

				playerFrame.src = nativeURL;

				document.body.appendChild(playerFrame);

			}

			//displayVideoHelp();

			setVideoHelpPage();

			break;

		case 'null':

			// For users who do not install any plugins

			//displayVideoHelp();

			setVideoHelpPage();

			break;

		case 'mac' :

			// For WMP6.4 users

			query += '&playerVersion=7';

			if (hostDomain == '' || hostDomain == null)

				var nativeURL = 'http://' + document.domain + '/global/video/WorldNowASX.asp?playerType=native&' + query;

			else 	

				var nativeURL = 'http://' + hostDomain + '/global/video/WorldNowASX.asp?playerType=native&' + query;

			

			location = nativeURL; 

			//displayVideoHelp();

			setVideoHelpPage();

			break;

		default :

			// For WMP7 and above users

			query += '&playerVersion=' + whichPlayer; 

			var objWinPopup = getPopupPlayer(query, hostDomain); 

			return objWinPopup;

			break;	

		

	}	

	

}



function getPopupPlayer(query, hostDomain)

{

	var strHostDomain = "";

	

	if (hostDomain == '' || hostDomain == null)

		strHostDomain = "http://" + document.domain;

	else 

		strHostDomain = "http://" + hostDomain;

	

	//Reset the parent window name prior to launch popup player

	var windowName = self.name; 

	if (windowName == "" || windowName != "CONTENT") {

		windowName = "CONTENT";

		self.window.name = windowName;

	}

	

	var rnum = new Number(Math.floor(99999999 * Math.random()) + 1);

	var winWidth	= 778;

	var winHeight	= 523;

	var winTop 		= (screen.availHeight - winHeight)/2;

	var winLeft 	= (screen.availWidth - winWidth)/2;

	

	var winProps	= 'width=' + winWidth + ',height=' + winHeight + 

					  'menubar=no,location=no,resizable=no,scrollbars=no,status=no,toolbar=no,top=' + winTop + ',left=' + winLeft;

 	var strUrl		= strHostDomain + "/global/video/popup/pop_index.asp?" + query + "&rnd=" + rnum; 

	var objWinPopup = null;

	objWinPopup = window.open(strUrl, 'WNVideoPlayer', winProps);

	

	try 

	{

		if (objWinPopup!=null)

			objWinPopup.focus();

	} catch (e) 

	{

		self.blur();

	}

	return objWinPopup;





}



//Detect ActiveX Architecture on Both IE and on Gecko

//Defer to plugin architecture for other browsers

function detectWMP()

{

	var player;

	var wmp64			= "MediaPlayer.MediaPlayer.1";

	var wmp7			= "WMPlayer.OCX.7";

	var detectionResult	= "null";

	

	try 

	{	

		// browser test : check for IE(PC) 5.0 and above and NS7.1

		if ((window.ActiveXObject && navigator.userAgent.indexOf('Windows')!=-1))

		{	

			player = createActiveXObject(wmp7);

			if (player)

			{

				var version = player.versionInfo;

				detectionResult = version.substr(0,1); 

			} 

			else 

			{	

				player = createActiveXObject(wmp64);

				if (player)

				{	

					detectionResult = '6';

				} 

			}

		}

		// check for Mac, NS 4.x, 6.2, 7.01

		else if (navigator.userAgent.indexOf('Mac')!=-1 && navigator.plugins['Windows Media Plugin'])

		{	

			detectionResult = 'mac';

		} 

		else if (navigator.mimeTypes['application/x-mplayer2'])

		{

			detectionResult = '6';

		}

	} 

	catch (error)

	{

		detectionResult = '6';

	}	



	return detectionResult;

}	





function createActiveXObject(cid)

{

	var error;

	var control = null;

  

	if (window.ActiveXObject)

	{

		control = new ActiveXObject(cid);

	}

	else if (window.GeckoActiveXObject)

	{

		control = new GeckoActiveXObject(cid);

	}

   

  return control;

}



function setVideoHelpPage()

{

	if (wnvideo_getCookie('ShowWNVideoHelpPage')==null){

		displayVideoHelp();

	}

}



function wnvideo_getCookie (name)

{

	if (document.cookie.length>0)

	{

		var arg = name + "=";

		var alen = arg.length;

		var clen = document.cookie.length;

		var i = 0;



		while (i < clen)

		{

			var j = i + alen;

			if (document.cookie.substring(i, j) == arg) return wmvideo_getCookieVal (j);

			i = document.cookie.indexOf(" ", i) + 1;

			if (i == 0) break; 

		}

		return null;

	}

}



// wmvideo_getCookieVal: function to return the decoded value of a cookie

function wmvideo_getCookieVal (offset)

{

	var endstr = document.cookie.indexOf (";", offset);

	

	if (endstr == -1) endstr = document.cookie.length;

	return unescape(document.cookie.substring(offset, endstr));

}



