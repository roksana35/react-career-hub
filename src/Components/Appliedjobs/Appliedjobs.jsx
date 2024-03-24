import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobAppication } from "../../Utlity/Localstorage";


const Appliedjobs = () => {
    const jobs =useLoaderData()
    const [appliedJobs,setAppliedjobs]=useState([]);
    const [displyjobs,setDisplyjobs]= useState([]);
    useEffect(()=>{
        const storeIds = getStoreJobAppication();
        if(jobs.length){
            // const jobApplied =jobs.filter(job => storeIds.includes(job.id))
            const jobApplied=[];
            for(const id of storeIds){
                const job = jobs.find(job => job.id ===id);
                if(job){
                    jobApplied.push(job)
                }
            }
            setAppliedjobs(jobApplied);
            displyjobs(jobApplied);
        }
    },[])
    return (
        <div>
            <h2>applied jobs:{appliedJobs.length}</h2>
            <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>All</a></li>
    <li><a>Remote</a></li>
    <li><a>Outsite</a></li>
  </ul>
</div>
        {
            displyjobs.map(job => <li key={job.id} >
                <span>{job.job_title} {job.company_name} {job.remote_or_onsite}</span>
            </li>)
              

        }
        </div>
    );
};

export default Appliedjobs;