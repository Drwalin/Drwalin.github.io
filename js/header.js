
function LoadMainPage()
{
	ReadFile( "./pages/main.html", "readMainPost" );
	document.getElementById( "pageTitle" ).innerHTML = "Drwalin main page";
}

function LoadContactPage()
{
	ReadFile( "./pages/contact.html", "readMainPost" );
	document.getElementById( "pageTitle" ).innerHTML = "Drwalin contact";
}

function LoadAboutMePage()
{
	ReadFile( "./pages/aboutme.html", "readMainPost" );
	document.getElementById( "pageTitle" ).innerHTML = "About Drwalin";
}

function LoadMyProjectsPage()
{
	ReadFile( "./pages/projects.html", "readMainPost" );
	document.getElementById( "pageTitle" ).innerHTML = "Drwalin's projects";
}

document.getElementById( "headerGenerator" ).innerHTML = "\
<div id=\"container\">\
	<div class=\"mainReferencesLeft\">\
		<button onclick=\"LoadMainPage()\">Main Page</a>\
	</div>\
	<div class=\"mainReferencesMiddle\">\
	</div>\
	<div class=\"mainReferencesRight\">\
		<button onclick=\"LoadContactPage()\">Contact me</a>\
		<button onclick=\"PrintAllPosts()\">Posts list</a>\
		<button onclick=\"LoadMyProjectsPage()\">My projects</a>\
	</div>\
</div>";
// href=\"https://DrwalinPCF.github.io/postsList.html\"

document.getElementById( "footerGenerator" ).innerHTML = "\
<div id=\"container\">\
	<div class=\"footerLeft\">\
		<a href=\"https://facebook.com\">Facebook fanpage</a>\
		<a href=\"https://twitter.com\">Twitter  something</a>\
		<a href=\"https://github.com/DrwalinPCF\">My github site</a>\
	</div>\
	<div class=\"footerRight\">\
		<a>EMail: <i><u><font color=\"#2020d0\">########@gmail.com</font></u></i><a>\
	</div>\
</div>";
