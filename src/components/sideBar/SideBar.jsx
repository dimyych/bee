/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "img/sideBar/logo.png";
import exit from "img/sideBar/exit-arrow.png";

const SideBar = () => {
  return (
    <div className="sideBar ">
      <div className="sideBar__top">
        <img className="sideBar__top-logo" src={logo} alt="" />
        <img className="sideBar__top-exit" src={exit} alt="" />
      </div>

      <nav className="sideBar__nav">
        <a className="sideBar__nav-item sideBar__nav-item_active" href="#">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 10L3 8M3 8L10 1L17 8M3 8V18C3 18.5523 3.44772 19 4 19H7M17 8L19 10M17 8V18C17 18.5523 16.5523 19 16 19H13M7 19C7.55228 19 8 18.5523 8 18V14C8 13.4477 8.44772 13 9 13H11C11.5523 13 12 13.4477 12 14V18C12 18.5523 12.4477 19 13 19M7 19H13"
              stroke="#FF8A00"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2 className="sideBar__nav-item-text">Моя пасіка</h2>
        </a>
        <a className="sideBar__nav-item" href="#">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 5V1M14 5V1M5 9H15M3 19H17C18.1046 19 19 18.1046 19 17V5C19 3.89543 18.1046 3 17 3H3C1.89543 3 1 3.89543 1 5V17C1 18.1046 1.89543 19 3 19Z"
              stroke="#9CA3AF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2 className="sideBar__nav-item-text">Календар</h2>
        </a>
        <a className="sideBar__nav-item" href="#">
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 17H21V15C21 13.3431 19.6569 12 18 12C17.0444 12 16.1931 12.4468 15.6438 13.1429M16 17H6M16 17V15C16 14.3438 15.8736 13.717 15.6438 13.1429M6 17H1V15C1 13.3431 2.34315 12 4 12C4.95561 12 5.80686 12.4468 6.35625 13.1429M6 17V15C6 14.3438 6.12642 13.717 6.35625 13.1429M6.35625 13.1429C7.0935 11.301 8.89482 10 11 10C13.1052 10 14.9065 11.301 15.6438 13.1429M14 4C14 5.65685 12.6569 7 11 7C9.34315 7 8 5.65685 8 4C8 2.34315 9.34315 1 11 1C12.6569 1 14 2.34315 14 4ZM20 7C20 8.10457 19.1046 9 18 9C16.8954 9 16 8.10457 16 7C16 5.89543 16.8954 5 18 5C19.1046 5 20 5.89543 20 7ZM6 7C6 8.10457 5.10457 9 4 9C2.89543 9 2 8.10457 2 7C2 5.89543 2.89543 5 4 5C5.10457 5 6 5.89543 6 7Z"
              stroke="#9CA3AF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2 className="sideBar__nav-item-text">Працівники</h2>
        </a>
        <a className="sideBar__nav-item" href="#">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.29289 13.2929C4.90237 13.6834 4.90237 14.3166 5.29289 14.7071C5.68342 15.0976 6.31658 15.0976 6.70711 14.7071L5.29289 13.2929ZM13 9C13 10.1046 12.1046 11 11 11V13C13.2091 13 15 11.2091 15 9H13ZM9 9C9 7.89543 9.89543 7 11 7V5C8.79086 5 7 6.79086 7 9H9ZM11 7C12.1046 7 13 7.89543 13 9H15C15 6.79086 13.2091 5 11 5V7ZM8.17157 10.4142L5.29289 13.2929L6.70711 14.7071L9.58579 11.8284L8.17157 10.4142ZM11 11C10.4474 11 9.94881 10.7772 9.58579 10.4142L8.17157 11.8284C8.89434 12.5512 9.89571 13 11 13V11ZM9.58579 10.4142C9.22276 10.0512 9 9.55256 9 9H7C7 10.1043 7.44881 11.1057 8.17157 11.8284L9.58579 10.4142ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2Z"
              fill="#9CA3AF"
            />
          </svg>
          <h2 className="sideBar__nav-item-text">Спостереження</h2>
        </a>
        <a className="sideBar__nav-item" href="#">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15H17L15.5951 13.5951C15.2141 13.2141 15 12.6973 15 12.1585V9C15 6.38757 13.3304 4.16509 11 3.34142V3C11 1.89543 10.1046 1 9 1C7.89543 1 7 1.89543 7 3V3.34142C4.66962 4.16509 3 6.38757 3 9V12.1585C3 12.6973 2.78595 13.2141 2.40493 13.5951L1 15H6M12 15V16C12 17.6569 10.6569 19 9 19C7.34315 19 6 17.6569 6 16V15M12 15H6"
              stroke="#9CA3AF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2 className="sideBar__nav-item-text">Повідомлення</h2>
        </a>
        <a className="sideBar__nav-item" href="#">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L1.55279 14.2764C1.214 14.107 1 13.7607 1 13.382V2.61803C1 1.87465 1.78231 1.39116 2.44721 1.72361L7 4M7 17L13 14M7 17V4M13 14L17.5528 16.2764C18.2177 16.6088 19 16.1253 19 15.382V4.61803C19 4.23926 18.786 3.893 18.4472 3.72361L13 1M13 14V1M13 1L7 4"
              stroke="#9CA3AF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2 className="sideBar__nav-item-text">Мапа</h2>
        </a>
      </nav>

      <nav className="sideBar__secondaryNav">
        <h2 className="sideBar__secondaryNav-title">СИСТЕМА</h2>
        <a className="sideBar__secondaryNav-item" href="#">
          Технічна підтримка 24\7
        </a>
        <a className="sideBar__secondaryNav-item" href="#">
          Партнерам
        </a>
        <a className="sideBar__secondaryNav-item" href="#">
          Політика конфиденціальності
        </a>
      </nav>
    </div>
  );
};

export default SideBar;
