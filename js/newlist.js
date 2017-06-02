jQuery(document).ready(function($){

    // 不缓存，只获取最新的数据。只在get请求中设置cache
    var param = "./newlist2.json";
    $.ajax({
        url: param,
        type: "GET",
        dataType: "json",
        cache: false, // 不缓存
        success: function (data) {
            $('.c_titile').text(data.news[0].title);
            $('.p_time').text(data.news[0].ptime);
            $('.p_author').text(data.news[0].author);
            $('.p_brows').text(data.news[0].browsenum);
            $('.p_comm').text(data.news[0].comment);
            $('.infos').html(data.news[0].article);
            $('.p_keywords').text(data.news[0].keywords);
        },
        error: function(){
            alert("Get data error！");
        }
    });

});