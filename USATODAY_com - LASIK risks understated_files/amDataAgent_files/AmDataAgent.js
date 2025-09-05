<!-- $Header: /AM/Targeting/AmDataAgent.js 5     9/29/04 11:21a Don $ -->

function GetPartnerId ()
{
	var query = window.location.search;
	var query = unescape (window.location.search);
	var nameValuePairs = query.substring (1).split (',');

	for (pairNum = 0; pairNum < nameValuePairs.length; pairNum++)
	{
		if (nameValuePairs[pairNum].indexOf ("pid=") == 0)
		{
		return nameValuePairs[pairNum].substring (4);
		}
	}
	return ("");
}

function PartnerizeSegments (tDataValue)
{
	if (tDataValue.length > 0)
	{
		var partnerId = GetPartnerId();
		var segments = tDataValue.split ("|");

		for (segmentNum = 0; segmentNum < segments.length; segmentNum++)
		{
		segments[segmentNum] = partnerId + "/" + segments[segmentNum];
		}
		return segments.join ("|");
	}
	return ("");
}

var cookies = document.cookie;

if (cookies == "" || cookies.indexOf ("Amnu") == -1)
{
	var tDataValue = "";

	if (cookies != "")
	{
		var tDataValueIndex = cookies.indexOf ("TData=", 0);

		if (tDataValueIndex != -1)
		{
			var tDataPlusList = cookies.substring (tDataValueIndex + 6).split (";");
			tDataValue = tDataPlusList[0];
		}
	}
	var elements = document.domain.split (".");
	elements.reverse();

	document.write ('<Sc' + 'ript Language="JavaScript" src='
			+ '"http://te.AudienceMatch.net/tte?Site='
			+ elements[1] + '.' + elements[0]
			+ '&TData=' + PartnerizeSegments (tDataValue)
			+ '&url=' + document.referrer
			+ '&r=' + Math.random()
			+ '"></Sc' + 'ript>');
}
