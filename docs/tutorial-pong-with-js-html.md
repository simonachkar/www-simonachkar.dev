---
title: 'Building a Pong Game with HTML and JavaScript'
date: '2019-06-08'
lastEdited: '2023-12-03'
---

**Pong** is a classic arcade game that serves as a great introduction to web game development. In this post, I will attempt to guide you through the process of building such a game using HTML and JavaScript. Inspired by a project undertaken during my undergraduate Computer Graphics course, I would like to share a simplified version of my code. Let’s get started!

🔗 [Get the Source Code here](https://github.com/simonachkar/pong).

## Set Up Your HTML File

Create an `index.html` file and set up the basic structure:

```html
<html>
  <head>
    <title>PONG</title>
  </head>
  <body>
    <script src="game.js"></script>
  </body>
</html>
```

This HTML file includes a title and links to a JavaScript file (`game.js`) where we’ll write our game logic.

## Create the Game Logic

Now, let’s dive into the JavaScript code. Create a `game.js` file. This file will handle everything from creating the canvas to updating game objects and drawing them.

🔗 [Complete `game.js` file](https://github.com/simonachkar/pong/blob/master/game.js)

This JavaScript file is the heart of our Pong game. It defines the canvas, loads images for background, paddles, and the ball. It also sets up game objects, handles keyboard input, manages scoring, and implements collision detection.

## Understanding the Code

### 1 - `requestAnimationFrame`

`requestAnimationFrame` ensures smooth animations across various browsers. Credits goes to [Paul Irish](https://www.paulirish.com/2011/requestanimationframe-for-smart-animating) for this function:

```js
window.requestAnimFrame = function (callback) {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
}
```

This function dynamically adjusts to the browser's capabilities, requesting a new animation frame at optimal intervals. To delve deeper, I recommend checking out Paul Irish's [post](https://www.paulirish.com/2011/requestanimationframe-for-smart-animating) for a detailed explanation.

In essence, without this function, our game will animate slowly and poorly.

### 2 - Creating the Canvas

Now, let's create the canvas. In the code snippet below, we initiate a `canvas` element and its rendering context (`ctx`):

```js
var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d')
canvas.width = 550
canvas.height = 400
document.body.appendChild(canvas)
```

The canvas is a HTML element (`<canvas>`), think about it as our game's drawing board. We create that element using the Document Object Model (DOM). We then obtain the 2D rendering context (`ctx`) which is going to be used to draw on the canvas later. Finally we set the canvas dimensions and append it to the document's body ensuring that it becomes visible on our web page.

For a more in-depth understanding of the HTML5 Canvas API, you can refer to the [Mozilla Developer Network Canvas API tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial).

### 3 - Defining the Graphics

Every game needs visual graphics, so let's add up some images! In the following code snippet, we load images for the background, paddle**s**, and ball:

```js
// Background image
var bgImage = new Image()
bgImage.src = 'images/background.jpeg'
var bgReady = false
bgImage.onload = function () {
  bgReady = true
}

// Paddles Image
var paddleImage = new Image()
paddleImage.src = 'images/paddle.png'
var paddleReady = false
paddleImage.onload = function () {
  paddleReady = true
}

// Ball Image
var ballImage = new Image()
ballImage.src = 'images/ball.png'
var ballReady = false
ballImage.onload = function () {
  ballReady = true
}
```

Here, we use the simplest method of loading images, creating instances of the Image class for each graphic. The readiness flags (`bgReady`, `paddleReady`, and `ballReady`) ensure safe drawing by waiting until the images are fully loaded, preventing potential errors.

### 4 - Defining the Game Objects

In this step, we introduce crucial game elements. These include the player-controlled paddle, the computer-controlled paddle, and the dynamic ball.

```js
var player_paddle = {
  speed: 4,
  score: 0,
  x: 785,
  y: 100,
}

var ai_paddle = {
  speed: 3.8, // slightly less than the player's speed
  score: 0,
  x: 10,
  y: 100,
}

var ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  speed_X: 4,
  speed_Y: 4,
}
```

Here, we establish essential variables for our game. The `player_paddle` serves as the user-controlled entity, featuring attributes such as speed (measured in pixels per second), score, and initial x and y positions. Similarly, the `ai_paddle` mirrors its computer-controlled counterpart, featuring a strategic "AI" trick. And finally, the `ball` object defines its position and speed.

#### Unveiling the "AI" Trick

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGMzM3dzaXJ3cHlrcGJkdWlhdGl3MWFrNXM0Zm03eGJqN251enQxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hS4HVb6ATynMA/giphy.gif)

The trick lies in the relative speeds of the game elements. The `ai_paddle` moves at a speed less than the `ball`, which itself is slower than the `player_paddle`.

The computer can predict the ball's position by following its movement, enabling it to hit the ball every time. However, if this is the case, the user won't win. What kind of game does not allow winning? To balance the game, the speed of the computer's paddle must be less than that of the ball and the player's paddle.

Feel free to tweak these values to experiment with different game-play dynamics and difficulty levels.

### 5 - Tracking Player Input

Now, let's step into the process of tracking player input, an important element that gives users control over the game dynamics.

```js
var playerInput = {}

addEventListener('keydown', function (e) {
  playerInput[e.key] = true
})

addEventListener('keyup', function (e) {
  delete playerInput[e.key]
})
```

In this code snippet, we establish a system to capture and interpret player inputs. Here's how it works:

- We initialize an object named `playerInput` to store information about the currently pressed key.
- The `'keydown'` event listener captures key presses, setting the corresponding key as true in the playerInput object.
- The `'keyup'` event listener updates the playerInput object by removing the key when it is released.

This setup effectively tracks the state of keys, revealing which keys are presently engaged. As an example, the `playerInput` object might contain `{ ArrowUp: true }`, signifying that the user is actively pressing the 'Up' arrow key.

### 6 - Initiating a New Round

Let's proceed to the sixth step, where we delve into resetting the game for a new round.

```js
var reset = function () {
  ball.x = canvas.width / 2
  ball.y = canvas.height / 2
}
```

The `reset` function will be called to begin a new round in our Pong game (a new ball serve). When invoked, it repositions the ball at the center of the screen, marking the beginning of a fresh round of game-play. It will be called when either of the two paddles scores.

### 7 - Updating the Game State

Now we need a function to be called every time we want to update the game state. `update` is a the function we need, it controls the movement of key game elements. This function is invoked at every interval execution.

Let's break down the components of the `update` function:

```js
var update = function () {
  // == Ball's Movement ==

  // Update the ball's position based on its defined speed in both the X and Y directions
  ball.x = ball.x + ball.speed_X
  ball.y = ball.y + ball.speed_Y

  // == Scoring Conditions ==

  // Check if the ball is beyond the right edge of the canvas
  if (ball.x >= canvas.width) {
    // Computer scores a point
    ai_paddle.score++
    // Reset the game for a new round
    reset()
  }

  // Check if the ball is beyond the left edge of the canvas
  if (ball.x <= 0) {
    // Player scores a point
    player_paddle.score++
    // Reset the game for a new round
    reset()
  }

  // == Ball Hits the Borders ==

  // Reflect the ball off the top and bottom edges of the canvas
  if (ball.y >= canvas.height - ballImage.height || ball.y <= 0) {
    // Change the Y direction of the ball to simulate reflection
    ball.speed_Y = -1 * ball.speed_Y
  }

  // == Player's Movement ==

  // Move player paddle based on user input

  // Move Up
  if ('ArrowUp' in playerInput) {
    // Check if the paddle is not at the top edge
    if (player_paddle.y > 0) player_paddle.y -= player_paddle.speed
  }

  // Move Down
  if ('ArrowDown' in playerInput) {
    // Check if the paddle is not at the bottom edge
    if (player_paddle.y < canvas.height - paddleImage.height) player_paddle.y += player_paddle.speed
  }

  // == Computer's Movement (Following the Ball) ==

  // Computer intelligently follows the ball

  // Move Down
  if (ai_paddle.y < ball.y) {
    // Check if the paddle is not at the bottom edge
    if (ai_paddle.y < canvas.height - paddleImage.height) ai_paddle.y += ai_paddle.speed
  }

  // Move Up
  else {
    // Check if the paddle is not at the top edge
    if (ai_paddle.y > 0) ai_paddle.y -= ai_paddle.speed
  }

  // == Collision ==

  // Check for collision between the ball and paddles

  if (
    (ball.x < player_paddle.x + paddleImage.width &&
      ball.x + ballImage.width > player_paddle.x &&
      ball.y < player_paddle.y + paddleImage.height &&
      ballImage.height + ball.y > player_paddle.y) ||
    (ball.x < ai_paddle.x + paddleImage.width &&
      ball.x + ballImage.width > ai_paddle.x &&
      ball.y < ai_paddle.y + paddleImage.height &&
      ballImage.height + ball.y > ai_paddle.y)
  ) {
    // Reflect the ball along the X-axis
    ball.speed_X = -1 * ball.speed_X
  }
}
```

In the `update` function, we orchestrate the movement of the ball, handle scoring conditions, ball reflections off borders, player and computer paddle movements, and collision detection between the ball and paddles. This function ensures the progression and dynamism of our Pong game. For more info on 2D collision check [this article](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)

### Draw Everything

Now that we've set the game's dynamics, it's time to visualize everything on the canvas. The `draw` function, invoked after the update function, is the brushstroke that paints the game's elements onto the screen.

![](https://media.giphy.com/media/eBmv7914HRAty/giphy.gif)

```js
var draw = function () {
  // == Drawing the background ==

  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0, bgImage.width, bgImage.height, 0, 0, canvas.width, canvas.height)
  }

  // == Drawing the paddles ==

  if (paddleReady) {
    ctx.drawImage(paddleImage, player_paddle.x, player_paddle.y)
    ctx.drawImage(paddleImage, ai_paddle.x, ai_paddle.y)
  }

  // == Drawing the ball ==

  if (ballReady) {
    ctx.drawImage(ballImage, ball.x, ball.y)
  }

  // == Drawing the scores ==

  ctx.fillStyle = 'white'
  ctx.font = '30px ARIAL BLACK'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'
  ctx.fillText(ai_paddle.score + '\t\t\t' + player_paddle.score, 400, 20)
}
```

For each element - background, paddles, and ball - we ensure that the images are ready (`bgReady`, `paddleReady` and `ballReady`) before placing them on the canvas at specific x and y positions. We use the context's `drawImage` function to render the images on the canvas.

After drawing these elements, we move on to displaying the score. This involves configuring the font and text properties, followed by drawing the scores at the specified position on the canvas.

### 9 - The Main Game Loop

We wrap everything together with the main game loop. This loop calls the `update` and `draw` functions in succession, ensuring that the game state and the visuals are consistently updated.

```js
var main = function () {
  update()
  draw()

  // Request to do this again
  requestAnimationFrame(main)
}
```

The main game loop is what controls the flow of the game.

### 10 - Play Game

With everything in place, it's time to set our game in motion. The call to `main()` initiates the main game loop, kick starting the constant cycle of updating and drawing.

This single command sets the entire game system in motion, and your Pong game is now ready to be played.

```js
main()
```

## Conclusion

Congratulations on successfully building your Pong game with HTML and JavaScript! I hope you enjoyed reading this post. 😊

If you would like to dive in depth on HTML5 canvas games, I highly recommend checking out Lost Decade Games' post: [How to Make a Simple HTML5 Canvas Game](http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game).

Keep experimenting, keep learning, and most importantly, keep having fun with your creations. Happy coding! 🚀 🎮
