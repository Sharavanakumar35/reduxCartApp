import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Navbar from './components/Navbar';
import Homepage from './components/Home';
import Footer from './components/Footer';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Navbar />
                <div className="container">
                    {/* <Cart /> */}
                    <Homepage />
                </div>
                <Footer></Footer>
            </div>
        </Provider>
    );
};

export default App;
