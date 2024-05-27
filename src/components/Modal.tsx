import { useContext, useState } from "react";
import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { ModalContext } from "../context/ModalContext";



export const Modal: React.FC<any> = ( {title, children}:  {title: string, children: any}) => {
    const {isOpen, onCloseModal} = useContext(ModalContext)
    return (
        <IonModal isOpen={isOpen}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{title}</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={onCloseModal}>Cerrar</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {children}
            </IonContent>
        </IonModal>
    )
}