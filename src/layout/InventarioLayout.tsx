import { IonButtons, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"



export const InventarioLayout: React.FC<any> = ({ children }: { children: any }) => {
    return (
        <>
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Inventario APP</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonImg src="./image/paginaInicio.png" class="ion-padding" style={{ width: '11rem', margin: "0 auto" }} />
                    <IonList>
                        <IonItem routerLink="/dashboard">
                            <IonLabel >Dashboard</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/venta">
                            <IonLabel >Ventas</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/productos">
                            <IonLabel>Productos</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/historial-venta">
                            <IonLabel>Historial Ventas</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Inventario APP</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    {children}
                </IonContent>
            </IonPage>
        </>
    )
}