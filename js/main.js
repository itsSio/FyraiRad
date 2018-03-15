$(start);
function start() {
  
  let c=document.getElementById("myCanvas");
	let ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.arc(75,75,50,0,2*Math.PI);
	ctx.stroke();

}