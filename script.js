const formAge = document.getElementById('form-age')
const inputAge = document.getElementById('input-age')

formAge.addEventListener('submit', (e) => {
  e.preventDefault();

  const age = Number(inputAge.value)

  if (isNaN(age) || age < 0) {
    console.log('Будь ласка, введіть коректний вік (додатнє число).')
  } else {
    if (age <= 11) {
      console.log('вы ребенок')
    }
    else if (age <= 17) {
      console.log('вы подросток')
    }
    else if (age <= 59) {
      console.log('вы взрослый')
    }
    else if (age >= 60) {
      console.log('вы пенсионер')
    }
  }
})