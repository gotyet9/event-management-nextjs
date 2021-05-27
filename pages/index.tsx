import React from 'react'
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

const Home: React.FC = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <EventList events={featuredEvents} />
  );
}
export default Home;