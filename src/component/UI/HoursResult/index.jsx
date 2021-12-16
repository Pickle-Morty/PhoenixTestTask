import { getTime } from "../../../utils"
import "./styles.css"

const HoursResult = ({ timeStart, timeEnd, setTimeStart }) => {
    const getNewDate = (time) => {
        let date = new Date(timeStart.setHours(time.substr(0, 2), time.substr(3, 5)))
        return date
    }
    return (
        <div className="hoursResult">
            <input className="hoursResult__value"
                onChange={e => setTimeStart(getNewDate(e.target.value))}
                value={getTime(timeStart)} type="time" />
            <span className="hoursResult__text">до</span>
            <input disabled value={getTime(timeEnd)} type="time" name="" id="" className="hoursResult__value" />

        </div>
    )
}

export default HoursResult