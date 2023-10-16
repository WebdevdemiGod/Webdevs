import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

function LandingPage({ handleLogout }) {
    return (
    <div>
        
        <BrowserRouter>
            <button>
                <Link to="/first">Go to First Page</Link>
            </button>
            <button>
                <Link to="/second">Go to Second Page</Link>
            </button>
            <Routes>
                <Route path="/first" element={<FirstPage />} />
                <Route path="/second" element={<SecondPage />} />
            </Routes>
        </BrowserRouter>
        
    </div>
    );
}

export default LandingPage;
