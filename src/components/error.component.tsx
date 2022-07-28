import { BiError } from 'react-icons/bi'

interface IProps {
    message?: string
    containerClassName?: string
    iconClassName?: string
    messageClassName?: string
}

const ErrorComponent: React.FC<IProps> = ({
    message = 'Something went wrong',
    containerClassName,
    iconClassName,
    messageClassName,
}) => {
    return (
        <div className={containerClassName}>
            <BiError className={iconClassName} />
            <p className={messageClassName}>{message}</p>
        </div>
    )
}

export default ErrorComponent
