import { deleteAxios, getAxios, postAxios, putAxios } from "../helpers/axios-helper";

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

    async getAllHistorialVentas() {
        return await getAxios('venta/listado')
    }

    async deleteProduct(id: number) {
        return await deleteAxios(`producto/delete-product/${id}`)
    }


    async updateProduct(id: number, producto: any) {
        return await putAxios(`producto/update-product/${id}`, producto)
    }
}


export default ProductoService;