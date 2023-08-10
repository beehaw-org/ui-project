export const getHostFromActorId = (actorId: string) => {
  return new URL(actorId).host;
};
