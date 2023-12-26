import { ele } from "../helpers.js";

export function renderCountDuration(parentElement) {
  const wrapperEle = ele("div", "playlist__count-duration-wrapper");
  const countEle = ele("span", "playlist__count");
  const durationEle = ele("span", "playlist__duration");

  wrapperEle.append(countEle, durationEle);
  parentElement.append(wrapperEle);
}
