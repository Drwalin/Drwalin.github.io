
function GetFromURLIsValidName( name )
{
	var index = document.URL.search( name + "=" );
	return index;
}

function GetFromURL( name, valid )
{
	
}

function GetFromURL( name )
{
	var index = GetFromURLIsValidName( name );
	if( index >= 0 )
	{
		var begin = index + name.length + 1;
		var sliced = document.URL.slice( begin );
		var end = sliced.search( "&" );
		if( end >= 0 )
		{
			return sliced.slice( 0, end );
		}
		else
		{
			return sliced;
		}
	}
	return "";
}
