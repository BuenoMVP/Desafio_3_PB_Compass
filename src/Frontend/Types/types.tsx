import { IconBaseProps } from "react-icons"

interface HeaderButtonProps {
    title: string
}

interface InputIconTextProps {
    title: string,
    placeHolder: string,
    typeOperation: string,
    icon: IconBaseProps
}

interface CardTourProps {
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

export type { HeaderButtonProps, InputIconTextProps, CardTourProps, MediaReviewProps }