import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react"




export const CardVenta: React.FC<any> = ({venta}: {venta: any}) => {

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{venta.documento}</IonCardTitle>
                <IonCardSubtitle>Opcion de Pago: <span style={{ fontWeight: 'bold' }}>{venta.optionPago}</span></IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <p style={{fontWeight: 'bold'}}>Cantidad: <span style={{fontWeight: 'lighter'}}>{venta.total}</span> SubTotal: <span style={{fontWeight: 'lighter'}}>{venta.subtotal}</span></p>
                <p style={{fontWeight: 'bold'}}>Fecha de Venta <span style={{fontWeight: 'lighter'}}>{venta.fechaVenta}</span></p>
            </IonCardContent>


        </IonCard>
    )
}