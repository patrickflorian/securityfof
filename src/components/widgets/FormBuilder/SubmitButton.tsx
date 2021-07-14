import React from 'react';
import {connect} from 'react-redux';
import {submit} from 'redux-form';

import ButtonComponent from '../Button/Button';

const RemoteSubmitButton = (props) => {
  const {dispatch, formName, children} = props
  return (
    <ButtonComponent
      {...props}
      >
      {children}
    </ButtonComponent>
  );
};

export default connect()(RemoteSubmitButton);
