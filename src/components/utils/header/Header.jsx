import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {MdLogout} from 'react-icons/md'
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { GlobalState } from "../../../GlobalState";
import { useTranslation } from 'react-i18next';

import '../scss/header.scss';
import axios from "axios";
import LanguageSwitcher from "../../LanguageSwitcher";

const Header = () => {
    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged;
    const userDetail = state.userAPI.detail;
    const [cart] = state.userAPI.cart;
    const [cartCount, setCartCount] = useState(0);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        setCartCount(count);
    }, [cart]);

    const logoutUser = async () => {
        await axios.get('http://localhost:5000/user/logout');
        localStorage.removeItem("accessToken")
        // window.location.href = '/';
        window.location.reload();
    };

    const handleSearch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/search?key=${searchKeyword}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const LogoutRouter = () => {
        return (
          <>
            <div className="header-right">
                <Link target="_parent" to='/myInfo' className="user-sign">
                    <label>{userDetail[0].name}</label>
                    <div className="my-account">
                    {t('account')} 
                    </div>
                </Link>
                <Link to="/" onClick={logoutUser}>
                    <MdLogout/>
                </Link>
                <div className="header-cart">
                    <Link target="_parent" to="/order-summary">
                        <AiOutlineShoppingCart />
                        <span className="header-cart-count">{cartCount}</span>
                    </Link>
                </div>
                <LanguageSwitcher/>
            </div>
          </>
            
        )
    }

    return (
      <>
        <header>
          <div className="header-container">
            <div className="header__logo header-item">
              <Link target="_parent" to="/">
                <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1705335679/final/OIP_p88m0j.jpg" alt="logo" width={30} height={30} />
              </Link>
              <label>
              {t('labe-intro')}
              </label>
            </div>
            <div className="header-search header-item">
              <input 
                type="text" 
                name="search" 
                placeholder={t('labe-find-product')} 
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}/>
                {searchResults.length > 0 && (
                  <div className="search-results">
                    {searchResults.map((product) => (
                      <Link target="_parent" key={product._id} to={`/detail/${product._id}`}>
                        <div className="result-item">
                          <p>{product.title}</p>
                          <img src={product.images.url} alt={"image-product"} width={30}/>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              <button onClick={handleSearch} className="search-btn"><AiOutlineSearch/></button>
            </div>
            
            {isLogged ? (
              LogoutRouter()
            ) : (
              <div className="header-right header-item">
                <Link target="_parent" to="/sign-in" className="user-sign">
                  <div className="header-right-user">
                    <AiOutlineUser className="user-icon"/>
                    <div className="header-right-user_detail">
                      <span>{t('labe-signIn')} / {t('labe-signUp')}</span>
                      <span>{t('account')} <RiArrowDownSLine /></span>
                    </div>
                  </div>
                </Link>
                <div className="header-cart">
                  <Link target="_parent" to="/order-summary">
                    <AiOutlineShoppingCart />
                    <span className="header-cart-count">0</span>
                  </Link>
                </div>
                <LanguageSwitcher/>
              </div>
            )}
          </div>
        </header>
      </>
    );
}

export default Header;
