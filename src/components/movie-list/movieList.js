import React from "react";
import "./movieList.css";
import MovieListItem from "../movie-list-item/movieListItem";

const MovieList = ({ data, onDelete, onToggle }) => {
  return (
    <ul className="movie-list">
      {data?.map((item) => (
        <MovieListItem
          key={item.id}
          {...item}
          like={item.like}
          increase={item.increase}
          onDelete={() => onDelete(item.id)}
          onToggle={(e) => onToggle(item.id, e.currentTarget.getAttribute("data-toggle"))}
        />
      ))}
    </ul>
  );
};

export default MovieList;
