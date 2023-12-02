import PropTypes from "prop-types";
import { Component } from "react";
import * as localStorage from "./../../storage";

class ContactList extends Component {

  componentDidUpdate() {
    localStorage.save("contacts", this.props.contacts);
  }

  render() {
    return (
      <>
        <ul>
          {this.props.contacts.map((item) => {
            return (
              <li key={item.id}>
                {item.name}: {item.number}
                <button
                  type="button"
                  onClick={() => this.props.removeItem(item.id)}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,

        number: PropTypes.string,
      }).isRequired,
    ),
    filter: PropTypes.string,
  }),
};

export default ContactList;
