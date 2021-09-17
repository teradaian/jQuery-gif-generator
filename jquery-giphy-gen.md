
# jQuery Giphy Generator

<br>
<br>


## Intro

Let's build a lightweight gif generator using the Giphy API, jQuery, and skeleton!

<br>
<br>


## Set Up

Create a new directory, then type the following into the console: 

```
mkdir js && touch js/script.js
mkdir css && touch css/style.css
touch index.html
```

Stub up your basic html boilerplate (! + tab), and connect the JavaScript and CSS files (don't forget to defer the JS script).
Change the title to "Gif Generator"

You're ready to go! 🚀

<br>
<br>

## Part 1: Skeleton 

## 1.1 Init

<img src="assets/skeleton.png">

Skeleton bills itself as "a dead simple, responsive design". We can use it to quickly add a polished look to a small project! 

Why Skeleton? It's lightweight, easy to use, and there's zero installing or compiling required to get it up and running. 
It doesn't have the large number of components that frameworks like Bootstrap provide, but it does provide some useful tools!

Sold? Let's get it hooked up!

When you download Skeleton, you'll notice it has two folders and an html file. If you like, you can use the html file provided by Skeleton as a starting page - it will have the CSS and FavIcon already set up, along with some initial styling! This can be a nice way to hit the ground running with a new project. 

We're going to start from scratch, however! Let's open up the CSS folder and see what's inside: 

<img src="assets/skeleton-folder.png">

`normalize.css` is essentially a CSS reset, that helps us deal with common brower inconsistencies. It also helps to prevent us from relying on browser default styling! normalize helps set a dependable structure for our other file: 

`skeleton.css` 💀 
This file contains the actual styling being applied to our page via predefined classes. We can use those classes to mark up our HTML! 

We're going to take both files and drop them into our css folder. Next, we need to connect them! We'll want to put them on top of our `style.css` file, so that we can override any styles we wish to later on. 

One final thing - Skeleton uses the Railway font by default! Lets add that above our style links! 

```html
<link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
```

<img src="assets/1-1.png">
Our link order should look like this 

## 1.2 Sanity Check!

Did it work? 👀

Let's test it out. Within the body of your HTML page, lets add a button:
```html
<body>
    <button>Skeleton</button>
</body>
```

Look at that styling! Mouse over the button to see a nice minimal `:hover` effect! You'll also notice that the button is pushed RIGHT up against the top and left side of the screen. That's our normalizer file in action! 

We have access to two main button classes with Skeleton, standard, and the `.button-primary` class. Let's try adding that class to our button. 

Nice! Now we know we're running Skeleton, and also how to make outlined and primary buttons! 

## 1.3 Layout pt.1

We're feeling good - only problem is that we'd love for our cool new button to be centered on the screen. We'll also need a spot for our gif to go! Let's make a container div for both to live in, and center it! 

Remember, we can use emmet notation to make our lives easier! 

`.container` + tab will give us: 

```html
<div class="container"></div>
```

Let's put our button inside the div! 

<img src="assets/1-3.png">

Next, let's add some styling: 

```css
html, body {
    height:100%;
  }

body {
    display: flex;
    justify-content: center;
    align-items: center;
}

div.container {
    width: 600px;
    height: 400px;
    border: 2px solid #33C3F0;
}
```

We're selecting both the html and the body with comma seperation, and setting the height to 100% - this allows us to vertically center our container in the next step. Our normalize.css file is setting the margin of our body to 0, so we don't have to include that here. If you aren't using a css reset, make sure to give html and body `margin:0` to avoid a scrollbar and some overflow. 

Next, we make the body a flexbox and horizontally and vertically center it's contents (our container)

Finally, we just give our container some dimensions, and give it a border so we can see it! We'll remove that border later on, but it can be helpful while styling to get visual feedback.

If we want to move our button itself to the center of the container, we'll need to give our container a property of `display: flex` as well. The flex container only wraps around it's immediete children, so there is no grandchild+ inheritance at play. 

<img src="assets/1-3-2.png">

Everything is centered!

## 1.4 Layout pt.2

Let's move back over to our HTML, and build out the basic structure for our container! 

Here's how our container will be organized: 

<img src="assets/1-4.png">

Let's get started from the top. We'll add a new `div` with a class of `title`, and inside of that we'll create an `h2` and give our page a title. How about 'Giphy Generator'? 

Below our `title` div, we want to add a recepticle for the gif we'll eventually be returning!

<br>
<br>


## Bonus
