import { IonButton, IonInput, IonSelect, IonSelectOption, IonTextarea } from "@ionic/react"
import { Modal } from "./Modal"
import { useContext, useEffect, useState } from "react"
import { InventarioContext } from "../context/InventarioContext"




export const ModalProducto: React.FC = () => {

    const { onLoadCategories } = useContext(InventarioContext)
    const [categorias, setCategorias] = useState([])


    useEffect(() => {
        onLoadCategories()
        .then((categorias: any) => setCategorias(categorias))
        .catch(() => setCategorias([]))
    }, [])

    return (
        <Modal>
            <form action="" style={{display: 'flex', flexDirection: 'column', rowGap: '1rem'}}>
                <IonInput label="Nombre:" type="text" labelPlacement="floating" fill="outline" placeholder="Nombre producto"></IonInput>
                <IonInput label="Precio:" type="number" labelPlacement="floating" fill="outline" placeholder="Precio del producto"></IonInput>


                <IonSelect placeholder="Seleccione Categoria">
                    <div slot="label">
                        Categoria:
                    </div>
                    {
                        categorias.map((categoria: any) => (<IonSelectOption key={categoria.id} value={categoria.id}>{categoria.name}</IonSelectOption>))
                    }
                </IonSelect>

                <IonInput label="Cantidad:" type="number" labelPlacement="floating" fill="outline" placeholder="Cantidad del producto"></IonInput>
                <IonTextarea label="Descripcion:" labelPlacement="floating" fill="outline" rows={15} placeholder="Descripcion del producto"></IonTextarea>

                <IonButton type="submit" expand="block">Guardar</IonButton>

            </form>
        </Modal>
    )
}