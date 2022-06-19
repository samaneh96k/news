import { createContext } from "react";

export const Context = createContext({
    GroupList: [],
    PageList: [],
    setSearch: () => {},  
    search: () => {},
    visit: () => {},
     filteredCourses: [],
     validator:[],
       
  
});