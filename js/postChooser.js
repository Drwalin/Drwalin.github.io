
var allPosts = new Array();
var currentDate = new Date();

// date = { year:2018, month:11, day:7, hour:12 }
// file - relative path from folder "posts"
function AddPost( name, date, description, file )
{
	//if( date.year < currentDate.getFullYear() || ( date.year == currentDate.getFullYear() && ( date.month < currentDate.getMonth() || ( date.month == currentDate.getMonth() && ( date.day < currentDate.getDate() || ( date.day == currentDate.getDate() && ( date.hour <= currentDate.getHours() ) ) ) ) ) ) )
	//{
		allPosts.push( { name:name, date:date, description:description, file:file, event:"Null" } );
		
		allPosts[allPosts.length-1].event = function()
		{
			OnPostClickEvent( allPosts[allPosts.length-1] );
		};
	//}
}

function OnPostClickEvent( postData )
{
	ReadFile( "../posts/" + postData.file, "readMainPost" );
	document.getElementById( "pageTitle" ).innerHTML = postData.name;
}

function PostsTableComparisonFunction( a, b )
{
	if( (a.date.year - b.date.year) != 0 )
	{
		return b.date.year - a.date.year
	}
	else if( (a.date.month - b.date.month) != 0 )
	{
		return b.date.month - a.date.month;
	}
	else if( (a.date.day - b.date.day) != 0 )
	{
		return b.date.day - a.date.day;
	}
	else if( (a.date.hour - b.date.hour) != 0 )
	{
		return b.date.hour - a.date.hour;
	}
	else
	{
		return a.name.localeCompare( b.name );
	}
	
	return 0;
}

function MyCustomDateToString( date )
{
	return date.year.toString() + "." + date.month.toString() + "." + date.day.toString() + ":" + date.hour.toString();
}

// prints as blocks
function PrintAllPosts()
{
	allPosts.sort( PostsTableComparisonFunction );
	
	var dst = "";
	
	allPosts.forEach(
		function( value, index, array )
		{
			dst += "<br />";
			dst += "<button id=\"" + array[index].name + "\" class=\"PostListElement\">";
			
			dst += "<font size=5 color=#2bbb40><b>" + array[index].name + "</b></font>";
			//dst += "<h3>" + array[index].name + "</h3>";
			dst += "<br />";
			dst += array[index].description;
			dst += "<br />";
			dst += MyCustomDateToString( array[index].date );
			
			dst += "</button>";
			dst += "<br />";
		}
	);
	
	document.getElementById( "readMainPost" ).innerHTML = dst;
	
	allPosts.forEach(
		function( value, index, array )
		{
			document.getElementById( array[index].name ).onclick = array[index].event;
		}
	);
}


AddPost( "Initial test post",
{ year:2018, month:11, day:7, hour:22 },
"Some random document test elements.",
"post.html" );

AddPost( "Initial test post2",
{ year:2018, month:11, day:7, hour:23 },
"Same random elements.",
"post.html" );








