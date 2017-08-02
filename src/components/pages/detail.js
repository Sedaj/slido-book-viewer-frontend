import React from "react";
import { connect } from "react-redux";
import { loadBookDetails, removeBook } from "../../actions/detail";
import { Link } from "react-router-dom";

class DetailComponent extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchBookDetail(id);
  }

  componentWillReceiveProps(newProps) {
    const id = newProps.match.params.id;
    if (id !== this.props.match.params.id) {
      this.fetchBookDetail(id);
    }
  }

  fetchBookDetail(id) {
    this.props.loadBookDetails(id);
  }

  handleRemove(id) {
    if (confirm("Are you sure you want to delete this book?")) {
      this.props.history.push("/");
      this.props.removeBook(id);
    }
  }

  render() {
    let { book_details, authors } = this.props;

    return (
      <div className="book-detail">
        <h2>{book_details.title}</h2>
        <p className="book-detail__description">
          {book_details.description}
        </p>
        <div className="book-detail__author">
          {authors.map((author, i) =>
            <div className="book-detail__author--single" key={i}>
              {book_details.authors.indexOf(author.id) !== -1 && author.name}
            </div>
          )}
        </div>
        <div className="book-detail__actions">
          <div
            className="book-detail__actions--single"
            onClick={() => this.handleRemove(book_details.id)}
          >
            Delete
          </div>
          <div className="book-detail__actions--single">
            <Link to={"/edit/" + book_details.id}>
              Edit
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      book_details: state.detailReducer.book_details,
      authors: state.authorReducer.authors
    };
  },
  dispatch => {
    return {
      loadBookDetails: id => dispatch(loadBookDetails(id)),
      removeBook: id => dispatch(removeBook(id))
    };
  }
)(DetailComponent);
