
var animatedBackgroundObjects = new Array();
var parentOfAnimatedObjects = document.getElementById( "MainBodyDivIdToIdentify" );

function RandomizeObject( objectId )
{
	//var parent = document.getElementById( "MainBodyDivIdToIdentify" );
	if( parentOfAnimatedObjects != null )
	{
		var width = parentOfAnimatedObjects.offsetWidth;
		var height = parentOfAnimatedObjects.offsetHeight;
		animatedBackgroundObjects[objectId].y = Math.floor( ( Math.random() * ( height * 2 / 3 ) ) - 150 );
		animatedBackgroundObjects[objectId].x = Math.floor( ( Math.random() * ( width - 60 ) ) + 20 );
		animatedBackgroundObjects[objectId].string = "";
	}
	else
	{
		alert( "Can not find element with id: MainBodyDivIdToIdentify" );
	}
}

function MakeRandomAnimatedBackgroundObject( objectId )
{
	animatedBackgroundObjects[objectId] = { x:0, y:0, string:"", length:Math.floor( ( Math.random() * 15 ) + 10 ), id:objectId, screenObject:null };
	RandomizeObject( objectId );
}

var allPossibleCharactersForBackgroundAnimation = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()+-=[]\{}|;:/<>? ";
function RandomSign()
{
	//return "G";
	return allPossibleCharactersForBackgroundAnimation.charAt( Math.floor( Math.random() * allPossibleCharactersForBackgroundAnimation.length ) );
}

function GetNameOfAnimatedObject( numId )
{
	return "AnimatedObjectId" + numId;
}

function UpdateAnimatedObjects( objectId, animationId, parent )
{
	//var screenObject = animatedBackgroundObjects[objectId].screenObject;
	var screenObject = document.getElementById( GetNameOfAnimatedObject( objectId ) );
	//var parent = document.getElementById( "MainBodyDivIdToIdentify" );
	if( parent != null && screenObject != null )
	{
		var width = parent.offsetWidth;
		var height = parent.offsetHeight;
		
		if( animatedBackgroundObjects[objectId].y > height )
		{
			RandomizeObject( objectId );
		}
		else
		{
			if( animatedBackgroundObjects[objectId].string.length >= animatedBackgroundObjects[objectId].length )
			{
				animatedBackgroundObjects[objectId].y += 25;
				animatedBackgroundObjects[objectId].string = animatedBackgroundObjects[objectId].string.slice( 1 );
			}
			animatedBackgroundObjects[objectId].string += RandomSign();
		}
		
		
		screenObject.style.top = animatedBackgroundObjects[objectId].y.toString() + "px";
		screenObject.style.left = animatedBackgroundObjects[objectId].x.toString() + "px";
		
		var dstHtml = "<b>";
		
		var string = animatedBackgroundObjects[objectId].string;
		
		var j = 0;
		for( j = 0; j < string.length; j++ )
		{
			var currentColorGreenComponent = 255 - Math.floor( ( ( animatedBackgroundObjects[objectId].length - j ) * 255 ) / animatedBackgroundObjects[objectId].length );
			if( currentColorGreenComponent < 1 )
				currentColorGreenComponent = 1;
			else if( currentColorGreenComponent > 254 )
				currentColorGreenComponent = 254;
			var currentColor = "#00";
			if( currentColorGreenComponent.toString(16).length < 2 )
			{
				if( currentColorGreenComponent.toString(16).length == 0 )
				{
					currentColor += "00";
				}
				else
				{
					currentColor += "0" + currentColorGreenComponent.toString(16);
				}
			}
			else
			{
				currentColor += currentColorGreenComponent.toString(16);
			}
			currentColor += "00";
			dstHtml += "<font size=3 color=" + currentColor + ">" + string.charAt(j) + "</font>";
			if( j+1 < string.length )
			{
				dstHtml += "<br />";
			}
		}
		dstHtml += "</b>";
		
		document.getElementById( GetNameOfAnimatedObject( objectId ) ).innerHTML = dstHtml;
	}
	else
	{
		var errorStr = "While animating unable to get element by id: ";
		if( parent == null && screenObject == null )
		{
			errorStr += "MainBodyDivIdToIdentify or " + GetNameOfAnimatedObject( objectId );
		}
		else if( screenObject == null )
		{
			errorStr += GetNameOfAnimatedObject( objectId );
		}
		else
		{
			errorStr += "MainBodyDivIdToIdentify";
		}
		alert( errorStr );
	}
}

function InitAnimatedBackground( numberOfAnimatedObjects )
{
	var backgroundAnimationSpace = document.getElementById( "BackgroundAnimationSpace" );
	
	if( backgroundAnimationSpace != null )
	{
		var dst = "";
		var i;
		
		for( i = 0; i < numberOfAnimatedObjects; i++ )
		{
			MakeRandomAnimatedBackgroundObject( i );
			dst += "<div id =\"" + GetNameOfAnimatedObject( i ) + "\"></div>";
		}
		
		document.getElementById( "BackgroundAnimationSpace" ).innerHTML = dst;
		
		animatedBackgroundObjects.forEach(
		function( object, i, array )
		{
			object.screenObject = document.getElementById( GetNameOfAnimatedObject( i ) );
			var animationSpeed = Math.floor( ( Math.random() * 80 ) + 80 );
			var obj = animatedBackgroundObjects[i];
			var id = setInterval(
			function()
			{
				UpdateAnimatedObjects( i, id, parentOfAnimatedObjects );
			},
			animationSpeed );
		}
		);
	}
}
