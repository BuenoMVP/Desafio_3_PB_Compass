interface categoriesProps {
    categorie: string
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

export type { categoriesProps, tuorsProps }