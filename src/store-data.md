i work on a react project but i should save objects in a file. how can i do that? I run no backend server yet

You can use the localStorage API to store data as key-value pairs in the client-side.

Here's an example to store an object:

javascript

const myObject = {name: 'John', age: 30};

// Store the object as a string
localStorage.setItem('myObject', JSON.stringify(myObject));

// Retrieve the object from storage
const retrievedObject = JSON.parse(localStorage.getItem('myObject'));

Note that localStorage has some limitations, like a maximum size of around 5 MB and it can only store strings, not objects. To store larger amounts of data or to store data in a binary format, you may need to consider using the File API or other approaches.
adgbe@yahoo.de
so i wont need an backend server with that? how can I implement an imput field with react to save some data?

Yes, you don't need a backend server to use localStorage.

Here's an example of how to implement an input field with React to store data:

javascript

import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSave = () => {
    localStorage.setItem('data', inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default App;

This example uses the state to keep track of the input value, and the handleChange function updates the state whenever the input value changes. The handleSave function is called when the "Save" button is clicked, and it uses localStorage.setItem to store the input value under the key "data".