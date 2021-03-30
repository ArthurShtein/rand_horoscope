function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

const horoscope = {
    signInfo: ['Leo','Aries','Scorpio','Gemini'],
    todaysMatch: ['Libra','Tarurus','Virgo','Pisces'],
    advice: ['Consider your options carefully',"Dream big and don't be affraid","Amazing opportunities will come to you soon","Big challanges in your way, be ready for them"]
}

let personalWisdom = []

for (let prop in horoscope) {
    let optionIndx = generateRandomNumber(horoscope[prop].length)

    switch(prop) {
        case 'signInfo':
            personalWisdom.push(`You'r sign is : ${horoscope[prop][optionIndx]}`)
            break
        case 'todaysMatch':
            personalWisdom.push(`and this month your best match is : ${horoscope[prop][optionIndx]}`)
            break
        case 'advice':
            personalWisdom.push(`and your advice is : ${horoscope[prop][optionIndx]}.`)
            break
        default:
            return "Something went wrong, please try again"
    }
}

function todaysHoroscope(wisdom) {
    let formatted = personalWisdom.join('\n')
    console.log(formatted)
}

console.log(personalWisdom)
