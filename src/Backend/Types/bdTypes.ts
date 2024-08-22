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
    categories: categoriesProps[],
    location: string,
    price_person: number,
    time: string,
    max_person: number,
    min_age: number,
    reviews?: string[]
}

export type { categoriesProps, tuorsProps, reviewsProps }