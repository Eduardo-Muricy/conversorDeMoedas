const button = document.getElementById('convert-button')
const select = document.getElementById("currency-select")
const dolar = 5.02
const euro = 5.9
const bitcoin = 116969.00
const convertValues = () => {
   const input = document.getElementById('input-real').value
   const realValueText = document.getElementById('real-value-text')
   const currentyValueText = document.getElementById('currency-value-text')
   //currentyValueText.innerHTML= input/dolar

   realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
   }).format(input)

   if (select.value === "US$ Dólar Americano") {
      currentyValueText.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
      }).format(input / dolar)
   }
   if (select.value === "€ Euro") {
      currentyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR",
      }).format(input / euro)
   }
   if (select.value === 'Bitcoin') {
      currentyValueText.innerHTML = input/bitcoin
   }

}
changeCurrency = () => {
   const currencyName = document.getElementById("currency-Name")
   const currencyImg = document.getElementById("currency-img")

   if (select.value === 'US$ Dólar Americano') {
      currencyName.innerHTML = "Dólar americano"
      currencyImg.src = "IMG/estados-unidos (1) 1.png"

   }

   if (select.value === '€ Euro') {
      currencyName.innerHTML = "Euro"
      currencyImg.src = "IMG/Design sem nome 1.png"

   }

   if (select.value === 'Bitcoin') {
      currencyName.innerHTML = "Bitcoin"
      currencyImg.src = "IMG/Design sem nome (1) 1.png"

   }
convertValues()
}
button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)