import PropTypes from "prop-types"
import { useState } from 'react';
import Context from './context';

function AppProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [constants, setConstants] = useState({});

  const state = {
    language,
    setLanguage,
    constants,
    setConstants
  }

  return (
    <Context.Provider value={ state }>
      {children}
    </Context.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.any
}

export default AppProvider;