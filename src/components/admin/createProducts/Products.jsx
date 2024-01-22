import ProductHeader from '../headerAdmin/ProductHeader';
import Popup from 'reactjs-popup';
import ProductRow from './ProductRow';
import { GlobalState } from '../../../GlobalState';
import '../scss/createProduct.scss'
import { useContext, useState } from 'react';
import axios from 'axios';
import SuccessPopup from '../../utils/NotFound/SuccessPopup';
const initialState = {
    _id: '',
    title: '',
    description: "",
    band: '',
    category: '',
    price: 20,
    amount: 30,
}

const Products = () => {
    const state = useContext(GlobalState);
    const [isAdmin] = state.userAPI.isAdmin;
    const [product, setProduct] = useState(initialState);
    const [images, setImages] = useState(false);
    const [callback, setCallback] = state.productsAPI.callback;
    const [category] = state.categoriesAPI.categories;
    const [bands] = state.BandAPI.bands;
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [productShow] = state.productsAPI.products;
    const [error, setError] = useState("");
    const [alert,setAlert] = useState("");

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

    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            if (!isAdmin) return setError('You are not admin');
            const file = e.target.files[0];
            if (!file) return setError('The file is not correct.');
            if (file.size > 1024 * 1024) return setError('Image is large. Please try again');
            if (file.type !== 'image/jpeg' && file.type !== 'image/png') return setError('The file is not correct.Please check again ');
            let formData = new FormData();
            formData.append('file', file);
            const res = await axios.post('http://localhost:5000/api/upload', formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            });

            setImages(res.data);
        } catch (error) {
            console.log(error.response.data.msg);
        }
    }
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if(product.category === '' || product.band === ''){
            setError('Please select a category and band');
          } else {
            const result = {
              title: product.title,
              description: product.description,
              band: product.band,
              category: product.category,
              price: product.price,
          }
          await axios.post("http://localhost:5000/api/products", { ...result, images });
          setCallback(!callback);
          setError("");
          setAlert("Created Product Success");
          window.location.href = '/admin/createProduct';
          }
        } catch (error) {
            setError(error.response.data.msg);
        }
    }
    const handleSuccessPopupClose = () => {
      setError("");
      setAlert("");
    };
    return (
      <>
      {error && (<SuccessPopup successMessage={error} onClose={handleSuccessPopupClose} />)}
      {alert && (<SuccessPopup successMessage={alert} onClose={handleSuccessPopupClose} />)}
        <div className="app-content">
          <div className="app-content-header">
            <h1 className="app-content-headerText">Products</h1>
            <button className="mode-switch" title="SwitchTheme">
              <svg
                className="moon"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs></defs>
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            </button>
            <Popup
              trigger={
                <button className="app-content-headerButton button">
                  Add Product
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header"> Create Product </div>
                  <div className="content">
                    {" "}
                    <div className="uploadImg">
                      <input
                        type="file"
                        name="file"
                        id="file_up"
                        onChange={handleUpload}
                      />
                      <label htmlFor="file_up" className="upload-img-btn">
                        Upload files
                      </label>
                      <div id="" className="no-line"></div>
                      <div id="file_img">
                        <img src={images ? images.url : ""} alt="" />
                        <span>X</span>
                      </div>
                    </div>
                    <form className="createProduct" onSubmit={handleSubmit}>
                      <div className="row">
                        <input
                          type="text"
                          name="title"
                          id="title"
                          required
                          value={product.title}
                          onChange={handleChangeInput}
                          placeholder="Title"
                        />
                      </div>
                      <div className="row">
                        <textarea
                          type="text"
                          name="description"
                          id="description"
                          required
                          value={product.description}
                          rows="10"
                          onChange={handleChangeInput}
                          placeholder="Description"
                        />
                      </div>
                      <div className="row">
                        <select name="band" value={product.band} onChange={handleChangeInput}>
                          <option>Band</option>
                          {bands.map((band)=>{
                            return <option value={band._id} key={band._id}>{band.name}</option>
                          })}
                        </select>
                      </div>
                      <div className="row">
                        <select
                          name="category"
                          value={product.category}
                          onChange={handleChangeInput}
                        >
                          <option>Categories</option>
                          {category.map((item) => {
                            return (
                              <option value={item._id} key={item._id}>
                                {item.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="row">
                        <input
                          type="text"
                          name="price"
                          id="price"
                          required
                          value={product.price}
                          onChange={handleChangeInput}
                          placeholder="Price"
                        />
                      </div>
                      <div className="feature-product">
                        <fieldset className='feature-colors'>
                            <legend>Choose your colors:</legend>
                            <div>
                                <label>
                                    <input type="checkbox" id="Red" name="color" value="#D04848" />
                                    Red
                                </label>
                            </div>
                        </fieldset>
                        <div className='feature-sizes'>
                            <fieldset className='feature-colors'>
                                <legend>Choose your sizes:</legend>
                                <div>
                                    <label>
                                        <input type="checkbox" id="sizeS" name="size" value="S" />
                                        S
                                    </label>
                                    <div className='size-properties'>
                                        - Quantity:
                                        <input type="number" name="quantityS" />
                                        Price:
                                        <input type="number" name="priceS" />
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                      <button
                        type="submit"
                        className="btn btn--animated btn--primary--blue btn--border--blue"
                      >
                        Create
                      </button>
                    </form>
                    <div className="actions">
                      <button
                        className="button btn btn--animated btn--primary--white btn--border--blue"
                        onClick={() => {
                          close();
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Popup>
          </div>
          <div className="app-content-actions">
            <input type="text" 
            className="search-bar"
            placeholder="SEARCH HERE"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }} />
            {searchResults.length > 0 && (
            <div className='product-area-wrapper tableView'>
              {searchResults.map((productShow) => (
                <ProductRow key={productShow._id} productShow={productShow}/>
              ))}
            </div>
          )}
            <div className="app-content-actions-wrapper">
              <div className="filter-button-wrapper">
              </div>
            </div>
          </div>
          <div className="product-area-wrapper tableView">
            <ProductHeader />
            {productShow.map((product) => {
              return <ProductRow key={product._id} productShow={product} />;
            })}
          </div>
        </div>
      </>
    );
}

export default Products