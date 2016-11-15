var sameVote = "";
var wichVote = "";
var initVote = function () {
    $('.vote > span').click(function (event) {
        var video = $(".video");

        var choice = $(event.currentTarget).attr("data-vote");
        if(sameVote == choice){
            wichVote = "domi";
        }
        else {
            wichVote = choice;
        }
        sameVote = choice;

        switch (wichVote){
            case "up" :
                video.append("<div class='up'></div>");
                video.find(".up")
                    .animate({
                        opacity: 1,
                        left : 0
                    }, 200);

                setTimeout(function () {
                    $(".video").find(".up")
                        .animate({
                            opacity: 0,
                            left: '-150px'
                        }, 200, function () {
                            $(this).remove();
                        });
                }, 1000);
                break;
            case "down" :
                video.append("<div class='down'></div>");
                video.find(".down")
                    .animate({
                        opacity: 1,
                        bottom : "100px"
                    }, 200);

                setTimeout(function () {
                    $(".video").find(".down")
                        .animate({
                            opacity: 0,
                            bottom: '-150px'
                        }, 200, function () {
                            $(this).remove();
                        });
                }, 1000);
                break;
            case "domi" :
                video.find(".domi").animate({
                    opacity: 0,
                    right: '-150px'
                }, 200, function () {
                    $(this).remove();
                });
                video.find(".down").animate({
                    opacity: 0,
                    bottom: '-150px'
                }, 200, function () {
                    $(this).remove();
                });
                video.find(".up").animate({
                    opacity: 0,
                    left: '-150px'
                }, 200, function () {
                    $(this).remove();
                });
                video.append("<div class='domi'></div>");
                video.find(".domi")
                    .animate({
                        opacity: 1,
                        right : "-5px"
                    }, 200);

                setTimeout(function () {
                    video.find(".domi")
                        .animate({
                            opacity: 0,
                            right: '-150px'
                        }, 200, function () {
                            $(this).remove();
                        });
                }, 1000);
                break;
                break;
        }


    });
};

$(document).ready(function () {
    initVote();
});