
import React from 'react';
import './Modal.scss';


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '200px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}


export default function Modal({ open, children, onClose }) {
    if(!open) return null
    return (
        <>
            <div style={OVERLAY_STYLES}>

                <div style={MODAL_STYLES}>
                    <h1 className="modal-header">Post Details:</h1>
                    {children}
                    <button type="button" class="btn btn-danger" onClick={onClose}>Close</button>
                </div>

            </div>   
        </>
    )
}


