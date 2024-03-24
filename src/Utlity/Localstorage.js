const getStoreJobAppication=()=>{
    const storeJobApplication = localStorage.getItem('Job_Application');
    if(storeJobApplication){
        return JSON.parse(storeJobApplication)
    }
    return [];
}

const saveJobApply =id=>{
    const storeJobApplications=getStoreJobAppication();
    const exist=storeJobApplications.find(jobId => jobId ===id);
    if(!exist){
        storeJobApplications.push(id);
        localStorage.setItem('Job_Application',JSON.stringify(storeJobApplications))
    }

}
export {saveJobApply,getStoreJobAppication}