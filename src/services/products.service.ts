import { instance } from "../api/axios.api"
import { ICreateProductDto, IProductDto } from "../types/product"
// let headers={
//     Authorization: 'Bearer '+getTokenFromLocalStorage()||'',
// }
// export const ProductService={
//     async products():Promise<IProductDto[]|undefined>{
//         const result=await instance.get<IProductDto[]>('products',{headers})
//         return result.data;
//     }

// }

export const ProductService={
    async products():Promise<IProductDto[]|undefined>{
        const result=await instance.get<IProductDto[]>('products');
        return result.data;
    },

    async create(product : ICreateProductDto) : Promise<void>
    {
        const result = await instance.post('products/create', product);
    },
    async delete(id: number): Promise<void> {
        const result = await instance.delete(`products/${id}`);
    },
}