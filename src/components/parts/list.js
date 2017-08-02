import React from "react";
import { connect } from "react-redux";
import { loadBookList } from "../../actions/list";
import { Link } from "react-router-dom";

class List extends React.Component {
  componentDidMount() {
    this.props.loadBookList();
  }

  render() {
    return (
      <div className="book-list">
        <ul className="book-list__list">
          {this.props.list.map((book, i) =>
            <Link
              to={"/detail/" + book.id}
              className="book-list__single-item"
              key={i}
            >
              <li>
                {book.title}
              </li>
            </Link>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      list: state.listReducer.list
    };
  },
  dispatch => {
    return {
      loadBookList: () => dispatch(loadBookList())
    };
  }
)(List);
