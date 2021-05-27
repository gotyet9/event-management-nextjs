import React from 'react'
import Link from 'next/link'

import classes from './button.module.css'

interface IButtonProps {
  link?: string;
  onClick?: (event: {
    preventDefault: () => void;
  }) => void;
}

const Button: React.FC<IButtonProps> = ({ link, children, onClick }) => {
  if (!link && onClick) return (
    <button className={classes.btn} onClick={onClick}>{children}</button>
  )
  return (
    <Link href={link}>{
      <a className={classes.btn}>{children}</a>
    }</Link>
  );
}
export default Button;