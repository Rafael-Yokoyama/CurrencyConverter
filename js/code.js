const button = document.getElementById('button-convert')
const select = document.getElementById('select-value')

const Euro = 5.9
const bitCoin = 0.0000059
const Iene = 21.55 

const convertValues = async () => {

    let dollar = 0
    await fetch('https://api.currencyfreaks.com/latest?apikey=9bc6d79285ca4d5a9edb1262648b9cb0')
        .then(data => data.json())
        .then(res => dollar = res?.rates?.BRL)

    const getReaisValue = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currentValueText = document.getElementById('current-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(getReaisValue)


    if (select.value === 'US$ Dollar') {
        currentValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(getReaisValue / dollar)
    }

    if (select.value === '€ Euro') {
        currentValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', 
            currency: 'EUR'
        }).format(getReaisValue / Euro)
    }

    if (select.value === 'Bitcoin') {
        currentValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            maximumFractionDigits:10,
            style: 'currency',
            currency: 'XBT'
        }).format(getReaisValue * bitCoin)
    }

    if (select.value === '¥ Ienes') {
        currentValueText.innerHTML = new Intl.NumberFormat('jp-JP', {
            maximumFractionDigits:10,
            style: 'currency',
            currency: 'JPY'
        }).format(getReaisValue * Iene)
    }

}


const changeCurrency = () => {

    const currencyImg = document.getElementById('currency-img')
    const currencyName = document.getElementById('currency-name')
    const getReaisValue = document.getElementById('input-real').value


    if (select.value === 'US$ Dollar') {
        currencyImg.src = './assets/dolar.svg'
        currencyName.innerHTML = 'Dollar'
    }
    if (select.value === '€ Euro') {
        currencyImg.src = './assets/euro.svg'
        currencyName.innerHTML = 'Euro'
    }

    if (select.value === 'Bitcoin') {
        currencyImg.src = './assets/bitcoin.svg'
        currencyName.innerHTML = 'BitCoin'
    }
    if (select.value === '¥ Ienes') {
        currencyImg.src = './assets/ienes.svg'
        currencyName.innerHTML = ' Ienes'
    }

    if (getReaisValue > 0) {
        convertValues()
    }

}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)  