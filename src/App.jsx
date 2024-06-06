import './App.css'
import ButtonComponent from './components/ButtonComponent/ButtonComponent.jsx'
import Icon from "./assets/react.jsx"
import { Col, Row } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import ModalComponent from './components/ModalComponent/ModalComponent.jsx'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleModalOpening() {
    setIsModalOpen((prev) => (!prev))
  }

  function handleModalClosing() {
    setIsModalOpen((prev) => (!prev))
  }

  function handleConfirm() {
    setIsModalOpen((prev) => (!prev))
  }

  const successButton = {
    type: "filled",
    size: "medium",
    children: "Confirm"
  }

  const discardButton = {
    type: "outlined",
    size: "medium",
    color: "white",
    children: "Discard"
  }

  return (
    <>
      <ButtonComponent type="filled" onClick={handleModalOpening}>
        Open Modal
      </ButtonComponent>
      <ModalComponent 
        isOpen={isModalOpen} 
        onClose={handleModalClosing} 
        onConfirm={handleConfirm}  
        backdropClose={false} 
        footer={
          <>
            {successButton && <ButtonComponent {...successButton} onClick={handleConfirm} />}
            {discardButton && <ButtonComponent {...discardButton} onClick={handleModalClosing} />}
          </>
        } 
        header={"Header"} 
        discardButton={discardButton} 
        successButton={successButton}
      >
        Modal is open..
      </ModalComponent>
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
