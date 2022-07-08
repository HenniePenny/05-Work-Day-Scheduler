//references to DOM elements
let currentDayEl = $("#currentDay");
let scheduleEL = $(".container");


const businessHours = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

//displaying the current day
let today = moment().format('dddd, MMMM Do');
currentDayEl.text(today);





//making a text area

//