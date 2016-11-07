$(function(){
	var agent = navigator.userAgent;
	var redirectPass = '/sample/sp/';
	if(agent.search(/iPhone/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
		 $('#ForSP').css({display : 'block'});
	}
});