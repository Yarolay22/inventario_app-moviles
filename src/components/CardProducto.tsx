import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react"


export const CardProducto: React.FC<any> = ({ producto }: { producto: any }) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{producto.name}</IonCardTitle>
                <IonCardSubtitle>Categoria: <span style={{ fontWeight: 'bold' }}>{producto.categoria}</span></IonCardSubtitle>
                <p>Cantidad: <span>{producto.cantidad}</span> Precio: <span>{producto.precio}</span></p>
            </IonCardHeader>

            <IonCardContent>
                {producto.descripcion}
                <div style={{ marginTop: '1rem' }}>
                    <IonButton fill="outline">Editar</IonButton>
                    <IonButton fill="clear">Eliminar</IonButton>
                </div>
            </IonCardContent>


        </IonCard>
    )
}