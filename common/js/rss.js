//blog
$(function(){
	
	   $.ajax({
	  url: "http://www.osaka-eco.ac.jp/contents/ecobiyori/ecobiyori_new",//RSSのURLを入力ください。
      dataType:"html",
      timeout:2000,
      cache: false,
      
      success:function(xml){
         $(xml).find("item").each(function(){
            var url=$(this).find("url").text();
            var title=$(this).find("title").text();
			var text=$(this).find("text").text();
			var images=$(this).find("images").text();
            var date=$(this).find("date").text();
			var new_icon=$(this).find("new_icon").text();
	//以下を必要に応じて変更ください。
            $("<div></div>").html("<li><a href='"+url+"'><dl class='blog-md'><dd class='blog-image'><img src='"+images+"'></dd><dt>"+title+"</dt><dd>"+text+"<br>"+date+"</dd></dl></a></li>").appendTo("#feed_blog");
         });
      	  
	  }
   });
});