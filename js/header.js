
function LoadMainPage()
{
	currentPageRedrawFunction = LoadMainPage;
	ReadFile( "./pages/main.html", "readMainPost" );
	document.getElementById( "pageTitle" ).innerHTML = "Drwalin main page";
}

function LoadContactPage()
{
	currentPageRedrawFunction = LoadContactPage;
	ReadFile( "./pages/contact.html", "readMainPost" );
	document.getElementById( "pageTitle" ).innerHTML = "Drwalin contact";
}

function LoadAboutMePage()
{
	currentPageRedrawFunction = LoadAboutMePage;
	ReadFile( "./pages/aboutme.html", "readMainPost" );
	document.getElementById( "pageTitle" ).innerHTML = "About Drwalin";
}

function LoadMyProjectsPage()
{
	currentPageRedrawFunction = LoadMyProjectsPage;
	ReadFile( "./pages/projects.html", "readMainPost" );
	document.getElementById( "pageTitle" ).innerHTML = "Drwalin's projects";
}
