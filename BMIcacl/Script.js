document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = 'Please enter a valid height in cm.';
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = 'Please enter a valid weight in kg.';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}`;
    }
});
