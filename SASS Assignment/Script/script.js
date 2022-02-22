$(document).ready(function () {
  $(".list").click(function () {
    $(this).css({ "font-weight": "700", "text-decoration": "underline" });
    $(".list").not($(this)).css({ "font-weight": "500", "text-decoration": "none" });
  });
  $(".list").first().click();
  var arry = [{ image: "Asset/Charging_Point_1-removebg-preview.png" }, { image: "Asset/Charging_Point_2-removebg-preview.png" }, { image: "Asset/Charging_Point_3-removebg-preview.png" }];

  for (i = 0; i < arry.length; i++) {
    $(".slid_images").append('<img src="' + arry[i].image + '" alt="charging_point_img" class="slider_img cursor" id="slide' + i + '">');
  }
  $(".slider_img").click(function () {
    var source = $(this).attr("src");
    $(".big_img").attr("src", source);
    $(this).css("border", "2px solid aqua");
    $(".slider_img").not($(this)).css("border", "2px solid rgba(0, 0, 0, 0.215)");
  });
  $(".slider_img").first().click();
  $(".up").click(function () {
    var abc = $(".big_img").attr("src");
    for (i = 0; i < arry.length; i++) {
      if (arry[i].image == abc)
        break;
    }
    fst = i;
    if (fst == 0) {
      fst = arry.length - 1;
    }
    else
      fst--;
    $(".big_img").attr("src", arry[fst].image);
    $("#slide" + fst + "").css("border", "2px solid aqua");
    $(".slider_img").not($("#slide" + fst + "")).css("border", "2px solid rgba(0, 0, 0, 0.215)");
  });

  $(".down").click(function () {
    var abc = $(".big_img").attr("src");
    for (i = 0; i < arry.length; i++) {
      if (arry[i].image == abc)
        break;
    }
    fst = i;
    if (fst >= arry.length - 1) {
      fst = 0;
    }
    else
      fst++;
    $(".big_img").attr("src", arry[fst].image);
    $("#slide" + fst + "").css("border", "2px solid aqua");
    $(".slider_img").not($("#slide" + fst + "")).css("border", "2px solid rgba(0, 0, 0, 0.215)");
  });

  $(".info_list li").click(function () {
    $(this).css({ "background-color": "#001352", "color": "white" });
    $(".info_list li").not($(this)).css({ "background-color": "transparent", "color": "#001352" })
    var name = $(this).text().split(" ")[0].split("(")[0];
    $("." + name + "").show();
    $(".info_content").not($("." + name + "")).hide();
  });

  if ($(Window).width() < 426) {
    $(".info_list li").click(function () {
      var name = $(this).text().split(" ")[0].split("(")[0];
      $(".info_content").hide();
      var clone = $("." + name + "").clone().show();
      $("." + name + "_cont").show().html(clone).css({ "color": "black" });
      $("." + name + "_cont ul").css({ "color": "black", "border": "none", });
      $("." + name + " ul li").css({ "display": "list-item", "list-style": "disc" })
      $(".cont").not($("." + name + "_cont")).hide().html('');
      $(".info_list li").css({ "width": "100%", "margin-left": "0" });
      $(".info_list").css("padding-left", "0");
    });
  }
  $(window).resize(function () {
    if ($(this).width() < 426 || $(this).width() > 426) {
      location.reload();
    }
  });

  $(".info_list li").first().click();

  var main_content_image = [{ image: "Asset/Charging_Point_1-removebg-preview.png", title: "Compatibility" }, { image: "Asset/Charging_Point_2-removebg-preview.png", title: "The Smart Solution" }, { image: "Asset/Charging_Point_3-removebg-preview.png", title: "FAQs" },];

  for (i = 0; i < main_content_image.length; i++) {
    $(".main_content").append('<div class="column center_align font_color"><div><img src="' + main_content_image[i].image + '" class="object_fit img_size"></div><div><h2 class="fnt_sz">' + main_content_image[i].title + '</h2></div></div>');
  }
  $(".foot_link1").click(function () {
    $(this).css({ "font-weight": "900" });
    $(".foot_link1").not($(this)).css({ "font-weight": "500" });
  });
  $(".foot_link1").first().click();

  $(".foot_link2").click(function () {
    $(this).css({ "font-weight": "900" });
    $(".foot_link2").not($(this)).css({ "font-weight": "500" });
  });
  $(".foot_link2").first().click();

  $(".foot_link3").click(function () {
    $(this).css({ "font-weight": "900" });
    $(".foot_link3").not($(this)).css({ "font-weight": "500" });
  });
  $(".foot_link3").first().click();

  $(".foot_link4").click(function () {
    $(this).css({ "font-weight": "900" });
    $(".foot_link4").not($(this)).css({ "font-weight": "500" });
  });
  $(".foot_link4").first().click();
});