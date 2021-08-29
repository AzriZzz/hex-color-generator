import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  // learn on how to useEffect

  // useEffect is a hook for encapsulating code that has 'side effects,' and is like a combination of componentDidMount , componentDidUpdate , and componentWillUnmount . Previously, functional components didn't have access to the component life cycle, but with useEffect you can tap into it.

  const [backgroundRandomize, setBackgroundRandomize] = useState("");

  const randomize = () => {
    const hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",
    ];
    let hexcode1 = "";
    let hexcode2 = "";
    let random_index = 0;

    // randomize direction
    const linearDirection = ['', 'to right,', 'to bottom right,' ]
    const directionIndex = Math.floor(Math.random() * linearDirection.length)

    //randomize hex code
    for (let i = 0; i < 6; i++) {
      random_index = Math.floor(Math.random() * hex_numbers.length);
      hexcode1 += hex_numbers[random_index];

      random_index = Math.floor(Math.random() * hex_numbers.length);
      hexcode2 += hex_numbers[random_index];
    }


    const classRandomGradient = `linear-gradient(${linearDirection[directionIndex]} #${hexcode1}, #${hexcode2})`;
    setBackgroundRandomize(classRandomGradient);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2 "
      style={{ background: `${backgroundRandomize}` }}
    >
      <Head>
        <title>Hex Color Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="xl:text-[50px] xl:pb-[160px]">
          CLICK THE BUTTON BELLOW TO GENERATE <br /> A RANDOM GRADIENT HEX COLOR
          COMBINATION
        </h1>
        <p className="pb-3 cursor-pointer xl:text-4xl xl:pb-7">
          background:{" "}
          {backgroundRandomize.length > 0
            ? `${backgroundRandomize};`
            : "linear-gradient(to right, #ffffff, #ffffff);"}
        </p>
        <button
          onClick={() => randomize()}
          className="p-4 m-2 bg-white border-gray-400 rounded-2xl"
        >
          Click Here
        </button>
      </main>
    </div>
  );
}
