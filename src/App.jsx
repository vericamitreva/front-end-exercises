import './App.css'
import ButtonComponent from './components/ButtonComponent.jsx'
import Icon from "./assets/react.jsx"

function App() {

  return (
    <>
      <h1>Button Component</h1>
      <ButtonComponent type="icon" size="large" icon={<Icon/>} iconPosition="right" onClick={() => alert("Button is clicked!")}>
        Click me!
      </ButtonComponent>
      <ButtonComponent type="filled" size="large" color="pink" loading onClick={() => alert("Button is clicked!")}>
        Click me!
      </ButtonComponent>
      <ButtonComponent type="outlined" size="large" disabled onClick={() => alert("Button is clicked!")}>
        Click me!
      </ButtonComponent>
    </>
  )
}

export default App
