import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ImageFilter from 'react-image-filter';

const Wrapper = styled.div`
  width: 10vw;
  height: 10vw;
  min-width: 200px;
  min-height: 200px;
  margin: 0 auto 4rem;

  .ImageFilter {
    width: 100%;
    height: 100%;
    box-shadow: 0px 10px 22px -9px rgba(0,0,0,0.16);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Default = styled.div`
  width: 100%;
  height: 100%;
  background: black;
`

export default class FighterImage extends Component {

  state = {
    image: '',
    isLoaded: false
  }

  componentDidMount(){
    axios.get(`http://api.duckduckgo.com/?q=${this.props.name}&format=json`)
    .then(res => {
      if(res.data.Image !== ""){
        this.setState({ image: res.data.Image , isLoaded: true })
      }
    })
  }

  render(){

    const filter = [
      1, 0, 0, 0, 0,
      1, 0, 0, 0, 0,
      1, 0, 0, 0, 0,
      0.5, -0.2, -0.8, -0.1, 1.1,
    ];

    return (
      <Wrapper>
        {this.state.isLoaded
          ?
            <ImageFilter
              image={this.state.image}
              filter={filter}
            />
          :
          <Default />
        }
      </Wrapper>
    )
  }
}
