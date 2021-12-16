import { useEffect, useState } from "react"
import "./styles.css"

const Timetable = ({ setData, className, data,}) => {
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
            <div onClick={() => setData(
                changeSomeDay(data, [1, 3, 5])
            )} className={"timetable__day"}>ПН/СР/ПТ</div>
            <div onClick={() => setData(
                changeSomeDay(data, [2, 4])
            )}
                className={"timetable__day"}>ВТ/ЧТ</div>
            {data.map((item, id) => <div
                className={getClassName(item.value, id)}
                onClick={() => setData(changeDay(data, id))} > {item.label} </div>)}
        </div>
    )
}

export default Timetable