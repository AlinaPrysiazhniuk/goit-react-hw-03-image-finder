import { Component } from 'react';

export class App extends Component {
  state = {
    image: null,
  };

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=34983998-155dfb76bac09cdf48f99cd2f&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(image => this.setState({ image }));
  }

  render() {
    return <div>sasas</div>;
  }
}
