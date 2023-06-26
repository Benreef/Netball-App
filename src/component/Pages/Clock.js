import DefaultLayout from "../Layout/DefaultLayout";
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      showTime()
    }, 1000)

    return clearInterval(interval)
  }, [])


const showTime = () => {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour === 0) {
    hour = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":"
    + min + ":" + sec + am_pm;

  setCurrentTime(currentTime)
}
return <div id="clock">{currentTime}</div>

}
export default Clock;