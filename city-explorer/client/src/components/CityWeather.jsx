export default function CityWeather({ display_name }) {
  return (
    <div className="cityWeather">
      <div key={game.name} />
      <h2>{game.name}</h2>
      <h3>Year: {game.year}</h3>
    </div>
  );
}
