import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

const initialState = {
  Highlight: false,
  Iternary: false,
  Prices: false,
};
const initialActiveLike = {
  like:false,
  dislike:false,
};
const initialTours = {
  Popular:false,
  Recent:false,
};

export const ContextProvider = ({ children }) => {
  const [activLike , setActiveLike ] = useState(initialActiveLike)
  const [isClicked, setIsClicked] = useState(initialState);
  const [ToursShow, setToursShow] = useState(initialTours);
  const [openSearch, setopenSearch] = useState(false);
  const [dataSearch, setdataSearch] = useState(null);
  const [fromDirction, setFromDirction] = useState(null);

  // to whow tour in single blog 
  const handleShowTours = (clicked) =>
  setToursShow({ ...initialTours, [clicked]: true });
  //  to set like 
  const handleClickAvtiveLike = (clicked) =>
  setActiveLike({ ...initialActiveLike, [clicked]: true });
  // set initialState in single tours
  const handleClick = (clicked) =>
  setIsClicked({ ...initialState, [clicked]: true });

  const [displayType, setDisplayType] = useState(0);
  const [desplaygrid, setdesplauGrid] = useState(false);

 

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        handleClick,
        setIsClicked,
        isClicked,
        initialState,
        displayType,
        setDisplayType,
        desplaygrid,
        setdesplauGrid,
        handleClickAvtiveLike,
        activLike,
        handleShowTours,
        ToursShow,
        setToursShow,
        openSearch, 
        setopenSearch,
        dataSearch, setdataSearch,
        fromDirction,
         setFromDirction,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);


//context api  here 
const apiContext = createContext();

export const ContextProviderApi = ({ children }) => {
  const [sectionFAQ ,setSectionFAQ] = useState(null)

  
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <apiContext.Provider
      value={{ sectionFAQ ,setSectionFAQ}}
    >
      
      {children}
    </apiContext.Provider>
  );
};
export const useStateContextApi = () => useContext(apiContext);

