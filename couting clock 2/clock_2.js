var wakeuptime = 6;
var noon = 12;
var lunchtime = 13;
var naptime = lunchtime + 0.5;
var partytime;
var evening = 18;

//getting it to show the current time on the page
var showCurrentTime = function()
{
	//display the string on the webpage
	var clock = document.getElementById(`clock`);

	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	//Change Meridian(set "hours")
	  if (horus >= noon)
	  {
	  	meridian = "PM";
	  } 
	  //Set noon

	  if (hours > noon)
	  {
	  	hours = hours -12;
	  }
	// set "Minutes"
	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}
	//set "Seconds"
	if (seconds < 10)
	{
		seconds = "0" + seconds;
	}

	//put together the string that dislays the time
	var clockTime = hours + ':' + minutes + ':' + seconds + "" + meridian + ":";

	clock.innerText = clockTime;
};

//getting the clock to increment on its own and change out message and pictures
var updateClock = function()
{
	var time = new Date().getHours();
	var messageText;
	var image = "img/adult-architecture-buildings-city-380283.jpg"

	var timeEventJS = document.getElementById("timeEvent");
	var ChangingImageJS = document.getElementById('ChangingImage');

	if (time == partytime)
	{
		image = "img/people-at-concert-1105666.jpg";
		messageText = "さぁ、パーティーだ。";
	}
	else if (time == wakeuptime)
	{
		image = "img/photo-of-person-holding-alarm-clock-1028741.jpg";
		messageText = "起きましょう。";
	}
	else if (time == lunchtime)
	{
		image = "img/bread-with-vegetables-on-plate-1548873.jpg";
		messageText = "食事をとりましょう。"
	}
	else if (time == naptime)
	{
		image = "img/apartment-bed-carpet-chair-269141.jpg";
		messageText = "少し寝ましょう。"
	}
	else if (time < noon)
	{
		image = "img/white-cup-filled-by-coffee-1477851.jpg";
		messageText = "おはようございます。";
	}
	else if (time >= evening)
	{
		image = "img/silhouette-photography-of-people-near-body-of-water-1052150.jpg";
		messageText = "こんばんは。";
	}
	else
	{
		image = "img/brown-trench-coat-on-wooden-rack-821357.jpg";
		messageText = "こんにちは。"
	}
	console.log(messageText);
	timeEventJS.innerText = messageText;
	ChangingImage.src = image;

	showCurrentTime();
};
updateClock();

//Getting the party time button to work
var partyButton = document.getElementById("partyTimeButton");
var partyEvent = function()
{
	if (partytime < 0)
	{
		partytime = new Date().getHours();
		partyTimeButton.innerText = "パーティーは終了です。";
		partyTimeButton.style.backgroundColor = "#0A8DAB";
	}
	else
	{
		partytime = -1;
		partyTimeButton.innerText = "パーティーだ。";
		partyTimeButton.style.backgroundColor = "#222";
	}
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

//Activates wake-up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
	wakeuptime = wakeUpTimeListener("change", wakeUpEvent);
};
// Activate Lunch Selecor
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchEvent = function()
{
	lunchtime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchEvent);

//Activate Nap-time selector
var napTimeSelector = document.getElementById("napTimeSelector");
var napEvent = function()
{
	naptime = napTimeSelector.value;
};
napTimeSelector.addEventListener("change", napEvent);