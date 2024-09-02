import React from "react";
import "./moviesAddForm.css";
// const MoviesAddForm = () => {
//   return (
//     <div className='movie-add-form'>
//         <h3>Yangi kino qo'shish</h3>
//         <div className="add-form d-flex">
//         <input type="text" className='form-control new-post-label' placeholder='Qanday kino?' />
//         <input type="number" className='form-control new-post-label' placeholder="Necha marotaba ko'rilgan?" />
//         <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
//         </div>
//     </div>
//   )
// }
class MoviesAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      viewers: "",
    };
  }

  changeHalderInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addForm({ name: this.state.name, viewers: this.state.viewers });
    this.setState({
      name: "",
      viewers: "",
    });
  };

  render() {
    const { name, viewers } = this.state;
    return (
      <div className="movie-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex" onSubmit={this.addFormHandler}>
          <input
            type="text"
            name="name"
            className="form-control new-post-label"
            placeholder="Qanday kino?"
            onChange={this.changeHalderInput}
            value={name}
          />
          <input
            type="text"
            name="viewers"
            className="form-control new-post-label"
            placeholder="Necha marotaba ko'rilgan?"
            onChange={this.changeHalderInput}
            value={viewers}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;
