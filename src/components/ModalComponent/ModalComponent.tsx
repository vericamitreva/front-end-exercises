import React, { FC, ReactNode } from "react"
import { Modal, Row } from "antd"
import ButtonComponent from "../ButtonComponent/ButtonComponent.jsx" 
import styles from "./ModalComponent.module.css"
import { ButtonProps, position } from "../../assets/types.js"

/**
 * The ModalComponent is a reusable modal component that is built using the Ant Design library. It supports various customization options through props.
 * Description of the props:
 * @param {boolean} isOpen - Specifies if the ModalComponent is open. This prop is required.
 * @param {function} onClose - Function to be called when a discardButton or the X button is clicked. This prop is required.
 * @param {function} onConfirm - Function to be called when a successButton is clicked. This prop is required.
 * @param {node} headerContent - Contains the content inside the header (title). Default value is "".
 * @param {node} footerContent - Contains the content inside the footer. Default value is "".
 * @param {object} successButton - Object containing customization options for the ButtonComponent, allowing customization to the button's appearance through its props. It closes the ModalComponent when clicked.
 * @param {object} discardButton - Object containing customization options for the ButtonComponent, allowing customization to the button's appearance through its props. It confirms the ModalComponent when clicked.
 * @param {boolean} backdropClose - Specifies if a click on the modal background should close the ModalComponent or not. Default value is true.
 * @param {node} children - Contains the content inside the ModalComponent. This prop is required.
 * @param {object} props - Contains any additional properties passed to the ModalComponent.
 * @example <ModalComponent 
        isOpen={isModalOpen} 
        onClose={handleModalClosing} 
        onConfirm={handleConfirm}  
        backdropClose={false}
        successButton={{
          type: "filled",
          size: "medium",
          children: "Confirm"
        }}
        discardButton={{
          type: "outlined",
          size: "medium",
          color: "white",
          children: "Discard"
        }}
        footerContent={"Footer"} 
        headerContent={"Header"} 
      >
        Modal is open..
      </ModalComponent>
 */

interface ModalComponentProps {
    isOpen: boolean,
    onClose: () => void,
    onConfirm: () => void,
    headerContent?: ReactNode,
    footerContent?: ReactNode,
    successButton?: ButtonProps,
    discardButton?: ButtonProps,
    buttonsReverse: boolean,
    position: position,
    backdropClose?: boolean,
    children: ReactNode
}

const ModalComponent: FC<ModalComponentProps> = ({
    isOpen, 
    onClose, 
    onConfirm, 
    headerContent="",
    footerContent="",
    successButton,
    discardButton,
    position="",
    buttonsReverse=false,
    backdropClose=true,
    children,
    ...props
}) => {

    const buttonsPosition = (position:string) => {
        switch (position) {
            case "left":
                return "start";
            case "center":
                return "center";
            case "right":
                return "end";
            default:
                return "center"
        }
    }

    return (
        <>
            <Modal 
                open={isOpen} 
                onCancel={onClose} 
                title={headerContent}
                footer={footerContent}
                onOk={onConfirm} 
                maskClosable={backdropClose} 
                {...props}
            >
                {children}
                <div className={`${styles.content} ${buttonsReverse ? styles.reverse : ''}`}>
                    <Row gutter={[20,5]} justify={buttonsPosition(position)} align="middle">
                        {successButton && <ButtonComponent {...successButton} onClick={onConfirm} />}
                        {discardButton && <ButtonComponent {...discardButton} onClick={onClose} />}
                    </Row>
                </div>
            </Modal>
        </>
    )
}

export default ModalComponent