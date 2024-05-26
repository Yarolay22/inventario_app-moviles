import { IonRouterOutlet } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { Redirect, Route } from "react-router"
import { Dashboard, HistorialVentas, Login, Productos, Ventas } from "../pages"
import { useContext } from "react"
import { InventarioContext } from "../context/InventarioContext"
import { InventarioLayout } from "../layout/InventarioLayout"




export const InventarioRoute: React.FC = () => {

    const { stateAuth } = useContext(InventarioContext)
    return (
        <IonRouterOutlet>
            {
                (stateAuth) ? (
                    <InventarioLayout>
                        <Route path="*" render={() => <Redirect to="/dashboard" />} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/venta" component={Ventas} />
                        <Route path="/productos" component={Productos} />
                        <Route path="/historial-venta" component={HistorialVentas} />
                        <Redirect exact from="/" to="/dashboard" />
                    </InventarioLayout>
                ) : (
                    <>
                        <Route path="*" render={() => <Redirect to="/login" />} />
                        <Route path="/login" component={Login} />
                        <Redirect exact from="/" to="/login" />
                    </>
                )
            }

        </IonRouterOutlet>
    )
}