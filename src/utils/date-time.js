export function formatAsDate(date){
    const dateObject = new Date(date);
    return dateObject.getFullYear();
}