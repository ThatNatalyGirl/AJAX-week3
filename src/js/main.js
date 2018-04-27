console.log(`Piano`)


const apiKey = '4b5597618fc046b1a6045d770f61cc8b'
const searchBtn = document.getElementById('search');
let keywordValue = document.getElementById('q').value;
let articles = document.querySelector('.articles');

searchBtn.addEventListener("click", function(e) {
			e.preventDefault();
			searchArticles(keywordValue);
		})

function displayArticle(article){
	const title = article.headline.main;
	//pick any default image
	const thumbail = 'default.png';
	if (article.multimedia && article.multimedia.length) {
		thumbail = 'https://static01.nyt.com' + article.multimedia[0].url;
	} 
	const url = article.web_url;

	const liEl = document.createElement('li');
	const linkEl = document.createElement('a');
	const imgEl = document.createElement('img');
	
	const pEl = document.createTextNode(title);
	linkEl.href = url;
	imgEl.src = thumbnail;

	liEl.appendChild(linkEl);
	linkEl.appendChild(pEl);
	linkEl.appendChild(imgEl);

	resultsEl.appendChild(liEl);
}

function displayArticles(articlesArray) {
	resultsEl.innerHTML = '';

	if (articleArray && articleArray.length && articleArray.length > 0) {
		articleArray.forEach(article =>{
			displayArticle(article);
		})
	} else {
		console.warn ("No Articles Found!")
	}
}



function searchArticles(keywordValue){
	axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + keywordValue)
	.then(function(response){
	// //articles can be found in response.data.response.docs
	// 	response.data.response.docs.forEach(article =>{
	// 		console.log (article)
	// 		let li = document.createElement('li');
	// 		li.innerHTML = article.headline.main;
	// 		articles.appendChild(li);

	// 		let img = document.createElement('img');
	// 		img.innerHTML = article.multimedia[0].url;
	// 	})
		displayArticles(response.data.response.docs);
	})

	.catch(function(error) {
		console.warn('.axios encountered an error!', error);
		valueEl.value = "UNDEFINED"
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



























