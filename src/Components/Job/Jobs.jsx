import { MdLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Jobs = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-5 py-2 font-extrabold border rounded border-purple-400 text-purple-400 mr-4 ">{remote_or_onsite}</button>
        <button className="px-5 py-2 font-extrabold border rounded border-purple-400 text-purple-400 mr-4 ">{job_type}</button>
    </div>
    <div className="flex gap-3">
        <h2 className="flex gap-1 items-center"><MdLocationOn className="text-2xl"></MdLocationOn>{location}</h2>
        <h2 className="flex gap-1 items-center"><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>{salary}</h2>
    </div>
    <div className="card-actions ">
      <Link to={`/job/${id}`}><button className="btn btn-primary">view details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Jobs;