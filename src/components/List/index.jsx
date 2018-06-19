import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

import ListItem from './components/ListItem';

const List = ({ data }) => (
  <Table striped bordered responsive>
    <tbody>
      {data.map((item, index) => <ListItem key={index} item={item} />)}
    </tbody>
  </Table>
);

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })),
};

List.defaultProps = {
  data: [],
};

export default List;
