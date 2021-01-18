import './HomeScreen.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Components 
import Product from '../components/Product'

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions'

const  HomeScreen = () => {

    const dispacth = useDispatch()

    const getProducts = useSelector(state => state.getProducts)
    const { products, loading, error } = getProducts

    useEffect(() => {
        dispacth(listProducts())
    }, [dispacth])

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Product</h2>

            <div className="homescreen__products">
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map(product => (
                    <Product 
                    key={product._id} productId={product._id}
                    name={product.name} 
                    price={product.price}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomeScreen
