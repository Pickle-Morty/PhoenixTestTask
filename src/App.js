import logo from './logo.svg';
import './App.css';
import Select from 'react-select'
import { useEffect, useState } from 'react';
import Timetable from './component/UI/Timetable';
import TimeCounter from './component/UI/HoursCounter';
import DateResult from './component/UI/DateResult';
import HoursResult from './component/UI/HoursResult';

const optionsTime = [
  { value: '45', label: 'Академические' },
  { value: '60', label: 'Астрономические' },
]

const optionsBreak = [
  { value: '0', label: '0 мин' },
  { value: '5', label: '5 мин' },
  { value: '10', label: '10 мин' },
  { value: '15', label: '15 мин' },
  { value: '20', label: '20 мин' },
  { value: '30', label: '30 мин' },
]




function App() {
  let date = new Date()
  const [calcData, setCalcData] = useState({
    dayStart: date,
    dayEnd: date,
    timeStart: new Date(date.setHours(7, 0, 0, 0)),
    timeEnd: date,
    totalTeachingHours: 1,
    dayTeachingHours: 1,
    timetableData: [
      { value: false, label: "ВС" },
      { value: false, label: "ПН" },
      { value: true, label: "ВТ" },
      { value: false, label: "СР" },
      { value: false, label: "ЧТ" },
      { value: true, label: "ПТ" },
      { value: false, label: "СБ" },
    ],
    hoursType: { value: '45', label: 'Академические' },
    breakTime: { value: '0', label: '0 мин' },
  })


  const getDayEnd = (dayStart, totalTeachingHours, dayTeachingHours, timetableData, dayWeakStart) => {
    let totalhourse
    totalhourse = totalTeachingHours
    let dayWeak = dayWeakStart
    let dayEnd = dayStart
    for (; totalhourse > 0;) {
      for (; dayWeak < timetableData.length; dayWeak++) {
        dayEnd = dayEnd + (1 * 24 * 60 * 60 * 1000)
        if (timetableData[dayWeak].value) {
          totalhourse = totalhourse - dayTeachingHours
        }
        if (0 >= totalhourse) {
          return new Date(dayEnd)
        }
      }
      dayWeak = 0
    }
  }

  const getTimeEnd = (timeStart, dayTeachingHours, breakTime, hoursType) => {
    let timeEnd = timeStart + ((dayTeachingHours * hoursType) * 60 * 1000) + ((dayTeachingHours - 1) * breakTime * 60 * 1000)
    return new Date(timeEnd)
  }

  useEffect(() => {
    setCalcData({
      ...calcData,
      dayEnd: getDayEnd(Date.parse(calcData.dayStart),
        calcData.totalTeachingHours, calcData.dayTeachingHours,
        calcData.timetableData, calcData.dayStart.getDay()),
      timeEnd: getTimeEnd(Date.parse(calcData.timeStart),
        calcData.dayTeachingHours,
        calcData.breakTime.value,
        calcData.hoursType.value)
    })
  }, [
    calcData.totalTeachingHours,
    calcData.dayTeachingHours,
    calcData.dayStart,
    calcData.timetableData,
    calcData.breakTime,
    calcData.hoursType,
  ])

  const sendRequest = () => {
    console.log(calcData)
  }


  return (
    <div className="modal__pupup">
      <div className="modal">
        <div className="calc">
          <div className="row space-between">
            <h3 className="calc__title">Редактирование расписания</h3>
            <div className="close__icon"></div>
          </div>
          <div className="calc__box">
            <input placeholder="Онлайн школа" type="text" className="calc__input" />
            <div className="calc__color row space-between">
              <span>Цвет группы:</span> <input type="color" name="" id="" />
            </div>
            <Select options={optionsTime} value={calcData.hoursType} onChange={(e) => setCalcData({ ...calcData, hoursType: e })} />
            <TimeCounter data={calcData.totalTeachingHours}
              setData={date => setCalcData({ ...calcData, totalTeachingHours: date })}
              title="Всего часов" />
            <DateResult dayStart={calcData.dayStart}
              dayEnd={calcData.dayEnd}
              setDayStart={date => setCalcData({ ...calcData, dayStart: date })} />
            <Timetable className="calc__timetable"
              setData={setCalcData}
              data={calcData.timetableData}
              onChange={(timetableData) => setCalcData({ ...calcData, timetableData: timetableData })} />
            <Select placeholder="Без перерыва" options={optionsBreak} value={calcData.breakTime} onChange={(e) => setCalcData({ ...calcData, breakTime: e })} />
            <TimeCounter data={calcData.dayTeachingHours} setData={data => setCalcData({ ...calcData, dayTeachingHours: data })} title="Часов &nbsp;в день " />
            <HoursResult timeStart={calcData.timeStart} timeEnd={calcData.timeEnd} />
          </div>
          <div className="row flex-end">
            <button className="btn__cancel">Отмена</button>
            <button onClick={() => sendRequest()} className="btn__submit">Добавить рассписание</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
