import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { ICreateProductDto, IEditProductDto } from "../../types/product";
import { ProductService } from "../../services/products.service";
import { useEffect } from "react";

export default function EditProduct() {
    const { id } = useParams(); // Отримання ID продукту з параметрів URL
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue, // Для встановлення значень у форму
        formState: { errors }
    } = useForm<IEditProductDto>();

    // Завантаження даних продукту для заповнення форми
    useEffect(() => {
        const fetchProduct = async () => {
            const product = await ProductService.getById(id); // Передбачається, що є метод getById
            if (product) {
                // Встановлення значень у форму
                setValue("title", product.title);
                setValue("description", product.description);
                setValue("price", product.price);
                setValue("imagePath", product.imagePath || "");
                setValue("categoryId", product.categoryId);
            }
        };
        fetchProduct();
    }, [id, setValue]);

    const onSubmit = async (product: IEditProductDto) => {
         await ProductService.edit(product); // Передбачається, що є метод update
         navigate("/products"); // Повернення до списку продуктів
    };

    return (
        <div className="EditProduct">
            <Box>
                <Typography variant="h4">Editing Product</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        
                        {...register("title")}
                        id="title"
                        label="Title"
                        type="text"
                        variant="filled"
                    />
                    <TextField
                        {...register("description")}
                        id="description"
                        label="Description"
                        type="text"
                        variant="filled"
                    />
                    <TextField
                        
                        {...register("price")}
                        id="price"
                        label="Price"
                        type="number"
                        variant="filled"
                    />
                    <TextField
                        {...register("imagePath")}
                        id="imagePath"
                        label="Image Path"
                        type="text"
                        variant="filled"
                    />
                    <TextField
                        
                        {...register("categoryId")}
                        id="categoryId"
                        label="Category ID"
                        type="number"
                        variant="filled"
                    />

                    <Button variant="contained" type="submit">Save</Button>
                </form>
            </Box>
        </div>
    );
}
