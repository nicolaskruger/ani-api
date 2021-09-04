type Me = {
    status_code: number,
    message: string,
    data: {
        username: string,
        email: string,
        email_verified: boolean,
        role: number,
        gender: number,
        localization: string,
        has_anilist: boolean,
        has_mal: boolean,
        id: number
    },
    version: string
}

export type { Me }