$(function()
{	
	function executeMe()
	{
		console.log("image success");
	
		document.getElementById("image_input").onchange = function (e)
		{
			if($(this).val().length > 0)
			{
			  var read = new FileReader();
			  var img_load = document.getElementById("current_image");
			  var file = read.readAsDataURL(e.target.files[0]);
			  var canvas = document.getElementById("canvas");
			  var img_can = new Image();
		
			  read.onload = function(event)
			  {
				if(img_load !== null)
				{
				img_load.src = event.target.result;
				}
				img_can.src = event.target.result;
			  //if full image size directly from event target
				var can2 = canvas.getContext("2d");
				canvas.height = img_can.height;
				canvas.width = img_can.width;
				can2.drawImage(img_can, 0, 0, img_can.width, img_can.height);
			  };
			}
		
			else
			{
		
			}
		};
	}
	
	
	
	
	executeMe();


});