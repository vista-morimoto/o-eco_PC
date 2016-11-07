var box=new Array();
var contents=new Array();
var pagetop=new Array();
box = document.getElementsByTagName('div');

window.onload = function(){

for(i=0; i< box.length;i++){
		if(box[i].className.match('MBstyle')){
		box[i].style.display='none';
		}
		if(box[i].className.match('pagetop')){
		box[i].style.display='none';
		}
		}
	
	for(i=0; i< box.length;i++){
	if(box[i].className.match('MBstyle')){
	contents.push(box[i]);
	}
	}
	
	for(i=0; i< box.length;i++){
	if(box[i].className.match('pagetop')){
	pagetop.push(box[i]);
	}
	}
	contents[4].style.display="block";
	pagetop[4].style.display="block";

	
};


function calling(nomber){
contents[nomber].style.display="block";
for(i=0; i< contents.length;i++){
	if(i!=nomber){
	contents[i].style.display="none";
	}
}

pagetop[nomber].style.display="block";
for(i=0; i< pagetop.length;i++){
	if(i!=nomber){
	pagetop[i].style.display="none";
	}
}

};

function fixStart(_class){

var i = 0;
var ib = 0;
var px = "px";

var DIV = new Array();
var DLs = new Array();
var Classes = new Array();
var key = _class;
var re = new RegExp(key);

var group = new Array();




DIV = document.getElementsByTagName('div');
DLs = document.getElementsByTagName('dl');

for(i=0;i<DIV.length;i++)
DIV[i].className.match(re)?Classes.push(DIV[i]):0;
for(ib=0;ib<Classes.length;ib++){
group[ib]=new Array();
for(i=0;i<Classes[ib].childNodes.length;i++){
if(Classes[ib].childNodes[i].tagName=='DL'){
group[ib].push(Classes[ib].childNodes[i]);
	};
}
}

delete DIV;
delete DLs;

for(ib=0;ib<group.length;ib++){
for(i=0;i<group[ib].length;i++){
group[ib][i].style.position='relative';
}

for(i=0;i<group[ib].length;i++){
//group[ib][i].style.margin=0+px;

if(i>=1 && i<=2){group[ib][i].style.top = -group[ib][i].offsetTop  + group[ib][0].offsetTop + px}
if(i>=3){group[ib][i].style.marginTop = -(group[ib][i].offsetTop - group[ib][i-3].offsetTop - group[ib][i-3].offsetHeight) +10  + px;}

if((i-1)%3==0){
if(i>=1){group[ib][i].style.marginLeft = group[ib][i-1].clientWidth + px;}
	}

if((i-2)%3==0){
if(i>=2){group[ib][i].style.marginLeft = group[ib][i-1].clientWidth *2 + px;}
	}

if(i%3==0){
group[ib][i].style.marginLeft = 0 + px ;	
	}
}
}


}


