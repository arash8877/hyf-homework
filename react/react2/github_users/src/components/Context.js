import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [inputText, setInputText] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
        setIsLoading(true); // set isLoading to true when fetching starts

      try {
        if (inputText === "") {
            setUsersList([]);
            setErrorMsg("");
            setIsLoading(false); // set isLoading to false when fetching is completed!
          return ;
        }

        const response = await fetch(
          `https://api.github.com/search/users?q=${inputText}`
        );
        
        if (!response.ok) {
            throw new Error("Failed to fetch data!");
          }

          

        const users = await response.json();
        setUsersList(users.items);
        setErrorMsg("");
        setIsLoading(false); // set isLoading to false when fetching is completed.
      } catch (err) {
        setErrorMsg("Error fetching data: " + err.message);
        setIsLoading(false); // set isLoading to false on error
      }
    };
    return () => {
      fetchUsers();
    };
  }, [inputText]);

  const value = {
    inputText,
    setInputText,
    usersList,
    errorMsg,
    isLoading
  };


  return <Context.Provider value={value}>
           {props.children}
         </Context.Provider>;
};
