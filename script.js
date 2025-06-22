{ // Age
  const formAge = document.getElementById('form-age')
  const inputAge = document.getElementById('input-age')
  const resultOutput = document.getElementById('result-output')

  formAge.addEventListener('submit', (e) => {
    e.preventDefault();

    const age = Number(inputAge.value)

    let message = ''

    if (isNaN(age) || age <= 0) {
      message = 'Будь ласка, введіть коректний вік (додатнє число).'
    } else {
      if (age <= 11) {
        message = 'Ви дитина.'
      } else if (age <= 17) {
        message = 'Ви підліток.'
      } else if (age <= 59) {
        message = 'Ви дорослий.'
      } else if (age >= 60) {
        message = 'Ви пенсіонер.'
      }
    }

    resultOutput.textContent = message

  })
}

{
  const numberForm = document.getElementById('number-form')
  const numberResult = document.getElementById('number-result')

  const char = ")!@#$%^&*("

  let message = ''

  numberForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const i = numberForm.number.value

    message = char[i]

    numberResult.textContent = message || 'Будь ласка, введіть коректне число (0-9).'
  })

}


