export function createEle(tagName, className) {
  const tag = document.createElement(tagName);
  tag.classList = className;
  return tag;
}
