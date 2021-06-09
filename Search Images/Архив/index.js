const SearchHtml = search;
const PaginationHtml = pagination;

let total = 0;
let page = 1;

SearchHtml['key_word'].addEventListener('input', (e) => {
  if(e.target.value) {
    unlockControl();
  } else {
    PaginationHtml['prev'].setAttribute('disabled', 'disabled');
    PaginationHtml['next'].setAttribute('disabled', 'disabled');
  }
});

PaginationHtml['per_page'].addEventListener('change', (e) => {
  showImg(0);
});

PaginationHtml['prev'].addEventListener('click', (e) => {
  if(page - 1 === 1) {
    e.target.setAttribute('disabled', 'disabled');
  } 

  PaginationHtml['next'].removeAttribute('disabled');
  showImg(-1);
});

PaginationHtml['next'].addEventListener('click', (e) => {
  const perPage = PaginationHtml['per_page'].value;
  if((page + 1) * perPage >= total) {
    e.target.setAttribute('disabled', 'disabled');
  } 

  PaginationHtml['prev'].removeAttribute('disabled');
  showImg(1);
});

SearchHtml.addEventListener('submit', (e) => {
  e.preventDefault();
  showImg(0);
});

PaginationHtml.addEventListener('submit', (e) => {
  e.preventDefault();
});



function showImg(_page) {
  if(_page > 0) {
    page++;
  } else if(_page < 0) {
    page--;
  } else {
    page = 1;
  }

  const keyWord = SearchHtml['key_word'].value;
  const perPage = PaginationHtml['per_page'].value;

  searchImg(keyWord, perPage, page, (data) => {
    total = data.total;

    unlockControl();

    document.querySelector('span.total').innerText = `page ${page} / ${total / perPage}`;

    document.querySelector('.content').innerHTML = data.hits.reduce((html, item) => {
      return html + `<img src="${item.previewURL}" />`
    }, '');
  });
}

function unlockControl() {
  if(page > 1) {
    PaginationHtml['prev'].removeAttribute('disabled');
  } else {
    PaginationHtml['prev'].setAttribute('disabled', 'disabled');
  }

  const perPage = PaginationHtml['per_page'].value;
  if (page * perPage < total) {
    PaginationHtml['next'].removeAttribute('disabled');
  } else {
    PaginationHtml['next'].setAttribute('disabled', 'disabled');
  }
}