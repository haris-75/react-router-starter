import React from 'react';
import { useParams } from 'react-router-dom';

const Session = () => {
  let { testcenterId } = useParams();
  return (
    <>
      <h3>Session Page for Test Center: {testcenterId}</h3>
    </>
  );
};

export default Session;
