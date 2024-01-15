import Band from '../../utils/band/Band'
import CategoryItem from '../../utils/categoryItem/CategoryItem'
import BestSeller from '../../utils/productItem/BestSeller'
import Recommand from '../../utils/productItem/Recommand'
import RecommenderUser from '../../utils/productItem/RecommenderUser'
import '../../utils/scss/banner.scss'


const Banner = () => {
  return (
    <>
        <div className="banner">
            <div className='img-slide'>
                <div className='wrapper'>
                    <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705301546/final/main_banner_fashion_store-30a34858367c682bd975733dcac39ae36eba20e8723637f4e50e7e4a1288da30_fvkzvm.jpg" alt="banner" />
                </div>
            </div>
        </div>
        <Band/>
        <CategoryItem/>
        {/* <RecommenderUser/> */}
        <Recommand/>
        <BestSeller/>
    </>
    
  )
}

export default Banner