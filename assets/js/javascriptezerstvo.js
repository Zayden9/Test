var next = $(".quote-img-next");
var prev = $(".quote-img-prev");
var block = $(".xyila-ti");

$(document).ready(function(){
    $(window).on("load", function() {
        next.on('click', function() {
            alert("Ну а хули ты хотел?");
        });
        prev.on('click', function() {
            alert("Ну а хули ты хотел? Тут тоже никто ничего делать не будет :|");
        });
    });
});
