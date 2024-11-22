export interface IProductDto{
    id:number;
    title:string;
    description?:string;
    price: number;
    imagePath: string;
    categoryId: number;
    categoryName: string;
}

export interface ICreateProductDto{
    title:string;
    description?:string;
    price: number;
    imagePath: string;
    categoryId: number;
}
export interface IEditProductDto{
    id:number;
    title:string;
    description?:string;
    price: number;
    imagePath: string;
    categoryId: number;
}

// "id": 1,
//     "title": "Ноутбук Acer Aspire 7 A715-42G-R7BK (NH.QE5EU.00L) Charcoal Black",
//     "description": "Екран 15.6\" IPS (1920x1080) Full HD 144 Гц, матовый / AMD Ryzen 7 5700U (1.8 - 4.3 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / черний",
//     "price": 20354,
//     "imagePath": "https://content.rozetka.com.ua/goods/images/big_tile/451110968.jpg",
//     "categoryId": 1,
//     "categoryName": "Laptop"