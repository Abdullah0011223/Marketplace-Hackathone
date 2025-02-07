// import React from 'react'

// const Underline = ({title}) => {
//   return (
//     <div className='text-2xl font-medium underline !underline-offset-[.5em] '>
//       {title}
//     </div>
//   )
// }

// export default Underline



import React from 'react';

interface UnderlineProps {
  title: string; // The text to be displayed with an underline
}

const Underline: React.FC<UnderlineProps> = ({ title }) => {
  return (
    <div className="text-2xl font-medium underline !underline-offset-[.5em]">
      {title}
    </div>
  );
};

export default Underline;
