
async function getCountry() {

    const url = "https://amazon-api.sellead.com/country"
    const response = await fetch(url)
    const data = await response.json()

    return data
}

async function getCity() {

    const url = "https://amazon-api.sellead.com/city"
    const response = await fetch(url)
    const data = await response.json()

    return data
}

module.exports = { getCity, getCountry }