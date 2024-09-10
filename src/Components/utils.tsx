export type Data = {
    weather: [
        {
            main: string,
            description: string,
             icon: string
        }
    ],
    main: {
        temp: number
    },

    name: string
}