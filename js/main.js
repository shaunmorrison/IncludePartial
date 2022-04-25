import { IncludePartial } from './modules/includePartial.js';

const setIncludes = new IncludePartial();

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    setIncludes.do();
  }
}