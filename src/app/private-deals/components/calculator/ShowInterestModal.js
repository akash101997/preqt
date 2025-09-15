import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';

const ShowInterestModal = ({ show = false, onClose = () => { } }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            size="md"
            dialogClassName="success-interest-modal"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <div className="success-modal-content text-center p-4">
                <div className="success-image mb-3">
                    <Image
                        src="/success-interest.svg"
                        alt="Success Icon"
                        width={400}
                        height={400}
                    />
                </div>

                <h3 className="fw-bold text-white">Success!</h3>
                <p className="text-light">
                    Your Application Has Been Submitted
                </p>

                <p className="text-secondary small">
                    Thank you for confirming your interest and successfully <br />e-signing the Share Application Form
                </p>
            </div>
        </Modal>

    );
};

export default ShowInterestModal;
