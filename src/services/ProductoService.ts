import { getAxios, postAxios } from "../helpers/axios-helper";

class ProductoService {


    async getAllProductos() {
        return await getAxios('producto/listado')
    }

    async getAllCategories() {
        return await getAxios('producto/categories')
    }

    async createProducto(data = {}) {
        return await postAxios('producto/new-product', data)
    }

    async getProductoById(id: number) {
        return await getAxios(`producto/detail-product/${id}`)
    }
}


export default ProductoService;