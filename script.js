setTimeout(function () {
  $("#bootScreen").fadeOut(800, function () {
    $(this).remove(); // 💥 completely removes it from DOM
  });

  $(".window").fadeIn(800);
}, 2000);

$("#startYes").click(function () {
  $(".window").hide();
  $(".loading").show();

  setTimeout(function () {
    $(".loading").hide();
    $(".nav").fadeIn();
    $(".imageclass").fadeIn();
  }, 1500);
});

$("#startYes").click(function () {
  console.log("YES CLICKED");
});
$(document).ready(function () {
  setTimeout(function () {
    $("#bootScreen").fadeOut(800);
    $(".window").fadeIn(800); // your intro window
  }, 2000);
});

$("#myButton").click(function (e) {
  e.preventDefault(); // 🔥 THIS LINE FIXES IT
  $("#myProjects").toggle();
});

$(document).ready(function () {
  $("#myButton").click(function () {
    $("#myProjects").toggle();
  });
});

$(document).ready(function () {
  $("#myButton2").click(function () {
    $("#myExercises").toggle();
  });
});

$(document).ready(function () {
  $("#myhomebutton").hover(
    function () {
      $(this).css("background-color", "blue");
    },
    function () {
      $(this).css("background-color", "#d4bdf6");
    }
  );
});

$(document).ready(function () {
  $("#myButton2").click(function () {
    $("#myProjects").hide();
  });
});

$(document).ready(function () {
  $("#myButton").click(function () {
    $("#myExercises").hide();
  });
});

$(document).ready(function () {
  $(".yes").click(function () {
    $(this).toggleClass("yes-after");
  });
});

$(document).ready(function () {
  $("#myButton7").click(function () {
    $("#myCollection").toggle();
  });
});

$(document).ready(function () {
  $("#myButton6").click(function () {
    $("#myCollection").toggle();
  });
});

$(document).ready(function () {
  $("#myButton8").click(function () {
    $("#myPortfolio").toggle();
  });
});

$(document).ready(function () {
  $("#myButton9").click(function () {
    $("#myPortfolio").toggle();
  });
});

$(document).ready(function () {
  // open resume
  $("#resumeShortcut").click(function () {
    $("#myResume").show();
  });

  // close resume
  $("#myResumeClose").click(function () {
    $("#myResume").hide();
  });
});

$(document).ready(function () {
  $("#myButtonInfo").click(function () {
    $("#myBio").toggle();
  });

  $("#myBioClose").click(function () {
    $("#myBio").toggle();
  });
});

