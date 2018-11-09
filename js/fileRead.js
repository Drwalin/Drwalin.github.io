
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
