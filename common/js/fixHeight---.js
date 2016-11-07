/*--------------------------------------------------------------------------*
 *  
 *  fixHeight JavaScript Library beta1
 *  
 *  jQuery required.
 *  
 *  MIT-style license. 
 *  
 *  May 18th , 2009 Written by Koji Kimura
 *  http://www.starryworks.co.jp/
 *  
 *--------------------------------------------------------------------------*/

$(document).ready(function(){
	var groups = [];
	var textHeight = 0;
	var $fontSizeDiv;
	
	function init() {
		$(".fixHeight, .fixHeightNAuto, *[class*=fixHeightN]").each(function(){
			var $this = $(this);
			var $children = $(".fixHeightChild",$this);
			if ( !$children.length ) $children = $this.children();
			if ( !$children.length ) return;
			var n = 0;
			if ( $(this).hasClass("fixHeightNAuto") ) n = -1;
			else if ( String($this.attr("class")).match(/fixHeightN([0-9]+)/) ) n = parseInt(String($this.attr("class")).match(/fixHeightN([0-9]+)/)[1]);
			else if ( !$(this).hasClass("fixHeight") ) return;
			groups.push({ parent:this, children:$children, n:n });
		});
		
		$fontSizeDiv = $(document).append('<div>s</div>');
		setInterval(check,1000);
		$(window).resize(check);
		check();
	}
	
	function check() {
		if ( $fontSizeDiv.height() == textHeight ) return;
		textHeight = $fontSizeDiv.height();
		$.each(groups,function(){
			var $children = this.children;
			var n = this.n;
			$children.css("height","auto");
			var maxHeight = 0;
			if ( n == 0 ) {
				$children.each(function(){
					if ( $(this).height() > maxHeight ) maxHeight = $(this).height();
				});
				$children.css("height",maxHeight+"px");
			} else if ( n == -1 ) {
				var top = 0, cnt = 0, st = 0, i = 0;
				$children.each(function(){
					if ( top != $(this).position().top ) {
						if ( cnt > st ) for ( i = st; i < cnt; i++ ) $children.eq(i).css("height",maxHeight+"px");
						top = $(this).position().top;
						maxHeight = 0;
						st = cnt;
					}
					if ( $(this).height() > maxHeight ) maxHeight = $(this).height();
					cnt++;
				});
				if ( cnt > st ) for ( i = st; i < cnt; i++ ) $children.eq(i).css("height",maxHeight+"px");
			} else {
				var maxHeights = [];
				$children.each(function(index){
					if ( index != 0 && index % n == 0 ) {
						maxHeights.push(maxHeight);
						maxHeight = 0;
					}
					if ( $(this).height() > maxHeight ) maxHeight = $(this).height();
				});
				maxHeights.push(maxHeight);
				$children.each(function(index){
					$(this).css("height",maxHeights[Math.floor(index/n)]+"px");
				});
			}
		});
	}
	
	init();
});