
function StringToBoolean( str )
{
	if( str == "0" || str.toLowerCase() == "false" )
	{
		return false;
	}
	else
	{
		return true;
	}
	return false;
}

function sleep( ms )
{
	await new Promise( resolve => setTimeout( resolve, ms ) );
}

