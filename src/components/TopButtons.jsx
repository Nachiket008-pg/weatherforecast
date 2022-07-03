// import React from 'react'

// function TopButtons() {
//     const cities = [
//         {
//             id : 1,
//             title :'London'
//         },
//         {
//             id : 2,
//             title : 'Sydney'
//         },
//         {
//             id : 3,
//             title : 'Tokyo'
//         },
//         {
//             id : 4,
//             title : 'Toronto'
//         },
//         {
//             id : 5,
//             title : 'Paris'
//         }
//     ]


//   return(
//      <div className="flex items-center justify-centre my-6 flex-wrap">
//     {cities.map((city) => (
//         <button key={city.id} className="text-white text-lg font-medium mx-4">{city.title}</button>
//     ))}
//    </div>
//    );
  
// }

// export default TopButtons

import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "Delhi",
    },
    {
      id: 3,
      title: "Chennai",
    },
    {
      id: 4,
      title: "Pune",
    },
    {
      id: 5,
      title: "Hyderabad",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;