import { useContext, useEffect, useState } from 'react'
import ProductDetailBody from '../../utils/productDetail/ProductDetailBody';
import ProductDetailHeader from '../../utils/productDetail/ProductDetailHeader';
import ProductReviews from '../../utils/productDetail/ProductReviews';
import { GlobalState } from '../../../GlobalState';
import { useParams } from 'react-router-dom';

import "../../utils/scss/product-detail.scss";
import RelatedItem from '../../utils/productItem/RelatedItem';

function ProductDetail() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const [bands] = state.BandAPI.bands;
  const [categories] = state.categoriesAPI.categories;
  const [detailProduct, setDetailProduct] = useState([]);

  useEffect(()=>{
    const foundProduct = products.find((product) => product._id === params.id);
    if (foundProduct) {
        const foundBand = bands.find((band) => band._id === foundProduct.band);
        const foundCategory = categories.find((category) => category._id === foundProduct.category);
        if (foundBand && foundCategory) {
          setDetailProduct({
            ...foundProduct,
            band: foundBand.name,
            category: foundCategory.name,
          });
        }
    }
  },[params.id, products,categories,bands]);

  if (detailProduct.length === 0) return null;
  return (
    <>
      <div className="product-detail">
        <ProductDetailHeader detailProduct={detailProduct}/>
        <ProductDetailBody detailProduct={detailProduct}/>
        <ProductReviews detailProduct={detailProduct}/>
        <RelatedItem  category={detailProduct.category}/>
      </div>
    </>
  );
}

export default ProductDetail