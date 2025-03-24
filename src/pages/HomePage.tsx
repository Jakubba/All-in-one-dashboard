import React from 'react';
import Hero from '../components/Hero/Hero';
import { Stats } from '../components/Stats/Stats';
import { PossiSection } from '../components/PossiSection/PossiSection';
import { ReviewsSection } from '../components/ReviewsSection/ReviewsSection';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { Gallery } from '../components/Gallery/Gallery';
import { TextWithImage } from '../components/TextWithImage/TextWithImage';
import { Newsletter } from '../components/Newsletter/Newsletter';
import { Login } from '../components/Login/Login';

const statsData = [
  { number: 3800, text: 'USER ACTIVE' },
  { number: 230, text: 'TRUSTED COMPANIES' },
  { number: 3800, text: 'TRANSACTIONS' },
];
export const HomePage = () => {
  return (
    <div className="home-page">
      <Login />
      <Navbar />
      <Hero />
      <Stats stats={statsData} />
      <PossiSection />
      <ReviewsSection />
      <Gallery />
      <TextWithImage
        title="Test Title"
        description="This is a test description."
        buttonText="Start Now"
      />
      <Newsletter />
      <Footer />
    </div>
  );
};
