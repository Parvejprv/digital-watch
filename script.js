
function updateTimeAndDate() {
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');

  const now = new Date();
  // console.log(now)   // whole information about the current date and time

  let hours = now.getHours();

  // console.log(hours);
  // console.log(typeof(hours));    // Number

  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Determine AM or PM and convert hours to 12 hour format
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;   // Convert 0 to 12 for midnight

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // console.log(days);

  const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const day = days[now.getDay()];
  // console.log('today current day = ' + day);
  const month = months[now.getMonth()];
  // console.log('current month = ' + month);
  const date = now.getDate();
  // console.log('date = ' + date);
  const year = now.getFullYear();
  // console.log('year = ' + year);



  timeElement.textContent = `${hours} : ${minutes} : ${seconds}  ${ampm}`;
  dateElement.textContent = `${day}, ${month} ${date}, ${year}`;

}





function updateAnalogWatch() {
  const now = new Date();

  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  console.log(seconds);
  console.log(minutes);
  console.log(hours);

  const secondDegree = (seconds / 60) * 360 + 90;
  const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}




// update every second - digital watch
setInterval(updateTimeAndDate, 1000);

// update every second - digital watch
updateTimeAndDate();
setInterval(updateAnalogWatch, 1000);
updateAnalogWatch();


