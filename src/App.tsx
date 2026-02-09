"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);

    // WhatsApp notification
    const phoneNumber = "2348148770496"; // YOUR number
    const text = encodeURIComponent(
      "I say "YES" to being your Valentine, my Adio ❤️"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pleeeeeeeeeeeeaseeeeeeee",
      "I will buy you chipsssssss 😉🥺",
      "What about turkey?",
      "Please babyyyyyyyy",
      "But :*(",
      "I am going to die o",
      "Yes, that's it. I'm dead",
      "ok, now you are talking to Adio's ghost",
      "please baby",
      ":((((",
      "Mummmmmmyyyy nawwwwwww",
      "I have fainted",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold text-center">
            My Melanin Queen!!!!! ❤️ <br />
            Yessssss!!!! <br />
            Thank you for being my Valentine. <br />
            I love you endlessly 💕 <br /><br />
            — Love, Shakiru. 💌
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl text-center">
            Will you be my Valentine, My Little Smirnoff?
          </h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick} // updated handler
            >
              Yes 💖
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
