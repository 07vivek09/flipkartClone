import { Box, styled} from '@mui/material'
import React from 'react'
import Banner from './Banner'
import NavBar from './NavBar'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productActions'
import MidSlide from './MidSlide'
import MidSection from './MidSection'
import Slide from './Slide'

const Component=styled(Box)`
padding:10px 10px;
background:#F2F2F2;
`

const Home = () => {

  const getProductsData = useSelector(state => state.getProducts);
  const { products, error } = getProductsData;

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])


  return (
    <>
        <NavBar />
        <Component>
        <Banner />
        <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
        </Component>
    </>
  )
}

export default Home