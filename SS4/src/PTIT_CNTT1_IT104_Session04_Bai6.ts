type Product = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number;
}

const listProduct: Product[]= [
    {
        id: "01",
        name: "áo sơ mi",
        price: 10000,
        discount: 0.2,
        category: {
            id: "10",
            name: "thời trang nam",
        }
    },

        {
        id: "02",
        name: "áo hood",
        price: 20000,
        discount: 0.3,
        category: {
            id: "20",
            name: "thời trang nam",
        }
    },

        {
        id: "03",
        name: "áo xyz",
        price: 30000,
        discount: 0.4,
        category: {
            id: "30",
            name: "thời trang nam",
        }
    },

];


const getFinalPrice = (product: Product): number => {
    if(product.discount){
        return product.price * (1-product.discount);
    }
    return product.price
};

const printProductInfo = (product: Product): void => {
  const finalPrice = getFinalPrice(product);
  console.log(`Tên: ${product.name}`);
  console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);
  console.log(`Giá sau giảm: ${finalPrice.toLocaleString()} VND`);
  console.log(`Danh mục: ${product.category.name}`);
};

for (let i = 0; i < listProduct.length; i++) {
  printProductInfo(listProduct[i]);
}
