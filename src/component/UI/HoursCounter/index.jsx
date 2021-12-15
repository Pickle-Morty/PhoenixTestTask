import "./styles.css"

const TimeCounter = ({ className, data, setData, title }) => {
    return (
        <div className="hoursCounter">
            <button onClick={() => data > 1 && setData(data - 1)} className="hoursCounter__btn">-</button>
            <span className = "hoursCounter__value" >{data}</span>
            <span className="hoursCounter__text">{title}</span>
            <button className="hoursCounter__btn" onClick={() => setData(data + 1)}>+</button>
        </div>
    )
}

export default TimeCounter