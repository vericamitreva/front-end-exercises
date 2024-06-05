import './App.css'
import ButtonComponent from './components/ButtonComponent.jsx'
import Icon from "./assets/react.jsx"
import { Col, Row } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

function App() {

  return (
    <>
      <Row gutter={[20, 5]} justify="center" align="middle">
        <Col>
          <ButtonComponent type="icon" size="large" icon={<Icon/>} iconPosition="right" onClick={() => alert("Button is clicked!")}>
            AJHHSK
          </ButtonComponent>
        </Col>
        <Col>
          <ButtonComponent type="outlined" size="medium" color="pink" icon={<SearchOutlined/>} onClick={() => alert("Button is clicked!")}>
          Click me!
          </ButtonComponent>
        </Col>
        <Col>
          <ButtonComponent type="filled" size="small" color="green" loading onClick={() => alert("Button is clicked!")}>
          Click me!
          </ButtonComponent>
        </Col>
        <Col>
          <ButtonComponent type="filled" size="large" color="gray" disabled onClick={() => alert("Button is clicked!")}>
            Click me!
          </ButtonComponent>
        </Col>
      </Row>
    </>
  )
}

export default App
