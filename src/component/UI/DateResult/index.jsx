import { getShortDate } from "../../../utils"
import "./styles.css"

const DateResult = ({ dayStart, dayEnd, setDayStart, }) => {

    return (
        <div className="dateResult">
            <input className = "dateResult__input" type="date" value={getShortDate(dayStart) } onChange={e => setDayStart(new Date(e.target.value))} />
            <span className = "dateResult__text">до</span>
            <input className = "dateResult__input" disabled type="date" value={dayEnd.toISOString().substr(0, 10)} />
        </div>
    )
}

export default DateResult

