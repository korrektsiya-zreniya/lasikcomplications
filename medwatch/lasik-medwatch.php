<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-21746595-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-21746595-1');
</script>

<title>LASIK Complications, Risks - Top 10 Reasons Not to Have LASIK</title>

<meta name="description" content="LASIK complications, side effects, risks.  Problems of LASIK eye surgery. Post-LASIK dry eyes and poor night vision. PRK complications, PRK haze. Risks that LASIK surgeons don't disclose to prospective patients. LASIK disasters, LASIK complaints, LASIK dissatisfaction, refractive surgery in the military. ">

<meta name="keywords" content="LASIK, risks, complications, laser, eye, surgery, disaster, problems, dry, pupils, night, vision, warning, satisfaction, dissatisfaction, iLASIK, IntraLASIK, IntraLase, bladeless, all-laser, blade-free, complaint, patients, flap, safety, cornea, refractive, medical, malpractice, lawsuits, flap, eyes, surgeons, side effects, harmful, long term, PRK haze, military ">

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"></head>

<link type="text/css" rel="stylesheet" title="B1" href="../LD.css">
        <link rel="stylesheet" type="text/css" href="styles/pagination.css" media="screen" />
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script> 
        <script type="text/javascript">
            $(document).ready(function(){
                function loading_show(){
                    $('#loading').html("<img src='images/loading.gif'/>").fadeIn('fast');
                }
                function loading_hide(){
                    $('#loading').fadeOut('fast');
                }                
                function loadData(page){
                    loading_show();                    
                    $.ajax
                    ({
                        type: "POST",
                        url: "load_data.php",
                        data: "page="+page,
                        success: function(msg)
                        {
                            $("#datacontainer").ajaxComplete(function(event, request, settings)
                            {
                                loading_hide();
                                $("#datacontainer").html(msg);
                            });
                        }
                    });
                }
                loadData(1);  // For first time page load default results
                $('#datacontainer .pagination li.active').live('click',function(){
                    var page = $(this).attr('p');
                    loadData(page);                    
                });           
                $('#go_btn').live('click',function(){
                    var page = parseInt($('.goto').val());
                    var no_of_pages = parseInt($('.total').attr('a'));
                    if(page != 0 && page <= no_of_pages){
                        loadData(page);
                    }else{
                        alert('Enter a PAGE between 1 and '+no_of_pages);
                        $('.goto').val("").focus();
                        return false;
                    }
                    
                });
            });
        </script>
		<script type="text/javascript">

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-21746595-1']);
		  _gaq.push(['_trackPageview']);

		  (function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();

		</script>
    </head>
    <body> 
	<DIV id="colorborder">
		<div id="container">
			<div id="banner">
				<p style="float:right"> <br>
				Font:
				<select name="SS" id="SS" onChange="setActiveStyleSheet(this.options[this.selectedIndex].value); return false;">
				<option value="B1">Normal
				<option value="B4">Large
				<option value="B5">Larger
				</select>
				</p>
			</div>
			<div id="menu"> <a id="active" href="../index.htm">Home</a> <a href="../letters.htm">Letters</a> <a href="../news.htm">News</a> <a href="http://lasiknewswire.com/" target="_blank" onClick="alert('You are leaving the LASIKComplications.com site. Thank you for visiting. You will now be going to LasikNewsWire.com.')">Blog</a> <a href="../risks.htm">Complications</a> <a href="../simulations.htm">Images </a> <a href="../fda.htm">FDA</a> <a href="../lawsuits.htm">Legal</a> <a href="../largepupils.htm">Pupil Size</a> <a href="../dryeye.htm">Dry Eye</a> <a href="../marketing.htm">Marketing</a> <a href="../contactus.php">Contact</a> <a href="../Archives.htm">Archives</a> <a href="../links.htm" style="border-right:0px">Links </a> </div>
			<div id="loading"></div>
			<!-- LEFT COLUMN CONTENT STARTS HERE ::::::::::::::::::::::::::::::::::::::::::::-->
			<div id="datacontainer">  
				<div class="data"></div>
				<div class="pagination"></div>			
			</div>
		</div>
	</div>
    </body>
</html>
