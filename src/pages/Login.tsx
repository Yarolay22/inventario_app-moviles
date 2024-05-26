import { IonButton, IonContent, IonInput } from "@ionic/react"
import { useContext, useState } from "react"
import { InventarioContext } from "../context/InventarioContext"


export const Login: React.FC = () => {

    const [auth, setAuth] = useState({email: 'yarolay@admin.com', password: '123456'})
    const {onLogin} = useContext(InventarioContext)

    const onChangeInput = (evt: any) => {
        const { name, value } = evt.target
        setAuth({ ...auth, [name]: value })
    }

    const onSubmitForm = async (evt: any) => {
        evt.preventDefault();
        await onLogin(auth.email, auth.password)
    }

    return (
        <IonContent className="ion-padding">
            <form onSubmit={onSubmitForm}  style={{display: "flex", flexDirection: 'column', rowGap: '1rem'}}>
                <IonInput
                    label="Correo Electronico" 
                    type="email"
                    name="email"
                    value={auth.email}
                    onChange={onChangeInput}
                    labelPlacement="floating" 
                    fill="outline" 
                    placeholder="Tu correo electronico"></IonInput>

                <IonInput 
                    label="Contraseña" 
                    type="password" 
                    name="password"
                    value={auth.password}
                    onChange={onChangeInput}
                    labelPlacement="floating" 
                    fill="outline" 
                    placeholder="tu password"></IonInput>

                <IonButton type="submit" expand="block">Ingresar</IonButton>
            </form>
        </IonContent>
    )
}
