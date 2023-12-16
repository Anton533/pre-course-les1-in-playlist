export function createElementWithClass(tagName, className) {
  const ele = document.createElement(tagName);
  ele.classList = className;
  return ele;
}

function createEleObj(tagName, props) {
  const ele = document.createElement(tagName);
  Object.entries(props).forEach(([key, value]) => {
    ele.setAttribute(key, value);
  });
  return ele;
}
