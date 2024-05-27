import { createContext, useEffect, useState } from "react";
import AuthService from "../services/AuthService";
import { useIonAlert, useIonRouter } from "@ionic/react";
import DashboardService from "../services/DasboardService";
import { estadisticaVentas } from "../constant";
import ProductoService from "../services/ProductoService";



export const InventarioContext: React.Context<any> = createContext<any>(null);


export const InventarioProvider: React.FC<any> = ({ children }: { children: any }) => {

    const [stateAuth, setStateAuth] = useState(false)
    const [productoActivo, setProductoActivo] = useState({})
    const [productos, setProductos] = useState([])
    const [estadisticas, setEstadisticas] = useState(estadisticaVentas)
    const router = useIonRouter()
    const [presentAlert] = useIonAlert();


    useEffect(() => {
        if (stateAuth) {
            new DashboardService().getEstadisticas().then(({ data }) => {
                const [efectivo, transferencia, credito] = estadisticaVentas;
                setEstadisticas([
                    { ...efectivo, cantidad: data.payload.efectivo },
                    { ...transferencia, cantidad: data.payload.transferencia },
                    { ...credito, cantidad: data.payload.credito }
                ]);
            })
        }
    }, [stateAuth])


    const onLogin = async (email: string, password: string) => {
        const { data } = await new AuthService().autenticateLogin(email, password)
        setStateAuth(data.payload.isAuth)
        router.push('/dashboard', 'root', 'replace');
    }



    const onLoadCategories = async () => {
        const { data } = await new ProductoService().getAllCategories()
        return data;
    }

    // PRODUCTOS
    const onCreateProducto = async (formData: any) => {
        const { data } = await new ProductoService().createProducto(formData)
        return data;
    }

    const onLoadProductos = async () => {
        new ProductoService().getAllProductos()
            .then(({ data }) => setProductos(data))
            .catch(() => setProductos([]))
    }

    const onDeleteProducto = async (id: number) => {
        await presentAlert({
            header: 'Advertencia!',
            message: '¿Desea eliminar el producto?',
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Delete',
                    handler(value) {
                        new ProductoService().deleteProduct(id)
                    },
                }
            ],
        });
        await onLoadProductos()
    }

    const onUpdateProducto = async (producto: any) => {
        await new ProductoService().updateProduct(producto.id, producto)
        await onLoadProductos()
    }

    const onDetailProducto = async (id: number) => {
        const { data } = await new ProductoService().getProductoById(id)

        let producto = data.payload

        delete producto.createdAt
        delete producto.updatedAt

        setProductoActivo(producto)
    }

    const onResetProductActivo = () => {
        setProductoActivo({})
    }

    const onHistorialVentas = async () => {
        const { data } = await new ProductoService().getAllHistorialVentas()
        return data;
    }

    return (
        <InventarioContext.Provider value={{
            stateAuth,
            estadisticas,
            productoActivo,
            productos,
            onLogin,
            onLoadProductos,
            onLoadCategories,
            onCreateProducto,
            onDeleteProducto,
            onUpdateProducto,
            onDetailProducto,
            onResetProductActivo,
            onHistorialVentas
        }} >
            {children}
        </InventarioContext.Provider>
    )
}