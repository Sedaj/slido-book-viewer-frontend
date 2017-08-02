import {
  API_CALL_TYPE_LIST,
  API_CALL_TYPE_DETAILS,
  API_CALL_TYPE_REMOVE,
  API_CALL_TYPE_AUTHORS,
  API_CALL_TYPE_SUBMIT_BOOK,
  API_CALL_TYPE_SUBMIT_EDIT_BOOK
} from "../constants/constants";

function call(type, method, id = null, body = null) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/";

    switch (type) {
      case API_CALL_TYPE_LIST:
      case API_CALL_TYPE_SUBMIT_BOOK:
        url += "books";
        break;
      case API_CALL_TYPE_DETAILS:
      case API_CALL_TYPE_REMOVE:
      case API_CALL_TYPE_SUBMIT_EDIT_BOOK:
        url += "books/" + id;
        break;
      case API_CALL_TYPE_AUTHORS:
        url += "authors";
        break;
    }

    xhr.open(method, url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };

    if (body) {
      xhr.send(JSON.stringify(body));
    } else {
      xhr.send();
    }
  });
}

export default call;
