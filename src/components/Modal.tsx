import { useContext, useState } from "react";
import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { ModalContext } from "../context/ModalContext";



export const Modal: React.FC<any> = ( {children}:  {children: any}) => {
    const {isOpen, onCloseModal} = useContext(ModalContext)
    return (
        <IonModal isOpen={isOpen}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Modal</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={onCloseModal}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {children}
            </IonContent>
        </IonModal>
    )
}