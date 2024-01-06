const main = document.getElementById('main')
const add_user_btn = document.getElementById('add-user')
const double_btn = document.getElementById('double')
const show_millionaires_btn = document.getElementById('show-millionaires')
const sort_btn = document.getElementById('sort')
const calculate_wealth_btn = document.getElementById('calculate-wealth')

let data = []
// fetch random user and add money
get_ramdom_user()
get_ramdom_user()
get_ramdom_user()
async function get_ramdom_user(){
  const res = await fetch('https://randomuser.me/api')
  const data = await res.json()
  const user = data.results[0]
  const new_user = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  }
  add_data(new_user)
}

// double moneys
function double_money(){
  data = data.map(user => {
    return { ...user,money: user.money * 2 }
  })

  update_dom()
}

function sort_by_richest(){
  data.sort((a,b) => b.money - a.money)
  update_dom()
}

// add new obj to data arr
function add_data(obj){
  data.push(obj)

  update_dom()
}

// update dom
function update_dom(provided_data = data){
  // clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'
  provided_data.forEach(item => {
    const element = document.createElement('div')
    element.classList.add('person')
    element.innerHTML = `<strong>${item.name}</strong> ${format_money(item.money)}`
    main.appendChild(element)
  })
}

// format number as money
function format_money(number){
  return'$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// event listener
add_user_btn.addEventListener('click',get_ramdom_user)
double_btn.addEventListener('click', double_money)
sort_btn.addEventListener('click',sort_by_richest)