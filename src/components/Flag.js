import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  width: 4vw;
  min-width: 100px;
  margin: 0 auto 2rem;

  img {
    width: 100%;
    box-shadow: 0px 10px 22px -9px rgba(0,0,0,0.16);
  }
`;

const Default = styled.div`
  background: black;
  width: 5vw;
  min-width: 100px;
  height: 2.5vw;
`

class Flag extends Component {

  state = {
    country: [],
    isLoaded: false
  }

  componentDidMount(){
    let country = '';
    if(this.props.country === 'United States'){
      country = 'United States of America'
    } else {
      country = this.props.country
    }
    axios.get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
    .then(country => {
      this.setState({ country: country.data[0], isLoaded: true })
    })
  }

  render() {
    return (
      <Wrapper>
        {this.state.isLoaded
          ?
            <img alt={`${this.props.country} flag`} src={this.state.country.flag} />
          :
          <Default/>
        }
      </Wrapper>
    );
  }

}

export default Flag;
