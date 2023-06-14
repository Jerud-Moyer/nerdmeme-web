import type { NextApiRequest, NextApiResponse } from 'next'

const getMeme = async(): Promise<JSON> => {
  const apiUrl: string = process.env.API_URL as string
  const response = await fetch(apiUrl)
  return await response.json()
} 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await getMeme()
  res.status(200).send(result) 
}
