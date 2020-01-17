var c=document.getElementById("c3");
var ct=c.getContext("2d");
ct.strokeStyle = "blue";//color of text
ct.fillStyle="red";
ct.lineWidth = 1.5;
var x=51,y=c.height/2,m=0;
function aster(ct,x,y,n,ra)
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
        
    }
    ct.restore();
    ct.stroke();
    ct.moveTo(x+Math.sin(th),y);
    ct.closePath();
    ct.fill();
    
}
function grid(ct)
{
    ct.beginPath();
    ct.font = "10px Arial";
    ct.strokeStyle = "black";
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

function pac(x,y,r,n)
{
    ct.moveTo(x,y);
    ct.arc(x,y,r,n*3.14,(2-n)*3.14);
    ct.closePath();
    ct.stroke();
    ct.fill();
    
}

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
function frame()
{
    ct.clearRect(0,0,c.width,c.height);
    draw(ct);
    window.requestAnimationFrame(frame);
}
var xp=1,yp=1,mp=0.05;
function update()
{
    if(a==360){a=0;}
    else{a=a+1;}
    if(m>0.3)
    {
        mp=-0.0015;
    }
    else if(m<0)
    {
        mp=0.0015;
    }
    m=m+mp;
    if(x>450){xp=-1;}
    else if(x<50){xp=-xp;}
    if(y>450){yp=-1;}
    else if(y<50){yp=-yp;}
    x=x+xp*Math.random();
    y=y+yp*Math.random();
}
var a=10;
function draw(ct)
{
    var x1=x,y1=y;
    grid(ct);
    ct.beginPath();
    update();
    pac(x,y,40,m);
    ct.fill();
    ct.stroke();
    ct.beginPath();
    ct.save();
    ct.translate(250,250);
    ct.rotate(a*(3.14/180));
    ct.translate(-250,-250);
    aster(ct,x,y,3+(Math.random()*10)/7,50);
   
    ct.restore();
    
}
window.requestAnimationFrame(frame);

