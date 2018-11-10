
function InitAllPosts()
{
	AddPost( "Test Category",
	"Initial test post",
	new Date( 2018, 11, 7, 12, 31 ),
	"Some random document test elements.",
	"post.html" );

	AddPost( "Test Category",
	"Initial test post 2",
	new Date( 2018, 11, 7, 13, 31 ),
	"Same random elements.",
	"post.html" );

	AddPost( "Test Category 2",
	"Initial test post 3",
	new Date( 2018, 11, 7, 14, 31 ),
	"Same more random elements.",
	"post.html" );



	AddPost( "Test Category 2",
	"Initial test post 33",
	new Date( 2018, 11, 8, 11, 31 ),
	"Same more random elements.",
	"post.html" );

	AddPost( "Test Category 2",
	"Initial test post 34",
	new Date( 2018, 11, 8, 12, 31 ),
	"Same more random elements.",
	"post.html" );

	AddPost( "Test Category 2",
	"Initial test post 53",
	new Date( 2018, 11, 8, 13, 31 ),
	"Same more random elements.",
	"post.html" );

	AddPost( "Test Category",
	"Initial test post 63",
	new Date( 2018, 11, 8, 14, 31 ),
	"Same more random elements.",
	"post.html" );

	AddPost( "Test Category 3",
	"Initial test post 37",
	new Date( 2018, 11, 8, 15, 31 ),
	"Same more random elements.",
	"post.html" );

	AddPost( "Test Category 3",
	"Initial test post 38",
	new Date( 2018, 11, 8, 16, 31 ),
	"Same more random elements.",
	"post.html" );

	AddPost( "Test Category 2",
	"Initial test post 93",
	new Date( 2018, 11, 8, 17, 31 ),
	"Same more random elements.",
	"post.html" );

	AddPost( "Test Category",
	"Initial test post 543",
	new Date( 2018, 11, 8, 18, 31 ),
	"Same more random elements.",
	"post.html" );



	AddPost( "Test Category 2",
	"Initial test post 363",
	new Date( 2018, 11, 9, 11, 31 ),
	"Same more random elements.",
	"post.html" );

	AddPost( "Test Category 2",
	"Initial test post 344",
	new Date( 2018, 11, 9, 12, 31 ),
	"Same more random elements.",
	"post.html" );

	AddPost( "Test Category 2",
	"Initial test post 52353",
	new Date( 2018, 11, 9, 13, 31 ),
	"Same more random elements.",
	"post.html" );

	AddPost( "Test Category",
	"Initial test post 678453",
	new Date( 2018, 11, 9, 14, 31 ),
	"Same more random elements.",
	"post.html" );

	AddPost( "Test Category 3",
	"Initial test post 37167",
	new Date( 2018, 11, 9, 15, 31 ),
	"Same more random elements.",
	"post.html" );

	AddPost( "Test Category 3",
	"Initial test post 386",
	new Date( 2018, 11, 9, 16, 31 ),
	"Same more random elements.",
	"post.html" );

	AddPost( "Test Category 2",
	"Initial test post 93",
	new Date( 2018, 11, 9,17, 31 ),
	"Same more random elements.",
	"post.html" );

	AddPost( "Test Category",
	"Initial test post 852543",
	new Date( 2018, 11, 9, 18, 31 ),
	"Same more random elements.",
	"post.html" );
	
	allPosts.sort( ObjectsByDateComparison );
}