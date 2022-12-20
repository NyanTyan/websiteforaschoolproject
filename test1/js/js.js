const input = document.querySelector(".form-control")
const button = document.querySelector(".btn")
const input1 = document.querySelector(".input")
const button1 = document.querySelector(".btnf")
button.onclick = () =>{
    let textUser = input.value

    if(textUser === "1"){
        // let liFirst = document.createElement('li');
        // liFirst.innerHTML = 'ваш ответ правильный';
        // ol.prepend(liFirst); // вставить liFirst в начало <ol>
        alert("ваш ответ правильный")
    }else {
        // let liFirst = document.createElement('li');
        // liFirst.innerHTML = 'ваш ответ не правильный';
        // ol.prepend(liFirst); // вставить liFirst в начало <ol>
        alert("ваш ответ не правильный")
    }
    console.log("fasdf")
}   