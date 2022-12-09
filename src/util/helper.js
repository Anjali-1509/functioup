const printDate=()=> {
    let date = new Date()
    return date.getDate()
}

const printMonth =()=> {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let date = new Date
    return months[date.getMonth()]
}

const getBatchInfo=()=> {
  return "Californium, W4D4, the topic for today is Nodejs module system "  
}

module.exports = {printDate, printMonth, getBatchInfo}



