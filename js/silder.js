/*导航当前页高亮*/
var obj=null;
var topnav=document.getElementById('topnav').getElementsByTagName('a');
obj = topnav[0];
for(i=1;i<topnav.length;i++) {
	if(window.location.href.indexOf(topnav[i].href)>=0) {
        obj=topnav[i];
	}
}
obj.id='topnav_current';

/*百度分享广告*/
// window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"1","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"32"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

  /* scroll to top JS */
  $(".totop-btn").hide();
  $(function() {
	  $(window).scroll(function(e) {
	    if($(window).scrollTop() >= 100) {
	      $(".totop-btn").fadeIn();
	    } else {
	      $(".totop-btn").fadeOut();
	    }
	  });
  });
  $(".totop-btn").click(function(e) {
    $("html, body").animate({scrollTop: 0}, 300); 
    return false; 
  }); 