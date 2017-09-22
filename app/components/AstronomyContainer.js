import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './../actions/fetch_data';

import AstronomyCard from 'AstronomyCard';

class AstronomyContainer extends Component {
  componentWillMount() {
    this.props.fetchData();
  }
  render() {
    const { astronomy } = this.state;
    return (
      <AstronomyCard data={astronomy}/>
    )
  }
}

function mapStateToProps(state) {
  return { astronomy: state.astronomy };
}

export default connect(mapStateToProps, { fetchData })(AstronomyContainer)