import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PetItem.css';

const PetItem = ({ imgSrc, name, id, match }) => (
  <NavLink to={`${match.url}/${id}`}>
    <div className="pets__preview">
      <img src={imgSrc} className="pets__image" alt="pet" />
      <h2 className="pets__name">{name}</h2>
    </div>
  </NavLink>
);

PetItem.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default PetItem;
