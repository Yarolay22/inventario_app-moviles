import { getAxios } from "../helpers/axios-helper";

class ProductoService {


    async getAllProductos() {
        return await getAxios('producto/listado')
    }
}


export default ProductoService;