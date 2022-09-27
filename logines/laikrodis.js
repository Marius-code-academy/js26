// sukurti funkcija kur priima valandas ir minutes ir grazina koks yra kampas laipsniais tarp minutes ir valandos rodykliu

function getDegrees(hours, minutes) {
  const ONE_MIN_DEGREE = 6;
  const ONE_HOUR_DEGREE = 30;
  const HOUR_PER_MINUTE_DEGREE = 0.5;

  const minuteAngle = minutes * ONE_MIN_DEGREE;
  const hourAngle = hours * ONE_HOUR_DEGREE + minutes * HOUR_PER_MINUTE_DEGREE;

  const angle = Math.abs(hourAngle - minuteAngle);

  console.log(Math.min(angle, 360 - angle));
}

getDegrees(11, 53);
