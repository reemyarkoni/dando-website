import { Route, Routes } from "react-router-dom";
import Familiarity from "../../HomeArea/Familiarity/Familiarity";
import Home from "../../HomeArea/Home/Home";
import ShortCourses from "../../HomeArea/ShortCourses/ShortCourses";
import SummerCourses from "../../HomeArea/SummerCourses/SummerCourses";
import YearlyCourses from "../../HomeArea/YearlyCourses/YearlyCourses";
import "./Router.css";

function Router(): JSX.Element {
    return (
        <div className="Router">
			<Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Familiarity" element={<Familiarity/>}/>
                <Route path="/ShortCourses" element={<ShortCourses/>}/>
                <Route path="/SummerCourses" element={<SummerCourses/>}/>
                <Route path="/YearlyCourses" element={<YearlyCourses/>}/>
            </Routes>
        </div>
    );
}

export default Router;