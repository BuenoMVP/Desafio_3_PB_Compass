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
    nota_average: number,
    tuorID: string
}

interface tuorsProps {
    _id?:string,
    title: string,
    overview: string,
    categories: string,
    location: locationProps,
    price_person: number,
    time: number,
    max_person: number,
    min_age: number,
    reviews: averageProps
}

interface averageProps {
    avg_service: number,
    avg_location: number,
    avg_amenities: number,
    avg_prices: number,
    avg_confort: number,
    avg_food: number,
    avg_average: number,
    qtdReviews: number,
    tuorID: string,
    allReviews: reviewsProps[]
}

interface locationProps {
    country: string,
    city: string
}

export type { categoriesProps, tuorsProps, reviewsProps, averageProps, locationProps }