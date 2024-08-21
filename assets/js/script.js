const form = document.getElementById('form');

form
const height = document.getElementById('height');
const weight= document.getElementById('weight');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = (document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const heightconversao = height / 100;

    const bmi = (weight / (heightconversao * heightconversao)).toFixed(2);
    
    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 16.9){
        description = 'Muito abaixo do peso'
    } else if (bmi >= 17 && bmi <= 18.4){
        description = 'Abaixo do peso'
    } else if (bmi >= 18.5 && bmi <= 24.9){
        description = 'Peso normal'
    } else if (bmi >= 25 && bmi <= 29.9){
        description = 'Acima do peso'
    } else if (bmi >= 30 && bmi <= 34.9){
        description = "Obesidade grau I"
    } else if (bmi >= 25 && bmi <= 40){
        description = 'Obesidade grau II'
    } else{
        description = 'Obesidade grau III'
    }

    value.textContent = bmi.replace('.', ',');

    document.getElementById('description').textContent = description;

})