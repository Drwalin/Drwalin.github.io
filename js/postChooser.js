
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
			if( categoryCheckBoxesList[i].category == category )
			{
				break;
			}
		}
		
		if( i == categoryCheckBoxesList.length )
		{
			categoryCheckBoxesList.push( { category:category, value:true } );
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



function MyCustomDateToString( date )
{
	return date.year.toString() + "." + date.month.toString() + "." + date.day.toString() + ":" + date.hour.toString();
}


function GetCategoryIdString( name )
{
	return "CheckboxButton " + name;
}

function GetClassNameForCheckboxButtonFromState( value )
{
	if( value )
	{
		return "PostListStatusButtonCheckboxOff";
	}
	return "PostListStatusButtonCheckboxOn";
}

function GetCategoryCheckboxState( name )
{
	var ret = true;
	categoryCheckBoxesList.forEach(
		function( value, index, array )
		{
			if( value.category == name )
			{
				ret = value.value;
			}
		}
	);
	return ret;
}

function SetCategoryCheckboxState( name, srcValue )
{
	categoryCheckBoxesList.forEach(
		function( value, index, array )
		{
			if( value.category == name )
			{
				value.value = srcValue;
				document.getElementById( "Square" + GetCategoryIdString( name ) ).className = GetClassNameForCheckboxButtonFromState( srcValue );
				return;
			}
		}
	);
}

function MarkAllCategoryCheckboxes()
{
	categoryCheckBoxesList.forEach(
		function( value, index, array )
		{
			value.value = true;
			document.getElementById( "Square" + GetCategoryIdString( value.category ) ).className = GetClassNameForCheckboxButtonFromState( true );
		}
	);
}

function UnmarkAllCategoryCheckboxes()
{
	categoryCheckBoxesList.forEach(
		function( value, index, array )
		{
			value.value = false;
			document.getElementById( "Square" + GetCategoryIdString( value.category ) ).className = GetClassNameForCheckboxButtonFromState( false );
		}
	);
}

function GenerateCategoryCheckboxes()
{
	var dst = "";
	
	categoryCheckBoxesList.forEach(
		function( value, index, array )
		{
			dst += "<button id=\"" + GetCategoryIdString( value.category ) + "\" class=\"EmptyButton\" >";
			dst += "<div id=\"container\">";
			dst += "<div id=\"Square" + GetCategoryIdString( value.category ) + "\" class=\"" + GetClassNameForCheckboxButtonFromState( value.value ) + "\"></div>";
			dst += "<div class=\"Text\">";
			dst += value.category;
			dst += "</div>";
			dst += "</div>";
			
			dst += "</button>";
		}
	);
	
	dst += "<br />";
	dst += "<button class=\"PostListStatusButton\" onclick=\"PrintAllPosts()\">Submit new filter</button>      ";
	dst += "<button class=\"PostListStatusButton\" onclick=\"MarkAllCategoryCheckboxes()\">Mark all</button>      ";
	dst += "<button class=\"PostListStatusButton\" onclick=\"UnmarkAllCategoryCheckboxes()\">Unmark all</button>      ";
	dst += "<br />";
	
	return dst;
}

function GeneratePostsList()
{
	var dst = "";
	var drawed = 0;
	
	allPosts.forEach(
		function( value, index, array )
		{
			if( GetCategoryCheckboxState( value.category ) == true )
			{
				if( drawed%3 == 0 )
				{
					dst += "<div class=\"PostsTableRow\">";
				}
				
				dst += "<button id=\"" + value.name + "\" class=\"PostListElement\">";
				
				dst += "<font size=5 color=#2bbb40><b>" + value.name + "</b></font>";
				dst += "<br />";
				dst += "<font size=3>" + value.description + "</font>";
				dst += "<br />";
				dst += MyCustomDateToString( value.date );
				
				dst += "</button>";
				
				if( drawed%3 == 2 || index+1 == array.length )
				{
					dst += "</div>";
				}
				
				drawed += 1;
			}
		}
	);
	
	return dst;
}

function SetEventsForPostsAndCheckboxes()
{
	categoryCheckBoxesList.forEach(
		function( value, index, array )
		{
			var element = document.getElementById( GetCategoryIdString( value.category ) );
			element.onclick = function()
			{
				SetCategoryCheckboxState( value.category, !GetCategoryCheckboxState( value.category ) );
			};
		}
	);
	
	allPosts.forEach(
		function( value, index, array )
		{
			if( GetCategoryCheckboxState( value.category ) == true )
			{
				document.getElementById( value.name ).onclick = value.event;
			}
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
	
	dst += GeneratePostsList();
	
	document.getElementById( "readMainPost" ).innerHTML = dst;
	
	SetEventsForPostsAndCheckboxes();
}
