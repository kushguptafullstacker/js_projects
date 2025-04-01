document.addEventListener('DOMContentLoaded' , ()=>{
  const cityinput=  document.querySelector("#cityInput")
  const searchBtn=  document.querySelector("#searchBtn")
  const cityname=document.querySelector("#cityName")
  const temperature=document.querySelector("#temperature")
  const informative=document.querySelector("#jankari")
  const dperrro=document.querySelector('#error')
  const description=document.querySelector('#description')
  const Api_key="2e4f4dbbd6cd29a89ee7a547f8879454"

  searchBtn.addEventListener('click',async  ()=>{
    const value=cityinput.value.trim()
    
    if(!value) return
    
     try {
        const response= await fetchdata(value)
        displaydata(response)
     } catch (error) {
        throwerror()
     }
    
      
  })
  async function fetchdata(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`
    
    const response=await fetch(url) 
    

    if(!response.ok){
            throw new error('city not found')
            
    }
  
  
         return await response.json();

  }
  function displaydata(response){
    console.log(response);
    const {name , main , weather }=response
    cityname.textContent=`country name is ${name}`
    temperature.textContent=`today temperatur is ${main.temp}`
    description.textContent= `today sky is ${weather[0].description} `
    cityname.classList.remove('hidden')
    informative.classList.remove('hidden')
  }
  function throwerror(){
    
    dperrro.classList.remove('hidden')
    dperrro.textContent="city not found "
  }
})