import PusherClient from "pusher-js";

// export const pusherClient = new PusherClient(process.env.PUSHER_KEY as string, {
//   cluster: "ap2",
// });
export const pusherClient = new PusherClient("bad9d56e8e337c167ec2", {
  cluster: "ap2",
});
