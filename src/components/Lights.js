import React from "react";

function Lights({ num = 20 }) {
  return (
    <ul className="lightrope">
      {Array.from({ length: num }, (_, i) => i + 1).map(liItem => (
        <li key={liItem}></li>
      ))}
    </ul>
  );
}

export default Lights;
