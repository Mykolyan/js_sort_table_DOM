function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var e,r=document.querySelector("table"),n=document.querySelector("thead"),o=r.querySelector("tbody"),i=function(e){if(Array.isArray(e))return t(e)}(e=r.querySelectorAll("tbody tr"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=n.querySelectorAll("th");c[0].addEventListener("click",function(){var t=i.sort(function(t,e){var r=t.querySelector("td:nth-child(1)").textContent.trim(),n=e.querySelector("td:nth-child(1)").textContent.trim();return r.localeCompare(n)});o.innerHTML="",t.forEach(function(t){return o.appendChild(t)})}),c[1].addEventListener("click",function(){var t=i.sort(function(t,e){var r=t.querySelector("td:nth-child(2)").textContent.trim(),n=e.querySelector("td:nth-child(2)").textContent.trim();return r.localeCompare(n)});o.innerHTML="",t.forEach(function(t){return o.appendChild(t)})}),c[2].addEventListener("click",function(){var t=i.sort(function(t,e){return parseInt(t.querySelector("td:nth-child(3)").textContent.trim(),10)-parseInt(e.querySelector("td:nth-child(3)").textContent.trim(),10)});o.innerHTML="",t.forEach(function(t){return o.appendChild(t)})}),c[3].addEventListener("click",function(){var t=i.sort(function(t,e){return parseInt(t.querySelector("td:nth-child(4)").textContent.trim().replace(/[$,]/g,""),10)-parseInt(e.querySelector("td:nth-child(4)").textContent.trim().replace(/[$,]/g,""),10)});o.innerHTML="",t.forEach(function(t){return o.appendChild(t)})});
//# sourceMappingURL=index.d3afa559.js.map