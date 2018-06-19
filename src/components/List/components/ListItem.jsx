import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ item }) => (
  <tr>
    <td>{item.title}</td>
  </tr>
);

ListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default ListItem;
