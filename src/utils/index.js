export const getTime = (date) => {
    let time = ""
    if (date.getHours() < 10) time = "0" + date.getHours()
    else time = date.getHours()
    if (date.getMinutes() < 10) time = time + ":0" + date.getMinutes()
    else time = time + ":" + date.getMinutes()
    return time
}

export const getShortDate = (date) => {
    return date.toISOString().substr(0, 10)
}

