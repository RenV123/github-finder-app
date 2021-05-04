import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='bi bi-info-circle-fill mx-2' />
        {alert.message}
      </div>
    )
  );
};

export default Alert;
