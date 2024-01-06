const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// for error
function show_error(input,message){
  const form_control = input.parentElement
  form_control.className ='form-control error'
  const small = form_control.querySelector('small')
  small.innerText = message
}

// for success
function show_success(input){
  const form_control = input.parentElement
  form_control.className ='form-control success'
}

// check email is valid

function is_email_valid(email){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// event listener
form.addEventListener('submit', (event) => {
  event.preventDefault()

  if(username.value === ''){
    show_error(username,'username is required')
  }else{
    show_success(username)
  }


  if(email.value === ''){
    show_error(email,'email is required')
  }else if(!is_email_valid(email.value)){
    show_error(email,'email is not valid')
  }else{
    show_success(email)
  }

  if(password.value === ''){
    show_error(password,'password is required')
  }else{
    show_success(password)
  }

  if(password2.value === ''){
    show_error(password2,'password 2 is required')
  }else{
    show_success(password2)
  }

})