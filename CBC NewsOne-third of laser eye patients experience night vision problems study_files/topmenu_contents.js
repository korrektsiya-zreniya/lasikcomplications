function LoadMenus() {

  if (window.fw_menu_0) return;

  window.fw_menu_0 = new Menu("root",145,17,"Verdana, Arial, Helvetica, sans-serif",10,"#cccccc","#ffffff","#000000","#666666");

	  fw_menu_0.addMenuItem("CBC Radio One","location='http://www.cbc.ca/programguide/schedule/dailySchedule.jsp?network=CBC%20Radio%20One'");

	  fw_menu_0.addMenuItem("CBC Radio Two","location='http://www.cbc.ca/programguide/schedule/dailySchedule.jsp?network=CBC%20Radio%20Two'");

	  fw_menu_0.addMenuItem("CBC Radio 3","location='http://www.cbcradio3.com'");

          fw_menu_0.addMenuItem("RCI","location='http://www.rcinet.ca'");

	  fw_menu_0.addMenuItem("CBC Programs A-Z","location='http://www.cbc.ca/programguide/program/programAToZ.jsp'");

          fw_menu_0.addMenuItem("Radio Guide","location='http://www.cbc.ca/programguide/radio/'");

          fw_menu_0.addMenuItem("Listen to CBC Radio","location='http://www.cbc.ca/audio.html'");

	  	fw_menu_0.hideOnMouseOut=true;



  window.fw_menu_1 = new Menu("root",160,17,"Verdana, Arial, Helvetica, sans-serif",10,"","","","");

	  fw_menu_1.addMenuItem("CBC Television","location='http://www.cbc.ca/programguide/schedule/dailySchedule.jsp?network=CBC%20Television'");

	  fw_menu_1.addMenuItem("CBC Newsworld","location='http://www.cbc.ca/programguide/schedule/dailySchedule.jsp?network=CBC%20Newsworld'");

          fw_menu_1.addMenuItem("CBC Country Canada","location='http://cbccountrycanada.ca/'");

	  fw_menu_1.addMenuItem("CBC Programs A-Z","location='http://www.cbc.ca/programguide/program/programAToZ.jsp'");
          fw_menu_1.addMenuItem("CBC on Demand","location='http://www.cbc.ca/cbcondemand'");

	  	fw_menu_1.hideOnMouseOut=true;



  window.fw_menu_2 = new Menu("root",145,17,"Verdana, Arial, Helvetica, sans-serif",10,"","","","");

	  fw_menu_2.addMenuItem("Local CBC Sites","location='http://www.cbc.ca/local/'");

	  fw_menu_2.addMenuItem("Local Radio Live","location='#'");

	  fw_menu_2.addMenuItem("Local News","location='#'");

	  fw_menu_2.addMenuItem("Local Weather","location='#'");

	  	fw_menu_2.hideOnMouseOut=true;



  fw_menu_2.writeMenus();

}
