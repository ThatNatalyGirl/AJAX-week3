'use strict';

console.log('Piano');

var apiKey = '4b5597618fc046b1a6045d770f61cc8b';
var searchBtn = document.getElementById('search');
var keywordValue = document.getElementById('keyword').value;
var articles = document.querySelector('.articles');

searchBtn.addEventListener("click", function (e) {
	e.preventDefault();
	getValueFromApi(keywordValue);
});

function getValueFromApi(keyword) {
	axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json" + '?api-key=' + apiKey + "&q=" + keyword).then(function (response) {
		//articles can be found in response.data.response.docs
		response.data.response.docs.forEach(function (article) {
			console.log(article);
			var li = document.createElement('li');
			li.innerHTML = article.headline.main;
			articles.appendChild(li);

			var img = document.createElement('img');
			img.innerHTML = article.multimedia;
		});
	}).catch(function (error) {
		console.warn('.axios encountered an error!', error);
		valueEl.value = "UNDEFINED";
	});
}

// for (var i = Things.length - 1; i >= 0; i--) {
// 	Things[i]
// }


// 	let getValueFromApi = function(searchTerm) {
// 	axios.get(url)
// 	.then(function (results) {

// 		console.log("here is the get response data for key:", results.data,
// 			results);
// 		results.data.forEach ((result) => {
// 			resultsDiv = document.createElement("div");
// 			resultsDiv.innerHTML = result.data;
// 		});

// 	});

// Search query term. Search is performed on the article body, headline and byline.

// When we make that call'


// you need a for loop to go through each of the results pull the the elements through the dom like .data.x.y..... (title thumbnail url)

// add it to the dom in a div or whatever

// q is an expected peramiter for the API 

// const searchTerm = searchEl.value: 

// www.nyt.com...your API....+ "?q=" + searchTerm

// We are only Geting data not posting


// Just has an API key that you have to pass along. 
// This is a simple API
// Social networks have a lot more security and are a lot more complicated

// http://developer.nytimes.com/

// You're requesting a simple API key (because it's not sensitive) 

// Everyone has their own api key
// You can only get 1000 users on your website a day so they have specifications through the site. 

// Make sure you're using the correct terms of use

// Scroll down - Article Search 
// q  string
// Location: query ?q=xyz
//# sourceMappingURL=main.js.map
