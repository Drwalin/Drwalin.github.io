
function CodeString( string )
{
	var ret = "";
	var i;
	for( i = 0; i < string.length; i++ )
	{
		if( string.charAt( i ) == ';' )
		{
			ret += "ss";
		}
		else if( string.charAt( i ) == '\\' )
		{
			ret += "sb";
		}
		else if( string.charAt( i ) == 's' )
		{
			ret += "sS";
		}
		else if( string.charAt( i ) == '%' )
		{
			ret += "sp";
		}
		else if( string.charAt( i ) == ' ' )
		{
			ret += "sB";
		}
		else
		{
			ret += string.charAt( i );
		}
	}
	return ret;
}

function DecodeString( string )
{
	var i;
	var ret = "";
	for( i = 0; i < string.length; i++ )
	{
		if( string.charAt( i ) == 's' )
		{
			if( i+1 < string.length )
			{
				i++;
				if( string.charAt( i ) == 's' )
				{
					ret += ";";
				}
				else if( string.charAt( i ) == 'b' )
				{
					ret += "\\";
				}
				else if( string.charAt( i ) == 'p' )
				{
					ret += "%";
				}
				else if( string.charAt( i ) == 'B' )
				{
					ret += " ";
				}
				else
				{
					ret += "s";
				}
			}
		}
		else
		{
			ret += string.charAt( i );
		}
	}
	return ret;
}

function SetCookie( cname, srccvalue, exdays )
{
	var cvalue = CodeString( srccvalue );
    var d = new Date();
    d.setTime( d.getTime() + ( exdays * 24*60*60*1000 ) );
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function GetCookie( cname )
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent( document.cookie );
    var ca = decodedCookie.split( ';' );
    for( var i = 0; i < ca.length; i++ )
	{
        var c = ca[i];
        while( c.charAt(0) == ' ' )
		{
            c = c.substring(1);
        }
        if( c.indexOf(name) == 0 )
		{
			var ret = DecodeString( c.substring( name.length, c.length ) );
			return ret;
        }
    }
    return "";
}
