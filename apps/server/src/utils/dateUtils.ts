// export function getTodayDate(): Date {
//   const d = new Date();
//   d.setUTCHours(0, 0, 0, 0);  
//   return d;
// }

export function getTodayDate(): Date {
  // const d = new Date();
  // d.setUTCHours(0, 0, 0, 0);
  // d.setUTCDate(d.getUTCDate() + 2);
  return new Date("2026-01-27T00:00:00.000Z");;
}
