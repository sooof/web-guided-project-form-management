import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

const initialFormValues = { petName: "", petType: "" }

function SimpleForm() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (evt) => {
    const { name, value } = evt.target;
    // const name = evt.target.name;
    // const value = evt.target.value;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <div className="container">
      <h1>Simple Form App</h1>
      {petsList.map((pet, idx) => (
        <div key={idx}>
          {pet.petName} is a {pet.petType}
        </div>
      ))}
      <form>
        <input
          type="text"
          value={formValues.petType}
          name="petType"
          onChange={change}
        />
        <input
          type="text"
          value={formValues.petName}
          name="petName"
          onChange={change}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

render(
  <>
    <SimpleForm />
    {/* <App /> */}
  </>
  , document.querySelector('#root')
)
