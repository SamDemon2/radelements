import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        console.log('Modal is not open');
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close-button" onClick={onClose}>
                    Закрыть
                </button>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
