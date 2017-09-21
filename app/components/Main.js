import React, {Component} from 'react';
import 'styles/styles';
import test from 'images/test';

import AstronomyContainer from 'AstronomyContainer';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <AstronomyContainer />
    )
  }
};
