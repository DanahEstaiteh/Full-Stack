import { Paper } from '@material-ui/core';
import React from 'react';

const EmptyCart = () => {
  return (
    <Paper
      style={{
        height: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div style={{ backgroundColor: '#C8C8C8', color: '#5E5E5E' }}>
        <div style={{ display: 'inline', fontSize: '26px' }}>EmptyList</div>
        <p style={{ display: 'inline', fontSize: '14px' }}>(select product)</p>
      </div>
    </Paper>
  );
};

export default EmptyCart;
