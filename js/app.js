(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        document
          .querySelector(".element-animation-header")
          .classList.add("_active");
      }, 700),
        setTimeout(() => {
          let e = new IntersectionObserver(
              function (e) {
                e.forEach((e) => {
                  e.isIntersecting && e.target.classList.add("_active");
                });
              },
              { threshold: [0.5] }
            ),
            t = document.querySelectorAll(".element-animation");
          for (let s of t) e.observe(s);
        }, 1500);
    });
  const t = document.querySelector(".nav-list"),
    s = document.querySelector(".hamburgermenu");
  s.addEventListener("click", function () {
    s.classList.toggle("open"), t.classList.toggle("active");
  }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      e = !0;
      const t = document.querySelector("header.header"),
        s = t.hasAttribute("data-scroll-show"),
        o = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
        n = t.dataset.scroll ? t.dataset.scroll : 1;
      let c,
        r = 0;
      document.addEventListener("windowScroll", function (e) {
        const a = window.scrollY;
        clearTimeout(c),
          a >= n
            ? (!t.classList.contains("_header-scroll") &&
                t.classList.add("_header-scroll"),
              s &&
                (a > r
                  ? t.classList.contains("_header-show") &&
                    t.classList.remove("_header-show")
                  : !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show"),
                (c = setTimeout(() => {
                  !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show");
                }, o))))
            : (t.classList.contains("_header-scroll") &&
                t.classList.remove("_header-scroll"),
              s &&
                t.classList.contains("_header-show") &&
                t.classList.remove("_header-show")),
          (r = a <= 0 ? 0 : a);
      });
    })();
  const o = [];
  for (
    let e = 0;
    e < document.querySelectorAll(".photo-slider div").length;
    e++
  )
    o.push(
      document.querySelectorAll(".photo-slider div")[e].dataset.background
    );
  let n = -1;
  setInterval(function () {
    n++,
      n >= o.length && (n = 0),
      (document.querySelector(".photo-slider").style.cssText =
        'background: url("' +
        o[n] +
        '") no-repeat center center; background-size: cover;');
  }, 5e3);
  const c = document.querySelectorAll(".num"),
    r = new IntersectionObserver((e) => {
      e.forEach((e) => {
        if (e.isIntersecting) {
          const t = e.target,
            s = () => {
              const e = +t.getAttribute("num"),
                o = +t.innerText,
                n = e / 100;
              o < e && ((t.innerText = Math.ceil(o + n)), setTimeout(s, 33));
            };
          s();
        }
      });
    });
  c.forEach((e) => {
    r.observe(e);
  });
})();
