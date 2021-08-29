# Hex-color-generator

Make the web a little prettier with this simple hex colors application. This app changes the background color and displays that color’s hexadecimal code on the screen all on the click of a button.

Built on top of Next.js and Tailwind

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Functionality

Build a function to generate a random hex color and making it the color of the background

### Logic
```
const hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",];

let hexcode1 = "";
let hexcode2 = "";
let random_index = 0;

for (let i = 0; i < 6; i++) {
  random_index = Math.floor(Math.random() * hex_numbers.length);
  hexcode1 += hex_numbers[random_index];

  random_index = Math.floor(Math.random() * hex_numbers.length);
  hexcode2 += hex_numbers[random_index];
}
```

We can go one step further to change the direction of the gradient.
```
const linearDirection = ['', 'to right,', 'to bottom right,' ]
const directionIndex = Math.floor(Math.random() * linearDirection.length)
```

Then we combine all the randomize variable into a single string so we can append that into our parent background
```
const classRandomGradient = `linear-gradient(${linearDirection[directionIndex]} #${hexcode1}, #${hexcode2})`;
```