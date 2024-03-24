import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApply } from "../../Utlity/Localstorage";


const Jobdetails = () => {
    const jobs=useLoaderData();
    const {id}=useParams();
    const job = jobs.find(job =>job.id ===parseInt(id))
    console.log(job)
    const handleApply=()=>{
        saveJobApply(parseInt(id))
        toast('you have applied successfully');
    }
    return (
        <div >
            <div className="grid md:grid-cols-4 gap-8 ">
            <div className="border border-blue-600 col-span-3 p-3 space-y-3">
                <p><span className="font-bold">Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>

                <p><span className="font-bold">Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
                <h3 className="font-bold">Education Requirements:</h3>
                <p>Bachelor degree to complete any reputational university.</p>
                <h3 className="font-bold">Experience:</h3>
                <p>2-3 Years in this field.</p>
            </div>
            <div className="border col-span-1 border-blue-600 p-2 space-y-3">
                <h2 className="font-bold">Job Details</h2>
                <hr />
                <h4><span className="font-bold">Salary:</span>
                {job.salary}</h4>

                <h4><span className="font-bold">Job Title:</span>
                {job.job_title}</h4>
                <h2 className="font-bold">Contact Information</h2>
                <hr />
                <h4><span className="font-bold">Phone:</span>
                {job.contact_information.phone}</h4>
                <h4><span className="font-bold">Email:</span>
                {job.contact_information.email}</h4>
                <h4><span className="font-bold">Address:</span>
                {job.contact_information.address}</h4>
                <button onClick={handleApply} className="btn btn-primary w-full">Apply Now</button>
                
            </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Jobdetails;