import React from "react";
import GetIcon from './GetIcon';

function getDateComponent(dt) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let date = new Date(dt * 1000);
  return (
    <>
      <p className="text-white text-2xl font-normal">{days[date.getDay()]}</p>
      <p className="text-white text-[15px] font-light">
        {date.getDate()}/{date.getMonth() + 1}
      </p>
    </>
  );
}
function getDailyComponent(data) {
  return (
    <tr className="w-full h-[75px] bg-white/10 backdrop-blur-[100px] shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)]">
      <td className="text-center">{getDateComponent(data.dt)}</td>
      <td className="text-center">
        <p className="text-white text-5xl grid place-items-center">
          {GetIcon(data.weather[0].main)}
        </p>
      </td>
      <td className="text-center">
        <p className="text-white text-2xl font-normal">{data.temp.min}°</p>
        <p className="text-white text-[15px] font-light">Min</p>
      </td>
      <td className="text-center">
        <p className="text-white text-2xl font-normal">{data.temp.max}°</p>
        <p className="text-white text-[15px] font-light">Max</p>
      </td>
    </tr>
  );
}
export default function MobileTable({ data }) {
  return (
    <>
      <div className="flex md:hidden flex-col w-full z-20">
        <p className="text-white/70 text-sm font-normal">Next 5 Days</p>
        <table className="w-full border-separate border-spacing-x-0 border-spacing-y-3">
          <tbody>
            {getDailyComponent(data[1])}
            {getDailyComponent(data[2])}
            {getDailyComponent(data[3])}
            {getDailyComponent(data[4])}
            {getDailyComponent(data[5])}
          </tbody>
        </table>
      </div>
    </>
  );
}
