import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import ImageFilter from "react-image-filter";
import noise from "../assets/img/noise-black.jpg";

const Wrapper = styled.div`
  width: 10vw;
  height: 10vw;
  min-width: 200px;
  min-height: 200px;
  margin: 0 auto 4rem;
  position: relative;
  background: rgb(51, 51, 51);

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${noise});
    background-size: cover;
    z-index: 1;
    mix-blend-mode: soft-light;
    opacity: 0.3;
  }

  .ImageFilter {
    width: 100%;
    height: 100%;
    box-shadow: 0px 10px 22px -9px rgba(0, 0, 0, 0.16);
  }
`;

const Default = styled.div`
  width: 100%;
  // height: 100%;
  background: black;
  box-shadow: 0px 10px 22px -9px rgba(0, 0, 0, 0.16);
`;

export default class FighterImage extends Component {
  state = {
    image: "",
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get(`https://api.duckduckgo.com/?q=${this.props.name}&format=json`)
      .then(res => {
        if (res.data.Image !== "") {
          this.setState({ image: res.data.Image, isLoaded: true });
        }
      });
  }

  render() {
    const filter = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1.6,
      2,
      0,
      -0.4
    ];

    return (
      <Wrapper>
        {this.state.isLoaded ? (
          <ImageFilter
            preserveAspectRatio="cover"
            image={this.state.image}
            filter={filter}
          />
        ) : (
          <Default />
        )}
      </Wrapper>
    );
  }
}
