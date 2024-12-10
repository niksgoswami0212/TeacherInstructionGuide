
jQuery(document).ready(function(){
	
	var modal = document.getElementById("myModal");
	var btn = document.getElementById("reportsBtn");
	var span = document.getElementsByClassName("close")[0];
	btn.onclick = function() {
	  	modal.style.display = "block";
	 
	  	$("#myModal").modal({
	            backdrop:false
	        });  
	  		//StartPencil();


		}

	});

window.addEventListener('load', () => {

	$("#size1x").click(function(){
			Size = 1;
			$('#myModal').modal('toggle');
			console.log("Size :"+Size);
			ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});

	$("#size5x").click(function(){
			Size = 5;
			$('#myModal').modal('toggle');
			ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});

	$("#size8x").click(function(){
			Size = 8;
			$('#myModal').modal('toggle');
			ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});

	$("#size10x").click(function(){
			Size = 10;
			$('#myModal').modal('toggle');
			ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});		

	$("#color1").click(function(){
		Color = "black";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});

	$("#color2").click(function(){
		Color = "blue";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});

	$("#color3").click(function(){
		Color = "green";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});

	$("#color4").click(function(){
		Color = "red";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});

	$("#color5").click(function(){
		Color = "yellow";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});

	$("#color6").click(function(){
		Color = "cyan";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});

	$("#color7").click(function(){
		Color = "BlueViolet";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});

	$("#color8").click(function(){
		Color = "Sienna";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});

	$("#color9").click(function(){
		Color = "Plum";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});

	$("#color10").click(function(){
		Color = "PeachPuff";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});

	$("#color11").click(function(){
		Color = "PaleGreen";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});

	$("#color12").click(function(){
		Color = "OrangeRed";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
	});



	const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext("2d");
	var isDown;
    var start;
    var end;
    var Size = 1, Color = "black";
	//Resizing
	/*canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;*/

	let painting = false;

	function startPosition(e) {
		painting = true;
		draw(e,Size,Color);
		console.log("Size final value :"+Size);
		//console.log();
	}

	function finishedPosition()
	{
		painting = false;
		ctx.beginPath();
	}

	function draw(e,size,color)
	{
		if (!painting)
		{
			
			return;
		}
		ctx.lineWidth = size;
		ctx.lineCap = "round";
		ctx.strokeStyle = color;
		
		//ctx.globalCompositeOperation="source-over";
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
		/*console.log("Client X :"+e.clientX);
		console.log("Client Y :"+e.clientY);*/
		a = e.clientX;
		b = e.clientY;
		
	}

	$("#eraser").click(function(){
		//alert("done");
		if (painting)
		{
			return;
		}
		ctx.lineWidth = 10;
		$("#canvas").css("cursor",'url(eraser2.png)0 64,auto');
		ctx.globalCompositeOperation="destination-out";
		ctx.beginPath();
		ctx.arc(200, 175, 50, 0, 2 * Math.PI);
		ctx.stroke();
		/*ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);*/
      	/*ctx.arc(e.clientX,e.clientY,80,0,Math.PI*5,false);
      	ctx.fill();*/

	});

	/*$("#eraser2").click(function(){
		//alert("done");
		if (painting)return;
		$("#canvas").css("cursor",'crosshair');
		$("#canvas").mousedown(function(e) {
	        isDown = true;
	        start = getMousePos(canvas, e);
	        end = getMousePos(canvas, e);
	        e.preventDefault();
    	});

    	$("#canvas").mouseup(function() {
        	isDown = false;
    	});

    	$("#canvas").mousemove(function(e) {
        if (!isDown) return;
	        var end = getMousePos(canvas, e);
	        var h = end.y - start.y;
	        var w = end.x - start.x;
	        ctx.clearRect(start.x-5, start.y-5, w+10, h+10);
	        ctx.beginPath();
	        ctx.rect(start.x, start.y, w, h);
	        ctx.stroke();
	        ctx.closePath();
    	});


		function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return{
            	x: Math.floor(evt.clientX - rect.left),
            	y: Math.floor(evt.clientY - rect.top)
        	};
    	}



      	
      	/*ctx.arc(e.clientX	,e.clientY,80,0,Math.PI*5,false);
      	ctx.fill();

	});*/

	canvas.addEventListener("mousedown", startPosition);
	canvas.addEventListener("mouseup", finishedPosition);
	canvas.addEventListener("mousemove", draw);

$("#eraser2").click(function (){
  const canvas2 = document.getElementById("canvas");
const context2 = canvas.getContext("2d");


const annotation = {
          x: 0,
          y: 0,
          w: 0,
          h: 0,
          printCoordinates: function () {
            console.log(`X: ${this.x}px, Y: ${this.y}px, Width: ${this.w}px, Height: ${this.h}px`);
          }
        };

//the array of all rectangles
let boundingBoxes = [];
// the actual rectangle, the one that is being drawn
let o={};


// a variable to store the mouse position
let m = {},
// a variable to store the point where you begin to draw the rectangle    
start = {};
// a boolean 
let isDrawing = false;

function handleMouseDown(e) {
  start = oMousePos(canvas2, e);
  isDrawing = true; 
  //console.log(start.x, start.y);
  canvas2.style.cursor = "crosshair";
}

function handleMouseMove(e) { 
    if(isDrawing){
    m = oMousePos(canvas2, e);
    draw();
    }
}

function handleMouseUp(e) { 
    canvas2.style.cursor = "default";
    isDrawing = false;

    const box = Object.create(annotation);
    box.x = o.x;
    box.y = o.y;
    box.w = o.w;
    box.h = o.h;

    boundingBoxes.push(box);
    draw();
    box.printCoordinates();
    console.log(boundingBoxes)
    }

function draw() {  
    o.x = start.x;  // start position of x
    o.y = start.y;  // start position of y
    o.w = m.x - start.x;  // width
    o.h = m.y - start.y;  // height

    //clearcanvas();
    context2.clearRect(0, 0, canvas2.width, canvas2.height);//////***********
    // draw all the rectangles saved in the rectsRy
    boundingBoxes.map(r => {drawRect(r)})
    // draw the actual rectangle
    drawRect(o);  
}

canvas2.addEventListener("mousedown", handleMouseDown);

canvas2.addEventListener("mousemove", handleMouseMove);

canvas2.addEventListener("mouseup", handleMouseUp);

function savecanvas(){
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
    var savedBoxes = boundingBoxes.slice(0);
    console.log(savedBoxes); // ok
    }

function resetcanvas(){
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
    boundingBoxes.length = 0;
    console.log(boundingBoxes); // ok
    }

function drawRect(o){
        context2.strokeStyle = "limegreen";
        context2.lineWidth = 2;
        context2.beginPath(o);
        context2.rect(o.x,o.y,o.w,o.h);
        context2.stroke();
    }

// Function to detect the mouse position

function oMousePos(canvas2, evt) {
  let ClientRect = canvas2.getBoundingClientRect();
    return { 
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
  }
}
});


});