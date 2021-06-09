const MAUN_URI = 'https://pixabay.com/api/?key=6517028-c756546e2dcfb9b93390219a7&image_type=photo';

function searchImg(q = '',  per_page = 20, page = 1, callback) {
  fetch(
    `${MAUN_URI}&q=${q}&page=${page}&per_page=${per_page}`,
    {
      method: 'get',
      headers: {},
    }
  ).then((result) => {
    return result.json();
  }).then((data) => {
    if(typeof callback === 'function') {
      callback(data);
    }
  });
}