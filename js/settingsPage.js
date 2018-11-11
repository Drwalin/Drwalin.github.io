
var globalSettingsArray = [];

var currentPageRedrawFunction = LoadMainPage;

/*
	all settings:
		particles - amount of background particles
		particlesBlur -true or false to blurr particles
*/

function UseAndSaveSettings()
{
	globalSettingsArray["particles"] = Math.max( parseInt( document.getElementById( "settingsInputParticlesNumber" ).value, 10 ), 0 );
	SaveSettingsToCookie();
	InitSettings( false );
}

function GenerateSettingsMenu()
{
	var ret = "";
	
	ret += "<p>";
	ret += "<table class=\"SettingsTable\">";
	
	ret += "<tr'>";
	ret += "<td>";
	ret += "Number of particles ";
	ret += "</td>";
	ret += "<td>";
	ret += "<input id='settingsInputParticlesNumber' type='number' min='0' value='" + globalSettingsArray["particles"] + "'>";
	ret += "</td>";
	ret += "</tr>";
	
	ret += "</table>";
	
	ret += "</p>";
	
	ret += "<button onclick='UseAndSaveSettings()' class='SettingsButton'>Submit changes</buton>";
	
	return ret;
}

function DrawSettingsPage()
{
	currentPageRedrawFunction = DrawSettingsPage;
	
	document.getElementById( "pageTitle" ).innerHTML = "Settings";
	
	var dst = "";
	
	dst += GenerateSettingsMenu();
	
	document.getElementById( "readMainPost" ).innerHTML = dst;
}

function InitSettings( useLinkConfiguration )
{
	if( true )
	{
		var particles = GetCookie("settingsParticles");
		if( typeof globalSettingsArray["particles"] != "undefined" )
		{
			InitAnimatedBackground( globalSettingsArray["particles"] );
		}
		else if( useLinkConfiguration && GetFromURLIsValidName("particles") >= 0 )
		{
			InitAnimatedBackground( parseInt( GetFromURL( "particles" ), 10 ) );
		}
		else if( particles.length > 0 )
		{
			InitAnimatedBackground( parseInt( particles, 10 ) );
		}
		else
		{
			InitAnimatedBackground( 50 );
			globalSettingsArray["particles"] = 50;
		}
	}
	
	if( true )
	{
		var particlesBlur = GetCookie("settingsParticlesBlur");
		if( typeof globalSettingsArray["particlesBlur"] != "undefined" )
		{
			particlesBlur = globalSettingsArray["particlesBlur"].toString();
		}
		else if( useLinkConfiguration && GetFromURLIsValidName("particlesBlur") >= 0 )
		{
			particlesBlur = GetFromURL( "particlesBlur" );
		}
		else if( particlesBlur.length <= 0 )
		{
			particlesBlur = "1";
		}
		
		if( particlesBlur == "0" || particlesBlur.toLowerCase() == "false" )
		{
			globalSettingsArray["particlesBlur"] = false;
		}
		else
		{
			globalSettingsArray["particlesBlur"] = true;
		}
	}
}

function SaveSettingsToCookie()
{
	SetCookie( "settingsParticles", globalSettingsArray["particles"].toString(), 311 );
	SetCookie( "settingsParticlesBlur", globalSettingsArray["particlesBlur"].toString(), 311 );
}
