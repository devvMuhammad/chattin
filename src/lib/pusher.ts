import PusherClient from "pusher-js";
import PusherServer from "pusher";

export const pusherClient = new PusherClient(process.env.PUSHER_KEY as string, {
  cluster: "ap2",
});

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID as string,
  key: process.env.PUSHER_KEY as string,
  secret: process.env.PUSHER_SECRET as string,
  cluster: "ap2",
  useTLS: true,
});
