const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
export function currentDay() {
  const a = new Date();
  return weekdays[a.getDay()];
}

export function currentHours() {
  const a = new Date();
  return a.getHours();
}
export function currentDate() {
  const a = new Date();
  return a.getUTCFullYear() + '-' + a.getMonth() + '-' + a.getDate();
}
export function getDayFromDate(date: any) {
  const d = new Date(date);
  return weekdays[d.getDay()];
}
export function getOnlyDate(date: string) {
  const index = date.indexOf('T');

  return date.slice(0, index);
}

export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
