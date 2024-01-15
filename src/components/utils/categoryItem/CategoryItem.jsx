import { Link } from 'react-router-dom'
import '../scss/categoryItem.scss'
import { GlobalState } from '../../../GlobalState'
import { useContext, useEffect, useState } from 'react'
const CategoryItem = () => {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;
  const [categoryIDs, setCategoryIDs] = useState([]);
  useEffect(()=>{
    const categoryNames = ['Laptop', 'Phones', 'Devices', 'Headphones','Speakers'];
    const filteredIDs = categories.filter((item)=> categoryNames.includes(item.name)).map((item)=> item._id);
    setCategoryIDs(filteredIDs);
  },[categories]);
  return (
    <>
      <div className="categories-item">
        <div className="banners-double">
          <Link to={`/product-list/${categoryIDs[0]}`} className="banner_fam" title="Phones">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301626/final/category_banner_men-bf1d79fc1d5da2ba796d5cdacb2e65a5a89285c6f12d0fd3c4d1a50c635b8f49_stxkqf.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301626/final/category_banner_men-bf1d79fc1d5da2ba796d5cdacb2e65a5a89285c6f12d0fd3c4d1a50c635b8f49_stxkqf.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705301626/final/category_banner_men-bf1d79fc1d5da2ba796d5cdacb2e65a5a89285c6f12d0fd3c4d1a50c635b8f49_stxkqf.jpg" alt="Phones" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>Men</h2>
              </div>
            </div>
          </Link>
          <Link to={`/product-list/${categoryIDs[2]}`} className="banner_fam" title="Devices">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301865/final/category_banner_sportswear-b0e4f3ef4fca77de099754d8b23ffd0410c31d127ad228116de7ff54235745dc_udjdxj.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301865/final/category_banner_sportswear-b0e4f3ef4fca77de099754d8b23ffd0410c31d127ad228116de7ff54235745dc_udjdxj.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705301865/final/category_banner_sportswear-b0e4f3ef4fca77de099754d8b23ffd0410c31d127ad228116de7ff54235745dc_udjdxj.jpg" alt="Devices" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>SportWear</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="banners-triple">
        <Link to={`/product-list/${categoryIDs[4]}`} className="banner_fam" title="Computers">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301762/final/big_category_banner_women-5308e3f568f948a5d71eb27746b573e0b3559200b1b21bb72dbc6bf69d2ce6de_zcys7w.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301762/final/big_category_banner_women-5308e3f568f948a5d71eb27746b573e0b3559200b1b21bb72dbc6bf69d2ce6de_zcys7w.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705301762/final/big_category_banner_women-5308e3f568f948a5d71eb27746b573e0b3559200b1b21bb72dbc6bf69d2ce6de_zcys7w.jpg" alt="Computers" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>Women</h2>
              </div>
            </div>
          </Link>
          <Link to={`/product-list/${categoryIDs[4]}`} className="banner_fam" title="Computers">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301762/final/big_category_banner_women-5308e3f568f948a5d71eb27746b573e0b3559200b1b21bb72dbc6bf69d2ce6de_zcys7w.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301762/final/big_category_banner_women-5308e3f568f948a5d71eb27746b573e0b3559200b1b21bb72dbc6bf69d2ce6de_zcys7w.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705301762/final/big_category_banner_women-5308e3f568f948a5d71eb27746b573e0b3559200b1b21bb72dbc6bf69d2ce6de_zcys7w.jpg" alt="Computers" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>Women</h2>
              </div>
            </div>
          </Link>
          <Link to={`/product-list/${categoryIDs[4]}`} className="banner_fam" title="Computers">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301762/final/big_category_banner_women-5308e3f568f948a5d71eb27746b573e0b3559200b1b21bb72dbc6bf69d2ce6de_zcys7w.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301762/final/big_category_banner_women-5308e3f568f948a5d71eb27746b573e0b3559200b1b21bb72dbc6bf69d2ce6de_zcys7w.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705301762/final/big_category_banner_women-5308e3f568f948a5d71eb27746b573e0b3559200b1b21bb72dbc6bf69d2ce6de_zcys7w.jpg" alt="Computers" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>Women</h2>
              </div>
            </div>
          </Link>
          {/* <Link to={`/product-list/${categoryIDs[3]}`} className="banner_fam" title="Headphones">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://cache.tradeinn.com/images/banners-categorias/11494-peke.jpg" />
                <source media="(max-width: 720px)" srcSet="https://cache.tradeinn.com/images/banners-categorias/11494_mobile.jpg" />
                <img src="https://cache.tradeinn.com/images/banners-categorias/11494-peke.jpg" alt="Consoles" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>Headphones</h2>
              </div>
            </div>
          </Link>
          <Link to={`/product-list/${categoryIDs[1]}`} className="banner_fam" title='Speakers'>
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://cache.tradeinn.com/images/banners-categorias/11499-peke.jpg" />
                <source media="(max-width: 720px)" srcSet="https://cache.tradeinn.com/images/banners-categorias/pixel_mobile.jpg" />
                <img src="https://cache.tradeinn.com/images/banners-categorias/11499-peke.jpg" alt="Big Appliances" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>Speakers</h2>
              </div>
            </div>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default CategoryItem