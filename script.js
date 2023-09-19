// var time = 0 

// var initiate = function(){
//     time = time+1
//     document.getElementById('time').innerText = time
// }

// setInterval(initiate, 1000)





var body = document.querySelector('.body')

var changeColor = function(){
    body.style.backgroundColor = 'green'
}


// var fetchQuotes = function(){

//     var start = async function(){
//         var res = await fetch('https://api.api-ninjas.com/v1/quotes?category=imagination', {
//         method: 'GET',
//         headers:{ 'X-Api-Key': 'l8MFF+UcPr3CLfTvYl3GQA==vqjL9aCZxpwhBPeE'},
//         contentType: 'application/json',
//     })
    
//     if(res.ok){
//         var data= await res.json()
//         console.log(data)
//         document.querySelector('#quote').textContent = data[0].quote
        
//         document.querySelector('#name').textContent = data[0].author
//     } else {
//         document.querySelector('#quote').innerHTML = 'No quotes today!'
//     }

//     }
//     start()
    
// }


var fetchQuotes = async function(){


        var res = await fetch('https://api.api-ninjas.com/v1/quotes?category=imagination', {
        method: 'GET',
        headers:{ 'X-Api-Key': 'l8MFF+UcPr3CLfTvYl3GQA==vqjL9aCZxpwhBPeE'},
        contentType: 'application/json',
    })
    
    if(res.ok){
        var data= await res.json()
        console.log(data)
        document.querySelector('#quote').textContent = data[0].quote
        
        document.querySelector('#name').textContent = data[0].author
    } else {
        document.querySelector('#quote').innerHTML = 'No quotes today!'
    }


    
}

// setInterval(fetchQuotes(), 20000)
window.onload = fetchQuotes
document.addEventListener('click', changeColor)