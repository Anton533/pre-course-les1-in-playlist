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
