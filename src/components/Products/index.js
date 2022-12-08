import React from 'react'
import {
    ProductsContainer,
    ProductsHeading,
    ProductTitle,
    Productswrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton,
} from './ProductsElement.';

const Products = ({heading, data}) => {
  return (
      <ProductsContainer>
          <ProductsHeading>{heading}</ProductsHeading>
          <Productswrapper>
          {data.map((product, index) => {
                  return(
                      <ProductCard key= {index}>
                          <ProductImg src={product.img} alt={product.alt} />
                          <ProductInfo>
                              <ProductTitle>{product.name}</ProductTitle>
                              <ProductDesc>{product.desc}</ProductDesc>
                              <ProductPrice>{product.price}</ProductPrice>
                              <ProductButton>{product.button}</ProductButton>
                          </ProductInfo>
                      </ProductCard>
                  )
              })}
          </Productswrapper>
             
          
      </ProductsContainer>
  )
}

export default Products