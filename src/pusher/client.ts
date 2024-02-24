import PusherClient from "pusher-js";

export const pusherClient = new PusherClient(process.env.PUSHER_KEY as string, {
  cluster: "ap2",
});
