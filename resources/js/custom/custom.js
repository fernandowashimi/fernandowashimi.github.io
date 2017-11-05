function hex2rgba(hex, opacity)
{
    //extract the two hexadecimal digits for each color
    var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
    var matches = patt.exec(hex);

    //convert them to decimal
    var r = parseInt(matches[1], 16);
    var g = parseInt(matches[2], 16);
    var b = parseInt(matches[3], 16);

    //create rgba string
    var rgba = "rgba(" + r + "," + g + "," + b + "," + opacity + ")";

    //return rgba colour
    return rgba;
}

$(window).scroll(function() {
    if($(this).scrollTop() > 60)
    {
        $(".navbar").css("background-color", hex2rgba('#ffa726', 0.9));
        $(".navbar").css("transition", ".5s ease");
        $("#btnLogin").css("border-color", "#FFF");
        $("#btnLogin").css("color", "#FFF");
    } else {
        $(".navbar").css("background-color", hex2rgba('#ffa726', 0));
        $("#btnLogin").css("border-color", "#ffa726");
        $("#btnLogin").css("color", "#ffa726");
    }
});

$("#btnHide").click(function() {
    $('.jumbotron').slideUp( "slow", function() {
    })
});