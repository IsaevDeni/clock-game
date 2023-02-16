function displayTime() {
    const dataTime = new Date();
    const hrs = dataTime.getHours();
    const min = dataTime.getMinutes();
    const sec = dataTime.getSeconds();
    const session = document.getElementById('session');


    if(hrs >= 12) {
        session.innerHTML = 'PM'
    } else {
        session.indexHTML = 'AM'
    }

    if(hrs > 12) {
        hrs - 12
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(displayTime, 6);