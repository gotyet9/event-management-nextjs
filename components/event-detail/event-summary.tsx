import React from 'react';
import { TEventDetail } from '../events/event-item';
import classes from './event-summary.module.css';

interface IEventSummaryProps {
  event: TEventDetail;
}

const EventSummary: React.FC<IEventSummaryProps> = ({ event }) => {
  const { title } = event;
  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;