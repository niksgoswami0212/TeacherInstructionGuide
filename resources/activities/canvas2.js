const canvas = document.querySelector("#canvas");
	var ctx = canvas.getContext("2d");
	var ctx2 = canvas.getContext("2d");
	var isDown;
    var start;
    var end;
    var Size = 1, Color = "black";
    var SavePenSize, SaveEraserSize, SaveColorSelection;

    var SizeUsed;

jQuery(document).ready(function(){

	$("#CLOSE1").click(function(){

		AddAnimation("none");
		if (SaveColorSelection == 1) 
		{
			$("#color1").addClass('transition');
        	AddAnimation("#color1");
		}
		else if (SaveColorSelection == 2) 
		{
			$("#color2").addClass('transition');
        	AddAnimation("#color2");
		}
		else if (SaveColorSelection == 3) 
		{
			$("#color3").addClass('transition');
        	AddAnimation("#color3");
		}
		else if (SaveColorSelection == 4) 
		{
			$("#color4").addClass('transition');
        	AddAnimation("#color4");
		}
		else if (SaveColorSelection == 5) 
		{
			$("#color5").addClass('transition');
        	AddAnimation("#color5");
		}
		else if (SaveColorSelection == 6) 
		{
			$("#color6").addClass('transition');
        	AddAnimation("#color6");
		}
		else if (SaveColorSelection == 7) 
		{
			$("#color7").addClass('transition');
        	AddAnimation("#color7");
		}
		else if (SaveColorSelection == 8) 
		{
			$("#color8").addClass('transition');
        	AddAnimation("#color8");
		}
		else if (SaveColorSelection == 9) 
		{
			$("#color9").addClass('transition');
        	AddAnimation("#color9");
		}
		else if (SaveColorSelection == 10) 
		{
			$("#color10").addClass('transition');
        	AddAnimation("#color10");
		}
		else if (SaveColorSelection == 11) 
		{
			$("#color11").addClass('transition');
        	AddAnimation("#color11");
		}
		else if (SaveColorSelection == 12) 
		{
			$("#color12").addClass('transition');
        	AddAnimation("#color12");
		}
		else if (SaveColorSelection == 14) 
		{
			$("#color14").addClass('transition');
        	AddAnimation("#color14");
		}
		else if (SaveColorSelection == 15) 
		{
			$("#color15").addClass('transition');
        	AddAnimation("#color15");
		}
		else if (SaveColorSelection == 16) 
		{
			$("#color16").addClass('transition');
        	AddAnimation("#color16");
		}
		else if (SaveColorSelection == 17) 
		{
			$("#color17").addClass('transition');
        	AddAnimation("#color17");
		}
		else if (SaveColorSelection == 18) 
		{
			$("#color18").addClass('transition');
        	AddAnimation("#color18");
		}

	});
	
	$("#CLOSE2").click(function(){
		$("#size1x").css("background-color", "");
		$("#size3x").css("background-color", "");
	   	$("#size5x").css("background-color", "");
	   	$("#size8x").css("background-color", "");
	   	$("#size10x").css("background-color", "");
	   	if (SavePenSize == 1) 
	   	{
	   		$("#size1x").css("background-color", "yellow");
	   		$("#size3x").css("background-color", "");
		   	$("#size5x").css("background-color", "");
		   	$("#size8x").css("background-color", "");
		   	$("#size10x").css("background-color", "");
	   	}
	   	else if (SavePenSize == 2)
	   	{
	   		$("#size3x").css("background-color", "yellow");
		   	$("#size1x").css("background-color", "");
		   	$("#size5x").css("background-color", "");
		   	$("#size8x").css("background-color", "");
		   	$("#size10x").css("background-color", "");
	   	}
	   	else if (SavePenSize == 3)
	   	{
	   		$("#size5x").css("background-color", "yellow");
		   	$("#size8x").css("background-color", "");
		   	$("#size1x").css("background-color", "");
		   	$("#size3x").css("background-color", "");
		   	$("#size10x").css("background-color", "");
	   	}
	   	else if (SavePenSize == 4)
	   	{
	   		$("#size8x").css("background-color", "yellow");
		   	$("#size3x").css("background-color", "");
		   	$("#size5x").css("background-color", "");
		   	$("#size1x").css("background-color", "");
		   	$("#size10x").css("background-color", "");
	   	}
	   	else if (SavePenSize == 5)
	   	{
	   		$("#size10x").css("background-color", "yellow");
		   	$("#size3x").css("background-color", "");
		   	$("#size5x").css("background-color", "");
		   	$("#size1x").css("background-color", "");
		   	$("#size8x").css("background-color", "");
	   	}

	});

	$("#CLOSE3").click(function(){
		$("#size1xEraser").css("background-color", "");
	   	$("#size5xEraser").css("background-color", "");
	   	$("#size8xEraser").css("background-color", "");
	   	$("#size10xEraser").css("background-color", "");
	   	if (SaveEraserSize == 1) 
	   	{
	   		$("#size1xEraser").css("background-color", "yellow");
		   	$("#size5xEraser").css("background-color", "");
		   	$("#size8xEraser").css("background-color", "");
		   	$("#size10xEraser").css("background-color", "");
	   	}
	   	else if (SaveEraserSize == 2)
	   	{
	   		$("#size5xEraser").css("background-color", "yellow");
		   	$("#size1xEraser").css("background-color", "");
		   	$("#size8xEraser").css("background-color", "");
		   	$("#size10xEraser").css("background-color", "");
	   	}
	   	else if (SaveEraserSize == 3)
	   	{
	   		$("#size8xEraser").css("background-color", "yellow");
		   	$("#size5xEraser").css("background-color", "");
		   	$("#size1xEraser").css("background-color", "");
		   	$("#size10xEraser").css("background-color", "");
	   	}
	   	else if (SaveEraserSize == 4)
	   	{
	   		$("#size10xEraser").css("background-color", "yellow");
		   	$("#size5xEraser").css("background-color", "");
		   	$("#size8xEraser").css("background-color", "");
		   	$("#size1xEraser").css("background-color", "");
	   	}

	});
	
	$("#sizebox").click(function(){
	 	$("#myModal2").css("display","block");
	  	$("#myModal2").modal({
	            backdrop:false
	        });  
	  	if ($('#myModal').is(':visible')) 
	  	{
	  		$("#myModal").modal('hide');
	  	}
	  	if ($('#myModal3').is(':visible')) 
	  	{
	  		$("#myModal3").modal('hide');
	  	}
		
	  	
	});
    
	$("#colorbox").click(function(){
	 	$("#myModal").css("display","block");
	  	$("#myModal").modal({
	            backdrop:false
	        });  
	  	if ($('#myModal2').is(':visible')) 
	  	{
	  		$("#myModal2").modal('hide');
	  	}
	  	if ($('#myModal3').is(':visible')) 
	  	{
	  		$("#myModal3").modal('hide');
	  	}
	});

	$("#eraserbox").click(function(){
	 	$("#myModal3").css("display","block");
	  	$("#myModal3").modal({
	            backdrop:false
	        });  
	  	if ($('#myModal').is(':visible')) 
	  	{
	  		$("#myModal").modal('hide');
	  	}
	  	if ($('#myModal2').is(':visible')) 
	  	{
	  		$("#myModal2").modal('hide');
	  	}
	  	
	});



	$("#pencil").click(function(){
		Size = 10;
		SizeUsed = 1;
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		ctx.globalCompositeOperation="source-over";
		let painting = false;

		function startPosition(e) {
			painting = true;
			draw(e,Size,Color);
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
			
			
			ctx.lineTo(e.clientX, e.clientY);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(e.clientX, e.clientY);
			/*console.log("Client X :"+e.clientX);
			console.log("Client Y :"+e.clientY);*/
			a = e.clientX;
			b = e.clientY;
			
		}

		canvas.addEventListener("mousedown", startPosition);
		canvas.addEventListener("mouseup", finishedPosition);
		canvas.addEventListener("mousemove", draw);

	});

	$("#eraser").click(function(){
		SizeUsed = 2;
		$("#canvas").css("cursor",'url(eraser2.cur)0 64,auto');
		ctx.globalCompositeOperation="destination-out";
		let painting = true;

		function startPosition(e) {
			painting = false;
			draw(e,Size,Color);
			
			//console.log();
		}

		function finishedPosition()
		{
			painting = true;
			ctx.beginPath();
		}

		function draw(e,size,color)
		{
			if (painting)
			{
				return;
			}

			ctx.lineWidth = size;
			ctx.lineCap = "round";
			/*ctx.strokeStyle = color;*/
			
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

		canvas.addEventListener("mousedown", startPosition);
		canvas.addEventListener("mouseup", finishedPosition);
		canvas.addEventListener("mousemove", draw);
	});

	$("#size1x").hover(function(){
	   	$(this).css("background-color", "yellow");
	   	$("#size3x").css("background-color", "");
	   	$("#size5x").css("background-color", "");
	   	$("#size8x").css("background-color", "");
	   	$("#size10x").css("background-color", "");
	    });

	$("#size3x").hover(function(){
	   	$(this).css("background-color", "yellow");
	   	$("#size1x").css("background-color", "");
	   	$("#size5x").css("background-color", "");
	   	$("#size8x").css("background-color", "");
	   	$("#size10x").css("background-color", "");
	    });

	$("#size5x").hover(function(){
	   	$(this).css("background-color", "yellow");
	   	$("#size1x").css("background-color", "");
	   	$("#size3x").css("background-color", "");
	   	$("#size8x").css("background-color", "");
	   	$("#size10x").css("background-color", "");
	    });

	$("#size8x").hover(function(){
	   	$(this).css("background-color", "yellow");
	   	$("#size1x").css("background-color", "");
	   	$("#size3x").css("background-color", "");
	   	$("#size5x").css("background-color", "");
	   	$("#size10x").css("background-color", "");
	    });

	$("#size10x").hover(function(){
	   	$(this).css("background-color", "yellow");
	   	$("#size1x").css("background-color", "");
	   	$("#size3x").css("background-color", "");
	   	$("#size5x").css("background-color", "");
	   	$("#size8x").css("background-color", "");
	    });

	$("#size1x").click(function(){
			Size = 1;
			$(this).css("background-color", "yellow");
			$("#size3x").css("background-color", "");
			$("#size5x").css("background-color", "");
		   	$("#size8x").css("background-color", "");
		   	$("#size10x").css("background-color", "");
			$('#myModal2').modal('toggle');
			ctx.globalCompositeOperation = "source-over";
			$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');	
			SavePenSize = 1;		
	});

	$("#size3x").click(function(){
			Size = 8;
			$(this).css("background-color", "yellow");
			$("#size1x").css("background-color", "");
			$("#size5x").css("background-color", "");
		   	$("#size8x").css("background-color", "");
		   	$("#size10x").css("background-color", "");
			$('#myModal2').modal('toggle');
			ctx.globalCompositeOperation = "source-over";
			$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');	
			SavePenSize = 2;		
	});

	$("#size5x").click(function(){
			Size = 20;
			$(this).css("background-color", "yellow");
			$("#size1x").css("background-color", "");
			$("#size3x").css("background-color", "");
		   	$("#size8x").css("background-color", "");
		   	$("#size10x").css("background-color", "");
			$('#myModal2').modal('toggle');
			ctx.globalCompositeOperation = "source-over";
			$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');	
			SavePenSize = 3;
	});

	$("#size8x").click(function(){
			Size = 30;
			$(this).css("background-color", "yellow");
		   	$("#size1x").css("background-color", "");
		   	$("#size3x").css("background-color", "");
		   	$("#size5x").css("background-color", "");
		   	$("#size10x").css("background-color", "");
			$('#myModal2').modal('toggle');
			ctx.globalCompositeOperation = "source-over";
			$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');	
			SavePenSize = 4;
	});

	$("#size10x").click(function(){
			Size = 40;
			$(this).css("background-color", "yellow");
		   	$("#size1x").css("background-color", "");
		   	$("#size3x").css("background-color", "");
		   	$("#size5x").css("background-color", "");
		   	$("#size8x").css("background-color", "");
			$('#myModal2').modal('toggle');
			ctx.globalCompositeOperation = "source-over";
			$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');	
			SavePenSize = 5;
	});		


	$("#size1xEraser").hover(function(){
	   	$(this).css("background-color", "yellow");
	   	$("#size5xEraser").css("background-color", "");
	   	$("#size8xEraser").css("background-color", "");
	   	$("#size10xEraser").css("background-color", "");
	    });

	$("#size5xEraser").hover(function(){
	   	$(this).css("background-color", "yellow");
	   	$("#size1xEraser").css("background-color", "");
	   	$("#size8xEraser").css("background-color", "");
	   	$("#size10xEraser").css("background-color", "");
	    });

	$("#size8xEraser").hover(function(){
	   	$(this).css("background-color", "yellow");
	   	$("#size1xEraser").css("background-color", "");
	   	$("#size5xEraser").css("background-color", "");
	   	$("#size10xEraser").css("background-color", "");
	    });

	$("#size10xEraser").hover(function(){
	   	$(this).css("background-color", "yellow");
	   	$("#size1xEraser").css("background-color", "");
	   	$("#size5xEraser").css("background-color", "");
	   	$("#size8xEraser").css("background-color", "");
	    });


	$("#size1xEraser").click(function(){
		 	Size = 3;
		 	$(this).css("background-color", "yellow");
		   	$("#size5xEraser").css("background-color", "");
		   	$("#size8xEraser").css("background-color", "");
		   	$("#size10xEraser").css("background-color", "");
		 	$('#myModal3').modal('toggle');
			ctx.globalCompositeOperation="destination-out";
			$("#canvas").css("cursor",'url(eraser2.cur)0 64,auto');
			SaveEraserSize = 1;
	});

	$("#size5xEraser").click(function(){
		 	Size = 10;
		 	$(this).css("background-color", "yellow");
		   	$("#size1xEraser").css("background-color", "");
		   	$("#size8xEraser").css("background-color", "");
		   	$("#size10xEraser").css("background-color", "");
		 	$('#myModal3').modal('toggle');
			ctx.globalCompositeOperation="destination-out";
			$("#canvas").css("cursor",'url(eraser2.cur)0 64,auto');
			SaveEraserSize = 2;
	});

	$("#size8xEraser").click(function(){
		 	Size = 18;
		 	$(this).css("background-color", "yellow");
		   	$("#size1xEraser").css("background-color", "");
		   	$("#size5xEraser").css("background-color", "");
		   	$("#size10xEraser").css("background-color", "");
		 	$('#myModal3').modal('toggle');
			ctx.globalCompositeOperation="destination-out";
			$("#canvas").css("cursor",'url(eraser2.cur)0 64,auto');
			SaveEraserSize = 3;
	});

	$("#size10xEraser").click(function(){
		 	Size = 40;
		 	$(this).css("background-color", "yellow");
		   	$("#size1xEraser").css("background-color", "");
		   	$("#size5xEraser").css("background-color", "");
		   	$("#size8xEraser").css("background-color", "");
		 	$('#myModal3').modal('toggle');
			ctx.globalCompositeOperation="destination-out";
			$("#canvas").css("cursor",'url(eraser2.cur)0 64,auto');
			SaveEraserSize = 4;
	});

	function AddAnimation(addingClass)
	{
		var arrForId = ["#color1","#color2","#color3","#color4","#color5","#color6","#color7","#color8","#color9"
		,"#color10","#color11","#color12","#color13","#color14","#color15","#color16","#color17","#color18"];

		//console.log("Array Result 1 :"+arrForId);
		var forNone = "none";
		console.log("Adding :"+addingClass);
		if (forNone == addingClass) 
		{

			$(arrForId[0]).removeClass('transition');
	        $(arrForId[1]).removeClass('transition');
	        $(arrForId[2]).removeClass('transition');
	        $(arrForId[3]).removeClass('transition');
	        $(arrForId[4]).removeClass('transition');
	        $(arrForId[5]).removeClass('transition');
	        $(arrForId[6]).removeClass('transition');
	        $(arrForId[7]).removeClass('transition');
	        $(arrForId[8]).removeClass('transition');
	        $(arrForId[9]).removeClass('transition');
	        $(arrForId[10]).removeClass('transition');
	        $(arrForId[11]).removeClass('transition');
	        $(arrForId[12]).removeClass('transition');
	        $(arrForId[13]).removeClass('transition');
	        $(arrForId[14]).removeClass('transition');
	        $(arrForId[15]).removeClass('transition');
	        $(arrForId[16]).removeClass('transition');
	        $(arrForId[17]).removeClass('transition');
		}
		else
		{
			Array.prototype.remove = function() {
		    var what, a = arguments, L = a.length, ax;
		    while (L && this.length) {
		        what = a[--L];
		        while ((ax = this.indexOf(what)) !== -1) {
		            this.splice(ax, 1);
			        }
			    }
			    return this;
			};
			arrForId.remove(addingClass);

			//console.log("Array Result 2 :"+'"'+arrForId[0]+'"');
	        $(arrForId[0]).removeClass('transition');
	        $(arrForId[1]).removeClass('transition');
	        $(arrForId[2]).removeClass('transition');
	        $(arrForId[3]).removeClass('transition');
	        $(arrForId[4]).removeClass('transition');
	        $(arrForId[5]).removeClass('transition');
	        $(arrForId[6]).removeClass('transition');
	        $(arrForId[7]).removeClass('transition');
	        $(arrForId[8]).removeClass('transition');
	        $(arrForId[9]).removeClass('transition');
	        $(arrForId[10]).removeClass('transition');
	        $(arrForId[11]).removeClass('transition');
	        $(arrForId[12]).removeClass('transition');
	        $(arrForId[13]).removeClass('transition');
	        $(arrForId[14]).removeClass('transition');
	        $(arrForId[15]).removeClass('transition');
	        $(arrForId[16]).removeClass('transition');
		}
	}

	$('#color1').hover(function() {
        $(this).addClass('transition');
        AddAnimation("#color1");
    });

    $('#color2').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color2");
    });

    $('#color3').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color3");
    });

    $('#color4').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color4");
    });

    $('#color5').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color5");
    });

    $('#color6').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color6");
    });

    $('#color7').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color7");
    });

    $('#color8').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color8");
    });

    $('#color9').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color9");
    });

    $('#color10').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color10");
    });

    $('#color11').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color11");
    });

    $('#color12').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color12");
    });

    $('#color13').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color13");
    });

    $('#color14').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color14");
    });

    $('#color15').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color15");
    });

    $('#color16').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color16");
    });

    $('#color17').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color17");
    });

    $('#color18').hover(function() {
       $(this).addClass('transition');
        AddAnimation("#color18");
    });

	$("#color1").click(function(){
		Color = "black";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color1");
        SaveColorSelection = 1;
	});

	$("#color2").click(function(){
		Color = "blue";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color2");
        SaveColorSelection = 2;
	});

	$("#color3").click(function(){
		Color = "green";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color3");
        SaveColorSelection = 3;
	});

	$("#color4").click(function(){
		Color = "red";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color4");
        SaveColorSelection = 4;
	});

	$("#color5").click(function(){
		Color = "yellow";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color5");
        SaveColorSelection = 5;
	});

	$("#color6").click(function(){
		Color = "cyan";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color6");
        SaveColorSelection = 6;
	});

	$("#color7").click(function(){
		Color = "BlueViolet";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color7");
        SaveColorSelection = 7;
	});

	$("#color8").click(function(){
		Color = "Sienna";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color8");
        SaveColorSelection = 8;
	});

	$("#color9").click(function(){
		Color = "Plum";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color9");
        SaveColorSelection = 9;
	});

	$("#color10").click(function(){
		Color = "PeachPuff";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color10");
        SaveColorSelection = 10;
	});

	$("#color11").click(function(){
		Color = "PaleGreen";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color11");
        SaveColorSelection = 11;
	});

	$("#color12").click(function(){
		Color = "OrangeRed";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color12");
        SaveColorSelection = 12;
	});

	$("#color13").click(function(){
		Color = "#F8C471";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color13");
        SaveColorSelection = 13;
	});

	$("#color14").click(function(){
		Color = "#117A65";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color14");
        SaveColorSelection = 14;
	});

	$("#color15").click(function(){
		Color = "#A2D9CE";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color15");
        SaveColorSelection = 15;
	});

	$("#color16").click(function(){
		Color = "#B7950B";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color16");
        SaveColorSelection = 16;
	});

	$("#color17").click(function(){
		Color = "#283747";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color17");
        SaveColorSelection = 17;
	});

	$("#color18").click(function(){
		Color = "#85929E";
		$('#myModal').modal('toggle');
		ctx.globalCompositeOperation = "source-over";
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		$(this).addClass('transition');
        AddAnimation("#color18");
        SaveColorSelection = 18;
	});




});

window.addEventListener('load', () => {

		Size = 10;
		SizeUsed = 1;
		$("#canvas").css("cursor",'url(pencil.cur)0 64,auto');
		ctx.globalCompositeOperation="source-over";
		let painting = false;

		function startPosition(e) {
			painting = true;
			draw(e,Size,Color);
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
			
			
			ctx.lineTo(e.clientX, e.clientY);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(e.clientX, e.clientY);
			/*console.log("Client X :"+e.clientX);
			console.log("Client Y :"+e.clientY);*/
			a = e.clientX;
			b = e.clientY;
			
		}

		canvas.addEventListener("mousedown", startPosition);
	canvas.addEventListener("mouseup", finishedPosition);
	canvas.addEventListener("mousemove", draw);


	});

