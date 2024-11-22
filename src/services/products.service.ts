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
        console.log(product);
        const result = await instance.post('products/create', product);
        // console.log(result);
    },
    async delete(id: number): Promise<void> {
        const result = await instance.delete(`products/${id}`);
    },
    async getById(id: string | undefined) {
        const response = await fetch(`/api/products/${id}`);
        return await response.json();
    },
   
    async edit(product: IEditProductDto): Promise<void> {
        const result = await instance.put("products/edit", product);
    }
}