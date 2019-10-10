import React, { Component } from 'react';
import PropTypes from 'prop-types';
import petsList from '../../db/pets.json';
import PetInfo from '../../components/PetInfo/PetInfo';
import './PetPage.css';

class PetPage extends Component {
  state = {
    pet: {},
  };

  componentDidMount() {
    const { match } = this.props;
    this.setState({
      pet: petsList.find(pet => pet.id === match.params.petId),
    });
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push('/pets');
  };

  render() {
    const { pet } = this.state;
    return (
      <PetInfo
        name={pet.name}
        age={pet.age}
        breed={pet.breed}
        gender={pet.gender}
        color={pet.color}
        image={pet.image}
        description={pet.description}
        handleGoBack={this.handleGoBack}
      />
    );
  }
}

PetPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default PetPage;
