// let's begin
// how do we want to structure this?
// As a User, I want to be able to plan my day
// (when app is opened, current day is displayed at top of calendar) - DONE
//
// I WANT to be given time blocks for standard business horus AND the option to specify a time range that I want to plan within
// (default rows include standard business hours, ie 9am - 5pm. There can also be an input field where the user can change this)
//
// I WANT an easy to use interface that tracks the present time so that I can see at a glance where I am in my day
// (each time-block row should be color-coded to indicate past, present and future) - DONE
//
// I WANT to be able to type in the hour rows so that I can plan my day
// (each time row should be an editable field) - DONE
//
// I WANT to be able to save my edits in each row
// (each row should have a save button that is inserted after user clicks the row. When save is clicked, data is saved in localstorage) - DONE
//
// IF I EXIT THE PAGE, I want to be able to go right back to what I was doing
// (all user-inputted data should be saved to localstorage) - DONE

// ======================================= begin working JS==============================================
$(document).ready(function () {
  // define var for current day
  const now = moment().format("LL");

  // append currentDay div with the now var
  $("#currentDay").text(now);

  // define var for current time and parse it into an integer
  const currentHour = parseInt(moment().format("HH"));
  //   const currentHour = 12;
  console.log("the current hour is: " + currentHour);

  //   create a function that affects all forms. Function needs to change colors of forms based on value of currentHour var
  $("form").each(function () {
    // define a var that captures the name values of the forms. Needs to be parsed so it reads correctly
    var formValue = parseInt($(this).attr("name"));
    // if formvalue is less than the current time, it is in the past, so give it a past attribute
    if (formValue < currentHour) {
      $(this).addClass("past");
    }
    // if formvalue is greater than the current time, it is in the future, so give it a future attribute
    if (formValue > currentHour) {
      $(this).addClass("future");
    }
    // if formvalue is the current time, it is in the present, so give it a present attribute
    if (formValue === currentHour) {
      $(this).addClass("present");
    }
  });

  // begin work on creating localstorage saves and gets for save button clicks
  // define vars containing buttons
  var $row9am = $("#9amForm");
  var $row10am = $("#10amForm");
  var $row11am = $("#11amForm");
  var $row12pm = $("#12pmForm");
  var $row1pm = $("#1pmForm");
  var $row2pm = $("#2pmForm");
  var $row3pm = $("#3pmForm");
  var $row4pm = $("#4pmForm");
  var $row5pm = $("#5pmForm");

  // add an event listener for clicking a save button
  $("button").on("click", function (event) {
    // set items in local storage
    localStorage.setItem("9am", $row9am.val());
    localStorage.setItem("10am", $row10am.val());
    localStorage.setItem("11am", $row11am.val());
    localStorage.setItem("12pm", $row12pm.val());
    localStorage.setItem("1pm", $row1pm.val());
    localStorage.setItem("2pm", $row2pm.val());
    localStorage.setItem("3pm", $row3pm.val());
    localStorage.setItem("4pm", $row4pm.val());
    localStorage.setItem("5pm", $row5pm.val());
  });

  // retrieve localstorage values and insert them into text fields. Text field values should persist through refreshes
  $("#9amForm").text(localStorage.getItem("9am"));
  $("#10amForm").text(localStorage.getItem("10am"));
  $("#11amForm").text(localStorage.getItem("11am"));
  $("#12pmForm").text(localStorage.getItem("12pm"));
  $("#1pmForm").text(localStorage.getItem("1pm"));
  $("#2pmForm").text(localStorage.getItem("2pm"));
  $("#3pmForm").text(localStorage.getItem("3pm"));
  $("#4pmForm").text(localStorage.getItem("4pm"));
  $("#5pmForm").text(localStorage.getItem("5pm"));
});
