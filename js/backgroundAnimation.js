
var animatedBackgroundObjects = [];
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
		animatedBackgroundObjects[objectId].length = Math.floor( ( Math.random() * 15 ) + 10 );
	}
	else
	{
		alert( "Can not find element with id: MainBodyDivIdToIdentify" );
	}
}

function MakeRandomAnimatedBackgroundObject( objectId )
{
	animatedBackgroundObjects[objectId] = { x:0, y:0, string:"", length:Math.floor( ( Math.random() * 15 ) + 10 ), id:objectId, canvasObject:null, canvasContext:null, animationID:0, stopStatus:0 };
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
	var screenObject = animatedBackgroundObjects[objectId].canvasObject;
	var canvasContext = screenObject.getContext("2d");//animatedBackgroundObjects[objectId].canvasContext;
	if( parent != null && screenObject != null )
	{
		var width = parent.offsetWidth;
		var height = parent.offsetHeight;
		
		if( animatedBackgroundObjects[objectId].y+120 > height )
		{
			RandomizeObject( objectId );
		}
		else
		{
			if( animatedBackgroundObjects[objectId].string.length >= animatedBackgroundObjects[objectId].length )
			{
				animatedBackgroundObjects[objectId].y += 20;
				animatedBackgroundObjects[objectId].string = animatedBackgroundObjects[objectId].string.slice( 1 );
			}
			animatedBackgroundObjects[objectId].string += RandomSign();
		}
		
		screenObject.style.top = animatedBackgroundObjects[objectId].y.toString() + "px";
		screenObject.style.left = animatedBackgroundObjects[objectId].x.toString() + "px";
		
		var string = animatedBackgroundObjects[objectId].string;
		
		
		screenObject.width = 20;
		screenObject.height = string.length * 20;
		
		var grd = canvasContext.createLinearGradient( 0, 0, 0, animatedBackgroundObjects[objectId].length * 20 );
		grd.addColorStop( 0, "black" );
		grd.addColorStop( 1, "#00d000" );
		canvasContext.fillStyle = grd;
		canvasContext.font = "20px monospace";
		
		canvasContext.clearRect( 0, 0, screenObject.width, screenObject.height );
		
		var j = 0;
		for( j = 0; j < string.length; j++ )
		{
			canvasContext.fillText( string.charAt(j), 0, (j+1)*20 );
		}
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
		clearInterval( animatedBackgroundObjects[objectId].animationID );
	}
}

function InitAnimatedBackground( numberOfAnimatedObjects )
{
	var backgroundAnimationSpace = document.getElementById( "BackgroundAnimationSpace" );
	
	if( backgroundAnimationSpace != null )
	{
		var dst = "";
		var i;
		
		// clear old array
		{
			for( i = 0; i < animatedBackgroundObjects.length; i++ )
			{
				animatedBackgroundObjects[i].stopStatus = 1;
			}
			
			for( i = 0; i < animatedBackgroundObjects.length; i++ )
			{
				clearInterval( animatedBackgroundObjects[i].animationID );
			}
			
			animatedBackgroundObjects = [];
		}
		
		for( i = 0; i < numberOfAnimatedObjects; i++ )
		{
			MakeRandomAnimatedBackgroundObject( i );
			dst += "<canvas id =\"" + GetNameOfAnimatedObject( i ) + "\"></canvas>";
		}
		
		document.getElementById( "BackgroundAnimationSpace" ).innerHTML = dst;
		
		animatedBackgroundObjects.forEach(
		function( object, i, array )
		{
			object.canvasObject = document.getElementById( GetNameOfAnimatedObject( i ) );
			object.canvasContext = object.canvasObject.getContext("2d");
			
			var animationSpeed = Math.floor( ( Math.random() * 60 ) + 60 );
			var obj = animatedBackgroundObjects[i];
			var id = setInterval(
			function()
			{
				UpdateAnimatedObjects( i, id, parentOfAnimatedObjects );
			},
			animationSpeed );
			obj.animationID = id;
		}
		);
	}
}
