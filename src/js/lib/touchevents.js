(function(d) {
  let ce = function(e, n) { let a = document.createEvent('CustomEvent'); a.initCustomEvent(n, true, true, e.target); e.target.dispatchEvent(a); a = null; return false; };
  let nm = true; let sp = {x: 0, y: 0}; let ep = {x: 0, y: 0};
  let touch = {
    touchstart: function(e) { sp = {x: e.touches[0].pageX, y: e.touches[0].pageY}; },
    touchmove: function(e) { nm = false; ep = {x: e.touches[0].pageX, y: e.touches[0].pageY}; },
    touchend: function(e) { if (nm) { ce(e, 'fc'); } else { let x = ep.x - sp.x; let xr = Math.abs(x); let y = ep.y - sp.y; let yr = Math.abs(y); if (Math.max(xr, yr) > 20) { ce(e, (xr > yr ? (x < 0 ? 'swl' : 'swr') : (y < 0 ? 'swu' : 'swd'))); } }nm = true; },
    touchcancel: function(e) { nm = false; }
  };
  for (let i in touch) { d.addEventListener(i, touch[i], false); }
})(document);
