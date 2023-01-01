import { useState } from "react"

const Test = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Mac Book Pro 16',
            productId: '123ABC',
            discountPrice: 320000,
            actualPrice: 300000,
            rating: 4.5,
        },
        {
            id: 2,
            name: 'iPhone 13 Pro Max',
            productId: '122ABC',
            discountPrice: 270000,
            actualPrice: 250000,
            rating: 7.5,
        },
    ])
    const [itemDetails, setItemDetails] = useState({})
    const getItemDetails = (productId) => {
    const newProduct = products.filter(product => { return product.productId === productId})
    const singleProduct = newProduct[0]
        setItemDetails(singleProduct)
        console.log(itemDetails)
    }

    return ( 
        <div className="flex">
            <div onClick={() => getItemDetails('123ABC')} className="text-5xl">CLICK ME</div>
        </div>
     );
}
 
export default Test;