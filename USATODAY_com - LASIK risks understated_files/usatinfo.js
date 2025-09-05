//<script language="JavaScript">
/*
	Author:        Michael J. Croghan
	Created:       2002-07-02
	Last Modified:	2002-07-02

	Description:
		Sets the USATINFO cookie

	Modification log:
*/

function usatinfo(){
   var rmid;   // value of the "RMID" cookie

   rmid = usat.cookie.get("RMID");
   if (rmid != null) {
      if (usat.cookie.get("USATINFO") == null) {
         usat.cookie.set("USATINFO", "UID=" + rmid, new Date(2025, 11, 31),
                         "/", ".usatoday.com");
      } //if
      if (usat.cookie.get("UID") == null) {
         usat.cookie.set("UID", rmid, new Date(2025, 11, 31),
                         "/", ".usatoday.com");
      } //if
   } //if
}//usatinfo

usatinfo();
