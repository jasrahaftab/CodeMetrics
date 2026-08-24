import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Heropage() {
  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <Hero />
    </div>
  );
}

const styles = {
  pageContainer: {
    // maxWidth: '1280px',
    margin: '7px 12px 2px 12px',
    padding: '0 12px 60px 12px'
  }
};
