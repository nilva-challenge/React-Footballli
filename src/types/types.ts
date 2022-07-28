export interface teams{
    id:number,
    logo:string,
    name:string,
    winner:boolean
}

export interface goals{
    home:number,
    away:number
}

export interface fixture{
    date:string,
    id:number,
    periods:{
        first:number,
        second:number,
    }
    referee:string,
    status:{
        long:string,
        short:string,
    }
    timestamp:number,
    timezone:string,

}

export interface league{
    country:string,
    flag:string,
    id:number,
    logo:string,
    name:string,
    round:string,
    season:number
}

export interface dataFormat {
    category:string,
    logos:string,
    league:data[],
}

export interface data{
    fixture:fixture,
    goals:goals,
    league:league,
    teams:teams,
}