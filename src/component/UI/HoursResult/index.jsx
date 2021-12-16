import "./styles.css"

const HoursResult = ({ timeStart, timeEnd, }) => {
    return (
        <div className="hoursResult">
            <span className = "hoursResult__value" >{timeStart.getHours() < 10 ? "0" + timeStart.getHours() : timeStart.getHours()}: {timeStart.getMinutes() < 10 ? "0" + timeStart.getMinutes() : timeStart.getMinutes()}</span>
            <span className = "hoursResult__text">до</span>
            <span className = "hoursResult__value" >{timeEnd.getHours() < 10 ? "0" + timeEnd.getHours() : timeEnd.getHours()}: {timeEnd.getMinutes() < 10 ? "0" + timeEnd.getMinutes() : timeEnd.getMinutes()}</span>
        </div>
    )
}

export default HoursResult