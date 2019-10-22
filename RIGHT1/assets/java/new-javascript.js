document.addEventListener('DOMContentLoaded', function () {
	q = "computer"; // search query
	
	request = new XMLHttpRequest();
	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q+'&rid=250w', true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data1 = JSON.parse(request.responseText).data.image_url;
			console.log(data1);
            document.getElementById("gifComputer").innerHTML = '<center><img src = "'+data1+'"  title="GIF via Giphy" style= "width: 100%"  ></center>';
            

		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
});


function loadArticle() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coding&api-key=iXxrB5IFdP1u6aNOnFTRt1J9L3jYnjBJ";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (results) {
        // console.log(results)
            
        var article = results.response.docs;
        for (var i = 0; i < article.length; i++) {
            console.log(i);
            console.log(article);
            console.log(article[i].web_url);
        }

    });
}
    

$(document).ready(loadArticle);





const myInitCallback = function() {
    if (document.readyState == 'complete') {
      // Document is ready when CSE element is initialized.
      // Render an element with both search box and search results in div with id 'test'.
      google.search.cse.element.render(
          {
            div: "customSearch",
            tag: 'search'
           });
    } else {
      // Document is not ready yet, when CSE element is initialized.
      google.setOnLoadCallback(function() {
         // Render an element with both search box and search results in div with id 'test'.
          google.search.cse.element.render(
              {
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


