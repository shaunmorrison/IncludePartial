/************************************************
 * Author Shaun Morrison / picturesandwriting.com
 * 2022
 * GNU General Public License v3.0
 ************************************************/

export class IncludePartial {
  constructor(options = {}) {
    this.markupEl = options.markupEl || "includepartial";
    this.els = [];
  }
  do() {
    this.eachPartial();
    setTimeout(() => {
      this.unwrapAll(document.querySelectorAll(this.markupEl)); //remove all includepartial markup
    }, 100);
  }
  eachPartial(isSubpartial, $subpartial) {
    if (!isSubpartial) {
      this.els = document.querySelectorAll(this.markupEl);
    } else {
      this.els = $subpartial.querySelectorAll(this.markupEl);
    }
    for (let i = 0; i < this.els.length; i++) {
      const $el = this.els[i];
      const fileName = $el.dataset.src;
      fetch(fileName)
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          const html = data.trim();
          $el.innerHTML = html;
          this.eachPartial(true, $el); //recursive to call nested 'sub-partials'
        });
    }
  }
  unwrapAll(partialsArr) {
    for (let i = 0; i < partialsArr.length; i++) {
      const $wrapper = partialsArr[i];
      // place childNodes in document fragment
      let frag = document.createDocumentFragment();
      while ($wrapper.firstChild) {
        const child = $wrapper.removeChild($wrapper.firstChild);
        frag.appendChild(child);
      }
      // replace wrapper with document fragment
      $wrapper.parentNode.replaceChild(frag, $wrapper);
    }
  }
}
