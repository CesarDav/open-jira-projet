import { formatDistanceToNow } from 'date-fns'


export const getFormatDistanceToNow = (date: number) => {
    const fronNow = formatDistanceToNow(date)

    return fronNow
}