import { createContext, useEffect, useState } from "react";
import AuthService from "../services/AuthService";
import {  useIonRouter } from "@ionic/react";
import DashboardService from "../services/DasboardService";
import { estadisticaVentas } from "../constant";
import ProductoService from "../services/ProductoService";



export const InventarioContext : React.Context<any> = createContext<any>(null);


export const InventarioProvider: React.FC<any> = ({ children }: {children: any}) => {

    const [stateAuth, setStateAuth] = useState(false)
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

    const onLoadProductos = async () => {
        const {data} = await new ProductoService().getAllProductos()
        return data;
    }

    return (
        <InventarioContext.Provider value={{
            stateAuth,
            estadisticas,
            onLogin,
            onLoadProductos
        }} >
            {children}
        </InventarioContext.Provider>
    )
}