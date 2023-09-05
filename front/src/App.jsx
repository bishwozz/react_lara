import {useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ShowProducts from "./components/Showproducts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateProduct from "./components/CreateProduct.jsx";
import EditProduct from "./components/EditProduct.jsx";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ShowProducts/>}/>
                    <Route path='/create' element={<CreateProduct/>}/>
                    <Route path='/edit/product/:id' element={<EditProduct/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
