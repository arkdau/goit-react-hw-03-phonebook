import { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./Contacts.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    Number: "",
  };

  notify = (name) => toast.warning(`${name} is already in contacts !`);

  handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    this.setState({
      name: name,
      number: number,
    });

    if (this.props.addItem(name, number)) {
      this.notify(name);
    }

    form.reset();
  };

  render() {
    return (
      <>
        <form className={css.formBox} onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <div>
          <ToastContainer />
        </div>
      </>
    );
  }
}







export default ContactForm;
