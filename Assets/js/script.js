//references to DOM elements
let currentDayEl = $("#currentDay");
let scheduleEL = $(".container");

//displaying the current day
let today = moment().format('dddd, MMMM Do');
currentDayEl.text(today);

//ToDo: do I need an init function, that initializes the page?

//function to give color to rows based on past, present or future
function colorRow () {
    //getting the hours from the current time. Accepts numbers from 0 to 23.
  let timeNow = moment().hours();

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
//setInterval

//save text input to local storage
function saveInput() {
  //save button sibling with class tag description, value of the text area
  let text = $(this).siblings(".description").val();
  //save button parent with attribute id gives the hour
  let hour = $(this).parent().attr("id");
  console.log(text, hour);
  localStorage.setItem(hour, text); //save the text in the line of the hour, first argument is key 
  //create the hourObject with date and ToDo, so that I can later check whether it's a new day or not
  let hourObject = {
    date: today,
    textToDo: text,
  }
  //adding data to the web storage object. JSON.stringify converts object into a string, b/c we can only store stings in window.localStorage object
  window.localStorage.setItem(hour, JSON.stringify(hourObject));
}

let saveButton = $(".saveBtn");
saveButton.on("click", saveInput);

//reload from local storage
for (i = 9; i<18; i++) {
  //retrieving the JS object, which was previously saved as a JSON string (parsing the string)
  let hourObject = JSON.parse(localStorage.getItem(i))
  //checks if the date is today, then it will display the ToDo, otherwise not
  if(hourObject.date === today) {
    $("#"+ i + " .description").val(hourObject.textToDo);
  }
}
 
let newObject = window.localStorage.getItem("newObject");
console.log(JSON.parse(newObject));