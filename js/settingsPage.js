
var globalSettingsArray = [];




function InitSettingsFromCookies()
{
	{
		var particles = GetCookie("particles");
		if( particles.length > 0 )
		{
			InitAnimatedBackground( parseInt( particles, 10 ) );
		}
	}
	
	
}

function SaveSettingsToCookie()
{
	SetCookie( "particles", parentOfAnimatedObjects.length.toString(), 311 );
}
