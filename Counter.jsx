import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <Typography>count: {count}</Typography>
      <Button variant='contained' color='success' onClick={handleIncrement}>+</Button>&nbsp;&nbsp;
      <Button variant='contained' color='error' onClick={handleDecrement}>-</Button>&nbsp;&nbsp;
    </div>
  );
};

export default Counter;
