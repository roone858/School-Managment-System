import { Session } from '../types/type';

export const checkSessionTime = (
  sessions: Session[],

  givenStartTime: string,
  givenDay: string,
  givenClassID: number,
) => {
  const flag = sessions.find(
    (session) =>
      session.day === givenDay &&
      session.start_time === givenStartTime + ':00' &&
      session.class_id == givenClassID,
  );
  if (flag) return false;
  return true;
};

export const checkSessionDay = (
  sessions: { day: string }[],
  givenDay: string,
) => {
  const flag = sessions.find((session) => session.day == givenDay);
  if (flag) return false;
  return true;
};
