

//создание ссылки







//Запрос
const request = 'https://gorest.co.in/public/v2/posts';
async function methodTest(request) {
	/* const a = 6947824; */
const response = await fetch(request, {
	method:'GET',
  	headers: {
    Authorization:'Bearer 24f9cd9dada2adbd4d747ca1ec405c72593d745c7430dc813466fd24225b977b',
    'Content-Type':'application/json'
  }
});
	const blogItem = await response.json();
	console.log(blogItem.lenght)
	for (let i = 0; i < blogItem.length; i++) {
		let div = document.getElementById('block-library');
		let link = document.createElement('a');
		link.setAttribute('href', `http://127.0.0.1:5500/kat.html/${i}`);
		link.innerText = blogItem[i].title;
		div.append(link);
		console.log();
	}
	
	
	
	
	
	
	/* const json = blogItem.name;
	console.log(json) */
}


methodTest(request);
