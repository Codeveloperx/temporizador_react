import React, { useEffect, useRef, useState } from "react";
import { ContainerCards, LeftCircle, Line, RightCircle, TextCard, Timer, TimerCard } from "../styledcomponet/StyledComponent";

const CounterDown = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let Ref = useRef();

  const startTimer = () => {
    const currentDate = new Date("june 14, 2022 00:00:00").getTime();

    Ref.current = setInterval(() => {
      const now = new Date().getTime();
      const gap = currentDate - now;

      const days = Math.floor(gap / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((gap % (1000 * 60)) / 1000);
      if (gap < 0) {
        // stop the timer
        clearInterval(Ref.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(Ref.current);
    };
  }, []);

  return (
    <ContainerCards>

      <TimerCard>
        <Timer>
          <Line/>
          <p>{days < 10 ? `0${days}` : days}</p>
          <LeftCircle/>
          <RightCircle/>
        </Timer>
        <TextCard>
          <p>days</p>
        </TextCard>
      </TimerCard>

      <TimerCard>
        <Timer>
        <Line/>
          <p>{hours < 10 ? `0${hours}` : hours}</p>
          <LeftCircle/>
          <RightCircle/>
        </Timer>
        <TextCard>
          <p>hours</p>
        </TextCard>
      </TimerCard>

      <TimerCard>
        <Timer>
        <Line/>
          <p>{minutes < 10 ? `0${minutes}` : minutes}</p>
          <LeftCircle/>
          <RightCircle/>
        </Timer>
        <TextCard>
          <p>minutes</p>
        </TextCard>
      </TimerCard>

      <TimerCard>
        <Timer>
        <Line/>
          <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
          <LeftCircle/>
          <RightCircle/>
        </Timer>
        <TextCard>
          <p>seconds</p>
        </TextCard>
      </TimerCard>
    </ContainerCards>
  );
};

export default CounterDown;
