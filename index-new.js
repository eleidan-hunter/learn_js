let gallery = document.body;
let BtnDefault = document.querySelector('.btn_20');
let Btn100 = document.querySelector('.btn_100');
let Btn200 = document.querySelector('.btn_200');



// gallery.createElement('img');

// BtnDefault.addEventListener('click', (e) => {
// 	document.querySelectorAll('img').forEach((e) => e.remove());
// 	fetch(
// 		'https://pixabay.com/api/?key=21923475-24100d30c0dcfaa14db447820&q=yellow+flowers&image_type=photo',
// 		{
// 			method: 'get',
// 			headers: {},
			
// 		}
// 	).then(( result ) => {
// 		return result.json(); //text(), blob()
// 	}).then((data) => {
// 		data.hits.forEach(element => {
// 			// console.log(element);
// 			// first
// 			// BtnDefault.insertAdjacentHTML('afterend', (`<img src="${element.previewURL}">`));

// 			// second
// 			let src = element.previewURL;
// 			let Img = document.createElement('img');
// 			Img.setAttribute( 'src', src);
// 			document.body.appendChild(Img);
// 			// console.log(Img);
// 		});
// 	});
// });

Btn100.addEventListener('click', (e) => {
	document.querySelectorAll('img').forEach((e) => e.remove());
	fetch(
		'https://pixabay.com/api/?key=21923475-24100d30c0dcfaa14db447820',
		{
			// key: '21923475-24100d30c0dcfaa14db447820',
			method: 'get',
			headers: {},
			per_page: 100,
		}
	).then(( result ) => {
		return result.json(); //text(), blob()
	}).then((data) => {
		console.log(data);
		data.hits.forEach(element => {
			// console.log(element);
			// first
			// Btn100.insertAdjacentHTML('afterend', (`<img src="${element.previewURL}">`));

			// second
			let src = element.previewURL;
			let Img = document.createElement('img');
			Img.setAttribute( 'src', src);
			document.body.appendChild(Img);
			// console.log(Img);
		});
	});
});

// Btn200.addEventListener('click', (e) => {
// 	document.querySelectorAll('img').forEach((e) => e.remove());
// 	fetch(
// 		'https://pixabay.com/api/?key=21923475-24100d30c0dcfaa14db447820&q=yellow+flowers&image_type=photo',
// 		{
// 			method: 'get',
// 			headers: {},
// 			per_page: 200,
// 		}
// 	).then(( result ) => {
// 		return result.json(); //text(), blob()
// 	}).then((data) => {
// 		data.hits.forEach(element => {
// 			// console.log(element);
// 			// first
// 			// Btn200.insertAdjacentHTML('afterend', (`<img src="${element.previewURL}">`));

// 			// second
// 			let src = element.previewURL;
// 			let Img = document.createElement('img');
// 			Img.setAttribute( 'src', src);
// 			document.body.appendChild(Img);
// 			// console.log(Img);
// 		});
// 	});
// });
