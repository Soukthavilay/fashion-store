import { Link } from 'react-router-dom'
import '../scss/categoryItem.scss'
import { useTranslation } from 'react-i18next';

const CategoryItem = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="categories-item">
        <div className="banners-double">
          <Link target='_parent' to={`/product-list/65ae67f88b38bd5b6c4f22e2`} className="banner_fam" title="Áo Polo">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301626/final/category_banner_men-bf1d79fc1d5da2ba796d5cdacb2e65a5a89285c6f12d0fd3c4d1a50c635b8f49_stxkqf.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301626/final/category_banner_men-bf1d79fc1d5da2ba796d5cdacb2e65a5a89285c6f12d0fd3c4d1a50c635b8f49_stxkqf.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705301626/final/category_banner_men-bf1d79fc1d5da2ba796d5cdacb2e65a5a89285c6f12d0fd3c4d1a50c635b8f49_stxkqf.jpg" alt="Phones" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>{t("categoryTitles.65ae67f88b38bd5b6c4f22e2")}</h2>
              </div>
            </div>
          </Link>
          <Link target='_parent' to={`/product-list/65ae67ef8b38bd5b6c4f22de`} className="banner_fam" title="Devices">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301865/final/category_banner_sportswear-b0e4f3ef4fca77de099754d8b23ffd0410c31d127ad228116de7ff54235745dc_udjdxj.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705301865/final/category_banner_sportswear-b0e4f3ef4fca77de099754d8b23ffd0410c31d127ad228116de7ff54235745dc_udjdxj.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705301865/final/category_banner_sportswear-b0e4f3ef4fca77de099754d8b23ffd0410c31d127ad228116de7ff54235745dc_udjdxj.jpg" alt="Devices" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>{t("categoryTitles.65ae67ef8b38bd5b6c4f22de")}</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="banners-triple">
        <Link target='_parent' to={`/product-list/65ae680f8b38bd5b6c4f22e6`} className="banner_fam" title="Computers">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705336377/final/resebbda8dd7c83cf1c22c65d278a7ec8b1fr_dbvqoo.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705336377/final/resebbda8dd7c83cf1c22c65d278a7ec8b1fr_dbvqoo.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705336377/final/resebbda8dd7c83cf1c22c65d278a7ec8b1fr_dbvqoo.jpg" alt="Computers" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>{t("categoryTitles.65ae680f8b38bd5b6c4f22e6")}</h2>
              </div>
            </div>
          </Link>
          <Link target='_parent' to={`/product-list/65ae681a8b38bd5b6c4f22ea`} className="banner_fam" title="Computers">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705336560/final/res375651a2fab3fef15179906a7d2bcf3ffr_yfraq0.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705336560/final/res375651a2fab3fef15179906a7d2bcf3ffr_yfraq0.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705336560/final/res375651a2fab3fef15179906a7d2bcf3ffr_yfraq0.jpg" alt="Computers" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>{t("categoryTitles.65ae681a8b38bd5b6c4f22ea")}</h2>
              </div>
            </div>
          </Link>
          <Link target='_parent' to={`/product-list/65ae6b104b4dc368f0898b12`} className="banner_fam" title="Computers">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705336562/final/res54318e8173d21bf9f29af3c2ba1ee1aefr_yixes1.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1705336562/final/res54318e8173d21bf9f29af3c2ba1ee1aefr_yixes1.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705336562/final/res54318e8173d21bf9f29af3c2ba1ee1aefr_yixes1.jpg" alt="Computers" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>{t("categoryTitles.65ae6b104b4dc368f0898b12")}</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CategoryItem