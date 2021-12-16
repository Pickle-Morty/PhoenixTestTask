import "./styles.css"

const TimeCounter = ({ value, setValue, title, maxValue }) => {
    let increaseValue = ( value, maxValue) => {
        if (maxValue) {
            if (value < maxValue) return value + 1
            else{
                alert("Учиться больше 12 часов в день не эфективно!")
                return value
                
            }   
        }
        else return value + 1
    }
    let decreaseValue = (value) => {
        if (value > 1) return value - 1
        else return value
    }
    return (
        <div className="hoursCounter">
            <button onClick={() => setValue(decreaseValue(value ))} className="hoursCounter__btn">-</button>
            <span className = "hoursCounter__value" >{value}</span>
            <span className="hoursCounter__text">{title}</span>
            <button className="hoursCounter__btn" onClick={() => setValue(increaseValue(value, maxValue))}>+</button>
        </div>
    )
}

export default TimeCounter