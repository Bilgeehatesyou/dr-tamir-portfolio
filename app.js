(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var titles = {
    en: 'Dr. Tamir Doljinsuren · Medical Doctor',
    mn: 'Должинсүрэнгийн Тамир · Хүний их эмч'
  };
  var descriptions = {
    en: 'Dr. Tamir Doljinsuren, medical doctor and healthcare manager in Ulaanbaatar, Mongolia. Clinical practice, health management, research and Tana Khorkhon Medical.',
    mn: 'Должинсүрэнгийн Тамир, Улаанбаатар дахь хүний их эмч, эрүүл мэндийн менежер. Эмнэлзүйн туршлага, эрүүл мэндийн удирдлага, судалгаа, Тана Хорхон Медикал.'
  };

  // ---------- Language ----------
  function applyLang(lang) {
    root.setAttribute('data-lang', lang);
    root.lang = lang;
    document.title = titles[lang];
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', descriptions[lang]);
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === lang));
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
    updateHere();
    updateBranches();
  }

  // Applied synchronously so rapid toggles never leave the page between languages;
  // a short CSS fade on <main> softens the swap.
  function setLang(lang) {
    if (lang === root.getAttribute('data-lang')) return;
    applyLang(lang);
    if (reduce.matches) return;
    var main = document.getElementById('main');
    main.classList.remove('is-swapping');
    void main.offsetWidth;
    main.classList.add('is-swapping');
  }

  document.querySelectorAll('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-set-lang')); });
  });

  // ---------- "You are here" strip ----------
  var here = document.querySelector('.here');
  var hereZone = here && here.querySelector('.here__zone');
  var zones = Array.prototype.slice.call(document.querySelectorAll('[data-zone]'));
  var current = null;

  function zoneName(section) {
    var lang = root.getAttribute('data-lang');
    var span = section.querySelector('h2 [lang="' + lang + '"]');
    return span ? span.textContent : '';
  }

  function updateHere() {
    if (!here) return;
    if (!current) { here.hidden = true; return; }
    here.hidden = false;
    here.style.setProperty('--hz', getComputedStyle(current).getPropertyValue('--z'));
    if (current.id === 'contact') here.style.setProperty('--hz', 'var(--ink)');
    hereZone.textContent = zoneName(current);
  }

  // ---------- Guide line drawing ----------
  var lines = zones.map(function (z) { return z.querySelector('.zone__in, .exit__in'); });
  var ticking = false;

  function frame() {
    ticking = false;
    var vh = window.innerHeight;
    var mark = vh * 0.5;
    var active = null;
    zones.forEach(function (z, i) {
      var r = z.getBoundingClientRect();
      if (r.top <= mark && r.bottom > mark) active = z;
      if (!reduce.matches && lines[i]) {
        var p = (vh * 0.62 - r.top) / Math.max(r.height, 1);
        lines[i].style.setProperty('--p', Math.min(1, Math.max(0, p)).toFixed(4));
      }
    });
    if (active !== current) { current = active; updateHere(); }
  }

  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  reduce.addEventListener && reduce.addEventListener('change', function () {
    if (reduce.matches) lines.forEach(function (l) { l && l.style.removeProperty('--p'); });
    onScroll();
  });

  // ---------- Zone menus ----------
  var stacked = window.matchMedia('(max-width: 1080px)');
  var menus = Array.prototype.slice.call(document.querySelectorAll('.tabs')).map(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });
    var menu = { list: list, tabs: tabs, panels: panels, branch: list.querySelector('.tabs__branch'), index: 0 };

    function select(i, focus) {
      var prevPanel = panels[menu.index];
      var top = prevPanel.getBoundingClientRect().top;
      menu.index = i;
      tabs.forEach(function (t, j) {
        var on = j === i;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        panels[j].hidden = !on;
      });
      if (focus) tabs[i].focus();
      if (stacked.matches) {
        list.scrollTo({ left: tabs[i].offsetLeft - 16, behavior: reduce.matches ? 'auto' : 'smooth' });
      }
      if (!reduce.matches) {
        panels[i].classList.remove('is-entering');
        void panels[i].offsetWidth;
        panels[i].classList.add('is-entering');
      }
      // Reading deep inside a long list and switching to a short one: bring the new panel's top back into view.
      var barH = document.querySelector('.bar').offsetHeight;
      if (top < barH) {
        window.scrollTo({ top: window.scrollY + panels[i].getBoundingClientRect().top - barH - 24, behavior: reduce.matches ? 'auto' : 'smooth' });
      }
      placeBranch(menu);
      onScroll();
    }

    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { if (i !== menu.index) select(i, false); });
      t.addEventListener('keydown', function (e) {
        var n = tabs.length, next = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (menu.index + 1) % n;
        else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (menu.index - 1 + n) % n;
        else if (e.key === 'Home') next = 0;
        else if (e.key === 'End') next = n - 1;
        if (next === null) return;
        e.preventDefault();
        select(next, true);
      });
    });
    panels.forEach(function (p, j) { p.hidden = j !== 0; });
    return menu;
  });

  function placeBranch(menu) {
    if (!menu.branch) return;
    var t = menu.tabs[menu.index];
    menu.branch.style.setProperty('--branch-y', (t.offsetTop + t.offsetHeight / 2) + 'px');
  }

  function updateBranches() {
    if (!menus) return;
    menus.forEach(function (m) {
      m.list.setAttribute('aria-orientation', stacked.matches ? 'horizontal' : 'vertical');
      placeBranch(m);
    });
  }

  window.addEventListener('resize', updateBranches);

  applyLang(root.getAttribute('data-lang') === 'mn' ? 'mn' : 'en');
  frame();
})();
