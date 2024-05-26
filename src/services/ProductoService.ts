import { getAxios } from "../helpers/axios-helper";

class ProductoService {


    async getAllProductos() {
        return await getAxios('producto/listado')
    }

    async getAllCategories() {
        return await getAxios('producto/categories')
    }
}


export default ProductoService;