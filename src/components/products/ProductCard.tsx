import { IProductDto } from "../../types/product";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { url } from "inspector";
import noImage from "../../../src/assets/images/no-image.jpg"
// export default function ProductCard({ id, title, description, price, imagePath, categoryId, categoryName }: IProductDto) {
//     return (
//         <div> 
//             <h2>{title}</h2>
//             <p>{price}</p>
//         </div>

//     )
// }

const ProductCard:React.FC<IProductDto>=({ id, title, description, price, imagePath, categoryId, categoryName })=> {
    return (
        <Card sx={{ height: '100%',maxWidth:240 }}>
        <CardMedia
          sx={{ height: 160, backgroundSize: 'contain'}}
          image={imagePath || noImage}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom fontSize={20} component="div">
            {title}
          </Typography>
          <Typography gutterBottom  fontSize={18} variant="h6" component="div">
            {price} грн.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
          </CardContent>
        <CardActions>
          <Button size="small">Details</Button>
          <Button size="small">Add to Cart</Button>
        </CardActions>
      </Card>
   )
}
export default ProductCard;