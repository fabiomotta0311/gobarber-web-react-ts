/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn></SignIn>
      <ToastContainer></ToastContainer>
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
