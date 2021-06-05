const MAIN_URL = `https://pixabay.com/api/?key=21923475-24100d30c0dcfaa14db447820&image_type=photo&`;

function searchImg(q = '', per_page = 20, page = 1, callback){

    fetch(
		`${MAIN_URL}&q=${q}&per_page=${per_page}&page=${page}`,
		{
			method: 'get',
			headers: {},
		}
	).then(( result ) => {
		return result.json(); //text(), blob()
	}).then((data) => {
        getImages(data);
        disableNext(data);

		// if( typeof callback === 'function'){
        //     callback(data);
        //     console.log(data);
        //     getImages(data)
        // }
	});
}

function getImages(data){
    let gallery = document.querySelector('.content');
    document.querySelectorAll('img').forEach((e) => e.remove());
	data.hits.forEach(element => {
		// console.log(element);
		// first
		// Btn200.insertAdjacentHTML('afterend', (`<img src="${element.previewURL}">`));

		// second
		let src = element.previewURL;
        
		let Img = document.createElement('img');
		Img.setAttribute( 'src', src);
		gallery.appendChild(Img);
		// console.log(Img);
	});
}

function disableNext(data){
    // console.log(data);
    btnNext.disabled = false;

    const perPage = +Paginationhtml['per_page'].value;
    const btnNext = Paginationhtml['next'];

    if (data.total < perPage){
        btnNext.disabled = true;
    }
}

// let gallery = document.body;
// let BtnDefault = document.querySelector('.btn_20');
// let Btn100 = document.querySelector('.btn_100');
// let Btn200 = document.querySelector('.btn_200');

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
// 		getImages(data);
// 	});
// });

// Btn100.addEventListener('click', (e) => {
// 	document.querySelectorAll('img').forEach((e) => e.remove());
// 	fetch(
// 		'https://pixabay.com/api/?key=21923475-24100d30c0dcfaa14db447820&q=yellow+flowers&image_type=photo&per_page=100',
// 		{
// 			method: 'get',
// 			headers: {},
// 		}
// 	).then(( result ) => {
// 		return result.json(); //text(), blob()
// 	}).then((data) => {
// 		console.log(data);
// 		getImages(data);
// 	});
// });

// Btn200.addEventListener('click', (e) => {
// 	document.querySelectorAll('img').forEach((e) => e.remove());
// 	fetch(
// 		'https://pixabay.com/api/?key=21923475-24100d30c0dcfaa14db447820&q=yellow+flowers&image_type=photo&per_page=200',
// 		{
// 			method: 'get',
// 			headers: {},
// 		}
// 	).then(( result ) => {
// 		return result.json(); //text(), blob()
// 	}).then((data) => {
// 		getImages(data);
// 	});
// });