import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <h2>Oops!!</h2>
            <p>This is Not Found</p>
            <Link to="/"><button className="bg-slate-200 p-2 rounded-lg">Go back home</button></Link>
        </div>
    );
};

export default Errorpage;