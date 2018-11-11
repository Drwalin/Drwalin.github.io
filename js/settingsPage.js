
var globalSettingsArray = [];



/*
	all settings:
		particles - amount of background particles
*/

function InitSettings()
{
	if( true )
	{
		var particles = GetCookie("settingsParticles");
		if( GetFromURLIsValidName("particles") >= 0 )
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
		}
	}
	
	if( true )
	{
		var particlesBlur = GetCookie("settingsParticlesBlur");
		if( GetFromURLIsValidName("particlesBlur") >= 0 )
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
	SetCookie( "settingsParticles", animatedBackgroundObjects.length.toString(), 311 );
	SetCookie( "settingsParticlesBlur", globalSettingsArray["particlesBlur"].toString(), 311 );
}
