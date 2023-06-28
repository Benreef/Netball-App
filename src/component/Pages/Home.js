import React from 'react';
import { useState, useEffect } from 'react';
import DefaultLayout from '../Layout/DefaultLayout';
import CountdownTimer from './CountDownTimer';
import Clock from './Clock';
import Scoring from './GameStartPage';
import WeatherInfo from './Weather';

const HomePage = () => {
  return (
    <DefaultLayout>
      <WeatherInfo />
      <CountdownTimer />
      <Clock />
      <Scoring />
    </DefaultLayout>
  );
};

export default HomePage;
