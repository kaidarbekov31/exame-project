// App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TanksContextProvider from "./context/TanksContext";
import Routing from "./Routing";
import CommentContextProvider from "./context/commentsContext";
import CartContextProvider from "./context/cartContext";
import FavouriteContextProvider from "./context/favouritesContext";
import LikesContextProvider from "./context/likesContext";
import { AuthProvider } from "./context/AuthContent";

const App = () => {
  return (
    <div>
      <TanksContextProvider>
      <CommentContextProvider>
          <CartContextProvider>
            <FavouriteContextProvider>
              <LikesContextProvider>
                <BrowserRouter>
                  <AuthProvider>
                    <Header />
                    <Routing />
                    <Footer />
                    <ToastContainer />
                  </AuthProvider>
                </BrowserRouter>
              </LikesContextProvider>
            </FavouriteContextProvider>
          </CartContextProvider>
          </CommentContextProvider>
      </TanksContextProvider>
    </div>
  );
};

export default App;