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
                <Modal.Title>Confirm Logout</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p style={{ marginBottom: 'unset' }}>Are you sure you want to log out?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="danger" style={{
                    background: '#111827',
                    color: "white",
                    borderColor: '#111827'
                }} onClick={onLogout}>
                    Logout
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LogoutModal;
