export function formatAsDate(date){
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateObject = new Date(date);
    return `${monthsArray[dateObject.getMonth()]} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
}