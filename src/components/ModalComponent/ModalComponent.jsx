import "./modalComponent.css"
import { Modal } from "antd"


export default function ModalComponent({
    isOpen, 
    onClose, 
    onConfirm, 
    header,
    footer,
    successButton,
    discardButton,
    backdropClose,
    children,
    ...props
}) {

    return (
        <>
            <Modal 
                open={isOpen} 
                onCancel={onClose} 
                title={header}
                footer={footer}
                onOk={onConfirm} 
                maskClosable={backdropClose} 
                {...props}
            >
                {children}
            </Modal>
        </>
    )
}