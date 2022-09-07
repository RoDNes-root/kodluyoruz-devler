let userName = prompt("Kullanıcı Adınızı Giriniz :");
let user = document.querySelector("#myName");
user.innerHTML = userName;

setInterval(() => { 
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    const weekday = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];
    let day = weekday[date.getDay()]
    let time = document.querySelector ("#myClock")
    time.innerHTML = `${hour} : ${minute} : ${second}   ${day} `
    } , 1000)