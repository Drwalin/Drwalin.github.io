
var globalSettingsArray = [];




function InitSettings()
{
	if( true )
	{
		var particles = GetCookie("particles");
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
	
	alert( "Settings inited" );
}

function SaveSettingsToCookie()
{
	SetCookie( "particles", animatedBackgroundObjects.length.toString(), 311 );
}
