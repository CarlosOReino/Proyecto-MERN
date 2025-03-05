import React from 'react';
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection';
import ForYou from '../../components/ForYou/ForYou';
import RecentlyPlayed from '../../components/RecentlyPlayed/RecentlyPlayed';
import TopCharts from '../../components/TopCharts/TopCharts';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <FeaturedSection />
      <ForYou />
      <RecentlyPlayed />
      <TopCharts />
    </div>
  );
};

export default Home;