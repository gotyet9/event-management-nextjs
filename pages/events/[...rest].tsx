import { useRouter } from 'next/router';
import React from 'react'
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../dummy-data';

const FilteredEvents: React.FC = () => {
  const router = useRouter();
  const filterData = router.query.rest;
  if (!filterData) {
    return <p className="center">Loading</p>
  }
  const filterYear = +filterData[0];
  const filterMonth = +filterData[1];

  if (isNaN(filterYear) ||
    isNaN(filterMonth) ||
    filterYear > 2030 ||
    filterYear < 2021 ||
    filterMonth < 1 ||
    filterMonth > 12) {
    return (<>
      <ErrorAlert>
        <p>Invalid filter. Please adjust your values!!!</p>
      </ErrorAlert>
      <div className="center">
        <Button link="/events">Show all events</Button>
      </div>
    </>)
  }

  const filteredEvents = getFilteredEvents({ year: filterYear, month: filterMonth })

  if (filteredEvents.length === 0) {
    return (<>
      <ErrorAlert>
        <p>No events found for the chosen filter.</p>
      </ErrorAlert>
      <div className="center">
        <Button link="/events">Show all events</Button>
      </div>
    </>)
  }

  const date = new Date(filterYear, filterMonth - 1)

  return (
    <>
      <ResultsTitle {...{ date }} />
      <EventList events={filteredEvents} />
    </>
  );
}
export default FilteredEvents;