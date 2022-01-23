import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'ng7r89ny',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skFgtWzxZ4RWF25XFhdKFngrbHxbfJPy06pzB3Rl5zNXbEEOYSHJLZbr4x7WM5WKiuyO4sJ4hdubkDrpvtX4Pwugxv4kFLAkvi8RtSzT6DN9u7vKglUasxVXtIarESyHeH7eR9Q4J7KMslUyMGiNZxfdnavOVAc4qgGS2azUEK7UbK3IezU3',
    useCdn: false
})