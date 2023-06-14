
const button = document.getElementById('convert-button')
const select = document.getElementById("currency-select")




const convertValue = async () => {   //Quando o botão for clicado vai chamar essa função
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById("real-valor-text")
    const currencyValueText = document.getElementById("currency-value-text")

   

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response =>{
    return response.json()})

    const dolar= data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
 

    realValueText.innerHTML = inputReais

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === "US$ Dólar EUA") {

        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)


    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)


    }

    if (select.value === "₿ Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReais * bitcoin)

    }


}


changeCurrency = () => {

    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")


    if (select.value === 'US$ Dólar EUA') {
        currencyName.innerHTML = "Dólar EUA"
        currencyImg.src = './assets/EUA.jpg'

    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = './assets/Euro.jpg'

    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = './assets/Biticoin.png'

    }

    convertValue()

}



button.addEventListener('click', convertValue)
select.addEventListener('change', changeCurrency)


























