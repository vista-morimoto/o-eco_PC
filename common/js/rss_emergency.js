(function($) {
  $(function() {
    var feed = 'http://www.osaka-eco.ac.jp/contents/ecobiyori/feed/?post_type=emergency'; //RSSのパス
    var container = document.getElementById('emergencyContents');
    var tags = {
      wrapper: 'dl',
      title  : 'dt',
      text   : 'dd'
    };
    var setNum = 1; //表示件数

    var html = '';

    /* 読込処理 */
    $.ajax({
      url: 'common/php/xml.php',
      dataType: 'json',
      type: 'POST',
      data: {
        url: feed
      }
    }).done(function(result, textStatus) {
      var fragment = document.createDocumentFragment();
      var containerWrapper = document.createElement(tags['wrapper']);
      containerWrapper.className = 'emergencyList';

      for (var i = 0; i < setNum; i++) {
        if(result.feed.entries.length === 0) {
          $(container).remove();
          break;
        }
        try {
          var entry = result.feed.entries[i];
          var title = result.feed.entries[i].title; //記事タイトル取得　substrの数値で文字数調整
          var content = result.feed.entries[i].contentSnippet;
          var contents = createElements(title, content, fragment);
        } catch (e) {
          break;
        }

        //html生成　サイトにあわせて適宜変更
        containerWrapper.appendChild(fragment);
      }
      //フィードの出力
      container.appendChild(containerWrapper);
    }).fail(function(e) {
      $(container).remove();
      console.log('RSSを取得できないか、もしくはXMLにエラーが有ります。');
    });

    /* dl.emergencyListの中身をつくる関数 */
    function createElements(title, content, fragment){
      var titleTag = document.createElement(tags['title']);
      var textTag  = document.createElement(tags['text']);
      titleTag.className = 'emergencyList_title';
      textTag.className  = 'emergencyList_text';
      titleTag.innerHTML = title;
      textTag.innerHTML  = content;
      fragment.appendChild(titleTag);
      fragment.appendChild(textTag);
      return fragment;
    }

  });
}).call(this, jQuery);