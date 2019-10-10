import React from 'react';
import PropTypes from 'prop-types';
import './PetInfo.css';

const PetInfo = ({
  age,
  name,
  breed,
  gender,
  color,
  image,
  description,
  handleGoBack,
}) => (
  <div className="pet">
    <button className="pet__button" type="button" onClick={handleGoBack}>
      &#8678; Return
    </button>

    <h1 className="pet__title">All about {name}</h1>
    <div className="pet__block">
      <img src={image} alt="pet" className="pet__photo" />
      <div className="pet__info">
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Color: {color}</p>
        <p>Breed: {breed}</p>
      </div>
    </div>

    <p className="pet__description">{description}</p>
  </div>
);

PetInfo.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleGoBack: PropTypes.func.isRequired,
};

export default PetInfo;
