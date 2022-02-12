import { NextApiRequest, NextApiResponse } from 'next'

const HealthCheck = (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ status: 'OK' })
}

export default HealthCheck
