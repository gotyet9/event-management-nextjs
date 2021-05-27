import React from 'react'
import EventItem, { TEventDetail } from './event-item';

import classes from './event-list.module.css'

interface EventListProps {
  events: TEventDetail[]
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map(event => (<EventItem key={event.id} {...{ event }} />))}
    </ul>
  );
}
export default EventList;