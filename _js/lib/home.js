$(function() {
    if ($('.index').length == 1) {
        var number = 1 + Math.floor(Math.random() * 10),
            imageUrl = "/images/cover/cover-photo" + number + ".jpg";

        $('.eyecatcher').css({
            "background": "linear-gradient(rgba(8, 103, 136, 0.5), rgba(8, 103, 136, 0.5)), url("+imageUrl+") no-repeat",
            "background-size": "cover"
        });
        console.log(imageUrl);
    }
});