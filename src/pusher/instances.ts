import PusherClient from "pusher-js";
import PusherServer from "pusher";

export const pusherClient = new PusherClient(process.env.PUSHER_KEY as string, {
  cluster: "ap2",
});

// PUSHER_KEY="bad9d56e8e337c167ec2"
// PUSHER_SECRET="9638b5626b26a6dbc6c9"
// PUSHER_APP_ID="1761378"

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID as string,
  key: process.env.PUSHER_KEY as string,
  secret: process.env.PUSHER_SECRET as string,
  cluster: "ap2",
  useTLS: true,
});
