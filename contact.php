<?php
session_start();
if($_SESSION['message']) {
	$display_message = $_SESSION['message'];
	$_SESSION['message'] = '';
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<link rel="stylesheet" href="css/reset.css" type="text/css" media="screen">
  <link rel="stylesheet" href="css/grid_24.css" type="text/css" media="screen">
	<link rel="stylesheet" href="css/layout.css" type="text/css" media="screen">
	<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
  <script type="text/javascript" src="js/script.js"></script>
	<script type="text/javascript" src="js/coin-slider.min.js"></script>
	<!--[if lt IE 7]>
  		<div style=' clear: both; text-align:center; position: relative;'> <a href="http://www.microsoft.com/windows/internet-explorer/default.aspx?ocid=ie6_countdown_bannercode"><img src="http://www.theie6countdown.com/images/upgrade.jpg" border="0" alt="" /></a></div>  
 	<![endif]-->
    <!--[if lt IE 9]>
   		<script type="text/javascript" src="js/html5.js"></script>
  		<link rel="stylesheet" href="css/ie.css" type="text/css" media="all"> 
	<![endif]-->
	<title>Paymentrix | Home</title>
</head>
<body>
<div class="bg">
    <!--==============================header=================================-->
    <header>
        <div class="header-bg"></div>
        <div class="links">
            <div class="main">Toll-Free : <span>+1 877 292 0521</span></div>
        </div>
        <div class="main">
            <div class="navi">
                <nav>
                    <ul class="sf-menu">
                        <li><a href="index.html">home</a></li>
                        <li><a href="pci.html">PCI</a></li>
                        <li><a href="rates.html">Rates</a></li>
                        <li><a href="partners.html">Partners</a></li>
                        <li class="current"><a href="contact.php">Contacts</a></li>
                    </ul>
                </nav>
                <a class="logo" href="index.html">Mirage</a>
                <div class="clear"></div>
            </div>
    	</div>
    </header>
    <!--==============================content================================-->
    <section id="content">
        <div class="container_24">
            <article class="grid_8 suffix_1">
                <h3>How to Find Us</h3>
                <dl class="contacts">
                    <dd><span>Toll-Free:</span> +1 877 292 0521</dd>
                    <dd><span>Telephone:</span> +1 208 495 3284 ext. 100</dd>
                    <dd><span>FAX:</span> +1 866 548 0686</dd>
                    <dd><span>E-mail:</span> <a class="" href="mailto:clayphillipp@gmail.com">info@paymentrix.com</a></dd>

                </dl>
            </article>
            <article class="grid_15">
                <h3>Contact Form</h3>
                <div id="contact_form" class="p2">
                    <form method="post" action="form.php" id="contact-form">
                        <fieldset>
                            <input type="hidden" name="owner_email" id="owner_email" value="admin@demolink.org" />

                            <input type="hidden" name="serverProcessorType" id="serverProcessorType" value="php" />
                            <input type="hidden" name="smtpMailServer" id="smtpMailServer" value="localhost" />
                            <input type="hidden" name="stripHTML" id="stripHTML" value="true" />
                            <div class="field">
                                <input name="name" id="name" type="text" value="Name:" class="text-input" onFocus="if(this.value=='Name:'){this.value=''}" onBlur="if(this.value==''){this.value='Name:'}" />
                                <label class="error" for="name" id="name_error">*This field is required.</label>
                                <label class="error" for="name" id="name_error2">*This is not a valid name.</label>
                            </div>

                            <div class="field">
                                <input name="email" id="email" type="text" value="E-mail:" class="text-input" onFocus="if(this.value=='E-mail:'){this.value=''}" onBlur="if(this.value==''){this.value='E-mail:'}" />
                                <label class="error" for="email" id="email_error">*This field is required.</label>
                                <label class="error" for="email" id="email_error2">*This is not a valid email address.</label>
                            </div>
                            <div class="field">
                                <input name="phone" id="phone" type="text" value="Phone:" class="text-input" onFocus="if(this.value=='Phone:'){this.value=''}" onBlur="if(this.value==''){this.value='Phone:'}"/>
                                <label class="error" for="phone" id="phone_error">*This field is required.</label>

                                <label class="error" for="phone" id="phone_error2">*This is not a valid phone number.</label>
                            </div>                        
                            <div class="area">
                                <textarea name="message" id="message" class="text-input" onFocus="if(this.value=='Message:'){this.value=''}" onBlur="if(this.value==''){this.value='Message:'}">Message:</textarea>
                                <label class="error" for="message" id="message_error">*This field is required.</label>
                                <label class="error" for="message" id="message_error2">*The message is too short.</label>
                            </div>                                
                            
							<?php
								if($display_message) {
									echo "<p name='bottom' class='thank-you'>" . $display_message . "</p>";
								}
							?>
								<div class="buttons-wrapper"><input type="submit" class="button" value="Send Message" /></div>					
                        </fieldset>
                    </form>
                </div>
            </article>
        </div>
    </section>
</div>
<!--==============================aside=================================-->
<aside>
  <div class="aside"><div></div></div>
    <div class="main"></div>
    <div class="container_24 extra-wrap img-indent-bot">
    	<article class="grid_4">
        	<h6>Our Company</h6>
            <ul>
            	<li><a href="index.html">Home</a></li>
            	<li><a href="pci.html">PCI</a></li>
            	<li><a href="rates.html">Rates</a></li>
            	<li><a href="partners.html">Partners</a></li>
				<li><a href="contact.php">Contact</a></li>
            </ul>
        </article>
    </div>
</aside>
<div class="main">
<!--==============================footer=================================-->
	<footer>
		Mirage &nbsp;&copy; 2011 &nbsp; &nbsp;| &nbsp; &nbsp;<a href="index-6.html">Privacy Policy</a>
	</footer>
</div>
</body>
</html>