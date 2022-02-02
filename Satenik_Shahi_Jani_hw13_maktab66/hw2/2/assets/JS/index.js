$(".accordion_tab").click(function () {
  if ($(this).hasClass("active")) {
    $(this).parent().removeClass("active");
    $(this).removeClass("active");
  } else {
    $(".accordion_tab").each(function () {
      $(this).parent().removeClass("active");
      $(this).removeClass("active");
    });
    $(this).parent().addClass("active");
    $(this).addClass("active");
  }
});
$("button").click(function () {
  $(".accordion_tab").each(function () {
    $(this).parent().removeClass("active");
    $(this).removeClass("active");
  });
});
