export default function CityLocation({ display_name, lat, lon }) {
  return (
    <div className="cityLocation">
      <p>{display_name}</p>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lon}</p>
    </div>
  );
}
