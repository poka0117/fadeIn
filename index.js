$(document).ready(function(){
    // 画面が表示される同時に1段目のスライドがフェードイン
    $('.slide_1').addClass('slide_1_fade');

    // スクロールイベントでslide_2_hを表示
    $(window).scroll(function(){
        // 画面の高さを取得
        let wh = $(window).height();
        // スクロール量を取得
        let scroll_top = $(window).scrollTop();
        // フェードインする要素のY座標を取得
        let slide_2_h = $('.slide_2').offset().top;
        // 好きなタイミングで表示
        if(scroll_top > slide_2_h - wh + 200){
            $('.slide_2').addClass('slide_2_fade');
        }
    })

    // スクロールイベントでslide_2_hを表示
    $(window).scroll(function(){
        // 画面の高さを取得
        let wh = $(window).height();
        // スクロール量を取得
        let scroll_top = $(window).scrollTop();
        // フェードインする要素のY座標を取得
        let slide_3_h = $('.slide_3').offset().top;
        // 好きなタイミングで表示
        if(scroll_top > slide_3_h - wh + 200){
                $('.slide_3-1').addClass('slide_3_fade');
                // 0.5秒送らせて表示
            setTimeout(function(){
                $('.slide_3-2').addClass('slide_3_fade');
            },500);
                // 1秒送らせてひょうじ
            setTimeout(function(){
                $('.slide_3-3').addClass('slide_3_fade');
            },1000)
        }
    })
});