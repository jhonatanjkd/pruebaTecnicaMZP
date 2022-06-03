import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LayoutDefault = ({
      children
}) => (
      <main className="App">
            <Header />
            {children}
            <Footer />
      </main>
)

LayoutDefault.propTypes = {
      children: PropTypes.node.isRequired
}

export default LayoutDefault