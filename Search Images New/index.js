const MAIN_URL = `https://pixabay.com/api/?key=21923475-24100d30c0dcfaa14db447820&image_type=photo&`;

let btnDownloadSmall = document.querySelector('.btn_sml');

function createImg(uri, download){
    return `
    
        <a href="${download}" >
            <div class="btns">
                <button class="btn btn_sml">S</button>
                <button class="btn btn_med">M</button>
                <button class="btn btn_lrg">L</button>
            </div>
            <img src="${uri}" />
        </a>
    
    `;  
}

btnDownloadSmall.addEventListener('click', () => {alert('click')})

async function init(){
    const responce = await fetch('https://pixabay.com/api/?key=21923475-24100d30c0dcfaa14db447820&image_type=photo&q=&per_page=20&');
    const { hits} = await responce.json();
    console.log(hits);

    const blobs = await Promise.all(
        hits.map(async ({ previewURL, largeImageURL, webformatURL }) =>{
            const responce = await fetch(largeImageURL);
            const blob = await responce.blob()

            return { showUri: previewURL, downloadUri: URL.createObjectURL(blob)};
        })
    )

    document.body.innerHTML = blobs.reduce((buffer, {showUri, downloadUri}) => buffer + createImg(showUri, downloadUri), '');
}
init();


