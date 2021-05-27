import React from 'react';
import classes from './event-content.module.css';

interface IEventContentProps {

}

const EventContent: React.FC<IEventContentProps> = ({ children }) => {
  return (
    <section className={classes.content}>
      {children}
    </section>
  );
}

export default EventContent;
