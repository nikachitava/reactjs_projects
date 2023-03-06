export function setDate() {
    const date = new Date()
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let dayWeek = date.getDay()
    let number = date.getDate()
    console.log('kviris dge: ', dayWeek)
    console.log('ricxvi: ', number)

    return `${weekday[dayWeek]} ${number}`
}
