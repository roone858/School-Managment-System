export const checkSessionTime = (
  sessions: { start_time: string; day: string ;class_id:string}[],

  givenStartTime: string,
  givenDay: string,
  givenClassID: string
) => {

 const flag = sessions.find(session =>  session.day === givenDay && session.start_time === givenStartTime+":00" && session.class_id == givenClassID )
  if (flag) return false;
  return true;
};

export const checkSessionDay = (
  sessions: { day: string }[],
  givenDay: string
) => {
  const flag = sessions.find((session) => session.day == givenDay);
  if (flag) return false;
  return true;
};
