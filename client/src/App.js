import React, { useState } from 'react';
import {Route} from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    const saved = savedList.find(element => element.title === movie.title)
    if(!saved) {
      setSavedList( [...savedList, movie] );
    }
  };

  return (
    <div>
      <SavedList list={savedList} />
      { /* <div>Replace this Div with your Routes</div> */}
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" render={(props) => {
        return <Movie {...props} addToSavedList={addToSavedList} savedList={savedList} />
      }} />
    </div>
  );
};

export default App;
