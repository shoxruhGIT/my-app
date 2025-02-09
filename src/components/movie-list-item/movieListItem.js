import React from "react";
import "./movieListItem.css";

// class MovieListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { increase: false, like: false };
//   }

//   onIncrease = () => {
//     this.setState(({ increase }) => ({
//       increase: !increase,
//     }));
//   };
//   onLike = () => {
//     this.setState(({ like }) => ({
//       like: !like,
//     }));
//   };
//   render() {
//     const { name, viewers, onDelete, onToggle, like, increase } =
//       this.props;
//     return (
//       <li
//         className={`list-group-item d-flex justify-content-between ${
//           increase && "increase"
//         } ${like && "like"}`}
//       >
//         <span className="list-group-item-label" onClick={onToggle} data-toggle="like">
//           {name}
//         </span>
//         <input
//           type="text"
//           className="list-group-item-input"
//           defaultValue={viewers}
//         />
//         <div className="d-flex justify-content-center align-items-center">
//           <button
//             type="button"
//             className="btn-cookie btn-sm"
//             onClick={onToggle}
//             data-toggle="increase"
//           >
//             <i className="fas fa-cookie"></i>
//           </button>
//           <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
//             <i className="fas fa-trash"></i>
//           </button>
//           <i className="fas fa-star"></i>
//         </div>
//       </li>
//     );
//   }
// }

const MovieListItem = (props) => {
  const { name, viewers, onDelete, onToggle, like, increase } = props
  return (
    <li
    className={`list-group-item d-flex justify-content-between ${
      increase && "increase"
    } ${like && "like"}`}
  >
    <span className="list-group-item-label" onClick={onToggle} data-toggle="like">
      {name}
    </span>
    <input
      type="text"
      className="list-group-item-input"
      defaultValue={viewers}
    />
    <div className="d-flex justify-content-center align-items-center">
      <button
        type="button"
        className="btn-cookie btn-sm"
        onClick={onToggle}
        data-toggle="increase"
      >
        <i className="fas fa-cookie"></i>
      </button>
      <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
        <i className="fas fa-trash"></i>
      </button>
      <i className="fas fa-star"></i>
    </div>
  </li>
  );
};

export default MovieListItem;
