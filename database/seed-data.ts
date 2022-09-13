
interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
    description: string,
    status: string,
    createdAT: number

}


export const seedData: SeedData = {
    entries: [
        {

            description: 'Pendiente: ipsum dolor sit amet consectetur Quibusdam non tempora reprehenderit quam nam, cum omnis',
            status: 'pending',
            createdAT: Date.now()
        },
        {

            description: 'En-Progreso ipsum dolor sit amet consectetur Quibusdam non tempora reprehenderit quam nam, cum omnis',
            status: 'in-progress',
            createdAT: Date.now() - 1000000
        },
        {

            description: 'Terminadas: ipsum dolor sit amet consectetur Quibusdam non tempora reprehenderit quam nam, cum omnis',
            status: 'finished',
            createdAT: Date.now() - 100000
        }
    ]
}