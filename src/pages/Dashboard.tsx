import { IonButtons, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { CardEstadistica } from "../components/CardEstadistica"
import { useContext } from "react"
import { InventarioContext } from "../context/InventarioContext"



export const Dashboard: React.FC = () => {

    const { estadisticas } = useContext(InventarioContext);

    return (
        <>
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Inventario APP</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonImg src="./image/paginaInicio.png" class="ion-padding" style={{width: '11rem', margin: "0 auto"}} />
                    <IonList>
                        <IonItem>
                            <IonLabel>Ventas</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Productos</IonLabel>
                        </IonItem>
                        <IonItem>
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
                    <IonTitle>Bienvenido Inventario App</IonTitle>

                    {
                        estadisticas.map((estadistica: any, index: number) => <CardEstadistica key={index} estadistica={estadistica} />)
                    }

                </IonContent>
            </IonPage>
        </>
    )
}