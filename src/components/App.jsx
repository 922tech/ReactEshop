
import Home from './HomePage';
import {Blog} from './blog';
 import Appbar  from "./Appbar";
import Footer from './Footer';

import Products from "./products";

import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import Loading from './loading/Loading.jsx';
 import font from './../Shabnam.ttf'
import Product from "./Product/Product";
import QuantityInput from "./baseComponents/Counter";

const App = () => {
    return (
        <div style= {{maxWidth: '100%', minWidth: '100%'}}>
            <BrowserRouter>
                <Appbar />
                {/* <div>
                    <Loading></Loading>
                </div> */}
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/journal/" element={<Blog />} />
                        <Route exact path="/products" element={<Products />} />
                        <Route path="/products/:product" element={<Product />} />
                        <Route path="/about-us" element={<Home />} />
                        <Route path="/contact-us" element={<Home />} />
                        <Route path="/test" element={< QuantityInput/>} />
                    </Routes>
            </BrowserRouter> 
            
            <Footer></Footer>
        </div>
    )
};

export default App;
