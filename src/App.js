import React, { useState } from "react";
import { ReactComponent as CheckSVG } from "./imgs/icon-check.svg";
import { Switch, useDarkreader } from 'react-darkreader';

function App() {
  //button toggle for darkmode
  const [isDark, { toggle }] = useDarkreader(false);

  //button toggle for the yearly discount
  const onToggleClick = () => {
    setIsMonthly(!isMonthly);
  };  

  //default state is 250k views
  const [views, setViews] = useState(250);

  //adding the yearly billing discount
  const [isMonthly, setIsMonthly] = useState(false);



  //calculating the price depending on views
  const format = () => {
    let number = Math.floor(Math.sqrt(views * 12));
    if (isMonthly) number *= 0.75;
    if (number.toString().split(".")[1] === "5") number += "0";
    if (Math.floor(number) === number) {
      return `${number}.00`;
    } else {
      return number;
    }
  };

  return (
    <div className="h-screen text-center text-blue-100 dark:bg-blue-50 bg-pattern bg-no-repeat bg-10050">
      <div className="flex flex-col">
        <div className="my-8 align-middle bg-circles bg-no-repeat bg-center min-h-min flex flex-col justify-between h-40 sm:my-20">
          <Switch className=" m-auto" checked={isDark} onChange={toggle} />
          <p className="z-10 text-2xl font-extrabold text-blue-200 mb-3 sm:text-4xl">
            Simple, traffic-based pricing
          </p>
          
          <div className="text-base">
            <p className="inline-block w-full sm:mr-1 sm:w-max">
              Sign-up for our 30-day trial.
            </p>
            <p className="inline-block "> No credit card required.</p>
            
          </div>
        </div>
        <div className="m-6 bg-white shadow-xl text-sm rounded-xl max-w-full sm:w-600 sm:m-auto">
          <div className="p-4 sm:p-10">
            <div className="flex justify-center items-center flex-wrap align-center gap-2 sm:justify-between">
              <p className="uppercase text-base order-1">{views}K Pageviews</p>
              <div className="flex items-center gap-1 order-3 sm:order-2">
                <p className="text-blue-200 text-4xl font-extrabold">
                  ${format()}
                </p>
                <p className="text-base">/ month</p>
              </div>
              <div className="slidecontainer my-6 order-2 sm:order-3">
                <input
                  type="range"
                  min="1"
                  max="500" //500k views max
                  className="slider transition w-full rounded-full opacity-70"
                  id="myRange"
                  value={views}
                  onChange={(e) => setViews(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end items-center mt-10 mr-2 gap-1 sm:gap-3">
              <p> Monthly Billing</p>
              <div className="flex items-center justify-center">
                <label
                  for="toogleA"
                  className="flex items-center cursor-pointer"
                >
                  <div className="relative">
                    <input
                      id="toogleA"
                      type="checkbox"
                      className="hidden"
                      onClick={onToggleClick}
                      checked={isMonthly}
                    />
                    <div
                      className={`transition toggle__line w-11 h-6 rounded-full shadow-inner ${
                        isMonthly ? "bg-blue-100" : "bg-gray-50"
                      }`}
                    ></div>
                    <div className="toggle__dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0"></div>
                  </div>
                </label>
              </div>
              <p>Yearly Billing</p>
              <p className="text-xs text-red-50 bg-red-50 px-1.5 py-0.5 rounded-xl">
                25% <span className="hidden sm:inline-block">discount</span>
              </p>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex justify-center mt-4p p-10 flex-wrap gap-3 sm:justify-between">
            <div className="flex flex-col gap-2 items-center sm:items-start">
              <p className="flex flex-row items-center gap-2">
                <CheckSVG />
                Unlimited websites
              </p>
              <p className="flex flex-row items-center gap-2">
                <CheckSVG />
                100% data ownership
              </p>
              <p className="flex flex-row items-center gap-2">
                <CheckSVG />
                Email reports
              </p>
            </div>
            <div className="w-full sm:w-max">
              <button className="button text-white bg-blue-150 self-center px-10 py-0 rounded-full h-10">
                Start my trial
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="p-5 flex justify-center">
        <p className="">Made With 💜 by&nbsp;</p>
        <a  className="font-extrabold" href="https://www.linkedin.com/in/biswarghya-biswas/">Biswarghya Biswas</a>
      </footer>
    </div>
  );
}

export default App;
