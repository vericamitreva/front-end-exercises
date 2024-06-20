import './App.css'
import Icon from "./assets/react.jsx"
import { Col, Row } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import ModalComponent from './components/ModalComponent/ModalComponent.tsx'
import CardComponent from './components/CardComponent/CardComponent.tsx'
import cardData from "./assets/data/data.js"
import ButtonComponent from './components/ButtonComponent/ButtonComponent.tsx'

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

  function handleClick() {
    alert("Card is clicked!")
  }

  const successButton = {
    type: "filled",
    size: "medium",
    children: "Confirm",
  }

  const discardButton = {
    type: "outlined",
    size: "medium",
    color: "white",
    children: "Discard",
  }

  const badgesStyle = {
    New: {
      backgroundColor: "#87d068",
      color: "white",
      bordered: true
    },
    Hot: {
      backgroundColor: "red",
      color: "white",
      bordered: false
    },
    Sale: {
      backgroundColor: "magenta",
      color: "white",
      bordered: false
    }
  }

  const style = { backgroundColor: "#add8e6", height: "100%"}

  return (
    <>
    <Row gutter={20} wrap={false}>
      {cardData.map((card,index) => (
        <Col key={index} flex="1">
          <CardComponent 
            header={card.header}
            footer={card.footer}
            style={{ ...card.style, height: '100%' }}
            className={card.className}
            collapsible={card.collapsible}
            clickable={!!card.onClick}
            onClick={card.onClick}
            flipOnHover={!!card.backContent}
            refreshInterval={card.refreshInterval}
            liveContent={!!card.refreshInterval}
            backContent={card.backContent}
            badges={card.badges}
          >
            {card.children}
          </CardComponent>
        </Col>
      ))}
    </Row>
    <Row>
      <CardComponent 
        header="Header" 
        footer="Footer" 
        style={style} 
        className="card-component" 
        collapsible={true} 
        clickable={true} 
        flipOnHover={true}
        liveContent={true}
        refreshInterval={6000}
        badges={[]}
        badgesStyle={badgesStyle}
        onClick={handleClick}
        backContent="Back Content"
      >
        Card content
      </CardComponent>
    </Row>
    <Row>
      <ButtonComponent type="filled" onClick={handleModalOpening} style={{marginBlock: "20px"}}>
        Open Modal
      </ButtonComponent>
    </Row>
      <ModalComponent 
        isOpen={isModalOpen} 
        onClose={handleModalClosing} 
        onConfirm={handleConfirm}  
        backdropClose={false}
        successButton={successButton}
        discardButton={discardButton}
        position="right"
        buttonsReverse={true}
        footerContent={"Footer"} 
        headerContent={"Header"} 
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
