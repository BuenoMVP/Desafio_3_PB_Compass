import { IconBaseProps } from "react-icons"

interface HeaderButtonProps {
    title: string,
    goTo: string
}

interface InputIconTextProps {
    title: string,
    placeHolder: string,
    typeOperation: string,
    icon: IconBaseProps
}

interface CardTourProps {
    id: string,
    location: string, 
    title: string,
    review: number,
    qtd_review: number,
    time: number,
    price: number
}

interface MediaReviewProps {
    review: number,
    qtd_review: number
}

interface ReviewProps {
    _id: string,
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

export type { 
    HeaderButtonProps, 
    InputIconTextProps, 
    CardTourProps, 
    MediaReviewProps,
    ReviewProps
}