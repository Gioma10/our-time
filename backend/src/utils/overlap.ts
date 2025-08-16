import { DateTime } from "luxon";
import { Availability } from "../types";

export function findOverlap(avails: Availability[]) {
  const rangesUTC = avails.map(a => {
    const startUTC = DateTime.fromISO(a.start, { zone: a.timezone }).toUTC();
    const endUTC = DateTime.fromISO(a.end, { zone: a.timezone }).toUTC();
    return { start: startUTC, end: endUTC };
  });

  const latestStart = rangesUTC.reduce(
    (acc, r) => (r.start > acc ? r.start : acc),
    rangesUTC[0].start
  );

  const earliestEnd = rangesUTC.reduce(
    (acc, r) => (r.end < acc ? r.end : acc),
    rangesUTC[0].end
  );

  if (latestStart < earliestEnd) {
    return { start: latestStart.toISO(), end: earliestEnd.toISO() };
  } else {
    return null; // no overlap
  }
}
