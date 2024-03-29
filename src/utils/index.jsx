export const formatAccessorial = str => {
  const word = str.split('_')

  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1)
  }
  return word.join(' ')
}

export const addCommas = price => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const convertDate = dateInput => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  let converted = new Date(dateInput)
  let day = days[converted.getDay()]
  let date = converted.getDate()
  let month = months[converted.getMonth()]
  let year = converted.getFullYear()

  return `${day}, ${date} ${month}, ${year}`
}

export const convertTime = input => {
  var armyTime = new Date(input)
  return `${armyTime.getUTCHours()}:${armyTime.getUTCMinutes()}${armyTime.getUTCSeconds()}`
}
