import moment from "jalali-moment";
import { data } from "../types/types";


export const Tomorrow = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1)
    return date.toDateString()
}

export const Yesterday = () => {
    const date = new Date();
    date.setDate(date.getDate() - 1)
    return date.toDateString()
}


export const getAllDaysInMonth = (numberOfDate: number) => {
    const date = new Date();
    const dates = [];
    const Yester = Yesterday()
    dates.push(Yester)
    while (dates.length <= numberOfDate) {
        dates.push(new Date(date).toDateString());
        date.setDate(date.getDate() + 1);
    }
    return dates;
}

export const getInfo = (value: string) => {
    const date = new Date();
    const Tomorro = Tomorrow()
    const Yester = Yesterday()
    if (value === String(Yester)) {
        return "دیروز"
    } else if (value === String(Tomorro)) {
        return "فردا"
    } else if (value === date.toDateString()) {
        return "امروز"
    } else return moment(value).locale("fa").format("dddd jD jMMMM jYYYY")
}


export const formatDate = (date: Date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
}


export const formatFollowers = (data: data[]) => {
    const categories: any[] = [...Array.from(new Set<SetConstructor>(data.map((item: any) => item.league.name)))]
    return categories.reduce((acc: any, category: any) => {
        const _followers = data.filter((item: any) => item.league.name === category)
        const logo: any = data.find((item: any) => item.league.name === category ? item.league.logo : null)
        return [...acc, { category: category, logos: logo.league.logo, league: _followers }]
    }, [])
}
