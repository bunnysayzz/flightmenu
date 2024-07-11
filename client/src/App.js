import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import HomePage from './pages/HomePage';
import Login from './components/Login';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    {/* Add other routes here */}
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;