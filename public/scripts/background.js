var counter = 0;
function changeBG(){
    var imgs = [
        "url(https://i.ytimg.com/vi/Wm1in2Ri0uU/maxresdefault.jpg)",
        "url(http://www.miph.org/wp-content/uploads/2015/08/Public-health-information-online.gif)",
        "url(http://caesarmedia.in/wp-content/uploads/2017/04/Image.jpg)",
        "url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/EFODv5zYgijxtshlo/videoblocks-healthcare-technology-with-moving-screens-video-wall-background-looping_rp-dqkeay_thumbnail-full01.png)",
        "url(https://i.ytimg.com/vi/WGKPHMbUlvQ/maxresdefault.jpg)",
        "url(http://cdn.freemanxp.com/pages/1108/bg-healthcare2.jpg)"
        ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 1500);


