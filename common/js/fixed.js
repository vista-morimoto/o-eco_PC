/*$(function() {
window.alert("アラートアラートアラート");
});*/

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

/*$(function(){
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
});*/

/*ここまで*/