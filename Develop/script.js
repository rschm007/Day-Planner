// let's begin
// how do we want to structure this?
// As a User, I want to be able to plan my day 
// (when app is opened, current day is displayed at top of calendar)
// 
// I WANT to be given time blocks for standard business horus AND the option to specify a time range that I want to plan within 
// (default rows include standard business hours, ie 9am - 5pm. There can also be an input field where the user can change this)
// 
// I WANT an easy to use interface that tracks the present time so that I can see at a glance where I am in my day
// (each time-block row should be color-coded to indicate past, present and future)
// 
// I WANT to be able to type in the hour rows so that I can plan my day 
// (each time row should be an editable field)
// 
// I WANT to be able to save my edits in each row
// (each row should have a save button that is inserted after user clicks the row. When save is clicked, data is saved in localstorage)
// 
// Once I have planned my day, I WANT to be able to save the page 
// (Have the URL change to a unique ID when the user answers the initial prompt so that the page persists)
// 
// IF I EXIT THE PAGE, I want to be able to go right back to what I was doing
// (all user-inputted data should be saved to localstorage)

// define var for current day
var now = moment();

// append currentDay div with the now var
$("#currentDay").text(now);

