
// JavaScript Document
$(function() {
    var topBtn = $('#pageTop');
    topBtn.hide();
  
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {//150の数字を変えるとスクロールの際にボタン出現する場所が変わります。
            if(!jQuery.support.opacity){//IE6,7,8のみの処理
                topBtn.fadeIn(0);
            }
            else{
                topBtn.fadeIn();
            }
        } else {
            if(!jQuery.support.opacity){//IE6,7,8のみの処理
                topBtn.fadeOut(0);
            }
            else{
                topBtn.fadeOut();
            }
        }
    });
  
    topBtn.click(function () {
        $('body,html').animate({scrollTop: 0}, 500);//500の数字を変えるとフェードインアウトのスピードが変わります。お好みで。
        return false;
    });
});

//右サイドナビ 固定

$(function() {
    var topBtn = $('#fixedNav ul');
    topBtn.css('right', '-71px');
	var showFlug = false;
  
	//スクロールが150に達したらボタン表示	
	$(window).scroll(function () {
	        if ($(this).scrollTop() > 150) {
	            if (showFlug == false) {
	                showFlug = true;
	                topBtn.stop().animate({'right' : '0px'}, 200);
					//topBtn.fadeIn();フェードイン
	            }
	        } else {
	            if (showFlug) {
	                showFlug = false;
	                topBtn.stop().animate({'right' : '-71px'}, 200);
					//topBtn.fadeOut();フェードアウト
	            }
	        }
	    });
});

/*ここからページ内リンク用#HeaderFixAreaの高さを引く*/

$(function(){
	var box    = $("#HeaderFixArea");
	var boxTop = box.offset().top;
	$(window).scroll(function () {
		if($(window).scrollTop() >= boxTop) {
			box.addClass("fixed");
		$("body").css("margin-top","180px");
			} 
		else 
			{
			box.removeClass("fixed");
		$("body").css("margin-top","0px");
			}
	});
});

/*ここまで*/