import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { device } from "../utils/devices";

const Wrapper = styled.div``;

const Input = styled.input`
  border: 0;
  outline: 0;
  font-size: 20px;
  padding: 1rem;
  background: rgb(51, 51, 51);
  color: white;
  box-sizing: border-box;
  font-family: "FG";
  width: 100%;
  appearance: none;
  border-radius: 0;

  @media ${device.laptop} {
    font-size: 24px;
    width: auto;
  }

  &::-webkit-input-placeholder {
    color: rgb(51, 51, 51);
  }

  &::-moz-input-placeholder {
    color: rgb(51, 51, 51);
  }
`;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.search = React.createRef();
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.search.current.blur();
    this.props.history.push(`/fighter/${this.state.value}`);
    this.setState({ value: "" });
  };

  render() {
    return (
      <Wrapper>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <Input
            type="search"
            ref={this.search}
            placeholder="Search a fighter"
            onChange={e => {
              this.handleChange(e);
            }}
            value={this.state.value}
          />
        </form>
      </Wrapper>
    );
  }
}

export default withRouter(Search);
