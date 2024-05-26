import { IonRouterOutlet } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { Redirect, Route } from "react-router"
import { Dashboard, Login } from "../pages"
import { useContext } from "react"
import { InventarioContext } from "../context/InventarioContext"




export const InventarioRoute: React.FC = () => {

    const { stateAuth } = useContext(InventarioContext)
    return (
        <IonRouterOutlet>
            {
                (stateAuth) ? (
                    <>
                        <Route path="*" render={() => <Redirect to="/dashboard" />} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Redirect exact from="/" to="/dashboard" />
                    </>
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