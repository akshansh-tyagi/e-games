var cv=document.getElementById("c2");
var ct=cv.getContext("2d");
ct.fillStyle="yellow";
ct.strokeStyle="red";
ct.lineWidth=2;
function pac(x,y,r,n)
{
    ct.moveTo(x,y);
    ct.arc(x,y,r,n*3.14,(2-n)*3.14);
    ct.closePath();
    ct.stroke();
    ct.fill();
    
}
var i=0;
do{
pac(100,100,50,Math.random());
document.write(i++);

}while(Math.random()<0.5);
function space(x,y,r,a)
{
    ct.save();
    ct.translate(x,y);
    ct.rotate(270*(3.14/180));
    ct.translate(-x,-y);
    ct.beginPath();
    ct.strokeStyle="white";
    ct.fillStyle="red";
    ct.arc(x,y,r,0,2*3.14);
    ct.stroke();
    ct.fill();
    ct.beginPath();
    
    var x1=x+r,y1=y,y2=y+r*Math.cos(a*(3.14/180)),x2=x-r*Math.sin(a*(3.14/180)),y3=y-r*Math.cos(a*(3.14/180)),x3=x2;
    ct.lineWidth=2;
    ct.fillStyle="aqua";
    ct.moveTo(x1,y1);
    ct.quadraticCurveTo(x+r*Math.sin(a*(3.14/180)),y2,x2,y2);
    ct.quadraticCurveTo(x,y,x3,y3);
    ct.quadraticCurveTo(x+r*Math.sin(a*(3.14/180)),y-r*Math.cos(a*(3.14/180)),x1,y1);
    ct.closePath();
    ct.stroke();
    ct.fill();
    ct.restore();
    pac(200,200,50,0.3);
    
}
space(250,250,50,45);

function aster(x,y,n,ra)
{
    ct.beginPath();
    ct.strokeStyle="blue";
    ct.lineWidth=2;
    ct.fillStyle="white";
    var th=((360/n)/2)*(3.14/180),r=(90-((360/n)/2))*(3.14/180),l=(ra*Math.sin(th))*2;
    x1=x+Math.sin(th);y1=y+Math.cos(th);
    ct.moveTo(x1,y1);
    ct.stroke();
    ct.fill();
    ct.save();
    for(var i=0;i<n+1;i++)
    {
        ct.strokeStyle="blue";
    ct.lineWidth=2;
    ct.fillStyle="white";
        
        ct.translate(x,y);
        ct.rotate(2*th);
        ct.translate(-x,-y);
        if(i==0){ct.moveTo(x+ra,y);}
        else{ct.lineTo(x+ra,y);}
        
        document.write("--");
        
    }
    ct.restore();
    ct.stroke();
    ct.moveTo(x+Math.sin(th),y);
    ct.closePath();
    ct.fill();
    
}

aster(300,300,3,50);

