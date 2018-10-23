import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFighter } from '../actions/FighterActions';
import styled, { keyframes } from 'styled-components';
import Flag from '../components/Flag';
import FighterName from '../components/FighterName';
import FighterRecord from '../components/FighterRecord';
import FighterImage from '../components/FighterImage';
import BoutList from '../components/BoutList';

const Wrapper = styled.div`

`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    width: 7vw;
    height: 7vw;
    background: rgb(51,51,51);
    animation: ${rotate} 2s linear infinite;
  }
`

class Fighter extends Component {

  state = {
    isLoaded: false
  }

  componentDidMount(){
    const fighter = this.props.match.params.id
    this.props.fetchFighter(fighter)
    .then(() => {
      this.setState({ isLoaded: true })
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.match.params !== prevProps.match.params){
      this.setState({ isLoaded: false })
      const fighter = this.props.match.params.id
      this.props.fetchFighter(fighter)
      .then(() => {
        this.setState({ isLoaded: true })
      })
    }
  }

  render() {
    return (
      <Wrapper>
        {this.state.isLoaded
          ?
            <Fragment>
              <Flag country={this.props.fighter.nationality} />
              <FighterName name={this.props.fighter.name} nickname={this.props.fighter.nickname} />
              <FighterImage name={this.props.fighter.name} />
              <FighterRecord record={this.props.fighter.record} />
              <BoutList fights={this.props.fighter.fights} />
            </Fragment>
          :
          <Loader />
        }
      </Wrapper>
    );
  }

}

export default withRouter(connect((state, ownProps) => ({
  fighter: state.fighter
}), {fetchFighter})(Fighter));
