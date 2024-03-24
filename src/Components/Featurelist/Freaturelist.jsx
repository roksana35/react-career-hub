import { useEffect, useState } from "react";
import Jobs from "../Job/Jobs";


const Freaturelist = () => {
    const [jobs,setJobs]=useState([]);
    const [datalength,setDatalength]=useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res =>res.json())
        .then(data =>setJobs(data))
    },[])
    return (
        <div className="space-y-3">
            <h2 className="text-4xl text-center">Feature jobs:{jobs.length}</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eaque.</p>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,datalength).map(job => <Jobs key={job.id} job={job}></Jobs>)
                }
            </div>
            <div className={datalength ===jobs.length && 'hidden'}>
                <button onClick={()=>setDatalength(jobs.length)} className="btn-primary btn mx-auto">Show All Data</button>
            </div>
        </div>
    );
};

export default Freaturelist;