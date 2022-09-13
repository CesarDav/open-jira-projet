import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedData } from 'database'
import { Entry } from 'models'

type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({ message: 'You do not have permission to perform this operation' })
    }
    await db.connect()
    /// Si no se coloca niguna condicion,este eliminara todo los datos de la coleccion
    await Entry.deleteMany();
    await Entry.insertMany(seedData.entries)


    await db.disconnect()
    res.status(200).json({ message: 'ok ' })
}