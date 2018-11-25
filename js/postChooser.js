
var allPosts = [];
var currentDate = new Date();

var categoryCheckBoxesList = new Array();

// date = { year:2018, month:11, day:7, hour:12 }
// file - relative path from folder "posts"
function AddPost( category, name, date, description, file )
{
	//if( date.getTime() <= currentDate.getTime() )
	{
		allPosts.push( { category:category, name:name, date:date, description:description, file:file, event:"Null" } );
		
		allPosts[allPosts.length-1].event = function()
		{
			currentPageRedrawFunction = allPosts[allPosts.length-1].event;
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
	}
}

function OnPostClickEvent( postData )
{
	ReadFile( "./posts/" + postData.file, "readMainPost" );
	document.getElementById( "pageTitle" ).innerHTML = postData.name;
	sleep( 1000 );
	hljs.initHighlighting();
}

function ObjectsByDateComparison( a, b )
{
	return ( b.date.getTime() - a.date.getTime() );
}



function MyCustomDateToString( date )
{
	return "" + date.getFullYear() + "." + date.getMonth() + "." + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
}

function GeneratePostsList()
{
	var elementsInARow = 3;
	var mainBody = document.getElementById("MainBodyDivIdToIdentify");
	
	if( mainBody.offsetWidth > 1200 )
	{
		elementsInARow = 3;
	}
	else if( mainBody.offsetWidth > 800 )
	{
		elementsInARow = 2;
	}
	else
	{
		elementsInARow = 1;
	}
		
	
	var dst = "";
	var drawed = 0;
	
	dst += "<p>";
	dst += "<table class=\"TableOfPosts\">";
	
	allPosts.forEach(
		function( value, index, array )
		{
			if( GetCategoryCheckboxState( value.category ) == true )
			{
				if( drawed%elementsInARow == 0 )
				{
					dst += "<tr>";
				}
				
				dst += "<td>";
				
				dst += "<button id=\"" + value.name + "\" class=\"PostListElement\">";
				
				dst += "<font size=5 color=#2bbb40><b>" + value.name + "</b></font>";
				dst += "<br />";
				dst += "<font size=3>" + value.description + "</font>";
				dst += "<br />";
				dst += MyCustomDateToString( value.date );
				
				dst += "</button>";
				
				dst += "</td>";
				
				if( drawed%elementsInARow == (elementsInARow-1) || index+1 == array.length )
				{
					dst += "</tr>";
				}
				
				drawed += 1;
			}
		}
	);
	
	dst += "</table>";
	dst += "</p>";
	
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

function PrintAllPosts()
{
	currentPageRedrawFunction = PrintAllPosts;
	
	document.getElementById( "pageTitle" ).innerHTML = "Drwalin posts";
	
	var dst = "<p>";
	
	dst += GenerateCategoryCheckboxes();
	
	dst += GeneratePostsList();
	
	dst += "</p>";
	
	document.getElementById( "readMainPost" ).innerHTML = dst;
	
	SetEventsForPostsAndCheckboxes();
}
