	const PRODUCTION_MODE = true;
const appdb = {
	
	'config': {
		'subject': 'Ripples Grade 1 Semester 1',
		'class': 'A',
		'id': 'riz_569',
		'totalPages': 34,
		'bookWidth': 2557,
		'bookHeight': 1824,
		'prePages': [
			{ pageUrl: "cover.jpg", pageName: "Cover" },
			{ pageUrl: "blank.jpg", pageName: "Blank" },
		]
	},
	
	'ebook': {
			
		'toc': {
			'icon': "fa-book",
			'menu': "Contents",
			'link': 'content',
			'data': []
		},

		/*'page': 4,
				'title': '33. Lets Read the Alphabet'*/
		/*'Animations': {
			'icon': "fa-video-camera",
			'menu': "Animations",
			'link': 'video',
			'data': [{
				'path': 'resources/animations/chapter1.ogv',
				'title': 'Sample Video',
				'size': '1280x720',
				'page': 23
			}]
		},
		'Slideshow': {
			'icon': "fa-picture-o",
			'menu': "Slideshow",
			'link': 'iframe',
			'data': [{
				'path': 'resources/slideshow/index.html',
				'title': 'Hardware and Software',
				'size': '1280x1000'
			}]
		},
		'Interactivities.': {
			'icon': "fa-users",
			'menu': "Interactivities",
			'link': 'iframe',
			'data': [ {
				'path': 'resources/interactivities/ch_1/ch1_a2/index.html',
				'title': 'Chapter 1-Activity 2',
				'size': '1024x768',
				'page': 18
							
			}
			]
		},*/
		
		
		/* 'misc': {
			'icon': "fa-external-link",
			'menu': "External Links",
			'link': 'external',
			'data': [{
				'path': 'https://www.tutorialspoint.com/computer_fundamentals/computer_fundamentals_tutorial.pdf',
				'title': 'PDF'
			}, {
				'path': 'https://web.njit.edu/~gblank/CreatingPowerpoint.ppt',
				'title': 'PPT'
			}]
		}, */ 
		
		'zother': []
		
	}
}

var TOOLS_OPTIONS = {
	sidebar: {
		activate: true,
		id: 'tool-sidebar'
	},
	notes: {
		activate: true,
		id: 'ebook-addnote'
	},
	zoomin: {
		activate: true,
		id: 'tool-zoom-in'
	},
	zoomout: {
		activate: true,
		id: 'tool-zoom-out'
	},
	mode: {
		activate: true,
		id: 'tool-bookmode-single-double'
	},
	fullscreen: {
		activate: true,
		id: 'tool-fullscreen'
	},
	assetmode: {
		activate: true,
		id: 'app-btn-toggleres'
	},
	spotlight: {
		activate: true,
		id: 'app-btn-spotlight'
	},
	backgroundmusic: {
		activate: false,
		id: 'tool-backgroundmusic'
	},
	pen: {
		activate: true,
		id: 'app-tool-pen'
	},
	highlighter: {
		activate: false,
		id: 'app-tool-highlight'
	},
	thumbnail: {
		activate: true,
		id: 'app-tool-thumbnail'
	},
	glossary: {
		activate: false,
		id: 'app-btn-glossary'
	},
	bookmarkslist: {
		activate: true,
		id: 'app-list-bookmark'
	},
	highlightsList: {
		activate: true,
		id: 'app-list-highlights'
	},
	notesList: {
		activate: true,
		id: 'app-list-notes'
	}

};