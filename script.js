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
