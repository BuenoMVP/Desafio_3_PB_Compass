interface categoriesProps {
    categorie: string
}

interface reviewsProps {
    description: string,
    email: string,
    name: string,
    date?: Date,
    nota_service: number,
    nota_location: number,
    nota_amenities: number,
    nota_prices: number,
    nota_confort: number,
    nota_food: number,
    tuorID: string
}

interface tuorsProps {
    title: string,
    overview: string,
    categories: string,
    location: string,
    price_person: number,
    time: number,
    max_person: number,
    min_age: number
}

export type { categoriesProps, tuorsProps, reviewsProps }