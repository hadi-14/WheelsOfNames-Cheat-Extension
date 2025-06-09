const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index.esm-v358.js",
      "assets/index.esm2017-v358.js",
      "assets/index.esm-v3583.js",
      "assets/index.esm-v3582.js",
      "assets/esm-v358.js",
      "assets/_commonjsHelpers-v358.js",
      "assets/FaqPage-v358.js",
      "assets/QToolbar-v358.js",
      "assets/_plugin-vue_export-helper-v358.js",
      "assets/QPage-v358.js",
      "assets/QPageContainer-v358.js",
      "assets/AppFooter-v358.js",
      "assets/AppFooter-BhUctadA.css",
      "assets/AppToolbarSimple-v358.js",
      "assets/QToolbarTitle-v358.js",
      "assets/DarkModeToggle.vue_vue_type_script_setup_true_lang-v358.js",
      "assets/use-quasar-v358.js",
      "assets/AppToolbarSimple-B8xFJhSm.css",
      "assets/QBadge-v358.js",
      "assets/FaqPage-D2_iNsTb.css",
      "assets/TutorialsPage-v358.js",
      "assets/QVideo-v358.js",
      "assets/use-ratio-v358.js",
      "assets/ClassroomPage-v358.js",
      "assets/PrivacyPolicyPage-v358.js",
      "assets/QMarkupTable-v358.js",
      "assets/PrivacyPolicyPage-DKzzxG2E.css",
      "assets/TermsOfServicePage-v358.js",
      "assets/ChangelogPage-v358.js",
      "assets/ChangelogPage-CQ5zoIEk.css",
      "assets/ApiPage-v358.js",
      "assets/AboutCard-v358.js",
      "assets/Messenger-v358.js",
      "assets/ApiPage-67p9aTe_.css",
      "assets/ExportPage-v358.js",
      "assets/ExportPage-0Sx1av4-.css",
      "assets/TranslationPage-v358.js",
      "assets/AdminPage-v358.js",
      "assets/QBreadcrumbs-v358.js",
      "assets/QSpace-v358.js",
      "assets/QImg-v358.js",
      "assets/AdminPage-Cp1v64oL.css",
      "assets/ReviewWheelPage-v358.js",
      "assets/QMenu-v358.js",
      "assets/position-engine-v358.js",
      "assets/SpinningWheel-v358.js",
      "assets/SpinningWheel-DNjj7Fjb.css",
      "assets/DialogCloseIcon-v358.js",
      "assets/ReviewWheelPage-DMgnrINq.css",
      "assets/GalleryReviewPage-v358.js",
      "assets/GallerySearch-v358.js",
      "assets/QChip-v358.js",
      "assets/GallerySearch-CHWVGQxH.css",
      "assets/GalleryReviewPage-BgPjrA-Z.css",
      "assets/AdminUserPage-v358.js",
      "assets/WheelInfoCard-v358.js",
      "assets/WheelInfoCard-BdQz0ifC.css",
      "assets/AdminUserPage-BCX6Uu5x.css",
      "assets/EditWheelPage-v358.js",
      "assets/ConfettiLauncher-v358.js",
      "assets/ConfettiLauncher--ozpTpaZ.css",
      "assets/LoginDialog.vue_vue_type_script_setup_true_lang-v358.js",
      "assets/vue.BYLJNEcq-v358.js",
      "assets/EditWheelPage-BccNwFwC.css",
      "assets/SharedWheelPage-v358.js",
      "assets/SharedWheelPage-Cv5LHYpV.css",
      "assets/GalleryPage-v358.js",
      "assets/MigrateAccountPage-v358.js",
      "assets/MigrateAccountPage-CzuTiuVo.css",
      "assets/i18n-v358.js",
      "assets/en-US-v358.js",
      "assets/head-v358.js",
    ])
) => i.map((i) => d[i]);
const tm = (function () {
    const t = typeof document < "u" && document.createElement("link").relList;
    return t && t.supports && t.supports("modulepreload")
      ? "modulepreload"
      : "preload";
  })(),
  nm = function (e) {
    return "/" + e;
  },
  ul = {},
  Se = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      let o = function (c) {
        return Promise.all(
          c.map((u) =>
            Promise.resolve(u).then(
              (f) => ({
                status: "fulfilled",
                value: f,
              }),
              (f) => ({
                status: "rejected",
                reason: f,
              })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        l = a?.nonce || a?.getAttribute("nonce");
      s = o(
        n.map((c) => {
          if (((c = nm(c)), c in ul)) return;
          ul[c] = !0;
          const u = c.endsWith(".css"),
            f = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${f}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = u ? "stylesheet" : tm),
            u || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = c),
            l && d.setAttribute("nonce", l),
            document.head.appendChild(d),
            u)
          )
            return new Promise((h, g) => {
              d.addEventListener("load", h),
                d.addEventListener("error", () =>
                  g(new Error(`Unable to preload CSS for ${c}`))
                );
            });
        })
      );
    }
    function i(o) {
      const a = new Event("vite:preloadError", {
        cancelable: !0,
      });
      if (((a.payload = o), window.dispatchEvent(a), !a.defaultPrevented))
        throw o;
    }
    return s.then((o) => {
      for (const a of o || []) a.status === "rejected" && i(a.reason);
      return t().catch(i);
    });
  };
var keypressed = undefined;

document.onkeydown = function (evt) {
  evt = evt || window.event;
  if ([48, 49, 50, 51, 52, 53, 54, 55, 56, 57].includes(evt.keyCode)) {
    if (keypressed == undefined || keypressed != evt.keyCode - 48) {
      keypressed = evt.keyCode - 48;
    } else {
      keypressed = undefined;
    }
    console.log(keypressed);
  }
};

/**
 * @vue/shared v3.5.14
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function va(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ye = {},
  or = [],
  Bt = () => {},
  rm = () => !1,
  _i = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ya = (e) => e.startsWith("onUpdate:"),
  qe = Object.assign,
  ba = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  sm = Object.prototype.hasOwnProperty,
  we = (e, t) => sm.call(e, t),
  oe = Array.isArray,
  ar = (e) => ms(e) === "[object Map]",
  Ou = (e) => ms(e) === "[object Set]",
  im = (e) => ms(e) === "[object RegExp]",
  le = (e) => typeof e == "function",
  Le = (e) => typeof e == "string",
  on = (e) => typeof e == "symbol",
  Te = (e) => e !== null && typeof e == "object",
  Ru = (e) => (Te(e) || le(e)) && le(e.then) && le(e.catch),
  Mu = Object.prototype.toString,
  ms = (e) => Mu.call(e),
  om = (e) => ms(e).slice(8, -1),
  Fu = (e) => ms(e) === "[object Object]",
  _a = (e) =>
    Le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Vr = va(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  wi = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  am = /-(\w)/g,
  pt = wi((e) => e.replace(am, (t, n) => (n ? n.toUpperCase() : ""))),
  lm = /\B([A-Z])/g,
  an = wi((e) => e.replace(lm, "-$1").toLowerCase()),
  Si = wi((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Hi = wi((e) => (e ? `on${Si(e)}` : "")),
  dt = (e, t) => !Object.is(e, t),
  jr = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  $u = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  cm = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  um = (e) => {
    const t = Le(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let fl;
const Ei = () =>
  fl ||
  (fl =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function wa(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = Le(r) ? mm(r) : wa(r);
      if (s) for (const i in s) t[i] = s[i];
    }
    return t;
  } else if (Le(e) || Te(e)) return e;
}
const fm = /;(?![^(]*\))/g,
  dm = /:([^]+)/,
  hm = /\/\*[^]*?\*\//g;
function mm(e) {
  const t = {};
  return (
    e
      .replace(hm, "")
      .split(fm)
      .forEach((n) => {
        if (n) {
          const r = n.split(dm);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Sa(e) {
  let t = "";
  if (Le(e)) t = e;
  else if (oe(e))
    for (let n = 0; n < e.length; n++) {
      const r = Sa(e[n]);
      r && (t += r + " ");
    }
  else if (Te(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const gm =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  pm = va(gm);
function Du(e) {
  return !!e || e === "";
}
const qu = (e) => !!(e && e.__v_isRef === !0),
  vm = (e) =>
    Le(e)
      ? e
      : e == null
      ? ""
      : oe(e) || (Te(e) && (e.toString === Mu || !le(e.toString)))
      ? qu(e)
        ? vm(e.value)
        : JSON.stringify(e, Vu, 2)
      : String(e),
  Vu = (e, t) =>
    qu(t)
      ? Vu(e, t.value)
      : ar(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s], i) => ((n[zi(r, i) + " =>"] = s), n),
            {}
          ),
        }
      : Ou(t)
      ? {
          [`Set(${t.size})`]: [...t.values()].map((n) => zi(n)),
        }
      : on(t)
      ? zi(t)
      : Te(t) && !oe(t) && !Fu(t)
      ? String(t)
      : t,
  zi = (e, t = "") => {
    var n;
    return on(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.14
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let rt;
class ju {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = rt),
      !t && rt && (this.index = (rt.scopes || (rt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = rt;
      try {
        return (rt = this), t();
      } finally {
        rt = n;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = rt), (rt = this));
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((rt = this.prevScope), (this.prevScope = void 0));
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Ea(e) {
  return new ju(e);
}
function Ca() {
  return rt;
}
function Wu(e, t = !1) {
  rt && rt.cleanups.push(e);
}
let xe;
const Ki = new WeakSet();
class Bu {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      rt && rt.active && rt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Ki.has(this) && (Ki.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Hu(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), dl(this), zu(this);
    const t = xe,
      n = Ot;
    (xe = this), (Ot = !0);
    try {
      return this.fn();
    } finally {
      Ku(this), (xe = t), (Ot = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Ta(t);
      (this.deps = this.depsTail = void 0),
        dl(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Ki.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Lo(this) && this.run();
  }
  get dirty() {
    return Lo(this);
  }
}
let Uu = 0,
  Wr,
  Br;
function Hu(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Br), (Br = e);
    return;
  }
  (e.next = Wr), (Wr = e);
}
function ka() {
  Uu++;
}
function xa() {
  if (--Uu > 0) return;
  if (Br) {
    let t = Br;
    for (Br = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Wr; ) {
    let t = Wr;
    for (Wr = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function zu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Ku(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Ta(r), ym(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s);
  }
  (e.deps = t), (e.depsTail = n);
}
function Lo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Gu(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Gu(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === es) ||
    ((e.globalVersion = es),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Lo(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    n = xe,
    r = Ot;
  (xe = e), (Ot = !0);
  try {
    zu(e);
    const s = e.fn(e._value);
    (t.version === 0 || dt(s, e._value)) &&
      ((e.flags |= 128), (e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (xe = n), (Ot = r), Ku(e), (e.flags &= -3);
  }
}
function Ta(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) Ta(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ym(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Ot = !0;
const Qu = [];
function tn() {
  Qu.push(Ot), (Ot = !1);
}
function nn() {
  const e = Qu.pop();
  Ot = e === void 0 ? !0 : e;
}
function dl(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = xe;
    xe = void 0;
    try {
      t();
    } finally {
      xe = n;
    }
  }
}
let es = 0;
class bm {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Ci {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!xe || !Ot || xe === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== xe)
      (n = this.activeLink = new bm(xe, this)),
        xe.deps
          ? ((n.prevDep = xe.depsTail),
            (xe.depsTail.nextDep = n),
            (xe.depsTail = n))
          : (xe.deps = xe.depsTail = n),
        Xu(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = xe.depsTail),
        (n.nextDep = void 0),
        (xe.depsTail.nextDep = n),
        (xe.depsTail = n),
        xe.deps === n && (xe.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, es++, this.notify(t);
  }
  notify(t) {
    ka();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      xa();
    }
  }
}
function Xu(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Xu(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Xs = new WeakMap(),
  Wn = Symbol(""),
  Oo = Symbol(""),
  ts = Symbol("");
function st(e, t, n) {
  if (Ot && xe) {
    let r = Xs.get(e);
    r || Xs.set(e, (r = new Map()));
    let s = r.get(n);
    s || (r.set(n, (s = new Ci())), (s.map = r), (s.key = n)), s.track();
  }
}
function Qt(e, t, n, r, s, i) {
  const o = Xs.get(e);
  if (!o) {
    es++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((ka(), t === "clear")) o.forEach(a);
  else {
    const l = oe(e),
      c = l && _a(n);
    if (l && n === "length") {
      const u = Number(r);
      o.forEach((f, d) => {
        (d === "length" || d === ts || (!on(d) && d >= u)) && a(f);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && a(o.get(n)), c && a(o.get(ts)), t)
      ) {
        case "add":
          l ? c && a(o.get("length")) : (a(o.get(Wn)), ar(e) && a(o.get(Oo)));
          break;
        case "delete":
          l || (a(o.get(Wn)), ar(e) && a(o.get(Oo)));
          break;
        case "set":
          ar(e) && a(o.get(Wn));
          break;
      }
  }
  xa();
}
function _m(e, t) {
  const n = Xs.get(e);
  return n && n.get(t);
}
function Yn(e) {
  const t = ue(e);
  return t === e ? t : (st(t, "iterate", ts), Et(e) ? t : t.map(Ze));
}
function ki(e) {
  return st((e = ue(e)), "iterate", ts), e;
}
const wm = {
  __proto__: null,
  [Symbol.iterator]() {
    return Gi(this, Symbol.iterator, Ze);
  },
  concat(...e) {
    return Yn(this).concat(...e.map((t) => (oe(t) ? Yn(t) : t)));
  },
  entries() {
    return Gi(this, "entries", (e) => ((e[1] = Ze(e[1])), e));
  },
  every(e, t) {
    return Ht(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ht(this, "filter", e, t, (n) => n.map(Ze), arguments);
  },
  find(e, t) {
    return Ht(this, "find", e, t, Ze, arguments);
  },
  findIndex(e, t) {
    return Ht(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ht(this, "findLast", e, t, Ze, arguments);
  },
  findLastIndex(e, t) {
    return Ht(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Ht(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Qi(this, "includes", e);
  },
  indexOf(...e) {
    return Qi(this, "indexOf", e);
  },
  join(e) {
    return Yn(this).join(e);
  },
  lastIndexOf(...e) {
    return Qi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ht(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Cr(this, "pop");
  },
  push(...e) {
    return Cr(this, "push", e);
  },
  reduce(e, ...t) {
    return hl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return hl(this, "reduceRight", e, t);
  },
  shift() {
    return Cr(this, "shift");
  },
  some(e, t) {
    return Ht(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Cr(this, "splice", e);
  },
  toReversed() {
    return Yn(this).toReversed();
  },
  toSorted(e) {
    return Yn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Yn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Cr(this, "unshift", e);
  },
  values() {
    return Gi(this, "values", Ze);
  },
};
function Gi(e, t, n) {
  const r = ki(e),
    s = r[t]();
  return (
    r !== e &&
      !Et(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const i = s._next();
        return i.value && (i.value = n(i.value)), i;
      })),
    s
  );
}
const Sm = Array.prototype;
function Ht(e, t, n, r, s, i) {
  const o = ki(e),
    a = o !== e && !Et(e),
    l = o[t];
  if (l !== Sm[t]) {
    const f = l.apply(e, i);
    return a ? Ze(f) : f;
  }
  let c = n;
  o !== e &&
    (a
      ? (c = function (f, d) {
          return n.call(this, Ze(f), d, e);
        })
      : n.length > 2 &&
        (c = function (f, d) {
          return n.call(this, f, d, e);
        }));
  const u = l.call(o, c, r);
  return a && s ? s(u) : u;
}
function hl(e, t, n, r) {
  const s = ki(e);
  let i = n;
  return (
    s !== e &&
      (Et(e)
        ? n.length > 3 &&
          (i = function (o, a, l) {
            return n.call(this, o, a, l, e);
          })
        : (i = function (o, a, l) {
            return n.call(this, o, Ze(a), l, e);
          })),
    s[t](i, ...r)
  );
}
function Qi(e, t, n) {
  const r = ue(e);
  st(r, "iterate", ts);
  const s = r[t](...n);
  return (s === -1 || s === !1) && Ia(n[0])
    ? ((n[0] = ue(n[0])), r[t](...n))
    : s;
}
function Cr(e, t, n = []) {
  tn(), ka();
  const r = ue(e)[t].apply(e, n);
  return xa(), nn(), r;
}
const Em = va("__proto__,__v_isRef,__isVue"),
  Yu = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(on)
  );
function Cm(e) {
  on(e) || (e = String(e));
  const t = ue(this);
  return st(t, "has", e), t.hasOwnProperty(e);
}
class Ju {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return r === (s ? (i ? sf : rf) : i ? nf : tf).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const o = oe(t);
    if (!s) {
      let l;
      if (o && (l = wm[n])) return l;
      if (n === "hasOwnProperty") return Cm;
    }
    const a = Reflect.get(t, n, Pe(t) ? t : r);
    return (on(n) ? Yu.has(n) : Em(n)) || (s || st(t, "get", n), i)
      ? a
      : Pe(a)
      ? o && _a(n)
        ? a
        : a.value
      : Te(a)
      ? s
        ? Pa(a)
        : Kn(a)
      : a;
  }
}
class Zu extends Ju {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    if (!this._isShallow) {
      const l = Cn(i);
      if (
        (!Et(r) && !Cn(r) && ((i = ue(i)), (r = ue(r))),
        !oe(t) && Pe(i) && !Pe(r))
      )
        return l ? !1 : ((i.value = r), !0);
    }
    const o = oe(t) && _a(n) ? Number(n) < t.length : we(t, n),
      a = Reflect.set(t, n, r, Pe(t) ? t : s);
    return (
      t === ue(s) && (o ? dt(r, i) && Qt(t, "set", n, r) : Qt(t, "add", n, r)),
      a
    );
  }
  deleteProperty(t, n) {
    const r = we(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Qt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!on(n) || !Yu.has(n)) && st(t, "has", n), r;
  }
  ownKeys(t) {
    return st(t, "iterate", oe(t) ? "length" : Wn), Reflect.ownKeys(t);
  }
}
class ef extends Ju {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const km = new Zu(),
  xm = new ef(),
  Tm = new Zu(!0),
  Pm = new ef(!0),
  Ro = (e) => e,
  Es = (e) => Reflect.getPrototypeOf(e);
function Im(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      i = ue(s),
      o = ar(i),
      a = e === "entries" || (e === Symbol.iterator && o),
      l = e === "keys" && o,
      c = s[e](...r),
      u = n ? Ro : t ? Ys : Ze;
    return (
      !t && st(i, "iterate", l ? Oo : Wn),
      {
        next() {
          const { value: f, done: d } = c.next();
          return d
            ? {
                value: f,
                done: d,
              }
            : {
                value: a ? [u(f[0]), u(f[1])] : u(f),
                done: d,
              };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Cs(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Nm(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw,
        o = ue(i),
        a = ue(s);
      e || (dt(s, a) && st(o, "get", s), st(o, "get", a));
      const { has: l } = Es(o),
        c = t ? Ro : e ? Ys : Ze;
      if (l.call(o, s)) return c(i.get(s));
      if (l.call(o, a)) return c(i.get(a));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && st(ue(s), "iterate", Wn), Reflect.get(s, "size", s);
    },
    has(s) {
      const i = this.__v_raw,
        o = ue(i),
        a = ue(s);
      return (
        e || (dt(s, a) && st(o, "has", s), st(o, "has", a)),
        s === a ? i.has(s) : i.has(s) || i.has(a)
      );
    },
    forEach(s, i) {
      const o = this,
        a = o.__v_raw,
        l = ue(a),
        c = t ? Ro : e ? Ys : Ze;
      return (
        !e && st(l, "iterate", Wn),
        a.forEach((u, f) => s.call(i, c(u), c(f), o))
      );
    },
  };
  return (
    qe(
      n,
      e
        ? {
            add: Cs("add"),
            set: Cs("set"),
            delete: Cs("delete"),
            clear: Cs("clear"),
          }
        : {
            add(s) {
              !t && !Et(s) && !Cn(s) && (s = ue(s));
              const i = ue(this);
              return (
                Es(i).has.call(i, s) || (i.add(s), Qt(i, "add", s, s)), this
              );
            },
            set(s, i) {
              !t && !Et(i) && !Cn(i) && (i = ue(i));
              const o = ue(this),
                { has: a, get: l } = Es(o);
              let c = a.call(o, s);
              c || ((s = ue(s)), (c = a.call(o, s)));
              const u = l.call(o, s);
              return (
                o.set(s, i),
                c ? dt(i, u) && Qt(o, "set", s, i) : Qt(o, "add", s, i),
                this
              );
            },
            delete(s) {
              const i = ue(this),
                { has: o, get: a } = Es(i);
              let l = o.call(i, s);
              l || ((s = ue(s)), (l = o.call(i, s))), a && a.call(i, s);
              const c = i.delete(s);
              return l && Qt(i, "delete", s, void 0), c;
            },
            clear() {
              const s = ue(this),
                i = s.size !== 0,
                o = s.clear();
              return i && Qt(s, "clear", void 0, void 0), o;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      n[s] = Im(s, e, t);
    }),
    n
  );
}
function xi(e, t) {
  const n = Nm(e, t);
  return (r, s, i) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(we(n, s) && s in r ? n : r, s, i);
}
const Am = {
    get: xi(!1, !1),
  },
  Lm = {
    get: xi(!1, !0),
  },
  Om = {
    get: xi(!0, !1),
  },
  Rm = {
    get: xi(!0, !0),
  },
  tf = new WeakMap(),
  nf = new WeakMap(),
  rf = new WeakMap(),
  sf = new WeakMap();
function Mm(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Fm(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Mm(om(e));
}
function Kn(e) {
  return Cn(e) ? e : Ti(e, !1, km, Am, tf);
}
function of(e) {
  return Ti(e, !1, Tm, Lm, nf);
}
function Pa(e) {
  return Ti(e, !0, xm, Om, rf);
}
function $m(e) {
  return Ti(e, !0, Pm, Rm, sf);
}
function Ti(e, t, n, r, s) {
  if (!Te(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = Fm(e);
  if (i === 0) return e;
  const o = s.get(e);
  if (o) return o;
  const a = new Proxy(e, i === 2 ? r : n);
  return s.set(e, a), a;
}
function En(e) {
  return Cn(e) ? En(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Cn(e) {
  return !!(e && e.__v_isReadonly);
}
function Et(e) {
  return !!(e && e.__v_isShallow);
}
function Ia(e) {
  return e ? !!e.__v_raw : !1;
}
function ue(e) {
  const t = e && e.__v_raw;
  return t ? ue(t) : e;
}
function Gn(e) {
  return (
    !we(e, "__v_skip") && Object.isExtensible(e) && $u(e, "__v_skip", !0), e
  );
}
const Ze = (e) => (Te(e) ? Kn(e) : e),
  Ys = (e) => (Te(e) ? Pa(e) : e);
function Pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function de(e) {
  return af(e, !1);
}
function Ct(e) {
  return af(e, !0);
}
function af(e, t) {
  return Pe(e) ? e : new Dm(e, t);
}
class Dm {
  constructor(t, n) {
    (this.dep = new Ci()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : ue(t)),
      (this._value = n ? t : Ze(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || Et(t) || Cn(t);
    (t = r ? t : ue(t)),
      dt(t, n) &&
        ((this._rawValue = t),
        (this._value = r ? t : Ze(t)),
        this.dep.trigger());
  }
}
function Zt(e) {
  return Pe(e) ? e.value : e;
}
function Rt(e) {
  return le(e) ? e() : Zt(e);
}
const qm = {
  get: (e, t, n) => (t === "__v_raw" ? e : Zt(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    return Pe(s) && !Pe(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function lf(e) {
  return En(e) ? e : new Proxy(e, qm);
}
class Vm {
  constructor(t) {
    (this.__v_isRef = !0), (this._value = void 0);
    const n = (this.dep = new Ci()),
      { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    (this._get = r), (this._set = s);
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function cf(e) {
  return new Vm(e);
}
function jm(e) {
  const t = oe(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = uf(e, n);
  return t;
}
class Wm {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return _m(ue(this._object), this._key);
  }
}
class Bm {
  constructor(t) {
    (this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0);
  }
  get value() {
    return (this._value = this._getter());
  }
}
function Um(e, t, n) {
  return Pe(e)
    ? e
    : le(e)
    ? new Bm(e)
    : Te(e) && arguments.length > 1
    ? uf(e, t, n)
    : de(e);
}
function uf(e, t, n) {
  const r = e[t];
  return Pe(r) ? r : new Wm(e, t, n);
}
class Hm {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Ci(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = es - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && xe !== this))
      return Hu(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Gu(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function zm(e, t, n = !1) {
  let r, s;
  return le(e) ? (r = e) : ((r = e.get), (s = e.set)), new Hm(r, s, n);
}
const ks = {},
  Js = new WeakMap();
let Fn;
function Km(e, t = !1, n = Fn) {
  if (n) {
    let r = Js.get(n);
    r || Js.set(n, (r = [])), r.push(e);
  }
}
function Gm(e, t, n = ye) {
  const {
      immediate: r,
      deep: s,
      once: i,
      scheduler: o,
      augmentJob: a,
      call: l,
    } = n,
    c = (b) => (s ? b : Et(b) || s === !1 || s === 0 ? Xt(b, 1) : Xt(b));
  let u,
    f,
    d,
    h,
    g = !1,
    w = !1;
  if (
    (Pe(e)
      ? ((f = () => e.value), (g = Et(e)))
      : En(e)
      ? ((f = () => c(e)), (g = !0))
      : oe(e)
      ? ((w = !0),
        (g = e.some((b) => En(b) || Et(b))),
        (f = () =>
          e.map((b) => {
            if (Pe(b)) return b.value;
            if (En(b)) return c(b);
            if (le(b)) return l ? l(b, 2) : b();
          })))
      : le(e)
      ? t
        ? (f = l ? () => l(e, 2) : e)
        : (f = () => {
            if (d) {
              tn();
              try {
                d();
              } finally {
                nn();
              }
            }
            const b = Fn;
            Fn = u;
            try {
              return l ? l(e, 3, [h]) : e(h);
            } finally {
              Fn = b;
            }
          })
      : (f = Bt),
    t && s)
  ) {
    const b = f,
      P = s === !0 ? 1 / 0 : s;
    f = () => Xt(b(), P);
  }
  const x = Ca(),
    y = () => {
      u.stop(), x && x.active && ba(x.effects, u);
    };
  if (i && t) {
    const b = t;
    t = (...P) => {
      b(...P), y();
    };
  }
  let m = w ? new Array(e.length).fill(ks) : ks;
  const S = (b) => {
    if (!(!(u.flags & 1) || (!u.dirty && !b)))
      if (t) {
        const P = u.run();
        if (s || g || (w ? P.some((L, N) => dt(L, m[N])) : dt(P, m))) {
          d && d();
          const L = Fn;
          Fn = u;
          try {
            const N = [P, m === ks ? void 0 : w && m[0] === ks ? [] : m, h];
            l ? l(t, 3, N) : t(...N), (m = P);
          } finally {
            Fn = L;
          }
        }
      } else u.run();
  };
  return (
    a && a(S),
    (u = new Bu(f)),
    (u.scheduler = o ? () => o(S, !1) : S),
    (h = (b) => Km(b, !1, u)),
    (d = u.onStop =
      () => {
        const b = Js.get(u);
        if (b) {
          if (l) l(b, 4);
          else for (const P of b) P();
          Js.delete(u);
        }
      }),
    t ? (r ? S(!0) : (m = u.run())) : o ? o(S.bind(null, !0), !0) : u.run(),
    (y.pause = u.pause.bind(u)),
    (y.resume = u.resume.bind(u)),
    (y.stop = y),
    y
  );
}
function Xt(e, t = 1 / 0, n) {
  if (t <= 0 || !Te(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, Pe(e))) Xt(e.value, t, n);
  else if (oe(e)) for (let r = 0; r < e.length; r++) Xt(e[r], t, n);
  else if (Ou(e) || ar(e))
    e.forEach((r) => {
      Xt(r, t, n);
    });
  else if (Fu(e)) {
    for (const r in e) Xt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Xt(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.14
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function gs(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    ps(s, t, n);
  }
}
function Mt(e, t, n, r) {
  if (le(e)) {
    const s = gs(e, t, n, r);
    return (
      s &&
        Ru(s) &&
        s.catch((i) => {
          ps(i, t, n);
        }),
      s
    );
  }
  if (oe(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++) s.push(Mt(e[i], t, n, r));
    return s;
  }
}
function ps(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || ye;
  if (t) {
    let a = t.parent;
    const l = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](e, l, c) === !1) return;
      }
      a = a.parent;
    }
    if (i) {
      tn(), gs(i, null, 10, [e, l, c]), nn();
      return;
    }
  }
  Qm(e, n, s, r, o);
}
function Qm(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const lt = [];
let jt = -1;
const lr = [];
let pn = null,
  rr = 0;
const ff = Promise.resolve();
let Zs = null;
function ct(e) {
  const t = Zs || ff;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xm(e) {
  let t = jt + 1,
    n = lt.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = lt[r],
      i = ns(s);
    i < e || (i === e && s.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function Na(e) {
  if (!(e.flags & 1)) {
    const t = ns(e),
      n = lt[lt.length - 1];
    !n || (!(e.flags & 2) && t >= ns(n)) ? lt.push(e) : lt.splice(Xm(t), 0, e),
      (e.flags |= 1),
      df();
  }
}
function df() {
  Zs || (Zs = ff.then(mf));
}
function Ym(e) {
  oe(e)
    ? lr.push(...e)
    : pn && e.id === -1
    ? pn.splice(rr + 1, 0, e)
    : e.flags & 1 || (lr.push(e), (e.flags |= 1)),
    df();
}
function ml(e, t, n = jt + 1) {
  for (; n < lt.length; n++) {
    const r = lt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      lt.splice(n, 1),
        n--,
        r.flags & 4 && (r.flags &= -2),
        r(),
        r.flags & 4 || (r.flags &= -2);
    }
  }
}
function hf(e) {
  if (lr.length) {
    const t = [...new Set(lr)].sort((n, r) => ns(n) - ns(r));
    if (((lr.length = 0), pn)) {
      pn.push(...t);
      return;
    }
    for (pn = t, rr = 0; rr < pn.length; rr++) {
      const n = pn[rr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (pn = null), (rr = 0);
  }
}
const ns = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function mf(e) {
  try {
    for (jt = 0; jt < lt.length; jt++) {
      const t = lt[jt];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        gs(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; jt < lt.length; jt++) {
      const t = lt[jt];
      t && (t.flags &= -2);
    }
    (jt = -1),
      (lt.length = 0),
      hf(),
      (Zs = null),
      (lt.length || lr.length) && mf();
  }
}
let We = null,
  gf = null;
function ei(e) {
  const t = We;
  return (We = e), (gf = (e && e.type.__scopeId) || null), t;
}
function Jm(e, t = We, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Tl(-1);
    const i = ei(t);
    let o;
    try {
      o = e(...s);
    } finally {
      ei(i), r._d && Tl(1);
    }
    return o;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function pf(e, t) {
  if (We === null) return e;
  const n = Oi(We),
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, a, l = ye] = t[s];
    i &&
      (le(i) &&
        (i = {
          mounted: i,
          updated: i,
        }),
      i.deep && Xt(o),
      r.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: a,
        modifiers: l,
      }));
  }
  return e;
}
function An(e, t, n, r) {
  const s = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    i && (a.oldValue = i[o].value);
    let l = a.dir[r];
    l && (tn(), Mt(l, n, 8, [e.el, a, e, t]), nn());
  }
}
const vf = Symbol("_vte"),
  yf = (e) => e.__isTeleport,
  Ur = (e) => e && (e.disabled || e.disabled === ""),
  gl = (e) => e && (e.defer || e.defer === ""),
  pl = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  vl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  Mo = (e, t) => {
    const n = e && e.to;
    return Le(n) ? (t ? t(n) : null) : n;
  },
  bf = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, s, i, o, a, l, c) {
      const {
          mc: u,
          pc: f,
          pbc: d,
          o: { insert: h, querySelector: g, createText: w, createComment: x },
        } = c,
        y = Ur(t.props);
      let { shapeFlag: m, children: S, dynamicChildren: b } = t;
      if (e == null) {
        const P = (t.el = w("")),
          L = (t.anchor = w(""));
        h(P, n, r), h(L, n, r);
        const N = (k, O) => {
            m & 16 &&
              (s && s.isCE && (s.ce._teleportTarget = k),
              u(S, k, O, s, i, o, a, l));
          },
          W = () => {
            const k = (t.target = Mo(t.props, g)),
              O = _f(k, t, w, h);
            k &&
              (o !== "svg" && pl(k)
                ? (o = "svg")
                : o !== "mathml" && vl(k) && (o = "mathml"),
              y || (N(k, O), qs(t, !1)));
          };
        y && (N(n, L), qs(t, !0)),
          gl(t.props)
            ? Ve(() => {
                W(), (t.el.__isMounted = !0);
              }, i)
            : W();
      } else {
        if (gl(t.props) && !e.el.__isMounted) {
          Ve(() => {
            bf.process(e, t, n, r, s, i, o, a, l, c), delete e.el.__isMounted;
          }, i);
          return;
        }
        (t.el = e.el), (t.targetStart = e.targetStart);
        const P = (t.anchor = e.anchor),
          L = (t.target = e.target),
          N = (t.targetAnchor = e.targetAnchor),
          W = Ur(e.props),
          k = W ? n : L,
          O = W ? P : N;
        if (
          (o === "svg" || pl(L)
            ? (o = "svg")
            : (o === "mathml" || vl(L)) && (o = "mathml"),
          b
            ? (d(e.dynamicChildren, b, k, s, i, o, a), $a(e, t, !0))
            : l || f(e, t, k, O, s, i, o, a, !1),
          y)
        )
          W
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : xs(t, n, P, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const V = (t.target = Mo(t.props, g));
          V && xs(t, V, null, c, 0);
        } else W && xs(t, L, N, c, 1);
        qs(t, y);
      }
    },
    remove(e, t, n, { um: r, o: { remove: s } }, i) {
      const {
        shapeFlag: o,
        children: a,
        anchor: l,
        targetStart: c,
        targetAnchor: u,
        target: f,
        props: d,
      } = e;
      if ((f && (s(c), s(u)), i && s(l), o & 16)) {
        const h = i || !Ur(d);
        for (let g = 0; g < a.length; g++) {
          const w = a[g];
          r(w, t, n, h, !!w.dynamicChildren);
        }
      }
    },
    move: xs,
    hydrate: Zm,
  };
function xs(e, t, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: a, shapeFlag: l, children: c, props: u } = e,
    f = i === 2;
  if ((f && r(o, t, n), (!f || Ur(u)) && l & 16))
    for (let d = 0; d < c.length; d++) s(c[d], t, n, 2);
  f && r(a, t, n);
}
function Zm(
  e,
  t,
  n,
  r,
  s,
  i,
  {
    o: {
      nextSibling: o,
      parentNode: a,
      querySelector: l,
      insert: c,
      createText: u,
    },
  },
  f
) {
  const d = (t.target = Mo(t.props, l));
  if (d) {
    const h = Ur(t.props),
      g = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (h)
        (t.anchor = f(o(e), t, a(e), n, r, s, i)),
          (t.targetStart = g),
          (t.targetAnchor = g && o(g));
      else {
        t.anchor = o(e);
        let w = g;
        for (; w; ) {
          if (w && w.nodeType === 8) {
            if (w.data === "teleport start anchor") t.targetStart = w;
            else if (w.data === "teleport anchor") {
              (t.targetAnchor = w),
                (d._lpa = t.targetAnchor && o(t.targetAnchor));
              break;
            }
          }
          w = o(w);
        }
        t.targetAnchor || _f(d, t, u, c), f(g && o(g), t, d, n, r, s, i);
      }
    qs(t, h);
  }
  return t.anchor && o(t.anchor);
}
const eg = bf;
function qs(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (
      t
        ? ((r = e.el), (s = e.anchor))
        : ((r = e.targetStart), (s = e.targetAnchor));
      r && r !== s;

    )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid),
        (r = r.nextSibling);
    n.ut();
  }
}
function _f(e, t, n, r) {
  const s = (t.targetStart = n("")),
    i = (t.targetAnchor = n(""));
  return (s[vf] = i), e && (r(s, e), r(i, e)), i;
}
const vn = Symbol("_leaveCb"),
  Ts = Symbol("_enterCb");
function wf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    xt(() => {
      e.isMounted = !0;
    }),
    Tt(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const yt = [Function, Array],
  Sf = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: yt,
    onEnter: yt,
    onAfterEnter: yt,
    onEnterCancelled: yt,
    onBeforeLeave: yt,
    onLeave: yt,
    onAfterLeave: yt,
    onLeaveCancelled: yt,
    onBeforeAppear: yt,
    onAppear: yt,
    onAfterAppear: yt,
    onAppearCancelled: yt,
  },
  Ef = (e) => {
    const t = e.subTree;
    return t.component ? Ef(t.component) : t;
  },
  tg = {
    name: "BaseTransition",
    props: Sf,
    setup(e, { slots: t }) {
      const n = Ce(),
        r = wf();
      return () => {
        const s = t.default && Aa(t.default(), !0);
        if (!s || !s.length) return;
        const i = Cf(s),
          o = ue(e),
          { mode: a } = o;
        if (r.isLeaving) return Xi(i);
        const l = yl(i);
        if (!l) return Xi(i);
        let c = rs(l, o, r, n, (f) => (c = f));
        l.type !== et && kn(l, c);
        let u = n.subTree && yl(n.subTree);
        if (u && u.type !== et && !wn(l, u) && Ef(n).type !== et) {
          let f = rs(u, o, r, n);
          if ((kn(u, f), a === "out-in" && l.type !== et))
            return (
              (r.isLeaving = !0),
              (f.afterLeave = () => {
                (r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete f.afterLeave,
                  (u = void 0);
              }),
              Xi(i)
            );
          a === "in-out" && l.type !== et
            ? (f.delayLeave = (d, h, g) => {
                const w = kf(r, u);
                (w[String(u.key)] = u),
                  (d[vn] = () => {
                    h(), (d[vn] = void 0), delete c.delayedLeave, (u = void 0);
                  }),
                  (c.delayedLeave = () => {
                    g(), delete c.delayedLeave, (u = void 0);
                  });
              })
            : (u = void 0);
        } else u && (u = void 0);
        return i;
      };
    },
  };
function Cf(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== et) {
        t = n;
        break;
      }
  }
  return t;
}
const ng = tg;
function kf(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function rs(e, t, n, r, s) {
  const {
      appear: i,
      mode: o,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: u,
      onEnterCancelled: f,
      onBeforeLeave: d,
      onLeave: h,
      onAfterLeave: g,
      onLeaveCancelled: w,
      onBeforeAppear: x,
      onAppear: y,
      onAfterAppear: m,
      onAppearCancelled: S,
    } = t,
    b = String(e.key),
    P = kf(n, e),
    L = (k, O) => {
      k && Mt(k, r, 9, O);
    },
    N = (k, O) => {
      const V = O[1];
      L(k, O),
        oe(k) ? k.every((C) => C.length <= 1) && V() : k.length <= 1 && V();
    },
    W = {
      mode: o,
      persisted: a,
      beforeEnter(k) {
        let O = l;
        if (!n.isMounted)
          if (i) O = x || l;
          else return;
        k[vn] && k[vn](!0);
        const V = P[b];
        V && wn(e, V) && V.el[vn] && V.el[vn](), L(O, [k]);
      },
      enter(k) {
        let O = c,
          V = u,
          C = f;
        if (!n.isMounted)
          if (i) (O = y || c), (V = m || u), (C = S || f);
          else return;
        let G = !1;
        const $ = (k[Ts] = (ee) => {
          G ||
            ((G = !0),
            ee ? L(C, [k]) : L(V, [k]),
            W.delayedLeave && W.delayedLeave(),
            (k[Ts] = void 0));
        });
        O ? N(O, [k, $]) : $();
      },
      leave(k, O) {
        const V = String(e.key);
        if ((k[Ts] && k[Ts](!0), n.isUnmounting)) return O();
        L(d, [k]);
        let C = !1;
        const G = (k[vn] = ($) => {
          C ||
            ((C = !0),
            O(),
            $ ? L(w, [k]) : L(g, [k]),
            (k[vn] = void 0),
            P[V] === e && delete P[V]);
        });
        (P[V] = e), h ? N(h, [k, G]) : G();
      },
      clone(k) {
        const O = rs(k, t, n, r, s);
        return s && s(O), O;
      },
    };
  return W;
}
function Xi(e) {
  if (vs(e)) return (e = rn(e)), (e.children = null), e;
}
function yl(e) {
  if (!vs(e)) return yf(e.type) && e.children ? Cf(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && le(n.default)) return n.default();
  }
}
function kn(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), kn(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Aa(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === it
      ? (o.patchFlag & 128 && s++, (r = r.concat(Aa(o.children, t, a))))
      : (t || o.type !== et) &&
        r.push(
          a != null
            ? rn(o, {
                key: a,
              })
            : o
        );
  }
  if (s > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
function Tn(e, t) {
  return le(e)
    ? qe(
        {
          name: e.name,
        },
        t,
        {
          setup: e,
        }
      )
    : e;
}
function La(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ti(e, t, n, r, s = !1) {
  if (oe(e)) {
    e.forEach((g, w) => ti(g, t && (oe(t) ? t[w] : t), n, r, s));
    return;
  }
  if (Bn(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      ti(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Oi(r.component) : r.el,
    o = s ? null : i,
    { i: a, r: l } = e,
    c = t && t.r,
    u = a.refs === ye ? (a.refs = {}) : a.refs,
    f = a.setupState,
    d = ue(f),
    h = f === ye ? () => !1 : (g) => we(d, g);
  if (
    (c != null &&
      c !== l &&
      (Le(c)
        ? ((u[c] = null), h(c) && (f[c] = null))
        : Pe(c) && (c.value = null)),
    le(l))
  )
    gs(l, a, 12, [o, u]);
  else {
    const g = Le(l),
      w = Pe(l);
    if (g || w) {
      const x = () => {
        if (e.f) {
          const y = g ? (h(l) ? f[l] : u[l]) : l.value;
          s
            ? oe(y) && ba(y, i)
            : oe(y)
            ? y.includes(i) || y.push(i)
            : g
            ? ((u[l] = [i]), h(l) && (f[l] = u[l]))
            : ((l.value = [i]), e.k && (u[e.k] = l.value));
        } else
          g
            ? ((u[l] = o), h(l) && (f[l] = o))
            : w && ((l.value = o), e.k && (u[e.k] = o));
      };
      o ? ((x.id = -1), Ve(x, n)) : x();
    }
  }
}
const bl = (e) => e.nodeType === 8;
Ei().requestIdleCallback;
Ei().cancelIdleCallback;
function rg(e, t) {
  if (bl(e) && e.data === "[") {
    let n = 1,
      r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1) break;
      } else if (bl(r))
        if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
      r = r.nextSibling;
    }
  } else t(e);
}
const Bn = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
function pE(e) {
  le(e) &&
    (e = {
      loader: e,
    });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    hydrate: i,
    timeout: o,
    suspensible: a = !0,
    onError: l,
  } = e;
  let c = null,
    u,
    f = 0;
  const d = () => (f++, (c = null), h()),
    h = () => {
      let g;
      return (
        c ||
        (g = c =
          t()
            .catch((w) => {
              if (((w = w instanceof Error ? w : new Error(String(w))), l))
                return new Promise((x, y) => {
                  l(
                    w,
                    () => x(d()),
                    () => y(w),
                    f + 1
                  );
                });
              throw w;
            })
            .then((w) =>
              g !== c && c
                ? c
                : (w &&
                    (w.__esModule || w[Symbol.toStringTag] === "Module") &&
                    (w = w.default),
                  (u = w),
                  w)
            ))
      );
    };
  return Tn({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    __asyncHydrate(g, w, x) {
      const y = i
        ? () => {
            const m = i(x, (S) => rg(g, S));
            m && (w.bum || (w.bum = [])).push(m);
          }
        : x;
      u ? y() : h().then(() => !w.isUnmounted && y());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      const g = je;
      if ((La(g), u)) return () => Yi(u, g);
      const w = (S) => {
        (c = null), ps(S, g, 13, !r);
      };
      if ((a && g.suspense) || dr)
        return h()
          .then((S) => () => Yi(S, g))
          .catch(
            (S) => (
              w(S),
              () =>
                r
                  ? Me(r, {
                      error: S,
                    })
                  : null
            )
          );
      const x = de(!1),
        y = de(),
        m = de(!!s);
      return (
        s &&
          setTimeout(() => {
            m.value = !1;
          }, s),
        o != null &&
          setTimeout(() => {
            if (!x.value && !y.value) {
              const S = new Error(`Async component timed out after ${o}ms.`);
              w(S), (y.value = S);
            }
          }, o),
        h()
          .then(() => {
            (x.value = !0), g.parent && vs(g.parent.vnode) && g.parent.update();
          })
          .catch((S) => {
            w(S), (y.value = S);
          }),
        () => {
          if (x.value && u) return Yi(u, g);
          if (y.value && r)
            return Me(r, {
              error: y.value,
            });
          if (n && !m.value) return Me(n);
        }
      );
    },
  });
}
function Yi(e, t) {
  const { ref: n, props: r, children: s, ce: i } = t.vnode,
    o = Me(e, r, s);
  return (o.ref = n), (o.ce = i), delete t.vnode.ce, o;
}
const vs = (e) => e.type.__isKeepAlive,
  sg = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = Ce(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const m = t.default && t.default();
          return m && m.length === 1 ? m[0] : m;
        };
      const s = new Map(),
        i = new Set();
      let o = null;
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: c,
            um: u,
            o: { createElement: f },
          },
        } = r,
        d = f("div");
      (r.activate = (m, S, b, P, L) => {
        const N = m.component;
        c(m, S, b, 0, a),
          l(N.vnode, m, S, b, N, a, P, m.slotScopeIds, L),
          Ve(() => {
            (N.isDeactivated = !1), N.a && jr(N.a);
            const W = m.props && m.props.onVnodeMounted;
            W && _t(W, N.parent, m);
          }, a);
      }),
        (r.deactivate = (m) => {
          const S = m.component;
          si(S.m),
            si(S.a),
            c(m, d, null, 1, a),
            Ve(() => {
              S.da && jr(S.da);
              const b = m.props && m.props.onVnodeUnmounted;
              b && _t(b, S.parent, m), (S.isDeactivated = !0);
            }, a);
        });
      function h(m) {
        Ji(m), u(m, n, a, !0);
      }
      function g(m) {
        s.forEach((S, b) => {
          const P = jo(S.type);
          P && !m(P) && w(b);
        });
      }
      function w(m) {
        const S = s.get(m);
        S && (!o || !wn(S, o)) ? h(S) : o && Ji(o), s.delete(m), i.delete(m);
      }
      he(
        () => [e.include, e.exclude],
        ([m, S]) => {
          m && g((b) => Fr(m, b)), S && g((b) => !Fr(S, b));
        },
        {
          flush: "post",
          deep: !0,
        }
      );
      let x = null;
      const y = () => {
        x != null &&
          (ii(n.subTree.type)
            ? Ve(() => {
                s.set(x, Ps(n.subTree));
              }, n.subTree.suspense)
            : s.set(x, Ps(n.subTree)));
      };
      return (
        xt(y),
        Oa(y),
        Tt(() => {
          s.forEach((m) => {
            const { subTree: S, suspense: b } = n,
              P = Ps(S);
            if (m.type === P.type && m.key === P.key) {
              Ji(P);
              const L = P.component.da;
              L && Ve(L, b);
              return;
            }
            h(m);
          });
        }),
        () => {
          if (((x = null), !t.default)) return (o = null);
          const m = t.default(),
            S = m[0];
          if (m.length > 1) return (o = null), m;
          if (!fr(S) || (!(S.shapeFlag & 4) && !(S.shapeFlag & 128)))
            return (o = null), S;
          let b = Ps(S);
          if (b.type === et) return (o = null), b;
          const P = b.type,
            L = jo(Bn(b) ? b.type.__asyncResolved || {} : P),
            { include: N, exclude: W, max: k } = e;
          if ((N && (!L || !Fr(N, L))) || (W && L && Fr(W, L)))
            return (b.shapeFlag &= -257), (o = b), S;
          const O = b.key == null ? P : b.key,
            V = s.get(O);
          return (
            b.el && ((b = rn(b)), S.shapeFlag & 128 && (S.ssContent = b)),
            (x = O),
            V
              ? ((b.el = V.el),
                (b.component = V.component),
                b.transition && kn(b, b.transition),
                (b.shapeFlag |= 512),
                i.delete(O),
                i.add(O))
              : (i.add(O),
                k && i.size > parseInt(k, 10) && w(i.values().next().value)),
            (b.shapeFlag |= 256),
            (o = b),
            ii(S.type) ? S : b
          );
        }
      );
    },
  },
  vE = sg;
function Fr(e, t) {
  return oe(e)
    ? e.some((n) => Fr(n, t))
    : Le(e)
    ? e.split(",").includes(t)
    : im(e)
    ? ((e.lastIndex = 0), e.test(t))
    : !1;
}
function xf(e, t) {
  Tf(e, "a", t);
}
function Pi(e, t) {
  Tf(e, "da", t);
}
function Tf(e, t, n = je) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((Ii(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      vs(s.parent.vnode) && ig(r, t, n, s), (s = s.parent);
  }
}
function ig(e, t, n, r) {
  const s = Ii(t, e, r, !0);
  Ni(() => {
    ba(r[t], s);
  }, n);
}
function Ji(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function Ps(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Ii(e, t, n = je, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          tn();
          const a = bs(n),
            l = Mt(t, n, e, o);
          return a(), nn(), l;
        });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const ln =
    (e) =>
    (t, n = je) => {
      (!dr || e === "sp") && Ii(e, (...r) => t(...r), n);
    },
  og = ln("bm"),
  xt = ln("m"),
  Pf = ln("bu"),
  Oa = ln("u"),
  Tt = ln("bum"),
  Ni = ln("um"),
  ag = ln("sp"),
  lg = ln("rtg"),
  cg = ln("rtc");
function ug(e, t = je) {
  Ii("ec", e, t);
}
const fg = "components";
function dg(e, t) {
  return mg(fg, e, !0, t) || e;
}
const hg = Symbol.for("v-ndc");
function mg(e, t, n = !0, r = !1) {
  const s = We || je;
  if (s) {
    const i = s.type;
    {
      const a = jo(i, !1);
      if (a && (a === t || a === pt(t) || a === Si(pt(t)))) return i;
    }
    const o = _l(s[e] || i[e], t) || _l(s.appContext[e], t);
    return !o && r ? i : o;
  }
}
function _l(e, t) {
  return e && (e[t] || e[pt(t)] || e[Si(pt(t))]);
}
function yE(e, t, n, r) {
  let s;
  const i = n,
    o = oe(e);
  if (o || Le(e)) {
    const a = o && En(e);
    let l = !1,
      c = !1;
    a && ((l = !Et(e)), (c = Cn(e)), (e = ki(e))), (s = new Array(e.length));
    for (let u = 0, f = e.length; u < f; u++)
      s[u] = t(l ? (c ? Ys(Ze(e[u])) : Ze(e[u])) : e[u], u, void 0, i);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, i);
  } else if (Te(e))
    if (e[Symbol.iterator]) s = Array.from(e, (a, l) => t(a, l, void 0, i));
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        s[l] = t(e[u], u, l, i);
      }
    }
  else s = [];
  return s;
}
function bE(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (oe(r)) for (let s = 0; s < r.length; s++) e[r[s].name] = r[s].fn;
    else
      r &&
        (e[r.name] = r.key
          ? (...s) => {
              const i = r.fn(...s);
              return i && (i.key = r.key), i;
            }
          : r.fn);
  }
  return e;
}
function _E(e, t, n = {}, r, s) {
  if (We.ce || (We.parent && Bn(We.parent) && We.parent.ce))
    return (
      t !== "default" && (n.name = t),
      oi(),
      ai(it, null, [Me("slot", n, r)], 64)
    );
  let i = e[t];
  i && i._c && (i._d = !1), oi();
  const o = i && If(i(n)),
    a = n.key || (o && o.key),
    l = ai(
      it,
      {
        key: (a && !on(a) ? a : `_${t}`) + "",
      },
      o || [],
      o && e._ === 1 ? 64 : -2
    );
  return (
    !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    l
  );
}
function If(e) {
  return e.some((t) =>
    fr(t) ? !(t.type === et || (t.type === it && !If(t.children))) : !0
  )
    ? e
    : null;
}
const Fo = (e) => (e ? (Qf(e) ? Oi(e) : Fo(e.parent)) : null),
  Hr = qe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Fo(e.parent),
    $root: (e) => Fo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Af(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Na(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = ct.bind(e.proxy)),
    $watch: (e) => Fg.bind(e),
  }),
  Zi = (e, t) => e !== ye && !e.__isScriptSetup && we(e, t),
  gg = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: i,
        accessCache: o,
        type: a,
        appContext: l,
      } = e;
      let c;
      if (t[0] !== "$") {
        const h = o[t];
        if (h !== void 0)
          switch (h) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (Zi(r, t)) return (o[t] = 1), r[t];
          if (s !== ye && we(s, t)) return (o[t] = 2), s[t];
          if ((c = e.propsOptions[0]) && we(c, t)) return (o[t] = 3), i[t];
          if (n !== ye && we(n, t)) return (o[t] = 4), n[t];
          $o && (o[t] = 0);
        }
      }
      const u = Hr[t];
      let f, d;
      if (u) return t === "$attrs" && st(e.attrs, "get", ""), u(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== ye && we(n, t)) return (o[t] = 4), n[t];
      if (((d = l.config.globalProperties), we(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: i } = e;
      return Zi(s, t)
        ? ((s[t] = n), !0)
        : r !== ye && we(r, t)
        ? ((r[t] = n), !0)
        : we(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: i,
        },
      },
      o
    ) {
      let a;
      return (
        !!n[o] ||
        (e !== ye && we(e, o)) ||
        Zi(t, o) ||
        ((a = i[0]) && we(a, o)) ||
        we(r, o) ||
        we(Hr, o) ||
        we(s.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : we(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function ni(e) {
  return oe(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function wE(e, t) {
  return !e || !t
    ? e || t
    : oe(e) && oe(t)
    ? e.concat(t)
    : qe({}, ni(e), ni(t));
}
let $o = !0;
function pg(e) {
  const t = Af(e),
    n = e.proxy,
    r = e.ctx;
  ($o = !1), t.beforeCreate && wl(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: i,
    methods: o,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: g,
    activated: w,
    deactivated: x,
    beforeDestroy: y,
    beforeUnmount: m,
    destroyed: S,
    unmounted: b,
    render: P,
    renderTracked: L,
    renderTriggered: N,
    errorCaptured: W,
    serverPrefetch: k,
    expose: O,
    inheritAttrs: V,
    components: C,
    directives: G,
    filters: $,
  } = t;
  if ((c && vg(c, r, null), o))
    for (const Q in o) {
      const K = o[Q];
      le(K) && (r[Q] = K.bind(n));
    }
  if (s) {
    const Q = s.call(n, n);
    Te(Q) && (e.data = Kn(Q));
  }
  if ((($o = !0), i))
    for (const Q in i) {
      const K = i[Q],
        ie = le(K) ? K.bind(n, n) : le(K.get) ? K.get.bind(n, n) : Bt,
        ce = !le(K) && le(K.set) ? K.set.bind(n) : Bt,
        fe = M({
          get: ie,
          set: ce,
        });
      Object.defineProperty(r, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => fe.value,
        set: (z) => (fe.value = z),
      });
    }
  if (a) for (const Q in a) Nf(a[Q], r, n, Q);
  if (l) {
    const Q = le(l) ? l.call(n) : l;
    Reflect.ownKeys(Q).forEach((K) => {
      Vs(K, Q[K]);
    });
  }
  u && wl(u, e, "c");
  function J(Q, K) {
    oe(K) ? K.forEach((ie) => Q(ie.bind(n))) : K && Q(K.bind(n));
  }
  if (
    (J(og, f),
    J(xt, d),
    J(Pf, h),
    J(Oa, g),
    J(xf, w),
    J(Pi, x),
    J(ug, W),
    J(cg, L),
    J(lg, N),
    J(Tt, m),
    J(Ni, b),
    J(ag, k),
    oe(O))
  )
    if (O.length) {
      const Q = e.exposed || (e.exposed = {});
      O.forEach((K) => {
        Object.defineProperty(Q, K, {
          get: () => n[K],
          set: (ie) => (n[K] = ie),
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === Bt && (e.render = P),
    V != null && (e.inheritAttrs = V),
    C && (e.components = C),
    G && (e.directives = G),
    k && La(e);
}
function vg(e, t, n = Bt) {
  oe(e) && (e = Do(e));
  for (const r in e) {
    const s = e[r];
    let i;
    Te(s)
      ? "default" in s
        ? (i = ut(s.from || r, s.default, !0))
        : (i = ut(s.from || r))
      : (i = ut(s)),
      Pe(i)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[r] = i);
  }
}
function wl(e, t, n) {
  Mt(oe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Nf(e, t, n, r) {
  let s = r.includes(".") ? Bf(n, r) : () => n[r];
  if (Le(e)) {
    const i = t[e];
    le(i) && he(s, i);
  } else if (le(e)) he(s, e.bind(n));
  else if (Te(e))
    if (oe(e)) e.forEach((i) => Nf(i, t, n, r));
    else {
      const i = le(e.handler) ? e.handler.bind(n) : t[e.handler];
      le(i) && he(s, i, e);
    }
}
function Af(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    a = i.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !s.length && !n && !r
      ? (l = t)
      : ((l = {}), s.length && s.forEach((c) => ri(l, c, o, !0)), ri(l, t, o)),
    Te(t) && i.set(t, l),
    l
  );
}
function ri(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && ri(e, i, n, !0), s && s.forEach((o) => ri(e, o, n, !0));
  for (const o in t)
    if (!(r && o === "expose")) {
      const a = yg[o] || (n && n[o]);
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const yg = {
  data: Sl,
  props: El,
  emits: El,
  methods: $r,
  computed: $r,
  beforeCreate: ot,
  created: ot,
  beforeMount: ot,
  mounted: ot,
  beforeUpdate: ot,
  updated: ot,
  beforeDestroy: ot,
  beforeUnmount: ot,
  destroyed: ot,
  unmounted: ot,
  activated: ot,
  deactivated: ot,
  errorCaptured: ot,
  serverPrefetch: ot,
  components: $r,
  directives: $r,
  watch: _g,
  provide: Sl,
  inject: bg,
};
function Sl(e, t) {
  return t
    ? e
      ? function () {
          return qe(
            le(e) ? e.call(this, this) : e,
            le(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function bg(e, t) {
  return $r(Do(e), Do(t));
}
function Do(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ot(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function $r(e, t) {
  return e ? qe(Object.create(null), e, t) : t;
}
function El(e, t) {
  return e
    ? oe(e) && oe(t)
      ? [...new Set([...e, ...t])]
      : qe(Object.create(null), ni(e), ni(t ?? {}))
    : t;
}
function _g(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = qe(Object.create(null), e);
  for (const r in t) n[r] = ot(e[r], t[r]);
  return n;
}
function Lf() {
  return {
    app: null,
    config: {
      isNativeTag: rm,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let wg = 0;
function Sg(e, t) {
  return function (r, s = null) {
    le(r) || (r = qe({}, r)), s != null && !Te(s) && (s = null);
    const i = Lf(),
      o = new WeakSet(),
      a = [];
    let l = !1;
    const c = (i.app = {
      _uid: wg++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: np,
      get config() {
        return i.config;
      },
      set config(u) {},
      use(u, ...f) {
        return (
          o.has(u) ||
            (u && le(u.install)
              ? (o.add(u), u.install(c, ...f))
              : le(u) && (o.add(u), u(c, ...f))),
          c
        );
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), c;
      },
      component(u, f) {
        return f ? ((i.components[u] = f), c) : i.components[u];
      },
      directive(u, f) {
        return f ? ((i.directives[u] = f), c) : i.directives[u];
      },
      mount(u, f, d) {
        if (!l) {
          const h = c._ceVNode || Me(r, s);
          return (
            (h.appContext = i),
            d === !0 ? (d = "svg") : d === !1 && (d = void 0),
            e(h, u, d),
            (l = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            Oi(h.component)
          );
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        l &&
          (Mt(a, c._instance, 16),
          e(null, c._container),
          delete c._container.__vue_app__);
      },
      provide(u, f) {
        return (i.provides[u] = f), c;
      },
      runWithContext(u) {
        const f = Un;
        Un = c;
        try {
          return u();
        } finally {
          Un = f;
        }
      },
    });
    return c;
  };
}
let Un = null;
function Vs(e, t) {
  if (je) {
    let n = je.provides;
    const r = je.parent && je.parent.provides;
    r === n && (n = je.provides = Object.create(r)), (n[e] = t);
  }
}
function ut(e, t, n = !1) {
  const r = je || We;
  if (r || Un) {
    const s = Un
      ? Un._context.provides
      : r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && le(t) ? t.call(r && r.proxy) : t;
  }
}
function Ra() {
  return !!(je || We || Un);
}
const Of = {},
  Rf = () => Object.create(Of),
  Mf = (e) => Object.getPrototypeOf(e) === Of;
function Eg(e, t, n, r = !1) {
  const s = {},
    i = Rf();
  (e.propsDefaults = Object.create(null)), Ff(e, t, s, i);
  for (const o in e.propsOptions[0]) o in s || (s[o] = void 0);
  n ? (e.props = r ? s : of(s)) : e.type.props ? (e.props = s) : (e.props = i),
    (e.attrs = i);
}
function Cg(e, t, n, r) {
  const {
      props: s,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    a = ue(s),
    [l] = e.propsOptions;
  let c = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (Li(e.emitsOptions, d)) continue;
        const h = t[d];
        if (l)
          if (we(i, d)) h !== i[d] && ((i[d] = h), (c = !0));
          else {
            const g = pt(d);
            s[g] = qo(l, a, g, h, e, !1);
          }
        else h !== i[d] && ((i[d] = h), (c = !0));
      }
    }
  } else {
    Ff(e, t, s, i) && (c = !0);
    let u;
    for (const f in a)
      (!t || (!we(t, f) && ((u = an(f)) === f || !we(t, u)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (s[f] = qo(l, a, f, void 0, e, !0))
          : delete s[f]);
    if (i !== a)
      for (const f in i) (!t || !we(t, f)) && (delete i[f], (c = !0));
  }
  c && Qt(e.attrs, "set", "");
}
function Ff(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1,
    a;
  if (t)
    for (let l in t) {
      if (Vr(l)) continue;
      const c = t[l];
      let u;
      s && we(s, (u = pt(l)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : Li(e.emitsOptions, l) ||
          ((!(l in r) || c !== r[l]) && ((r[l] = c), (o = !0)));
    }
  if (i) {
    const l = ue(n),
      c = a || ye;
    for (let u = 0; u < i.length; u++) {
      const f = i[u];
      n[f] = qo(s, l, f, c[f], e, !we(c, f));
    }
  }
  return o;
}
function qo(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const a = we(o, "default");
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && le(l)) {
        const { propsDefaults: c } = s;
        if (n in c) r = c[n];
        else {
          const u = bs(s);
          (r = c[n] = l.call(null, t)), u();
        }
      } else r = l;
      s.ce && s.ce._setProp(n, r);
    }
    o[0] &&
      (i && !a ? (r = !1) : o[1] && (r === "" || r === an(n)) && (r = !0));
  }
  return r;
}
const kg = new WeakMap();
function $f(e, t, n = !1) {
  const r = n ? kg : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const i = e.props,
    o = {},
    a = [];
  let l = !1;
  if (!le(e)) {
    const u = (f) => {
      l = !0;
      const [d, h] = $f(f, t, !0);
      qe(o, d), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!i && !l) return Te(e) && r.set(e, or), or;
  if (oe(i))
    for (let u = 0; u < i.length; u++) {
      const f = pt(i[u]);
      Cl(f) && (o[f] = ye);
    }
  else if (i)
    for (const u in i) {
      const f = pt(u);
      if (Cl(f)) {
        const d = i[u],
          h = (o[f] =
            oe(d) || le(d)
              ? {
                  type: d,
                }
              : qe({}, d)),
          g = h.type;
        let w = !1,
          x = !0;
        if (oe(g))
          for (let y = 0; y < g.length; ++y) {
            const m = g[y],
              S = le(m) && m.name;
            if (S === "Boolean") {
              w = !0;
              break;
            } else S === "String" && (x = !1);
          }
        else w = le(g) && g.name === "Boolean";
        (h[0] = w), (h[1] = x), (w || we(h, "default")) && a.push(f);
      }
    }
  const c = [o, a];
  return Te(e) && r.set(e, c), c;
}
function Cl(e) {
  return e[0] !== "$" && !Vr(e);
}
const Ma = (e) => e[0] === "_" || e === "$stable",
  Fa = (e) => (oe(e) ? e.map(Wt) : [Wt(e)]),
  xg = (e, t, n) => {
    if (t._n) return t;
    const r = Jm((...s) => Fa(t(...s)), n);
    return (r._c = !1), r;
  },
  Df = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Ma(s)) continue;
      const i = e[s];
      if (le(i)) t[s] = xg(s, i, r);
      else if (i != null) {
        const o = Fa(i);
        t[s] = () => o;
      }
    }
  },
  qf = (e, t) => {
    const n = Fa(t);
    e.slots.default = () => n;
  },
  Vf = (e, t, n) => {
    for (const r in t) (n || !Ma(r)) && (e[r] = t[r]);
  },
  Tg = (e, t, n) => {
    const r = (e.slots = Rf());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (Vf(r, t, n), n && $u(r, "_", s, !0)) : Df(t, r);
    } else t && qf(e, t);
  },
  Pg = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let i = !0,
      o = ye;
    if (r.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (i = !1)
          : Vf(s, t, n)
        : ((i = !t.$stable), Df(t, s)),
        (o = t);
    } else
      t &&
        (qf(e, t),
        (o = {
          default: 1,
        }));
    if (i) for (const a in s) !Ma(a) && o[a] == null && delete s[a];
  },
  Ve = Wg;
function Ig(e) {
  return Ng(e);
}
function Ng(e, t) {
  const n = Ei();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: i,
      createElement: o,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: d,
      setScopeId: h = Bt,
      insertStaticContent: g,
    } = e,
    w = (
      _,
      E,
      A,
      j = null,
      U = null,
      B = null,
      p = void 0,
      v = null,
      I = !!E.dynamicChildren
    ) => {
      if (_ === E) return;
      _ && !wn(_, E) && ((j = F(_)), z(_, U, B, !0), (_ = null)),
        E.patchFlag === -2 && ((I = !1), (E.dynamicChildren = null));
      const { type: R, ref: Z, shapeFlag: H } = E;
      switch (R) {
        case ys:
          x(_, E, A, j);
          break;
        case et:
          y(_, E, A, j);
          break;
        case js:
          _ == null && m(E, A, j, p);
          break;
        case it:
          C(_, E, A, j, U, B, p, v, I);
          break;
        default:
          H & 1
            ? P(_, E, A, j, U, B, p, v, I)
            : H & 6
            ? G(_, E, A, j, U, B, p, v, I)
            : (H & 64 || H & 128) && R.process(_, E, A, j, U, B, p, v, I, te);
      }
      Z != null && U && ti(Z, _ && _.ref, B, E || _, !E);
    },
    x = (_, E, A, j) => {
      if (_ == null) r((E.el = a(E.children)), A, j);
      else {
        const U = (E.el = _.el);
        E.children !== _.children && c(U, E.children);
      }
    },
    y = (_, E, A, j) => {
      _ == null ? r((E.el = l(E.children || "")), A, j) : (E.el = _.el);
    },
    m = (_, E, A, j) => {
      [_.el, _.anchor] = g(_.children, E, A, j, _.el, _.anchor);
    },
    S = ({ el: _, anchor: E }, A, j) => {
      let U;
      for (; _ && _ !== E; ) (U = d(_)), r(_, A, j), (_ = U);
      r(E, A, j);
    },
    b = ({ el: _, anchor: E }) => {
      let A;
      for (; _ && _ !== E; ) (A = d(_)), s(_), (_ = A);
      s(E);
    },
    P = (_, E, A, j, U, B, p, v, I) => {
      E.type === "svg" ? (p = "svg") : E.type === "math" && (p = "mathml"),
        _ == null ? L(E, A, j, U, B, p, v, I) : k(_, E, U, B, p, v, I);
    },
    L = (_, E, A, j, U, B, p, v) => {
      let I, R;
      const { props: Z, shapeFlag: H, transition: T, dirs: D } = _;
      if (
        ((I = _.el = o(_.type, B, Z && Z.is, Z)),
        H & 8
          ? u(I, _.children)
          : H & 16 && W(_.children, I, null, j, U, eo(_, B), p, v),
        D && An(_, null, j, "created"),
        N(I, _, _.scopeId, p, j),
        Z)
      ) {
        for (const ae in Z)
          ae !== "value" && !Vr(ae) && i(I, ae, null, Z[ae], B, j);
        "value" in Z && i(I, "value", null, Z.value, B),
          (R = Z.onVnodeBeforeMount) && _t(R, j, _);
      }
      D && An(_, null, j, "beforeMount");
      const re = Ag(U, T);
      re && T.beforeEnter(I),
        r(I, E, A),
        ((R = Z && Z.onVnodeMounted) || re || D) &&
          Ve(() => {
            R && _t(R, j, _), re && T.enter(I), D && An(_, null, j, "mounted");
          }, U);
    },
    N = (_, E, A, j, U) => {
      if ((A && h(_, A), j)) for (let B = 0; B < j.length; B++) h(_, j[B]);
      if (U) {
        let B = U.subTree;
        if (
          E === B ||
          (ii(B.type) && (B.ssContent === E || B.ssFallback === E))
        ) {
          const p = U.vnode;
          N(_, p, p.scopeId, p.slotScopeIds, U.parent);
        }
      }
    },
    W = (_, E, A, j, U, B, p, v, I = 0) => {
      for (let R = I; R < _.length; R++) {
        const Z = (_[R] = v ? yn(_[R]) : Wt(_[R]));
        w(null, Z, E, A, j, U, B, p, v);
      }
    },
    k = (_, E, A, j, U, B, p) => {
      const v = (E.el = _.el);
      let { patchFlag: I, dynamicChildren: R, dirs: Z } = E;
      I |= _.patchFlag & 16;
      const H = _.props || ye,
        T = E.props || ye;
      let D;
      if (
        (A && Ln(A, !1),
        (D = T.onVnodeBeforeUpdate) && _t(D, A, E, _),
        Z && An(E, _, A, "beforeUpdate"),
        A && Ln(A, !0),
        ((H.innerHTML && T.innerHTML == null) ||
          (H.textContent && T.textContent == null)) &&
          u(v, ""),
        R
          ? O(_.dynamicChildren, R, v, A, j, eo(E, U), B)
          : p || K(_, E, v, null, A, j, eo(E, U), B, !1),
        I > 0)
      ) {
        if (I & 16) V(v, H, T, A, U);
        else if (
          (I & 2 && H.class !== T.class && i(v, "class", null, T.class, U),
          I & 4 && i(v, "style", H.style, T.style, U),
          I & 8)
        ) {
          const re = E.dynamicProps;
          for (let ae = 0; ae < re.length; ae++) {
            const me = re[ae],
              Ke = H[me],
              Re = T[me];
            (Re !== Ke || me === "value") && i(v, me, Ke, Re, U, A);
          }
        }
        I & 1 && _.children !== E.children && u(v, E.children);
      } else !p && R == null && V(v, H, T, A, U);
      ((D = T.onVnodeUpdated) || Z) &&
        Ve(() => {
          D && _t(D, A, E, _), Z && An(E, _, A, "updated");
        }, j);
    },
    O = (_, E, A, j, U, B, p) => {
      for (let v = 0; v < E.length; v++) {
        const I = _[v],
          R = E[v],
          Z =
            I.el && (I.type === it || !wn(I, R) || I.shapeFlag & 70)
              ? f(I.el)
              : A;
        w(I, R, Z, null, j, U, B, p, !0);
      }
    },
    V = (_, E, A, j, U) => {
      if (E !== A) {
        if (E !== ye)
          for (const B in E) !Vr(B) && !(B in A) && i(_, B, E[B], null, U, j);
        for (const B in A) {
          if (Vr(B)) continue;
          const p = A[B],
            v = E[B];
          p !== v && B !== "value" && i(_, B, v, p, U, j);
        }
        "value" in A && i(_, "value", E.value, A.value, U);
      }
    },
    C = (_, E, A, j, U, B, p, v, I) => {
      const R = (E.el = _ ? _.el : a("")),
        Z = (E.anchor = _ ? _.anchor : a(""));
      let { patchFlag: H, dynamicChildren: T, slotScopeIds: D } = E;
      D && (v = v ? v.concat(D) : D),
        _ == null
          ? (r(R, A, j), r(Z, A, j), W(E.children || [], A, Z, U, B, p, v, I))
          : H > 0 && H & 64 && T && _.dynamicChildren
          ? (O(_.dynamicChildren, T, A, U, B, p, v),
            (E.key != null || (U && E === U.subTree)) && $a(_, E, !0))
          : K(_, E, A, Z, U, B, p, v, I);
    },
    G = (_, E, A, j, U, B, p, v, I) => {
      (E.slotScopeIds = v),
        _ == null
          ? E.shapeFlag & 512
            ? U.ctx.activate(E, A, j, p, I)
            : $(E, A, j, U, B, p, I)
          : ee(_, E, I);
    },
    $ = (_, E, A, j, U, B, p) => {
      const v = (_.component = Xg(_, j, U));
      if ((vs(_) && (v.ctx.renderer = te), Yg(v, !1, p), v.asyncDep)) {
        if ((U && U.registerDep(v, J, p), !_.el)) {
          const I = (v.subTree = Me(et));
          y(null, I, E, A);
        }
      } else J(v, _, E, A, U, B, p);
    },
    ee = (_, E, A) => {
      const j = (E.component = _.component);
      if (Vg(_, E, A))
        if (j.asyncDep && !j.asyncResolved) {
          Q(j, E, A);
          return;
        } else (j.next = E), j.update();
      else (E.el = _.el), (j.vnode = E);
    },
    J = (_, E, A, j, U, B, p) => {
      const v = () => {
        if (_.isMounted) {
          let { next: H, bu: T, u: D, parent: re, vnode: ae } = _;
          {
            const Pt = jf(_);
            if (Pt) {
              H && ((H.el = ae.el), Q(_, H, p)),
                Pt.asyncDep.then(() => {
                  _.isUnmounted || v();
                });
              return;
            }
          }
          let me = H,
            Ke;
          Ln(_, !1),
            H ? ((H.el = ae.el), Q(_, H, p)) : (H = ae),
            T && jr(T),
            (Ke = H.props && H.props.onVnodeBeforeUpdate) && _t(Ke, re, H, ae),
            Ln(_, !0);
          const Re = kl(_),
            vt = _.subTree;
          (_.subTree = Re),
            w(vt, Re, f(vt.el), F(vt), _, U, B),
            (H.el = Re.el),
            me === null && jg(_, Re.el),
            D && Ve(D, U),
            (Ke = H.props && H.props.onVnodeUpdated) &&
              Ve(() => _t(Ke, re, H, ae), U);
        } else {
          let H;
          const { el: T, props: D } = E,
            { bm: re, m: ae, parent: me, root: Ke, type: Re } = _,
            vt = Bn(E);
          Ln(_, !1),
            re && jr(re),
            !vt && (H = D && D.onVnodeBeforeMount) && _t(H, me, E),
            Ln(_, !0);
          {
            Ke.ce && Ke.ce._injectChildStyle(Re);
            const Pt = (_.subTree = kl(_));
            w(null, Pt, A, j, _, U, B), (E.el = Pt.el);
          }
          if ((ae && Ve(ae, U), !vt && (H = D && D.onVnodeMounted))) {
            const Pt = E;
            Ve(() => _t(H, me, Pt), U);
          }
          (E.shapeFlag & 256 ||
            (me && Bn(me.vnode) && me.vnode.shapeFlag & 256)) &&
            _.a &&
            Ve(_.a, U),
            (_.isMounted = !0),
            (E = A = j = null);
        }
      };
      _.scope.on();
      const I = (_.effect = new Bu(v));
      _.scope.off();
      const R = (_.update = I.run.bind(I)),
        Z = (_.job = I.runIfDirty.bind(I));
      (Z.i = _), (Z.id = _.uid), (I.scheduler = () => Na(Z)), Ln(_, !0), R();
    },
    Q = (_, E, A) => {
      E.component = _;
      const j = _.vnode.props;
      (_.vnode = E),
        (_.next = null),
        Cg(_, E.props, j, A),
        Pg(_, E.children, A),
        tn(),
        ml(_),
        nn();
    },
    K = (_, E, A, j, U, B, p, v, I = !1) => {
      const R = _ && _.children,
        Z = _ ? _.shapeFlag : 0,
        H = E.children,
        { patchFlag: T, shapeFlag: D } = E;
      if (T > 0) {
        if (T & 128) {
          ce(R, H, A, j, U, B, p, v, I);
          return;
        } else if (T & 256) {
          ie(R, H, A, j, U, B, p, v, I);
          return;
        }
      }
      D & 8
        ? (Z & 16 && ne(R, U, B), H !== R && u(A, H))
        : Z & 16
        ? D & 16
          ? ce(R, H, A, j, U, B, p, v, I)
          : ne(R, U, B, !0)
        : (Z & 8 && u(A, ""), D & 16 && W(H, A, j, U, B, p, v, I));
    },
    ie = (_, E, A, j, U, B, p, v, I) => {
      (_ = _ || or), (E = E || or);
      const R = _.length,
        Z = E.length,
        H = Math.min(R, Z);
      let T;
      for (T = 0; T < H; T++) {
        const D = (E[T] = I ? yn(E[T]) : Wt(E[T]));
        w(_[T], D, A, null, U, B, p, v, I);
      }
      R > Z ? ne(_, U, B, !0, !1, H) : W(E, A, j, U, B, p, v, I, H);
    },
    ce = (_, E, A, j, U, B, p, v, I) => {
      let R = 0;
      const Z = E.length;
      let H = _.length - 1,
        T = Z - 1;
      for (; R <= H && R <= T; ) {
        const D = _[R],
          re = (E[R] = I ? yn(E[R]) : Wt(E[R]));
        if (wn(D, re)) w(D, re, A, null, U, B, p, v, I);
        else break;
        R++;
      }
      for (; R <= H && R <= T; ) {
        const D = _[H],
          re = (E[T] = I ? yn(E[T]) : Wt(E[T]));
        if (wn(D, re)) w(D, re, A, null, U, B, p, v, I);
        else break;
        H--, T--;
      }
      if (R > H) {
        if (R <= T) {
          const D = T + 1,
            re = D < Z ? E[D].el : j;
          for (; R <= T; )
            w(null, (E[R] = I ? yn(E[R]) : Wt(E[R])), A, re, U, B, p, v, I),
              R++;
        }
      } else if (R > T) for (; R <= H; ) z(_[R], U, B, !0), R++;
      else {
        const D = R,
          re = R,
          ae = new Map();
        for (R = re; R <= T; R++) {
          const ht = (E[R] = I ? yn(E[R]) : Wt(E[R]));
          ht.key != null && ae.set(ht.key, R);
        }
        let me,
          Ke = 0;
        const Re = T - re + 1;
        let vt = !1,
          Pt = 0;
        const Er = new Array(Re);
        for (R = 0; R < Re; R++) Er[R] = 0;
        for (R = D; R <= H; R++) {
          const ht = _[R];
          if (Ke >= Re) {
            z(ht, U, B, !0);
            continue;
          }
          let Dt;
          if (ht.key != null) Dt = ae.get(ht.key);
          else
            for (me = re; me <= T; me++)
              if (Er[me - re] === 0 && wn(ht, E[me])) {
                Dt = me;
                break;
              }
          Dt === void 0
            ? z(ht, U, B, !0)
            : ((Er[Dt - re] = R + 1),
              Dt >= Pt ? (Pt = Dt) : (vt = !0),
              w(ht, E[Dt], A, null, U, B, p, v, I),
              Ke++);
        }
        const ll = vt ? Lg(Er) : or;
        for (me = ll.length - 1, R = Re - 1; R >= 0; R--) {
          const ht = re + R,
            Dt = E[ht],
            cl = ht + 1 < Z ? E[ht + 1].el : j;
          Er[R] === 0
            ? w(null, Dt, A, cl, U, B, p, v, I)
            : vt && (me < 0 || R !== ll[me] ? fe(Dt, A, cl, 2) : me--);
        }
      }
    },
    fe = (_, E, A, j, U = null) => {
      const { el: B, type: p, transition: v, children: I, shapeFlag: R } = _;
      if (R & 6) {
        fe(_.component.subTree, E, A, j);
        return;
      }
      if (R & 128) {
        _.suspense.move(E, A, j);
        return;
      }
      if (R & 64) {
        p.move(_, E, A, te);
        return;
      }
      if (p === it) {
        r(B, E, A);
        for (let H = 0; H < I.length; H++) fe(I[H], E, A, j);
        r(_.anchor, E, A);
        return;
      }
      if (p === js) {
        S(_, E, A);
        return;
      }
      if (j !== 2 && R & 1 && v)
        if (j === 0) v.beforeEnter(B), r(B, E, A), Ve(() => v.enter(B), U);
        else {
          const { leave: H, delayLeave: T, afterLeave: D } = v,
            re = () => {
              _.ctx.isUnmounted ? s(B) : r(B, E, A);
            },
            ae = () => {
              H(B, () => {
                re(), D && D();
              });
            };
          T ? T(B, re, ae) : ae();
        }
      else r(B, E, A);
    },
    z = (_, E, A, j = !1, U = !1) => {
      const {
        type: B,
        props: p,
        ref: v,
        children: I,
        dynamicChildren: R,
        shapeFlag: Z,
        patchFlag: H,
        dirs: T,
        cacheIndex: D,
      } = _;
      if (
        (H === -2 && (U = !1),
        v != null && (tn(), ti(v, null, A, _, !0), nn()),
        D != null && (E.renderCache[D] = void 0),
        Z & 256)
      ) {
        E.ctx.deactivate(_);
        return;
      }
      const re = Z & 1 && T,
        ae = !Bn(_);
      let me;
      if ((ae && (me = p && p.onVnodeBeforeUnmount) && _t(me, E, _), Z & 6))
        Oe(_.component, A, j);
      else {
        if (Z & 128) {
          _.suspense.unmount(A, j);
          return;
        }
        re && An(_, null, E, "beforeUnmount"),
          Z & 64
            ? _.type.remove(_, E, A, te, j)
            : R && !R.hasOnce && (B !== it || (H > 0 && H & 64))
            ? ne(R, E, A, !1, !0)
            : ((B === it && H & 384) || (!U && Z & 16)) && ne(I, E, A),
          j && ge(_);
      }
      ((ae && (me = p && p.onVnodeUnmounted)) || re) &&
        Ve(() => {
          me && _t(me, E, _), re && An(_, null, E, "unmounted");
        }, A);
    },
    ge = (_) => {
      const { type: E, el: A, anchor: j, transition: U } = _;
      if (E === it) {
        Ie(A, j);
        return;
      }
      if (E === js) {
        b(_);
        return;
      }
      const B = () => {
        s(A), U && !U.persisted && U.afterLeave && U.afterLeave();
      };
      if (_.shapeFlag & 1 && U && !U.persisted) {
        const { leave: p, delayLeave: v } = U,
          I = () => p(A, B);
        v ? v(_.el, B, I) : I();
      } else B();
    },
    Ie = (_, E) => {
      let A;
      for (; _ !== E; ) (A = d(_)), s(_), (_ = A);
      s(E);
    },
    Oe = (_, E, A) => {
      const {
        bum: j,
        scope: U,
        job: B,
        subTree: p,
        um: v,
        m: I,
        a: R,
        parent: Z,
        slots: { __: H },
      } = _;
      si(I),
        si(R),
        j && jr(j),
        Z &&
          oe(H) &&
          H.forEach((T) => {
            Z.renderCache[T] = void 0;
          }),
        U.stop(),
        B && ((B.flags |= 8), z(p, _, E, A)),
        v && Ve(v, E),
        Ve(() => {
          _.isUnmounted = !0;
        }, E),
        E &&
          E.pendingBranch &&
          !E.isUnmounted &&
          _.asyncDep &&
          !_.asyncResolved &&
          _.suspenseId === E.pendingId &&
          (E.deps--, E.deps === 0 && E.resolve());
    },
    ne = (_, E, A, j = !1, U = !1, B = 0) => {
      for (let p = B; p < _.length; p++) z(_[p], E, A, j, U);
    },
    F = (_) => {
      if (_.shapeFlag & 6) return F(_.component.subTree);
      if (_.shapeFlag & 128) return _.suspense.next();
      const E = d(_.anchor || _.el),
        A = E && E[vf];
      return A ? d(A) : E;
    };
  let Y = !1;
  const X = (_, E, A) => {
      _ == null
        ? E._vnode && z(E._vnode, null, null, !0)
        : w(E._vnode || null, _, E, null, null, null, A),
        (E._vnode = _),
        Y || ((Y = !0), ml(), hf(), (Y = !1));
    },
    te = {
      p: w,
      um: z,
      m: fe,
      r: ge,
      mt: $,
      mc: W,
      pc: K,
      pbc: O,
      n: F,
      o: e,
    };
  return {
    render: X,
    hydrate: void 0,
    createApp: Sg(X),
  };
}
function eo({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Ln({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Ag(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function $a(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (oe(r) && oe(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = s[i];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = s[i] = yn(s[i])), (a.el = o.el)),
        !n && a.patchFlag !== -2 && $a(o, a)),
        a.type === ys && (a.el = o.el),
        a.type === et && !a.el && (a.el = o.el);
    }
}
function Lg(e) {
  const t = e.slice(),
    n = [0];
  let r, s, i, o, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (((s = n[n.length - 1]), e[s] < c)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (a = (i + o) >> 1), e[n[a]] < c ? (i = a + 1) : (o = a);
      c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
  return n;
}
function jf(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : jf(t);
}
function si(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Og = Symbol.for("v-scx"),
  Rg = () => ut(Og);
function Wf(e, t) {
  return Ai(e, null, t);
}
function Mg(e, t) {
  return Ai(e, null, {
    flush: "sync",
  });
}
function he(e, t, n) {
  return Ai(e, t, n);
}
function Ai(e, t, n = ye) {
  const { immediate: r, deep: s, flush: i, once: o } = n,
    a = qe({}, n),
    l = (t && r) || (!t && i !== "post");
  let c;
  if (dr) {
    if (i === "sync") {
      const h = Rg();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {};
      return (h.stop = Bt), (h.resume = Bt), (h.pause = Bt), h;
    }
  }
  const u = je;
  a.call = (h, g, w) => Mt(h, u, g, w);
  let f = !1;
  i === "post"
    ? (a.scheduler = (h) => {
        Ve(h, u && u.suspense);
      })
    : i !== "sync" &&
      ((f = !0),
      (a.scheduler = (h, g) => {
        g ? h() : Na(h);
      })),
    (a.augmentJob = (h) => {
      t && (h.flags |= 4),
        f && ((h.flags |= 2), u && ((h.id = u.uid), (h.i = u)));
    });
  const d = Gm(e, t, a);
  return dr && (c ? c.push(d) : l && d()), d;
}
function Fg(e, t, n) {
  const r = this.proxy,
    s = Le(e) ? (e.includes(".") ? Bf(r, e) : () => r[e]) : e.bind(r, r);
  let i;
  le(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = bs(this),
    a = Ai(s, i.bind(r), n);
  return o(), a;
}
function Bf(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function SE(e, t, n = ye) {
  const r = Ce(),
    s = pt(t),
    i = an(t),
    o = Uf(e, s),
    a = cf((l, c) => {
      let u,
        f = ye,
        d;
      return (
        Mg(() => {
          const h = e[s];
          dt(u, h) && ((u = h), c());
        }),
        {
          get() {
            return l(), n.get ? n.get(u) : u;
          },
          set(h) {
            const g = n.set ? n.set(h) : h;
            if (!dt(g, u) && !(f !== ye && dt(h, f))) return;
            const w = r.vnode.props;
            (w &&
              (t in w || s in w || i in w) &&
              (`onUpdate:${t}` in w ||
                `onUpdate:${s}` in w ||
                `onUpdate:${i}` in w)) ||
              ((u = h), c()),
              r.emit(`update:${t}`, g),
              dt(h, g) && dt(h, f) && !dt(g, d) && c(),
              (f = h),
              (d = g);
          },
        }
      );
    });
  return (
    (a[Symbol.iterator] = () => {
      let l = 0;
      return {
        next() {
          return l < 2
            ? {
                value: l++ ? o || ye : a,
                done: !1,
              }
            : {
                done: !0,
              };
        },
      };
    }),
    a
  );
}
const Uf = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${pt(t)}Modifiers`] || e[`${an(t)}Modifiers`];
function $g(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ye;
  let s = n;
  const i = t.startsWith("update:"),
    o = i && Uf(r, t.slice(7));
  o &&
    (o.trim && (s = n.map((u) => (Le(u) ? u.trim() : u))),
    o.number && (s = n.map(cm)));
  let a,
    l = r[(a = Hi(t))] || r[(a = Hi(pt(t)))];
  !l && i && (l = r[(a = Hi(an(t)))]), l && Mt(l, e, 6, s);
  const c = r[a + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), Mt(c, e, 6, s);
  }
}
function Hf(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const i = e.emits;
  let o = {},
    a = !1;
  if (!le(e)) {
    const l = (c) => {
      const u = Hf(c, t, !0);
      u && ((a = !0), qe(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !i && !a
    ? (Te(e) && r.set(e, null), null)
    : (oe(i) ? i.forEach((l) => (o[l] = null)) : qe(o, i),
      Te(e) && r.set(e, o),
      o);
}
function Li(e, t) {
  return !e || !_i(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      we(e, t[0].toLowerCase() + t.slice(1)) || we(e, an(t)) || we(e, t));
}
function kl(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: s,
      propsOptions: [i],
      slots: o,
      attrs: a,
      emit: l,
      render: c,
      renderCache: u,
      props: f,
      data: d,
      setupState: h,
      ctx: g,
      inheritAttrs: w,
    } = e,
    x = ei(e);
  let y, m;
  try {
    if (n.shapeFlag & 4) {
      const b = s || r,
        P = b;
      (y = Wt(c.call(P, b, u, f, h, d, g))), (m = a);
    } else {
      const b = t;
      (y = Wt(
        b.length > 1
          ? b(f, {
              attrs: a,
              slots: o,
              emit: l,
            })
          : b(f, null)
      )),
        (m = t.props ? a : Dg(a));
    }
  } catch (b) {
    (zr.length = 0), ps(b, e, 1), (y = Me(et));
  }
  let S = y;
  if (m && w !== !1) {
    const b = Object.keys(m),
      { shapeFlag: P } = S;
    b.length &&
      P & 7 &&
      (i && b.some(ya) && (m = qg(m, i)), (S = rn(S, m, !1, !0)));
  }
  return (
    n.dirs &&
      ((S = rn(S, null, !1, !0)),
      (S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs)),
    n.transition && kn(S, n.transition),
    (y = S),
    ei(x),
    y
  );
}
const Dg = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || _i(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  qg = (e, t) => {
    const n = {};
    for (const r in e) (!ya(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Vg(e, t, n) {
  const { props: r, children: s, component: i } = e,
    { props: o, children: a, patchFlag: l } = t,
    c = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? xl(r, o, c) : !!o;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (o[d] !== r[d] && !Li(c, d)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable)
      ? !0
      : r === o
      ? !1
      : r
      ? o
        ? xl(r, o, c)
        : !0
      : !!o;
  return !1;
}
function xl(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t[i] !== e[i] && !Li(n, i)) return !0;
  }
  return !1;
}
function jg({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const ii = (e) => e.__isSuspense;
function Wg(e, t) {
  t && t.pendingBranch
    ? oe(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ym(e);
}
const it = Symbol.for("v-fgt"),
  ys = Symbol.for("v-txt"),
  et = Symbol.for("v-cmt"),
  js = Symbol.for("v-stc"),
  zr = [];
let gt = null;
function oi(e = !1) {
  zr.push((gt = e ? null : []));
}
function Bg() {
  zr.pop(), (gt = zr[zr.length - 1] || null);
}
let ss = 1;
function Tl(e, t = !1) {
  (ss += e), e < 0 && gt && t && (gt.hasOnce = !0);
}
function zf(e) {
  return (
    (e.dynamicChildren = ss > 0 ? gt || or : null),
    Bg(),
    ss > 0 && gt && gt.push(e),
    e
  );
}
function EE(e, t, n, r, s, i) {
  return zf(Gf(e, t, n, r, s, i, !0));
}
function ai(e, t, n, r, s) {
  return zf(Me(e, t, n, r, s, !0));
}
function fr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function wn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Kf = ({ key: e }) => e ?? null,
  Ws = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Le(e) || Pe(e) || le(e)
        ? {
            i: We,
            r: e,
            k: t,
            f: !!n,
          }
        : e
      : null
  );
function Gf(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  i = e === it ? 0 : 1,
  o = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Kf(t),
    ref: t && Ws(t),
    scopeId: gf,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: We,
  };
  return (
    a
      ? (Da(l, n), i & 128 && e.normalize(l))
      : n && (l.shapeFlag |= Le(n) ? 8 : 16),
    ss > 0 &&
      !o &&
      gt &&
      (l.patchFlag > 0 || i & 6) &&
      l.patchFlag !== 32 &&
      gt.push(l),
    l
  );
}
const Me = Ug;
function Ug(e, t = null, n = null, r = 0, s = null, i = !1) {
  if (((!e || e === hg) && (e = et), fr(e))) {
    const a = rn(e, t, !0);
    return (
      n && Da(a, n),
      ss > 0 &&
        !i &&
        gt &&
        (a.shapeFlag & 6 ? (gt[gt.indexOf(e)] = a) : gt.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((tp(e) && (e = e.__vccOpts), t)) {
    t = Hg(t);
    let { class: a, style: l } = t;
    a && !Le(a) && (t.class = Sa(a)),
      Te(l) && (Ia(l) && !oe(l) && (l = qe({}, l)), (t.style = wa(l)));
  }
  const o = Le(e) ? 1 : ii(e) ? 128 : yf(e) ? 64 : Te(e) ? 4 : le(e) ? 2 : 0;
  return Gf(e, t, n, r, s, o, i, !0);
}
function Hg(e) {
  return e ? (Ia(e) || Mf(e) ? qe({}, e) : e) : null;
}
function rn(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: a, transition: l } = e,
    c = t ? Kg(s || {}, t) : s,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && Kf(c),
      ref:
        t && t.ref
          ? n && i
            ? oe(i)
              ? i.concat(Ws(t))
              : [i, Ws(t)]
            : Ws(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== it ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && rn(e.ssContent),
      ssFallback: e.ssFallback && rn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && r && kn(u, l.clone(u)), u;
}
function zg(e = " ", t = 0) {
  return Me(ys, null, e, t);
}
function CE(e, t) {
  const n = Me(js, null, e);
  return (n.staticCount = t), n;
}
function kE(e = "", t = !1) {
  return t ? (oi(), ai(et, null, e)) : Me(et, null, e);
}
function Wt(e) {
  return e == null || typeof e == "boolean"
    ? Me(et)
    : oe(e)
    ? Me(it, null, e.slice())
    : fr(e)
    ? yn(e)
    : Me(ys, null, String(e));
}
function yn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : rn(e);
}
function Da(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (oe(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Da(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Mf(t)
        ? (t._ctx = We)
        : s === 3 &&
          We &&
          (We.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    le(t)
      ? ((t = {
          default: t,
          _ctx: We,
        }),
        (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [zg(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Kg(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Sa([t.class, r.class]));
      else if (s === "style") t.style = wa([t.style, r.style]);
      else if (_i(s)) {
        const i = t[s],
          o = r[s];
        o &&
          i !== o &&
          !(oe(i) && i.includes(o)) &&
          (t[s] = i ? [].concat(i, o) : o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function _t(e, t, n, r = null) {
  Mt(e, t, 7, [n, r]);
}
const Gg = Lf();
let Qg = 0;
function Xg(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Gg,
    i = {
      uid: Qg++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new ju(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: $f(r, s),
      emitsOptions: Hf(r, s),
      emit: null,
      emitted: null,
      propsDefaults: ye,
      inheritAttrs: r.inheritAttrs,
      ctx: ye,
      data: ye,
      props: ye,
      attrs: ye,
      slots: ye,
      refs: ye,
      setupState: ye,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = {
      _: i,
    }),
    (i.root = t ? t.root : i),
    (i.emit = $g.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let je = null;
const Ce = () => je || We;
let li, Vo;
{
  const e = Ei(),
    t = (n, r) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (i) => {
          s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
        }
      );
    };
  (li = t("__VUE_INSTANCE_SETTERS__", (n) => (je = n))),
    (Vo = t("__VUE_SSR_SETTERS__", (n) => (dr = n)));
}
const bs = (e) => {
    const t = je;
    return (
      li(e),
      e.scope.on(),
      () => {
        e.scope.off(), li(t);
      }
    );
  },
  Pl = () => {
    je && je.scope.off(), li(null);
  };
function Qf(e) {
  return e.vnode.shapeFlag & 4;
}
let dr = !1;
function Yg(e, t = !1, n = !1) {
  t && Vo(t);
  const { props: r, children: s } = e.vnode,
    i = Qf(e);
  Eg(e, r, i, t), Tg(e, s, n || t);
  const o = i ? Jg(e, t) : void 0;
  return t && Vo(!1), o;
}
function Jg(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, gg));
  const { setup: r } = n;
  if (r) {
    tn();
    const s = (e.setupContext = r.length > 1 ? ep(e) : null),
      i = bs(e),
      o = gs(r, e, 0, [e.props, s]),
      a = Ru(o);
    if ((nn(), i(), (a || e.sp) && !Bn(e) && La(e), a)) {
      if ((o.then(Pl, Pl), t))
        return o
          .then((l) => {
            Il(e, l);
          })
          .catch((l) => {
            ps(l, e, 0);
          });
      e.asyncDep = o;
    } else Il(e, o);
  } else Xf(e);
}
function Il(e, t, n) {
  le(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Te(t) && (e.setupState = lf(t)),
    Xf(e);
}
function Xf(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Bt);
  {
    const s = bs(e);
    tn();
    try {
      pg(e);
    } finally {
      nn(), s();
    }
  }
}
const Zg = {
  get(e, t) {
    return st(e, "get", ""), e[t];
  },
};
function ep(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Zg),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Oi(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(lf(Gn(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Hr) return Hr[n](e);
          },
          has(t, n) {
            return n in t || n in Hr;
          },
        }))
    : e.proxy;
}
function jo(e, t = !0) {
  return le(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function tp(e) {
  return le(e) && "__vccOpts" in e;
}
const M = (e, t) => zm(e, t, dr);
function q(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Te(t) && !oe(t)
      ? fr(t)
        ? Me(e, null, [t])
        : Me(e, t)
      : Me(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && fr(n) && (n = [n]),
      Me(e, t, n));
}
const np = "3.5.14";
/**
 * @vue/runtime-dom v3.5.14
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Wo;
const Nl = typeof window < "u" && window.trustedTypes;
if (Nl)
  try {
    Wo = Nl.createPolicy("vue", {
      createHTML: (e) => e,
    });
  } catch {}
const Yf = Wo ? (e) => Wo.createHTML(e) : (e) => e,
  rp = "http://www.w3.org/2000/svg",
  sp = "http://www.w3.org/1998/Math/MathML",
  Gt = typeof document < "u" ? document : null,
  Al = Gt && Gt.createElement("template"),
  ip = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s =
        t === "svg"
          ? Gt.createElementNS(rp, e)
          : t === "mathml"
          ? Gt.createElementNS(sp, e)
          : n
          ? Gt.createElement(e, {
              is: n,
            })
          : Gt.createElement(e);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => Gt.createTextNode(e),
    createComment: (e) => Gt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Gt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (s && (s === i || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === i || !(s = s.nextSibling));

        );
      else {
        Al.innerHTML = Yf(
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const a = Al.content;
        if (r === "svg" || r === "mathml") {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  un = "transition",
  kr = "animation",
  hr = Symbol("_vtc"),
  Jf = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: !0,
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Zf = qe({}, Sf, Jf),
  op = (e) => ((e.displayName = "Transition"), (e.props = Zf), e),
  is = op((e, { slots: t }) => q(ng, ed(e), t)),
  On = (e, t = []) => {
    oe(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Ll = (e) => (e ? (oe(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function ed(e) {
  const t = {};
  for (const C in e) C in Jf || (t[C] = e[C]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: s,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = i,
      appearActiveClass: c = o,
      appearToClass: u = a,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: h = `${n}-leave-to`,
    } = e,
    g = ap(s),
    w = g && g[0],
    x = g && g[1],
    {
      onBeforeEnter: y,
      onEnter: m,
      onEnterCancelled: S,
      onLeave: b,
      onLeaveCancelled: P,
      onBeforeAppear: L = y,
      onAppear: N = m,
      onAppearCancelled: W = S,
    } = t,
    k = (C, G, $, ee) => {
      (C._enterCancelled = ee), hn(C, G ? u : a), hn(C, G ? c : o), $ && $();
    },
    O = (C, G) => {
      (C._isLeaving = !1), hn(C, f), hn(C, h), hn(C, d), G && G();
    },
    V = (C) => (G, $) => {
      const ee = C ? N : m,
        J = () => k(G, C, $);
      On(ee, [G, J]),
        Ol(() => {
          hn(G, C ? l : i), Vt(G, C ? u : a), Ll(ee) || Rl(G, r, w, J);
        });
    };
  return qe(t, {
    onBeforeEnter(C) {
      On(y, [C]), Vt(C, i), Vt(C, o);
    },
    onBeforeAppear(C) {
      On(L, [C]), Vt(C, l), Vt(C, c);
    },
    onEnter: V(!1),
    onAppear: V(!0),
    onLeave(C, G) {
      C._isLeaving = !0;
      const $ = () => O(C, G);
      Vt(C, f),
        C._enterCancelled ? (Vt(C, d), Bo()) : (Bo(), Vt(C, d)),
        Ol(() => {
          C._isLeaving && (hn(C, f), Vt(C, h), Ll(b) || Rl(C, r, x, $));
        }),
        On(b, [C, $]);
    },
    onEnterCancelled(C) {
      k(C, !1, void 0, !0), On(S, [C]);
    },
    onAppearCancelled(C) {
      k(C, !0, void 0, !0), On(W, [C]);
    },
    onLeaveCancelled(C) {
      O(C), On(P, [C]);
    },
  });
}
function ap(e) {
  if (e == null) return null;
  if (Te(e)) return [to(e.enter), to(e.leave)];
  {
    const t = to(e);
    return [t, t];
  }
}
function to(e) {
  return um(e);
}
function Vt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[hr] || (e[hr] = new Set())).add(t);
}
function hn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[hr];
  n && (n.delete(t), n.size || (e[hr] = void 0));
}
function Ol(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let lp = 0;
function Rl(e, t, n, r) {
  const s = (e._endId = ++lp),
    i = () => {
      s === e._endId && r();
    };
  if (n != null) return setTimeout(i, n);
  const { type: o, timeout: a, propCount: l } = td(e, t);
  if (!o) return r();
  const c = o + "end";
  let u = 0;
  const f = () => {
      e.removeEventListener(c, d), i();
    },
    d = (h) => {
      h.target === e && ++u >= l && f();
    };
  setTimeout(() => {
    u < l && f();
  }, a + 1),
    e.addEventListener(c, d);
}
function td(e, t) {
  const n = window.getComputedStyle(e),
    r = (g) => (n[g] || "").split(", "),
    s = r(`${un}Delay`),
    i = r(`${un}Duration`),
    o = Ml(s, i),
    a = r(`${kr}Delay`),
    l = r(`${kr}Duration`),
    c = Ml(a, l);
  let u = null,
    f = 0,
    d = 0;
  t === un
    ? o > 0 && ((u = un), (f = o), (d = i.length))
    : t === kr
    ? c > 0 && ((u = kr), (f = c), (d = l.length))
    : ((f = Math.max(o, c)),
      (u = f > 0 ? (o > c ? un : kr) : null),
      (d = u ? (u === un ? i.length : l.length) : 0));
  const h =
    u === un && /\b(transform|all)(,|$)/.test(r(`${un}Property`).toString());
  return {
    type: u,
    timeout: f,
    propCount: d,
    hasTransform: h,
  };
}
function Ml(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Fl(n) + Fl(e[r])));
}
function Fl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Bo() {
  return document.body.offsetHeight;
}
function cp(e, t, n) {
  const r = e[hr];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const ci = Symbol("_vod"),
  nd = Symbol("_vsh"),
  xE = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[ci] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : xr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), xr(e, !0), r.enter(e))
            : r.leave(e, () => {
                xr(e, !1);
              })
          : xr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      xr(e, t);
    },
  };
function xr(e, t) {
  (e.style.display = t ? e[ci] : "none"), (e[nd] = !t);
}
const up = Symbol(""),
  fp = /(^|;)\s*display\s*:/;
function dp(e, t, n) {
  const r = e.style,
    s = Le(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (Le(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && Bs(r, a, "");
        }
      else for (const o in t) n[o] == null && Bs(r, o, "");
    for (const o in n) o === "display" && (i = !0), Bs(r, o, n[o]);
  } else if (s) {
    if (t !== n) {
      const o = r[up];
      o && (n += ";" + o), (r.cssText = n), (i = fp.test(n));
    }
  } else t && e.removeAttribute("style");
  ci in e && ((e[ci] = i ? r.display : ""), e[nd] && (r.display = "none"));
}
const $l = /\s*!important$/;
function Bs(e, t, n) {
  if (oe(n)) n.forEach((r) => Bs(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = hp(e, t);
    $l.test(n)
      ? e.setProperty(an(r), n.replace($l, ""), "important")
      : (e[r] = n);
  }
}
const Dl = ["Webkit", "Moz", "ms"],
  no = {};
function hp(e, t) {
  const n = no[t];
  if (n) return n;
  let r = pt(t);
  if (r !== "filter" && r in e) return (no[t] = r);
  r = Si(r);
  for (let s = 0; s < Dl.length; s++) {
    const i = Dl[s] + r;
    if (i in e) return (no[t] = i);
  }
  return t;
}
const ql = "http://www.w3.org/1999/xlink";
function Vl(e, t, n, r, s, i = pm(t)) {
  r && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(ql, t.slice(6, t.length))
      : e.setAttributeNS(ql, t, n)
    : n == null || (i && !Du(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, i ? "" : on(n) ? String(n) : n);
}
function jl(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Yf(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      l = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (a !== l || !("_value" in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = Du(n))
      : n == null && a === "string"
      ? ((n = ""), (o = !0))
      : a === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(s || t);
}
function mp(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function gp(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Wl = Symbol("_vei");
function pp(e, t, n, r, s = null) {
  const i = e[Wl] || (e[Wl] = {}),
    o = i[t];
  if (r && o) o.value = r;
  else {
    const [a, l] = vp(t);
    if (r) {
      const c = (i[t] = _p(r, s));
      mp(e, a, c, l);
    } else o && (gp(e, a, o, l), (i[t] = void 0));
  }
}
const Bl = /(?:Once|Passive|Capture)$/;
function vp(e) {
  let t;
  if (Bl.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Bl)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : an(e.slice(2)), t];
}
let ro = 0;
const yp = Promise.resolve(),
  bp = () => ro || (yp.then(() => (ro = 0)), (ro = Date.now()));
function _p(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Mt(wp(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = bp()), n;
}
function wp(e, t) {
  if (oe(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const Ul = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Sp = (e, t, n, r, s, i) => {
    const o = s === "svg";
    t === "class"
      ? cp(e, r, o)
      : t === "style"
      ? dp(e, n, r)
      : _i(t)
      ? ya(t) || pp(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Ep(e, t, r, o)
        )
      ? (jl(e, t, r),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          Vl(e, t, r, o, i, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !Le(r))
      ? jl(e, pt(t), r, i, t)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        Vl(e, t, r, o));
  };
function Ep(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Ul(t) && le(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "autocorrect" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Ul(t) && Le(n) ? !1 : t in e;
}
const rd = new WeakMap(),
  sd = new WeakMap(),
  ui = Symbol("_moveCb"),
  Hl = Symbol("_enterCb"),
  Cp = (e) => (delete e.props.mode, e),
  kp = Cp({
    name: "TransitionGroup",
    props: qe({}, Zf, {
      tag: String,
      moveClass: String,
    }),
    setup(e, { slots: t }) {
      const n = Ce(),
        r = wf();
      let s, i;
      return (
        Oa(() => {
          if (!s.length) return;
          const o = e.moveClass || `${e.name || "v"}-move`;
          if (!Np(s[0].el, n.vnode.el, o)) {
            s = [];
            return;
          }
          s.forEach(Tp), s.forEach(Pp);
          const a = s.filter(Ip);
          Bo(),
            a.forEach((l) => {
              const c = l.el,
                u = c.style;
              Vt(c, o),
                (u.transform = u.webkitTransform = u.transitionDuration = "");
              const f = (c[ui] = (d) => {
                (d && d.target !== c) ||
                  ((!d || /transform$/.test(d.propertyName)) &&
                    (c.removeEventListener("transitionend", f),
                    (c[ui] = null),
                    hn(c, o)));
              });
              c.addEventListener("transitionend", f);
            }),
            (s = []);
        }),
        () => {
          const o = ue(e),
            a = ed(o);
          let l = o.tag || it;
          if (((s = []), i))
            for (let c = 0; c < i.length; c++) {
              const u = i[c];
              u.el &&
                u.el instanceof Element &&
                (s.push(u),
                kn(u, rs(u, a, r, n)),
                rd.set(u, u.el.getBoundingClientRect()));
            }
          i = t.default ? Aa(t.default()) : [];
          for (let c = 0; c < i.length; c++) {
            const u = i[c];
            u.key != null && kn(u, rs(u, a, r, n));
          }
          return Me(l, null, i);
        }
      );
    },
  }),
  xp = kp;
function Tp(e) {
  const t = e.el;
  t[ui] && t[ui](), t[Hl] && t[Hl]();
}
function Pp(e) {
  sd.set(e, e.el.getBoundingClientRect());
}
function Ip(e) {
  const t = rd.get(e),
    n = sd.get(e),
    r = t.left - n.left,
    s = t.top - n.top;
  if (r || s) {
    const i = e.el.style;
    return (
      (i.transform = i.webkitTransform = `translate(${r}px,${s}px)`),
      (i.transitionDuration = "0s"),
      e
    );
  }
}
function Np(e, t, n) {
  const r = e.cloneNode(),
    s = e[hr];
  s &&
    s.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }),
    n.split(/\s+/).forEach((a) => a && r.classList.add(a)),
    (r.style.display = "none");
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(r);
  const { hasTransform: o } = td(r);
  return i.removeChild(r), o;
}
const Ap = ["ctrl", "shift", "alt", "meta"],
  Lp = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Ap.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  TE = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (s, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const a = Lp[t[o]];
          if (a && a(s, t)) return;
        }
        return e(s, ...i);
      })
    );
  },
  Op = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  PE = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (s) => {
        if (!("key" in s)) return;
        const i = an(s.key);
        if (t.some((o) => o === i || Op[o] === i)) return e(s);
      })
    );
  },
  Rp = qe(
    {
      patchProp: Sp,
    },
    ip
  );
let zl;
function Mp() {
  return zl || (zl = Ig(Rp));
}
const id = (...e) => {
  const t = Mp().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = $p(r);
      if (!s) return;
      const i = t._component;
      !le(i) && !i.render && !i.template && (i.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = "");
      const o = n(s, !1, Fp(s));
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function Fp(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function $p(e) {
  return Le(e) ? document.querySelector(e) : e;
}
function _r(e, t, n, r) {
  return (
    Object.defineProperty(e, t, {
      get: n,
      set: r,
      enumerable: !0,
    }),
    e
  );
}
const xn = de(!1);
let Uo;
function Dp(e, t) {
  const n =
    /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) ||
    /(opr)[\/]([\w.]+)/.exec(e) ||
    /(vivaldi)[\/]([\w.]+)/.exec(e) ||
    /(chrome|crios)[\/]([\w.]+)/.exec(e) ||
    /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(
      e
    ) ||
    /(firefox|fxios)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+)/.exec(e) ||
    /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) ||
    [];
  return {
    browser: n[5] || n[3] || n[1] || "",
    version: n[4] || n[2] || "0",
    platform: t[0] || "",
  };
}
function qp(e) {
  return (
    /(ipad)/.exec(e) ||
    /(ipod)/.exec(e) ||
    /(windows phone)/.exec(e) ||
    /(iphone)/.exec(e) ||
    /(kindle)/.exec(e) ||
    /(silk)/.exec(e) ||
    /(android)/.exec(e) ||
    /(win)/.exec(e) ||
    /(mac)/.exec(e) ||
    /(linux)/.exec(e) ||
    /(cros)/.exec(e) ||
    /(playbook)/.exec(e) ||
    /(bb)/.exec(e) ||
    /(blackberry)/.exec(e) ||
    []
  );
}
const od = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function Vp(e) {
  const t = e.toLowerCase(),
    n = qp(t),
    r = Dp(t, n),
    s = {
      mobile: !1,
      desktop: !1,
      cordova: !1,
      capacitor: !1,
      nativeMobile: !1,
      electron: !1,
      bex: !1,
      linux: !1,
      mac: !1,
      win: !1,
      cros: !1,
      chrome: !1,
      firefox: !1,
      opera: !1,
      safari: !1,
      vivaldi: !1,
      edge: !1,
      edgeChromium: !1,
      ie: !1,
      webkit: !1,
      android: !1,
      ios: !1,
      ipad: !1,
      iphone: !1,
      ipod: !1,
      kindle: !1,
      winphone: !1,
      blackberry: !1,
      playbook: !1,
      silk: !1,
    };
  r.browser &&
    ((s[r.browser] = !0),
    (s.version = r.version),
    (s.versionNumber = parseInt(r.version, 10))),
    r.platform && (s[r.platform] = !0);
  const i =
    s.android ||
    s.ios ||
    s.bb ||
    s.blackberry ||
    s.ipad ||
    s.iphone ||
    s.ipod ||
    s.kindle ||
    s.playbook ||
    s.silk ||
    s["windows phone"];
  if (
    (i === !0 || t.indexOf("mobile") !== -1
      ? (s.mobile = !0)
      : (s.desktop = !0),
    s["windows phone"] && ((s.winphone = !0), delete s["windows phone"]),
    s.edga || s.edgios || s.edg
      ? ((s.edge = !0), (r.browser = "edge"))
      : s.crios
      ? ((s.chrome = !0), (r.browser = "chrome"))
      : s.fxios && ((s.firefox = !0), (r.browser = "firefox")),
    (s.ipod || s.ipad || s.iphone) && (s.ios = !0),
    s.vivaldi && ((r.browser = "vivaldi"), (s.vivaldi = !0)),
    (s.chrome ||
      s.opr ||
      s.safari ||
      s.vivaldi ||
      (s.mobile === !0 && s.ios !== !0 && i !== !0)) &&
      (s.webkit = !0),
    s.opr && ((r.browser = "opera"), (s.opera = !0)),
    s.safari &&
      (s.blackberry || s.bb
        ? ((r.browser = "blackberry"), (s.blackberry = !0))
        : s.playbook
        ? ((r.browser = "playbook"), (s.playbook = !0))
        : s.android
        ? ((r.browser = "android"), (s.android = !0))
        : s.kindle
        ? ((r.browser = "kindle"), (s.kindle = !0))
        : s.silk && ((r.browser = "silk"), (s.silk = !0))),
    (s.name = r.browser),
    (s.platform = r.platform),
    t.indexOf("electron") !== -1)
  )
    s.electron = !0;
  else if (document.location.href.indexOf("-extension://") !== -1) s.bex = !0;
  else {
    if (
      (window.Capacitor !== void 0
        ? ((s.capacitor = !0),
          (s.nativeMobile = !0),
          (s.nativeMobileWrapper = "capacitor"))
        : (window._cordovaNative !== void 0 || window.cordova !== void 0) &&
          ((s.cordova = !0),
          (s.nativeMobile = !0),
          (s.nativeMobileWrapper = "cordova")),
      xn.value === !0 &&
        (Uo = {
          is: {
            ...s,
          },
        }),
      od === !0 &&
        s.mac === !0 &&
        ((s.desktop === !0 && s.safari === !0) ||
          (s.nativeMobile === !0 &&
            s.android !== !0 &&
            s.ios !== !0 &&
            s.ipad !== !0)))
    ) {
      delete s.mac, delete s.desktop;
      const o =
        Math.min(window.innerHeight, window.innerWidth) > 414
          ? "ipad"
          : "iphone";
      Object.assign(s, {
        mobile: !0,
        ios: !0,
        platform: o,
        [o]: !0,
      });
    }
    s.mobile !== !0 &&
      window.navigator.userAgentData &&
      window.navigator.userAgentData.mobile &&
      (delete s.desktop, (s.mobile = !0));
  }
  return s;
}
const Kl = navigator.userAgent || navigator.vendor || window.opera,
  jp = {
    has: {
      touch: !1,
      webStorage: !1,
    },
    within: {
      iframe: !1,
    },
  },
  Be = {
    userAgent: Kl,
    is: Vp(Kl),
    has: {
      touch: od,
    },
    within: {
      iframe: window.self !== window.top,
    },
  },
  Ho = {
    install(e) {
      const { $q: t } = e;
      xn.value === !0
        ? (e.onSSRHydrated.push(() => {
            Object.assign(t.platform, Be), (xn.value = !1);
          }),
          (t.platform = Kn(this)))
        : (t.platform = this);
    },
  };
{
  let e;
  _r(Be.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return (e = !0), !0;
    } catch {}
    return (e = !1), !1;
  }),
    Object.assign(Ho, Be),
    xn.value === !0 && (Object.assign(Ho, Uo, jp), (Uo = null));
}
function nt(e) {
  return Gn(Tn(e));
}
function Wp(e) {
  return Gn(e);
}
const wr = (e, t) => {
    const n = Kn(e);
    for (const r in e)
      _r(
        t,
        r,
        () => n[r],
        (s) => {
          n[r] = s;
        }
      );
    return t;
  },
  ft = {
    hasPassive: !1,
    passiveCapture: !0,
    notPassiveCapture: !0,
  };
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(ft, {
        hasPassive: !0,
        passive: {
          passive: !0,
        },
        notPassive: {
          passive: !1,
        },
        passiveCapture: {
          passive: !0,
          capture: !0,
        },
        notPassiveCapture: {
          passive: !1,
          capture: !0,
        },
      });
    },
  });
  window.addEventListener("qtest", null, e),
    window.removeEventListener("qtest", null, e);
} catch {}
function os() {}
function IE(e) {
  return e.button === 0;
}
function Bp(e) {
  return (
    e.touches && e.touches[0]
      ? (e = e.touches[0])
      : e.changedTouches && e.changedTouches[0]
      ? (e = e.changedTouches[0])
      : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    {
      top: e.clientY,
      left: e.clientX,
    }
  );
}
function Up(e) {
  if (e.path) return e.path;
  if (e.composedPath) return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if ((t.push(n), n.tagName === "HTML"))
      return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function fi(e) {
  e.stopPropagation();
}
function Sn(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function wt(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function NE(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return;
  const n =
    t === !0
      ? (r) => {
          (r.__dragPrevented = !0),
            r.addEventListener("dragstart", Sn, ft.notPassiveCapture);
        }
      : (r) => {
          delete r.__dragPrevented,
            r.removeEventListener("dragstart", Sn, ft.notPassiveCapture);
        };
  e.querySelectorAll("a, img").forEach(n);
}
function Hp(e, t, n) {
  const r = `__q_${t}_evt`;
  (e[r] = e[r] !== void 0 ? e[r].concat(n) : n),
    n.forEach((s) => {
      s[0].addEventListener(s[1], e[s[2]], ft[s[3]]);
    });
}
function zp(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 &&
    (e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], ft[r[3]]);
    }),
    (e[n] = void 0));
}
function ad(e, t = 250, n) {
  let r = null;
  function s() {
    const i = arguments,
      o = () => {
        (r = null), e.apply(this, i);
      };
    r !== null && clearTimeout(r), (r = setTimeout(o, t));
  }
  return (
    (s.cancel = () => {
      r !== null && clearTimeout(r);
    }),
    s
  );
}
const so = ["sm", "md", "lg", "xl"],
  { passive: Gl } = ft,
  Kp = wr(
    {
      width: 0,
      height: 0,
      name: "xs",
      sizes: {
        sm: 600,
        md: 1024,
        lg: 1440,
        xl: 1920,
      },
      lt: {
        sm: !0,
        md: !0,
        lg: !0,
        xl: !0,
      },
      gt: {
        xs: !1,
        sm: !1,
        md: !1,
        lg: !1,
      },
      xs: !0,
      sm: !1,
      md: !1,
      lg: !1,
      xl: !1,
    },
    {
      setSizes: os,
      setDebounce: os,
      install({ $q: e, onSSRHydrated: t }) {
        if (((e.screen = this), this.__installed === !0)) {
          e.config.screen !== void 0 &&
            (e.config.screen.bodyClasses === !1
              ? document.body.classList.remove(`screen--${this.name}`)
              : this.__update(!0));
          return;
        }
        const { visualViewport: n } = window,
          r = n || window,
          s = document.scrollingElement || document.documentElement,
          i =
            n === void 0 || Be.is.mobile === !0
              ? () => [
                  Math.max(window.innerWidth, s.clientWidth),
                  Math.max(window.innerHeight, s.clientHeight),
                ]
              : () => [
                  n.width * n.scale + window.innerWidth - s.clientWidth,
                  n.height * n.scale + window.innerHeight - s.clientHeight,
                ],
          o = e.config.screen?.bodyClasses === !0;
        this.__update = (f) => {
          const [d, h] = i();
          if ((h !== this.height && (this.height = h), d !== this.width))
            this.width = d;
          else if (f !== !0) return;
          let g = this.sizes;
          (this.gt.xs = d >= g.sm),
            (this.gt.sm = d >= g.md),
            (this.gt.md = d >= g.lg),
            (this.gt.lg = d >= g.xl),
            (this.lt.sm = d < g.sm),
            (this.lt.md = d < g.md),
            (this.lt.lg = d < g.lg),
            (this.lt.xl = d < g.xl),
            (this.xs = this.lt.sm),
            (this.sm = this.gt.xs === !0 && this.lt.md === !0),
            (this.md = this.gt.sm === !0 && this.lt.lg === !0),
            (this.lg = this.gt.md === !0 && this.lt.xl === !0),
            (this.xl = this.gt.lg),
            (g =
              (this.xs === !0 && "xs") ||
              (this.sm === !0 && "sm") ||
              (this.md === !0 && "md") ||
              (this.lg === !0 && "lg") ||
              "xl"),
            g !== this.name &&
              (o === !0 &&
                (document.body.classList.remove(`screen--${this.name}`),
                document.body.classList.add(`screen--${g}`)),
              (this.name = g));
        };
        let a,
          l = {},
          c = 16;
        (this.setSizes = (f) => {
          so.forEach((d) => {
            f[d] !== void 0 && (l[d] = f[d]);
          });
        }),
          (this.setDebounce = (f) => {
            c = f;
          });
        const u = () => {
          const f = getComputedStyle(document.body);
          f.getPropertyValue("--q-size-sm") &&
            so.forEach((d) => {
              this.sizes[d] = parseInt(f.getPropertyValue(`--q-size-${d}`), 10);
            }),
            (this.setSizes = (d) => {
              so.forEach((h) => {
                d[h] && (this.sizes[h] = d[h]);
              }),
                this.__update(!0);
            }),
            (this.setDebounce = (d) => {
              a !== void 0 && r.removeEventListener("resize", a, Gl),
                (a = d > 0 ? ad(this.__update, d) : this.__update),
                r.addEventListener("resize", a, Gl);
            }),
            this.setDebounce(c),
            Object.keys(l).length !== 0
              ? (this.setSizes(l), (l = void 0))
              : this.__update(),
            o === !0 &&
              this.name === "xs" &&
              document.body.classList.add("screen--xs");
        };
        xn.value === !0 ? t.push(u) : u();
      },
    }
  ),
  Qe = wr(
    {
      isActive: !1,
      mode: !1,
    },
    {
      __media: void 0,
      set(e) {
        (Qe.mode = e),
          e === "auto"
            ? (Qe.__media === void 0 &&
                ((Qe.__media = window.matchMedia(
                  "(prefers-color-scheme: dark)"
                )),
                (Qe.__updateMedia = () => {
                  Qe.set("auto");
                }),
                Qe.__media.addListener(Qe.__updateMedia)),
              (e = Qe.__media.matches))
            : Qe.__media !== void 0 &&
              (Qe.__media.removeListener(Qe.__updateMedia),
              (Qe.__media = void 0)),
          (Qe.isActive = e === !0),
          document.body.classList.remove(
            `body--${e === !0 ? "light" : "dark"}`
          ),
          document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`);
      },
      toggle() {
        Qe.set(Qe.isActive === !1);
      },
      install({ $q: e, ssrContext: t }) {
        const { dark: n } = e.config;
        (e.dark = this),
          this.__installed !== !0 && this.set(n !== void 0 ? n : !1);
      },
    }
  );
function Gp(e, t, n = document.body) {
  if (typeof e != "string")
    throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
let ld = !1;
function Qp(e) {
  ld = e.isComposing === !0;
}
function cd(e) {
  return (
    ld === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
  );
}
function as(e, t) {
  return cd(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function ud(e) {
  if (e.ios === !0) return "ios";
  if (e.android === !0) return "android";
}
function Xp({ is: e, has: t, within: n }, r) {
  const s = [
    e.desktop === !0 ? "desktop" : "mobile",
    `${t.touch === !1 ? "no-" : ""}touch`,
  ];
  if (e.mobile === !0) {
    const i = ud(e);
    i !== void 0 && s.push("platform-" + i);
  }
  if (e.nativeMobile === !0) {
    const i = e.nativeMobileWrapper;
    s.push(i),
      s.push("native-mobile"),
      e.ios === !0 &&
        (r[i] === void 0 || r[i].iosStatusBarPadding !== !1) &&
        s.push("q-ios-padding");
  } else e.electron === !0 ? s.push("electron") : e.bex === !0 && s.push("bex");
  return n.iframe === !0 && s.push("within-iframe"), s;
}
function Yp() {
  const { is: e } = Be,
    t = document.body.className,
    n = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
    if (e.desktop === !0)
      n.delete("mobile"),
        n.delete("platform-ios"),
        n.delete("platform-android"),
        n.add("desktop");
    else if (e.mobile === !0) {
      n.delete("desktop"),
        n.add("mobile"),
        n.delete("platform-ios"),
        n.delete("platform-android");
      const s = ud(e);
      s !== void 0 && n.add(`platform-${s}`);
    }
  }
  Be.has.touch === !0 && (n.delete("no-touch"), n.add("touch")),
    Be.within.iframe === !0 && n.add("within-iframe");
  const r = Array.from(n).join(" ");
  t !== r && (document.body.className = r);
}
function Jp(e) {
  for (const t in e) Gp(t, e[t]);
}
const Zp = {
    install(e) {
      if (this.__installed !== !0) {
        if (xn.value === !0) Yp();
        else {
          const { $q: t } = e;
          t.config.brand !== void 0 && Jp(t.config.brand);
          const n = Xp(Be, t.config);
          document.body.classList.add.apply(document.body.classList, n);
        }
        Be.is.ios === !0 && document.body.addEventListener("touchstart", os),
          window.addEventListener("keydown", Qp, !0);
      }
    },
  },
  fd = () => !0;
function ev(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function tv(e) {
  return (
    e.startsWith("#") === !0 && (e = e.substring(1)),
    e.startsWith("/") === !1 && (e = "/" + e),
    e.endsWith("/") === !0 && (e = e.substring(0, e.length - 1)),
    "#" + e
  );
}
function nv(e) {
  if (e.backButtonExit === !1) return () => !1;
  if (e.backButtonExit === "*") return fd;
  const t = ["#/"];
  return (
    Array.isArray(e.backButtonExit) === !0 &&
      t.push(...e.backButtonExit.filter(ev).map(tv)),
    () => t.includes(window.location.hash)
  );
}
const zo = {
    __history: [],
    add: os,
    remove: os,
    install({ $q: e }) {
      if (this.__installed === !0) return;
      const { cordova: t, capacitor: n } = Be.is;
      if (t !== !0 && n !== !0) return;
      const r = e.config[t === !0 ? "cordova" : "capacitor"];
      if (
        r?.backButton === !1 ||
        (n === !0 &&
          (window.Capacitor === void 0 ||
            window.Capacitor.Plugins.App === void 0))
      )
        return;
      (this.add = (o) => {
        o.condition === void 0 && (o.condition = fd), this.__history.push(o);
      }),
        (this.remove = (o) => {
          const a = this.__history.indexOf(o);
          a >= 0 && this.__history.splice(a, 1);
        });
      const s = nv(
          Object.assign(
            {
              backButtonExit: !0,
            },
            r
          )
        ),
        i = () => {
          if (this.__history.length) {
            const o = this.__history[this.__history.length - 1];
            o.condition() === !0 && (this.__history.pop(), o.handler());
          } else s() === !0 ? navigator.app.exitApp() : window.history.back();
        };
      t === !0
        ? document.addEventListener("deviceready", () => {
            document.addEventListener("backbutton", i, !1);
          })
        : window.Capacitor.Plugins.App.addListener("backButton", i);
    },
  },
  Ql = {
    isoName: "en-US",
    nativeName: "English (US)",
    label: {
      clear: "Clear",
      ok: "OK",
      cancel: "Cancel",
      close: "Close",
      set: "Set",
      select: "Select",
      reset: "Reset",
      remove: "Remove",
      update: "Update",
      create: "Create",
      search: "Search",
      filter: "Filter",
      refresh: "Refresh",
      expand: (e) => (e ? `Expand "${e}"` : "Expand"),
      collapse: (e) => (e ? `Collapse "${e}"` : "Collapse"),
    },
    date: {
      days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
        "_"
      ),
      daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      months:
        "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      firstDayOfWeek: 0,
      format24h: !1,
      pluralDay: "days",
      prevMonth: "Previous month",
      nextMonth: "Next month",
      prevYear: "Previous year",
      nextYear: "Next year",
      today: "Today",
      prevRangeYears: (e) => `Previous ${e} years`,
      nextRangeYears: (e) => `Next ${e} years`,
    },
    table: {
      noData: "No data available",
      noResults: "No matching records found",
      loading: "Loading...",
      selectedRecords: (e) =>
        e === 1
          ? "1 record selected."
          : (e === 0 ? "No" : e) + " records selected.",
      recordsPerPage: "Records per page:",
      allRows: "All",
      pagination: (e, t, n) => e + "-" + t + " of " + n,
      columns: "Columns",
    },
    pagination: {
      first: "First page",
      prev: "Previous page",
      next: "Next page",
      last: "Last page",
    },
    editor: {
      url: "URL",
      bold: "Bold",
      italic: "Italic",
      strikethrough: "Strikethrough",
      underline: "Underline",
      unorderedList: "Unordered List",
      orderedList: "Ordered List",
      subscript: "Subscript",
      superscript: "Superscript",
      hyperlink: "Hyperlink",
      toggleFullscreen: "Toggle Fullscreen",
      quote: "Quote",
      left: "Left align",
      center: "Center align",
      right: "Right align",
      justify: "Justify align",
      print: "Print",
      outdent: "Decrease indentation",
      indent: "Increase indentation",
      removeFormat: "Remove formatting",
      formatting: "Formatting",
      fontSize: "Font Size",
      align: "Align",
      hr: "Insert Horizontal Rule",
      undo: "Undo",
      redo: "Redo",
      heading1: "Heading 1",
      heading2: "Heading 2",
      heading3: "Heading 3",
      heading4: "Heading 4",
      heading5: "Heading 5",
      heading6: "Heading 6",
      paragraph: "Paragraph",
      code: "Code",
      size1: "Very small",
      size2: "A bit small",
      size3: "Normal",
      size4: "Medium-large",
      size5: "Big",
      size6: "Very big",
      size7: "Maximum",
      defaultFont: "Default Font",
      viewSource: "View Source",
    },
    tree: {
      noNodes: "No nodes available",
      noResults: "No matching nodes found",
    },
  };
function Xl() {
  const e =
    Array.isArray(navigator.languages) === !0 &&
    navigator.languages.length !== 0
      ? navigator.languages[0]
      : navigator.language;
  if (typeof e == "string")
    return e
      .split(/[-_]/)
      .map((t, n) =>
        n === 0
          ? t.toLowerCase()
          : n > 1 || t.length < 4
          ? t.toUpperCase()
          : t[0].toUpperCase() + t.slice(1).toLowerCase()
      )
      .join("-");
}
const bn = wr(
    {
      __qLang: {},
    },
    {
      getLocale: Xl,
      set(e = Ql, t) {
        const n = {
          ...e,
          rtl: e.rtl === !0,
          getLocale: Xl,
        };
        {
          if (
            ((n.set = bn.set),
            bn.__langConfig === void 0 || bn.__langConfig.noHtmlAttrs !== !0)
          ) {
            const r = document.documentElement;
            r.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"),
              r.setAttribute("lang", n.isoName);
          }
          Object.assign(bn.__qLang, n);
        }
      },
      install({ $q: e, lang: t, ssrContext: n }) {
        (e.lang = bn.__qLang),
          (bn.__langConfig = e.config.lang),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : ((this.props = new Proxy(this.__qLang, {
                get() {
                  return Reflect.get(...arguments);
                },
                ownKeys(r) {
                  return Reflect.ownKeys(r).filter(
                    (s) => s !== "set" && s !== "getLocale"
                  );
                },
              })),
              this.set(t || Ql));
      },
    }
  ),
  rv = {
    name: "material-icons",
    type: {
      positive: "check_circle",
      negative: "warning",
      info: "info",
      warning: "priority_high",
    },
    arrow: {
      up: "arrow_upward",
      right: "arrow_forward",
      down: "arrow_downward",
      left: "arrow_back",
      dropdown: "arrow_drop_down",
    },
    chevron: {
      left: "chevron_left",
      right: "chevron_right",
    },
    colorPicker: {
      spectrum: "gradient",
      tune: "tune",
      palette: "style",
    },
    pullToRefresh: {
      icon: "refresh",
    },
    carousel: {
      left: "chevron_left",
      right: "chevron_right",
      up: "keyboard_arrow_up",
      down: "keyboard_arrow_down",
      navigationIcon: "lens",
    },
    chip: {
      remove: "cancel",
      selected: "check",
    },
    datetime: {
      arrowLeft: "chevron_left",
      arrowRight: "chevron_right",
      now: "access_time",
      today: "today",
    },
    editor: {
      bold: "format_bold",
      italic: "format_italic",
      strikethrough: "strikethrough_s",
      underline: "format_underlined",
      unorderedList: "format_list_bulleted",
      orderedList: "format_list_numbered",
      subscript: "vertical_align_bottom",
      superscript: "vertical_align_top",
      hyperlink: "link",
      toggleFullscreen: "fullscreen",
      quote: "format_quote",
      left: "format_align_left",
      center: "format_align_center",
      right: "format_align_right",
      justify: "format_align_justify",
      print: "print",
      outdent: "format_indent_decrease",
      indent: "format_indent_increase",
      removeFormat: "format_clear",
      formatting: "text_format",
      fontSize: "format_size",
      align: "format_align_left",
      hr: "remove",
      undo: "undo",
      redo: "redo",
      heading: "format_size",
      code: "code",
      size: "format_size",
      font: "font_download",
      viewSource: "code",
    },
    expansionItem: {
      icon: "keyboard_arrow_down",
      denseIcon: "arrow_drop_down",
    },
    fab: {
      icon: "add",
      activeIcon: "close",
    },
    field: {
      clear: "cancel",
      error: "error",
    },
    pagination: {
      first: "first_page",
      prev: "keyboard_arrow_left",
      next: "keyboard_arrow_right",
      last: "last_page",
    },
    rating: {
      icon: "grade",
    },
    stepper: {
      done: "check",
      active: "edit",
      error: "warning",
    },
    tabs: {
      left: "chevron_left",
      right: "chevron_right",
      up: "keyboard_arrow_up",
      down: "keyboard_arrow_down",
    },
    table: {
      arrowUp: "arrow_upward",
      warning: "warning",
      firstPage: "first_page",
      prevPage: "chevron_left",
      nextPage: "chevron_right",
      lastPage: "last_page",
    },
    tree: {
      icon: "play_arrow",
    },
    uploader: {
      done: "done",
      clear: "clear",
      add: "add_box",
      upload: "cloud_upload",
      removeQueue: "clear_all",
      removeUploaded: "done_all",
    },
  },
  di = wr(
    {
      iconMapFn: null,
      __qIconSet: {},
    },
    {
      set(e, t) {
        const n = {
          ...e,
        };
        (n.set = di.set), Object.assign(di.__qIconSet, n);
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__qIconSet),
          _r(
            e,
            "iconMapFn",
            () => this.iconMapFn,
            (r) => {
              this.iconMapFn = r;
            }
          ),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : ((this.props = new Proxy(this.__qIconSet, {
                get() {
                  return Reflect.get(...arguments);
                },
                ownKeys(r) {
                  return Reflect.ownKeys(r).filter((s) => s !== "set");
                },
              })),
              this.set(t || rv));
      },
    }
  ),
  sv = "_q_",
  AE = "_q_l_",
  LE = "_q_pc_",
  iv = "_q_fo_",
  OE = "_q_tabs_";
function RE() {}
const hi = {};
let dd = !1;
function ov() {
  dd = !0;
}
function io(e, t) {
  if (e === t) return !0;
  if (
    e !== null &&
    t !== null &&
    typeof e == "object" &&
    typeof t == "object"
  ) {
    if (e.constructor !== t.constructor) return !1;
    let n, r;
    if (e.constructor === Array) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (io(e[r], t[r]) !== !0) return !1;
      return !0;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size) return !1;
      let i = e.entries();
      for (r = i.next(); r.done !== !0; ) {
        if (t.has(r.value[0]) !== !0) return !1;
        r = i.next();
      }
      for (i = e.entries(), r = i.next(); r.done !== !0; ) {
        if (io(r.value[1], t.get(r.value[0])) !== !0) return !1;
        r = i.next();
      }
      return !0;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size) return !1;
      const i = e.entries();
      for (r = i.next(); r.done !== !0; ) {
        if (t.has(r.value[0]) !== !0) return !1;
        r = i.next();
      }
      return !0;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const s = Object.keys(e).filter((i) => e[i] !== void 0);
    if (
      ((n = s.length),
      n !== Object.keys(t).filter((i) => t[i] !== void 0).length)
    )
      return !1;
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (io(e[i], t[i]) !== !0) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function mt(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== !0;
}
function ME(e) {
  return typeof e == "number" && isFinite(e);
}
const Yl = [Ho, Zp, Qe, Kp, zo, bn, di];
function qa(e, t) {
  const n = id(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: r, ...s } = t._context;
  return Object.assign(n._context, s), n;
}
function Jl(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0);
  });
}
function av(e, t, n) {
  (e.config.globalProperties.$q = n.$q),
    e.provide(sv, n.$q),
    Jl(n, Yl),
    t.components !== void 0 &&
      Object.values(t.components).forEach((r) => {
        mt(r) === !0 && r.name !== void 0 && e.component(r.name, r);
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((r) => {
        mt(r) === !0 && r.name !== void 0 && e.directive(r.name, r);
      }),
    t.plugins !== void 0 &&
      Jl(
        n,
        Object.values(t.plugins).filter(
          (r) => typeof r.install == "function" && Yl.includes(r) === !1
        )
      ),
    xn.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((r) => {
          r();
        }),
          (n.$q.onSSRHydrated = () => {});
      });
}
const lv = function (e, t = {}) {
    const n = {
      version: "2.18.1",
    };
    dd === !1
      ? (t.config !== void 0 && Object.assign(hi, t.config),
        (n.config = {
          ...hi,
        }),
        ov())
      : (n.config = t.config || {}),
      av(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: [],
      });
  },
  cv = {
    name: "Quasar",
    version: "2.18.1",
    install: lv,
    lang: bn,
    iconSet: di,
  };
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const sr = typeof document < "u";
function hd(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function uv(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && hd(e.default))
  );
}
const _e = Object.assign;
function oo(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Ft(s) ? s.map(e) : e(s);
  }
  return n;
}
const Kr = () => {},
  Ft = Array.isArray,
  md = /#/g,
  fv = /&/g,
  dv = /\//g,
  hv = /=/g,
  mv = /\?/g,
  gd = /\+/g,
  gv = /%5B/g,
  pv = /%5D/g,
  pd = /%5E/g,
  vv = /%60/g,
  vd = /%7B/g,
  yv = /%7C/g,
  yd = /%7D/g,
  bv = /%20/g;
function Va(e) {
  return encodeURI("" + e)
    .replace(yv, "|")
    .replace(gv, "[")
    .replace(pv, "]");
}
function _v(e) {
  return Va(e).replace(vd, "{").replace(yd, "}").replace(pd, "^");
}
function Ko(e) {
  return Va(e)
    .replace(gd, "%2B")
    .replace(bv, "+")
    .replace(md, "%23")
    .replace(fv, "%26")
    .replace(vv, "`")
    .replace(vd, "{")
    .replace(yd, "}")
    .replace(pd, "^");
}
function wv(e) {
  return Ko(e).replace(hv, "%3D");
}
function Sv(e) {
  return Va(e).replace(md, "%23").replace(mv, "%3F");
}
function Ev(e) {
  return e == null ? "" : Sv(e).replace(dv, "%2F");
}
function ls(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const Cv = /\/$/,
  kv = (e) => e.replace(Cv, "");
function ao(e, t, n = "/") {
  let r,
    s = {},
    i = "",
    o = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((r = t.slice(0, l)),
      (i = t.slice(l + 1, a > -1 ? a : t.length)),
      (s = e(i))),
    a > -1 && ((r = r || t.slice(0, a)), (o = t.slice(a, t.length))),
    (r = Iv(r ?? t, n)),
    {
      fullPath: r + (i && "?") + i + o,
      path: r,
      query: s,
      hash: ls(o),
    }
  );
}
function xv(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Zl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Tv(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    mr(t.matched[r], n.matched[s]) &&
    bd(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function mr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function bd(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Pv(e[n], t[n])) return !1;
  return !0;
}
function Pv(e, t) {
  return Ft(e) ? ec(e, t) : Ft(t) ? ec(t, e) : e === t;
}
function ec(e, t) {
  return Ft(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function Iv(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
    s = r[r.length - 1];
  (s === ".." || s === ".") && r.push("");
  let i = n.length - 1,
    o,
    a;
  for (o = 0; o < r.length; o++)
    if (((a = r[o]), a !== "."))
      if (a === "..") i > 1 && i--;
      else break;
  return n.slice(0, i).join("/") + "/" + r.slice(o).join("/");
}
const fn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var cs;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(cs || (cs = {}));
var Gr;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Gr || (Gr = {}));
function Nv(e) {
  if (!e)
    if (sr) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), kv(e);
}
const Av = /^[^#]+#/;
function Lv(e, t) {
  return e.replace(Av, "#") + t;
}
function Ov(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const Ri = () => ({
  left: window.scrollX,
  top: window.scrollY,
});
function Rv(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = Ov(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function tc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Go = new Map();
function Mv(e, t) {
  Go.set(e, t);
}
function Fv(e) {
  const t = Go.get(e);
  return Go.delete(e), t;
}
let $v = () => location.protocol + "//" + location.host;
function _d(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let a = s.includes(e.slice(i)) ? e.slice(i).length : 1,
      l = s.slice(a);
    return l[0] !== "/" && (l = "/" + l), Zl(l, "");
  }
  return Zl(n, e) + r + s;
}
function Dv(e, t, n, r) {
  let s = [],
    i = [],
    o = null;
  const a = ({ state: d }) => {
    const h = _d(e, location),
      g = n.value,
      w = t.value;
    let x = 0;
    if (d) {
      if (((n.value = h), (t.value = d), o && o === g)) {
        o = null;
        return;
      }
      x = w ? d.position - w.position : 0;
    } else r(h);
    s.forEach((y) => {
      y(n.value, g, {
        delta: x,
        type: cs.pop,
        direction: x ? (x > 0 ? Gr.forward : Gr.back) : Gr.unknown,
      });
    });
  };
  function l() {
    o = n.value;
  }
  function c(d) {
    s.push(d);
    const h = () => {
      const g = s.indexOf(d);
      g > -1 && s.splice(g, 1);
    };
    return i.push(h), h;
  }
  function u() {
    const { history: d } = window;
    d.state &&
      d.replaceState(
        _e({}, d.state, {
          scroll: Ri(),
        }),
        ""
      );
  }
  function f() {
    for (const d of i) d();
    (i = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u, {
      passive: !0,
    }),
    {
      pauseListeners: l,
      listen: c,
      destroy: f,
    }
  );
}
function nc(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Ri() : null,
  };
}
function qv(e) {
  const { history: t, location: n } = window,
    r = {
      value: _d(e, n),
    },
    s = {
      value: t.state,
    };
  s.value ||
    i(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function i(l, c, u) {
    const f = e.indexOf("#"),
      d =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l
          : $v() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", d), (s.value = c);
    } catch (h) {
      console.error(h), n[u ? "replace" : "assign"](d);
    }
  }
  function o(l, c) {
    const u = _e({}, t.state, nc(s.value.back, l, s.value.forward, !0), c, {
      position: s.value.position,
    });
    i(l, u, !0), (r.value = l);
  }
  function a(l, c) {
    const u = _e({}, s.value, t.state, {
      forward: l,
      scroll: Ri(),
    });
    i(u.current, u, !0);
    const f = _e(
      {},
      nc(r.value, l, null),
      {
        position: u.position + 1,
      },
      c
    );
    i(l, f, !1), (r.value = l);
  }
  return {
    location: r,
    state: s,
    push: a,
    replace: o,
  };
}
function Vv(e) {
  e = Nv(e);
  const t = qv(e),
    n = Dv(e, t.state, t.location, t.replace);
  function r(i, o = !0) {
    o || n.pauseListeners(), history.go(i);
  }
  const s = _e(
    {
      location: "",
      base: e,
      go: r,
      createHref: Lv.bind(null, e),
    },
    t,
    n
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function jv(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function wd(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Sd = Symbol("");
var rc;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(rc || (rc = {}));
function gr(e, t) {
  return _e(
    new Error(),
    {
      type: e,
      [Sd]: !0,
    },
    t
  );
}
function zt(e, t) {
  return e instanceof Error && Sd in e && (t == null || !!(e.type & t));
}
const sc = "[^/]+?",
  Wv = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0,
  },
  Bv = /[.+*?^${}()[\]/\\]/g;
function Uv(e, t) {
  const n = _e({}, Wv, t),
    r = [];
  let s = n.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (s += "/");
    for (let f = 0; f < c.length; f++) {
      const d = c[f];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        f || (s += "/"), (s += d.value.replace(Bv, "\\$&")), (h += 40);
      else if (d.type === 1) {
        const { value: g, repeatable: w, optional: x, regexp: y } = d;
        i.push({
          name: g,
          repeatable: w,
          optional: x,
        });
        const m = y || sc;
        if (m !== sc) {
          h += 10;
          try {
            new RegExp(`(${m})`);
          } catch (b) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${m}): ` + b.message
            );
          }
        }
        let S = w ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`;
        f || (S = x && c.length < 2 ? `(?:/${S})` : "/" + S),
          x && (S += "?"),
          (s += S),
          (h += 20),
          x && (h += -8),
          w && (h += -20),
          m === ".*" && (h += -50);
      }
      u.push(h);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"),
    n.end ? (s += "$") : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
  const o = new RegExp(s, n.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(o),
      f = {};
    if (!u) return null;
    for (let d = 1; d < u.length; d++) {
      const h = u[d] || "",
        g = i[d - 1];
      f[g.name] = h && g.repeatable ? h.split("/") : h;
    }
    return f;
  }
  function l(c) {
    let u = "",
      f = !1;
    for (const d of e) {
      (!f || !u.endsWith("/")) && (u += "/"), (f = !1);
      for (const h of d)
        if (h.type === 0) u += h.value;
        else if (h.type === 1) {
          const { value: g, repeatable: w, optional: x } = h,
            y = g in c ? c[g] : "";
          if (Ft(y) && !w)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            );
          const m = Ft(y) ? y.join("/") : y;
          if (!m)
            if (x)
              d.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${g}"`);
          u += m;
        }
    }
    return u || "/";
  }
  return {
    re: o,
    score: r,
    keys: i,
    parse: a,
    stringify: l,
  };
}
function Hv(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 80
      ? 1
      : -1
    : 0;
}
function Ed(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const i = Hv(r[n], s[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (ic(r)) return 1;
    if (ic(s)) return -1;
  }
  return s.length - r.length;
}
function ic(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const zv = {
    type: 0,
    value: "",
  },
  Kv = /[a-zA-Z0-9_]/;
function Gv(e) {
  if (!e) return [[]];
  if (e === "/") return [[zv]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let i;
  function o() {
    i && s.push(i), (i = []);
  }
  let a = 0,
    l,
    c = "",
    u = "";
  function f() {
    c &&
      (n === 0
        ? i.push({
            type: 0,
            value: c,
          })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function d() {
    c += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (c && f(), o()) : l === ":" ? (f(), (n = 1)) : d();
        break;
      case 4:
        d(), (n = r);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : Kv.test(l)
          ? d()
          : (f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + l)
            : (n = 3)
          : (u += l);
        break;
      case 3:
        f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), o(), s;
}
function Qv(e, t, n) {
  const r = Uv(Gv(e.path), n),
    s = _e(r, {
      record: e,
      parent: t,
      children: [],
      alias: [],
    });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Xv(e, t) {
  const n = [],
    r = new Map();
  t = cc(
    {
      strict: !1,
      end: !0,
      sensitive: !1,
    },
    t
  );
  function s(f) {
    return r.get(f);
  }
  function i(f, d, h) {
    const g = !h,
      w = ac(f);
    w.aliasOf = h && h.record;
    const x = cc(t, f),
      y = [w];
    if ("alias" in f) {
      const b = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const P of b)
        y.push(
          ac(
            _e({}, w, {
              components: h ? h.record.components : w.components,
              path: P,
              aliasOf: h ? h.record : w,
            })
          )
        );
    }
    let m, S;
    for (const b of y) {
      const { path: P } = b;
      if (d && P[0] !== "/") {
        const L = d.record.path,
          N = L[L.length - 1] === "/" ? "" : "/";
        b.path = d.record.path + (P && N + P);
      }
      if (
        ((m = Qv(b, d, x)),
        h
          ? h.alias.push(m)
          : ((S = S || m),
            S !== m && S.alias.push(m),
            g && f.name && !lc(m) && o(f.name)),
        Cd(m) && l(m),
        w.children)
      ) {
        const L = w.children;
        for (let N = 0; N < L.length; N++) i(L[N], m, h && h.children[N]);
      }
      h = h || m;
    }
    return S
      ? () => {
          o(S);
        }
      : Kr;
  }
  function o(f) {
    if (wd(f)) {
      const d = r.get(f);
      d &&
        (r.delete(f),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(o),
        d.alias.forEach(o));
    } else {
      const d = n.indexOf(f);
      d > -1 &&
        (n.splice(d, 1),
        f.record.name && r.delete(f.record.name),
        f.children.forEach(o),
        f.alias.forEach(o));
    }
  }
  function a() {
    return n;
  }
  function l(f) {
    const d = Zv(f, n);
    n.splice(d, 0, f), f.record.name && !lc(f) && r.set(f.record.name, f);
  }
  function c(f, d) {
    let h,
      g = {},
      w,
      x;
    if ("name" in f && f.name) {
      if (((h = r.get(f.name)), !h))
        throw gr(1, {
          location: f,
        });
      (x = h.record.name),
        (g = _e(
          oc(
            d.params,
            h.keys
              .filter((S) => !S.optional)
              .concat(h.parent ? h.parent.keys.filter((S) => S.optional) : [])
              .map((S) => S.name)
          ),
          f.params &&
            oc(
              f.params,
              h.keys.map((S) => S.name)
            )
        )),
        (w = h.stringify(g));
    } else if (f.path != null)
      (w = f.path),
        (h = n.find((S) => S.re.test(w))),
        h && ((g = h.parse(w)), (x = h.record.name));
    else {
      if (((h = d.name ? r.get(d.name) : n.find((S) => S.re.test(d.path))), !h))
        throw gr(1, {
          location: f,
          currentLocation: d,
        });
      (x = h.record.name),
        (g = _e({}, d.params, f.params)),
        (w = h.stringify(g));
    }
    const y = [];
    let m = h;
    for (; m; ) y.unshift(m.record), (m = m.parent);
    return {
      name: x,
      path: w,
      params: g,
      matched: y,
      meta: Jv(y),
    };
  }
  e.forEach((f) => i(f));
  function u() {
    (n.length = 0), r.clear();
  }
  return {
    addRoute: i,
    resolve: c,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: s,
  };
}
function oc(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function ac(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Yv(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && {
            default: e.component,
          },
  };
  return (
    Object.defineProperty(t, "mods", {
      value: {},
    }),
    t
  );
}
function Yv(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function lc(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Jv(e) {
  return e.reduce((t, n) => _e(t, n.meta), {});
}
function cc(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Zv(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const i = (n + r) >> 1;
    Ed(e, t[i]) < 0 ? (r = i) : (n = i + 1);
  }
  const s = ey(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r;
}
function ey(e) {
  let t = e;
  for (; (t = t.parent); ) if (Cd(t) && Ed(e, t) === 0) return t;
}
function Cd({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function ty(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const i = r[s].replace(gd, " "),
      o = i.indexOf("="),
      a = ls(o < 0 ? i : i.slice(0, o)),
      l = o < 0 ? null : ls(i.slice(o + 1));
    if (a in t) {
      let c = t[a];
      Ft(c) || (c = t[a] = [c]), c.push(l);
    } else t[a] = l;
  }
  return t;
}
function uc(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = wv(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ft(r) ? r.map((i) => i && Ko(i)) : [r && Ko(r)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? "&" : "") + n), i != null && (t += "=" + i));
    });
  }
  return t;
}
function ny(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Ft(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const ry = Symbol(""),
  fc = Symbol(""),
  Mi = Symbol(""),
  ja = Symbol(""),
  Qo = Symbol("");
function Tr() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n,
  };
}
function _n(e, t, n, r, s, i = (o) => o()) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((a, l) => {
      const c = (d) => {
          d === !1
            ? l(
                gr(4, {
                  from: n,
                  to: t,
                })
              )
            : d instanceof Error
            ? l(d)
            : jv(d)
            ? l(
                gr(2, {
                  from: t,
                  to: d,
                })
              )
            : (o &&
                r.enterCallbacks[s] === o &&
                typeof d == "function" &&
                o.push(d),
              a());
        },
        u = i(() => e.call(r && r.instances[s], t, n, c));
      let f = Promise.resolve(u);
      e.length < 3 && (f = f.then(c)), f.catch((d) => l(d));
    });
}
function lo(e, t, n, r, s = (i) => i()) {
  const i = [];
  for (const o of e)
    for (const a in o.components) {
      let l = o.components[a];
      if (!(t !== "beforeRouteEnter" && !o.instances[a]))
        if (hd(l)) {
          const u = (l.__vccOpts || l)[t];
          u && i.push(_n(u, n, r, o, a, s));
        } else {
          let c = l();
          i.push(() =>
            c.then((u) => {
              if (!u)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${o.path}"`
                );
              const f = uv(u) ? u.default : u;
              (o.mods[a] = u), (o.components[a] = f);
              const h = (f.__vccOpts || f)[t];
              return h && _n(h, n, r, o, a, s)();
            })
          );
        }
    }
  return i;
}
function dc(e) {
  const t = ut(Mi),
    n = ut(ja),
    r = M(() => {
      const l = Zt(e.to);
      return t.resolve(l);
    }),
    s = M(() => {
      const { matched: l } = r.value,
        { length: c } = l,
        u = l[c - 1],
        f = n.matched;
      if (!u || !f.length) return -1;
      const d = f.findIndex(mr.bind(null, u));
      if (d > -1) return d;
      const h = hc(l[c - 2]);
      return c > 1 && hc(u) === h && f[f.length - 1].path !== h
        ? f.findIndex(mr.bind(null, l[c - 2]))
        : d;
    }),
    i = M(() => s.value > -1 && ly(n.params, r.value.params)),
    o = M(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        bd(n.params, r.value.params)
    );
  function a(l = {}) {
    if (ay(l)) {
      const c = t[Zt(e.replace) ? "replace" : "push"](Zt(e.to)).catch(Kr);
      return (
        e.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => c),
        c
      );
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: M(() => r.value.href),
    isActive: i,
    isExactActive: o,
    navigate: a,
  };
}
function sy(e) {
  return e.length === 1 ? e[0] : e;
}
const iy = Tn({
    name: "RouterLink",
    compatConfig: {
      MODE: 3,
    },
    props: {
      to: {
        type: [String, Object],
        required: !0,
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page",
      },
      viewTransition: Boolean,
    },
    useLink: dc,
    setup(e, { slots: t }) {
      const n = Kn(dc(e)),
        { options: r } = ut(Mi),
        s = M(() => ({
          [mc(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [mc(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && sy(t.default(n));
        return e.custom
          ? i
          : q(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              i
            );
      };
    },
  }),
  oy = iy;
function ay(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function ly(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!Ft(s) || s.length !== r.length || r.some((i, o) => i !== s[o]))
      return !1;
  }
  return !0;
}
function hc(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const mc = (e, t, n) => e ?? t ?? n,
  cy = Tn({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
      name: {
        type: String,
        default: "default",
      },
      route: Object,
    },
    compatConfig: {
      MODE: 3,
    },
    setup(e, { attrs: t, slots: n }) {
      const r = ut(Qo),
        s = M(() => e.route || r.value),
        i = ut(fc, 0),
        o = M(() => {
          let c = Zt(i);
          const { matched: u } = s.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        a = M(() => s.value.matched[o.value]);
      Vs(
        fc,
        M(() => o.value + 1)
      ),
        Vs(ry, a),
        Vs(Qo, s);
      const l = de();
      return (
        he(
          () => [l.value, a.value, e.name],
          ([c, u, f], [d, h, g]) => {
            u &&
              ((u.instances[f] = c),
              h &&
                h !== u &&
                c &&
                c === d &&
                (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                u.updateGuards.size || (u.updateGuards = h.updateGuards))),
              c &&
                u &&
                (!h || !mr(u, h) || !d) &&
                (u.enterCallbacks[f] || []).forEach((w) => w(c));
          },
          {
            flush: "post",
          }
        ),
        () => {
          const c = s.value,
            u = e.name,
            f = a.value,
            d = f && f.components[u];
          if (!d)
            return gc(n.default, {
              Component: d,
              route: c,
            });
          const h = f.props[u],
            g = h
              ? h === !0
                ? c.params
                : typeof h == "function"
                ? h(c)
                : h
              : null,
            x = q(
              d,
              _e({}, g, t, {
                onVnodeUnmounted: (y) => {
                  y.component.isUnmounted && (f.instances[u] = null);
                },
                ref: l,
              })
            );
          return (
            gc(n.default, {
              Component: x,
              route: c,
            }) || x
          );
        }
      );
    },
  });
function gc(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const uy = cy;
function fy(e) {
  const t = Xv(e.routes, e),
    n = e.parseQuery || ty,
    r = e.stringifyQuery || uc,
    s = e.history,
    i = Tr(),
    o = Tr(),
    a = Tr(),
    l = Ct(fn);
  let c = fn;
  sr &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = oo.bind(null, (F) => "" + F),
    f = oo.bind(null, Ev),
    d = oo.bind(null, ls);
  function h(F, Y) {
    let X, te;
    return (
      wd(F) ? ((X = t.getRecordMatcher(F)), (te = Y)) : (te = F),
      t.addRoute(te, X)
    );
  }
  function g(F) {
    const Y = t.getRecordMatcher(F);
    Y && t.removeRoute(Y);
  }
  function w() {
    return t.getRoutes().map((F) => F.record);
  }
  function x(F) {
    return !!t.getRecordMatcher(F);
  }
  function y(F, Y) {
    if (((Y = _e({}, Y || l.value)), typeof F == "string")) {
      const A = ao(n, F, Y.path),
        j = t.resolve(
          {
            path: A.path,
          },
          Y
        ),
        U = s.createHref(A.fullPath);
      return _e(A, j, {
        params: d(j.params),
        hash: ls(A.hash),
        redirectedFrom: void 0,
        href: U,
      });
    }
    let X;
    if (F.path != null)
      X = _e({}, F, {
        path: ao(n, F.path, Y.path).path,
      });
    else {
      const A = _e({}, F.params);
      for (const j in A) A[j] == null && delete A[j];
      (X = _e({}, F, {
        params: f(A),
      })),
        (Y.params = f(Y.params));
    }
    const te = t.resolve(X, Y),
      ve = F.hash || "";
    te.params = u(d(te.params));
    const _ = xv(
        r,
        _e({}, F, {
          hash: _v(ve),
          path: te.path,
        })
      ),
      E = s.createHref(_);
    return _e(
      {
        fullPath: _,
        hash: ve,
        query: r === uc ? ny(F.query) : F.query || {},
      },
      te,
      {
        redirectedFrom: void 0,
        href: E,
      }
    );
  }
  function m(F) {
    return typeof F == "string" ? ao(n, F, l.value.path) : _e({}, F);
  }
  function S(F, Y) {
    if (c !== F)
      return gr(8, {
        from: Y,
        to: F,
      });
  }
  function b(F) {
    return N(F);
  }
  function P(F) {
    return b(
      _e(m(F), {
        replace: !0,
      })
    );
  }
  function L(F) {
    const Y = F.matched[F.matched.length - 1];
    if (Y && Y.redirect) {
      const { redirect: X } = Y;
      let te = typeof X == "function" ? X(F) : X;
      return (
        typeof te == "string" &&
          ((te =
            te.includes("?") || te.includes("#")
              ? (te = m(te))
              : {
                  path: te,
                }),
          (te.params = {})),
        _e(
          {
            query: F.query,
            hash: F.hash,
            params: te.path != null ? {} : F.params,
          },
          te
        )
      );
    }
  }
  function N(F, Y) {
    const X = (c = y(F)),
      te = l.value,
      ve = F.state,
      _ = F.force,
      E = F.replace === !0,
      A = L(X);
    if (A)
      return N(
        _e(m(A), {
          state: typeof A == "object" ? _e({}, ve, A.state) : ve,
          force: _,
          replace: E,
        }),
        Y || X
      );
    const j = X;
    j.redirectedFrom = Y;
    let U;
    return (
      !_ &&
        Tv(r, te, X) &&
        ((U = gr(16, {
          to: j,
          from: te,
        })),
        fe(te, te, !0, !1)),
      (U ? Promise.resolve(U) : O(j, te))
        .catch((B) => (zt(B) ? (zt(B, 2) ? B : ce(B)) : K(B, j, te)))
        .then((B) => {
          if (B) {
            if (zt(B, 2))
              return N(
                _e(
                  {
                    replace: E,
                  },
                  m(B.to),
                  {
                    state:
                      typeof B.to == "object" ? _e({}, ve, B.to.state) : ve,
                    force: _,
                  }
                ),
                Y || j
              );
          } else B = C(j, te, !0, E, ve);
          return V(j, te, B), B;
        })
    );
  }
  function W(F, Y) {
    const X = S(F, Y);
    return X ? Promise.reject(X) : Promise.resolve();
  }
  function k(F) {
    const Y = Ie.values().next().value;
    return Y && typeof Y.runWithContext == "function"
      ? Y.runWithContext(F)
      : F();
  }
  function O(F, Y) {
    let X;
    const [te, ve, _] = dy(F, Y);
    X = lo(te.reverse(), "beforeRouteLeave", F, Y);
    for (const A of te)
      A.leaveGuards.forEach((j) => {
        X.push(_n(j, F, Y));
      });
    const E = W.bind(null, F, Y);
    return (
      X.push(E),
      ne(X)
        .then(() => {
          X = [];
          for (const A of i.list()) X.push(_n(A, F, Y));
          return X.push(E), ne(X);
        })
        .then(() => {
          X = lo(ve, "beforeRouteUpdate", F, Y);
          for (const A of ve)
            A.updateGuards.forEach((j) => {
              X.push(_n(j, F, Y));
            });
          return X.push(E), ne(X);
        })
        .then(() => {
          X = [];
          for (const A of _)
            if (A.beforeEnter)
              if (Ft(A.beforeEnter))
                for (const j of A.beforeEnter) X.push(_n(j, F, Y));
              else X.push(_n(A.beforeEnter, F, Y));
          return X.push(E), ne(X);
        })
        .then(
          () => (
            F.matched.forEach((A) => (A.enterCallbacks = {})),
            (X = lo(_, "beforeRouteEnter", F, Y, k)),
            X.push(E),
            ne(X)
          )
        )
        .then(() => {
          X = [];
          for (const A of o.list()) X.push(_n(A, F, Y));
          return X.push(E), ne(X);
        })
        .catch((A) => (zt(A, 8) ? A : Promise.reject(A)))
    );
  }
  function V(F, Y, X) {
    a.list().forEach((te) => k(() => te(F, Y, X)));
  }
  function C(F, Y, X, te, ve) {
    const _ = S(F, Y);
    if (_) return _;
    const E = Y === fn,
      A = sr ? history.state : {};
    X &&
      (te || E
        ? s.replace(
            F.fullPath,
            _e(
              {
                scroll: E && A && A.scroll,
              },
              ve
            )
          )
        : s.push(F.fullPath, ve)),
      (l.value = F),
      fe(F, Y, X, E),
      ce();
  }
  let G;
  function $() {
    G ||
      (G = s.listen((F, Y, X) => {
        if (!Oe.listening) return;
        const te = y(F),
          ve = L(te);
        if (ve) {
          N(
            _e(ve, {
              replace: !0,
              force: !0,
            }),
            te
          ).catch(Kr);
          return;
        }
        c = te;
        const _ = l.value;
        sr && Mv(tc(_.fullPath, X.delta), Ri()),
          O(te, _)
            .catch((E) =>
              zt(E, 12)
                ? E
                : zt(E, 2)
                ? (N(
                    _e(m(E.to), {
                      force: !0,
                    }),
                    te
                  )
                    .then((A) => {
                      zt(A, 20) &&
                        !X.delta &&
                        X.type === cs.pop &&
                        s.go(-1, !1);
                    })
                    .catch(Kr),
                  Promise.reject())
                : (X.delta && s.go(-X.delta, !1), K(E, te, _))
            )
            .then((E) => {
              (E = E || C(te, _, !1)),
                E &&
                  (X.delta && !zt(E, 8)
                    ? s.go(-X.delta, !1)
                    : X.type === cs.pop && zt(E, 20) && s.go(-1, !1)),
                V(te, _, E);
            })
            .catch(Kr);
      }));
  }
  let ee = Tr(),
    J = Tr(),
    Q;
  function K(F, Y, X) {
    ce(F);
    const te = J.list();
    return (
      te.length ? te.forEach((ve) => ve(F, Y, X)) : console.error(F),
      Promise.reject(F)
    );
  }
  function ie() {
    return Q && l.value !== fn
      ? Promise.resolve()
      : new Promise((F, Y) => {
          ee.add([F, Y]);
        });
  }
  function ce(F) {
    return (
      Q ||
        ((Q = !F),
        $(),
        ee.list().forEach(([Y, X]) => (F ? X(F) : Y())),
        ee.reset()),
      F
    );
  }
  function fe(F, Y, X, te) {
    const { scrollBehavior: ve } = e;
    if (!sr || !ve) return Promise.resolve();
    const _ =
      (!X && Fv(tc(F.fullPath, 0))) ||
      ((te || !X) && history.state && history.state.scroll) ||
      null;
    return ct()
      .then(() => ve(F, Y, _))
      .then((E) => E && Rv(E))
      .catch((E) => K(E, F, Y));
  }
  const z = (F) => s.go(F);
  let ge;
  const Ie = new Set(),
    Oe = {
      currentRoute: l,
      listening: !0,
      addRoute: h,
      removeRoute: g,
      clearRoutes: t.clearRoutes,
      hasRoute: x,
      getRoutes: w,
      resolve: y,
      options: e,
      push: b,
      replace: P,
      go: z,
      back: () => z(-1),
      forward: () => z(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: J.add,
      isReady: ie,
      install(F) {
        const Y = this;
        F.component("RouterLink", oy),
          F.component("RouterView", uy),
          (F.config.globalProperties.$router = Y),
          Object.defineProperty(F.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Zt(l),
          }),
          sr &&
            !ge &&
            l.value === fn &&
            ((ge = !0), b(s.location).catch((ve) => {}));
        const X = {};
        for (const ve in fn)
          Object.defineProperty(X, ve, {
            get: () => l.value[ve],
            enumerable: !0,
          });
        F.provide(Mi, Y), F.provide(ja, of(X)), F.provide(Qo, l);
        const te = F.unmount;
        Ie.add(F),
          (F.unmount = function () {
            Ie.delete(F),
              Ie.size < 1 &&
                ((c = fn),
                G && G(),
                (G = null),
                (l.value = fn),
                (ge = !1),
                (Q = !1)),
              te();
          });
      },
    };
  function ne(F) {
    return F.reduce((Y, X) => Y.then(() => k(X)), Promise.resolve());
  }
  return Oe;
}
function dy(e, t) {
  const n = [],
    r = [],
    s = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < i; o++) {
    const a = t.matched[o];
    a && (e.matched.find((c) => mr(c, a)) ? r.push(a) : n.push(a));
    const l = e.matched[o];
    l && (t.matched.find((c) => mr(c, l)) || s.push(l));
  }
  return [n, r, s];
}
function FE() {
  return ut(Mi);
}
function hy(e) {
  return ut(ja);
}
/*!
 * shared v11.1.3
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
const mi = typeof window < "u",
  Pn = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  my = (e, t, n) =>
    gy({
      l: e,
      k: t,
      s: n,
    }),
  gy = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029")
      .replace(/\u0027/g, "\\u0027"),
  De = (e) => typeof e == "number" && isFinite(e),
  py = (e) => Wa(e) === "[object Date]",
  gi = (e) => Wa(e) === "[object RegExp]",
  Fi = (e) => pe(e) && Object.keys(e).length === 0,
  tt = Object.assign,
  vy = Object.create,
  ke = (e = null) => vy(e);
function pc(e) {
  return e
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
const yy = Object.prototype.hasOwnProperty;
function At(e, t) {
  return yy.call(e, t);
}
const Ue = Array.isArray,
  Ne = (e) => typeof e == "function",
  se = (e) => typeof e == "string",
  Ae = (e) => typeof e == "boolean",
  be = (e) => e !== null && typeof e == "object",
  by = (e) => be(e) && Ne(e.then) && Ne(e.catch),
  kd = Object.prototype.toString,
  Wa = (e) => kd.call(e),
  pe = (e) => Wa(e) === "[object Object]",
  _y = (e) =>
    e == null
      ? ""
      : Ue(e) || (pe(e) && e.toString === kd)
      ? JSON.stringify(e, null, 2)
      : String(e);
function Ba(e, t = "") {
  return e.reduce((n, r, s) => (s === 0 ? n + r : n + t + r), "");
}
function wy(e, t) {
  typeof console < "u" &&
    (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Is = (e) => !be(e) || Ue(e);
function Us(e, t) {
  if (Is(e) || Is(t)) throw new Error("Invalid value");
  const n = [
    {
      src: e,
      des: t,
    },
  ];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((i) => {
      i !== "__proto__" &&
        (be(r[i]) && !be(s[i]) && (s[i] = Array.isArray(r[i]) ? [] : ke()),
        Is(s[i]) || Is(r[i])
          ? (s[i] = r[i])
          : n.push({
              src: r[i],
              des: s[i],
            }));
    });
  }
}
/*!
 * message-compiler v11.1.3
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function Sy(e, t, n) {
  return {
    line: e,
    column: t,
    offset: n,
  };
}
function Xo(e, t, n) {
  return {
    start: e,
    end: t,
  };
}
const Ee = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
  },
  Ey = 17;
function $i(e, t, n = {}) {
  const { domain: r, messages: s, args: i } = n,
    o = e,
    a = new SyntaxError(String(o));
  return (a.code = e), t && (a.location = t), (a.domain = r), a;
}
function Cy(e) {
  throw e;
}
const Kt = " ",
  ky = "\r",
  at = `
`,
  xy = "\u2028",
  Ty = "\u2029";
function Py(e) {
  const t = e;
  let n = 0,
    r = 1,
    s = 1,
    i = 0;
  const o = (N) => t[N] === ky && t[N + 1] === at,
    a = (N) => t[N] === at,
    l = (N) => t[N] === Ty,
    c = (N) => t[N] === xy,
    u = (N) => o(N) || a(N) || l(N) || c(N),
    f = () => n,
    d = () => r,
    h = () => s,
    g = () => i,
    w = (N) => (o(N) || l(N) || c(N) ? at : t[N]),
    x = () => w(n),
    y = () => w(n + i);
  function m() {
    return (i = 0), u(n) && (r++, (s = 0)), o(n) && n++, n++, s++, t[n];
  }
  function S() {
    return o(n + i) && i++, i++, t[n + i];
  }
  function b() {
    (n = 0), (r = 1), (s = 1), (i = 0);
  }
  function P(N = 0) {
    i = N;
  }
  function L() {
    const N = n + i;
    for (; N !== n; ) m();
    i = 0;
  }
  return {
    index: f,
    line: d,
    column: h,
    peekOffset: g,
    charAt: w,
    currentChar: x,
    currentPeek: y,
    next: m,
    peek: S,
    reset: b,
    resetPeek: P,
    skipToPeek: L,
  };
}
const dn = void 0,
  Iy = ".",
  vc = "'",
  Ny = "tokenizer";
function Ay(e, t = {}) {
  const n = t.location !== !1,
    r = Py(e),
    s = () => r.index(),
    i = () => Sy(r.line(), r.column(), r.index()),
    o = i(),
    a = s(),
    l = {
      currentType: 13,
      offset: a,
      startLoc: o,
      endLoc: o,
      lastType: 13,
      lastOffset: a,
      lastStartLoc: o,
      lastEndLoc: o,
      braceNest: 0,
      inLinked: !1,
      text: "",
    },
    c = () => l,
    { onError: u } = t;
  function f(p, v, I, ...R) {
    const Z = c();
    if (((v.column += I), (v.offset += I), u)) {
      const H = n ? Xo(Z.startLoc, v) : null,
        T = $i(p, H, {
          domain: Ny,
          args: R,
        });
      u(T);
    }
  }
  function d(p, v, I) {
    (p.endLoc = i()), (p.currentType = v);
    const R = {
      type: v,
    };
    return (
      n && (R.loc = Xo(p.startLoc, p.endLoc)), I != null && (R.value = I), R
    );
  }
  const h = (p) => d(p, 13);
  function g(p, v) {
    return p.currentChar() === v
      ? (p.next(), v)
      : (f(Ee.EXPECTED_TOKEN, i(), 0, v), "");
  }
  function w(p) {
    let v = "";
    for (; p.currentPeek() === Kt || p.currentPeek() === at; )
      (v += p.currentPeek()), p.peek();
    return v;
  }
  function x(p) {
    const v = w(p);
    return p.skipToPeek(), v;
  }
  function y(p) {
    if (p === dn) return !1;
    const v = p.charCodeAt(0);
    return (v >= 97 && v <= 122) || (v >= 65 && v <= 90) || v === 95;
  }
  function m(p) {
    if (p === dn) return !1;
    const v = p.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function S(p, v) {
    const { currentType: I } = v;
    if (I !== 2) return !1;
    w(p);
    const R = y(p.currentPeek());
    return p.resetPeek(), R;
  }
  function b(p, v) {
    const { currentType: I } = v;
    if (I !== 2) return !1;
    w(p);
    const R = p.currentPeek() === "-" ? p.peek() : p.currentPeek(),
      Z = m(R);
    return p.resetPeek(), Z;
  }
  function P(p, v) {
    const { currentType: I } = v;
    if (I !== 2) return !1;
    w(p);
    const R = p.currentPeek() === vc;
    return p.resetPeek(), R;
  }
  function L(p, v) {
    const { currentType: I } = v;
    if (I !== 7) return !1;
    w(p);
    const R = p.currentPeek() === ".";
    return p.resetPeek(), R;
  }
  function N(p, v) {
    const { currentType: I } = v;
    if (I !== 8) return !1;
    w(p);
    const R = y(p.currentPeek());
    return p.resetPeek(), R;
  }
  function W(p, v) {
    const { currentType: I } = v;
    if (!(I === 7 || I === 11)) return !1;
    w(p);
    const R = p.currentPeek() === ":";
    return p.resetPeek(), R;
  }
  function k(p, v) {
    const { currentType: I } = v;
    if (I !== 9) return !1;
    const R = () => {
        const H = p.currentPeek();
        return H === "{"
          ? y(p.peek())
          : H === "@" || H === "|" || H === ":" || H === "." || H === Kt || !H
          ? !1
          : H === at
          ? (p.peek(), R())
          : V(p, !1);
      },
      Z = R();
    return p.resetPeek(), Z;
  }
  function O(p) {
    w(p);
    const v = p.currentPeek() === "|";
    return p.resetPeek(), v;
  }
  function V(p, v = !0) {
    const I = (Z = !1, H = "") => {
        const T = p.currentPeek();
        return T === "{" || T === "@" || !T
          ? Z
          : T === "|"
          ? !(H === Kt || H === at)
          : T === Kt
          ? (p.peek(), I(!0, Kt))
          : T === at
          ? (p.peek(), I(!0, at))
          : !0;
      },
      R = I();
    return v && p.resetPeek(), R;
  }
  function C(p, v) {
    const I = p.currentChar();
    return I === dn ? dn : v(I) ? (p.next(), I) : null;
  }
  function G(p) {
    const v = p.charCodeAt(0);
    return (
      (v >= 97 && v <= 122) ||
      (v >= 65 && v <= 90) ||
      (v >= 48 && v <= 57) ||
      v === 95 ||
      v === 36
    );
  }
  function $(p) {
    return C(p, G);
  }
  function ee(p) {
    const v = p.charCodeAt(0);
    return (
      (v >= 97 && v <= 122) ||
      (v >= 65 && v <= 90) ||
      (v >= 48 && v <= 57) ||
      v === 95 ||
      v === 36 ||
      v === 45
    );
  }
  function J(p) {
    return C(p, ee);
  }
  function Q(p) {
    const v = p.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function K(p) {
    return C(p, Q);
  }
  function ie(p) {
    const v = p.charCodeAt(0);
    return (
      (v >= 48 && v <= 57) || (v >= 65 && v <= 70) || (v >= 97 && v <= 102)
    );
  }
  function ce(p) {
    return C(p, ie);
  }
  function fe(p) {
    let v = "",
      I = "";
    for (; (v = K(p)); ) I += v;
    return I;
  }
  function z(p) {
    let v = "";
    for (;;) {
      const I = p.currentChar();
      if (I === "{" || I === "}" || I === "@" || I === "|" || !I) break;
      if (I === Kt || I === at)
        if (V(p)) (v += I), p.next();
        else {
          if (O(p)) break;
          (v += I), p.next();
        }
      else (v += I), p.next();
    }
    return v;
  }
  function ge(p) {
    x(p);
    let v = "",
      I = "";
    for (; (v = J(p)); ) I += v;
    return (
      p.currentChar() === dn && f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0), I
    );
  }
  function Ie(p) {
    x(p);
    let v = "";
    return (
      p.currentChar() === "-" ? (p.next(), (v += `-${fe(p)}`)) : (v += fe(p)),
      p.currentChar() === dn && f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0),
      v
    );
  }
  function Oe(p) {
    return p !== vc && p !== at;
  }
  function ne(p) {
    x(p), g(p, "'");
    let v = "",
      I = "";
    for (; (v = C(p, Oe)); ) v === "\\" ? (I += F(p)) : (I += v);
    const R = p.currentChar();
    return R === at || R === dn
      ? (f(Ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0),
        R === at && (p.next(), g(p, "'")),
        I)
      : (g(p, "'"), I);
  }
  function F(p) {
    const v = p.currentChar();
    switch (v) {
      case "\\":
      case "'":
        return p.next(), `\\${v}`;
      case "u":
        return Y(p, v, 4);
      case "U":
        return Y(p, v, 6);
      default:
        return f(Ee.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, v), "";
    }
  }
  function Y(p, v, I) {
    g(p, v);
    let R = "";
    for (let Z = 0; Z < I; Z++) {
      const H = ce(p);
      if (!H) {
        f(
          Ee.INVALID_UNICODE_ESCAPE_SEQUENCE,
          i(),
          0,
          `\\${v}${R}${p.currentChar()}`
        );
        break;
      }
      R += H;
    }
    return `\\${v}${R}`;
  }
  function X(p) {
    return p !== "{" && p !== "}" && p !== Kt && p !== at;
  }
  function te(p) {
    x(p);
    let v = "",
      I = "";
    for (; (v = C(p, X)); ) I += v;
    return I;
  }
  function ve(p) {
    let v = "",
      I = "";
    for (; (v = $(p)); ) I += v;
    return I;
  }
  function _(p) {
    const v = (I) => {
      const R = p.currentChar();
      return R === "{" ||
        R === "@" ||
        R === "|" ||
        R === "(" ||
        R === ")" ||
        !R ||
        R === Kt
        ? I
        : ((I += R), p.next(), v(I));
    };
    return v("");
  }
  function E(p) {
    x(p);
    const v = g(p, "|");
    return x(p), v;
  }
  function A(p, v) {
    let I = null;
    switch (p.currentChar()) {
      case "{":
        return (
          v.braceNest >= 1 && f(Ee.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0),
          p.next(),
          (I = d(v, 2, "{")),
          x(p),
          v.braceNest++,
          I
        );
      case "}":
        return (
          v.braceNest > 0 &&
            v.currentType === 2 &&
            f(Ee.EMPTY_PLACEHOLDER, i(), 0),
          p.next(),
          (I = d(v, 3, "}")),
          v.braceNest--,
          v.braceNest > 0 && x(p),
          v.inLinked && v.braceNest === 0 && (v.inLinked = !1),
          I
        );
      case "@":
        return (
          v.braceNest > 0 && f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0),
          (I = j(p, v) || h(v)),
          (v.braceNest = 0),
          I
        );
      default: {
        let Z = !0,
          H = !0,
          T = !0;
        if (O(p))
          return (
            v.braceNest > 0 && f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0),
            (I = d(v, 1, E(p))),
            (v.braceNest = 0),
            (v.inLinked = !1),
            I
          );
        if (
          v.braceNest > 0 &&
          (v.currentType === 4 || v.currentType === 5 || v.currentType === 6)
        )
          return (
            f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0), (v.braceNest = 0), U(p, v)
          );
        if ((Z = S(p, v))) return (I = d(v, 4, ge(p))), x(p), I;
        if ((H = b(p, v))) return (I = d(v, 5, Ie(p))), x(p), I;
        if ((T = P(p, v))) return (I = d(v, 6, ne(p))), x(p), I;
        if (!Z && !H && !T)
          return (
            (I = d(v, 12, te(p))),
            f(Ee.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, I.value),
            x(p),
            I
          );
        break;
      }
    }
    return I;
  }
  function j(p, v) {
    const { currentType: I } = v;
    let R = null;
    const Z = p.currentChar();
    switch (
      ((I === 7 || I === 8 || I === 11 || I === 9) &&
        (Z === at || Z === Kt) &&
        f(Ee.INVALID_LINKED_FORMAT, i(), 0),
      Z)
    ) {
      case "@":
        return p.next(), (R = d(v, 7, "@")), (v.inLinked = !0), R;
      case ".":
        return x(p), p.next(), d(v, 8, ".");
      case ":":
        return x(p), p.next(), d(v, 9, ":");
      default:
        return O(p)
          ? ((R = d(v, 1, E(p))), (v.braceNest = 0), (v.inLinked = !1), R)
          : L(p, v) || W(p, v)
          ? (x(p), j(p, v))
          : N(p, v)
          ? (x(p), d(v, 11, ve(p)))
          : k(p, v)
          ? (x(p), Z === "{" ? A(p, v) || R : d(v, 10, _(p)))
          : (I === 7 && f(Ee.INVALID_LINKED_FORMAT, i(), 0),
            (v.braceNest = 0),
            (v.inLinked = !1),
            U(p, v));
    }
  }
  function U(p, v) {
    let I = {
      type: 13,
    };
    if (v.braceNest > 0) return A(p, v) || h(v);
    if (v.inLinked) return j(p, v) || h(v);
    switch (p.currentChar()) {
      case "{":
        return A(p, v) || h(v);
      case "}":
        return f(Ee.UNBALANCED_CLOSING_BRACE, i(), 0), p.next(), d(v, 3, "}");
      case "@":
        return j(p, v) || h(v);
      default: {
        if (O(p))
          return (I = d(v, 1, E(p))), (v.braceNest = 0), (v.inLinked = !1), I;
        if (V(p)) return d(v, 0, z(p));
        break;
      }
    }
    return I;
  }
  function B() {
    const { currentType: p, offset: v, startLoc: I, endLoc: R } = l;
    return (
      (l.lastType = p),
      (l.lastOffset = v),
      (l.lastStartLoc = I),
      (l.lastEndLoc = R),
      (l.offset = s()),
      (l.startLoc = i()),
      r.currentChar() === dn ? d(l, 13) : U(r, l)
    );
  }
  return {
    nextToken: B,
    currentOffset: s,
    currentPosition: i,
    context: c,
  };
}
const Ly = "parser",
  Oy = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Ry(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function My(e = {}) {
  const t = e.location !== !1,
    { onError: n } = e;
  function r(y, m, S, b, ...P) {
    const L = y.currentPosition();
    if (((L.offset += b), (L.column += b), n)) {
      const N = t ? Xo(S, L) : null,
        W = $i(m, N, {
          domain: Ly,
          args: P,
        });
      n(W);
    }
  }
  function s(y, m, S) {
    const b = {
      type: y,
    };
    return (
      t &&
        ((b.start = m),
        (b.end = m),
        (b.loc = {
          start: S,
          end: S,
        })),
      b
    );
  }
  function i(y, m, S, b) {
    t && ((y.end = m), y.loc && (y.loc.end = S));
  }
  function o(y, m) {
    const S = y.context(),
      b = s(3, S.offset, S.startLoc);
    return (b.value = m), i(b, y.currentOffset(), y.currentPosition()), b;
  }
  function a(y, m) {
    const S = y.context(),
      { lastOffset: b, lastStartLoc: P } = S,
      L = s(5, b, P);
    return (
      (L.index = parseInt(m, 10)),
      y.nextToken(),
      i(L, y.currentOffset(), y.currentPosition()),
      L
    );
  }
  function l(y, m) {
    const S = y.context(),
      { lastOffset: b, lastStartLoc: P } = S,
      L = s(4, b, P);
    return (
      (L.key = m),
      y.nextToken(),
      i(L, y.currentOffset(), y.currentPosition()),
      L
    );
  }
  function c(y, m) {
    const S = y.context(),
      { lastOffset: b, lastStartLoc: P } = S,
      L = s(9, b, P);
    return (
      (L.value = m.replace(Oy, Ry)),
      y.nextToken(),
      i(L, y.currentOffset(), y.currentPosition()),
      L
    );
  }
  function u(y) {
    const m = y.nextToken(),
      S = y.context(),
      { lastOffset: b, lastStartLoc: P } = S,
      L = s(8, b, P);
    return m.type !== 11
      ? (r(y, Ee.UNEXPECTED_EMPTY_LINKED_MODIFIER, S.lastStartLoc, 0),
        (L.value = ""),
        i(L, b, P),
        {
          nextConsumeToken: m,
          node: L,
        })
      : (m.value == null &&
          r(y, Ee.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, qt(m)),
        (L.value = m.value || ""),
        i(L, y.currentOffset(), y.currentPosition()),
        {
          node: L,
        });
  }
  function f(y, m) {
    const S = y.context(),
      b = s(7, S.offset, S.startLoc);
    return (b.value = m), i(b, y.currentOffset(), y.currentPosition()), b;
  }
  function d(y) {
    const m = y.context(),
      S = s(6, m.offset, m.startLoc);
    let b = y.nextToken();
    if (b.type === 8) {
      const P = u(y);
      (S.modifier = P.node), (b = P.nextConsumeToken || y.nextToken());
    }
    switch (
      (b.type !== 9 &&
        r(y, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, qt(b)),
      (b = y.nextToken()),
      b.type === 2 && (b = y.nextToken()),
      b.type)
    ) {
      case 10:
        b.value == null &&
          r(y, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, qt(b)),
          (S.key = f(y, b.value || ""));
        break;
      case 4:
        b.value == null &&
          r(y, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, qt(b)),
          (S.key = l(y, b.value || ""));
        break;
      case 5:
        b.value == null &&
          r(y, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, qt(b)),
          (S.key = a(y, b.value || ""));
        break;
      case 6:
        b.value == null &&
          r(y, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, qt(b)),
          (S.key = c(y, b.value || ""));
        break;
      default: {
        r(y, Ee.UNEXPECTED_EMPTY_LINKED_KEY, m.lastStartLoc, 0);
        const P = y.context(),
          L = s(7, P.offset, P.startLoc);
        return (
          (L.value = ""),
          i(L, P.offset, P.startLoc),
          (S.key = L),
          i(S, P.offset, P.startLoc),
          {
            nextConsumeToken: b,
            node: S,
          }
        );
      }
    }
    return (
      i(S, y.currentOffset(), y.currentPosition()),
      {
        node: S,
      }
    );
  }
  function h(y) {
    const m = y.context(),
      S = m.currentType === 1 ? y.currentOffset() : m.offset,
      b = m.currentType === 1 ? m.endLoc : m.startLoc,
      P = s(2, S, b);
    P.items = [];
    let L = null;
    do {
      const k = L || y.nextToken();
      switch (((L = null), k.type)) {
        case 0:
          k.value == null &&
            r(y, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, qt(k)),
            P.items.push(o(y, k.value || ""));
          break;
        case 5:
          k.value == null &&
            r(y, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, qt(k)),
            P.items.push(a(y, k.value || ""));
          break;
        case 4:
          k.value == null &&
            r(y, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, qt(k)),
            P.items.push(l(y, k.value || ""));
          break;
        case 6:
          k.value == null &&
            r(y, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, qt(k)),
            P.items.push(c(y, k.value || ""));
          break;
        case 7: {
          const O = d(y);
          P.items.push(O.node), (L = O.nextConsumeToken || null);
          break;
        }
      }
    } while (m.currentType !== 13 && m.currentType !== 1);
    const N = m.currentType === 1 ? m.lastOffset : y.currentOffset(),
      W = m.currentType === 1 ? m.lastEndLoc : y.currentPosition();
    return i(P, N, W), P;
  }
  function g(y, m, S, b) {
    const P = y.context();
    let L = b.items.length === 0;
    const N = s(1, m, S);
    (N.cases = []), N.cases.push(b);
    do {
      const W = h(y);
      L || (L = W.items.length === 0), N.cases.push(W);
    } while (P.currentType !== 13);
    return (
      L && r(y, Ee.MUST_HAVE_MESSAGES_IN_PLURAL, S, 0),
      i(N, y.currentOffset(), y.currentPosition()),
      N
    );
  }
  function w(y) {
    const m = y.context(),
      { offset: S, startLoc: b } = m,
      P = h(y);
    return m.currentType === 13 ? P : g(y, S, b, P);
  }
  function x(y) {
    const m = Ay(y, tt({}, e)),
      S = m.context(),
      b = s(0, S.offset, S.startLoc);
    return (
      t && b.loc && (b.loc.source = y),
      (b.body = w(m)),
      e.onCacheKey && (b.cacheKey = e.onCacheKey(y)),
      S.currentType !== 13 &&
        r(
          m,
          Ee.UNEXPECTED_LEXICAL_ANALYSIS,
          S.lastStartLoc,
          0,
          y[S.offset] || ""
        ),
      i(b, m.currentOffset(), m.currentPosition()),
      b
    );
  }
  return {
    parse: x,
  };
}
function qt(e) {
  if (e.type === 13) return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Fy(e, t = {}) {
  const n = {
    ast: e,
    helpers: new Set(),
  };
  return {
    context: () => n,
    helper: (i) => (n.helpers.add(i), i),
  };
}
function yc(e, t) {
  for (let n = 0; n < e.length; n++) Ua(e[n], t);
}
function Ua(e, t) {
  switch (e.type) {
    case 1:
      yc(e.cases, t), t.helper("plural");
      break;
    case 2:
      yc(e.items, t);
      break;
    case 6: {
      Ua(e.key, t), t.helper("linked"), t.helper("type");
      break;
    }
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named");
      break;
  }
}
function $y(e, t = {}) {
  const n = Fy(e);
  n.helper("normalize"), e.body && Ua(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Dy(e) {
  const t = e.body;
  return t.type === 2 ? bc(t) : t.cases.forEach((n) => bc(n)), e;
}
function bc(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && ((e.static = t.value), delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null) break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = Ba(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function ir(e) {
  switch (((e.t = e.type), e.type)) {
    case 0: {
      const t = e;
      ir(t.body), (t.b = t.body), delete t.body;
      break;
    }
    case 1: {
      const t = e,
        n = t.cases;
      for (let r = 0; r < n.length; r++) ir(n[r]);
      (t.c = n), delete t.cases;
      break;
    }
    case 2: {
      const t = e,
        n = t.items;
      for (let r = 0; r < n.length; r++) ir(n[r]);
      (t.i = n),
        delete t.items,
        t.static && ((t.s = t.static), delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && ((t.v = t.value), delete t.value);
      break;
    }
    case 6: {
      const t = e;
      ir(t.key),
        (t.k = t.key),
        delete t.key,
        t.modifier && (ir(t.modifier), (t.m = t.modifier), delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      (t.i = t.index), delete t.index;
      break;
    }
    case 4: {
      const t = e;
      (t.k = t.key), delete t.key;
      break;
    }
  }
  delete e.type;
}
function qy(e, t) {
  const { filename: n, breakLineCode: r, needIndent: s } = t,
    i = t.location !== !1,
    o = {
      filename: n,
      code: "",
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: r,
      needIndent: s,
      indentLevel: 0,
    };
  i && e.loc && (o.source = e.loc.source);
  const a = () => o;
  function l(w, x) {
    o.code += w;
  }
  function c(w, x = !0) {
    const y = x ? r : "";
    l(s ? y + "  ".repeat(w) : y);
  }
  function u(w = !0) {
    const x = ++o.indentLevel;
    w && c(x);
  }
  function f(w = !0) {
    const x = --o.indentLevel;
    w && c(x);
  }
  function d() {
    c(o.indentLevel);
  }
  return {
    context: a,
    push: l,
    indent: u,
    deindent: f,
    newline: d,
    helper: (w) => `_${w}`,
    needIndent: () => o.needIndent,
  };
}
function Vy(e, t) {
  const { helper: n } = e;
  e.push(`${n("linked")}(`),
    pr(e, t.key),
    t.modifier
      ? (e.push(", "), pr(e, t.modifier), e.push(", _type"))
      : e.push(", undefined, _type"),
    e.push(")");
}
function jy(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n("normalize")}([`), e.indent(r());
  const s = t.items.length;
  for (let i = 0; i < s && (pr(e, t.items[i]), i !== s - 1); i++) e.push(", ");
  e.deindent(r()), e.push("])");
}
function Wy(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(r());
    const s = t.cases.length;
    for (let i = 0; i < s && (pr(e, t.cases[i]), i !== s - 1); i++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function By(e, t) {
  t.body ? pr(e, t.body) : e.push("null");
}
function pr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      By(e, t);
      break;
    case 1:
      Wy(e, t);
      break;
    case 2:
      jy(e, t);
      break;
    case 6:
      Vy(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
  }
}
const Uy = (e, t = {}) => {
  const n = se(t.mode) ? t.mode : "normal",
    r = se(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s =
      t.breakLineCode != null
        ? t.breakLineCode
        : n === "arrow"
        ? ";"
        : `
`,
    i = t.needIndent ? t.needIndent : n !== "arrow",
    o = e.helpers || [],
    a = qy(e, {
      filename: r,
      breakLineCode: s,
      needIndent: i,
    });
  a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    a.indent(i),
    o.length > 0 &&
      (a.push(
        `const { ${Ba(
          o.map((u) => `${u}: _${u}`),
          ", "
        )} } = ctx`
      ),
      a.newline()),
    a.push("return "),
    pr(a, e),
    a.deindent(i),
    a.push("}"),
    delete e.helpers;
  const { code: l, map: c } = a.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0,
  };
};
function Hy(e, t = {}) {
  const n = tt({}, t),
    r = !!n.jit,
    s = !!n.minify,
    i = n.optimize == null ? !0 : n.optimize,
    a = My(n).parse(e);
  return r
    ? (i && Dy(a),
      s && ir(a),
      {
        ast: a,
        code: "",
      })
    : ($y(a, n), Uy(a, n));
}
/*!
 * core-base v11.1.3
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function Ut(e) {
  return be(e) && Ha(e) === 0 && (At(e, "b") || At(e, "body"));
}
const xd = ["b", "body"];
function zy(e) {
  return In(e, xd);
}
const Td = ["c", "cases"];
function Ky(e) {
  return In(e, Td, []);
}
const Pd = ["s", "static"];
function Gy(e) {
  return In(e, Pd);
}
const Id = ["i", "items"];
function Qy(e) {
  return In(e, Id, []);
}
const Nd = ["t", "type"];
function Ha(e) {
  return In(e, Nd);
}
const Ad = ["v", "value"];
function Ns(e, t) {
  const n = In(e, Ad);
  if (n != null) return n;
  throw us(t);
}
const Ld = ["m", "modifier"];
function Xy(e) {
  return In(e, Ld);
}
const Od = ["k", "key"];
function Yy(e) {
  const t = In(e, Od);
  if (t) return t;
  throw us(6);
}
function In(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (At(e, s) && e[s] != null) return e[s];
  }
  return n;
}
const Rd = [...xd, ...Td, ...Pd, ...Id, ...Od, ...Ld, ...Ad, ...Nd];
function us(e) {
  return new Error(`unhandled node type: ${e}`);
}
function co(e) {
  return (n) => Jy(n, e);
}
function Jy(e, t) {
  const n = zy(t);
  if (n == null) throw us(0);
  if (Ha(n) === 1) {
    const i = Ky(n);
    return e.plural(i.reduce((o, a) => [...o, _c(e, a)], []));
  } else return _c(e, n);
}
function _c(e, t) {
  const n = Gy(t);
  if (n != null) return e.type === "text" ? n : e.normalize([n]);
  {
    const r = Qy(t).reduce((s, i) => [...s, Yo(e, i)], []);
    return e.normalize(r);
  }
}
function Yo(e, t) {
  const n = Ha(t);
  switch (n) {
    case 3:
      return Ns(t, n);
    case 9:
      return Ns(t, n);
    case 4: {
      const r = t;
      if (At(r, "k") && r.k) return e.interpolate(e.named(r.k));
      if (At(r, "key") && r.key) return e.interpolate(e.named(r.key));
      throw us(n);
    }
    case 5: {
      const r = t;
      if (At(r, "i") && De(r.i)) return e.interpolate(e.list(r.i));
      if (At(r, "index") && De(r.index)) return e.interpolate(e.list(r.index));
      throw us(n);
    }
    case 6: {
      const r = t,
        s = Xy(r),
        i = Yy(r);
      return e.linked(Yo(e, i), s ? Yo(e, s) : void 0, e.type);
    }
    case 7:
      return Ns(t, n);
    case 8:
      return Ns(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Zy = (e) => e;
let As = ke();
function eb(e, t = {}) {
  let n = !1;
  const r = t.onError || Cy;
  return (
    (t.onError = (s) => {
      (n = !0), r(s);
    }),
    {
      ...Hy(e, t),
      detectError: n,
    }
  );
}
function tb(e, t) {
  if (se(e)) {
    Ae(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || Zy)(e),
      s = As[r];
    if (s) return s;
    const { ast: i, detectError: o } = eb(e, {
        ...t,
        location: !1,
        jit: !0,
      }),
      a = co(i);
    return o ? a : (As[r] = a);
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = As[n];
      return r || (As[n] = co(e));
    } else return co(e);
  }
}
const Yt = {
    INVALID_ARGUMENT: Ey,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23,
  },
  nb = 24;
function Jt(e) {
  return $i(e, null, void 0);
}
function za(e, t) {
  return t.locale != null ? wc(t.locale) : wc(e.locale);
}
let uo;
function wc(e) {
  if (se(e)) return e;
  if (Ne(e)) {
    if (e.resolvedOnce && uo != null) return uo;
    if (e.constructor.name === "Function") {
      const t = e();
      if (by(t)) throw Jt(Yt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return (uo = t);
    } else throw Jt(Yt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else throw Jt(Yt.NOT_SUPPORT_LOCALE_TYPE);
}
function rb(e, t, n) {
  return [
    ...new Set([
      n,
      ...(Ue(t) ? t : be(t) ? Object.keys(t) : se(t) ? [t] : [n]),
    ]),
  ];
}
function Md(e, t, n) {
  const r = se(n) ? n : pi,
    s = e;
  s.__localeChainCache || (s.__localeChainCache = new Map());
  let i = s.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let o = [n];
    for (; Ue(o); ) o = Sc(i, o, t);
    const a = Ue(t) || !pe(t) ? t : t.default ? t.default : null;
    (o = se(a) ? [a] : a),
      Ue(o) && Sc(i, o, !1),
      s.__localeChainCache.set(r, i);
  }
  return i;
}
function Sc(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && Ae(r); s++) {
    const i = t[s];
    se(i) && (r = sb(e, t[s], n));
  }
  return r;
}
function sb(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const i = s.join("-");
    (r = ib(e, i, n)), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function ib(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Ue(n) || pe(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const Nn = [];
Nn[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7],
};
Nn[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7],
};
Nn[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0],
};
Nn[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1],
};
Nn[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0],
};
Nn[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0],
};
Nn[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0],
};
const ob = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function ab(e) {
  return ob.test(e);
}
function lb(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function cb(e) {
  if (e == null) return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function ub(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e))
    ? !1
    : ab(t)
    ? lb(t)
    : "*" + t;
}
function fb(e) {
  const t = [];
  let n = -1,
    r = 0,
    s = 0,
    i,
    o,
    a,
    l,
    c,
    u,
    f;
  const d = [];
  (d[0] = () => {
    o === void 0 ? (o = a) : (o += a);
  }),
    (d[1] = () => {
      o !== void 0 && (t.push(o), (o = void 0));
    }),
    (d[2] = () => {
      d[0](), s++;
    }),
    (d[3] = () => {
      if (s > 0) s--, (r = 4), d[0]();
      else {
        if (((s = 0), o === void 0 || ((o = ub(o)), o === !1))) return !1;
        d[1]();
      }
    });
  function h() {
    const g = e[n + 1];
    if ((r === 5 && g === "'") || (r === 6 && g === '"'))
      return n++, (a = "\\" + g), d[0](), !0;
  }
  for (; r !== null; )
    if ((n++, (i = e[n]), !(i === "\\" && h()))) {
      if (
        ((l = cb(i)),
        (f = Nn[r]),
        (c = f[l] || f.l || 8),
        c === 8 ||
          ((r = c[0]),
          c[1] !== void 0 && ((u = d[c[1]]), u && ((a = i), u() === !1))))
      )
        return;
      if (r === 7) return t;
    }
}
const Ec = new Map();
function db(e, t) {
  return be(e) ? e[t] : null;
}
function hb(e, t) {
  if (!be(e)) return null;
  let n = Ec.get(t);
  if ((n || ((n = fb(t)), n && Ec.set(t, n)), !n)) return null;
  const r = n.length;
  let s = e,
    i = 0;
  for (; i < r; ) {
    const o = n[i];
    if (Rd.includes(o) && Ut(s)) return null;
    const a = s[o];
    if (a === void 0 || Ne(s)) return null;
    (s = a), i++;
  }
  return s;
}
const mb = "11.1.3",
  Di = -1,
  pi = "en-US",
  Cc = "",
  kc = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function gb() {
  return {
    upper: (e, t) =>
      t === "text" && se(e)
        ? e.toUpperCase()
        : t === "vnode" && be(e) && "__v_isVNode" in e
        ? e.children.toUpperCase()
        : e,
    lower: (e, t) =>
      t === "text" && se(e)
        ? e.toLowerCase()
        : t === "vnode" && be(e) && "__v_isVNode" in e
        ? e.children.toLowerCase()
        : e,
    capitalize: (e, t) =>
      t === "text" && se(e)
        ? kc(e)
        : t === "vnode" && be(e) && "__v_isVNode" in e
        ? kc(e.children)
        : e,
  };
}
let Fd;
function pb(e) {
  Fd = e;
}
let $d;
function vb(e) {
  $d = e;
}
let Dd;
function yb(e) {
  Dd = e;
}
let qd = null;
const xc = (e) => {
    qd = e;
  },
  bb = () => qd;
let Tc = 0;
function _b(e = {}) {
  const t = Ne(e.onWarn) ? e.onWarn : wy,
    n = se(e.version) ? e.version : mb,
    r = se(e.locale) || Ne(e.locale) ? e.locale : pi,
    s = Ne(r) ? pi : r,
    i =
      Ue(e.fallbackLocale) ||
      pe(e.fallbackLocale) ||
      se(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : s,
    o = pe(e.messages) ? e.messages : fo(s),
    a = pe(e.datetimeFormats) ? e.datetimeFormats : fo(s),
    l = pe(e.numberFormats) ? e.numberFormats : fo(s),
    c = tt(ke(), e.modifiers, gb()),
    u = e.pluralRules || ke(),
    f = Ne(e.missing) ? e.missing : null,
    d = Ae(e.missingWarn) || gi(e.missingWarn) ? e.missingWarn : !0,
    h = Ae(e.fallbackWarn) || gi(e.fallbackWarn) ? e.fallbackWarn : !0,
    g = !!e.fallbackFormat,
    w = !!e.unresolving,
    x = Ne(e.postTranslation) ? e.postTranslation : null,
    y = pe(e.processor) ? e.processor : null,
    m = Ae(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    S = !!e.escapeParameter,
    b = Ne(e.messageCompiler) ? e.messageCompiler : Fd,
    P = Ne(e.messageResolver) ? e.messageResolver : $d || db,
    L = Ne(e.localeFallbacker) ? e.localeFallbacker : Dd || rb,
    N = be(e.fallbackContext) ? e.fallbackContext : void 0,
    W = e,
    k = be(W.__datetimeFormatters) ? W.__datetimeFormatters : new Map(),
    O = be(W.__numberFormatters) ? W.__numberFormatters : new Map(),
    V = be(W.__meta) ? W.__meta : {};
  Tc++;
  const C = {
    version: n,
    cid: Tc,
    locale: r,
    fallbackLocale: i,
    messages: o,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: d,
    fallbackWarn: h,
    fallbackFormat: g,
    unresolving: w,
    postTranslation: x,
    processor: y,
    warnHtmlMessage: m,
    escapeParameter: S,
    messageCompiler: b,
    messageResolver: P,
    localeFallbacker: L,
    fallbackContext: N,
    onWarn: t,
    __meta: V,
  };
  return (
    (C.datetimeFormats = a),
    (C.numberFormats = l),
    (C.__datetimeFormatters = k),
    (C.__numberFormatters = O),
    C
  );
}
const fo = (e) => ({
  [e]: ke(),
});
function Ka(e, t, n, r, s) {
  const { missing: i, onWarn: o } = e;
  if (i !== null) {
    const a = i(e, n, t, s);
    return se(a) ? a : t;
  } else return t;
}
function Pr(e, t, n) {
  const r = e;
  (r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
function wb(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Sb(e, t) {
  const n = t.indexOf(e);
  if (n === -1) return !1;
  for (let r = n + 1; r < t.length; r++) if (wb(e, t[r])) return !0;
  return !1;
}
function Pc(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: i,
      localeFallbacker: o,
    } = e,
    { __datetimeFormatters: a } = e,
    [l, c, u, f] = Jo(...t),
    d = Ae(u.missingWarn) ? u.missingWarn : e.missingWarn;
  Ae(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const h = !!u.part,
    g = za(e, u),
    w = o(e, s, g);
  if (!se(l) || l === "") return new Intl.DateTimeFormat(g, f).format(c);
  let x = {},
    y,
    m = null;
  const S = "datetime format";
  for (
    let L = 0;
    L < w.length && ((y = w[L]), (x = n[y] || {}), (m = x[l]), !pe(m));
    L++
  )
    Ka(e, l, y, d, S);
  if (!pe(m) || !se(y)) return r ? Di : l;
  let b = `${y}__${l}`;
  Fi(f) || (b = `${b}__${JSON.stringify(f)}`);
  let P = a.get(b);
  return (
    P || ((P = new Intl.DateTimeFormat(y, tt({}, m, f))), a.set(b, P)),
    h ? P.formatToParts(c) : P.format(c)
  );
}
const Vd = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits",
];
function Jo(...e) {
  const [t, n, r, s] = e,
    i = ke();
  let o = ke(),
    a;
  if (se(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l) throw Jt(Yt.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3]
      ? l[3].trim().startsWith("T")
        ? `${l[1].trim()}${l[3].trim()}`
        : `${l[1].trim()}T${l[3].trim()}`
      : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString();
    } catch {
      throw Jt(Yt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (py(t)) {
    if (isNaN(t.getTime())) throw Jt(Yt.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (De(t)) a = t;
  else throw Jt(Yt.INVALID_ARGUMENT);
  return (
    se(n)
      ? (i.key = n)
      : pe(n) &&
        Object.keys(n).forEach((l) => {
          Vd.includes(l) ? (o[l] = n[l]) : (i[l] = n[l]);
        }),
    se(r) ? (i.locale = r) : pe(r) && (o = r),
    pe(s) && (o = s),
    [i.key || "", a, i, o]
  );
}
function Ic(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i);
  }
}
function Nc(e, ...t) {
  const {
      numberFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: i,
      localeFallbacker: o,
    } = e,
    { __numberFormatters: a } = e,
    [l, c, u, f] = Zo(...t),
    d = Ae(u.missingWarn) ? u.missingWarn : e.missingWarn;
  Ae(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const h = !!u.part,
    g = za(e, u),
    w = o(e, s, g);
  if (!se(l) || l === "") return new Intl.NumberFormat(g, f).format(c);
  let x = {},
    y,
    m = null;
  const S = "number format";
  for (
    let L = 0;
    L < w.length && ((y = w[L]), (x = n[y] || {}), (m = x[l]), !pe(m));
    L++
  )
    Ka(e, l, y, d, S);
  if (!pe(m) || !se(y)) return r ? Di : l;
  let b = `${y}__${l}`;
  Fi(f) || (b = `${b}__${JSON.stringify(f)}`);
  let P = a.get(b);
  return (
    P || ((P = new Intl.NumberFormat(y, tt({}, m, f))), a.set(b, P)),
    h ? P.formatToParts(c) : P.format(c)
  );
}
const jd = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay",
];
function Zo(...e) {
  const [t, n, r, s] = e,
    i = ke();
  let o = ke();
  if (!De(t)) throw Jt(Yt.INVALID_ARGUMENT);
  const a = t;
  return (
    se(n)
      ? (i.key = n)
      : pe(n) &&
        Object.keys(n).forEach((l) => {
          jd.includes(l) ? (o[l] = n[l]) : (i[l] = n[l]);
        }),
    se(r) ? (i.locale = r) : pe(r) && (o = r),
    pe(s) && (o = s),
    [i.key || "", a, i, o]
  );
}
function Ac(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    r.__numberFormatters.has(i) && r.__numberFormatters.delete(i);
  }
}
const Eb = (e) => e,
  Cb = (e) => "",
  kb = "text",
  xb = (e) => (e.length === 0 ? "" : Ba(e)),
  Tb = _y;
function Lc(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function Pb(e) {
  const t = De(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (De(e.named.count) || De(e.named.n))
    ? De(e.named.count)
      ? e.named.count
      : De(e.named.n)
      ? e.named.n
      : t
    : t;
}
function Ib(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Nb(e = {}) {
  const t = e.locale,
    n = Pb(e),
    r =
      be(e.pluralRules) && se(t) && Ne(e.pluralRules[t])
        ? e.pluralRules[t]
        : Lc,
    s = be(e.pluralRules) && se(t) && Ne(e.pluralRules[t]) ? Lc : void 0,
    i = (y) => y[r(n, y.length, s)],
    o = e.list || [],
    a = (y) => o[y],
    l = e.named || ke();
  De(e.pluralIndex) && Ib(n, l);
  const c = (y) => l[y];
  function u(y, m) {
    const S = Ne(e.messages)
      ? e.messages(y, !!m)
      : be(e.messages)
      ? e.messages[y]
      : !1;
    return S || (e.parent ? e.parent.message(y) : Cb);
  }
  const f = (y) => (e.modifiers ? e.modifiers[y] : Eb),
    d =
      pe(e.processor) && Ne(e.processor.normalize) ? e.processor.normalize : xb,
    h =
      pe(e.processor) && Ne(e.processor.interpolate)
        ? e.processor.interpolate
        : Tb,
    g = pe(e.processor) && se(e.processor.type) ? e.processor.type : kb,
    x = {
      list: a,
      named: c,
      plural: i,
      linked: (y, ...m) => {
        const [S, b] = m;
        let P = "text",
          L = "";
        m.length === 1
          ? be(S)
            ? ((L = S.modifier || L), (P = S.type || P))
            : se(S) && (L = S || L)
          : m.length === 2 && (se(S) && (L = S || L), se(b) && (P = b || P));
        const N = u(y, !0)(x),
          W = P === "vnode" && Ue(N) && L ? N[0] : N;
        return L ? f(L)(W, P) : W;
      },
      message: u,
      type: g,
      interpolate: h,
      normalize: d,
      values: tt(ke(), o, l),
    };
  return x;
}
const Oc = () => "",
  en = (e) => Ne(e);
function Rc(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: s,
      messageCompiler: i,
      fallbackLocale: o,
      messages: a,
    } = e,
    [l, c] = ea(...t),
    u = Ae(c.missingWarn) ? c.missingWarn : e.missingWarn,
    f = Ae(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn,
    d = Ae(c.escapeParameter) ? c.escapeParameter : e.escapeParameter,
    h = !!c.resolvedMessage,
    g =
      se(c.default) || Ae(c.default)
        ? Ae(c.default)
          ? i
            ? l
            : () => l
          : c.default
        : n
        ? i
          ? l
          : () => l
        : null,
    w = n || (g != null && (se(g) || Ne(g))),
    x = za(e, c);
  d && Ab(c);
  let [y, m, S] = h ? [l, x, a[x] || ke()] : Wd(e, l, x, o, f, u),
    b = y,
    P = l;
  if (
    (!h && !(se(b) || Ut(b) || en(b)) && w && ((b = g), (P = b)),
    !h && (!(se(b) || Ut(b) || en(b)) || !se(m)))
  )
    return s ? Di : l;
  let L = !1;
  const N = () => {
      L = !0;
    },
    W = en(b) ? b : Bd(e, l, m, b, P, N);
  if (L) return b;
  const k = Rb(e, m, S, c),
    O = Nb(k),
    V = Lb(e, W, O);
  return r ? r(V, l) : V;
}
function Ab(e) {
  Ue(e.list)
    ? (e.list = e.list.map((t) => (se(t) ? pc(t) : t)))
    : be(e.named) &&
      Object.keys(e.named).forEach((t) => {
        se(e.named[t]) && (e.named[t] = pc(e.named[t]));
      });
}
function Wd(e, t, n, r, s, i) {
  const { messages: o, onWarn: a, messageResolver: l, localeFallbacker: c } = e,
    u = c(e, r, n);
  let f = ke(),
    d,
    h = null;
  const g = "translate";
  for (
    let w = 0;
    w < u.length &&
    ((d = u[w]),
    (f = o[d] || ke()),
    (h = l(f, t)) === null && (h = f[t]),
    !(se(h) || Ut(h) || en(h)));
    w++
  )
    if (!Sb(d, u)) {
      const x = Ka(e, t, d, i, g);
      x !== t && (h = x);
    }
  return [h, d, f];
}
function Bd(e, t, n, r, s, i) {
  const { messageCompiler: o, warnHtmlMessage: a } = e;
  if (en(r)) {
    const c = r;
    return (c.locale = c.locale || n), (c.key = c.key || t), c;
  }
  if (o == null) {
    const c = () => r;
    return (c.locale = n), (c.key = t), c;
  }
  const l = o(r, Ob(e, n, s, r, a, i));
  return (l.locale = n), (l.key = t), (l.source = r), l;
}
function Lb(e, t, n) {
  return t(n);
}
function ea(...e) {
  const [t, n, r] = e,
    s = ke();
  if (!se(t) && !De(t) && !en(t) && !Ut(t)) throw Jt(Yt.INVALID_ARGUMENT);
  const i = De(t) ? String(t) : (en(t), t);
  return (
    De(n)
      ? (s.plural = n)
      : se(n)
      ? (s.default = n)
      : pe(n) && !Fi(n)
      ? (s.named = n)
      : Ue(n) && (s.list = n),
    De(r) ? (s.plural = r) : se(r) ? (s.default = r) : pe(r) && tt(s, r),
    [i, s]
  );
}
function Ob(e, t, n, r, s, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      throw (i && i(o), o);
    },
    onCacheKey: (o) => my(t, n, o),
  };
}
function Rb(e, t, n, r) {
  const {
      modifiers: s,
      pluralRules: i,
      messageResolver: o,
      fallbackLocale: a,
      fallbackWarn: l,
      missingWarn: c,
      fallbackContext: u,
    } = e,
    d = {
      locale: t,
      modifiers: s,
      pluralRules: i,
      messages: (h, g) => {
        let w = o(n, h);
        if (w == null && (u || g)) {
          const [, , x] = Wd(u || e, h, t, a, l, c);
          w = o(x, h);
        }
        if (se(w) || Ut(w)) {
          let x = !1;
          const m = Bd(e, h, t, w, h, () => {
            x = !0;
          });
          return x ? Oc : m;
        } else return en(w) ? w : Oc;
      },
    };
  return (
    e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    De(r.plural) && (d.pluralIndex = r.plural),
    d
  );
}
/*!
 * vue-i18n v11.1.3
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
const Mb = "11.1.3",
  kt = {
    UNEXPECTED_RETURN_TYPE: nb,
    INVALID_ARGUMENT: 25,
    MUST_BE_CALL_SETUP_TOP: 26,
    NOT_INSTALLED: 27,
    REQUIRED_VALUE: 28,
    INVALID_VALUE: 29,
    NOT_INSTALLED_WITH_PROVIDE: 31,
    UNEXPECTED_ERROR: 32,
  };
function $t(e, ...t) {
  return $i(e, null, void 0);
}
const ta = Pn("__translateVNode"),
  na = Pn("__datetimeParts"),
  ra = Pn("__numberParts"),
  Fb = Pn("__setPluralRules"),
  $b = Pn("__injectWithOption"),
  sa = Pn("__dispose");
function fs(e) {
  if (!be(e) || Ut(e)) return e;
  for (const t in e)
    if (At(e, t))
      if (!t.includes(".")) be(e[t]) && fs(e[t]);
      else {
        const n = t.split("."),
          r = n.length - 1;
        let s = e,
          i = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] === "__proto__") throw new Error(`unsafe key: ${n[o]}`);
          if ((n[o] in s || (s[n[o]] = ke()), !be(s[n[o]]))) {
            i = !0;
            break;
          }
          s = s[n[o]];
        }
        if (
          (i ||
            (Ut(s)
              ? Rd.includes(n[r]) || delete e[t]
              : ((s[n[r]] = e[t]), delete e[t])),
          !Ut(s))
        ) {
          const o = s[n[r]];
          be(o) && fs(o);
        }
      }
  return e;
}
function Ud(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: i } = t,
    o = pe(n)
      ? n
      : Ue(r)
      ? ke()
      : {
          [e]: ke(),
        };
  if (
    (Ue(r) &&
      r.forEach((a) => {
        if ("locale" in a && "resource" in a) {
          const { locale: l, resource: c } = a;
          l ? ((o[l] = o[l] || ke()), Us(c, o[l])) : Us(c, o);
        } else se(a) && Us(JSON.parse(a), o);
      }),
    s == null && i)
  )
    for (const a in o) At(o, a) && fs(o[a]);
  return o;
}
function Db(e) {
  return e.type;
}
function qb(e, t, n) {
  let r = be(t.messages) ? t.messages : ke();
  "__i18nGlobal" in n &&
    (r = Ud(e.locale.value, {
      messages: r,
      __i18n: n.__i18nGlobal,
    }));
  const s = Object.keys(r);
  s.length &&
    s.forEach((i) => {
      e.mergeLocaleMessage(i, r[i]);
    });
  {
    if (be(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length &&
        i.forEach((o) => {
          e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
        });
    }
    if (be(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length &&
        i.forEach((o) => {
          e.mergeNumberFormat(o, t.numberFormats[o]);
        });
    }
  }
}
function Mc(e) {
  return Me(ys, null, e, 0);
}
const Fc = () => [],
  Vb = () => !1;
let $c = 0;
function Dc(e) {
  return (t, n, r, s) => e(n, r, Ce() || void 0, s);
}
function Hd(e = {}) {
  const { __root: t, __injectWithOption: n } = e,
    r = t === void 0,
    s = e.flatJson,
    i = mi ? de : Ct;
  let o = Ae(e.inheritLocale) ? e.inheritLocale : !0;
  const a = i(t && o ? t.locale.value : se(e.locale) ? e.locale : pi),
    l = i(
      t && o
        ? t.fallbackLocale.value
        : se(e.fallbackLocale) ||
          Ue(e.fallbackLocale) ||
          pe(e.fallbackLocale) ||
          e.fallbackLocale === !1
        ? e.fallbackLocale
        : a.value
    ),
    c = i(Ud(a.value, e)),
    u = i(
      pe(e.datetimeFormats)
        ? e.datetimeFormats
        : {
            [a.value]: {},
          }
    ),
    f = i(
      pe(e.numberFormats)
        ? e.numberFormats
        : {
            [a.value]: {},
          }
    );
  let d = t
      ? t.missingWarn
      : Ae(e.missingWarn) || gi(e.missingWarn)
      ? e.missingWarn
      : !0,
    h = t
      ? t.fallbackWarn
      : Ae(e.fallbackWarn) || gi(e.fallbackWarn)
      ? e.fallbackWarn
      : !0,
    g = t ? t.fallbackRoot : Ae(e.fallbackRoot) ? e.fallbackRoot : !0,
    w = !!e.fallbackFormat,
    x = Ne(e.missing) ? e.missing : null,
    y = Ne(e.missing) ? Dc(e.missing) : null,
    m = Ne(e.postTranslation) ? e.postTranslation : null,
    S = t ? t.warnHtmlMessage : Ae(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    b = !!e.escapeParameter;
  const P = t ? t.modifiers : pe(e.modifiers) ? e.modifiers : {};
  let L = e.pluralRules || (t && t.pluralRules),
    N;
  (N = (() => {
    r && xc(null);
    const T = {
      version: Mb,
      locale: a.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: P,
      pluralRules: L,
      missing: y === null ? void 0 : y,
      missingWarn: d,
      fallbackWarn: h,
      fallbackFormat: w,
      unresolving: !0,
      postTranslation: m === null ? void 0 : m,
      warnHtmlMessage: S,
      escapeParameter: b,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: {
        framework: "vue",
      },
    };
    (T.datetimeFormats = u.value),
      (T.numberFormats = f.value),
      (T.__datetimeFormatters = pe(N) ? N.__datetimeFormatters : void 0),
      (T.__numberFormatters = pe(N) ? N.__numberFormatters : void 0);
    const D = _b(T);
    return r && xc(D), D;
  })()),
    Pr(N, a.value, l.value);
  function k() {
    return [a.value, l.value, c.value, u.value, f.value];
  }
  const O = M({
      get: () => a.value,
      set: (T) => {
        (N.locale = T), (a.value = T);
      },
    }),
    V = M({
      get: () => l.value,
      set: (T) => {
        (N.fallbackLocale = T), (l.value = T), Pr(N, a.value, T);
      },
    }),
    C = M(() => c.value),
    G = M(() => u.value),
    $ = M(() => f.value);
  function ee() {
    return Ne(m) ? m : null;
  }
  function J(T) {
    (m = T), (N.postTranslation = T);
  }
  function Q() {
    return x;
  }
  function K(T) {
    T !== null && (y = Dc(T)), (x = T), (N.missing = y);
  }
  const ie = (T, D, re, ae, me, Ke) => {
    k();
    let Re;
    try {
      r || (N.fallbackContext = t ? bb() : void 0), (Re = T(N));
    } finally {
      r || (N.fallbackContext = void 0);
    }
    if (
      (re !== "translate exists" && De(Re) && Re === Di) ||
      (re === "translate exists" && !Re)
    ) {
      const [vt, Pt] = D();
      return t && g ? ae(t) : me(vt);
    } else {
      if (Ke(Re)) return Re;
      throw $t(kt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ce(...T) {
    return ie(
      (D) => Reflect.apply(Rc, null, [D, ...T]),
      () => ea(...T),
      "translate",
      (D) => Reflect.apply(D.t, D, [...T]),
      (D) => D,
      (D) => se(D)
    );
  }
  function fe(...T) {
    const [D, re, ae] = T;
    if (ae && !be(ae)) throw $t(kt.INVALID_ARGUMENT);
    return ce(
      D,
      re,
      tt(
        {
          resolvedMessage: !0,
        },
        ae || {}
      )
    );
  }
  function z(...T) {
    return ie(
      (D) => Reflect.apply(Pc, null, [D, ...T]),
      () => Jo(...T),
      "datetime format",
      (D) => Reflect.apply(D.d, D, [...T]),
      () => Cc,
      (D) => se(D)
    );
  }
  function ge(...T) {
    return ie(
      (D) => Reflect.apply(Nc, null, [D, ...T]),
      () => Zo(...T),
      "number format",
      (D) => Reflect.apply(D.n, D, [...T]),
      () => Cc,
      (D) => se(D)
    );
  }
  function Ie(T) {
    return T.map((D) => (se(D) || De(D) || Ae(D) ? Mc(String(D)) : D));
  }
  const ne = {
    normalize: Ie,
    interpolate: (T) => T,
    type: "vnode",
  };
  function F(...T) {
    return ie(
      (D) => {
        let re;
        const ae = D;
        try {
          (ae.processor = ne), (re = Reflect.apply(Rc, null, [ae, ...T]));
        } finally {
          ae.processor = null;
        }
        return re;
      },
      () => ea(...T),
      "translate",
      (D) => D[ta](...T),
      (D) => [Mc(D)],
      (D) => Ue(D)
    );
  }
  function Y(...T) {
    return ie(
      (D) => Reflect.apply(Nc, null, [D, ...T]),
      () => Zo(...T),
      "number format",
      (D) => D[ra](...T),
      Fc,
      (D) => se(D) || Ue(D)
    );
  }
  function X(...T) {
    return ie(
      (D) => Reflect.apply(Pc, null, [D, ...T]),
      () => Jo(...T),
      "datetime format",
      (D) => D[na](...T),
      Fc,
      (D) => se(D) || Ue(D)
    );
  }
  function te(T) {
    (L = T), (N.pluralRules = L);
  }
  function ve(T, D) {
    return ie(
      () => {
        if (!T) return !1;
        const re = se(D) ? D : a.value,
          ae = A(re),
          me = N.messageResolver(ae, T);
        return Ut(me) || en(me) || se(me);
      },
      () => [T],
      "translate exists",
      (re) => Reflect.apply(re.te, re, [T, D]),
      Vb,
      (re) => Ae(re)
    );
  }
  function _(T) {
    let D = null;
    const re = Md(N, l.value, a.value);
    for (let ae = 0; ae < re.length; ae++) {
      const me = c.value[re[ae]] || {},
        Ke = N.messageResolver(me, T);
      if (Ke != null) {
        D = Ke;
        break;
      }
    }
    return D;
  }
  function E(T) {
    const D = _(T);
    return D ?? (t ? t.tm(T) || {} : {});
  }
  function A(T) {
    return c.value[T] || {};
  }
  function j(T, D) {
    if (s) {
      const re = {
        [T]: D,
      };
      for (const ae in re) At(re, ae) && fs(re[ae]);
      D = re[T];
    }
    (c.value[T] = D), (N.messages = c.value);
  }
  function U(T, D) {
    c.value[T] = c.value[T] || {};
    const re = {
      [T]: D,
    };
    if (s) for (const ae in re) At(re, ae) && fs(re[ae]);
    (D = re[T]), Us(D, c.value[T]), (N.messages = c.value);
  }
  function B(T) {
    return u.value[T] || {};
  }
  function p(T, D) {
    (u.value[T] = D), (N.datetimeFormats = u.value), Ic(N, T, D);
  }
  function v(T, D) {
    (u.value[T] = tt(u.value[T] || {}, D)),
      (N.datetimeFormats = u.value),
      Ic(N, T, D);
  }
  function I(T) {
    return f.value[T] || {};
  }
  function R(T, D) {
    (f.value[T] = D), (N.numberFormats = f.value), Ac(N, T, D);
  }
  function Z(T, D) {
    (f.value[T] = tt(f.value[T] || {}, D)),
      (N.numberFormats = f.value),
      Ac(N, T, D);
  }
  $c++,
    t &&
      mi &&
      (he(t.locale, (T) => {
        o && ((a.value = T), (N.locale = T), Pr(N, a.value, l.value));
      }),
      he(t.fallbackLocale, (T) => {
        o && ((l.value = T), (N.fallbackLocale = T), Pr(N, a.value, l.value));
      }));
  const H = {
    id: $c,
    locale: O,
    fallbackLocale: V,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(T) {
      (o = T),
        T &&
          t &&
          ((a.value = t.locale.value),
          (l.value = t.fallbackLocale.value),
          Pr(N, a.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: C,
    get modifiers() {
      return P;
    },
    get pluralRules() {
      return L || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(T) {
      (d = T), (N.missingWarn = d);
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(T) {
      (h = T), (N.fallbackWarn = h);
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(T) {
      g = T;
    },
    get fallbackFormat() {
      return w;
    },
    set fallbackFormat(T) {
      (w = T), (N.fallbackFormat = w);
    },
    get warnHtmlMessage() {
      return S;
    },
    set warnHtmlMessage(T) {
      (S = T), (N.warnHtmlMessage = T);
    },
    get escapeParameter() {
      return b;
    },
    set escapeParameter(T) {
      (b = T), (N.escapeParameter = T);
    },
    t: ce,
    getLocaleMessage: A,
    setLocaleMessage: j,
    mergeLocaleMessage: U,
    getPostTranslationHandler: ee,
    setPostTranslationHandler: J,
    getMissingHandler: Q,
    setMissingHandler: K,
    [Fb]: te,
  };
  return (
    (H.datetimeFormats = G),
    (H.numberFormats = $),
    (H.rt = fe),
    (H.te = ve),
    (H.tm = E),
    (H.d = z),
    (H.n = ge),
    (H.getDateTimeFormat = B),
    (H.setDateTimeFormat = p),
    (H.mergeDateTimeFormat = v),
    (H.getNumberFormat = I),
    (H.setNumberFormat = R),
    (H.mergeNumberFormat = Z),
    (H[$b] = n),
    (H[ta] = F),
    (H[na] = X),
    (H[ra] = Y),
    H
  );
}
const Ga = {
  tag: {
    type: [String, Object],
  },
  locale: {
    type: String,
  },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent",
  },
  i18n: {
    type: Object,
  },
};
function jb({ slots: e }, t) {
  return t.length === 1 && t[0] === "default"
    ? (e.default ? e.default() : []).reduce(
        (r, s) => [...r, ...(s.type === it ? s.children : [s])],
        []
      )
    : t.reduce((n, r) => {
        const s = e[r];
        return s && (n[r] = s()), n;
      }, ke());
}
function zd() {
  return it;
}
const Wb = Tn({
    name: "i18n-t",
    props: tt(
      {
        keypath: {
          type: String,
          required: !0,
        },
        plural: {
          type: [Number, String],
          validator: (e) => De(e) || !isNaN(e),
        },
      },
      Ga
    ),
    setup(e, t) {
      const { slots: n, attrs: r } = t,
        s =
          e.i18n ||
          qi({
            useScope: e.scope,
            __useComponent: !0,
          });
      return () => {
        const i = Object.keys(n).filter((f) => f !== "_"),
          o = ke();
        e.locale && (o.locale = e.locale),
          e.plural !== void 0 &&
            (o.plural = se(e.plural) ? +e.plural : e.plural);
        const a = jb(t, i),
          l = s[ta](e.keypath, a, o),
          c = tt(ke(), r),
          u = se(e.tag) || be(e.tag) ? e.tag : zd();
        return q(u, c, l);
      };
    },
  }),
  qc = Wb;
function Bb(e) {
  return Ue(e) && !se(e[0]);
}
function Kd(e, t, n, r) {
  const { slots: s, attrs: i } = t;
  return () => {
    const o = {
      part: !0,
    };
    let a = ke();
    e.locale && (o.locale = e.locale),
      se(e.format)
        ? (o.key = e.format)
        : be(e.format) &&
          (se(e.format.key) && (o.key = e.format.key),
          (a = Object.keys(e.format).reduce(
            (d, h) =>
              n.includes(h)
                ? tt(ke(), d, {
                    [h]: e.format[h],
                  })
                : d,
            ke()
          )));
    const l = r(e.value, o, a);
    let c = [o.key];
    Ue(l)
      ? (c = l.map((d, h) => {
          const g = s[d.type],
            w = g
              ? g({
                  [d.type]: d.value,
                  index: h,
                  parts: l,
                })
              : [d.value];
          return Bb(w) && (w[0].key = `${d.type}-${h}`), w;
        }))
      : se(l) && (c = [l]);
    const u = tt(ke(), i),
      f = se(e.tag) || be(e.tag) ? e.tag : zd();
    return q(f, u, c);
  };
}
const Ub = Tn({
    name: "i18n-n",
    props: tt(
      {
        value: {
          type: Number,
          required: !0,
        },
        format: {
          type: [String, Object],
        },
      },
      Ga
    ),
    setup(e, t) {
      const n =
        e.i18n ||
        qi({
          useScope: e.scope,
          __useComponent: !0,
        });
      return Kd(e, t, jd, (...r) => n[ra](...r));
    },
  }),
  Vc = Ub;
function Hb(e, t) {
  const n = e;
  if (e.mode === "composition") return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function zb(e) {
  const t = (o) => {
    const { instance: a, value: l } = o;
    if (!a || !a.$) throw $t(kt.UNEXPECTED_ERROR);
    const c = Hb(e, a.$),
      u = jc(l);
    return [Reflect.apply(c.t, c, [...Wc(u)]), c];
  };
  return {
    created: (o, a) => {
      const [l, c] = t(a);
      mi &&
        e.global === c &&
        (o.__i18nWatcher = he(c.locale, () => {
          a.instance && a.instance.$forceUpdate();
        })),
        (o.__composer = c),
        (o.textContent = l);
    },
    unmounted: (o) => {
      mi &&
        o.__i18nWatcher &&
        (o.__i18nWatcher(), (o.__i18nWatcher = void 0), delete o.__i18nWatcher),
        o.__composer && ((o.__composer = void 0), delete o.__composer);
    },
    beforeUpdate: (o, { value: a }) => {
      if (o.__composer) {
        const l = o.__composer,
          c = jc(a);
        o.textContent = Reflect.apply(l.t, l, [...Wc(c)]);
      }
    },
    getSSRProps: (o) => {
      const [a] = t(o);
      return {
        textContent: a,
      };
    },
  };
}
function jc(e) {
  if (se(e))
    return {
      path: e,
    };
  if (pe(e)) {
    if (!("path" in e)) throw $t(kt.REQUIRED_VALUE, "path");
    return e;
  } else throw $t(kt.INVALID_VALUE);
}
function Wc(e) {
  const { path: t, locale: n, args: r, choice: s, plural: i } = e,
    o = {},
    a = r || {};
  return (
    se(n) && (o.locale = n),
    De(s) && (o.plural = s),
    De(i) && (o.plural = i),
    [t, a, o]
  );
}
function Kb(e, t, ...n) {
  const r = pe(n[0]) ? n[0] : {};
  (Ae(r.globalInstall) ? r.globalInstall : !0) &&
    ([qc.name, "I18nT"].forEach((i) => e.component(i, qc)),
    [Vc.name, "I18nN"].forEach((i) => e.component(i, Vc)),
    [Uc.name, "I18nD"].forEach((i) => e.component(i, Uc))),
    e.directive("t", zb(t));
}
const Gb = Pn("global-vue-i18n");
function $E(e = {}) {
  const t = Ae(e.globalInjection) ? e.globalInjection : !0,
    n = new Map(),
    [r, s] = Qb(e),
    i = Pn("");
  function o(u) {
    return n.get(u) || null;
  }
  function a(u, f) {
    n.set(u, f);
  }
  function l(u) {
    n.delete(u);
  }
  const c = {
    get mode() {
      return "composition";
    },
    async install(u, ...f) {
      if (
        ((u.__VUE_I18N_SYMBOL__ = i),
        u.provide(u.__VUE_I18N_SYMBOL__, c),
        pe(f[0]))
      ) {
        const g = f[0];
        (c.__composerExtend = g.__composerExtend),
          (c.__vueI18nExtend = g.__vueI18nExtend);
      }
      let d = null;
      t && (d = r_(u, c.global)), Kb(u, c, ...f);
      const h = u.unmount;
      u.unmount = () => {
        d && d(), c.dispose(), h();
      };
    },
    get global() {
      return s;
    },
    dispose() {
      r.stop();
    },
    __instances: n,
    __getInstance: o,
    __setInstance: a,
    __deleteInstance: l,
  };
  return c;
}
function qi(e = {}) {
  const t = Ce();
  if (t == null) throw $t(kt.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw $t(kt.NOT_INSTALLED);
  const n = Xb(t),
    r = Jb(n),
    s = Db(t),
    i = Yb(e, s);
  if (i === "global") return qb(r, e, s), r;
  if (i === "parent") {
    let l = Zb(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const o = n;
  let a = o.__getInstance(t);
  if (a == null) {
    const l = tt({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n),
      r && (l.__root = r),
      (a = Hd(l)),
      o.__composerExtend && (a[sa] = o.__composerExtend(a)),
      t_(o, t, a),
      o.__setInstance(t, a);
  }
  return a;
}
function Qb(e, t) {
  const n = Ea(),
    r = n.run(() => Hd(e));
  if (r == null) throw $t(kt.UNEXPECTED_ERROR);
  return [n, r];
}
function Xb(e) {
  const t = ut(e.isCE ? Gb : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw $t(e.isCE ? kt.NOT_INSTALLED_WITH_PROVIDE : kt.UNEXPECTED_ERROR);
  return t;
}
function Yb(e, t) {
  return Fi(e)
    ? "__i18n" in t
      ? "local"
      : "global"
    : e.useScope
    ? e.useScope
    : "local";
}
function Jb(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Zb(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let i = e_(t, n);
  for (; i != null; ) {
    const o = e;
    if (
      (e.mode === "composition" && (r = o.__getInstance(i)),
      r != null || s === i)
    )
      break;
    i = i.parent;
  }
  return r;
}
function e_(e, t = !1) {
  return e == null ? null : (t && e.vnode.ctx) || e.parent;
}
function t_(e, t, n) {
  xt(() => {}, t),
    Ni(() => {
      const r = n;
      e.__deleteInstance(t);
      const s = r[sa];
      s && (s(), delete r[sa]);
    }, t);
}
const n_ = ["locale", "fallbackLocale", "availableLocales"],
  Bc = ["t", "rt", "d", "n", "tm", "te"];
function r_(e, t) {
  const n = Object.create(null);
  return (
    n_.forEach((s) => {
      const i = Object.getOwnPropertyDescriptor(t, s);
      if (!i) throw $t(kt.UNEXPECTED_ERROR);
      const o = Pe(i.value)
        ? {
            get() {
              return i.value.value;
            },
            set(a) {
              i.value.value = a;
            },
          }
        : {
            get() {
              return i.get && i.get();
            },
          };
      Object.defineProperty(n, s, o);
    }),
    (e.config.globalProperties.$i18n = n),
    Bc.forEach((s) => {
      const i = Object.getOwnPropertyDescriptor(t, s);
      if (!i || !i.value) throw $t(kt.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${s}`, i);
    }),
    () => {
      delete e.config.globalProperties.$i18n,
        Bc.forEach((s) => {
          delete e.config.globalProperties[`$${s}`];
        });
    }
  );
}
const s_ = Tn({
    name: "i18n-d",
    props: tt(
      {
        value: {
          type: [Number, Date],
          required: !0,
        },
        format: {
          type: [String, Object],
        },
      },
      Ga
    ),
    setup(e, t) {
      const n =
        e.i18n ||
        qi({
          useScope: e.scope,
          __useComponent: !0,
        });
      return Kd(e, t, Vd, (...r) => n[na](...r));
    },
  }),
  Uc = s_;
pb(tb);
vb(hb);
yb(Md);
function vr(e) {
  return Ca() ? (Wu(e), !0) : !1;
}
const ho = new WeakMap(),
  i_ = (...e) => {
    var t;
    const n = e[0],
      r = (t = Ce()) == null ? void 0 : t.proxy;
    if (r == null && !Ra())
      throw new Error("injectLocal must be called in setup");
    return r && ho.has(r) && n in ho.get(r) ? ho.get(r)[n] : ut(...e);
  },
  vi = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Gd = (e) => e != null,
  o_ = Object.prototype.toString,
  a_ = (e) => o_.call(e) === "[object Object]",
  Qr = () => {};
function l_(...e) {
  if (e.length !== 1) return Um(...e);
  const t = e[0];
  return typeof t == "function"
    ? Pa(
        cf(() => ({
          get: t,
          set: Qr,
        }))
      )
    : de(t);
}
function Hc(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Xr(e) {
  return Array.isArray(e) ? e : [e];
}
function c_(e) {
  return Ce();
}
function u_(e, t = !0, n) {
  c_() ? xt(e, n) : t ? e() : ct(e);
}
function DE(e, t = 1e3, n = {}) {
  const { immediate: r = !0, immediateCallback: s = !1 } = n;
  let i = null;
  const o = Ct(!1);
  function a() {
    i && (clearInterval(i), (i = null));
  }
  function l() {
    (o.value = !1), a();
  }
  function c() {
    const u = Rt(t);
    u <= 0 ||
      ((o.value = !0), s && e(), a(), o.value && (i = setInterval(e, u)));
  }
  if ((r && vi && c(), Pe(t) || typeof t == "function")) {
    const u = he(t, () => {
      o.value && vi && c();
    });
    vr(u);
  }
  return (
    vr(l),
    {
      isActive: $m(o),
      pause: l,
      resume: c,
    }
  );
}
function f_(e, t, n) {
  return he(e, t, {
    ...n,
    immediate: !0,
  });
}
function qE(e, t, n) {
  let r;
  Pe(n)
    ? (r = {
        evaluating: n,
      })
    : (r = {});
  const {
      lazy: s = !1,
      flush: i = "pre",
      evaluating: o = void 0,
      shallow: a = !0,
      onError: l = Qr,
    } = r,
    c = Ct(!s),
    u = a ? Ct(t) : de(t);
  let f = 0;
  return (
    Wf(
      async (d) => {
        if (!c.value) return;
        f++;
        const h = f;
        let g = !1;
        o &&
          Promise.resolve().then(() => {
            o.value = !0;
          });
        try {
          const w = await e((x) => {
            d(() => {
              o && (o.value = !1), g || x();
            });
          });
          h === f && (u.value = w);
        } catch (w) {
          l(w);
        } finally {
          o && h === f && (o.value = !1), (g = !0);
        }
      },
      {
        flush: i,
      }
    ),
    s ? M(() => ((c.value = !0), u.value)) : u
  );
}
const Sr = vi ? window : void 0,
  d_ = vi ? window.document : void 0;
function Yr(e) {
  var t;
  const n = Rt(e);
  return (t = n?.$el) != null ? t : n;
}
function yi(...e) {
  const t = [],
    n = () => {
      t.forEach((a) => a()), (t.length = 0);
    },
    r = (a, l, c, u) => (
      a.addEventListener(l, c, u), () => a.removeEventListener(l, c, u)
    ),
    s = M(() => {
      const a = Xr(Rt(e[0])).filter((l) => l != null);
      return a.every((l) => typeof l != "string") ? a : void 0;
    }),
    i = f_(
      () => {
        var a, l;
        return [
          (l = (a = s.value) == null ? void 0 : a.map((c) => Yr(c))) != null
            ? l
            : [Sr].filter((c) => c != null),
          Xr(Rt(s.value ? e[1] : e[0])),
          Xr(Zt(s.value ? e[2] : e[1])),
          Rt(s.value ? e[3] : e[2]),
        ];
      },
      ([a, l, c, u]) => {
        if ((n(), !a?.length || !l?.length || !c?.length)) return;
        const f = a_(u)
          ? {
              ...u,
            }
          : u;
        t.push(
          ...a.flatMap((d) => l.flatMap((h) => c.map((g) => r(d, h, g, f))))
        );
      },
      {
        flush: "post",
      }
    ),
    o = () => {
      i(), n();
    };
  return vr(n), o;
}
function h_() {
  const e = Ct(!1),
    t = Ce();
  return (
    t &&
      xt(() => {
        e.value = !0;
      }, t),
    e
  );
}
function Qa(e) {
  const t = h_();
  return M(() => (t.value, !!e()));
}
function m_(e, t, n = {}) {
  const { window: r = Sr, ...s } = n;
  let i;
  const o = Qa(() => r && "MutationObserver" in r),
    a = () => {
      i && (i.disconnect(), (i = void 0));
    },
    l = M(() => {
      const d = Rt(e),
        h = Xr(d).map(Yr).filter(Gd);
      return new Set(h);
    }),
    c = he(
      () => l.value,
      (d) => {
        a(),
          o.value &&
            d.size &&
            ((i = new MutationObserver(t)), d.forEach((h) => i.observe(h, s)));
      },
      {
        immediate: !0,
        flush: "post",
      }
    ),
    u = () => i?.takeRecords(),
    f = () => {
      c(), a();
    };
  return (
    vr(f),
    {
      isSupported: o,
      stop: f,
      takeRecords: u,
    }
  );
}
function g_(e) {
  return typeof e == "function"
    ? e
    : typeof e == "string"
    ? (t) => t.key === e
    : Array.isArray(e)
    ? (t) => e.includes(t.key)
    : () => !0;
}
function VE(...e) {
  let t,
    n,
    r = {};
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (r = e[2]))
    : e.length === 2
    ? typeof e[1] == "object"
      ? ((t = !0), (n = e[0]), (r = e[1]))
      : ((t = e[0]), (n = e[1]))
    : ((t = !0), (n = e[0]));
  const {
      target: s = Sr,
      eventName: i = "keydown",
      passive: o = !1,
      dedupe: a = !1,
    } = r,
    l = g_(t);
  return yi(
    s,
    i,
    (u) => {
      (u.repeat && Rt(a)) || (l(u) && n(u));
    },
    o
  );
}
const p_ = Symbol("vueuse-ssr-width");
function v_() {
  const e = Ra() ? i_(p_, null) : null;
  return typeof e == "number" ? e : void 0;
}
function y_(e, t = {}) {
  const { window: n = Sr, ssrWidth: r = v_() } = t,
    s = Qa(() => n && "matchMedia" in n && typeof n.matchMedia == "function"),
    i = Ct(typeof r == "number"),
    o = Ct(),
    a = Ct(!1),
    l = (c) => {
      a.value = c.matches;
    };
  return (
    Wf(() => {
      if (i.value) {
        i.value = !s.value;
        const c = Rt(e).split(",");
        a.value = c.some((u) => {
          const f = u.includes("not all"),
            d = u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
            h = u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
          let g = !!(d || h);
          return (
            d && g && (g = r >= Hc(d[1])),
            h && g && (g = r <= Hc(h[1])),
            f ? !g : g
          );
        });
        return;
      }
      s.value && ((o.value = n.matchMedia(Rt(e))), (a.value = o.value.matches));
    }),
    yi(o, "change", l, {
      passive: !0,
    }),
    M(() => a.value)
  );
}
function jE(e, t, n = {}) {
  const {
      root: r,
      rootMargin: s = "0px",
      threshold: i = 0,
      window: o = Sr,
      immediate: a = !0,
    } = n,
    l = Qa(() => o && "IntersectionObserver" in o),
    c = M(() => {
      const g = Rt(e);
      return Xr(g).map(Yr).filter(Gd);
    });
  let u = Qr;
  const f = Ct(a),
    d = l.value
      ? he(
          () => [c.value, Yr(r), f.value],
          ([g, w]) => {
            if ((u(), !f.value || !g.length)) return;
            const x = new IntersectionObserver(t, {
              root: Yr(w),
              rootMargin: s,
              threshold: i,
            });
            g.forEach((y) => y && x.observe(y)),
              (u = () => {
                x.disconnect(), (u = Qr);
              });
          },
          {
            immediate: a,
            flush: "post",
          }
        )
      : Qr,
    h = () => {
      u(), d(), (f.value = !1);
    };
  return (
    vr(h),
    {
      isSupported: l,
      isActive: f,
      pause() {
        u(), (f.value = !1);
      },
      resume() {
        f.value = !0;
      },
      stop: h,
    }
  );
}
function b_(e = null, t = {}) {
  var n, r, s;
  const { document: i = d_, restoreOnUnmount: o = (f) => f } = t,
    a = (n = i?.title) != null ? n : "",
    l = l_((r = e ?? i?.title) != null ? r : null),
    c = !!(e && typeof e == "function");
  function u(f) {
    if (!("titleTemplate" in t)) return f;
    const d = t.titleTemplate || "%s";
    return typeof d == "function" ? d(f) : Rt(d).replace(/%s/g, f);
  }
  return (
    he(
      l,
      (f, d) => {
        f !== d && i && (i.title = u(f ?? ""));
      },
      {
        immediate: !0,
      }
    ),
    t.observe &&
      !t.titleTemplate &&
      i &&
      !c &&
      m_(
        (s = i.head) == null ? void 0 : s.querySelector("title"),
        () => {
          i && i.title !== l.value && (l.value = u(i.title));
        },
        {
          childList: !0,
        }
      ),
    vr(() => {
      if (o) {
        const f = o(a, l.value || "");
        f != null && i && (i.title = f);
      }
    }),
    l
  );
}
function WE(e = {}) {
  const {
      window: t = Sr,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: r = Number.POSITIVE_INFINITY,
      listenOrientation: s = !0,
      includeScrollbar: i = !0,
      type: o = "inner",
    } = e,
    a = Ct(n),
    l = Ct(r),
    c = () => {
      if (t)
        if (o === "outer") (a.value = t.outerWidth), (l.value = t.outerHeight);
        else if (o === "visual" && t.visualViewport) {
          const { width: f, height: d, scale: h } = t.visualViewport;
          (a.value = Math.round(f * h)), (l.value = Math.round(d * h));
        } else
          i
            ? ((a.value = t.innerWidth), (l.value = t.innerHeight))
            : ((a.value = t.document.documentElement.clientWidth),
              (l.value = t.document.documentElement.clientHeight));
    };
  c(), u_(c);
  const u = {
    passive: !0,
  };
  if (
    (yi("resize", c, u),
    t &&
      o === "visual" &&
      t.visualViewport &&
      yi(t.visualViewport, "resize", c, u),
    s)
  ) {
    const f = y_("(orientation: portrait)");
    he(f, () => c());
  }
  return {
    width: a,
    height: l,
  };
}
const __ = (e) => e,
  w_ = __;
/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Qd;
const Vi = (e) => (Qd = e),
  Xd = Symbol();
function ia(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var Jr;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(Jr || (Jr = {}));
function S_() {
  const e = Ea(!0),
    t = e.run(() => de({}));
  let n = [],
    r = [];
  const s = Gn({
    install(i) {
      Vi(s),
        (s._a = i),
        i.provide(Xd, s),
        (i.config.globalProperties.$pinia = s),
        r.forEach((o) => n.push(o)),
        (r = []);
    },
    use(i) {
      return this._a ? n.push(i) : r.push(i), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return s;
}
const Yd = () => {};
function zc(e, t, n, r = Yd) {
  e.push(t);
  const s = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), r());
  };
  return !n && Ca() && Wu(s), s;
}
function Jn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const E_ = (e) => e(),
  Kc = Symbol(),
  mo = Symbol();
function oa(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((n, r) => e.set(r, n))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      s = e[n];
    ia(s) && ia(r) && e.hasOwnProperty(n) && !Pe(r) && !En(r)
      ? (e[n] = oa(s, r))
      : (e[n] = r);
  }
  return e;
}
const C_ = Symbol();
function k_(e) {
  return !ia(e) || !Object.prototype.hasOwnProperty.call(e, C_);
}
const { assign: mn } = Object;
function x_(e) {
  return !!(Pe(e) && e.effect);
}
function T_(e, t, n, r) {
  const { state: s, actions: i, getters: o } = t,
    a = n.state.value[e];
  let l;
  function c() {
    a || (n.state.value[e] = s ? s() : {});
    const u = jm(n.state.value[e]);
    return mn(
      u,
      i,
      Object.keys(o || {}).reduce(
        (f, d) => (
          (f[d] = Gn(
            M(() => {
              Vi(n);
              const h = n._s.get(e);
              return o[d].call(h, h);
            })
          )),
          f
        ),
        {}
      )
    );
  }
  return (l = Jd(e, c, t, n, r, !0)), l;
}
function Jd(e, t, n = {}, r, s, i) {
  let o;
  const a = mn(
      {
        actions: {},
      },
      n
    ),
    l = {
      deep: !0,
    };
  let c,
    u,
    f = [],
    d = [],
    h;
  const g = r.state.value[e];
  !i && !g && (r.state.value[e] = {}), de({});
  let w;
  function x(W) {
    let k;
    (c = u = !1),
      typeof W == "function"
        ? (W(r.state.value[e]),
          (k = {
            type: Jr.patchFunction,
            storeId: e,
            events: h,
          }))
        : (oa(r.state.value[e], W),
          (k = {
            type: Jr.patchObject,
            payload: W,
            storeId: e,
            events: h,
          }));
    const O = (w = Symbol());
    ct().then(() => {
      w === O && (c = !0);
    }),
      (u = !0),
      Jn(f, k, r.state.value[e]);
  }
  const y = i
    ? function () {
        const { state: k } = n,
          O = k ? k() : {};
        this.$patch((V) => {
          mn(V, O);
        });
      }
    : Yd;
  function m() {
    o.stop(), (f = []), (d = []), r._s.delete(e);
  }
  const S = (W, k = "") => {
      if (Kc in W) return (W[mo] = k), W;
      const O = function () {
        Vi(r);
        const V = Array.from(arguments),
          C = [],
          G = [];
        function $(Q) {
          C.push(Q);
        }
        function ee(Q) {
          G.push(Q);
        }
        Jn(d, {
          args: V,
          name: O[mo],
          store: P,
          after: $,
          onError: ee,
        });
        let J;
        try {
          J = W.apply(this && this.$id === e ? this : P, V);
        } catch (Q) {
          throw (Jn(G, Q), Q);
        }
        return J instanceof Promise
          ? J.then((Q) => (Jn(C, Q), Q)).catch(
              (Q) => (Jn(G, Q), Promise.reject(Q))
            )
          : (Jn(C, J), J);
      };
      return (O[Kc] = !0), (O[mo] = k), O;
    },
    b = {
      _p: r,
      $id: e,
      $onAction: zc.bind(null, d),
      $patch: x,
      $reset: y,
      $subscribe(W, k = {}) {
        const O = zc(f, W, k.detached, () => V()),
          V = o.run(() =>
            he(
              () => r.state.value[e],
              (C) => {
                (k.flush === "sync" ? u : c) &&
                  W(
                    {
                      storeId: e,
                      type: Jr.direct,
                      events: h,
                    },
                    C
                  );
              },
              mn({}, l, k)
            )
          );
        return O;
      },
      $dispose: m,
    },
    P = Kn(b);
  r._s.set(e, P);
  const N = ((r._a && r._a.runWithContext) || E_)(() =>
    r._e.run(() =>
      (o = Ea()).run(() =>
        t({
          action: S,
        })
      )
    )
  );
  for (const W in N) {
    const k = N[W];
    if ((Pe(k) && !x_(k)) || En(k))
      i ||
        (g && k_(k) && (Pe(k) ? (k.value = g[W]) : oa(k, g[W])),
        (r.state.value[e][W] = k));
    else if (typeof k == "function") {
      const O = S(k, W);
      (N[W] = O), (a.actions[W] = k);
    }
  }
  return (
    mn(P, N),
    mn(ue(P), N),
    Object.defineProperty(P, "$state", {
      get: () => r.state.value[e],
      set: (W) => {
        x((k) => {
          mn(k, W);
        });
      },
    }),
    r._p.forEach((W) => {
      mn(
        P,
        o.run(() =>
          W({
            store: P,
            app: r._a,
            pinia: r,
            options: a,
          })
        )
      );
    }),
    g && i && n.hydrate && n.hydrate(P.$state, g),
    (c = !0),
    (u = !0),
    P
  );
}
/*! #__NO_SIDE_EFFECTS__ */
function Xa(e, t, n) {
  let r;
  const s = typeof t == "function";
  r = s ? n : t;
  function i(o, a) {
    const l = Ra();
    return (
      (o = o || (l ? ut(Xd, null) : null)),
      o && Vi(o),
      (o = Qd),
      o._s.has(e) || (s ? Jd(e, t, r, o) : T_(e, r, o)),
      o._s.get(e)
    );
  }
  return (i.$id = e), i;
}
const P_ = Xa("preferences", {
  state: () => ({
    version: 358,
    appInfoVisible: !0,
    darkMode: "auto",
    latestSeenVersion: 0,
    userHasSeenCurrentVersion: !1,
    seenUkraineBanner: !1,
    wheelLocation: "cloud",
    showWheelOverlay: !0,
  }),
  actions: {
    setDurablePrefs(e) {
      "appInfoVisible" in e && (this.appInfoVisible = e.appInfoVisible),
        "darkMode" in e && (this.darkMode = e.darkMode),
        "latestSeenVersion" in e &&
          (this.latestSeenVersion = e.latestSeenVersion),
        "seenUkraineBanner" in e &&
          (this.seenUkraineBanner = e.seenUkraineBanner),
        "wheelLocation" in e && (this.wheelLocation = e.wheelLocation),
        "showWheelOverlay" in e && (this.showWheelOverlay = e.showWheelOverlay),
        this.savePrefsToLocalStorage();
    },
    setLatestSeenVersion(e) {
      (this.latestSeenVersion = e), this.savePrefsToLocalStorage();
    },
    setUserHasSeenCurrentVersion(e) {
      this.userHasSeenCurrentVersion = e;
    },
    toggleAppInfoVisibility() {
      (this.appInfoVisible = !this.appInfoVisible),
        this.savePrefsToLocalStorage();
    },
    setDarkMode(e) {
      (this.darkMode = e), Qe.set(e), this.savePrefsToLocalStorage();
    },
    setSeenUkraineBanner() {
      (this.seenUkraineBanner = !0), this.savePrefsToLocalStorage();
    },
    setWheelLocation(e) {
      (this.wheelLocation = e), this.savePrefsToLocalStorage();
    },
    switchWheelLocation() {
      this.wheelLocation = this.wheelLocation === "cloud" ? "local" : "cloud";
    },
    setShowWheelOverlay(e) {
      (this.showWheelOverlay = e), this.savePrefsToLocalStorage();
    },
    setShowWheelOverlayNoPersist(e) {
      this.showWheelOverlay = e;
    },
    loadPreferences() {
      try {
        const e = JSON.parse(localStorage.getItem("Preferences") || "{}");
        this.setUserHasSeenCurrentVersion(this.version <= e.latestSeenVersion),
          this.setDurablePrefs(e);
      } catch {}
      this.setLatestSeenVersion(this.version);
    },
    savePrefsToLocalStorage() {
      localStorage.setItem(
        "Preferences",
        JSON.stringify({
          appInfoVisible: this.appInfoVisible,
          darkMode: this.darkMode,
          latestSeenVersion: this.latestSeenVersion,
          seenUkraineBanner: this.seenUkraineBanner,
          wheelLocation: this.wheelLocation,
          showWheelOverlay: this.showWheelOverlay,
        })
      );
    },
  },
});
function I_(e, t) {
  if (e === t) return !0;
  if (e === null || t === null || e.length !== t.length) return !1;
  for (let n = 0; n < e.length; ++n) if (e[n] !== t[n]) return !1;
  return !0;
}
function Zd(e, t, n, r, s) {
  return (
    (t ** 2 - (s / 2) ** 2) ** 0.5 -
      Math.max((s * Math.cos(e)) / (2 * Math.sin(e)), n) >=
    r
  );
}
function N_(e) {
  if (!e) return "";
  let t = e;
  const n = t.match(/<img.*?src="(.*?)".*?>/);
  return n && (t = t.replace(n[0], "")), M_(t);
}
function eh(e) {
  let t = "";
  if (e) {
    t = e;
    const n = 18;
    t.length > n && (t = `${t.substring(0, n - 1)}…`);
  }
  return t;
}
function A_(e, t) {
  if (e) return t;
  const n = [],
    r = [];
  for (const s of t) {
    const i = L_(s);
    n.includes(i) || (n.push(i), r.push(s));
  }
  return r;
}
function L_(e) {
  const t = {};
  return (
    e.text && (t.text = e.text),
    e.image && (t.image = e.image),
    JSON.stringify(t)
  );
}
function O_(e) {
  let t = "";
  if (e) {
    const n = e.match(/<img.*?src="(.*?)".*?>/);
    n && (t = n[1]);
  }
  return t;
}
function R_(e) {
  const t = [...e];
  let n;
  for (let r = t.length - 1; r > 0; r--)
    (n = Math.floor(Math.random() * (r + 1))), ([t[r], t[n]] = [t[n], t[r]]);
  return t;
}
function Gc(e) {
  return e.slice(0).sort((t, n) => {
    const r = t.text || "",
      s = n.text || "";
    return r.localeCompare(s, "en", {
      numeric: !0,
      sensitivity: "base",
    });
  });
}
function M_(e) {
  return e
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}
function Hs() {
  let t = "";
  const n = "abcdefghjkmnpqrstuvwxyz23456789";
  for (let r = 0; r < 10; r++)
    t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}
function $n(e) {
  return !e || !e.map ? [] : e.map((t) => ((t.id = t.id || Hs()), t));
}
function F_(e, t, n = Math.random) {
  const r = Math.ceil(e),
    s = Math.floor(t);
  return Math.floor(n() * (s - r + 1) + r);
}
function th(e) {
  return e.reduce(
    (t, n) =>
      n.weight && (n.enabled === !0 || !("enabled" in n)) ? t + n.weight : t,
    0
  );
}
function $_(e, t) {
  let n = 0;
  if (e.length === 0) return 0;
  if (e[0].weight) {
    const r = th(e),
      s = e.map((a) => (2 * Math.PI * (a.weight ?? 1)) / r),
      i = [];
    n = 0;
    let o = s[0] / 2;
    for (
      e.forEach((a, l) => {
        i.push(o), (o += s[l + 1]);
      }),
        n = 0;
      !(t < i[n] || (n++, n > i.length - 1));

    );
  } else {
    const r = (2 * Math.PI) / e.length;
    n = Math.round(t / r);
  }
  return n >= e.length && (n = 0), n;
}
function nh(e) {
  if (!e) return "#000000";
  const t = e.charAt(0) === "#" ? e.substring(1, 7) : e,
    n = Number.parseInt(t.substring(0, 2), 16),
    r = Number.parseInt(t.substring(2, 4), 16),
    s = Number.parseInt(t.substring(4, 6), 16),
    o = [n / 255, r / 255, s / 255].map((l) =>
      l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4
    );
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2] > 0.179
    ? "#000000"
    : "#FFFFFF";
}
function BE(e) {
  return new Promise((t) => setTimeout(t, e));
}
function D_(e) {
  return ["spin-only", "copyable", "gallery"].includes(e);
}
function q_(e) {
  return e instanceof Error
    ? e.message
    : typeof e == "string"
    ? e
    : e instanceof Object
    ? e.toString()
    : "An unknown error occurred";
}
function rh(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
async function UE(e) {
  return new Promise((t) => {
    const n = new Image();
    (n.onload = () => {
      const r = W_(n.width, n.height, 200);
      sh(r, n), t(Ja(r, e, 0.5));
    }),
      (n.src = e);
  });
}
async function HE(e) {
  return new Promise((t) => {
    const n = new Image();
    (n.onload = () => {
      const r = Ya(370);
      B_(n) || sh(r, n, "blur(4px)"), ih(r, n, !0), t(Ja(r, null, 0.5));
    }),
      (n.src = e);
  });
}
async function zE(e) {
  return new Promise((t) => {
    const n = new Image();
    (n.onload = () => {
      const r = Ya(700);
      ih(r, n, !1), t(Ja(r, null, 0.7));
    }),
      (n.src = e);
  });
}
function Ir(e) {
  const t = document.createElement("canvas");
  return (t.width = e.canvas.width), (t.height = e.canvas.height), t;
}
function cr(e) {
  const t = _s(document.createElement("canvas"));
  t.drawImage(e, 0, 0);
  const n = t.getImageData(0, 0, 1, 1).data;
  return H_(n[0], n[1], n[2]) ? "#FFFFFFFF" : z_(n[0], n[1], n[2], n[3]);
}
function V_(e) {
  const t = e.match(/#\w\w\w\w\w\w(\w\w)/);
  return t ? (Number.parseInt(t[1], 16) / 255) * 100 < 50 : !1;
}
function KE(e) {
  const n = Ya(300),
    r = _s(n);
  (r.fillStyle = "white"),
    r.fillRect(0, 0, 300, 300),
    (r.fillStyle = "black"),
    (r.textBaseline = "middle"),
    (r.textAlign = "center");
  const s = 300 * 0.9;
  return (
    j_(r, e, s),
    r.fillText(e, 300 / 2, 300 / 2, s),
    n.toDataURL("image/webp", 0.5)
  );
}
function go(e) {
  return new Promise((t) => {
    const n = new Image();
    n.setAttribute("crossOrigin", "anonymous"),
      (n.onload = () => t(n)),
      (n.src = e);
  });
}
function po(e) {
  return cr(e).slice(7) === "00";
}
function j_(e, t, n) {
  for (
    let r = Math.round(n / 2);
    r >= n / 20 &&
    ((e.font = `${r}px Quicksand, sans-serif`), !(e.measureText(t).width <= n));
    r--
  );
}
function W_(e, t, n) {
  const r = n / e,
    s = n / t,
    i = Math.max(r, s),
    o = document.createElement("canvas");
  return (o.width = e * i), (o.height = t * i), o;
}
function Ya(e) {
  const t = document.createElement("canvas");
  return (t.width = e), (t.height = e), t;
}
function B_(e) {
  const t = cr(e);
  return t === "#FFFFFFFF" || t.slice(7) === "FF";
}
function U_(e) {
  return e.getImageData(0, 0, 1, 1).data[3] < 5;
}
function H_(e, t, n) {
  return e === t && e === n && e > 230;
}
function z_(e, t, n, r) {
  return `#${Ls(e)}${Ls(t)}${Ls(n)}${Ls(r)}`;
}
const Ls = (e) => e.toString(16).padStart(2, "0");
function sh(e, t, n) {
  const r = _s(e);
  r.save(),
    n && (r.filter = n),
    r.drawImage(t, -2, -2, e.width + 4, e.height + 4),
    r.restore();
}
function ih(e, t, n) {
  const r = e.width;
  let s = r / Math.min(t.width, t.height);
  n && (s = r / Math.max(t.width, t.height));
  const i = t.width * s,
    o = (r - i) / 2,
    a = t.height * s,
    l = (r - a) / 2;
  _s(e).drawImage(t, o, l, i, a);
}
function Ja(e, t, n) {
  let r;
  const s = _s(e);
  return (
    U_(s)
      ? (r = e.toDataURL("image/webp", 0.5))
      : (r = e.toDataURL("image/jpeg", n)),
    t && t.length < r.length ? t : r
  );
}
function _s(e) {
  const t = e.getContext("2d");
  if (!t) throw new Error("Could not get canvas context");
  return t;
}
function K_(e, t, n, r, s, i) {
  const o = G_(e, n, r, s, i),
    a = Q_(e, t, r, s, i);
  return `${X_(o, a)}px Quicksand, sans-serif`;
}
const vo = new Map();
function G_(e, t, n, r, s) {
  const i = JSON.stringify({
    texts: t,
    wheelRadius: n,
    hubRadius: r,
    smallestAngle: s,
  });
  if (vo.get(i)) return vo.get(i) || [10];
  const o = "Quicksand, sans-serif",
    a = t.map((c) => oh(e, c, o, n, r, s)),
    l = ew(a);
  return vo.set(i, l), l;
}
function Q_(e, t, n, r, s) {
  return oh(e, t, "Quicksand, sans-serif", n, r, s);
}
function X_(e, t) {
  for (let n = e.length - 1; n >= 0; n--) if (e[n] <= t) return e[n];
  return e[0];
}
const yo = new Map();
function oh(e, t, n, r, s, i) {
  const o = JSON.stringify({
    displayText: t,
    fontName: n,
    wheelRadius: r,
    hubRadius: s,
    smallestAngle: i,
  });
  if (yo.get(o)) return yo.get(o) || 10;
  const a = Y_(e, t, n, r, s, i);
  return yo.set(o, a), a;
}
function Y_(e, t, n, r, s, i) {
  return J_(e, r, s, i, n, t, 3, 200);
}
function J_(e, t, n, r, s, i, o, a) {
  let l,
    c = o,
    u = a;
  for (;;) {
    l = Math.round((c + u) / 2);
    const f = `${l}px ${s}`;
    if ((Z_(e, t, n, r / 2, i, f, l) ? (c = l) : (u = l), Math.abs(u - c) < 2))
      break;
  }
  return l;
}
function Z_(e, t, n, r, s, i, o) {
  if (!s) return !0;
  e.font = i;
  const a = e.measureText(` ${eh(s)} `).width;
  return Zd(r, t, n, a, o);
}
function ew(e) {
  const t = [...e].sort((s, i) => s - i),
    n = [];
  let r = t[0];
  n.push(r);
  for (let s = 1; s < t.length; s++) {
    const i = t[s];
    i > r * 2 && (n.push(i), (r = i));
  }
  return n;
}
function Qc(e) {
  const t = e.context;
  t.save(),
    e.wheelConfig.type === "image" && tw(e),
    e.wheelConfig.type === "color" &&
      (e.image ? (ow(e.image) ? nw(e) : rw(e)) : sw(e)),
    t.restore();
}
function tw(e) {
  el(e),
    ji(e, {
      fill: "white",
      outline: "black",
    }),
    Wi(e);
}
function nw(e) {
  Za(e),
    el(e),
    ji(e, {
      fill: "white",
      outline: "black",
    }),
    Wi(e);
}
function rw(e) {
  if (!e.image) return;
  const t = ah(e.image);
  Za({
    ...e,
    color: e.entry.color || t,
  }),
    el(e),
    ji(e, {
      fill: "white",
      outline: "black",
    }),
    Wi(e);
}
function sw(e) {
  Za(e);
  const t = {
    fill: nh(e.color),
    outline: "",
  };
  ji(e, t), Wi(e);
}
function Za(e) {
  const t = e.context;
  t.beginPath(),
    t.moveTo(0, 0),
    t.arc(0, 0, e.wheelRadius, -e.radians / 2, e.radians / 2),
    t.lineTo(0, 0),
    (t.fillStyle = e.color),
    t.fill();
}
function ji(e, t) {
  if (!e.entry.text) return;
  const n = e.context,
    r = eh(e.entry.text ?? "");
  (n.font = K_(
    n,
    r,
    e.displayEntries.map((s) => s.text || ""),
    e.wheelRadius,
    e.hubRadius,
    e.radians
  )),
    (n.lineJoin = "round"),
    (n.textBaseline = "middle"),
    (n.textAlign = "end"),
    t.outline &&
      ((n.lineWidth = 4),
      (n.strokeStyle = t.outline),
      n.strokeText(` ${r} `, e.wheelRadius, 0)),
    (n.fillStyle = t.fill),
    n.fillText(` ${r} `, e.wheelRadius, 0);
}
function el(e) {
  if (!e.image) return;
  const t = e.radians / 2,
    n = e.wheelRadius,
    r = e.hubRadius,
    s = iw(t, n, r, e.image.height / e.image.width);
  e.context.drawImage(e.image, s.x, s.y, s.w, s.h);
}
function Wi(e) {
  if (!e.wheelConfig.drawOutlines) return;
  const t = e.context;
  t.beginPath(),
    t.moveTo(0, 0),
    t.arc(0, 0, e.wheelRadius, -e.radians / 2, e.radians / 2),
    t.lineTo(0, 0),
    (t.lineWidth = 1),
    (t.strokeStyle = "#333333"),
    t.stroke();
}
function iw(e, t, n, r) {
  let s,
    i = 0;
  for (s = t; s > 0 && ((i = s * r), !Zd(e, t, n, s, i)); s--);
  return {
    x: Math.max((i * Math.cos(e)) / (2 * Math.sin(e)), n),
    y: -i / 2,
    w: s,
    h: i,
  };
}
function ah(e) {
  return cr(e);
}
function ow(e) {
  return V_(ah(e));
}
const aw = {
  XS: 0.01,
  S: 0.2,
  M: 0.3,
  L: 0.4,
  XL: 0.5,
  XXL: 0.6,
};
class lw {
  images = {};
  emptyImage = new Image();
  constructor() {
    this.emptyImage.src =
      "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  }
  addImage(t) {
    (this.images[t] = new Image()), (this.images[t].src = t);
  }
  getImage(t) {
    if (t)
      return (
        t in this.images || this.addImage(t),
        this.images[t] && this.images[t].naturalHeight > 0
          ? this.images[t]
          : this.emptyImage
      );
  }
}
class cw {
  imageCache = new lw();
  entries = [];
  imageDataCache = {};
  wheelImage = null;
  pointerImage = null;
  coverPlateImage = null;
  wheelShadowImage = null;
  watermarkImage = null;
  draw(t, n, r, s, i, o = "") {
    const a = t.canvas.width * 0.44,
      l = this.getHubRadius(i, a);
    this.drawBackground(t),
      i.drawShadow && this.drawWheelShadow(t, a),
      this.drawCoverImage(t, i, n, a),
      this.drawWheel(t, i, n, a, l, s, r),
      this.drawPointer(t, i, a),
      this.drawCenterImage(t, i, n, l);
    try {
      this.drawCoverPlate(t, a, l, s, r);
    } catch {}
    o && this.drawWatermark(t, o, i);
  }
  getHubRadius(t, n) {
    if (t.type === "image") return 0;
    const r = aw[t.hubSize] || 0.2;
    return Math.round(r * n);
  }
  refresh() {
    (this.wheelImage = null),
      (this.pointerImage = null),
      (this.coverPlateImage = null);
  }
  drawBackground(t) {
    t.clearRect(0, 0, t.canvas.width, t.canvas.height);
  }
  drawWheelShadow(t, n) {
    this.wheelShadowImage ||
      ((this.wheelShadowImage = Ir(t)),
      this.drawWheelShadowNoCache(Nr(this.wheelShadowImage), n)),
      t.drawImage(this.wheelShadowImage, 0, 0);
  }
  drawWheelShadowNoCache(t, n) {
    const r = t.canvas.width / 2,
      s = t.canvas.height / 2,
      i = t.createRadialGradient(r, s, n, r, s + 4, n + 8);
    i.addColorStop(0, "#00000034"),
      i.addColorStop(1, "#00000000"),
      (t.fillStyle = i),
      t.fillRect(0, 0, t.canvas.width, t.canvas.height);
  }
  drawWheel(t, n, r, s, i, o, a) {
    this.wheelImage ||
      ((this.wheelImage = Ir(t)),
      (this.entries = a.slice(0)),
      this.drawWheelNoCache({
        context: Nr(this.wheelImage),
        wheelConfig: n,
        wheelRadius: s,
        hubRadius: i,
        allEntries: o,
        displayEntries: a,
      }));
    const l = t.canvas.width,
      c = t.canvas.height;
    t.save(),
      t.translate(l / 2, c / 2),
      t.rotate(r),
      t.translate(-l / 2, -c / 2),
      t.drawImage(this.wheelImage, 0, 0),
      t.restore();
  }
  drawWheelNoCache(t) {
    this.drawSlices(t),
      this.drawCenterCircle(t.context, t.wheelConfig, t.hubRadius);
  }
  drawCoverImage(t, n, r, s) {
    if (n.type === "color") return;
    const i = this.imageCache.getImage(n.getCoverImage());
    i &&
      (t.save(),
      t.translate(t.canvas.width / 2, t.canvas.height / 2),
      t.rotate(r),
      t.beginPath(),
      t.arc(0, 0, s - 1, 0, Math.PI * 2, !0),
      t.clip(),
      t.drawImage(i, -s, -s, s * 2, s * 2),
      t.restore());
  }
  drawSlices(t) {
    const n = t.context;
    n.save(),
      n.translate(n.canvas.width / 2, n.canvas.height / 2),
      t.wheelConfig.isAdvanced
        ? this.drawAdvancedSlices(t)
        : this.drawBasicSlices(t),
      n.restore();
  }
  drawBasicSlices(t) {
    const n = (2 * Math.PI) / t.displayEntries.length;
    for (const [r, s] of t.displayEntries.entries()) {
      const i = t.wheelConfig.getEntryColor(r);
      Qc({
        ...t,
        entry: s,
        color: i,
        radians: n,
        image: this.getImageFromData(s.image),
      }),
        t.context.rotate(-n);
    }
  }
  drawAdvancedSlices(t) {
    const n = th(this.entries),
      r = [];
    this.entries.forEach((s, i) => {
      r[i] = (2 * Math.PI * (s.weight || 1)) / n;
    });
    for (const [s, i] of t.displayEntries.entries()) {
      const o = r[s] / 2 + r[s + 1] / 2,
        a = i.color || t.wheelConfig.getEntryColor(s);
      Qc({
        ...t,
        entry: i,
        color: a,
        radians: r[s],
        image: this.getImageFromData(i.image),
      }),
        t.context.rotate(-o);
    }
  }
  drawCenterCircle(t, n, r) {
    n.type !== "image" &&
      (t.save(),
      t.translate(t.canvas.width / 2, t.canvas.height / 2),
      (t.fillStyle = "white"),
      t.beginPath(),
      t.arc(0, 0, r, 0, Math.PI * 2),
      t.fill(),
      n.drawOutlines &&
        ((t.lineWidth = 2), (t.strokeStyle = "#333333"), t.stroke()),
      t.restore());
  }
  drawPointer(t, n, r) {
    t.canvas.width < 200 ||
      (this.pointerImage ||
        ((this.pointerImage = Ir(t)),
        this.drawPointerNoCache(Nr(this.pointerImage), n, r)),
      t.drawImage(this.pointerImage, 0, 0));
  }
  drawPointerNoCache(t, n, r) {
    t.save(),
      t.translate(t.canvas.width / 2, t.canvas.height / 2),
      n.drawShadow &&
        ((t.shadowColor = "#444"), (t.shadowOffsetY = 4), (t.shadowBlur = 10)),
      t.beginPath(),
      t.moveTo(r - 15, 0),
      t.lineTo(r + 25, -20),
      t.lineTo(r + 25, 20),
      t.lineTo(r - 15, 0),
      (t.lineWidth = n.drawOutlines ? 2 : 1),
      (t.strokeStyle = "#333333"),
      t.stroke(),
      (t.fillStyle = "#BBB"),
      t.fill(),
      t.restore();
  }
  drawCoverPlate(t, n, r, s, i) {
    i.length !== s.length &&
      (!this.coverPlateImage &&
        i.length > 0 &&
        ((this.coverPlateImage = Ir(t)),
        this.drawCoverPlateNoCache(Nr(this.coverPlateImage), n, r, i)),
      this.coverPlateImage && t.drawImage(this.coverPlateImage, 0, 0));
  }
  drawCoverPlateNoCache(t, n, r, s) {
    const i = this.imageCache.getImage("/images/brushed-metal.png");
    if (!i) return;
    const o = s.length,
      a = Math.max((4 * Math.PI) / o, Math.PI / 4);
    t.save(),
      t.translate(t.canvas.width / 2, t.canvas.height / 2),
      t.scale(-1, 1),
      (t.shadowColor = "#444"),
      (t.shadowOffsetY = 4),
      (t.shadowBlur = 10),
      (t.lineWidth = n - r + 10),
      (t.strokeStyle = t.createPattern(i, "repeat") ?? "black"),
      t.beginPath(),
      t.arc(0, 0, (n + r) / 2, -a / 2, a / 2),
      t.stroke(),
      t.restore();
  }
  drawCenterImage(t, n, r, s) {
    if (n.type === "image") return;
    const i = this.imageCache.getImage(n.getWheelImage());
    i &&
      (t.save(),
      t.translate(t.canvas.width / 2, t.canvas.height / 2),
      t.rotate(r),
      t.beginPath(),
      t.arc(0, 0, s - 1, 0, Math.PI * 2, !0),
      t.clip(),
      t.drawImage(i, -s, -s, s * 2, s * 2),
      t.restore());
  }
  drawWatermark(t, n, r) {
    n &&
      (this.watermarkImage ||
        ((this.watermarkImage = Ir(t)),
        this.drawWatermarkNoCache(Nr(this.watermarkImage), n, r)),
      t.drawImage(this.watermarkImage, 0, 0));
  }
  drawWatermarkNoCache(t, n, r) {
    t.save(),
      (t.textAlign = "end"),
      (t.font = "14px Quicksand, sans-serif"),
      (t.fillStyle = nh(r.pageBackgroundColor)),
      t.fillText(n, t.canvas.width - 10, t.canvas.height - 10),
      t.restore();
  }
  getImageFromData(t) {
    if (t) {
      if (!this.imageDataCache[t]) {
        const n = new Image();
        (n.onload = () => this.clearCachedWheelImage()),
          n.setAttribute("crossOrigin", "anonymous"),
          (n.src = t),
          (this.imageDataCache[t] = n);
      }
      return this.imageDataCache[t];
    }
  }
  clearCachedWheelImage() {
    this.wheelImage = null;
  }
}
function Nr(e) {
  const t = e.getContext("2d");
  if (!t) throw new Error("Could not get canvas context");
  return t;
}
class St {
  afterSpinSound = "applause-sound-soft";
  afterSpinSoundVolume = 50;
  allowDuplicates = !0;
  animateWinner = !1;
  autoRemoveWinner = !1;
  centerText = "";
  colorSettings = [
    {
      color: "#3369E8",
      enabled: !0,
    },
    {
      color: "#D50F25",
      enabled: !0,
    },
    {
      color: "#EEB211",
      enabled: !0,
    },
    {
      color: "#009925",
      enabled: !0,
    },
    {
      color: "#000000",
      enabled: !1,
    },
    {
      color: "#000000",
      enabled: !1,
    },
  ];
  coverImageName = "";
  coverImageType = "";
  customCoverImageDataUri = "";
  customPictureDataUri = "";
  customPictureName = "";
  description = "";
  displayHideButton = !0;
  displayRemoveButton = !0;
  displayWinnerDialog = !0;
  drawOutlines = !1;
  drawShadow = !0;
  duringSpinSound = "ticking-sound";
  duringSpinSoundVolume = 50;
  entries = [
    {
      text: "Ali",
    },
    {
      text: "Beatriz",
    },
    {
      text: "Charles",
    },
    {
      text: "Diya",
    },
    {
      text: "Eric",
    },
    {
      text: "Fatima",
    },
    {
      text: "Gabriel",
    },
    {
      text: "Hanna",
    },
  ];
  galleryPicture = "/images/none.png";
  hubSize = "S";
  isAdvanced = !1;
  launchConfetti = !0;
  maxNames = 1e3;
  pageBackgroundColor = "#FFFFFF";
  pictureType = "none";
  playClickWhenWinnerRemoved = !1;
  showTitle = !0;
  slowSpin = !1;
  spinTime = 10;
  title = "";
  type = "color";
  winnerMessage = "";
  constructor(t) {
    t && this.copyPropertiesFrom(t);
  }
  loadJson(t) {
    try {
      const n = JSON.parse(t);
      n.entries?.length > 0 && this.copyPropertiesFrom(n);
    } catch (n) {
      console.error(n);
    }
  }
  getJson() {
    return JSON.stringify(this);
  }
  getValues() {
    return JSON.parse(this.getJson());
  }
  loadValues(t) {
    this.copyPropertiesFrom(JSON.parse(JSON.stringify(t)));
  }
  clone() {
    const t = new St();
    return t.loadValues(this.getValues()), t;
  }
  hasOnlyDefaultEntries() {
    return I_(this.getTexts(), new St().getTexts());
  }
  setUploadedCenterImage(t, n) {
    (this.customPictureName = t),
      (this.customPictureDataUri = n),
      (this.pictureType = "uploaded"),
      (this.centerText = "");
  }
  setUploadedBackgroundImage(t, n) {
    (this.coverImageName = t),
      (this.customCoverImageDataUri = n),
      (this.coverImageType = "uploaded");
  }
  setGalleryBackgroundImage(t) {
    (this.coverImageType = "gallery"), (this.coverImageName = t);
  }
  setGalleryCenterImage(t) {
    (this.centerText = ""),
      (this.pictureType = "gallery"),
      (this.galleryPicture = t),
      (this.customPictureName = ""),
      (this.customPictureDataUri = "");
  }
  getWheelImage() {
    return this.pictureType === "none"
      ? null
      : this.pictureType === "gallery" && this.galleryPicture
      ? this.galleryPicture
      : (this.pictureType === "uploaded" || this.pictureType === "text") &&
        this.customPictureDataUri
      ? this.customPictureDataUri
      : null;
  }
  getCoverImage() {
    return this.coverImageType === "gallery" && this.coverImageName
      ? this.coverImageName
      : this.coverImageType === "uploaded" && this.customCoverImageDataUri
      ? this.customCoverImageDataUri
      : null;
  }
  shouldPlayTicks() {
    return this.duringSpinSound === "ticking-sound";
  }
  setColorValues(t) {
    if (t)
      for (
        this.colorSettings = t.map((n) => ({
          color: n,
          enabled: !0,
        }));
        this.colorSettings.length < 6;

      )
        this.colorSettings.push({
          color: "#000000",
          enabled: !1,
        });
  }
  getCoalescedColors() {
    const t = this.colorSettings.filter((n) => n.enabled).map((n) => n.color);
    return t.length > 0 ? t : ["#CCCCCC"];
  }
  isTooBigForDatabase() {
    return this.getJson().length > 99e4;
  }
  getTexts() {
    return this.entries.map((t) => t.text).filter((t) => t);
  }
  getFirstText() {
    const t = this.getTexts();
    return t.length > 0 ? t[0] : "";
  }
  copyPropertiesFrom(t) {
    Object.assign(this, t), this.convertOldData();
  }
  usesAdvancedFeatures() {
    for (const [t, n] of this.entries.entries())
      if (
        (n.color && n.color !== this.getEntryColor(t)) ||
        ("weight" in n && n.weight !== 1) ||
        n.enabled === !1 ||
        n.sound ||
        n.message
      )
        return !0;
    return !1;
  }
  getEntryColor(t) {
    const n = this.getCoalescedColors();
    return this.entries.length > 1 &&
      this.isLastSliceAndSameColorAsFirstSlice(t) &&
      n.length > 2
      ? n[1]
      : n[t % n.length];
  }
  isLastSliceAndSameColorAsFirstSlice(t) {
    if (t === this.entries.length - 1) {
      const n = this.getCoalescedColors();
      return t % n.length === 0;
    }
    return !1;
  }
  convertOldData() {
    const t = this;
    if (
      (Array.isArray(t.names) &&
        ((t.entries = t.names.map((n) => {
          const r = N_(n),
            s = O_(n);
          return s
            ? {
                text: r,
                image: s,
              }
            : {
                text: r,
              };
        })),
        delete t.names),
      (t.maxNames = Number(t.maxNames)),
      (t.spinTime = Number(t.spinTime)),
      delete t.displayHat,
      t.playTicks === !1 && (t.duringSpinSound = "no-sound"),
      delete t.playTicks,
      t.playCheers === !1 && (t.afterSpinSound = "no-sound"),
      delete t.playCheers,
      Object.hasOwn(t, "showTitle") || (t.showTitle = !0),
      t.type === "image" && !t.coverImageType && (t.coverImageType = "gallery"),
      t.isAdvanced &&
        t.entries.length > 0 &&
        !Object.hasOwn(t.entries[0], "enabled"))
    )
      for (const n of this.entries) n.enabled = !0;
    t.drawShadow === void 0 && (t.drawShadow = !0);
    for (const n of t.entries)
      n.text &&
        (n.text = n.text
          .replace(
            `
`,
            ""
          )
          .replace("\r", ""));
    $n(t.entries),
      (t.entries = t.entries.filter(
        (n) => n.text || n.image || "enabled" in n
      ));
  }
  removeImages() {
    for (const t of this.entries)
      if ("image" in t) {
        if (!t.text?.trim()) return !1;
        delete t.image;
      }
    return (
      this.type === "image" && (this.type = "color"),
      (this.customPictureDataUri = ""),
      (this.customCoverImageDataUri = ""),
      !0
    );
  }
}
const Xc = Object.fromEntries(
  Object.entries(new St().getValues()).map(([e, t]) => [e, typeof t])
);
function lh(e) {
  const t = new St(
    Object.fromEntries(
      Object.entries(structuredClone(e)).filter(
        ([n, r]) => n in Xc && typeof r === Xc[n]
      )
    )
  );
  for (const n of t.entries) delete n.id;
  for (const n of t.colorSettings)
    n.color.length === 4 &&
      (n.color = `#${n.color[1]}${n.color[1]}${n.color[2]}${n.color[2]}${n.color[3]}${n.color[3]}`);
  return t;
}
class Ar {
  array;
  length;
  elementJsonCache;
  constructor(t) {
    (this.array = t.slice(0)),
      (this.length = t.length),
      (this.elementJsonCache = null);
  }
  getElement(t) {
    let n = t;
    for (; n < 0; ) n += this.array.length;
    for (; n >= this.array.length; ) n -= this.array.length;
    return this.array[n];
  }
  setElement(t, n) {
    let r = t;
    for (; r < 0; ) r += this.array.length;
    for (; r >= this.array.length; ) r -= this.array.length;
    (this.array[r] = n), (this.elementJsonCache = null);
  }
  getArray() {
    return this.array;
  }
  slice(t, n) {
    const r = [];
    for (let s = t; s < n; s++) r.push(this.getElement(s));
    return r;
  }
  getNextElement(t) {
    this.elementJsonCache || (this.elementJsonCache = this.getElementJson());
    const n = JSON.stringify(t),
      r = this.elementJsonCache.findIndex((s) => s === n);
    return this.getElement(r + 1);
  }
  getElementJson() {
    return this.array.map((t) => JSON.stringify(t));
  }
}
class uw {
  startIndex;
  endIndex;
  length;
  index;
  constructor(t, n, r) {
    (this.startIndex = t),
      (this.endIndex = n),
      (this.length = r),
      (this.index = this.startIndex);
  }
  isDone() {
    return this.index === this.endIndex;
  }
  getIndex() {
    return this.index;
  }
  increment() {
    (this.index += 1), this.index >= this.length && (this.index -= this.length);
  }
}
class fw {
  allEntries;
  maxSlices;
  prevIndexAtPointer;
  displayEntries;
  constructor() {
    (this.allEntries = new Ar([])),
      (this.maxSlices = 1e6),
      (this.prevIndexAtPointer = -1),
      (this.displayEntries = new Ar([]));
  }
  setEntries(t, n, r) {
    (this.maxSlices = n),
      (this.allEntries = new Ar(A_(r, t))),
      this.allEntries.length <= n || this.entriesHaveUnequalWeight(t)
        ? (this.displayEntries = this.allEntries)
        : (this.displayEntries = new Ar(this.allEntries.slice(0, n)));
  }
  getDisplayEntries() {
    return this.displayEntries.getArray();
  }
  getNumberOfDisplayEntries() {
    return this.getDisplayEntries().length;
  }
  getAllEntries() {
    return this.allEntries.getArray();
  }
  tick(t) {
    if (
      this.maxSlices >= this.allEntries.length ||
      t === this.prevIndexAtPointer
    )
      return !1;
    const n = new uw(this.prevIndexAtPointer, t, this.displayEntries.length);
    for (; !n.isDone(); ) {
      n.increment();
      const r = n.getIndex(),
        s = Math.floor(r + this.maxSlices / 2) % this.maxSlices,
        i = this.displayEntries.getElement(s - 1),
        o = this.allEntries.getNextElement(i);
      this.displayEntries.setElement(s, o);
    }
    return (this.prevIndexAtPointer = t), !0;
  }
  entriesHaveUnequalWeight(t) {
    return t.length === 0 || !t[0].weight ? !1 : t.find((n) => n.weight !== 1);
  }
  setRandomPosition(t) {
    if (this.maxSlices < this.allEntries.length) {
      const n = F_(0, this.allEntries.length - 1, t);
      this.displayEntries = new Ar(
        this.allEntries.slice(n, n + this.maxSlices)
      );
    }
  }
}
let GE = class {
  angle = 0;
  speed = 0;
  fps = 60;
  watermark = "";
  wheelConfig = new St();
  state;
  wheelPainter = new cw();
  entryPicker = new fw();
  indexFromLastTick = 0;
  indexFromThisTick = 0;
  nameChangedCallback;
  doneSpinningCallback;
  onStateChangeCallback;
  constructor(t, n, r) {
    (this.state = new ch(this)),
      (this.nameChangedCallback = t || (() => {})),
      (this.doneSpinningCallback = n || ((s) => {})),
      (this.onStateChangeCallback = r || ((s) => {}));
  }
  setEntries(t, n, r) {
    if (!this.state.isSpinning()) {
      const s = t.filter((i) => i.enabled !== !1);
      this.entryPicker.setEntries(s, n, r), this.refresh();
    }
  }
  refresh() {
    this.wheelPainter.refresh();
  }
  configure(t, n, r) {
    this.state.isSpinning() ||
      ((this.wheelConfig = t),
      n && (this.fps = n),
      r && (this.watermark = r),
      this.refresh());
  }
  tick(t) {
    return (
      this.state.tick(this, t),
      this.angle > Math.PI * 2 && (this.angle -= Math.PI * 2),
      (this.indexFromLastTick = this.indexFromThisTick),
      (this.indexFromThisTick = this.getIndexAtPointer()),
      this.indexFromThisTick !== this.indexFromLastTick &&
        this.nameChangedCallback(),
      this.entryPicker.tick(this.getIndexAtPointer()) && this.refresh(),
      {
        state: this.state.constructor.name,
        angle: this.angle,
      }
    );
  }
  setNewState(t) {
    this.state = t;
  }
  click() {
    this.state.click(this);
  }
  spinIsDone() {
    this.doneSpinningCallback(this.getEntryAtPointer());
  }
  isSpinning() {
    return this.state.isSpinning();
  }
  setSpinState(t) {
    this.state.receiveFromNetwork(this, t);
  }
  setAngle(t) {
    (this.angle = t), this.entryPicker.setRandomPosition(Math.random);
  }
  getIndexAtPointer() {
    return $_(this.entryPicker.getDisplayEntries(), this.angle);
  }
  getEntryAtPointer() {
    return this.entryPicker.getDisplayEntries()[this.getIndexAtPointer()];
  }
  getDisplayEntries() {
    return this.entryPicker.getDisplayEntries();
  }
  resetRotation() {
    this.angle = 0;
  }
  getStateTimeLengths() {
    const t = this.wheelConfig.spinTime * this.fps,
      n = Math.min(this.fps, t / 3);
    return {
      accelerating: n,
      decelerating: t - n,
    };
  }
  draw(t) {
    this.wheelConfig &&
      this.wheelPainter.draw(
        t,
        this.angle,
        this.entryPicker.getDisplayEntries(),
        this.entryPicker.getAllEntries(),
        this.wheelConfig,
        this.watermark
      );
  }
};
class cn {
  name = "NullSpinState";
  tick(t, ...n) {}
  click(t) {}
  receiveFromNetwork(t, n) {}
  isSpinning() {
    return !1;
  }
}
class ch extends cn {
  name = "InitialDemoSpinState";
  constructor(t) {
    super(), (t.speed = 0.005);
  }
  tick(t) {
    t.angle += t.speed;
  }
  click(t) {
    t.setNewState(new tl(t));
  }
  receiveFromNetwork(t, n) {
    n.name === "Spinning" && t.setNewState(new nl(t, n.decelAngle)),
      n.name === "Stopped" && t.setNewState(new fh(t, n.position));
  }
}
class tl extends cn {
  name = "AcceleratingState";
  age;
  MAX_AGE;
  constructor(t) {
    super(),
      (this.age = 0),
      (this.MAX_AGE = t.getStateTimeLengths().accelerating),
      t.onStateChangeCallback({
        name: "Spinning",
      });
  }
  tick(t, n) {
    if (((t.angle += t.speed), this.age <= this.MAX_AGE)) {
      const r = t.wheelConfig.slowSpin ? 0.001 : 0.6 / t.fps;
      (t.speed += r), (this.age += 1);
    } else t.setNewState(new dw(t, n));
  }
  isSpinning() {
    return !0;
  }
}
class nl extends cn {
  name = "SpectatorAcceleratingState";
  age;
  MAX_AGE;
  decelAngle;
  constructor(t, n) {
    super(),
      (this.age = 0),
      (this.MAX_AGE = t.getStateTimeLengths().accelerating),
      (this.decelAngle = n);
  }
  tick(t) {
    if (((t.angle += t.speed), this.age <= this.MAX_AGE)) {
      const n = t.wheelConfig.slowSpin ? 0.001 : 0.6 / t.fps;
      (t.speed += n), (this.age += 1);
    } else t.setNewState(new hw(t, this.decelAngle));
  }
  receiveFromNetwork(t, n) {
    n.name === "AnnounceWinner" && t.setNewState(new uh(t, n.position));
  }
  isSpinning() {
    return !0;
  }
}
class dw extends cn {
  name = "DeceleratingState";
  age;
  MAX_AGE;
  deceleration;
  constructor(t, n) {
    super(),
      (t.angle = Math.PI * 2 * n()),
      t.entryPicker.setRandomPosition(0),
      (this.age = 0),
      (this.MAX_AGE = t.getStateTimeLengths().decelerating);
    const r = this.MAX_AGE,
      s = t.speed,
      i = 15e-5;
    this.deceleration = Math.exp(Math.log(i / s) / r);
    if (keypressed != undefined) {
      const angle =
        Array.from(
          { length: t.getStateTimeLengths().decelerating },
          (_, i) => t.speed * Math.pow(this.deceleration, i + 1)
        ).reduce((acc, val) => acc + val, 0) % 2;
      const targetValue = [0, 1, 2, 3, 4].includes(keypressed)
        ? (keypressed + 1) * (Math.PI / 6)
        : (keypressed - 4) * (Math.PI / 6) + Math.PI;
      const valueToAdd =
        angle < targetValue ? targetValue - angle : targetValue + 2 - angle;
      console.log(angle, valueToAdd);
      t.angle = valueToAdd;
    }
    console.log(this.deceleration, t.angle, keypressed);
    
  }
  tick(t) {
    (t.angle += t.speed),
      this.age <= this.MAX_AGE
        ? ((t.speed = t.speed * this.deceleration), (this.age += 1))
        : ((t.speed = 0), t.setNewState(new mw(t, t.angle)));
  }
  isSpinning() {
    return !0;
  }
}
class hw extends cn {
  name = "SpectatorDeceleratingState";
  age;
  MAX_AGE;
  deceleration;
  constructor(t, n) {
    super(),
      t.setAngle(n),
      (this.age = 0),
      (this.MAX_AGE = t.getStateTimeLengths().decelerating);
    const r = this.MAX_AGE,
      s = t.speed,
      i = 15e-5;
    this.deceleration = Math.exp(Math.log(i / s) / r);
  }
  tick(t) {
    (t.angle += t.speed),
      this.age <= this.MAX_AGE && (t.speed = t.speed * this.deceleration),
      this.age > this.MAX_AGE && (t.speed = 0),
      this.age > this.MAX_AGE + 180 && t.setNewState(new ch(t)),
      (this.age += 1);
  }
  receiveFromNetwork(t, n) {
    n.name === "AnnounceWinner" && t.setNewState(new uh(t, n.position));
  }
  isSpinning() {
    return !0;
  }
}
class mw extends cn {
  name = "AnnounceWinnerState";
  constructor(t, n) {
    super(),
      (t.angle = n),
      t.onStateChangeCallback({
        name: "AnnounceWinner",
        position: t.angle,
      });
  }
  tick(t) {
    t.spinIsDone(), t.setNewState(new gw(t, t.angle));
  }
}
class uh extends cn {
  name = "SpectatorAnnounceWinnerState";
  constructor(t, n) {
    super(), (t.angle = n);
  }
  tick(t) {
    t.spinIsDone(), t.setNewState(new fh(t, t.angle));
  }
}
class gw extends cn {
  name = "StoppedState";
  constructor(t, n) {
    super(),
      (t.angle = n),
      (t.speed = 0),
      t.onStateChangeCallback({
        name: "Stopped",
        position: t.angle,
      });
  }
  click(t) {
    t.setNewState(new tl(t));
  }
  receiveFromNetwork(t, n) {
    n.name === "Spinning" && t.setNewState(new nl(t, n.decelAngle));
  }
}
class fh extends cn {
  name = "SpectatorStoppedState";
  constructor(t, n) {
    super(), (t.angle = n), (t.speed = 0);
  }
  click(t) {
    t.setNewState(new tl(t));
  }
  receiveFromNetwork(t, n) {
    n.name === "Spinning" && t.setNewState(new nl(t, n.decelAngle));
  }
}
const pw = [
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/spreadsheets.readonly",
];
function vw(e) {
  if (!e) return "";
  const t = e.match(/<img.*?src="(.*?)".*?>/);
  return Yc(t ? e.replace(t[0], "") : e);
}
function XE(e, t) {
  if (e) return t;
  const n = [],
    r = [];
  for (const s of t) {
    const i = aa(s);
    n.includes(i) || (n.push(i), r.push(s));
  }
  return r;
}
function aa(e) {
  const t = {};
  return (
    e.text && (t.text = e.text),
    e.image && (t.image = e.image),
    JSON.stringify(t)
  );
}
function YE(e, t) {
  const n = [];
  for (let r = 0; r < e.length; r++)
    if ((aa(t) === aa(e[r]) && n.push(r), t.id === e[r].id)) return n[0] !== r;
  return !1;
}
function JE(e) {
  if (!e) return [];
  const t = e.split(/<div>|<\/div>|<br>|<p>/),
    n = [
      /<div.*?>/g,
      /<\/div>/g,
      /<p.*?>/g,
      /<\/p>/g,
      /<span.*?>/g,
      /<\/span>/g,
      /<font.*?>/g,
      /<\/font>/g,
      /<!--.*?>/g,
      /<br.*?>/g,
    ];
  return t
    .map((r) => {
      let s = r;
      for (const a of n) s = s.replace(a, "");
      const i = vw(s),
        o = yw(s);
      return i
        ? o
          ? {
              text: i,
              image: o,
            }
          : {
              text: i,
            }
        : o
        ? {
            image: o,
          }
        : {};
    })
    .filter((r) => r.text || r.image);
}
function yw(e) {
  let t = "";
  if (e) {
    const n = e.match(/<img.*?src="(.*?)".*?>/);
    n?.[1] && (t = n[1]);
  }
  return t;
}
function ZE(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function eC(e, t) {
  return t ? e.reduce((n, r) => n + (r?.trim() === t.trim() ? 1 : 0), 0) : 0;
}
function bw(e, t, n) {
  location.host.startsWith("localhost") ||
    location.host.startsWith("test") ||
    (typeof gtag < "u" &&
      gtag("event", t, {
        event_label: n,
      }));
}
function _w(e, t) {
  const n = q_(t);
  bw("", `${e}: ${n}`, navigator.userAgent), console.error(n);
}
function dh(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function tC(e) {
  const t = e.replace(/<mark>/g, "||mark||").replace(/<\/mark>/g, "||/mark||");
  return dh(t)
    .replace(/\|\|mark\|\|/g, "<mark>")
    .replace(/\|\|\/mark\|\|/g, "</mark>");
}
function Yc(e) {
  return e
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}
function nC(e) {
  return e.replace(/<.*?>/g, "");
}
function rC() {
  let t = "";
  const n = "abcdefghjkmnpqrstuvwxyz23456789";
  for (let r = 0; r < 10; r++)
    t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}
function sC(e) {
  let t = "",
    n = "";
  return (
    e &&
      (e.image &&
        (t = `<img src="${e.image}" style="height:25px" style="font-size:1rem;">`),
      e.text && ((n = dh(e.text)), (n = n.replace(/^ +$/g, "&nbsp;")))),
    `<div>${t}${n}</div>`
  );
}
function iC(e, t) {
  return `https://docs.google.com/forms/d/e/1FAIpQLSeryxMCuDjQUGawpgIeMwSY-81fqwdbpVTIOyh1-WJG5LCeeQ/viewform?entry.1064273724=${encodeURIComponent(
    e
  )}&entry.558479038=${t}`;
}
function oC(e, t) {
  return ww(Sw(e), t);
}
function ww(e, t = "en", n = Date.now()) {
  if (!e) return "-";
  const r = Math.floor((n - e) / 1e3),
    s = [
      Math.floor(r / 31536e3),
      Math.floor(r / 2592e3),
      Math.floor(r / 604800),
      Math.floor(r / 86400),
      Math.floor(r / 3600),
      Math.floor(r / 60),
      r,
    ],
    i = ["year", "month", "week", "day", "hour", "minute", "second"],
    o = new Intl.RelativeTimeFormat(t, {
      numeric: "auto",
    });
  for (const a in s) if (s[a] >= 1) return o.format(-s[a], i[a]);
  return "moments ago";
}
function Sw(e) {
  return e?._seconds
    ? e._seconds * 1e3
    : e?.seconds
    ? e.seconds * 1e3
    : e && Number.isInteger(e)
    ? e
    : 0;
}
function aC(e) {
  const t = Number(e);
  return Number.isNaN(t) ? "?" : `$${t.toFixed(2)}`;
}
function lC(e) {
  const t = Number(e);
  return !Number.isNaN(t) && t >= 0 ? `${Math.round(t * 100)}%` : "?";
}
function cC() {
  return window.self !== window.top;
}
function rl(e) {
  return location.host.startsWith("localhost")
    ? `http://localhost:8081/${e}`
    : `/${e}`;
}
function uC(e, t) {
  return Object.entries(e)
    .sort((r, s) =>
      r[0] === "sounds.Sound effects"
        ? -1
        : s[0] === "sounds.Sound effects"
        ? 1
        : r[0] === "sounds.Winter holidays" && t > 9
        ? -1
        : s[0] === "sounds.Winter holidays" && t > 9
        ? 1
        : 0
    )
    .reduce((r, s) => ((r[s[0]] = s[1]), r), {});
}
async function fC(e) {
  const { extractColors: t } = await Se(async () => {
      const { extractColors: r } = await import("https://wheelofnames.com/assets/extract-colors-v358.js");
      return {
        extractColors: r,
      };
    }, []),
    n = new Image();
  return (
    (n.src = e),
    new Promise((r) => {
      n.onload = async () => {
        const s = await t(n);
        r(s.map((i) => i.hex).slice(0, 6));
      };
    })
  );
}
function dC(e, t, n) {
  return e.toSorted((r, s) =>
    t === "title"
      ? r.wheelConfig.title || s.wheelConfig.title
        ? Ew(r, s, n)
        : Jc(r, s, n)
      : t === "created"
      ? Jc(r, s, n)
      : 0
  );
}
function Ew(e, t, n) {
  return e.wheelConfig.title
    ? t.wheelConfig.title
      ? n === "desc"
        ? t.wheelConfig.title.localeCompare(e.wheelConfig.title, "en", {
            numeric: !0,
            sensitivity: "base",
          })
        : e.wheelConfig.title.localeCompare(t.wheelConfig.title, "en", {
            numeric: !0,
            sensitivity: "base",
          })
      : -1
    : 1;
}
function Jc(e, t, n) {
  return n === "desc" ? t.created - e.created : e.created - t.created;
}
async function hh(e, t, n, r) {
  const s = {
    method: e,
    mode: "cors",
    headers: {},
  };
  n && (s.headers.Authorization = n),
    r &&
      ((s.headers["Content-Type"] = "application/json"),
      (s.body = JSON.stringify(r)));
  const i = await fetch(rl(t), s);
  return await gh(i);
}
async function mh(e, t, n, r) {
  const s = {
    method: e,
    mode: "cors",
    headers: {},
  };
  return (
    n && (s.headers.Authorization = n), await (await fetch(rl(t), s)).blob()
  );
}
async function gh(e) {
  const t = await e.text();
  if (t.startsWith("<")) throw new Error(t);
  const n = JSON.parse(t);
  if ("error" in n) throw new Error(n.error);
  return n;
}
async function Cw({ wheelConfig: e, idToken: t, shareMode: n }) {
  const r = {
    wheelConfig: lh(e),
    shareMode: n,
  };
  return (await He("POST", "api/v2/wheels", t, r)).data.path;
}
async function kw(e, t) {
  let n = "api/v2/wheels/shared";
  return (
    t && t.length > 0 && (n += `?fields=${t}`),
    (await He("GET", n, e)).data.wheels
  );
}
async function xw(e, t) {
  let n = "api/v2/wheels/private";
  return (
    t && t.length > 0 && (n += `?fields=${t}`),
    (await He("GET", n, e)).data.wheels
  );
}
async function Tw(e, t) {
  return (await He("GET", `api/v2/wheels/${e}`, t)).data;
}
async function Pw(e, t) {
  let n = "api/v2/wheels";
  return (
    t && t.length > 0 && (n += `?fields=${t}`),
    (await He("GET", n, e)).data.wheels
  );
}
async function Iw(e, t) {
  const n = "api/v2/wheels/private",
    r = {
      wheelConfig: lh(t),
    };
  return (await He("PUT", n, e, r)).data.path;
}
async function Nw(e, t, n) {
  await He("PUT", `api/v2/wheels/${t}`, e, n);
}
async function Aw(e, t) {
  await He("DELETE", `api/v2/wheels/${t}`, e);
}
async function Lw(e) {
  await He("POST", "api/v2/users", e);
}
async function Zc(e, t) {
  await He("POST", "api/v2/wheels/change-owner", t, {
    oldIdToken: e,
  });
}
async function Ow(e) {
  await He("DELETE", "api/v2/users", e);
}
async function Rw(e) {
  try {
    return !!(await He("GET", "api/v2/users", e)).data.premium;
  } catch (t) {
    if (t instanceof Error && t.message === "Unauthorized") return !1;
    throw t;
  }
}
async function hC(e, t) {
  const n = new URLSearchParams();
  return (
    e && n.append("search", e),
    t && n.append("pageNumber", String(t)),
    (await He("GET", `api/v2/gallery?${n.toString()}`)).data
  );
}
async function mC() {
  return (await He("GET", "api/v2/gallery/suggestions")).data.suggestions;
}
async function gC() {
  return (await He("GET", "api/v2/client-settings")).data;
}
async function Mw(e) {
  return (await He("POST", "api/v2/api-keys", e)).data.apiKey;
}
async function Fw(e) {
  await He("DELETE", "api/v2/api-keys", e);
}
async function $w(e) {
  return (await He("GET", "api/v2/api-keys", e)).data;
}
async function pC(e) {
  const t = {
      method: "GET",
      mode: "cors",
      headers: {
        "x-api-key": e,
      },
    },
    n = await fetch(rl("api/v2/api-keys"), t);
  return (await ph(n)).data;
}
async function vC() {
  return (await He("GET", "api/v2/languages")).data.languages;
}
async function yC() {
  const n = await fetch(
      "https://discord-bot-wada35rq7a-uc.a.run.app/guild-count",
      {
        method: "GET",
        mode: "cors",
      }
    ),
    r = await ph(n);
  if ("guildCount" in r) return r.guildCount;
  throw new Error("No guildCount property in response");
}
async function Dw(e, t) {
  const n = `api/v2/wheels/thumbnails/${t}`;
  return await qw("GET", n, e);
}
async function He(e, t, n, r) {
  return await hh(e, t, n, r);
}
async function qw(e, t, n, r) {
  return await mh(e, t, n);
}
async function ph(e) {
  return await gh(e);
}
async function Vw(e) {
  const t = await vh(e);
  return !!t && !t.isAnonymous;
}
async function vh(e) {
  return e.currentUser
    ? e.currentUser
    : new Promise((t) => {
        e.onAuthStateChanged((n) => t(n));
      });
}
async function jw(e) {
  return await e.signInAnonymously(), e.currentUser;
}
async function Ww(e, t) {
  for (const r of pw) t.addScope(r);
  return (
    t.setCustomParameters({
      prompt: "select_account",
    }),
    (await e.signInWithPopup(t)).credential?.accessToken ?? null
  );
}
const Bw = [
    {
      partialName: "noms",
      locale: "fr",
    },
  ],
  Bi = [
    {
      name: "am",
      googleName: "am_ET",
      twitterName: "am",
      file: "am-ET.json",
      humanName: "አማርኛ",
    },
    {
      name: "ar",
      googleName: "ar_AR",
      twitterName: "ar",
      file: "ar-EG.json",
      humanName: "العربية",
    },
    {
      name: "az",
      googleName: "az_AZ",
      twitterName: "az",
      file: "az-Latn-AZ.json",
      humanName: "Azərbaycanca",
    },
    {
      name: "be",
      googleName: "be_BY",
      twitterName: "be",
      file: "be-BY.json",
      humanName: "Беларуская",
    },
    {
      name: "bg",
      googleName: "bg_BG",
      twitterName: "bg",
      file: "bg-BG.json",
      humanName: "български",
    },
    {
      name: "bn",
      googleName: "bn_IN",
      twitterName: "bn",
      file: "bn-IN.json",
      humanName: "বাংলা",
    },
    {
      name: "bs",
      googleName: "bs_BA",
      twitterName: "bs",
      file: "bs-Latn-BA.json",
      humanName: "Bosanski",
    },
    {
      name: "ca",
      googleName: "ca_ES",
      twitterName: "ca",
      file: "ca-ES.json",
      humanName: "Català",
    },
    {
      name: "cs",
      googleName: "cs_CZ",
      twitterName: "cs",
      file: "cs-CZ.json",
      humanName: "Čeština",
    },
    {
      name: "cy",
      googleName: "cy_GB",
      twitterName: "cy",
      file: "cy-GB.json",
      humanName: "Cymraeg",
    },
    {
      name: "da",
      googleName: "da_DK",
      twitterName: "da",
      file: "da-DK.json",
      humanName: "Dansk",
    },
    {
      name: "de",
      googleName: "de_DE",
      twitterName: "de",
      file: "de-DE.json",
      humanName: "Deutsch",
    },
    {
      name: "el",
      googleName: "el_GR",
      twitterName: "el",
      file: "el-GR.json",
      humanName: "Eλληνικά",
    },
    {
      name: "en-PI",
      googleName: "en_US",
      twitterName: "en",
      file: "en-PI.json",
      humanName: "English (Pirate)",
    },
    {
      name: "en",
      googleName: "en_US",
      twitterName: "en",
      file: "en-US.json",
      humanName: "English",
    },
    {
      name: "es",
      googleName: "es_ES",
      twitterName: "es",
      file: "es-ES.json",
      humanName: "Español",
    },
    {
      name: "et",
      googleName: "et_EE",
      twitterName: "et",
      file: "et-EE.json",
      humanName: "Estonian",
    },
    {
      name: "fa",
      googleName: "fa_IR",
      twitterName: "fa",
      file: "fa-IR.json",
      humanName: "فارسی",
    },
    {
      name: "fi",
      googleName: "fi_FI",
      twitterName: "fi",
      file: "fi-FI.json",
      humanName: "Suomi",
    },
    {
      name: "fil",
      googleName: "fil_PH",
      twitterName: "fil",
      file: "fil-PH.json",
      humanName: "Filipino",
    },
    {
      name: "fr",
      googleName: "fr_FR",
      twitterName: "fr",
      file: "fr-FR.json",
      humanName: "Français",
    },
    {
      name: "gl",
      googleName: "gl_ES",
      twitterName: "gl",
      file: "gl-ES.json",
      humanName: "Galego",
    },
    {
      name: "gu",
      googleName: "gu_IN",
      twitterName: "gu",
      file: "gu-IN.json",
      humanName: "ગુજરાતી",
    },
    {
      name: "he",
      googleName: "he_IL",
      twitterName: "he",
      file: "he-IL.json",
      humanName: "עברית",
    },
    {
      name: "hi",
      googleName: "hi_IN",
      twitterName: "hi",
      file: "hi-IN.json",
      humanName: "हिंदी",
    },
    {
      name: "hr",
      googleName: "hr_HR",
      twitterName: "hr",
      file: "hr-HR.json",
      humanName: "Hrvatski",
    },
    {
      name: "hu",
      googleName: "hu_HU",
      twitterName: "hu",
      file: "hu-HU.json",
      humanName: "Magyar",
    },
    {
      name: "hy",
      googleName: "hy_AM",
      twitterName: "hy",
      file: "hy-AM.json",
      humanName: "Հայերեն",
    },
    {
      name: "id",
      googleName: "id_ID",
      twitterName: "id",
      file: "id-ID.json",
      humanName: "Bahasa Indonesia",
    },
    {
      name: "is",
      googleName: "is_IS",
      twitterName: "is",
      file: "is-IS.json",
      humanName: "Íslenskur",
    },
    {
      name: "it",
      googleName: "it_IT",
      twitterName: "it",
      file: "it-IT.json",
      humanName: "Italiano",
    },
    {
      name: "ja",
      googleName: "ja_JP",
      twitterName: "ja",
      file: "ja-JP.json",
      humanName: "日本語",
    },
    {
      name: "ka",
      googleName: "ka_GE",
      twitterName: "ka",
      file: "ka-GE.json",
      humanName: "ქართული",
    },
    {
      name: "kk",
      googleName: "kk_KZ",
      twitterName: "kk",
      file: "kk-KZ.json",
      humanName: "Қазақ тілі",
    },
    {
      name: "kn",
      googleName: "kn_IN",
      twitterName: "kn",
      file: "kn-IN.json",
      humanName: "ಕನ್ನಡ",
    },
    {
      name: "ko",
      googleName: "ko_KR",
      twitterName: "ko",
      file: "ko-KR.json",
      humanName: "한국어",
    },
    {
      name: "lo",
      googleName: "lo_LA",
      twitterName: "lo",
      file: "lo-LA.json",
      humanName: "ພາສາລາວ",
    },
    {
      name: "lt",
      googleName: "lt_LT",
      twitterName: "lt",
      file: "lt-LT.json",
      humanName: "Lietuvių",
    },
    {
      name: "lv",
      googleName: "lv_LV",
      twitterName: "lv",
      file: "lv-LV.json",
      humanName: "Latviešu",
    },
    {
      name: "mk",
      googleName: "mk_MK",
      twitterName: "mk",
      file: "mk-MK.json",
      humanName: "Mакедонски",
    },
    {
      name: "ml",
      googleName: "ml_IN",
      twitterName: "ml",
      file: "ml-IN.json",
      humanName: "മലയാളം",
    },
    {
      name: "mn",
      googleName: "mn_MN",
      twitterName: "mn",
      file: "mn-MN.json",
      humanName: "Mонгол",
    },
    {
      name: "ms",
      googleName: "ms_MY",
      twitterName: "ms",
      file: "ms-MY.json",
      humanName: "Bahasa Melayu",
    },
    {
      name: "my",
      googleName: "my_MM",
      twitterName: "my",
      file: "my-MM.json",
      humanName: "မြန်မာစာ",
    },
    {
      name: "nl",
      googleName: "nl_NL",
      twitterName: "nl",
      file: "nl-NL.json",
      humanName: "Nederlands",
    },
    {
      name: "no",
      googleName: "nb_NO",
      twitterName: "no",
      file: "nb-NO.json",
      humanName: "Norsk",
    },
    {
      name: "pa",
      googleName: "pa_IN",
      twitterName: "pa",
      file: "pa-IN.json",
      humanName: "ਪੰਜਾਬੀ",
    },
    {
      name: "pl",
      googleName: "pl_PL",
      twitterName: "pl",
      file: "pl-PL.json",
      humanName: "Polski",
    },
    {
      name: "pt",
      googleName: "pt_BR",
      twitterName: "pt",
      file: "pt-PT.json",
      humanName: "Português",
    },
    {
      name: "ro",
      googleName: "ro_RO",
      twitterName: "ro",
      file: "ro-RO.json",
      humanName: "Română",
    },
    {
      name: "ru",
      googleName: "ru_RU",
      twitterName: "ru",
      file: "ru-RU.json",
      humanName: "Pусский",
    },
    {
      name: "sd",
      googleName: "sd_PK",
      twitterName: "sd",
      file: "sd-PK.json",
      humanName: "سنڌي",
    },
    {
      name: "sl",
      googleName: "sl_SL",
      twitterName: "sl",
      file: "sl-SI.json",
      humanName: "Slovenščina",
    },
    {
      name: "so",
      googleName: "so_SO",
      twitterName: "so",
      file: "so-SO.json",
      humanName: "Soomaali",
    },
    {
      name: "sq",
      googleName: "sq_AL",
      twitterName: "sq",
      file: "sq-AL.json",
      humanName: "Shqip",
    },
    {
      name: "sr",
      googleName: "sr_SP",
      twitterName: "sr",
      file: "sr-Latn-RS.json",
      humanName: "Srpski",
    },
    {
      name: "sv",
      googleName: "sv_SE",
      twitterName: "sv",
      file: "sv-SE.json",
      humanName: "Svenska",
    },
    {
      name: "ta",
      googleName: "ta_IN",
      twitterName: "ta",
      file: "ta-IN.json",
      humanName: "தமிழ்",
    },
    {
      name: "th",
      googleName: "th_TH",
      twitterName: "th",
      file: "th-TH.json",
      humanName: "ไทย",
    },
    {
      name: "tr",
      googleName: "tr_TR",
      twitterName: "tr",
      file: "tr-TR.json",
      humanName: "Türkçe",
    },
    {
      name: "uk",
      googleName: "uk_UA",
      twitterName: "uk",
      file: "uk-UA.json",
      humanName: "Українська",
    },
    {
      name: "ur",
      googleName: "ur-PK",
      twitterName: "ur",
      file: "ur-PK.json",
      humanName: "اردو",
    },
    {
      name: "uz",
      googleName: "uz-UZ",
      twitterName: "uz",
      file: "uz-Latn-UZ.json",
      humanName: "Oʻzbekcha",
    },
    {
      name: "vi",
      googleName: "vi_VN",
      twitterName: "vi",
      file: "vi-VN.json",
      humanName: "Tiếng Việt",
    },
    {
      name: "zh-CN",
      googleName: "zh_CN",
      twitterName: "zh-cn",
      file: "zh-CN.json",
      humanName: "简体中文",
    },
    {
      name: "zh-HK",
      googleName: "zh_TW",
      twitterName: "zh-tw",
      file: "zh-HK.json",
      humanName: "繁體中文",
    },
  ];
function Uw(e, t) {
  return Jw(e) === t ? "/" : `/${t}/`;
}
function bC(e, t, n) {
  return `${e}${Uw(e, t)}/${n}`.replace("//", "/");
}
function Hw(e, t) {
  const n = Bi.find((s) => s.name === t),
    r = e.toLowerCase() === "twitter" ? "twitterName" : "googleName";
  return n?.[r] || "en_US";
}
function _C(e) {
  return Bi.find((t) => t.name === e)?.file.slice(0, -5) || "en-US";
}
function wC(e, t) {
  const n = eu("")(t);
  return rh(yh, zw(e), eu({}), (r) => r.name ?? "")([n]);
}
function SC(e) {
  return Array.isArray(e) ? rh(yh, Gw, Xw)(e) : [];
}
function EC() {
  return Bi.map((e) => ({
    name: e.name,
    humanName: e.humanName,
  })).sort(Kw);
}
function zw(e) {
  return (t) => t.filter((n) => !bh(e, n.name));
}
function yh(e) {
  return Bi.filter((t) => e.some((n) => bh(n, t.name)));
}
function eu(e) {
  return (t) => t?.[0] ?? e;
}
function Kw(e, t) {
  return e.humanName.localeCompare(t.humanName);
}
function Gw(e) {
  return e.filter((t) => !Qw(t));
}
function Qw(e) {
  return e.name === "en-PI";
}
function Xw(e) {
  return e.map(Yw);
}
function Yw(e) {
  return {
    name: e.name,
    humanName: e.humanName,
  };
}
function Jw(e) {
  return Bw.find((t) => e.includes(t.partialName))?.locale || "en";
}
function bh(e, t) {
  return e.length === t.length ? e === t : tu(e) === tu(t);
}
function tu(e) {
  return e.split("-")[0];
}
let Xe, la, bo;
async function Dn() {
  Xe || (await r0(), s0(Xe), o0(Xe));
}
async function Zw() {
  return await Vw(Xe.auth());
}
async function ds() {
  return await vh(Xe.auth());
}
async function $e() {
  return (await (await ds())?.getIdToken()) ?? "";
}
async function CC() {
  return (await ds())?.uid;
}
async function nu() {
  const e = await ds();
  if (e?.isAnonymous) return await e.getIdToken();
}
function e0(e, t = ["google", "email"]) {
  return (
    l0(),
    new Promise((n) => {
      bo || (bo = new la.auth.AuthUI(Xe.auth()));
      const r = [];
      t.includes("google") &&
        r.push({
          provider: Xe.auth.GoogleAuthProvider.PROVIDER_ID,
          customParameters: {
            prompt: "select_account",
          },
        }),
        t.includes("twitter") &&
          r.push(Xe.auth.TwitterAuthProvider.PROVIDER_ID),
        t.includes("email") && r.push(Xe.auth.EmailAuthProvider.PROVIDER_ID),
        bo.start(`#${e}`, {
          signInFlow: "popup",
          credentialHelper: la.auth.CredentialHelper.NONE,
          signInOptions: r,
          callbacks: {
            signInSuccessWithAuthResult: (s) => (n(s.user), !!s.user),
          },
          tosUrl: "/terms",
          privacyPolicyUrl: "/privacy-policy.html",
        });
    })
  );
}
async function t0() {
  const e = Xe.auth();
  return await jw(e);
}
async function n0(e) {
  const t = Xe.auth();
  t.languageCode = Hw("Google", e);
  const n = a0("Google");
  return await Ww(t, n);
}
async function ru() {
  try {
    await Xe.auth().signOut();
  } catch {}
}
async function r0() {
  (Xe = (await Se(() => import("https://wheelofnames.com/assets/index.esm-v358.js"), __vite__mapDeps([0, 1])))
    .default),
    await Se(() => import("https://wheelofnames.com/assets/index.esm-v3583.js"), __vite__mapDeps([2, 1])),
    await Se(() => import("https://wheelofnames.com/assets/index.esm-v3582.js"), __vite__mapDeps([3, 1])),
    (la = await Se(
      () => import("https://wheelofnames.com/assets/esm-v358.js"),
      __vite__mapDeps([4, 0, 1, 2, 5])
    ));
}
function s0(e) {
  if (i0()) return;
  const t = {
    apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
    authDomain: "wheel-of-names-firebase.firebaseapp.com",
    databaseURL: "https://wheel-of-names-firebase.firebaseio.com",
    projectId: "wheel-of-names-firebase",
    timestampsInSnapshots: !0,
  };
  e.initializeApp(t);
}
function i0() {
  return Xe.apps && Xe.apps.length > 0;
}
function o0(e) {
  const t = e.firestore();
  try {
    t.enablePersistence({
      synchronizeTabs: !0,
    });
  } catch {}
}
function a0(e) {
  const t = {
    google: new Xe.auth.GoogleAuthProvider(),
    facebook: new Xe.auth.FacebookAuthProvider(),
    twitter: new Xe.auth.TwitterAuthProvider(),
  };
  return t[e.toLowerCase()] || t.google;
}
function l0() {
  if (document.querySelector("#firebaseui-auth-css-link")) return;
  const t = document.querySelector("head"),
    n = document.createElement("link");
  (n.id = "firebaseui-auth-css-link"),
    (n.rel = "stylesheet"),
    (n.type = "text/css"),
    (n.href =
      "https://www.gstatic.com/firebasejs/ui/6.1.0/firebase-ui-auth.css"),
    (n.media = "all"),
    t?.appendChild(n);
}
async function kC(e, t) {
  return (await ze("GET", `api/v2/admin/wheels/${t}`, e)).data;
}
async function xC(e, t, n) {
  let r = `api/v2/admin/users/${e}/wheels`;
  return (
    n && n.length > 0 && (r += `?fields=${n}`),
    (await ze("GET", r, t)).data.wheels
  );
}
async function c0(e, t) {
  return (await ze("GET", `api/v2/admin/users/${t}`, e)).data;
}
async function TC(e) {
  return (await ze("GET", "api/v2/admin/review-queue", e)).data;
}
async function PC(e, t) {
  return (
    await ze("POST", "api/v2/admin/translate", e, {
      texts: t,
    })
  ).data.translations;
}
async function _h(e) {
  try {
    return (await ze("GET", "api/v2/admin", e)).data.isAdmin;
  } catch {
    return !1;
  }
}
async function IC(e, t, n) {
  await ze("PUT", "api/v2/admin/administrators", e, {
    uid: t,
    totalReviews: n,
  });
}
async function NC(e, t, n) {
  await ze("PUT", "api/v2/admin/administrators", e, {
    uid: t,
    sessionReviews: n,
  });
}
async function AC(e) {
  return (await ze("GET", "api/v2/admin/dirty-words", e)).data.dirtyWords;
}
async function LC(e, t) {
  await ze("PUT", "api/v2/admin/dirty-words", e, {
    dirtyWords: t,
  });
}
async function OC(e) {
  return (await ze("GET", "api/v2/admin/administrators", e)).data
    .administrators;
}
async function RC(e, t, n) {
  await ze("POST", "api/v2/admin/administrators", e, {
    uid: t,
    name: n,
  });
}
async function MC(e, t) {
  await ze("DELETE", "api/v2/admin/administrators", e, {
    uid: t,
  });
}
async function FC(e, t) {
  const n = `api/v2/admin/wheels/${t}`;
  await ze("PUT", n, e, {
    shareMode: "copyable",
  });
}
async function $C(e, t) {
  await ze("DELETE", `api/v2/admin/wheels/${t}`, e);
}
async function DC(e) {
  return (await ze("GET", "api/v2/admin/review-queue/next-shared-wheel", e))
    .data.wheel;
}
async function qC(e) {
  return (await ze("GET", "api/v2/admin/review-queue/next-gallery-wheel", e))
    .data.wheel;
}
async function VC(e, t) {
  const n = `api/v2/admin/review-queue/approve/${t}`;
  await ze("POST", n, e);
}
async function jC(e, t) {
  await ze("POST", `api/v2/admin/review-queue/reject/${t}`, e);
}
async function u0(e, t) {
  const n = `api/v2/admin/wheels/thumbnails/${t}`;
  return await f0("GET", n, e);
}
async function ze(e, t, n, r) {
  return await hh(e, t, n, r);
}
async function f0(e, t, n, r) {
  return await mh(e, t, n);
}
const d0 = Xa("user", {
    state: () => ({
      userPhotoUrl: "",
      userDisplayName: "",
      uid: "",
      loginProvider: "",
      premium: !1,
      admin: !1,
    }),
    actions: {
      setUser(e) {
        if (!e) {
          this.clearUser();
          return;
        }
        (this.userDisplayName = e.displayName ?? ""),
          (this.userPhotoUrl = e.photoURL || "images/user_profile.png"),
          (this.uid = e.uid ?? "");
        const t = e.providerData[0]?.providerId ?? "unknown";
        this.loginProvider = h0[t] ?? "";
      },
      clearUser() {
        (this.userDisplayName = ""),
          (this.userPhotoUrl = ""),
          (this.uid = ""),
          (this.loginProvider = ""),
          (this.premium = !1),
          (this.admin = !1);
      },
      async userIsLoggedIn() {
        await Dn();
        const e = await Zw();
        if (e) {
          const t = await ds();
          this.setUser(t);
        }
        return e;
      },
      async logOut() {
        await ru(), this.clearUser();
      },
      async deleteAccount() {
        const e = await $e();
        await Ow(e), ru(), this.clearUser();
      },
      async logInAnonymously() {
        await t0();
      },
      async logInWithUi(e, t = ["google", "email"]) {
        await Dn();
        const n = await nu(),
          r = await e0(e, t);
        this.setUser(r);
        const s = await $e();
        await Lw(s), n && (await Zc(n, s));
      },
      async logInToSheets(e) {
        await Dn();
        const t = await nu(),
          n = await n0(e),
          r = await ds();
        if ((this.setUser(r), t)) {
          const s = await $e();
          await Zc(t, s);
        }
        return n;
      },
      async setPremiumStatus() {
        if (this.premium) return;
        await Dn();
        const e = await $e();
        this.premium = await Rw(e);
      },
      async userIsAdmin() {
        await Dn();
        const e = await $e();
        try {
          return await _h(e);
        } catch {
          return !1;
        }
      },
      async getAccount(e) {
        const t = await $e();
        return await c0(t, e);
      },
      async getUserIdToken() {
        return await $e();
      },
      async getSavedWheels(e) {
        const t = await $e();
        return (await xw(t, e)).sort((r, s) =>
          r.wheelConfig.title.localeCompare(s.wheelConfig.title, "en", {
            numeric: !0,
            sensitivity: "base",
          })
        );
      },
      async loadWheel(e) {
        await Dn();
        const t = await $e();
        return await Tw(e, t);
      },
      async loadMyWheels(e) {
        const t = await $e();
        return await Pw(t, e);
      },
      async saveWheel(e) {
        const t = await $e();
        return await Iw(t, e);
      },
      async getSharedWheels(e) {
        const t = await $e();
        return await kw(t, e);
      },
      async shareWheel(e, t) {
        const n = await $e();
        return await Cw({
          idToken: n,
          wheelConfig: e,
          shareMode: t,
        });
      },
      async updateWheel(e, t, n) {
        const r = await $e();
        return await Nw(r, e, {
          wheelConfig: t,
          shareMode: n,
        });
      },
      async deleteWheel(e) {
        const t = await $e();
        return await Aw(t, e);
      },
      async generateApiKey() {
        const e = await $e();
        return await Mw(e);
      },
      async getExistingApiKey() {
        const e = await $e();
        return await $w(e);
      },
      async deleteExistingApiKey() {
        const e = await $e();
        await Fw(e);
      },
      async getWheelThumbnail(e) {
        const t = await $e();
        return this.admin ? await u0(t, e) : await Dw(t, e);
      },
    },
  }),
  h0 = {
    "google.com": "Google",
    "twitter.com": "Twitter",
    password: "email",
  },
  m0 = Xa("wheel", {
    state: () => ({
      wheelConfig: new St(),
      sheetLinked: !1,
      wheelIsBusy: !1,
      winnerEntry: {},
      winners: [],
      path: "",
      shareMode: null,
      previousWheelConfig: "",
    }),
    getters: {
      wheelType: (e) => e.wheelConfig.type,
      entries: (e) => e.wheelConfig.entries,
      entryCount: (e) => e.wheelConfig.entries.length,
      winnerIndex: (e) =>
        e.wheelConfig.entries.findIndex((t) => t.id === e.winnerEntry.id),
      enabledColors: (e) =>
        e.wheelConfig.colorSettings.filter((t) => t.enabled),
      wheelIsShared: (e) => !!e.shareMode && D_(e.shareMode),
      wheelIsCopyable: (e) => !!e.shareMode && e.shareMode !== "spin-only",
      wheelIsAdvanced: (e) => e.wheelConfig.isAdvanced,
      wheelTitle: (e) => e.wheelConfig.title,
      wheelDescription: (e) => e.wheelConfig.description,
      showTitle: (e) => e.wheelConfig.showTitle,
      hubSize: (e) => e.wheelConfig.hubSize,
    },
    actions: {
      setWheelConfig(e) {
        (this.wheelConfig = new St(e)), this.persistWheelConfig();
      },
      setWheelConfigNoPersist(e) {
        this.wheelConfig = new St(e);
      },
      saveWheelConfigForUndo() {
        this.previousWheelConfig = this.wheelConfig.getJson();
      },
      undoWheelConfigChange() {
        this.setWheelConfig(new St(JSON.parse(this.previousWheelConfig)));
      },
      persistWheelConfig() {
        if (!this.wheelIsShared)
          try {
            localStorage.setItem("LastWheelConfig", this.wheelConfig.getJson());
          } catch {
            console.error("Error saving wheel config to local storage");
          }
      },
      setGrayEmptyWheel() {
        const e = new St();
        (e.entries = $n([
          {
            text: " ",
          },
        ])),
          e.setColorValues(["#BBBBBB"]),
          this.setWheelConfigNoPersist(e);
      },
      setWheelTitle(e) {
        (this.wheelConfig.title = e), this.persistWheelConfig();
      },
      setWheelDescription(e) {
        (this.wheelConfig.description = e), this.persistWheelConfig();
      },
      setShowTitle(e) {
        (this.wheelConfig.showTitle = e), this.persistWheelConfig();
      },
      setEntries(e) {
        (this.wheelConfig.entries = $n(e)), this.persistWheelConfig();
      },
      setEntriesNoPersist(e) {
        this.wheelConfig.entries = $n(e);
      },
      shuffleEntries() {
        (this.wheelConfig.entries = R_(this.wheelConfig.entries)),
          this.persistWheelConfig();
      },
      sortEntries() {
        (this.wheelConfig.entries = Gc(ue(this.wheelConfig.entries))),
          this.persistWheelConfig();
      },
      addEntry(e) {
        this.wheelConfig.entries.push({
          ...e,
          id: Hs(),
        }),
          this.persistWheelConfig();
      },
      setEntryText(e, t) {
        const n = this.wheelConfig.entries.at(e);
        n && ((n.text = t), this.persistWheelConfig());
      },
      setEntryColor(e, t) {
        const n = this.wheelConfig.entries.at(e);
        n && (t ? (n.color = t) : delete n.color, this.persistWheelConfig());
      },
      setEntrySound(e, t) {
        const n = this.wheelConfig.entries.at(e);
        n && (t ? (n.sound = t) : delete n.sound, this.persistWheelConfig());
      },
      setEntryMessage(e, t) {
        const n = this.wheelConfig.entries.at(e);
        n &&
          (t ? (n.message = t) : delete n.message, this.persistWheelConfig());
      },
      setEntryEnabled(e, t) {
        const n = this.wheelConfig.entries.at(e);
        n && ((n.enabled = t), this.persistWheelConfig());
      },
      setEntryWeight(e, t) {
        this.wheelConfig.entries[e] &&
          ((this.wheelConfig.entries[e].weight = t), this.persistWheelConfig());
      },
      refreshEntries() {
        (this.wheelConfig.entries = $n(this.wheelConfig.entries)),
          this.persistWheelConfig();
      },
      setTextEntries(e) {
        (this.wheelConfig.entries = $n(
          e.map((t) => ({
            text: t,
          }))
        )),
          this.persistWheelConfig();
      },
      addTextEntries(e) {
        (this.wheelConfig.entries = $n([
          ...this.wheelConfig.entries,
          ...e.map((t) => ({
            text: t,
          })),
        ])),
          this.persistWheelConfig();
      },
      removeTextEntries(e) {
        (this.wheelConfig.entries = this.wheelConfig.entries.filter(
          (t) => t.text && !e.includes(t.text)
        )),
          this.persistWheelConfig();
      },
      removeEntryByIndex(e) {
        this.wheelConfig.entries.splice(e, 1),
          this.persistWheelConfig(),
          (this.sheetLinked = !1);
      },
      removeEntry(e) {
        (this.wheelConfig.entries = this.wheelConfig.entries.filter(
          (t) => t.id !== e.id
        )),
          this.persistWheelConfig(),
          (this.sheetLinked = !1);
      },
      removeEntryAll(e) {
        (this.wheelConfig.entries = this.wheelConfig.entries.filter(
          (t) => !t.text || t.text.trim() !== e.text?.trim()
        )),
          this.persistWheelConfig(),
          (this.sheetLinked = !1);
      },
      hideEntry(e) {
        const t = this.wheelConfig.entries.find((n) => n.id === e.id);
        t && ((t.enabled = !1), this.persistWheelConfig());
      },
      moveEntry(e, t) {
        const n = e + t,
          r = this.wheelConfig.entries;
        n < 0 ||
          n >= r.length ||
          (([r[e], r[n]] = [r[n], r[e]]), this.persistWheelConfig());
      },
      duplicateEntry(e) {
        const n = {
          ...this.wheelConfig.entries.at(e),
          id: Hs(),
        };
        this.wheelConfig.entries.splice(e + 1, 0, n), this.persistWheelConfig();
      },
      setColorValues(e) {
        this.wheelConfig.setColorValues(e), this.persistWheelConfig();
      },
      setHubSize(e) {
        (this.wheelConfig.hubSize = e), this.persistWheelConfig();
      },
      setUploadedCenterImage(e, t) {
        (this.wheelConfig.type = "color"),
          this.wheelConfig.setUploadedCenterImage(e, t),
          this.persistWheelConfig();
      },
      setUploadedBackgroundImage(e, t) {
        (this.wheelConfig.type = "image"),
          this.wheelConfig.setUploadedBackgroundImage(e, t),
          this.persistWheelConfig();
      },
      setGalleryBackgroundImage(e) {
        (this.wheelConfig.type = "image"),
          this.wheelConfig.setGalleryBackgroundImage(e),
          this.persistWheelConfig();
      },
      setGalleryCenterImage(e) {
        (this.wheelConfig.type = "color"),
          this.wheelConfig.setGalleryCenterImage(e),
          this.persistWheelConfig();
      },
      removeImageFromEntry(e) {
        const t = this.wheelConfig.entries.at(e);
        t && (delete t.image, this.persistWheelConfig());
      },
      setWheelBusy(e) {
        this.wheelIsBusy = e;
      },
      linkSheet() {
        this.sheetLinked = !0;
      },
      unlinkSheet() {
        this.sheetLinked = !1;
      },
      setPath(e) {
        this.path = e;
      },
      setUnshared() {
        (this.path = ""), (this.shareMode = null);
      },
      setShareMode(e) {
        this.shareMode = e;
      },
      addWinner(e) {
        (this.winnerEntry = e), this.winners.push(e);
      },
      sortWinners() {
        this.winners = Gc(this.winners);
      },
      clearWinners() {
        this.winners = [];
      },
      setVolumes(e, t) {
        (this.wheelConfig.duringSpinSoundVolume = e),
          (this.wheelConfig.afterSpinSoundVolume = t),
          this.persistWheelConfig();
      },
      loadInitialEditableWheel() {
        this.setWheelConfig(
          JSON.parse(localStorage.getItem("LastWheelConfig") || "{}")
        );
      },
      setSharedWheel(e) {
        this.setPath(e.path),
          this.setShareMode(e.shareMode),
          this.setWheelConfigNoPersist(e.wheelConfig);
      },
      resetWheel() {
        this.unlinkSheet(), this.setWheelConfig(new St()), this.clearWinners();
      },
      async addImageEntry(e) {
        let t;
        if (this.wheelConfig.isAdvanced) {
          const n = await go(e);
          po(n)
            ? (t = {
                image: e,
                weight: 1,
                enabled: !0,
              })
            : (t = {
                image: e,
                color: cr(n).slice(0, 7),
                weight: 1,
                enabled: !0,
              });
        } else
          t = {
            image: e,
          };
        (t.id = Hs()),
          this.wheelConfig.entries.push(t),
          this.persistWheelConfig();
      },
      async addImageToEntry(e, t) {
        const n = this.wheelConfig.entries.at(t);
        if (n) {
          const r = await go(e);
          po(r) || (n.color = cr(r).slice(0, 7)),
            (n.image = e),
            this.persistWheelConfig();
        }
      },
      async setAdvanced(e) {
        if (((this.wheelConfig.isAdvanced = e), e))
          for (const t of this.wheelConfig.entries) {
            if (t.image) {
              const n = await go(t.image);
              po(n) || (t.color = cr(n).slice(0, 7));
            }
            (t.weight = 1), (t.enabled = !0);
          }
        else {
          for (const t of this.wheelConfig.entries)
            delete t.color,
              delete t.weight,
              delete t.enabled,
              delete t.sound,
              delete t.message;
          this.wheelConfig.entries = this.wheelConfig.entries.filter(
            (t) => t.text || t.image
          );
        }
        this.persistWheelConfig();
      },
    },
  }),
  _o = w_(() => S_()),
  g0 = Tn({
    __name: "App",
    setup(e) {
      document.querySelector("#preload-static-content")?.remove();
      const t = hy(),
        { t: n, locale: r } = qi(),
        s = P_(),
        i = m0(),
        o = M(() =>
          t.path.includes("faq")
            ? "FAQ"
            : t.path.includes("reviews")
            ? "Reviews & tutorials"
            : t.path.includes("classroom")
            ? "Classroom"
            : t.path.includes("privacy")
            ? "Privacy policy"
            : t.path.includes("changelog")
            ? "Changelog"
            : t.path.includes("export")
            ? "Export"
            : t.path.includes("admin")
            ? "Admin"
            : t.path.includes("gallery")
            ? n("toolbar.Gallery")
            : i.wheelConfig.title
            ? i.wheelConfig.title
            : `Wheel of Names | ${n("app.Random name picker")}`
        );
      b_(o), s.loadPreferences(), Qe.set(s.darkMode);
      const a = M(() => i.wheelConfig),
        l = M(() =>
          ["home", "shared-wheel", "shared-wheel-view", "review"].includes(
            t.name?.toString() || ""
          )
        );
      he(
        () => a.value.pageBackgroundColor,
        () => {
          c(a.value.pageBackgroundColor);
        }
      ),
        he(
          () => t.path,
          () => {
            c(a.value.pageBackgroundColor);
          }
        );
      function c(d) {
        l.value && d.toLowerCase() !== "#ffffff"
          ? (document.body.style.backgroundColor = d)
          : document.body.style.removeProperty("background-color");
      }
      he(
        () => t.path,
        () => {
          u(), f();
        },
        {
          immediate: !0,
        }
      ),
        he(
          () => r.value,
          () => {
            u(), f();
          }
        );
      function u() {
        let d = "en";
        l.value && (d = r.value),
          document.documentElement.setAttribute("lang", d);
      }
      function f() {
        let d = "";
        l.value && (d = n("app.Free and easy to use")),
          document
            .querySelector('meta[name="description"]')
            ?.setAttribute("content", d);
      }
      return (d, h) => {
        const g = dg("router-view");
        return oi(), ai(g);
      };
    },
  });
function WC(e) {
  return e;
}
const p0 = [
    {
      path: "/faq/:section?",
      component: () =>
        Se(
          () => import("https://wheelofnames.com/assets/FaqPage-v358.js"),
          __vite__mapDeps([6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
        ),
    },
    {
      path: "/user-reviews-and-tutorials",
      component: () =>
        Se(
          () => import("https://wheelofnames.com/assets/TutorialsPage-v358.js"),
          __vite__mapDeps([20, 7, 8, 21, 22, 10, 13, 14, 15, 16, 17])
        ),
    },
    {
      path: "/how-to-use-in-the-classroom",
      component: () =>
        Se(
          () => import("https://wheelofnames.com/assets/ClassroomPage-v358.js"),
          __vite__mapDeps([23, 7, 8, 21, 22, 10, 13, 14, 15, 16, 17])
        ),
    },
    {
      path: "/privacy-policy",
      alias: "/privacy-policy.html",
      component: () =>
        Se(
          () => import("https://wheelofnames.com/assets/PrivacyPolicyPage-v358.js"),
          __vite__mapDeps([24, 7, 8, 18, 25, 10, 13, 14, 15, 16, 17, 26])
        ),
    },
    {
      path: "/terms",
      component: () =>
        Se(
          () => import("https://wheelofnames.com/assets/TermsOfServicePage-v358.js"),
          __vite__mapDeps([27, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
        ),
    },
    {
      path: "/changelog",
      component: () =>
        Se(
          () => import("https://wheelofnames.com/assets/ChangelogPage-v358.js"),
          __vite__mapDeps([28, 7, 8, 10, 13, 14, 15, 16, 17, 25, 29])
        ),
    },
    {
      path: "/api-doc",
      component: () =>
        Se(
          () => import("https://wheelofnames.com/assets/ApiPage-v358.js"),
          __vite__mapDeps([30, 7, 8, 9, 10, 31, 32, 13, 14, 15, 16, 17, 33])
        ),
    },
    {
      path: "/export",
      component: () =>
        Se(
          () => import("https://wheelofnames.com/assets/ExportPage-v358.js"),
          __vite__mapDeps([34, 7, 8, 9, 10, 13, 14, 15, 16, 17, 35])
        ),
    },
    {
      path: "/translations",
      component: () =>
        Se(
          () => import("https://wheelofnames.com/assets/TranslationPage-v358.js"),
          __vite__mapDeps([36, 7, 8, 25, 10, 13, 14, 15, 16, 17, 31])
        ),
    },
    {
      path: "/admin",
      meta: {
        adminOnly: !0,
      },
      children: [
        {
          path: "",
          component: () =>
            Se(
              () => import("https://wheelofnames.com/assets/AdminPage-v358.js"),
              __vite__mapDeps([37, 38, 39, 7, 8, 9, 10, 15, 16, 40, 22, 41])
            ),
        },
        {
          path: "review",
          component: () =>
            Se(
              () => import("https://wheelofnames.com/assets/ReviewWheelPage-v358.js"),
              __vite__mapDeps([
                42, 38, 39, 43, 44, 7, 8, 25, 9, 10, 16, 45, 5, 46, 15, 47, 32,
                48,
              ])
            ),
        },
        {
          path: "gallery",
          component: () =>
            Se(
              () => import("https://wheelofnames.com/assets/GalleryReviewPage-v358.js"),
              __vite__mapDeps([49, 38, 7, 8, 9, 10, 50, 39, 51, 44, 32, 52, 53])
            ),
        },
        {
          path: "user",
          component: () =>
            Se(
              () => import("https://wheelofnames.com/assets/AdminUserPage-v358.js"),
              __vite__mapDeps([
                54, 38, 7, 8, 25, 16, 32, 55, 56, 45, 5, 46, 15, 57,
              ])
            ),
        },
      ],
    },
    {
      path: "/:lang([a-z][a-z][a-z]?|[a-z][a-z]-[A-Z][A-Z])?",
      component: () => Se(() => import("https://wheelofnames.com/assets/lang-v358.js"), []),
      children: [
        {
          name: "home",
          path: "",
          component: () =>
            Se(
              () => import("https://wheelofnames.com/assets/EditWheelPage-v358.js"),
              __vite__mapDeps([
                58, 7, 8, 10, 16, 11, 12, 14, 39, 51, 44, 43, 47, 45, 5, 46, 59,
                32, 60, 61, 55, 56, 25, 40, 22, 18, 31, 62, 63,
              ])
            ),
        },
        {
          path: "premium",
          meta: {
            premiumOnly: !0,
          },
          component: () =>
            Se(
              () => import("https://wheelofnames.com/assets/EditWheelPage-v358.js"),
              __vite__mapDeps([
                58, 7, 8, 10, 16, 11, 12, 14, 39, 51, 44, 43, 47, 45, 5, 46, 59,
                32, 60, 61, 55, 56, 25, 40, 22, 18, 31, 62, 63,
              ])
            ),
        },
        {
          name: "shared-wheel",
          path: ":wheelPath(\\w\\w\\w-\\w\\w\\w)",
          component: () =>
            Se(
              () => import("https://wheelofnames.com/assets/SharedWheelPage-v358.js"),
              __vite__mapDeps([
                64, 10, 8, 16, 45, 5, 46, 59, 32, 47, 60, 62, 65,
              ])
            ),
        },
        {
          name: "shared-wheel-view",
          path: "view/:wheelPath(\\w\\w\\w-\\w\\w\\w)?",
          component: () =>
            Se(
              () => import("https://wheelofnames.com/assets/SharedWheelPage-v358.js"),
              __vite__mapDeps([
                64, 10, 8, 16, 45, 5, 46, 59, 32, 47, 60, 62, 65,
              ])
            ),
        },
        {
          name: "gallery",
          path: "gallery",
          component: () =>
            Se(
              () => import("https://wheelofnames.com/assets/GalleryPage-v358.js"),
              __vite__mapDeps([
                66, 7, 8, 9, 10, 13, 14, 15, 16, 17, 50, 39, 51, 44, 32, 52,
              ])
            ),
        },
        {
          name: "login",
          path: "login",
          component: () => Se(() => import("https://wheelofnames.com/assets/LoginPage-v358.js"), []),
        },
        {
          name: "migrate-account",
          path: "migrate-account",
          component: () =>
            Se(
              () => import("https://wheelofnames.com/assets/MigrateAccountPage-v358.js"),
              __vite__mapDeps([
                67, 7, 8, 32, 11, 12, 13, 14, 15, 16, 17, 61, 68,
              ])
            ),
        },
      ],
    },
    {
      path: "/:catchAll(.*)*",
      component: () => Se(() => import("https://wheelofnames.com/assets/Error404-v358.js"), []),
    },
  ],
  wo = () => {
    const e = fy({
      scrollBehavior: (t) =>
        t.hash
          ? {
              el: t.hash,
              top: 50,
            }
          : {
              top: 0,
            },
      routes: p0,
      history: Vv("/"),
    });
    return (
      e.beforeEach(async (t, n) => {
        if (t.params.lang === "en")
          return e.resolve(
            {
              params: {
                lang: "",
              },
            },
            t
          ).fullPath;
        if (t.path.startsWith("/view/") && t.path.split("/").length > 3) {
          const [s, i] = t.path.split("/").slice(2);
          return `/${s}/${i}`;
        }
        const r = d0();
        if (t.meta.adminOnly) {
          await Dn();
          const s = await $e();
          if (await _h(s)) r.admin = !0;
          else {
            const o = `/login?redirect=${t.fullPath}`;
            if (n.fullPath !== o) return o;
            location.reload();
          }
        }
        if (t.meta.premiumOnly && (await r.setPremiumStatus(), !r.premium)) {
          const s = e.resolve(
            {
              name: "login",
              query: {
                redirect: t.fullPath,
              },
            },
            t
          ).fullPath;
          if (n.fullPath !== s) return s;
          location.reload();
        }
      }),
      e.onError((t) => {
        _w("RouterError", t),
          confirm(`An update is available. Do you want to reload?

If reloading does not fix the issue, try using https://old.wheelofnames.com.`) &&
            location.reload();
      }),
      e
    );
  };
async function v0(e, t) {
  const n = e(g0);
  n.use(cv, t);
  const r = typeof _o == "function" ? await _o({}) : _o;
  n.use(r);
  const s = Gn(
    typeof wo == "function"
      ? await wo({
          store: r,
        })
      : wo
  );
  return (
    r.use(({ store: i }) => {
      i.router = s;
    }),
    {
      app: n,
      store: r,
      router: s,
    }
  );
}
const y0 = {
  name: "fontawesome-v6",
  type: {
    positive: "fas fa-check",
    negative: "fas fa-triangle-exclamation",
    info: "fas fa-circle-info",
    warning: "fas fa-exclamation",
  },
  arrow: {
    up: "fas fa-arrow-up",
    right: "fas fa-arrow-right",
    down: "fas fa-arrow-down",
    left: "fas fa-arrow-left",
    dropdown: "fas fa-caret-down",
  },
  chevron: {
    left: "fas fa-chevron-left",
    right: "fas fa-chevron-right",
  },
  colorPicker: {
    spectrum: "fas fa-eye-dropper",
    tune: "fas fa-sliders",
    palette: "fas fa-swatchbook",
  },
  pullToRefresh: {
    icon: "fas fa-rotate",
  },
  carousel: {
    left: "fas fa-chevron-left",
    right: "fas fa-chevron-right",
    up: "fas fa-chevron-up",
    down: "fas fa-chevron-down",
    navigationIcon: "fas fa-circle",
  },
  chip: {
    remove: "fas fa-circle-xmark",
    selected: "fas fa-check",
  },
  datetime: {
    arrowLeft: "fas fa-chevron-left",
    arrowRight: "fas fa-chevron-right",
    now: "far fa-clock",
    today: "far fa-calendar-check",
  },
  editor: {
    bold: "fas fa-bold",
    italic: "fas fa-italic",
    strikethrough: "fas fa-strikethrough",
    underline: "fas fa-underline",
    unorderedList: "fas fa-list-ul",
    orderedList: "fas fa-list-ol",
    subscript: "fas fa-subscript",
    superscript: "fas fa-superscript",
    hyperlink: "fas fa-link",
    toggleFullscreen: "fas fa-maximize",
    quote: "fas fa-quote-right",
    left: "fas fa-align-left",
    center: "fas fa-align-center",
    right: "fas fa-align-right",
    justify: "fas fa-align-justify",
    print: "fas fa-print",
    outdent: "fas fa-outdent",
    indent: "fas fa-indent",
    removeFormat: "fas fa-eraser",
    formatting: "fas fa-heading",
    fontSize: "fas fa-text-height",
    align: "fas fa-align-left",
    hr: "far fa-square-minus",
    undo: "fas fa-rotate-left",
    redo: "fas fa-rotate-right",
    heading: "fas fa-heading",
    code: "fas fa-code",
    size: "fas fa-text-height",
    font: "fas fa-font",
    viewSource: "fas fa-code",
  },
  expansionItem: {
    icon: "fas fa-chevron-down",
    denseIcon: "fas fa-caret-down",
  },
  fab: {
    icon: "fas fa-plus",
    activeIcon: "fas fa-xmark",
  },
  field: {
    clear: "fas fa-circle-xmark",
    error: "fas fa-circle-exclamation",
  },
  pagination: {
    first: "fas fa-backward-step",
    prev: "fas fa-chevron-left",
    next: "fas fa-chevron-right",
    last: "fas fa-forward-step",
  },
  rating: {
    icon: "fas fa-star",
  },
  stepper: {
    done: "fas fa-check",
    active: "fas fa-pencil",
    error: "fas fa-triangle-exclamation",
  },
  tabs: {
    left: "fas fa-chevron-left",
    right: "fas fa-chevron-right",
    up: "fas fa-chevron-up",
    down: "fas fa-chevron-down",
  },
  table: {
    arrowUp: "fas fa-arrow-up",
    warning: "fas fa-triangle-exclamation",
    firstPage: "fas fa-backward-step",
    prevPage: "fas fa-chevron-left",
    nextPage: "fas fa-chevron-right",
    lastPage: "fas fa-forward-step",
  },
  tree: {
    icon: "fas fa-play",
  },
  uploader: {
    done: "fas fa-check",
    clear: "fas fa-xmark",
    add: "fas fa-square-plus",
    upload: "fas fa-upload",
    removeQueue: "fas fa-bars-staggered",
    removeUploaded: "fas fa-clipboard-check",
  },
};
function b0(e, t, n) {
  let r;
  function s() {
    r !== void 0 && (zo.remove(r), (r = void 0));
  }
  return (
    Tt(() => {
      e.value === !0 && s();
    }),
    {
      removeFromHistory: s,
      addToHistory() {
        (r = {
          condition: () => n.value === !0,
          handler: t,
        }),
          zo.add(r);
      },
    }
  );
}
function zs(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function wh(e, t) {
  typeof t.type == "symbol"
    ? Array.isArray(t.children) === !0 &&
      t.children.forEach((n) => {
        wh(e, n);
      })
    : e.add(t);
}
function BC(e) {
  const t = new Set();
  return (
    e.forEach((n) => {
      wh(t, n);
    }),
    Array.from(t)
  );
}
function Sh(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function Eh(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function _0() {
  let e = null;
  const t = Ce();
  function n() {
    e !== null && (clearTimeout(e), (e = null));
  }
  return (
    Pi(n),
    Tt(n),
    {
      removeTimeout: n,
      registerTimeout(r, s) {
        n(),
          Eh(t) === !1 &&
            (e = setTimeout(() => {
              (e = null), r();
            }, s));
      },
    }
  );
}
function w0() {
  let e;
  const t = Ce();
  function n() {
    e = void 0;
  }
  return (
    Pi(n),
    Tt(n),
    {
      removeTick: n,
      registerTick(r) {
        (e = r),
          ct(() => {
            e === r && (Eh(t) === !1 && e(), (e = void 0));
          });
      },
    }
  );
}
const S0 = {
    modelValue: {
      type: Boolean,
      default: null,
    },
    "onUpdate:modelValue": [Function, Array],
  },
  E0 = ["beforeShow", "show", "beforeHide", "hide"];
function C0({
  showing: e,
  canShow: t,
  hideOnRouteChange: n,
  handleShow: r,
  handleHide: s,
  processOnMount: i,
}) {
  const o = Ce(),
    { props: a, emit: l, proxy: c } = o;
  let u;
  function f(m) {
    e.value === !0 ? g(m) : d(m);
  }
  function d(m) {
    if (
      a.disable === !0 ||
      m?.qAnchorHandled === !0 ||
      (t !== void 0 && t(m) !== !0)
    )
      return;
    const S = a["onUpdate:modelValue"] !== void 0;
    S === !0 &&
      (l("update:modelValue", !0),
      (u = m),
      ct(() => {
        u === m && (u = void 0);
      })),
      (a.modelValue === null || S === !1) && h(m);
  }
  function h(m) {
    e.value !== !0 &&
      ((e.value = !0), l("beforeShow", m), r !== void 0 ? r(m) : l("show", m));
  }
  function g(m) {
    if (a.disable === !0) return;
    const S = a["onUpdate:modelValue"] !== void 0;
    S === !0 &&
      (l("update:modelValue", !1),
      (u = m),
      ct(() => {
        u === m && (u = void 0);
      })),
      (a.modelValue === null || S === !1) && w(m);
  }
  function w(m) {
    e.value !== !1 &&
      ((e.value = !1), l("beforeHide", m), s !== void 0 ? s(m) : l("hide", m));
  }
  function x(m) {
    a.disable === !0 && m === !0
      ? a["onUpdate:modelValue"] !== void 0 && l("update:modelValue", !1)
      : (m === !0) !== e.value && (m === !0 ? h : w)(u);
  }
  he(() => a.modelValue, x),
    n !== void 0 &&
      Sh(o) === !0 &&
      he(
        () => c.$route.fullPath,
        () => {
          n.value === !0 && e.value === !0 && g();
        }
      ),
    i === !0 &&
      xt(() => {
        x(a.modelValue);
      });
  const y = {
    show: d,
    hide: g,
    toggle: f,
  };
  return Object.assign(c, y), y;
}
const k0 = {
  transitionShow: {
    type: String,
    default: "fade",
  },
  transitionHide: {
    type: String,
    default: "fade",
  },
  transitionDuration: {
    type: [String, Number],
    default: 300,
  },
};
function x0(e, t = () => {}, n = () => {}) {
  return {
    transitionProps: M(() => {
      const r = `q-transition--${e.transitionShow || t()}`,
        s = `q-transition--${e.transitionHide || n()}`;
      return {
        appear: !0,
        enterFromClass: `${r}-enter-from`,
        enterActiveClass: `${r}-enter-active`,
        enterToClass: `${r}-enter-to`,
        leaveFromClass: `${s}-leave-from`,
        leaveActiveClass: `${s}-leave-active`,
        leaveToClass: `${s}-leave-to`,
      };
    }),
    transitionStyle: M(
      () => `--q-transition-duration: ${e.transitionDuration}ms`
    ),
  };
}
let qn = [],
  hs = [];
function Ch(e) {
  hs = hs.filter((t) => t !== e);
}
function T0(e) {
  Ch(e), hs.push(e);
}
function su(e) {
  Ch(e), hs.length === 0 && qn.length !== 0 && (qn[qn.length - 1](), (qn = []));
}
function sl(e) {
  hs.length === 0 ? e() : qn.push(e);
}
function P0(e) {
  qn = qn.filter((t) => t !== e);
}
const ur = [],
  Zr = [];
let I0 = 1,
  gn = document.body;
function Ui(e, t) {
  const n = document.createElement("div");
  if (
    ((n.id = t !== void 0 ? `q-portal--${t}--${I0++}` : e),
    hi.globalNodes !== void 0)
  ) {
    const r = hi.globalNodes.class;
    r !== void 0 && (n.className = r);
  }
  return gn.appendChild(n), ur.push(n), Zr.push(t), n;
}
function il(e) {
  const t = ur.indexOf(e);
  ur.splice(t, 1), Zr.splice(t, 1), e.remove();
}
function N0(e) {
  if (e === gn) return;
  if (
    ((gn = e),
    gn === document.body ||
      Zr.reduce((n, r) => (r === "dialog" ? n + 1 : n), 0) < 2)
  ) {
    ur.forEach((n) => {
      n.contains(gn) === !1 && gn.appendChild(n);
    });
    return;
  }
  const t = Zr.lastIndexOf("dialog");
  for (let n = 0; n < ur.length; n++) {
    const r = ur[n];
    (n === t || Zr[n] !== "dialog") &&
      r.contains(gn) === !1 &&
      gn.appendChild(r);
  }
}
const Ks = [];
function UC(e) {
  return Ks.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function A0(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if ((e.hide(t), e.$props.separateClosePopup === !0)) return zs(e);
    } else if (e.__qPortal === !0) {
      const n = zs(e);
      return n?.$options.name === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = zs(e);
  } while (e != null);
}
function HC(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === !0) {
      if ((n--, e.$options.name === "QMenu")) {
        e = A0(e, t);
        continue;
      }
      e.hide(t);
    }
    e = zs(e);
  }
}
const L0 = nt({
  name: "QPortal",
  setup(e, { slots: t }) {
    return () => t.default();
  },
});
function O0(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return !1;
    e = e.parent;
  }
  return !1;
}
function R0(e, t, n, r) {
  const s = de(!1),
    i = de(!1);
  let o = null;
  const a = {},
    l = r === "dialog" && O0(e);
  function c(f) {
    if (f === !0) {
      su(a), (i.value = !0);
      return;
    }
    (i.value = !1),
      s.value === !1 &&
        (l === !1 && o === null && (o = Ui(!1, r)),
        (s.value = !0),
        Ks.push(e.proxy),
        T0(a));
  }
  function u(f) {
    if (((i.value = !1), f !== !0)) return;
    su(a), (s.value = !1);
    const d = Ks.indexOf(e.proxy);
    d !== -1 && Ks.splice(d, 1), o !== null && (il(o), (o = null));
  }
  return (
    Ni(() => {
      u(!0);
    }),
    (e.proxy.__qPortal = !0),
    _r(e.proxy, "contentEl", () => t.value),
    {
      showPortal: c,
      hidePortal: u,
      portalIsActive: s,
      portalIsAccessible: i,
      renderPortal: () =>
        l === !0
          ? n()
          : s.value === !0
          ? [
              q(
                eg,
                {
                  to: o,
                },
                q(L0, n)
              ),
            ]
          : void 0,
    }
  );
}
function ca(e, t) {
  const n = e.style;
  for (const r in t) n[r] = t[r];
}
function M0(e) {
  if (e == null) return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = Zt(e);
  if (t) return t.$el || t;
}
function F0(e, t) {
  if (e == null || e.contains(t) === !0) return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t)) return !0;
  return !1;
}
const zC = [Element, String],
  $0 = [
    null,
    document,
    document.body,
    document.scrollingElement,
    document.documentElement,
  ];
function KC(e, t) {
  let n = M0(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return $0.includes(n) ? window : n;
}
function kh(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function xh(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
function Th(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3],
    s = kh(e);
  if (n <= 0) {
    s !== t && ua(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    const o = i - r,
      a = s + ((t - s) / Math.max(o, n)) * o;
    ua(e, a), a !== t && Th(e, t, n - o, i);
  });
}
function Ph(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3],
    s = xh(e);
  if (n <= 0) {
    s !== t && fa(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    const o = i - r,
      a = s + ((t - s) / Math.max(o, n)) * o;
    fa(e, a), a !== t && Ph(e, t, n - o, i);
  });
}
function ua(e, t) {
  if (e === window) {
    window.scrollTo(
      window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
      t
    );
    return;
  }
  e.scrollTop = t;
}
function fa(e, t) {
  if (e === window) {
    window.scrollTo(
      t,
      window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    );
    return;
  }
  e.scrollLeft = t;
}
function GC(e, t, n) {
  if (n) {
    Th(e, t, n);
    return;
  }
  ua(e, t);
}
function QC(e, t, n) {
  if (n) {
    Ph(e, t, n);
    return;
  }
  fa(e, t);
}
let Os;
function XC() {
  if (Os !== void 0) return Os;
  const e = document.createElement("p"),
    t = document.createElement("div");
  ca(e, {
    width: "100%",
    height: "200px",
  }),
    ca(t, {
      position: "absolute",
      top: "0px",
      left: "0px",
      visibility: "hidden",
      width: "200px",
      height: "150px",
      overflow: "hidden",
    }),
    t.appendChild(e),
    document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let r = e.offsetWidth;
  return n === r && (r = t.clientWidth), t.remove(), (Os = n - r), Os;
}
function D0(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE
    ? !1
    : t
    ? e.scrollHeight > e.clientHeight &&
      (e.classList.contains("scroll") ||
        e.classList.contains("overflow-auto") ||
        ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"]))
    : e.scrollWidth > e.clientWidth &&
      (e.classList.contains("scroll") ||
        e.classList.contains("overflow-auto") ||
        ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
let Lr = 0,
  So,
  Eo,
  Dr,
  Co = !1,
  iu,
  ou,
  au,
  Rn = null;
function q0(e) {
  V0(e) && wt(e);
}
function V0(e) {
  if (
    e.target === document.body ||
    e.target.classList.contains("q-layout__backdrop")
  )
    return !0;
  const t = Up(e),
    n = e.shiftKey && !e.deltaX,
    r = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    s = n || r ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    if (D0(o, r))
      return r
        ? s < 0 && o.scrollTop === 0
          ? !0
          : s > 0 && o.scrollTop + o.clientHeight === o.scrollHeight
        : s < 0 && o.scrollLeft === 0
        ? !0
        : s > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth;
  }
  return !0;
}
function lu(e) {
  e.target === document &&
    (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Rs(e) {
  Co !== !0 &&
    ((Co = !0),
    requestAnimationFrame(() => {
      Co = !1;
      const { height: t } = e.target,
        { clientHeight: n, scrollTop: r } = document.scrollingElement;
      (Dr === void 0 || t !== window.innerHeight) &&
        ((Dr = n - t), (document.scrollingElement.scrollTop = r)),
        r > Dr &&
          (document.scrollingElement.scrollTop -= Math.ceil((r - Dr) / 8));
    }));
}
function cu(e) {
  const t = document.body,
    n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: r, overflowX: s } = window.getComputedStyle(t);
    (So = xh(window)),
      (Eo = kh(window)),
      (iu = t.style.left),
      (ou = t.style.top),
      (au = window.location.href),
      (t.style.left = `-${So}px`),
      (t.style.top = `-${Eo}px`),
      s !== "hidden" &&
        (s === "scroll" || t.scrollWidth > window.innerWidth) &&
        t.classList.add("q-body--force-scrollbar-x"),
      r !== "hidden" &&
        (r === "scroll" || t.scrollHeight > window.innerHeight) &&
        t.classList.add("q-body--force-scrollbar-y"),
      t.classList.add("q-body--prevent-scroll"),
      (document.qScrollPrevented = !0),
      Be.is.ios === !0 &&
        (n === !0
          ? (window.scrollTo(0, 0),
            window.visualViewport.addEventListener(
              "resize",
              Rs,
              ft.passiveCapture
            ),
            window.visualViewport.addEventListener(
              "scroll",
              Rs,
              ft.passiveCapture
            ),
            window.scrollTo(0, 0))
          : window.addEventListener("scroll", lu, ft.passiveCapture));
  }
  Be.is.desktop === !0 &&
    Be.is.mac === !0 &&
    window[`${e}EventListener`]("wheel", q0, ft.notPassive),
    e === "remove" &&
      (Be.is.ios === !0 &&
        (n === !0
          ? (window.visualViewport.removeEventListener(
              "resize",
              Rs,
              ft.passiveCapture
            ),
            window.visualViewport.removeEventListener(
              "scroll",
              Rs,
              ft.passiveCapture
            ))
          : window.removeEventListener("scroll", lu, ft.passiveCapture)),
      t.classList.remove("q-body--prevent-scroll"),
      t.classList.remove("q-body--force-scrollbar-x"),
      t.classList.remove("q-body--force-scrollbar-y"),
      (document.qScrollPrevented = !1),
      (t.style.left = iu),
      (t.style.top = ou),
      window.location.href === au && window.scrollTo(So, Eo),
      (Dr = void 0));
}
function da(e) {
  let t = "add";
  if (e === !0) {
    if ((Lr++, Rn !== null)) {
      clearTimeout(Rn), (Rn = null);
      return;
    }
    if (Lr > 1) return;
  } else {
    if (Lr === 0 || (Lr--, Lr > 0)) return;
    if (((t = "remove"), Be.is.ios === !0 && Be.is.nativeMobile === !0)) {
      Rn !== null && clearTimeout(Rn),
        (Rn = setTimeout(() => {
          cu(t), (Rn = null);
        }, 100));
      return;
    }
  }
  cu(t);
}
function j0() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && ((e = t), da(t));
    },
  };
}
function Lt(e, t) {
  return (e !== void 0 && e()) || t;
}
function YC(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null) return n.slice();
  }
  return t;
}
function Vn(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function W0(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function JC(e, t, n, r, s, i) {
  t.key = r + s;
  const o = q(e, t, n);
  return s === !0 ? pf(o, i()) : o;
}
const Hn = [];
let yr;
function B0(e) {
  yr = e.keyCode === 27;
}
function U0() {
  yr === !0 && (yr = !1);
}
function H0(e) {
  yr === !0 && ((yr = !1), as(e, 27) === !0 && Hn[Hn.length - 1](e));
}
function Ih(e) {
  window[e]("keydown", B0),
    window[e]("blur", U0),
    window[e]("keyup", H0),
    (yr = !1);
}
function z0(e) {
  Be.is.desktop === !0 &&
    (Hn.push(e), Hn.length === 1 && Ih("addEventListener"));
}
function uu(e) {
  const t = Hn.indexOf(e);
  t !== -1 && (Hn.splice(t, 1), Hn.length === 0 && Ih("removeEventListener"));
}
const zn = [];
function Nh(e) {
  zn[zn.length - 1](e);
}
function K0(e) {
  Be.is.desktop === !0 &&
    (zn.push(e),
    zn.length === 1 && document.body.addEventListener("focusin", Nh));
}
function fu(e) {
  const t = zn.indexOf(e);
  t !== -1 &&
    (zn.splice(t, 1),
    zn.length === 0 && document.body.removeEventListener("focusin", Nh));
}
let Ms = 0;
const G0 = {
    standard: "fixed-full flex-center",
    top: "fixed-top justify-center",
    bottom: "fixed-bottom justify-center",
    right: "fixed-right items-center",
    left: "fixed-left items-center",
  },
  du = {
    standard: ["scale", "scale"],
    top: ["slide-down", "slide-up"],
    bottom: ["slide-up", "slide-down"],
    right: ["slide-left", "slide-right"],
    left: ["slide-right", "slide-left"],
  },
  Q0 = nt({
    name: "QDialog",
    inheritAttrs: !1,
    props: {
      ...S0,
      ...k0,
      transitionShow: String,
      transitionHide: String,
      persistent: Boolean,
      autoClose: Boolean,
      allowFocusOutside: Boolean,
      noEscDismiss: Boolean,
      noBackdropDismiss: Boolean,
      noRouteDismiss: Boolean,
      noRefocus: Boolean,
      noFocus: Boolean,
      noShake: Boolean,
      seamless: Boolean,
      maximized: Boolean,
      fullWidth: Boolean,
      fullHeight: Boolean,
      square: Boolean,
      backdropFilter: String,
      position: {
        type: String,
        default: "standard",
        validator: (e) =>
          ["standard", "top", "bottom", "left", "right"].includes(e),
      },
    },
    emits: [...E0, "shake", "click", "escapeKey"],
    setup(e, { slots: t, emit: n, attrs: r }) {
      const s = Ce(),
        i = de(null),
        o = de(!1),
        a = de(!1);
      let l = null,
        c = null,
        u,
        f;
      const d = M(
          () =>
            e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
        ),
        { preventBodyScroll: h } = j0(),
        { registerTimeout: g } = _0(),
        { registerTick: w, removeTick: x } = w0(),
        { transitionProps: y, transitionStyle: m } = x0(
          e,
          () => du[e.position][0],
          () => du[e.position][1]
        ),
        S = M(
          () =>
            m.value +
            (e.backdropFilter !== void 0
              ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`
              : "")
        ),
        {
          showPortal: b,
          hidePortal: P,
          portalIsAccessible: L,
          renderPortal: N,
        } = R0(s, i, Oe, "dialog"),
        { hide: W } = C0({
          showing: o,
          hideOnRouteChange: d,
          handleShow: ee,
          handleHide: J,
          processOnMount: !0,
        }),
        { addToHistory: k, removeFromHistory: O } = b0(o, W, d),
        V = M(
          () =>
            `q-dialog__inner flex no-pointer-events q-dialog__inner--${
              e.maximized === !0 ? "maximized" : "minimized"
            } q-dialog__inner--${e.position} ${G0[e.position]}` +
            (a.value === !0 ? " q-dialog__inner--animating" : "") +
            (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") +
            (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") +
            (e.square === !0 ? " q-dialog__inner--square" : "")
        ),
        C = M(() => o.value === !0 && e.seamless !== !0),
        G = M(() =>
          e.autoClose === !0
            ? {
                onClick: z,
              }
            : {}
        ),
        $ = M(() => [
          `q-dialog fullscreen no-pointer-events q-dialog--${
            C.value === !0 ? "modal" : "seamless"
          }`,
          r.class,
        ]);
      he(
        () => e.maximized,
        (ne) => {
          o.value === !0 && fe(ne);
        }
      ),
        he(C, (ne) => {
          h(ne), ne === !0 ? (K0(Ie), z0(ie)) : (fu(Ie), uu(ie));
        });
      function ee(ne) {
        k(),
          (c =
            e.noRefocus === !1 && document.activeElement !== null
              ? document.activeElement
              : null),
          fe(e.maximized),
          b(),
          (a.value = !0),
          e.noFocus !== !0 ? (document.activeElement?.blur(), w(Q)) : x(),
          g(() => {
            if (s.proxy.$q.platform.is.ios === !0) {
              if (e.seamless !== !0 && document.activeElement) {
                const { top: F, bottom: Y } =
                    document.activeElement.getBoundingClientRect(),
                  { innerHeight: X } = window,
                  te =
                    window.visualViewport !== void 0
                      ? window.visualViewport.height
                      : X;
                F > 0 &&
                  Y > te / 2 &&
                  (document.scrollingElement.scrollTop = Math.min(
                    document.scrollingElement.scrollHeight - te,
                    Y >= X
                      ? 1 / 0
                      : Math.ceil(
                          document.scrollingElement.scrollTop + Y - te / 2
                        )
                  )),
                  document.activeElement.scrollIntoView();
              }
              (f = !0), i.value.click(), (f = !1);
            }
            b(!0), (a.value = !1), n("show", ne);
          }, e.transitionDuration);
      }
      function J(ne) {
        x(),
          O(),
          ce(!0),
          (a.value = !0),
          P(),
          c !== null &&
            ((
              (ne?.type.indexOf("key") === 0
                ? c.closest('[tabindex]:not([tabindex^="-"])')
                : void 0) || c
            ).focus(),
            (c = null)),
          g(() => {
            P(!0), (a.value = !1), n("hide", ne);
          }, e.transitionDuration);
      }
      function Q(ne) {
        sl(() => {
          let F = i.value;
          if (F !== null) {
            if (ne !== void 0) {
              const Y = F.querySelector(ne);
              if (Y !== null) {
                Y.focus({
                  preventScroll: !0,
                });
                return;
              }
            }
            F.contains(document.activeElement) !== !0 &&
              ((F =
                F.querySelector(
                  "[autofocus][tabindex], [data-autofocus][tabindex]"
                ) ||
                F.querySelector(
                  "[autofocus] [tabindex], [data-autofocus] [tabindex]"
                ) ||
                F.querySelector("[autofocus], [data-autofocus]") ||
                F),
              F.focus({
                preventScroll: !0,
              }));
          }
        });
      }
      function K(ne) {
        ne && typeof ne.focus == "function"
          ? ne.focus({
              preventScroll: !0,
            })
          : Q(),
          n("shake");
        const F = i.value;
        F !== null &&
          (F.classList.remove("q-animate--scale"),
          F.classList.add("q-animate--scale"),
          l !== null && clearTimeout(l),
          (l = setTimeout(() => {
            (l = null),
              i.value !== null && (F.classList.remove("q-animate--scale"), Q());
          }, 170)));
      }
      function ie() {
        e.seamless !== !0 &&
          (e.persistent === !0 || e.noEscDismiss === !0
            ? e.maximized !== !0 && e.noShake !== !0 && K()
            : (n("escapeKey"), W()));
      }
      function ce(ne) {
        l !== null && (clearTimeout(l), (l = null)),
          (ne === !0 || o.value === !0) &&
            (fe(!1), e.seamless !== !0 && (h(!1), fu(Ie), uu(ie))),
          ne !== !0 && (c = null);
      }
      function fe(ne) {
        ne === !0
          ? u !== !0 &&
            (Ms < 1 && document.body.classList.add("q-body--dialog"),
            Ms++,
            (u = !0))
          : u === !0 &&
            (Ms < 2 && document.body.classList.remove("q-body--dialog"),
            Ms--,
            (u = !1));
      }
      function z(ne) {
        f !== !0 && (W(ne), n("click", ne));
      }
      function ge(ne) {
        e.persistent !== !0 && e.noBackdropDismiss !== !0
          ? W(ne)
          : e.noShake !== !0 && K();
      }
      function Ie(ne) {
        e.allowFocusOutside !== !0 &&
          L.value === !0 &&
          F0(i.value, ne.target) !== !0 &&
          Q('[tabindex]:not([tabindex="-1"])');
      }
      Object.assign(s.proxy, {
        focus: Q,
        shake: K,
        __updateRefocusTarget(ne) {
          c = ne || null;
        },
      }),
        Tt(ce);
      function Oe() {
        return q(
          "div",
          {
            role: "dialog",
            "aria-modal": C.value === !0 ? "true" : "false",
            ...r,
            class: $.value,
          },
          [
            q(
              is,
              {
                name: "q-transition--fade",
                appear: !0,
              },
              () =>
                C.value === !0
                  ? q("div", {
                      class: "q-dialog__backdrop fixed-full",
                      style: S.value,
                      "aria-hidden": "true",
                      tabindex: -1,
                      onClick: ge,
                    })
                  : null
            ),
            q(is, y.value, () =>
              o.value === !0
                ? q(
                    "div",
                    {
                      ref: i,
                      class: V.value,
                      style: m.value,
                      tabindex: -1,
                      ...G.value,
                    },
                    Lt(t.default)
                  )
                : null
            ),
          ]
        );
      }
      return N;
    },
  }),
  ha = {
    xs: 18,
    sm: 24,
    md: 32,
    lg: 38,
    xl: 46,
  },
  ws = {
    size: String,
  };
function Ss(e, t = ha) {
  return M(() =>
    e.size !== void 0
      ? {
          fontSize: e.size in t ? `${t[e.size]}px` : e.size,
        }
      : null
  );
}
const hu = "0 0 24 24",
  ko = (e) => e,
  xo = (e) => `ionicons ${e}`,
  Ah = {
    "mdi-": (e) => `mdi ${e}`,
    "icon-": ko,
    "bt-": (e) => `bt ${e}`,
    "eva-": (e) => `eva ${e}`,
    "ion-md": xo,
    "ion-ios": xo,
    "ion-logo": xo,
    "iconfont ": ko,
    "ti-": (e) => `themify-icon ${e}`,
    "bi-": (e) => `bootstrap-icons ${e}`,
    "i-": ko,
  },
  Lh = {
    o_: "-outlined",
    r_: "-round",
    s_: "-sharp",
  },
  Oh = {
    sym_o_: "-outlined",
    sym_r_: "-rounded",
    sym_s_: "-sharp",
  },
  X0 = new RegExp("^(" + Object.keys(Ah).join("|") + ")"),
  Y0 = new RegExp("^(" + Object.keys(Lh).join("|") + ")"),
  mu = new RegExp("^(" + Object.keys(Oh).join("|") + ")"),
  J0 = /^[Mm]\s?[-+]?\.?\d/,
  Z0 = /^img:/,
  eS = /^svguse:/,
  tS = /^ion-/,
  nS =
    /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,
  sn = nt({
    name: "QIcon",
    props: {
      ...ws,
      tag: {
        type: String,
        default: "i",
      },
      name: String,
      color: String,
      left: Boolean,
      right: Boolean,
    },
    setup(e, { slots: t }) {
      const {
          proxy: { $q: n },
        } = Ce(),
        r = Ss(e),
        s = M(
          () =>
            "q-icon" +
            (e.left === !0 ? " on-left" : "") +
            (e.right === !0 ? " on-right" : "") +
            (e.color !== void 0 ? ` text-${e.color}` : "")
        ),
        i = M(() => {
          let o,
            a = e.name;
          if (a === "none" || !a)
            return {
              none: !0,
            };
          if (n.iconMapFn !== null) {
            const u = n.iconMapFn(a);
            if (u !== void 0)
              if (u.icon !== void 0) {
                if (((a = u.icon), a === "none" || !a))
                  return {
                    none: !0,
                  };
              } else
                return {
                  cls: u.cls,
                  content: u.content !== void 0 ? u.content : " ",
                };
          }
          if (J0.test(a) === !0) {
            const [u, f = hu] = a.split("|");
            return {
              svg: !0,
              viewBox: f,
              nodes: u.split("&&").map((d) => {
                const [h, g, w] = d.split("@@");
                return q("path", {
                  style: g,
                  d: h,
                  transform: w,
                });
              }),
            };
          }
          if (Z0.test(a) === !0)
            return {
              img: !0,
              src: a.substring(4),
            };
          if (eS.test(a) === !0) {
            const [u, f = hu] = a.split("|");
            return {
              svguse: !0,
              src: u.substring(7),
              viewBox: f,
            };
          }
          let l = " ";
          const c = a.match(X0);
          if (c !== null) o = Ah[c[1]](a);
          else if (nS.test(a) === !0) o = a;
          else if (tS.test(a) === !0)
            o = `ionicons ion-${
              n.platform.is.ios === !0 ? "ios" : "md"
            }${a.substring(3)}`;
          else if (mu.test(a) === !0) {
            o = "notranslate material-symbols";
            const u = a.match(mu);
            u !== null && ((a = a.substring(6)), (o += Oh[u[1]])), (l = a);
          } else {
            o = "notranslate material-icons";
            const u = a.match(Y0);
            u !== null && ((a = a.substring(2)), (o += Lh[u[1]])), (l = a);
          }
          return {
            cls: o,
            content: l,
          };
        });
      return () => {
        const o = {
          class: s.value,
          style: r.value,
          "aria-hidden": "true",
        };
        return i.value.none === !0
          ? q(e.tag, o, Lt(t.default))
          : i.value.img === !0
          ? q(
              e.tag,
              o,
              Vn(t.default, [
                q("img", {
                  src: i.value.src,
                }),
              ])
            )
          : i.value.svg === !0
          ? q(
              e.tag,
              o,
              Vn(t.default, [
                q(
                  "svg",
                  {
                    viewBox: i.value.viewBox || "0 0 24 24",
                  },
                  i.value.nodes
                ),
              ])
            )
          : i.value.svguse === !0
          ? q(
              e.tag,
              o,
              Vn(t.default, [
                q(
                  "svg",
                  {
                    viewBox: i.value.viewBox,
                  },
                  [
                    q("use", {
                      "xlink:href": i.value.src,
                    }),
                  ]
                ),
              ])
            )
          : (i.value.cls !== void 0 && (o.class += " " + i.value.cls),
            q(e.tag, o, Vn(t.default, [i.value.content])));
      };
    },
  }),
  rS = {
    size: {
      type: [String, Number],
      default: "1em",
    },
    color: String,
  };
function sS(e) {
  return {
    cSize: M(() => (e.size in ha ? `${ha[e.size]}px` : e.size)),
    classes: M(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")),
  };
}
const br = nt({
  name: "QSpinner",
  props: {
    ...rS,
    thickness: {
      type: Number,
      default: 5,
    },
  },
  setup(e) {
    const { cSize: t, classes: n } = sS(e);
    return () =>
      q(
        "svg",
        {
          class: n.value + " q-spinner-mat",
          width: t.value,
          height: t.value,
          viewBox: "25 25 50 50",
        },
        [
          q("circle", {
            class: "path",
            cx: "50",
            cy: "50",
            r: "20",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": e.thickness,
            "stroke-miterlimit": "10",
          }),
        ]
      );
  },
});
function iS(e, t = 250) {
  let n = !1,
    r;
  return function () {
    return (
      n === !1 &&
        ((n = !0),
        setTimeout(() => {
          n = !1;
        }, t),
        (r = e.apply(this, arguments))),
      r
    );
  };
}
function gu(e, t, n, r) {
  n.modifiers.stop === !0 && fi(e);
  const s = n.modifiers.color;
  let i = n.modifiers.center;
  i = i === !0 || r === !0;
  const o = document.createElement("span"),
    a = document.createElement("span"),
    l = Bp(e),
    { left: c, top: u, width: f, height: d } = t.getBoundingClientRect(),
    h = Math.sqrt(f * f + d * d),
    g = h / 2,
    w = `${(f - h) / 2}px`,
    x = i ? w : `${l.left - c - g}px`,
    y = `${(d - h) / 2}px`,
    m = i ? y : `${l.top - u - g}px`;
  (a.className = "q-ripple__inner"),
    ca(a, {
      height: `${h}px`,
      width: `${h}px`,
      transform: `translate3d(${x},${m},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (o.className = `q-ripple${s ? " text-" + s : ""}`),
    o.setAttribute("dir", "ltr"),
    o.appendChild(a),
    t.appendChild(o);
  const S = () => {
    o.remove(), clearTimeout(b);
  };
  n.abort.push(S);
  let b = setTimeout(() => {
    a.classList.add("q-ripple__inner--enter"),
      (a.style.transform = `translate3d(${w},${y},0) scale3d(1,1,1)`),
      (a.style.opacity = 0.2),
      (b = setTimeout(() => {
        a.classList.remove("q-ripple__inner--enter"),
          a.classList.add("q-ripple__inner--leave"),
          (a.style.opacity = 0),
          (b = setTimeout(() => {
            o.remove(), n.abort.splice(n.abort.indexOf(S), 1);
          }, 275));
      }, 250));
  }, 50);
}
function pu(e, { modifiers: t, value: n, arg: r }) {
  const s = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: s.early === !0,
    stop: s.stop === !0,
    center: s.center === !0,
    color: s.color || r,
    keyCodes: [].concat(s.keyCodes || 13),
  };
}
const oS = Wp({
    name: "ripple",
    beforeMount(e, t) {
      const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
      if (n.ripple === !1) return;
      const r = {
        cfg: n,
        enabled: t.value !== !1,
        modifiers: {},
        abort: [],
        start(s) {
          r.enabled === !0 &&
            s.qSkipRipple !== !0 &&
            s.type === (r.modifiers.early === !0 ? "pointerdown" : "click") &&
            gu(s, e, r, s.qKeyEvent === !0);
        },
        keystart: iS((s) => {
          r.enabled === !0 &&
            s.qSkipRipple !== !0 &&
            as(s, r.modifiers.keyCodes) === !0 &&
            s.type === `key${r.modifiers.early === !0 ? "down" : "up"}` &&
            gu(s, e, r, !0);
        }, 300),
      };
      pu(r, t),
        (e.__qripple = r),
        Hp(r, "main", [
          [e, "pointerdown", "start", "passive"],
          [e, "click", "start", "passive"],
          [e, "keydown", "keystart", "passive"],
          [e, "keyup", "keystart", "passive"],
        ]);
    },
    updated(e, t) {
      if (t.oldValue !== t.value) {
        const n = e.__qripple;
        n !== void 0 &&
          ((n.enabled = t.value !== !1),
          n.enabled === !0 && Object(t.value) === t.value && pu(n, t));
      }
    },
    beforeUnmount(e) {
      const t = e.__qripple;
      t !== void 0 &&
        (t.abort.forEach((n) => {
          n();
        }),
        zp(t, "main"),
        delete e._qripple);
    },
  }),
  Rh = {
    left: "start",
    center: "center",
    right: "end",
    between: "between",
    around: "around",
    evenly: "evenly",
    stretch: "stretch",
  },
  aS = Object.keys(Rh),
  Mh = {
    align: {
      type: String,
      validator: (e) => aS.includes(e),
    },
  };
function Fh(e) {
  return M(() => {
    const t =
      e.align === void 0 ? (e.vertical === !0 ? "stretch" : "left") : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${Rh[t]}`;
  });
}
function vu(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
function yu(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function lS(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (
      Array.isArray(s) === !1 ||
      s.length !== r.length ||
      r.some((i, o) => i !== s[o])
    )
      return !1;
  }
  return !0;
}
function bu(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function cS(e, t) {
  return Array.isArray(e) === !0
    ? bu(e, t)
    : Array.isArray(t) === !0
    ? bu(t, e)
    : e === t;
}
function uS(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (cS(e[n], t[n]) === !1) return !1;
  return !0;
}
const $h = {
    to: [String, Object],
    replace: Boolean,
    href: String,
    target: String,
    disable: Boolean,
  },
  ZC = {
    ...$h,
    exact: Boolean,
    activeClass: {
      type: String,
      default: "q-router-link--active",
    },
    exactActiveClass: {
      type: String,
      default: "q-router-link--exact-active",
    },
  };
function fS({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = Ce(),
    { props: r, proxy: s, emit: i } = n,
    o = Sh(n),
    a = M(() => r.disable !== !0 && r.href !== void 0),
    l = M(
      t === !0
        ? () =>
            o === !0 &&
            r.disable !== !0 &&
            a.value !== !0 &&
            r.to !== void 0 &&
            r.to !== null &&
            r.to !== ""
        : () =>
            o === !0 &&
            a.value !== !0 &&
            r.to !== void 0 &&
            r.to !== null &&
            r.to !== ""
    ),
    c = M(() => (l.value === !0 ? m(r.to) : null)),
    u = M(() => c.value !== null),
    f = M(() => a.value === !0 || u.value === !0),
    d = M(() => (r.type === "a" || f.value === !0 ? "a" : r.tag || e || "div")),
    h = M(() =>
      a.value === !0
        ? {
            href: r.href,
            target: r.target,
          }
        : u.value === !0
        ? {
            href: c.value.href,
            target: r.target,
          }
        : {}
    ),
    g = M(() => {
      if (u.value === !1) return -1;
      const { matched: P } = c.value,
        { length: L } = P,
        N = P[L - 1];
      if (N === void 0) return -1;
      const W = s.$route.matched;
      if (W.length === 0) return -1;
      const k = W.findIndex(yu.bind(null, N));
      if (k !== -1) return k;
      const O = vu(P[L - 2]);
      return L > 1 && vu(N) === O && W[W.length - 1].path !== O
        ? W.findIndex(yu.bind(null, P[L - 2]))
        : k;
    }),
    w = M(
      () =>
        u.value === !0 && g.value !== -1 && lS(s.$route.params, c.value.params)
    ),
    x = M(
      () =>
        w.value === !0 &&
        g.value === s.$route.matched.length - 1 &&
        uS(s.$route.params, c.value.params)
    ),
    y = M(() =>
      u.value === !0
        ? x.value === !0
          ? ` ${r.exactActiveClass} ${r.activeClass}`
          : r.exact === !0
          ? ""
          : w.value === !0
          ? ` ${r.activeClass}`
          : ""
        : ""
    );
  function m(P) {
    try {
      return s.$router.resolve(P);
    } catch {}
    return null;
  }
  function S(
    P,
    { returnRouterError: L, to: N = r.to, replace: W = r.replace } = {}
  ) {
    if (r.disable === !0) return P.preventDefault(), Promise.resolve(!1);
    if (
      P.metaKey ||
      P.altKey ||
      P.ctrlKey ||
      P.shiftKey ||
      (P.button !== void 0 && P.button !== 0) ||
      r.target === "_blank"
    )
      return Promise.resolve(!1);
    P.preventDefault();
    const k = s.$router[W === !0 ? "replace" : "push"](N);
    return L === !0 ? k : k.then(() => {}).catch(() => {});
  }
  function b(P) {
    if (u.value === !0) {
      const L = (N) => S(P, N);
      i("click", P, L), P.defaultPrevented !== !0 && L();
    } else i("click", P);
  }
  return {
    hasRouterLink: u,
    hasHrefLink: a,
    hasLink: f,
    linkTag: d,
    resolvedLink: c,
    linkIsActive: w,
    linkIsExactActive: x,
    linkClass: y,
    linkAttrs: h,
    getLink: m,
    navigateToRouterLink: S,
    navigateOnClick: b,
  };
}
const _u = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  dS = {
    xs: 8,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 24,
  },
  hS = ["button", "submit", "reset"],
  mS = /[^\s]\/[^\s]/,
  gS = ["flat", "outline", "push", "unelevated"];
function Dh(e, t) {
  return e.flat === !0
    ? "flat"
    : e.outline === !0
    ? "outline"
    : e.push === !0
    ? "push"
    : e.unelevated === !0
    ? "unelevated"
    : t;
}
function ek(e) {
  const t = Dh(e);
  return t !== void 0
    ? {
        [t]: !0,
      }
    : {};
}
const pS = {
    ...ws,
    ...$h,
    type: {
      type: String,
      default: "button",
    },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...gS.reduce((e, t) => (e[t] = Boolean) && e, {}),
    square: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: {
      type: [Boolean, Object],
      default: !0,
    },
    align: {
      ...Mh.align,
      default: "center",
    },
    stack: Boolean,
    stretch: Boolean,
    loading: {
      type: Boolean,
      default: null,
    },
    disable: Boolean,
  },
  vS = {
    ...pS,
    round: Boolean,
  };
function yS(e) {
  const t = Ss(e, dS),
    n = Fh(e),
    {
      hasRouterLink: r,
      hasLink: s,
      linkTag: i,
      linkAttrs: o,
      navigateOnClick: a,
    } = fS({
      fallbackTag: "button",
    }),
    l = M(() => {
      const x = e.fab === !1 && e.fabMini === !1 ? t.value : {};
      return e.padding !== void 0
        ? Object.assign({}, x, {
            padding: e.padding
              .split(/\s+/)
              .map((y) => (y in _u ? _u[y] + "px" : y))
              .join(" "),
            minWidth: "0",
            minHeight: "0",
          })
        : x;
    }),
    c = M(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    u = M(() => e.disable !== !0 && e.loading !== !0),
    f = M(() => (u.value === !0 ? e.tabindex || 0 : -1)),
    d = M(() => Dh(e, "standard")),
    h = M(() => {
      const x = {
        tabindex: f.value,
      };
      return (
        s.value === !0
          ? Object.assign(x, o.value)
          : hS.includes(e.type) === !0 && (x.type = e.type),
        i.value === "a"
          ? (e.disable === !0
              ? (x["aria-disabled"] = "true")
              : x.href === void 0 && (x.role = "button"),
            r.value !== !0 && mS.test(e.type) === !0 && (x.type = e.type))
          : e.disable === !0 &&
            ((x.disabled = ""), (x["aria-disabled"] = "true")),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(x, {
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": e.percentage,
          }),
        x
      );
    }),
    g = M(() => {
      let x;
      e.color !== void 0
        ? e.flat === !0 || e.outline === !0
          ? (x = `text-${e.textColor || e.color}`)
          : (x = `bg-${e.color} text-${e.textColor || "white"}`)
        : e.textColor && (x = `text-${e.textColor}`);
      const y =
        e.round === !0
          ? "round"
          : `rectangle${
              c.value === !0
                ? " q-btn--rounded"
                : e.square === !0
                ? " q-btn--square"
                : ""
            }`;
      return (
        `q-btn--${d.value} q-btn--${y}` +
        (x !== void 0 ? " " + x : "") +
        (u.value === !0
          ? " q-btn--actionable q-focusable q-hoverable"
          : e.disable === !0
          ? " disabled"
          : "") +
        (e.fab === !0
          ? " q-btn--fab"
          : e.fabMini === !0
          ? " q-btn--fab-mini"
          : "") +
        (e.noCaps === !0 ? " q-btn--no-uppercase" : "") +
        (e.dense === !0 ? " q-btn--dense" : "") +
        (e.stretch === !0 ? " no-border-radius self-stretch" : "") +
        (e.glossy === !0 ? " glossy" : "") +
        (e.square ? " q-btn--square" : "")
      );
    }),
    w = M(
      () =>
        n.value +
        (e.stack === !0 ? " column" : " row") +
        (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") +
        (e.loading === !0 ? " q-btn__content--hidden" : "")
    );
  return {
    classes: g,
    style: l,
    innerClasses: w,
    attributes: h,
    hasLink: s,
    linkTag: i,
    navigateOnClick: a,
    isActionable: u,
  };
}
const { passiveCapture: bt } = ft;
let Zn = null,
  er = null,
  tr = null;
const ma = nt({
    name: "QBtn",
    props: {
      ...vS,
      percentage: Number,
      darkPercentage: Boolean,
      onTouchstart: [Function, Array],
    },
    emits: ["click", "keydown", "mousedown", "keyup"],
    setup(e, { slots: t, emit: n }) {
      const { proxy: r } = Ce(),
        {
          classes: s,
          style: i,
          innerClasses: o,
          attributes: a,
          hasLink: l,
          linkTag: c,
          navigateOnClick: u,
          isActionable: f,
        } = yS(e),
        d = de(null),
        h = de(null);
      let g = null,
        w,
        x = null;
      const y = M(
          () => e.label !== void 0 && e.label !== null && e.label !== ""
        ),
        m = M(() =>
          e.disable === !0 || e.ripple === !1
            ? !1
            : {
                keyCodes: l.value === !0 ? [13, 32] : [13],
                ...(e.ripple === !0 ? {} : e.ripple),
              }
        ),
        S = M(() => ({
          center: e.round,
        })),
        b = M(() => {
          const $ = Math.max(0, Math.min(100, e.percentage));
          return $ > 0
            ? {
                transition: "transform 0.6s",
                transform: `translateX(${$ - 100}%)`,
              }
            : {};
        }),
        P = M(() => {
          if (e.loading === !0)
            return {
              onMousedown: G,
              onTouchstart: G,
              onClick: G,
              onKeydown: G,
              onKeyup: G,
            };
          if (f.value === !0) {
            const $ = {
              onClick: N,
              onKeydown: W,
              onMousedown: O,
            };
            if (r.$q.platform.has.touch === !0) {
              const ee = e.onTouchstart !== void 0 ? "" : "Passive";
              $[`onTouchstart${ee}`] = k;
            }
            return $;
          }
          return {
            onClick: wt,
          };
        }),
        L = M(() => ({
          ref: d,
          class: "q-btn q-btn-item non-selectable no-outline " + s.value,
          style: i.value,
          ...a.value,
          ...P.value,
        }));
      function N($) {
        if (d.value !== null) {
          if ($ !== void 0) {
            if ($.defaultPrevented === !0) return;
            const ee = document.activeElement;
            if (
              e.type === "submit" &&
              ee !== document.body &&
              d.value.contains(ee) === !1 &&
              ee.contains(d.value) === !1
            ) {
              $.qAvoidFocus !== !0 && d.value.focus();
              const J = () => {
                document.removeEventListener("keydown", wt, !0),
                  document.removeEventListener("keyup", J, bt),
                  d.value?.removeEventListener("blur", J, bt);
              };
              document.addEventListener("keydown", wt, !0),
                document.addEventListener("keyup", J, bt),
                d.value.addEventListener("blur", J, bt);
            }
          }
          u($);
        }
      }
      function W($) {
        d.value !== null &&
          (n("keydown", $),
          as($, [13, 32]) === !0 &&
            er !== d.value &&
            (er !== null && C(),
            $.defaultPrevented !== !0 &&
              ($.qAvoidFocus !== !0 && d.value.focus(),
              (er = d.value),
              d.value.classList.add("q-btn--active"),
              document.addEventListener("keyup", V, !0),
              d.value.addEventListener("blur", V, bt)),
            wt($)));
      }
      function k($) {
        d.value !== null &&
          (n("touchstart", $),
          $.defaultPrevented !== !0 &&
            (Zn !== d.value &&
              (Zn !== null && C(),
              (Zn = d.value),
              (g = $.target),
              g.addEventListener("touchcancel", V, bt),
              g.addEventListener("touchend", V, bt)),
            (w = !0),
            x !== null && clearTimeout(x),
            (x = setTimeout(() => {
              (x = null), (w = !1);
            }, 200))));
      }
      function O($) {
        d.value !== null &&
          (($.qSkipRipple = w === !0),
          n("mousedown", $),
          $.defaultPrevented !== !0 &&
            tr !== d.value &&
            (tr !== null && C(),
            (tr = d.value),
            d.value.classList.add("q-btn--active"),
            document.addEventListener("mouseup", V, bt)));
      }
      function V($) {
        if (
          d.value !== null &&
          !($?.type === "blur" && document.activeElement === d.value)
        ) {
          if ($?.type === "keyup") {
            if (er === d.value && as($, [13, 32]) === !0) {
              const ee = new MouseEvent("click", $);
              (ee.qKeyEvent = !0),
                $.defaultPrevented === !0 && Sn(ee),
                $.cancelBubble === !0 && fi(ee),
                d.value.dispatchEvent(ee),
                wt($),
                ($.qKeyEvent = !0);
            }
            n("keyup", $);
          }
          C();
        }
      }
      function C($) {
        const ee = h.value;
        $ !== !0 &&
          (Zn === d.value || tr === d.value) &&
          ee !== null &&
          ee !== document.activeElement &&
          (ee.setAttribute("tabindex", -1), ee.focus()),
          Zn === d.value &&
            (g !== null &&
              (g.removeEventListener("touchcancel", V, bt),
              g.removeEventListener("touchend", V, bt)),
            (Zn = g = null)),
          tr === d.value &&
            (document.removeEventListener("mouseup", V, bt), (tr = null)),
          er === d.value &&
            (document.removeEventListener("keyup", V, !0),
            d.value?.removeEventListener("blur", V, bt),
            (er = null)),
          d.value?.classList.remove("q-btn--active");
      }
      function G($) {
        wt($), ($.qSkipRipple = !0);
      }
      return (
        Tt(() => {
          C(!0);
        }),
        Object.assign(r, {
          click: ($) => {
            f.value === !0 && N($);
          },
        }),
        () => {
          let $ = [];
          e.icon !== void 0 &&
            $.push(
              q(sn, {
                name: e.icon,
                left: e.stack !== !0 && y.value === !0,
                role: "img",
              })
            ),
            y.value === !0 &&
              $.push(
                q(
                  "span",
                  {
                    class: "block",
                  },
                  [e.label]
                )
              ),
            ($ = Vn(t.default, $)),
            e.iconRight !== void 0 &&
              e.round === !1 &&
              $.push(
                q(sn, {
                  name: e.iconRight,
                  right: e.stack !== !0 && y.value === !0,
                  role: "img",
                })
              );
          const ee = [
            q("span", {
              class: "q-focus-helper",
              ref: h,
            }),
          ];
          return (
            e.loading === !0 &&
              e.percentage !== void 0 &&
              ee.push(
                q(
                  "span",
                  {
                    class:
                      "q-btn__progress absolute-full overflow-hidden" +
                      (e.darkPercentage === !0 ? " q-btn__progress--dark" : ""),
                  },
                  [
                    q("span", {
                      class: "q-btn__progress-indicator fit block",
                      style: b.value,
                    }),
                  ]
                )
              ),
            ee.push(
              q(
                "span",
                {
                  class:
                    "q-btn__content text-center col items-center q-anchor--skip " +
                    o.value,
                },
                $
              )
            ),
            e.loading !== null &&
              ee.push(
                q(
                  is,
                  {
                    name: "q-transition--fade",
                  },
                  () =>
                    e.loading === !0
                      ? [
                          q(
                            "span",
                            {
                              key: "loading",
                              class: "absolute-full flex flex-center",
                            },
                            t.loading !== void 0 ? t.loading() : [q(br)]
                          ),
                        ]
                      : null
                )
              ),
            pf(q(c.value, L.value, ee), [[oS, m.value, void 0, S.value]])
          );
        }
      );
    },
  }),
  Qn = {
    dark: {
      type: Boolean,
      default: null,
    },
  };
function Xn(e, t) {
  return M(() => (e.dark === null ? t.dark.isActive : e.dark));
}
const bS = nt({
    name: "QCard",
    props: {
      ...Qn,
      tag: {
        type: String,
        default: "div",
      },
      square: Boolean,
      flat: Boolean,
      bordered: Boolean,
    },
    setup(e, { slots: t }) {
      const {
          proxy: { $q: n },
        } = Ce(),
        r = Xn(e, n),
        s = M(
          () =>
            "q-card" +
            (r.value === !0 ? " q-card--dark q-dark" : "") +
            (e.bordered === !0 ? " q-card--bordered" : "") +
            (e.square === !0 ? " q-card--square no-border-radius" : "") +
            (e.flat === !0 ? " q-card--flat no-shadow" : "")
        );
      return () =>
        q(
          e.tag,
          {
            class: s.value,
          },
          Lt(t.default)
        );
    },
  }),
  Or = nt({
    name: "QCardSection",
    props: {
      tag: {
        type: String,
        default: "div",
      },
      horizontal: Boolean,
    },
    setup(e, { slots: t }) {
      const n = M(
        () =>
          `q-card__section q-card__section--${
            e.horizontal === !0 ? "horiz row no-wrap" : "vert"
          }`
      );
      return () =>
        q(
          e.tag,
          {
            class: n.value,
          },
          Lt(t.default)
        );
    },
  }),
  _S = nt({
    name: "QCardActions",
    props: {
      ...Mh,
      vertical: Boolean,
    },
    setup(e, { slots: t }) {
      const n = Fh(e),
        r = M(
          () =>
            `q-card__actions ${n.value} q-card__actions--${
              e.vertical === !0 ? "vert column" : "horiz row"
            }`
        );
      return () =>
        q(
          "div",
          {
            class: r.value,
          },
          Lt(t.default)
        );
    },
  }),
  wS = {
    true: "inset",
    item: "item-inset",
    "item-thumbnail": "item-thumbnail-inset",
  },
  To = {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  },
  wu = nt({
    name: "QSeparator",
    props: {
      ...Qn,
      spaced: [Boolean, String],
      inset: [Boolean, String],
      vertical: Boolean,
      color: String,
      size: String,
    },
    setup(e) {
      const t = Ce(),
        n = Xn(e, t.proxy.$q),
        r = M(() => (e.vertical === !0 ? "vertical" : "horizontal")),
        s = M(() => ` q-separator--${r.value}`),
        i = M(() => (e.inset !== !1 ? `${s.value}-${wS[e.inset]}` : "")),
        o = M(
          () =>
            `q-separator${s.value}${i.value}` +
            (e.color !== void 0 ? ` bg-${e.color}` : "") +
            (n.value === !0 ? " q-separator--dark" : "")
        ),
        a = M(() => {
          const l = {};
          if (
            (e.size !== void 0 &&
              (l[e.vertical === !0 ? "width" : "height"] = e.size),
            e.spaced !== !1)
          ) {
            const c =
                e.spaced === !0
                  ? `${To.md}px`
                  : e.spaced in To
                  ? `${To[e.spaced]}px`
                  : e.spaced,
              u = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
            l[`margin${u[0]}`] = l[`margin${u[1]}`] = c;
          }
          return l;
        });
      return () =>
        q("hr", {
          class: o.value,
          style: a.value,
          "aria-orientation": r.value,
        });
    },
  });
let Po,
  Fs = 0;
const Ye = new Array(256);
for (let e = 0; e < 256; e++) Ye[e] = (e + 256).toString(16).substring(1);
const SS = (() => {
    const e =
      typeof crypto < "u"
        ? crypto
        : typeof window < "u"
        ? window.crypto || window.msCrypto
        : void 0;
    if (e !== void 0) {
      if (e.randomBytes !== void 0) return e.randomBytes;
      if (e.getRandomValues !== void 0)
        return (t) => {
          const n = new Uint8Array(t);
          return e.getRandomValues(n), n;
        };
    }
    return (t) => {
      const n = [];
      for (let r = t; r > 0; r--) n.push(Math.floor(Math.random() * 256));
      return n;
    };
  })(),
  Su = 4096;
function ga() {
  (Po === void 0 || Fs + 16 > Su) && ((Fs = 0), (Po = SS(Su)));
  const e = Array.prototype.slice.call(Po, Fs, (Fs += 16));
  return (
    (e[6] = (e[6] & 15) | 64),
    (e[8] = (e[8] & 63) | 128),
    Ye[e[0]] +
      Ye[e[1]] +
      Ye[e[2]] +
      Ye[e[3]] +
      "-" +
      Ye[e[4]] +
      Ye[e[5]] +
      "-" +
      Ye[e[6]] +
      Ye[e[7]] +
      "-" +
      Ye[e[8]] +
      Ye[e[9]] +
      "-" +
      Ye[e[10]] +
      Ye[e[11]] +
      Ye[e[12]] +
      Ye[e[13]] +
      Ye[e[14]] +
      Ye[e[15]]
  );
}
function ES(e) {
  return e ?? null;
}
function Eu(e, t) {
  return e ?? (t === !0 ? `f_${ga()}` : null);
}
function CS({ getValue: e, required: t = !0 } = {}) {
  if (xn.value === !0) {
    const n = de(e !== void 0 ? ES(e()) : null);
    return (
      t === !0 &&
        n.value === null &&
        xt(() => {
          n.value = `f_${ga()}`;
        }),
      e !== void 0 &&
        he(e, (r) => {
          n.value = Eu(r, t);
        }),
      n
    );
  }
  return e !== void 0 ? M(() => Eu(e(), t)) : de(`f_${ga()}`);
}
const Cu = /^on[A-Z]/;
function kS() {
  const { attrs: e, vnode: t } = Ce(),
    n = {
      listeners: de({}),
      attributes: de({}),
    };
  function r() {
    const s = {},
      i = {};
    for (const o in e)
      o !== "class" && o !== "style" && Cu.test(o) === !1 && (s[o] = e[o]);
    for (const o in t.props) Cu.test(o) === !0 && (i[o] = t.props[o]);
    (n.attributes.value = s), (n.listeners.value = i);
  }
  return Pf(r), r(), n;
}
function xS({ validate: e, resetValidation: t, requiresQForm: n }) {
  const r = ut(iv, !1);
  if (r !== !1) {
    const { props: s, proxy: i } = Ce();
    Object.assign(i, {
      validate: e,
      resetValidation: t,
    }),
      he(
        () => s.disable,
        (o) => {
          o === !0
            ? (typeof t == "function" && t(), r.unbindComponent(i))
            : r.bindComponent(i);
        }
      ),
      xt(() => {
        s.disable !== !0 && r.bindComponent(i);
      }),
      Tt(() => {
        s.disable !== !0 && r.unbindComponent(i);
      });
  } else n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const ku = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
  xu = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
  Tu = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  $s =
    /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
  Ds =
    /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
  Io = {
    date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    email: (e) =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e
      ),
    hexColor: (e) => ku.test(e),
    hexaColor: (e) => xu.test(e),
    hexOrHexaColor: (e) => Tu.test(e),
    rgbColor: (e) => $s.test(e),
    rgbaColor: (e) => Ds.test(e),
    rgbOrRgbaColor: (e) => $s.test(e) || Ds.test(e),
    hexOrRgbColor: (e) => ku.test(e) || $s.test(e),
    hexaOrRgbaColor: (e) => xu.test(e) || Ds.test(e),
    anyColor: (e) => Tu.test(e) || $s.test(e) || Ds.test(e),
  },
  TS = [!0, !1, "ondemand"],
  PS = {
    modelValue: {},
    error: {
      type: Boolean,
      default: null,
    },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    reactiveRules: Boolean,
    lazyRules: {
      type: [Boolean, String],
      default: !1,
      validator: (e) => TS.includes(e),
    },
  };
function IS(e, t) {
  const { props: n, proxy: r } = Ce(),
    s = de(!1),
    i = de(null),
    o = de(!1);
  xS({
    validate: w,
    resetValidation: g,
  });
  let a = 0,
    l;
  const c = M(
      () => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0
    ),
    u = M(() => n.disable !== !0 && c.value === !0 && t.value === !1),
    f = M(() => n.error === !0 || s.value === !0),
    d = M(() =>
      typeof n.errorMessage == "string" && n.errorMessage.length !== 0
        ? n.errorMessage
        : i.value
    );
  he(
    () => n.modelValue,
    () => {
      (o.value = !0), u.value === !0 && n.lazyRules === !1 && x();
    }
  );
  function h() {
    n.lazyRules !== "ondemand" && u.value === !0 && o.value === !0 && x();
  }
  he(
    () => n.reactiveRules,
    (y) => {
      y === !0
        ? l === void 0 &&
          (l = he(() => n.rules, h, {
            immediate: !0,
            deep: !0,
          }))
        : l !== void 0 && (l(), (l = void 0));
    },
    {
      immediate: !0,
    }
  ),
    he(() => n.lazyRules, h),
    he(e, (y) => {
      y === !0
        ? (o.value = !0)
        : u.value === !0 && n.lazyRules !== "ondemand" && x();
    });
  function g() {
    a++,
      (t.value = !1),
      (o.value = !1),
      (s.value = !1),
      (i.value = null),
      x.cancel();
  }
  function w(y = n.modelValue) {
    if (n.disable === !0 || c.value === !1) return !0;
    const m = ++a,
      S =
        t.value !== !0
          ? () => {
              o.value = !0;
            }
          : () => {},
      b = (L, N) => {
        L === !0 && S(), (s.value = L), (i.value = N || null), (t.value = !1);
      },
      P = [];
    for (let L = 0; L < n.rules.length; L++) {
      const N = n.rules[L];
      let W;
      if (
        (typeof N == "function"
          ? (W = N(y, Io))
          : typeof N == "string" && Io[N] !== void 0 && (W = Io[N](y)),
        W === !1 || typeof W == "string")
      )
        return b(!0, W), !1;
      W !== !0 && W !== void 0 && P.push(W);
    }
    return P.length === 0
      ? (b(!1), !0)
      : ((t.value = !0),
        Promise.all(P).then(
          (L) => {
            if (L === void 0 || Array.isArray(L) === !1 || L.length === 0)
              return m === a && b(!1), !0;
            const N = L.find((W) => W === !1 || typeof W == "string");
            return m === a && b(N !== void 0, N), N === void 0;
          },
          (L) => (m === a && (console.error(L), b(!0)), !1)
        ));
  }
  const x = ad(w, 0);
  return (
    Tt(() => {
      l?.(), x.cancel();
    }),
    Object.assign(r, {
      resetValidation: g,
      validate: w,
    }),
    _r(r, "hasError", () => f.value),
    {
      isDirtyModel: o,
      hasRules: c,
      hasError: f,
      errorMessage: d,
      validate: w,
      resetValidation: g,
    }
  );
}
function pa(e) {
  return e != null && ("" + e).length !== 0;
}
const NS = {
    ...Qn,
    ...PS,
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    labelColor: String,
    color: String,
    bgColor: String,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    labelSlot: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    for: String,
  },
  AS = {
    ...NS,
    maxlength: [Number, String],
  },
  LS = ["update:modelValue", "clear", "focus", "blur"];
function OS({ requiredForAttr: e = !0, tagProp: t, changeEvent: n = !1 } = {}) {
  const { props: r, proxy: s } = Ce(),
    i = Xn(r, s.$q),
    o = CS({
      required: e,
      getValue: () => r.for,
    });
  return {
    requiredForAttr: e,
    changeEvent: n,
    tag:
      t === !0
        ? M(() => r.tag)
        : {
            value: "label",
          },
    isDark: i,
    editable: M(() => r.disable !== !0 && r.readonly !== !0),
    innerLoading: de(!1),
    focused: de(!1),
    hasPopupOpen: !1,
    splitAttrs: kS(),
    targetUid: o,
    rootRef: de(null),
    targetRef: de(null),
    controlRef: de(null),
  };
}
function RS(e) {
  const { props: t, emit: n, slots: r, attrs: s, proxy: i } = Ce(),
    { $q: o } = i;
  let a = null;
  e.hasValue === void 0 && (e.hasValue = M(() => pa(t.modelValue))),
    e.emitValue === void 0 &&
      (e.emitValue = (K) => {
        n("update:modelValue", K);
      }),
    e.controlEvents === void 0 &&
      (e.controlEvents = {
        onFocusin: k,
        onFocusout: O,
      }),
    Object.assign(e, {
      clearValue: V,
      onControlFocusin: k,
      onControlFocusout: O,
      focus: N,
    }),
    e.computedCounter === void 0 &&
      (e.computedCounter = M(() => {
        if (t.counter !== !1) {
          const K =
              typeof t.modelValue == "string" || typeof t.modelValue == "number"
                ? ("" + t.modelValue).length
                : Array.isArray(t.modelValue) === !0
                ? t.modelValue.length
                : 0,
            ie = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
          return K + (ie !== void 0 ? " / " + ie : "");
        }
      }));
  const {
      isDirtyModel: l,
      hasRules: c,
      hasError: u,
      errorMessage: f,
      resetValidation: d,
    } = IS(e.focused, e.innerLoading),
    h =
      e.floatingLabel !== void 0
        ? M(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.floatingLabel.value === !0
          )
        : M(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.hasValue.value === !0
          ),
    g = M(
      () =>
        t.bottomSlots === !0 ||
        t.hint !== void 0 ||
        c.value === !0 ||
        t.counter === !0 ||
        t.error !== null
    ),
    w = M(() =>
      t.filled === !0
        ? "filled"
        : t.outlined === !0
        ? "outlined"
        : t.borderless === !0
        ? "borderless"
        : t.standout
        ? "standout"
        : "standard"
    ),
    x = M(
      () =>
        `q-field row no-wrap items-start q-field--${w.value}` +
        (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") +
        (t.rounded === !0 ? " q-field--rounded" : "") +
        (t.square === !0 ? " q-field--square" : "") +
        (h.value === !0 ? " q-field--float" : "") +
        (m.value === !0 ? " q-field--labeled" : "") +
        (t.dense === !0 ? " q-field--dense" : "") +
        (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") +
        (e.isDark.value === !0 ? " q-field--dark" : "") +
        (e.getControl === void 0 ? " q-field--auto-height" : "") +
        (e.focused.value === !0 ? " q-field--focused" : "") +
        (u.value === !0 ? " q-field--error" : "") +
        (u.value === !0 || e.focused.value === !0
          ? " q-field--highlighted"
          : "") +
        (t.hideBottomSpace !== !0 && g.value === !0
          ? " q-field--with-bottom"
          : "") +
        (t.disable === !0
          ? " q-field--disabled"
          : t.readonly === !0
          ? " q-field--readonly"
          : "")
    ),
    y = M(
      () =>
        "q-field__control relative-position row no-wrap" +
        (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") +
        (u.value === !0
          ? " text-negative"
          : typeof t.standout == "string" &&
            t.standout.length !== 0 &&
            e.focused.value === !0
          ? ` ${t.standout}`
          : t.color !== void 0
          ? ` text-${t.color}`
          : "")
    ),
    m = M(() => t.labelSlot === !0 || t.label !== void 0),
    S = M(
      () =>
        "q-field__label no-pointer-events absolute ellipsis" +
        (t.labelColor !== void 0 && u.value !== !0
          ? ` text-${t.labelColor}`
          : "")
    ),
    b = M(() => ({
      id: e.targetUid.value,
      editable: e.editable.value,
      focused: e.focused.value,
      floatingLabel: h.value,
      modelValue: t.modelValue,
      emitValue: e.emitValue,
    })),
    P = M(() => {
      const K = {};
      return (
        e.targetUid.value && (K.for = e.targetUid.value),
        t.disable === !0 && (K["aria-disabled"] = "true"),
        K
      );
    });
  function L() {
    const K = document.activeElement;
    let ie = e.targetRef?.value;
    ie &&
      (K === null || K.id !== e.targetUid.value) &&
      (ie.hasAttribute("tabindex") === !0 ||
        (ie = ie.querySelector("[tabindex]")),
      ie !== K &&
        ie?.focus({
          preventScroll: !0,
        }));
  }
  function N() {
    sl(L);
  }
  function W() {
    P0(L);
    const K = document.activeElement;
    K !== null && e.rootRef.value.contains(K) && K.blur();
  }
  function k(K) {
    a !== null && (clearTimeout(a), (a = null)),
      e.editable.value === !0 &&
        e.focused.value === !1 &&
        ((e.focused.value = !0), n("focus", K));
  }
  function O(K, ie) {
    a !== null && clearTimeout(a),
      (a = setTimeout(() => {
        (a = null),
          !(
            document.hasFocus() === !0 &&
            (e.hasPopupOpen === !0 ||
              e.controlRef === void 0 ||
              e.controlRef.value === null ||
              e.controlRef.value.contains(document.activeElement) !== !1)
          ) &&
            (e.focused.value === !0 && ((e.focused.value = !1), n("blur", K)),
            ie?.());
      }));
  }
  function V(K) {
    wt(K),
      o.platform.is.mobile !== !0
        ? (e.targetRef?.value || e.rootRef.value).focus()
        : e.rootRef.value.contains(document.activeElement) === !0 &&
          document.activeElement.blur(),
      t.type === "file" && (e.inputRef.value.value = null),
      n("update:modelValue", null),
      e.changeEvent === !0 && n("change", null),
      n("clear", t.modelValue),
      ct(() => {
        const ie = l.value;
        d(), (l.value = ie);
      });
  }
  function C(K) {
    [13, 32].includes(K.keyCode) && V(K);
  }
  function G() {
    const K = [];
    return (
      r.prepend !== void 0 &&
        K.push(
          q(
            "div",
            {
              class:
                "q-field__prepend q-field__marginal row no-wrap items-center",
              key: "prepend",
              onClick: Sn,
            },
            r.prepend()
          )
        ),
      K.push(
        q(
          "div",
          {
            class:
              "q-field__control-container col relative-position row no-wrap q-anchor--skip",
          },
          $()
        )
      ),
      u.value === !0 &&
        t.noErrorIcon === !1 &&
        K.push(
          J("error", [
            q(sn, {
              name: o.iconSet.field.error,
              color: "negative",
            }),
          ])
        ),
      t.loading === !0 || e.innerLoading.value === !0
        ? K.push(
            J(
              "inner-loading-append",
              r.loading !== void 0
                ? r.loading()
                : [
                    q(br, {
                      color: t.color,
                    }),
                  ]
            )
          )
        : t.clearable === !0 &&
          e.hasValue.value === !0 &&
          e.editable.value === !0 &&
          K.push(
            J("inner-clearable-append", [
              q(sn, {
                class: "q-field__focusable-action",
                name: t.clearIcon || o.iconSet.field.clear,
                tabindex: 0,
                role: "button",
                "aria-hidden": "false",
                "aria-label": o.lang.label.clear,
                onKeyup: C,
                onClick: V,
              }),
            ])
          ),
      r.append !== void 0 &&
        K.push(
          q(
            "div",
            {
              class:
                "q-field__append q-field__marginal row no-wrap items-center",
              key: "append",
              onClick: Sn,
            },
            r.append()
          )
        ),
      e.getInnerAppend !== void 0 &&
        K.push(J("inner-append", e.getInnerAppend())),
      e.getControlChild !== void 0 && K.push(e.getControlChild()),
      K
    );
  }
  function $() {
    const K = [];
    return (
      t.prefix !== void 0 &&
        t.prefix !== null &&
        K.push(
          q(
            "div",
            {
              class: "q-field__prefix no-pointer-events row items-center",
            },
            t.prefix
          )
        ),
      e.getShadowControl !== void 0 &&
        e.hasShadow.value === !0 &&
        K.push(e.getShadowControl()),
      e.getControl !== void 0
        ? K.push(e.getControl())
        : r.rawControl !== void 0
        ? K.push(r.rawControl())
        : r.control !== void 0 &&
          K.push(
            q(
              "div",
              {
                ref: e.targetRef,
                class: "q-field__native row",
                tabindex: -1,
                ...e.splitAttrs.attributes.value,
                "data-autofocus": t.autofocus === !0 || void 0,
              },
              r.control(b.value)
            )
          ),
      m.value === !0 &&
        K.push(
          q(
            "div",
            {
              class: S.value,
            },
            Lt(r.label, t.label)
          )
        ),
      t.suffix !== void 0 &&
        t.suffix !== null &&
        K.push(
          q(
            "div",
            {
              class: "q-field__suffix no-pointer-events row items-center",
            },
            t.suffix
          )
        ),
      K.concat(Lt(r.default))
    );
  }
  function ee() {
    let K, ie;
    u.value === !0
      ? f.value !== null
        ? ((K = [
            q(
              "div",
              {
                role: "alert",
              },
              f.value
            ),
          ]),
          (ie = `q--slot-error-${f.value}`))
        : ((K = Lt(r.error)), (ie = "q--slot-error"))
      : (t.hideHint !== !0 || e.focused.value === !0) &&
        (t.hint !== void 0
          ? ((K = [q("div", t.hint)]), (ie = `q--slot-hint-${t.hint}`))
          : ((K = Lt(r.hint)), (ie = "q--slot-hint")));
    const ce = t.counter === !0 || r.counter !== void 0;
    if (t.hideBottomSpace === !0 && ce === !1 && K === void 0) return;
    const fe = q(
      "div",
      {
        key: ie,
        class: "q-field__messages col",
      },
      K
    );
    return q(
      "div",
      {
        class:
          "q-field__bottom row items-start q-field__bottom--" +
          (t.hideBottomSpace !== !0 ? "animated" : "stale"),
        onClick: Sn,
      },
      [
        t.hideBottomSpace === !0
          ? fe
          : q(
              is,
              {
                name: "q-transition--field-message",
              },
              () => fe
            ),
        ce === !0
          ? q(
              "div",
              {
                class: "q-field__counter",
              },
              r.counter !== void 0 ? r.counter() : e.computedCounter.value
            )
          : null,
      ]
    );
  }
  function J(K, ie) {
    return ie === null
      ? null
      : q(
          "div",
          {
            key: K,
            class:
              "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip",
          },
          ie
        );
  }
  let Q = !1;
  return (
    Pi(() => {
      Q = !0;
    }),
    xf(() => {
      Q === !0 && t.autofocus === !0 && i.focus();
    }),
    t.autofocus === !0 &&
      xt(() => {
        i.focus();
      }),
    Tt(() => {
      a !== null && clearTimeout(a);
    }),
    Object.assign(i, {
      focus: N,
      blur: W,
    }),
    function () {
      const ie =
        e.getControl === void 0 && r.control === void 0
          ? {
              ...e.splitAttrs.attributes.value,
              "data-autofocus": t.autofocus === !0 || void 0,
              ...P.value,
            }
          : P.value;
      return q(
        e.tag.value,
        {
          ref: e.rootRef,
          class: [x.value, s.class],
          style: s.style,
          ...ie,
        },
        [
          r.before !== void 0
            ? q(
                "div",
                {
                  class:
                    "q-field__before q-field__marginal row no-wrap items-center",
                  onClick: Sn,
                },
                r.before()
              )
            : null,
          q(
            "div",
            {
              class: "q-field__inner relative-position col self-stretch",
            },
            [
              q(
                "div",
                {
                  ref: e.controlRef,
                  class: y.value,
                  tabindex: -1,
                  ...e.controlEvents,
                },
                G()
              ),
              g.value === !0 ? ee() : null,
            ]
          ),
          r.after !== void 0
            ? q(
                "div",
                {
                  class:
                    "q-field__after q-field__marginal row no-wrap items-center",
                  onClick: Sn,
                },
                r.after()
              )
            : null,
        ]
      );
    }
  );
}
const Pu = {
    date: "####/##/##",
    datetime: "####/##/## ##:##",
    time: "##:##",
    fulltime: "##:##:##",
    phone: "(###) ### - ####",
    card: "#### #### #### ####",
  },
  bi = {
    "#": {
      pattern: "[\\d]",
      negate: "[^\\d]",
    },
    S: {
      pattern: "[a-zA-Z]",
      negate: "[^a-zA-Z]",
    },
    N: {
      pattern: "[0-9a-zA-Z]",
      negate: "[^0-9a-zA-Z]",
    },
    A: {
      pattern: "[a-zA-Z]",
      negate: "[^a-zA-Z]",
      transform: (e) => e.toLocaleUpperCase(),
    },
    a: {
      pattern: "[a-zA-Z]",
      negate: "[^a-zA-Z]",
      transform: (e) => e.toLocaleLowerCase(),
    },
    X: {
      pattern: "[0-9a-zA-Z]",
      negate: "[^0-9a-zA-Z]",
      transform: (e) => e.toLocaleUpperCase(),
    },
    x: {
      pattern: "[0-9a-zA-Z]",
      negate: "[^0-9a-zA-Z]",
      transform: (e) => e.toLocaleLowerCase(),
    },
  },
  qh = Object.keys(bi);
qh.forEach((e) => {
  bi[e].regex = new RegExp(bi[e].pattern);
});
const MS = new RegExp(
    "\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + qh.join("") + "])|(.)",
    "g"
  ),
  Iu = /[.*+?^${}()|[\]\\]/g,
  Fe = "",
  FS = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean,
  };
function $S(e, t, n, r) {
  let s, i, o, a, l, c;
  const u = de(null),
    f = de(h());
  function d() {
    return (
      e.autogrow === !0 ||
      ["textarea", "text", "search", "url", "tel", "password"].includes(e.type)
    );
  }
  he(() => e.type + e.autogrow, w),
    he(
      () => e.mask,
      (k) => {
        if (k !== void 0) x(f.value, !0);
        else {
          const O = N(f.value);
          w(), e.modelValue !== O && t("update:modelValue", O);
        }
      }
    ),
    he(
      () => e.fillMask + e.reverseFillMask,
      () => {
        u.value === !0 && x(f.value, !0);
      }
    ),
    he(
      () => e.unmaskedValue,
      () => {
        u.value === !0 && x(f.value);
      }
    );
  function h() {
    if ((w(), u.value === !0)) {
      const k = P(N(e.modelValue));
      return e.fillMask !== !1 ? W(k) : k;
    }
    return e.modelValue;
  }
  function g(k) {
    if (k < s.length) return s.slice(-k);
    let O = "",
      V = s;
    const C = V.indexOf(Fe);
    if (C !== -1) {
      for (let G = k - V.length; G > 0; G--) O += Fe;
      V = V.slice(0, C) + O + V.slice(C);
    }
    return V;
  }
  function w() {
    if (
      ((u.value = e.mask !== void 0 && e.mask.length !== 0 && d()),
      u.value === !1)
    ) {
      (a = void 0), (s = ""), (i = "");
      return;
    }
    const k = Pu[e.mask] === void 0 ? e.mask : Pu[e.mask],
      O =
        typeof e.fillMask == "string" && e.fillMask.length !== 0
          ? e.fillMask.slice(0, 1)
          : "_",
      V = O.replace(Iu, "\\$&"),
      C = [],
      G = [],
      $ = [];
    let ee = e.reverseFillMask === !0,
      J = "",
      Q = "";
    k.replace(MS, (fe, z, ge, Ie, Oe) => {
      if (Ie !== void 0) {
        const ne = bi[Ie];
        $.push(ne),
          (Q = ne.negate),
          ee === !0 &&
            (G.push(
              "(?:" +
                Q +
                "+)?(" +
                ne.pattern +
                "+)?(?:" +
                Q +
                "+)?(" +
                ne.pattern +
                "+)?"
            ),
            (ee = !1)),
          G.push("(?:" + Q + "+)?(" + ne.pattern + ")?");
      } else if (ge !== void 0)
        (J = "\\" + (ge === "\\" ? "" : ge)),
          $.push(ge),
          C.push("([^" + J + "]+)?" + J + "?");
      else {
        const ne = z !== void 0 ? z : Oe;
        (J = ne === "\\" ? "\\\\\\\\" : ne.replace(Iu, "\\\\$&")),
          $.push(ne),
          C.push("([^" + J + "]+)?" + J + "?");
      }
    });
    const K = new RegExp(
        "^" +
          C.join("") +
          "(" +
          (J === "" ? "." : "[^" + J + "]") +
          "+)?" +
          (J === "" ? "" : "[" + J + "]*") +
          "$"
      ),
      ie = G.length - 1,
      ce = G.map((fe, z) =>
        z === 0 && e.reverseFillMask === !0
          ? new RegExp("^" + V + "*" + fe)
          : z === ie
          ? new RegExp(
              "^" +
                fe +
                "(" +
                (Q === "" ? "." : Q) +
                "+)?" +
                (e.reverseFillMask === !0 ? "$" : V + "*")
            )
          : new RegExp("^" + fe)
      );
    (o = $),
      (a = (fe) => {
        const z = K.exec(
          e.reverseFillMask === !0 ? fe : fe.slice(0, $.length + 1)
        );
        z !== null && (fe = z.slice(1).join(""));
        const ge = [],
          Ie = ce.length;
        for (let Oe = 0, ne = fe; Oe < Ie; Oe++) {
          const F = ce[Oe].exec(ne);
          if (F === null) break;
          (ne = ne.slice(F.shift().length)), ge.push(...F);
        }
        return ge.length !== 0 ? ge.join("") : fe;
      }),
      (s = $.map((fe) => (typeof fe == "string" ? fe : Fe)).join("")),
      (i = s.split(Fe).join(O));
  }
  function x(k, O, V) {
    const C = r.value,
      G = C.selectionEnd,
      $ = C.value.length - G,
      ee = N(k);
    O === !0 && w();
    const J = P(ee),
      Q = e.fillMask !== !1 ? W(J) : J,
      K = f.value !== Q;
    C.value !== Q && (C.value = Q),
      K === !0 && (f.value = Q),
      document.activeElement === C &&
        ct(() => {
          if (Q === i) {
            const ce = e.reverseFillMask === !0 ? i.length : 0;
            C.setSelectionRange(ce, ce, "forward");
            return;
          }
          if (V === "insertFromPaste" && e.reverseFillMask !== !0) {
            const ce = C.selectionEnd;
            let fe = G - 1;
            for (let z = l; z <= fe && z < ce; z++) s[z] !== Fe && fe++;
            m.right(C, fe);
            return;
          }
          if (
            ["deleteContentBackward", "deleteContentForward"].indexOf(V) !== -1
          ) {
            const ce =
              e.reverseFillMask === !0
                ? G === 0
                  ? Q.length > J.length
                    ? 1
                    : 0
                  : Math.max(
                      0,
                      Q.length - (Q === i ? 0 : Math.min(J.length, $) + 1)
                    ) + 1
                : G;
            C.setSelectionRange(ce, ce, "forward");
            return;
          }
          if (e.reverseFillMask === !0)
            if (K === !0) {
              const ce = Math.max(
                0,
                Q.length - (Q === i ? 0 : Math.min(J.length, $ + 1))
              );
              ce === 1 && G === 1
                ? C.setSelectionRange(ce, ce, "forward")
                : m.rightReverse(C, ce);
            } else {
              const ce = Q.length - $;
              C.setSelectionRange(ce, ce, "backward");
            }
          else if (K === !0) {
            const ce = Math.max(0, s.indexOf(Fe), Math.min(J.length, G) - 1);
            m.right(C, ce);
          } else {
            const ce = G - 1;
            m.right(C, ce);
          }
        });
    const ie = e.unmaskedValue === !0 ? N(Q) : Q;
    String(e.modelValue) !== ie &&
      (e.modelValue !== null || ie !== "") &&
      n(ie, !0);
  }
  function y(k, O, V) {
    const C = P(N(k.value));
    (O = Math.max(0, s.indexOf(Fe), Math.min(C.length, O))),
      (l = O),
      k.setSelectionRange(O, V, "forward");
  }
  const m = {
    left(k, O) {
      const V = s.slice(O - 1).indexOf(Fe) === -1;
      let C = Math.max(0, O - 1);
      for (; C >= 0; C--)
        if (s[C] === Fe) {
          (O = C), V === !0 && O++;
          break;
        }
      if (C < 0 && s[O] !== void 0 && s[O] !== Fe) return m.right(k, 0);
      O >= 0 && k.setSelectionRange(O, O, "backward");
    },
    right(k, O) {
      const V = k.value.length;
      let C = Math.min(V, O + 1);
      for (; C <= V; C++)
        if (s[C] === Fe) {
          O = C;
          break;
        } else s[C - 1] === Fe && (O = C);
      if (C > V && s[O - 1] !== void 0 && s[O - 1] !== Fe) return m.left(k, V);
      k.setSelectionRange(O, O, "forward");
    },
    leftReverse(k, O) {
      const V = g(k.value.length);
      let C = Math.max(0, O - 1);
      for (; C >= 0; C--)
        if (V[C - 1] === Fe) {
          O = C;
          break;
        } else if (V[C] === Fe && ((O = C), C === 0)) break;
      if (C < 0 && V[O] !== void 0 && V[O] !== Fe) return m.rightReverse(k, 0);
      O >= 0 && k.setSelectionRange(O, O, "backward");
    },
    rightReverse(k, O) {
      const V = k.value.length,
        C = g(V),
        G = C.slice(0, O + 1).indexOf(Fe) === -1;
      let $ = Math.min(V, O + 1);
      for (; $ <= V; $++)
        if (C[$ - 1] === Fe) {
          (O = $), O > 0 && G === !0 && O--;
          break;
        }
      if ($ > V && C[O - 1] !== void 0 && C[O - 1] !== Fe)
        return m.leftReverse(k, V);
      k.setSelectionRange(O, O, "forward");
    },
  };
  function S(k) {
    t("click", k), (c = void 0);
  }
  function b(k) {
    if ((t("keydown", k), cd(k) === !0 || k.altKey === !0)) return;
    const O = r.value,
      V = O.selectionStart,
      C = O.selectionEnd;
    if ((k.shiftKey || (c = void 0), k.keyCode === 37 || k.keyCode === 39)) {
      k.shiftKey &&
        c === void 0 &&
        (c = O.selectionDirection === "forward" ? V : C);
      const G =
        m[
          (k.keyCode === 39 ? "right" : "left") +
            (e.reverseFillMask === !0 ? "Reverse" : "")
        ];
      if ((k.preventDefault(), G(O, c === V ? C : V), k.shiftKey)) {
        const $ = O.selectionStart;
        O.setSelectionRange(Math.min(c, $), Math.max(c, $), "forward");
      }
    } else
      k.keyCode === 8 && e.reverseFillMask !== !0 && V === C
        ? (m.left(O, V), O.setSelectionRange(O.selectionStart, C, "backward"))
        : k.keyCode === 46 &&
          e.reverseFillMask === !0 &&
          V === C &&
          (m.rightReverse(O, C),
          O.setSelectionRange(V, O.selectionEnd, "forward"));
  }
  function P(k) {
    if (k == null || k === "") return "";
    if (e.reverseFillMask === !0) return L(k);
    const O = o;
    let V = 0,
      C = "";
    for (let G = 0; G < O.length; G++) {
      const $ = k[V],
        ee = O[G];
      if (typeof ee == "string") (C += ee), $ === ee && V++;
      else if ($ !== void 0 && ee.regex.test($))
        (C += ee.transform !== void 0 ? ee.transform($) : $), V++;
      else return C;
    }
    return C;
  }
  function L(k) {
    const O = o,
      V = s.indexOf(Fe);
    let C = k.length - 1,
      G = "";
    for (let $ = O.length - 1; $ >= 0 && C !== -1; $--) {
      const ee = O[$];
      let J = k[C];
      if (typeof ee == "string") (G = ee + G), J === ee && C--;
      else if (J !== void 0 && ee.regex.test(J))
        do
          (G = (ee.transform !== void 0 ? ee.transform(J) : J) + G),
            C--,
            (J = k[C]);
        while (V === $ && J !== void 0 && ee.regex.test(J));
      else return G;
    }
    return G;
  }
  function N(k) {
    return typeof k != "string" || a === void 0
      ? typeof k == "number"
        ? a("" + k)
        : k
      : a(k);
  }
  function W(k) {
    return i.length - k.length <= 0
      ? k
      : e.reverseFillMask === !0 && k.length !== 0
      ? i.slice(0, -k.length) + k
      : k + i.slice(k.length);
  }
  return {
    innerValue: f,
    hasMask: u,
    moveCursorForPaste: y,
    updateMaskValue: x,
    onMaskedKeydown: b,
    onMaskedClick: S,
  };
}
const ol = {
  name: String,
};
function tk(e) {
  return M(() => ({
    type: "hidden",
    name: e.name,
    value: e.modelValue,
  }));
}
function Vh(e = {}) {
  return (t, n, r) => {
    t[n](
      q("input", {
        class: "hidden" + (r || ""),
        ...e.value,
      })
    );
  };
}
function DS(e) {
  return M(() => e.name || e.for);
}
function qS(e, t) {
  function n() {
    const r = e.modelValue;
    try {
      const s =
        "DataTransfer" in window
          ? new DataTransfer()
          : "ClipboardEvent" in window
          ? new ClipboardEvent("").clipboardData
          : void 0;
      return (
        Object(r) === r &&
          ("length" in r ? Array.from(r) : [r]).forEach((i) => {
            s.items.add(i);
          }),
        {
          files: s.files,
        }
      );
    } catch {
      return {
        files: void 0,
      };
    }
  }
  return M(
    t === !0
      ? () => {
          if (e.type === "file") return n();
        }
      : n
  );
}
const VS =
    /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
  jS =
    /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,
  WS = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,
  BS = /[a-z0-9_ -]$/i;
function US(e) {
  return function (n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== !0) return;
      (n.target.qComposing = !1), e(n);
    } else
      n.type === "compositionupdate" &&
        n.target.qComposing !== !0 &&
        typeof n.data == "string" &&
        (Be.is.firefox === !0
          ? BS.test(n.data) === !1
          : VS.test(n.data) === !0 ||
            jS.test(n.data) === !0 ||
            WS.test(n.data) === !0) === !0 &&
        (n.target.qComposing = !0);
  };
}
const HS = nt({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...AS,
    ...FS,
    ...ol,
    modelValue: [String, Number, FileList],
    shadowText: String,
    type: {
      type: String,
      default: "text",
    },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
  },
  emits: [...LS, "paste", "change", "keydown", "click", "animationend"],
  setup(e, { emit: t, attrs: n }) {
    const { proxy: r } = Ce(),
      { $q: s } = r,
      i = {};
    let o = NaN,
      a,
      l,
      c = null,
      u;
    const f = de(null),
      d = DS(e),
      {
        innerValue: h,
        hasMask: g,
        moveCursorForPaste: w,
        updateMaskValue: x,
        onMaskedKeydown: y,
        onMaskedClick: m,
      } = $S(e, t, J, f),
      S = qS(e, !0),
      b = M(() => pa(h.value)),
      P = US($),
      L = OS({
        changeEvent: !0,
      }),
      N = M(() => e.type === "textarea" || e.autogrow === !0),
      W = M(
        () =>
          N.value === !0 ||
          ["text", "search", "url", "tel", "password"].includes(e.type)
      ),
      k = M(() => {
        const z = {
          ...L.splitAttrs.listeners.value,
          onInput: $,
          onPaste: G,
          onChange: K,
          onBlur: ie,
          onFocus: fi,
        };
        return (
          (z.onCompositionstart =
            z.onCompositionupdate =
            z.onCompositionend =
              P),
          g.value === !0 && ((z.onKeydown = y), (z.onClick = m)),
          e.autogrow === !0 && (z.onAnimationend = ee),
          z
        );
      }),
      O = M(() => {
        const z = {
          tabindex: 0,
          "data-autofocus": e.autofocus === !0 || void 0,
          rows: e.type === "textarea" ? 6 : void 0,
          "aria-label": e.label,
          name: d.value,
          ...L.splitAttrs.attributes.value,
          id: L.targetUid.value,
          maxlength: e.maxlength,
          disabled: e.disable === !0,
          readonly: e.readonly === !0,
        };
        return (
          N.value === !1 && (z.type = e.type),
          e.autogrow === !0 && (z.rows = 1),
          z
        );
      });
    he(
      () => e.type,
      () => {
        f.value && (f.value.value = e.modelValue);
      }
    ),
      he(
        () => e.modelValue,
        (z) => {
          if (g.value === !0) {
            if (l === !0 && ((l = !1), String(z) === o)) return;
            x(z);
          } else
            h.value !== z &&
              ((h.value = z),
              e.type === "number" &&
                i.hasOwnProperty("value") === !0 &&
                (a === !0 ? (a = !1) : delete i.value));
          e.autogrow === !0 && ct(Q);
        }
      ),
      he(
        () => e.autogrow,
        (z) => {
          z === !0
            ? ct(Q)
            : f.value !== null && n.rows > 0 && (f.value.style.height = "auto");
        }
      ),
      he(
        () => e.dense,
        () => {
          e.autogrow === !0 && ct(Q);
        }
      );
    function V() {
      sl(() => {
        const z = document.activeElement;
        f.value !== null &&
          f.value !== z &&
          (z === null || z.id !== L.targetUid.value) &&
          f.value.focus({
            preventScroll: !0,
          });
      });
    }
    function C() {
      f.value?.select();
    }
    function G(z) {
      if (g.value === !0 && e.reverseFillMask !== !0) {
        const ge = z.target;
        w(ge, ge.selectionStart, ge.selectionEnd);
      }
      t("paste", z);
    }
    function $(z) {
      if (!z || !z.target) return;
      if (e.type === "file") {
        t("update:modelValue", z.target.files);
        return;
      }
      const ge = z.target.value;
      if (z.target.qComposing === !0) {
        i.value = ge;
        return;
      }
      if (g.value === !0) x(ge, !1, z.inputType);
      else if ((J(ge), W.value === !0 && z.target === document.activeElement)) {
        const { selectionStart: Ie, selectionEnd: Oe } = z.target;
        Ie !== void 0 &&
          Oe !== void 0 &&
          ct(() => {
            z.target === document.activeElement &&
              ge.indexOf(z.target.value) === 0 &&
              z.target.setSelectionRange(Ie, Oe);
          });
      }
      e.autogrow === !0 && Q();
    }
    function ee(z) {
      t("animationend", z), Q();
    }
    function J(z, ge) {
      (u = () => {
        (c = null),
          e.type !== "number" &&
            i.hasOwnProperty("value") === !0 &&
            delete i.value,
          e.modelValue !== z &&
            o !== z &&
            ((o = z),
            ge === !0 && (l = !0),
            t("update:modelValue", z),
            ct(() => {
              o === z && (o = NaN);
            })),
          (u = void 0);
      }),
        e.type === "number" && ((a = !0), (i.value = z)),
        e.debounce !== void 0
          ? (c !== null && clearTimeout(c),
            (i.value = z),
            (c = setTimeout(u, e.debounce)))
          : u();
    }
    function Q() {
      requestAnimationFrame(() => {
        const z = f.value;
        if (z !== null) {
          const ge = z.parentNode.style,
            { scrollTop: Ie } = z,
            { overflowY: Oe, maxHeight: ne } =
              s.platform.is.firefox === !0 ? {} : window.getComputedStyle(z),
            F = Oe !== void 0 && Oe !== "scroll";
          F === !0 && (z.style.overflowY = "hidden"),
            (ge.marginBottom = z.scrollHeight - 1 + "px"),
            (z.style.height = "1px"),
            (z.style.height = z.scrollHeight + "px"),
            F === !0 &&
              (z.style.overflowY =
                parseInt(ne, 10) < z.scrollHeight ? "auto" : "hidden"),
            (ge.marginBottom = ""),
            (z.scrollTop = Ie);
        }
      });
    }
    function K(z) {
      P(z),
        c !== null && (clearTimeout(c), (c = null)),
        u?.(),
        t("change", z.target.value);
    }
    function ie(z) {
      z !== void 0 && fi(z),
        c !== null && (clearTimeout(c), (c = null)),
        u?.(),
        (a = !1),
        (l = !1),
        delete i.value,
        e.type !== "file" &&
          setTimeout(() => {
            f.value !== null &&
              (f.value.value = h.value !== void 0 ? h.value : "");
          });
    }
    function ce() {
      return i.hasOwnProperty("value") === !0
        ? i.value
        : h.value !== void 0
        ? h.value
        : "";
    }
    Tt(() => {
      ie();
    }),
      xt(() => {
        e.autogrow === !0 && Q();
      }),
      Object.assign(L, {
        innerValue: h,
        fieldClass: M(
          () =>
            `q-${N.value === !0 ? "textarea" : "input"}` +
            (e.autogrow === !0 ? " q-textarea--autogrow" : "")
        ),
        hasShadow: M(
          () =>
            e.type !== "file" &&
            typeof e.shadowText == "string" &&
            e.shadowText.length !== 0
        ),
        inputRef: f,
        emitValue: J,
        hasValue: b,
        floatingLabel: M(
          () =>
            (b.value === !0 &&
              (e.type !== "number" || isNaN(h.value) === !1)) ||
            pa(e.displayValue)
        ),
        getControl: () =>
          q(N.value === !0 ? "textarea" : "input", {
            ref: f,
            class: ["q-field__native q-placeholder", e.inputClass],
            style: e.inputStyle,
            ...O.value,
            ...k.value,
            ...(e.type !== "file"
              ? {
                  value: ce(),
                }
              : S.value),
          }),
        getShadowControl: () =>
          q(
            "div",
            {
              class:
                "q-field__native q-field__shadow absolute-bottom no-pointer-events" +
                (N.value === !0 ? "" : " text-no-wrap"),
            },
            [
              q(
                "span",
                {
                  class: "invisible",
                },
                ce()
              ),
              q("span", e.shadowText),
            ]
          ),
      });
    const fe = RS(L);
    return (
      Object.assign(r, {
        focus: V,
        select: C,
        getNativeElement: () => f.value,
      }),
      _r(r, "nativeEl", () => f.value),
      fe
    );
  },
});
function jh(e, t) {
  const n = de(null),
    r = M(() =>
      e.disable === !0
        ? null
        : q("span", {
            ref: n,
            class: "no-outline",
            tabindex: -1,
          })
    );
  function s(i) {
    const o = t.value;
    i?.qAvoidFocus !== !0 &&
      (i?.type.indexOf("key") === 0
        ? document.activeElement !== o &&
          o?.contains(document.activeElement) === !0 &&
          o.focus()
        : n.value !== null &&
          (i === void 0 || o?.contains(i.target) === !0) &&
          n.value.focus());
  }
  return {
    refocusTargetEl: r,
    refocusTarget: s,
  };
}
const Wh = {
    xs: 30,
    sm: 35,
    md: 40,
    lg: 50,
    xl: 60,
  },
  zS = () =>
    q(
      "svg",
      {
        key: "svg",
        class: "q-radio__bg absolute non-selectable",
        viewBox: "0 0 24 24",
      },
      [
        q("path", {
          d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12",
        }),
        q("path", {
          class: "q-radio__check",
          d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6",
        }),
      ]
    ),
  KS = nt({
    name: "QRadio",
    props: {
      ...Qn,
      ...ws,
      ...ol,
      modelValue: {
        required: !0,
      },
      val: {
        required: !0,
      },
      label: String,
      leftLabel: Boolean,
      checkedIcon: String,
      uncheckedIcon: String,
      color: String,
      keepColor: Boolean,
      dense: Boolean,
      disable: Boolean,
      tabindex: [String, Number],
    },
    emits: ["update:modelValue"],
    setup(e, { slots: t, emit: n }) {
      const { proxy: r } = Ce(),
        s = Xn(e, r.$q),
        i = Ss(e, Wh),
        o = de(null),
        { refocusTargetEl: a, refocusTarget: l } = jh(e, o),
        c = M(() => ue(e.modelValue) === ue(e.val)),
        u = M(
          () =>
            "q-radio cursor-pointer no-outline row inline no-wrap items-center" +
            (e.disable === !0 ? " disabled" : "") +
            (s.value === !0 ? " q-radio--dark" : "") +
            (e.dense === !0 ? " q-radio--dense" : "") +
            (e.leftLabel === !0 ? " reverse" : "")
        ),
        f = M(() => {
          const b =
            e.color !== void 0 && (e.keepColor === !0 || c.value === !0)
              ? ` text-${e.color}`
              : "";
          return `q-radio__inner relative-position q-radio__inner--${
            c.value === !0 ? "truthy" : "falsy"
          }${b}`;
        }),
        d = M(() => (c.value === !0 ? e.checkedIcon : e.uncheckedIcon) || null),
        h = M(() => (e.disable === !0 ? -1 : e.tabindex || 0)),
        g = M(() => {
          const b = {
            type: "radio",
          };
          return (
            e.name !== void 0 &&
              Object.assign(b, {
                ".checked": c.value === !0,
                "^checked": c.value === !0 ? "checked" : void 0,
                name: e.name,
                value: e.val,
              }),
            b
          );
        }),
        w = Vh(g);
      function x(b) {
        b !== void 0 && (wt(b), l(b)),
          e.disable !== !0 &&
            c.value !== !0 &&
            n("update:modelValue", e.val, b);
      }
      function y(b) {
        (b.keyCode === 13 || b.keyCode === 32) && wt(b);
      }
      function m(b) {
        (b.keyCode === 13 || b.keyCode === 32) && x(b);
      }
      Object.assign(r, {
        set: x,
      });
      const S = zS();
      return () => {
        const b =
          d.value !== null
            ? [
                q(
                  "div",
                  {
                    key: "icon",
                    class:
                      "q-radio__icon-container absolute-full flex flex-center no-wrap",
                  },
                  [
                    q(sn, {
                      class: "q-radio__icon",
                      name: d.value,
                    }),
                  ]
                ),
              ]
            : [S];
        e.disable !== !0 &&
          w(b, "unshift", " q-radio__native q-ma-none q-pa-none");
        const P = [
          q(
            "div",
            {
              class: f.value,
              style: i.value,
              "aria-hidden": "true",
            },
            b
          ),
        ];
        a.value !== null && P.push(a.value);
        const L = e.label !== void 0 ? Vn(t.default, [e.label]) : Lt(t.default);
        return (
          L !== void 0 &&
            P.push(
              q(
                "div",
                {
                  class: "q-radio__label q-anchor--skip",
                },
                L
              )
            ),
          q(
            "div",
            {
              ref: o,
              class: u.value,
              tabindex: h.value,
              role: "radio",
              "aria-label": e.label,
              "aria-checked": c.value === !0 ? "true" : "false",
              "aria-disabled": e.disable === !0 ? "true" : void 0,
              onClick: x,
              onKeydown: y,
              onKeyup: m,
            },
            P
          )
        );
      };
    },
  }),
  Bh = {
    ...Qn,
    ...ws,
    ...ol,
    modelValue: {
      required: !0,
      default: null,
    },
    val: {},
    trueValue: {
      default: !0,
    },
    falseValue: {
      default: !1,
    },
    indeterminateValue: {
      default: null,
    },
    checkedIcon: String,
    uncheckedIcon: String,
    indeterminateIcon: String,
    toggleOrder: {
      type: String,
      validator: (e) => e === "tf" || e === "ft",
    },
    toggleIndeterminate: Boolean,
    label: String,
    leftLabel: Boolean,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number],
  },
  Uh = ["update:modelValue"];
function Hh(e, t) {
  const { props: n, slots: r, emit: s, proxy: i } = Ce(),
    { $q: o } = i,
    a = Xn(n, o),
    l = de(null),
    { refocusTargetEl: c, refocusTarget: u } = jh(n, l),
    f = Ss(n, Wh),
    d = M(() => n.val !== void 0 && Array.isArray(n.modelValue)),
    h = M(() => {
      const C = ue(n.val);
      return d.value === !0 ? n.modelValue.findIndex((G) => ue(G) === C) : -1;
    }),
    g = M(() =>
      d.value === !0 ? h.value !== -1 : ue(n.modelValue) === ue(n.trueValue)
    ),
    w = M(() =>
      d.value === !0 ? h.value === -1 : ue(n.modelValue) === ue(n.falseValue)
    ),
    x = M(() => g.value === !1 && w.value === !1),
    y = M(() => (n.disable === !0 ? -1 : n.tabindex || 0)),
    m = M(
      () =>
        `q-${e} cursor-pointer no-outline row inline no-wrap items-center` +
        (n.disable === !0 ? " disabled" : "") +
        (a.value === !0 ? ` q-${e}--dark` : "") +
        (n.dense === !0 ? ` q-${e}--dense` : "") +
        (n.leftLabel === !0 ? " reverse" : "")
    ),
    S = M(() => {
      const C = g.value === !0 ? "truthy" : w.value === !0 ? "falsy" : "indet",
        G =
          n.color !== void 0 &&
          (n.keepColor === !0 ||
            (e === "toggle" ? g.value === !0 : w.value !== !0))
            ? ` text-${n.color}`
            : "";
      return `q-${e}__inner relative-position non-selectable q-${e}__inner--${C}${G}`;
    }),
    b = M(() => {
      const C = {
        type: "checkbox",
      };
      return (
        n.name !== void 0 &&
          Object.assign(C, {
            ".checked": g.value,
            "^checked": g.value === !0 ? "checked" : void 0,
            name: n.name,
            value: d.value === !0 ? n.val : n.trueValue,
          }),
        C
      );
    }),
    P = Vh(b),
    L = M(() => {
      const C = {
        tabindex: y.value,
        role: e === "toggle" ? "switch" : "checkbox",
        "aria-label": n.label,
        "aria-checked":
          x.value === !0 ? "mixed" : g.value === !0 ? "true" : "false",
      };
      return n.disable === !0 && (C["aria-disabled"] = "true"), C;
    });
  function N(C) {
    C !== void 0 && (wt(C), u(C)),
      n.disable !== !0 && s("update:modelValue", W(), C);
  }
  function W() {
    if (d.value === !0) {
      if (g.value === !0) {
        const C = n.modelValue.slice();
        return C.splice(h.value, 1), C;
      }
      return n.modelValue.concat([n.val]);
    }
    if (g.value === !0) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1)
        return n.falseValue;
    } else if (w.value === !0) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === !1)
        return n.trueValue;
    } else return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function k(C) {
    (C.keyCode === 13 || C.keyCode === 32) && wt(C);
  }
  function O(C) {
    (C.keyCode === 13 || C.keyCode === 32) && N(C);
  }
  const V = t(g, x);
  return (
    Object.assign(i, {
      toggle: N,
    }),
    () => {
      const C = V();
      n.disable !== !0 &&
        P(C, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
      const G = [
        q(
          "div",
          {
            class: S.value,
            style: f.value,
            "aria-hidden": "true",
          },
          C
        ),
      ];
      c.value !== null && G.push(c.value);
      const $ = n.label !== void 0 ? Vn(r.default, [n.label]) : Lt(r.default);
      return (
        $ !== void 0 &&
          G.push(
            q(
              "div",
              {
                class: `q-${e}__label q-anchor--skip`,
              },
              $
            )
          ),
        q(
          "div",
          {
            ref: l,
            class: m.value,
            ...L.value,
            onClick: N,
            onKeydown: k,
            onKeyup: O,
          },
          G
        )
      );
    }
  );
}
const GS = () =>
    q(
      "div",
      {
        key: "svg",
        class: "q-checkbox__bg absolute",
      },
      [
        q(
          "svg",
          {
            class: "q-checkbox__svg fit absolute-full",
            viewBox: "0 0 24 24",
          },
          [
            q("path", {
              class: "q-checkbox__truthy",
              fill: "none",
              d: "M1.73,12.91 8.1,19.28 22.79,4.59",
            }),
            q("path", {
              class: "q-checkbox__indet",
              d: "M4,14H20V10H4",
            }),
          ]
        ),
      ]
    ),
  QS = nt({
    name: "QCheckbox",
    props: Bh,
    emits: Uh,
    setup(e) {
      const t = GS();
      function n(r, s) {
        const i = M(
          () =>
            (r.value === !0
              ? e.checkedIcon
              : s.value === !0
              ? e.indeterminateIcon
              : e.uncheckedIcon) || null
        );
        return () =>
          i.value !== null
            ? [
                q(
                  "div",
                  {
                    key: "icon",
                    class:
                      "q-checkbox__icon-container absolute-full flex flex-center no-wrap",
                  },
                  [
                    q(sn, {
                      class: "q-checkbox__icon",
                      name: i.value,
                    }),
                  ]
                ),
              ]
            : [t];
      }
      return Hh("checkbox", n);
    },
  }),
  XS = nt({
    name: "QToggle",
    props: {
      ...Bh,
      icon: String,
      iconColor: String,
    },
    emits: Uh,
    setup(e) {
      function t(n, r) {
        const s = M(
            () =>
              (n.value === !0
                ? e.checkedIcon
                : r.value === !0
                ? e.indeterminateIcon
                : e.uncheckedIcon) || e.icon
          ),
          i = M(() => (n.value === !0 ? e.iconColor : null));
        return () => [
          q("div", {
            class: "q-toggle__track",
          }),
          q(
            "div",
            {
              class: "q-toggle__thumb absolute flex flex-center no-wrap",
            },
            s.value !== void 0
              ? [
                  q(sn, {
                    name: s.value,
                    color: i.value,
                  }),
                ]
              : void 0
          ),
        ];
      }
      return Hh("toggle", t);
    },
  }),
  zh = {
    radio: KS,
    checkbox: QS,
    toggle: XS,
  },
  YS = Object.keys(zh);
function No(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (r) => r[n];
}
const JS = nt({
    name: "QOptionGroup",
    props: {
      ...Qn,
      modelValue: {
        required: !0,
      },
      options: {
        type: Array,
        validator: (e) => e.every(mt),
        default: () => [],
      },
      optionValue: [Function, String],
      optionLabel: [Function, String],
      optionDisable: [Function, String],
      name: String,
      type: {
        type: String,
        default: "radio",
        validator: (e) => YS.includes(e),
      },
      color: String,
      keepColor: Boolean,
      dense: Boolean,
      size: String,
      leftLabel: Boolean,
      inline: Boolean,
      disable: Boolean,
    },
    emits: ["update:modelValue"],
    setup(e, { emit: t, slots: n }) {
      const {
          proxy: { $q: r },
        } = Ce(),
        s = Array.isArray(e.modelValue);
      e.type === "radio"
        ? s === !0 && console.error("q-option-group: model should not be array")
        : s === !1 &&
          console.error("q-option-group: model should be array in your case");
      const i = Xn(e, r),
        o = M(() => zh[e.type]),
        a = M(() => No(e.optionValue, "value")),
        l = M(() => No(e.optionLabel, "label")),
        c = M(() => No(e.optionDisable, "disable")),
        u = M(() =>
          e.options.map((g) => ({
            val: a.value(g),
            name: g.name === void 0 ? e.name : g.name,
            disable: e.disable || c.value(g),
            leftLabel: g.leftLabel === void 0 ? e.leftLabel : g.leftLabel,
            color: g.color === void 0 ? e.color : g.color,
            checkedIcon: g.checkedIcon,
            uncheckedIcon: g.uncheckedIcon,
            dark: g.dark === void 0 ? i.value : g.dark,
            size: g.size === void 0 ? e.size : g.size,
            dense: e.dense,
            keepColor: g.keepColor === void 0 ? e.keepColor : g.keepColor,
          }))
        ),
        f = M(
          () =>
            "q-option-group q-gutter-x-sm" +
            (e.inline === !0 ? " q-option-group--inline" : "")
        ),
        d = M(() => {
          const g = {
            role: "group",
          };
          return (
            e.type === "radio" &&
              ((g.role = "radiogroup"),
              e.disable === !0 && (g["aria-disabled"] = "true")),
            g
          );
        });
      function h(g) {
        t("update:modelValue", g);
      }
      return () =>
        q(
          "div",
          {
            class: f.value,
            ...d.value,
          },
          e.options.map((g, w) => {
            const x =
              n["label-" + w] !== void 0
                ? () => n["label-" + w](g)
                : n.label !== void 0
                ? () => n.label(g)
                : void 0;
            return q("div", [
              q(
                o.value,
                {
                  label: x === void 0 ? l.value(g) : null,
                  modelValue: e.modelValue,
                  "onUpdate:modelValue": h,
                  ...u.value[w],
                },
                x
              ),
            ]);
          })
        );
    },
  }),
  ZS = nt({
    name: "DialogPluginComponent",
    props: {
      ...Qn,
      title: String,
      message: String,
      prompt: Object,
      options: Object,
      progress: [Boolean, Object],
      html: Boolean,
      ok: {
        type: [String, Object, Boolean],
        default: !0,
      },
      cancel: [String, Object, Boolean],
      focus: {
        type: String,
        default: "ok",
        validator: (e) => ["ok", "cancel", "none"].includes(e),
      },
      stackButtons: Boolean,
      color: String,
      cardClass: [String, Array, Object],
      cardStyle: [String, Array, Object],
    },
    emits: ["ok", "hide"],
    setup(e, { emit: t }) {
      const { proxy: n } = Ce(),
        { $q: r } = n,
        s = Xn(e, r),
        i = de(null),
        o = de(
          e.prompt !== void 0
            ? e.prompt.model
            : e.options !== void 0
            ? e.options.model
            : void 0
        ),
        a = M(
          () =>
            "q-dialog-plugin" +
            (s.value === !0 ? " q-dialog-plugin--dark q-dark" : "") +
            (e.progress !== !1 ? " q-dialog-plugin--progress" : "")
        ),
        l = M(() => e.color || (s.value === !0 ? "amber" : "primary")),
        c = M(() =>
          e.progress === !1
            ? null
            : mt(e.progress) === !0
            ? {
                component: e.progress.spinner || br,
                props: {
                  color: e.progress.color || l.value,
                },
              }
            : {
                component: br,
                props: {
                  color: l.value,
                },
              }
        ),
        u = M(() => e.prompt !== void 0 || e.options !== void 0),
        f = M(() => {
          if (u.value !== !0) return {};
          const {
            model: $,
            isValid: ee,
            items: J,
            ...Q
          } = e.prompt !== void 0 ? e.prompt : e.options;
          return Q;
        }),
        d = M(() => (mt(e.ok) === !0 || e.ok === !0 ? r.lang.label.ok : e.ok)),
        h = M(() =>
          mt(e.cancel) === !0 || e.cancel === !0
            ? r.lang.label.cancel
            : e.cancel
        ),
        g = M(() =>
          e.prompt !== void 0
            ? e.prompt.isValid !== void 0 && e.prompt.isValid(o.value) !== !0
            : e.options !== void 0
            ? e.options.isValid !== void 0 && e.options.isValid(o.value) !== !0
            : !1
        ),
        w = M(() => ({
          color: l.value,
          label: d.value,
          ripple: !1,
          disable: g.value,
          ...(mt(e.ok) === !0
            ? e.ok
            : {
                flat: !0,
              }),
          "data-autofocus": (e.focus === "ok" && u.value !== !0) || void 0,
          onClick: S,
        })),
        x = M(() => ({
          color: l.value,
          label: h.value,
          ripple: !1,
          ...(mt(e.cancel) === !0
            ? e.cancel
            : {
                flat: !0,
              }),
          "data-autofocus": (e.focus === "cancel" && u.value !== !0) || void 0,
          onClick: b,
        }));
      he(() => e.prompt && e.prompt.model, L),
        he(() => e.options && e.options.model, L);
      function y() {
        i.value.show();
      }
      function m() {
        i.value.hide();
      }
      function S() {
        t("ok", ue(o.value)), m();
      }
      function b() {
        m();
      }
      function P() {
        t("hide");
      }
      function L($) {
        o.value = $;
      }
      function N($) {
        g.value !== !0 &&
          e.prompt.type !== "textarea" &&
          as($, 13) === !0 &&
          S();
      }
      function W($, ee) {
        return e.html === !0
          ? q(Or, {
              class: $,
              innerHTML: ee,
            })
          : q(
              Or,
              {
                class: $,
              },
              () => ee
            );
      }
      function k() {
        return [
          q(HS, {
            color: l.value,
            dense: !0,
            autofocus: !0,
            dark: s.value,
            ...f.value,
            modelValue: o.value,
            "onUpdate:modelValue": L,
            onKeyup: N,
          }),
        ];
      }
      function O() {
        return [
          q(JS, {
            color: l.value,
            options: e.options.items,
            dark: s.value,
            ...f.value,
            modelValue: o.value,
            "onUpdate:modelValue": L,
          }),
        ];
      }
      function V() {
        const $ = [];
        return (
          e.cancel && $.push(q(ma, x.value)),
          e.ok && $.push(q(ma, w.value)),
          q(
            _S,
            {
              class: e.stackButtons === !0 ? "items-end" : "",
              vertical: e.stackButtons,
              align: "right",
            },
            () => $
          )
        );
      }
      function C() {
        const $ = [];
        return (
          e.title && $.push(W("q-dialog__title", e.title)),
          e.progress !== !1 &&
            $.push(
              q(
                Or,
                {
                  class: "q-dialog__progress",
                },
                () => q(c.value.component, c.value.props)
              )
            ),
          e.message && $.push(W("q-dialog__message", e.message)),
          e.prompt !== void 0
            ? $.push(
                q(
                  Or,
                  {
                    class: "scroll q-dialog-plugin__form",
                  },
                  k
                )
              )
            : e.options !== void 0 &&
              $.push(
                q(wu, {
                  dark: s.value,
                }),
                q(
                  Or,
                  {
                    class: "scroll q-dialog-plugin__form",
                  },
                  O
                ),
                q(wu, {
                  dark: s.value,
                })
              ),
          (e.ok || e.cancel) && $.push(V()),
          $
        );
      }
      function G() {
        return [
          q(
            bS,
            {
              class: [a.value, e.cardClass],
              style: e.cardStyle,
              dark: s.value,
            },
            C
          ),
        ];
      }
      return (
        Object.assign(n, {
          show: y,
          hide: m,
        }),
        () =>
          q(
            Q0,
            {
              ref: i,
              onHide: P,
            },
            G
          )
      );
    },
  });
function Kh(e, t) {
  for (const n in t)
    n !== "spinner" && Object(t[n]) === t[n]
      ? ((e[n] =
          Object(e[n]) !== e[n]
            ? {}
            : {
                ...e[n],
              }),
        Kh(e[n], t[n]))
      : (e[n] = t[n]);
}
function eE(e, t, n) {
  return (r) => {
    let s, i;
    const o = r.component !== void 0;
    if (o === !0) {
      const { component: m, componentProps: S } = r;
      (s = typeof m == "string" ? n.component(m) : m), (i = S || {});
    } else {
      const { class: m, style: S, ...b } = r;
      (s = e),
        (i = b),
        m !== void 0 && (b.cardClass = m),
        S !== void 0 && (b.cardStyle = S);
    }
    let a,
      l = !1;
    const c = de(null),
      u = Ui(!1, "dialog"),
      f = (m) => {
        if (c.value?.[m] !== void 0) {
          c.value[m]();
          return;
        }
        const S = a.$.subTree;
        if (S?.component) {
          if (S.component.proxy && S.component.proxy[m]) {
            S.component.proxy[m]();
            return;
          }
          if (
            S.component.subTree &&
            S.component.subTree.component &&
            S.component.subTree.component.proxy &&
            S.component.subTree.component.proxy[m]
          ) {
            S.component.subTree.component.proxy[m]();
            return;
          }
        }
        console.error("[Quasar] Incorrectly defined Dialog component");
      },
      d = [],
      h = [],
      g = {
        onOk(m) {
          return d.push(m), g;
        },
        onCancel(m) {
          return h.push(m), g;
        },
        onDismiss(m) {
          return d.push(m), h.push(m), g;
        },
        hide() {
          return f("hide"), g;
        },
        update(m) {
          if (a !== null) {
            if (o === !0) Object.assign(i, m);
            else {
              const { class: S, style: b, ...P } = m;
              S !== void 0 && (P.cardClass = S),
                b !== void 0 && (P.cardStyle = b),
                Kh(i, P);
            }
            a.$forceUpdate();
          }
          return g;
        },
      },
      w = (m) => {
        (l = !0),
          d.forEach((S) => {
            S(m);
          });
      },
      x = () => {
        y.unmount(u),
          il(u),
          (y = null),
          (a = null),
          l !== !0 &&
            h.forEach((m) => {
              m();
            });
      };
    let y = qa(
      {
        name: "QGlobalDialog",
        setup: () => () =>
          q(s, {
            ...i,
            ref: c,
            onOk: w,
            onHide: x,
            onVnodeMounted(...m) {
              typeof i.onVnodeMounted == "function" && i.onVnodeMounted(...m),
                ct(() => f("show"));
            },
          }),
      },
      n
    );
    return (a = y.mount(u)), g;
  };
}
const tE = {
  install({ $q: e, parentApp: t }) {
    e.dialog = this.create = eE(ZS, !0, t);
  },
};
let nr,
  Ao,
  Nu = 0,
  Mn = null,
  Ge = {},
  jn = {};
const Gh = {
    group: "__default_quasar_group__",
    delay: 0,
    message: !1,
    html: !1,
    spinnerSize: 80,
    spinnerColor: "",
    messageColor: "",
    backgroundColor: "",
    boxClass: "",
    spinner: br,
    customClass: "",
  },
  Qh = {
    ...Gh,
  };
function nE(e) {
  if (e?.group !== void 0 && jn[e.group] !== void 0)
    return Object.assign(jn[e.group], e);
  const t =
    mt(e) === !0 && e.ignoreDefaults === !0
      ? {
          ...Gh,
          ...e,
        }
      : {
          ...Qh,
          ...e,
        };
  return (jn[t.group] = t), t;
}
const It = wr(
    {
      isActive: !1,
    },
    {
      show(e) {
        Ge = nE(e);
        const { group: t } = Ge;
        return (
          (It.isActive = !0),
          nr !== void 0
            ? ((Ge.uid = Nu), Ao.$forceUpdate())
            : ((Ge.uid = ++Nu),
              Mn !== null && clearTimeout(Mn),
              (Mn = setTimeout(() => {
                Mn = null;
                const n = Ui("q-loading");
                (nr = qa(
                  {
                    name: "QLoading",
                    setup() {
                      xt(() => {
                        da(!0);
                      });
                      function r() {
                        It.isActive !== !0 &&
                          nr !== void 0 &&
                          (da(!1),
                          nr.unmount(n),
                          il(n),
                          (nr = void 0),
                          (Ao = void 0));
                      }
                      function s() {
                        if (It.isActive !== !0) return null;
                        const i = [
                          q(Ge.spinner, {
                            class: "q-loading__spinner",
                            color: Ge.spinnerColor,
                            size: Ge.spinnerSize,
                          }),
                        ];
                        return (
                          Ge.message &&
                            i.push(
                              q("div", {
                                class:
                                  "q-loading__message" +
                                  (Ge.messageColor
                                    ? ` text-${Ge.messageColor}`
                                    : ""),
                                [Ge.html === !0 ? "innerHTML" : "textContent"]:
                                  Ge.message,
                              })
                            ),
                          q(
                            "div",
                            {
                              class:
                                "q-loading fullscreen flex flex-center z-max " +
                                Ge.customClass.trim(),
                              key: Ge.uid,
                            },
                            [
                              q("div", {
                                class:
                                  "q-loading__backdrop" +
                                  (Ge.backgroundColor
                                    ? ` bg-${Ge.backgroundColor}`
                                    : ""),
                              }),
                              q(
                                "div",
                                {
                                  class:
                                    "q-loading__box column items-center " +
                                    Ge.boxClass,
                                },
                                i
                              ),
                            ]
                          )
                        );
                      }
                      return () =>
                        q(
                          is,
                          {
                            name: "q-transition--fade",
                            appear: !0,
                            onAfterLeave: r,
                          },
                          s
                        );
                    },
                  },
                  It.__parentApp
                )),
                  (Ao = nr.mount(n));
              }, Ge.delay))),
          (n) => {
            if (n === void 0 || Object(n) !== n) {
              It.hide(t);
              return;
            }
            It.show({
              ...n,
              group: t,
            });
          }
        );
      },
      hide(e) {
        if (It.isActive === !0) {
          if (e === void 0) jn = {};
          else {
            if (jn[e] === void 0) return;
            {
              delete jn[e];
              const t = Object.keys(jn);
              if (t.length !== 0) {
                const n = t[t.length - 1];
                It.show({
                  group: n,
                });
                return;
              }
            }
          }
          Mn !== null && (clearTimeout(Mn), (Mn = null)), (It.isActive = !1);
        }
      },
      setDefaults(e) {
        mt(e) === !0 && Object.assign(Qh, e);
      },
      install({ $q: e, parentApp: t }) {
        (e.loading = this),
          (It.__parentApp = t),
          e.config.loading !== void 0 && this.setDefaults(e.config.loading);
      },
    }
  ),
  rE = nt({
    name: "QAvatar",
    props: {
      ...ws,
      fontSize: String,
      color: String,
      textColor: String,
      icon: String,
      square: Boolean,
      rounded: Boolean,
    },
    setup(e, { slots: t }) {
      const n = Ss(e),
        r = M(
          () =>
            "q-avatar" +
            (e.color ? ` bg-${e.color}` : "") +
            (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") +
            (e.square === !0
              ? " q-avatar--square"
              : e.rounded === !0
              ? " rounded-borders"
              : "")
        ),
        s = M(() =>
          e.fontSize
            ? {
                fontSize: e.fontSize,
              }
            : null
        );
      return () => {
        const i =
          e.icon !== void 0
            ? [
                q(sn, {
                  name: e.icon,
                }),
              ]
            : void 0;
        return q(
          "div",
          {
            class: r.value,
            style: n.value,
          },
          [
            q(
              "div",
              {
                class: "q-avatar__content row flex-center overflow-hidden",
                style: s.value,
              },
              W0(t.default, i)
            ),
          ]
        );
      };
    },
  });
let sE = 0;
const Gs = {},
  Qs = {},
  Nt = {},
  Xh = {},
  iE = /^\s*$/,
  Yh = [],
  oE = [void 0, null, !0, !1, ""],
  al = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
    "top",
    "bottom",
    "left",
    "right",
    "center",
  ],
  aE = ["top-left", "top-right", "bottom-left", "bottom-right"],
  qr = {
    positive: {
      icon: (e) => e.iconSet.type.positive,
      color: "positive",
    },
    negative: {
      icon: (e) => e.iconSet.type.negative,
      color: "negative",
    },
    warning: {
      icon: (e) => e.iconSet.type.warning,
      color: "warning",
      textColor: "dark",
    },
    info: {
      icon: (e) => e.iconSet.type.info,
      color: "info",
    },
    ongoing: {
      group: !1,
      timeout: 0,
      spinner: !0,
      color: "grey-8",
    },
  };
function Jh(e, t, n) {
  if (!e) return Rr("parameter required");
  let r;
  const s = {
    textColor: "white",
  };
  if (
    (e.ignoreDefaults !== !0 && Object.assign(s, Gs),
    mt(e) === !1 &&
      (s.type && Object.assign(s, qr[s.type]),
      (e = {
        message: e,
      })),
    Object.assign(s, qr[e.type || s.type], e),
    typeof s.icon == "function" && (s.icon = s.icon(t)),
    s.spinner
      ? (s.spinner === !0 && (s.spinner = br), (s.spinner = Gn(s.spinner)))
      : (s.spinner = !1),
    (s.meta = {
      hasMedia: !!(s.spinner !== !1 || s.icon || s.avatar),
      hasText: Au(s.message) || Au(s.caption),
    }),
    s.position)
  ) {
    if (al.includes(s.position) === !1) return Rr("wrong position", e);
  } else s.position = "bottom";
  if (oE.includes(s.timeout) === !0) s.timeout = 5e3;
  else {
    const l = Number(s.timeout);
    if (isNaN(l) || l < 0) return Rr("wrong timeout", e);
    s.timeout = Number.isFinite(l) ? l : 0;
  }
  s.timeout === 0
    ? (s.progress = !1)
    : s.progress === !0 &&
      ((s.meta.progressClass =
        "q-notification__progress" +
        (s.progressClass ? ` ${s.progressClass}` : "")),
      (s.meta.progressStyle = {
        animationDuration: `${s.timeout + 1e3}ms`,
      }));
  const i = (Array.isArray(e.actions) === !0 ? e.actions : [])
      .concat(
        e.ignoreDefaults !== !0 && Array.isArray(Gs.actions) === !0
          ? Gs.actions
          : []
      )
      .concat(
        Array.isArray(qr[e.type]?.actions) === !0 ? qr[e.type].actions : []
      ),
    { closeBtn: o } = s;
  if (
    (o &&
      i.push({
        label: typeof o == "string" ? o : t.lang.label.close,
      }),
    (s.actions = i.map(({ handler: l, noDismiss: c, ...u }) => ({
      flat: !0,
      ...u,
      onClick:
        typeof l == "function"
          ? () => {
              l(), c !== !0 && a();
            }
          : () => {
              a();
            },
    }))),
    s.multiLine === void 0 && (s.multiLine = s.actions.length > 1),
    Object.assign(s.meta, {
      class:
        `q-notification row items-stretch q-notification--${
          s.multiLine === !0 ? "multi-line" : "standard"
        }` +
        (s.color !== void 0 ? ` bg-${s.color}` : "") +
        (s.textColor !== void 0 ? ` text-${s.textColor}` : "") +
        (s.classes !== void 0 ? ` ${s.classes}` : ""),
      wrapperClass:
        "q-notification__wrapper col relative-position border-radius-inherit " +
        (s.multiLine === !0
          ? "column no-wrap justify-center"
          : "row items-center"),
      contentClass:
        "q-notification__content row items-center" +
        (s.multiLine === !0 ? "" : " col"),
      leftClass: s.meta.hasText === !0 ? "additional" : "single",
      attrs: {
        role: "alert",
        ...s.attrs,
      },
    }),
    s.group === !1
      ? ((s.group = void 0), (s.meta.group = void 0))
      : ((s.group === void 0 || s.group === !0) &&
          (s.group = [s.message, s.caption, s.multiline]
            .concat(s.actions.map((l) => `${l.label}*${l.icon}`))
            .join("|")),
        (s.meta.group = s.group + "|" + s.position)),
    s.actions.length === 0
      ? (s.actions = void 0)
      : (s.meta.actionsClass =
          "q-notification__actions row items-center " +
          (s.multiLine === !0 ? "justify-end" : "col-auto") +
          (s.meta.hasMedia === !0
            ? " q-notification__actions--with-media"
            : "")),
    n !== void 0)
  ) {
    n.notif.meta.timer &&
      (clearTimeout(n.notif.meta.timer), (n.notif.meta.timer = void 0)),
      (s.meta.uid = n.notif.meta.uid);
    const l = Nt[s.position].value.indexOf(n.notif);
    Nt[s.position].value[l] = s;
  } else {
    const l = Qs[s.meta.group];
    if (l === void 0) {
      if (
        ((s.meta.uid = sE++),
        (s.meta.badge = 1),
        ["left", "right", "center"].indexOf(s.position) !== -1)
      )
        Nt[s.position].value.splice(
          Math.floor(Nt[s.position].value.length / 2),
          0,
          s
        );
      else {
        const c = s.position.indexOf("top") !== -1 ? "unshift" : "push";
        Nt[s.position].value[c](s);
      }
      s.group !== void 0 && (Qs[s.meta.group] = s);
    } else {
      if (
        (l.meta.timer && (clearTimeout(l.meta.timer), (l.meta.timer = void 0)),
        s.badgePosition !== void 0)
      ) {
        if (aE.includes(s.badgePosition) === !1)
          return Rr("wrong badgePosition", e);
      } else
        s.badgePosition = `top-${
          s.position.indexOf("left") !== -1 ? "right" : "left"
        }`;
      (s.meta.uid = l.meta.uid),
        (s.meta.badge = l.meta.badge + 1),
        (s.meta.badgeClass =
          `q-notification__badge q-notification__badge--${s.badgePosition}` +
          (s.badgeColor !== void 0 ? ` bg-${s.badgeColor}` : "") +
          (s.badgeTextColor !== void 0 ? ` text-${s.badgeTextColor}` : "") +
          (s.badgeClass ? ` ${s.badgeClass}` : ""));
      const c = Nt[s.position].value.indexOf(l);
      Nt[s.position].value[c] = Qs[s.meta.group] = s;
    }
  }
  const a = () => {
    lE(s), (r = void 0);
  };
  if (
    (s.timeout > 0 &&
      (s.meta.timer = setTimeout(() => {
        (s.meta.timer = void 0), a();
      }, s.timeout + 1e3)),
    s.group !== void 0)
  )
    return (l) => {
      l !== void 0
        ? Rr("trying to update a grouped one which is forbidden", e)
        : a();
    };
  if (
    ((r = {
      dismiss: a,
      config: e,
      notif: s,
    }),
    n !== void 0)
  ) {
    Object.assign(n, r);
    return;
  }
  return (l) => {
    if (r !== void 0)
      if (l === void 0) r.dismiss();
      else {
        const c = Object.assign({}, r.config, l, {
          group: !1,
          position: s.position,
        });
        Jh(c, t, r);
      }
  };
}
function lE(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), (e.meta.timer = void 0));
  const t = Nt[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete Qs[e.meta.group];
    const n = Yh["" + e.meta.uid];
    if (n) {
      const { width: r, height: s } = getComputedStyle(n);
      (n.style.left = `${n.offsetLeft}px`),
        (n.style.width = r),
        (n.style.height = s);
    }
    Nt[e.position].value.splice(t, 1),
      typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function Au(e) {
  return e != null && iE.test(e) !== !0;
}
function Rr(e, t) {
  return console.error(`Notify: ${e}`, t), !1;
}
function cE() {
  return nt({
    name: "QNotifications",
    devtools: {
      hide: !0,
    },
    setup() {
      return () =>
        q(
          "div",
          {
            class: "q-notifications",
          },
          al.map((e) =>
            q(
              xp,
              {
                key: e,
                class: Xh[e],
                tag: "div",
                name: `q-notification--${e}`,
              },
              () =>
                Nt[e].value.map((t) => {
                  const n = t.meta,
                    r = [];
                  if (
                    (n.hasMedia === !0 &&
                      (t.spinner !== !1
                        ? r.push(
                            q(t.spinner, {
                              class:
                                "q-notification__spinner q-notification__spinner--" +
                                n.leftClass,
                              color: t.spinnerColor,
                              size: t.spinnerSize,
                            })
                          )
                        : t.icon
                        ? r.push(
                            q(sn, {
                              class:
                                "q-notification__icon q-notification__icon--" +
                                n.leftClass,
                              name: t.icon,
                              color: t.iconColor,
                              size: t.iconSize,
                              role: "img",
                            })
                          )
                        : t.avatar &&
                          r.push(
                            q(
                              rE,
                              {
                                class:
                                  "q-notification__avatar q-notification__avatar--" +
                                  n.leftClass,
                              },
                              () =>
                                q("img", {
                                  src: t.avatar,
                                  "aria-hidden": "true",
                                })
                            )
                          )),
                    n.hasText === !0)
                  ) {
                    let i;
                    const o = {
                      class: "q-notification__message col",
                    };
                    if (t.html === !0)
                      o.innerHTML = t.caption
                        ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>`
                        : t.message;
                    else {
                      const a = [t.message];
                      i = t.caption
                        ? [
                            q("div", a),
                            q(
                              "div",
                              {
                                class: "q-notification__caption",
                              },
                              [t.caption]
                            ),
                          ]
                        : a;
                    }
                    r.push(q("div", o, i));
                  }
                  const s = [
                    q(
                      "div",
                      {
                        class: n.contentClass,
                      },
                      r
                    ),
                  ];
                  return (
                    t.progress === !0 &&
                      s.push(
                        q("div", {
                          key: `${n.uid}|p|${n.badge}`,
                          class: n.progressClass,
                          style: n.progressStyle,
                        })
                      ),
                    t.actions !== void 0 &&
                      s.push(
                        q(
                          "div",
                          {
                            class: n.actionsClass,
                          },
                          t.actions.map((i) => q(ma, i))
                        )
                      ),
                    n.badge > 1 &&
                      s.push(
                        q(
                          "div",
                          {
                            key: `${n.uid}|${n.badge}`,
                            class: t.meta.badgeClass,
                            style: t.badgeStyle,
                          },
                          [n.badge]
                        )
                      ),
                    q(
                      "div",
                      {
                        ref: (i) => {
                          Yh["" + n.uid] = i;
                        },
                        key: n.uid,
                        class: n.class,
                        ...n.attrs,
                      },
                      [
                        q(
                          "div",
                          {
                            class: n.wrapperClass,
                          },
                          s
                        ),
                      ]
                    )
                  );
                })
            )
          )
        );
    },
  });
}
const uE = {
    setDefaults(e) {
      mt(e) === !0 && Object.assign(Gs, e);
    },
    registerType(e, t) {
      mt(t) === !0 && (qr[e] = t);
    },
    install({ $q: e, parentApp: t }) {
      if (
        ((e.notify = this.create = (n) => Jh(n, e)),
        (e.notify.setDefaults = this.setDefaults),
        (e.notify.registerType = this.registerType),
        e.config.notify !== void 0 && this.setDefaults(e.config.notify),
        this.__installed !== !0)
      ) {
        al.forEach((r) => {
          Nt[r] = de([]);
          const s =
              ["left", "center", "right"].includes(r) === !0
                ? "center"
                : r.indexOf("top") !== -1
                ? "top"
                : "bottom",
            i =
              r.indexOf("left") !== -1
                ? "start"
                : r.indexOf("right") !== -1
                ? "end"
                : "center",
            o = ["left", "right"].includes(r)
              ? `items-${r === "left" ? "start" : "end"} justify-center`
              : r === "center"
              ? "flex-center"
              : `items-${i}`;
          Xh[
            r
          ] = `q-notifications__list q-notifications__list--${s} fixed column no-wrap ${o}`;
        });
        const n = Ui("q-notify");
        qa(cE(), t).mount(n);
      }
    },
  },
  Mr = {};
function fE(e) {
  Object.assign(Je, {
    request: e,
    exit: e,
    toggle: e,
  });
}
function Zh() {
  return (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement ||
    null
  );
}
function em() {
  const e = (Je.activeEl = Je.isActive === !1 ? null : Zh());
  N0(e === null || e === document.documentElement ? document.body : e);
}
function dE() {
  (Je.isActive = Je.isActive === !1), em();
}
function Lu(e, t) {
  try {
    const n = e[t]();
    return n === void 0 ? Promise.resolve() : n;
  } catch (n) {
    return Promise.reject(n);
  }
}
const Je = wr(
  {
    isActive: !1,
    activeEl: null,
  },
  {
    isCapable: !1,
    install({ $q: e }) {
      e.fullscreen = this;
    },
  }
);
(Mr.request = [
  "requestFullscreen",
  "msRequestFullscreen",
  "mozRequestFullScreen",
  "webkitRequestFullscreen",
].find((e) => document.documentElement[e] !== void 0)),
  (Je.isCapable = Mr.request !== void 0),
  Je.isCapable === !1
    ? fE(() => Promise.reject("Not capable"))
    : (Object.assign(Je, {
        request(e) {
          const t = e || document.documentElement,
            { activeEl: n } = Je;
          return t === n
            ? Promise.resolve()
            : (n !== null && t.contains(n) === !0
                ? Je.exit()
                : Promise.resolve()
              ).finally(() => Lu(t, Mr.request));
        },
        exit() {
          return Je.isActive === !0 ? Lu(document, Mr.exit) : Promise.resolve();
        },
        toggle(e) {
          return Je.isActive === !0 ? Je.exit() : Je.request(e);
        },
      }),
      (Mr.exit = [
        "exitFullscreen",
        "msExitFullscreen",
        "mozCancelFullScreen",
        "webkitExitFullscreen",
      ].find((e) => document[e])),
      (Je.isActive = !!Zh()),
      Je.isActive === !0 && em(),
      [
        "onfullscreenchange",
        "onmsfullscreenchange",
        "onwebkitfullscreenchange",
      ].forEach((e) => {
        document[e] = dE;
      }));
const hE = {
    config: {
      dark: "auto",
      notify: {
        progress: !0,
      },
      brand: {
        primary: "#3369e8",
        positive: "#009925",
        negative: "#d50f25",
        warning: "#EEB211",
      },
    },
    iconSet: y0,
    plugins: {
      Dialog: tE,
      Loading: It,
      Notify: uE,
      AppFullscreen: Je,
    },
  },
  mE = "/";
async function gE({ app: e, router: t, store: n }, r) {
  let s = !1;
  const i = (l) => {
      try {
        return t.resolve(l).href;
      } catch {}
      return Object(l) === l ? null : l;
    },
    o = (l) => {
      if (((s = !0), typeof l == "string" && /^https?:\/\//.test(l))) {
        window.location.href = l;
        return;
      }
      const c = i(l);
      c !== null && (window.location.href = c);
    },
    a = window.location.href.replace(window.location.origin, "");
  for (let l = 0; s === !1 && l < r.length; l++)
    try {
      await r[l]({
        app: e,
        router: t,
        store: n,
        ssrContext: null,
        redirect: o,
        urlPath: a,
        publicPath: mE,
      });
    } catch (c) {
      if (c && c.url) {
        o(c.url);
        return;
      }
      console.error("[Quasar] boot error:", c);
      return;
    }
  s !== !0 && (e.use(t), e.mount("#q-app"));
}
v0(id, hE).then((e) => {
  const [t, n] =
    Promise.allSettled !== void 0
      ? [
          "allSettled",
          (r) =>
            r.map((s) => {
              if (s.status === "rejected") {
                console.error("[Quasar] boot error:", s.reason);
                return;
              }
              return s.value.default;
            }),
        ]
      : ["all", (r) => r.map((s) => s.default)];
  return Promise[t]([
    Se(() => import("https://wheelofnames.com/assets/i18n-v358.js"), __vite__mapDeps([69, 70])),
    Se(() => import("https://wheelofnames.com/assets/head-v358.js"), __vite__mapDeps([71, 62])),
  ]).then((r) => {
    const s = n(r).filter((i) => typeof i == "function");
    gE(e, s);
  });
});
export {
  Ho as $,
  ut as A,
  RE as B,
  AE as C,
  LE as D,
  Vs as E,
  it as F,
  Tn as G,
  hy as H,
  qi as I,
  d0 as J,
  dg as K,
  Q0 as L,
  Zt as M,
  kE as N,
  _S as O,
  ma as P,
  bS as Q,
  cC as R,
  bw as S,
  is as T,
  q_ as U,
  _w as V,
  P_ as W,
  XS as X,
  sv as Y,
  tE as Z,
  uE as _,
  Me as a,
  sl as a$,
  WC as a0,
  $E as a1,
  ZC as a2,
  fS as a3,
  sn as a4,
  Mh as a5,
  Fh as a6,
  BC as a7,
  Wp as a8,
  as as a9,
  c0 as aA,
  xC as aB,
  HS as aC,
  ww as aD,
  kC as aE,
  jC as aF,
  EC as aG,
  wC as aH,
  _C as aI,
  Se as aJ,
  PE as aK,
  Pe as aL,
  xE as aM,
  Sa as aN,
  It as aO,
  Zc as aP,
  Ow as aQ,
  iC as aR,
  oC as aS,
  BE as aT,
  pC as aU,
  z0 as aV,
  uu as aW,
  K0 as aX,
  Bp as aY,
  fu as aZ,
  A0 as a_,
  UC as aa,
  HC as ab,
  pf as ac,
  E0 as ad,
  zC as ae,
  k0 as af,
  S0 as ag,
  w0 as ah,
  x0 as ai,
  C0 as aj,
  R0 as ak,
  Tt as al,
  zp as am,
  Hp as an,
  KC as ao,
  wt as ap,
  ws as aq,
  Ss as ar,
  JC as as,
  W0 as at,
  oS as au,
  FE as av,
  YC as aw,
  m0 as ax,
  Ct as ay,
  $e as az,
  Gf as b,
  wu as b$,
  F0 as b0,
  Rt as b1,
  Ra as b2,
  Wf as b3,
  Pi as b4,
  xf as b5,
  Xa as b6,
  gC as b7,
  wa as b8,
  FC as b9,
  RC as bA,
  MC as bB,
  aC as bC,
  IC as bD,
  AC as bE,
  LC as bF,
  lC as bG,
  CC as bH,
  NC as bI,
  VE as bJ,
  DE as bK,
  DC as bL,
  qC as bM,
  PC as bN,
  VC as bO,
  Tw as bP,
  TC as bQ,
  nh as bR,
  eC as bS,
  uC as bT,
  F_ as bU,
  CE as bV,
  yC as bW,
  pS as bX,
  CS as bY,
  ek as bZ,
  fi as b_,
  $C as ba,
  jE as bb,
  WE as bc,
  D_ as bd,
  rE as be,
  TE as bf,
  Sn as bg,
  ct as bh,
  ft as bi,
  Ks as bj,
  Be as bk,
  XC as bl,
  os as bm,
  kh as bn,
  xh as bo,
  Kn as bp,
  Ni as bq,
  St as br,
  GE as bs,
  tC as bt,
  mC as bu,
  hC as bv,
  Je as bw,
  ue as bx,
  sC as by,
  OC as bz,
  ai as c,
  pE as c$,
  LS as c0,
  AS as c1,
  RS as c2,
  OS as c3,
  ad as c4,
  og as c5,
  ol as c6,
  DS as c7,
  pa as c8,
  US as c9,
  SE as cA,
  NS as cB,
  qS as cC,
  _r as cD,
  rl as cE,
  ZE as cF,
  HE as cG,
  fC as cH,
  zE as cI,
  aw as cJ,
  KE as cK,
  SC as cL,
  vC as cM,
  UE as cN,
  JE as cO,
  QC as cP,
  GC as cQ,
  qE as cR,
  go as cS,
  po as cT,
  cr as cU,
  YE as cV,
  XE as cW,
  th as cX,
  rC as cY,
  bE as cZ,
  pw as c_,
  io as ca,
  cd as cb,
  Pf as cc,
  Oa as cd,
  OE as ce,
  dC as cf,
  xp as cg,
  Dn as ch,
  dh as ci,
  nC as cj,
  lh as ck,
  bC as cl,
  QS as cm,
  KS as cn,
  NE as co,
  IE as cp,
  ME as cq,
  mt as cr,
  Vh as cs,
  tk as ct,
  vE as cu,
  Io as cv,
  iS as cw,
  ga as cx,
  of as cy,
  wE as cz,
  Or as d,
  zg as e,
  nt as f,
  M as g,
  q as h,
  EE as i,
  Vn as j,
  _E as k,
  de as l,
  xn as m,
  xt as n,
  oi as o,
  Lt as p,
  br as q,
  yE as r,
  he as s,
  vm as t,
  _0 as u,
  Eh as v,
  Jm as w,
  Ce as x,
  Qn as y,
  Xn as z,
};
