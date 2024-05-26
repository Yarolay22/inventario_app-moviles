import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from "@ionic/react"





export const CardEstadistica: React.FC<any> = ({estadistica}: {estadistica: any}) => {
    return (
        <IonCard style={{display: 'flex', alignItems: 'center'}}>
            <IonCardHeader>
                <IonImg src={estadistica.image} style={{width: "3rem"}}></IonImg>
            </IonCardHeader>
            <IonCardContent>
                <IonCardTitle>{estadistica.title}</IonCardTitle>
                <IonCardSubtitle>Cantidad: <span style={{fontWeight: "bold"}}>{estadistica.cantidad}</span></IonCardSubtitle>
            </IonCardContent>
        </IonCard>
    )
}