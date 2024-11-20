import { instance } from "../api/axios.api"
import { ICreateProductDto, IProductDto,IEditProductDto } from "../types/product"

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
    async getById(id: string | undefined) {
        const response = await fetch(`/api/products/${id}`);
        return await response.json();
    },
   
   

}