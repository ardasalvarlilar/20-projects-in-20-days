const container = document.querySelector('.container')
const seats = document.querySelectorAll('.seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movie_select = document.getElementById('movie')
let ticet_price = +movie_select.value

// update total and amount
function update_selected_count(){
  const selected_seats = document.querySelectorAll('.row .seat.selected')
  const selected_seats_counts = selected_seats.length

  count.innerText = selected_seats_counts
  total.innerText = selected_seats_counts * ticet_price
}

// movie select event
movie_select.addEventListener('change', e => {
  ticet_price = +e.target.value
  update_selected_count()
})

// seat click event
container.addEventListener('click',(e) => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied') ){
    e.target.classList.toggle('selected')

    update_selected_count()
  }
})