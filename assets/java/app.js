
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

// initializes Google Custom Search Call Back
  window.__gcse = {
    parsetags: 'explicit',
    initializationCallback: myInitCallback
};
  
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

  