var time = 0 

var initiate = function(){
    time = time+1;
    document.getElementById('time').innerText = time
}

setInterval(initiate, 1000)





var body = document.querySelector('.body')

var changeColor = function(){
    body.style ='background-color: white'
}

document.addEventListener('click', changeColor)