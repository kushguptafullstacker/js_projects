document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const Overweight=document.querySelector('#Overweight');
    
    if (isNaN(height) || height <= 0) {
        result.innerHTML = 'Please enter a valid height in cm.';
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = 'Please enter a valid weight in kg.';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `${bmi}`;
        
        
    }  if(weight>=18.6){
        const over=document.createElement('h1')
        over.textContent=`weight is under weight`
        console.log(Overweight);
        Overweight.innerHTML=`your weight is overweigt ${result.innerHTML}` 
       }
       if(weight<=18.6){
        const over=document.createElement('h1')
        over.textContent=`weight is under weight`
        console.log(Overweight);
        Overweight.innerHTML=`your weight is underwiegth ${result.innerHTML}` 
       }
    
    
});
