// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(returnStatus(500)).json({ name: "ok" });
}

export const returnStatus = (errorStatus: number) => {
  const now = new Date();
  const minutes = now.getMinutes();
  if (minutes <= 25) {
    return errorStatus;
  }

  return 200;
};
