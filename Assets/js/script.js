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
  //console.log(timeNow);

  //for each time-block execute the function
  $(".time-block").each(function() {
    //rowHour is set to the integer of the id (number as string) of THIS time-block
    let rowHour = parseInt($(this).attr("id"));
    //console.log(rowHour);
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
//execute colorRow every 15 minutes to update 
setInterval

//save text input to local storage
function saveInput() {
  //savebutton sibling with class tag description, value of the text area
  let text = $(this).siblings(".description").val();
  //savebutton parent with attribute id gives the hour
  let hour = $(this).parent().attr("id");
  console.log(text, hour);
  localStorage.setItem(hour, text); //save the text in the line of the hour, first argument is key 
  let hourObject = {
    date: today,
    textToDo: text,
  }
  window.localStorage.setItem(hour, JSON.stringify(hourObject));
}




let saveButton = $(".saveBtn");
saveButton.on("click", saveInput);
//reload from local storage
for (i = 9; i<18; i++) {
  let hourObject = JSON.parse(localStorage.getItem(i))
  if(hourObject.date === today) {
    $('#'+ i + ' .description').val(hourObject.textToDo);

  }

}
 //id 9 find class description and update the elements' value from local storage with key 9

// $('#10 .description').val(localStorage.getItem('10'));
// $('#11 .description').val(localStorage.getItem('11'));
// $('#12 .description').val(localStorage.getItem('12'));
// $('#13 .description').val(localStorage.getItem('13'));
// $('#14 .description').val(localStorage.getItem('14'));
// $('#15 .description').val(localStorage.getItem('15'));
// $('#16 .description').val(localStorage.getItem('16'));
// $('#17 .description').val(localStorage.getItem('17'));


let newObject = window.localStorage.getItem("myObject");
console.log(JSON.parse(newObject));

