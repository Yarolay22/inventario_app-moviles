import { createContext, useEffect, useState } from "react";
import AuthService from "../services/AuthService";
import {  useIonRouter } from "@ionic/react";
import DashboardService from "../services/DasboardService";
import { estadisticaVentas } from "../constant";
import ProductoService from "../services/ProductoService";



export const InventarioContext : React.Context<any> = createContext<any>(null);


export const InventarioProvider: React.FC<any> = ({ children }: {children: any}) => {

    const [stateAuth, setStateAuth] = useState(false)
    const [productoActivo, setProductoActivo] = useState({})
    const [estadisticas, setEstadisticas] = useState(estadisticaVentas)
    const router  = useIonRouter()


    useEffect(() => {
        if(stateAuth) {
            new DashboardService().getEstadisticas().then(({data}) => {
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
        const {data} = await new AuthService().autenticateLogin(email, password)
        setStateAuth(data.payload.isAuth)
        router.push('/dashboard', 'root', 'replace');
    }

   

    const onLoadCategories = async () => {
        const {data} = await new ProductoService().getAllCategories()
        return data;
    }

    // PRODUCTOS
    const onCreateProducto = async (formData: any) => {
        const { data } = await new ProductoService().createProducto(formData)
        return data;
    }

    const onLoadProductos = async () => {
        const {data} = await new ProductoService().getAllProductos()
        return data;
    }

    const onDeleteProducto = async () => {

    }

    const onUpdateProducto = async () => {

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

    return (
        <InventarioContext.Provider value={{
            stateAuth,
            estadisticas,
            productoActivo,
            onLogin,
            onLoadProductos,
            onLoadCategories,
            onCreateProducto,
            onDeleteProducto,
            onUpdateProducto,
            onDetailProducto,
            onResetProductActivo
        }} >
            {children}
        </InventarioContext.Provider>
    )
}