
var numberOfPages = appdb.config.totalPages + appdb.config.prePages.length;




// Adds the pages that the book will need
function addPage(page, book) {
	// 	First check if the page is already in the book
	if (!book.turn('hasPage', page)) {
		// Create an element for this page
		var element = $('<div />', {'class': 'page '+((page%2==0) ? 'odd' : 'even'), 'id': 'page-'+page}).html('<i class="loader"></i>');
		// If not then add the page

		
		console.log("Page Number :"+page);
		/**/

		
		

		book.turn('addPage', element, page);
		// Let's assum that the data is comming from the server and the request takes 1s.

		var pageData = PAGES_LINKING[page];
		var htmlData = "";
		if(pageData) {
			for(var i=0; i<pageData.length; i++) {
				
				var infoObj = pageData[i];
				//console.log('test', infoObj);
				if(infoObj.type == 'iframe') {
					htmlData += '<div onClick="openFancyModal(\'' + infoObj.link + '\', \'' + infoObj.size + '\')"  class="regionPos" style="left: ' + infoObj.x + '%; top: ' + infoObj.y + '%;"><img title="' + infoObj.title + '" src="' + infoObj.icon + '" ></div>';
				} else if(infoObj.type == 'audio') {
					htmlData += '<div onClick="playAudio(this, \'' + infoObj.link + '\')" class="regionPos regionPosAudio" style="left: ' + infoObj.x + '%; top: ' + infoObj.y + '%;"><img title="' + infoObj.title + '" src="' + infoObj.icon + '"></div>';
				} else if(infoObj.type == 'video'){
					htmlData += '<div onClick="openFancyModalVideo(\'' + infoObj.link + '\', \'' + infoObj.size + '\')"  class="regionPos" style="left: ' + infoObj.x + '%; top: ' + infoObj.y + '%;"><img title="' + infoObj.title + '" src="' + infoObj.icon + '" ></div>';
				}else if(infoObj.type == 'ans1'){
					htmlData += '<div ><img  id="'+ infoObj.id +'" src="resources/book/file-page'+ infoObj.pagenum + '.jpg" style="cursor:pointer;visibility:hidden;left:0%;top:0%;width:100%;height:100%;position:absolute;z-index:1"><img src="' + infoObj.icon + '" style="left: ' + infoObj.x + '%; top: ' + infoObj.y + '%;width:30px;height:28px;position:absolute;z-index:2" onclick="checkPageNumber1('+ infoObj.realpage + ')"></div>';	
				}
				else if(infoObj.type == 'ans2'){
					htmlData += '<div ><img  id="'+ infoObj.id +'" src="resources/book/file-page'+ infoObj.pagenum + '.jpg" style="cursor:pointer;visibility:hidden;left:0%;top:0%;width:100%;height:100%;position:absolute;z-index:1"><img src="' + infoObj.icon + '" style="left: ' + infoObj.x + '%; top: ' + infoObj.y + '%;width:30px;height:28px;position:absolute;z-index:2" onclick="checkPageNumber2('+ infoObj.realpage + ')"></div>';
				}
				else if(infoObj.type == 'ans3'){
					htmlData += '<div ><img  id="'+ infoObj.id +'" src="resources/book/file-page'+ infoObj.pagenum + '.jpg" style="cursor:pointer;visibility:hidden;left:0%;top:0%;width:100%;height:100%;position:absolute;z-index:1"><img src="' + infoObj.icon + '" style="left: ' + infoObj.x + '%; top: ' + infoObj.y + '%;width:30px;height:28px;position:absolute;z-index:2" onclick="checkPageNumber3('+ infoObj.realpage + ')"></div>';
				}
				else if (infoObj.type == 'contentlinking'){
					htmlData += '<div> <div onclick="readerApp.turnPage(' + infoObj.linkpage + ')" style="left:' + infoObj.x + '% ; top:' + infoObj.y + '% ; background-color: rgba(0,0,0,0);cursor:pointer; width:' + infoObj.width + 'px ; height:' + infoObj.height + 'px;position:absolute;z-index:1;"></div></div>';
				}
				else if (infoObj.type == 'backlinking')
				{
					htmlData += '<div> <img src="' + infoObj.icon + '" onclick="readerApp.turnPage(' + infoObj.linkpage + ')" style="cursor:pointer;left: ' + infoObj.x + '%; top: ' + infoObj.y + '%;width:42px;height:42px;position:absolute;z-index:2"/></div>';
				}
				else if (infoObj.type == 'drawing'){
					//htmlData += '<div> <iframe src="' + infoObj.link + '"  frameborder="1" scrolling="no" style="position:absolute;z-index:1;left:0px;top:0px;width:100%;height:100%"></iframe> </div>';
				}
				else if (infoObj.type == 'downloadmanual'){
					htmlData += '<div ><a  href="http://ithinksolutionsonline.com/saarpdfs/'+infoObj.pdfname+'.pdf" target="_blank" rel="noopener noreferrer" ><div style="background-color: rgba(0,0,0,0);left: ' + infoObj.x + '%; top: ' + infoObj.y + '%;width:50px;height:50px;position:absolute;z-index:2"></div></a></div>';
					//htmlData += '<div> <iframe src="' + infoObj.link + '"  frameborder="1" scrolling="no" style="position:absolute;z-index:1;left:0px;top:0px;width:100%;height:100%"></iframe> </div>';
				}
			}
		}

		setTimeout(function(){
			var actualPage = page - appdb.config.prePages.length;
			element.html('<div id="innerpage-' + page + '" class="data specialpage" style="background: url(\'resources/book/file-page' + actualPage + '.jpg\')">&nbsp; ' + 
			'<div class="linking-container">' + htmlData + '</div>' +
			'<iframe src="canvas.html?page=' + page + '" class="canvas-paint" id="canvas-' + page + '" ></iframe>' + 
			'<div class="iframe-blocker"></div>' +
			'</div>');
			if(PRODUCTION_MODE == false) {
				$(".linking-container > div").removeAttr('onclick');
				var th = 0, tw = 0;
				$(".linking-container > div").draggable({
					start: function( event, ui ) {
						$("#dev-icon-co").show();
						th = $(this).parent().height();
						tw = $(this).parent().width();
					},
					drag: function( event, ui ) {
						var pos = ui.position;
						$("#dev-pos-x").html((pos.left / tw) * 100);
						$("#dev-pos-y").html((pos.top / th) * 100 );
					}
				});

			}
		}, 1000);
	}
}


/*function reply_click(clicked)
{
    penSizeTurn = document.getElementById(clicked).getAttribute('data-value');
    //console.log(" penSize "+penSizeTurn);
    localStorage.setItem("pen", penSizeTurn);
}*/


/*function openModal() {
	var modal = document.getElementById('myModal');
	var btn = document.getElementById("myBtn");
  	modal.style.display = "block";
}
*/
// When the user clicks on <span> (x), close the modal
/*function closeModal() {
	var modal = document.getElementById('myModal');
	var span = document.getElementsByClassName("close")[0];
  	modal.style.display = "none";
}*/

// When the user clicks anywhere outside of the modal, close it
/*function outsideClick1() {
	var modal = document.getElementById('myModal');
  
    modal.style.display = "none";
 
}*/

$(window).ready(function(){

	var bookPageHTML = "";
	for(var i=0; i<appdb.config.prePages.length; i++) {
		var pageUrl = appdb.config.prePages[i].pageUrl;

		//console.log("Page URL :"+pageUrl);


		bookPageHTML += '<div class="cover"><img src="resources/book/' + pageUrl + '" /></div>';

	}
	$("#book").prepend(bookPageHTML);
	//$('#book').append('<div style="z-index:1;position:absolute">hello</div>');
	if(getBrowser() != "Chrome") {
		$('#book').turn({
			acceleration: true,
			pages: numberOfPages,
			elevation: 80,
			autoCenter: true,
			gradients: !$.isTouch,
			corners: {
			    backward: [],
			    forward: [],
			    all: []
			},
			when: {
				turning: function(e, page, view) {

					// Gets the range of pages that the book needs right now
					var range = $(this).turn('range', page);

					// Check if each page is within the book
					for (page = range[0]; page<=range[1]; page++) 
						addPage(page, $(this));

					console.log("Turned 1:"+$('#page-number').val());	

				},

				turned: function(e, page) {
					$('#page-number').val(page);
					console.log("Turned 11:"+$('#page-number').val());
					readerApp.setPageNumBack();
					readerApp.deactivatePaint();
					stopAudio();
					//closeModal();
				}
			}
		});
	} else {
		$('#book').turn({
			acceleration: true,
			pages: numberOfPages,
			elevation: 80,
			autoCenter: true,
			gradients: !$.isTouch,
			when: {
				turning: function(e, page, view) {

					// Gets the range of pages that the book needs right now
					var range = $(this).turn('range', page);

					// Check if each page is within the book
					for (page = range[0]; page<=range[1]; page++) 
						addPage(page, $(this));
					console.log("Turned 2:"+$('#page-number').val());	
				},

				turned: function(e, page) {
					$('#page-number').val(page);
					console.log("Turned 22:"+$('#page-number').val());
					readerApp.setPageNumBack();
					readerApp.deactivatePaint();
					stopAudio();
				}
			}
		});
	}

	$('#number-pages').html(numberOfPages);

	resizeBook();
	$(window).resize(resizeBook);

});

$(window).bind('keydown', function(e){

	if (e.target && e.target.tagName.toLowerCase()!='input')
		if (e.keyCode==37)
		{
			$('#book').turn('previous');
			//closeModal();
		}
		else if (e.keyCode==39)
		{
			$('#book').turn('next');
			//closeModal();
		}

});

function resizeBook() {

	// prepare parent frame width;
	var $container = $("#book-viewport");
	$container.width('100%');
	
	var win = $(window).height();
	var header = $("#topbar-section").height();
	var footer = $("#app-footer").height();
	var padding = 80;
	
	var frameHeight = win - header - footer - padding;
	var frameWidth = $container.width();
	
	$container.css({
		width: frameWidth + 'px',
		height: frameHeight + 'px'
	});

	// resize book with scaling
	var $book = $("#book");
	var width  = $book.width();
	var height = $book.height();

	if($("#book").turn('display') == 'single') {
		width = appdb.config.bookWidth;
		height = appdb.config.bookHeight;
	} else {
		width = appdb.config.bookWidth*2;
		height = appdb.config.bookHeight;
	}


	var $parent = $("#book-wrapper");
	var parentWidth  = $parent.width();
	var parentHeight = $parent.height();

	var finalDimension = calculateAspectRatioFit(width, height, parentWidth, parentHeight);
	$("#book").turn('size', finalDimension.width, finalDimension.height);
	eBookConfig.zoom = 1;
	$("#book-viewport").css('overflow', '');
	

	var innerH = $(".page").height();
	var innerW = $(".page").width();
	$('head').append('<style>' + 
	'.linking-container { height: ' + innerH + 'px; width: ' + innerW + 'px; }' +
	'</style>')
	var pgheight = $('#book .page').height();
	$("#book .data").height(pgheight + 'px');
	$('.linking-container')
		.css('-webkit-transform', 'scale(' + 1 + ')')
		.css('-moz-transform', 'scale(' + 1 + ')')
		.css('-ms-transform', 'scale(' + 1 + ')')
		.css('-o-transform', 'scale(' + 1 + ')')
		.css('transform', 'scale(' + 1 + ')');
}

function zoomBook(zoomlevel) {

	// prepare parent frame width;
	var $container = $("#book-viewport");
	$container.width('100%');
	
	var win = $(window).height();
	var header = $("#topbar-section").height();
	var footer = $("#app-footer").height();
	var padding = 80;
	
	var frameHeight = win - header - footer - padding;
	var frameWidth = $container.width();
	
	$container.css({
		width: frameWidth + 'px',
		height: frameHeight + 'px'
	});

	// resize book with scaling
	var $book = $("#book");
	var width  = $book.width();
	var height = $book.height();

	if($("#book").turn('display') == 'single') {
		width = appdb.config.bookWidth;
		height = appdb.config.bookHeight;
	} else {
		width = appdb.config.bookWidth*2;
		height = appdb.config.bookHeight;
	}

	var $parent = $("#book-wrapper");
	var parentWidth  = $parent.width();
	var parentHeight = $parent.height();

	var finalDimension = calculateAspectRatioFit(width, height, parentWidth, parentHeight);
	$("#book").turn('size', finalDimension.width*zoomlevel, finalDimension.height*zoomlevel);
	$("#book-viewport").css('overflow', 'auto');
	var pgheight = $('#book .page').height();
	$("#book .data").height(pgheight + 'px');
	$('.linking-container')
		.css('-webkit-transform', 'scale(' + zoomlevel + ')')
		.css('-moz-transform', 'scale(' + zoomlevel + ')')
		.css('-ms-transform', 'scale(' + zoomlevel + ')')
		.css('-o-transform', 'scale(' + zoomlevel + ')')
		.css('transform', 'scale(' + zoomlevel + ')');
}

function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return { width: srcWidth*ratio, height: srcHeight*ratio };
 }


function getBrowser() { 
	var result = "";
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        result = "Opera";
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        result = "Chrome";
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        result = "Safari";
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
        result = "Firefox";
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
    	result = "IE";
    } else {
       result = "Unknown";
    }
    return result;
}

