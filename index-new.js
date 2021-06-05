// const Searchhtml = document.querySelector('.search');
const Searchhtml = search;
const Paginationhtml = pagination;

let page = 1;

Paginationhtml['prev'].addEventListener('click', () => {
	showImg(-1);
})

Paginationhtml['next'].addEventListener('click', () => {
	showImg(1);
})

Searchhtml.addEventListener('submit', (e) => {
	e.preventDefault();
	showImg(0);
});

Paginationhtml.addEventListener('submit', (e) => {
	e.preventDefault();
});

function showImg(_page){

	//first
	if(_page < 0 ){
		page++;
	} else if (_page > 0 ) {
		page--;
	} else {
		page = 1;
	}

	//second
	
	const keyWord = Searchhtml['key_word'].value.replace(/\s+/g, '+');
	const perPage = Paginationhtml['per_page'].value;
	searchImg (keyWord, perPage, page, (data) => {
	});
}

