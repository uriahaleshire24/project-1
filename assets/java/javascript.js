
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
