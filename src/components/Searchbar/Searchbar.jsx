import React from 'react';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageName.trim() === '') {
      alert('Введіть дані для пошуку');
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            name="imageName"
            value={this.state.imageName}
            onChange={this.handleNameChange}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
