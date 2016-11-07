jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});var Chirp=function(opts){var api={user:"http://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&count={{count}}&include_rts={{retweets}}&exclude_replies={{!replies}}&screen_name={{user}}",list:"http://api.twitter.com/1/{{user}}/lists/{{list}}/statuses.json?include_entities=true",search:"http://search.twitter.com/search.json?include_entities=true&q={{search}}"},options={retweets:!0,replies:!1,user:"rogie",list:null,search:null,target:null,count:100,max:20,cacheExpire:120000,success:function(){},error:function(){},templates:{base:'<div class="chirp">{{tweets}}</div>',tweet:'<p>{{html}}</p><span class="meta"><time><a href="http://twitter.com/{{user.screen_name}}/statuses/{{id_str}}">{{time_ago}}</a></time> — via <a href="http://twitter.com/{{user.screen_name}}" title="{{user.name}} — {{user.description}}">{{user.name}}</a></span>'}},ext=function(e,t){for(var n in t){n in e&&(e[n]&&e[n].constructor==Object?ext(e[n],t[n]):e[n]=t[n])}},ago=function(e){var t=new Date((e||"").replace(/(\d{1,2}[:]\d{2}[:]\d{2}) (.*)/,"$2 $1").replace(/(\+\S+) (.*)/,"$2 $1").replace(/-/g,"/")),n=((new Date).getTime()-t.getTime())/1000,r=Math.floor(n/86400);if(isNaN(r)||r<0||r>=31){return}return r==0&&(n<60&&"just now"||n<120&&"1 minute ago"||n<3600&&Math.floor(n/60)+" minutes ago"||n<7200&&"1 hour ago"||n<86400&&Math.floor(n/3600)+" hours ago")||r==1&&"Yesterday"||r<7&&r+" days ago"||r<31&&Math.ceil(r/7)+" weeks ago"},htmlify=function(e,t){var n=[],r=e,i={urls:function(e){return'<a href="'+e.expanded_url+'">'+e.display_url+"</a>"},hashtags:function(e){return'<a href="http://twitter.com/search/%23'+e.text+'">#'+e.text+"</a>"},user_mentions:function(e){return'<a href="http://twitter.com/'+e.screen_name+'" title="'+e.name+'">@'+e.screen_name+"</a>"},media:function(e){return'<a href="'+e.expanded_url+'">'+e.display_url+"</a>"}};for(var s in t){u=t[s];if(t[s].length>0){for(var o=0,u;u=t[s][o];++o){n[u.indices[0]]={start:u.indices[0],end:u.indices[1],link:i[s](u)}}}}for(var o=n.length-1;o>=0;--o){n[o]!=undefined&&(r=r.substr(0,n[o].start)+n[o].link+r.substr(n[o].end,r.length-1))}return r},toHTML=function(e){var t="",n=0;for(twt in e){e[twt].index=++n;e[twt].html=htmlify(e[twt].text,e[twt].entities);e[twt].time_ago=ago(e[twt].created_at);t+=render(options.templates.tweet,e[twt]);if(n==options.max){break}}return render(options.templates.base,{tweets:t})},render=function(tpl,data){var output=tpl,dotData=function(d,dotKey){var invert="";if(dotKey.indexOf("!")>-1){dotKey=dotKey.replace(/!/ig,"");invert="!"}try{val=eval(invert+"d['"+dotKey.split(".").join("']['")+"']")}catch(e){val=""}return val},matches=tpl.match(/{{[^}}]*}}/igm);for(var i=0;i<matches.length;++i){var m=matches[i],val=dotData(data,matches[i].replace(/{{|}}/ig,""))||"";output=output.replace(new RegExp(m,"igm"),val)}return output},cache=function(e,t){if(!localStorage||!JSON){return null}var n=(new Date).getTime(),r=null;if(t==undefined){try{r=JSON.parse(unescape(localStorage.getItem(e)))}catch(i){}if(r){if(n-r.time<options.cacheExpire){r=r.data}else{localStorage.removeItem(e);r=null}}else{r=null}return r}try{localStorage.setItem(e,escape(JSON.stringify({time:n,data:t})))}catch(i){console.log(i)}},get=function(){Chirp.requests=Chirp.requests==undefined?1:Chirp.requests+1;var e=document.createElement("script"),t="callback"+Chirp.requests,n=document.body.children,r=document.scripts[document.scripts.length-1],i=options.list?render(api.list,options):options.search?render(api.search,options):render(api.user,options),s=r.parentNode.nodeName!="head";Chirp[t]=function(e,t){e=e.results?e.results:e;t!==!0&&cache(i,e);var n=document.createElement("div");n.innerHTML=toHTML(e);options.target==null?r.parentNode.insertBefore(n,r):document.getElementById(options.target).innerHTML=n.innerHTML;options.success.call(this,e)};e.onerror=options.error;if(cachedData=cache(i)){Chirp[t](cachedData,!0)}else{e.src=i+"&callback=Chirp."+t;document.getElementsByTagName("head")[0].appendChild(e)}},init=function(e){if(e&&e!=undefined){if(e.constructor==String){var t=e.split("/"),n={};n.user=t[0];n.list=t[1]?t[1]:null;ext(options,n)}else{e.constructor==Object&&ext(options,e)}}};this.show=function(e){init(e);options.target&&(document.getElementById(options.target).innerHTML="");get()};this.constructor!=Chirp?(new Chirp(opts)).show():init(opts)};Chirp._script=document.scripts[document.scripts.length-1];jQuery(function(){jQuery("a[href*=#]:not(#comments-list a.comment-reply-link)").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var f=jQuery(this.hash);f=f.length&&f||jQuery("[name="+this.hash.slice(1)+"]");if(f.length){var g=f.offset().top;jQuery("html,body").animate({scrollTop:g},{duration:1100},{easing:"jswing"});return false}}});var c="170px";var e="40px";var b=jQuery("#s");var a="Search ...";var d=jQuery("#searchform");jQuery(b).focus(function(){if(jQuery(this).val()==a){jQuery(this).val("")}jQuery(this).animate({width:c},400);jQuery(d).addClass("focus")}).blur(function(){if(jQuery(this).val()==""){jQuery(this).val(a)}jQuery(this).animate({width:e},400,function(){jQuery(d).removeClass("focus")})});jQuery(".menu-main-navi-container").prepend('<div id="menu-icon">Menu</div>');jQuery("#menu-icon").on("click",function(){jQuery("#menu-main-navi").slideToggle();jQuery(this).toggleClass("active")});jQuery(".bubbleinfo").each(function(){var m=10;var l=250;var i=500;var h=null;var k=false;var j=false;var g=jQuery(".trigger",this);var f=jQuery(".popup",this).css("opacity",0);jQuery([g.get(0),f.get(0)]).mouseover(function(){if(h){clearTimeout(h)}if(k||j){return}else{k=true;if(f.attr("id")=="rss"){f.css({top:15,left:-110,display:"block"})}else{f.css({top:-40,left:-33,display:"block"})}f.animate({top:"-="+m+"px",opacity:1},l,"swing",function(){k=false;j=true})}}).mouseout(function(){if(h){clearTimeout(h)}h=setTimeout(function(){h=null;f.animate({top:"-="+m+"px",opacity:0},l,"swing",function(){j=false;f.css("display","none")})},i)})});jQuery(".box-link").click(function(){window.location=jQuery(this).find("a").attr("href")})});