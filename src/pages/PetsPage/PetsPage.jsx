import React, { Component } from 'react';
import PropTypes from 'prop-types';
import petsList from '../../db/pets.json';
import './PetsPage.css';
import PetItem from '../../components/PetItem/PetItem';

class PetsPage extends Component {
  state = {
    pets: [],
  };

  componentDidMount() {
    this.setState({ pets: petsList });
  }

  render() {
    const { pets } = this.state;
    const { match } = this.props;
    return (
      <>
        <h2 className="pets__title">Available pets</h2>
        <div className="pets">
          {pets.map(pet => (
            <PetItem
              key={pet.id}
              name={pet.name}
              imgSrc={pet.image}
              id={pet.id}
              match={match}
            />
          ))}
        </div>
      </>
    );
  }
}

PetsPage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default PetsPage;
