export default function CityWeather({ weather }) {
  return (
    <div className="cityWeather">
      <h2> Weather </h2>
      {weather.map((day) => {
        return (
          <p key={day.date}>
            The weather on {day.date} is {day.description}
          </p>
        );
      })}
    </div>
  );
}
