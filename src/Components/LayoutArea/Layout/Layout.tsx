import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Router from "../Router/Router";
import "./Layout.css";
import Nav from "../Nav/Nav";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<Header/>
            <Nav/>
            <Router/>
            <Footer/>
        </div>
    );
}

export default Layout;
