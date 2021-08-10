let digitalClock = () => {
    let date = new Date();

    let dayName = date.getDay();
    let dateNum = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let meridian = "AM";
    
    console.log(dayName,dateNum,month)

    if (dateNum < 10) {
        dateNum = "0" + dateNum
    }
    if (month < 10) {
        month = "0" + month
    }
    if (hour > 12) {
        hour = hour - 12
        meridian = "PM"
    }
    if (hour == 12) {
        meridian = "PM"
    }
    if (minute < 10) {
        minute = "0" + minute
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    if (hour < 10) {
        hour = "0" + hour
    }

    switch (dayName) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName ="Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName ="Thursday";
            break;
        case 5:
            dayName ="Friday";
            break;
        case 6:
            dayName ="Saturday";
            break;       
        case 0:
            dayName ="Sunday";
            break;
        default:
            break;
    }
    


    document.getElementById("dayname").innerText = dayName;
    document.getElementById("daynum").innerHTML = dateNum;
    document.getElementById("monthHTML").innerHTML = month;
    document.getElementById("year").innerHTML = year;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("meridian").innerHTML = meridian;
    

}

// digitalClock()

setInterval(digitalClock, 1000);
