
export const data = [
    {
        id: 0,
        marca: "Absolut",
        bebida: "Vodka Absolut",
        precio: 1900,
        stock: 5,
        imagen: "https://res.cloudinary.com/dgvms5lfn/image/upload/v1660170630/ABSOLUT_epeven.png"

    },
    {
        id: 1,
        marca: "Smirnoff",
        bebida: "Vodka Smirnoff",
        precio: 1200,
        stock: 11,
        imagen: "https://res.cloudinary.com/dgvms5lfn/image/upload/v1660170630/SMIRNOFF_axkzyw.jpg"

    },
    {
        id: 2,
        marca: "Sernova",
        bebida: "Vodka Sernova",
        precio: 1000,
        stock: 18,
        imagen: "https://res.cloudinary.com/dgvms5lfn/image/upload/v1660170630/SERNOVA_psbnw6.png"

    },
    {
        id: 3,
        marca: "Belvedere",
        bebida: "Vodka Belvedere",
        precio: 15000,
        stock: 19,
        imagen: "https://res.cloudinary.com/dgvms5lfn/image/upload/v1660170629/BELVEDERE_xdpcpm.jpg" 

    }
]

export const getFetch = new Promise((res,rej)=>{
    let condition=true
    if(condition){
        setTimeout(()=>{
            res(data)
        },2000)
    }else{
        rej(console.log("no hay datos"))
    }
});

 export const getProductsByCategory=(categoryId)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(data.filter(prod=>prod.cat===categoryId))
        },500)
    })
   } 



export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.find(prod => prod.id == id))
        }, 500)
    })
  }
