function VerticalLights({ num = 20 }) {
  return (
    <ul className="lightrope-vertical swing">
      {Array.from({ length: num }, (_, i) => i + 1).map(liItem => (
        <li key={liItem}></li>
      ))}
    </ul>
  );
}

export default VerticalLights;
