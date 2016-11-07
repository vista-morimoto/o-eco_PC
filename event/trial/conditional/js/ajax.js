// JavaScript Document


////////////////////////////////////////////////////////////////////////////////
// 初期設定
////////////////////////////////////////////////////////////////////////////////

/*
xmlファイルパス
----------------------------------------------------------------------*/
xmlPath='./csv/ocaform_test4_utf8.csv';

/*
出力ブロックclass メイン
----------------------------------------------------------------------*/
outputItem='.itemList';

/*
出力ブロックclass ナビ
----------------------------------------------------------------------*/
outputNavi='.itemNavi';

/*
出力ブロックclass ステイタス
----------------------------------------------------------------------*/
outputStatus='.itemStatus';

/*
件数ゼロ文言
----------------------------------------------------------------------*/
txtZero='<p id="NoResurt"><img src="img/no_resurt.png" alt="現在、お探しの条件のイベントはありません。次回開催日が決まり次第お知らせします。またチェックしに来てもにょ。"></p>';

/*
エラー文言
----------------------------------------------------------------------*/
txtError='データ取得に失敗しました';


////////////////////////////////////////////////////////////////////////////////
// ハンドラ
////////////////////////////////////////////////////////////////////////////////

$(loadAjax);
function loadAjax(){
	getAjaxData();
	$('#itemSearch input:checkbox').click(getAjaxData);
	$('.itemSearchReset').click(getAjaxData);
}


////////////////////////////////////////////////////////////////////////////////
// メインプロトコル
////////////////////////////////////////////////////////////////////////////////
/*
jQuery xmlリクエスト
----------------------------------------------------------------------*/
function getAjaxData(){
	$.ajax({
		url:xmlPath,
		error:outputError,
		success:outputSuccess
	});
}

/*
getAjaxData ／ error時処理
----------------------------------------------------------------------*/
function outputError(){
	$(blockOutput).text(txtError);
}

/*
getAjaxData ／ success時処理
----------------------------------------------------------------------*/
function outputSuccess(data){
	var arr=makeArr(data);
	var src=makeSrc(arr);
	$(outputItem).hide().html(src);
	loadNavi();
	$(outputItem).fadeIn(300);
	loadComma();
}


////////////////////////////////////////////////////////////////////////////////
// 配列生成
////////////////////////////////////////////////////////////////////////////////

var makeArr=function(data){
	var obj=data.split('\n');
	arr=[];
	var i=0,chk=$('#itemSearch input:checkbox');
	$(obj).each(function(){
		var objElm=this.split(',');
		if(objElm[0]!=''&&objElm[1]!=''&&objElm[2]!=''&&objElm[0].indexOf('/')!=-1){
//絞り込み検索
			if(
				$(chk+':checked').length==0||
				(
					($(chk)[0].checked==false&&$(chk)[1].checked==false&&$(chk)[2].checked==false&&$(chk)[3].checked==false&&$(chk)[4].checked==false&&$(chk)[5].checked==false)||
					($(chk)[0].checked==true&&this.indexOf($(chk).eq(0).parent().text())!=-1)||
					($(chk)[1].checked==true&&this.indexOf($(chk).eq(1).parent().text())!=-1)||
					($(chk)[2].checked==true&&this.indexOf($(chk).eq(2).parent().text())!=-1)||
					($(chk)[3].checked==true&&this.indexOf($(chk).eq(3).parent().text())!=-1)||
					($(chk)[4].checked==true&&this.indexOf($(chk).eq(4).parent().text())!=-1)||
					($(chk)[5].checked==true&&this.indexOf($(chk).eq(5).parent().text())!=-1)
				)/*&&(
					($(chk)[5].checked==false&&$(chk)[6].checked==false&&$(chk)[7].checked==false&&$(chk)[8].checked==false)||
					($(chk)[5].checked==true&&objElm[10]==1)||
					($(chk)[6].checked==true&&objElm[11]==1)||
					($(chk)[7].checked==true&&objElm[12]==1)||
					($(chk)[8].checked==true&&objElm[13]==1)
				)&&(
					($(chk)[9].checked==false&&$(chk)[10].checked==false&&$(chk)[11].checked==false&&$(chk)[12].checked==false)||
					($(chk)[9].checked==true&&objElm[14]==1)||
					($(chk)[10].checked==true&&objElm[15]==1)||
					($(chk)[11].checked==true&&objElm[16]==1)||
					($(chk)[12].checked==true&&objElm[17]==1)
				)*/&&(
						($(chk)[6].checked==false
						&&
						$(chk)[7].checked==false
						&&
						$(chk)[8].checked==false
						&&
						$(chk)[9].checked==false										
						&&
						$(chk)[10].checked==false										
						&&
						$(chk)[11].checked==false										
						&&
						$(chk)[12].checked==false										
						&&
						$(chk)[13].checked==false										
						&&
						$(chk)[14].checked==false										
						&&
						$(chk)[15].checked==false										
						&&
						$(chk)[16].checked==false										
						)||
					($(chk)[6].checked==true&&this.indexOf($(chk).eq(6).parent().text())!=-1)||
					($(chk)[7].checked==true&&this.indexOf($(chk).eq(7).parent().text())!=-1)||
					($(chk)[8].checked==true&&this.indexOf($(chk).eq(8).parent().text())!=-1)||
					($(chk)[9].checked==true&&this.indexOf($(chk).eq(9).parent().text())!=-1)||		
					($(chk)[10].checked==true&&this.indexOf($(chk).eq(10).parent().text())!=-1)||				
					($(chk)[11].checked==true&&this.indexOf($(chk).eq(11).parent().text())!=-1)||				
					($(chk)[12].checked==true&&this.indexOf($(chk).eq(12).parent().text())!=-1)||				
					($(chk)[13].checked==true&&this.indexOf($(chk).eq(13).parent().text())!=-1)||				
					($(chk)[14].checked==true&&this.indexOf($(chk).eq(14).parent().text())!=-1)||				
					($(chk)[15].checked==true&&this.indexOf($(chk).eq(15).parent().text())!=-1)||				
					($(chk)[16].checked==true&&this.indexOf($(chk).eq(16).parent().text())!=-1)		
					)
			){
				arr[i]=[];
				arr[i]=this.split(',');
				i++;
			}
		}
	});
	return arr;
}


////////////////////////////////////////////////////////////////////////////////
// ソース生成
////////////////////////////////////////////////////////////////////////////////

var makeSrc=function(arr){
	var src='\n<div class="clearfix">\n';http://172.19.132.55:8001/sample/ajax/ajax0003/sample01/sample.html
	$(arr).each(function(){
		//パラメーターチェック。this[6]が「w(数字)」ならtaiken、それ以外はspevent
		if(/^w[0-9]+$/.test(this[6])){
			contents = 'ocaeco_taiken';
		} else {
			contents = 'ocaeco_summersp';
		}

		src+='<div class="OneTrial '+this[4]+'">\n';
		src+='<h4><em>'+this[2]+'</em></h4>\n';
		src+='<div class="OneTrialInner">\n';
		src+='<ul>\n';
		src+='<li><strong class="'+this[8]+'"><span>'+this[1]+'</span><br />（'+this[7]+'）</strong></li>\n';
		src+='<li><img alt="'+this[2]+'" src="'+this[5]+'"></li>\n';
		//src+='<!--[if lte IE 7]><li class="dummy">&nbsp;</li><![endif]-->\n';
		src+='</ul>\n';
		src+='<p><a title="参加のお申し込みはこちら" target="'+this[4]+'" href="http://www.com-forms.jp/appform/form/index/id/'+contents+'&amp;menu1=e:'+this[6]+'"><img width="210" height="35" alt="参加お申し込み" src="img/btnSanka.gif"></a></p>\n';
		src+='</div>\n';
		src+='</div>\n';
	});
	src+='</div>\n';
	return src;
}


////////////////////////////////////////////////////////////////////////////////
// ナビゲーション
////////////////////////////////////////////////////////////////////////////////

/*
１ページ表示件数
----------------------------------------------------------------------*/
numItem=18;

/*
ナビゲーション メイン
----------------------------------------------------------------------*/
var loadNavi=function(){
	setNavi();
	loadNaviClick();
}
var loadNaviClick=function(){
	$('.iNPrev').click(setNaviPrev);
	$('.iNNext').click(setNaviNext);
	$('.iNItem').click(setNaviItem);
}
var setNaviPrev=function(){
	if($(this).hasClass('off')) return;
	var numCur=0;
	$('.itemNaviUpper .iNItem').each(function(){
		var idx=$('.itemNaviUpper .iNItem').index(this);
		if($(this).hasClass('cur')) numCur=idx;
	});
	setNavi(numCur-1);
	loadNaviClick();
}
var setNaviNext=function(){
	if($(this).hasClass('off')) return;
	var numCur=0;
	$('.itemNaviUpper .iNItem').each(function(){
		var idx=$('.itemNaviUpper .iNItem').index(this);
		if($(this).hasClass('cur')) numCur=idx;
	});
	setNavi(numCur+1);
	loadNaviClick();
}
var setNaviItem=function(){
	if($(this).hasClass('cur')) return;
	var pages=$('.iNItem').size()/2;
	var idx=$('.iNItem').index(this);
	if(idx>=pages) idx=idx-pages;
	setNavi(idx);
	loadNaviClick();
}
var setNavi=function(numCur){
	if(!numCur) numCur=0;
	var numMax=$('.OneTrial').size();
	if(numMax==0){
		$(outputNavi).hide();
		$(outputStatus).hide();
		$(outputItem).html(txtZero).fadeIn(300);
		return;
	}
	if(numMax>numItem){
		$('.OneTrial').hide();
		$('.OneTrial').each(function(){
			var idx=$('.OneTrial').index(this);
			if(idx>=numCur*numItem&&idx<(numCur+1)*numItem) $(this).show();
		});
	}
	makeSrcNavi(numCur);
	$('.itemSTotal').text(numMax);
	$('.itemSMin').text(numCur*numItem+1);
	$('.itemSMax').text(Math.min((numCur+1)*numItem,numMax));
	$(outputStatus).hide().fadeIn(300);
}
var makeSrcNavi=function(numCur){
	var numMax=$('.OneTrial').size();
	var page=Math.ceil(numMax/numItem);
	var src='\n';
	src+='<ul>\n';
	src+='<li><a href="javascript:void(0);" class="iNPrev';
	if(numCur==0) src+=' off';
	src+='"><img src="img/navPrev.png" alt="前へ"></a></li>\n';
	for(var i=0;i<page;i++){
		src+='<li><a href="javascript:void(0);" class="iNItem';
		if(numCur==i) src+=' cur';
		src+='">'+(i+1)+'</a></li>\n';
	}
	src+='<li><a href="javascript:void(0);" class="iNNext';
	if(numCur==(page-1)) src+=' off';
	src+='"><img src="img/navNext.png" alt="次へ"></a></li>\n';
	src+='</ul>\n';
	$(outputNavi).hide().html(src).fadeIn(300);
}

////////////////////////////////////////////////////////////////////////////////
// カンマ桁
////////////////////////////////////////////////////////////////////////////////

/*
カンマ桁対象オブジェクト
----------------------------------------------------------------------*/
var targetClass='.numberComma';

/*
カンマ桁
----------------------------------------------------------------------*/
var digitUnit=3;

/*
ページ内カンマ自動制御
----------------------------------------------------------------------*/
function loadComma(){
	$(targetClass).each(function(){
		if($(this).text().indexOf(",")==-1&&!($(this).text().match(/[^0-9]+/))){
			$(this).html(commaDelim($(this).text()));
		}
	});
}

/*
価格数値カンマ制御
----------------------------------------------------------------------*/
function commaDelim(str){
	if(str.length>3){
		var oriStr=str;
		var num=Math.floor(str.length/digitUnit);
		var measure=str.length/3-Math.floor(str.length/digitUnit);
		measure=Math.floor(measure*10);
		measure=measure/digitUnit;
		str="";
		if(measure>0) str=oriStr.slice(0,measure);
		for(var i=0;i<(num);i++){
			if(str!="") str+=",";
			str+=oriStr.slice(measure+i*digitUnit,measure+(i+1)*digitUnit);
		}
	}
	return str;
}


////////////////////////////////////////////////////////////////////////////////
/// 配列 index IE対策
////////////////////////////////////////////////////////////////////////////////

if(!Array.indexOf){
	Array.prototype.indexOf=function(object){
		for(var i=0;i<this.length;i++){
			if(this[i]==object) return i;
		}
		return -1;
	}
}