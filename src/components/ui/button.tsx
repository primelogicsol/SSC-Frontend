import React from 'react';
import classNames from 'classnames';

export const Button = ({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={classNames(
        'bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
