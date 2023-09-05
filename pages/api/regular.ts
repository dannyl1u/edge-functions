import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.json({
        message: `Hello world from regular API!`,
        type: 'regular'
    });
}

export default handler;
