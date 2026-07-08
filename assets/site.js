(function(){
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* seamless page transitions */
  document.body.classList.add("pt-in");
  if(!reduce){
    document.addEventListener("click", function(ev){
      var a = ev.target.closest ? ev.target.closest("a") : null;
      if(!a) return;
      var href = a.getAttribute("href") || "";
      if(a.target==="_blank" || href.indexOf("#")===0 || /^(mailto:|tel:|https?:\/\/)/.test(href) && a.host!==location.host) return;
      if(/^https?:/.test(href) && a.host!==location.host) return;
      if(href.indexOf("#")>-1 && a.pathname===location.pathname) return;
      ev.preventDefault();
      document.body.classList.remove("pt-in");
      document.body.classList.add("pt-out");
      setTimeout(function(){ location.href = a.href; }, 280);
    });
    window.addEventListener("pageshow", function(e){ if(e.persisted){ document.body.classList.remove("pt-out"); document.body.classList.add("pt-in"); } });
  }

  var yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  var nav = document.getElementById("nav");
  if(nav){
    var onScroll = function(){ nav.classList.toggle("scrolled", window.scrollY > 40); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive:true });
  }

  var reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduce){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold:0.16, rootMargin:"0px 0px -8% 0px" });
    reveals.forEach(function(el){ io.observe(el); });
  } else { reveals.forEach(function(el){ el.classList.add("in"); }); }

  /* Safety net: never leave content hidden. */
  setTimeout(function(){ reveals.forEach(function(el){ el.classList.add("in"); }); }, 2200);
})();
