
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
	dst += "<p>";
	
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
	dst += "</p>";
	
	return dst;
}
