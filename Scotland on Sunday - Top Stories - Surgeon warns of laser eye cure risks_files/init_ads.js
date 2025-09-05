var az_p=location.protocol=='https:'?'https:':'http:';
var az_r=Math.floor(Math.random()*99999999);
if (!document.phpAds_used) document.phpAds_used = ',';
function az_adjs(z,n)
{
  if (z>-1) {
    var az="<"+"script type='text/javascript' src='"+az_p+"//awrz.net/adjs.php?n="+n+"&amp;what=zone:"+z;
    az+="&amp;source={derive}&amp;exclude="+document.phpAds_used+"&amp;r="+az_r;
    if (window.location) az+="&amp;loc="+escape(window.location);
    if (document.referrer) az+="&amp;referer="+escape(document.referrer);
    az+="'><"+"/script>";
    document.write(az);
  }
}