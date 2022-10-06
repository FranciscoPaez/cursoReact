const products = [ 
    {
        id: '1',
        name: 'Iphone 12 Pro Max',
        price: 1107,
        category: 'Celular',
        img: 'https://media.revistagq.com/photos/5fa9344a6484a93e065fb46d/master/pass/Apple_iphone12mini-iphone12max-homepodmini-availability_iphone12promax-geo_110520.jpg',
        stock: 25,
        description: 'Descripcion Iphone 12 Pro Max'
    },
    {
        id: '1',
        name: 'Iphone 14 Pro Max',
        price: 1500,
        category: 'Celular',
        img: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703416/Croma%20Assets/Communication/Mobiles/Images/261991_hhfa33.png/mxw_640,f_auto',
        stock: 3,
        description: 'Descripcion Iphone 14 Pro Max'
    },
    {
        id: '1',
        name: 'Samsung S22 Ultra',
        price: 900,
        category: 'Celular',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/levant/2202/gallery/levant-galaxy-s22-ultra-s908-413037-sm-s908ezkgmea-530970280',
        stock: 12,
        description: 'Descripcion Samsung S22 Ultra'
    }

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        },1500)
    })
}

export const getProduct = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === categoryId)) 
        },1000)
    })
}