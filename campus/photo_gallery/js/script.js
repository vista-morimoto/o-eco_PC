(function($){
  "use strict";
  $(function(){

    /* -----------------------------------------------------------------------
    ## Masonry ###############################################################
    ----------------------------------------------------------------------- */
    $('.AnimalPhotos').imagesLoaded(function(){
      $('.AnimalPhotos').masonry({
        itemSelector: '.AnimalPhotos li',
        columnWidth: 282,
        gutter: 20
      });
    });

    /* -----------------------------------------------------------------------
    ## 無限スクロール ########################################################
    ----------------------------------------------------------------------- */
    $('.AnimalPhotos').infinitescroll({
      navSelector  : ".navigation",
      nextSelector : ".navigation a",
      itemSelector : "li",
      loading: {
        img: '/campus/photo_gallery/img/loading.gif',
        msgText: ''
      },
      appendCallback: true,
      maxPage: $('.navigation li').size() + 1
    }, function(li, opt){
      //Callback
      var $li = $(li);
      $li.imagesLoaded(function(){
        //画像が読み込まれたら、masonry再実行
        $('.AnimalPhotos').masonry('appended', $li, true);
      });
      //最終ページを読み込んだらボタンを非表示に。
      if(opt.maxPage === opt.state.currPage) $('.infinitBtn').hide();
    });

    //スクロールでの実行を止めて、ボタンをクリックでコンテンツを読み込む。
    $('.AnimalPhotos').infinitescroll('unbind');
    $('.infinitBtn').bind('click', function(e){
      e.preventDefault();
      $('.AnimalPhotos').infinitescroll('retrieve');
    });

  });
}).call(this, jQuery);