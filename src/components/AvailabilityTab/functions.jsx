export function getHoursOfAvailability(element) {
    let AvailabilityByHours = {}
    let fromHour = element[1].split(' ')[0]
    let toHour = element[1].split(' ')[3]
    let toHourTransformed = parseInt(toHour) + 12
    if (fromHour.toLowerCase() === 'all') {
        for (let i = 1; i < 24; i++) {
            AvailabilityByHours[`${i}`] = true
        }
    } else {
        for (let i = 1; i < 24; i++) {
            if (i >= fromHour && i <= toHourTransformed) {
                AvailabilityByHours[`${i}`] = true
            } else {
                AvailabilityByHours[`${i}`] = false
            }
        }
    }
    return AvailabilityByHours
}

export function getAvailabilityTime(data, setAvailabilityTime) {
    let northTab = {}
    let southTab = {}

    Object.entries(data.north.times_by_month).map((element) => {
        northTab[`${element[0]}`] = getHoursOfAvailability(element)
    })
    setAvailabilityTime((prevState) => {
        let newState = { ...prevState, north: northTab }
        return newState
    })
    Object.entries(data.south.times_by_month).map((element) => {
        southTab[`${element[0]}`] = getHoursOfAvailability(element)
    })
    setAvailabilityTime((prevState) => {
        let newState = { ...prevState, south: southTab }
        return newState
    })
}
