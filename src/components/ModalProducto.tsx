import { IonButton, IonInput, IonSelect, IonSelectOption, IonTextarea } from "@ionic/react"
import { Modal } from "./Modal"
import { useContext, useEffect, useMemo, useState } from "react"
import { InventarioContext } from "../context/InventarioContext"
import { ModalContext } from "../context/ModalContext"




export const ModalProducto: React.FC<any> = () => {

    const { onCloseModal } = useContext(ModalContext);
    const { onLoadCategories, onCreateProducto, productoActivo, onUpdateProducto} = useContext(InventarioContext)
    const [categorias, setCategorias] = useState([])
    const [productoForm, setProductoForm] = useState({ id:0, cantidad: 1, categoriaId: 0, descripcion: "", name: "", precio: 0 })


    useEffect(() => {
        onLoadCategories()
            .then((categorias: any) => setCategorias(categorias))
            .catch(() => setCategorias([]))
    }, [])

    useEffect(() => {
        setProductoForm(productoActivo)
    }, [productoActivo])


    const titleProducto = useMemo(() =>  (!productoActivo?.id) ? "Agregar Producto": "Editar Producto", [productoActivo])
    const buttonLabel = useMemo(() =>  (!productoActivo?.id) ? "Guardar": "Guardar Cambios", [productoActivo])


    const onSubmitForm = (evt: any) => {
        evt.preventDefault();
        if(productoForm?.id !== 0) {
            onUpdateProducto(productoForm)
        } else {
            onCreateProducto(productoForm)
        }
        setProductoForm({ id: 0,cantidad: 1, categoriaId: 0, descripcion: "", name: "", precio: 0 })
        onCloseModal()
    }

    const onInputForm = (evt: any) => {
        setProductoForm({
            ...productoForm,
            [evt.target.name]: evt.target.value
        });
    }

    return (
        <Modal title={titleProducto}>
            <form onSubmit={onSubmitForm} style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
                <IonInput
                    label="Nombre:"
                    type="text"
                    labelPlacement="floating"
                    fill="outline"
                    name="name"
                    value={productoForm?.name}
                    onIonInput={onInputForm}
                    placeholder="Nombre producto"></IonInput>

                <IonInput
                    label="Precio:"
                    type="number"
                    labelPlacement="floating"
                    fill="outline"
                    name="precio"
                    value={productoForm?.precio}
                    onIonInput={onInputForm}
                    placeholder="Precio del producto"></IonInput>


                <IonSelect
                    name="categoriaId"
                    value={productoForm?.categoriaId}
                    onIonChange={onInputForm}
                    placeholder="Seleccione Categoria"
                >
                    <div slot="label">
                        Categoria:
                    </div>
                    {
                        categorias.map((categoria: any) => (<IonSelectOption key={categoria.id} value={categoria.id}>{categoria.name}</IonSelectOption>))
                    }
                </IonSelect>

                <IonInput
                    label="Cantidad:"
                    type="number"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Cantidad del producto"
                    min={1}
                    name="cantidad"
                    value={productoForm?.cantidad}
                    onIonInput={onInputForm}
                ></IonInput>
                <IonTextarea
                    label="Descripcion:"
                    labelPlacement="floating"
                    fill="outline"
                    rows={15}
                    placeholder="Descripcion del producto"
                    name="descripcion"
                    onIonInput={onInputForm}
                    value={productoForm?.descripcion}
                >
                </IonTextarea>

                <IonButton type="submit" expand="block">{buttonLabel}</IonButton>

            </form>
        </Modal>
    )
}