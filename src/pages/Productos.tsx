import {  IonContent, IonFab, IonFabButton, IonIcon, IonImg, IonList, IonTitle} from "@ionic/react"
import { useContext, useEffect, useState } from 'react';
import { InventarioContext } from "../context/InventarioContext"
import { add } from 'ionicons/icons'
import { CardProducto } from "../components/CardProducto";
import { ModalContext } from "../context/ModalContext";
import { ModalProducto } from "../components/ModalProducto";

export const Productos: React.FC = () => {

    
    const { onLoadProductos, onResetProductActivo } = useContext(InventarioContext)
    const { onOpenModal } = useContext(ModalContext)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        onLoadProductos()
            .then((productos: any) => setProductos(productos))
            .catch(() => setProductos([]))
    }, [])


    const onCreateProduct = () => {
        onOpenModal();
        onResetProductActivo();
    }

    return (
        <>
            <div style={{ display: 'flex', gap: '.5rem' }}>
                <IonImg src="./image/paginaproducto.png" style={{ width: "4rem" }} />
                <IonTitle>Productos</IonTitle>
            </div>
            <br />
            <h3>Listado de Productos</h3>
            <IonContent style={{height: '75vh'}}>

                <IonList >
                    {productos.map((producto: any) => <CardProducto key={producto.id} producto={producto} />)}
                </IonList>

                <ModalProducto />

            </IonContent>

            <IonFab slot="fixed" vertical="bottom" horizontal="end" onClick={onCreateProduct}>
                <IonFabButton>
                    <IonIcon icon={add}></IonIcon>
                </IonFabButton>
            </IonFab>
        </>
    )
}