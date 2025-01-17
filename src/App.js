import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  /*
  has no parentheses at the end! Do not call the event handler function: you only need to pass it down. 
  React will call your event handler when the user clicks the button.
  */
  return <button onClick={handleClick}>Clicked {count} times</button>;
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

/*export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}*/

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];
//use the map() function to transform an array of products into an array of <li> items:
export default function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
      <ul>{listItems}</ul>
    </div>
  );
}
