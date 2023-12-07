'use strict';

const logoContainer = document.querySelector('.logo');
logoContainer.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C6.476 2 2 6.476 2 12C2 17.524 6.476 22 12 22C17.524 22 22 17.524 22 12C22 6.476 17.524 2 12 2Z"
              fill="none"
              stroke="hsl(35, 75%, 55%)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path d="M5 5V19H12V17H7V5Z" fill="hsl(35, 75%, 55%)"></path>
            <path
              d="M13 5.75H17C18.6569 5.75 20 7.09315 20 8.75C20 10.4069 18.6569 11.75 17 11.75H13V5.75Z"
              fill="none"
              stroke="hsl(35, 75%, 55%)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13 12.25H17C18.6569 12.25 20 13.5931 20 15.25C20 16.9069 18.6569 18.25 17 18.25H13V12.25Z"
              fill="none"
              stroke="hsl(35, 75%, 55%)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></svg
        >`;

const nav = document.querySelector('.nav');
const div = document.createElement('div');
nav.appendChild(div);
div.innerHTML = `  <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="pointer iconify iconify--line-md"
            aria-label="Toggle Dark Mode"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <defs>
              <mask id="iconifyReact9">
                <circle cx="7.5" cy="7.5" r="5.5" fill="#fff"></circle>
                <circle cx="7.5" cy="7.5" r="5.5">
                  <animate
                    fill="freeze"
                    attributeName="cx"
                    dur="0.4s"
                    values="7.5;11"
                  ></animate>
                  <animate
                    fill="freeze"
                    attributeName="r"
                    dur="0.4s"
                    values="5.5;6.5"
                  ></animate>
                </circle>
              </mask>
              <mask id="iconifyReact10">
                <g fill="#fff">
                  <circle cx="12" cy="9" r="5.5">
                    <animate
                      fill="freeze"
                      attributeName="cy"
                      begin="1s"
                      dur="0.5s"
                      values="9;15"
                    ></animate>
                  </circle>
                  <g fill-opacity="0">
                    <use
                      href="#iconifyReact11"
                      transform="rotate(-75 12 15)"
                    ></use>
                    <use
                      href="#iconifyReact11"
                      transform="rotate(-25 12 15)"
                    ></use>
                    <use
                      href="#iconifyReact11"
                      transform="rotate(25 12 15)"
                    ></use>
                    <use
                      href="#iconifyReact11"
                      transform="rotate(75 12 15)"
                    ></use>
                    <set attributeName="fill-opacity" begin="1.5s" to="1"></set>
                  </g>
                </g>
                <path d="M0 10h26v5h-26z"></path>
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-dasharray="26"
                  stroke-dashoffset="26"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M1 12h22"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.4s"
                    values="26;52"
                  ></animate>
                </path>
              </mask>
              <symbol id="iconifyReact11">
                <path d="M0 0">
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.5s"
                    dur="0.4s"
                    values="M11 18h2L12 20z;M10.5 21.5h3L12 24z"
                  ></animate>
                </path>
              </symbol>
            </defs>
            <g fill="currentColor">
              <rect
                width="13"
                height="13"
                x="1"
                y="1"
                mask="url(#iconifyReact9)"
              ></rect>
              <path
                d="M-2 11h28v13h-28z"
                mask="url(#iconifyReact10)"
                transform="rotate(-45 12 12)"
              ></path>
            </g>
          </svg>
        `;
