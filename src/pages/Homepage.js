import React,{useEffect} from 'react'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import {useDispatch,useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Header from '../components/Header'
// import MainPageCategory from '../components/MainPageCategory'
import Testimonials from '../components/Testimonials'


const Homepage = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList


    useEffect(()=> {
        dispatch(listProducts())
    },[dispatch])

    return (
        <div>
            <Navbar/>
            <Header/>
            {loading ?
             <Loader/> :
              error ? <Message>{error}</Message> :  
                <div className="bg-white">
                <div className="max-w-2xl mx-auto pb-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map(product => {
                        return(
                            <Product product={product} key={product._id}/>
                        )
                    })}
                    </div>
                </div>
                </div>
            }
            {/* <Testimonials/> */}
            <Footer/>
        </div>
    )
}

export default Homepage
