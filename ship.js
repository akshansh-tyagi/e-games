var c=document.getElementById("ship");
var ct=c.getContext("2d");
var im=new Image();
im.src="shipp.jpg";
var st=0;
function asteroid(x,y,r,n,s,st="r")
{   
    this.game_over=false;
    this.x=x;
    this.y=y;
    this.r=r;
    this.angle=0.1;
    this.n=n;
    this.s=s;
    this.st=st;
    this.ys=(1.5+Math.random())*s;

    this.aster=function()
{
    ct.save();
    ct.translate(this.x,this.y);
    ct.rotate(this.angle);
    ct.translate(-this.x,-this.y);
    var x=this.x;
    var y=this.y;
    var ra=this.r;
    var n=this.n;
    ct.beginPath();
    ct.strokeStyle="blue";
    ct.lineWidth=2;
    ct.fillStyle="gray";
    var th=((360/n))*(3.14/180);
    ct.stroke();
    ct.fill();
    ct.save();
    for(var i=0;i<n+1;i++)
    {   
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
    ct.restore();    
};
this.update=function()
{
    if(this.angle>6.28){this.angle=0;}
    this.angle+=0.01;
    if(this.st=="h-"){
        if(this.x<0){this.x=c.width;}
        this.x-=this.s;
    }
    else if(this.st=="h+"){
        if(this.x>c.width){this.x=0;}
        this.x+=this.s;
    }
    else if(this.st=="v+"){
        if(this.y>c.height){this.y=0;}
        this.y+=this.s;
    }
    else if(this.st=="v-"){
        if(this.y<0){this.y=c.height;}
        this.y-=this.s;
    }
    else{
        if(this.x<this.r){this.s=-this.s;}
        else if(this.x>c.width-this.r){this.s=-this.s;}
        else if(this.y>c.height-this.r){this.ys=-this.ys;}
        else if(this.y<this.r){this.ys=-this.ys;}
        this.x+=this.s;
        this.y+=this.ys;

    }
    };

}
this.proectile=function()
{
    var x=this.x;
    var y=this.y;
    ct.strokeStyle="red";
    this.ct.fillStyle="black";
    ct.lineWidth=0.2;
    this.ct.moveTo(x,y);
    ct.arc(x,y,5,0,6.28);
    ct.stroke();
    ct.fill();
}
function ship(x,y,r,a,angle,s)
{
    this.x=x;
    this.y=y;
    this.r=r;
    this.a=a;
    this.angle=angle;
    this.sx=s;
    this.sy=s;
    this.s=s;
    this.ex=true;


    this.space=function()
{
    ct.save();
    ct.translate(this.x,this.y);
    ct.rotate(this.angle);
    ct.translate(-this.x,-this.y);
    ct.beginPath();
    ct.strokeStyle="white";
    ct.fillStyle="red";
    ct.arc(this.x,this.y,this.r,0,2*3.14);
    ct.stroke();
    ct.fill();
    ct.beginPath();
    
    var x1=this.x+this.r,y1=this.y,y2=this.y+this.r*Math.cos(this.a*(3.14/180)),x2=this.x-this.r*Math.sin(this.a*(3.14/180)),y3=this.y-this.r*Math.cos(this.a*(3.14/180)),x3=x2;
    ct.lineWidth=2;
    ct.fillStyle="aqua";
    ct.moveTo(x1,y1);
    ct.quadraticCurveTo(this.x+this.r*Math.sin(this.a*(3.14/180)),y2,x2,y2);
    ct.quadraticCurveTo(this.x,this.y,x3,y3);
    ct.quadraticCurveTo(this.x+this.r*Math.sin(this.a*(3.14/180)),this.y-this.r*Math.cos(this.a*(3.14/180)),x1,y1);
    
    ct.stroke();
    ct.fill();
    if(this.ex==true){
    ct.beginPath();
    ct.strokeStyle="red";
    ct.fillStyle="rgba("+(parseInt(1000*Math.random()))%255+","+(parseInt(1000*Math.random()))%255+","+(parseInt(1000*Math.random()))%255+"1)";
    ct.lineWidth=5;
    ct.moveTo(this.x-(this.x-x2)/1.6,this.y+(y2-this.y)/2);
    ct.quadraticCurveTo(this.x-2*this.r,this.y,this.x-(this.x-x2)/1.6,this.y-(y2-this.y)/2);
    ct.closePath();
    ct.stroke();
    ct.fill();
    }
    ct.restore();
};
this.grid=function()
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
};

this.mover=function()
    {
this.sy=0;
this.sx=this.s;
this.angle=0;
    };

    this.moveu=function()
    {
this.sy=-this.s;
this.sx=0;
this.angle=1.5*Math.PI;
    };

    this.movel=function()
    {
this.sy=0;
this.sx=-this.s;
this.angle=-Math.PI;
    };

    this.moved=function()
    {
this.sy=this.s;
this.sx=0;
this.angle=Math.PI/2;
    };


this.update=function()
{
    if(this.x>(c.width-this.r)){this.sx=-this.sx;}
    else if(this.x<this.r){this.sx=-this.sx;}
    if(this.y>(c.width-this.r)){this.sy=-this.sy;}
    else if(this.y<this.r){this.sy=-this.sy;}
    this.x+=this.sx;
    this.y+=this.sy;
};
this.st=["h+","h-","v+","v-","r"];
this.ast=new asteroid(Math.random()*c.width,Math.random()*c.width,50,5+(Math.floor(Math.random()*100))%10,1,this.st[(Math.floor(Math.random()*100))%5]);

this.collision=function(){
    var x=this.ast['x']-this.x,y=this.ast['y']-this.y;
    if( Math.sqrt(x*x+y*y)<(this.ast['r']+this.r)){this.game_over=true;return true;}
    return false;
}
this.gameover=function()
{
    ct.fillStyle="rgba("+(parseInt(1000*Math.random()))%255+","+(parseInt(1000*Math.random()))%255+","+(parseInt(1000*Math.random()))%255+"1)";
    ct.strokeStyle="red";
    ct.font = "60px Arial";
    ct.textAlign="center";
    ct.lineWidth=3;
    var msg="spacebar to restart";
    ct.fillText(msg,c.width / 2,300);
    ct.drawImage(im,0,0,500,500);
    ct.strokeText(msg,c.width / 2,300);

}
this.draw=function()
{
    if(!this.collision()){
    this.grid();
    this.space();
    this.ast.aster();
    this.ast.update();
    this.update();
    }
    else if(this.collision() && this.game_over==true){
this.gameover();
    }
};
this.frame=function()
{
    ct.clearRect(0,0,c.width,c.height);
    this.draw();
};
}

var o=new ship(250,250,50,30,0,1);
setInterval(o.frame.bind(o),1000/60);
ct.canvas.addEventListener("keydown",function(e){key_handler(e,true);},true);
ct.canvas.addEventListener("keyup",function(e){key_handler(e,false);},true);
function key_handler(e,val)
{
var k=e.key || e.keyCode;
o['ex']=val;
switch(k)
{
    case "ArrowLeft":
    case 37: // left arrow keyCode
    o.movel();
    break;
    case "ArrowUp":
    case 38: // up arrow keyCode
    o.moveu();
    break;
    case "ArrowRight":
    case 39: // right arrow keyCode
    o.mover();
    break;
    case "ArrowDown":
    case 40: // down arrow keyCode
    o.moved();
    break;
    case ' ':
    case  32:

}
};
ct.canvas.focus();