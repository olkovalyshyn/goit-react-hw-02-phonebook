import React, { Component } from "react";
import shortid from "shortid";

import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;

    onAdd({ id: shortid.generate(), name, number });

    // console.log(this.state);

    // this.props.onSubmit(this.state.name);

    // this.setState({ name: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            className={s.input}
            value={name}
            onChange={this.handleChange}
          ></input>
        </label>

        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            className={s.input}
            value={number}
            onChange={this.handleChange}
          ></input>
        </label>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
