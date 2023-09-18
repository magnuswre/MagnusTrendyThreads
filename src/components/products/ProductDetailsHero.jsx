import React from 'react'
import ImagePlaceholder from '../../assets/1920x300.svg'




const ProductDetailHero = () => {
    return (
        <div className='product-details-hero'>
            <div className='hero-image'>
                <img src={ImagePlaceholder} alt="Placeholder" />
            </div>
        </div>
    )
}

export default ProductDetailHero