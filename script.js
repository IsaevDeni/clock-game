// Поставьте на фон(бэграунд)   
// Используя css правильный тег добавьте цвета как показано на картинке: в помощь (nth-last-child)
// Опять же испьльзуя css добавьте фоновый цвет и бордер солид. 
// Обратите внимание на первую и последнюю функцию.
// В переменной session нужен якорь в обращение к нему...или можно исправить и иным путем 
// В условии вместо строгого равенства сделайте больше или равно
// Прогуглите как на английском время до полудня и время после полудня
// Молодцы а теперь вставьте их в кавычки if и else
// Измените обращение к часам, минутам и секундам на querrySelector
// Время в сет-интревал укажите 10

function displayTime() { 
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
    const session = document.getElementById('session');


    if(hrs >= 12) {
        session.innerHTML = 'PM';
    }else {
        session.innerHTML = 'AM';
    }

    if(hrs > 12) {
        hrs - 12;
    }

    document.querySelector('hours').innerHTML = hrs;
    document.querySelector('minutes').innerHTML = min;
    document.querySelector('seconds').innerHTML = sec;
}

setInterval(displayTime, 10);

























// function displayTime(){
//     const dateTime = new Date();
//     const hrs = dateTime.getHours();
//     const min = dateTime.getMinutes();
//     const sec = dateTime.getSeconds();
//     const session = document.getElementById('session');

//     if(hrs >= 12){
//         session.innerHTML = 'PM';
//     }else{
//         session.innerHTML = 'AM';
//     }

//     if(hrs > 12){
//         hrs - 12;
//     }

//     document.getElementById('hours').innerHTML = hrs;
//     document.getElementById('minutes').innerHTML = min;
//     document.getElementById('seconds').innerHTML = sec;
// }
// setInterval(displayTime, 10);