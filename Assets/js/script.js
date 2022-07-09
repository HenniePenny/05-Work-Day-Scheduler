//references to DOM elements
let currentDayEl = $("#currentDay");
let scheduleEL = $(".container");

const businessHours = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

//displaying the current day
let today = moment().format('dddd, MMMM Do');
currentDayEl.text(today);

//ToDo: do I need an init function, that initializes the page?

//function to give color to rows based on past, present or future
function colorRow () {
    //getting the hours from the current time. Accepts numbers from 0 to 23.
  let timeNow = moment().hours();
  console.log(timeNow);

  //for each time-block execute the function
  $(".time-block").each(function() {
    //rowHour is set to the integer of the id (number as string) of THIS time-block
    let rowHour = parseInt($(this).attr("id"));
    console.log(rowHour);
    //if rowHour is smaller than timeNow, display as class "past" (i.e. grey)
    if(rowHour < timeNow) {
      $(this).addClass("past");
    } else if(rowHour === timeNow) { //if rowHour is equal to timeNow, remove the class "past" and add the class "present"
      $(this).removeClass("past");
      $(this).addClass("present");
    } else { //otherwise remove class "past" and "present" and apply add class "future"
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
}

colorRow();

//ToDo: setting an Interval (e.g. every 15 minutes), so that the page updates the time without having to refresh the page

