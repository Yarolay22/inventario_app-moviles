import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react"
import { useContext } from "react"
import { InventarioContext } from "../context/InventarioContext"
import { ModalContext } from "../context/ModalContext"


export const CardProducto: React.FC<any> = ({ producto }: { producto: any }) => {


    const { onOpenModal } = useContext(ModalContext)
    const {onDeleteProducto, onDetailProducto} = useContext(InventarioContext)


    const onEditarProduct = () => {
        onDetailProducto(producto.id)
        onOpenModal()
    }

    const onDeleteProduct = () => {
        onDeleteProducto(producto.id)
    }

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
                    <IonButton fill="outline" onClick={onEditarProduct}>Editar</IonButton>
                    <IonButton fill="clear" onClick={onDeleteProduct}>Eliminar</IonButton>
                </div>
            </IonCardContent>


        </IonCard>
    )
}