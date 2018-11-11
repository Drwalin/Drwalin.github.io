
function ReadFile( file, destinyElementId )
{
	const Http = new XMLHttpRequest();
	const url=file;
	Http.open( "GET", url );
	Http.onreadystatechange = function()
	{
		document.getElementById( destinyElementId ).innerHTML = Http.responseText;
	}
	Http.send();
}

function ReadFileCustomFinish( file, finishEvent )
{
	const Http = new XMLHttpRequest();
	const url=file;
	Http.open( "GET", url );
	Http.onreadystatechange = function()
	{
		finishEvent( Http.responseText );
	}
	Http.send();
}
