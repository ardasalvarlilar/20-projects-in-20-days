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

// check email is valid (regex is copy pased)
function is_email_valid(email){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// check required fields
function check_required(input_arr){
  input_arr.forEach(input => {
    if(input.value.trim() == ''){
      show_error(input, `${get_field_name(input)} is required`)
    }else{
      show_success(input)
    }
  })
}

function get_field_name(input){
  return input.title.charAt(0).toUpperCase().concat(input.title.slice(1))
}

// event listener
form.addEventListener('submit', (event) => {
  event.preventDefault()

  
  check_required([username,email,password,password2])
})