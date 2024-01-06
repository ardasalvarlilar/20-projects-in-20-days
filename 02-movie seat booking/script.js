const container = document.querySelector('.container')
const seats = document.querySelectorAll('.seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movie_select = document.getElementById('movie')
let ticet_price = +movie_select.value

// save selected movie index and price
function set_movie_data(movie_index,movie_price){
  localStorage.setItem('selected_movie_index',movie_index)
  localStorage.setItem('selected_movie_price',movie_price)
}
// update total and amount
function update_selected_count(){
  const selected_seats = document.querySelectorAll('.row .seat.selected')
  const seats_index = [...selected_seats].map(seat => [...seats].indexOf(seat))
  localStorage.setItem('selected_seats', JSON.stringify(seats_index))

  const selected_seats_counts = selected_seats.length

  count.innerText = selected_seats_counts
  total.innerText = selected_seats_counts * ticet_price
}

// movie select event
movie_select.addEventListener('change', e => {
  ticet_price = +e.target.value
  set_movie_data(e.target.selectedIndex, e.target.value)
  update_selected_count()
})

// seat click event
container.addEventListener('click',(e) => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied') ){
    e.target.classList.toggle('selected')

    update_selected_count()
  }
})