import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";

const Single = ({job}) => {
    const {logo,job_title,company_name,location,remote_or_onsite,
      job_type,
      salary,
      job_description
    }=job;
     
    return (
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src= {logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {job_title}
      <div className="badge badge-secondary">googler</div>
    </h2>
    <p>{company_name}.</p>

 

    <div className="card-actions justify">
      <div className="badge badge-outline">Remote.</div> 
      <div className="badge badge-outline">Full time.</div>
    </div>
    <div className="flex ">
    <CiLocationOn className="text-2xl"></CiLocationOn> 
    <p>{location}</p>
    <div className="flex">
      <FaDollarSign className="text-2xl"></FaDollarSign>
      <p>{salary}</p>
    </div>
    </div>
    <div>
      <button class="btn btn-success ">view Details                    </button></div>
  </div>
</div>
    );
};

export default Single;