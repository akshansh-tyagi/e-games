


var c=document.getElementById("c1");
var ct = c.getContext("2d");
ct.strokeStyle = "blue";//color of text
ct.fillStyle="red";


ct.lineWidth = 1;
ct.rect(0,0,100,100);
ct.stroke();
ct.fill();

ct.font = "12px Arial";
ct.strokeStyle = 'blue';
ct.fillStyle = 'orange';
ct.lineWidth = 1;
ct.textAlign="center";
let msg = "2D Drawing"
ct.fillText(msg, c.width / 2, 100);
ct.beginPath();
ct.arc(50,50,20,0,3.14);
ct.moveTo(0,0)
ct.lineTo(250,250);
ct.lineTo(0,500);
ct.stroke();
function grid()
{
    ct.beginPath();
    ct.font = "10px Arial";
ct.strokeStyle = 'red';
ct.lineWidth=0.2;
    
    for(var x=0;x<=c.width;x=x+10)
    {
        ct.beginPath();
        ct.moveTo(x,0);
        
        ct.lineWidth=(x%50==0)?0.75:0.2;
        ct.lineTo(x,c.height);
        ct.stroke();
    }
    for(var x=0;x<=c.width;x=x+50)
    {
        ct.moveTo(x,0);
        ct.strokeText(x,x,10);
    }
    ct.beginPath();
    ct.lineWidth=0.2;
    for(var x=0;x<=c.height;x=x+10)
    {
        ct.moveTo(0,x);
        ct.lineTo(c.width,x);
    }
ct.stroke();
}
grid();
function plus(x,y)
{
 ct.beginPath();
 ct.moveTo(x,y);
 ct.lineTo(x+10,y);
 ct.moveTo(x,y);
 ct.lineTo(x-10,y);   
 ct.moveTo(x,y);
 ct.lineTo(x,y+10);   
 ct.moveTo(x,y);
 ct.lineTo(x,y-10);   
 ct.stroke(); 
   
}

plus(250,250);

ct.moveTo(250,250);
ct.quadraticCurveTo(300,300,350,350);
ct.quadraticCurveTo(250,300,250,250);
ct.stroke();
ct.fill();