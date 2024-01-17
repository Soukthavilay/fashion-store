import ProductSpecsTable from './ProductSpecsTable';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';

function ProductDetailBody(detailProduct) {
  const product = detailProduct.detailProduct;
  const { t } = useTranslation();

  return (
    <>
      <div className="detail-body">
        <div className="detail-body-left">
          <div className="product-detail-content">
            {parse(`${product.description}`)}
          </div>
        </div>
        <div className="detail-body-right">
          <h3 className="product-specs-title">
            <b>{t('label-specifications')}</b>
          </h3>
          <ProductSpecsTable/>
        </div>
      </div>
    </>
  );
}

export default ProductDetailBody