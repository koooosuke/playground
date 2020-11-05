import React, { useContext } from 'react';
import Button from '../../atoms/Button';
import { Context, Status } from '../../../contexts/ui';

const SignInWithGoogle = () => {
  const { setApplicationState } = useContext(Context);
  return <Button onPress={() => setApplicationState(Status.AUTHORIZED)} icon="google" label="Sign in with Google" />;
};

export default SignInWithGoogle;
