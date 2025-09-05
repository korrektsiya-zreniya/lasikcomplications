var dCurrent=new Date();

var m_objImages=new Image;

var m_URL = g_SDCURL;

m_URL+="?WT.sp="+escape(g_AffName).toUpperCase();

 

if (g_ContType!=null) {

                        m_URL+="&dcsqry="+escape(g_ContType)+"="+g_ContID;

}

if (g_AdTag!=""){

                        m_URL+="&WT.cg_n="+escape(g_AdTag);

}

 

 

m_URL+="&WT.ti="+escape(document.title);

m_URL+="&dcsuri="+escape(window.location.pathname);

m_URL+="&dcssip="+escape(g_BaseURL).toLowerCase();

m_URL+="&dcsdat="+escape(dCurrent.getTime());

 

if ((window.document.referrer!="")&&(window.document.referrer!="-")){

            if (!(navigator.appName=="Microsoft Internet Explorer"&&parseInt(navigator.appVersion)<4)){

                        m_URL+="&dcsref="+escape(window.document.referrer);

            }

}

 

if (m_URL.length>2048&&navigator.userAgent.indexOf('MSIE')>=0){



            m_URL=m_URL.substring(0,2040)+"&WT.tu=1";

}

 

if (document.images){

            m_objImages.src=m_URL;            

}

else{

            document.write('<IMG BORDER="0" NAME="DCSIMG" WIDTH="1" HEIGHT="1" SRC="'+m_URL+'">');

}