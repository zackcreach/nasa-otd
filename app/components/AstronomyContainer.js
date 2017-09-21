import React, { Component } from 'react';
import axios from 'axios';

import AstronomyCard from 'AstronomyCard';

export default class AstronomyContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      astronomy: []
    }
  }
  componentDidMount() {
    const API_KEY = 'NRXIFpWntc6t9iwr2Mz30m47jiDx9TwaBY2bWmsV';
    const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=';

    axios.get(END_POINT+API_KEY)
      .then(res => {
        this.setState({
          astronomy: res.data
        })
        console.log(this.state.astronomy);
      })
      .catch(err => {
        console.log(err, 'failed to fetch data from NASA');
      });
  }
  render() {
    const { astronomy } = this.state;
    return (
      <AstronomyCard data={astronomy}/>
    )
  }
}
