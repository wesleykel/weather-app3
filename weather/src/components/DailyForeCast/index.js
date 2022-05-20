import React from 'react'
import style from "./DailyForeCast.module.css"

const DailyForecast = ({day ,temp ,low, descrip, picture}) => {
    return (
 <div className={style.wrapper}>
<p className={style.day}>{day}</p>

<p>{`High: ${Math.floor(temp)}°`}</p>
<p>{`Low: ${Math.floor(low)}°`}</p>

<div>
<p>{descrip}</p>
<img className={style.icon} src={`http://openweathermap.org/img/wn/${picture}@2x.png`} alt="icon"/>
</div>
</div>
    )
}

export default DailyForecast