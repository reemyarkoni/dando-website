import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Router from "../Router/Router";
import { BrowserRouter } from 'react-router-dom';
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<Header/>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default Layout;
