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

export type { HeaderButtonProps, InputIconTextProps }