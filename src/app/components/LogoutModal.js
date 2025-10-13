import React from "react";
import { Modal, Button } from "react-bootstrap";

const LogoutModal = ({ show = false, onClose = () => { }, onLogout = () => { } }) => {
    return (
        <Modal
            show={show}
            onHide={onClose}
            centered
            backdrop="static"
            keyboard={false}
            className="log-out-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title className="title">Log Out</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <img src="/account_images/logout-logo.svg" alt="logo"  className="logo"/>
                <p  className="alert">Are you sure you want to log out?</p>
            </Modal.Body>

            <Modal.Footer>
              {/* <div className="button-group"> */}
                <Button  variant="secondary" onClick={onClose} id="cancelBtn" className="Btn">
                    Cancel
                </Button>
                <Button variant="primary" onClick={onLogout} id="logoutBtn" className="Btn">
                    Log Out
                </Button>
                
            </Modal.Footer>
        </Modal>
    );
};

export default LogoutModal;
