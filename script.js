// var fetchQuotes = function () {

//     var key = 'l8MFF+UcPr3CLfTvYl3GQA==vqjL9aCZxpwhBPeE';
//     var url = 'https://api.api-ninjas.com/v1/quotes?category=imagination';

//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.overrideMimeType("application/json")
//     xmlHttp.open("GET", url, false);
//     xmlHttp.setRequestHeader("X-Api-Key", key);
//     xmlHttp.send(null);
//     console.log(xmlHttp.response)

//     var data = JSON.parse(xmlHttp.response)
//     console.log(data)


//     if (xmlHttp.responseText) {
//         document.querySelector('#quote').textContent = data[0].quote
//         document.querySelector('#name').textContent = data[0].author
//     } else {
//         document.querySelector('#quote').innerHTML = 'No quotes today!'
//     }

//     fontResize()
//     setTimeout(function(){
//         location.reload()
//     }, 3600000)
    
// }

// var fontResize = function(){
//     var subBody = document.querySelector('.sub-div')

//     if(subBody.clientHeight > 900){
//         console.log(subBody.clientHeight)
//         console.log('the body is too big')
//         document.querySelector('#quote').style.fontSize= '55px'
//         document.querySelector('#name').style.fontSize = '45px'
//     }

//     if(subBody.clientHeight > 1000){
//         console.log(subBody.clientHeight)
//         console.log('the body is too big')
//         document.querySelector('#quote').style.fontSize= '50px'
//         document.querySelector('#name').style.fontSize = '40px'
//     }
// }

// fetchQuotes()


var fetchQuotes = function () {

    // var host = 'kjv-bible.p.rapidapi.com';
    // var key = '078afd1a80msh7ea285deb28a44fp1a0ba1jsn8012f6f68869'
    // var url = 'https://kjv-bible.p.rapidapi.com/randomVerse';
    var url = 'https://labs.bible.org/api/?passage=random&type=json&callback=myCallback'

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.overrideMimeType("application/json")
    xmlHttp.open("GET", url, false);
    // xmlHttp.setRequestHeader("X-RapidAPI-Key", key);
    // xmlHttp.setRequestHeader("X-RapidAPI-Host", host );


    xmlHttp.send(null);
    console.log(xmlHttp.responseText)
    // var result = xmlHttp.responseText.slice(11).slice(0,-1)
    // console.log(result)
    // var data = JSON.parse(result)
    // console.log(data)


    if (xmlHttp.responseText) {
        document.querySelector('#quote').textContent = xmlHttp.responseText
        // document.querySelector('#name').textContent = data[0].bookname + " " + data[0].chapter + ":" + data[0].verse
    } else {
        document.querySelector('#quote').innerHTML = 'No quotes today!'
    }

    fontResize()
    setTimeout(function(){
        location.reload()
    }, 3600000)
    
}

var fontResize = function(){
    var subBody = document.querySelector('.sub-div')

    if(subBody.clientHeight > 900){
        console.log(subBody.clientHeight)
        console.log('the body is too big')
        document.querySelector('#quote').style.fontSize= '55px'
        document.querySelector('#name').style.fontSize = '45px'
    }

    if(subBody.clientHeight > 1000){
        console.log(subBody.clientHeight)
        console.log('the body is too big')
        document.querySelector('#quote').style.fontSize= '50px'
        document.querySelector('#name').style.fontSize = '40px'
    }
}

fetchQuotes()