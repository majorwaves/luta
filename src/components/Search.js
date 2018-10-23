import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { device } from '../utils/devices';

const Wrapper = styled.div`

`;

const Input = styled.input`
  border: 0;
  outline: 0;
  font-size: 20px;
  padding: 1.3rem 1rem 1rem;
  color: white;
  background: rgb(51,51,51);
  text-align: center;
  font-family: 'FG';
  width: 100%;
  appearance: none;
  border-radius: 0;

  @media ${device.laptop}{
    background: transparent;
    font-size: 24px;
    width: auto;
    padding: 1rem .25rem 1rem;
    border-bottom: 2px solid white;
  }

  &::-webkit-input-placeholder {
    color: white;
  }

  &::-moz-input-placeholder {
    color: white;
  }
`

class Search extends Component {

  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/fighter/${this.state.value}`)
    this.setState({value: ''})
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={(e) => { this.handleSubmit(e) }}>
          <Input type='search' ref='search' placeholder='Search a fighter' onChange={(e) => { this.handleChange(e) }} value={this.state.value} />
        </form>
      </Wrapper>
    );
  }

}

export default withRouter(Search);
