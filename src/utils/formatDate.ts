
export function formatDate(date:Date,local:string,options:any={day:"numeric",month:"numeric",year:"numeric"}) {
    return date.toLocaleDateString(local,options).split("/").reverse().join("-")
}