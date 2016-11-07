function fixStart(class){

var DIV = new Array();
var DLs = new Array();

var element = new Array();
var contents = new Array();

var wrapWidth = new Array();
var _x = new Array();
var _y = new Array();

var px = "px";

var hani = new Array();
var hoge2 = new Array();

var key = class;
re = new RegExp(key);

DIV = document.getElementsByTagName('div');
DLs = document.getElementsByTagName('dl');	
	for(i=0; i< DLs.length;i++){
		//alert(DLs[i].parentElement.className);
		if(DLs[i].parentElement.className.match(re)){
		contents.push(DLs[i]);
		}
	}

	for(i=0; i< DIV.length;i++){
		if(DIV[i].className.match(re)){
		element.push(DIV[i]);
		wrapWidth.push(DIV[i].clientWidth);
		}
	}
	//alert(contents);
	var Width = contents[0].clientWidth;

	var col = Math.floor(wrapWidth[0]/Width);
	//alert(contents[3].offsetTop);
	//contents[3].style.display='none';
	
	for(i=0; i< contents.length;i++){
		if(i%col==0){
		hani.push(i);
		}
//alert(contents[i].offsetTop);
	//alert(getCSS(contents[4],"width"));
	//contents[i].style.float='right';
	//contents[i].style.position='relative';
	}
	
	for(i=0; i<contents.length/col;i++){
	hoge2[i]=new Array();
	hoge2[i] = contents.slice(hani[i],hani[i+1]);
	}
	
	for(i=0; i<contents.length/col;i++){
		for(b=0; b<col;b++){
		//alert(hoge2[i][b].offsetTop);
		if(i!=0){
		hoge2[i][b].style.top= hoge2[i-1][b].clientHeight + hoge2[i-1][b].offsetTop + 10 + 'px';	
			}
		hoge2[i][b].style.left= b*210 + 'px';
		}
	}
	
}