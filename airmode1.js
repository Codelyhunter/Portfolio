// init ball and set h1 & h2 as models (default class)
const ball = new Cotton('#ball', {
    speed: 1
  })
  
  // init h1 with airMode
  const h1 = new Cotton('h1', {
    airMode: true
  })
  
  // init h2 with airMode reverse
  const h2 = new Cotton('h2', {
    airMode: {
      reverse: true
    }
  })