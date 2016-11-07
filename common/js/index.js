(function ($j) {
	$j(function(){
		topSlideMenu();
	});
})(jQuery);

var topSlideMenu = function(){
	var $wrapperBig = $j("#top_main_img");
	var $wrapperThumb = $j("#top_sub_btn");
	var thumbNum = $wrapperThumb.find("li").size();
	var timeInterval = 4000;
	var timer = null;
	
	var loopFunc = function(){
		clearTimeout(timer);
		var $currentThumb = $wrapperThumb.find("li.current:first");
		var currentNum = $wrapperThumb.find("li").index($currentThumb);
		//alert(currentNum)
		currentNum++;
		if(currentNum === thumbNum){
			currentNum = 0;
		}

		$wrapperBig.find("li.current").css({
			zIndex:0
		}).fadeOut(1000);

		$wrapperThumb.find("li").removeClass("current");
		$wrapperBig.find("li").removeClass("current");

		$wrapperThumb.find("li").css({
			opacity:1
		});
		
		$wrapperThumb.find("li:eq(" + currentNum + ")").addClass("current");
		$wrapperBig.find("li:eq(" + currentNum + ")").addClass("current");
		
		$wrapperThumb.find("li.current").css({
			opacity:"0.6"
		});
		$wrapperBig.find("li.current").css({
			zIndex:10
		}).fadeIn(1000, function(){
			timer = setTimeout(function(){
				loopFunc();
			}, timeInterval);
		})
	}
	
	var initFunc = function(){
		$wrapperThumb.find("li").each(function(){
			$j(this).bind("mouseover", function(){
				var $this = $j(this);
				//clearFunc();
				clearTimeout(timer);

				$wrapperThumb.find("li").css({
					opacity:1
				});
				$this.css({
					opacity:"0.6"
				});

				var currentNum = $wrapperThumb.find("li").index($this);
				
				$wrapperBig.find("li.current").css({
					zIndex:0
				}).fadeOut(1000);
				
				$wrapperThumb.find("li").removeClass("current");
				$wrapperBig.find("li").removeClass("current");
				
				$this.addClass("current");
				$wrapperBig.find("li:eq(" + currentNum + ")").addClass("current");
				
				$wrapperBig.find("li.current").css({
					zIndex:10
				}).fadeIn(1000)
			})
			$j(this).bind("mouseout", function(){
				timer = setTimeout(function(){
					loopFunc();
				}, timeInterval);
			})
		})
		$wrapperBig.bind("mouseover", function(){
			clearTimeout(timer);
		})
		$wrapperBig.bind("mouseout", function(){
			timer = setTimeout(function(){
				loopFunc();
			}, timeInterval);
		})
		$wrapperThumb.find("li.current").css({
			opacity:"0.6"
		});
		$wrapperBig.find("li.current:first").fadeIn(600, function(){
			timer = setTimeout(function(){
				loopFunc();
			}, timeInterval);
		})
	}
	initFunc();
}