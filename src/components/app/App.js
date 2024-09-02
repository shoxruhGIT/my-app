import React from "react";
import AppFilter from "../app-filter/appFilter";
import AppInfo from "../app-info/appInfo";
import MovieList from "../movie-list/movieList";
import MoviesAddForm from "../movies-add-form/moviesAddForm";
import SearchPanel from "../search-panel/searchPanel";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Empire of usman",
          viewers: "911",
          increase: false,
          like: true,
          id: 1,
        },
        {
          name: "Ertugrul",
          viewers: "900",
          increase: true,
          like: false,
          id: 2,
        },
        { name: "Osman", viewers: "901", increase: false, like: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id !== id),
    }));
  };

  addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      increase: false,
      like: false,
    };
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  onToggle = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item.prop };
        } else {
          return item;
        }
      }),
    }));
  };

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }

    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((a) => a.like);
      case "mostViewers":
        return arr.filter((b) => b.viewers > 800);
      default:
        return arr;
    }
  };

  updateTermHandler = (term) => this.setState({ term });
  updateFilterHandler = (filter) => this.setState({ filter });

  render() {
    const { data, term, filter } = this.state;
    const allMovies = data.length;
    const increaseCount = data.filter((item) => item.increase).length;
    const visibleDate = this.filterHandler(this.searchHandler(data, term), filter);

    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo allMovies={allMovies} increaseCount={increaseCount} />
          <div className="search-panel">
            <SearchPanel updateTermHandler={this.updateTermHandler} />
            <AppFilter
              updateFilterHandler={this.updateFilterHandler}
              filter={filter}
            />
          </div>
          <MovieList
            onToggle={this.onToggle}
            data={visibleDate}
            onDelete={this.onDelete}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

// const App = () => {
//   const data = [
//     { name: "Empire of usman", viewers: "911", increase: false, id: 1 },
//     { name: "Ertugrul", viewers: "900", increase: true, id: 2 },
//     { name: "Osman", viewers: "901", increase: false, id: 3 },
//   ];

//   const onDelete = (id) => {
//     this.setState(({ data }) => ({
//       data: data.filter((c) => c.id !== id),
//     }));
//   };

//   const addForm = (e, item) => {
//     this.setState(({ data }) => ({
//       data: [...data, { ...item, id: uuidv4() }],
//     }));
//   };

//   return (
//     <div className="app font-monospace">
//       <div className="content">
//         <AppInfo />
//         <div className="search-panel">
//           <SearchPanel />
//           <AppFilter />
//         </div>
//         <MovieList data={data} onDelete={onDelete}/>
//         <MoviesAddForm addForm={addForm}/>
//       </div>
//     </div>
//   );
// };

export default App;
