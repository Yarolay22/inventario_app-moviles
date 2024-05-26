import {  IonTitle } from "@ionic/react"
import { CardEstadistica } from "../components/CardEstadistica"
import { useContext } from "react"
import { InventarioContext } from "../context/InventarioContext"



export const Dashboard: React.FC = () => {

    const { estadisticas } = useContext(InventarioContext);

    return (
        <>
            <IonTitle>Bienvenido Inventario App</IonTitle>

            {
                estadisticas.map((estadistica: any, index: number) => <CardEstadistica key={index} estadistica={estadistica} />)
            }
        </>
    )
}