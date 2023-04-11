
const button = document.getElementById('convert-button')
const select = document.getElementById("currency-select")


const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000066


const convertValue = () => {   //Quando o botão for clicado vai chamar essa função
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById("real-valor-text")
    const currencyValueText = document.getElementById("currency-value-text")

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


























