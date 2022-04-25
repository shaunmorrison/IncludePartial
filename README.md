# IncludePartial
Universal client-side includes of HTML partials in your HTML templates via Javascript. This was made as I didn't want to ask clients to get their server-side tech compatible just to preview website HTML/CSS skins.
### Usage ###
1. Initiate `IncludePartials` object in JS and call the `.do()` method on said object. e.g.

```
import { IncludePartial } from './modules/includePartial';

const setIncludes = new IncludePartial();

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    setIncludes.do();
  }
}
```
2. In your HTML files use `<includepartial data-src="./partials/link-to-your-file.html"></includepartial>` where `data-src` is a link to your file (relative to where the initial page is being loaded from).

### Options ###
* Change the `<includepartial>` tag to anything else by altering the `markupEl` option on object initialisation e.g. 

```
import { IncludePartial } from "./modules/includePartial.js";

const setIncludes = new IncludePartial({
  markupEl: "impartial",
});

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    setIncludes.do();
  }
};
```
This would ask the script to look for an `<impartial>` tag e.g. `<impartial data-src="./partials/link-to-your-file.html"></impartial>`

### Gotchas ###
* If you are importing the IncludePartial as a JS module (as has been done here) then you'll need to include the `type='module'` attribute to your js call e.g. `<script type="module" src="./js/main.js"></script>`.
* Remember that the `data-src` is relative from the initial master page you are calling it from no matter how deep the partials > sub-partials nesting goes. 

### Licence ###
* Author Shaun Morrison / picturesandwriting.com 2022
* GNU General Public License v3.0