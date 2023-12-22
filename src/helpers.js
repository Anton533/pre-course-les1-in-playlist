export function createElementWithClass(tagName, ...classNames) {
  const ele = document.createElement(tagName);
  classNames.forEach((c) => ele.classList.add(c));
  return ele;
}

export function createEle(tagName, props) {
  const ele = document.createElement(tagName);
  Object.entries(props).forEach(([key, value]) => {
    ele.setAttribute(key, value);
  });
  return ele;
}

export function secondsToMinutesAndSeconds(time) {
  const min = (time - (time % 60)) / 60;
  const sec = Math.floor(time % 60);
  return `${min}m ${sec}s`;
}
