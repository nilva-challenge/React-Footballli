export const getDays = (date = new Date(), daysOffset: number) => {
    const newDate = new Date(date.getTime())
    newDate.setDate(date.getDate() + daysOffset)

    return newDate
}
