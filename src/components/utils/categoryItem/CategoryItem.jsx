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
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/plolo_c6sh8i.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/plolo_c6sh8i.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/plolo_c6sh8i.jpg" alt="Phones" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>{t("categoryTitles.65ae67f88b38bd5b6c4f22e2")}</h2>
              </div>
            </div>
          </Link>
          <Link target='_parent' to={`/product-list/65ae67f88b38bd5b6c4f22e2`} className="banner_fam" title="Áo Polo">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1706108766/final/ngoai_ntujxq.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1706108766/final/ngoai_ntujxq.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1706108766/final/ngoai_ntujxq.jpg" alt="Phones" className="logo-corto" />
              </picture>
              <div className="block_gris"></div>
              <div className="topbannerh">
                <h2 className='nom_banner_h'>{t("categoryTitles.65ae6b204b4dc368f0898b16")}</h2>
              </div>
            </div>
          </Link>
          <Link target='_parent' to={`/product-list/65ae67ef8b38bd5b6c4f22de`} className="banner_fam" title="Devices">
            <div className="view">
              <picture>
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/thun_yctwuz.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/thun_yctwuz.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/thun_yctwuz.jpg" alt="Devices" className="logo-corto" />
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
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/causal_pyn4yu.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/causal_pyn4yu.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/causal_pyn4yu.jpg" alt="Computers" className="logo-corto" />
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
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/jean_vy1q4k.webp" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/jean_vy1q4k.webp" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/jean_vy1q4k.webp" alt="Computers" className="logo-corto" />
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
                <source media="(min-width: 721px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/short_w9rw7d.jpg" />
                <source media="(max-width: 720px)" srcSet="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/short_w9rw7d.jpg" />
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1706108371/final/short_w9rw7d.jpg" alt="Computers" className="logo-corto" />
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