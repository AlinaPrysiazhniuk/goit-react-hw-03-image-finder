import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    imageName: '',
    // loading: false,
  };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=34983998-155dfb76bac09cdf48f99cd2f&image_type=photo&orientation=horizontal&per_page=12'
  //   )
  //     .then(res => res.json())
  //     .then(image => this.setState({ image }))
  //     .finally(image => this.setState({ loading: false }));
  // }

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div>
        sasas
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* {this.state.loading && <h1>Loading...</h1>} */}
        {/* {this.state.image && <div>{this.state.image}</div>} */}
      </div>
    );
  }
}
