let gallery = document.body;
let Btn = document.querySelector('button');



// gallery.createElement('img');

Btn.addEventListener('click', (e) => {
	document.querySelectorAll('img').forEach((e) => e.remove());
	fetch(
		'https://pixabay.com/api/?key=21923475-24100d30c0dcfaa14db447820&q=yellow+flowers&image_type=photo',
		{
			method: 'get',
			headers: {},
		}
	).then(( result ) => {
		return result.json(); //text(), blob()
	}).then((data) => {
		data.hits.forEach(element => {
			// console.log(element);
			// first
			// Btn.insertAdjacentHTML('afterend', (`<img src="${element.previewURL}">`));

			// second
			let src = element.previewURL;
			let Img = document.createElement('img');
			Img.setAttribute( 'src', src);
			document.body.appendChild(Img);
			// console.log(Img);
		});
	});
});
