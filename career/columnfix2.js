
var makeContent = function(_obj){
this.obj = _obj;
this.width	= this.obj.clientWidth;
this.height = this.obj.clientHeight;
}

function fixStart(class){

var i = 0;
var ib = 0;
var px = "px";

var DIV = new Array();
var DLs = new Array();
var Classes = new Array();
var key = class;
var re = new RegExp(key);

var group = new Array();

DIV = document.getElementsByTagName('div');
DLs = document.getElementsByTagName('dl');

for(i=0;i<DIV.length;i++)
DIV[i].className.match(re)?Classes.push(DIV[i]):0;

for(ib=0;ib<Classes.length;ib++){
group[ib]=new Array();
Classes[ib].style.width="200px";
Classes[ib].style.position="absolute";
for(i=0;i<Classes[ib].childNodes.length;i++){
if(Classes[ib].childNodes[i].tagName=='DL'){
group[ib].push(Classes[ib].childNodes[i]);
	};
}
}

for(ib=0;ib<group.length;ib++){
for(i=0;i<group[ib].length;i++){
//group[ib][i].style.backgroundColor="#360";
group[ib][i].style.width="200px";
group[ib][i].style.position='absolute';
}

for(i=0;i<group[ib].length;i++){
//group[0][i].style.left = (group[0][i].clientWidth + 20) * i + px;
if(i>=1){group[ib][i].style.left = group[ib][i-1].offsetLeft + group[ib][i].clientWidth + 5 + px;}
if(i>=3){group[ib][i].style.top = group[ib][i-3].offsetTop + group[ib][i-3].offsetHeight + px;}

if(i%3==0){
group[ib][i].style.left = 0 + px ;	
	}
}
}

var content = new makeContent(DIV[0]);
}


