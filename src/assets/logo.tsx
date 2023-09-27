"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

export function Logo(props: {
  className?: string;
  size?: number;
  fill?: string;
  transform?: string;
  height?: number;
  width?: number;
}) {
  const size = props.size || 1;
  const height = props.height || 245;
  const width = props.width || 540;
  return (
    <svg
      transform={props.transform}
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width={width * size}
      height={height * size} // 245
      viewBox={`0 0 ${width} ${height}`}
    >
      <g>
        <path
          fill={props.fill}
          d="m255.33,1c12.59,-0.15 29.94,-1.54 39.79,1c41.63,10.71 72.99,34.76 88.55,71.15c3.52,8.26 5.84,18.1 7.95,27.05c4.18,17.74 0.26,41.92 -3.98,55.11c-14.69,45.72 -45.26,73.41 -93.52,85.18c-17.32,4.22 -44.75,1.57 -58.7,-3.01c-40.53,-13.3 -70,-42.23 -82.49,-84.17c-3.21,-10.73 -5.59,-36.65 -3.98,-48.48c2.07,-10.77 3.89,-19.58 8.89,-30.75c12.24,-30.14 37.21,-52.26 66.66,-65.06c7.35,-3.18 23.34,-7.58 30.83,-8.01zm-59.27,1.74c1.08,0.53 0.87,1.37 0,2c-11.22,7.26 -17.31,12.93 -26.28,22.31c-3.32,3.47 -15.92,21.03 -17.91,25.05c-10.05,-0.21 -23.55,0 -35.81,0a71.32,71.64 0 0 0 -19.9,5.02c-19.25,8.14 -34.15,26.15 -40.79,47.1c-5.78,18.24 -1.99,53.78 -1.99,76.15l0,20.04c-5.64,25.01 -22.22,44.07 -52.56,44.09l0.61,-71.45c0,-21.47 -2.41,-52.83 2.21,-71.84c11.65,-47.9 42.16,-80.53 87.55,-94.2c24.12,-7.26 74.71,-4.35 104.87,-4.27zm292.07,-0.65l51.73,0c0.76,46.78 -8.71,77.44 -27.86,103.12c-5.53,7.42 -14.48,12.42 -20.89,19.04l1,0l20.89,20.04c18.79,25.4 26.57,51.84 26.86,97.2l-51.73,0c0.13,-12.08 1.96,-27.67 -1,-38.08c-10.25,-36.06 -35.36,-56.62 -82.57,-56.11l0,0c3.63,-13.51 3.68,-35.18 1.47,-48.1c49.06,1.27 76.35,-27.97 81.89,-65.13c0.93,-9.69 0.35,-22.48 0.21,-31.98zm-219.87,47.01c-6.2,0.01 -19.28,2.99 -25.87,6.01c-15.63,7.18 -32.3,23.19 -38.93,39.47c-13.46,38.17 9.58,75.01 27.67,86.13c6.14,5.14 25.39,12.73 40.15,12.98c40.82,-2.52 54.92,-18.65 65.62,-44.39c21.6,-52 -20.27,-99.99 -68.65,-100.2l0.01,0z"
        />
      </g>
    </svg>
  );
}

export function LogoAnimated(props: { className?: string }) {
  var langChanged = false;
  if (typeof localStorage !== "undefined" && localStorage.getItem("langChanged") == "true") {
    langChanged = true;
    localStorage.setItem("langChanged", "false")
  }

  const [started, setStarted] = useState(langChanged);
  const [removeOld, setRemoveOld] = useState(langChanged);
  const [fade, setFade] = useState(langChanged);

  function activeFade() {
    setFade(true);
  }
  function removeOldLogo() {
    setRemoveOld(true);
  }
  useEffect(() => {
    if (started) {
      setTimeout(removeOldLogo, 200);
      setTimeout(activeFade, 5000);
    }
  });

  return (
    <div
      onClick={() => setStarted(true)}
      className={clsx("relative ", props.className)}
    >
      <div>
        <Started
          className={clsx(
            removeOld ? "absolute opacity-0" : "absolute opacity-100"
          )}
        />
        <div className={clsx(fade ? "transition-all opacity-0 duration-1000" : "opacity-100")}>
          <Animated
            className={clsx(
              started ? "absolute opacity-100" : "opacity-0 absolute hidden"
            )}
          />
        </div>
      </div>
      <div
        className={clsx(
          fade
            ? "transition-all opacity-100 duration-1000 drop-shadow-glow-blue"
            : "opacity-0"
        )}
      >
        <VerticalLogo className="absolute" />
      </div>
    </div>
  );
}

function VerticalLogo(props: { className?: string }) {
  return (
    <svg
      className={clsx(props.className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 540 540"
    >
      <linearGradient id="grad" x2="1" y2="0">
        <stop offset="0%" stopColor="#00d2ff" />
        <stop offset="100%" stopColor="#00d2ff00" />
      </linearGradient>
      <path
        fill="url(#grad)"
        d="M488.13,2.09h51.73c.76,46.78-8.71,77.44-27.86,103.12-5.53,7.42-14.48,12.42-20.89,19.04h1L513,144.29c18.79,25.4,26.57,51.84,26.86,97.2h-51.73c.13-12.08,1.96-27.67-1-38.08-10.25-36.06-35.36-56.62-82.57-56.11c3.63-13.51,3.68-35.18,1.47-48.1c49.06,1.27,76.35-27.97,81.89-65.13.93-9.69.35-22.48.21-31.98Zm-292.07.65c1.08.53.87,1.37,0,2-11.22,7.26-17.31,12.93-26.28,22.31-3.32,3.47-15.92,21.03-17.91,25.05-10.05-.21-23.55,0-35.81,0-6.83954.70113-13.54222,2.39196-19.9,5.02-19.25,8.14-34.15,26.15-40.79,47.1-5.78,18.24-1.99,53.78-1.99,76.15v20.04c-5.64,25.01-22.22,44.07-52.56,44.09l.61-71.45c0-21.47-2.41-52.83,2.21-71.84C15.29,53.31,45.8,20.68,91.19,7.01c24.12-7.26,74.71-4.35,104.87-4.27ZM255.33,1c12.59-.15,29.94-1.54,39.79,1c41.63,10.71,72.99,34.76,88.55,71.15c3.52,8.26,5.84,18.1,7.95,27.05c4.18,17.74.26,41.92-3.98,55.11-14.69,45.72-45.26,73.41-93.52,85.18-17.32,4.22-44.75,1.57-58.7-3.01-40.53-13.3-70-42.23-82.49-84.17-3.21-10.73-5.59-36.65-3.98-48.48c2.07-10.77,3.89-19.58,8.89-30.75c12.24-30.14,37.21-52.26,66.66-65.06c7.35-3.18,23.34-7.58,30.83-8.01v-.01ZM242.39,55.11c-15.63,7.18-32.3,23.19-38.93,39.47-13.46,38.17,9.58,75.01,27.67,86.13c6.14,5.14,25.39,12.73,40.15,12.98c40.82-2.52,54.92-18.65,65.62-44.39c21.59957-51.99896-20.26832-99.98807-68.64708-100.19999-6.20287.01226-19.27542,2.99114-25.86292,6.00999Z"
        transform="matrix(0 1-1 0 392.84596-.351348)"
      />
    </svg>
  );
}

function Started(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 540 540"
    >
      <path
        d="M193.18672,273.68008c6.1927,8.66018,12.76175,19.47555,20.64233,28.86725c4.93347,4.78871,10.53711,8.83642,16.63702,12.01749c18.60926,9.51406,41.98326,9.35152,62.3.97166c17.68796-7.29671,43.47367-28.16555,60.61009-42.54471h9.31933h66.22663l-48.75725,39.62208c-16.44697,13.80065-38.92101,35.80464-56.45319,44.4849-44.182,21.86511-88.78948,19.46725-128.43744-6.5166-21.06552-13.81035-51.35496-54.43505-70.68015-77.59038l68.59263.68831Zm73.33117-63.1911l-.3138,40.1535c-37.6761.6121-55.34096.84829-79.06061.88895-5.88977.0101-9.7219-.07598-19.632-.15342c0,0-17.33758-.13549-17.33758-.13549s-40.24748-.8336-76.77993-.60003v-41.66277c9.7291.1047,31.21299.24393,31.21299.24393s26.89759.21021,44.116.34477v0c13.18222.10302,38.7461.3028,38.7461.3028l53.08889.41489c0,0,18.30875.31564,25.95995.20288l-.00001-.00001Zm206.3101-.90761l.11598,40.15456c-37.66739,1.0153-55.44905.61186-79.16691.90639-5.88933.07313-9.31643.08813-19.2268.11675c0,0,0-.11676,0-.11676s-17.98446.08451-17.98446.08451-40.33574-.62457-76.86359-.00002l-.00324-40.58763c9.72966.00056,31.21381-.09015,31.21381-.09015s26.8983-.07769,44.11716-.12742v0c13.18257-.03807,38.74712-.11191,38.74712-.11191l53.09029-.15334c0,0,18.31108.11966,25.96063-.07498h.00001Z"
        transform="translate(0 0.000001)"
        fill="#fff"
      />
    </svg>
  );
}

function Animated(props: { className?: string }) {
  return (
    <object
      data="img/LOGO.svg"
      className={props.className}
      type="image/svg+xml"
    ></object>
  );
}
