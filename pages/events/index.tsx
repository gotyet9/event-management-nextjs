import { useRouter } from 'next/router';
import React from 'react'
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';

const AllEvents: React.FC = () => {
  const router = useRouter();
  const events = getAllEvents();

  const handleSearchEvents = (year: string, month: string) => {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <div>
      <EventsSearch onSearch={handleSearchEvents} />
      <EventList {...{ events }} />
    </div>
  );
}
export default AllEvents;