import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchData from './../actions/fetch_data';

import AstronomyCard from 'AstronomyCard';

class AstronomyContainer extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <AstronomyCard data={this.props.astronomy}/>
    )
  }
}

function mapStateToProps(state) {
  return { astronomy: state.astronomy };
}

export default connect(mapStateToProps, { fetchData })(AstronomyContainer)