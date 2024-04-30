function handleSubmit(event)
{
    event.preventDefault();
 
    const emailInput= document.getElementById("email")
    const messageInput= document.getElementById("message")

    const isEmailValid=emailInput.value.trim() !== '' && emailInput.validity.valid
    var isMessageValid=messageInput.value.trim() !== '';

    const isFormValid= isEmailValid && isMessageValid

    if(isFormValid)
    {
        const formData = new FormData(event.target)
        fetch('https://formspree.io/f/xgegrqjw',
        {
            method:'POST',
            body:formData,
            headers:{
                'Accept': 'application/json'
            }
        }).then(response => response.json) 
        .then(data =>{
            if(data.ok)
            {
                alert('Email sent successfully')
            }
        })
        }
    
    else{
        alert('invalid')
        if(isEmailValid !== true)
        {
            const emailSpan=document.getElementById('email-span')
            emailSpan.classList.remove('hidden')
        }
        if(isMessageValid !== true)
        {
            const messageSpan=document.getElementById('message-span')
            messageSpan.classList.remove('hidden')
        }
    }
    
}