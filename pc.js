var c=document.getElementById("ani");
var ct=c.getContext("2d");
var m=new Image(),a=new Image(),b=new Image();
m.src="ma.png";
a.src="ap.png";
b.src="ba.jpg";
function pacman(c,ct,x1,y1,r1,s1,rg)
{
    this.score=0;
    this.life=4;
    this.x=x1;
    this.y=y1;
    this.r=r1;
    this.xs=s1;
    this.ys=s1;
    this.s=s1;
    this.n=0.1;
    this.ns=0.01;
    this.angle=0;
    this.gameover=false;
    this.mover=function()
    {
this.ys=0;
this.xs=this.s;
this.angle=0;
    };

    this.moveu=function()
    {
this.ys=-this.s;
this.xs=0;
this.angle=1.5*Math.PI;
    };

    this.movel=function()
    {
this.ys=0;
this.xs=-this.s;
this.angle=-Math.PI;
    };

    this.moved=function()
    {
this.ys=this.s;
this.xs=0;
this.angle=Math.PI/2;
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
var fax=Math.random()*ct.canvas.height,fay=Math.random()*ct.canvas.width;
var fmx=Math.random()*ct.canvas.height,fmy=Math.random()*ct.canvas.width;
var fbx=Math.random()*ct.canvas.height,fby=Math.random()*ct.canvas.width,rf=25;
this.fruit=function()
{
    if (Math.abs(this.x-fax)<this.r+rf/2 && Math.abs(this.y-fay)<this.r+rf/2)
    {
        fax=Math.random()*ct.canvas.height,fay=Math.random()*ct.canvas.width;
        ct.drawImage(a,fax,fay,rf,rf);
        this.score= this.score+5;
    }
    else{
    ct.drawImage(a,fax,fay,rf,rf);
    }
    if (Math.abs(this.x-fmx)<this.r+rf/2 && Math.abs(this.y-fmy)<this.r+rf/2)
    {
        fmx=Math.random()*ct.canvas.height,fmy=Math.random()*ct.canvas.width;
        ct.drawImage(m,fmx,fmy,rf,rf);
        this.score= this.score+10;
    }
    else{
        ct.drawImage(m,fmx,fmy,rf,rf);
    }
    if (Math.abs(this.x-fbx)<this.r+rf/2 && Math.abs(this.y-fby)<this.r+rf/2)
    {
        fbx=Math.random()*ct.canvas.height,fby=Math.random()*ct.canvas.width;
        ct.drawImage(b,fbx,fby,rf,rf);
        this.score= this.score+15;
    }
    else{
        ct.drawImage(b,fbx,fby,rf,rf);
    }
    
    
};
this.update=function()
{
    if(this.n>0.3){this.ns=-this.ns;}
    else if(this.n<0.01){this.ns=-this.ns;}
    if(this.x>ct.canvas.width-this.r){this.xs=-this.xs;}
    else if(this.x<this.r){this.xs=-this.xs;}
    if(this.y>ct.canvas.height-this.r){this.ys=-this.ys;}
    else if(this.y<this.r){this.ys=-this.ys;}
    this.x=this.x+this.xs;
    this.y=this.y+this.ys;
    this.n+=this.ns;
};
this.drawpm=function()
{
    ct.save()
    ct.translate(this.x,this.y);
    ct.rotate(this.angle);
    ct.translate(-this.x,-this.y);
    ct.beginPath();
    ct.strokeStyle="aqua";
    ct.fillStyle="yellow";
    ct.moveTo(this.x,this.y);
    ct.arc(this.x,this.y,this.r,this.n*3.14,(2-this.n)*3.14);
    ct.closePath();
    ct.stroke();
    ct.fill();
    ct.restore();

};
var g=new ghost(rg,1);
this.lost=function()
{
    ct.save();
    ct.strokeStyle="red";
    ct.font = "80px Arial";
    ct.textAlign="center";
    ct.lineWidth=10;
    var msg="LOST ONE LIFE";
    ct.fillText(msg,c.width / 2,300);
    ct.strokeText(msg,c.width / 2,300);
    ct.restore();
};
this.coll=function()
{
    var x=g["x1"]-this.x,y=g["y1"]-this.y;
    if(Math.sqrt(x*x+y*y)<=rg+this.r)
    {
        this.life=this.life-1;
        this.x=Math.random()*ct.canvas.width;
        this.y=Math.random()*ct.canvas.height;
        if(this.life===0){
        this.gameover=true;
        return true;
        }
        
    }
    return false;
};

this.gameoverr=function()
{
    ct.fillStyle="rgba("+(parseInt(1000*Math.random()))%255+","+(parseInt(1000*Math.random()))%255+","+(parseInt(1000*Math.random()))%255+"1)";
    ct.strokeStyle="red";
    ct.font = "80px Arial";
    ct.textAlign="center";
    ct.lineWidth=10;
    var msg="GAME  END";
    ct.fillText(msg,c.width / 2,300);
    ct.strokeText(msg,c.width / 2,300);

};
this.draw=function()
{
    ct.fillStyle="blue";
    ct.strokeStyle="red";
    ct.font = "20px Arial";
    ct.textAlign="center";
    ct.lineWidth=1;
    var msg="LIFES : "+(this.life)+" --- SCORE : "+this.score;
    ct.fillText(msg,200,20);
    ct.strokeText(msg,200,20);
    if(this.gameover==true)
    {
        this.gameoverr();
    }
    else{
    this.grid();
    this.coll();
    g.drawg();
    this.fruit();
    g.update();
    this.drawpm();
    }
};
this.frame=function()
{
    
    ct.clearRect(0,0,c.width,c.height);
    this.draw();
    this.update();
};
}

function  ghost(r1,s)
{
    this.x1=Math.random()*ct.canvas.width;
    this.y1=Math.random()*ct.canvas.height;
    this.s=s;
    this.drawg=function()
    {
        var x1=this.x1;
        var y1=this.y1;
        ct.beginPath();
        ct.strokeStyle="black";
        ct.fillStyle="blue";
        ct.lineWidth=5;
        ct.arc(x1-r1+r1/4,y1+r1,r1/4,0,3.14);
        ct.arc(x1-r1/4,y1+r1,r1/4,0,3.14);
        ct.arc(x1+r1/4,y1+r1,r1/4,0,3.14);
        ct.arc(x1+r1*0.75,y1+r1,r1/4,0,3.14);
        ct.lineTo(x1+r1,r1+y1);
        ct.lineTo(x1+r1,y1);
        ct.arc(x1,y1,r1,3.14,6.28);
        ct.lineTo(x1-r1,y1);
        ct.lineTo(x1-r1,y1+r1);
        ct.closePath();
        ct.stroke();
        ct.fill();
        ct.beginPath();
        ct.strokeStyle="rgba("+(parseInt(1000*Math.random()))%255+","+(parseInt(1000*Math.random()))%255+","+(parseInt(1000*Math.random()))%255+"1)";
        ct.fillStyle="rgba("+(parseInt(1000*Math.random()))%255+","+(parseInt(1000*Math.random()))%255+","+(parseInt(1000*Math.random()))%255+"1)";
        ct.lineWidth=5;
        ct.arc(x1-r1/2.5,y1,r1/5,0,6.28);
        ct.moveTo(r1/5+x1+r1/2.5,y1);
        ct.arc(x1+r1/2.5,y1,r1/5,0,Math.PI*2);
        ct.fill();
        ct.stroke();
    };
    this.update=function()
{
    if(this.x1>500){this.x1=0;}
    if(this.x1<0){this.x1=500;}
    if(this.y1>500){this.y1=0;}
    if(this.y1<0){this.y1=500;}
    this.x1=this.x1+this.s*Math.random();
    this.y1=this.y1+this.s*Math.random();
};

    
}


var pac=new pacman(c,ct,250,250,20,3,20);

setInterval(pac.frame.bind(pac),1000/60);
ct.canvas.onkeydown = function(e) {
    let k =e.key || e.keyCode;
    var nhandle=false;
    switch(k) {
    case "ArrowLeft":
    case 37: // left arrow keyCode
    pac.movel();
    break;
    case "ArrowUp":
    case 38: // up arrow keyCode
    pac.moveu();
    break;
    case "ArrowRight":
    case 39: // right arrow keyCode
    pac.mover();
    break;
    case "ArrowDown":
    case 40: // down arrow keyCode
    pac.moved();
    break;

    default:
        nhandle=true;
    }
    if(!nhandle){e.preventDefault();}
};
ct.canvas.focus();
