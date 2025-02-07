// import React from 'react'

// const Button = ({title, btnClass}) => {
//   return (
//     <button
//     className={`${btnClass}`}>{title}</button>
//   )
// }

// export default Button



import React from 'react';

interface ButtonProps {
  title: string; // Text displayed on the button
  btnClass?: string; // Optional CSS classes for styling
}

const Button: React.FC<ButtonProps> = ({ title, btnClass }) => {
  return (
    <button className={`${btnClass}`}>
      {title}
    </button>
  );
};

export default Button;
