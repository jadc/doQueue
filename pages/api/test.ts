import type { NextApiRequest, NextApiResponse } from 'next'
import { data } from "./data"
 
type ResponseData = {
    message: string
}
 
export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    res.status(200).json({ message: JSON.stringify(data) })
}