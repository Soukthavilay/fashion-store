import { Link } from 'react-router-dom'
import '../scss/categoryItem.scss'
import { GlobalState } from '../../../GlobalState'
import { useContext, useEffect, useState } from 'react'
const CategoryItem = () => {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;
  const [categoryIDs, setCategoryIDs] = useState([]);
  useEffect(()=>{
    const categoryNames = ['Áo Thun', 'Áo Polo', 'Quần CASUAL', 'Quần JEAN','Quần Short'];
    const filteredIDs = categories.filter((item)=> categoryNames.includes(item.name)).map((item)=> item._id);
    setCategoryIDs(filteredIDs);
  },[categories]);
  return (
    <>
      <div className="categories-item">
        <div className="banners-double">
          <Link target='_parent' to={`/product-list/${categoryIDs[0]}`} className="banner_fam" title="Áo Polo">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301626/final/category_banner_men-bf1d79fc1d5da2ba796d5cdacb2e65a5a89285c6f12d0fd3c4d1a50c635b8f49_stxkqf.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301626/final/category_banner_men-bf1d79fc1d5da2ba796d5cdacb2e65a5a89285c6f12d0fd3c4d1a50c635b8f49_stxkqf.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705301626/final/category_banner_men-bf1d79fc1d5da2ba796d5cdacb2e65a5a89285c6f12d0fd3c4d1a50c635b8f49_stxkqf.jpg" alt="Phones" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>Áo Polo</h2>
              </div>
            </div>
          </Link>
          <Link target='_parent' to={`/product-list/${categoryIDs[2]}`} className="banner_fam" title="Devices">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301865/final/category_banner_sportswear-b0e4f3ef4fca77de099754d8b23ffd0410c31d127ad228116de7ff54235745dc_udjdxj.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301865/final/category_banner_sportswear-b0e4f3ef4fca77de099754d8b23ffd0410c31d127ad228116de7ff54235745dc_udjdxj.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705301865/final/category_banner_sportswear-b0e4f3ef4fca77de099754d8b23ffd0410c31d127ad228116de7ff54235745dc_udjdxj.jpg" alt="Devices" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>Áo Thun</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="banners-triple">
        <Link target='_parent' to={`/product-list/${categoryIDs[4]}`} className="banner_fam" title="Computers">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705336377/final/resebbda8dd7c83cf1c22c65d278a7ec8b1fr_dbvqoo.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705336377/final/resebbda8dd7c83cf1c22c65d278a7ec8b1fr_dbvqoo.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705336377/final/resebbda8dd7c83cf1c22c65d278a7ec8b1fr_dbvqoo.jpg" alt="Computers" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>Quần CASUAL</h2>
              </div>
            </div>
          </Link>
          <Link target='_parent' to={`/product-list/${categoryIDs[4]}`} className="banner_fam" title="Computers">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705336560/final/res375651a2fab3fef15179906a7d2bcf3ffr_yfraq0.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705336560/final/res375651a2fab3fef15179906a7d2bcf3ffr_yfraq0.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705336560/final/res375651a2fab3fef15179906a7d2bcf3ffr_yfraq0.jpg" alt="Computers" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>Quần JEAN</h2>
              </div>
            </div>
          </Link>
          <Link target='_parent' to={`/product-list/${categoryIDs[4]}`} className="banner_fam" title="Computers">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705336562/final/res54318e8173d21bf9f29af3c2ba1ee1aefr_yixes1.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705336562/final/res54318e8173d21bf9f29af3c2ba1ee1aefr_yixes1.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705336562/final/res54318e8173d21bf9f29af3c2ba1ee1aefr_yixes1.jpg" alt="Computers" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>Quần Short</h2>
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