const Name = document.getElementById("name"),
      Text = document.getElementById("text"),
      nameError = document.querySelector('#name + span.error'),
      form  = document.getElementsByTagName('form')[0];


Name.addEventListener('input', function(event){
    if(Name.validity.valid){
        nameError.textContent='';
        nameError.className='error';
    }else{
        showError();
    }
})

form.addEventListener('submit', function(event){
    if(!Name.validity.valid){
        showError();
        event.preventDefault();
    }
})

function showError() {
    if(Name.validity.valueMissing) {
      // Если поле пустое,
      // отображаем следующее сообщение об ошибке
      nameError.textContent = 'You need to enter an e-mail address.';
    } else if(Name.validity.typeMismatch) {
      // Если поле содержит не email-адрес,
      // отображаем следующее сообщение об ошибке
      nameError.textContent = 'Entered value needs to be an e-mail address.';
    } else if(Name.validity.tooShort) {
      // Если содержимое слишком короткое,
      // отображаем следующее сообщение об ошибке
      nameError.textContent = `Email should be at least ${ Name.maxLength } characters; you entered ${ email.value.length }.`;
    }
  
    // Задаём соответствующую стилизацию
    nameError.className = 'error active';
  }