//===========================================================================================//


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=computers+coding&api-key=iXxrB5IFdP1u6aNOnFTRt1J9L3jYnjBJ";

function loadArticle() {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (results) {
    var article = results.response.docs;
    console.log(results);
    var headlineArr = [];
    var randomNum = [];
    var headlineDiv = $("#articles");
    var imageArr = [];
    var counter = 0;
    var image = "";
    var url = []
    for (var i = 0; i < 5; i++) {


      randomNum[i] = Math.round(Math.random() * 10);
      counter = randomNum[i];
      // console.log(randomNum + " is random num");
  
      // headlineArr[i] = article.docs[i].headline.main;
      // console.log(headlineArr[i]);
                  
      
     
      console.log(i);
      console.log(article);
      console.log(article[i].web_url);
      console.log(article[counter].headline.main);
      console.log(article[counter].multimedia[11].url);
      headlineArr[i] = article[counter].headline.main;
      url[i] = article[i].web_url;
      imageArr[i] = article[counter].multimedia[11].url;

      

    }
    // $(".lead").append(`<button class='btn-btn-dark' href=` + headlineArr[counter] + `>` + `</button><br>`);
    // $(".lead").append(`<btn>` + url[counter] + `</btn><br>`);
    // $(".lead").append(imageArr[counter]  + `<br>`);

    $(".lead").btnappend(headlineArr[counter] + `<br>`);
    $(".lead").append(url[counter] + `<br>`);
    $(".lead").append(imageArr[counter]  + `<br>`);
  });
}

// loadArticle();
// loadArticle();
$(document).ready(loadArticle());

//===========================================================================================//

const myInitCallback = function () {
  if (document.readyState == 'complete') {
    // Document is ready when CSE element is initialized.
    // Render an element with both search box and search results in div with id 'test'.
    google.search.cse.element.render({
      div: "customSearch",
      tag: 'search'
    });
  } else {
    // Document is not ready yet, when CSE element is initialized.
    google.setOnLoadCallback(function () {
      // Render an element with both search box and search results in div with id 'test'.
      google.search.cse.element.render({
        div: "customSearch",
        tag: 'search'
      });
    }, true);
  }
};

// Insert it before the CSE code snippet so the global properties like parsetags and callback
// are available when cse.js runs.

// initializes Google Custom Search Call Back
window.__gcse = {
  parsetags: 'explicit',
  initializationCallback: myInitCallback
};


//===========================================================================================//



// on page load, search for & display a random gif matching your search term using the Giphy API.
// usage: 
document.addEventListener('DOMContentLoaded', function () {
  q = "computer"; // search query

  request = new XMLHttpRequest();
  request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + q + '&rid=250w', true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      data1 = JSON.parse(request.responseText).data.image_url;
      console.log(data1);
      document.getElementById("gifComputer").innerHTML = '<center><img src = "' + data1 + '"  title="GIF via Giphy" style= "width: 100%"  ></center>';


    } else {
      console.log('reached giphy, but API returned an error');
    }
  };

  request.onerror = function () {
    console.log('connection error');
  };

  request.send();
});