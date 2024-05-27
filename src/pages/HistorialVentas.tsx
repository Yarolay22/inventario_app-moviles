import { IonContent, IonImg, IonList, IonTitle } from "@ionic/react"
import { useContext, useEffect, useState } from "react"
import { InventarioContext } from "../context/InventarioContext"
import { CardVenta } from "../components/CardVenta"

export const HistorialVentas: React.FC = () => {

    const { onHistorialVentas } = useContext(InventarioContext)
    const [historialVenta, setHistorialVenta] = useState([])

    useEffect(() => {
        onHistorialVentas()
            .then((ventas: any) => setHistorialVenta(ventas))
            .catch(() => setHistorialVenta([]))
    }, [])

    return (
        <>
            <div style={{ display: 'flex', gap: '.5rem' }}>
                <IonImg src="./image/historialdeventas.png" style={{ width: "4rem" }} />
                <IonTitle>Historial de Venta</IonTitle>
            </div>
            <br />
            <h3>Listado de Productos</h3>
            <IonContent style={{ height: '75vh' }}>

                <IonList >
                    {historialVenta.map((venta: any) => <CardVenta key={venta.id} venta={venta} />)}
                </IonList>

            </IonContent>
        </>
    )
}