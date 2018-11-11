
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
	globalSettingsArray["particlesBlur"] = document.getElementById( "settingsInputParticlesBlur" ).checked;
	SaveSettingsToCookie();
	InitSettings( false );
}

function GenerateSettingsMenu()
{
	var ret = "";
	
	ret += "<p>";
	ret += "<table class=\"SettingsTable\">";
	
		ret += "<tr>";
			ret += "<th colspan='2'>Background properties</th>";
		ret += "</tr>";
		ret += "<tr>";
			ret += "<td>Number of particles</td>";
			ret += "<td><input id='settingsInputParticlesNumber' type='number' min='0' value='" + globalSettingsArray["particles"] + "'></td>";
		ret += "</tr>";
		ret += "<tr>";
			ret += "<td>Use blur for particles</td>";
			ret += "<td><input id='settingsInputParticlesBlur' type='checkbox' " + ( globalSettingsArray["particlesBlur"] ? "checked='true'" : "" ) + "'></td>";
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
	alert( "a" );
	if( true )
	{
		var particles = GetCookie("settingsParticles");
		if( typeof globalSettingsArray["particles"] != "undefined" )
		{
	alert( "b" );
			InitAnimatedBackground( globalSettingsArray["particles"] );
		}
		else if( useLinkConfiguration && GetFromURLIsValidName("particles") >= 0 )
		{
	alert( "c" );
			InitAnimatedBackground( parseInt( GetFromURL( "particles" ), 10 ) );
		}
		else if( particles.length > 0 )
		{
	alert( "d" );
			InitAnimatedBackground( parseInt( particles, 10 ) );
		}
		else
		{
	alert( "e" );
			InitAnimatedBackground( 50 );
			globalSettingsArray["particles"] = 50;
		}
	}
	
	if( true )
	{
		var particlesBlur = GetCookie("settingsParticlesBlur");
		if( typeof globalSettingsArray["particlesBlur"] != "undefined" )
		{
		}
		else if( useLinkConfiguration && GetFromURLIsValidName("particlesBlur") >= 0 )
		{
			globalSettingsArray["particlesBlur"] = StringToBoolean( GetFromURL( "particlesBlur" ) );
		}
		else if( particlesBlur.length <= 0 )
		{
			globalSettingsArray["particlesBlur"] = true;
		}
	}
	alert( "f" );
}

function SaveSettingsToCookie()
{
	alert( globalSettingsArray["particlesBlur"].toString() );
	SetCookie( "settingsParticles", globalSettingsArray["particles"].toString(), 311 );
	SetCookie( "settingsParticlesBlur", globalSettingsArray["particlesBlur"].toString(), 311 );
}
