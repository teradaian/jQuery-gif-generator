const BASE_URL = 'https://api.giphy.com/v1/gifs/search?q='
const API_KEY = 'H37gvoK5hDZU8GAWYktJwgIJRZu4zaA0'
const $input = $('input')
const $form = $('form')
const $gifUrl = $('img')
let numLimit = 20

const getRandNumBetween = (min,max) => Math.floor(Math.random()*(max-min+1)+min);

const handleGetData = (e) => {
    e.preventDefault();
    const query = $input.val()
    $.ajax(`${BASE_URL}${query}&limit=${numLimit}&api_key=${API_KEY}`)
        .then(data => {
            const randomGif = data.data[getRandNumBetween(1, numLimit - 1)].images.fixed_height.url
            render(randomGif)
            $input.val('')
        }), (err => {
            console.log(err)
        })
}

$form.on('submit', handleGetData)

function render(gif) {
    $('img').attr("src", gif)
}
