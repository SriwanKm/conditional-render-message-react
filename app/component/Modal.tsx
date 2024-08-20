'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from "../page.module.css";

interface PhotoProps { name: string, imgUrl: string, location: string }

export default function Modal({ name, imgUrl, location }: PhotoProps) {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null); // Ref to access the modal element

    const handleClickOutside = (event: any) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        if (showModal) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => document.removeEventListener('click', handleClickOutside);
    }, [showModal]);



    return (
        <div style={{ padding: "10px" }}>
            <img
                width={350}
                height={200}
                src={imgUrl}
                alt={name}
                onClick={() => setShowModal(true)}
            />
            {showModal && (
                <div className={styles.modal_overlay}></div>
            )}
            {showModal && (
                <div ref={modalRef} className={styles.modal}>
                    <div >
                        <img
                            width={600}
                            height={350}
                            src={imgUrl}
                            alt={name} />

                        <div style={{ backgroundColor: "white", width: "100%", color:"black" }}>
                            <div>{name}</div>
                            <div>{location}</div>
                        </div>
                    </div>

                    <div><button onClick={() => setShowModal(false)}>Close</button></div>
                </div>
            )}
        </div>
    );


}