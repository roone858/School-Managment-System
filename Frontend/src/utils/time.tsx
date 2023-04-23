const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
export function currentDay() {
  var a = new Date();
  return weekdays[a.getDay()];
}
export function getDayFromDate(date: any) {
  const d = new Date(date);
  return weekdays[d.getDay()];
}
