import React from "react";
import { use, Suspense } from "react";

// Fetch data once and store the promise
const jokePromise = fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json())
  .catch((error) => {
    return { error: 'Something went wrong' };
  });

const JokeItem = () => {
  console.log("JokeItem");
  const joke = use(jokePromise); // Use the stable promise

    // Check if there's an error in the fetched data
    if (joke.error) {
        return (
          <div className="bg-red-50 shadow-md p-4 my-6 rounded-lg">
            <h2 className="text-xl font-bold text-red-600">Error: {joke.error}</h2>
          </div>
        );
      }

  return (
    <div className="bg-blue-50 shadow-md p-4 my-6 rounded-lg">
      <h2 className="text-xl font-bold">{joke.value}</h2>
    </div>
  );
};

const Joke = () => {
  return (
    <Suspense
      fallback={
        <h2 className="text-2xl text-center font-bold mt-5">Loading...</h2>
      }
    >
      <title>Chuck Norris Jokes</title>
      <meta name="description" content="Chuck Norris jokes" />
      <meta name="keywords" content="chuck norris, jokes" />
      <JokeItem />
    </Suspense>
  );
};

export { Joke as UseExample1 };
