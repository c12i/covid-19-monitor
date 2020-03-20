import React from 'react';

import { Footer } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { FooterText } from './footer.styles';

const FooterComponent = () => {
  const date = new Date()
  const year = date.getFullYear();
  return (
    <Footer style={{ padding: '20px' }}>
      <FooterText>Collins Muriuki &copy; {year}</FooterText>
    </Footer>
  )
};

export default FooterComponent;