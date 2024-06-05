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
	console.log(blogItem[3]);
	blogItem.forEach(element => {
		const nameI = element.title;
		console.log(nameI)
	});
	
	
	
	
	
	
	/* const json = blogItem.name;
	console.log(json) */
}


methodTest(request);


console.log(typeof []);