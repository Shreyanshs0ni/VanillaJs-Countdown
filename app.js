const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const deadline = document.querySelector(".deadline");
  const giveaway = document.querySelector(".giveaway");
  const items = document.querySelectorAll(".deadline-format h4");
  
  const futureDate = new Date(2024, 11, 31, 23, 59 , 0);
  const year = futureDate.getFullYear();
  const hour = futureDate.getHours();
  const minute = futureDate.getMinutes();
  let month = futureDate.getMonth();
  month = months[month];
  const date = futureDate.getDate();
  let day = futureDate.getDay();
  day = weekdays[day];
  
  giveaway.textContent = `Giveaway ends on ${day} ${date} ${month} ${year} ${hour}:${minute}am`;
  
  const futureTime = futureDate.getTime();
  
  function getRemainingTime() {
  const today = new Date().getTime();
  let t = futureTime - today;
  
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  
  let days = Math.floor(t/oneDay);
  let hours = Math.floor((t%oneDay) / oneHour);
  let minutes = Math.floor((t%oneHour) / oneMinute);
  let seconds = Math.floor((t%oneMinute) / 1000);
  
  const values = [days, hours, minutes, seconds];
  
  function format(item){
  if (values < 10){
   return (item = `0${item}`);
  }
  return item;
  }
  
  items.forEach(function(item, index){
  item.innerHTML = format(values[index]);
  })
  if(t<0){
  clearInterval(countdown);
  deadline.innerHTML = `<h4 class="expired">Sorry, The countdown is expired </h4>`
  }
  
  }
  let countdown = setInterval(getRemainingTime, 1000);
  getRemainingTime();
  
  
  
  
  
  