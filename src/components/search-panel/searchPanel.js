import React from "react";
import "./searchPanel.css";

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  updateTermHandle = (e)=> {
    const term = e.target.value.toLowerCase()
    this.setState({term})
    this.props.updateTermHandler(term)
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Kinolarni qidirish"
        onChange={this.updateTermHandle}
      />
    );
  }
}

// const SearchPanel = (props) => {

//   const {term, updateTermHandler} = props

//   return <input type="text" className="form-control search-input" placeholder="Kinolarni qidirish" />
// };

export default SearchPanel;
