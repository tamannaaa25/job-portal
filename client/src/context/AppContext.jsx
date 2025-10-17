import { createContext, useEffect, useState } from "react";
import { JobData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

  const [searchFilter, setSearchFilter] = useState({
    title: '', 
    location: '',
  }) 

  const [isSearched, setIsSearched] = useState(false);

  const [jobs, setJobs] = useState([])

  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

  const fetchJobs = async () => {
    setJobs(JobData)
  }

  useEffect(() => {
    fetchJobs()
  },[])

  const value = {
    setSearchFilter, searchFilter, isSearched, setIsSearched, jobs, setJobs, showRecruiterLogin, setShowRecruiterLogin,
  }

  return <AppContext.Provider value={value}>
    {props.children}
  </AppContext.Provider>;

}