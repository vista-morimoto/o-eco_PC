$(function () {
var tab = '.tabbar li';
//var tabSelectImg = '.tabbar li.selected img';
var tabBox = '#tabBox > div';
var selected = 'selected';
$(tabBox).hide();
if (location.hash) {
$(location.hash).show();
$('.tabbar li.' + location.hash.substr(1)).addClass(selected);
//$(tabSelectImg).attr('src', $(tabSelectImg).attr('src').replace('_of.', '_on.'));
} else {
// �擪�̃^�u��class���擾���ē����N���X�������Ă�����̂�selected��ǉ�
// ���̏ꍇtab1��selected��ǉ�
var firstTab = $(tab).first().attr('class');
$('.tabbar li.'+$(tab).first().attr('class')).addClass(selected);
//$(tabSelectImg).attr('src', $(tabSelectImg).attr('src').replace('_of.', '_on.'));
$(tabBox).first().show();
}
$(tab).click(function () {
//$(tabSelectImg).attr('src', $(tabSelectImg).attr('src').replace('_on.', '_of.'));
$(tab).removeClass(selected);
// �N���b�N���ꂽ�N���X�����擾���ē����N���X�������Ă�����̂�selected��ǉ�
$('.tabbar li.'+$(this).attr('class')).addClass(selected);
//$(tabSelectImg).attr('src', $(tabSelectImg).attr('src').replace('_of.', '_on.').replace('_ov.', '_on.'));
$(tabBox).hide();
var selectTab = $(this).find('a').attr('href');
location.hash = selectTab;
$(selectTab).fadeIn();
return false;
});
/*$(tab).hover(function () {
$('img', this).attr('src', $('img', this).attr('src').replace('_of.', '_ov.'));
}, function () {
$('img', this).attr('src', $('img', this).attr('src').replace('_ov.', '_of.'));
});*/
});
