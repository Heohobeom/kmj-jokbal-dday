
import React, { useEffect, useState } from "react";
import jokbalImg from "./jokbal.png";

export default function DdayPage() {
  const targetDate = new Date("2025-05-20T09:00:00+09:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) return null;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center font-bold text-center text-slate-800">
      <h1 className="text-4xl sm:text-5xl mb-4">🍖 김문주 족발 D-Day</h1>
      <img src={jokbalImg} alt="족발" className="w-40 h-40 mb-4" />
      {timeLeft ? (
        <div className="text-3xl sm:text-4xl bg-white p-8 rounded-3xl shadow-xl">
          <p className="mb-2">족발까지 남은 시간:</p>
          <p>
            {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초
          </p>
        </div>
      ) : (
        <div className="text-3xl sm:text-4xl text-red-500">지금! 족발 먹자!! 🍖🔥</div>
      )}
    </div>
  );
}
