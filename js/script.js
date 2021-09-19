const BASE_URL = 'https://api.giphy.com/v1/gifs/search'
const API_KEY = 'H37gvoK5hDZU8GAWYktJwgIJRZu4zaA0'
const notFoundGif = 'https://media1.giphy.com/media/baPIkfAo0Iv5K/200.gif'
const numLimit = 20
const $input = $('input')
const $form = $('form')
const $img = $('img')

const getRandNumBetween = (min,max) => Math.floor(Math.random()*(max-min+1)+min);

const handleGetData = (e) => {
    e.preventDefault();
    const query = $input.val()
    $.ajax(`${BASE_URL}?q=${query}&limit=${numLimit}&api_key=${API_KEY}`)
        .then(data => {
            if (data.data.length){
                const randomIndex = getRandNumBetween(1, numLimit -1)
                const randomGif = data.data[randomIndex].images.fixed_height.url
                render(randomGif)
                $input.val('')
            } else {
                render(notFoundGif)
                $input.val('No Results Found')
            }
        }), (err => {
            console.log(err)
        })
}

$form.on('submit', handleGetData)

function render(gif) {
    $img.attr("src", gif)
}
