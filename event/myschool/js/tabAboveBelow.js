$(function () {
var tab = '.tabbar li';
//var tabSelectImg = '.tabbar li.selected img';
var tabBox = '#tabBox > tbody';
var selected = 'selected';
$(tabBox).hide();
if (location.hash) {
$(location.hash).show();
$('.tabbar li.' + location.hash.substr(1)).addClass(selected);
//$(tabSelectImg).attr('src', $(tabSelectImg).attr('src').replace('_of.', '_on.'));
} else {
// 先頭のタブのclassを取得して同じクラス名がついているものにselectedを追加
// この場合tab1にselectedを追加  

$("#tabBox > tbody:first").show();

//var firstTab = $(tab).first().attr('class');
var firstTab = $(".tabbar li:first").attr('class');
//alert(firstTab);

$('.tabbar li.'+$(".tabbar li:first").attr('class')).addClass(selected);
//$(tabSelectImg).attr('src', $(tabSelectImg).attr('src').replace('_of.', '_on.'));
$(tabBox).first().show();

}
$(tab).click(function () {
//$(tabSelectImg).attr('src', $(tabSelectImg).attr('src').replace('_on.', '_of.'));
$(tab).removeClass(selected);
// クリックされたクラス名を取得して同じクラス名がついているものにselectedを追加
$('.tabbar li.'+$(this).attr('class')).addClass(selected);
//$(tabSelectImg).attr('src', $(tabSelectImg).attr('src').replace('_of.', '_on.').replace('_ov.', '_on.'));
$(tabBox).hide();
var selectTab = $(this).find('a').attr('href');
location.hash = selectTab;
$(selectTab).show();
return false;
});
/*$(tab).hover(function () {
$('img', this).attr('src', $('img', this).attr('src').replace('_of.', '_ov.'));
}, function () {
$('img', this).attr('src', $('img', this).attr('src').replace('_ov.', '_of.'));
});*/
});
