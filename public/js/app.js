
const wForm= document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')

wForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent='Loading'
    messageTwo.textContent=' '

    fetch('/weather?address='+location).then((response)=>{
     response.json().then((data)=>{
           if(data.error){
               messageOne.textContent=data.error
           }else{
               messageOne.textContent=data.location
               messageTwo.textContent=data.forecast
           }
     })
})

})