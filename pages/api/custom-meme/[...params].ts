import { NextApiRequest, NextApiResponse } from "next"


const getMeme = async(memeArr: any): Promise<JSON> => {
  const apiUrl: string = process.env.API_URL as string
  const response = await fetch(`${apiUrl}/custom/${memeArr}`)
  return await response.json()
} 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { params } = req.query
  getMeme(JSON.stringify(params))
    .then(meme => {
      res.send(meme)
    })
}
