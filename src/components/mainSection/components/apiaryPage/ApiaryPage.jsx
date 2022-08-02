import React, { useEffect, useState } from "react";
import apiary from "img/ApiaryPage/apiary.png";
import weight from "img/ApiaryPage/weight.png";
import temperature from "img/ApiaryPage/temperature.png";
import humidity from "img/ApiaryPage/humidity.png";
import statusGreen from "img/ApiaryPage/statusGreen.png";

const ApiaryPage = ({hives,setHives}) => {
  return (
    <div className="apiaryPage">
      <div className="apiaryPage__apiaryList">
      {hives.map((hive, i) => (
            <div className="apiaryPage__apiaryItem" key={hive.Statistics.hive_id}>
              <img
                className="apiaryPage__apiaryItem-apiary"
                src={apiary}
                alt=""
              />
              <h2 className="apiaryPage__apiaryItem-title">Вулик {hive.Statistics.hive_id}</h2>
              <div className="apiaryPage__apiaryItem-weight">
                <img
                  src={weight}
                  alt=""
                  className="apiaryPage__apiaryItem-img"
                />
                <p className="apiaryPage__apiaryItem-weight-text">
                {hive.Statistics.weight} кг ({hive.Statistics.datetime.substring(11,16) })
                </p>
              </div>

              <div className="apiaryPage__apiaryItem-bottom">
                <div className="apiaryPage__apiaryItem-temperature">
                  <img
                    src={temperature}
                    alt=""
                    className="apiaryPage__apiaryItem-img"
                  />
                  <p className="apiaryPage__apiaryItem-temperature-text">
                    {hive.Statistics.temperature}°С
                  </p>
                </div>

                <div className="apiaryPage__apiaryItem-humidity">
                  <img
                    src={humidity}
                    alt=""
                    className="apiaryPage__apiaryItem-img"
                  />
                  <p className="apiaryPage__apiaryItem-humidity-text">
                    {hive.Statistics.humidity}% <span>({hive.Statistics.datetime.substring(11,16)})</span>
                  </p>
                </div>
              </div>
              <div className="apiaryPage__apiaryItem-status">
                <img src={statusGreen} alt="" />
              </div>
            </div>
        ))}
        
      </div>
    </div>
  );
};

export default ApiaryPage;
