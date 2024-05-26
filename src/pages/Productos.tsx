import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonTitle } from "@ionic/react"
import { useContext, useEffect, useState } from 'react';
import { InventarioContext } from "../context/InventarioContext"

export const Productos: React.FC = () => {

    const { onLoadProductos } = useContext(InventarioContext)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        onLoadProductos()
            .then((productos: any) => setProductos(productos))
            .catch(() => setProductos([]))
    }, [onLoadProductos])

    return (
        <>
            <div style={{ display: 'flex', gap: '.5rem' }}>
                <IonImg src="./image/paginaproducto.png" style={{ width: "4rem" }} />
                <IonTitle>Productos</IonTitle>
            </div>
            <br />
            <h3>Listado de Productos</h3>
            <IonContent>

                <IonList>
                    {productos.map((producto: any) => (
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>{producto.name}</IonCardTitle>
                                <IonCardSubtitle>Categoria: <span style={{ fontWeight: 'bold' }}>{producto.categoria}</span></IonCardSubtitle>
                                <p>Cantidad: <span>{producto.cantidad}</span> Precio: <span>{producto.precio}</span></p>
                            </IonCardHeader>

                            <IonCardContent>
                                {producto.descripcion}
                                <div style={{marginTop: '1rem'}}>
                                    <IonButton fill="outline">Editar</IonButton>
                                    <IonButton fill="clear">Eliminar</IonButton>
                                </div>
                            </IonCardContent>


                        </IonCard>
                    ))}
                </IonList>

            </IonContent>
        </>
    )
}