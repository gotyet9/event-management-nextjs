import React from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

const EventDetail: React.FC = () => {
  const router = useRouter();
  const eventId = router.query.id;
  const event = getEventById(eventId);
  if (!eventId) return <p className="center">Loading...</p>;
  if (!event) return (<ErrorAlert>No event found!</ErrorAlert>)
  return (
    <>
      <EventSummary {...{ event }} />
      <EventLogistics {...{ event }} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
export default EventDetail;