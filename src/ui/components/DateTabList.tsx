type DateTabListProps = {
    data?: {
        text: string,
        date: string
    }[];
};

const DateTabsList: React.FC<DateTabListProps> = ({data}) => {
    return (
        <div>{data?.map(date => {
            return (
                <div key={`date-${date.text}`}>{date.text}</div>
            )
        })}</div>
    )
}

export default DateTabsList;