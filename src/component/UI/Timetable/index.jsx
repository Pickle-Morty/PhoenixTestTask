import { useEffect, useState } from "react"
import "./styles.css"

const Timetable = ({ onChange, className, data, setData }) => {
    const [timetableData, setTimetableData] = useState([
        { value: false, label: "ВС" },
        { value: false, label: "ПН" },
        { value: true, label: "ВТ" },
        { value: false, label: "СР" },
        { value: false, label: "ЧТ" },
        { value: true, label: "ПТ" },
        { value: false, label: "СБ" },
    ])
    useEffect(() => {
        onChange(timetableData)
    }, [timetableData]
    )
    const validate = {
        noStudyDay(dayArray) {

        }
    }
    const changeSomeDay = (oldData, trueValue) => {
        let newData = [...oldData]
        for (let i = 0; i < newData.length; i++) {
            newData[i].value = false
        }
        trueValue.map(value => newData[value].value = true)
        return newData
    }

    const changeDay = (oldData, id) => {
        let newData = [...oldData]
        let studyDay = 0
        for (let i = 0; i < newData.length; i++) {
            if (newData[i].value) studyDay++
        }
        if (studyDay > 1) newData[id].value = !newData[id].value
        else newData[id].value = true
        return newData
    }

    const getClassName = (value, id) => {
        let className = "timetable__day"
        if (value) className = className + " active"
        if (id === 0) className = className + " flex-end"
        return className
    }

    return (
        <div className={"timetable row " + className}>
            <div onClick={() => setTimetableData(
                changeSomeDay(timetableData, [0, 2, 4])
            )} className={"timetable__day"}>ПН/СР/ПТ</div>
            <div onClick={() => setTimetableData(
                changeSomeDay(timetableData, [1, 3])
            )}
                className={"timetable__day"}>ВТ/ЧТ</div>
            {timetableData.map((item, id) => <div
                className={getClassName(item.value, id)}
                onClick={() => setTimetableData(changeDay(timetableData, id))} > {item.label} </div>)}
        </div>
    )
}

export default Timetable