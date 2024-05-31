for (let i = 1; i <= 4; i++) {
    $(`.question${i}`).on("click", function() {
        $(`.icons-plus-minus${i}`).toggle(300);
        $(`.answer${i}`).slideToggle("slow");
        if ($(".inside-container").css("height") === "auto") {
            $(".inside-container").css({"height": "250px"});
        } else {
            $(".inside-container").css({"height": "auto"});
        }
    });
}
