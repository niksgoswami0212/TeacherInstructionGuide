const HIGLIGHT_KEYWORD = appdb.config.id + '_highlight_';
const HIGLIGHT_LIST = appdb.config.id + '_list';
var highlight_listz = [];

var width = window.innerWidth;
var height = window.innerHeight;
var canvas = document.getElementById('c');
canvas.width = width;
canvas.height = height;
var pageId = getPageNum();
var rgba; 
var penSize ;

/*var size12 = localStorage.getItem("pen");
console.log("penSize Drawing "+size12);*/


var canvas = new fabric.Canvas('c', { selection: false });
//c.style.cursor = "url('https://i.stack.imgur.com/fp7eL.png')";
canvas.freeDrawingCursor= "url(pencil.png)4 64,auto";
//canvas.freeDrawingCursor = 'url("cursor.svg"), auto';
//canvas.set({hoverCursor: 'url("img/cursor.svg"), auto'});

var tools = {
    '0': false,
    '1': 'box',
    '2': 'pen',
    '3': 'eraser'
};

var activeTool = 0;
var paintOptions = {
    color: rgba,
    width: penSize
};

var boxColor = 'rgba(0,0,255,0.5)';
//console.log("box color :"+boxColor);
//var boxColorSize = '10';


var rect, isDown, origX, origY;




canvas.on('mouse:down', function(o){
	setParentActive();
    if(activeTool != 1) return false;
    isDown = true;
    var pointer = canvas.getPointer(o.e);
    origX = pointer.x;
    origY = pointer.y;
    var pointer = canvas.getPointer(o.e);
    rect = new fabric.Rect({
        left: origX,
        top: origY,
        originX: 'left',
        originY: 'top',
        width: pointer.x-origX,
        height: pointer.y-origY,
        angle: 0,
        fill: boxColor,
        transparentCorners: true
    });
    canvas.add(rect);
});

canvas.on('mouse:move', function(o){
    
    if (!isDown) return;

    
	if(activeTool == 1) {
		var pointer = canvas.getPointer(o.e);
		
		if(origX>pointer.x){
			rect.set({ left: Math.abs(pointer.x) });
		}
		if(origY>pointer.y){
			rect.set({ top: Math.abs(pointer.y) });
		}
		
		rect.set({ width: Math.abs(origX - pointer.x) });
		rect.set({ height: Math.abs(origY - pointer.y) });
		
		
		canvas.renderAll();
	}
});

canvas.on('mouse:up', function(o){
	isDown = false;

	if(activeTool == 2) {
		var currentItem = canvas._objects.length - 1;
		if(canvas.item(currentItem).selectable == true)
			canvas.item(currentItem).selectable = false;
		
		canvas.renderAll();
	}
	saveCanvasStorage();
});    

canvas.on('touch:down', function(o){
	setParentActive();
    if(activeTool != 1) return false;
    isDown = true;
    var pointer = canvas.getPointer(o.e);
    origX = pointer.x;
    origY = pointer.y;
    var pointer = canvas.getPointer(o.e);
    rect = new fabric.Rect({
        left: origX,
        top: origY,
        originX: 'left',
        originY: 'top',
        width: pointer.x-origX,
        height: pointer.y-origY,
        angle: 0,
        fill: boxColor,
        transparentCorners: true
    });
    canvas.add(rect);
});

canvas.on('touch:move', function(o){
    
    if (!isDown) return;

    
	if(activeTool == 1) {
		var pointer = canvas.getPointer(o.e);
		
		if(origX>pointer.x){
			rect.set({ left: Math.abs(pointer.x) });
		}
		if(origY>pointer.y){
			rect.set({ top: Math.abs(pointer.y) });
		}
		
		rect.set({ width: Math.abs(origX - pointer.x) });
		rect.set({ height: Math.abs(origY - pointer.y) });
		
		
		canvas.renderAll();
	}
});

canvas.on('touch:up', function(o){
	isDown = false;

	if(activeTool == 2) {
		var currentItem = canvas._objects.length - 1;
		if(canvas.item(currentItem).selectable == true)
			canvas.item(currentItem).selectable = false;
		
		canvas.renderAll();
	}
	saveCanvasStorage();
});    


window.onmessage = function(e) {
	var msg = e.data;
	console.log("Message "+msg);

	if(msg == 'show-tools-0') {
		initTool(0);
		//canvas.freeDrawingCursor= "url(pencil.png)4 64,auto";
	} else if(msg == 'show-tools-1') {
		initTool(1);
		//canvas.freeDrawingCursor= "url(pencil.png)4 64,auto";
	} else if(msg == 'show-tools-2') {
		//canvas.freeDrawingCursor= "url(pencil.png)4 64,auto";
		initTool(2);
	} else if(msg == "action-undo") {
		remvoeLastObject();
	} else if(msg == "action-clear") {
		clearAll();
	} else if(msg.indexOf("select-color") != -1) {
		var color = msg.split("select-color-").join("");
		//console.log(color);
		boxColor = color;
		rgba = boxColor.slice(0,7);
		selectionColorTool(rgba);
		//console.log("Color.... :"+boxColor);
		//selectionColorTool();
		//paintOptions.color = boxColor.slice(0,7);
	}
	else if(msg == "1") 
	{
	
		selectionSizeTool(1);

	}
	else if(msg == "5") 
	{
	
		selectionSizeTool(5)

	}
	else if(msg == "10") 
	{
	
		selectionSizeTool(10)

	}
	else if(msg == "15") 
	{
	
		selectionSizeTool(15)

	}
}





function initTool (toolCode) {
    activeTool = toolCode;
    if(activeTool == 2) {
        canvas.isDrawingMode = true;
		//canvas.freeDrawingCursor= "url(pencil.png)4 64,auto";
        //canvas.freeDrawingBrush.color = rgba;
        
        //selectionColorTool();
        //selectionSizeTool();
        //console.log('Size updated initTool', penSize);
        //console.log('Color updated initTool', rgba);
    } else {
        canvas.isDrawingMode = false;
		//c.freeDrawingCursor= "url(pencil.png)4 64,auto";
    }
}

function selectionColorTool(rgbacolor)
{
	canvas.freeDrawingBrush.color = rgbacolor;
}

function selectionSizeTool(size)
{
	canvas.freeDrawingBrush.width = size;
}

$(window).resize(function(e) {
	var bHeight = $('body').height();
	var bWidth = $('body').width();
	$('.canvas-container').css({
		width: bWidth + 'px',
		height: bHeight + 'px'
	});


	var canvasWidth = $('.wrapper-paint-app canvas').width();
	var zoomPos = bWidth/canvasWidth;

	//console.log(zoomPos, bWidth, canvasWidth);
	$(".canvas-container")
		.css('-webkit-transform', 'scale(' + zoomPos + ')')
		.css('-moz-transform', 'scale(' + zoomPos + ')')
		.css('-ms-transform', 'scale(' + zoomPos + ')')
		.css('-o-transform', 'scale(' + zoomPos + ')')
		.css('transform', 'scale(' + zoomPos + ')');
});



function setParentActive() {
	window.parent.postMessage("canvas-"+pageId, "*");
	addPageToStorage();
}

function addPageToStorage() {
	getPages();
	if(highlight_listz.indexOf(pageId) == -1) {
		highlight_listz.push(pageId);
	}
	saveInStorage();
}

function removePageFromStorage() {
	getPages();

	var index = highlight_listz.indexOf(pageId);
	if(index != -1) {
		highlight_listz.splice(index, 1);
	}
	saveInStorage();
}

function remvoeLastObject() {
    var canvas_objects = canvas._objects;
	if(canvas_objects.length !== 0){
		var last = canvas_objects[canvas_objects.length -1];
		canvas.remove(last);
		canvas.renderAll();
	}
}

function clearAll() {
    var canvas_objects = canvas._objects;
	if(canvas_objects.length !== 0){
		var last = canvas_objects[canvas_objects.length -1];
		canvas.remove(last);
		canvas.clear();
		canvas.renderAll();
	}
	removePageFromStorage();
	removeCanvasFromStorage();
}

function getPageNum() {
	var url_string = location.href;
	var url = new URL(url_string);
	var page = url.searchParams.get("page");
	if(page == null || page == undefined)
		page = 0
	return page;
}


function getPages() {
	var oldData = getStorage(HIGLIGHT_LIST);
	highlight_listz = [];
	if(oldData != undefined && oldData != null && oldData != "") {
		highlight_listz = JSON.parse(oldData);
	}
	window.parent.postMessage("refresh-highlights", "*");
}

function saveInStorage() {
	
	if(highlight_listz.length != 0)
		setStorage(HIGLIGHT_LIST, JSON.stringify(highlight_listz)); 
	else
		removeFromStorage();
		
	window.parent.postMessage("refresh-highlights", "*");
}

function saveCanvasStorage() {
	var json = canvas.toJSON();
	setStorage(HIGLIGHT_KEYWORD + pageId, JSON.stringify(json)); 
}

function removeFromStorage() {
	removeCanvasFromStorage();
	removeStorage(HIGLIGHT_LIST);
	window.parent.postMessage("refresh-highlights", "*");
}

function removeCanvasFromStorage() {
	removeStorage(HIGLIGHT_KEYWORD + pageId); 
}



window.onload = function () {
	getPages();
	if(highlight_listz.indexOf(pageId) != -1) {
		var json = JSON.parse(getStorage(HIGLIGHT_KEYWORD + pageId)); 
		canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
	}
}


function getStorage(key) {
	if(localStorageSupport()) {
		return window.localStorage.getItem(key);
	} else {
		return store.get(key);
		// return window.sessionStorage.getItem(key);
	}
}

function removeStorage(key) {
	if(localStorageSupport()) {
		window.localStorage.removeItem(key);
	} else {
		store.remove(key);
		// window.sessionStorage.removeItem(key);
	}
}

function setStorage(key, value) {
	if(localStorageSupport()) {
		window.localStorage.setItem(key, value);
	} else {
		store.set(key, value);
		// window.sessionStorage.setItem(key, value);
	}
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

function localStorageSupport() {
	var result = null;
	try {
		result = (('localStorage' in window) && window['localStorage'] !== null);
	} catch(err) {
		return null;
	}
    return result;
}
