
var allPosts = new Array();
var currentDate = new Date();

var categoryCheckBoxesList = new Array();

// date = { year:2018, month:11, day:7, hour:12 }
// file - relative path from folder "posts"
function AddPost( category, name, date, description, file )
{
	//if( date.year < currentDate.getFullYear() || ( date.year == currentDate.getFullYear() && ( date.month < currentDate.getMonth() || ( date.month == currentDate.getMonth() && ( date.day < currentDate.getDate() || ( date.day == currentDate.getDate() && ( date.hour <= currentDate.getHours() ) ) ) ) ) ) )
	//{
		allPosts.push( { category:category, name:name, date:date, description:description, file:file, event:"Null" } );
		
		allPosts[allPosts.length-1].event = function()
		{
			OnPostClickEvent( allPosts[allPosts.length-1] );
		};
		
		var i;
		for( i = 0; i < categoryCheckBoxesList.length; i++ )
		{
			if( categoryCheckBoxesList[i] == category )
			{
				break;
			}
		}
		
		if( i == categoryCheckBoxesList.length )
		{
			categoryCheckBoxesList.push( category );
		}
	//}
}

function OnPostClickEvent( postData )
{
	ReadFile( "./posts/" + postData.file, "readMainPost" );
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


function GetCategoryIdString( name )
{
	return "Checkbox " + name;
}

function GetCategoryCheckboxState( name )
{
	var checkboxObject = document.getElementById( GetCategoryIdString( name ) );
	if( checkboxObject == null )
	{
		return true;
	}
	return checkboxObject.checked;
}

function SetCategoryCheckboxState( name, value )
{
	var checkboxObject = document.getElementById( GetCategoryIdString( name ) );
	if( checkboxObject == null )
	{
		alert( "dadad" );
	}
	else
	{
		checkboxObject.checked = value;
	}
}

function GetCheckboxState( name )
{
	var currentCheckbox = document.getElementById( GetCategoryIdString( name ) );
	if( currentCheckbox != null )
	{
		if( GetCategoryCheckboxState( name ) )
		{
			return " checked";
		}
		else
		{
			return "";
		}
	}
	return " checked";
}

function MyCustomDateToString( date )
{
	return date.year.toString() + "." + date.month.toString() + "." + date.day.toString() + ":" + date.hour.toString();
}

function GenerateCategoryCheckboxes()
{
	var dst = "";
	
	categoryCheckBoxesList.forEach(
		function( value, index, array )
		{
			dst += "<input type=\"checkbox\" id=\"" + GetCategoryIdString( value ) + "\" " + GetCheckboxState( value ) + ">" + GetCategoryIdString( value );
		}
	);
	
	return dst;
}

function MarkAllCategoryCheckboxes()
{
	categoryCheckBoxesList.forEach(
		function( value, index, array )
		{
			SetCategoryCheckboxState( value, true );
		}
	);
}

function UnmarkAllCategoryCheckboxes()
{
	categoryCheckBoxesList.forEach(
		function( value, index, array )
		{
			SetCategoryCheckboxState( value, false );
		}
	);
}

// prints as blocks
function PrintAllPosts()
{
	document.getElementById( "pageTitle" ).innerHTML = "Drwalin posts";

	allPosts.sort( PostsTableComparisonFunction );
	
	var dst = "";
	
	dst += GenerateCategoryCheckboxes();
	
	dst += "<br />";
	dst += "<button class=\"PostListElement\" onclick=\"PrintAllPosts()\">Submit new filter</button>      ";
	dst += "<button class=\"PostListElement\" onclick=\"MarkAllCategoryCheckboxes()\">Mark all</button>      ";
	dst += "<button class=\"PostListElement\" onclick=\"UnmarkAllCategoryCheckboxes()\">Unmark all</button>      ";
	dst += "<br />";
	
	allPosts.forEach(
		function( value, index, array )
		{
			if( GetCategoryCheckboxState( value.category ) == true )
			{
				dst += "<br />";
				dst += "<button onclick=\"" + array[index].event + "\" id=\"" + array[index].name + "\" class=\"PostListElement\">";
				
				dst += "<font size=5 color=#2bbb40><b>" + array[index].name + "</b></font>";
				dst += "<br />";
				dst += "<font size=3>" + array[index].description + "</font>";
				dst += "<br />";
				dst += MyCustomDateToString( array[index].date );
				
				dst += "</button>";
				dst += "<br />";
			}
		}
	);
	
	document.getElementById( "readMainPost" ).innerHTML = dst;
}


AddPost( "Test Category",
"Initial test post",
{ year:2018, month:11, day:7, hour:22 },
"Some random document test elements.",
"post.html" );

AddPost( "Test Category",
"Initial test post 2",
{ year:2018, month:11, day:7, hour:23 },
"Same random elements.",
"post.html" );

AddPost( "Test Category 2",
"Initial test post 3",
{ year:2018, month:11, day:8, hour:13 },
"Same more random elements.",
"post.html" );








