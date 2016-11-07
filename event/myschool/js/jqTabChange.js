$(function () {
	var tab = '.nav li';
	var tab2 = '.nav2 li';
	var tabSelectImg = '.nav li.selected img';
	var tabSelectImg2 = '.nav2 li.selected img';
	var tabBox = '#tab-box > div';
	var selected = 'selected';
	
	$(tabBox).hide();

	if (location.hash) {
		$(location.hash).show();
		$('.nav li.' + location.hash.substr(1)).addClass(selected);
		$(tabSelectImg).attr('src', $(tabSelectImg).attr('src').replace('_f.', '_o.'));
		$('.nav2 li.' + location.hash.substr(1)).addClass(selected);
		$(tabSelectImg2).attr('src', $(tabSelectImg2).attr('src').replace('_f.', '_o.'));

	} else {

		var firstTab = $(tab).first().attr('class');
		var firstTab2 = $(tab2).first().attr('class');
		// 先頭のタブのclassを取得して同じクラス名がついているものにselectedを追加
		// この場合tab1にselectedを追加
		$('.nav li.'+$(tab).first().attr('class')).addClass(selected);
		$('.nav2 li.'+$(tab2).first().attr('class')).addClass(selected);
		$(tabSelectImg).attr('src', $(tabSelectImg).attr('src').replace('_f.', '_o.'));
		$(tabSelectImg2).attr('src', $(tabSelectImg2).attr('src').replace('_f.', '_o.'));
		$(tabBox).first().show();

	}

	$(tab).click(function () {
		$(tabSelectImg).attr('src', $(tabSelectImg).attr('src').replace('_o.', '_f.'));
		$(tab).removeClass(selected);
		$(tabSelectImg2).attr('src', $(tabSelectImg2).attr('src').replace('_o.', '_f.'));
		$(tab2).removeClass(selected);
		// クリックされたクラス名を取得して同じクラス名がついているものにselectedを追加
		var clickTab = $(this).attr('class')
		$('.nav li.'+clickTab).addClass(selected);
		$('.nav2 li.'+clickTab).addClass(selected);
		$(tabSelectImg).attr('src', $(tabSelectImg).attr('src').replace('_f.', '_o.').replace('_ov.', '_o.'));
		$(tabSelectImg2).attr('src', $(tabSelectImg2).attr('src').replace('_f.', '_o.').replace('_ov.', '_o.'));
		$(tabBox).hide();

		var selectTab = $(this).find('a').attr('href');
		$(selectTab).fadeIn(0);
		$('html,body').animate({ scrollTop: $('#nav').offset().top }, 'slow','swing');
		return false;

	});

	$(tab2).click(function () {

		$(tabSelectImg).attr('src', $(tabSelectImg).attr('src').replace('_o.', '_f.'));
		$(tab).removeClass(selected);
		$(tabSelectImg2).attr('src', $(tabSelectImg2).attr('src').replace('_o.', '_f.'));
		$(tab2).removeClass(selected);
		// クリックされたクラス名を取得して同じクラス名がついているものにselectedを追加
		var clickTab = $(this).attr('class')
		$('.nav li.'+clickTab).addClass(selected);
		$('.nav2 li.'+clickTab).addClass(selected);
		$(tabSelectImg).attr('src', $(tabSelectImg).attr('src').replace('_f.', '_o.').replace('_ov.', '_o.'));
		$(tabSelectImg2).attr('src', $(tabSelectImg2).attr('src').replace('_f.', '_o.').replace('_ov.', '_o.'));
		$(tabBox).hide();

		var selectTab = $(this).find('a').attr('href');
		$(selectTab).fadeIn(0);
		$('html,body').animate({ scrollTop: $('#nav').offset().top }, 'slow','swing');
		return false;

	});


	$(tab).hover(function () {
		$('img', this).attr('src', $('img', this).attr('src').replace('_f.', '_ov.').replace('_f.', '_ov.'));
	}, function () {
		$('img', this).attr('src', $('img', this).attr('src').replace('_ov.', '_f.').replace('_ov.', '_f.'));
	});

	$(tab2).hover(function () {
		$('img', this).attr('src', $('img', this).attr('src').replace('_f.', '_ov.').replace('_f.', '_ov.'));
	}, function () {
		$('img', this).attr('src', $('img', this).attr('src').replace('_ov.', '_f.').replace('_ov.', '_f.'));
	});

});
