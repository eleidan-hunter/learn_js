function init(){

    

    let DATA;

    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then((d) => d.json())
      .then((d) => {
        DATA = d;
    
        const currentCcy = document.querySelector('[name="ccy"]:checked').value;
    
        document.querySelector('[name="exchange"]').innerHTML = d.reduce((html, item, i) => {
          return html + `<option value="${i}">${item[currentCcy]} ${item['ccy']}</option>`;
        }, '');
    
        loader.remove();
        document.querySelector('.currency_wrapper').style.display = 'flex';
      });
    
    document.querySelectorAll('[type="number"]').forEach((htmlElement) => {
      htmlElement.addEventListener('input', calc);
    });
    
    document.querySelectorAll('[type="radio"], select').forEach((htmlElement) => {
      htmlElement.addEventListener('change', calc);
    });
    
    function calc(e) {
      const currentCcy = document.querySelector('[name="ccy"]:checked').value;
      const ccyIndex = document.querySelector('select').value;
    
      let Input = document.querySelector('[name="input"]');
      let InputResult = document.querySelector('[name="result"]');
    
      if (e.target === InputResult) {
        InputResult = document.querySelector('[name="input"]');
        Input = document.querySelector('[name="result"]');
      }
    
      InputResult.value = Number(Input.value) * Number(DATA[ccyIndex][currentCcy]);
    }
}

document.querySelector('.start_btn').addEventListener('click', (e) => {
    document.querySelector('.start_btn').outerHTML = (' <div id=\"loader\">loading ...</div>');

    init();
})

