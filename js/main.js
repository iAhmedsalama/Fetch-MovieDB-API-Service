var myHttp = new XMLHttpRequest();
var MoviesList;
//Establish Connection
myHttp.open("GET", "https://api.themoviedb.org/3/trending/all/day?api_key=0f01e406f68df28fb5bc6314a1a0dbce");

//Send Connection
myHttp.send();

myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState == 4 && myHttp.status == 200) {
        MoviesList = JSON.parse(myHttp.response).results;
        display();
    }
})

function display() {

    var container = ``;
    for (let i = 0; i < MoviesList.length; i++) {

        container += `
            <div class="col-md-3">
                <div class="movie position-relative">
                    <img src="https://image.tmdb.org/t/p/w400/${MoviesList[i].poster_path}" class="w-100"/>
                    <h1>${MoviesList[i].original_title}</h1>
                    <p>${MoviesList[i].overview}</p>
                    <div class="vote bg-info p-2 font-wright-bolder position-absolute">${MoviesList[i].vote_average}</div>
                </div>
            </div>
        
        `;
    }
    
    // @ts-ignore
    document.getElementById("data").innerHTML = container;

}