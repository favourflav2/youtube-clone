import {z} from 'zod'

// Use .catch() to provide a "catch value" to be returned in the event of a parsing error.

const allowedValues = {
    movies: ["Now Playing", "Popular", "Top Rated", "Upcoming"]
} as const

export const ParamsSchema = z.object({
    movies: z.enum(allowedValues.movies).catch(allowedValues.movies[0])
})