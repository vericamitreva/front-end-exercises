import './App.css'
import ButtonComponent from './components/ButtonComponent.jsx'
import Icon from "./assets/react.jsx"

function App() {

  return (
    <>
      <h1>Button Component</h1>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center"}}> 
        <ButtonComponent type="icon" size="large" icon={<Icon/>} iconPosition="right" onClick={() => alert("Button is clicked!")}>
        </ButtonComponent>
        <ButtonComponent type="outlined" size="medium" color="pink" onClick={() => alert("Button is clicked!")}>
          Click me!
        </ButtonComponent><ButtonComponent type="filled" size="small" color="green" loading onClick={() => alert("Button is clicked!")}>
          Click me!
        </ButtonComponent>
        <ButtonComponent type="filled" size="large" color="gray" disabled onClick={() => alert("Button is clicked!")}>
          Click me!
        </ButtonComponent>
      </div>
    </>
  )
}

export default App
