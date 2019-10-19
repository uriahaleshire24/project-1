// on page load, search for & display a random gif matching your search term using the Giphy API.
// usage: 


document.addEventListener('DOMContentLoaded', function () {
	q = "computer"; // search query
	
	request = new XMLHttpRequest;
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









