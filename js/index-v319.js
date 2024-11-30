const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index.esm-v319.js",
      "assets/index.esm2017-v319.js",
      "assets/index.esm-v3193.js",
      "assets/index.esm-v3192.js",
      "assets/esm-v319.js",
      "assets/_commonjsHelpers-v319.js",
      "assets/FaqPage-v319.js",
      "assets/QToolbar-v319.js",
      "assets/QTabPanels-v319.js",
      "assets/use-panel-v319.js",
      "assets/selection-v319.js",
      "assets/AppToolbarSimple-v319.js",
      "assets/QToolbarTitle-v319.js",
      "assets/DarkModeToggle-v319.js",
      "assets/AppToolbarSimple-CZd73NAP.css",
      "assets/FaqTabApi-v319.js",
      "assets/AboutCard-v319.js",
      "assets/Messenger-v319.js",
      "assets/FaqTabApi-DnWVOUqX.css",
      "assets/QBadge-v319.js",
      "assets/QChip-v319.js",
      "assets/QMarkupTable-v319.js",
      "assets/FaqPage-p2JcpVF3.css",
      "assets/TutorialsPage-v319.js",
      "assets/QVideo-v319.js",
      "assets/use-ratio-v319.js",
      "assets/ClassroomPage-v319.js",
      "assets/PrivacyPolicyPage-v319.js",
      "assets/PrivacyPolicyPage-DNHLk9iR.css",
      "assets/ChangelogPage-v319.js",
      "assets/ChangelogPage-ChJUUh9c.css",
      "assets/GalleryPage-v319.js",
      "assets/dynamic-import-helper-v319.js",
      "assets/QPage-v319.js",
      "assets/GallerySuggestionList-v319.js",
      "assets/QSpace-v319.js",
      "assets/QTooltip-v319.js",
      "assets/position-engine-v319.js",
      "assets/GallerySuggestionList-Dvw9O81Q.css",
      "assets/GalleryPage-DaEZ4uhq.css",
      "assets/EditWheelPage-v319.js",
      "assets/DialogCloseIcon-v319.js",
      "assets/DialogCloseIcon-Bll4NxFl.css",
      "assets/WinnerAnimation-v319.js",
      "assets/QImg-v319.js",
      "assets/QCarousel-v319.js",
      "assets/WinnerAnimation-CvM7U6hJ.css",
      "assets/vue.f49591ad-v319.js",
      "assets/EditWheelPage-CcFM_dgI.css",
      "assets/ApiPage-v319.js",
      "assets/SharedWheelPage-v319.js",
      "assets/ExportPage-v319.js",
      "assets/ExportPage-CuFB1jWB.css",
      "assets/TranslationPage-v319.js",
      "assets/AdminPage-v319.js",
      "assets/QBreadcrumbs-v319.js",
      "assets/AdminPage-Cp1v64oL.css",
      "assets/ReviewWheelPage-v319.js",
      "assets/ReviewWheelPage-BPlPh2r0.css",
      "assets/GalleryReviewPage-v319.js",
      "assets/GalleryReviewPage-Cto5uZXU.css",
      "assets/CarouselPage-v319.js",
      "assets/i18n-v319.js",
      "assets/en-US-v319.js",
      "assets/head-v319.js",
    ])
) => i.map((i) => d[i]);
var yg = Object.defineProperty;
var wg = (e, t, n) =>
  t in e
    ? yg(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n,
      })
    : (e[t] = n);
var z = (e, t, n) => wg(e, typeof t != "symbol" ? t + "" : t, n);
const Eg = (function () {
    const t =
      typeof document != "undefined" && document.createElement("link").relList;
    return t && t.supports && t.supports("modulepreload")
      ? "modulepreload"
      : "preload";
  })(),
  Sg = function (e) {
    return "/" + e;
  },
  Pl = {},
  me = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const s = document.querySelector("meta[property=csp-nonce]"),
        a =
          (s == null ? void 0 : s.nonce) ||
          (s == null ? void 0 : s.getAttribute("nonce"));
      i = Promise.allSettled(
        n.map((l) => {
          if (((l = Sg(l)), l in Pl)) return;
          Pl[l] = !0;
          const u = l.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = u ? "stylesheet" : Eg),
            u || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = l),
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            u)
          )
            return new Promise((d, h) => {
              f.addEventListener("load", d),
                f.addEventListener("error", () =>
                  h(new Error(`Unable to preload CSS for ${l}`))
                );
            });
        })
      );
    }
    function o(s) {
      const a = new Event("vite:preloadError", {
        cancelable: !0,
      });
      if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented))
        throw s;
    }
    return i.then((s) => {
      for (const a of s || []) a.status === "rejected" && o(a.reason);
      return t().catch(o);
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
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function ka(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Te = {},
  ur = [],
  Ut = () => {},
  Cg = () => !1,
  ko = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ta = (e) => e.startsWith("onUpdate:"),
  Fe = Object.assign,
  Ia = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  kg = Object.prototype.hasOwnProperty,
  Se = (e, t) => kg.call(e, t),
  ae = Array.isArray,
  fr = (e) => _i(e) === "[object Map]",
  ef = (e) => _i(e) === "[object Set]",
  Tg = (e) => _i(e) === "[object RegExp]",
  ce = (e) => typeof e == "function",
  Le = (e) => typeof e == "string",
  sn = (e) => typeof e == "symbol",
  Oe = (e) => e !== null && typeof e == "object",
  tf = (e) => (Oe(e) || ce(e)) && ce(e.then) && ce(e.catch),
  nf = Object.prototype.toString,
  _i = (e) => nf.call(e),
  Ig = (e) => _i(e).slice(8, -1),
  rf = (e) => _i(e) === "[object Object]",
  Aa = (e) =>
    Le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Kr = ka(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  To = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Ag = /-(\w)/g,
  At = To((e) => e.replace(Ag, (t, n) => (n ? n.toUpperCase() : ""))),
  Og = /\B([A-Z])/g,
  kn = To((e) => e.replace(Og, "-$1").toLowerCase()),
  Io = To((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Qo = To((e) => (e ? `on${Io(e)}` : "")),
  wn = (e, t) => !Object.is(e, t),
  Gr = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Ji = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  Ng = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Pg = (e) => {
    const t = Le(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let xl;
const Ao = () =>
  xl ||
  (xl =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : {});
function Oa(e) {
  if (ae(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        i = Le(r) ? Mg(r) : Oa(r);
      if (i) for (const o in i) t[o] = i[o];
    }
    return t;
  } else if (Le(e) || Oe(e)) return e;
}
const xg = /;(?![^(]*\))/g,
  Lg = /:([^]+)/,
  Rg = /\/\*[^]*?\*\//g;
function Mg(e) {
  const t = {};
  return (
    e
      .replace(Rg, "")
      .split(xg)
      .forEach((n) => {
        if (n) {
          const r = n.split(Lg);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Na(e) {
  let t = "";
  if (Le(e)) t = e;
  else if (ae(e))
    for (let n = 0; n < e.length; n++) {
      const r = Na(e[n]);
      r && (t += r + " ");
    }
  else if (Oe(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Dg =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Fg = ka(Dg);
function of(e) {
  return !!e || e === "";
}
const sf = (e) => !!(e && e.__v_isRef === !0),
  $g = (e) =>
    Le(e)
      ? e
      : e == null
      ? ""
      : ae(e) || (Oe(e) && (e.toString === nf || !ce(e.toString)))
      ? sf(e)
        ? $g(e.value)
        : JSON.stringify(e, af, 2)
      : String(e),
  af = (e, t) =>
    sf(t)
      ? af(e, t.value)
      : fr(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, i], o) => ((n[Xo(r, o) + " =>"] = i), n),
            {}
          ),
        }
      : ef(t)
      ? {
          [`Set(${t.size})`]: [...t.values()].map((n) => Xo(n)),
        }
      : sn(t)
      ? Xo(t)
      : Oe(t) && !ae(t) && !rf(t)
      ? String(t)
      : t,
  Xo = (e, t = "") => {
    var n;
    return sn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let lt;
class lf {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = lt),
      !t && lt && (this.index = (lt.scopes || (lt.scopes = [])).push(this) - 1);
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
      const n = lt;
      try {
        return (lt = this), t();
      } finally {
        lt = n;
      }
    }
  }
  on() {
    lt = this;
  }
  off() {
    lt = this.parent;
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
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function cf(e) {
  return new lf(e);
}
function uf() {
  return lt;
}
function jg(e, t = !1) {
  lt && lt.cleanups.push(e);
}
let Ae;
const Yo = new WeakSet();
class ff {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      lt && lt.active && lt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Yo.has(this) && (Yo.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || hf(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Ll(this), mf(this);
    const t = Ae,
      n = Rt;
    (Ae = this), (Rt = !0);
    try {
      return this.fn();
    } finally {
      gf(this), (Ae = t), (Rt = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) La(t);
      (this.deps = this.depsTail = void 0),
        Ll(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Yo.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Os(this) && this.run();
  }
  get dirty() {
    return Os(this);
  }
}
let df = 0,
  Qr,
  Xr;
function hf(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Xr), (Xr = e);
    return;
  }
  (e.next = Qr), (Qr = e);
}
function Pa() {
  df++;
}
function xa() {
  if (--df > 0) return;
  if (Xr) {
    let t = Xr;
    for (Xr = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Qr; ) {
    let t = Qr;
    for (Qr = void 0; t; ) {
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
function mf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function gf(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), La(r), Vg(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = i);
  }
  (e.deps = t), (e.depsTail = n);
}
function Os(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (pf(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function pf(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === oi)
  )
    return;
  e.globalVersion = oi;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Os(e))) {
    e.flags &= -3;
    return;
  }
  const n = Ae,
    r = Rt;
  (Ae = e), (Rt = !0);
  try {
    mf(e);
    const i = e.fn(e._value);
    (t.version === 0 || wn(i, e._value)) && ((e._value = i), t.version++);
  } catch (i) {
    throw (t.version++, i);
  } finally {
    (Ae = n), (Rt = r), gf(e), (e.flags &= -3);
  }
}
function La(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (
    (r && ((r.nextSub = i), (e.prevSub = void 0)),
    i && ((i.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) La(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Vg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Rt = !0;
const vf = [];
function Tn() {
  vf.push(Rt), (Rt = !1);
}
function In() {
  const e = vf.pop();
  Rt = e === void 0 ? !0 : e;
}
function Ll(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = Ae;
    Ae = void 0;
    try {
      t();
    } finally {
      Ae = n;
    }
  }
}
let oi = 0;
class qg {
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
class Oo {
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
    if (!Ae || !Rt || Ae === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ae)
      (n = this.activeLink = new qg(Ae, this)),
        Ae.deps
          ? ((n.prevDep = Ae.depsTail),
            (Ae.depsTail.nextDep = n),
            (Ae.depsTail = n))
          : (Ae.deps = Ae.depsTail = n),
        _f(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = Ae.depsTail),
        (n.nextDep = void 0),
        (Ae.depsTail.nextDep = n),
        (Ae.depsTail = n),
        Ae.deps === n && (Ae.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, oi++, this.notify(t);
  }
  notify(t) {
    Pa();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      xa();
    }
  }
}
function _f(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) _f(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Zi = new WeakMap(),
  Vn = Symbol(""),
  Ns = Symbol(""),
  si = Symbol("");
function it(e, t, n) {
  if (Rt && Ae) {
    let r = Zi.get(e);
    r || Zi.set(e, (r = new Map()));
    let i = r.get(n);
    i || (r.set(n, (i = new Oo())), (i.map = r), (i.key = n)), i.track();
  }
}
function Yt(e, t, n, r, i, o) {
  const s = Zi.get(e);
  if (!s) {
    oi++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((Pa(), t === "clear")) s.forEach(a);
  else {
    const l = ae(e),
      u = l && Aa(n);
    if (l && n === "length") {
      const c = Number(r);
      s.forEach((f, d) => {
        (d === "length" || d === si || (!sn(d) && d >= c)) && a(f);
      });
    } else
      switch (
        ((n !== void 0 || s.has(void 0)) && a(s.get(n)), u && a(s.get(si)), t)
      ) {
        case "add":
          l ? u && a(s.get("length")) : (a(s.get(Vn)), fr(e) && a(s.get(Ns)));
          break;
        case "delete":
          l || (a(s.get(Vn)), fr(e) && a(s.get(Ns)));
          break;
        case "set":
          fr(e) && a(s.get(Vn));
          break;
      }
  }
  xa();
}
function Wg(e, t) {
  const n = Zi.get(e);
  return n && n.get(t);
}
function Yn(e) {
  const t = he(e);
  return t === e ? t : (it(t, "iterate", si), It(e) ? t : t.map(ot));
}
function No(e) {
  return it((e = he(e)), "iterate", si), e;
}
const Ug = {
  __proto__: null,
  [Symbol.iterator]() {
    return Jo(this, Symbol.iterator, ot);
  },
  concat(...e) {
    return Yn(this).concat(...e.map((t) => (ae(t) ? Yn(t) : t)));
  },
  entries() {
    return Jo(this, "entries", (e) => ((e[1] = ot(e[1])), e));
  },
  every(e, t) {
    return Ht(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ht(this, "filter", e, t, (n) => n.map(ot), arguments);
  },
  find(e, t) {
    return Ht(this, "find", e, t, ot, arguments);
  },
  findIndex(e, t) {
    return Ht(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ht(this, "findLast", e, t, ot, arguments);
  },
  findLastIndex(e, t) {
    return Ht(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Ht(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zo(this, "includes", e);
  },
  indexOf(...e) {
    return Zo(this, "indexOf", e);
  },
  join(e) {
    return Yn(this).join(e);
  },
  lastIndexOf(...e) {
    return Zo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ht(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xr(this, "pop");
  },
  push(...e) {
    return xr(this, "push", e);
  },
  reduce(e, ...t) {
    return Rl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Rl(this, "reduceRight", e, t);
  },
  shift() {
    return xr(this, "shift");
  },
  some(e, t) {
    return Ht(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xr(this, "splice", e);
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
    return xr(this, "unshift", e);
  },
  values() {
    return Jo(this, "values", ot);
  },
};
function Jo(e, t, n) {
  const r = No(e),
    i = r[t]();
  return (
    r !== e &&
      !It(e) &&
      ((i._next = i.next),
      (i.next = () => {
        const o = i._next();
        return o.value && (o.value = n(o.value)), o;
      })),
    i
  );
}
const Bg = Array.prototype;
function Ht(e, t, n, r, i, o) {
  const s = No(e),
    a = s !== e && !It(e),
    l = s[t];
  if (l !== Bg[t]) {
    const f = l.apply(e, o);
    return a ? ot(f) : f;
  }
  let u = n;
  s !== e &&
    (a
      ? (u = function (f, d) {
          return n.call(this, ot(f), d, e);
        })
      : n.length > 2 &&
        (u = function (f, d) {
          return n.call(this, f, d, e);
        }));
  const c = l.call(s, u, r);
  return a && i ? i(c) : c;
}
function Rl(e, t, n, r) {
  const i = No(e);
  let o = n;
  return (
    i !== e &&
      (It(e)
        ? n.length > 3 &&
          (o = function (s, a, l) {
            return n.call(this, s, a, l, e);
          })
        : (o = function (s, a, l) {
            return n.call(this, s, ot(a), l, e);
          })),
    i[t](o, ...r)
  );
}
function Zo(e, t, n) {
  const r = he(e);
  it(r, "iterate", si);
  const i = r[t](...n);
  return (i === -1 || i === !1) && Fa(n[0])
    ? ((n[0] = he(n[0])), r[t](...n))
    : i;
}
function xr(e, t, n = []) {
  Tn(), Pa();
  const r = he(e)[t].apply(e, n);
  return xa(), In(), r;
}
const Hg = ka("__proto__,__v_isRef,__isVue"),
  bf = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(sn)
  );
function zg(e) {
  sn(e) || (e = String(e));
  const t = he(this);
  return it(t, "has", e), t.hasOwnProperty(e);
}
class yf {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly,
      o = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw")
      return r === (i ? (o ? np : Cf) : o ? Sf : Ef).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const s = ae(t);
    if (!i) {
      let l;
      if (s && (l = Ug[n])) return l;
      if (n === "hasOwnProperty") return zg;
    }
    const a = Reflect.get(t, n, De(t) ? t : r);
    return (sn(n) ? bf.has(n) : Hg(n)) || (i || it(t, "get", n), o)
      ? a
      : De(a)
      ? s && Aa(n)
        ? a
        : a.value
      : Oe(a)
      ? i
        ? Ma(a)
        : zn(a)
      : a;
  }
}
class wf extends yf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    if (!this._isShallow) {
      const l = Bn(o);
      if (
        (!It(r) && !Bn(r) && ((o = he(o)), (r = he(r))),
        !ae(t) && De(o) && !De(r))
      )
        return l ? !1 : ((o.value = r), !0);
    }
    const s = ae(t) && Aa(n) ? Number(n) < t.length : Se(t, n),
      a = Reflect.set(t, n, r, De(t) ? t : i);
    return (
      t === he(i) && (s ? wn(r, o) && Yt(t, "set", n, r) : Yt(t, "add", n, r)),
      a
    );
  }
  deleteProperty(t, n) {
    const r = Se(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && Yt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!sn(n) || !bf.has(n)) && it(t, "has", n), r;
  }
  ownKeys(t) {
    return it(t, "iterate", ae(t) ? "length" : Vn), Reflect.ownKeys(t);
  }
}
class Kg extends yf {
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
const Gg = new wf(),
  Qg = new Kg(),
  Xg = new wf(!0);
const Ps = (e) => e,
  Ci = (e) => Reflect.getPrototypeOf(e);
function Yg(e, t, n) {
  return function (...r) {
    const i = this.__v_raw,
      o = he(i),
      s = fr(o),
      a = e === "entries" || (e === Symbol.iterator && s),
      l = e === "keys" && s,
      u = i[e](...r),
      c = n ? Ps : t ? xs : ot;
    return (
      !t && it(o, "iterate", l ? Ns : Vn),
      {
        next() {
          const { value: f, done: d } = u.next();
          return d
            ? {
                value: f,
                done: d,
              }
            : {
                value: a ? [c(f[0]), c(f[1])] : c(f),
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
function ki(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Jg(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw,
        s = he(o),
        a = he(i);
      e || (wn(i, a) && it(s, "get", i), it(s, "get", a));
      const { has: l } = Ci(s),
        u = t ? Ps : e ? xs : ot;
      if (l.call(s, i)) return u(o.get(i));
      if (l.call(s, a)) return u(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && it(he(i), "iterate", Vn), Reflect.get(i, "size", i);
    },
    has(i) {
      const o = this.__v_raw,
        s = he(o),
        a = he(i);
      return (
        e || (wn(i, a) && it(s, "has", i), it(s, "has", a)),
        i === a ? o.has(i) : o.has(i) || o.has(a)
      );
    },
    forEach(i, o) {
      const s = this,
        a = s.__v_raw,
        l = he(a),
        u = t ? Ps : e ? xs : ot;
      return (
        !e && it(l, "iterate", Vn),
        a.forEach((c, f) => i.call(o, u(c), u(f), s))
      );
    },
  };
  return (
    Fe(
      n,
      e
        ? {
            add: ki("add"),
            set: ki("set"),
            delete: ki("delete"),
            clear: ki("clear"),
          }
        : {
            add(i) {
              !t && !It(i) && !Bn(i) && (i = he(i));
              const o = he(this);
              return (
                Ci(o).has.call(o, i) || (o.add(i), Yt(o, "add", i, i)), this
              );
            },
            set(i, o) {
              !t && !It(o) && !Bn(o) && (o = he(o));
              const s = he(this),
                { has: a, get: l } = Ci(s);
              let u = a.call(s, i);
              u || ((i = he(i)), (u = a.call(s, i)));
              const c = l.call(s, i);
              return (
                s.set(i, o),
                u ? wn(o, c) && Yt(s, "set", i, o) : Yt(s, "add", i, o),
                this
              );
            },
            delete(i) {
              const o = he(this),
                { has: s, get: a } = Ci(o);
              let l = s.call(o, i);
              l || ((i = he(i)), (l = s.call(o, i))), a && a.call(o, i);
              const u = o.delete(i);
              return l && Yt(o, "delete", i, void 0), u;
            },
            clear() {
              const i = he(this),
                o = i.size !== 0,
                s = i.clear();
              return o && Yt(i, "clear", void 0, void 0), s;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      n[i] = Yg(i, e, t);
    }),
    n
  );
}
function Ra(e, t) {
  const n = Jg(e, t);
  return (r, i, o) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
      ? e
      : i === "__v_raw"
      ? r
      : Reflect.get(Se(n, i) && i in r ? n : r, i, o);
}
const Zg = {
    get: Ra(!1, !1),
  },
  ep = {
    get: Ra(!1, !0),
  },
  tp = {
    get: Ra(!0, !1),
  };
const Ef = new WeakMap(),
  Sf = new WeakMap(),
  Cf = new WeakMap(),
  np = new WeakMap();
function rp(e) {
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
function ip(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : rp(Ig(e));
}
function zn(e) {
  return Bn(e) ? e : Da(e, !1, Gg, Zg, Ef);
}
function kf(e) {
  return Da(e, !1, Xg, ep, Sf);
}
function Ma(e) {
  return Da(e, !0, Qg, tp, Cf);
}
function Da(e, t, n, r, i) {
  if (!Oe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = i.get(e);
  if (o) return o;
  const s = ip(e);
  if (s === 0) return e;
  const a = new Proxy(e, s === 2 ? r : n);
  return i.set(e, a), a;
}
function dr(e) {
  return Bn(e) ? dr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Bn(e) {
  return !!(e && e.__v_isReadonly);
}
function It(e) {
  return !!(e && e.__v_isShallow);
}
function Fa(e) {
  return e ? !!e.__v_raw : !1;
}
function he(e) {
  const t = e && e.__v_raw;
  return t ? he(t) : e;
}
function bi(e) {
  return (
    !Se(e, "__v_skip") && Object.isExtensible(e) && Ji(e, "__v_skip", !0), e
  );
}
const ot = (e) => (Oe(e) ? zn(e) : e),
  xs = (e) => (Oe(e) ? Ma(e) : e);
function De(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ue(e) {
  return Tf(e, !1);
}
function $a(e) {
  return Tf(e, !0);
}
function Tf(e, t) {
  return De(e) ? e : new op(e, t);
}
class op {
  constructor(t, n) {
    (this.dep = new Oo()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : he(t)),
      (this._value = n ? t : ot(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || It(t) || Bn(t);
    (t = r ? t : he(t)),
      wn(t, n) &&
        ((this._rawValue = t),
        (this._value = r ? t : ot(t)),
        this.dep.trigger());
  }
}
function Zt(e) {
  return De(e) ? e.value : e;
}
const sp = {
  get: (e, t, n) => (t === "__v_raw" ? e : Zt(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const i = e[t];
    return De(i) && !De(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function If(e) {
  return dr(e) ? e : new Proxy(e, sp);
}
class ap {
  constructor(t) {
    (this.__v_isRef = !0), (this._value = void 0);
    const n = (this.dep = new Oo()),
      { get: r, set: i } = t(n.track.bind(n), n.trigger.bind(n));
    (this._get = r), (this._set = i);
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function lp(e) {
  return new ap(e);
}
class cp {
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
    return Wg(he(this._object), this._key);
  }
}
class up {
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
function fp(e, t, n) {
  return De(e)
    ? e
    : ce(e)
    ? new up(e)
    : Oe(e) && arguments.length > 1
    ? dp(e, t, n)
    : ue(e);
}
function dp(e, t, n) {
  const r = e[t];
  return De(r) ? r : new cp(e, t, n);
}
class hp {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Oo(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = oi - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Ae !== this))
      return hf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return pf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function mp(e, t, n = !1) {
  let r, i;
  return ce(e) ? (r = e) : ((r = e.get), (i = e.set)), new hp(r, i, n);
}
const Ti = {},
  eo = new WeakMap();
let Dn;
function gp(e, t = !1, n = Dn) {
  if (n) {
    let r = eo.get(n);
    r || eo.set(n, (r = [])), r.push(e);
  }
}
function pp(e, t, n = Te) {
  const {
      immediate: r,
      deep: i,
      once: o,
      scheduler: s,
      augmentJob: a,
      call: l,
    } = n,
    u = (b) => (i ? b : It(b) || i === !1 || i === 0 ? Jt(b, 1) : Jt(b));
  let c,
    f,
    d,
    h,
    _ = !1,
    S = !1;
  if (
    (De(e)
      ? ((f = () => e.value), (_ = It(e)))
      : dr(e)
      ? ((f = () => u(e)), (_ = !0))
      : ae(e)
      ? ((S = !0),
        (_ = e.some((b) => dr(b) || It(b))),
        (f = () =>
          e.map((b) => {
            if (De(b)) return b.value;
            if (dr(b)) return u(b);
            if (ce(b)) return l ? l(b, 2) : b();
          })))
      : ce(e)
      ? t
        ? (f = l ? () => l(e, 2) : e)
        : (f = () => {
            if (d) {
              Tn();
              try {
                d();
              } finally {
                In();
              }
            }
            const b = Dn;
            Dn = c;
            try {
              return l ? l(e, 3, [h]) : e(h);
            } finally {
              Dn = b;
            }
          })
      : (f = Ut),
    t && i)
  ) {
    const b = f,
      O = i === !0 ? 1 / 0 : i;
    f = () => Jt(b(), O);
  }
  const C = uf(),
    y = () => {
      c.stop(), C && C.active && Ia(C.effects, c);
    };
  if (o && t) {
    const b = t;
    t = (...O) => {
      b(...O), y();
    };
  }
  let g = S ? new Array(e.length).fill(Ti) : Ti;
  const E = (b) => {
    if (!(!(c.flags & 1) || (!c.dirty && !b)))
      if (t) {
        const O = c.run();
        if (i || _ || (S ? O.some((P, A) => wn(P, g[A])) : wn(O, g))) {
          d && d();
          const P = Dn;
          Dn = c;
          try {
            const A = [O, g === Ti ? void 0 : S && g[0] === Ti ? [] : g, h];
            l ? l(t, 3, A) : t(...A), (g = O);
          } finally {
            Dn = P;
          }
        }
      } else c.run();
  };
  return (
    a && a(E),
    (c = new ff(f)),
    (c.scheduler = s ? () => s(E, !1) : E),
    (h = (b) => gp(b, !1, c)),
    (d = c.onStop =
      () => {
        const b = eo.get(c);
        if (b) {
          if (l) l(b, 4);
          else for (const O of b) O();
          eo.delete(c);
        }
      }),
    t ? (r ? E(!0) : (g = c.run())) : s ? s(E.bind(null, !0), !0) : c.run(),
    (y.pause = c.pause.bind(c)),
    (y.resume = c.resume.bind(c)),
    (y.stop = y),
    y
  );
}
function Jt(e, t = 1 / 0, n) {
  if (t <= 0 || !Oe(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, De(e))) Jt(e.value, t, n);
  else if (ae(e)) for (let r = 0; r < e.length; r++) Jt(e[r], t, n);
  else if (ef(e) || fr(e))
    e.forEach((r) => {
      Jt(r, t, n);
    });
  else if (rf(e)) {
    for (const r in e) Jt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Jt(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function yi(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Po(i, t, n);
  }
}
function Mt(e, t, n, r) {
  if (ce(e)) {
    const i = yi(e, t, n, r);
    return (
      i &&
        tf(i) &&
        i.catch((o) => {
          Po(o, t, n);
        }),
      i
    );
  }
  if (ae(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++) i.push(Mt(e[o], t, n, r));
    return i;
  }
}
function Po(e, t, n, r = !0) {
  const i = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: s } =
      (t && t.appContext.config) || Te;
  if (t) {
    let a = t.parent;
    const l = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](e, l, u) === !1) return;
      }
      a = a.parent;
    }
    if (o) {
      Tn(), yi(o, null, 10, [e, l, u]), In();
      return;
    }
  }
  vp(e, n, i, r, s);
}
function vp(e, t, n, r = !0, i = !1) {
  if (i) throw e;
  console.error(e);
}
const ct = [];
let Vt = -1;
const hr = [];
let mn = null,
  or = 0;
const Af = Promise.resolve();
let to = null;
function dt(e) {
  const t = to || Af;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function _p(e) {
  let t = Vt + 1,
    n = ct.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      i = ct[r],
      o = ai(i);
    o < e || (o === e && i.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function ja(e) {
  if (!(e.flags & 1)) {
    const t = ai(e),
      n = ct[ct.length - 1];
    !n || (!(e.flags & 2) && t >= ai(n)) ? ct.push(e) : ct.splice(_p(t), 0, e),
      (e.flags |= 1),
      Of();
  }
}
function Of() {
  to || (to = Af.then(Pf));
}
function bp(e) {
  ae(e)
    ? hr.push(...e)
    : mn && e.id === -1
    ? mn.splice(or + 1, 0, e)
    : e.flags & 1 || (hr.push(e), (e.flags |= 1)),
    Of();
}
function Ml(e, t, n = Vt + 1) {
  for (; n < ct.length; n++) {
    const r = ct[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      ct.splice(n, 1),
        n--,
        r.flags & 4 && (r.flags &= -2),
        r(),
        r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Nf(e) {
  if (hr.length) {
    const t = [...new Set(hr)].sort((n, r) => ai(n) - ai(r));
    if (((hr.length = 0), mn)) {
      mn.push(...t);
      return;
    }
    for (mn = t, or = 0; or < mn.length; or++) {
      const n = mn[or];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (mn = null), (or = 0);
  }
}
const ai = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Pf(e) {
  try {
    for (Vt = 0; Vt < ct.length; Vt++) {
      const t = ct[Vt];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        yi(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Vt < ct.length; Vt++) {
      const t = ct[Vt];
      t && (t.flags &= -2);
    }
    (Vt = -1),
      (ct.length = 0),
      Nf(),
      (to = null),
      (ct.length || hr.length) && Pf();
  }
}
let Wt,
  Ur = [],
  Ls = !1;
function xo(e, ...t) {
  Wt
    ? Wt.emit(e, ...t)
    : Ls ||
      Ur.push({
        event: e,
        args: t,
      });
}
function xf(e, t) {
  var n, r;
  (Wt = e),
    Wt
      ? ((Wt.enabled = !0),
        Ur.forEach(({ event: i, args: o }) => Wt.emit(i, ...o)),
        (Ur = []))
      : typeof window != "undefined" &&
        window.HTMLElement &&
        !(
          (r = (n = window.navigator) == null ? void 0 : n.userAgent) != null &&
          r.includes("jsdom")
        )
      ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ =
          t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
          xf(o, t);
        }),
        setTimeout(() => {
          Wt || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (Ls = !0), (Ur = []));
        }, 3e3))
      : ((Ls = !0), (Ur = []));
}
function yp(e, t) {
  xo("app:init", e, t, {
    Fragment: Ye,
    Text: Tr,
    Comment: Je,
    Static: Zr,
  });
}
function wp(e) {
  xo("app:unmount", e);
}
const Rs = Va("component:added"),
  Lf = Va("component:updated"),
  Ep = Va("component:removed"),
  Sp = (e) => {
    Wt &&
      typeof Wt.cleanupBuffer == "function" &&
      !Wt.cleanupBuffer(e) &&
      Ep(e);
  };
/*! #__NO_SIDE_EFFECTS__ */
function Va(e) {
  return (t) => {
    xo(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
function Cp(e, t, n) {
  xo("component:emit", e.appContext.app, e, t, n);
}
let Ge = null,
  Rf = null;
function no(e) {
  const t = Ge;
  return (Ge = e), (Rf = (e && e.type.__scopeId) || null), t;
}
function kp(e, t = Ge, n) {
  if (!t || e._n) return e;
  const r = (...i) => {
    r._d && Kl(-1);
    const o = no(t);
    let s;
    try {
      s = e(...i);
    } finally {
      no(o), r._d && Kl(1);
    }
    return Lf(t), s;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Mf(e, t) {
  if (Ge === null) return e;
  const n = $o(Ge),
    r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = Te] = t[i];
    o &&
      (ce(o) &&
        (o = {
          mounted: o,
          updated: o,
        }),
      o.deep && Jt(s),
      r.push({
        dir: o,
        instance: n,
        value: s,
        oldValue: void 0,
        arg: a,
        modifiers: l,
      }));
  }
  return e;
}
function Nn(e, t, n, r) {
  const i = e.dirs,
    o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let l = a.dir[r];
    l && (Tn(), Mt(l, n, 8, [e.el, a, e, t]), In());
  }
}
const Df = Symbol("_vte"),
  Ff = (e) => e.__isTeleport,
  Yr = (e) => e && (e.disabled || e.disabled === ""),
  Dl = (e) => e && (e.defer || e.defer === ""),
  Fl = (e) => typeof SVGElement != "undefined" && e instanceof SVGElement,
  $l = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  Ms = (e, t) => {
    const n = e && e.to;
    return Le(n) ? (t ? t(n) : null) : n;
  },
  $f = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, i, o, s, a, l, u) {
      const {
          mc: c,
          pc: f,
          pbc: d,
          o: { insert: h, querySelector: _, createText: S, createComment: C },
        } = u,
        y = Yr(t.props);
      let { shapeFlag: g, children: E, dynamicChildren: b } = t;
      if (e == null) {
        const O = (t.el = S("")),
          P = (t.anchor = S(""));
        h(O, n, r), h(P, n, r);
        const A = (N, L) => {
            g & 16 &&
              (i && i.isCE && (i.ce._teleportTarget = N),
              c(E, N, L, i, o, s, a, l));
          },
          K = () => {
            const N = (t.target = Ms(t.props, _)),
              L = jf(N, t, S, h);
            N &&
              (s !== "svg" && Fl(N)
                ? (s = "svg")
                : s !== "mathml" && $l(N) && (s = "mathml"),
              y || (A(N, L), Wi(t, !1)));
          };
        y && (A(n, P), Wi(t, !0)),
          Dl(t.props)
            ? Ue(() => {
                K(), (t.el.__isMounted = !0);
              }, o)
            : K();
      } else {
        if (Dl(t.props) && !e.el.__isMounted) {
          Ue(() => {
            $f.process(e, t, n, r, i, o, s, a, l, u), delete e.el.__isMounted;
          }, o);
          return;
        }
        (t.el = e.el), (t.targetStart = e.targetStart);
        const O = (t.anchor = e.anchor),
          P = (t.target = e.target),
          A = (t.targetAnchor = e.targetAnchor),
          K = Yr(e.props),
          N = K ? n : P,
          L = K ? O : A;
        if (
          (s === "svg" || Fl(P)
            ? (s = "svg")
            : (s === "mathml" || $l(P)) && (s = "mathml"),
          b
            ? (d(e.dynamicChildren, b, N, i, o, s, a), Ha(e, t, !0))
            : l || f(e, t, N, L, i, o, s, a, !1),
          y)
        )
          K
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : Ii(t, n, O, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const q = (t.target = Ms(t.props, _));
          q && Ii(t, q, null, u, 0);
        } else K && Ii(t, P, A, u, 1);
        Wi(t, y);
      }
    },
    remove(e, t, n, { um: r, o: { remove: i } }, o) {
      const {
        shapeFlag: s,
        children: a,
        anchor: l,
        targetStart: u,
        targetAnchor: c,
        target: f,
        props: d,
      } = e;
      if ((f && (i(u), i(c)), o && i(l), s & 16)) {
        const h = o || !Yr(d);
        for (let _ = 0; _ < a.length; _++) {
          const S = a[_];
          r(S, t, n, h, !!S.dynamicChildren);
        }
      }
    },
    move: Ii,
    hydrate: Tp,
  };
function Ii(e, t, n, { o: { insert: r }, m: i }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: s, anchor: a, shapeFlag: l, children: u, props: c } = e,
    f = o === 2;
  if ((f && r(s, t, n), (!f || Yr(c)) && l & 16))
    for (let d = 0; d < u.length; d++) i(u[d], t, n, 2);
  f && r(a, t, n);
}
function Tp(
  e,
  t,
  n,
  r,
  i,
  o,
  {
    o: {
      nextSibling: s,
      parentNode: a,
      querySelector: l,
      insert: u,
      createText: c,
    },
  },
  f
) {
  const d = (t.target = Ms(t.props, l));
  if (d) {
    const h = Yr(t.props),
      _ = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (h)
        (t.anchor = f(s(e), t, a(e), n, r, i, o)),
          (t.targetStart = _),
          (t.targetAnchor = _ && s(_));
      else {
        t.anchor = s(e);
        let S = _;
        for (; S; ) {
          if (S && S.nodeType === 8) {
            if (S.data === "teleport start anchor") t.targetStart = S;
            else if (S.data === "teleport anchor") {
              (t.targetAnchor = S),
                (d._lpa = t.targetAnchor && s(t.targetAnchor));
              break;
            }
          }
          S = s(S);
        }
        t.targetAnchor || jf(d, t, c, u), f(_ && s(_), t, d, n, r, i, o);
      }
    Wi(t, h);
  }
  return t.anchor && s(t.anchor);
}
const Ip = $f;
function Wi(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, i;
    for (
      t
        ? ((r = e.el), (i = e.anchor))
        : ((r = e.targetStart), (i = e.targetAnchor));
      r && r !== i;

    )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid),
        (r = r.nextSibling);
    n.ut();
  }
}
function jf(e, t, n, r) {
  const i = (t.targetStart = n("")),
    o = (t.targetAnchor = n(""));
  return (i[Df] = o), e && (r(i, e), r(o, e)), o;
}
const gn = Symbol("_leaveCb"),
  Ai = Symbol("_enterCb");
function Vf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Nt(() => {
      e.isMounted = !0;
    }),
    wt(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const St = [Function, Array],
  qf = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: St,
    onEnter: St,
    onAfterEnter: St,
    onEnterCancelled: St,
    onBeforeLeave: St,
    onLeave: St,
    onAfterLeave: St,
    onLeaveCancelled: St,
    onBeforeAppear: St,
    onAppear: St,
    onAfterAppear: St,
    onAppearCancelled: St,
  },
  Wf = (e) => {
    const t = e.subTree;
    return t.component ? Wf(t.component) : t;
  },
  Ap = {
    name: "BaseTransition",
    props: qf,
    setup(e, { slots: t }) {
      const n = Ie(),
        r = Vf();
      return () => {
        const i = t.default && qa(t.default(), !0);
        if (!i || !i.length) return;
        const o = Uf(i),
          s = he(e),
          { mode: a } = s;
        if (r.isLeaving) return es(o);
        const l = jl(o);
        if (!l) return es(o);
        let u = li(l, s, r, n, (f) => (u = f));
        l.type !== Je && En(l, u);
        let c = n.subTree && jl(n.subTree);
        if (c && c.type !== Je && !bn(l, c) && Wf(n).type !== Je) {
          let f = li(c, s, r, n);
          if ((En(c, f), a === "out-in" && l.type !== Je))
            return (
              (r.isLeaving = !0),
              (f.afterLeave = () => {
                (r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete f.afterLeave,
                  (c = void 0);
              }),
              es(o)
            );
          a === "in-out" && l.type !== Je
            ? (f.delayLeave = (d, h, _) => {
                const S = Bf(r, c);
                (S[String(c.key)] = c),
                  (d[gn] = () => {
                    h(), (d[gn] = void 0), delete u.delayedLeave, (c = void 0);
                  }),
                  (u.delayedLeave = () => {
                    _(), delete u.delayedLeave, (c = void 0);
                  });
              })
            : (c = void 0);
        } else c && (c = void 0);
        return o;
      };
    },
  };
function Uf(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Je) {
        t = n;
        break;
      }
  }
  return t;
}
const Op = Ap;
function Bf(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function li(e, t, n, r, i) {
  const {
      appear: o,
      mode: s,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: u,
      onAfterEnter: c,
      onEnterCancelled: f,
      onBeforeLeave: d,
      onLeave: h,
      onAfterLeave: _,
      onLeaveCancelled: S,
      onBeforeAppear: C,
      onAppear: y,
      onAfterAppear: g,
      onAppearCancelled: E,
    } = t,
    b = String(e.key),
    O = Bf(n, e),
    P = (N, L) => {
      N && Mt(N, r, 9, L);
    },
    A = (N, L) => {
      const q = L[1];
      P(N, L),
        ae(N) ? N.every((T) => T.length <= 1) && q() : N.length <= 1 && q();
    },
    K = {
      mode: s,
      persisted: a,
      beforeEnter(N) {
        let L = l;
        if (!n.isMounted)
          if (o) L = C || l;
          else return;
        N[gn] && N[gn](!0);
        const q = O[b];
        q && bn(e, q) && q.el[gn] && q.el[gn](), P(L, [N]);
      },
      enter(N) {
        let L = u,
          q = c,
          T = f;
        if (!n.isMounted)
          if (o) (L = y || u), (q = g || c), (T = E || f);
          else return;
        let Q = !1;
        const $ = (N[Ai] = (te) => {
          Q ||
            ((Q = !0),
            te ? P(T, [N]) : P(q, [N]),
            K.delayedLeave && K.delayedLeave(),
            (N[Ai] = void 0));
        });
        L ? A(L, [N, $]) : $();
      },
      leave(N, L) {
        const q = String(e.key);
        if ((N[Ai] && N[Ai](!0), n.isUnmounting)) return L();
        P(d, [N]);
        let T = !1;
        const Q = (N[gn] = ($) => {
          T ||
            ((T = !0),
            L(),
            $ ? P(S, [N]) : P(_, [N]),
            (N[gn] = void 0),
            O[q] === e && delete O[q]);
        });
        (O[q] = e), h ? A(h, [N, Q]) : Q();
      },
      clone(N) {
        const L = li(N, t, n, r, i);
        return i && i(L), L;
      },
    };
  return K;
}
function es(e) {
  if (Lo(e)) return (e = rn(e)), (e.children = null), e;
}
function jl(e) {
  if (!Lo(e)) return Ff(e.type) && e.children ? Uf(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && ce(n.default)) return n.default();
  }
}
function En(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), En(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function qa(e, t = !1, n) {
  let r = [],
    i = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
    s.type === Ye
      ? (s.patchFlag & 128 && i++, (r = r.concat(qa(s.children, t, a))))
      : (t || s.type !== Je) &&
        r.push(
          a != null
            ? rn(s, {
                key: a,
              })
            : s
        );
  }
  if (i > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
function Kn(e, t) {
  return ce(e)
    ? Fe(
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
function Hf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ro(e, t, n, r, i = !1) {
  if (ae(e)) {
    e.forEach((_, S) => ro(_, t && (ae(t) ? t[S] : t), n, r, i));
    return;
  }
  if (qn(r) && !i) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      ro(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? $o(r.component) : r.el,
    s = i ? null : o,
    { i: a, r: l } = e,
    u = t && t.r,
    c = a.refs === Te ? (a.refs = {}) : a.refs,
    f = a.setupState,
    d = he(f),
    h = f === Te ? () => !1 : (_) => Se(d, _);
  if (
    (u != null &&
      u !== l &&
      (Le(u)
        ? ((c[u] = null), h(u) && (f[u] = null))
        : De(u) && (u.value = null)),
    ce(l))
  )
    yi(l, a, 12, [s, c]);
  else {
    const _ = Le(l),
      S = De(l);
    if (_ || S) {
      const C = () => {
        if (e.f) {
          const y = _ ? (h(l) ? f[l] : c[l]) : l.value;
          i
            ? ae(y) && Ia(y, o)
            : ae(y)
            ? y.includes(o) || y.push(o)
            : _
            ? ((c[l] = [o]), h(l) && (f[l] = c[l]))
            : ((l.value = [o]), e.k && (c[e.k] = l.value));
        } else
          _
            ? ((c[l] = s), h(l) && (f[l] = s))
            : S && ((l.value = s), e.k && (c[e.k] = s));
      };
      s ? ((C.id = -1), Ue(C, n)) : C();
    }
  }
}
Ao().requestIdleCallback;
Ao().cancelIdleCallback;
const qn = (e) => !!e.type.__asyncLoader,
  Lo = (e) => e.type.__isKeepAlive,
  Np = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = Ie(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const g = t.default && t.default();
          return g && g.length === 1 ? g[0] : g;
        };
      const i = new Map(),
        o = new Set();
      let s = null;
      n.__v_cache = i;
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: u,
            um: c,
            o: { createElement: f },
          },
        } = r,
        d = f("div");
      (r.activate = (g, E, b, O, P) => {
        const A = g.component;
        u(g, E, b, 0, a),
          l(A.vnode, g, E, b, A, a, O, g.slotScopeIds, P),
          Ue(() => {
            (A.isDeactivated = !1), A.a && Gr(A.a);
            const K = g.props && g.props.onVnodeMounted;
            K && kt(K, A.parent, g);
          }, a),
          Rs(A);
      }),
        (r.deactivate = (g) => {
          const E = g.component;
          oo(E.m),
            oo(E.a),
            u(g, d, null, 1, a),
            Ue(() => {
              E.da && Gr(E.da);
              const b = g.props && g.props.onVnodeUnmounted;
              b && kt(b, E.parent, g), (E.isDeactivated = !0);
            }, a),
            Rs(E);
        });
      function h(g) {
        ts(g), c(g, n, a, !0);
      }
      function _(g) {
        i.forEach((E, b) => {
          const O = qs(E.type);
          O && !g(O) && S(b);
        });
      }
      function S(g) {
        const E = i.get(g);
        E && (!s || !bn(E, s)) ? h(E) : s && ts(s), i.delete(g), o.delete(g);
      }
      fe(
        () => [e.include, e.exclude],
        ([g, E]) => {
          g && _((b) => Br(g, b)), E && _((b) => !Br(E, b));
        },
        {
          flush: "post",
          deep: !0,
        }
      );
      let C = null;
      const y = () => {
        C != null &&
          (so(n.subTree.type)
            ? Ue(() => {
                i.set(C, Oi(n.subTree));
              }, n.subTree.suspense)
            : i.set(C, Oi(n.subTree)));
      };
      return (
        Nt(y),
        Wa(y),
        wt(() => {
          i.forEach((g) => {
            const { subTree: E, suspense: b } = n,
              O = Oi(E);
            if (g.type === O.type && g.key === O.key) {
              ts(O);
              const P = O.component.da;
              P && Ue(P, b);
              return;
            }
            h(g);
          });
        }),
        () => {
          if (((C = null), !t.default)) return (s = null);
          const g = t.default(),
            E = g[0];
          if (g.length > 1) return (s = null), g;
          if (!vr(E) || (!(E.shapeFlag & 4) && !(E.shapeFlag & 128)))
            return (s = null), E;
          let b = Oi(E);
          if (b.type === Je) return (s = null), b;
          const O = b.type,
            P = qs(qn(b) ? b.type.__asyncResolved || {} : O),
            { include: A, exclude: K, max: N } = e;
          if ((A && (!P || !Br(A, P))) || (K && P && Br(K, P)))
            return (b.shapeFlag &= -257), (s = b), E;
          const L = b.key == null ? O : b.key,
            q = i.get(L);
          return (
            b.el && ((b = rn(b)), E.shapeFlag & 128 && (E.ssContent = b)),
            (C = L),
            q
              ? ((b.el = q.el),
                (b.component = q.component),
                b.transition && En(b, b.transition),
                (b.shapeFlag |= 512),
                o.delete(L),
                o.add(L))
              : (o.add(L),
                N && o.size > parseInt(N, 10) && S(o.values().next().value)),
            (b.shapeFlag |= 256),
            (s = b),
            so(E.type) ? E : b
          );
        }
      );
    },
  },
  Wk = Np;
function Br(e, t) {
  return ae(e)
    ? e.some((n) => Br(n, t))
    : Le(e)
    ? e.split(",").includes(t)
    : Tg(e)
    ? ((e.lastIndex = 0), e.test(t))
    : !1;
}
function zf(e, t) {
  Kf(e, "a", t);
}
function Ro(e, t) {
  Kf(e, "da", t);
}
function Kf(e, t, n = Ze) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((Mo(t, r, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      Lo(i.parent.vnode) && Pp(r, t, n, i), (i = i.parent);
  }
}
function Pp(e, t, n, r) {
  const i = Mo(t, e, r, !0);
  Do(() => {
    Ia(r[t], i);
  }, n);
}
function ts(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function Oi(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Mo(e, t, n = Ze, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...s) => {
          Tn();
          const a = wi(n),
            l = Mt(t, n, e, s);
          return a(), In(), l;
        });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const an =
    (e) =>
    (t, n = Ze) => {
      (!ui || e === "sp") && Mo(e, (...r) => t(...r), n);
    },
  xp = an("bm"),
  Nt = an("m"),
  Gf = an("bu"),
  Wa = an("u"),
  wt = an("bum"),
  Do = an("um"),
  Lp = an("sp"),
  Rp = an("rtg"),
  Mp = an("rtc");
function Dp(e, t = Ze) {
  Mo("ec", e, t);
}
const Qf = "components";
function Fp(e, t) {
  return Yf(Qf, e, !0, t) || e;
}
const Xf = Symbol.for("v-ndc");
function Uk(e) {
  return Le(e) ? Yf(Qf, e, !1) || e : e || Xf;
}
function Yf(e, t, n = !0, r = !1) {
  const i = Ge || Ze;
  if (i) {
    const o = i.type;
    {
      const a = qs(o, !1);
      if (a && (a === t || a === At(t) || a === Io(At(t)))) return o;
    }
    const s = Vl(i[e] || o[e], t) || Vl(i.appContext[e], t);
    return !s && r ? o : s;
  }
}
function Vl(e, t) {
  return e && (e[t] || e[At(t)] || e[Io(At(t))]);
}
function Bk(e, t, n, r) {
  let i;
  const o = n,
    s = ae(e);
  if (s || Le(e)) {
    const a = s && dr(e);
    let l = !1;
    a && ((l = !It(e)), (e = No(e))), (i = new Array(e.length));
    for (let u = 0, c = e.length; u < c; u++)
      i[u] = t(l ? ot(e[u]) : e[u], u, void 0, o);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++) i[a] = t(a + 1, a, void 0, o);
  } else if (Oe(e))
    if (e[Symbol.iterator]) i = Array.from(e, (a, l) => t(a, l, void 0, o));
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const c = a[l];
        i[l] = t(e[c], c, l, o);
      }
    }
  else i = [];
  return i;
}
function Hk(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (ae(r)) for (let i = 0; i < r.length; i++) e[r[i].name] = r[i].fn;
    else
      r &&
        (e[r.name] = r.key
          ? (...i) => {
              const o = r.fn(...i);
              return o && (o.key = r.key), o;
            }
          : r.fn);
  }
  return e;
}
function zk(e, t, n = {}, r, i) {
  if (Ge.ce || (Ge.parent && qn(Ge.parent) && Ge.parent.ce))
    return (
      t !== "default" && (n.name = t),
      ao(),
      lo(Ye, null, [et("slot", n, r)], 64)
    );
  let o = e[t];
  o && o._c && (o._d = !1), ao();
  const s = o && Jf(o(n)),
    a = n.key || (s && s.key),
    l = lo(
      Ye,
      {
        key: (a && !sn(a) ? a : `_${t}`) + (!s && r ? "_fb" : ""),
      },
      s || [],
      s && e._ === 1 ? 64 : -2
    );
  return (
    l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    l
  );
}
function Jf(e) {
  return e.some((t) =>
    vr(t) ? !(t.type === Je || (t.type === Ye && !Jf(t.children))) : !0
  )
    ? e
    : null;
}
const Ds = (e) => (e ? (pd(e) ? $o(e) : Ds(e.parent)) : null),
  Jr = Fe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ds(e.parent),
    $root: (e) => Ds(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ua(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ja(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = dt.bind(e.proxy)),
    $watch: (e) => iv.bind(e),
  }),
  ns = (e, t) => e !== Te && !e.__isScriptSetup && Se(e, t),
  $p = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: i,
        props: o,
        accessCache: s,
        type: a,
        appContext: l,
      } = e;
      let u;
      if (t[0] !== "$") {
        const h = s[t];
        if (h !== void 0)
          switch (h) {
            case 1:
              return r[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (ns(r, t)) return (s[t] = 1), r[t];
          if (i !== Te && Se(i, t)) return (s[t] = 2), i[t];
          if ((u = e.propsOptions[0]) && Se(u, t)) return (s[t] = 3), o[t];
          if (n !== Te && Se(n, t)) return (s[t] = 4), n[t];
          Fs && (s[t] = 0);
        }
      }
      const c = Jr[t];
      let f, d;
      if (c) return t === "$attrs" && it(e.attrs, "get", ""), c(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== Te && Se(n, t)) return (s[t] = 4), n[t];
      if (((d = l.config.globalProperties), Se(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: i, ctx: o } = e;
      return ns(i, t)
        ? ((i[t] = n), !0)
        : r !== Te && Se(r, t)
        ? ((r[t] = n), !0)
        : Se(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: i,
          propsOptions: o,
        },
      },
      s
    ) {
      let a;
      return (
        !!n[s] ||
        (e !== Te && Se(e, s)) ||
        ns(t, s) ||
        ((a = o[0]) && Se(a, s)) ||
        Se(r, s) ||
        Se(Jr, s) ||
        Se(i.config.globalProperties, s)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Se(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function ql(e) {
  return ae(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Fs = !0;
function jp(e) {
  const t = Ua(e),
    n = e.proxy,
    r = e.ctx;
  (Fs = !1), t.beforeCreate && Wl(t.beforeCreate, e, "bc");
  const {
    data: i,
    computed: o,
    methods: s,
    watch: a,
    provide: l,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: _,
    activated: S,
    deactivated: C,
    beforeDestroy: y,
    beforeUnmount: g,
    destroyed: E,
    unmounted: b,
    render: O,
    renderTracked: P,
    renderTriggered: A,
    errorCaptured: K,
    serverPrefetch: N,
    expose: L,
    inheritAttrs: q,
    components: T,
    directives: Q,
    filters: $,
  } = t;
  if ((u && Vp(u, r, null), s))
    for (const Z in s) {
      const H = s[Z];
      ce(H) && (r[Z] = H.bind(n));
    }
  if (i) {
    const Z = i.call(n, n);
    Oe(Z) && (e.data = zn(Z));
  }
  if (((Fs = !0), o))
    for (const Z in o) {
      const H = o[Z],
        oe = ce(H) ? H.bind(n, n) : ce(H.get) ? H.get.bind(n, n) : Ut,
        le = !ce(H) && ce(H.set) ? H.set.bind(n) : Ut,
        de = M({
          get: oe,
          set: le,
        });
      Object.defineProperty(r, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => de.value,
        set: (B) => (de.value = B),
      });
    }
  if (a) for (const Z in a) Zf(a[Z], r, n, Z);
  if (l) {
    const Z = ce(l) ? l.call(n) : l;
    Reflect.ownKeys(Z).forEach((H) => {
      Ui(H, Z[H]);
    });
  }
  c && Wl(c, e, "c");
  function ee(Z, H) {
    ae(H) ? H.forEach((oe) => Z(oe.bind(n))) : H && Z(H.bind(n));
  }
  if (
    (ee(xp, f),
    ee(Nt, d),
    ee(Gf, h),
    ee(Wa, _),
    ee(zf, S),
    ee(Ro, C),
    ee(Dp, K),
    ee(Mp, P),
    ee(Rp, A),
    ee(wt, g),
    ee(Do, b),
    ee(Lp, N),
    ae(L))
  )
    if (L.length) {
      const Z = e.exposed || (e.exposed = {});
      L.forEach((H) => {
        Object.defineProperty(Z, H, {
          get: () => n[H],
          set: (oe) => (n[H] = oe),
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Ut && (e.render = O),
    q != null && (e.inheritAttrs = q),
    T && (e.components = T),
    Q && (e.directives = Q),
    N && Hf(e);
}
function Vp(e, t, n = Ut) {
  ae(e) && (e = $s(e));
  for (const r in e) {
    const i = e[r];
    let o;
    Oe(i)
      ? "default" in i
        ? (o = ut(i.from || r, i.default, !0))
        : (o = ut(i.from || r))
      : (o = ut(i)),
      De(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (s) => (o.value = s),
          })
        : (t[r] = o);
  }
}
function Wl(e, t, n) {
  Mt(ae(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Zf(e, t, n, r) {
  let i = r.includes(".") ? fd(n, r) : () => n[r];
  if (Le(e)) {
    const o = t[e];
    ce(o) && fe(i, o);
  } else if (ce(e)) fe(i, e.bind(n));
  else if (Oe(e))
    if (ae(e)) e.forEach((o) => Zf(o, t, n, r));
    else {
      const o = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      ce(o) && fe(i, o, e);
    }
}
function Ua(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: i,
      optionsCache: o,
      config: { optionMergeStrategies: s },
    } = e.appContext,
    a = o.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !i.length && !n && !r
      ? (l = t)
      : ((l = {}), i.length && i.forEach((u) => io(l, u, s, !0)), io(l, t, s)),
    Oe(t) && o.set(t, l),
    l
  );
}
function io(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && io(e, o, n, !0), i && i.forEach((s) => io(e, s, n, !0));
  for (const s in t)
    if (!(r && s === "expose")) {
      const a = qp[s] || (n && n[s]);
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const qp = {
  data: Ul,
  props: Bl,
  emits: Bl,
  methods: Hr,
  computed: Hr,
  beforeCreate: st,
  created: st,
  beforeMount: st,
  mounted: st,
  beforeUpdate: st,
  updated: st,
  beforeDestroy: st,
  beforeUnmount: st,
  destroyed: st,
  unmounted: st,
  activated: st,
  deactivated: st,
  errorCaptured: st,
  serverPrefetch: st,
  components: Hr,
  directives: Hr,
  watch: Up,
  provide: Ul,
  inject: Wp,
};
function Ul(e, t) {
  return t
    ? e
      ? function () {
          return Fe(
            ce(e) ? e.call(this, this) : e,
            ce(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Wp(e, t) {
  return Hr($s(e), $s(t));
}
function $s(e) {
  if (ae(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function st(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Hr(e, t) {
  return e ? Fe(Object.create(null), e, t) : t;
}
function Bl(e, t) {
  return e
    ? ae(e) && ae(t)
      ? [...new Set([...e, ...t])]
      : Fe(Object.create(null), ql(e), ql(t != null ? t : {}))
    : t;
}
function Up(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Fe(Object.create(null), e);
  for (const r in t) n[r] = st(e[r], t[r]);
  return n;
}
function ed() {
  return {
    app: null,
    config: {
      isNativeTag: Cg,
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
let Bp = 0;
function Hp(e, t) {
  return function (r, i = null) {
    ce(r) || (r = Fe({}, r)), i != null && !Oe(i) && (i = null);
    const o = ed(),
      s = new WeakSet(),
      a = [];
    let l = !1;
    const u = (o.app = {
      _uid: Bp++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Yl,
      get config() {
        return o.config;
      },
      set config(c) {},
      use(c, ...f) {
        return (
          s.has(c) ||
            (c && ce(c.install)
              ? (s.add(c), c.install(u, ...f))
              : ce(c) && (s.add(c), c(u, ...f))),
          u
        );
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), u;
      },
      component(c, f) {
        return f ? ((o.components[c] = f), u) : o.components[c];
      },
      directive(c, f) {
        return f ? ((o.directives[c] = f), u) : o.directives[c];
      },
      mount(c, f, d) {
        if (!l) {
          const h = u._ceVNode || et(r, i);
          return (
            (h.appContext = o),
            d === !0 ? (d = "svg") : d === !1 && (d = void 0),
            f && t ? t(h, c) : e(h, c, d),
            (l = !0),
            (u._container = c),
            (c.__vue_app__ = u),
            (u._instance = h.component),
            yp(u, Yl),
            $o(h.component)
          );
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l &&
          (Mt(a, u._instance, 16),
          e(null, u._container),
          (u._instance = null),
          wp(u),
          delete u._container.__vue_app__);
      },
      provide(c, f) {
        return (o.provides[c] = f), u;
      },
      runWithContext(c) {
        const f = mr;
        mr = u;
        try {
          return c();
        } finally {
          mr = f;
        }
      },
    });
    return u;
  };
}
let mr = null;
function Ui(e, t) {
  if (Ze) {
    let n = Ze.provides;
    const r = Ze.parent && Ze.parent.provides;
    r === n && (n = Ze.provides = Object.create(r)), (n[e] = t);
  }
}
function ut(e, t, n = !1) {
  const r = Ze || Ge;
  if (r || mr) {
    const i = mr
      ? mr._context.provides
      : r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : void 0;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && ce(t) ? t.call(r && r.proxy) : t;
  }
}
const td = {},
  nd = () => Object.create(td),
  rd = (e) => Object.getPrototypeOf(e) === td;
function zp(e, t, n, r = !1) {
  const i = {},
    o = nd();
  (e.propsDefaults = Object.create(null)), id(e, t, i, o);
  for (const s in e.propsOptions[0]) s in i || (i[s] = void 0);
  n ? (e.props = r ? i : kf(i)) : e.type.props ? (e.props = i) : (e.props = o),
    (e.attrs = o);
}
function Kp(e, t, n, r) {
  const {
      props: i,
      attrs: o,
      vnode: { patchFlag: s },
    } = e,
    a = he(i),
    [l] = e.propsOptions;
  let u = !1;
  if ((r || s > 0) && !(s & 16)) {
    if (s & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if (Fo(e.emitsOptions, d)) continue;
        const h = t[d];
        if (l)
          if (Se(o, d)) h !== o[d] && ((o[d] = h), (u = !0));
          else {
            const _ = At(d);
            i[_] = js(l, a, _, h, e, !1);
          }
        else h !== o[d] && ((o[d] = h), (u = !0));
      }
    }
  } else {
    id(e, t, i, o) && (u = !0);
    let c;
    for (const f in a)
      (!t || (!Se(t, f) && ((c = kn(f)) === f || !Se(t, c)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[c] !== void 0) &&
            (i[f] = js(l, a, f, void 0, e, !0))
          : delete i[f]);
    if (o !== a)
      for (const f in o) (!t || !Se(t, f)) && (delete o[f], (u = !0));
  }
  u && Yt(e.attrs, "set", "");
}
function id(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let s = !1,
    a;
  if (t)
    for (let l in t) {
      if (Kr(l)) continue;
      const u = t[l];
      let c;
      i && Se(i, (c = At(l)))
        ? !o || !o.includes(c)
          ? (n[c] = u)
          : ((a || (a = {}))[c] = u)
        : Fo(e.emitsOptions, l) ||
          ((!(l in r) || u !== r[l]) && ((r[l] = u), (s = !0)));
    }
  if (o) {
    const l = he(n),
      u = a || Te;
    for (let c = 0; c < o.length; c++) {
      const f = o[c];
      n[f] = js(i, l, f, u[f], e, !Se(u, f));
    }
  }
  return s;
}
function js(e, t, n, r, i, o) {
  const s = e[n];
  if (s != null) {
    const a = Se(s, "default");
    if (a && r === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && ce(l)) {
        const { propsDefaults: u } = i;
        if (n in u) r = u[n];
        else {
          const c = wi(i);
          (r = u[n] = l.call(null, t)), c();
        }
      } else r = l;
      i.ce && i.ce._setProp(n, r);
    }
    s[0] &&
      (o && !a ? (r = !1) : s[1] && (r === "" || r === kn(n)) && (r = !0));
  }
  return r;
}
const Gp = new WeakMap();
function od(e, t, n = !1) {
  const r = n ? Gp : t.propsCache,
    i = r.get(e);
  if (i) return i;
  const o = e.props,
    s = {},
    a = [];
  let l = !1;
  if (!ce(e)) {
    const c = (f) => {
      l = !0;
      const [d, h] = od(f, t, !0);
      Fe(s, d), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!o && !l) return Oe(e) && r.set(e, ur), ur;
  if (ae(o))
    for (let c = 0; c < o.length; c++) {
      const f = At(o[c]);
      Hl(f) && (s[f] = Te);
    }
  else if (o)
    for (const c in o) {
      const f = At(c);
      if (Hl(f)) {
        const d = o[c],
          h = (s[f] =
            ae(d) || ce(d)
              ? {
                  type: d,
                }
              : Fe({}, d)),
          _ = h.type;
        let S = !1,
          C = !0;
        if (ae(_))
          for (let y = 0; y < _.length; ++y) {
            const g = _[y],
              E = ce(g) && g.name;
            if (E === "Boolean") {
              S = !0;
              break;
            } else E === "String" && (C = !1);
          }
        else S = ce(_) && _.name === "Boolean";
        (h[0] = S), (h[1] = C), (S || Se(h, "default")) && a.push(f);
      }
    }
  const u = [s, a];
  return Oe(e) && r.set(e, u), u;
}
function Hl(e) {
  return e[0] !== "$" && !Kr(e);
}
const sd = (e) => e[0] === "_" || e === "$stable",
  Ba = (e) => (ae(e) ? e.map(qt) : [qt(e)]),
  Qp = (e, t, n) => {
    if (t._n) return t;
    const r = kp((...i) => Ba(t(...i)), n);
    return (r._c = !1), r;
  },
  ad = (e, t, n) => {
    const r = e._ctx;
    for (const i in e) {
      if (sd(i)) continue;
      const o = e[i];
      if (ce(o)) t[i] = Qp(i, o, r);
      else if (o != null) {
        const s = Ba(o);
        t[i] = () => s;
      }
    }
  },
  ld = (e, t) => {
    const n = Ba(t);
    e.slots.default = () => n;
  },
  cd = (e, t, n) => {
    for (const r in t) (n || r !== "_") && (e[r] = t[r]);
  },
  Xp = (e, t, n) => {
    const r = (e.slots = nd());
    if (e.vnode.shapeFlag & 32) {
      const i = t._;
      i ? (cd(r, t, n), n && Ji(r, "_", i, !0)) : ad(t, r);
    } else t && ld(e, t);
  },
  Yp = (e, t, n) => {
    const { vnode: r, slots: i } = e;
    let o = !0,
      s = Te;
    if (r.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (o = !1)
          : cd(i, t, n)
        : ((o = !t.$stable), ad(t, i)),
        (s = t);
    } else
      t &&
        (ld(e, t),
        (s = {
          default: 1,
        }));
    if (o) for (const a in i) !sd(a) && s[a] == null && delete i[a];
  },
  Ue = fv;
function Jp(e) {
  return Zp(e);
}
function Zp(e, t) {
  const n = Ao();
  (n.__VUE__ = !0), xf(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
      insert: r,
      remove: i,
      patchProp: o,
      createElement: s,
      createText: a,
      createComment: l,
      setText: u,
      setElementText: c,
      parentNode: f,
      nextSibling: d,
      setScopeId: h = Ut,
      insertStaticContent: _,
    } = e,
    S = (
      p,
      w,
      x,
      U = null,
      V = null,
      m = null,
      v = void 0,
      I = null,
      F = !!w.dynamicChildren
    ) => {
      if (p === w) return;
      p && !bn(p, w) && ((U = D(p)), B(p, V, m, !0), (p = null)),
        w.patchFlag === -2 && ((F = !1), (w.dynamicChildren = null));
      const { type: W, ref: G, shapeFlag: k } = w;
      switch (W) {
        case Tr:
          C(p, w, x, U);
          break;
        case Je:
          y(p, w, x, U);
          break;
        case Zr:
          p == null && g(w, x, U, v);
          break;
        case Ye:
          T(p, w, x, U, V, m, v, I, F);
          break;
        default:
          k & 1
            ? O(p, w, x, U, V, m, v, I, F)
            : k & 6
            ? Q(p, w, x, U, V, m, v, I, F)
            : (k & 64 || k & 128) && W.process(p, w, x, U, V, m, v, I, F, ne);
      }
      G != null && V && ro(G, p && p.ref, m, w || p, !w);
    },
    C = (p, w, x, U) => {
      if (p == null) r((w.el = a(w.children)), x, U);
      else {
        const V = (w.el = p.el);
        w.children !== p.children && u(V, w.children);
      }
    },
    y = (p, w, x, U) => {
      p == null ? r((w.el = l(w.children || "")), x, U) : (w.el = p.el);
    },
    g = (p, w, x, U) => {
      [p.el, p.anchor] = _(p.children, w, x, U, p.el, p.anchor);
    },
    E = ({ el: p, anchor: w }, x, U) => {
      let V;
      for (; p && p !== w; ) (V = d(p)), r(p, x, U), (p = V);
      r(w, x, U);
    },
    b = ({ el: p, anchor: w }) => {
      let x;
      for (; p && p !== w; ) (x = d(p)), i(p), (p = x);
      i(w);
    },
    O = (p, w, x, U, V, m, v, I, F) => {
      w.type === "svg" ? (v = "svg") : w.type === "math" && (v = "mathml"),
        p == null ? P(w, x, U, V, m, v, I, F) : N(p, w, V, m, v, I, F);
    },
    P = (p, w, x, U, V, m, v, I) => {
      let F, W;
      const { props: G, shapeFlag: k, transition: R, dirs: J } = p;
      if (
        ((F = p.el = s(p.type, m, G && G.is, G)),
        k & 8
          ? c(F, p.children)
          : k & 16 && K(p.children, F, null, U, V, rs(p, m), v, I),
        J && Nn(p, null, U, "created"),
        A(F, p, p.scopeId, v, U),
        G)
      ) {
        for (const ve in G)
          ve !== "value" && !Kr(ve) && o(F, ve, null, G[ve], m, U);
        "value" in G && o(F, "value", null, G.value, m),
          (W = G.onVnodeBeforeMount) && kt(W, U, p);
      }
      Ji(F, "__vnode", p, !0),
        Ji(F, "__vueParentComponent", U, !0),
        J && Nn(p, null, U, "beforeMount");
      const se = ev(V, R);
      se && R.beforeEnter(F),
        r(F, w, x),
        ((W = G && G.onVnodeMounted) || se || J) &&
          Ue(() => {
            W && kt(W, U, p), se && R.enter(F), J && Nn(p, null, U, "mounted");
          }, V);
    },
    A = (p, w, x, U, V) => {
      if ((x && h(p, x), U)) for (let m = 0; m < U.length; m++) h(p, U[m]);
      if (V) {
        let m = V.subTree;
        if (
          w === m ||
          (so(m.type) && (m.ssContent === w || m.ssFallback === w))
        ) {
          const v = V.vnode;
          A(p, v, v.scopeId, v.slotScopeIds, V.parent);
        }
      }
    },
    K = (p, w, x, U, V, m, v, I, F = 0) => {
      for (let W = F; W < p.length; W++) {
        const G = (p[W] = I ? pn(p[W]) : qt(p[W]));
        S(null, G, w, x, U, V, m, v, I);
      }
    },
    N = (p, w, x, U, V, m, v) => {
      const I = (w.el = p.el);
      I.__vnode = w;
      let { patchFlag: F, dynamicChildren: W, dirs: G } = w;
      F |= p.patchFlag & 16;
      const k = p.props || Te,
        R = w.props || Te;
      let J;
      if (
        (x && Pn(x, !1),
        (J = R.onVnodeBeforeUpdate) && kt(J, x, w, p),
        G && Nn(w, p, x, "beforeUpdate"),
        x && Pn(x, !0),
        ((k.innerHTML && R.innerHTML == null) ||
          (k.textContent && R.textContent == null)) &&
          c(I, ""),
        W
          ? L(p.dynamicChildren, W, I, x, U, rs(w, V), m)
          : v || H(p, w, I, null, x, U, rs(w, V), m, !1),
        F > 0)
      ) {
        if (F & 16) q(I, k, R, x, V);
        else if (
          (F & 2 && k.class !== R.class && o(I, "class", null, R.class, V),
          F & 4 && o(I, "style", k.style, R.style, V),
          F & 8)
        ) {
          const se = w.dynamicProps;
          for (let ve = 0; ve < se.length; ve++) {
            const _e = se[ve],
              $e = k[_e],
              He = R[_e];
            (He !== $e || _e === "value") && o(I, _e, $e, He, V, x);
          }
        }
        F & 1 && p.children !== w.children && c(I, w.children);
      } else !v && W == null && q(I, k, R, x, V);
      ((J = R.onVnodeUpdated) || G) &&
        Ue(() => {
          J && kt(J, x, w, p), G && Nn(w, p, x, "updated");
        }, U);
    },
    L = (p, w, x, U, V, m, v) => {
      for (let I = 0; I < w.length; I++) {
        const F = p[I],
          W = w[I],
          G =
            F.el && (F.type === Ye || !bn(F, W) || F.shapeFlag & 70)
              ? f(F.el)
              : x;
        S(F, W, G, null, U, V, m, v, !0);
      }
    },
    q = (p, w, x, U, V) => {
      if (w !== x) {
        if (w !== Te)
          for (const m in w) !Kr(m) && !(m in x) && o(p, m, w[m], null, V, U);
        for (const m in x) {
          if (Kr(m)) continue;
          const v = x[m],
            I = w[m];
          v !== I && m !== "value" && o(p, m, I, v, V, U);
        }
        "value" in x && o(p, "value", w.value, x.value, V);
      }
    },
    T = (p, w, x, U, V, m, v, I, F) => {
      const W = (w.el = p ? p.el : a("")),
        G = (w.anchor = p ? p.anchor : a(""));
      let { patchFlag: k, dynamicChildren: R, slotScopeIds: J } = w;
      J && (I = I ? I.concat(J) : J),
        p == null
          ? (r(W, x, U), r(G, x, U), K(w.children || [], x, G, V, m, v, I, F))
          : k > 0 && k & 64 && R && p.dynamicChildren
          ? (L(p.dynamicChildren, R, x, V, m, v, I),
            (w.key != null || (V && w === V.subTree)) && Ha(p, w, !0))
          : H(p, w, x, G, V, m, v, I, F);
    },
    Q = (p, w, x, U, V, m, v, I, F) => {
      (w.slotScopeIds = I),
        p == null
          ? w.shapeFlag & 512
            ? V.ctx.activate(w, x, U, v, F)
            : $(w, x, U, V, m, v, F)
          : te(p, w, F);
    },
    $ = (p, w, x, U, V, m, v) => {
      const I = (p.component = bv(p, U, V));
      if ((Lo(p) && (I.ctx.renderer = ne), yv(I, !1, v), I.asyncDep)) {
        if ((V && V.registerDep(I, ee, v), !p.el)) {
          const F = (I.subTree = et(Je));
          y(null, F, w, x);
        }
      } else ee(I, p, w, x, V, m, v);
    },
    te = (p, w, x) => {
      const U = (w.component = p.component);
      if (cv(p, w, x))
        if (U.asyncDep && !U.asyncResolved) {
          Z(U, w, x);
          return;
        } else (U.next = w), U.update();
      else (w.el = p.el), (U.vnode = w);
    },
    ee = (p, w, x, U, V, m, v) => {
      const I = () => {
        if (p.isMounted) {
          let { next: k, bu: R, u: J, parent: se, vnode: ve } = p;
          {
            const mt = ud(p);
            if (mt) {
              k && ((k.el = ve.el), Z(p, k, v)),
                mt.asyncDep.then(() => {
                  p.isUnmounted || I();
                });
              return;
            }
          }
          let _e = k,
            $e;
          Pn(p, !1),
            k ? ((k.el = ve.el), Z(p, k, v)) : (k = ve),
            R && Gr(R),
            ($e = k.props && k.props.onVnodeBeforeUpdate) && kt($e, se, k, ve),
            Pn(p, !0);
          const He = is(p),
            Et = p.subTree;
          (p.subTree = He),
            S(Et, He, f(Et.el), D(Et), p, V, m),
            (k.el = He.el),
            _e === null && uv(p, He.el),
            J && Ue(J, V),
            ($e = k.props && k.props.onVnodeUpdated) &&
              Ue(() => kt($e, se, k, ve), V),
            Lf(p);
        } else {
          let k;
          const { el: R, props: J } = w,
            { bm: se, m: ve, parent: _e, root: $e, type: He } = p,
            Et = qn(w);
          if (
            (Pn(p, !1),
            se && Gr(se),
            !Et && (k = J && J.onVnodeBeforeMount) && kt(k, _e, w),
            Pn(p, !0),
            R && ke)
          ) {
            const mt = () => {
              (p.subTree = is(p)), ke(R, p.subTree, p, V, null);
            };
            Et && He.__asyncHydrate ? He.__asyncHydrate(R, p, mt) : mt();
          } else {
            $e.ce && $e.ce._injectChildStyle(He);
            const mt = (p.subTree = is(p));
            S(null, mt, x, U, p, V, m), (w.el = mt.el);
          }
          if ((ve && Ue(ve, V), !Et && (k = J && J.onVnodeMounted))) {
            const mt = w;
            Ue(() => kt(k, _e, mt), V);
          }
          (w.shapeFlag & 256 ||
            (_e && qn(_e.vnode) && _e.vnode.shapeFlag & 256)) &&
            p.a &&
            Ue(p.a, V),
            (p.isMounted = !0),
            Rs(p),
            (w = x = U = null);
        }
      };
      p.scope.on();
      const F = (p.effect = new ff(I));
      p.scope.off();
      const W = (p.update = F.run.bind(F)),
        G = (p.job = F.runIfDirty.bind(F));
      (G.i = p), (G.id = p.uid), (F.scheduler = () => ja(G)), Pn(p, !0), W();
    },
    Z = (p, w, x) => {
      w.component = p;
      const U = p.vnode.props;
      (p.vnode = w),
        (p.next = null),
        Kp(p, w.props, U, x),
        Yp(p, w.children, x),
        Tn(),
        Ml(p),
        In();
    },
    H = (p, w, x, U, V, m, v, I, F = !1) => {
      const W = p && p.children,
        G = p ? p.shapeFlag : 0,
        k = w.children,
        { patchFlag: R, shapeFlag: J } = w;
      if (R > 0) {
        if (R & 128) {
          le(W, k, x, U, V, m, v, I, F);
          return;
        } else if (R & 256) {
          oe(W, k, x, U, V, m, v, I, F);
          return;
        }
      }
      J & 8
        ? (G & 16 && re(W, V, m), k !== W && c(x, k))
        : G & 16
        ? J & 16
          ? le(W, k, x, U, V, m, v, I, F)
          : re(W, V, m, !0)
        : (G & 8 && c(x, ""), J & 16 && K(k, x, U, V, m, v, I, F));
    },
    oe = (p, w, x, U, V, m, v, I, F) => {
      (p = p || ur), (w = w || ur);
      const W = p.length,
        G = w.length,
        k = Math.min(W, G);
      let R;
      for (R = 0; R < k; R++) {
        const J = (w[R] = F ? pn(w[R]) : qt(w[R]));
        S(p[R], J, x, null, V, m, v, I, F);
      }
      W > G ? re(p, V, m, !0, !1, k) : K(w, x, U, V, m, v, I, F, k);
    },
    le = (p, w, x, U, V, m, v, I, F) => {
      let W = 0;
      const G = w.length;
      let k = p.length - 1,
        R = G - 1;
      for (; W <= k && W <= R; ) {
        const J = p[W],
          se = (w[W] = F ? pn(w[W]) : qt(w[W]));
        if (bn(J, se)) S(J, se, x, null, V, m, v, I, F);
        else break;
        W++;
      }
      for (; W <= k && W <= R; ) {
        const J = p[k],
          se = (w[R] = F ? pn(w[R]) : qt(w[R]));
        if (bn(J, se)) S(J, se, x, null, V, m, v, I, F);
        else break;
        k--, R--;
      }
      if (W > k) {
        if (W <= R) {
          const J = R + 1,
            se = J < G ? w[J].el : U;
          for (; W <= R; )
            S(null, (w[W] = F ? pn(w[W]) : qt(w[W])), x, se, V, m, v, I, F),
              W++;
        }
      } else if (W > R) for (; W <= k; ) B(p[W], V, m, !0), W++;
      else {
        const J = W,
          se = W,
          ve = new Map();
        for (W = se; W <= R; W++) {
          const gt = (w[W] = F ? pn(w[W]) : qt(w[W]));
          gt.key != null && ve.set(gt.key, W);
        }
        let _e,
          $e = 0;
        const He = R - se + 1;
        let Et = !1,
          mt = 0;
        const Pr = new Array(He);
        for (W = 0; W < He; W++) Pr[W] = 0;
        for (W = J; W <= k; W++) {
          const gt = p[W];
          if ($e >= He) {
            B(gt, V, m, !0);
            continue;
          }
          let Ft;
          if (gt.key != null) Ft = ve.get(gt.key);
          else
            for (_e = se; _e <= R; _e++)
              if (Pr[_e - se] === 0 && bn(gt, w[_e])) {
                Ft = _e;
                break;
              }
          Ft === void 0
            ? B(gt, V, m, !0)
            : ((Pr[Ft - se] = W + 1),
              Ft >= mt ? (mt = Ft) : (Et = !0),
              S(gt, w[Ft], x, null, V, m, v, I, F),
              $e++);
        }
        const Ol = Et ? tv(Pr) : ur;
        for (_e = Ol.length - 1, W = He - 1; W >= 0; W--) {
          const gt = se + W,
            Ft = w[gt],
            Nl = gt + 1 < G ? w[gt + 1].el : U;
          Pr[W] === 0
            ? S(null, Ft, x, Nl, V, m, v, I, F)
            : Et && (_e < 0 || W !== Ol[_e] ? de(Ft, x, Nl, 2) : _e--);
        }
      }
    },
    de = (p, w, x, U, V = null) => {
      const { el: m, type: v, transition: I, children: F, shapeFlag: W } = p;
      if (W & 6) {
        de(p.component.subTree, w, x, U);
        return;
      }
      if (W & 128) {
        p.suspense.move(w, x, U);
        return;
      }
      if (W & 64) {
        v.move(p, w, x, ne);
        return;
      }
      if (v === Ye) {
        r(m, w, x);
        for (let k = 0; k < F.length; k++) de(F[k], w, x, U);
        r(p.anchor, w, x);
        return;
      }
      if (v === Zr) {
        E(p, w, x);
        return;
      }
      if (U !== 2 && W & 1 && I)
        if (U === 0) I.beforeEnter(m), r(m, w, x), Ue(() => I.enter(m), V);
        else {
          const { leave: k, delayLeave: R, afterLeave: J } = I,
            se = () => r(m, w, x),
            ve = () => {
              k(m, () => {
                se(), J && J();
              });
            };
          R ? R(m, se, ve) : ve();
        }
      else r(m, w, x);
    },
    B = (p, w, x, U = !1, V = !1) => {
      const {
        type: m,
        props: v,
        ref: I,
        children: F,
        dynamicChildren: W,
        shapeFlag: G,
        patchFlag: k,
        dirs: R,
        cacheIndex: J,
      } = p;
      if (
        (k === -2 && (V = !1),
        I != null && ro(I, null, x, p, !0),
        J != null && (w.renderCache[J] = void 0),
        G & 256)
      ) {
        w.ctx.deactivate(p);
        return;
      }
      const se = G & 1 && R,
        ve = !qn(p);
      let _e;
      if ((ve && (_e = v && v.onVnodeBeforeUnmount) && kt(_e, w, p), G & 6))
        Re(p.component, x, U);
      else {
        if (G & 128) {
          p.suspense.unmount(x, U);
          return;
        }
        se && Nn(p, null, w, "beforeUnmount"),
          G & 64
            ? p.type.remove(p, w, x, ne, U)
            : W && !W.hasOnce && (m !== Ye || (k > 0 && k & 64))
            ? re(W, w, x, !1, !0)
            : ((m === Ye && k & 384) || (!V && G & 16)) && re(F, w, x),
          U && pe(p);
      }
      ((ve && (_e = v && v.onVnodeUnmounted)) || se) &&
        Ue(() => {
          _e && kt(_e, w, p), se && Nn(p, null, w, "unmounted");
        }, x);
    },
    pe = (p) => {
      const { type: w, el: x, anchor: U, transition: V } = p;
      if (w === Ye) {
        Ne(x, U);
        return;
      }
      if (w === Zr) {
        b(p);
        return;
      }
      const m = () => {
        i(x), V && !V.persisted && V.afterLeave && V.afterLeave();
      };
      if (p.shapeFlag & 1 && V && !V.persisted) {
        const { leave: v, delayLeave: I } = V,
          F = () => v(x, m);
        I ? I(p.el, m, F) : F();
      } else m();
    },
    Ne = (p, w) => {
      let x;
      for (; p !== w; ) (x = d(p)), i(p), (p = x);
      i(w);
    },
    Re = (p, w, x) => {
      const { bum: U, scope: V, job: m, subTree: v, um: I, m: F, a: W } = p;
      oo(F),
        oo(W),
        U && Gr(U),
        V.stop(),
        m && ((m.flags |= 8), B(v, p, w, x)),
        I && Ue(I, w),
        Ue(() => {
          p.isUnmounted = !0;
        }, w),
        w &&
          w.pendingBranch &&
          !w.isUnmounted &&
          p.asyncDep &&
          !p.asyncResolved &&
          p.suspenseId === w.pendingId &&
          (w.deps--, w.deps === 0 && w.resolve()),
        Sp(p);
    },
    re = (p, w, x, U = !1, V = !1, m = 0) => {
      for (let v = m; v < p.length; v++) B(p[v], w, x, U, V);
    },
    D = (p) => {
      if (p.shapeFlag & 6) return D(p.component.subTree);
      if (p.shapeFlag & 128) return p.suspense.next();
      const w = d(p.anchor || p.el),
        x = w && w[Df];
      return x ? d(x) : w;
    };
  let X = !1;
  const Y = (p, w, x) => {
      p == null
        ? w._vnode && B(w._vnode, null, null, !0)
        : S(w._vnode || null, p, w, null, null, null, x),
        (w._vnode = p),
        X || ((X = !0), Ml(), Nf(), (X = !1));
    },
    ne = {
      p: S,
      um: B,
      m: de,
      r: pe,
      mt: $,
      mc: K,
      pc: H,
      pbc: L,
      n: D,
      o: e,
    };
  let ye, ke;
  return {
    render: Y,
    hydrate: ye,
    createApp: Hp(Y, ye),
  };
}
function rs({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Pn({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function ev(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Ha(e, t, n = !1) {
  const r = e.children,
    i = t.children;
  if (ae(r) && ae(i))
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      let a = i[o];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[o] = pn(i[o])), (a.el = s.el)),
        !n && a.patchFlag !== -2 && Ha(s, a)),
        a.type === Tr && (a.el = s.el);
    }
}
function tv(e) {
  const t = e.slice(),
    n = [0];
  let r, i, o, s, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((i = n[n.length - 1]), e[i] < u)) {
        (t[r] = i), n.push(r);
        continue;
      }
      for (o = 0, s = n.length - 1; o < s; )
        (a = (o + s) >> 1), e[n[a]] < u ? (o = a + 1) : (s = a);
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, s = n[o - 1]; o-- > 0; ) (n[o] = s), (s = t[s]);
  return n;
}
function ud(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : ud(t);
}
function oo(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const nv = Symbol.for("v-scx"),
  rv = () => ut(nv);
function za(e, t) {
  return Ka(e, null, t);
}
function fe(e, t, n) {
  return Ka(e, t, n);
}
function Ka(e, t, n = Te) {
  const { immediate: r, deep: i, flush: o, once: s } = n,
    a = Fe({}, n),
    l = (t && r) || (!t && o !== "post");
  let u;
  if (ui) {
    if (o === "sync") {
      const h = rv();
      u = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {};
      return (h.stop = Ut), (h.resume = Ut), (h.pause = Ut), h;
    }
  }
  const c = Ze;
  a.call = (h, _, S) => Mt(h, c, _, S);
  let f = !1;
  o === "post"
    ? (a.scheduler = (h) => {
        Ue(h, c && c.suspense);
      })
    : o !== "sync" &&
      ((f = !0),
      (a.scheduler = (h, _) => {
        _ ? h() : ja(h);
      })),
    (a.augmentJob = (h) => {
      t && (h.flags |= 4),
        f && ((h.flags |= 2), c && ((h.id = c.uid), (h.i = c)));
    });
  const d = pp(e, t, a);
  return ui && (u ? u.push(d) : l && d()), d;
}
function iv(e, t, n) {
  const r = this.proxy,
    i = Le(e) ? (e.includes(".") ? fd(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  ce(t) ? (o = t) : ((o = t.handler), (n = t));
  const s = wi(this),
    a = Ka(i, o.bind(r), n);
  return s(), a;
}
function fd(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++) r = r[n[i]];
    return r;
  };
}
const ov = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${At(t)}Modifiers`] || e[`${kn(t)}Modifiers`];
function sv(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Te;
  let i = n;
  const o = t.startsWith("update:"),
    s = o && ov(r, t.slice(7));
  s &&
    (s.trim && (i = n.map((c) => (Le(c) ? c.trim() : c))),
    s.number && (i = n.map(Ng))),
    Cp(e, t, i);
  let a,
    l = r[(a = Qo(t))] || r[(a = Qo(At(t)))];
  !l && o && (l = r[(a = Qo(kn(t)))]), l && Mt(l, e, 6, i);
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), Mt(u, e, 6, i);
  }
}
function dd(e, t, n = !1) {
  const r = t.emitsCache,
    i = r.get(e);
  if (i !== void 0) return i;
  const o = e.emits;
  let s = {},
    a = !1;
  if (!ce(e)) {
    const l = (u) => {
      const c = dd(u, t, !0);
      c && ((a = !0), Fe(s, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !a
    ? (Oe(e) && r.set(e, null), null)
    : (ae(o) ? o.forEach((l) => (s[l] = null)) : Fe(s, o),
      Oe(e) && r.set(e, s),
      s);
}
function Fo(e, t) {
  return !e || !ko(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, kn(t)) || Se(e, t));
}
function is(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: i,
      propsOptions: [o],
      slots: s,
      attrs: a,
      emit: l,
      render: u,
      renderCache: c,
      props: f,
      data: d,
      setupState: h,
      ctx: _,
      inheritAttrs: S,
    } = e,
    C = no(e);
  let y, g;
  try {
    if (n.shapeFlag & 4) {
      const b = i || r,
        O = b;
      (y = qt(u.call(O, b, c, f, h, d, _))), (g = a);
    } else {
      const b = t;
      (y = qt(
        b.length > 1
          ? b(f, {
              attrs: a,
              slots: s,
              emit: l,
            })
          : b(f, null)
      )),
        (g = t.props ? a : av(a));
    }
  } catch (b) {
    (ei.length = 0), Po(b, e, 1), (y = et(Je));
  }
  let E = y;
  if (g && S !== !1) {
    const b = Object.keys(g),
      { shapeFlag: O } = E;
    b.length &&
      O & 7 &&
      (o && b.some(Ta) && (g = lv(g, o)), (E = rn(E, g, !1, !0)));
  }
  return (
    n.dirs &&
      ((E = rn(E, null, !1, !0)),
      (E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs)),
    n.transition && En(E, n.transition),
    (y = E),
    no(C),
    y
  );
}
const av = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || ko(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  lv = (e, t) => {
    const n = {};
    for (const r in e) (!Ta(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function cv(e, t, n) {
  const { props: r, children: i, component: o } = e,
    { props: s, children: a, patchFlag: l } = t,
    u = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? zl(r, s, u) : !!s;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (s[d] !== r[d] && !Fo(u, d)) return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable)
      ? !0
      : r === s
      ? !1
      : r
      ? s
        ? zl(r, s, u)
        : !0
      : !!s;
  return !1;
}
function zl(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (t[o] !== e[o] && !Fo(n, o)) return !0;
  }
  return !1;
}
function uv({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const so = (e) => e.__isSuspense;
function fv(e, t) {
  t && t.pendingBranch
    ? ae(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : bp(e);
}
const Ye = Symbol.for("v-fgt"),
  Tr = Symbol.for("v-txt"),
  Je = Symbol.for("v-cmt"),
  Zr = Symbol.for("v-stc"),
  ei = [];
let _t = null;
function ao(e = !1) {
  ei.push((_t = e ? null : []));
}
function dv() {
  ei.pop(), (_t = ei[ei.length - 1] || null);
}
let ci = 1;
function Kl(e, t = !1) {
  (ci += e), e < 0 && _t && t && (_t.hasOnce = !0);
}
function hd(e) {
  return (
    (e.dynamicChildren = ci > 0 ? _t || ur : null),
    dv(),
    ci > 0 && _t && _t.push(e),
    e
  );
}
function Kk(e, t, n, r, i, o) {
  return hd(gd(e, t, n, r, i, o, !0));
}
function lo(e, t, n, r, i) {
  return hd(et(e, t, n, r, i, !0));
}
function vr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function bn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const md = ({ key: e }) => (e != null ? e : null),
  Bi = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Le(e) || De(e) || ce(e)
        ? {
            i: Ge,
            r: e,
            k: t,
            f: !!n,
          }
        : e
      : null
  );
function gd(
  e,
  t = null,
  n = null,
  r = 0,
  i = null,
  o = e === Ye ? 0 : 1,
  s = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && md(t),
    ref: t && Bi(t),
    scopeId: Rf,
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
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Ge,
  };
  return (
    a
      ? (Ga(l, n), o & 128 && e.normalize(l))
      : n && (l.shapeFlag |= Le(n) ? 8 : 16),
    ci > 0 &&
      !s &&
      _t &&
      (l.patchFlag > 0 || o & 6) &&
      l.patchFlag !== 32 &&
      _t.push(l),
    l
  );
}
const et = hv;
function hv(e, t = null, n = null, r = 0, i = null, o = !1) {
  if (((!e || e === Xf) && (e = Je), vr(e))) {
    const a = rn(e, t, !0);
    return (
      n && Ga(a, n),
      ci > 0 &&
        !o &&
        _t &&
        (a.shapeFlag & 6 ? (_t[_t.indexOf(e)] = a) : _t.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((Cv(e) && (e = e.__vccOpts), t)) {
    t = mv(t);
    let { class: a, style: l } = t;
    a && !Le(a) && (t.class = Na(a)),
      Oe(l) && (Fa(l) && !ae(l) && (l = Fe({}, l)), (t.style = Oa(l)));
  }
  const s = Le(e) ? 1 : so(e) ? 128 : Ff(e) ? 64 : Oe(e) ? 4 : ce(e) ? 2 : 0;
  return gd(e, t, n, r, i, s, o, !0);
}
function mv(e) {
  return e ? (Fa(e) || rd(e) ? Fe({}, e) : e) : null;
}
function rn(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e,
    u = t ? pv(i || {}, t) : i,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && md(u),
      ref:
        t && t.ref
          ? n && o
            ? ae(o)
              ? o.concat(Bi(t))
              : [o, Bi(t)]
            : Bi(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ye ? (s === -1 ? 16 : s | 16) : s,
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
  return l && r && En(c, l.clone(c)), c;
}
function gv(e = " ", t = 0) {
  return et(Tr, null, e, t);
}
function Gk(e, t) {
  const n = et(Zr, null, e);
  return (n.staticCount = t), n;
}
function Qk(e = "", t = !1) {
  return t ? (ao(), lo(Je, null, e)) : et(Je, null, e);
}
function qt(e) {
  return e == null || typeof e == "boolean"
    ? et(Je)
    : ae(e)
    ? et(Ye, null, e.slice())
    : vr(e)
    ? pn(e)
    : et(Tr, null, String(e));
}
function pn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : rn(e);
}
function Ga(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (ae(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ga(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !rd(t)
        ? (t._ctx = Ge)
        : i === 3 &&
          Ge &&
          (Ge.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ce(t)
      ? ((t = {
          default: t,
          _ctx: Ge,
        }),
        (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [gv(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function pv(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = Na([t.class, r.class]));
      else if (i === "style") t.style = Oa([t.style, r.style]);
      else if (ko(i)) {
        const o = t[i],
          s = r[i];
        s &&
          o !== s &&
          !(ae(o) && o.includes(s)) &&
          (t[i] = o ? [].concat(o, s) : s);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function kt(e, t, n, r = null) {
  Mt(e, t, 7, [n, r]);
}
const vv = ed();
let _v = 0;
function bv(e, t, n) {
  const r = e.type,
    i = (t ? t.appContext : e.appContext) || vv,
    o = {
      uid: _v++,
      vnode: e,
      type: r,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new lf(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: od(r, i),
      emitsOptions: dd(r, i),
      emit: null,
      emitted: null,
      propsDefaults: Te,
      inheritAttrs: r.inheritAttrs,
      ctx: Te,
      data: Te,
      props: Te,
      attrs: Te,
      slots: Te,
      refs: Te,
      setupState: Te,
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
    (o.ctx = {
      _: o,
    }),
    (o.root = t ? t.root : o),
    (o.emit = sv.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let Ze = null;
const Ie = () => Ze || Ge;
let co, Vs;
{
  const e = Ao(),
    t = (n, r) => {
      let i;
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(r),
        (o) => {
          i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
        }
      );
    };
  (co = t("__VUE_INSTANCE_SETTERS__", (n) => (Ze = n))),
    (Vs = t("__VUE_SSR_SETTERS__", (n) => (ui = n)));
}
const wi = (e) => {
    const t = Ze;
    return (
      co(e),
      e.scope.on(),
      () => {
        e.scope.off(), co(t);
      }
    );
  },
  Gl = () => {
    Ze && Ze.scope.off(), co(null);
  };
function pd(e) {
  return e.vnode.shapeFlag & 4;
}
let ui = !1;
function yv(e, t = !1, n = !1) {
  t && Vs(t);
  const { props: r, children: i } = e.vnode,
    o = pd(e);
  zp(e, r, o, t), Xp(e, i, n);
  const s = o ? wv(e, t) : void 0;
  return t && Vs(!1), s;
}
function wv(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, $p));
  const { setup: r } = n;
  if (r) {
    Tn();
    const i = (e.setupContext = r.length > 1 ? Sv(e) : null),
      o = wi(e),
      s = yi(r, e, 0, [e.props, i]),
      a = tf(s);
    if ((In(), o(), (a || e.sp) && !qn(e) && Hf(e), a)) {
      if ((s.then(Gl, Gl), t))
        return s
          .then((l) => {
            Ql(e, l, t);
          })
          .catch((l) => {
            Po(l, e, 0);
          });
      e.asyncDep = s;
    } else Ql(e, s, t);
  } else vd(e, t);
}
function Ql(e, t, n) {
  ce(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Oe(t) && ((e.devtoolsRawSetupState = t), (e.setupState = If(t))),
    vd(e, n);
}
let Xl;
function vd(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Xl && !r.render) {
      const i = r.template || Ua(e).template;
      if (i) {
        const { isCustomElement: o, compilerOptions: s } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = r,
          u = Fe(
            Fe(
              {
                isCustomElement: o,
                delimiters: a,
              },
              s
            ),
            l
          );
        r.render = Xl(i, u);
      }
    }
    e.render = r.render || Ut;
  }
  {
    const i = wi(e);
    Tn();
    try {
      jp(e);
    } finally {
      In(), i();
    }
  }
}
const Ev = {
  get(e, t) {
    return it(e, "get", ""), e[t];
  },
};
function Sv(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ev),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function $o(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(If(bi(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Jr) return Jr[n](e);
          },
          has(t, n) {
            return n in t || n in Jr;
          },
        }))
    : e.proxy;
}
function qs(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Cv(e) {
  return ce(e) && "__vccOpts" in e;
}
const M = (e, t) => mp(e, t, ui);
function j(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Oe(t) && !ae(t)
      ? vr(t)
        ? et(e, null, [t])
        : et(e, t)
      : et(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && vr(n) && (n = [n]),
      et(e, t, n));
}
const Yl = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Ws;
const Jl = typeof window != "undefined" && window.trustedTypes;
if (Jl)
  try {
    Ws = Jl.createPolicy("vue", {
      createHTML: (e) => e,
    });
  } catch {}
const _d = Ws ? (e) => Ws.createHTML(e) : (e) => e,
  kv = "http://www.w3.org/2000/svg",
  Tv = "http://www.w3.org/1998/Math/MathML",
  Qt = typeof document != "undefined" ? document : null,
  Zl = Qt && Qt.createElement("template"),
  Iv = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const i =
        t === "svg"
          ? Qt.createElementNS(kv, e)
          : t === "mathml"
          ? Qt.createElementNS(Tv, e)
          : n
          ? Qt.createElement(e, {
              is: n,
            })
          : Qt.createElement(e);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          i.setAttribute("multiple", r.multiple),
        i
      );
    },
    createText: (e) => Qt.createTextNode(e),
    createComment: (e) => Qt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Qt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, i, o) {
      const s = n ? n.previousSibling : t.lastChild;
      if (i && (i === o || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === o || !(i = i.nextSibling));

        );
      else {
        Zl.innerHTML = _d(
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const a = Zl.content;
        if (r === "svg" || r === "mathml") {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        s ? s.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  cn = "transition",
  Lr = "animation",
  _r = Symbol("_vtc"),
  bd = {
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
  yd = Fe({}, qf, bd),
  Av = (e) => ((e.displayName = "Transition"), (e.props = yd), e),
  fi = Av((e, { slots: t }) => j(Op, wd(e), t)),
  xn = (e, t = []) => {
    ae(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  ec = (e) => (e ? (ae(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function wd(e) {
  const t = {};
  for (const T in e) T in bd || (t[T] = e[T]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: i,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: s = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = o,
      appearActiveClass: u = s,
      appearToClass: c = a,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: h = `${n}-leave-to`,
    } = e,
    _ = Ov(i),
    S = _ && _[0],
    C = _ && _[1],
    {
      onBeforeEnter: y,
      onEnter: g,
      onEnterCancelled: E,
      onLeave: b,
      onLeaveCancelled: O,
      onBeforeAppear: P = y,
      onAppear: A = g,
      onAppearCancelled: K = E,
    } = t,
    N = (T, Q, $, te) => {
      (T._enterCancelled = te), dn(T, Q ? c : a), dn(T, Q ? u : s), $ && $();
    },
    L = (T, Q) => {
      (T._isLeaving = !1), dn(T, f), dn(T, h), dn(T, d), Q && Q();
    },
    q = (T) => (Q, $) => {
      const te = T ? A : g,
        ee = () => N(Q, T, $);
      xn(te, [Q, ee]),
        tc(() => {
          dn(Q, T ? l : o), jt(Q, T ? c : a), ec(te) || nc(Q, r, S, ee);
        });
    };
  return Fe(t, {
    onBeforeEnter(T) {
      xn(y, [T]), jt(T, o), jt(T, s);
    },
    onBeforeAppear(T) {
      xn(P, [T]), jt(T, l), jt(T, u);
    },
    onEnter: q(!1),
    onAppear: q(!0),
    onLeave(T, Q) {
      T._isLeaving = !0;
      const $ = () => L(T, Q);
      jt(T, f),
        T._enterCancelled ? (jt(T, d), Us()) : (Us(), jt(T, d)),
        tc(() => {
          T._isLeaving && (dn(T, f), jt(T, h), ec(b) || nc(T, r, C, $));
        }),
        xn(b, [T, $]);
    },
    onEnterCancelled(T) {
      N(T, !1, void 0, !0), xn(E, [T]);
    },
    onAppearCancelled(T) {
      N(T, !0, void 0, !0), xn(K, [T]);
    },
    onLeaveCancelled(T) {
      L(T), xn(O, [T]);
    },
  });
}
function Ov(e) {
  if (e == null) return null;
  if (Oe(e)) return [os(e.enter), os(e.leave)];
  {
    const t = os(e);
    return [t, t];
  }
}
function os(e) {
  return Pg(e);
}
function jt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[_r] || (e[_r] = new Set())).add(t);
}
function dn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[_r];
  n && (n.delete(t), n.size || (e[_r] = void 0));
}
function tc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Nv = 0;
function nc(e, t, n, r) {
  const i = (e._endId = ++Nv),
    o = () => {
      i === e._endId && r();
    };
  if (n != null) return setTimeout(o, n);
  const { type: s, timeout: a, propCount: l } = Ed(e, t);
  if (!s) return r();
  const u = s + "end";
  let c = 0;
  const f = () => {
      e.removeEventListener(u, d), o();
    },
    d = (h) => {
      h.target === e && ++c >= l && f();
    };
  setTimeout(() => {
    c < l && f();
  }, a + 1),
    e.addEventListener(u, d);
}
function Ed(e, t) {
  const n = window.getComputedStyle(e),
    r = (_) => (n[_] || "").split(", "),
    i = r(`${cn}Delay`),
    o = r(`${cn}Duration`),
    s = rc(i, o),
    a = r(`${Lr}Delay`),
    l = r(`${Lr}Duration`),
    u = rc(a, l);
  let c = null,
    f = 0,
    d = 0;
  t === cn
    ? s > 0 && ((c = cn), (f = s), (d = o.length))
    : t === Lr
    ? u > 0 && ((c = Lr), (f = u), (d = l.length))
    : ((f = Math.max(s, u)),
      (c = f > 0 ? (s > u ? cn : Lr) : null),
      (d = c ? (c === cn ? o.length : l.length) : 0));
  const h =
    c === cn && /\b(transform|all)(,|$)/.test(r(`${cn}Property`).toString());
  return {
    type: c,
    timeout: f,
    propCount: d,
    hasTransform: h,
  };
}
function rc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => ic(n) + ic(e[r])));
}
function ic(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Us() {
  return document.body.offsetHeight;
}
function Pv(e, t, n) {
  const r = e[_r];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const uo = Symbol("_vod"),
  Sd = Symbol("_vsh"),
  Xk = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[uo] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Rr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), Rr(e, !0), r.enter(e))
            : r.leave(e, () => {
                Rr(e, !1);
              })
          : Rr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Rr(e, t);
    },
  };
function Rr(e, t) {
  (e.style.display = t ? e[uo] : "none"), (e[Sd] = !t);
}
const xv = Symbol(""),
  Lv = /(^|;)\s*display\s*:/;
function Rv(e, t, n) {
  const r = e.style,
    i = Le(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (Le(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          n[a] == null && Hi(r, a, "");
        }
      else for (const s in t) n[s] == null && Hi(r, s, "");
    for (const s in n) s === "display" && (o = !0), Hi(r, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = r[xv];
      s && (n += ";" + s), (r.cssText = n), (o = Lv.test(n));
    }
  } else t && e.removeAttribute("style");
  uo in e && ((e[uo] = o ? r.display : ""), e[Sd] && (r.display = "none"));
}
const oc = /\s*!important$/;
function Hi(e, t, n) {
  if (ae(n)) n.forEach((r) => Hi(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = Mv(e, t);
    oc.test(n)
      ? e.setProperty(kn(r), n.replace(oc, ""), "important")
      : (e[r] = n);
  }
}
const sc = ["Webkit", "Moz", "ms"],
  ss = {};
function Mv(e, t) {
  const n = ss[t];
  if (n) return n;
  let r = At(t);
  if (r !== "filter" && r in e) return (ss[t] = r);
  r = Io(r);
  for (let i = 0; i < sc.length; i++) {
    const o = sc[i] + r;
    if (o in e) return (ss[t] = o);
  }
  return t;
}
const ac = "http://www.w3.org/1999/xlink";
function lc(e, t, n, r, i, o = Fg(t)) {
  r && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(ac, t.slice(6, t.length))
      : e.setAttributeNS(ac, t, n)
    : n == null || (o && !of(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, o ? "" : sn(n) ? String(n) : n);
}
function cc(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? _d(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
      l = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (a !== l || !("_value" in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = of(n))
      : n == null && a === "string"
      ? ((n = ""), (s = !0))
      : a === "number" && ((n = 0), (s = !0));
  }
  try {
    e[t] = n;
  } catch {}
  s && e.removeAttribute(i || t);
}
function Dv(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Fv(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const uc = Symbol("_vei");
function $v(e, t, n, r, i = null) {
  const o = e[uc] || (e[uc] = {}),
    s = o[t];
  if (r && s) s.value = r;
  else {
    const [a, l] = jv(t);
    if (r) {
      const u = (o[t] = Wv(r, i));
      Dv(e, a, u, l);
    } else s && (Fv(e, a, s, l), (o[t] = void 0));
  }
}
const fc = /(?:Once|Passive|Capture)$/;
function jv(e) {
  let t;
  if (fc.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(fc)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : kn(e.slice(2)), t];
}
let as = 0;
const Vv = Promise.resolve(),
  qv = () => as || (Vv.then(() => (as = 0)), (as = Date.now()));
function Wv(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Mt(Uv(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = qv()), n;
}
function Uv(e, t) {
  if (ae(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (i) => !i._stopped && r && r(i))
    );
  } else return t;
}
const dc = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Bv = (e, t, n, r, i, o) => {
    const s = i === "svg";
    t === "class"
      ? Pv(e, r, s)
      : t === "style"
      ? Rv(e, n, r)
      : ko(t)
      ? Ta(t) || $v(e, t, n, r, o)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Hv(e, t, r, s)
        )
      ? (cc(e, t, r),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          lc(e, t, r, s, o, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !Le(r))
      ? cc(e, At(t), r, o, t)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        lc(e, t, r, s));
  };
function Hv(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && dc(t) && ce(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return dc(t) && Le(n) ? !1 : t in e;
}
const Cd = new WeakMap(),
  kd = new WeakMap(),
  fo = Symbol("_moveCb"),
  hc = Symbol("_enterCb"),
  zv = (e) => (delete e.props.mode, e),
  Kv = zv({
    name: "TransitionGroup",
    props: Fe({}, yd, {
      tag: String,
      moveClass: String,
    }),
    setup(e, { slots: t }) {
      const n = Ie(),
        r = Vf();
      let i, o;
      return (
        Wa(() => {
          if (!i.length) return;
          const s = e.moveClass || `${e.name || "v"}-move`;
          if (!Jv(i[0].el, n.vnode.el, s)) return;
          i.forEach(Qv), i.forEach(Xv);
          const a = i.filter(Yv);
          Us(),
            a.forEach((l) => {
              const u = l.el,
                c = u.style;
              jt(u, s),
                (c.transform = c.webkitTransform = c.transitionDuration = "");
              const f = (u[fo] = (d) => {
                (d && d.target !== u) ||
                  ((!d || /transform$/.test(d.propertyName)) &&
                    (u.removeEventListener("transitionend", f),
                    (u[fo] = null),
                    dn(u, s)));
              });
              u.addEventListener("transitionend", f);
            });
        }),
        () => {
          const s = he(e),
            a = wd(s);
          let l = s.tag || Ye;
          if (((i = []), o))
            for (let u = 0; u < o.length; u++) {
              const c = o[u];
              c.el &&
                c.el instanceof Element &&
                (i.push(c),
                En(c, li(c, a, r, n)),
                Cd.set(c, c.el.getBoundingClientRect()));
            }
          o = t.default ? qa(t.default()) : [];
          for (let u = 0; u < o.length; u++) {
            const c = o[u];
            c.key != null && En(c, li(c, a, r, n));
          }
          return et(l, null, o);
        }
      );
    },
  }),
  Gv = Kv;
function Qv(e) {
  const t = e.el;
  t[fo] && t[fo](), t[hc] && t[hc]();
}
function Xv(e) {
  kd.set(e, e.el.getBoundingClientRect());
}
function Yv(e) {
  const t = Cd.get(e),
    n = kd.get(e),
    r = t.left - n.left,
    i = t.top - n.top;
  if (r || i) {
    const o = e.el.style;
    return (
      (o.transform = o.webkitTransform = `translate(${r}px,${i}px)`),
      (o.transitionDuration = "0s"),
      e
    );
  }
}
function Jv(e, t, n) {
  const r = e.cloneNode(),
    i = e[_r];
  i &&
    i.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }),
    n.split(/\s+/).forEach((a) => a && r.classList.add(a)),
    (r.style.display = "none");
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(r);
  const { hasTransform: s } = Ed(r);
  return o.removeChild(r), s;
}
const Zv = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  Yk = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (i) => {
        if (!("key" in i)) return;
        const o = kn(i.key);
        if (t.some((s) => s === o || Zv[s] === o)) return e(i);
      })
    );
  },
  e_ = Fe(
    {
      patchProp: Bv,
    },
    Iv
  );
let mc;
function t_() {
  return mc || (mc = Jp(e_));
}
const Td = (...e) => {
  const t = t_().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const i = r_(r);
      if (!i) return;
      const o = t._component;
      !ce(o) && !o.render && !o.template && (o.template = i.innerHTML),
        i.nodeType === 1 && (i.textContent = "");
      const s = n(i, !1, n_(i));
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        s
      );
    }),
    t
  );
};
function n_(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function r_(e) {
  return Le(e) ? document.querySelector(e) : e;
}
function Ir(e, t, n, r) {
  return (
    Object.defineProperty(e, t, {
      get: n,
      set: r,
      enumerable: !0,
    }),
    e
  );
}
const Sn = ue(!1);
let Bs;
function i_(e, t) {
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
function o_(e) {
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
const Id = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function s_(e) {
  const t = e.toLowerCase(),
    n = o_(t),
    r = i_(t, n),
    i = {
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
    ((i[r.browser] = !0),
    (i.version = r.version),
    (i.versionNumber = parseInt(r.version, 10))),
    r.platform && (i[r.platform] = !0);
  const o =
    i.android ||
    i.ios ||
    i.bb ||
    i.blackberry ||
    i.ipad ||
    i.iphone ||
    i.ipod ||
    i.kindle ||
    i.playbook ||
    i.silk ||
    i["windows phone"];
  if (
    (o === !0 || t.indexOf("mobile") !== -1
      ? (i.mobile = !0)
      : (i.desktop = !0),
    i["windows phone"] && ((i.winphone = !0), delete i["windows phone"]),
    i.edga || i.edgios || i.edg
      ? ((i.edge = !0), (r.browser = "edge"))
      : i.crios
      ? ((i.chrome = !0), (r.browser = "chrome"))
      : i.fxios && ((i.firefox = !0), (r.browser = "firefox")),
    (i.ipod || i.ipad || i.iphone) && (i.ios = !0),
    i.vivaldi && ((r.browser = "vivaldi"), (i.vivaldi = !0)),
    (i.chrome ||
      i.opr ||
      i.safari ||
      i.vivaldi ||
      (i.mobile === !0 && i.ios !== !0 && o !== !0)) &&
      (i.webkit = !0),
    i.opr && ((r.browser = "opera"), (i.opera = !0)),
    i.safari &&
      (i.blackberry || i.bb
        ? ((r.browser = "blackberry"), (i.blackberry = !0))
        : i.playbook
        ? ((r.browser = "playbook"), (i.playbook = !0))
        : i.android
        ? ((r.browser = "android"), (i.android = !0))
        : i.kindle
        ? ((r.browser = "kindle"), (i.kindle = !0))
        : i.silk && ((r.browser = "silk"), (i.silk = !0))),
    (i.name = r.browser),
    (i.platform = r.platform),
    t.indexOf("electron") !== -1)
  )
    i.electron = !0;
  else if (document.location.href.indexOf("-extension://") !== -1) i.bex = !0;
  else {
    if (
      (window.Capacitor !== void 0
        ? ((i.capacitor = !0),
          (i.nativeMobile = !0),
          (i.nativeMobileWrapper = "capacitor"))
        : (window._cordovaNative !== void 0 || window.cordova !== void 0) &&
          ((i.cordova = !0),
          (i.nativeMobile = !0),
          (i.nativeMobileWrapper = "cordova")),
      Sn.value === !0 &&
        (Bs = {
          is: {
            ...i,
          },
        }),
      Id === !0 &&
        i.mac === !0 &&
        ((i.desktop === !0 && i.safari === !0) ||
          (i.nativeMobile === !0 &&
            i.android !== !0 &&
            i.ios !== !0 &&
            i.ipad !== !0)))
    ) {
      delete i.mac, delete i.desktop;
      const s =
        Math.min(window.innerHeight, window.innerWidth) > 414
          ? "ipad"
          : "iphone";
      Object.assign(i, {
        mobile: !0,
        ios: !0,
        platform: s,
        [s]: !0,
      });
    }
    i.mobile !== !0 &&
      window.navigator.userAgentData &&
      window.navigator.userAgentData.mobile &&
      (delete i.desktop, (i.mobile = !0));
  }
  return i;
}
const gc = navigator.userAgent || navigator.vendor || window.opera,
  a_ = {
    has: {
      touch: !1,
      webStorage: !1,
    },
    within: {
      iframe: !1,
    },
  },
  Be = {
    userAgent: gc,
    is: s_(gc),
    has: {
      touch: Id,
    },
    within: {
      iframe: window.self !== window.top,
    },
  },
  Hs = {
    install(e) {
      const { $q: t } = e;
      Sn.value === !0
        ? (e.onSSRHydrated.push(() => {
            Object.assign(t.platform, Be), (Sn.value = !1);
          }),
          (t.platform = zn(this)))
        : (t.platform = this);
    },
  };
{
  let e;
  Ir(Be.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return (e = !0), !0;
    } catch {}
    return (e = !1), !1;
  }),
    Object.assign(Hs, Be),
    Sn.value === !0 && (Object.assign(Hs, Bs, a_), (Bs = null));
}
function nt(e) {
  return bi(Kn(e));
}
function l_(e) {
  return bi(e);
}
const Ar = (e, t) => {
    const n = zn(e);
    for (const r in e)
      Ir(
        t,
        r,
        () => n[r],
        (i) => {
          n[r] = i;
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
function di() {}
function Jk(e) {
  return e.button === 0;
}
function c_(e) {
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
function u_(e) {
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
function ho(e) {
  e.stopPropagation();
}
function yn(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function Tt(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function Zk(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return;
  const n =
    t === !0
      ? (r) => {
          (r.__dragPrevented = !0),
            r.addEventListener("dragstart", yn, ft.notPassiveCapture);
        }
      : (r) => {
          delete r.__dragPrevented,
            r.removeEventListener("dragstart", yn, ft.notPassiveCapture);
        };
  e.querySelectorAll("a, img").forEach(n);
}
function f_(e, t, n) {
  const r = `__q_${t}_evt`;
  (e[r] = e[r] !== void 0 ? e[r].concat(n) : n),
    n.forEach((i) => {
      i[0].addEventListener(i[1], e[i[2]], ft[i[3]]);
    });
}
function d_(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 &&
    (e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], ft[r[3]]);
    }),
    (e[n] = void 0));
}
function Ad(e, t = 250, n) {
  let r = null;
  function i() {
    const o = arguments,
      s = () => {
        (r = null), e.apply(this, o);
      };
    r !== null && clearTimeout(r), (r = setTimeout(s, t));
  }
  return (
    (i.cancel = () => {
      r !== null && clearTimeout(r);
    }),
    i
  );
}
const ls = ["sm", "md", "lg", "xl"],
  { passive: pc } = ft,
  h_ = Ar(
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
      setSizes: di,
      setDebounce: di,
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
          i = document.scrollingElement || document.documentElement,
          o =
            n === void 0 || Be.is.mobile === !0
              ? () => [
                  Math.max(window.innerWidth, i.clientWidth),
                  Math.max(window.innerHeight, i.clientHeight),
                ]
              : () => [
                  n.width * n.scale + window.innerWidth - i.clientWidth,
                  n.height * n.scale + window.innerHeight - i.clientHeight,
                ],
          s = e.config.screen !== void 0 && e.config.screen.bodyClasses === !0;
        this.__update = (f) => {
          const [d, h] = o();
          if ((h !== this.height && (this.height = h), d !== this.width))
            this.width = d;
          else if (f !== !0) return;
          let _ = this.sizes;
          (this.gt.xs = d >= _.sm),
            (this.gt.sm = d >= _.md),
            (this.gt.md = d >= _.lg),
            (this.gt.lg = d >= _.xl),
            (this.lt.sm = d < _.sm),
            (this.lt.md = d < _.md),
            (this.lt.lg = d < _.lg),
            (this.lt.xl = d < _.xl),
            (this.xs = this.lt.sm),
            (this.sm = this.gt.xs === !0 && this.lt.md === !0),
            (this.md = this.gt.sm === !0 && this.lt.lg === !0),
            (this.lg = this.gt.md === !0 && this.lt.xl === !0),
            (this.xl = this.gt.lg),
            (_ =
              (this.xs === !0 && "xs") ||
              (this.sm === !0 && "sm") ||
              (this.md === !0 && "md") ||
              (this.lg === !0 && "lg") ||
              "xl"),
            _ !== this.name &&
              (s === !0 &&
                (document.body.classList.remove(`screen--${this.name}`),
                document.body.classList.add(`screen--${_}`)),
              (this.name = _));
        };
        let a,
          l = {},
          u = 16;
        (this.setSizes = (f) => {
          ls.forEach((d) => {
            f[d] !== void 0 && (l[d] = f[d]);
          });
        }),
          (this.setDebounce = (f) => {
            u = f;
          });
        const c = () => {
          const f = getComputedStyle(document.body);
          f.getPropertyValue("--q-size-sm") &&
            ls.forEach((d) => {
              this.sizes[d] = parseInt(f.getPropertyValue(`--q-size-${d}`), 10);
            }),
            (this.setSizes = (d) => {
              ls.forEach((h) => {
                d[h] && (this.sizes[h] = d[h]);
              }),
                this.__update(!0);
            }),
            (this.setDebounce = (d) => {
              a !== void 0 && r.removeEventListener("resize", a, pc),
                (a = d > 0 ? Ad(this.__update, d) : this.__update),
                r.addEventListener("resize", a, pc);
            }),
            this.setDebounce(u),
            Object.keys(l).length !== 0
              ? (this.setSizes(l), (l = void 0))
              : this.__update(),
            s === !0 &&
              this.name === "xs" &&
              document.body.classList.add("screen--xs");
        };
        Sn.value === !0 ? t.push(c) : c();
      },
    }
  ),
  rt = Ar(
    {
      isActive: !1,
      mode: !1,
    },
    {
      __media: void 0,
      set(e) {
        (rt.mode = e),
          e === "auto"
            ? (rt.__media === void 0 &&
                ((rt.__media = window.matchMedia(
                  "(prefers-color-scheme: dark)"
                )),
                (rt.__updateMedia = () => {
                  rt.set("auto");
                }),
                rt.__media.addListener(rt.__updateMedia)),
              (e = rt.__media.matches))
            : rt.__media !== void 0 &&
              (rt.__media.removeListener(rt.__updateMedia),
              (rt.__media = void 0)),
          (rt.isActive = e === !0),
          document.body.classList.remove(
            `body--${e === !0 ? "light" : "dark"}`
          ),
          document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`);
      },
      toggle() {
        rt.set(rt.isActive === !1);
      },
      install({ $q: e, ssrContext: t }) {
        const { dark: n } = e.config;
        (e.dark = this),
          this.__installed !== !0 && this.set(n !== void 0 ? n : !1);
      },
    }
  );
function m_(e, t, n = document.body) {
  if (typeof e != "string")
    throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
let Od = !1;
function g_(e) {
  Od = e.isComposing === !0;
}
function Nd(e) {
  return (
    Od === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
  );
}
function hi(e, t) {
  return Nd(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function Pd(e) {
  if (e.ios === !0) return "ios";
  if (e.android === !0) return "android";
}
function p_({ is: e, has: t, within: n }, r) {
  const i = [
    e.desktop === !0 ? "desktop" : "mobile",
    `${t.touch === !1 ? "no-" : ""}touch`,
  ];
  if (e.mobile === !0) {
    const o = Pd(e);
    o !== void 0 && i.push("platform-" + o);
  }
  if (e.nativeMobile === !0) {
    const o = e.nativeMobileWrapper;
    i.push(o),
      i.push("native-mobile"),
      e.ios === !0 &&
        (r[o] === void 0 || r[o].iosStatusBarPadding !== !1) &&
        i.push("q-ios-padding");
  } else e.electron === !0 ? i.push("electron") : e.bex === !0 && i.push("bex");
  return n.iframe === !0 && i.push("within-iframe"), i;
}
function v_() {
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
      const i = Pd(e);
      i !== void 0 && n.add(`platform-${i}`);
    }
  }
  Be.has.touch === !0 && (n.delete("no-touch"), n.add("touch")),
    Be.within.iframe === !0 && n.add("within-iframe");
  const r = Array.from(n).join(" ");
  t !== r && (document.body.className = r);
}
function __(e) {
  for (const t in e) m_(t, e[t]);
}
const b_ = {
    install(e) {
      if (this.__installed !== !0) {
        if (Sn.value === !0) v_();
        else {
          const { $q: t } = e;
          t.config.brand !== void 0 && __(t.config.brand);
          const n = p_(Be, t.config);
          document.body.classList.add.apply(document.body.classList, n);
        }
        Be.is.ios === !0 && document.body.addEventListener("touchstart", di),
          window.addEventListener("keydown", g_, !0);
      }
    },
  },
  xd = () => !0;
function y_(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function w_(e) {
  return (
    e.startsWith("#") === !0 && (e = e.substring(1)),
    e.startsWith("/") === !1 && (e = "/" + e),
    e.endsWith("/") === !0 && (e = e.substring(0, e.length - 1)),
    "#" + e
  );
}
function E_(e) {
  if (e.backButtonExit === !1) return () => !1;
  if (e.backButtonExit === "*") return xd;
  const t = ["#/"];
  return (
    Array.isArray(e.backButtonExit) === !0 &&
      t.push(...e.backButtonExit.filter(y_).map(w_)),
    () => t.includes(window.location.hash)
  );
}
const zs = {
    __history: [],
    add: di,
    remove: di,
    install({ $q: e }) {
      if (this.__installed === !0) return;
      const { cordova: t, capacitor: n } = Be.is;
      if (t !== !0 && n !== !0) return;
      const r = e.config[t === !0 ? "cordova" : "capacitor"];
      if (
        (r !== void 0 && r.backButton === !1) ||
        (n === !0 &&
          (window.Capacitor === void 0 ||
            window.Capacitor.Plugins.App === void 0))
      )
        return;
      (this.add = (s) => {
        s.condition === void 0 && (s.condition = xd), this.__history.push(s);
      }),
        (this.remove = (s) => {
          const a = this.__history.indexOf(s);
          a >= 0 && this.__history.splice(a, 1);
        });
      const i = E_(
          Object.assign(
            {
              backButtonExit: !0,
            },
            r
          )
        ),
        o = () => {
          if (this.__history.length) {
            const s = this.__history[this.__history.length - 1];
            s.condition() === !0 && (this.__history.pop(), s.handler());
          } else i() === !0 ? navigator.app.exitApp() : window.history.back();
        };
      t === !0
        ? document.addEventListener("deviceready", () => {
            document.addEventListener("backbutton", o, !1);
          })
        : window.Capacitor.Plugins.App.addListener("backButton", o);
    },
  },
  vc = {
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
function _c() {
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
const vn = Ar(
    {
      __qLang: {},
    },
    {
      getLocale: _c,
      set(e = vc, t) {
        const n = {
          ...e,
          rtl: e.rtl === !0,
          getLocale: _c,
        };
        {
          if (
            ((n.set = vn.set),
            vn.__langConfig === void 0 || vn.__langConfig.noHtmlAttrs !== !0)
          ) {
            const r = document.documentElement;
            r.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"),
              r.setAttribute("lang", n.isoName);
          }
          Object.assign(vn.__qLang, n);
        }
      },
      install({ $q: e, lang: t, ssrContext: n }) {
        (e.lang = vn.__qLang),
          (vn.__langConfig = e.config.lang),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : ((this.props = new Proxy(this.__qLang, {
                get() {
                  return Reflect.get(...arguments);
                },
                ownKeys(r) {
                  return Reflect.ownKeys(r).filter(
                    (i) => i !== "set" && i !== "getLocale"
                  );
                },
              })),
              this.set(t || vc));
      },
    }
  ),
  S_ = {
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
  mo = Ar(
    {
      iconMapFn: null,
      __qIconSet: {},
    },
    {
      set(e, t) {
        const n = {
          ...e,
        };
        (n.set = mo.set), Object.assign(mo.__qIconSet, n);
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__qIconSet),
          Ir(
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
                  return Reflect.ownKeys(r).filter((i) => i !== "set");
                },
              })),
              this.set(t || S_));
      },
    }
  ),
  Ld = "_q_",
  eT = "_q_l_",
  tT = "_q_pc_",
  C_ = "_q_fo_",
  nT = "_q_tabs_";
function rT() {}
const go = {};
let Rd = !1;
function k_() {
  Rd = !0;
}
function cs(e, t) {
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
      for (r = n; r-- !== 0; ) if (cs(e[r], t[r]) !== !0) return !1;
      return !0;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size) return !1;
      let o = e.entries();
      for (r = o.next(); r.done !== !0; ) {
        if (t.has(r.value[0]) !== !0) return !1;
        r = o.next();
      }
      for (o = e.entries(), r = o.next(); r.done !== !0; ) {
        if (cs(r.value[1], t.get(r.value[0])) !== !0) return !1;
        r = o.next();
      }
      return !0;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size) return !1;
      const o = e.entries();
      for (r = o.next(); r.done !== !0; ) {
        if (t.has(r.value[0]) !== !0) return !1;
        r = o.next();
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
    const i = Object.keys(e).filter((o) => e[o] !== void 0);
    if (
      ((n = i.length),
      n !== Object.keys(t).filter((o) => t[o] !== void 0).length)
    )
      return !1;
    for (r = n; r-- !== 0; ) {
      const o = i[r];
      if (cs(e[o], t[o]) !== !0) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function vt(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== !0;
}
function iT(e) {
  return typeof e == "number" && isFinite(e);
}
const bc = [Hs, b_, rt, h_, zs, vn, mo];
function Qa(e, t) {
  const n = Td(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: r, ...i } = t._context;
  return Object.assign(n._context, i), n;
}
function yc(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0);
  });
}
function T_(e, t, n) {
  (e.config.globalProperties.$q = n.$q),
    e.provide(Ld, n.$q),
    yc(n, bc),
    t.components !== void 0 &&
      Object.values(t.components).forEach((r) => {
        vt(r) === !0 && r.name !== void 0 && e.component(r.name, r);
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((r) => {
        vt(r) === !0 && r.name !== void 0 && e.directive(r.name, r);
      }),
    t.plugins !== void 0 &&
      yc(
        n,
        Object.values(t.plugins).filter(
          (r) => typeof r.install == "function" && bc.includes(r) === !1
        )
      ),
    Sn.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((r) => {
          r();
        }),
          (n.$q.onSSRHydrated = () => {});
      });
}
const I_ = function (e, t = {}) {
    const n = {
      version: "2.17.4",
    };
    Rd === !1
      ? (t.config !== void 0 && Object.assign(go, t.config),
        (n.config = {
          ...go,
        }),
        k_())
      : (n.config = t.config || {}),
      T_(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: [],
      });
  },
  A_ = {
    name: "Quasar",
    version: "2.17.4",
    install: I_,
    lang: vn,
    iconSet: mo,
  };
function O_() {
  return Md().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Md() {
  return typeof navigator != "undefined" && typeof window != "undefined"
    ? window
    : typeof globalThis != "undefined"
    ? globalThis
    : {};
}
const N_ = typeof Proxy == "function",
  P_ = "devtools-plugin:setup",
  x_ = "plugin:settings:set";
let Jn, Ks;
function L_() {
  var e;
  return (
    Jn !== void 0 ||
      (typeof window != "undefined" && window.performance
        ? ((Jn = !0), (Ks = window.performance))
        : typeof globalThis != "undefined" &&
          !((e = globalThis.perf_hooks) === null || e === void 0) &&
          e.performance
        ? ((Jn = !0), (Ks = globalThis.perf_hooks.performance))
        : (Jn = !1)),
    Jn
  );
}
function R_() {
  return L_() ? Ks.now() : Date.now();
}
class M_ {
  constructor(t, n) {
    (this.target = null),
      (this.targetQueue = []),
      (this.onQueue = []),
      (this.plugin = t),
      (this.hook = n);
    const r = {};
    if (t.settings)
      for (const s in t.settings) {
        const a = t.settings[s];
        r[s] = a.defaultValue;
      }
    const i = `__vue-devtools-plugin-settings__${t.id}`;
    let o = Object.assign({}, r);
    try {
      const s = localStorage.getItem(i),
        a = JSON.parse(s);
      Object.assign(o, a);
    } catch {}
    (this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(s) {
        try {
          localStorage.setItem(i, JSON.stringify(s));
        } catch {}
        o = s;
      },
      now() {
        return R_();
      },
    }),
      n &&
        n.on(x_, (s, a) => {
          s === this.plugin.id && this.fallbacks.setSettings(a);
        }),
      (this.proxiedOn = new Proxy(
        {},
        {
          get: (s, a) =>
            this.target
              ? this.target.on[a]
              : (...l) => {
                  this.onQueue.push({
                    method: a,
                    args: l,
                  });
                },
        }
      )),
      (this.proxiedTarget = new Proxy(
        {},
        {
          get: (s, a) =>
            this.target
              ? this.target[a]
              : a === "on"
              ? this.proxiedOn
              : Object.keys(this.fallbacks).includes(a)
              ? (...l) => (
                  this.targetQueue.push({
                    method: a,
                    args: l,
                    resolve: () => {},
                  }),
                  this.fallbacks[a](...l)
                )
              : (...l) =>
                  new Promise((u) => {
                    this.targetQueue.push({
                      method: a,
                      args: l,
                      resolve: u,
                    });
                  }),
        }
      ));
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue) this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Xa(e, t) {
  const n = e,
    r = Md(),
    i = O_(),
    o = N_ && n.enableEarlyProxy;
  if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o)) i.emit(P_, e, t);
  else {
    const s = o ? new M_(n, i) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: s,
    }),
      s && t(s.proxiedTarget);
  }
}
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
const Xt = typeof document != "undefined";
function Dd(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function D_(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && Dd(e.default))
  );
}
const Ee = Object.assign;
function us(e, t) {
  const n = {};
  for (const r in t) {
    const i = t[r];
    n[r] = bt(i) ? i.map(e) : e(i);
  }
  return n;
}
const ti = () => {},
  bt = Array.isArray,
  Fd = /#/g,
  F_ = /&/g,
  $_ = /\//g,
  j_ = /=/g,
  V_ = /\?/g,
  $d = /\+/g,
  q_ = /%5B/g,
  W_ = /%5D/g,
  jd = /%5E/g,
  U_ = /%60/g,
  Vd = /%7B/g,
  B_ = /%7C/g,
  qd = /%7D/g,
  H_ = /%20/g;
function Ya(e) {
  return encodeURI("" + e)
    .replace(B_, "|")
    .replace(q_, "[")
    .replace(W_, "]");
}
function z_(e) {
  return Ya(e).replace(Vd, "{").replace(qd, "}").replace(jd, "^");
}
function Gs(e) {
  return Ya(e)
    .replace($d, "%2B")
    .replace(H_, "+")
    .replace(Fd, "%23")
    .replace(F_, "%26")
    .replace(U_, "`")
    .replace(Vd, "{")
    .replace(qd, "}")
    .replace(jd, "^");
}
function K_(e) {
  return Gs(e).replace(j_, "%3D");
}
function G_(e) {
  return Ya(e).replace(Fd, "%23").replace(V_, "%3F");
}
function Q_(e) {
  return e == null ? "" : G_(e).replace($_, "%2F");
}
function br(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const X_ = /\/$/,
  Y_ = (e) => e.replace(X_, "");
function fs(e, t, n = "/") {
  let r,
    i = {},
    o = "",
    s = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((r = t.slice(0, l)),
      (o = t.slice(l + 1, a > -1 ? a : t.length)),
      (i = e(o))),
    a > -1 && ((r = r || t.slice(0, a)), (s = t.slice(a, t.length))),
    (r = tb(r != null ? r : t, n)),
    {
      fullPath: r + (o && "?") + o + s,
      path: r,
      query: i,
      hash: br(s),
    }
  );
}
function J_(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function wc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Z_(e, t, n) {
  const r = t.matched.length - 1,
    i = n.matched.length - 1;
  return (
    r > -1 &&
    r === i &&
    Cn(t.matched[r], n.matched[i]) &&
    Wd(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Cn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Wd(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!eb(e[n], t[n])) return !1;
  return !0;
}
function eb(e, t) {
  return bt(e) ? Ec(e, t) : bt(t) ? Ec(t, e) : e === t;
}
function Ec(e, t) {
  return bt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function tb(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
    i = r[r.length - 1];
  (i === ".." || i === ".") && r.push("");
  let o = n.length - 1,
    s,
    a;
  for (s = 0; s < r.length; s++)
    if (((a = r[s]), a !== "."))
      if (a === "..") o > 1 && o--;
      else break;
  return n.slice(0, o).join("/") + "/" + r.slice(s).join("/");
}
const un = {
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
var mi;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(mi || (mi = {}));
var ni;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(ni || (ni = {}));
function nb(e) {
  if (!e)
    if (Xt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Y_(e);
}
const rb = /^[^#]+#/;
function ib(e, t) {
  return e.replace(rb, "#") + t;
}
function ob(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const jo = () => ({
  left: window.scrollX,
  top: window.scrollY,
});
function sb(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      i =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!i) return;
    t = ob(i, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function Sc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Qs = new Map();
function ab(e, t) {
  Qs.set(e, t);
}
function lb(e) {
  const t = Qs.get(e);
  return Qs.delete(e), t;
}
let cb = () => location.protocol + "//" + location.host;
function Ud(e, t) {
  const { pathname: n, search: r, hash: i } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let a = i.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = i.slice(a);
    return l[0] !== "/" && (l = "/" + l), wc(l, "");
  }
  return wc(n, e) + r + i;
}
function ub(e, t, n, r) {
  let i = [],
    o = [],
    s = null;
  const a = ({ state: d }) => {
    const h = Ud(e, location),
      _ = n.value,
      S = t.value;
    let C = 0;
    if (d) {
      if (((n.value = h), (t.value = d), s && s === _)) {
        s = null;
        return;
      }
      C = S ? d.position - S.position : 0;
    } else r(h);
    i.forEach((y) => {
      y(n.value, _, {
        delta: C,
        type: mi.pop,
        direction: C ? (C > 0 ? ni.forward : ni.back) : ni.unknown,
      });
    });
  };
  function l() {
    s = n.value;
  }
  function u(d) {
    i.push(d);
    const h = () => {
      const _ = i.indexOf(d);
      _ > -1 && i.splice(_, 1);
    };
    return o.push(h), h;
  }
  function c() {
    const { history: d } = window;
    d.state &&
      d.replaceState(
        Ee({}, d.state, {
          scroll: jo(),
        }),
        ""
      );
  }
  function f() {
    for (const d of o) d();
    (o = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", c);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", c, {
      passive: !0,
    }),
    {
      pauseListeners: l,
      listen: u,
      destroy: f,
    }
  );
}
function Cc(e, t, n, r = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: i ? jo() : null,
  };
}
function fb(e) {
  const { history: t, location: n } = window,
    r = {
      value: Ud(e, n),
    },
    i = {
      value: t.state,
    };
  i.value ||
    o(
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
  function o(l, u, c) {
    const f = e.indexOf("#"),
      d =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l
          : cb() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](u, "", d), (i.value = u);
    } catch (h) {
      console.error(h), n[c ? "replace" : "assign"](d);
    }
  }
  function s(l, u) {
    const c = Ee({}, t.state, Cc(i.value.back, l, i.value.forward, !0), u, {
      position: i.value.position,
    });
    o(l, c, !0), (r.value = l);
  }
  function a(l, u) {
    const c = Ee({}, i.value, t.state, {
      forward: l,
      scroll: jo(),
    });
    o(c.current, c, !0);
    const f = Ee(
      {},
      Cc(r.value, l, null),
      {
        position: c.position + 1,
      },
      u
    );
    o(l, f, !1), (r.value = l);
  }
  return {
    location: r,
    state: i,
    push: a,
    replace: s,
  };
}
function db(e) {
  e = nb(e);
  const t = fb(e),
    n = ub(e, t.state, t.location, t.replace);
  function r(o, s = !0) {
    s || n.pauseListeners(), history.go(o);
  }
  const i = Ee(
    {
      location: "",
      base: e,
      go: r,
      createHref: ib.bind(null, e),
    },
    t,
    n
  );
  return (
    Object.defineProperty(i, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(i, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    i
  );
}
function Bd(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Hd(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const zd = Symbol("");
var kc;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(kc || (kc = {}));
function yr(e, t) {
  return Ee(
    new Error(),
    {
      type: e,
      [zd]: !0,
    },
    t
  );
}
function zt(e, t) {
  return e instanceof Error && zd in e && (t == null || !!(e.type & t));
}
const Tc = "[^/]+?",
  hb = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0,
  },
  mb = /[.+*?^${}()[\]/\\]/g;
function gb(e, t) {
  const n = Ee({}, hb, t),
    r = [];
  let i = n.start ? "^" : "";
  const o = [];
  for (const u of e) {
    const c = u.length ? [] : [90];
    n.strict && !u.length && (i += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        f || (i += "/"), (i += d.value.replace(mb, "\\$&")), (h += 40);
      else if (d.type === 1) {
        const { value: _, repeatable: S, optional: C, regexp: y } = d;
        o.push({
          name: _,
          repeatable: S,
          optional: C,
        });
        const g = y || Tc;
        if (g !== Tc) {
          h += 10;
          try {
            new RegExp(`(${g})`);
          } catch (b) {
            throw new Error(
              `Invalid custom RegExp for param "${_}" (${g}): ` + b.message
            );
          }
        }
        let E = S ? `((?:${g})(?:/(?:${g}))*)` : `(${g})`;
        f || (E = C && u.length < 2 ? `(?:/${E})` : "/" + E),
          C && (E += "?"),
          (i += E),
          (h += 20),
          C && (h += -8),
          S && (h += -20),
          g === ".*" && (h += -50);
      }
      c.push(h);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (i += "/?"),
    n.end ? (i += "$") : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
  const s = new RegExp(i, n.sensitive ? "" : "i");
  function a(u) {
    const c = u.match(s),
      f = {};
    if (!c) return null;
    for (let d = 1; d < c.length; d++) {
      const h = c[d] || "",
        _ = o[d - 1];
      f[_.name] = h && _.repeatable ? h.split("/") : h;
    }
    return f;
  }
  function l(u) {
    let c = "",
      f = !1;
    for (const d of e) {
      (!f || !c.endsWith("/")) && (c += "/"), (f = !1);
      for (const h of d)
        if (h.type === 0) c += h.value;
        else if (h.type === 1) {
          const { value: _, repeatable: S, optional: C } = h,
            y = _ in u ? u[_] : "";
          if (bt(y) && !S)
            throw new Error(
              `Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`
            );
          const g = bt(y) ? y.join("/") : y;
          if (!g)
            if (C)
              d.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${_}"`);
          c += g;
        }
    }
    return c || "/";
  }
  return {
    re: s,
    score: r,
    keys: o,
    parse: a,
    stringify: l,
  };
}
function pb(e, t) {
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
function Kd(e, t) {
  let n = 0;
  const r = e.score,
    i = t.score;
  for (; n < r.length && n < i.length; ) {
    const o = pb(r[n], i[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (Ic(r)) return 1;
    if (Ic(i)) return -1;
  }
  return i.length - r.length;
}
function Ic(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const vb = {
    type: 0,
    value: "",
  },
  _b = /[a-zA-Z0-9_]/;
function bb(e) {
  if (!e) return [[]];
  if (e === "/") return [[vb]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${u}": ${h}`);
  }
  let n = 0,
    r = n;
  const i = [];
  let o;
  function s() {
    o && i.push(o), (o = []);
  }
  let a = 0,
    l,
    u = "",
    c = "";
  function f() {
    u &&
      (n === 0
        ? o.push({
            type: 0,
            value: u,
          })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function d() {
    u += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (u && f(), s()) : l === ":" ? (f(), (n = 1)) : d();
        break;
      case 4:
        d(), (n = r);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : _b.test(l)
          ? d()
          : (f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")"
          ? c[c.length - 1] == "\\"
            ? (c = c.slice(0, -1) + l)
            : (n = 3)
          : (c += l);
        break;
      case 3:
        f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (c = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), s(), i;
}
function yb(e, t, n) {
  const r = gb(bb(e.path), n),
    i = Ee(r, {
      record: e,
      parent: t,
      children: [],
      alias: [],
    });
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function wb(e, t) {
  const n = [],
    r = new Map();
  t = Pc(
    {
      strict: !1,
      end: !0,
      sensitive: !1,
    },
    t
  );
  function i(f) {
    return r.get(f);
  }
  function o(f, d, h) {
    const _ = !h,
      S = Oc(f);
    S.aliasOf = h && h.record;
    const C = Pc(t, f),
      y = [S];
    if ("alias" in f) {
      const b = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const O of b)
        y.push(
          Oc(
            Ee({}, S, {
              components: h ? h.record.components : S.components,
              path: O,
              aliasOf: h ? h.record : S,
            })
          )
        );
    }
    let g, E;
    for (const b of y) {
      const { path: O } = b;
      if (d && O[0] !== "/") {
        const P = d.record.path,
          A = P[P.length - 1] === "/" ? "" : "/";
        b.path = d.record.path + (O && A + O);
      }
      if (
        ((g = yb(b, d, C)),
        h
          ? h.alias.push(g)
          : ((E = E || g),
            E !== g && E.alias.push(g),
            _ && f.name && !Nc(g) && s(f.name)),
        Gd(g) && l(g),
        S.children)
      ) {
        const P = S.children;
        for (let A = 0; A < P.length; A++) o(P[A], g, h && h.children[A]);
      }
      h = h || g;
    }
    return E
      ? () => {
          s(E);
        }
      : ti;
  }
  function s(f) {
    if (Hd(f)) {
      const d = r.get(f);
      d &&
        (r.delete(f),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(s),
        d.alias.forEach(s));
    } else {
      const d = n.indexOf(f);
      d > -1 &&
        (n.splice(d, 1),
        f.record.name && r.delete(f.record.name),
        f.children.forEach(s),
        f.alias.forEach(s));
    }
  }
  function a() {
    return n;
  }
  function l(f) {
    const d = Cb(f, n);
    n.splice(d, 0, f), f.record.name && !Nc(f) && r.set(f.record.name, f);
  }
  function u(f, d) {
    let h,
      _ = {},
      S,
      C;
    if ("name" in f && f.name) {
      if (((h = r.get(f.name)), !h))
        throw yr(1, {
          location: f,
        });
      (C = h.record.name),
        (_ = Ee(
          Ac(
            d.params,
            h.keys
              .filter((E) => !E.optional)
              .concat(h.parent ? h.parent.keys.filter((E) => E.optional) : [])
              .map((E) => E.name)
          ),
          f.params &&
            Ac(
              f.params,
              h.keys.map((E) => E.name)
            )
        )),
        (S = h.stringify(_));
    } else if (f.path != null)
      (S = f.path),
        (h = n.find((E) => E.re.test(S))),
        h && ((_ = h.parse(S)), (C = h.record.name));
    else {
      if (((h = d.name ? r.get(d.name) : n.find((E) => E.re.test(d.path))), !h))
        throw yr(1, {
          location: f,
          currentLocation: d,
        });
      (C = h.record.name),
        (_ = Ee({}, d.params, f.params)),
        (S = h.stringify(_));
    }
    const y = [];
    let g = h;
    for (; g; ) y.unshift(g.record), (g = g.parent);
    return {
      name: C,
      path: S,
      params: _,
      matched: y,
      meta: Sb(y),
    };
  }
  e.forEach((f) => o(f));
  function c() {
    (n.length = 0), r.clear();
  }
  return {
    addRoute: o,
    resolve: u,
    removeRoute: s,
    clearRoutes: c,
    getRoutes: a,
    getRecordMatcher: i,
  };
}
function Ac(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Oc(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Eb(e),
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
function Eb(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Nc(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Sb(e) {
  return e.reduce((t, n) => Ee(t, n.meta), {});
}
function Pc(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Cb(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const o = (n + r) >> 1;
    Kd(e, t[o]) < 0 ? (r = o) : (n = o + 1);
  }
  const i = kb(e);
  return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function kb(e) {
  let t = e;
  for (; (t = t.parent); ) if (Gd(t) && Kd(e, t) === 0) return t;
}
function Gd({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function Tb(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let i = 0; i < r.length; ++i) {
    const o = r[i].replace($d, " "),
      s = o.indexOf("="),
      a = br(s < 0 ? o : o.slice(0, s)),
      l = s < 0 ? null : br(o.slice(s + 1));
    if (a in t) {
      let u = t[a];
      bt(u) || (u = t[a] = [u]), u.push(l);
    } else t[a] = l;
  }
  return t;
}
function xc(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = K_(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (bt(r) ? r.map((o) => o && Gs(o)) : [r && Gs(r)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function Ib(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = bt(r)
        ? r.map((i) => (i == null ? null : "" + i))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const Ab = Symbol(""),
  Lc = Symbol(""),
  Vo = Symbol(""),
  Ja = Symbol(""),
  Xs = Symbol("");
function Mr() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const i = e.indexOf(r);
        i > -1 && e.splice(i, 1);
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
function _n(e, t, n, r, i, o = (s) => s()) {
  const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () =>
    new Promise((a, l) => {
      const u = (d) => {
          d === !1
            ? l(
                yr(4, {
                  from: n,
                  to: t,
                })
              )
            : d instanceof Error
            ? l(d)
            : Bd(d)
            ? l(
                yr(2, {
                  from: t,
                  to: d,
                })
              )
            : (s &&
                r.enterCallbacks[i] === s &&
                typeof d == "function" &&
                s.push(d),
              a());
        },
        c = o(() => e.call(r && r.instances[i], t, n, u));
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(u)), f.catch((d) => l(d));
    });
}
function ds(e, t, n, r, i = (o) => o()) {
  const o = [];
  for (const s of e)
    for (const a in s.components) {
      let l = s.components[a];
      if (!(t !== "beforeRouteEnter" && !s.instances[a]))
        if (Dd(l)) {
          const c = (l.__vccOpts || l)[t];
          c && o.push(_n(c, n, r, s, a, i));
        } else {
          let u = l();
          o.push(() =>
            u.then((c) => {
              if (!c)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${s.path}"`
                );
              const f = D_(c) ? c.default : c;
              (s.mods[a] = c), (s.components[a] = f);
              const h = (f.__vccOpts || f)[t];
              return h && _n(h, n, r, s, a, i)();
            })
          );
        }
    }
  return o;
}
function Rc(e) {
  const t = ut(Vo),
    n = ut(Ja),
    r = M(() => {
      const l = Zt(e.to);
      return t.resolve(l);
    }),
    i = M(() => {
      const { matched: l } = r.value,
        { length: u } = l,
        c = l[u - 1],
        f = n.matched;
      if (!c || !f.length) return -1;
      const d = f.findIndex(Cn.bind(null, c));
      if (d > -1) return d;
      const h = Mc(l[u - 2]);
      return u > 1 && Mc(c) === h && f[f.length - 1].path !== h
        ? f.findIndex(Cn.bind(null, l[u - 2]))
        : d;
    }),
    o = M(() => i.value > -1 && Lb(n.params, r.value.params)),
    s = M(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        Wd(n.params, r.value.params)
    );
  function a(l = {}) {
    if (xb(l)) {
      const u = t[Zt(e.replace) ? "replace" : "push"](Zt(e.to)).catch(ti);
      return (
        e.viewTransition &&
          typeof document != "undefined" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => u),
        u
      );
    }
    return Promise.resolve();
  }
  if (Xt) {
    const l = Ie();
    if (l) {
      const u = {
        route: r.value,
        isActive: o.value,
        isExactActive: s.value,
        error: null,
      };
      (l.__vrl_devtools = l.__vrl_devtools || []),
        l.__vrl_devtools.push(u),
        za(
          () => {
            (u.route = r.value),
              (u.isActive = o.value),
              (u.isExactActive = s.value),
              (u.error = Bd(Zt(e.to)) ? null : 'Invalid "to" value');
          },
          {
            flush: "post",
          }
        );
    }
  }
  return {
    route: r,
    href: M(() => r.value.href),
    isActive: o,
    isExactActive: s,
    navigate: a,
  };
}
function Ob(e) {
  return e.length === 1 ? e[0] : e;
}
const Nb = Kn({
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
    },
    useLink: Rc,
    setup(e, { slots: t }) {
      const n = zn(Rc(e)),
        { options: r } = ut(Vo),
        i = M(() => ({
          [Dc(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Dc(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && Ob(t.default(n));
        return e.custom
          ? o
          : j(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value,
              },
              o
            );
      };
    },
  }),
  Pb = Nb;
function xb(e) {
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
function Lb(e, t) {
  for (const n in t) {
    const r = t[n],
      i = e[n];
    if (typeof r == "string") {
      if (r !== i) return !1;
    } else if (!bt(i) || i.length !== r.length || r.some((o, s) => o !== i[s]))
      return !1;
  }
  return !0;
}
function Mc(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Dc = (e, t, n) => (e != null ? e : t != null ? t : n),
  Rb = Kn({
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
      const r = ut(Xs),
        i = M(() => e.route || r.value),
        o = ut(Lc, 0),
        s = M(() => {
          let u = Zt(o);
          const { matched: c } = i.value;
          let f;
          for (; (f = c[u]) && !f.components; ) u++;
          return u;
        }),
        a = M(() => i.value.matched[s.value]);
      Ui(
        Lc,
        M(() => s.value + 1)
      ),
        Ui(Ab, a),
        Ui(Xs, i);
      const l = ue();
      return (
        fe(
          () => [l.value, a.value, e.name],
          ([u, c, f], [d, h, _]) => {
            c &&
              ((c.instances[f] = u),
              h &&
                h !== c &&
                u &&
                u === d &&
                (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards),
                c.updateGuards.size || (c.updateGuards = h.updateGuards))),
              u &&
                c &&
                (!h || !Cn(c, h) || !d) &&
                (c.enterCallbacks[f] || []).forEach((S) => S(u));
          },
          {
            flush: "post",
          }
        ),
        () => {
          const u = i.value,
            c = e.name,
            f = a.value,
            d = f && f.components[c];
          if (!d)
            return Fc(n.default, {
              Component: d,
              route: u,
            });
          const h = f.props[c],
            _ = h
              ? h === !0
                ? u.params
                : typeof h == "function"
                ? h(u)
                : h
              : null,
            C = j(
              d,
              Ee({}, _, t, {
                onVnodeUnmounted: (y) => {
                  y.component.isUnmounted && (f.instances[c] = null);
                },
                ref: l,
              })
            );
          if (Xt && C.ref) {
            const y = {
              depth: s.value,
              name: f.name,
              path: f.path,
              meta: f.meta,
            };
            (bt(C.ref) ? C.ref.map((E) => E.i) : [C.ref.i]).forEach((E) => {
              E.__vrv_devtools = y;
            });
          }
          return (
            Fc(n.default, {
              Component: C,
              route: u,
            }) || C
          );
        }
      );
    },
  });
function Fc(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Mb = Rb;
function Dr(e, t) {
  const n = Ee({}, e, {
    matched: e.matched.map((r) => zb(r, ["instances", "children", "aliasOf"])),
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n,
    },
  };
}
function Ni(e) {
  return {
    _custom: {
      display: e,
    },
  };
}
let Db = 0;
function Fb(e, t, n) {
  if (t.__hasDevtools) return;
  t.__hasDevtools = !0;
  const r = Db++;
  Xa(
    {
      id: "org.vuejs.router" + (r ? "." + r : ""),
      label: "Vue Router",
      packageName: "vue-router",
      homepage: "https://router.vuejs.org",
      logo: "https://router.vuejs.org/logo.png",
      componentStateTypes: ["Routing"],
      app: e,
    },
    (i) => {
      typeof i.now != "function" &&
        console.warn(
          "[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."
        ),
        i.on.inspectComponent((c, f) => {
          c.instanceData &&
            c.instanceData.state.push({
              type: "Routing",
              key: "$route",
              editable: !1,
              value: Dr(t.currentRoute.value, "Current Route"),
            });
        }),
        i.on.visitComponentTree(({ treeNode: c, componentInstance: f }) => {
          if (f.__vrv_devtools) {
            const d = f.__vrv_devtools;
            c.tags.push({
              label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
              textColor: 0,
              tooltip: "This component is rendered by &lt;router-view&gt;",
              backgroundColor: Qd,
            });
          }
          bt(f.__vrl_devtools) &&
            ((f.__devtoolsApi = i),
            f.__vrl_devtools.forEach((d) => {
              let h = d.route.path,
                _ = Jd,
                S = "",
                C = 0;
              d.error
                ? ((h = d.error), (_ = Wb), (C = Ub))
                : d.isExactActive
                ? ((_ = Yd), (S = "This is exactly active"))
                : d.isActive && ((_ = Xd), (S = "This link is active")),
                c.tags.push({
                  label: h,
                  textColor: C,
                  tooltip: S,
                  backgroundColor: _,
                });
            }));
        }),
        fe(t.currentRoute, () => {
          l(),
            i.notifyComponentUpdate(),
            i.sendInspectorTree(a),
            i.sendInspectorState(a);
        });
      const o = "router:navigations:" + r;
      i.addTimelineLayer({
        id: o,
        label: `Router${r ? " " + r : ""} Navigations`,
        color: 4237508,
      }),
        t.onError((c, f) => {
          i.addTimelineEvent({
            layerId: o,
            event: {
              title: "Error during Navigation",
              subtitle: f.fullPath,
              logType: "error",
              time: i.now(),
              data: {
                error: c,
              },
              groupId: f.meta.__navigationId,
            },
          });
        });
      let s = 0;
      t.beforeEach((c, f) => {
        const d = {
          guard: Ni("beforeEach"),
          from: Dr(f, "Current Location during this navigation"),
          to: Dr(c, "Target location"),
        };
        Object.defineProperty(c.meta, "__navigationId", {
          value: s++,
        }),
          i.addTimelineEvent({
            layerId: o,
            event: {
              time: i.now(),
              title: "Start of navigation",
              subtitle: c.fullPath,
              data: d,
              groupId: c.meta.__navigationId,
            },
          });
      }),
        t.afterEach((c, f, d) => {
          const h = {
            guard: Ni("afterEach"),
          };
          d
            ? ((h.failure = {
                _custom: {
                  type: Error,
                  readOnly: !0,
                  display: d ? d.message : "",
                  tooltip: "Navigation Failure",
                  value: d,
                },
              }),
              (h.status = Ni("❌")))
            : (h.status = Ni("✅")),
            (h.from = Dr(f, "Current Location during this navigation")),
            (h.to = Dr(c, "Target location")),
            i.addTimelineEvent({
              layerId: o,
              event: {
                title: "End of navigation",
                subtitle: c.fullPath,
                time: i.now(),
                data: h,
                logType: d ? "warning" : "default",
                groupId: c.meta.__navigationId,
              },
            });
        });
      const a = "router-inspector:" + r;
      i.addInspector({
        id: a,
        label: "Routes" + (r ? " " + r : ""),
        icon: "book",
        treeFilterPlaceholder: "Search routes",
      });
      function l() {
        if (!u) return;
        const c = u;
        let f = n
          .getRoutes()
          .filter((d) => !d.parent || !d.parent.record.components);
        f.forEach(th),
          c.filter && (f = f.filter((d) => Ys(d, c.filter.toLowerCase()))),
          f.forEach((d) => eh(d, t.currentRoute.value)),
          (c.rootNodes = f.map(Zd));
      }
      let u;
      i.on.getInspectorTree((c) => {
        (u = c), c.app === e && c.inspectorId === a && l();
      }),
        i.on.getInspectorState((c) => {
          if (c.app === e && c.inspectorId === a) {
            const d = n.getRoutes().find((h) => h.record.__vd_id === c.nodeId);
            d &&
              (c.state = {
                options: jb(d),
              });
          }
        }),
        i.sendInspectorTree(a),
        i.sendInspectorState(a);
    }
  );
}
function $b(e) {
  return e.optional ? (e.repeatable ? "*" : "?") : e.repeatable ? "+" : "";
}
function jb(e) {
  const { record: t } = e,
    n = [
      {
        editable: !1,
        key: "path",
        value: t.path,
      },
    ];
  return (
    t.name != null &&
      n.push({
        editable: !1,
        key: "name",
        value: t.name,
      }),
    n.push({
      editable: !1,
      key: "regexp",
      value: e.re,
    }),
    e.keys.length &&
      n.push({
        editable: !1,
        key: "keys",
        value: {
          _custom: {
            type: null,
            readOnly: !0,
            display: e.keys.map((r) => `${r.name}${$b(r)}`).join(" "),
            tooltip: "Param keys",
            value: e.keys,
          },
        },
      }),
    t.redirect != null &&
      n.push({
        editable: !1,
        key: "redirect",
        value: t.redirect,
      }),
    e.alias.length &&
      n.push({
        editable: !1,
        key: "aliases",
        value: e.alias.map((r) => r.record.path),
      }),
    Object.keys(e.record.meta).length &&
      n.push({
        editable: !1,
        key: "meta",
        value: e.record.meta,
      }),
    n.push({
      key: "score",
      editable: !1,
      value: {
        _custom: {
          type: null,
          readOnly: !0,
          display: e.score.map((r) => r.join(", ")).join(" | "),
          tooltip: "Score used to sort routes",
          value: e.score,
        },
      },
    }),
    n
  );
}
const Qd = 15485081,
  Xd = 2450411,
  Yd = 8702998,
  Vb = 2282478,
  Jd = 16486972,
  qb = 6710886,
  Wb = 16704226,
  Ub = 12131356;
function Zd(e) {
  const t = [],
    { record: n } = e;
  n.name != null &&
    t.push({
      label: String(n.name),
      textColor: 0,
      backgroundColor: Vb,
    }),
    n.aliasOf &&
      t.push({
        label: "alias",
        textColor: 0,
        backgroundColor: Jd,
      }),
    e.__vd_match &&
      t.push({
        label: "matches",
        textColor: 0,
        backgroundColor: Qd,
      }),
    e.__vd_exactActive &&
      t.push({
        label: "exact",
        textColor: 0,
        backgroundColor: Yd,
      }),
    e.__vd_active &&
      t.push({
        label: "active",
        textColor: 0,
        backgroundColor: Xd,
      }),
    n.redirect &&
      t.push({
        label:
          typeof n.redirect == "string"
            ? `redirect: ${n.redirect}`
            : "redirects",
        textColor: 16777215,
        backgroundColor: qb,
      });
  let r = n.__vd_id;
  return (
    r == null && ((r = String(Bb++)), (n.__vd_id = r)),
    {
      id: r,
      label: n.path,
      tags: t,
      children: e.children.map(Zd),
    }
  );
}
let Bb = 0;
const Hb = /^\/(.*)\/([a-z]*)$/;
function eh(e, t) {
  const n = t.matched.length && Cn(t.matched[t.matched.length - 1], e.record);
  (e.__vd_exactActive = e.__vd_active = n),
    n || (e.__vd_active = t.matched.some((r) => Cn(r, e.record))),
    e.children.forEach((r) => eh(r, t));
}
function th(e) {
  (e.__vd_match = !1), e.children.forEach(th);
}
function Ys(e, t) {
  const n = String(e.re).match(Hb);
  if (((e.__vd_match = !1), !n || n.length < 3)) return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return (
      e.children.forEach((s) => Ys(s, t)),
      e.record.path !== "/" || t === "/"
        ? ((e.__vd_match = e.re.test(t)), !0)
        : !1
    );
  const i = e.record.path.toLowerCase(),
    o = br(i);
  return (!t.startsWith("/") && (o.includes(t) || i.includes(t))) ||
    o.startsWith(t) ||
    i.startsWith(t) ||
    (e.record.name && String(e.record.name).includes(t))
    ? !0
    : e.children.some((s) => Ys(s, t));
}
function zb(e, t) {
  const n = {};
  for (const r in e) t.includes(r) || (n[r] = e[r]);
  return n;
}
function Kb(e) {
  const t = wb(e.routes, e),
    n = e.parseQuery || Tb,
    r = e.stringifyQuery || xc,
    i = e.history,
    o = Mr(),
    s = Mr(),
    a = Mr(),
    l = $a(un);
  let u = un;
  Xt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const c = us.bind(null, (D) => "" + D),
    f = us.bind(null, Q_),
    d = us.bind(null, br);
  function h(D, X) {
    let Y, ne;
    return (
      Hd(D) ? ((Y = t.getRecordMatcher(D)), (ne = X)) : (ne = D),
      t.addRoute(ne, Y)
    );
  }
  function _(D) {
    const X = t.getRecordMatcher(D);
    X && t.removeRoute(X);
  }
  function S() {
    return t.getRoutes().map((D) => D.record);
  }
  function C(D) {
    return !!t.getRecordMatcher(D);
  }
  function y(D, X) {
    if (((X = Ee({}, X || l.value)), typeof D == "string")) {
      const w = fs(n, D, X.path),
        x = t.resolve(
          {
            path: w.path,
          },
          X
        ),
        U = i.createHref(w.fullPath);
      return Ee(w, x, {
        params: d(x.params),
        hash: br(w.hash),
        redirectedFrom: void 0,
        href: U,
      });
    }
    let Y;
    if (D.path != null)
      Y = Ee({}, D, {
        path: fs(n, D.path, X.path).path,
      });
    else {
      const w = Ee({}, D.params);
      for (const x in w) w[x] == null && delete w[x];
      (Y = Ee({}, D, {
        params: f(w),
      })),
        (X.params = f(X.params));
    }
    const ne = t.resolve(Y, X),
      ye = D.hash || "";
    ne.params = c(d(ne.params));
    const ke = J_(
        r,
        Ee({}, D, {
          hash: z_(ye),
          path: ne.path,
        })
      ),
      p = i.createHref(ke);
    return Ee(
      {
        fullPath: ke,
        hash: ye,
        query: r === xc ? Ib(D.query) : D.query || {},
      },
      ne,
      {
        redirectedFrom: void 0,
        href: p,
      }
    );
  }
  function g(D) {
    return typeof D == "string" ? fs(n, D, l.value.path) : Ee({}, D);
  }
  function E(D, X) {
    if (u !== D)
      return yr(8, {
        from: X,
        to: D,
      });
  }
  function b(D) {
    return A(D);
  }
  function O(D) {
    return b(
      Ee(g(D), {
        replace: !0,
      })
    );
  }
  function P(D) {
    const X = D.matched[D.matched.length - 1];
    if (X && X.redirect) {
      const { redirect: Y } = X;
      let ne = typeof Y == "function" ? Y(D) : Y;
      return (
        typeof ne == "string" &&
          ((ne =
            ne.includes("?") || ne.includes("#")
              ? (ne = g(ne))
              : {
                  path: ne,
                }),
          (ne.params = {})),
        Ee(
          {
            query: D.query,
            hash: D.hash,
            params: ne.path != null ? {} : D.params,
          },
          ne
        )
      );
    }
  }
  function A(D, X) {
    const Y = (u = y(D)),
      ne = l.value,
      ye = D.state,
      ke = D.force,
      p = D.replace === !0,
      w = P(Y);
    if (w)
      return A(
        Ee(g(w), {
          state: typeof w == "object" ? Ee({}, ye, w.state) : ye,
          force: ke,
          replace: p,
        }),
        X || Y
      );
    const x = Y;
    x.redirectedFrom = X;
    let U;
    return (
      !ke &&
        Z_(r, ne, Y) &&
        ((U = yr(16, {
          to: x,
          from: ne,
        })),
        de(ne, ne, !0, !1)),
      (U ? Promise.resolve(U) : L(x, ne))
        .catch((V) => (zt(V) ? (zt(V, 2) ? V : le(V)) : H(V, x, ne)))
        .then((V) => {
          if (V) {
            if (zt(V, 2))
              return A(
                Ee(
                  {
                    replace: p,
                  },
                  g(V.to),
                  {
                    state:
                      typeof V.to == "object" ? Ee({}, ye, V.to.state) : ye,
                    force: ke,
                  }
                ),
                X || x
              );
          } else V = T(x, ne, !0, p, ye);
          return q(x, ne, V), V;
        })
    );
  }
  function K(D, X) {
    const Y = E(D, X);
    return Y ? Promise.reject(Y) : Promise.resolve();
  }
  function N(D) {
    const X = Ne.values().next().value;
    return X && typeof X.runWithContext == "function"
      ? X.runWithContext(D)
      : D();
  }
  function L(D, X) {
    let Y;
    const [ne, ye, ke] = Gb(D, X);
    Y = ds(ne.reverse(), "beforeRouteLeave", D, X);
    for (const w of ne)
      w.leaveGuards.forEach((x) => {
        Y.push(_n(x, D, X));
      });
    const p = K.bind(null, D, X);
    return (
      Y.push(p),
      re(Y)
        .then(() => {
          Y = [];
          for (const w of o.list()) Y.push(_n(w, D, X));
          return Y.push(p), re(Y);
        })
        .then(() => {
          Y = ds(ye, "beforeRouteUpdate", D, X);
          for (const w of ye)
            w.updateGuards.forEach((x) => {
              Y.push(_n(x, D, X));
            });
          return Y.push(p), re(Y);
        })
        .then(() => {
          Y = [];
          for (const w of ke)
            if (w.beforeEnter)
              if (bt(w.beforeEnter))
                for (const x of w.beforeEnter) Y.push(_n(x, D, X));
              else Y.push(_n(w.beforeEnter, D, X));
          return Y.push(p), re(Y);
        })
        .then(
          () => (
            D.matched.forEach((w) => (w.enterCallbacks = {})),
            (Y = ds(ke, "beforeRouteEnter", D, X, N)),
            Y.push(p),
            re(Y)
          )
        )
        .then(() => {
          Y = [];
          for (const w of s.list()) Y.push(_n(w, D, X));
          return Y.push(p), re(Y);
        })
        .catch((w) => (zt(w, 8) ? w : Promise.reject(w)))
    );
  }
  function q(D, X, Y) {
    a.list().forEach((ne) => N(() => ne(D, X, Y)));
  }
  function T(D, X, Y, ne, ye) {
    const ke = E(D, X);
    if (ke) return ke;
    const p = X === un,
      w = Xt ? history.state : {};
    Y &&
      (ne || p
        ? i.replace(
            D.fullPath,
            Ee(
              {
                scroll: p && w && w.scroll,
              },
              ye
            )
          )
        : i.push(D.fullPath, ye)),
      (l.value = D),
      de(D, X, Y, p),
      le();
  }
  let Q;
  function $() {
    Q ||
      (Q = i.listen((D, X, Y) => {
        if (!Re.listening) return;
        const ne = y(D),
          ye = P(ne);
        if (ye) {
          A(
            Ee(ye, {
              replace: !0,
              force: !0,
            }),
            ne
          ).catch(ti);
          return;
        }
        u = ne;
        const ke = l.value;
        Xt && ab(Sc(ke.fullPath, Y.delta), jo()),
          L(ne, ke)
            .catch((p) =>
              zt(p, 12)
                ? p
                : zt(p, 2)
                ? (A(
                    Ee(g(p.to), {
                      force: !0,
                    }),
                    ne
                  )
                    .then((w) => {
                      zt(w, 20) &&
                        !Y.delta &&
                        Y.type === mi.pop &&
                        i.go(-1, !1);
                    })
                    .catch(ti),
                  Promise.reject())
                : (Y.delta && i.go(-Y.delta, !1), H(p, ne, ke))
            )
            .then((p) => {
              (p = p || T(ne, ke, !1)),
                p &&
                  (Y.delta && !zt(p, 8)
                    ? i.go(-Y.delta, !1)
                    : Y.type === mi.pop && zt(p, 20) && i.go(-1, !1)),
                q(ne, ke, p);
            })
            .catch(ti);
      }));
  }
  let te = Mr(),
    ee = Mr(),
    Z;
  function H(D, X, Y) {
    le(D);
    const ne = ee.list();
    return (
      ne.length ? ne.forEach((ye) => ye(D, X, Y)) : console.error(D),
      Promise.reject(D)
    );
  }
  function oe() {
    return Z && l.value !== un
      ? Promise.resolve()
      : new Promise((D, X) => {
          te.add([D, X]);
        });
  }
  function le(D) {
    return (
      Z ||
        ((Z = !D),
        $(),
        te.list().forEach(([X, Y]) => (D ? Y(D) : X())),
        te.reset()),
      D
    );
  }
  function de(D, X, Y, ne) {
    const { scrollBehavior: ye } = e;
    if (!Xt || !ye) return Promise.resolve();
    const ke =
      (!Y && lb(Sc(D.fullPath, 0))) ||
      ((ne || !Y) && history.state && history.state.scroll) ||
      null;
    return dt()
      .then(() => ye(D, X, ke))
      .then((p) => p && sb(p))
      .catch((p) => H(p, D, X));
  }
  const B = (D) => i.go(D);
  let pe;
  const Ne = new Set(),
    Re = {
      currentRoute: l,
      listening: !0,
      addRoute: h,
      removeRoute: _,
      clearRoutes: t.clearRoutes,
      hasRoute: C,
      getRoutes: S,
      resolve: y,
      options: e,
      push: b,
      replace: O,
      go: B,
      back: () => B(-1),
      forward: () => B(1),
      beforeEach: o.add,
      beforeResolve: s.add,
      afterEach: a.add,
      onError: ee.add,
      isReady: oe,
      install(D) {
        const X = this;
        D.component("RouterLink", Pb),
          D.component("RouterView", Mb),
          (D.config.globalProperties.$router = X),
          Object.defineProperty(D.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Zt(l),
          }),
          Xt &&
            !pe &&
            l.value === un &&
            ((pe = !0), b(i.location).catch((ye) => {}));
        const Y = {};
        for (const ye in un)
          Object.defineProperty(Y, ye, {
            get: () => l.value[ye],
            enumerable: !0,
          });
        D.provide(Vo, X), D.provide(Ja, kf(Y)), D.provide(Xs, l);
        const ne = D.unmount;
        Ne.add(D),
          (D.unmount = function () {
            Ne.delete(D),
              Ne.size < 1 &&
                ((u = un),
                Q && Q(),
                (Q = null),
                (l.value = un),
                (pe = !1),
                (Z = !1)),
              ne();
          }),
          Xt && Fb(D, X, t);
      },
    };
  function re(D) {
    return D.reduce((X, Y) => X.then(() => N(Y)), Promise.resolve());
  }
  return Re;
}
function Gb(e, t) {
  const n = [],
    r = [],
    i = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let s = 0; s < o; s++) {
    const a = t.matched[s];
    a && (e.matched.find((u) => Cn(u, a)) ? r.push(a) : n.push(a));
    const l = e.matched[s];
    l && (t.matched.find((u) => Cn(u, l)) || i.push(l));
  }
  return [n, r, i];
}
function oT() {
  return ut(Vo);
}
function Qb(e) {
  return ut(Ja);
}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var nh = "store";
function Xb(e) {
  return e === void 0 && (e = null), ut(e !== null ? e : nh);
}
function Or(e, t) {
  Object.keys(e).forEach(function (n) {
    return t(e[n], n);
  });
}
function Yb(e) {
  return e !== null && typeof e == "object";
}
function Jb(e) {
  return e && typeof e.then == "function";
}
function Zb(e, t) {
  return function () {
    return e(t);
  };
}
function rh(e, t, n) {
  return (
    t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)),
    function () {
      var r = t.indexOf(e);
      r > -1 && t.splice(r, 1);
    }
  );
}
function ih(e, t) {
  (e._actions = Object.create(null)),
    (e._mutations = Object.create(null)),
    (e._wrappedGetters = Object.create(null)),
    (e._modulesNamespaceMap = Object.create(null));
  var n = e.state;
  qo(e, n, [], e._modules.root, !0), Za(e, n, t);
}
function Za(e, t, n) {
  var r = e._state,
    i = e._scope;
  (e.getters = {}), (e._makeLocalGettersCache = Object.create(null));
  var o = e._wrappedGetters,
    s = {},
    a = {},
    l = cf(!0);
  l.run(function () {
    Or(o, function (u, c) {
      (s[c] = Zb(u, e)),
        (a[c] = M(function () {
          return s[c]();
        })),
        Object.defineProperty(e.getters, c, {
          get: function () {
            return a[c].value;
          },
          enumerable: !0,
        });
    });
  }),
    (e._state = zn({
      data: t,
    })),
    (e._scope = l),
    e.strict && iy(e),
    r &&
      n &&
      e._withCommit(function () {
        r.data = null;
      }),
    i && i.stop();
}
function qo(e, t, n, r, i) {
  var o = !n.length,
    s = e._modules.getNamespace(n);
  if (
    (r.namespaced &&
      (e._modulesNamespaceMap[s], (e._modulesNamespaceMap[s] = r)),
    !o && !i)
  ) {
    var a = el(t, n.slice(0, -1)),
      l = n[n.length - 1];
    e._withCommit(function () {
      a[l] = r.state;
    });
  }
  var u = (r.context = ey(e, s, n));
  r.forEachMutation(function (c, f) {
    var d = s + f;
    ty(e, d, c, u);
  }),
    r.forEachAction(function (c, f) {
      var d = c.root ? f : s + f,
        h = c.handler || c;
      ny(e, d, h, u);
    }),
    r.forEachGetter(function (c, f) {
      var d = s + f;
      ry(e, d, c, u);
    }),
    r.forEachChild(function (c, f) {
      qo(e, t, n.concat(f), c, i);
    });
}
function ey(e, t, n) {
  var r = t === "",
    i = {
      dispatch: r
        ? e.dispatch
        : function (o, s, a) {
            var l = po(o, s, a),
              u = l.payload,
              c = l.options,
              f = l.type;
            return (!c || !c.root) && (f = t + f), e.dispatch(f, u);
          },
      commit: r
        ? e.commit
        : function (o, s, a) {
            var l = po(o, s, a),
              u = l.payload,
              c = l.options,
              f = l.type;
            (!c || !c.root) && (f = t + f), e.commit(f, u, c);
          },
    };
  return (
    Object.defineProperties(i, {
      getters: {
        get: r
          ? function () {
              return e.getters;
            }
          : function () {
              return oh(e, t);
            },
      },
      state: {
        get: function () {
          return el(e.state, n);
        },
      },
    }),
    i
  );
}
function oh(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var n = {},
      r = t.length;
    Object.keys(e.getters).forEach(function (i) {
      if (i.slice(0, r) === t) {
        var o = i.slice(r);
        Object.defineProperty(n, o, {
          get: function () {
            return e.getters[i];
          },
          enumerable: !0,
        });
      }
    }),
      (e._makeLocalGettersCache[t] = n);
  }
  return e._makeLocalGettersCache[t];
}
function ty(e, t, n, r) {
  var i = e._mutations[t] || (e._mutations[t] = []);
  i.push(function (s) {
    n.call(e, r.state, s);
  });
}
function ny(e, t, n, r) {
  var i = e._actions[t] || (e._actions[t] = []);
  i.push(function (s) {
    var a = n.call(
      e,
      {
        dispatch: r.dispatch,
        commit: r.commit,
        getters: r.getters,
        state: r.state,
        rootGetters: e.getters,
        rootState: e.state,
      },
      s
    );
    return (
      Jb(a) || (a = Promise.resolve(a)),
      e._devtoolHook
        ? a.catch(function (l) {
            throw (e._devtoolHook.emit("vuex:error", l), l);
          })
        : a
    );
  });
}
function ry(e, t, n, r) {
  e._wrappedGetters[t] ||
    (e._wrappedGetters[t] = function (o) {
      return n(r.state, r.getters, o.state, o.getters);
    });
}
function iy(e) {
  fe(
    function () {
      return e._state.data;
    },
    function () {},
    {
      deep: !0,
      flush: "sync",
    }
  );
}
function el(e, t) {
  return t.reduce(function (n, r) {
    return n[r];
  }, e);
}
function po(e, t, n) {
  return (
    Yb(e) && e.type && ((n = t), (t = e), (e = e.type)),
    {
      type: e,
      payload: t,
      options: n,
    }
  );
}
var oy = "vuex bindings",
  $c = "vuex:mutations",
  hs = "vuex:actions",
  Zn = "vuex",
  sy = 0;
function ay(e, t) {
  Xa(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [oy],
    },
    function (n) {
      n.addTimelineLayer({
        id: $c,
        label: "Vuex Mutations",
        color: jc,
      }),
        n.addTimelineLayer({
          id: hs,
          label: "Vuex Actions",
          color: jc,
        }),
        n.addInspector({
          id: Zn,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores...",
        }),
        n.on.getInspectorTree(function (r) {
          if (r.app === e && r.inspectorId === Zn)
            if (r.filter) {
              var i = [];
              ch(i, t._modules.root, r.filter, ""), (r.rootNodes = i);
            } else r.rootNodes = [lh(t._modules.root, "")];
        }),
        n.on.getInspectorState(function (r) {
          if (r.app === e && r.inspectorId === Zn) {
            var i = r.nodeId;
            oh(t, i),
              (r.state = uy(
                dy(t._modules, i),
                i === "root" ? t.getters : t._makeLocalGettersCache,
                i
              ));
          }
        }),
        n.on.editInspectorState(function (r) {
          if (r.app === e && r.inspectorId === Zn) {
            var i = r.nodeId,
              o = r.path;
            i !== "root" && (o = i.split("/").filter(Boolean).concat(o)),
              t._withCommit(function () {
                r.set(t._state.data, o, r.state.value);
              });
          }
        }),
        t.subscribe(function (r, i) {
          var o = {};
          r.payload && (o.payload = r.payload),
            (o.state = i),
            n.notifyComponentUpdate(),
            n.sendInspectorTree(Zn),
            n.sendInspectorState(Zn),
            n.addTimelineEvent({
              layerId: $c,
              event: {
                time: Date.now(),
                title: r.type,
                data: o,
              },
            });
        }),
        t.subscribeAction({
          before: function (r, i) {
            var o = {};
            r.payload && (o.payload = r.payload),
              (r._id = sy++),
              (r._time = Date.now()),
              (o.state = i),
              n.addTimelineEvent({
                layerId: hs,
                event: {
                  time: r._time,
                  title: r.type,
                  groupId: r._id,
                  subtitle: "start",
                  data: o,
                },
              });
          },
          after: function (r, i) {
            var o = {},
              s = Date.now() - r._time;
            (o.duration = {
              _custom: {
                type: "duration",
                display: s + "ms",
                tooltip: "Action duration",
                value: s,
              },
            }),
              r.payload && (o.payload = r.payload),
              (o.state = i),
              n.addTimelineEvent({
                layerId: hs,
                event: {
                  time: Date.now(),
                  title: r.type,
                  groupId: r._id,
                  subtitle: "end",
                  data: o,
                },
              });
          },
        });
    }
  );
}
var jc = 8702998,
  ly = 6710886,
  cy = 16777215,
  sh = {
    label: "namespaced",
    textColor: cy,
    backgroundColor: ly,
  };
function ah(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function lh(e, t) {
  return {
    id: t || "root",
    label: ah(t),
    tags: e.namespaced ? [sh] : [],
    children: Object.keys(e._children).map(function (n) {
      return lh(e._children[n], t + n + "/");
    }),
  };
}
function ch(e, t, n, r) {
  r.includes(n) &&
    e.push({
      id: r || "root",
      label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root",
      tags: t.namespaced ? [sh] : [],
    }),
    Object.keys(t._children).forEach(function (i) {
      ch(e, t._children[i], n, r + i + "/");
    });
}
function uy(e, t, n) {
  t = n === "root" ? t : t[n];
  var r = Object.keys(t),
    i = {
      state: Object.keys(e.state).map(function (s) {
        return {
          key: s,
          editable: !0,
          value: e.state[s],
        };
      }),
    };
  if (r.length) {
    var o = fy(t);
    i.getters = Object.keys(o).map(function (s) {
      return {
        key: s.endsWith("/") ? ah(s) : s,
        editable: !1,
        value: Js(function () {
          return o[s];
        }),
      };
    });
  }
  return i;
}
function fy(e) {
  var t = {};
  return (
    Object.keys(e).forEach(function (n) {
      var r = n.split("/");
      if (r.length > 1) {
        var i = t,
          o = r.pop();
        r.forEach(function (s) {
          i[s] ||
            (i[s] = {
              _custom: {
                value: {},
                display: s,
                tooltip: "Module",
                abstract: !0,
              },
            }),
            (i = i[s]._custom.value);
        }),
          (i[o] = Js(function () {
            return e[n];
          }));
      } else
        t[n] = Js(function () {
          return e[n];
        });
    }),
    t
  );
}
function dy(e, t) {
  var n = t.split("/").filter(function (r) {
    return r;
  });
  return n.reduce(
    function (r, i, o) {
      var s = r[i];
      if (!s)
        throw new Error('Missing module "' + i + '" for path "' + t + '".');
      return o === n.length - 1 ? s : s._children;
    },
    t === "root" ? e : e.root._children
  );
}
function Js(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var Dt = function (t, n) {
    (this.runtime = n),
      (this._children = Object.create(null)),
      (this._rawModule = t);
    var r = t.state;
    this.state = (typeof r == "function" ? r() : r) || {};
  },
  uh = {
    namespaced: {
      configurable: !0,
    },
  };
uh.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};
Dt.prototype.addChild = function (t, n) {
  this._children[t] = n;
};
Dt.prototype.removeChild = function (t) {
  delete this._children[t];
};
Dt.prototype.getChild = function (t) {
  return this._children[t];
};
Dt.prototype.hasChild = function (t) {
  return t in this._children;
};
Dt.prototype.update = function (t) {
  (this._rawModule.namespaced = t.namespaced),
    t.actions && (this._rawModule.actions = t.actions),
    t.mutations && (this._rawModule.mutations = t.mutations),
    t.getters && (this._rawModule.getters = t.getters);
};
Dt.prototype.forEachChild = function (t) {
  Or(this._children, t);
};
Dt.prototype.forEachGetter = function (t) {
  this._rawModule.getters && Or(this._rawModule.getters, t);
};
Dt.prototype.forEachAction = function (t) {
  this._rawModule.actions && Or(this._rawModule.actions, t);
};
Dt.prototype.forEachMutation = function (t) {
  this._rawModule.mutations && Or(this._rawModule.mutations, t);
};
Object.defineProperties(Dt.prototype, uh);
var Gn = function (t) {
  this.register([], t, !1);
};
Gn.prototype.get = function (t) {
  return t.reduce(function (n, r) {
    return n.getChild(r);
  }, this.root);
};
Gn.prototype.getNamespace = function (t) {
  var n = this.root;
  return t.reduce(function (r, i) {
    return (n = n.getChild(i)), r + (n.namespaced ? i + "/" : "");
  }, "");
};
Gn.prototype.update = function (t) {
  fh([], this.root, t);
};
Gn.prototype.register = function (t, n, r) {
  var i = this;
  r === void 0 && (r = !0);
  var o = new Dt(n, r);
  if (t.length === 0) this.root = o;
  else {
    var s = this.get(t.slice(0, -1));
    s.addChild(t[t.length - 1], o);
  }
  n.modules &&
    Or(n.modules, function (a, l) {
      i.register(t.concat(l), a, r);
    });
};
Gn.prototype.unregister = function (t) {
  var n = this.get(t.slice(0, -1)),
    r = t[t.length - 1],
    i = n.getChild(r);
  i && i.runtime && n.removeChild(r);
};
Gn.prototype.isRegistered = function (t) {
  var n = this.get(t.slice(0, -1)),
    r = t[t.length - 1];
  return n ? n.hasChild(r) : !1;
};
function fh(e, t, n) {
  if ((t.update(n), n.modules))
    for (var r in n.modules) {
      if (!t.getChild(r)) return;
      fh(e.concat(r), t.getChild(r), n.modules[r]);
    }
}
function hy(e) {
  return new ht(e);
}
var ht = function (t) {
    var n = this;
    t === void 0 && (t = {});
    var r = t.plugins;
    r === void 0 && (r = []);
    var i = t.strict;
    i === void 0 && (i = !1);
    var o = t.devtools;
    (this._committing = !1),
      (this._actions = Object.create(null)),
      (this._actionSubscribers = []),
      (this._mutations = Object.create(null)),
      (this._wrappedGetters = Object.create(null)),
      (this._modules = new Gn(t)),
      (this._modulesNamespaceMap = Object.create(null)),
      (this._subscribers = []),
      (this._makeLocalGettersCache = Object.create(null)),
      (this._scope = null),
      (this._devtools = o);
    var s = this,
      a = this,
      l = a.dispatch,
      u = a.commit;
    (this.dispatch = function (d, h) {
      return l.call(s, d, h);
    }),
      (this.commit = function (d, h, _) {
        return u.call(s, d, h, _);
      }),
      (this.strict = i);
    var c = this._modules.root.state;
    qo(this, c, [], this._modules.root),
      Za(this, c),
      r.forEach(function (f) {
        return f(n);
      });
  },
  tl = {
    state: {
      configurable: !0,
    },
  };
ht.prototype.install = function (t, n) {
  t.provide(n || nh, this), (t.config.globalProperties.$store = this);
  var r = this._devtools !== void 0 ? this._devtools : !0;
  r && ay(t, this);
};
tl.state.get = function () {
  return this._state.data;
};
tl.state.set = function (e) {};
ht.prototype.commit = function (t, n, r) {
  var i = this,
    o = po(t, n, r),
    s = o.type,
    a = o.payload,
    l = {
      type: s,
      payload: a,
    },
    u = this._mutations[s];
  u &&
    (this._withCommit(function () {
      u.forEach(function (f) {
        f(a);
      });
    }),
    this._subscribers.slice().forEach(function (c) {
      return c(l, i.state);
    }));
};
ht.prototype.dispatch = function (t, n) {
  var r = this,
    i = po(t, n),
    o = i.type,
    s = i.payload,
    a = {
      type: o,
      payload: s,
    },
    l = this._actions[o];
  if (l) {
    try {
      this._actionSubscribers
        .slice()
        .filter(function (c) {
          return c.before;
        })
        .forEach(function (c) {
          return c.before(a, r.state);
        });
    } catch {}
    var u =
      l.length > 1
        ? Promise.all(
            l.map(function (c) {
              return c(s);
            })
          )
        : l[0](s);
    return new Promise(function (c, f) {
      u.then(
        function (d) {
          try {
            r._actionSubscribers
              .filter(function (h) {
                return h.after;
              })
              .forEach(function (h) {
                return h.after(a, r.state);
              });
          } catch {}
          c(d);
        },
        function (d) {
          try {
            r._actionSubscribers
              .filter(function (h) {
                return h.error;
              })
              .forEach(function (h) {
                return h.error(a, r.state, d);
              });
          } catch {}
          f(d);
        }
      );
    });
  }
};
ht.prototype.subscribe = function (t, n) {
  return rh(t, this._subscribers, n);
};
ht.prototype.subscribeAction = function (t, n) {
  var r =
    typeof t == "function"
      ? {
          before: t,
        }
      : t;
  return rh(r, this._actionSubscribers, n);
};
ht.prototype.watch = function (t, n, r) {
  var i = this;
  return fe(
    function () {
      return t(i.state, i.getters);
    },
    n,
    Object.assign({}, r)
  );
};
ht.prototype.replaceState = function (t) {
  var n = this;
  this._withCommit(function () {
    n._state.data = t;
  });
};
ht.prototype.registerModule = function (t, n, r) {
  r === void 0 && (r = {}),
    typeof t == "string" && (t = [t]),
    this._modules.register(t, n),
    qo(this, this.state, t, this._modules.get(t), r.preserveState),
    Za(this, this.state);
};
ht.prototype.unregisterModule = function (t) {
  var n = this;
  typeof t == "string" && (t = [t]),
    this._modules.unregister(t),
    this._withCommit(function () {
      var r = el(n.state, t.slice(0, -1));
      delete r[t[t.length - 1]];
    }),
    ih(this);
};
ht.prototype.hasModule = function (t) {
  return typeof t == "string" && (t = [t]), this._modules.isRegistered(t);
};
ht.prototype.hotUpdate = function (t) {
  this._modules.update(t), ih(this, !0);
};
ht.prototype._withCommit = function (t) {
  var n = this._committing;
  (this._committing = !0), t(), (this._committing = n);
};
Object.defineProperties(ht.prototype, tl);
/*!
 * shared v10.0.4
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const vo = typeof window != "undefined",
  Bt = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
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
  Ke = (e) => typeof e == "number" && isFinite(e),
  py = (e) => nl(e) === "[object Date]",
  _o = (e) => nl(e) === "[object RegExp]",
  Wo = (e) => be(e) && Object.keys(e).length === 0,
  tt = Object.assign;
function Vc(e) {
  return e
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
const vy = Object.prototype.hasOwnProperty;
function bo(e, t) {
  return vy.call(e, t);
}
const qe = Array.isArray,
  Pe = (e) => typeof e == "function",
  ie = (e) => typeof e == "string",
  xe = (e) => typeof e == "boolean",
  we = (e) => e !== null && typeof e == "object",
  _y = (e) => we(e) && Pe(e.then) && Pe(e.catch),
  dh = Object.prototype.toString,
  nl = (e) => dh.call(e),
  be = (e) => nl(e) === "[object Object]",
  by = (e) =>
    e == null
      ? ""
      : qe(e) || (be(e) && e.toString === dh)
      ? JSON.stringify(e, null, 2)
      : String(e);
function rl(e, t = "") {
  return e.reduce((n, r, i) => (i === 0 ? n + r : n + t + r), "");
}
function yy(e, t) {
  typeof console != "undefined" &&
    (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
function hh() {
  const e = new Map();
  return {
    events: e,
    on(n, r) {
      const i = e.get(n);
      (i && i.push(r)) || e.set(n, [r]);
    },
    off(n, r) {
      const i = e.get(n);
      i && i.splice(i.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((i) => i(r)),
        (e.get("*") || []).slice().map((i) => i(n, r));
    },
  };
}
const Pi = (e) => !we(e) || qe(e);
function zi(e, t) {
  if (Pi(e) || Pi(t)) throw new Error("Invalid value");
  const n = [
    {
      src: e,
      des: t,
    },
  ];
  for (; n.length; ) {
    const { src: r, des: i } = n.pop();
    Object.keys(r).forEach((o) => {
      we(r[o]) && !we(i[o]) && (i[o] = Array.isArray(r[o]) ? [] : {}),
        Pi(i[o]) || Pi(r[o])
          ? (i[o] = r[o])
          : n.push({
              src: r[o],
              des: i[o],
            });
    });
  }
}
/*!
 * message-compiler v10.0.4
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function wy(e, t, n) {
  return {
    line: e,
    column: t,
    offset: n,
  };
}
function Zs(e, t, n) {
  return {
    start: e,
    end: t,
  };
}
const Ce = {
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
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
  },
  Ey = 17;
function Uo(e, t, n = {}) {
  const { domain: r, messages: i, args: o } = n,
    s = e,
    a = new SyntaxError(String(s));
  return (a.code = e), t && (a.location = t), (a.domain = r), a;
}
function Sy(e) {
  throw e;
}
const Kt = " ",
  Cy = "\r",
  at = `
`,
  ky = "\u2028",
  Ty = "\u2029";
function Iy(e) {
  const t = e;
  let n = 0,
    r = 1,
    i = 1,
    o = 0;
  const s = (A) => t[A] === Cy && t[A + 1] === at,
    a = (A) => t[A] === at,
    l = (A) => t[A] === Ty,
    u = (A) => t[A] === ky,
    c = (A) => s(A) || a(A) || l(A) || u(A),
    f = () => n,
    d = () => r,
    h = () => i,
    _ = () => o,
    S = (A) => (s(A) || l(A) || u(A) ? at : t[A]),
    C = () => S(n),
    y = () => S(n + o);
  function g() {
    return (o = 0), c(n) && (r++, (i = 0)), s(n) && n++, n++, i++, t[n];
  }
  function E() {
    return s(n + o) && o++, o++, t[n + o];
  }
  function b() {
    (n = 0), (r = 1), (i = 1), (o = 0);
  }
  function O(A = 0) {
    o = A;
  }
  function P() {
    const A = n + o;
    for (; A !== n; ) g();
    o = 0;
  }
  return {
    index: f,
    line: d,
    column: h,
    peekOffset: _,
    charAt: S,
    currentChar: C,
    currentPeek: y,
    next: g,
    peek: E,
    reset: b,
    resetPeek: O,
    skipToPeek: P,
  };
}
const fn = void 0,
  Ay = ".",
  qc = "'",
  Oy = "tokenizer";
function Ny(e, t = {}) {
  const n = t.location !== !1,
    r = Iy(e),
    i = () => r.index(),
    o = () => wy(r.line(), r.column(), r.index()),
    s = o(),
    a = i(),
    l = {
      currentType: 13,
      offset: a,
      startLoc: s,
      endLoc: s,
      lastType: 13,
      lastOffset: a,
      lastStartLoc: s,
      lastEndLoc: s,
      braceNest: 0,
      inLinked: !1,
      text: "",
    },
    u = () => l,
    { onError: c } = t;
  function f(m, v, I, ...F) {
    const W = u();
    if (((v.column += I), (v.offset += I), c)) {
      const G = n ? Zs(W.startLoc, v) : null,
        k = Uo(m, G, {
          domain: Oy,
          args: F,
        });
      c(k);
    }
  }
  function d(m, v, I) {
    (m.endLoc = o()), (m.currentType = v);
    const F = {
      type: v,
    };
    return (
      n && (F.loc = Zs(m.startLoc, m.endLoc)), I != null && (F.value = I), F
    );
  }
  const h = (m) => d(m, 13);
  function _(m, v) {
    return m.currentChar() === v
      ? (m.next(), v)
      : (f(Ce.EXPECTED_TOKEN, o(), 0, v), "");
  }
  function S(m) {
    let v = "";
    for (; m.currentPeek() === Kt || m.currentPeek() === at; )
      (v += m.currentPeek()), m.peek();
    return v;
  }
  function C(m) {
    const v = S(m);
    return m.skipToPeek(), v;
  }
  function y(m) {
    if (m === fn) return !1;
    const v = m.charCodeAt(0);
    return (v >= 97 && v <= 122) || (v >= 65 && v <= 90) || v === 95;
  }
  function g(m) {
    if (m === fn) return !1;
    const v = m.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function E(m, v) {
    const { currentType: I } = v;
    if (I !== 2) return !1;
    S(m);
    const F = y(m.currentPeek());
    return m.resetPeek(), F;
  }
  function b(m, v) {
    const { currentType: I } = v;
    if (I !== 2) return !1;
    S(m);
    const F = m.currentPeek() === "-" ? m.peek() : m.currentPeek(),
      W = g(F);
    return m.resetPeek(), W;
  }
  function O(m, v) {
    const { currentType: I } = v;
    if (I !== 2) return !1;
    S(m);
    const F = m.currentPeek() === qc;
    return m.resetPeek(), F;
  }
  function P(m, v) {
    const { currentType: I } = v;
    if (I !== 7) return !1;
    S(m);
    const F = m.currentPeek() === ".";
    return m.resetPeek(), F;
  }
  function A(m, v) {
    const { currentType: I } = v;
    if (I !== 8) return !1;
    S(m);
    const F = y(m.currentPeek());
    return m.resetPeek(), F;
  }
  function K(m, v) {
    const { currentType: I } = v;
    if (!(I === 7 || I === 11)) return !1;
    S(m);
    const F = m.currentPeek() === ":";
    return m.resetPeek(), F;
  }
  function N(m, v) {
    const { currentType: I } = v;
    if (I !== 9) return !1;
    const F = () => {
        const G = m.currentPeek();
        return G === "{"
          ? y(m.peek())
          : G === "@" || G === "|" || G === ":" || G === "." || G === Kt || !G
          ? !1
          : G === at
          ? (m.peek(), F())
          : q(m, !1);
      },
      W = F();
    return m.resetPeek(), W;
  }
  function L(m) {
    S(m);
    const v = m.currentPeek() === "|";
    return m.resetPeek(), v;
  }
  function q(m, v = !0) {
    const I = (W = !1, G = "") => {
        const k = m.currentPeek();
        return k === "{" || k === "@" || !k
          ? W
          : k === "|"
          ? !(G === Kt || G === at)
          : k === Kt
          ? (m.peek(), I(!0, Kt))
          : k === at
          ? (m.peek(), I(!0, at))
          : !0;
      },
      F = I();
    return v && m.resetPeek(), F;
  }
  function T(m, v) {
    const I = m.currentChar();
    return I === fn ? fn : v(I) ? (m.next(), I) : null;
  }
  function Q(m) {
    const v = m.charCodeAt(0);
    return (
      (v >= 97 && v <= 122) ||
      (v >= 65 && v <= 90) ||
      (v >= 48 && v <= 57) ||
      v === 95 ||
      v === 36
    );
  }
  function $(m) {
    return T(m, Q);
  }
  function te(m) {
    const v = m.charCodeAt(0);
    return (
      (v >= 97 && v <= 122) ||
      (v >= 65 && v <= 90) ||
      (v >= 48 && v <= 57) ||
      v === 95 ||
      v === 36 ||
      v === 45
    );
  }
  function ee(m) {
    return T(m, te);
  }
  function Z(m) {
    const v = m.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function H(m) {
    return T(m, Z);
  }
  function oe(m) {
    const v = m.charCodeAt(0);
    return (
      (v >= 48 && v <= 57) || (v >= 65 && v <= 70) || (v >= 97 && v <= 102)
    );
  }
  function le(m) {
    return T(m, oe);
  }
  function de(m) {
    let v = "",
      I = "";
    for (; (v = H(m)); ) I += v;
    return I;
  }
  function B(m) {
    let v = "";
    for (;;) {
      const I = m.currentChar();
      if (I === "{" || I === "}" || I === "@" || I === "|" || !I) break;
      if (I === Kt || I === at)
        if (q(m)) (v += I), m.next();
        else {
          if (L(m)) break;
          (v += I), m.next();
        }
      else (v += I), m.next();
    }
    return v;
  }
  function pe(m) {
    C(m);
    let v = "",
      I = "";
    for (; (v = ee(m)); ) I += v;
    return (
      m.currentChar() === fn && f(Ce.UNTERMINATED_CLOSING_BRACE, o(), 0), I
    );
  }
  function Ne(m) {
    C(m);
    let v = "";
    return (
      m.currentChar() === "-" ? (m.next(), (v += `-${de(m)}`)) : (v += de(m)),
      m.currentChar() === fn && f(Ce.UNTERMINATED_CLOSING_BRACE, o(), 0),
      v
    );
  }
  function Re(m) {
    return m !== qc && m !== at;
  }
  function re(m) {
    C(m), _(m, "'");
    let v = "",
      I = "";
    for (; (v = T(m, Re)); ) v === "\\" ? (I += D(m)) : (I += v);
    const F = m.currentChar();
    return F === at || F === fn
      ? (f(Ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        F === at && (m.next(), _(m, "'")),
        I)
      : (_(m, "'"), I);
  }
  function D(m) {
    const v = m.currentChar();
    switch (v) {
      case "\\":
      case "'":
        return m.next(), `\\${v}`;
      case "u":
        return X(m, v, 4);
      case "U":
        return X(m, v, 6);
      default:
        return f(Ce.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, v), "";
    }
  }
  function X(m, v, I) {
    _(m, v);
    let F = "";
    for (let W = 0; W < I; W++) {
      const G = le(m);
      if (!G) {
        f(
          Ce.INVALID_UNICODE_ESCAPE_SEQUENCE,
          o(),
          0,
          `\\${v}${F}${m.currentChar()}`
        );
        break;
      }
      F += G;
    }
    return `\\${v}${F}`;
  }
  function Y(m) {
    return m !== "{" && m !== "}" && m !== Kt && m !== at;
  }
  function ne(m) {
    C(m);
    let v = "",
      I = "";
    for (; (v = T(m, Y)); ) I += v;
    return I;
  }
  function ye(m) {
    let v = "",
      I = "";
    for (; (v = $(m)); ) I += v;
    return I;
  }
  function ke(m) {
    const v = (I) => {
      const F = m.currentChar();
      return F === "{" ||
        F === "@" ||
        F === "|" ||
        F === "(" ||
        F === ")" ||
        !F ||
        F === Kt
        ? I
        : ((I += F), m.next(), v(I));
    };
    return v("");
  }
  function p(m) {
    C(m);
    const v = _(m, "|");
    return C(m), v;
  }
  function w(m, v) {
    let I = null;
    switch (m.currentChar()) {
      case "{":
        return (
          v.braceNest >= 1 && f(Ce.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
          m.next(),
          (I = d(v, 2, "{")),
          C(m),
          v.braceNest++,
          I
        );
      case "}":
        return (
          v.braceNest > 0 &&
            v.currentType === 2 &&
            f(Ce.EMPTY_PLACEHOLDER, o(), 0),
          m.next(),
          (I = d(v, 3, "}")),
          v.braceNest--,
          v.braceNest > 0 && C(m),
          v.inLinked && v.braceNest === 0 && (v.inLinked = !1),
          I
        );
      case "@":
        return (
          v.braceNest > 0 && f(Ce.UNTERMINATED_CLOSING_BRACE, o(), 0),
          (I = x(m, v) || h(v)),
          (v.braceNest = 0),
          I
        );
      default: {
        let W = !0,
          G = !0,
          k = !0;
        if (L(m))
          return (
            v.braceNest > 0 && f(Ce.UNTERMINATED_CLOSING_BRACE, o(), 0),
            (I = d(v, 1, p(m))),
            (v.braceNest = 0),
            (v.inLinked = !1),
            I
          );
        if (
          v.braceNest > 0 &&
          (v.currentType === 4 || v.currentType === 5 || v.currentType === 6)
        )
          return (
            f(Ce.UNTERMINATED_CLOSING_BRACE, o(), 0), (v.braceNest = 0), U(m, v)
          );
        if ((W = E(m, v))) return (I = d(v, 4, pe(m))), C(m), I;
        if ((G = b(m, v))) return (I = d(v, 5, Ne(m))), C(m), I;
        if ((k = O(m, v))) return (I = d(v, 6, re(m))), C(m), I;
        if (!W && !G && !k)
          return (
            (I = d(v, 12, ne(m))),
            f(Ce.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, I.value),
            C(m),
            I
          );
        break;
      }
    }
    return I;
  }
  function x(m, v) {
    const { currentType: I } = v;
    let F = null;
    const W = m.currentChar();
    switch (
      ((I === 7 || I === 8 || I === 11 || I === 9) &&
        (W === at || W === Kt) &&
        f(Ce.INVALID_LINKED_FORMAT, o(), 0),
      W)
    ) {
      case "@":
        return m.next(), (F = d(v, 7, "@")), (v.inLinked = !0), F;
      case ".":
        return C(m), m.next(), d(v, 8, ".");
      case ":":
        return C(m), m.next(), d(v, 9, ":");
      default:
        return L(m)
          ? ((F = d(v, 1, p(m))), (v.braceNest = 0), (v.inLinked = !1), F)
          : P(m, v) || K(m, v)
          ? (C(m), x(m, v))
          : A(m, v)
          ? (C(m), d(v, 11, ye(m)))
          : N(m, v)
          ? (C(m), W === "{" ? w(m, v) || F : d(v, 10, ke(m)))
          : (I === 7 && f(Ce.INVALID_LINKED_FORMAT, o(), 0),
            (v.braceNest = 0),
            (v.inLinked = !1),
            U(m, v));
    }
  }
  function U(m, v) {
    let I = {
      type: 13,
    };
    if (v.braceNest > 0) return w(m, v) || h(v);
    if (v.inLinked) return x(m, v) || h(v);
    switch (m.currentChar()) {
      case "{":
        return w(m, v) || h(v);
      case "}":
        return f(Ce.UNBALANCED_CLOSING_BRACE, o(), 0), m.next(), d(v, 3, "}");
      case "@":
        return x(m, v) || h(v);
      default: {
        if (L(m))
          return (I = d(v, 1, p(m))), (v.braceNest = 0), (v.inLinked = !1), I;
        if (q(m)) return d(v, 0, B(m));
        break;
      }
    }
    return I;
  }
  function V() {
    const { currentType: m, offset: v, startLoc: I, endLoc: F } = l;
    return (
      (l.lastType = m),
      (l.lastOffset = v),
      (l.lastStartLoc = I),
      (l.lastEndLoc = F),
      (l.offset = i()),
      (l.startLoc = o()),
      r.currentChar() === fn ? d(l, 13) : U(r, l)
    );
  }
  return {
    nextToken: V,
    currentOffset: i,
    currentPosition: o,
    context: u,
  };
}
const Py = "parser",
  xy = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Ly(e, t, n) {
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
function Ry(e = {}) {
  const t = e.location !== !1,
    { onError: n } = e;
  function r(y, g, E, b, ...O) {
    const P = y.currentPosition();
    if (((P.offset += b), (P.column += b), n)) {
      const A = t ? Zs(E, P) : null,
        K = Uo(g, A, {
          domain: Py,
          args: O,
        });
      n(K);
    }
  }
  function i(y, g, E) {
    const b = {
      type: y,
    };
    return (
      t &&
        ((b.start = g),
        (b.end = g),
        (b.loc = {
          start: E,
          end: E,
        })),
      b
    );
  }
  function o(y, g, E, b) {
    t && ((y.end = g), y.loc && (y.loc.end = E));
  }
  function s(y, g) {
    const E = y.context(),
      b = i(3, E.offset, E.startLoc);
    return (b.value = g), o(b, y.currentOffset(), y.currentPosition()), b;
  }
  function a(y, g) {
    const E = y.context(),
      { lastOffset: b, lastStartLoc: O } = E,
      P = i(5, b, O);
    return (
      (P.index = parseInt(g, 10)),
      y.nextToken(),
      o(P, y.currentOffset(), y.currentPosition()),
      P
    );
  }
  function l(y, g) {
    const E = y.context(),
      { lastOffset: b, lastStartLoc: O } = E,
      P = i(4, b, O);
    return (
      (P.key = g),
      y.nextToken(),
      o(P, y.currentOffset(), y.currentPosition()),
      P
    );
  }
  function u(y, g) {
    const E = y.context(),
      { lastOffset: b, lastStartLoc: O } = E,
      P = i(9, b, O);
    return (
      (P.value = g.replace(xy, Ly)),
      y.nextToken(),
      o(P, y.currentOffset(), y.currentPosition()),
      P
    );
  }
  function c(y) {
    const g = y.nextToken(),
      E = y.context(),
      { lastOffset: b, lastStartLoc: O } = E,
      P = i(8, b, O);
    return g.type !== 11
      ? (r(y, Ce.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0),
        (P.value = ""),
        o(P, b, O),
        {
          nextConsumeToken: g,
          node: P,
        })
      : (g.value == null &&
          r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, $t(g)),
        (P.value = g.value || ""),
        o(P, y.currentOffset(), y.currentPosition()),
        {
          node: P,
        });
  }
  function f(y, g) {
    const E = y.context(),
      b = i(7, E.offset, E.startLoc);
    return (b.value = g), o(b, y.currentOffset(), y.currentPosition()), b;
  }
  function d(y) {
    const g = y.context(),
      E = i(6, g.offset, g.startLoc);
    let b = y.nextToken();
    if (b.type === 8) {
      const O = c(y);
      (E.modifier = O.node), (b = O.nextConsumeToken || y.nextToken());
    }
    switch (
      (b.type !== 9 &&
        r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, $t(b)),
      (b = y.nextToken()),
      b.type === 2 && (b = y.nextToken()),
      b.type)
    ) {
      case 10:
        b.value == null &&
          r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, $t(b)),
          (E.key = f(y, b.value || ""));
        break;
      case 4:
        b.value == null &&
          r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, $t(b)),
          (E.key = l(y, b.value || ""));
        break;
      case 5:
        b.value == null &&
          r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, $t(b)),
          (E.key = a(y, b.value || ""));
        break;
      case 6:
        b.value == null &&
          r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, $t(b)),
          (E.key = u(y, b.value || ""));
        break;
      default: {
        r(y, Ce.UNEXPECTED_EMPTY_LINKED_KEY, g.lastStartLoc, 0);
        const O = y.context(),
          P = i(7, O.offset, O.startLoc);
        return (
          (P.value = ""),
          o(P, O.offset, O.startLoc),
          (E.key = P),
          o(E, O.offset, O.startLoc),
          {
            nextConsumeToken: b,
            node: E,
          }
        );
      }
    }
    return (
      o(E, y.currentOffset(), y.currentPosition()),
      {
        node: E,
      }
    );
  }
  function h(y) {
    const g = y.context(),
      E = g.currentType === 1 ? y.currentOffset() : g.offset,
      b = g.currentType === 1 ? g.endLoc : g.startLoc,
      O = i(2, E, b);
    O.items = [];
    let P = null;
    do {
      const N = P || y.nextToken();
      switch (((P = null), N.type)) {
        case 0:
          N.value == null &&
            r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, $t(N)),
            O.items.push(s(y, N.value || ""));
          break;
        case 5:
          N.value == null &&
            r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, $t(N)),
            O.items.push(a(y, N.value || ""));
          break;
        case 4:
          N.value == null &&
            r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, $t(N)),
            O.items.push(l(y, N.value || ""));
          break;
        case 6:
          N.value == null &&
            r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, $t(N)),
            O.items.push(u(y, N.value || ""));
          break;
        case 7: {
          const L = d(y);
          O.items.push(L.node), (P = L.nextConsumeToken || null);
          break;
        }
      }
    } while (g.currentType !== 13 && g.currentType !== 1);
    const A = g.currentType === 1 ? g.lastOffset : y.currentOffset(),
      K = g.currentType === 1 ? g.lastEndLoc : y.currentPosition();
    return o(O, A, K), O;
  }
  function _(y, g, E, b) {
    const O = y.context();
    let P = b.items.length === 0;
    const A = i(1, g, E);
    (A.cases = []), A.cases.push(b);
    do {
      const K = h(y);
      P || (P = K.items.length === 0), A.cases.push(K);
    } while (O.currentType !== 13);
    return (
      P && r(y, Ce.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0),
      o(A, y.currentOffset(), y.currentPosition()),
      A
    );
  }
  function S(y) {
    const g = y.context(),
      { offset: E, startLoc: b } = g,
      O = h(y);
    return g.currentType === 13 ? O : _(y, E, b, O);
  }
  function C(y) {
    const g = Ny(y, tt({}, e)),
      E = g.context(),
      b = i(0, E.offset, E.startLoc);
    return (
      t && b.loc && (b.loc.source = y),
      (b.body = S(g)),
      e.onCacheKey && (b.cacheKey = e.onCacheKey(y)),
      E.currentType !== 13 &&
        r(
          g,
          Ce.UNEXPECTED_LEXICAL_ANALYSIS,
          E.lastStartLoc,
          0,
          y[E.offset] || ""
        ),
      o(b, g.currentOffset(), g.currentPosition()),
      b
    );
  }
  return {
    parse: C,
  };
}
function $t(e) {
  if (e.type === 13) return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function My(e, t = {}) {
  const n = {
    ast: e,
    helpers: new Set(),
  };
  return {
    context: () => n,
    helper: (o) => (n.helpers.add(o), o),
  };
}
function Wc(e, t) {
  for (let n = 0; n < e.length; n++) il(e[n], t);
}
function il(e, t) {
  switch (e.type) {
    case 1:
      Wc(e.cases, t), t.helper("plural");
      break;
    case 2:
      Wc(e.items, t);
      break;
    case 6: {
      il(e.key, t), t.helper("linked"), t.helper("type");
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
function Dy(e, t = {}) {
  const n = My(e);
  n.helper("normalize"), e.body && il(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Fy(e) {
  const t = e.body;
  return t.type === 2 ? Uc(t) : t.cases.forEach((n) => Uc(n)), e;
}
function Uc(e) {
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
      e.static = rl(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function sr(e) {
  switch (((e.t = e.type), e.type)) {
    case 0: {
      const t = e;
      sr(t.body), (t.b = t.body), delete t.body;
      break;
    }
    case 1: {
      const t = e,
        n = t.cases;
      for (let r = 0; r < n.length; r++) sr(n[r]);
      (t.c = n), delete t.cases;
      break;
    }
    case 2: {
      const t = e,
        n = t.items;
      for (let r = 0; r < n.length; r++) sr(n[r]);
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
      sr(t.key),
        (t.k = t.key),
        delete t.key,
        t.modifier && (sr(t.modifier), (t.m = t.modifier), delete t.modifier);
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
function $y(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: i, needIndent: o } = t,
    s = t.location !== !1,
    a = {
      filename: r,
      code: "",
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: i,
      needIndent: o,
      indentLevel: 0,
    };
  s && e.loc && (a.source = e.loc.source);
  const l = () => a;
  function u(C, y) {
    a.code += C;
  }
  function c(C, y = !0) {
    const g = y ? i : "";
    u(o ? g + "  ".repeat(C) : g);
  }
  function f(C = !0) {
    const y = ++a.indentLevel;
    C && c(y);
  }
  function d(C = !0) {
    const y = --a.indentLevel;
    C && c(y);
  }
  function h() {
    c(a.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: f,
    deindent: d,
    newline: h,
    helper: (C) => `_${C}`,
    needIndent: () => a.needIndent,
  };
}
function jy(e, t) {
  const { helper: n } = e;
  e.push(`${n("linked")}(`),
    wr(e, t.key),
    t.modifier
      ? (e.push(", "), wr(e, t.modifier), e.push(", _type"))
      : e.push(", undefined, _type"),
    e.push(")");
}
function Vy(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n("normalize")}([`), e.indent(r());
  const i = t.items.length;
  for (let o = 0; o < i && (wr(e, t.items[o]), o !== i - 1); o++) e.push(", ");
  e.deindent(r()), e.push("])");
}
function qy(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(r());
    const i = t.cases.length;
    for (let o = 0; o < i && (wr(e, t.cases[o]), o !== i - 1); o++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Wy(e, t) {
  t.body ? wr(e, t.body) : e.push("null");
}
function wr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Wy(e, t);
      break;
    case 1:
      qy(e, t);
      break;
    case 2:
      Vy(e, t);
      break;
    case 6:
      jy(e, t);
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
  const n = ie(t.mode) ? t.mode : "normal",
    r = ie(t.filename) ? t.filename : "message.intl",
    i = !!t.sourceMap,
    o =
      t.breakLineCode != null
        ? t.breakLineCode
        : n === "arrow"
        ? ";"
        : `
`,
    s = t.needIndent ? t.needIndent : n !== "arrow",
    a = e.helpers || [],
    l = $y(e, {
      mode: n,
      filename: r,
      sourceMap: i,
      breakLineCode: o,
      needIndent: s,
    });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(s),
    a.length > 0 &&
      (l.push(
        `const { ${rl(
          a.map((f) => `${f}: _${f}`),
          ", "
        )} } = ctx`
      ),
      l.newline()),
    l.push("return "),
    wr(l, e),
    l.deindent(s),
    l.push("}"),
    delete e.helpers;
  const { code: u, map: c } = l.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0,
  };
};
function By(e, t = {}) {
  const n = tt({}, t),
    r = !!n.jit,
    i = !!n.minify,
    o = n.optimize == null ? !0 : n.optimize,
    a = Ry(n).parse(e);
  return r
    ? (o && Fy(a),
      i && sr(a),
      {
        ast: a,
        code: "",
      })
    : (Dy(a, n), Uy(a, n));
}
/*!
 * core-base v10.0.4
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function ms(e) {
  return (n) => Hy(n, e);
}
function Hy(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n,
      i = r.c || r.cases;
    return e.plural(i.reduce((o, s) => [...o, Bc(e, s)], []));
  } else return Bc(e, n);
}
function Bc(e, t) {
  const n = t.s || t.static;
  if (n != null) return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((i, o) => [...i, ea(e, o)], []);
    return e.normalize(r);
  }
}
function ea(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3: {
      const r = t;
      return r.v || r.value;
    }
    case 9: {
      const r = t;
      return r.v || r.value;
    }
    case 4: {
      const r = t;
      return e.interpolate(e.named(r.k || r.key));
    }
    case 5: {
      const r = t;
      return e.interpolate(e.list(r.i != null ? r.i : r.index));
    }
    case 6: {
      const r = t,
        i = r.m || r.modifier;
      return e.linked(ea(e, r.k || r.key), i ? ea(e, i) : void 0, e.type);
    }
    case 7: {
      const r = t;
      return r.v || r.value;
    }
    case 8: {
      const r = t;
      return r.v || r.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const zy = (e) => e;
let xi = Object.create(null);
const Hn = (e) =>
  we(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function Ky(e, t = {}) {
  let n = !1;
  const r = t.onError || Sy;
  return (
    (t.onError = (i) => {
      (n = !0), r(i);
    }),
    {
      ...By(e, t),
      detectError: n,
    }
  );
}
function Gy(e, t) {
  if (ie(e)) {
    xe(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || zy)(e),
      i = xi[r];
    if (i) return i;
    const { ast: o, detectError: s } = Ky(e, {
        ...t,
        location: !1,
        jit: !0,
      }),
      a = ms(o);
    return s ? a : (xi[r] = a);
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = xi[n];
      return r || (xi[n] = ms(e));
    } else return ms(e);
  }
}
const en = {
    INVALID_ARGUMENT: Ey,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_NON_STRING_MESSAGE: 20,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23,
  },
  Qy = 24;
function tn(e) {
  return Uo(e, null, void 0);
}
function ol(e, t) {
  return t.locale != null ? Hc(t.locale) : Hc(e.locale);
}
let gs;
function Hc(e) {
  if (ie(e)) return e;
  if (Pe(e)) {
    if (e.resolvedOnce && gs != null) return gs;
    if (e.constructor.name === "Function") {
      const t = e();
      if (_y(t)) throw tn(en.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return (gs = t);
    } else throw tn(en.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else throw tn(en.NOT_SUPPORT_LOCALE_TYPE);
}
function Xy(e, t, n) {
  return [
    ...new Set([
      n,
      ...(qe(t) ? t : we(t) ? Object.keys(t) : ie(t) ? [t] : [n]),
    ]),
  ];
}
function mh(e, t, n) {
  const r = ie(n) ? n : yo,
    i = e;
  i.__localeChainCache || (i.__localeChainCache = new Map());
  let o = i.__localeChainCache.get(r);
  if (!o) {
    o = [];
    let s = [n];
    for (; qe(s); ) s = zc(o, s, t);
    const a = qe(t) || !be(t) ? t : t.default ? t.default : null;
    (s = ie(a) ? [a] : a),
      qe(s) && zc(o, s, !1),
      i.__localeChainCache.set(r, o);
  }
  return o;
}
function zc(e, t, n) {
  let r = !0;
  for (let i = 0; i < t.length && xe(r); i++) {
    const o = t[i];
    ie(o) && (r = Yy(e, t[i], n));
  }
  return r;
}
function Yy(e, t, n) {
  let r;
  const i = t.split("-");
  do {
    const o = i.join("-");
    (r = Jy(e, o, n)), i.splice(-1, 1);
  } while (i.length && r === !0);
  return r;
}
function Jy(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = t[t.length - 1] !== "!";
    const i = t.replace(/!/g, "");
    e.push(i), (qe(n) || be(n)) && n[i] && (r = n[i]);
  }
  return r;
}
const An = [];
An[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7],
};
An[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7],
};
An[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0],
};
An[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1],
};
An[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0],
};
An[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0],
};
An[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0],
};
const Zy = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function ew(e) {
  return Zy.test(e);
}
function tw(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function nw(e) {
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
function rw(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e))
    ? !1
    : ew(t)
    ? tw(t)
    : "*" + t;
}
function iw(e) {
  const t = [];
  let n = -1,
    r = 0,
    i = 0,
    o,
    s,
    a,
    l,
    u,
    c,
    f;
  const d = [];
  (d[0] = () => {
    s === void 0 ? (s = a) : (s += a);
  }),
    (d[1] = () => {
      s !== void 0 && (t.push(s), (s = void 0));
    }),
    (d[2] = () => {
      d[0](), i++;
    }),
    (d[3] = () => {
      if (i > 0) i--, (r = 4), d[0]();
      else {
        if (((i = 0), s === void 0 || ((s = rw(s)), s === !1))) return !1;
        d[1]();
      }
    });
  function h() {
    const _ = e[n + 1];
    if ((r === 5 && _ === "'") || (r === 6 && _ === '"'))
      return n++, (a = "\\" + _), d[0](), !0;
  }
  for (; r !== null; )
    if ((n++, (o = e[n]), !(o === "\\" && h()))) {
      if (
        ((l = nw(o)),
        (f = An[r]),
        (u = f[l] || f.l || 8),
        u === 8 ||
          ((r = u[0]),
          u[1] !== void 0 && ((c = d[u[1]]), c && ((a = o), c() === !1))))
      )
        return;
      if (r === 7) return t;
    }
}
const Kc = new Map();
function ow(e, t) {
  return we(e) ? e[t] : null;
}
function sw(e, t) {
  if (!we(e)) return null;
  let n = Kc.get(t);
  if ((n || ((n = iw(t)), n && Kc.set(t, n)), !n)) return null;
  const r = n.length;
  let i = e,
    o = 0;
  for (; o < r; ) {
    const s = i[n[o]];
    if (s === void 0 || Pe(i)) return null;
    (i = s), o++;
  }
  return i;
}
const aw = "10.0.4",
  Bo = -1,
  yo = "en-US",
  Gc = "",
  Qc = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function lw() {
  return {
    upper: (e, t) =>
      t === "text" && ie(e)
        ? e.toUpperCase()
        : t === "vnode" && we(e) && "__v_isVNode" in e
        ? e.children.toUpperCase()
        : e,
    lower: (e, t) =>
      t === "text" && ie(e)
        ? e.toLowerCase()
        : t === "vnode" && we(e) && "__v_isVNode" in e
        ? e.children.toLowerCase()
        : e,
    capitalize: (e, t) =>
      t === "text" && ie(e)
        ? Qc(e)
        : t === "vnode" && we(e) && "__v_isVNode" in e
        ? Qc(e.children)
        : e,
  };
}
let gh;
function cw(e) {
  gh = e;
}
let ph;
function uw(e) {
  ph = e;
}
let vh;
function fw(e) {
  vh = e;
}
let _h = null;
const Xc = (e) => {
    _h = e;
  },
  dw = () => _h;
let Yc = 0;
function hw(e = {}) {
  const t = Pe(e.onWarn) ? e.onWarn : yy,
    n = ie(e.version) ? e.version : aw,
    r = ie(e.locale) || Pe(e.locale) ? e.locale : yo,
    i = Pe(r) ? yo : r,
    o =
      qe(e.fallbackLocale) ||
      be(e.fallbackLocale) ||
      ie(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : i,
    s = be(e.messages)
      ? e.messages
      : {
          [i]: {},
        },
    a = be(e.datetimeFormats)
      ? e.datetimeFormats
      : {
          [i]: {},
        },
    l = be(e.numberFormats)
      ? e.numberFormats
      : {
          [i]: {},
        },
    u = tt({}, e.modifiers || {}, lw()),
    c = e.pluralRules || {},
    f = Pe(e.missing) ? e.missing : null,
    d = xe(e.missingWarn) || _o(e.missingWarn) ? e.missingWarn : !0,
    h = xe(e.fallbackWarn) || _o(e.fallbackWarn) ? e.fallbackWarn : !0,
    _ = !!e.fallbackFormat,
    S = !!e.unresolving,
    C = Pe(e.postTranslation) ? e.postTranslation : null,
    y = be(e.processor) ? e.processor : null,
    g = xe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    E = !!e.escapeParameter,
    b = Pe(e.messageCompiler) ? e.messageCompiler : gh,
    O = Pe(e.messageResolver) ? e.messageResolver : ph || ow,
    P = Pe(e.localeFallbacker) ? e.localeFallbacker : vh || Xy,
    A = we(e.fallbackContext) ? e.fallbackContext : void 0,
    K = e,
    N = we(K.__datetimeFormatters) ? K.__datetimeFormatters : new Map(),
    L = we(K.__numberFormatters) ? K.__numberFormatters : new Map(),
    q = we(K.__meta) ? K.__meta : {};
  Yc++;
  const T = {
    version: n,
    cid: Yc,
    locale: r,
    fallbackLocale: o,
    messages: s,
    modifiers: u,
    pluralRules: c,
    missing: f,
    missingWarn: d,
    fallbackWarn: h,
    fallbackFormat: _,
    unresolving: S,
    postTranslation: C,
    processor: y,
    warnHtmlMessage: g,
    escapeParameter: E,
    messageCompiler: b,
    messageResolver: O,
    localeFallbacker: P,
    fallbackContext: A,
    onWarn: t,
    __meta: q,
  };
  return (
    (T.datetimeFormats = a),
    (T.numberFormats = l),
    (T.__datetimeFormatters = N),
    (T.__numberFormatters = L),
    T
  );
}
function sl(e, t, n, r, i) {
  const { missing: o, onWarn: s } = e;
  if (o !== null) {
    const a = o(e, n, t, i);
    return ie(a) ? a : t;
  } else return t;
}
function Fr(e, t, n) {
  const r = e;
  (r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
function mw(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function gw(e, t) {
  const n = t.indexOf(e);
  if (n === -1) return !1;
  for (let r = n + 1; r < t.length; r++) if (mw(e, t[r])) return !0;
  return !1;
}
function Jc(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: i,
      onWarn: o,
      localeFallbacker: s,
    } = e,
    { __datetimeFormatters: a } = e,
    [l, u, c, f] = ta(...t),
    d = xe(c.missingWarn) ? c.missingWarn : e.missingWarn;
  xe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const h = !!c.part,
    _ = ol(e, c),
    S = s(e, i, _);
  if (!ie(l) || l === "") return new Intl.DateTimeFormat(_, f).format(u);
  let C = {},
    y,
    g = null;
  const E = "datetime format";
  for (
    let P = 0;
    P < S.length && ((y = S[P]), (C = n[y] || {}), (g = C[l]), !be(g));
    P++
  )
    sl(e, l, y, d, E);
  if (!be(g) || !ie(y)) return r ? Bo : l;
  let b = `${y}__${l}`;
  Wo(f) || (b = `${b}__${JSON.stringify(f)}`);
  let O = a.get(b);
  return (
    O || ((O = new Intl.DateTimeFormat(y, tt({}, g, f))), a.set(b, O)),
    h ? O.formatToParts(u) : O.format(u)
  );
}
const bh = [
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
function ta(...e) {
  const [t, n, r, i] = e,
    o = {};
  let s = {},
    a;
  if (ie(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l) throw tn(en.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3]
      ? l[3].trim().startsWith("T")
        ? `${l[1].trim()}${l[3].trim()}`
        : `${l[1].trim()}T${l[3].trim()}`
      : l[1].trim();
    a = new Date(u);
    try {
      a.toISOString();
    } catch {
      throw tn(en.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (py(t)) {
    if (isNaN(t.getTime())) throw tn(en.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (Ke(t)) a = t;
  else throw tn(en.INVALID_ARGUMENT);
  return (
    ie(n)
      ? (o.key = n)
      : be(n) &&
        Object.keys(n).forEach((l) => {
          bh.includes(l) ? (s[l] = n[l]) : (o[l] = n[l]);
        }),
    ie(r) ? (o.locale = r) : be(r) && (s = r),
    be(i) && (s = i),
    [o.key || "", a, o, s]
  );
}
function Zc(e, t, n) {
  const r = e;
  for (const i in n) {
    const o = `${t}__${i}`;
    r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o);
  }
}
function eu(e, ...t) {
  const {
      numberFormats: n,
      unresolving: r,
      fallbackLocale: i,
      onWarn: o,
      localeFallbacker: s,
    } = e,
    { __numberFormatters: a } = e,
    [l, u, c, f] = na(...t),
    d = xe(c.missingWarn) ? c.missingWarn : e.missingWarn;
  xe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const h = !!c.part,
    _ = ol(e, c),
    S = s(e, i, _);
  if (!ie(l) || l === "") return new Intl.NumberFormat(_, f).format(u);
  let C = {},
    y,
    g = null;
  const E = "number format";
  for (
    let P = 0;
    P < S.length && ((y = S[P]), (C = n[y] || {}), (g = C[l]), !be(g));
    P++
  )
    sl(e, l, y, d, E);
  if (!be(g) || !ie(y)) return r ? Bo : l;
  let b = `${y}__${l}`;
  Wo(f) || (b = `${b}__${JSON.stringify(f)}`);
  let O = a.get(b);
  return (
    O || ((O = new Intl.NumberFormat(y, tt({}, g, f))), a.set(b, O)),
    h ? O.formatToParts(u) : O.format(u)
  );
}
const yh = [
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
function na(...e) {
  const [t, n, r, i] = e,
    o = {};
  let s = {};
  if (!Ke(t)) throw tn(en.INVALID_ARGUMENT);
  const a = t;
  return (
    ie(n)
      ? (o.key = n)
      : be(n) &&
        Object.keys(n).forEach((l) => {
          yh.includes(l) ? (s[l] = n[l]) : (o[l] = n[l]);
        }),
    ie(r) ? (o.locale = r) : be(r) && (s = r),
    be(i) && (s = i),
    [o.key || "", a, o, s]
  );
}
function tu(e, t, n) {
  const r = e;
  for (const i in n) {
    const o = `${t}__${i}`;
    r.__numberFormatters.has(o) && r.__numberFormatters.delete(o);
  }
}
const pw = (e) => e,
  vw = (e) => "",
  _w = "text",
  bw = (e) => (e.length === 0 ? "" : rl(e)),
  yw = by;
function nu(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function ww(e) {
  const t = Ke(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ke(e.named.count) || Ke(e.named.n))
    ? Ke(e.named.count)
      ? e.named.count
      : Ke(e.named.n)
      ? e.named.n
      : t
    : t;
}
function Ew(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Sw(e = {}) {
  const t = e.locale,
    n = ww(e),
    r =
      we(e.pluralRules) && ie(t) && Pe(e.pluralRules[t])
        ? e.pluralRules[t]
        : nu,
    i = we(e.pluralRules) && ie(t) && Pe(e.pluralRules[t]) ? nu : void 0,
    o = (y) => y[r(n, y.length, i)],
    s = e.list || [],
    a = (y) => s[y],
    l = e.named || {};
  Ke(e.pluralIndex) && Ew(n, l);
  const u = (y) => l[y];
  function c(y, g) {
    const E = Pe(e.messages)
      ? e.messages(y, !!g)
      : we(e.messages)
      ? e.messages[y]
      : !1;
    return E || (e.parent ? e.parent.message(y) : vw);
  }
  const f = (y) => (e.modifiers ? e.modifiers[y] : pw),
    d =
      be(e.processor) && Pe(e.processor.normalize) ? e.processor.normalize : bw,
    h =
      be(e.processor) && Pe(e.processor.interpolate)
        ? e.processor.interpolate
        : yw,
    _ = be(e.processor) && ie(e.processor.type) ? e.processor.type : _w,
    C = {
      list: a,
      named: u,
      plural: o,
      linked: (y, ...g) => {
        const [E, b] = g;
        let O = "text",
          P = "";
        g.length === 1
          ? we(E)
            ? ((P = E.modifier || P), (O = E.type || O))
            : ie(E) && (P = E || P)
          : g.length === 2 && (ie(E) && (P = E || P), ie(b) && (O = b || O));
        const A = c(y, !0)(C),
          K = O === "vnode" && qe(A) && P ? A[0] : A;
        return P ? f(P)(K, O) : K;
      },
      message: c,
      type: _,
      interpolate: h,
      normalize: d,
      values: tt({}, s, l),
    };
  return C;
}
const ru = () => "",
  nn = (e) => Pe(e);
function iu(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: i,
      messageCompiler: o,
      fallbackLocale: s,
      messages: a,
    } = e,
    [l, u] = ra(...t),
    c = xe(u.missingWarn) ? u.missingWarn : e.missingWarn,
    f = xe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn,
    d = xe(u.escapeParameter) ? u.escapeParameter : e.escapeParameter,
    h = !!u.resolvedMessage,
    _ =
      ie(u.default) || xe(u.default)
        ? xe(u.default)
          ? o
            ? l
            : () => l
          : u.default
        : n
        ? o
          ? l
          : () => l
        : null,
    S = n || (_ != null && (ie(_) || Pe(_))),
    C = ol(e, u);
  d && Cw(u);
  let [y, g, E] = h ? [l, C, a[C] || {}] : wh(e, l, C, s, f, c),
    b = y,
    O = l;
  if (
    (!h && !(ie(b) || Hn(b) || nn(b)) && S && ((b = _), (O = b)),
    !h && (!(ie(b) || Hn(b) || nn(b)) || !ie(g)))
  )
    return i ? Bo : l;
  let P = !1;
  const A = () => {
      P = !0;
    },
    K = nn(b) ? b : Eh(e, l, g, b, O, A);
  if (P) return b;
  const N = Iw(e, g, E, u),
    L = Sw(N),
    q = kw(e, K, L);
  return r ? r(q, l) : q;
}
function Cw(e) {
  qe(e.list)
    ? (e.list = e.list.map((t) => (ie(t) ? Vc(t) : t)))
    : we(e.named) &&
      Object.keys(e.named).forEach((t) => {
        ie(e.named[t]) && (e.named[t] = Vc(e.named[t]));
      });
}
function wh(e, t, n, r, i, o) {
  const { messages: s, onWarn: a, messageResolver: l, localeFallbacker: u } = e,
    c = u(e, r, n);
  let f = {},
    d,
    h = null;
  const _ = "translate";
  for (
    let S = 0;
    S < c.length &&
    ((d = c[S]),
    (f = s[d] || {}),
    (h = l(f, t)) === null && (h = f[t]),
    !(ie(h) || Hn(h) || nn(h)));
    S++
  )
    if (!gw(d, c)) {
      const C = sl(e, t, d, o, _);
      C !== t && (h = C);
    }
  return [h, d, f];
}
function Eh(e, t, n, r, i, o) {
  const { messageCompiler: s, warnHtmlMessage: a } = e;
  if (nn(r)) {
    const u = r;
    return (u.locale = u.locale || n), (u.key = u.key || t), u;
  }
  if (s == null) {
    const u = () => r;
    return (u.locale = n), (u.key = t), u;
  }
  const l = s(r, Tw(e, n, i, r, a, o));
  return (l.locale = n), (l.key = t), (l.source = r), l;
}
function kw(e, t, n) {
  return t(n);
}
function ra(...e) {
  const [t, n, r] = e,
    i = {};
  if (!ie(t) && !Ke(t) && !nn(t) && !Hn(t)) throw tn(en.INVALID_ARGUMENT);
  const o = Ke(t) ? String(t) : (nn(t), t);
  return (
    Ke(n)
      ? (i.plural = n)
      : ie(n)
      ? (i.default = n)
      : be(n) && !Wo(n)
      ? (i.named = n)
      : qe(n) && (i.list = n),
    Ke(r) ? (i.plural = r) : ie(r) ? (i.default = r) : be(r) && tt(i, r),
    [o, i]
  );
}
function Tw(e, t, n, r, i, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: i,
    onError: (s) => {
      throw (o && o(s), s);
    },
    onCacheKey: (s) => my(t, n, s),
  };
}
function Iw(e, t, n, r) {
  const {
      modifiers: i,
      pluralRules: o,
      messageResolver: s,
      fallbackLocale: a,
      fallbackWarn: l,
      missingWarn: u,
      fallbackContext: c,
    } = e,
    d = {
      locale: t,
      modifiers: i,
      pluralRules: o,
      messages: (h, _) => {
        let S = s(n, h);
        if (S == null && (c || _)) {
          const [, , C] = wh(c || e, h, t, a, l, u);
          S = s(C, h);
        }
        if (ie(S) || Hn(S)) {
          let C = !1;
          const g = Eh(e, h, t, S, h, () => {
            C = !0;
          });
          return C ? ru : g;
        } else return nn(S) ? S : ru;
      },
    };
  return (
    e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    Ke(r.plural) && (d.pluralIndex = r.plural),
    d
  );
}
/*!
 * vue-i18n v10.0.4
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const Aw = "10.0.4",
  yt = {
    UNEXPECTED_RETURN_TYPE: Qy,
    INVALID_ARGUMENT: 25,
    MUST_BE_CALL_SETUP_TOP: 26,
    NOT_INSTALLED: 27,
    REQUIRED_VALUE: 28,
    INVALID_VALUE: 29,
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
    NOT_INSTALLED_WITH_PROVIDE: 31,
    UNEXPECTED_ERROR: 32,
    NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34,
  };
function Ot(e, ...t) {
  return Uo(e, null, void 0);
}
const ia = Bt("__translateVNode"),
  oa = Bt("__datetimeParts"),
  sa = Bt("__numberParts"),
  wo = Bt("__enableEmitter"),
  ou = Bt("__disableEmitter"),
  Ow = Bt("__setPluralRules"),
  Nw = Bt("__injectWithOption"),
  aa = Bt("__dispose");
function gi(e) {
  if (!we(e)) return e;
  for (const t in e)
    if (bo(e, t))
      if (!t.includes(".")) we(e[t]) && gi(e[t]);
      else {
        const n = t.split("."),
          r = n.length - 1;
        let i = e,
          o = !1;
        for (let s = 0; s < r; s++) {
          if ((n[s] in i || (i[n[s]] = {}), !we(i[n[s]]))) {
            o = !0;
            break;
          }
          i = i[n[s]];
        }
        o || ((i[n[r]] = e[t]), delete e[t]), we(i[n[r]]) && gi(i[n[r]]);
      }
  return e;
}
function Sh(e, t) {
  const { messages: n, __i18n: r, messageResolver: i, flatJson: o } = t,
    s = be(n)
      ? n
      : qe(r)
      ? {}
      : {
          [e]: {},
        };
  if (
    (qe(r) &&
      r.forEach((a) => {
        if ("locale" in a && "resource" in a) {
          const { locale: l, resource: u } = a;
          l ? ((s[l] = s[l] || {}), zi(u, s[l])) : zi(u, s);
        } else ie(a) && zi(JSON.parse(a), s);
      }),
    i == null && o)
  )
    for (const a in s) bo(s, a) && gi(s[a]);
  return s;
}
function Pw(e) {
  return e.type;
}
function xw(e, t, n) {
  let r = we(t.messages) ? t.messages : {};
  "__i18nGlobal" in n &&
    (r = Sh(e.locale.value, {
      messages: r,
      __i18n: n.__i18nGlobal,
    }));
  const i = Object.keys(r);
  i.length &&
    i.forEach((o) => {
      e.mergeLocaleMessage(o, r[o]);
    });
  {
    if (we(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length &&
        o.forEach((s) => {
          e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
        });
    }
    if (we(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length &&
        o.forEach((s) => {
          e.mergeNumberFormat(s, t.numberFormats[s]);
        });
    }
  }
}
function su(e) {
  return et(Tr, null, e, 0);
}
const au = () => [],
  Lw = () => !1;
let lu = 0;
function cu(e) {
  return (t, n, r, i) => e(n, r, Ie() || void 0, i);
}
function Ch(e = {}) {
  const { __root: t, __injectWithOption: n } = e,
    r = t === void 0,
    i = e.flatJson,
    o = vo ? ue : $a;
  let s = xe(e.inheritLocale) ? e.inheritLocale : !0;
  const a = o(t && s ? t.locale.value : ie(e.locale) ? e.locale : yo),
    l = o(
      t && s
        ? t.fallbackLocale.value
        : ie(e.fallbackLocale) ||
          qe(e.fallbackLocale) ||
          be(e.fallbackLocale) ||
          e.fallbackLocale === !1
        ? e.fallbackLocale
        : a.value
    ),
    u = o(Sh(a.value, e)),
    c = o(
      be(e.datetimeFormats)
        ? e.datetimeFormats
        : {
            [a.value]: {},
          }
    ),
    f = o(
      be(e.numberFormats)
        ? e.numberFormats
        : {
            [a.value]: {},
          }
    );
  let d = t
      ? t.missingWarn
      : xe(e.missingWarn) || _o(e.missingWarn)
      ? e.missingWarn
      : !0,
    h = t
      ? t.fallbackWarn
      : xe(e.fallbackWarn) || _o(e.fallbackWarn)
      ? e.fallbackWarn
      : !0,
    _ = t ? t.fallbackRoot : xe(e.fallbackRoot) ? e.fallbackRoot : !0,
    S = !!e.fallbackFormat,
    C = Pe(e.missing) ? e.missing : null,
    y = Pe(e.missing) ? cu(e.missing) : null,
    g = Pe(e.postTranslation) ? e.postTranslation : null,
    E = t ? t.warnHtmlMessage : xe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    b = !!e.escapeParameter;
  const O = t ? t.modifiers : be(e.modifiers) ? e.modifiers : {};
  let P = e.pluralRules || (t && t.pluralRules),
    A;
  (A = (() => {
    r && Xc(null);
    const k = {
      version: Aw,
      locale: a.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: O,
      pluralRules: P,
      missing: y === null ? void 0 : y,
      missingWarn: d,
      fallbackWarn: h,
      fallbackFormat: S,
      unresolving: !0,
      postTranslation: g === null ? void 0 : g,
      warnHtmlMessage: E,
      escapeParameter: b,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: {
        framework: "vue",
      },
    };
    (k.datetimeFormats = c.value),
      (k.numberFormats = f.value),
      (k.__datetimeFormatters = be(A) ? A.__datetimeFormatters : void 0),
      (k.__numberFormatters = be(A) ? A.__numberFormatters : void 0);
    const R = hw(k);
    return r && Xc(R), R;
  })()),
    Fr(A, a.value, l.value);
  function N() {
    return [a.value, l.value, u.value, c.value, f.value];
  }
  const L = M({
      get: () => a.value,
      set: (k) => {
        (a.value = k), (A.locale = a.value);
      },
    }),
    q = M({
      get: () => l.value,
      set: (k) => {
        (l.value = k), (A.fallbackLocale = l.value), Fr(A, a.value, k);
      },
    }),
    T = M(() => u.value),
    Q = M(() => c.value),
    $ = M(() => f.value);
  function te() {
    return Pe(g) ? g : null;
  }
  function ee(k) {
    (g = k), (A.postTranslation = k);
  }
  function Z() {
    return C;
  }
  function H(k) {
    k !== null && (y = cu(k)), (C = k), (A.missing = y);
  }
  const oe = (k, R, J, se, ve, _e) => {
    N();
    let $e;
    try {
      r || (A.fallbackContext = t ? dw() : void 0), ($e = k(A));
    } finally {
      r || (A.fallbackContext = void 0);
    }
    if (
      (J !== "translate exists" && Ke($e) && $e === Bo) ||
      (J === "translate exists" && !$e)
    ) {
      const [He, Et] = R();
      return t && _ ? se(t) : ve(He);
    } else {
      if (_e($e)) return $e;
      throw Ot(yt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function le(...k) {
    return oe(
      (R) => Reflect.apply(iu, null, [R, ...k]),
      () => ra(...k),
      "translate",
      (R) => Reflect.apply(R.t, R, [...k]),
      (R) => R,
      (R) => ie(R)
    );
  }
  function de(...k) {
    const [R, J, se] = k;
    if (se && !we(se)) throw Ot(yt.INVALID_ARGUMENT);
    return le(
      R,
      J,
      tt(
        {
          resolvedMessage: !0,
        },
        se || {}
      )
    );
  }
  function B(...k) {
    return oe(
      (R) => Reflect.apply(Jc, null, [R, ...k]),
      () => ta(...k),
      "datetime format",
      (R) => Reflect.apply(R.d, R, [...k]),
      () => Gc,
      (R) => ie(R)
    );
  }
  function pe(...k) {
    return oe(
      (R) => Reflect.apply(eu, null, [R, ...k]),
      () => na(...k),
      "number format",
      (R) => Reflect.apply(R.n, R, [...k]),
      () => Gc,
      (R) => ie(R)
    );
  }
  function Ne(k) {
    return k.map((R) => (ie(R) || Ke(R) || xe(R) ? su(String(R)) : R));
  }
  const re = {
    normalize: Ne,
    interpolate: (k) => k,
    type: "vnode",
  };
  function D(...k) {
    return oe(
      (R) => {
        let J;
        const se = R;
        try {
          (se.processor = re), (J = Reflect.apply(iu, null, [se, ...k]));
        } finally {
          se.processor = null;
        }
        return J;
      },
      () => ra(...k),
      "translate",
      (R) => R[ia](...k),
      (R) => [su(R)],
      (R) => qe(R)
    );
  }
  function X(...k) {
    return oe(
      (R) => Reflect.apply(eu, null, [R, ...k]),
      () => na(...k),
      "number format",
      (R) => R[sa](...k),
      au,
      (R) => ie(R) || qe(R)
    );
  }
  function Y(...k) {
    return oe(
      (R) => Reflect.apply(Jc, null, [R, ...k]),
      () => ta(...k),
      "datetime format",
      (R) => R[oa](...k),
      au,
      (R) => ie(R) || qe(R)
    );
  }
  function ne(k) {
    (P = k), (A.pluralRules = P);
  }
  function ye(k, R) {
    return oe(
      () => {
        if (!k) return !1;
        const J = ie(R) ? R : a.value,
          se = w(J),
          ve = A.messageResolver(se, k);
        return Hn(ve) || nn(ve) || ie(ve);
      },
      () => [k],
      "translate exists",
      (J) => Reflect.apply(J.te, J, [k, R]),
      Lw,
      (J) => xe(J)
    );
  }
  function ke(k) {
    let R = null;
    const J = mh(A, l.value, a.value);
    for (let se = 0; se < J.length; se++) {
      const ve = u.value[J[se]] || {},
        _e = A.messageResolver(ve, k);
      if (_e != null) {
        R = _e;
        break;
      }
    }
    return R;
  }
  function p(k) {
    const R = ke(k);
    return R != null ? R : t ? t.tm(k) || {} : {};
  }
  function w(k) {
    return u.value[k] || {};
  }
  function x(k, R) {
    if (i) {
      const J = {
        [k]: R,
      };
      for (const se in J) bo(J, se) && gi(J[se]);
      R = J[k];
    }
    (u.value[k] = R), (A.messages = u.value);
  }
  function U(k, R) {
    u.value[k] = u.value[k] || {};
    const J = {
      [k]: R,
    };
    if (i) for (const se in J) bo(J, se) && gi(J[se]);
    (R = J[k]), zi(R, u.value[k]), (A.messages = u.value);
  }
  function V(k) {
    return c.value[k] || {};
  }
  function m(k, R) {
    (c.value[k] = R), (A.datetimeFormats = c.value), Zc(A, k, R);
  }
  function v(k, R) {
    (c.value[k] = tt(c.value[k] || {}, R)),
      (A.datetimeFormats = c.value),
      Zc(A, k, R);
  }
  function I(k) {
    return f.value[k] || {};
  }
  function F(k, R) {
    (f.value[k] = R), (A.numberFormats = f.value), tu(A, k, R);
  }
  function W(k, R) {
    (f.value[k] = tt(f.value[k] || {}, R)),
      (A.numberFormats = f.value),
      tu(A, k, R);
  }
  lu++,
    t &&
      vo &&
      (fe(t.locale, (k) => {
        s && ((a.value = k), (A.locale = k), Fr(A, a.value, l.value));
      }),
      fe(t.fallbackLocale, (k) => {
        s && ((l.value = k), (A.fallbackLocale = k), Fr(A, a.value, l.value));
      }));
  const G = {
    id: lu,
    locale: L,
    fallbackLocale: q,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(k) {
      (s = k),
        k &&
          t &&
          ((a.value = t.locale.value),
          (l.value = t.fallbackLocale.value),
          Fr(A, a.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: T,
    get modifiers() {
      return O;
    },
    get pluralRules() {
      return P || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(k) {
      (d = k), (A.missingWarn = d);
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(k) {
      (h = k), (A.fallbackWarn = h);
    },
    get fallbackRoot() {
      return _;
    },
    set fallbackRoot(k) {
      _ = k;
    },
    get fallbackFormat() {
      return S;
    },
    set fallbackFormat(k) {
      (S = k), (A.fallbackFormat = S);
    },
    get warnHtmlMessage() {
      return E;
    },
    set warnHtmlMessage(k) {
      (E = k), (A.warnHtmlMessage = k);
    },
    get escapeParameter() {
      return b;
    },
    set escapeParameter(k) {
      (b = k), (A.escapeParameter = k);
    },
    t: le,
    getLocaleMessage: w,
    setLocaleMessage: x,
    mergeLocaleMessage: U,
    getPostTranslationHandler: te,
    setPostTranslationHandler: ee,
    getMissingHandler: Z,
    setMissingHandler: H,
    [Ow]: ne,
  };
  return (
    (G.datetimeFormats = Q),
    (G.numberFormats = $),
    (G.rt = de),
    (G.te = ye),
    (G.tm = p),
    (G.d = B),
    (G.n = pe),
    (G.getDateTimeFormat = V),
    (G.setDateTimeFormat = m),
    (G.mergeDateTimeFormat = v),
    (G.getNumberFormat = I),
    (G.setNumberFormat = F),
    (G.mergeNumberFormat = W),
    (G[Nw] = n),
    (G[ia] = D),
    (G[oa] = Y),
    (G[sa] = X),
    G
  );
}
const kh = "vue-i18n: composer properties",
  ps = {
    "vue-devtools-plugin-vue-i18n": "Vue I18n DevTools",
    "vue-i18n-resource-inspector": "Vue I18n DevTools",
    "vue-i18n-timeline": "Vue I18n",
  },
  Rw = {
    "vue-i18n-resource-inspector": "Search for scopes ...",
  },
  Mw = {
    "vue-i18n-timeline": 16764185,
  };
let la;
async function Dw(e, t) {
  return new Promise((n, r) => {
    try {
      Xa(
        {
          id: "vue-devtools-plugin-vue-i18n",
          label: ps["vue-devtools-plugin-vue-i18n"],
          packageName: "vue-i18n",
          homepage: "https://vue-i18n.intlify.dev",
          logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
          componentStateTypes: [kh],
          app: e,
        },
        (i) => {
          (la = i),
            i.on.visitComponentTree(({ componentInstance: s, treeNode: a }) => {
              Fw(s, a, t);
            }),
            i.on.inspectComponent(
              ({ componentInstance: s, instanceData: a }) => {
                s.vnode.el &&
                  s.vnode.el.__VUE_I18N__ &&
                  a &&
                  (t.mode === "legacy"
                    ? s.vnode.el.__VUE_I18N__ !== t.global.__composer &&
                      uu(a, s.vnode.el.__VUE_I18N__)
                    : uu(a, s.vnode.el.__VUE_I18N__));
              }
            ),
            i.addInspector({
              id: "vue-i18n-resource-inspector",
              label: ps["vue-i18n-resource-inspector"],
              icon: "language",
              treeFilterPlaceholder: Rw["vue-i18n-resource-inspector"],
            }),
            i.on.getInspectorTree((s) => {
              s.app === e &&
                s.inspectorId === "vue-i18n-resource-inspector" &&
                Ww(s, t);
            });
          const o = new Map();
          i.on.getInspectorState(async (s) => {
            if (s.app === e && s.inspectorId === "vue-i18n-resource-inspector")
              if ((i.unhighlightElement(), Bw(s, t), s.nodeId === "global")) {
                if (!o.has(s.app)) {
                  const [a] = await i.getComponentInstances(s.app);
                  o.set(s.app, a);
                }
                i.highlightElement(o.get(s.app));
              } else {
                const a = Uw(s.nodeId, t);
                a && i.highlightElement(a);
              }
          }),
            i.on.editInspectorState((s) => {
              s.app === e &&
                s.inspectorId === "vue-i18n-resource-inspector" &&
                zw(s, t);
            }),
            i.addTimelineLayer({
              id: "vue-i18n-timeline",
              label: ps["vue-i18n-timeline"],
              color: Mw["vue-i18n-timeline"],
            }),
            n(!0);
        }
      );
    } catch (i) {
      console.error(i), r(!1);
    }
  });
}
function Th(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function Fw(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (
    e &&
    e.vnode.el &&
    e.vnode.el.__VUE_I18N__ &&
    e.vnode.el.__VUE_I18N__ !== r
  ) {
    const i = {
      label: `i18n (${Th(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185,
    };
    t.tags.push(i);
  }
}
function uu(e, t) {
  const n = kh;
  e.state.push({
    type: n,
    key: "locale",
    editable: !0,
    value: t.locale.value,
  }),
    e.state.push({
      type: n,
      key: "availableLocales",
      editable: !1,
      value: t.availableLocales,
    }),
    e.state.push({
      type: n,
      key: "fallbackLocale",
      editable: !0,
      value: t.fallbackLocale.value,
    }),
    e.state.push({
      type: n,
      key: "inheritLocale",
      editable: !0,
      value: t.inheritLocale,
    }),
    e.state.push({
      type: n,
      key: "messages",
      editable: !1,
      value: al(t.messages.value),
    }),
    e.state.push({
      type: n,
      key: "datetimeFormats",
      editable: !1,
      value: t.datetimeFormats.value,
    }),
    e.state.push({
      type: n,
      key: "numberFormats",
      editable: !1,
      value: t.numberFormats.value,
    });
}
function al(e) {
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      const r = e[n];
      Pe(r) && "source" in r
        ? (t[n] = qw(r))
        : Hn(r) && r.loc && r.loc.source
        ? (t[n] = r.loc.source)
        : we(r)
        ? (t[n] = al(r))
        : (t[n] = r);
    }),
    t
  );
}
const $w = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;",
};
function jw(e) {
  return e.replace(/[<>"&]/g, Vw);
}
function Vw(e) {
  return $w[e] || e;
}
function qw(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${jw(e.source)}")` : "(?)"}`,
    },
  };
}
function Ww(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope",
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, i] of t.__instances) {
    const o = t.mode === "composition" ? i : i.__composer;
    n !== o &&
      e.rootNodes.push({
        id: o.id.toString(),
        label: `${Th(r)} Scope`,
      });
  }
}
function Uw(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [r, i] of t.__instances.entries())
      if (i.id.toString() === e) {
        n = r;
        break;
      }
  }
  return n;
}
function Ih(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find(
      (r) => r.id.toString() === e
    );
    return n ? (t.mode === "composition" ? n : n.__composer) : null;
  }
}
function Bw(e, t) {
  const n = Ih(e.nodeId, t);
  return n && (e.state = Hw(n)), null;
}
function Hw(e) {
  const t = {},
    n = "Locale related info",
    r = [
      {
        type: n,
        key: "locale",
        editable: !0,
        value: e.locale.value,
      },
      {
        type: n,
        key: "fallbackLocale",
        editable: !0,
        value: e.fallbackLocale.value,
      },
      {
        type: n,
        key: "availableLocales",
        editable: !1,
        value: e.availableLocales,
      },
      {
        type: n,
        key: "inheritLocale",
        editable: !0,
        value: e.inheritLocale,
      },
    ];
  t[n] = r;
  const i = "Locale messages info",
    o = [
      {
        type: i,
        key: "messages",
        editable: !1,
        value: al(e.messages.value),
      },
    ];
  t[i] = o;
  {
    const s = "Datetime formats info",
      a = [
        {
          type: s,
          key: "datetimeFormats",
          editable: !1,
          value: e.datetimeFormats.value,
        },
      ];
    t[s] = a;
    const l = "Datetime formats info",
      u = [
        {
          type: l,
          key: "numberFormats",
          editable: !1,
          value: e.numberFormats.value,
        },
      ];
    t[l] = u;
  }
  return t;
}
function ca(e, t) {
  if (la) {
    let n;
    t && "groupId" in t && ((n = t.groupId), delete t.groupId),
      la.addTimelineEvent({
        layerId: "vue-i18n-timeline",
        event: {
          title: e,
          groupId: n,
          time: Date.now(),
          meta: {},
          data: t || {},
          logType:
            e === "compile-error"
              ? "error"
              : e === "fallback" || e === "missing"
              ? "warning"
              : "default",
        },
      });
  }
}
function zw(e, t) {
  const n = Ih(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && ie(e.state.value)
      ? (n.locale.value = e.state.value)
      : r === "fallbackLocale" &&
        (ie(e.state.value) || qe(e.state.value) || we(e.state.value))
      ? (n.fallbackLocale.value = e.state.value)
      : r === "inheritLocale" &&
        xe(e.state.value) &&
        (n.inheritLocale = e.state.value);
  }
}
const ll = {
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
function Kw({ slots: e }, t) {
  return t.length === 1 && t[0] === "default"
    ? (e.default ? e.default() : []).reduce(
        (r, i) => [...r, ...(i.type === Ye ? i.children : [i])],
        []
      )
    : t.reduce((n, r) => {
        const i = e[r];
        return i && (n[r] = i()), n;
      }, {});
}
function Ah() {
  return Ye;
}
const Gw = Kn({
    name: "i18n-t",
    props: tt(
      {
        keypath: {
          type: String,
          required: !0,
        },
        plural: {
          type: [Number, String],
          validator: (e) => Ke(e) || !isNaN(e),
        },
      },
      ll
    ),
    setup(e, t) {
      const { slots: n, attrs: r } = t,
        i =
          e.i18n ||
          Ho({
            useScope: e.scope,
            __useComponent: !0,
          });
      return () => {
        const o = Object.keys(n).filter((f) => f !== "_"),
          s = {};
        e.locale && (s.locale = e.locale),
          e.plural !== void 0 &&
            (s.plural = ie(e.plural) ? +e.plural : e.plural);
        const a = Kw(t, o),
          l = i[ia](e.keypath, a, s),
          u = tt({}, r),
          c = ie(e.tag) || we(e.tag) ? e.tag : Ah();
        return j(c, u, l);
      };
    },
  }),
  fu = Gw;
function Qw(e) {
  return qe(e) && !ie(e[0]);
}
function Oh(e, t, n, r) {
  const { slots: i, attrs: o } = t;
  return () => {
    const s = {
      part: !0,
    };
    let a = {};
    e.locale && (s.locale = e.locale),
      ie(e.format)
        ? (s.key = e.format)
        : we(e.format) &&
          (ie(e.format.key) && (s.key = e.format.key),
          (a = Object.keys(e.format).reduce(
            (d, h) =>
              n.includes(h)
                ? tt({}, d, {
                    [h]: e.format[h],
                  })
                : d,
            {}
          )));
    const l = r(e.value, s, a);
    let u = [s.key];
    qe(l)
      ? (u = l.map((d, h) => {
          const _ = i[d.type],
            S = _
              ? _({
                  [d.type]: d.value,
                  index: h,
                  parts: l,
                })
              : [d.value];
          return Qw(S) && (S[0].key = `${d.type}-${h}`), S;
        }))
      : ie(l) && (u = [l]);
    const c = tt({}, o),
      f = ie(e.tag) || we(e.tag) ? e.tag : Ah();
    return j(f, c, u);
  };
}
const Xw = Kn({
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
      ll
    ),
    setup(e, t) {
      const n =
        e.i18n ||
        Ho({
          useScope: e.scope,
          __useComponent: !0,
        });
      return Oh(e, t, yh, (...r) => n[sa](...r));
    },
  }),
  du = Xw,
  Yw = Kn({
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
      ll
    ),
    setup(e, t) {
      const n =
        e.i18n ||
        Ho({
          useScope: e.scope,
          __useComponent: !0,
        });
      return Oh(e, t, bh, (...r) => n[oa](...r));
    },
  }),
  hu = Yw;
function Jw(e, t) {
  const n = e;
  if (e.mode === "composition") return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function Zw(e) {
  const t = (s) => {
    const { instance: a, value: l } = s;
    if (!a || !a.$) throw Ot(yt.UNEXPECTED_ERROR);
    const u = Jw(e, a.$),
      c = mu(l);
    return [Reflect.apply(u.t, u, [...gu(c)]), u];
  };
  return {
    created: (s, a) => {
      const [l, u] = t(a);
      vo &&
        e.global === u &&
        (s.__i18nWatcher = fe(u.locale, () => {
          a.instance && a.instance.$forceUpdate();
        })),
        (s.__composer = u),
        (s.textContent = l);
    },
    unmounted: (s) => {
      vo &&
        s.__i18nWatcher &&
        (s.__i18nWatcher(), (s.__i18nWatcher = void 0), delete s.__i18nWatcher),
        s.__composer && ((s.__composer = void 0), delete s.__composer);
    },
    beforeUpdate: (s, { value: a }) => {
      if (s.__composer) {
        const l = s.__composer,
          u = mu(a);
        s.textContent = Reflect.apply(l.t, l, [...gu(u)]);
      }
    },
    getSSRProps: (s) => {
      const [a] = t(s);
      return {
        textContent: a,
      };
    },
  };
}
function mu(e) {
  if (ie(e))
    return {
      path: e,
    };
  if (be(e)) {
    if (!("path" in e)) throw Ot(yt.REQUIRED_VALUE, "path");
    return e;
  } else throw Ot(yt.INVALID_VALUE);
}
function gu(e) {
  const { path: t, locale: n, args: r, choice: i, plural: o } = e,
    s = {},
    a = r || {};
  return (
    ie(n) && (s.locale = n),
    Ke(i) && (s.plural = i),
    Ke(o) && (s.plural = o),
    [t, a, s]
  );
}
function e0(e, t, ...n) {
  const r = be(n[0]) ? n[0] : {};
  (xe(r.globalInstall) ? r.globalInstall : !0) &&
    ([fu.name, "I18nT"].forEach((o) => e.component(o, fu)),
    [du.name, "I18nN"].forEach((o) => e.component(o, du)),
    [hu.name, "I18nD"].forEach((o) => e.component(o, hu))),
    e.directive("t", Zw(t));
}
const t0 = Bt("global-vue-i18n");
function sT(e = {}, t) {
  const n = xe(e.globalInjection) ? e.globalInjection : !0,
    r = new Map(),
    [i, o] = n0(e),
    s = Bt("");
  function a(f) {
    return r.get(f) || null;
  }
  function l(f, d) {
    r.set(f, d);
  }
  function u(f) {
    r.delete(f);
  }
  const c = {
    get mode() {
      return "composition";
    },
    async install(f, ...d) {
      if (
        ((f.__VUE_I18N__ = c),
        (f.__VUE_I18N_SYMBOL__ = s),
        f.provide(f.__VUE_I18N_SYMBOL__, c),
        be(d[0]))
      ) {
        const S = d[0];
        (c.__composerExtend = S.__composerExtend),
          (c.__vueI18nExtend = S.__vueI18nExtend);
      }
      let h = null;
      n && (h = u0(f, c.global)), e0(f, c, ...d);
      const _ = f.unmount;
      f.unmount = () => {
        h && h(), c.dispose(), _();
      };
      {
        if (!(await Dw(f, c))) throw Ot(yt.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
        const C = hh();
        {
          const y = o;
          y[wo] && y[wo](C);
        }
        C.on("*", ca);
      }
    },
    get global() {
      return o;
    },
    dispose() {
      i.stop();
    },
    __instances: r,
    __getInstance: a,
    __setInstance: l,
    __deleteInstance: u,
  };
  return c;
}
function Ho(e = {}) {
  const t = Ie();
  if (t == null) throw Ot(yt.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw Ot(yt.NOT_INSTALLED);
  const n = r0(t),
    r = o0(n),
    i = Pw(t),
    o = i0(e, i);
  if (o === "global") return xw(r, e, i), r;
  if (o === "parent") {
    let l = s0(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let a = s.__getInstance(t);
  if (a == null) {
    const l = tt({}, e);
    "__i18n" in i && (l.__i18n = i.__i18n),
      r && (l.__root = r),
      (a = Ch(l)),
      s.__composerExtend && (a[aa] = s.__composerExtend(a)),
      l0(s, t, a),
      s.__setInstance(t, a);
  }
  return a;
}
function n0(e, t, n) {
  const r = cf(),
    i = r.run(() => Ch(e));
  if (i == null) throw Ot(yt.UNEXPECTED_ERROR);
  return [r, i];
}
function r0(e) {
  const t = ut(e.isCE ? t0 : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Ot(e.isCE ? yt.NOT_INSTALLED_WITH_PROVIDE : yt.UNEXPECTED_ERROR);
  return t;
}
function i0(e, t) {
  return Wo(e)
    ? "__i18n" in t
      ? "local"
      : "global"
    : e.useScope
    ? e.useScope
    : "local";
}
function o0(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function s0(e, t, n = !1) {
  let r = null;
  const i = t.root;
  let o = a0(t, n);
  for (; o != null; ) {
    const s = e;
    if (
      (e.mode === "composition" && (r = s.__getInstance(o)),
      r != null || i === o)
    )
      break;
    o = o.parent;
  }
  return r;
}
function a0(e, t = !1) {
  return e == null ? null : (t && e.vnode.ctx) || e.parent;
}
function l0(e, t, n) {
  let r = null;
  Nt(() => {
    if (t.vnode.el) {
      (t.vnode.el.__VUE_I18N__ = n), (r = hh());
      const i = n;
      i[wo] && i[wo](r), r.on("*", ca);
    }
  }, t),
    Do(() => {
      const i = n;
      t.vnode.el &&
        t.vnode.el.__VUE_I18N__ &&
        (r && r.off("*", ca), i[ou] && i[ou](), delete t.vnode.el.__VUE_I18N__),
        e.__deleteInstance(t);
      const o = i[aa];
      o && (o(), delete i[aa]);
    }, t);
}
const c0 = ["locale", "fallbackLocale", "availableLocales"],
  pu = ["t", "rt", "d", "n", "tm", "te"];
function u0(e, t) {
  const n = Object.create(null);
  return (
    c0.forEach((i) => {
      const o = Object.getOwnPropertyDescriptor(t, i);
      if (!o) throw Ot(yt.UNEXPECTED_ERROR);
      const s = De(o.value)
        ? {
            get() {
              return o.value.value;
            },
            set(a) {
              o.value.value = a;
            },
          }
        : {
            get() {
              return o.get && o.get();
            },
          };
      Object.defineProperty(n, i, s);
    }),
    (e.config.globalProperties.$i18n = n),
    pu.forEach((i) => {
      const o = Object.getOwnPropertyDescriptor(t, i);
      if (!o || !o.value) throw Ot(yt.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${i}`, o);
    }),
    () => {
      delete e.config.globalProperties.$i18n,
        pu.forEach((i) => {
          delete e.config.globalProperties[`$${i}`];
        });
    }
  );
}
cw(Gy);
uw(sw);
fw(mh);
function f0() {
  return ut(Ld);
}
function Er(e) {
  return uf() ? (jg(e), !0) : !1;
}
function On(e) {
  return typeof e == "function" ? e() : Zt(e);
}
const Eo = typeof window != "undefined" && typeof document != "undefined";
typeof WorkerGlobalScope != "undefined" &&
  globalThis instanceof WorkerGlobalScope;
const Nh = (e) => e != null,
  d0 = Object.prototype.toString,
  h0 = (e) => d0.call(e) === "[object Object]",
  gr = () => {};
function Ph(e) {
  return Ie();
}
function m0(...e) {
  if (e.length !== 1) return fp(...e);
  const t = e[0];
  return typeof t == "function"
    ? Ma(
        lp(() => ({
          get: t,
          set: gr,
        }))
      )
    : ue(t);
}
function g0(e, t) {
  Ph() && wt(e, t);
}
function p0(e, t = !0, n) {
  Ph() ? Nt(e, n) : t ? e() : dt(e);
}
function aT(e, t = 1e3, n = {}) {
  const { immediate: r = !0, immediateCallback: i = !1 } = n;
  let o = null;
  const s = ue(!1);
  function a() {
    o && (clearInterval(o), (o = null));
  }
  function l() {
    (s.value = !1), a();
  }
  function u() {
    const c = On(t);
    c <= 0 ||
      ((s.value = !0), i && e(), a(), s.value && (o = setInterval(e, c)));
  }
  if ((r && Eo && u(), De(t) || typeof t == "function")) {
    const c = fe(t, () => {
      s.value && Eo && u();
    });
    Er(c);
  }
  return (
    Er(l),
    {
      isActive: s,
      pause: l,
      resume: u,
    }
  );
}
function lT(e, t, n) {
  let r;
  De(n)
    ? (r = {
        evaluating: n,
      })
    : (r = {});
  const {
      lazy: i = !1,
      evaluating: o = void 0,
      shallow: s = !0,
      onError: a = gr,
    } = r,
    l = ue(!i),
    u = s ? $a(t) : ue(t);
  let c = 0;
  return (
    za(async (f) => {
      if (!l.value) return;
      c++;
      const d = c;
      let h = !1;
      o &&
        Promise.resolve().then(() => {
          o.value = !0;
        });
      try {
        const _ = await e((S) => {
          f(() => {
            o && (o.value = !1), h || S();
          });
        });
        d === c && (u.value = _);
      } catch (_) {
        a(_);
      } finally {
        o && d === c && (o.value = !1), (h = !0);
      }
    }),
    i ? M(() => ((l.value = !0), u.value)) : u
  );
}
const Nr = Eo ? window : void 0,
  v0 = Eo ? window.document : void 0;
function ri(e) {
  var t;
  const n = On(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function xh(...e) {
  let t, n, r, i;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([n, r, i] = e), (t = Nr))
      : ([t, n, r, i] = e),
    !t)
  )
    return gr;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [],
    s = () => {
      o.forEach((c) => c()), (o.length = 0);
    },
    a = (c, f, d, h) => (
      c.addEventListener(f, d, h), () => c.removeEventListener(f, d, h)
    ),
    l = fe(
      () => [ri(t), On(i)],
      ([c, f]) => {
        if ((s(), !c)) return;
        const d = h0(f)
          ? {
              ...f,
            }
          : f;
        o.push(...n.flatMap((h) => r.map((_) => a(c, h, _, d))));
      },
      {
        immediate: !0,
        flush: "post",
      }
    ),
    u = () => {
      l(), s();
    };
  return Er(u), u;
}
function _0(e) {
  return typeof e == "function"
    ? e
    : typeof e == "string"
    ? (t) => t.key === e
    : Array.isArray(e)
    ? (t) => e.includes(t.key)
    : () => !0;
}
function cT(...e) {
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
      target: i = Nr,
      eventName: o = "keydown",
      passive: s = !1,
      dedupe: a = !1,
    } = r,
    l = _0(t);
  return xh(
    i,
    o,
    (c) => {
      (c.repeat && On(a)) || (l(c) && n(c));
    },
    s
  );
}
function b0() {
  const e = ue(!1),
    t = Ie();
  return (
    t &&
      Nt(() => {
        e.value = !0;
      }, t),
    e
  );
}
function cl(e) {
  const t = b0();
  return M(() => (t.value, !!e()));
}
function y0(e, t, n = {}) {
  const { window: r = Nr, ...i } = n;
  let o;
  const s = cl(() => r && "MutationObserver" in r),
    a = () => {
      o && (o.disconnect(), (o = void 0));
    },
    l = M(() => {
      const d = On(e),
        h = (Array.isArray(d) ? d : [d]).map(ri).filter(Nh);
      return new Set(h);
    }),
    u = fe(
      () => l.value,
      (d) => {
        a(),
          s.value &&
            d.size &&
            ((o = new MutationObserver(t)), d.forEach((h) => o.observe(h, i)));
      },
      {
        immediate: !0,
        flush: "post",
      }
    ),
    c = () => (o == null ? void 0 : o.takeRecords()),
    f = () => {
      u(), a();
    };
  return (
    Er(f),
    {
      isSupported: s,
      stop: f,
      takeRecords: c,
    }
  );
}
function w0(e, t = {}) {
  const { window: n = Nr } = t,
    r = cl(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let i;
  const o = ue(!1),
    s = (u) => {
      o.value = u.matches;
    },
    a = () => {
      i &&
        ("removeEventListener" in i
          ? i.removeEventListener("change", s)
          : i.removeListener(s));
    },
    l = za(() => {
      r.value &&
        (a(),
        (i = n.matchMedia(On(e))),
        "addEventListener" in i
          ? i.addEventListener("change", s)
          : i.addListener(s),
        (o.value = i.matches));
    });
  return (
    Er(() => {
      l(), a(), (i = void 0);
    }),
    o
  );
}
function uT(e, t, n = {}) {
  const {
      root: r,
      rootMargin: i = "0px",
      threshold: o = 0,
      window: s = Nr,
      immediate: a = !0,
    } = n,
    l = cl(() => s && "IntersectionObserver" in s),
    u = M(() => {
      const _ = On(e);
      return (Array.isArray(_) ? _ : [_]).map(ri).filter(Nh);
    });
  let c = gr;
  const f = ue(a),
    d = l.value
      ? fe(
          () => [u.value, ri(r), f.value],
          ([_, S]) => {
            if ((c(), !f.value || !_.length)) return;
            const C = new IntersectionObserver(t, {
              root: ri(S),
              rootMargin: i,
              threshold: o,
            });
            _.forEach((y) => y && C.observe(y)),
              (c = () => {
                C.disconnect(), (c = gr);
              });
          },
          {
            immediate: a,
            flush: "post",
          }
        )
      : gr,
    h = () => {
      c(), d(), (f.value = !1);
    };
  return (
    Er(h),
    {
      isSupported: l,
      isActive: f,
      pause() {
        c(), (f.value = !1);
      },
      resume() {
        f.value = !0;
      },
      stop: h,
    }
  );
}
function E0(e = null, t = {}) {
  var n, r, i;
  const { document: o = v0, restoreOnUnmount: s = (f) => f } = t,
    a = (n = o == null ? void 0 : o.title) != null ? n : "",
    l = m0(
      (r = e != null ? e : o == null ? void 0 : o.title) != null ? r : null
    ),
    u = e && typeof e == "function";
  function c(f) {
    if (!("titleTemplate" in t)) return f;
    const d = t.titleTemplate || "%s";
    return typeof d == "function" ? d(f) : On(d).replace(/%s/g, f);
  }
  return (
    fe(
      l,
      (f, d) => {
        f !== d && o && (o.title = c(typeof f == "string" ? f : ""));
      },
      {
        immediate: !0,
      }
    ),
    t.observe &&
      !t.titleTemplate &&
      o &&
      !u &&
      y0(
        (i = o.head) == null ? void 0 : i.querySelector("title"),
        () => {
          o && o.title !== l.value && (l.value = c(o.title));
        },
        {
          childList: !0,
        }
      ),
    g0(() => {
      if (s) {
        const f = s(a, l.value || "");
        f != null && o && (o.title = f);
      }
    }),
    l
  );
}
function fT(e = {}) {
  const {
      window: t = Nr,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: r = Number.POSITIVE_INFINITY,
      listenOrientation: i = !0,
      includeScrollbar: o = !0,
      type: s = "inner",
    } = e,
    a = ue(n),
    l = ue(r),
    u = () => {
      t &&
        (s === "outer"
          ? ((a.value = t.outerWidth), (l.value = t.outerHeight))
          : o
          ? ((a.value = t.innerWidth), (l.value = t.innerHeight))
          : ((a.value = t.document.documentElement.clientWidth),
            (l.value = t.document.documentElement.clientHeight)));
    };
  if (
    (u(),
    p0(u),
    xh("resize", u, {
      passive: !0,
    }),
    i)
  ) {
    const c = w0("(orientation: portrait)");
    fe(c, () => u());
  }
  return {
    width: a,
    height: l,
  };
}
function Lh(e) {
  return e.indexOf("OS 12_2 like Mac OS X") == -1;
}
function ul(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const i of n) {
    const o = e[i],
      s = t[i],
      a = vu(o) && vu(s);
    if ((a && !ul(o, s)) || (!a && o !== s)) return !1;
  }
  return !0;
}
function vu(e) {
  return e != null && typeof e == "object";
}
function S0(e, t = 300) {
  let n;
  return (...r) => {
    clearTimeout(n),
      (n = setTimeout(() => {
        e.apply(this, r);
      }, t));
  };
}
function Rh(e) {
  if (e) {
    let n = e.match(/<img.*?src="(.*?)".*?>/);
    n && (e = e.replace(n[0], ""));
  }
  let t = "";
  return e && (t = Vh(e)), t;
}
function C0(e, t) {
  if (e) return t;
  {
    const n = [],
      r = [];
    for (let i of t) {
      const o = ua(i);
      n.includes(o) || (n.push(o), r.push(i));
    }
    return r;
  }
}
function ua(e) {
  const t = {};
  return (
    e.text && (t.text = e.text),
    e.image && (t.image = e.image),
    JSON.stringify(t)
  );
}
function k0(e, t) {
  const n = [];
  for (let r = 0; r < e.length; r++)
    if ((ua(t) == ua(e[r]) && n.push(r), t.id == e[r].id)) return n[0] != r;
  return !1;
}
function T0(e) {
  if (!e) return [];
  let t = e.split(/<div>|<\/div>|<br>|<p>/),
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
      let i = r;
      return (
        n.forEach((o) => {
          i = i.replace(o, "");
        }),
        Dh(Rh(i), Mh(i))
      );
    })
    .filter((r) => r.text || r.image);
}
function Mh(e) {
  let t = "";
  if (e) {
    let n = e.match(/<img.*?src="(.*?)".*?>/);
    n && (t = n[1]);
  }
  return t;
}
function Dh(e, t, n, r, i, o) {
  const s = {};
  return (
    e && (s.text = e),
    t && (s.image = t),
    n && (s.color = n),
    r && (s.weight = r),
    i && (s.sound = i),
    o && (s.message = o),
    s
  );
}
function Fh(e) {
  const t = e.slice(0);
  for (var n = t.length - 1; n > 0; n--) {
    var r = Math.floor(Math.random() * (n + 1)),
      i = t[n];
    (t[n] = t[r]), (t[r] = i);
  }
  return t;
}
function I0(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function A0(e, t) {
  return t
    ? e.reduce(function (n, r) {
        return n + (r.trim() == t.trim() ? 1 : 0);
      }, 0)
    : 0;
}
function fa(e) {
  return e.slice(0).sort((t, n) => {
    const r = t.text || "",
      i = n.text || "";
    return r.localeCompare(i, "en", {
      numeric: !0,
      sensitivity: "base",
    });
  });
}
function O0(e) {
  let t = e;
  return (
    (t = t.replace(/\//g, "⁄")),
    t == ".." && (t = ".. "),
    t == "." && (t = ". "),
    t == "" && (t = "?"),
    t.length > 100 && (t = t.substring(0, 97) + "..."),
    t
  );
}
function N0(e, t) {
  return (
    e || (e = []),
    t || (t = []),
    {
      additions: t.filter((n) => !e.includes(n)),
      removals: e.filter((n) => !t.includes(n)),
    }
  );
}
function $h(e, t, n) {
  location.host.startsWith("localhost") ||
    location.host.startsWith("test") ||
    (typeof gtag != "undefined" &&
      gtag("event", t, {
        event_label: n,
      }));
}
function jh(e, t) {
  const n = t.toString(),
    r = navigator.userAgent;
  $h(e, n, r), console.error(n);
}
function fl(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function P0(e) {
  let t = e.replace(/<mark>/g, "||mark||").replace(/<\/mark>/g, "||/mark||");
  return fl(t)
    .replace(/\|\|mark\|\|/g, "<mark>")
    .replace(/\|\|\/mark\|\|/g, "</mark>");
}
function Vh(e) {
  return e
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}
function x0(e) {
  return e.replace(/<.*?>/g, "");
}
function dl() {
  let t = "";
  const n = "abcdefghjkmnpqrstuvwxyz23456789";
  for (let r = 0; r < 10; r++)
    t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}
function We(e) {
  return !e || !e.map ? [] : e.map((t) => ((t.id = t.id || dl()), t));
}
function L0(e) {
  let t = "",
    n = "";
  return (
    e &&
      (e.image &&
        (t = `<img src="${e.image}" style="height:25px" style="font-size:1rem;">`),
      e.text && ((n = fl(e.text)), (n = n.replace(/^ +$/g, "&nbsp;")))),
    "<div>" + t + n + "</div>"
  );
}
function R0(e, t) {
  return (
    (e = Math.ceil(e)),
    (t = Math.floor(t)),
    Math.floor(Math.random() * (t - e + 1) + e)
  );
}
function M0(e) {
  return e == "en" ? "" : e;
}
function D0(e, t) {
  return (
    "https://docs.google.com/forms/d/e/1FAIpQLSeryxMCuDjQUGawpgIeMwSY-81fqwdbpVTIOyh1-WJG5LCeeQ/viewform?entry.1064273724=" +
    encodeURIComponent(e) +
    "&entry.558479038=" +
    t
  );
}
function F0(e) {
  let t = 0;
  return (
    e.forEach((n) => {
      n.weight &&
        (n.enabled == !0 || !n.hasOwnProperty("enabled")) &&
        (t += n.weight);
    }),
    t
  );
}
function qh(e, t) {
  return e && (!t || t.toLowerCase() == "#ffffff") ? "#121212" : t || "#ffffff";
}
function $0(e) {
  if (!e) return "#000000";
  let t = e.charAt(0) === "#" ? e.substring(1, 7) : e,
    n = parseInt(t.substring(0, 2), 16),
    r = parseInt(t.substring(2, 4), 16),
    i = parseInt(t.substring(4, 6), 16),
    s = [n / 255, r / 255, i / 255].map((l) =>
      l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
    );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] > 0.179
    ? "#000000"
    : "#FFFFFF";
}
function j0(e) {
  return new Promise((t) => setTimeout(t, e));
}
function V0(e, t) {
  return Wh(Uh(e), t);
}
function Wh(e, t, n = Date.now()) {
  if (!e) return "-";
  t || (t = "en");
  const r = Math.floor((n - e) / 1e3),
    i = [
      Math.floor(r / 31536e3),
      Math.floor(r / 2592e3),
      Math.floor(r / 604800),
      Math.floor(r / 86400),
      Math.floor(r / 3600),
      Math.floor(r / 60),
      r,
    ],
    o = ["year", "month", "week", "day", "hour", "minute", "second"],
    s = new Intl.RelativeTimeFormat(t, {
      numeric: "auto",
    });
  for (const a in i) if (i[a] >= 1) return s.format(-i[a], o[a]);
  return "moments ago";
}
function Uh(e) {
  if (e && e._seconds) return e._seconds * 1e3;
  if (e && e.seconds) return e.seconds * 1e3;
  if (e && Number.isInteger(e)) return e;
}
function q0(e) {
  if (Bh(e)) return "$ " + e.toFixed(2);
}
function W0(e) {
  if ((e || e == 0) && e.toLocaleString) return e.toLocaleString();
}
function U0(e) {
  return Bh(e) && e >= 0 ? Math.round(e * 100) + " %" : "?";
}
function Bh(e) {
  return Number.isFinite(e);
}
function B0() {
  return window.location !== window.parent.location;
}
function zo(e) {
  return location.host.startsWith("localhost")
    ? `http://localhost:8081/${e}`
    : `/${e}`;
}
function hl(e) {
  return ["spin-only", "copyable", "gallery"].includes(e);
}
function H0(e, t) {
  return Object.entries(e)
    .sort((r, i) =>
      r[0] === "sounds.Sound effects"
        ? -1
        : i[0] === "sounds.Sound effects"
        ? 1
        : r[0] === "sounds.Winter holidays" && t > 9
        ? -1
        : i[0] === "sounds.Winter holidays" && t > 9
        ? 1
        : 0
    )
    .reduce((r, i) => ((r[i[0]] = i[1]), r), {});
}
function z0(e) {
  return e instanceof Error
    ? e.message
    : typeof e == "string"
    ? e
    : e instanceof Object
    ? e.toString()
    : "An unknown error occurred";
}
async function K0(e) {
  const { extractColors: t } = await me(async () => {
      const { extractColors: r } = await import("./extract-colors-v319.js");
      return {
        extractColors: r,
      };
    }, []),
    n = new Image();
  return (
    (n.src = e),
    new Promise((r) => {
      n.onload = async () => {
        const i = await t(n);
        r(i.map((o) => o.hex).slice(0, 6));
      };
    })
  );
}
const dT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        addIdsIfNotThere: We,
        browserCanHandlePersistance: Lh,
        createDuringSpinSoundsObject: H0,
        createEntry: Dh,
        debounce: S0,
        dedupeEntries: C0,
        deepObjectsEqual: ul,
        dollaramount: q0,
        entryIsDuplicate: k0,
        escapeHtml: fl,
        escapeHtmlExceptMarkTags: P0,
        extractColors: K0,
        extractImage: Mh,
        extractText: Rh,
        firestoremilliseconds: Uh,
        getApiUrl: zo,
        getArrayDiff: N0,
        getEntriesFromHtml: T0,
        getFeedbackFormUrl: D0,
        getMessageFromError: z0,
        getNewEntryId: dl,
        getNonEnglishLocale: M0,
        getOccurences: A0,
        getPageBackgroundColor: qh,
        getRandomInt: R0,
        getRandomItemFromArray: I0,
        getTextColor: $0,
        getTimeAgo: V0,
        getTotalWeight: F0,
        isPublicShareMode: hl,
        localestring: W0,
        pageIsInIframe: B0,
        percent: U0,
        removeHtml: x0,
        renderEntry: L0,
        sanitizeWheelTitle: O0,
        shuffleArray: Fh,
        sleep: j0,
        sortWheelEntries: fa,
        timeago: Wh,
        trackEvent: $h,
        trackException: jh,
        unescapeHtml: Vh,
      },
      Symbol.toStringTag,
      {
        value: "Module",
      }
    )
  ),
  G0 = Kn({
    __name: "App",
    setup(e, { expose: t }) {
      var _;
      t(),
        (_ = document.querySelector("#preload-static-content")) == null ||
          _.remove();
      const n = Qb(),
        r = Xb(),
        i = f0(),
        { t: o, locale: s } = Ho(),
        a = M(() =>
          n.path.includes("faq")
            ? "FAQ"
            : n.path.includes("reviews")
            ? "Reviews & tutorials"
            : n.path.includes("classroom")
            ? "Classroom"
            : n.path.includes("privacy")
            ? "Privacy policy"
            : n.path.includes("changelog")
            ? "Changelog"
            : n.path.includes("export")
            ? "Export"
            : n.path.includes("admin")
            ? "Admin"
            : n.path.includes("gallery")
            ? o("toolbar.Gallery")
            : r.getters.wheelConfig.title
            ? r.getters.wheelConfig.title
            : "Wheel of Names | " + o("app.Random name picker")
        );
      E0(a);
      const l = M(() => r.getters.wheelConfig),
        u = M(
          () =>
            ![
              "faq",
              "reviews",
              "classroom",
              "privacy",
              "changelog",
              "admin",
              "gallery",
            ].find((C) => n.path.includes(C))
        );
      fe(
        () => l.value.pageBackgroundColor,
        () => {
          c(i.dark.isActive, l.value.pageBackgroundColor);
        }
      ),
        fe(
          () => i.dark.isActive,
          () => {
            c(i.dark.isActive, l.value.pageBackgroundColor);
          }
        ),
        fe(
          () => n.path,
          () => {
            c(i.dark.isActive, l.value.pageBackgroundColor);
          }
        );
      function c(S, C) {
        u.value ? (C = qh(S, C)) : S ? (C = "#121212") : (C = "#FFFFFF"),
          (document.documentElement.style.backgroundColor = C),
          (document.body.style.backgroundColor = C);
      }
      fe(
        () => n.path,
        () => {
          f(), d();
        },
        {
          immediate: !0,
        }
      ),
        fe(
          () => s.value,
          () => {
            f(), d();
          }
        );
      function f() {
        let S = "en";
        u.value && (S = s.value),
          document.documentElement.setAttribute("lang", S);
      }
      function d() {
        var C;
        let S = "";
        u.value && (S = o("app.Free and easy to use")),
          (C = document.querySelector('meta[name="description"]')) == null ||
            C.setAttribute("content", S);
      }
      const h = {
        route: n,
        store: r,
        $q: i,
        t: o,
        locale: s,
        computedTitle: a,
        wheelConfig: l,
        isOnWheelPage: u,
        updatePageColor: c,
        setDocumentLang: f,
        setDocMetaDescription: d,
      };
      return (
        Object.defineProperty(h, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        h
      );
    },
  }),
  Q0 = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, i] of t) n[r] = i;
    return n;
  };
function X0(e, t, n, r, i, o) {
  const s = Fp("router-view");
  return ao(), lo(s);
}
const Y0 = Q0(G0, [
  ["render", X0],
  ["__file", "App.vue"],
]);
function hT(e) {
  return e;
}
const J0 = {
  XS: 0.01,
  S: 0.2,
  M: 0.3,
  L: 0.4,
  XL: 0.5,
  XXL: 0.6,
};
async function Z0(e) {
  return new Promise((t) => {
    const n = new Image();
    (n.onload = function () {
      const r = sE(n.width, n.height, 200);
      zh(r, n), t(gl(r, e, 0.5));
    }),
      (n.src = e);
  });
}
async function eE(e) {
  return new Promise((t) => {
    const n = new Image();
    (n.onload = () => {
      const r = ml(370);
      aE(n) || zh(r, n, "blur(4px)"), Kh(r, n, !0), t(gl(r, null, 0.5));
    }),
      (n.src = e);
  });
}
async function tE(e) {
  return new Promise((t) => {
    const n = new Image();
    (n.onload = () => {
      const r = ml(700);
      Kh(r, n, !1), t(gl(r, null, 0.7));
    }),
      (n.src = e);
  });
}
function ar(e) {
  const t = document.createElement("canvas");
  return (t.width = e.canvas.width), (t.height = e.canvas.height), t;
}
function pi(e) {
  const t = document.createElement("canvas").getContext("2d");
  t.drawImage(e, 0, 0);
  const n = t.getImageData(0, 0, 1, 1).data;
  return cE(n[0], n[1], n[2]) ? "#FFFFFFFF" : uE(n[0], n[1], n[2], n[3]);
}
function Hh(e) {
  const t = e.match(/#\w\w\w\w\w\w(\w\w)/);
  return t && t[1] === "00";
}
function nE(e) {
  const n = ml(300),
    r = n.getContext("2d");
  (r.fillStyle = "white"),
    r.fillRect(0, 0, 300, 300),
    (r.fillStyle = "black"),
    (r.textBaseline = "middle"),
    (r.textAlign = "center");
  const i = 300 * 0.9;
  return (
    oE(r, e, i),
    r.fillText(e, 300 / 2, 300 / 2, i),
    n.toDataURL("image/webp", 0.5)
  );
}
function rE(e) {
  return new Promise(async (t) => {
    const n = new Image();
    n.setAttribute("crossOrigin", "anonymous"),
      (n.onload = () => t(n)),
      (n.src = e);
  });
}
function iE(e) {
  return pi(e).slice(7) === "00";
}
function oE(e, t, n) {
  for (
    let r = Math.round(n / 2);
    r >= n / 20 &&
    ((e.font = `${r}px Quicksand, sans-serif`), !(e.measureText(t).width <= n));
    r--
  );
}
function sE(e, t, n) {
  const r = n / e,
    i = n / t,
    o = Math.max(r, i),
    s = document.createElement("canvas");
  return (s.width = e * o), (s.height = t * o), s;
}
function ml(e) {
  const t = document.createElement("canvas");
  return (t.width = e), (t.height = e), t;
}
function aE(e) {
  const t = pi(e);
  return t === "#FFFFFFFF" || t.slice(7) === "FF";
}
function lE(e) {
  return e.getImageData(0, 0, 1, 1).data[3] < 5;
}
function cE(e, t, n) {
  return e === t && e === n && e > 230;
}
function uE(e, t, n, r) {
  return `#${Li(e)}${Li(t)}${Li(n)}${Li(r)}`;
}
const Li = (e) => e.toString(16).padStart(2, "0");
function zh(e, t, n) {
  const r = e.getContext("2d");
  r.save(),
    n && (r.filter = n),
    r.drawImage(t, -2, -2, e.width + 4, e.height + 4),
    r.restore();
}
function Kh(e, t, n) {
  const r = e.width;
  let i = r / Math.min(t.width, t.height);
  n && (i = r / Math.max(t.width, t.height));
  const o = t.width * i,
    s = (r - o) / 2,
    a = t.height * i,
    l = (r - a) / 2;
  e.getContext("2d").drawImage(t, s, l, o, a);
}
function gl(e, t, n) {
  let r;
  return (
    lE(e.getContext("2d"))
      ? (r = e.toDataURL("image/webp", 0.5))
      : (r = e.toDataURL("image/jpeg", n)),
    t && t.length < r.length ? t : r
  );
}
var Gt = Object.freeze({
  __proto__: null,
  createInMemoryImage: ar,
  getImageFromData: rE,
  getTopLeftColor: pi,
  isTransparent: Hh,
  optimizeBackgroundImage: tE,
  optimizeCenterImage: eE,
  optimizeSliceImage: Z0,
  renderText: nE,
  topLeftIsFullyTransparent: iE,
});
function Gh(e, t) {
  if (e === t) return !0;
  if (e === null || t === null || e.length !== t.length) return !1;
  for (let n = 0; n < e.length; ++n) if (e[n] !== t[n]) return !1;
  return !0;
}
function Qh(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const i of n) {
    const o = e[i],
      s = t[i],
      a = _u(o) && _u(s);
    if ((a && !Qh(o, s)) || (!a && o !== s)) return !1;
  }
  return !0;
}
function _u(e) {
  return e !== null && typeof e == "object";
}
function pl(e, t, n, r, i) {
  return (
    (t ** 2 - (i / 2) ** 2) ** 0.5 -
      Math.max((i * Math.cos(e)) / (2 * Math.sin(e)), n) >=
    r
  );
}
function Xh(e) {
  if (!e) return "";
  const t = e.match(/<img.*?src="(.*?)".*?>/);
  return t && (e = e.replace(t[0], "")), em(e);
}
function vl(e) {
  let t = "";
  if (e) {
    t = e;
    const n = 18;
    t.length > n && (t = t.substring(0, n - 1) + "…");
  }
  return t;
}
function Yh(e, t) {
  if (e) return t;
  {
    const n = [],
      r = [];
    for (let i of t) {
      const o = da(i);
      n.includes(o) || (n.push(o), r.push(i));
    }
    return r;
  }
}
function da(e) {
  const t = {};
  return (
    e.text && (t.text = e.text),
    e.image && (t.image = e.image),
    JSON.stringify(t)
  );
}
function fE(e, t) {
  const n = [];
  for (let r = 0; r < e.length; r++)
    if ((da(t) == da(e[r]) && n.push(r), t.id == e[r].id)) return n[0] != r;
  return !1;
}
function Jh(e) {
  let t = "";
  if (e) {
    const n = e.match(/<img.*?src="(.*?)".*?>/);
    n && (t = n[1]);
  }
  return t;
}
function Zh(e, t, n, r, i, o) {
  const s = {};
  return (
    e && (s.text = e),
    t && (s.image = t),
    n && (s.color = n),
    r && (s.weight = r),
    i && (s.sound = i),
    o && (s.message = o),
    s
  );
}
function dE(e) {
  const t = structuredClone(e);
  let n;
  for (let r = t.length - 1; r > 0; r--)
    (n = Math.floor(Math.random() * (r + 1))), ([t[r], t[n]] = [t[n], t[r]]);
  return t;
}
function hE(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function mE(e, t) {
  return t ? e.reduce((n, r) => n + (r.trim() === t.trim() ? 1 : 0), 0) : 0;
}
function gE(e) {
  return e.slice(0).sort((t, n) => {
    const r = t.text || "",
      i = n.text || "";
    return r.localeCompare(i, "en", {
      numeric: !0,
      sensitivity: "base",
    });
  });
}
function pE(e) {
  let t = e;
  return (
    (t = t.replace(/\//g, "⁄")),
    t === ".." && (t = ".. "),
    t === "." && (t = ". "),
    t === "" && (t = "?"),
    t.length > 100 && (t = t.substring(0, 97) + "..."),
    t
  );
}
function vE(e, t) {
  return (
    e || (e = []),
    t || (t = []),
    {
      additions: t.filter((n) => !e.includes(n)),
      removals: e.filter((n) => !t.includes(n)),
    }
  );
}
function _l(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function _E(e) {
  let t = e.replace(/<mark>/g, "||mark||").replace(/<\/mark>/g, "||/mark||");
  return _l(t)
    .replace(/\|\|mark\|\|/g, "<mark>")
    .replace(/\|\|\/mark\|\|/g, "</mark>");
}
function em(e) {
  return e
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}
function bE(e) {
  return e.replace(/<.*?>/g, "");
}
function yE(e) {
  return e ? e.toLowerCase() === "#ffffff" : !0;
}
function tm() {
  let t = "";
  const n = "abcdefghjkmnpqrstuvwxyz23456789";
  for (let r = 0; r < 10; r++)
    t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}
function nm(e) {
  return !e || !e.map ? [] : e.map((t) => ((t.id = t.id || tm()), t));
}
function wE(e) {
  let t = "",
    n = "";
  return (
    e &&
      (e.image &&
        (t = `<img src="${e.image}" style="height:25px" style="font-size:1rem" alt="">`),
      e.text && ((n = _l(e.text)), (n = n.replace(/^ +$/g, "&nbsp;")))),
    "<div>" + t + n + "</div>"
  );
}
function EE(e, t) {
  return (
    (e = Math.ceil(e)),
    (t = Math.floor(t)),
    Math.floor(Math.random() * (t - e + 1) + e)
  );
}
function bl(e) {
  return e.reduce(
    (t, n) =>
      n.weight && (n.enabled === !0 || !("enabled" in n)) ? t + n.weight : t,
    0
  );
}
function rm(e, t) {
  let n = 0;
  if (e.length === 0) return 0;
  if (e[0].weight) {
    const r = bl(e),
      i = e.map((a) => {
        var l;
        return (2 * Math.PI * ((l = a.weight) != null ? l : 1)) / r;
      }),
      o = [];
    n = 0;
    let s = i[0] / 2;
    for (
      e.forEach((a, l) => {
        o.push(s), (s += i[l + 1]);
      }),
        n = 0;
      !(t < o[n] || (n++, n > o.length - 1));

    );
  } else {
    const r = (2 * Math.PI) / e.length;
    n = Math.round(t / r);
  }
  return n >= e.length && (n = 0), n;
}
function So(e) {
  if (!e) return "#000000";
  const t = e.charAt(0) === "#" ? e.substring(1, 7) : e,
    n = parseInt(t.substring(0, 2), 16),
    r = parseInt(t.substring(2, 4), 16),
    i = parseInt(t.substring(4, 6), 16),
    s = [n / 255, r / 255, i / 255].map((l) =>
      l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4
    );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] > 0.179
    ? "#000000"
    : "#FFFFFF";
}
function SE(e) {
  return new Promise((t) => setTimeout(t, e));
}
function CE(e, t) {
  return im(om(e), t);
}
function im(e, t, n = Date.now()) {
  if (!e) return "-";
  t || (t = "en");
  const r = Math.floor((n - e) / 1e3),
    i = [
      Math.floor(r / 31536e3),
      Math.floor(r / 2592e3),
      Math.floor(r / 604800),
      Math.floor(r / 86400),
      Math.floor(r / 3600),
      Math.floor(r / 60),
      r,
    ],
    o = ["year", "month", "week", "day", "hour", "minute", "second"],
    s = new Intl.RelativeTimeFormat(t, {
      numeric: "auto",
    });
  for (const a in i) if (i[a] >= 1) return s.format(-i[a], o[a]);
  return "moments ago";
}
function om(e) {
  if (e && e._seconds) return e._seconds * 1e3;
  if (e && e.seconds) return e.seconds * 1e3;
  if (e && Number.isInteger(e)) return e;
}
function kE(e) {
  return location.host.startsWith("localhost")
    ? `http://localhost:8081/${e}`
    : `/${e}`;
}
function TE(e) {
  return ["spin-only", "copyable", "gallery"].includes(e);
}
function IE(e, t) {
  const n = Object.entries(e).sort((r, i) =>
    r[0] === "sounds.Sound effects"
      ? -1
      : i[0] === "sounds.Sound effects"
      ? 1
      : r[0] === "sounds.Winter holidays" && t > 9
      ? -1
      : i[0] === "sounds.Winter holidays" && t > 9
      ? 1
      : 0
  );
  return Object.fromEntries(n);
}
function AE(e) {
  return e instanceof Error
    ? e.message
    : typeof e == "string"
    ? e
    : e instanceof Object
    ? e.toString()
    : "An unknown error occurred";
}
function OE(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var sm = Object.freeze({
  __proto__: null,
  addIdsIfNotThere: nm,
  arraysEqual: Gh,
  boxFits: pl,
  colorIsWhite: yE,
  createDuringSpinSoundsObject: IE,
  createEntry: Zh,
  dedupeEntries: Yh,
  deepObjectsEqual: Qh,
  entryIsDuplicate: fE,
  escapeHtml: _l,
  escapeHtmlExceptMarkTags: _E,
  extractImage: Jh,
  extractText: Xh,
  firestoremilliseconds: om,
  getApiUrl: kE,
  getArrayDiff: vE,
  getIndexAtPointer: rm,
  getMessageFromError: AE,
  getNewEntryId: tm,
  getOccurences: mE,
  getRandomInt: EE,
  getRandomItemFromArray: hE,
  getTextColor: So,
  getTimeAgo: CE,
  getTotalWeight: bl,
  isPublicShareMode: TE,
  pipe: OE,
  removeHtml: bE,
  renderEntry: wE,
  sanitizeWheelTitle: pE,
  shortenText: vl,
  shuffleArray: dE,
  sleep: SE,
  sortWheelEntries: gE,
  timeago: im,
  unescapeHtml: em,
});
class NE {
  constructor() {
    z(this, "images", {});
    z(this, "emptyImage", new Image());
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
class bu {
  constructor(t, n, r, i, o, s, a) {
    z(this, "wheelConfig");
    z(this, "radians");
    z(this, "wheelRadius");
    z(this, "hubRadius");
    z(this, "displayText");
    z(this, "customBackgoundColor");
    z(this, "image");
    z(this, "color");
    z(this, "wheelImages");
    var l;
    (this.wheelConfig = t),
      (this.radians = n),
      (this.wheelRadius = r),
      (this.hubRadius = i),
      (this.displayText = vl((l = s.text) != null ? l : "")),
      (this.customBackgoundColor = s.color),
      (this.image = a),
      (this.color = t.getEntryColor(o)),
      (this.wheelImages = {});
  }
  draw(t) {
    if (
      (t.save(),
      this.wheelConfig.type === "image" && this.drawImageWheelSlice(t),
      this.wheelConfig.type === "color")
    )
      if (this.image) {
        const n = pi(this.image);
        Hh(n)
          ? this.drawColorWheelWithTransparentImage(t)
          : this.drawColorWheelWithRegularImage(t);
      } else this.drawColorWheelWithNoImage(t);
    t.restore();
  }
  drawImageWheelSlice(t) {
    vs(t, this.radians / 2, this.wheelRadius, this.hubRadius, this.image);
    const n = {
      fill: "white",
      outline: "black",
    };
    Ri(t, this.wheelRadius, this.displayText, n),
      Mi(t, this.wheelConfig.drawOutlines, this.wheelRadius, this.radians);
  }
  drawColorWheelWithNoImage(t) {
    let n;
    this.customBackgoundColor
      ? (Ln(t, this.wheelRadius, this.radians, this.customBackgoundColor),
        (n = {
          fill: So(this.customBackgoundColor),
          outline: "",
        }))
      : (Ln(t, this.wheelRadius, this.radians, this.color),
        (n = {
          fill: So(this.color),
          outline: "",
        })),
      Ri(t, this.wheelRadius, this.displayText, n),
      Mi(t, this.wheelConfig.drawOutlines, this.wheelRadius, this.radians);
  }
  drawColorWheelWithTransparentImage(t) {
    this.customBackgoundColor
      ? Ln(t, this.wheelRadius, this.radians, this.customBackgoundColor)
      : Ln(t, this.wheelRadius, this.radians, this.color),
      vs(t, this.radians / 2, this.wheelRadius, this.hubRadius, this.image);
    const n = {
      fill: "white",
      outline: "black",
    };
    Ri(t, this.wheelRadius, this.displayText, n),
      Mi(t, this.wheelConfig.drawOutlines, this.wheelRadius, this.radians);
  }
  drawColorWheelWithRegularImage(t) {
    if (this.customBackgoundColor)
      Ln(t, this.wheelRadius, this.radians, this.customBackgoundColor);
    else if (this.wheelConfig.isAdvanced)
      Ln(t, this.wheelRadius, this.radians, this.color);
    else {
      const r = pi(this.image);
      Ln(t, this.wheelRadius, this.radians, r);
    }
    vs(t, this.radians / 2, this.wheelRadius, this.hubRadius, this.image);
    const n = {
      fill: "white",
      outline: "black",
    };
    Ri(t, this.wheelRadius, this.displayText, n),
      Mi(t, this.wheelConfig.drawOutlines, this.wheelRadius, this.radians);
  }
}
function Ln(e, t, n, r) {
  e.beginPath(),
    e.moveTo(0, 0),
    e.arc(0, 0, t, -n / 2, n / 2),
    e.lineTo(0, 0),
    (e.fillStyle = r),
    e.fill();
}
function Ri(e, t, n, r) {
  (e.lineJoin = "round"),
    (e.textBaseline = "middle"),
    (e.textAlign = "end"),
    r.outline &&
      ((e.lineWidth = 4),
      (e.strokeStyle = r.outline),
      e.strokeText(` ${n} `, t, 0)),
    (e.fillStyle = r.fill),
    e.fillText(` ${n} `, t, 0);
}
function Mi(e, t, n, r) {
  t &&
    (e.beginPath(),
    e.moveTo(0, 0),
    e.arc(0, 0, n, -r / 2, r / 2),
    e.lineTo(0, 0),
    (e.lineWidth = 1),
    (e.strokeStyle = "#333333"),
    e.stroke());
}
function vs(e, t, n, r, i) {
  if (!i) return;
  let o = PE(t, n, r, i.height / i.width);
  e.drawImage(i, o.x, o.y, o.w, o.h);
}
function PE(e, t, n, r) {
  let i,
    o = 0;
  for (i = t; i > 0 && ((o = i * r), !pl(e, t, n, i, o)); i--);
  return {
    x: Math.max((o * Math.cos(e)) / (2 * Math.sin(e)), n),
    y: -o / 2,
    w: i,
    h: o,
  };
}
const am = {};
function yu(e, t, n, r, i) {
  const o = ME(t, n, r, i);
  if (o) return o;
  let s = 200,
    a = "Quicksand, sans-serif";
  t.forEach((u) => {
    let c = xE(e, u, a, n, r, i);
    c < s && (s = c);
  });
  const l = s + "px " + a;
  return DE(t, n, r, i, l), l;
}
function xE(e, t, n, r, i, o) {
  return LE(e, r, i, o, n, t, 3, 200);
}
function LE(e, t, n, r, i, o, s, a) {
  let l;
  for (;;) {
    l = Math.round((s + a) / 2);
    let u = l + "px " + i;
    if ((RE(e, t, n, r / 2, o, u, l) ? (s = l) : (a = l), Math.abs(a - s) < 2))
      break;
  }
  return l;
}
function RE(e, t, n, r, i, o, s) {
  if (!i) return !0;
  e.font = o;
  const a = e.measureText(` ${vl(i)} `).width;
  return pl(r, t, n, a, s);
}
function ME(e, t, n, r) {
  const i = lm(e, t, n, r);
  return am[i];
}
function DE(e, t, n, r, i) {
  const o = lm(e, t, n, r);
  return (am[o] = i);
}
function lm(e, t, n, r) {
  return JSON.stringify({
    texts: e,
    wheelRadius: t,
    hubRadius: n,
    smallestAngle: r,
  });
}
class FE {
  constructor() {
    z(this, "imageCache", new NE());
    z(this, "entries", []);
    z(this, "imageDataCache", {});
    z(this, "wheelImage", null);
    z(this, "pointerImage", null);
    z(this, "coverPlateImage", null);
    z(this, "wheelShadowImage", null);
    z(this, "watermarkImage", null);
  }
  draw(t, n, r, i, o, s = "") {
    const a = t.canvas.width * 0.44,
      l = this.getHubRadius(o, a);
    this.drawBackground(t),
      o.drawShadow && this.drawWheelShadow(t, a),
      this.drawCoverImage(t, o, n, a),
      this.drawWheel(t, o, n, a, l, i, r),
      this.drawPointer(t, o, a),
      this.drawCenterImage(t, o, n, l);
    try {
      this.drawCoverPlate(t, a, l, i, r);
    } catch {}
    s && this.drawWatermark(t, s, o);
  }
  getHubRadius(t, n) {
    if (t.type === "image") return 0;
    const r = J0[t.hubSize] || 0.2;
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
      ((this.wheelShadowImage = ar(t)),
      this.drawWheelShadowNoCache(this.wheelShadowImage.getContext("2d"), n)),
      t.drawImage(this.wheelShadowImage, 0, 0);
  }
  drawWheelShadowNoCache(t, n) {
    const r = t.canvas.width / 2,
      i = t.canvas.height / 2,
      o = t.createRadialGradient(r, i, n, r, i + 4, n + 8);
    o.addColorStop(0, "#00000034"),
      o.addColorStop(1, "#00000000"),
      (t.fillStyle = o),
      t.fillRect(0, 0, t.canvas.width, t.canvas.height);
  }
  drawWheel(t, n, r, i, o, s, a) {
    this.wheelImage ||
      ((this.wheelImage = ar(t)),
      (this.entries = a.slice(0)),
      this.drawWheelNoCache(this.wheelImage.getContext("2d"), n, i, o, s, a));
    const l = t.canvas.width,
      u = t.canvas.height;
    t.save(),
      t.translate(l / 2, u / 2),
      t.rotate(r),
      t.translate(-l / 2, -u / 2),
      t.drawImage(this.wheelImage, 0, 0),
      t.restore();
  }
  drawWheelNoCache(t, n, r, i, o, s) {
    this.drawSlices(t, n, r, i, o, s), this.drawCenterCircle(t, n, i);
  }
  drawCoverImage(t, n, r, i) {
    if (n.type === "color") return;
    const o = this.imageCache.getImage(n.getCoverImage());
    o &&
      (t.save(),
      t.translate(t.canvas.width / 2, t.canvas.height / 2),
      t.rotate(r),
      t.beginPath(),
      t.arc(0, 0, i - 1, 0, Math.PI * 2, !0),
      t.clip(),
      t.drawImage(o, -i, -i, i * 2, i * 2),
      t.restore());
  }
  drawSlices(t, n, r, i, o, s) {
    t.save(), t.translate(t.canvas.width / 2, t.canvas.height / 2);
    const a = this;
    if (n.isAdvanced) {
      const l = bl(this.entries),
        u = [];
      let c = 2 * Math.PI;
      this.entries.forEach((f, d) => {
        (u[d] = (2 * Math.PI * (f.weight || 1)) / l), u[d] < c && (c = u[d]);
      }),
        (t.font = yu(
          t,
          o.map((f) => {
            var d;
            return (d = f.text) != null ? d : "";
          }),
          r,
          i,
          c
        )),
        s
          .map(
            (f, d) => new bu(n, u[d], r, i, d, f, a.getImageFromData(f.image))
          )
          .forEach((f, d) => {
            const h = u[d] / 2 + u[d + 1] / 2;
            f.draw(t), t.rotate(-h);
          });
    } else {
      const l = (2 * Math.PI) / s.length;
      (t.font = yu(
        t,
        o.map((u) => {
          var c;
          return (c = u.text) != null ? c : "";
        }),
        r,
        i,
        l
      )),
        s
          .map((u, c) => new bu(n, l, r, i, c, u, a.getImageFromData(u.image)))
          .forEach((u) => {
            u.draw(t), t.rotate(-l);
          });
    }
    t.restore();
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
        ((this.pointerImage = ar(t)),
        this.drawPointerNoCache(this.pointerImage.getContext("2d"), n, r)),
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
  drawCoverPlate(t, n, r, i, o) {
    o.length !== i.length &&
      (!this.coverPlateImage &&
        o.length > 0 &&
        ((this.coverPlateImage = ar(t)),
        this.drawCoverPlateNoCache(
          this.coverPlateImage.getContext("2d"),
          n,
          r,
          o
        )),
      this.coverPlateImage && t.drawImage(this.coverPlateImage, 0, 0));
  }
  drawCoverPlateNoCache(t, n, r, i) {
    const o = this.imageCache.getImage("/images/brushed-metal.png");
    if (!o) return;
    const s = i.length,
      a = Math.max((4 * Math.PI) / s, Math.PI / 4);
    t.save(),
      t.translate(t.canvas.width / 2, t.canvas.height / 2),
      t.scale(-1, 1),
      (t.shadowColor = "#444"),
      (t.shadowOffsetY = 4),
      (t.shadowBlur = 10),
      (t.lineWidth = n - r + 10),
      (t.strokeStyle = t.createPattern(o, "repeat")),
      t.beginPath(),
      t.arc(0, 0, (n + r) / 2, -a / 2, a / 2),
      t.stroke(),
      t.restore();
  }
  drawCenterImage(t, n, r, i) {
    if (n.type === "image") return;
    const o = this.imageCache.getImage(n.getWheelImage());
    o &&
      (t.save(),
      t.translate(t.canvas.width / 2, t.canvas.height / 2),
      t.rotate(r),
      t.beginPath(),
      t.arc(0, 0, i - 1, 0, Math.PI * 2, !0),
      t.clip(),
      t.drawImage(o, -i, -i, i * 2, i * 2),
      t.restore());
  }
  drawWatermark(t, n, r) {
    n &&
      (this.watermarkImage ||
        ((this.watermarkImage = ar(t)),
        this.drawWatermarkNoCache(this.watermarkImage.getContext("2d"), n, r)),
      t.drawImage(this.watermarkImage, 0, 0));
  }
  drawWatermarkNoCache(t, n, r) {
    t.save(),
      (t.textAlign = "end"),
      (t.font = "14px Quicksand, sans-serif"),
      (t.fillStyle = So(r.pageBackgroundColor)),
      t.fillText(n, t.canvas.width - 10, t.canvas.height - 10),
      t.restore();
  }
  getImageFromData(t) {
    if (t) {
      if (!this.imageDataCache[t]) {
        const n = new Image(),
          r = this;
        (n.onload = () => r.clearCachedWheelImage()),
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
class pt {
  constructor(t) {
    z(this, "afterSpinSound", "applause-sound-soft");
    z(this, "afterSpinSoundVolume", 50);
    z(this, "allowDuplicates", !0);
    z(this, "animateWinner", !1);
    z(this, "autoRemoveWinner", !1);
    z(this, "centerText", "");
    z(this, "colorSettings", [
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
    ]);
    z(this, "coverImageName", "");
    z(this, "coverImageType", "");
    z(this, "customCoverImageDataUri", "");
    z(this, "customPictureDataUri", "");
    z(this, "customPictureName", "");
    z(this, "description", "");
    z(this, "displayHideButton", !0);
    z(this, "displayRemoveButton", !0);
    z(this, "displayWinnerDialog", !0);
    z(this, "drawOutlines", !1);
    z(this, "drawShadow", !0);
    z(this, "duringSpinSound", "ticking-sound");
    z(this, "duringSpinSoundVolume", 50);
    z(this, "entries", [
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
    ]);
    z(this, "galleryPicture", "/images/none.png");
    z(this, "hubSize", "S");
    z(this, "isAdvanced", !1);
    z(this, "launchConfetti", !0);
    z(this, "maxNames", 1e3);
    z(this, "pageBackgroundColor", "#FFFFFF");
    z(this, "pictureType", "none");
    z(this, "playClickWhenWinnerRemoved", !1);
    z(this, "showTitle", !0);
    z(this, "slowSpin", !1);
    z(this, "spinTime", 10);
    z(this, "title", "");
    z(this, "type", "color");
    z(this, "winnerMessage", "");
    t && this.copyPropertiesFrom(t);
  }
  loadJson(t) {
    var n;
    try {
      const r = JSON.parse(t);
      ((n = r.entries) == null ? void 0 : n.length) > 0 &&
        this.copyPropertiesFrom(r);
    } catch (r) {
      console.error(r);
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
    const t = new pt();
    return t.loadValues(this.getValues()), t;
  }
  hasOnlyDefaultEntries() {
    return Gh(this.getTexts(), new pt().getTexts());
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
    Array.isArray(t.names) &&
      ((t.entries = t.names.map((n) => Zh(Xh(n), Jh(n)))), delete t.names),
      (t.maxNames = Number(t.maxNames)),
      (t.spinTime = Number(t.spinTime)),
      delete t.displayHat,
      t.playTicks === !1 && (t.duringSpinSound = "no-sound"),
      delete t.playTicks,
      t.playCheers === !1 && (t.afterSpinSound = "no-sound"),
      delete t.playCheers,
      t.hasOwnProperty("showTitle") || (t.showTitle = !0),
      t.type === "image" && !t.coverImageType && (t.coverImageType = "gallery"),
      t.isAdvanced &&
        t.entries.length > 0 &&
        (t.entries[0].hasOwnProperty("enabled") ||
          t.entries.forEach((n) => {
            n.enabled = !0;
          })),
      t.drawShadow === void 0 && (t.drawShadow = !0),
      t.entries.forEach((n) => {
        n.text &&
          (n.text = n.text
            .replace(
              `
`,
              ""
            )
            .replace("\r", ""));
      }),
      nm(t.entries),
      (t.entries = t.entries.filter(
        (n) => n.text || n.image || "enabled" in n
      ));
  }
  removeImages() {
    var t;
    for (const n of this.entries)
      if ("image" in n) {
        if (!((t = n.text) != null && t.trim())) return !1;
        delete n.image;
      }
    return (
      this.type === "image" && (this.type = "color"),
      (this.customPictureDataUri = ""),
      (this.customCoverImageDataUri = ""),
      !0
    );
  }
}
const wu = Object.fromEntries(
  Object.entries(new pt().getValues()).map(([e, t]) => [e, typeof t])
);
function cm(e) {
  const t = new pt(
    Object.fromEntries(
      Object.entries(structuredClone(e)).filter(
        ([n, r]) => n in wu && typeof r === wu[n]
      )
    )
  );
  for (const n of t.entries) delete n.id;
  return t;
}
class $r {
  constructor(t) {
    z(this, "array");
    z(this, "length");
    z(this, "elementJsonCache");
    (this.array = t.slice(0)),
      (this.length = t.length),
      (this.elementJsonCache = null);
  }
  getElement(t) {
    for (; t < 0; ) t += this.array.length;
    for (; t >= this.array.length; ) t -= this.array.length;
    return this.array[t];
  }
  setElement(t, n) {
    for (; t < 0; ) t += this.array.length;
    for (; t >= this.array.length; ) t -= this.array.length;
    (this.array[t] = n), (this.elementJsonCache = null);
  }
  getArray() {
    return this.array;
  }
  slice(t, n) {
    const r = [];
    for (let i = t; i < n; i++) r.push(this.getElement(i));
    return r;
  }
  getNextElement(t) {
    this.elementJsonCache || (this.elementJsonCache = this.getElementJson());
    const n = JSON.stringify(t),
      r = this.elementJsonCache.findIndex((i) => i === n);
    return this.getElement(r + 1);
  }
  getElementJson() {
    return this.array.map((t) => JSON.stringify(t));
  }
}
class $E {
  constructor(t, n, r) {
    z(this, "startIndex");
    z(this, "endIndex");
    z(this, "length");
    z(this, "index");
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
class jE {
  constructor() {
    z(this, "allEntries");
    z(this, "maxSlices");
    z(this, "prevIndexAtPointer");
    z(this, "displayEntries");
    (this.allEntries = new $r([])),
      (this.maxSlices = 1e6),
      (this.prevIndexAtPointer = -1),
      (this.displayEntries = new $r([]));
  }
  setEntries(t, n, r) {
    (this.maxSlices = n),
      (this.allEntries = new $r(Yh(r, t))),
      this.allEntries.length <= n || this.entriesHaveUnequalWeight(t)
        ? (this.displayEntries = this.allEntries)
        : (this.displayEntries = new $r(this.allEntries.slice(0, n)));
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
    {
      const n = new $E(this.prevIndexAtPointer, t, this.displayEntries.length);
      for (; !n.isDone(); ) {
        n.increment();
        const r = n.getIndex(),
          i = Math.floor(r + this.maxSlices / 2) % this.maxSlices,
          o = this.displayEntries.getElement(i - 1),
          s = this.allEntries.getNextElement(o);
        this.displayEntries.setElement(i, s);
      }
      return (this.prevIndexAtPointer = t), !0;
    }
  }
  entriesHaveUnequalWeight(t) {
    return t.length === 0 || !t[0].weight ? !1 : t.find((n) => n.weight !== 1);
  }
  setRandomPosition(t) {
    if (this.maxSlices < this.allEntries.length) {
      const n = this.getRandomInt(t, 0, this.allEntries.length - 1);
      this.displayEntries = new $r(
        this.allEntries.slice(n, n + this.maxSlices)
      );
    }
  }
  getRandomInt(t, n, r) {
    return (
      (n = Math.ceil(n)), (r = Math.floor(r)), Math.floor(t() * (r - n + 1) + n)
    );
  }
}
let mT = class {
  constructor(t, n, r) {
    z(this, "angle", 0);
    z(this, "speed", 0);
    z(this, "fps", 60);
    z(this, "watermark", "");
    z(this, "wheelConfig", new pt());
    z(this, "state");
    z(this, "wheelPainter", new FE());
    z(this, "entryPicker", new jE());
    z(this, "indexFromLastTick", 0);
    z(this, "indexFromThisTick", 0);
    z(this, "nameChangedCallback");
    z(this, "doneSpinningCallback");
    z(this, "onStateChangeCallback");
    (this.state = new um(this)),
      (this.nameChangedCallback = t || (() => {})),
      (this.doneSpinningCallback = n || ((i) => {})),
      (this.onStateChangeCallback = r || ((i) => {}));
  }
  setEntries(t, n, r) {
    if (!this.state.isSpinning()) {
      const i = t.filter((o) => o.enabled !== !1);
      this.entryPicker.setEntries(i, n, r), this.refresh();
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
      this.indexFromThisTick != this.indexFromLastTick &&
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
    return rm(this.entryPicker.getDisplayEntries(), this.angle);
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
class ln {
  constructor() {
    z(this, "name", "NullSpinState");
  }
  tick(t, ...n) {}
  click(t) {}
  receiveFromNetwork(t, n) {}
  isSpinning() {
    return !1;
  }
}
class um extends ln {
  constructor(n) {
    super();
    z(this, "name", "InitialDemoSpinState");
    n.speed = 0.005;
  }
  tick(n) {
    n.angle += n.speed;
  }
  click(n) {
    n.setNewState(new yl(n));
  }
  receiveFromNetwork(n, r) {
    r.name === "Spinning" && n.setNewState(new wl(n, r.decelAngle)),
      r.name === "Stopped" && n.setNewState(new dm(n, r.position));
  }
}
class yl extends ln {
  constructor(n) {
    super();
    z(this, "name", "AcceleratingState");
    z(this, "age");
    z(this, "MAX_AGE");
    (this.age = 0),
      (this.MAX_AGE = n.getStateTimeLengths().accelerating),
      n.onStateChangeCallback({
        name: "Spinning",
      });
  }
  tick(n, r) {
    if (((n.angle += n.speed), this.age <= this.MAX_AGE)) {
      const i = n.wheelConfig.slowSpin ? 0.001 : 0.6 / n.fps;
      (n.speed += i), (this.age += 1);
    } else n.setNewState(new VE(n, r));
  }
  isSpinning() {
    return !0;
  }
}
class wl extends ln {
  constructor(n, r) {
    super();
    z(this, "name", "SpectatorAcceleratingState");
    z(this, "age");
    z(this, "MAX_AGE");
    z(this, "decelAngle");
    (this.age = 0),
      (this.MAX_AGE = n.getStateTimeLengths().accelerating),
      (this.decelAngle = r);
  }
  tick(n) {
    if (((n.angle += n.speed), this.age <= this.MAX_AGE)) {
      const r = n.wheelConfig.slowSpin ? 0.001 : 0.6 / n.fps;
      (n.speed += r), (this.age += 1);
    } else n.setNewState(new qE(n, this.decelAngle));
  }
  receiveFromNetwork(n, r) {
    r.name === "AnnounceWinner" && n.setNewState(new fm(n, r.position));
  }
  isSpinning() {
    return !0;
  }
}
class VE extends ln {
  constructor(n, r) {
    super();
    z(this, "name", "DeceleratingState");
    z(this, "age");
    z(this, "MAX_AGE");
    z(this, "deceleration");
    (n.angle = Math.PI * 2 * r()),
      n.entryPicker.setRandomPosition(0),
      (this.age = 0),
      (this.MAX_AGE = n.getStateTimeLengths().decelerating);
    const i = this.MAX_AGE,
      o = n.speed,
      s = 15e-5;
    this.deceleration = Math.exp(Math.log(s / o) / i);
    if (keypressed != undefined) {
        const angle =
          Array.from(
            { length: n.getStateTimeLengths().decelerating },
            (_, i) => n.speed * Math.pow(this.deceleration, i + 1)
          ).reduce((acc, val) => acc + val, 0) % 2;
        const targetValue = [0, 1, 2, 3, 4].includes(keypressed)
          ? (keypressed + 1) * (Math.PI / 6)
          : (keypressed - 4) * (Math.PI / 6) + Math.PI;
        const valueToAdd =
          angle < targetValue
            ? targetValue - angle
            : targetValue + 2 - angle;
        console.log(angle, valueToAdd);
        n.angle = valueToAdd;
      }
      console.log(this.deceleration, n.angle, keypressed);
  }
  tick(n) {
    (n.angle += n.speed),
      this.age <= this.MAX_AGE
        ? ((n.speed = n.speed * this.deceleration), (this.age += 1))
        : ((n.speed = 0), n.setNewState(new WE(n, n.angle)));
  }
  isSpinning() {
    return !0;
  }
}
class qE extends ln {
  constructor(n, r) {
    super();
    z(this, "name", "SpectatorDeceleratingState");
    z(this, "age");
    z(this, "MAX_AGE");
    z(this, "deceleration");
    n.setAngle(r),
      (this.age = 0),
      (this.MAX_AGE = n.getStateTimeLengths().decelerating);
    const i = this.MAX_AGE,
      o = n.speed,
      s = 15e-5;
    this.deceleration = Math.exp(Math.log(s / o) / i);
  }
  tick(n) {
    (n.angle += n.speed),
      this.age <= this.MAX_AGE && (n.speed = n.speed * this.deceleration),
      this.age > this.MAX_AGE && (n.speed = 0),
      this.age > this.MAX_AGE + 180 && n.setNewState(new um(n)),
      (this.age += 1);
  }
  receiveFromNetwork(n, r) {
    r.name === "AnnounceWinner" && n.setNewState(new fm(n, r.position));
  }
  isSpinning() {
    return !0;
  }
}
class WE extends ln {
  constructor(n, r) {
    super();
    z(this, "name", "AnnounceWinnerState");
    (n.angle = r),
      n.onStateChangeCallback({
        name: "AnnounceWinner",
        position: n.angle,
      });
  }
  tick(n) {
    n.spinIsDone(), n.setNewState(new UE(n, n.angle));
  }
}
class fm extends ln {
  constructor(n, r) {
    super();
    z(this, "name", "SpectatorAnnounceWinnerState");
    n.angle = r;
  }
  tick(n) {
    n.spinIsDone(), n.setNewState(new dm(n, n.angle));
  }
}
class UE extends ln {
  constructor(n, r) {
    super();
    z(this, "name", "StoppedState");
    (n.angle = r),
      (n.speed = 0),
      n.onStateChangeCallback({
        name: "Stopped",
        position: n.angle,
      });
  }
  click(n) {
    n.setNewState(new yl(n));
  }
  receiveFromNetwork(n, r) {
    r.name === "Spinning" && n.setNewState(new wl(n, r.decelAngle));
  }
}
class dm extends ln {
  constructor(n, r) {
    super();
    z(this, "name", "SpectatorStoppedState");
    (n.angle = r), (n.speed = 0);
  }
  click(n) {
    n.setNewState(new yl(n));
  }
  receiveFromNetwork(n, r) {
    r.name === "Spinning" && n.setNewState(new wl(n, r.decelAngle));
  }
}
async function hm({ wheelConfig: e, idToken: t, shareMode: n }) {
  return (
    await ge("POST", "api/v2/wheels", t, {
      wheelConfig: cm(e),
      shareMode: n,
    })
  ).data.path;
}
async function mm(e) {
  return (await ge("GET", `api/v2/wheels/${e}`)).data;
}
async function gm(e, t) {
  let n = "api/v1/wheels/shared";
  return (
    t && t.length > 0 && (n += `?fields=${t}`),
    (await ge("GET", n, e)).data.wheels
  );
}
async function pm(e, t) {
  let n = "api/v1/wheels/private";
  return (
    t && t.length > 0 && (n += `?fields=${t}`),
    (await ge("GET", n, e)).data.wheels
  );
}
async function vm(e, t) {
  return (await ge("GET", `api/v2/wheels/${t}`, e)).data;
}
async function _m(e, t) {
  return (await ge("GET", `api/v2/wheels/${e}`, t)).data;
}
async function bm(e, t) {
  let n = "api/v2/wheels";
  return (
    t && t.length > 0 && (n += `?fields=${t}`),
    (await ge("GET", n, e)).data.wheels
  );
}
async function ym(e, t) {
  const n = {
    config: cm(t),
  };
  return (await ge("PUT", "api/v1/wheels/private", e, n)).data.path;
}
async function wm(e, t, n) {
  return (await ge("PUT", `api/v2/wheels/${t}`, e, n)).data;
}
async function Em(e, t) {
  return (await ge("DELETE", `api/v2/wheels/${t}`, e)).data;
}
async function Sm(e) {
  await ge("POST", "api/v2/users", e);
}
async function ha(e, t) {
  await ge("POST", "api/v2/wheels/change-owner", t, {
    oldIdToken: e,
  });
}
async function Cm(e) {
  await ge("DELETE", "api/v2/users", e);
}
async function BE(e) {
  return (await ge("GET", "api/v2/admin/review-queue", e)).data;
}
async function HE(e, t) {
  return (
    await ge("POST", "api/v2/admin/translate", e, {
      texts: t,
    })
  ).data.translations;
}
async function El(e) {
  try {
    return (await ge("GET", "api/v2/admin", e)).data.isAdmin;
  } catch {
    return !1;
  }
}
async function zE(e, t) {
  return (
    await ge("POST", "api/v1/gallery/search2", null, {
      query: e,
      pageNumber: t,
    })
  ).data;
}
async function KE(e, t) {
  const n = new URLSearchParams();
  return (
    e && n.append("search", e),
    t && n.append("pageNumber", t),
    (await ge("GET", "api/v2/gallery?" + n.toString())).data
  );
}
async function GE() {
  return (await ge("GET", "api/v1/gallery/suggestions/list")).data.suggestions;
}
async function km() {
  return (await ge("GET", "api/v2/client-settings")).data;
}
async function Tm(e) {
  return (await ge("POST", "api/v2/api-keys", e)).data.apiKey;
}
async function Im(e) {
  return (await ge("DELETE", "api/v2/api-keys", e)).data;
}
async function Am(e) {
  return (await ge("GET", "api/v2/api-keys", e)).data;
}
async function QE(e) {
  const t = {
      method: "GET",
      mode: "cors",
      headers: {
        "x-api-key": e,
      },
    },
    n = await fetch(zo("api/v2/api-keys"), t);
  return (await Sl(n)).data;
}
async function XE(e, t, n) {
  await ge("PUT", "api/v2/admin/administrators", e, {
    uid: t,
    totalReviews: n,
  });
}
async function YE(e, t, n) {
  await ge("PUT", "api/v2/admin/administrators", e, {
    uid: t,
    sessionReviews: n,
  });
}
async function JE(e) {
  return (await ge("GET", "api/v1/admin/dirty-words", e)).data.dirtyWords;
}
async function ZE(e, t) {
  await ge("POST", "api/v1/admin/dirty-words", e, {
    dirtyWords: t,
  });
}
async function eS(e) {
  return (await ge("GET", "api/v2/admin/administrators", e)).data
    .administrators;
}
async function tS(e, t, n) {
  await ge("POST", "api/v2/admin/administrators", e, {
    uid: t,
    name: n,
  });
}
async function nS(e, t) {
  await ge("DELETE", "api/v2/admin/administrators", e, {
    uid: t,
  });
}
async function rS(e, t) {
  await ge("PUT", `api/v2/admin/wheels/${t}`, e, {
    shareMode: "copyable",
  });
}
async function iS(e) {
  return (await ge("GET", "api/v2/admin/review-queue/next-shared-wheel", e))
    .data.wheel;
}
async function oS(e) {
  return (await ge("GET", "api/v2/admin/review-queue/next-gallery-wheel", e))
    .data.wheel;
}
async function sS(e, t) {
  await ge("POST", `api/v2/admin/review-queue/approve/${t}`, e);
}
async function aS(e, t) {
  await ge("POST", `api/v2/admin/review-queue/reject/${t}`, e);
}
async function lS(e, t) {
  await ge("PUT", "api/v2/admin/client-settings", e, {
    carouselSlides: t,
  });
}
async function cS() {
  return (await ge("GET", "api/v2/languages")).data.languages;
}
async function uS() {
  const n = await fetch(
      "https://discord-bot-wada35rq7a-uc.a.run.app/guild-count",
      {
        method: "GET",
        mode: "cors",
      }
    ),
    r = await Sl(n);
  if (r.hasOwnProperty("guildCount")) return r.guildCount;
  throw "No guildCount property in response";
}
async function Om(e, t) {
  return await fS("GET", `api/v2/wheels/thumbnails/${e}`, t);
}
async function ge(e, t, n, r) {
  const i = {
    method: e,
    mode: "cors",
    headers: {},
  };
  n && (i.headers.Authorization = n),
    r &&
      ((i.headers["Content-Type"] = "application/json"),
      (i.body = JSON.stringify(r)));
  const o = await fetch(zo(t), i);
  return await Sl(o);
}
async function fS(e, t, n, r) {
  const i = {
    method: e,
    mode: "cors",
    headers: {},
  };
  return (
    n && (i.headers.Authorization = n), await (await fetch(zo(t), i)).blob()
  );
}
async function Sl(e) {
  const t = await e.text();
  if (t.startsWith("<")) throw t;
  const n = JSON.parse(t);
  if (n.hasOwnProperty("error")) throw n.error;
  return n;
}
const pT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        addAdmin: tS,
        approveSharedWheel: sS,
        changeWheelOwner: ha,
        createAccount: Sm,
        createSharedWheel: hm,
        deleteAccount: Cm,
        deleteAdmin: nS,
        deleteExistingApiKey: Im,
        deleteWheel: Em,
        generateApiKey: Tm,
        getAdmins: eS,
        getDirtyWords: JE,
        getDiscordBotServerCount: uS,
        getExistingApiKey: Am,
        getGallerySuggestions: GE,
        getLangugagesForMyAddress: cS,
        getMyWheels: bm,
        getNextGalleryWheelForReview: oS,
        getNextSharedWheelForReview: iS,
        getReviewQueue: BE,
        getSavedWheel: vm,
        getSavedWheels: pm,
        getSettings: km,
        getSharedWheel: mm,
        getSharedWheels: gm,
        getWheel: _m,
        getWheelThumbnail: Om,
        rejectSharedWheel: aS,
        removeWheelFromGallery: rS,
        saveCarouselSlides: lS,
        saveWheel: ym,
        searchGalleryWheels: KE,
        searchGalleryWheels2: zE,
        setAdminsSessionReviews: YE,
        setAdminsTotalReviews: XE,
        setDirtyWords: ZE,
        testApiKey: QE,
        translate: HE,
        updateWheel: wm,
        userIsAdmin: El,
      },
      Symbol.toStringTag,
      {
        value: "Module",
      }
    )
  ),
  dS = {
    state: {
      wheelConfig: new pt(),
      sheetLinked: !1,
      wheelIsBusy: !1,
      winnerEntry: {},
      winners: [],
      path: "",
      copyable: !1,
      shareMode: "",
      previousWheelConfig: "",
    },
    getters: {
      wheelType: (e) => e.wheelConfig.type,
      entries: (e) => e.wheelConfig.entries,
      entryCount: (e) => e.wheelConfig.entries.length,
      winners: (e) => e.winners,
      winnerCount: (e) => e.winners.length,
      winnerIndex: (e) =>
        e.wheelConfig.entries.findIndex((t) => t.id == e.winnerEntry.id),
      wheelConfig: (e) => e.wheelConfig,
      enabledColors: (e) =>
        e.wheelConfig.colorSettings.filter((t) => t.enabled),
      sheetLinked: (e) => e.sheetLinked,
      wheelPath: (e) => e.path,
      wheelIsBusy: (e) => e.wheelIsBusy,
      wheelIsShared: (e) => hl(e.shareMode),
      wheelIsCopyable: (e) => e.copyable,
      shareMode: (e) => e.shareMode,
      wheelIsAdvanced: (e) => e.wheelConfig.isAdvanced,
      wheelTitle: (e) => e.wheelConfig.title,
      wheelDescription: (e) => e.wheelConfig.description,
      showTitle: (e) => e.wheelConfig.showTitle,
      hubSize: (e) => e.wheelConfig.hubSize,
    },
    mutations: {
      setWheelConfig(e, t) {
        const n = new pt();
        n.loadValues(t), (n.entries = We(n.entries)), (e.wheelConfig = n);
      },
      setWheelConfigNoPersist(e, t) {
        if (ul(e.wheelConfig, t)) return;
        const n = new pt();
        n.loadValues(t), (n.entries = We(n.entries)), (e.wheelConfig = n);
      },
      saveWheelConfigForUndo(e) {
        e.previousWheelConfig = JSON.stringify(e.wheelConfig);
      },
      undoWheelConfigChange(e) {
        const t = e.wheelConfig.clone();
        t.loadValues(JSON.parse(e.previousWheelConfig)),
          this.commit("setWheelConfig", t);
      },
      persistWheelConfig(e) {
        this.commit("setWheelConfig", e.wheelConfig);
      },
      setGrayEmptyWheel(e) {
        const t = e.wheelConfig.clone();
        (t.entries = We([
          {
            test: " ",
          },
        ])),
          (t.title = ""),
          t.setColorValues(["#bbb"]),
          this.commit("setWheelConfig", t);
      },
      setWheelTitle(e, t) {
        const n = e.wheelConfig.clone();
        (n.title = t), this.commit("setWheelConfig", n);
      },
      setWheelDescription(e, t) {
        const n = e.wheelConfig.clone();
        (n.description = t), this.commit("setWheelConfig", n);
      },
      setShowTitle(e, t) {
        const n = e.wheelConfig.clone();
        (n.showTitle = t), this.commit("setWheelConfig", n);
      },
      setEntries(e, t) {
        const n = e.wheelConfig.clone();
        (n.entries = We(t)), this.commit("setWheelConfig", n);
      },
      shuffleEntries(e) {
        const t = e.wheelConfig.clone();
        (t.entries = Fh(e.wheelConfig.entries)),
          this.commit("setWheelConfig", t);
      },
      sortEntries(e) {
        const t = e.wheelConfig.clone();
        (t.entries = fa(e.wheelConfig.entries)),
          this.commit("setWheelConfig", t);
      },
      appendEntry(e, t) {
        const n = e.wheelConfig.clone();
        n.entries.push(t),
          (n.entries = We(n.entries)),
          this.commit("setWheelConfig", n);
      },
      setEntryText(e, { index: t, text: n }) {
        const r = e.wheelConfig.clone();
        (r.entries[t].text = n),
          (r.entries = We(r.entries)),
          this.commit("setWheelConfig", r);
      },
      setEntryColor(e, { index: t, color: n }) {
        const r = e.wheelConfig.clone();
        (r.entries[t].color = n),
          (r.entries = We(r.entries)),
          this.commit("setWheelConfig", r);
      },
      setEntryGradientColor(e, { index: t, color: n }) {
        const r = e.wheelConfig.clone();
        (r.entries[t].gradientColor = n),
          (r.entries = We(r.entries)),
          this.commit("setWheelConfig", r);
      },
      setEntrySound(e, { index: t, sound: n }) {
        const r = e.wheelConfig.clone();
        n ? (r.entries[t].sound = n) : delete r.entries[t].sound,
          (r.entries = We(r.entries)),
          this.commit("setWheelConfig", r);
      },
      setEntryMessage(e, { index: t, message: n }) {
        const r = e.wheelConfig.clone();
        n ? (r.entries[t].message = n) : delete r.entries[t].message,
          (r.entries = We(r.entries)),
          this.commit("setWheelConfig", r);
      },
      setEntryEnabled(e, { index: t, enabled: n }) {
        const r = e.wheelConfig.clone();
        (r.entries[t].enabled = n),
          (r.entries = We(r.entries)),
          this.commit("setWheelConfig", r);
      },
      setEntryWeight(e, { index: t, weight: n }) {
        const r = e.wheelConfig.clone();
        (r.entries[t].weight = n),
          (r.entries = We(r.entries)),
          this.commit("setWheelConfig", r);
      },
      refreshEntries(e) {
        const t = e.wheelConfig.clone();
        (t.entries = We(t.entries)), this.commit("setWheelConfig", t);
      },
      setTextEntries(e, t) {
        const n = e.wheelConfig.clone();
        (n.entries = We(
          t.map((r) => ({
            text: r,
          }))
        )),
          this.commit("setWheelConfig", n);
      },
      appendTextEntries(e, t) {
        const n = e.wheelConfig.clone();
        (n.entries = We(
          n.entries.concat(
            t.map((r) => ({
              text: r,
            }))
          )
        )),
          this.commit("setWheelConfig", n);
      },
      removeTextEntries(e, t) {
        const n = e.wheelConfig.clone();
        (n.entries = We(n.entries.filter((r) => !t.includes(r.text)))),
          this.commit("setWheelConfig", n);
      },
      removeEntryByIndex(e, t) {
        const n = e.wheelConfig.clone();
        n.entries.splice(t, 1),
          (e.sheetLinked = !1),
          this.commit("setWheelConfig", n);
      },
      removeEntry(e, t) {
        const n = e.wheelConfig.clone(),
          r = n.entries.findIndex((i) => i.id === t.id);
        r > -1 &&
          (n.entries.splice(r, 1),
          (e.sheetLinked = !1),
          this.commit("setWheelConfig", n));
      },
      removeEntryAll(e, t) {
        const n = e.wheelConfig.clone();
        (n.entries = n.entries.filter(
          (r) => !r.text || r.text.trim() != t.text.trim()
        )),
          (e.sheetLinked = !1),
          this.commit("setWheelConfig", n);
      },
      hideEntry(e, t) {
        const n = e.wheelConfig.clone(),
          r = n.entries.find((i) => i.id === t.id);
        r && (r.enabled = !1), this.commit("setWheelConfig", n);
      },
      moveEntry(e, { index: t, direction: n }) {
        const r = e.wheelConfig.clone(),
          i = r.entries[t];
        (r.entries[t] = r.entries[t + n]),
          (r.entries[t + n] = i),
          (r.entries = We(r.entries)),
          this.commit("setWheelConfig", r);
      },
      duplicateEntry(e, t) {
        const n = e.wheelConfig.clone(),
          r = n.entries[t],
          i = Object.assign({}, r);
        (i.id = dl()),
          n.entries.splice(t + 1, 0, i),
          (n.entries = We(n.entries)),
          this.commit("setWheelConfig", n);
      },
      setColorValues(e, t) {
        const n = e.wheelConfig.clone();
        n.setColorValues(t), this.commit("setWheelConfig", n);
      },
      setHubSize(e, t) {
        const n = e.wheelConfig.clone();
        (n.hubSize = t), this.commit("setWheelConfig", n);
      },
      setUploadedCenterImage(e, { fileName: t, dataUri: n }) {
        const r = e.wheelConfig.clone();
        (r.type = "color"),
          r.setUploadedCenterImage(t, n),
          this.commit("setWheelConfig", r);
      },
      setUploadedBackgroundImage(e, { fileName: t, dataUri: n }) {
        const r = e.wheelConfig.clone();
        (r.type = "image"),
          r.setUploadedBackgroundImage(t, n),
          this.commit("setWheelConfig", r);
      },
      setGalleryBackgroundImage(e, t) {
        const n = e.wheelConfig.clone();
        (n.type = "image"),
          n.setGalleryBackgroundImage(t),
          this.commit("setWheelConfig", n);
      },
      setGalleryCenterImage(e, t) {
        const n = e.wheelConfig.clone();
        (n.type = "color"),
          n.setGalleryCenterImage(t),
          this.commit("setWheelConfig", n);
      },
      removeImageFromEntry(e, t) {
        const n = e.wheelConfig.clone();
        delete n.entries[t].image, this.commit("setWheelConfig", n);
      },
      setWheelBusy(e, t) {
        e.wheelIsBusy = t;
      },
      linkSheet(e) {
        e.sheetLinked = !0;
      },
      unlinkSheet(e) {
        e.sheetLinked = !1;
      },
      setPath(e, t) {
        e.path = t;
      },
      setUnshared(e) {
        (e.path = ""), (e.shareMode = "");
      },
      setShareMode(e, t) {
        e.shareMode = t;
      },
      setCopyable(e, { copyable: t, editable: n }) {
        typeof n != "undefined" && (e.copyable = n),
          typeof t != "undefined" && (e.copyable = t);
      },
      addWinner(e, t) {
        e.winnerEntry = t;
        const n = e.winners.slice(0);
        n.push(t), (e.winners = n);
      },
      sortWinners(e) {
        e.winners = fa(e.winners);
      },
      clearWinners(e) {
        e.winners = [];
      },
      setVolumes(e, { duringSpinSoundVolume: t, afterSpinSoundVolume: n }) {
        const r = e.wheelConfig.clone();
        (r.duringSpinSoundVolume = t),
          (r.afterSpinSoundVolume = n),
          this.commit("setWheelConfig", r);
      },
    },
    actions: {
      loadInitialEditableWheel(e) {
        const t = new pt();
        t.loadJson(localStorage.getItem("LastWheelConfig") || "{}"),
          e.commit("setWheelConfig", t);
      },
      async loadInitialSharedWheel(e, t) {
        e.commit("setPath", t), e.commit("setGrayEmptyWheel");
        try {
          const n = await mm(t);
          e.commit("setShareMode", n.shareMode),
            e.commit("setCopyable", {
              copyable: ["copyable", "gallery"].includes(n.shareMode),
              editable: n.editable,
            });
          const r = new pt();
          r.loadValues(n.wheelConfig), e.commit("setWheelConfigNoPersist", r);
        } catch (n) {
          throw (
            (e.commit("setWheelConfig", new pt()), e.commit("setUnshared"), n)
          );
        }
      },
      resetWheel(e) {
        const t = new pt();
        e.commit("unlinkSheet"),
          e.commit("setWheelConfig", t),
          e.commit("clearWinners");
      },
      async appendImageEntry(e, t) {
        const n = e.state.wheelConfig.entries.slice(0);
        let r;
        if (e.state.wheelConfig.isAdvanced) {
          const i = await Gt.getImageFromData(t);
          Gt.topLeftIsFullyTransparent(i)
            ? (r = {
                text: "",
                image: t,
                weight: 1,
                enabled: !0,
              })
            : (r = {
                text: "",
                image: t,
                color: Gt.getTopLeftColor(i).slice(0, 7),
                weight: 1,
                enabled: !0,
              });
        } else
          r = {
            text: "",
            image: t,
          };
        n.push(r), e.commit("setEntries", n);
      },
      async attachImageToEntry(e, { imageData: t, index: n }) {
        const r = structuredClone(e.state.wheelConfig.entries),
          i = await Gt.getImageFromData(t);
        if (!Gt.topLeftIsFullyTransparent(i)) {
          const s = Gt.getTopLeftColor(i).slice(0, 7);
          r[n].color = s;
        }
        (r[n].image = t), e.commit("setEntries", r);
      },
      async setAdvanced(e, t) {
        let n = e.state.wheelConfig.clone();
        if (((n.isAdvanced = t), t))
          for (let r = 0; r < n.entries.length; r++) {
            const i = n.entries[r];
            if (i.image) {
              const o = await Gt.getImageFromData(i.image);
              Gt.topLeftIsFullyTransparent(o) ||
                (i.color = Gt.getTopLeftColor(o).slice(0, 7));
            }
            (i.weight = 1), (i.enabled = !0);
          }
        else
          n.entries.forEach((r) => {
            delete r.color,
              delete r.weight,
              delete r.enabled,
              delete r.sound,
              delete r.message;
          }),
            (n.entries = n.entries.filter((r) => r.text || r.image));
        e.commit("setWheelConfig", n);
      },
    },
  };
async function hS(e) {
  const t = await Nm(e);
  return !!t && !t.isAnonymous;
}
async function Nm(e) {
  return e.currentUser
    ? e.currentUser
    : new Promise(function (t) {
        e.onAuthStateChanged(function (n) {
          t(n);
        });
      });
}
async function mS(e, t) {
  return (
    t.setCustomParameters({
      prompt: "select_account",
    }),
    await e.signInWithPopup(t),
    e.currentUser
  );
}
async function gS(e) {
  return await e.signInAnonymously(), e.currentUser;
}
async function pS(e, t) {
  return (
    t.addScope("https://www.googleapis.com/auth/drive.readonly"),
    t.addScope("https://www.googleapis.com/auth/spreadsheets.readonly"),
    t.setCustomParameters({
      prompt: "select_account",
    }),
    (await e.signInWithPopup(t)).credential.accessToken
  );
}
const vS = [
    {
      partialName: "noms",
      locale: "fr",
    },
  ],
  Ko = [
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
function Pm(e, t) {
  return OS(e) === t ? "/" : `/${t}/`;
}
function _S(e, t, n) {
  return (e + Pm(e, t) + "/" + n).replace("//", "/");
}
function Cl(e, t) {
  const n = Ko.find((i) => i.name == t),
    r = e.toLowerCase() === "twitter" ? "twitterName" : "googleName";
  return (n == null ? void 0 : n[r]) || "en_US";
}
function bS(e) {
  var t;
  return (
    ((t = Ko.find((n) => n.name === e)) == null
      ? void 0
      : t.file.slice(0, -5)) || "en-US"
  );
}
function yS(e, t) {
  const n = Eu("")(t);
  return sm.pipe(xm, SS(e), Eu({}), (r) => {
    var i;
    return (i = r.name) != null ? i : "";
  })([n]);
}
function wS(e) {
  return Array.isArray(e) ? sm.pipe(xm, kS, IS)(e) : [];
}
function ES() {
  return Ko.map((e) => ({
    name: e.name,
    humanName: e.humanName,
  })).sort(CS);
}
function SS(e) {
  return function (t) {
    return t.filter((n) => !Lm(e, n.name));
  };
}
function xm(e) {
  return Ko.filter((t) => e.some((n) => Lm(n, t.name)));
}
function Eu(e) {
  return function (t) {
    var n;
    return (n = t == null ? void 0 : t[0]) != null ? n : e;
  };
}
function CS(e, t) {
  return e.humanName.localeCompare(t.humanName);
}
function kS(e) {
  return e.filter((t) => !TS(t));
}
function TS(e) {
  return e.name === "en-PI";
}
function IS(e) {
  return e.map(AS);
}
function AS(e) {
  return {
    name: e.name,
    humanName: e.humanName,
  };
}
function OS(e) {
  var t;
  return (
    ((t = vS.find((n) => e.includes(n.partialName))) == null
      ? void 0
      : t.locale) || "en"
  );
}
function Lm(e, t) {
  return e.length === t.length ? e === t : Su(e) === Su(t);
}
function Su(e) {
  return e.split("-")[0];
}
const vT = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      getAbsoluteUrl: _S,
      getLangTipLocale: yS,
      getLoginLocale: Cl,
      getMessagesFileName: bS,
      getNamesForAll: ES,
      getRecommendedLocales: wS,
      getRelativeUrl: Pm,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    }
  )
);
let Me, ma, _s;
async function cr() {
  Me || (await LS(), RS(Me), DS(Me));
}
async function Rm() {
  return await hS(Me.auth());
}
async function Sr() {
  return await Nm(Me.auth());
}
async function Ve() {
  const e = await Sr();
  if (e) return await e.getIdToken();
}
async function Mm() {
  const e = await Sr();
  if (e) return e.uid;
}
async function ga() {
  const e = await Sr();
  if (e && e.isAnonymous) return await e.getIdToken();
}
function Dm(e) {
  return (
    FS(),
    new Promise((t) => {
      _s || (_s = new ma.auth.AuthUI(Me.auth())),
        _s.start(`#${e}`, {
          signInFlow: "popup",
          credentialHelper: ma.auth.CredentialHelper.NONE,
          signInOptions: [
            {
              provider: Me.auth.GoogleAuthProvider.PROVIDER_ID,
              customParameters: {
                prompt: "select_account",
              },
            },
            Me.auth.TwitterAuthProvider.PROVIDER_ID,
            Me.auth.EmailAuthProvider.PROVIDER_ID,
          ],
          callbacks: {
            signInSuccessWithAuthResult: (n) => (t(n.user), !!n.user),
          },
          tosUrl: "/faq/terms",
          privacyPolicyUrl: "/privacy-policy.html",
        });
    })
  );
}
async function NS(e, t) {
  const n = Me.auth();
  n.languageCode = Cl(e, t);
  const r = jm(e);
  return await mS(n, r);
}
async function Fm() {
  const e = Me.auth();
  return await gS(e);
}
async function $m(e) {
  const t = Me.auth();
  t.languageCode = Cl("Google", e);
  const n = jm("Google");
  return await pS(t, n);
}
function pa() {
  try {
    Me.auth().signOut();
  } catch {}
}
function PS(e, t) {
  Me.firestore()
    .doc(`live-wheels/${e}`)
    .onSnapshot((i) => t(i.data()));
}
function xS(e, t) {
  Me.firestore()
    .doc(`live-wheels/${e}/live-wheels-state/spin-state`)
    .onSnapshot((i) => t(i.data()));
}
async function LS() {
  (Me = (await me(() => import("./index.esm-v319.js"), __vite__mapDeps([0, 1])))
    .default),
    await me(() => import("./index.esm-v3193.js"), __vite__mapDeps([2, 1])),
    await me(() => import("./index.esm-v3192.js"), __vite__mapDeps([3, 1])),
    (ma = await me(
      () => import("./esm-v319.js"),
      __vite__mapDeps([4, 0, 1, 2, 5])
    ));
}
function RS(e) {
  if (MS()) return;
  const t = {
    apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
    authDomain: "wheel-of-names-firebase.firebaseapp.com",
    databaseURL: "https://wheel-of-names-firebase.firebaseio.com",
    projectId: "wheel-of-names-firebase",
    timestampsInSnapshots: !0,
  };
  e.initializeApp(t);
}
function MS() {
  return Me.apps && Me.apps.length > 0;
}
function DS(e) {
  const t = e.firestore();
  if (Lh(navigator.userAgent))
    try {
      t.enablePersistence({
        synchronizeTabs: !0,
      });
    } catch {}
}
function jm(e) {
  const t = {
    google: new Me.auth.GoogleAuthProvider(),
    facebook: new Me.auth.FacebookAuthProvider(),
    twitter: new Me.auth.TwitterAuthProvider(),
  };
  return t[e.toLowerCase()] || t.google;
}
function FS() {
  if (document.querySelector("#firebaseui-auth-css-link")) return;
  const t = document.querySelector("head"),
    n = document.createElement("link");
  (n.id = "firebaseui-auth-css-link"),
    (n.rel = "stylesheet"),
    (n.type = "text/css"),
    (n.href =
      "https://www.gstatic.com/firebasejs/ui/6.1.0/firebase-ui-auth.css"),
    (n.media = "all"),
    t.appendChild(n);
}
const _T = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        getAnonymousTokenId: ga,
        getLoggedInUser: Sr,
        getUid: Mm,
        getUserIdToken: Ve,
        loadAuthUserInterface: Dm,
        loadLibraries: cr,
        logIn: NS,
        logInAnonymously: Fm,
        logInToSheets: $m,
        logOut: pa,
        observeLiveWheel: PS,
        observeLiveWheelSpinState: xS,
        userIsLoggedIn: Rm,
      },
      Symbol.toStringTag,
      {
        value: "Module",
      }
    )
  ),
  $S = {
    state: {
      userPhotoUrl: "",
      userDisplayName: "",
    },
    getters: {
      userPhotoUrl: (e) => e.userPhotoUrl,
      userDisplayName: (e) => e.userDisplayName,
    },
    mutations: {
      setUserPhotoUrl(e, t) {
        e.userPhotoUrl = t || "/images/user_profile.png";
      },
      setUserDisplayName(e, t) {
        e.userDisplayName = t;
      },
      clearUser(e) {
        (e.userPhotoUrl = ""), (e.userDisplayName = "");
      },
    },
    actions: {
      async userIsLoggedIn({ state: e, commit: t, rootState: n }) {
        await cr();
        const r = await Rm();
        if (r) {
          const i = await Sr();
          t("setUserPhotoUrl", i.photoURL),
            t("setUserDisplayName", i.displayName);
        }
        return r;
      },
      async logOut({ state: e, commit: t, rootState: n }) {
        pa(), t("clearUser");
      },
      async deleteAccount({ state: e, commit: t, rootState: n }) {
        const r = await Ve();
        await Cm(r), pa(), t("clearUser");
      },
      async loginAnonymously(e) {
        await Fm();
      },
      async loginWithUi({ state: e, commit: t, rootState: n }, r) {
        await cr();
        const i = await ga(),
          o = await Dm(r);
        t("setUserPhotoUrl", o.photoURL),
          t("setUserDisplayName", o.displayName);
        const s = await Ve();
        await Sm(s), i && (await ha(i, s));
      },
      async logInToSheets({ state: e, commit: t, rootState: n }, r) {
        await cr();
        const i = await ga(),
          o = await $m(r),
          s = await Sr();
        return (
          t("setUserPhotoUrl", s.photoURL),
          t("setUserDisplayName", s.displayName),
          i && (await ha(i, await Ve())),
          o
        );
      },
      async userIsAdmin() {
        await cr();
        const e = await Ve();
        try {
          return await El(e);
        } catch {
          return !1;
        }
      },
      async getUid() {
        return await Mm();
      },
      async getUserIdToken() {
        return await Ve();
      },
      async getSavedWheels(e, { fields: t }) {
        const n = await Ve();
        let r = await pm(n, t);
        return (
          (r = r.sort((i, o) =>
            i.config.title.localeCompare(o.config.title, "en", {
              numeric: !0,
              sensitivity: "base",
            })
          )),
          r
        );
      },
      async loadSavedWheel(e, t) {
        const n = await Ve();
        return await vm(n, t);
      },
      async loadWheel(e, t) {
        const n = await Ve();
        return await _m(t, n);
      },
      async loadMyWheels(e, { fields: t }) {
        const n = await Ve();
        return (await bm(n, t)).sort((i, o) =>
          i.wheelConfig.title
            ? o.wheelConfig.title
              ? i.wheelConfig.title.localeCompare(o.wheelConfig.title, "en", {
                  numeric: !0,
                  sensitivity: "base",
                })
              : -1
            : 1
        );
      },
      async saveWheel(e, t) {
        const n = await Ve();
        await ym(n, t);
      },
      async getSharedWheels(e, { fields: t }) {
        const n = await Ve();
        return await gm(n, t);
      },
      async shareWheel(
        e,
        { wheelConfig: t, shareMode: n, editPermissions: r, password: i }
      ) {
        const o = await Ve();
        return await hm({
          wheelConfig: t,
          idToken: o,
          shareMode: n,
          editPermissions: r,
          password: i,
        });
      },
      async updateWheel(e, { path: t, shareMode: n, wheelConfig: r }) {
        const i = await Ve();
        return await wm(i, t, {
          shareMode: n,
          wheelConfig: r,
        });
      },
      async deleteWheel(e, t) {
        const n = await Ve();
        await Em(n, t);
      },
      async amIOwner(e, t) {
        throw "Not implemented";
      },
      async generateApiKey() {
        const e = await Ve();
        return await Tm(e);
      },
      async getExistingApiKey() {
        const e = await Ve();
        return await Am(e);
      },
      async deleteExistingApiKey() {
        const e = await Ve();
        await Im(e);
      },
      async getWheelThumbnail(e, t) {
        const n = await Ve();
        return await Om(t, n);
      },
    },
  },
  jS = {
    state: {
      version: "319",
      appInfoVisible: !0,
      darkMode: "auto",
      latestSeenVersion: 0,
      userHasSeenCurrentVersion: !1,
      seenUkraineBanner: !1,
      wheelLocation: "",
    },
    getters: {
      version: (e) => e.version,
      darkMode: (e) => e.darkMode,
      appInfoVisible: (e) => e.appInfoVisible,
      userHasSeenCurrentVersion: (e) => e.userHasSeenCurrentVersion,
      seenUkraineBanner: (e) => e.seenUkraineBanner,
      wheelLocation: (e) => e.wheelLocation,
    },
    mutations: {
      setDurablePrefs(
        e,
        {
          appInfoVisible: t,
          darkMode: n,
          latestSeenVersion: r,
          seenUkraineBanner: i,
          wheelLocation: o,
        }
      ) {
        (e.appInfoVisible = t),
          (e.darkMode = n),
          (e.latestSeenVersion = r),
          (e.seenUkraineBanner = i),
          (e.wheelLocation = o),
          er(e);
      },
      setLatestSeenVersion(e, t) {
        (e.latestSeenVersion = t), er(e);
      },
      setUserHasSeenCurrentVersion(e, t) {
        e.userHasSeenCurrentVersion = t;
      },
      toggleAppInfoVisibility(e) {
        (e.appInfoVisible = !e.appInfoVisible), er(e);
      },
      setDarkMode(e, t) {
        (e.darkMode = t), er(e);
      },
      setSeenUkraineBanner(e) {
        (e.seenUkraineBanner = !0), er(e);
      },
      setWheelLocation(e, t) {
        (e.wheelLocation = t), er(e);
      },
      switchWheelLocation(e) {
        e.wheelLocation === "local"
          ? (e.wheelLocation = "cloud")
          : (e.wheelLocation = "local");
      },
    },
    actions: {
      loadPreferences({ state: e, commit: t }) {
        try {
          const r = JSON.parse(localStorage.getItem("Preferences"));
          t("setDurablePrefs", {
            appInfoVisible: r.appInfoVisible,
            darkMode: r.darkMode,
            latestSeenVersion: r.latestSeenVersion,
            seenUkraineBanner: r.seenUkraineBanner,
            wheelLocation: r.wheelLocation,
          });
        } catch {}
        const n = e.version;
        t("setUserHasSeenCurrentVersion", n == e.latestSeenVersion),
          t("setLatestSeenVersion", n);
      },
    },
  };
function er(e) {
  const t = {
    appInfoVisible: e.appInfoVisible,
    darkMode: e.darkMode,
    latestSeenVersion: e.latestSeenVersion,
    seenUkraineBanner: e.seenUkraineBanner,
    wheelLocation: e.wheelLocation,
  };
  localStorage.setItem("Preferences", JSON.stringify(t));
}
const VS = {
    state: {
      settings: {
        carouselSlides: [],
        spinsPerSecond: 30,
        hoursSpunPerSecond: 0.08,
        maintenanceMessage: "",
        readOnlyMode: !1,
        commitHash: "?",
      },
    },
    getters: {
      carouselSlides: (e) => e.settings.carouselSlides,
      spinsPerSecond: (e) => e.settings.spinsPerSecond,
      hoursSpunPerSecond: (e) => e.settings.hoursSpunPerSecond,
      maintenanceMessage: (e) => e.settings.maintenanceMessage,
      readOnlyMode: (e) => e.settings.readOnlyMode,
      commitHash: (e) => e.settings.commitHash,
      advertiser: (e) => e.settings.advertiser,
    },
    mutations: {
      setSettings(e, t) {
        e.settings = {
          ...e.settings,
          ...t,
        };
        const n = Object.entries(t.advertiserWeights || {}).reduce(
            (i, [o, s]) => i.concat(Array(s).fill(o)),
            []
          ),
          r = Math.floor(Math.random() * n.length);
        e.settings.advertiser = n[r];
      },
    },
    actions: {
      async loadServerSettings({ dispatch: e, commit: t }) {
        try {
          const n = await km();
          t("setSettings", n);
        } catch (n) {
          console.log(n);
        }
      },
    },
  },
  Ki = function () {
    const e = hy({
      modules: {
        wheel: dS,
        user: $S,
        preferences: jS,
        serverSettings: VS,
      },
      strict: !1,
    });
    return (
      e.subscribe((t, n) => {
        t.type == "setWheelConfig" &&
          (hl(n.wheel.shareMode) ||
            localStorage.setItem(
              "LastWheelConfig",
              n.wheel.wheelConfig.getJson()
            ));
      }),
      e
    );
  },
  qS = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Ki,
      },
      Symbol.toStringTag,
      {
        value: "Module",
      }
    )
  ),
  WS = [
    {
      path: "/faq.html",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/FaqPage-v319.js"),
          __vite__mapDeps([
            6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
          ])
        ),
    },
    {
      path: "/faq/:section?",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/FaqPage-v319.js"),
          __vite__mapDeps([
            6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
          ])
        ),
    },
    {
      path: "/user-reviews-and-tutorials",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/TutorialsPage-v319.js"),
          __vite__mapDeps([23, 7, 24, 25, 11, 12, 13, 14])
        ),
    },
    {
      path: "/how-to-use-in-the-classroom",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/ClassroomPage-v319.js"),
          __vite__mapDeps([26, 7, 24, 25, 11, 12, 13, 14])
        ),
    },
    {
      path: "/privacy-policy.html",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/PrivacyPolicyPage-v319.js"),
          __vite__mapDeps([27, 7, 19, 21, 11, 12, 13, 14, 28])
        ),
    },
    {
      path: "/privacy-policy",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/PrivacyPolicyPage-v319.js"),
          __vite__mapDeps([27, 7, 19, 21, 11, 12, 13, 14, 28])
        ),
    },
    {
      path: "/changelog",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/ChangelogPage-v319.js"),
          __vite__mapDeps([29, 7, 11, 12, 13, 14, 21, 30])
        ),
    },
    {
      path: "/gallery",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/GalleryPage-v319.js"),
          __vite__mapDeps([
            31, 32, 7, 33, 34, 17, 35, 36, 37, 10, 20, 38, 11, 12, 13, 14, 39,
          ])
        ),
    },
    {
      path: "/noads",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/EditWheelPage-v319.js"),
          __vite__mapDeps([
            40, 32, 7, 12, 35, 36, 37, 10, 41, 5, 42, 43, 17, 8, 9, 19, 20, 44,
            25, 45, 46, 21, 16, 47, 48,
          ])
        ),
    },
    {
      path: "/enthusiast",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/EditWheelPage-v319.js"),
          __vite__mapDeps([
            40, 32, 7, 12, 35, 36, 37, 10, 41, 5, 42, 43, 17, 8, 9, 19, 20, 44,
            25, 45, 46, 21, 16, 47, 48,
          ])
        ),
    },
    {
      path: "/api-doc",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/ApiPage-v319.js"),
          __vite__mapDeps([49, 7, 11, 12, 13, 14, 15, 16, 17, 18])
        ),
    },
    {
      path: "/:lang([a-z][a-z])?",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/EditWheelPage-v319.js"),
          __vite__mapDeps([
            40, 32, 7, 12, 35, 36, 37, 10, 41, 5, 42, 43, 17, 8, 9, 19, 20, 44,
            25, 45, 46, 21, 16, 47, 48,
          ])
        ),
    },
    {
      path: "/:lang([a-z][a-z]-[A-Z][A-Z])?",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/EditWheelPage-v319.js"),
          __vite__mapDeps([
            40, 32, 7, 12, 35, 36, 37, 10, 41, 5, 42, 43, 17, 8, 9, 19, 20, 44,
            25, 45, 46, 21, 16, 47, 48,
          ])
        ),
    },
    {
      path: "/:lang([a-z][a-z][a-z])",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/EditWheelPage-v319.js"),
          __vite__mapDeps([
            40, 32, 7, 12, 35, 36, 37, 10, 41, 5, 42, 43, 17, 8, 9, 19, 20, 44,
            25, 45, 46, 21, 16, 47, 48,
          ])
        ),
    },
    {
      path: "/:lang([a-z][a-z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/SharedWheelPage-v319.js"),
          __vite__mapDeps([
            50, 32, 7, 12, 35, 41, 37, 10, 5, 42, 43, 17, 8, 9, 36, 19, 20, 44,
            25, 45, 46,
          ])
        ),
    },
    {
      path: "/:lang([a-z][a-z]-[A-Z][A-Z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/SharedWheelPage-v319.js"),
          __vite__mapDeps([
            50, 32, 7, 12, 35, 41, 37, 10, 5, 42, 43, 17, 8, 9, 36, 19, 20, 44,
            25, 45, 46,
          ])
        ),
    },
    {
      path: "/:lang([a-z][a-z][a-z])/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/SharedWheelPage-v319.js"),
          __vite__mapDeps([
            50, 32, 7, 12, 35, 41, 37, 10, 5, 42, 43, 17, 8, 9, 36, 19, 20, 44,
            25, 45, 46,
          ])
        ),
    },
    {
      path: "/view/:lang([a-z][a-z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/SharedWheelPage-v319.js"),
          __vite__mapDeps([
            50, 32, 7, 12, 35, 41, 37, 10, 5, 42, 43, 17, 8, 9, 36, 19, 20, 44,
            25, 45, 46,
          ])
        ),
    },
    {
      path: "/view/:lang([a-z][a-z]-[A-Z][A-Z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/SharedWheelPage-v319.js"),
          __vite__mapDeps([
            50, 32, 7, 12, 35, 41, 37, 10, 5, 42, 43, 17, 8, 9, 36, 19, 20, 44,
            25, 45, 46,
          ])
        ),
    },
    {
      path: "/view/:lang([a-z][a-z][a-z])/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/SharedWheelPage-v319.js"),
          __vite__mapDeps([
            50, 32, 7, 12, 35, 41, 37, 10, 5, 42, 43, 17, 8, 9, 36, 19, 20, 44,
            25, 45, 46,
          ])
        ),
    },
    {
      path: "/:lang([a-z][a-z])?/gallery",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/GalleryPage-v319.js"),
          __vite__mapDeps([
            31, 32, 7, 33, 34, 17, 35, 36, 37, 10, 20, 38, 11, 12, 13, 14, 39,
          ])
        ),
    },
    {
      path: "/:lang([a-z][a-z]-[A-Z][A-Z])?/gallery",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/GalleryPage-v319.js"),
          __vite__mapDeps([
            31, 32, 7, 33, 34, 17, 35, 36, 37, 10, 20, 38, 11, 12, 13, 14, 39,
          ])
        ),
    },
    {
      path: "/:lang([a-z][a-z][a-z])/gallery",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/GalleryPage-v319.js"),
          __vite__mapDeps([
            31, 32, 7, 33, 34, 17, 35, 36, 37, 10, 20, 38, 11, 12, 13, 14, 39,
          ])
        ),
    },
    {
      path: "/export",
      component: () =>
        me(
          () => import("./ExportPage-v319.js"),
          __vite__mapDeps([51, 7, 33, 11, 12, 13, 14, 52])
        ),
    },
    {
      path: "/translations",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/TranslationPage-v319.js"),
          __vite__mapDeps([53, 7, 21, 11, 12, 13, 14, 16])
        ),
    },
    {
      path: "/admin",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/AdminPage-v319.js"),
          __vite__mapDeps([54, 55, 35, 7, 33, 13, 44, 25, 56])
        ),
      meta: {
        adminOnly: !0,
      },
    },
    {
      path: "/admin.html",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/AdminPage-v319.js"),
          __vite__mapDeps([54, 55, 35, 7, 33, 13, 44, 25, 56])
        ),
      meta: {
        adminOnly: !0,
      },
    },
    {
      path: "/admin/review",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/ReviewWheelPage-v319.js"),
          __vite__mapDeps([
            57, 55, 35, 41, 37, 10, 5, 42, 7, 21, 33, 13, 17, 58,
          ])
        ),
      meta: {
        adminOnly: !0,
      },
    },
    {
      path: "/admin/gallery",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/GalleryReviewPage-v319.js"),
          __vite__mapDeps([59, 55, 7, 33, 34, 17, 35, 36, 37, 10, 20, 38, 60])
        ),
      meta: {
        adminOnly: !0,
      },
    },
    {
      path: "/admin/carousel",
      component: () =>
        me(
          () => import("https://wheelofnames.com/assets/CarouselPage-v319.js"),
          __vite__mapDeps([61, 55, 35, 7, 45, 9, 10, 33, 13, 17])
        ),
      meta: {
        adminOnly: !0,
      },
    },
    {
      path: "/:catchAll(.*)*",
      component: () => me(() => import("https://wheelofnames.com/assets/Error404-v319.js"), []),
    },
  ],
  bs = function () {
    const t = Kb({
      scrollBehavior: () => ({
        left: 0,
        top: 0,
      }),
      routes: WS,
      history: db("/"),
    });
    return (
      t.beforeEach(async (n, r, i) => {
        if (n.matched[0].meta.adminOnly) {
          await cr();
          const s = await Ve();
          (await El(s))
            ? i()
            : (alert("Please log in as an admin user."), i(!1));
        } else i();
      }),
      t.onError((n) => {
        jh("RouterError", n),
          confirm(`An update is available. Do you want to reload?

If reloading does not fix the issue, try using https://old.wheelofnames.com.`) &&
            window.location.reload();
      }),
      t
    );
  };
async function US(e, t) {
  const n = e(Y0);
  n.use(A_, t);
  const r = typeof Ki == "function" ? await Ki({}) : Ki,
    { storeKey: i } = await me(async () => {
      const { storeKey: s } = await Promise.resolve().then(() => qS);
      return {
        storeKey: s,
      };
    }, void 0),
    o = bi(
      typeof bs == "function"
        ? await bs({
            store: r,
          })
        : bs
    );
  return (
    (r.$router = o),
    {
      app: n,
      store: r,
      storeKey: i,
      router: o,
    }
  );
}
function BS(e, t, n) {
  let r;
  function i() {
    r !== void 0 && (zs.remove(r), (r = void 0));
  }
  return (
    wt(() => {
      e.value === !0 && i();
    }),
    {
      removeFromHistory: i,
      addToHistory() {
        (r = {
          condition: () => n.value === !0,
          handler: t,
        }),
          zs.add(r);
      },
    }
  );
}
function Gi(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function Vm(e, t) {
  typeof t.type == "symbol"
    ? Array.isArray(t.children) === !0 &&
      t.children.forEach((n) => {
        Vm(e, n);
      })
    : e.add(t);
}
function bT(e) {
  const t = new Set();
  return (
    e.forEach((n) => {
      Vm(t, n);
    }),
    Array.from(t)
  );
}
function qm(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function Wm(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function HS() {
  let e = null;
  const t = Ie();
  function n() {
    e !== null && (clearTimeout(e), (e = null));
  }
  return (
    Ro(n),
    wt(n),
    {
      removeTimeout: n,
      registerTimeout(r, i) {
        n(),
          Wm(t) === !1 &&
            (e = setTimeout(() => {
              (e = null), r();
            }, i));
      },
    }
  );
}
function zS() {
  let e;
  const t = Ie();
  function n() {
    e = void 0;
  }
  return (
    Ro(n),
    wt(n),
    {
      removeTick: n,
      registerTick(r) {
        (e = r),
          dt(() => {
            e === r && (Wm(t) === !1 && e(), (e = void 0));
          });
      },
    }
  );
}
const KS = {
    modelValue: {
      type: Boolean,
      default: null,
    },
    "onUpdate:modelValue": [Function, Array],
  },
  GS = ["beforeShow", "show", "beforeHide", "hide"];
function QS({
  showing: e,
  canShow: t,
  hideOnRouteChange: n,
  handleShow: r,
  handleHide: i,
  processOnMount: o,
}) {
  const s = Ie(),
    { props: a, emit: l, proxy: u } = s;
  let c;
  function f(g) {
    e.value === !0 ? _(g) : d(g);
  }
  function d(g) {
    if (
      a.disable === !0 ||
      (g !== void 0 && g.qAnchorHandled === !0) ||
      (t !== void 0 && t(g) !== !0)
    )
      return;
    const E = a["onUpdate:modelValue"] !== void 0;
    E === !0 &&
      (l("update:modelValue", !0),
      (c = g),
      dt(() => {
        c === g && (c = void 0);
      })),
      (a.modelValue === null || E === !1) && h(g);
  }
  function h(g) {
    e.value !== !0 &&
      ((e.value = !0), l("beforeShow", g), r !== void 0 ? r(g) : l("show", g));
  }
  function _(g) {
    if (a.disable === !0) return;
    const E = a["onUpdate:modelValue"] !== void 0;
    E === !0 &&
      (l("update:modelValue", !1),
      (c = g),
      dt(() => {
        c === g && (c = void 0);
      })),
      (a.modelValue === null || E === !1) && S(g);
  }
  function S(g) {
    e.value !== !1 &&
      ((e.value = !1), l("beforeHide", g), i !== void 0 ? i(g) : l("hide", g));
  }
  function C(g) {
    a.disable === !0 && g === !0
      ? a["onUpdate:modelValue"] !== void 0 && l("update:modelValue", !1)
      : (g === !0) !== e.value && (g === !0 ? h : S)(c);
  }
  fe(() => a.modelValue, C),
    n !== void 0 &&
      qm(s) === !0 &&
      fe(
        () => u.$route.fullPath,
        () => {
          n.value === !0 && e.value === !0 && _();
        }
      ),
    o === !0 &&
      Nt(() => {
        C(a.modelValue);
      });
  const y = {
    show: d,
    hide: _,
    toggle: f,
  };
  return Object.assign(u, y), y;
}
const XS = {
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
function YS(e, t = () => {}, n = () => {}) {
  return {
    transitionProps: M(() => {
      const r = `q-transition--${e.transitionShow || t()}`,
        i = `q-transition--${e.transitionHide || n()}`;
      return {
        appear: !0,
        enterFromClass: `${r}-enter-from`,
        enterActiveClass: `${r}-enter-active`,
        enterToClass: `${r}-enter-to`,
        leaveFromClass: `${i}-leave-from`,
        leaveActiveClass: `${i}-leave-active`,
        leaveToClass: `${i}-leave-to`,
      };
    }),
    transitionStyle: M(
      () => `--q-transition-duration: ${e.transitionDuration}ms`
    ),
  };
}
let Fn = [],
  vi = [];
function Um(e) {
  vi = vi.filter((t) => t !== e);
}
function JS(e) {
  Um(e), vi.push(e);
}
function Cu(e) {
  Um(e), vi.length === 0 && Fn.length !== 0 && (Fn[Fn.length - 1](), (Fn = []));
}
function kl(e) {
  vi.length === 0 ? e() : Fn.push(e);
}
function ZS(e) {
  Fn = Fn.filter((t) => t !== e);
}
const pr = [],
  ii = [];
let eC = 1,
  hn = document.body;
function Go(e, t) {
  const n = document.createElement("div");
  if (
    ((n.id = t !== void 0 ? `q-portal--${t}--${eC++}` : e),
    go.globalNodes !== void 0)
  ) {
    const r = go.globalNodes.class;
    r !== void 0 && (n.className = r);
  }
  return hn.appendChild(n), pr.push(n), ii.push(t), n;
}
function Tl(e) {
  const t = pr.indexOf(e);
  pr.splice(t, 1), ii.splice(t, 1), e.remove();
}
function tC(e) {
  if (e === hn) return;
  if (
    ((hn = e),
    hn === document.body ||
      ii.reduce((n, r) => (r === "dialog" ? n + 1 : n), 0) < 2)
  ) {
    pr.forEach((n) => {
      n.contains(hn) === !1 && hn.appendChild(n);
    });
    return;
  }
  const t = ii.lastIndexOf("dialog");
  for (let n = 0; n < pr.length; n++) {
    const r = pr[n];
    (n === t || ii[n] !== "dialog") &&
      r.contains(hn) === !1 &&
      hn.appendChild(r);
  }
}
const Qi = [];
function yT(e) {
  return Qi.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function nC(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if ((e.hide(t), e.$props.separateClosePopup === !0)) return Gi(e);
    } else if (e.__qPortal === !0) {
      const n = Gi(e);
      return n !== void 0 && n.$options.name === "QPopupProxy"
        ? (e.hide(t), n)
        : e;
    }
    e = Gi(e);
  } while (e != null);
}
function wT(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === !0) {
      if ((n--, e.$options.name === "QMenu")) {
        e = nC(e, t);
        continue;
      }
      e.hide(t);
    }
    e = Gi(e);
  }
}
const rC = nt({
  name: "QPortal",
  setup(e, { slots: t }) {
    return () => t.default();
  },
});
function iC(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return !1;
    e = e.parent;
  }
  return !1;
}
function oC(e, t, n, r) {
  const i = ue(!1),
    o = ue(!1);
  let s = null;
  const a = {},
    l = r === "dialog" && iC(e);
  function u(f) {
    if (f === !0) {
      Cu(a), (o.value = !0);
      return;
    }
    (o.value = !1),
      i.value === !1 &&
        (l === !1 && s === null && (s = Go(!1, r)),
        (i.value = !0),
        Qi.push(e.proxy),
        JS(a));
  }
  function c(f) {
    if (((o.value = !1), f !== !0)) return;
    Cu(a), (i.value = !1);
    const d = Qi.indexOf(e.proxy);
    d !== -1 && Qi.splice(d, 1), s !== null && (Tl(s), (s = null));
  }
  return (
    Do(() => {
      c(!0);
    }),
    (e.proxy.__qPortal = !0),
    Ir(e.proxy, "contentEl", () => t.value),
    {
      showPortal: u,
      hidePortal: c,
      portalIsActive: i,
      portalIsAccessible: o,
      renderPortal: () =>
        l === !0
          ? n()
          : i.value === !0
          ? [
              j(
                Ip,
                {
                  to: s,
                },
                j(rC, n)
              ),
            ]
          : void 0,
    }
  );
}
function va(e, t) {
  const n = e.style;
  for (const r in t) n[r] = t[r];
}
function sC(e) {
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
function aC(e, t) {
  if (e == null || e.contains(t) === !0) return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t)) return !0;
  return !1;
}
const ET = [Element, String],
  lC = [
    null,
    document,
    document.body,
    document.scrollingElement,
    document.documentElement,
  ];
function ST(e, t) {
  let n = sC(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return lC.includes(n) ? window : n;
}
function Bm(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function Hm(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
function zm(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3],
    i = Bm(e);
  if (n <= 0) {
    i !== t && _a(e, t);
    return;
  }
  requestAnimationFrame((o) => {
    const s = o - r,
      a = i + ((t - i) / Math.max(s, n)) * s;
    _a(e, a), a !== t && zm(e, t, n - s, o);
  });
}
function Km(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3],
    i = Hm(e);
  if (n <= 0) {
    i !== t && ba(e, t);
    return;
  }
  requestAnimationFrame((o) => {
    const s = o - r,
      a = i + ((t - i) / Math.max(s, n)) * s;
    ba(e, a), a !== t && Km(e, t, n - s, o);
  });
}
function _a(e, t) {
  if (e === window) {
    window.scrollTo(
      window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
      t
    );
    return;
  }
  e.scrollTop = t;
}
function ba(e, t) {
  if (e === window) {
    window.scrollTo(
      t,
      window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    );
    return;
  }
  e.scrollLeft = t;
}
function CT(e, t, n) {
  if (n) {
    zm(e, t, n);
    return;
  }
  _a(e, t);
}
function kT(e, t, n) {
  if (n) {
    Km(e, t, n);
    return;
  }
  ba(e, t);
}
let Di;
function TT() {
  if (Di !== void 0) return Di;
  const e = document.createElement("p"),
    t = document.createElement("div");
  va(e, {
    width: "100%",
    height: "200px",
  }),
    va(t, {
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
  return n === r && (r = t.clientWidth), t.remove(), (Di = n - r), Di;
}
function cC(e, t = !0) {
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
let jr = 0,
  ys,
  ws,
  zr,
  Es = !1,
  ku,
  Tu,
  Iu,
  Rn = null;
function uC(e) {
  fC(e) && Tt(e);
}
function fC(e) {
  if (
    e.target === document.body ||
    e.target.classList.contains("q-layout__backdrop")
  )
    return !0;
  const t = u_(e),
    n = e.shiftKey && !e.deltaX,
    r = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    i = n || r ? e.deltaY : e.deltaX;
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    if (cC(s, r))
      return r
        ? i < 0 && s.scrollTop === 0
          ? !0
          : i > 0 && s.scrollTop + s.clientHeight === s.scrollHeight
        : i < 0 && s.scrollLeft === 0
        ? !0
        : i > 0 && s.scrollLeft + s.clientWidth === s.scrollWidth;
  }
  return !0;
}
function Au(e) {
  e.target === document &&
    (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Fi(e) {
  Es !== !0 &&
    ((Es = !0),
    requestAnimationFrame(() => {
      Es = !1;
      const { height: t } = e.target,
        { clientHeight: n, scrollTop: r } = document.scrollingElement;
      (zr === void 0 || t !== window.innerHeight) &&
        ((zr = n - t), (document.scrollingElement.scrollTop = r)),
        r > zr &&
          (document.scrollingElement.scrollTop -= Math.ceil((r - zr) / 8));
    }));
}
function Ou(e) {
  const t = document.body,
    n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: r, overflowX: i } = window.getComputedStyle(t);
    (ys = Hm(window)),
      (ws = Bm(window)),
      (ku = t.style.left),
      (Tu = t.style.top),
      (Iu = window.location.href),
      (t.style.left = `-${ys}px`),
      (t.style.top = `-${ws}px`),
      i !== "hidden" &&
        (i === "scroll" || t.scrollWidth > window.innerWidth) &&
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
              Fi,
              ft.passiveCapture
            ),
            window.visualViewport.addEventListener(
              "scroll",
              Fi,
              ft.passiveCapture
            ),
            window.scrollTo(0, 0))
          : window.addEventListener("scroll", Au, ft.passiveCapture));
  }
  Be.is.desktop === !0 &&
    Be.is.mac === !0 &&
    window[`${e}EventListener`]("wheel", uC, ft.notPassive),
    e === "remove" &&
      (Be.is.ios === !0 &&
        (n === !0
          ? (window.visualViewport.removeEventListener(
              "resize",
              Fi,
              ft.passiveCapture
            ),
            window.visualViewport.removeEventListener(
              "scroll",
              Fi,
              ft.passiveCapture
            ))
          : window.removeEventListener("scroll", Au, ft.passiveCapture)),
      t.classList.remove("q-body--prevent-scroll"),
      t.classList.remove("q-body--force-scrollbar-x"),
      t.classList.remove("q-body--force-scrollbar-y"),
      (document.qScrollPrevented = !1),
      (t.style.left = ku),
      (t.style.top = Tu),
      window.location.href === Iu && window.scrollTo(ys, ws),
      (zr = void 0));
}
function ya(e) {
  let t = "add";
  if (e === !0) {
    if ((jr++, Rn !== null)) {
      clearTimeout(Rn), (Rn = null);
      return;
    }
    if (jr > 1) return;
  } else {
    if (jr === 0 || (jr--, jr > 0)) return;
    if (((t = "remove"), Be.is.ios === !0 && Be.is.nativeMobile === !0)) {
      Rn !== null && clearTimeout(Rn),
        (Rn = setTimeout(() => {
          Ou(t), (Rn = null);
        }, 100));
      return;
    }
  }
  Ou(t);
}
function dC() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && ((e = t), ya(t));
    },
  };
}
function Lt(e, t) {
  return (e !== void 0 && e()) || t;
}
function IT(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null) return n.slice();
  }
  return t;
}
function $n(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function hC(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function AT(e, t, n, r, i, o) {
  t.key = r + i;
  const s = j(e, t, n);
  return i === !0 ? Mf(s, o()) : s;
}
const Wn = [];
let Cr;
function mC(e) {
  Cr = e.keyCode === 27;
}
function gC() {
  Cr === !0 && (Cr = !1);
}
function pC(e) {
  Cr === !0 && ((Cr = !1), hi(e, 27) === !0 && Wn[Wn.length - 1](e));
}
function Gm(e) {
  window[e]("keydown", mC),
    window[e]("blur", gC),
    window[e]("keyup", pC),
    (Cr = !1);
}
function vC(e) {
  Be.is.desktop === !0 &&
    (Wn.push(e), Wn.length === 1 && Gm("addEventListener"));
}
function Nu(e) {
  const t = Wn.indexOf(e);
  t !== -1 && (Wn.splice(t, 1), Wn.length === 0 && Gm("removeEventListener"));
}
const Un = [];
function Qm(e) {
  Un[Un.length - 1](e);
}
function _C(e) {
  Be.is.desktop === !0 &&
    (Un.push(e),
    Un.length === 1 && document.body.addEventListener("focusin", Qm));
}
function Pu(e) {
  const t = Un.indexOf(e);
  t !== -1 &&
    (Un.splice(t, 1),
    Un.length === 0 && document.body.removeEventListener("focusin", Qm));
}
let $i = 0;
const bC = {
    standard: "fixed-full flex-center",
    top: "fixed-top justify-center",
    bottom: "fixed-bottom justify-center",
    right: "fixed-right items-center",
    left: "fixed-left items-center",
  },
  xu = {
    standard: ["scale", "scale"],
    top: ["slide-down", "slide-up"],
    bottom: ["slide-up", "slide-down"],
    right: ["slide-left", "slide-right"],
    left: ["slide-right", "slide-left"],
  },
  yC = nt({
    name: "QDialog",
    inheritAttrs: !1,
    props: {
      ...KS,
      ...XS,
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
    emits: [...GS, "shake", "click", "escapeKey"],
    setup(e, { slots: t, emit: n, attrs: r }) {
      const i = Ie(),
        o = ue(null),
        s = ue(!1),
        a = ue(!1);
      let l = null,
        u = null,
        c,
        f;
      const d = M(
          () =>
            e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
        ),
        { preventBodyScroll: h } = dC(),
        { registerTimeout: _ } = HS(),
        { registerTick: S, removeTick: C } = zS(),
        { transitionProps: y, transitionStyle: g } = YS(
          e,
          () => xu[e.position][0],
          () => xu[e.position][1]
        ),
        E = M(
          () =>
            g.value +
            (e.backdropFilter !== void 0
              ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`
              : "")
        ),
        {
          showPortal: b,
          hidePortal: O,
          portalIsAccessible: P,
          renderPortal: A,
        } = oC(i, o, Re, "dialog"),
        { hide: K } = QS({
          showing: s,
          hideOnRouteChange: d,
          handleShow: te,
          handleHide: ee,
          processOnMount: !0,
        }),
        { addToHistory: N, removeFromHistory: L } = BS(s, K, d),
        q = M(
          () =>
            `q-dialog__inner flex no-pointer-events q-dialog__inner--${
              e.maximized === !0 ? "maximized" : "minimized"
            } q-dialog__inner--${e.position} ${bC[e.position]}` +
            (a.value === !0 ? " q-dialog__inner--animating" : "") +
            (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") +
            (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") +
            (e.square === !0 ? " q-dialog__inner--square" : "")
        ),
        T = M(() => s.value === !0 && e.seamless !== !0),
        Q = M(() =>
          e.autoClose === !0
            ? {
                onClick: B,
              }
            : {}
        ),
        $ = M(() => [
          `q-dialog fullscreen no-pointer-events q-dialog--${
            T.value === !0 ? "modal" : "seamless"
          }`,
          r.class,
        ]);
      fe(
        () => e.maximized,
        (re) => {
          s.value === !0 && de(re);
        }
      ),
        fe(T, (re) => {
          h(re), re === !0 ? (_C(Ne), vC(oe)) : (Pu(Ne), Nu(oe));
        });
      function te(re) {
        N(),
          (u =
            e.noRefocus === !1 && document.activeElement !== null
              ? document.activeElement
              : null),
          de(e.maximized),
          b(),
          (a.value = !0),
          e.noFocus !== !0
            ? (document.activeElement !== null && document.activeElement.blur(),
              S(Z))
            : C(),
          _(() => {
            if (i.proxy.$q.platform.is.ios === !0) {
              if (e.seamless !== !0 && document.activeElement) {
                const { top: D, bottom: X } =
                    document.activeElement.getBoundingClientRect(),
                  { innerHeight: Y } = window,
                  ne =
                    window.visualViewport !== void 0
                      ? window.visualViewport.height
                      : Y;
                D > 0 &&
                  X > ne / 2 &&
                  (document.scrollingElement.scrollTop = Math.min(
                    document.scrollingElement.scrollHeight - ne,
                    X >= Y
                      ? 1 / 0
                      : Math.ceil(
                          document.scrollingElement.scrollTop + X - ne / 2
                        )
                  )),
                  document.activeElement.scrollIntoView();
              }
              (f = !0), o.value.click(), (f = !1);
            }
            b(!0), (a.value = !1), n("show", re);
          }, e.transitionDuration);
      }
      function ee(re) {
        C(),
          L(),
          le(!0),
          (a.value = !0),
          O(),
          u !== null &&
            ((
              (re && re.type.indexOf("key") === 0
                ? u.closest('[tabindex]:not([tabindex^="-"])')
                : void 0) || u
            ).focus(),
            (u = null)),
          _(() => {
            O(!0), (a.value = !1), n("hide", re);
          }, e.transitionDuration);
      }
      function Z(re) {
        kl(() => {
          let D = o.value;
          if (D !== null) {
            if (re !== void 0) {
              const X = D.querySelector(re);
              if (X !== null) {
                X.focus({
                  preventScroll: !0,
                });
                return;
              }
            }
            D.contains(document.activeElement) !== !0 &&
              ((D =
                D.querySelector(
                  "[autofocus][tabindex], [data-autofocus][tabindex]"
                ) ||
                D.querySelector(
                  "[autofocus] [tabindex], [data-autofocus] [tabindex]"
                ) ||
                D.querySelector("[autofocus], [data-autofocus]") ||
                D),
              D.focus({
                preventScroll: !0,
              }));
          }
        });
      }
      function H(re) {
        re && typeof re.focus == "function"
          ? re.focus({
              preventScroll: !0,
            })
          : Z(),
          n("shake");
        const D = o.value;
        D !== null &&
          (D.classList.remove("q-animate--scale"),
          D.classList.add("q-animate--scale"),
          l !== null && clearTimeout(l),
          (l = setTimeout(() => {
            (l = null),
              o.value !== null && (D.classList.remove("q-animate--scale"), Z());
          }, 170)));
      }
      function oe() {
        e.seamless !== !0 &&
          (e.persistent === !0 || e.noEscDismiss === !0
            ? e.maximized !== !0 && e.noShake !== !0 && H()
            : (n("escapeKey"), K()));
      }
      function le(re) {
        l !== null && (clearTimeout(l), (l = null)),
          (re === !0 || s.value === !0) &&
            (de(!1), e.seamless !== !0 && (h(!1), Pu(Ne), Nu(oe))),
          re !== !0 && (u = null);
      }
      function de(re) {
        re === !0
          ? c !== !0 &&
            ($i < 1 && document.body.classList.add("q-body--dialog"),
            $i++,
            (c = !0))
          : c === !0 &&
            ($i < 2 && document.body.classList.remove("q-body--dialog"),
            $i--,
            (c = !1));
      }
      function B(re) {
        f !== !0 && (K(re), n("click", re));
      }
      function pe(re) {
        e.persistent !== !0 && e.noBackdropDismiss !== !0
          ? K(re)
          : e.noShake !== !0 && H();
      }
      function Ne(re) {
        e.allowFocusOutside !== !0 &&
          P.value === !0 &&
          aC(o.value, re.target) !== !0 &&
          Z('[tabindex]:not([tabindex="-1"])');
      }
      Object.assign(i.proxy, {
        focus: Z,
        shake: H,
        __updateRefocusTarget(re) {
          u = re || null;
        },
      }),
        wt(le);
      function Re() {
        return j(
          "div",
          {
            role: "dialog",
            "aria-modal": T.value === !0 ? "true" : "false",
            ...r,
            class: $.value,
          },
          [
            j(
              fi,
              {
                name: "q-transition--fade",
                appear: !0,
              },
              () =>
                T.value === !0
                  ? j("div", {
                      class: "q-dialog__backdrop fixed-full",
                      style: E.value,
                      "aria-hidden": "true",
                      tabindex: -1,
                      onClick: pe,
                    })
                  : null
            ),
            j(fi, y.value, () =>
              s.value === !0
                ? j(
                    "div",
                    {
                      ref: o,
                      class: q.value,
                      style: g.value,
                      tabindex: -1,
                      ...Q.value,
                    },
                    Lt(t.default)
                  )
                : null
            ),
          ]
        );
      }
      return A;
    },
  }),
  wa = {
    xs: 18,
    sm: 24,
    md: 32,
    lg: 38,
    xl: 46,
  },
  Ei = {
    size: String,
  };
function Si(e, t = wa) {
  return M(() =>
    e.size !== void 0
      ? {
          fontSize: e.size in t ? `${t[e.size]}px` : e.size,
        }
      : null
  );
}
const Lu = "0 0 24 24",
  Ru = (e) => e,
  Ss = (e) => `ionicons ${e}`,
  Xm = {
    "mdi-": (e) => `mdi ${e}`,
    "icon-": Ru,
    "bt-": (e) => `bt ${e}`,
    "eva-": (e) => `eva ${e}`,
    "ion-md": Ss,
    "ion-ios": Ss,
    "ion-logo": Ss,
    "iconfont ": Ru,
    "ti-": (e) => `themify-icon ${e}`,
    "bi-": (e) => `bootstrap-icons ${e}`,
  },
  Ym = {
    o_: "-outlined",
    r_: "-round",
    s_: "-sharp",
  },
  Jm = {
    sym_o_: "-outlined",
    sym_r_: "-rounded",
    sym_s_: "-sharp",
  },
  wC = new RegExp("^(" + Object.keys(Xm).join("|") + ")"),
  EC = new RegExp("^(" + Object.keys(Ym).join("|") + ")"),
  Mu = new RegExp("^(" + Object.keys(Jm).join("|") + ")"),
  SC = /^[Mm]\s?[-+]?\.?\d/,
  CC = /^img:/,
  kC = /^svguse:/,
  TC = /^ion-/,
  IC =
    /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,
  on = nt({
    name: "QIcon",
    props: {
      ...Ei,
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
        } = Ie(),
        r = Si(e),
        i = M(
          () =>
            "q-icon" +
            (e.left === !0 ? " on-left" : "") +
            (e.right === !0 ? " on-right" : "") +
            (e.color !== void 0 ? ` text-${e.color}` : "")
        ),
        o = M(() => {
          let s,
            a = e.name;
          if (a === "none" || !a)
            return {
              none: !0,
            };
          if (n.iconMapFn !== null) {
            const c = n.iconMapFn(a);
            if (c !== void 0)
              if (c.icon !== void 0) {
                if (((a = c.icon), a === "none" || !a))
                  return {
                    none: !0,
                  };
              } else
                return {
                  cls: c.cls,
                  content: c.content !== void 0 ? c.content : " ",
                };
          }
          if (SC.test(a) === !0) {
            const [c, f = Lu] = a.split("|");
            return {
              svg: !0,
              viewBox: f,
              nodes: c.split("&&").map((d) => {
                const [h, _, S] = d.split("@@");
                return j("path", {
                  style: _,
                  d: h,
                  transform: S,
                });
              }),
            };
          }
          if (CC.test(a) === !0)
            return {
              img: !0,
              src: a.substring(4),
            };
          if (kC.test(a) === !0) {
            const [c, f = Lu] = a.split("|");
            return {
              svguse: !0,
              src: c.substring(7),
              viewBox: f,
            };
          }
          let l = " ";
          const u = a.match(wC);
          if (u !== null) s = Xm[u[1]](a);
          else if (IC.test(a) === !0) s = a;
          else if (TC.test(a) === !0)
            s = `ionicons ion-${
              n.platform.is.ios === !0 ? "ios" : "md"
            }${a.substring(3)}`;
          else if (Mu.test(a) === !0) {
            s = "notranslate material-symbols";
            const c = a.match(Mu);
            c !== null && ((a = a.substring(6)), (s += Jm[c[1]])), (l = a);
          } else {
            s = "notranslate material-icons";
            const c = a.match(EC);
            c !== null && ((a = a.substring(2)), (s += Ym[c[1]])), (l = a);
          }
          return {
            cls: s,
            content: l,
          };
        });
      return () => {
        const s = {
          class: i.value,
          style: r.value,
          "aria-hidden": "true",
          role: "presentation",
        };
        return o.value.none === !0
          ? j(e.tag, s, Lt(t.default))
          : o.value.img === !0
          ? j(
              e.tag,
              s,
              $n(t.default, [
                j("img", {
                  src: o.value.src,
                }),
              ])
            )
          : o.value.svg === !0
          ? j(
              e.tag,
              s,
              $n(t.default, [
                j(
                  "svg",
                  {
                    viewBox: o.value.viewBox || "0 0 24 24",
                  },
                  o.value.nodes
                ),
              ])
            )
          : o.value.svguse === !0
          ? j(
              e.tag,
              s,
              $n(t.default, [
                j(
                  "svg",
                  {
                    viewBox: o.value.viewBox,
                  },
                  [
                    j("use", {
                      "xlink:href": o.value.src,
                    }),
                  ]
                ),
              ])
            )
          : (o.value.cls !== void 0 && (s.class += " " + o.value.cls),
            j(e.tag, s, $n(t.default, [o.value.content])));
      };
    },
  }),
  AC = {
    size: {
      type: [String, Number],
      default: "1em",
    },
    color: String,
  };
function OC(e) {
  return {
    cSize: M(() => (e.size in wa ? `${wa[e.size]}px` : e.size)),
    classes: M(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")),
  };
}
const kr = nt({
  name: "QSpinner",
  props: {
    ...AC,
    thickness: {
      type: Number,
      default: 5,
    },
  },
  setup(e) {
    const { cSize: t, classes: n } = OC(e);
    return () =>
      j(
        "svg",
        {
          class: n.value + " q-spinner-mat",
          width: t.value,
          height: t.value,
          viewBox: "25 25 50 50",
        },
        [
          j("circle", {
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
function NC(e, t = 250) {
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
function Du(e, t, n, r) {
  n.modifiers.stop === !0 && ho(e);
  const i = n.modifiers.color;
  let o = n.modifiers.center;
  o = o === !0 || r === !0;
  const s = document.createElement("span"),
    a = document.createElement("span"),
    l = c_(e),
    { left: u, top: c, width: f, height: d } = t.getBoundingClientRect(),
    h = Math.sqrt(f * f + d * d),
    _ = h / 2,
    S = `${(f - h) / 2}px`,
    C = o ? S : `${l.left - u - _}px`,
    y = `${(d - h) / 2}px`,
    g = o ? y : `${l.top - c - _}px`;
  (a.className = "q-ripple__inner"),
    va(a, {
      height: `${h}px`,
      width: `${h}px`,
      transform: `translate3d(${C},${g},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (s.className = `q-ripple${i ? " text-" + i : ""}`),
    s.setAttribute("dir", "ltr"),
    s.appendChild(a),
    t.appendChild(s);
  const E = () => {
    s.remove(), clearTimeout(b);
  };
  n.abort.push(E);
  let b = setTimeout(() => {
    a.classList.add("q-ripple__inner--enter"),
      (a.style.transform = `translate3d(${S},${y},0) scale3d(1,1,1)`),
      (a.style.opacity = 0.2),
      (b = setTimeout(() => {
        a.classList.remove("q-ripple__inner--enter"),
          a.classList.add("q-ripple__inner--leave"),
          (a.style.opacity = 0),
          (b = setTimeout(() => {
            s.remove(), n.abort.splice(n.abort.indexOf(E), 1);
          }, 275));
      }, 250));
  }, 50);
}
function Fu(e, { modifiers: t, value: n, arg: r }) {
  const i = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: i.early === !0,
    stop: i.stop === !0,
    center: i.center === !0,
    color: i.color || r,
    keyCodes: [].concat(i.keyCodes || 13),
  };
}
const PC = l_({
    name: "ripple",
    beforeMount(e, t) {
      const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
      if (n.ripple === !1) return;
      const r = {
        cfg: n,
        enabled: t.value !== !1,
        modifiers: {},
        abort: [],
        start(i) {
          r.enabled === !0 &&
            i.qSkipRipple !== !0 &&
            i.type === (r.modifiers.early === !0 ? "pointerdown" : "click") &&
            Du(i, e, r, i.qKeyEvent === !0);
        },
        keystart: NC((i) => {
          r.enabled === !0 &&
            i.qSkipRipple !== !0 &&
            hi(i, r.modifiers.keyCodes) === !0 &&
            i.type === `key${r.modifiers.early === !0 ? "down" : "up"}` &&
            Du(i, e, r, !0);
        }, 300),
      };
      Fu(r, t),
        (e.__qripple = r),
        f_(r, "main", [
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
          n.enabled === !0 && Object(t.value) === t.value && Fu(n, t));
      }
    },
    beforeUnmount(e) {
      const t = e.__qripple;
      t !== void 0 &&
        (t.abort.forEach((n) => {
          n();
        }),
        d_(t, "main"),
        delete e._qripple);
    },
  }),
  Zm = {
    left: "start",
    center: "center",
    right: "end",
    between: "between",
    around: "around",
    evenly: "evenly",
    stretch: "stretch",
  },
  xC = Object.keys(Zm),
  eg = {
    align: {
      type: String,
      validator: (e) => xC.includes(e),
    },
  };
function tg(e) {
  return M(() => {
    const t =
      e.align === void 0 ? (e.vertical === !0 ? "stretch" : "left") : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${Zm[t]}`;
  });
}
function $u(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
function ju(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function LC(e, t) {
  for (const n in t) {
    const r = t[n],
      i = e[n];
    if (typeof r == "string") {
      if (r !== i) return !1;
    } else if (
      Array.isArray(i) === !1 ||
      i.length !== r.length ||
      r.some((o, s) => o !== i[s])
    )
      return !1;
  }
  return !0;
}
function Vu(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function RC(e, t) {
  return Array.isArray(e) === !0
    ? Vu(e, t)
    : Array.isArray(t) === !0
    ? Vu(t, e)
    : e === t;
}
function MC(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (RC(e[n], t[n]) === !1) return !1;
  return !0;
}
const ng = {
    to: [String, Object],
    replace: Boolean,
    href: String,
    target: String,
    disable: Boolean,
  },
  OT = {
    ...ng,
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
function DC({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = Ie(),
    { props: r, proxy: i, emit: o } = n,
    s = qm(n),
    a = M(() => r.disable !== !0 && r.href !== void 0),
    l = M(
      t === !0
        ? () =>
            s === !0 &&
            r.disable !== !0 &&
            a.value !== !0 &&
            r.to !== void 0 &&
            r.to !== null &&
            r.to !== ""
        : () =>
            s === !0 &&
            a.value !== !0 &&
            r.to !== void 0 &&
            r.to !== null &&
            r.to !== ""
    ),
    u = M(() => (l.value === !0 ? g(r.to) : null)),
    c = M(() => u.value !== null),
    f = M(() => a.value === !0 || c.value === !0),
    d = M(() => (r.type === "a" || f.value === !0 ? "a" : r.tag || e || "div")),
    h = M(() =>
      a.value === !0
        ? {
            href: r.href,
            target: r.target,
          }
        : c.value === !0
        ? {
            href: u.value.href,
            target: r.target,
          }
        : {}
    ),
    _ = M(() => {
      if (c.value === !1) return -1;
      const { matched: O } = u.value,
        { length: P } = O,
        A = O[P - 1];
      if (A === void 0) return -1;
      const K = i.$route.matched;
      if (K.length === 0) return -1;
      const N = K.findIndex(ju.bind(null, A));
      if (N !== -1) return N;
      const L = $u(O[P - 2]);
      return P > 1 && $u(A) === L && K[K.length - 1].path !== L
        ? K.findIndex(ju.bind(null, O[P - 2]))
        : N;
    }),
    S = M(
      () =>
        c.value === !0 && _.value !== -1 && LC(i.$route.params, u.value.params)
    ),
    C = M(
      () =>
        S.value === !0 &&
        _.value === i.$route.matched.length - 1 &&
        MC(i.$route.params, u.value.params)
    ),
    y = M(() =>
      c.value === !0
        ? C.value === !0
          ? ` ${r.exactActiveClass} ${r.activeClass}`
          : r.exact === !0
          ? ""
          : S.value === !0
          ? ` ${r.activeClass}`
          : ""
        : ""
    );
  function g(O) {
    try {
      return i.$router.resolve(O);
    } catch {}
    return null;
  }
  function E(
    O,
    { returnRouterError: P, to: A = r.to, replace: K = r.replace } = {}
  ) {
    if (r.disable === !0) return O.preventDefault(), Promise.resolve(!1);
    if (
      O.metaKey ||
      O.altKey ||
      O.ctrlKey ||
      O.shiftKey ||
      (O.button !== void 0 && O.button !== 0) ||
      r.target === "_blank"
    )
      return Promise.resolve(!1);
    O.preventDefault();
    const N = i.$router[K === !0 ? "replace" : "push"](A);
    return P === !0 ? N : N.then(() => {}).catch(() => {});
  }
  function b(O) {
    if (c.value === !0) {
      const P = (A) => E(O, A);
      o("click", O, P), O.defaultPrevented !== !0 && P();
    } else o("click", O);
  }
  return {
    hasRouterLink: c,
    hasHrefLink: a,
    hasLink: f,
    linkTag: d,
    resolvedLink: u,
    linkIsActive: S,
    linkIsExactActive: C,
    linkClass: y,
    linkAttrs: h,
    getLink: g,
    navigateToRouterLink: E,
    navigateOnClick: b,
  };
}
const qu = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  FC = {
    xs: 8,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 24,
  },
  $C = ["button", "submit", "reset"],
  jC = /[^\s]\/[^\s]/,
  VC = ["flat", "outline", "push", "unelevated"];
function rg(e, t) {
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
function NT(e) {
  const t = rg(e);
  return t !== void 0
    ? {
        [t]: !0,
      }
    : {};
}
const qC = {
    ...Ei,
    ...ng,
    type: {
      type: String,
      default: "button",
    },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...VC.reduce((e, t) => (e[t] = Boolean) && e, {}),
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
      ...eg.align,
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
  WC = {
    ...qC,
    round: Boolean,
  };
function UC(e) {
  const t = Si(e, FC),
    n = tg(e),
    {
      hasRouterLink: r,
      hasLink: i,
      linkTag: o,
      linkAttrs: s,
      navigateOnClick: a,
    } = DC({
      fallbackTag: "button",
    }),
    l = M(() => {
      const C = e.fab === !1 && e.fabMini === !1 ? t.value : {};
      return e.padding !== void 0
        ? Object.assign({}, C, {
            padding: e.padding
              .split(/\s+/)
              .map((y) => (y in qu ? qu[y] + "px" : y))
              .join(" "),
            minWidth: "0",
            minHeight: "0",
          })
        : C;
    }),
    u = M(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    c = M(() => e.disable !== !0 && e.loading !== !0),
    f = M(() => (c.value === !0 ? e.tabindex || 0 : -1)),
    d = M(() => rg(e, "standard")),
    h = M(() => {
      const C = {
        tabindex: f.value,
      };
      return (
        i.value === !0
          ? Object.assign(C, s.value)
          : $C.includes(e.type) === !0 && (C.type = e.type),
        o.value === "a"
          ? (e.disable === !0
              ? (C["aria-disabled"] = "true")
              : C.href === void 0 && (C.role = "button"),
            r.value !== !0 && jC.test(e.type) === !0 && (C.type = e.type))
          : e.disable === !0 &&
            ((C.disabled = ""), (C["aria-disabled"] = "true")),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(C, {
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": e.percentage,
          }),
        C
      );
    }),
    _ = M(() => {
      let C;
      e.color !== void 0
        ? e.flat === !0 || e.outline === !0
          ? (C = `text-${e.textColor || e.color}`)
          : (C = `bg-${e.color} text-${e.textColor || "white"}`)
        : e.textColor && (C = `text-${e.textColor}`);
      const y =
        e.round === !0
          ? "round"
          : `rectangle${
              u.value === !0
                ? " q-btn--rounded"
                : e.square === !0
                ? " q-btn--square"
                : ""
            }`;
      return (
        `q-btn--${d.value} q-btn--${y}` +
        (C !== void 0 ? " " + C : "") +
        (c.value === !0
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
    S = M(
      () =>
        n.value +
        (e.stack === !0 ? " column" : " row") +
        (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") +
        (e.loading === !0 ? " q-btn__content--hidden" : "")
    );
  return {
    classes: _,
    style: l,
    innerClasses: S,
    attributes: h,
    hasLink: i,
    linkTag: o,
    navigateOnClick: a,
    isActionable: c,
  };
}
const { passiveCapture: Ct } = ft;
let tr = null,
  nr = null,
  rr = null;
const Ea = nt({
    name: "QBtn",
    props: {
      ...WC,
      percentage: Number,
      darkPercentage: Boolean,
      onTouchstart: [Function, Array],
    },
    emits: ["click", "keydown", "mousedown", "keyup"],
    setup(e, { slots: t, emit: n }) {
      const { proxy: r } = Ie(),
        {
          classes: i,
          style: o,
          innerClasses: s,
          attributes: a,
          hasLink: l,
          linkTag: u,
          navigateOnClick: c,
          isActionable: f,
        } = UC(e),
        d = ue(null),
        h = ue(null);
      let _ = null,
        S,
        C = null;
      const y = M(
          () => e.label !== void 0 && e.label !== null && e.label !== ""
        ),
        g = M(() =>
          e.disable === !0 || e.ripple === !1
            ? !1
            : {
                keyCodes: l.value === !0 ? [13, 32] : [13],
                ...(e.ripple === !0 ? {} : e.ripple),
              }
        ),
        E = M(() => ({
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
        O = M(() => {
          if (e.loading === !0)
            return {
              onMousedown: Q,
              onTouchstart: Q,
              onClick: Q,
              onKeydown: Q,
              onKeyup: Q,
            };
          if (f.value === !0) {
            const $ = {
              onClick: A,
              onKeydown: K,
              onMousedown: L,
            };
            if (r.$q.platform.has.touch === !0) {
              const te = e.onTouchstart !== void 0 ? "" : "Passive";
              $[`onTouchstart${te}`] = N;
            }
            return $;
          }
          return {
            onClick: Tt,
          };
        }),
        P = M(() => ({
          ref: d,
          class: "q-btn q-btn-item non-selectable no-outline " + i.value,
          style: o.value,
          ...a.value,
          ...O.value,
        }));
      function A($) {
        if (d.value !== null) {
          if ($ !== void 0) {
            if ($.defaultPrevented === !0) return;
            const te = document.activeElement;
            if (
              e.type === "submit" &&
              te !== document.body &&
              d.value.contains(te) === !1 &&
              te.contains(d.value) === !1
            ) {
              d.value.focus();
              const ee = () => {
                document.removeEventListener("keydown", Tt, !0),
                  document.removeEventListener("keyup", ee, Ct),
                  d.value !== null &&
                    d.value.removeEventListener("blur", ee, Ct);
              };
              document.addEventListener("keydown", Tt, !0),
                document.addEventListener("keyup", ee, Ct),
                d.value.addEventListener("blur", ee, Ct);
            }
          }
          c($);
        }
      }
      function K($) {
        d.value !== null &&
          (n("keydown", $),
          hi($, [13, 32]) === !0 &&
            nr !== d.value &&
            (nr !== null && T(),
            $.defaultPrevented !== !0 &&
              (d.value.focus(),
              (nr = d.value),
              d.value.classList.add("q-btn--active"),
              document.addEventListener("keyup", q, !0),
              d.value.addEventListener("blur", q, Ct)),
            Tt($)));
      }
      function N($) {
        d.value !== null &&
          (n("touchstart", $),
          $.defaultPrevented !== !0 &&
            (tr !== d.value &&
              (tr !== null && T(),
              (tr = d.value),
              (_ = $.target),
              _.addEventListener("touchcancel", q, Ct),
              _.addEventListener("touchend", q, Ct)),
            (S = !0),
            C !== null && clearTimeout(C),
            (C = setTimeout(() => {
              (C = null), (S = !1);
            }, 200))));
      }
      function L($) {
        d.value !== null &&
          (($.qSkipRipple = S === !0),
          n("mousedown", $),
          $.defaultPrevented !== !0 &&
            rr !== d.value &&
            (rr !== null && T(),
            (rr = d.value),
            d.value.classList.add("q-btn--active"),
            document.addEventListener("mouseup", q, Ct)));
      }
      function q($) {
        if (
          d.value !== null &&
          !(
            $ !== void 0 &&
            $.type === "blur" &&
            document.activeElement === d.value
          )
        ) {
          if ($ !== void 0 && $.type === "keyup") {
            if (nr === d.value && hi($, [13, 32]) === !0) {
              const te = new MouseEvent("click", $);
              (te.qKeyEvent = !0),
                $.defaultPrevented === !0 && yn(te),
                $.cancelBubble === !0 && ho(te),
                d.value.dispatchEvent(te),
                Tt($),
                ($.qKeyEvent = !0);
            }
            n("keyup", $);
          }
          T();
        }
      }
      function T($) {
        const te = h.value;
        $ !== !0 &&
          (tr === d.value || rr === d.value) &&
          te !== null &&
          te !== document.activeElement &&
          (te.setAttribute("tabindex", -1), te.focus()),
          tr === d.value &&
            (_ !== null &&
              (_.removeEventListener("touchcancel", q, Ct),
              _.removeEventListener("touchend", q, Ct)),
            (tr = _ = null)),
          rr === d.value &&
            (document.removeEventListener("mouseup", q, Ct), (rr = null)),
          nr === d.value &&
            (document.removeEventListener("keyup", q, !0),
            d.value !== null && d.value.removeEventListener("blur", q, Ct),
            (nr = null)),
          d.value !== null && d.value.classList.remove("q-btn--active");
      }
      function Q($) {
        Tt($), ($.qSkipRipple = !0);
      }
      return (
        wt(() => {
          T(!0);
        }),
        Object.assign(r, {
          click: ($) => {
            f.value === !0 && A($);
          },
        }),
        () => {
          let $ = [];
          e.icon !== void 0 &&
            $.push(
              j(on, {
                name: e.icon,
                left: e.stack !== !0 && y.value === !0,
                role: "img",
              })
            ),
            y.value === !0 &&
              $.push(
                j(
                  "span",
                  {
                    class: "block",
                  },
                  [e.label]
                )
              ),
            ($ = $n(t.default, $)),
            e.iconRight !== void 0 &&
              e.round === !1 &&
              $.push(
                j(on, {
                  name: e.iconRight,
                  right: e.stack !== !0 && y.value === !0,
                  role: "img",
                })
              );
          const te = [
            j("span", {
              class: "q-focus-helper",
              ref: h,
            }),
          ];
          return (
            e.loading === !0 &&
              e.percentage !== void 0 &&
              te.push(
                j(
                  "span",
                  {
                    class:
                      "q-btn__progress absolute-full overflow-hidden" +
                      (e.darkPercentage === !0 ? " q-btn__progress--dark" : ""),
                  },
                  [
                    j("span", {
                      class: "q-btn__progress-indicator fit block",
                      style: b.value,
                    }),
                  ]
                )
              ),
            te.push(
              j(
                "span",
                {
                  class:
                    "q-btn__content text-center col items-center q-anchor--skip " +
                    s.value,
                },
                $
              )
            ),
            e.loading !== null &&
              te.push(
                j(
                  fi,
                  {
                    name: "q-transition--fade",
                  },
                  () =>
                    e.loading === !0
                      ? [
                          j(
                            "span",
                            {
                              key: "loading",
                              class: "absolute-full flex flex-center",
                            },
                            t.loading !== void 0 ? t.loading() : [j(kr)]
                          ),
                        ]
                      : null
                )
              ),
            Mf(j(u.value, P.value, te), [[PC, g.value, void 0, E.value]])
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
const BC = nt({
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
        } = Ie(),
        r = Xn(e, n),
        i = M(
          () =>
            "q-card" +
            (r.value === !0 ? " q-card--dark q-dark" : "") +
            (e.bordered === !0 ? " q-card--bordered" : "") +
            (e.square === !0 ? " q-card--square no-border-radius" : "") +
            (e.flat === !0 ? " q-card--flat no-shadow" : "")
        );
      return () =>
        j(
          e.tag,
          {
            class: i.value,
          },
          Lt(t.default)
        );
    },
  }),
  Vr = nt({
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
        j(
          e.tag,
          {
            class: n.value,
          },
          Lt(t.default)
        );
    },
  }),
  HC = nt({
    name: "QCardActions",
    props: {
      ...eg,
      vertical: Boolean,
    },
    setup(e, { slots: t }) {
      const n = tg(e),
        r = M(
          () =>
            `q-card__actions ${n.value} q-card__actions--${
              e.vertical === !0 ? "vert column" : "horiz row"
            }`
        );
      return () =>
        j(
          "div",
          {
            class: r.value,
          },
          Lt(t.default)
        );
    },
  }),
  zC = {
    true: "inset",
    item: "item-inset",
    "item-thumbnail": "item-thumbnail-inset",
  },
  Cs = {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  },
  Wu = nt({
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
      const t = Ie(),
        n = Xn(e, t.proxy.$q),
        r = M(() => (e.vertical === !0 ? "vertical" : "horizontal")),
        i = M(() => ` q-separator--${r.value}`),
        o = M(() => (e.inset !== !1 ? `${i.value}-${zC[e.inset]}` : "")),
        s = M(
          () =>
            `q-separator${i.value}${o.value}` +
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
            const u =
                e.spaced === !0
                  ? `${Cs.md}px`
                  : e.spaced in Cs
                  ? `${Cs[e.spaced]}px`
                  : e.spaced,
              c = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
            l[`margin${c[0]}`] = l[`margin${c[1]}`] = u;
          }
          return l;
        });
      return () =>
        j("hr", {
          class: s.value,
          style: a.value,
          "aria-orientation": r.value,
        });
    },
  });
let ks,
  ji = 0;
const Qe = new Array(256);
for (let e = 0; e < 256; e++) Qe[e] = (e + 256).toString(16).substring(1);
const KC = (() => {
    const e =
      typeof crypto != "undefined"
        ? crypto
        : typeof window != "undefined"
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
  Uu = 4096;
function Sa() {
  (ks === void 0 || ji + 16 > Uu) && ((ji = 0), (ks = KC(Uu)));
  const e = Array.prototype.slice.call(ks, ji, (ji += 16));
  return (
    (e[6] = (e[6] & 15) | 64),
    (e[8] = (e[8] & 63) | 128),
    Qe[e[0]] +
      Qe[e[1]] +
      Qe[e[2]] +
      Qe[e[3]] +
      "-" +
      Qe[e[4]] +
      Qe[e[5]] +
      "-" +
      Qe[e[6]] +
      Qe[e[7]] +
      "-" +
      Qe[e[8]] +
      Qe[e[9]] +
      "-" +
      Qe[e[10]] +
      Qe[e[11]] +
      Qe[e[12]] +
      Qe[e[13]] +
      Qe[e[14]] +
      Qe[e[15]]
  );
}
function GC(e) {
  return e == null ? null : e;
}
function Bu(e, t) {
  return e == null ? (t === !0 ? `f_${Sa()}` : null) : e;
}
function QC({ getValue: e, required: t = !0 } = {}) {
  if (Sn.value === !0) {
    const n = ue(e !== void 0 ? GC(e()) : null);
    return (
      t === !0 &&
        n.value === null &&
        Nt(() => {
          n.value = `f_${Sa()}`;
        }),
      e !== void 0 &&
        fe(e, (r) => {
          n.value = Bu(r, t);
        }),
      n
    );
  }
  return e !== void 0 ? M(() => Bu(e(), t)) : ue(`f_${Sa()}`);
}
const Hu = /^on[A-Z]/;
function XC() {
  const { attrs: e, vnode: t } = Ie(),
    n = {
      listeners: ue({}),
      attributes: ue({}),
    };
  function r() {
    const i = {},
      o = {};
    for (const s in e)
      s !== "class" && s !== "style" && Hu.test(s) === !1 && (i[s] = e[s]);
    for (const s in t.props) Hu.test(s) === !0 && (o[s] = t.props[s]);
    (n.attributes.value = i), (n.listeners.value = o);
  }
  return Gf(r), r(), n;
}
function YC({ validate: e, resetValidation: t, requiresQForm: n }) {
  const r = ut(C_, !1);
  if (r !== !1) {
    const { props: i, proxy: o } = Ie();
    Object.assign(o, {
      validate: e,
      resetValidation: t,
    }),
      fe(
        () => i.disable,
        (s) => {
          s === !0
            ? (typeof t == "function" && t(), r.unbindComponent(o))
            : r.bindComponent(o);
        }
      ),
      Nt(() => {
        i.disable !== !0 && r.bindComponent(o);
      }),
      wt(() => {
        i.disable !== !0 && r.unbindComponent(o);
      });
  } else n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const zu = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
  Ku = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
  Gu = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  Vi =
    /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
  qi =
    /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
  Ts = {
    date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    email: (e) =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e
      ),
    hexColor: (e) => zu.test(e),
    hexaColor: (e) => Ku.test(e),
    hexOrHexaColor: (e) => Gu.test(e),
    rgbColor: (e) => Vi.test(e),
    rgbaColor: (e) => qi.test(e),
    rgbOrRgbaColor: (e) => Vi.test(e) || qi.test(e),
    hexOrRgbColor: (e) => zu.test(e) || Vi.test(e),
    hexaOrRgbaColor: (e) => Ku.test(e) || qi.test(e),
    anyColor: (e) => Gu.test(e) || Vi.test(e) || qi.test(e),
  },
  JC = [!0, !1, "ondemand"],
  ZC = {
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
      validator: (e) => JC.includes(e),
    },
  };
function ek(e, t) {
  const { props: n, proxy: r } = Ie(),
    i = ue(!1),
    o = ue(null),
    s = ue(!1);
  YC({
    validate: S,
    resetValidation: _,
  });
  let a = 0,
    l;
  const u = M(
      () => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0
    ),
    c = M(() => n.disable !== !0 && u.value === !0 && t.value === !1),
    f = M(() => n.error === !0 || i.value === !0),
    d = M(() =>
      typeof n.errorMessage == "string" && n.errorMessage.length !== 0
        ? n.errorMessage
        : o.value
    );
  fe(
    () => n.modelValue,
    () => {
      (s.value = !0), c.value === !0 && n.lazyRules === !1 && C();
    }
  );
  function h() {
    n.lazyRules !== "ondemand" && c.value === !0 && s.value === !0 && C();
  }
  fe(
    () => n.reactiveRules,
    (y) => {
      y === !0
        ? l === void 0 &&
          (l = fe(() => n.rules, h, {
            immediate: !0,
            deep: !0,
          }))
        : l !== void 0 && (l(), (l = void 0));
    },
    {
      immediate: !0,
    }
  ),
    fe(() => n.lazyRules, h),
    fe(e, (y) => {
      y === !0
        ? (s.value = !0)
        : c.value === !0 && n.lazyRules !== "ondemand" && C();
    });
  function _() {
    a++,
      (t.value = !1),
      (s.value = !1),
      (i.value = !1),
      (o.value = null),
      C.cancel();
  }
  function S(y = n.modelValue) {
    if (n.disable === !0 || u.value === !1) return !0;
    const g = ++a,
      E =
        t.value !== !0
          ? () => {
              s.value = !0;
            }
          : () => {},
      b = (P, A) => {
        P === !0 && E(), (i.value = P), (o.value = A || null), (t.value = !1);
      },
      O = [];
    for (let P = 0; P < n.rules.length; P++) {
      const A = n.rules[P];
      let K;
      if (
        (typeof A == "function"
          ? (K = A(y, Ts))
          : typeof A == "string" && Ts[A] !== void 0 && (K = Ts[A](y)),
        K === !1 || typeof K == "string")
      )
        return b(!0, K), !1;
      K !== !0 && K !== void 0 && O.push(K);
    }
    return O.length === 0
      ? (b(!1), !0)
      : ((t.value = !0),
        Promise.all(O).then(
          (P) => {
            if (P === void 0 || Array.isArray(P) === !1 || P.length === 0)
              return g === a && b(!1), !0;
            const A = P.find((K) => K === !1 || typeof K == "string");
            return g === a && b(A !== void 0, A), A === void 0;
          },
          (P) => (g === a && (console.error(P), b(!0)), !1)
        ));
  }
  const C = Ad(S, 0);
  return (
    wt(() => {
      l !== void 0 && l(), C.cancel();
    }),
    Object.assign(r, {
      resetValidation: _,
      validate: S,
    }),
    Ir(r, "hasError", () => f.value),
    {
      isDirtyModel: s,
      hasRules: u,
      hasError: f,
      errorMessage: d,
      validate: S,
      resetValidation: _,
    }
  );
}
function Ca(e) {
  return e != null && ("" + e).length !== 0;
}
const tk = {
    ...Qn,
    ...ZC,
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
  nk = {
    ...tk,
    maxlength: [Number, String],
  },
  rk = ["update:modelValue", "clear", "focus", "blur"];
function ik({ requiredForAttr: e = !0, tagProp: t, changeEvent: n = !1 } = {}) {
  const { props: r, proxy: i } = Ie(),
    o = Xn(r, i.$q),
    s = QC({
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
    isDark: o,
    editable: M(() => r.disable !== !0 && r.readonly !== !0),
    innerLoading: ue(!1),
    focused: ue(!1),
    hasPopupOpen: !1,
    splitAttrs: XC(),
    targetUid: s,
    rootRef: ue(null),
    targetRef: ue(null),
    controlRef: ue(null),
  };
}
function ok(e) {
  const { props: t, emit: n, slots: r, attrs: i, proxy: o } = Ie(),
    { $q: s } = o;
  let a = null;
  e.hasValue === void 0 && (e.hasValue = M(() => Ca(t.modelValue))),
    e.emitValue === void 0 &&
      (e.emitValue = (H) => {
        n("update:modelValue", H);
      }),
    e.controlEvents === void 0 &&
      (e.controlEvents = {
        onFocusin: N,
        onFocusout: L,
      }),
    Object.assign(e, {
      clearValue: q,
      onControlFocusin: N,
      onControlFocusout: L,
      focus: A,
    }),
    e.computedCounter === void 0 &&
      (e.computedCounter = M(() => {
        if (t.counter !== !1) {
          const H =
              typeof t.modelValue == "string" || typeof t.modelValue == "number"
                ? ("" + t.modelValue).length
                : Array.isArray(t.modelValue) === !0
                ? t.modelValue.length
                : 0,
            oe = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
          return H + (oe !== void 0 ? " / " + oe : "");
        }
      }));
  const {
      isDirtyModel: l,
      hasRules: u,
      hasError: c,
      errorMessage: f,
      resetValidation: d,
    } = ek(e.focused, e.innerLoading),
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
    _ = M(
      () =>
        t.bottomSlots === !0 ||
        t.hint !== void 0 ||
        u.value === !0 ||
        t.counter === !0 ||
        t.error !== null
    ),
    S = M(() =>
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
    C = M(
      () =>
        `q-field row no-wrap items-start q-field--${S.value}` +
        (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") +
        (t.rounded === !0 ? " q-field--rounded" : "") +
        (t.square === !0 ? " q-field--square" : "") +
        (h.value === !0 ? " q-field--float" : "") +
        (g.value === !0 ? " q-field--labeled" : "") +
        (t.dense === !0 ? " q-field--dense" : "") +
        (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") +
        (e.isDark.value === !0 ? " q-field--dark" : "") +
        (e.getControl === void 0 ? " q-field--auto-height" : "") +
        (e.focused.value === !0 ? " q-field--focused" : "") +
        (c.value === !0 ? " q-field--error" : "") +
        (c.value === !0 || e.focused.value === !0
          ? " q-field--highlighted"
          : "") +
        (t.hideBottomSpace !== !0 && _.value === !0
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
        (c.value === !0
          ? " text-negative"
          : typeof t.standout == "string" &&
            t.standout.length !== 0 &&
            e.focused.value === !0
          ? ` ${t.standout}`
          : t.color !== void 0
          ? ` text-${t.color}`
          : "")
    ),
    g = M(() => t.labelSlot === !0 || t.label !== void 0),
    E = M(
      () =>
        "q-field__label no-pointer-events absolute ellipsis" +
        (t.labelColor !== void 0 && c.value !== !0
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
    O = M(() => {
      const H = {};
      return (
        e.targetUid.value && (H.for = e.targetUid.value),
        t.disable === !0 && (H["aria-disabled"] = "true"),
        H
      );
    });
  function P() {
    const H = document.activeElement;
    let oe = e.targetRef !== void 0 && e.targetRef.value;
    oe &&
      (H === null || H.id !== e.targetUid.value) &&
      (oe.hasAttribute("tabindex") === !0 ||
        (oe = oe.querySelector("[tabindex]")),
      oe &&
        oe !== H &&
        oe.focus({
          preventScroll: !0,
        }));
  }
  function A() {
    kl(P);
  }
  function K() {
    ZS(P);
    const H = document.activeElement;
    H !== null && e.rootRef.value.contains(H) && H.blur();
  }
  function N(H) {
    a !== null && (clearTimeout(a), (a = null)),
      e.editable.value === !0 &&
        e.focused.value === !1 &&
        ((e.focused.value = !0), n("focus", H));
  }
  function L(H, oe) {
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
            (e.focused.value === !0 && ((e.focused.value = !1), n("blur", H)),
            oe !== void 0 && oe());
      }));
  }
  function q(H) {
    Tt(H),
      s.platform.is.mobile !== !0
        ? (
            (e.targetRef !== void 0 && e.targetRef.value) ||
            e.rootRef.value
          ).focus()
        : e.rootRef.value.contains(document.activeElement) === !0 &&
          document.activeElement.blur(),
      t.type === "file" && (e.inputRef.value.value = null),
      n("update:modelValue", null),
      e.changeEvent === !0 && n("change", null),
      n("clear", t.modelValue),
      dt(() => {
        const oe = l.value;
        d(), (l.value = oe);
      });
  }
  function T(H) {
    [13, 32].includes(H.keyCode) && q(H);
  }
  function Q() {
    const H = [];
    return (
      r.prepend !== void 0 &&
        H.push(
          j(
            "div",
            {
              class:
                "q-field__prepend q-field__marginal row no-wrap items-center",
              key: "prepend",
              onClick: yn,
            },
            r.prepend()
          )
        ),
      H.push(
        j(
          "div",
          {
            class:
              "q-field__control-container col relative-position row no-wrap q-anchor--skip",
          },
          $()
        )
      ),
      c.value === !0 &&
        t.noErrorIcon === !1 &&
        H.push(
          ee("error", [
            j(on, {
              name: s.iconSet.field.error,
              color: "negative",
            }),
          ])
        ),
      t.loading === !0 || e.innerLoading.value === !0
        ? H.push(
            ee(
              "inner-loading-append",
              r.loading !== void 0
                ? r.loading()
                : [
                    j(kr, {
                      color: t.color,
                    }),
                  ]
            )
          )
        : t.clearable === !0 &&
          e.hasValue.value === !0 &&
          e.editable.value === !0 &&
          H.push(
            ee("inner-clearable-append", [
              j(on, {
                class: "q-field__focusable-action",
                name: t.clearIcon || s.iconSet.field.clear,
                tabindex: 0,
                role: "button",
                "aria-hidden": "false",
                "aria-label": s.lang.label.clear,
                onKeyup: T,
                onClick: q,
              }),
            ])
          ),
      r.append !== void 0 &&
        H.push(
          j(
            "div",
            {
              class:
                "q-field__append q-field__marginal row no-wrap items-center",
              key: "append",
              onClick: yn,
            },
            r.append()
          )
        ),
      e.getInnerAppend !== void 0 &&
        H.push(ee("inner-append", e.getInnerAppend())),
      e.getControlChild !== void 0 && H.push(e.getControlChild()),
      H
    );
  }
  function $() {
    const H = [];
    return (
      t.prefix !== void 0 &&
        t.prefix !== null &&
        H.push(
          j(
            "div",
            {
              class: "q-field__prefix no-pointer-events row items-center",
            },
            t.prefix
          )
        ),
      e.getShadowControl !== void 0 &&
        e.hasShadow.value === !0 &&
        H.push(e.getShadowControl()),
      e.getControl !== void 0
        ? H.push(e.getControl())
        : r.rawControl !== void 0
        ? H.push(r.rawControl())
        : r.control !== void 0 &&
          H.push(
            j(
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
      g.value === !0 &&
        H.push(
          j(
            "div",
            {
              class: E.value,
            },
            Lt(r.label, t.label)
          )
        ),
      t.suffix !== void 0 &&
        t.suffix !== null &&
        H.push(
          j(
            "div",
            {
              class: "q-field__suffix no-pointer-events row items-center",
            },
            t.suffix
          )
        ),
      H.concat(Lt(r.default))
    );
  }
  function te() {
    let H, oe;
    c.value === !0
      ? f.value !== null
        ? ((H = [
            j(
              "div",
              {
                role: "alert",
              },
              f.value
            ),
          ]),
          (oe = `q--slot-error-${f.value}`))
        : ((H = Lt(r.error)), (oe = "q--slot-error"))
      : (t.hideHint !== !0 || e.focused.value === !0) &&
        (t.hint !== void 0
          ? ((H = [j("div", t.hint)]), (oe = `q--slot-hint-${t.hint}`))
          : ((H = Lt(r.hint)), (oe = "q--slot-hint")));
    const le = t.counter === !0 || r.counter !== void 0;
    if (t.hideBottomSpace === !0 && le === !1 && H === void 0) return;
    const de = j(
      "div",
      {
        key: oe,
        class: "q-field__messages col",
      },
      H
    );
    return j(
      "div",
      {
        class:
          "q-field__bottom row items-start q-field__bottom--" +
          (t.hideBottomSpace !== !0 ? "animated" : "stale"),
        onClick: yn,
      },
      [
        t.hideBottomSpace === !0
          ? de
          : j(
              fi,
              {
                name: "q-transition--field-message",
              },
              () => de
            ),
        le === !0
          ? j(
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
  function ee(H, oe) {
    return oe === null
      ? null
      : j(
          "div",
          {
            key: H,
            class:
              "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip",
          },
          oe
        );
  }
  let Z = !1;
  return (
    Ro(() => {
      Z = !0;
    }),
    zf(() => {
      Z === !0 && t.autofocus === !0 && o.focus();
    }),
    t.autofocus === !0 &&
      Nt(() => {
        o.focus();
      }),
    wt(() => {
      a !== null && clearTimeout(a);
    }),
    Object.assign(o, {
      focus: A,
      blur: K,
    }),
    function () {
      const oe =
        e.getControl === void 0 && r.control === void 0
          ? {
              ...e.splitAttrs.attributes.value,
              "data-autofocus": t.autofocus === !0 || void 0,
              ...O.value,
            }
          : O.value;
      return j(
        e.tag.value,
        {
          ref: e.rootRef,
          class: [C.value, i.class],
          style: i.style,
          ...oe,
        },
        [
          r.before !== void 0
            ? j(
                "div",
                {
                  class:
                    "q-field__before q-field__marginal row no-wrap items-center",
                  onClick: yn,
                },
                r.before()
              )
            : null,
          j(
            "div",
            {
              class: "q-field__inner relative-position col self-stretch",
            },
            [
              j(
                "div",
                {
                  ref: e.controlRef,
                  class: y.value,
                  tabindex: -1,
                  ...e.controlEvents,
                },
                Q()
              ),
              _.value === !0 ? te() : null,
            ]
          ),
          r.after !== void 0
            ? j(
                "div",
                {
                  class:
                    "q-field__after q-field__marginal row no-wrap items-center",
                  onClick: yn,
                },
                r.after()
              )
            : null,
        ]
      );
    }
  );
}
const Qu = {
    date: "####/##/##",
    datetime: "####/##/## ##:##",
    time: "##:##",
    fulltime: "##:##:##",
    phone: "(###) ### - ####",
    card: "#### #### #### ####",
  },
  Co = {
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
  ig = Object.keys(Co);
ig.forEach((e) => {
  Co[e].regex = new RegExp(Co[e].pattern);
});
const sk = new RegExp(
    "\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + ig.join("") + "])|(.)",
    "g"
  ),
  Xu = /[.*+?^${}()|[\]\\]/g,
  je = "",
  ak = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean,
  };
function lk(e, t, n, r) {
  let i, o, s, a, l, u;
  const c = ue(null),
    f = ue(h());
  function d() {
    return (
      e.autogrow === !0 ||
      ["textarea", "text", "search", "url", "tel", "password"].includes(e.type)
    );
  }
  fe(() => e.type + e.autogrow, S),
    fe(
      () => e.mask,
      (N) => {
        if (N !== void 0) C(f.value, !0);
        else {
          const L = A(f.value);
          S(), e.modelValue !== L && t("update:modelValue", L);
        }
      }
    ),
    fe(
      () => e.fillMask + e.reverseFillMask,
      () => {
        c.value === !0 && C(f.value, !0);
      }
    ),
    fe(
      () => e.unmaskedValue,
      () => {
        c.value === !0 && C(f.value);
      }
    );
  function h() {
    if ((S(), c.value === !0)) {
      const N = O(A(e.modelValue));
      return e.fillMask !== !1 ? K(N) : N;
    }
    return e.modelValue;
  }
  function _(N) {
    if (N < i.length) return i.slice(-N);
    let L = "",
      q = i;
    const T = q.indexOf(je);
    if (T !== -1) {
      for (let Q = N - q.length; Q > 0; Q--) L += je;
      q = q.slice(0, T) + L + q.slice(T);
    }
    return q;
  }
  function S() {
    if (
      ((c.value = e.mask !== void 0 && e.mask.length !== 0 && d()),
      c.value === !1)
    ) {
      (a = void 0), (i = ""), (o = "");
      return;
    }
    const N = Qu[e.mask] === void 0 ? e.mask : Qu[e.mask],
      L =
        typeof e.fillMask == "string" && e.fillMask.length !== 0
          ? e.fillMask.slice(0, 1)
          : "_",
      q = L.replace(Xu, "\\$&"),
      T = [],
      Q = [],
      $ = [];
    let te = e.reverseFillMask === !0,
      ee = "",
      Z = "";
    N.replace(sk, (de, B, pe, Ne, Re) => {
      if (Ne !== void 0) {
        const re = Co[Ne];
        $.push(re),
          (Z = re.negate),
          te === !0 &&
            (Q.push(
              "(?:" +
                Z +
                "+)?(" +
                re.pattern +
                "+)?(?:" +
                Z +
                "+)?(" +
                re.pattern +
                "+)?"
            ),
            (te = !1)),
          Q.push("(?:" + Z + "+)?(" + re.pattern + ")?");
      } else if (pe !== void 0)
        (ee = "\\" + (pe === "\\" ? "" : pe)),
          $.push(pe),
          T.push("([^" + ee + "]+)?" + ee + "?");
      else {
        const re = B !== void 0 ? B : Re;
        (ee = re === "\\" ? "\\\\\\\\" : re.replace(Xu, "\\\\$&")),
          $.push(re),
          T.push("([^" + ee + "]+)?" + ee + "?");
      }
    });
    const H = new RegExp(
        "^" +
          T.join("") +
          "(" +
          (ee === "" ? "." : "[^" + ee + "]") +
          "+)?" +
          (ee === "" ? "" : "[" + ee + "]*") +
          "$"
      ),
      oe = Q.length - 1,
      le = Q.map((de, B) =>
        B === 0 && e.reverseFillMask === !0
          ? new RegExp("^" + q + "*" + de)
          : B === oe
          ? new RegExp(
              "^" +
                de +
                "(" +
                (Z === "" ? "." : Z) +
                "+)?" +
                (e.reverseFillMask === !0 ? "$" : q + "*")
            )
          : new RegExp("^" + de)
      );
    (s = $),
      (a = (de) => {
        const B = H.exec(
          e.reverseFillMask === !0 ? de : de.slice(0, $.length + 1)
        );
        B !== null && (de = B.slice(1).join(""));
        const pe = [],
          Ne = le.length;
        for (let Re = 0, re = de; Re < Ne; Re++) {
          const D = le[Re].exec(re);
          if (D === null) break;
          (re = re.slice(D.shift().length)), pe.push(...D);
        }
        return pe.length !== 0 ? pe.join("") : de;
      }),
      (i = $.map((de) => (typeof de == "string" ? de : je)).join("")),
      (o = i.split(je).join(L));
  }
  function C(N, L, q) {
    const T = r.value,
      Q = T.selectionEnd,
      $ = T.value.length - Q,
      te = A(N);
    L === !0 && S();
    const ee = O(te),
      Z = e.fillMask !== !1 ? K(ee) : ee,
      H = f.value !== Z;
    T.value !== Z && (T.value = Z),
      H === !0 && (f.value = Z),
      document.activeElement === T &&
        dt(() => {
          if (Z === o) {
            const le = e.reverseFillMask === !0 ? o.length : 0;
            T.setSelectionRange(le, le, "forward");
            return;
          }
          if (q === "insertFromPaste" && e.reverseFillMask !== !0) {
            const le = T.selectionEnd;
            let de = Q - 1;
            for (let B = l; B <= de && B < le; B++) i[B] !== je && de++;
            g.right(T, de);
            return;
          }
          if (
            ["deleteContentBackward", "deleteContentForward"].indexOf(q) !== -1
          ) {
            const le =
              e.reverseFillMask === !0
                ? Q === 0
                  ? Z.length > ee.length
                    ? 1
                    : 0
                  : Math.max(
                      0,
                      Z.length - (Z === o ? 0 : Math.min(ee.length, $) + 1)
                    ) + 1
                : Q;
            T.setSelectionRange(le, le, "forward");
            return;
          }
          if (e.reverseFillMask === !0)
            if (H === !0) {
              const le = Math.max(
                0,
                Z.length - (Z === o ? 0 : Math.min(ee.length, $ + 1))
              );
              le === 1 && Q === 1
                ? T.setSelectionRange(le, le, "forward")
                : g.rightReverse(T, le);
            } else {
              const le = Z.length - $;
              T.setSelectionRange(le, le, "backward");
            }
          else if (H === !0) {
            const le = Math.max(0, i.indexOf(je), Math.min(ee.length, Q) - 1);
            g.right(T, le);
          } else {
            const le = Q - 1;
            g.right(T, le);
          }
        });
    const oe = e.unmaskedValue === !0 ? A(Z) : Z;
    String(e.modelValue) !== oe &&
      (e.modelValue !== null || oe !== "") &&
      n(oe, !0);
  }
  function y(N, L, q) {
    const T = O(A(N.value));
    (L = Math.max(0, i.indexOf(je), Math.min(T.length, L))),
      (l = L),
      N.setSelectionRange(L, q, "forward");
  }
  const g = {
    left(N, L) {
      const q = i.slice(L - 1).indexOf(je) === -1;
      let T = Math.max(0, L - 1);
      for (; T >= 0; T--)
        if (i[T] === je) {
          (L = T), q === !0 && L++;
          break;
        }
      if (T < 0 && i[L] !== void 0 && i[L] !== je) return g.right(N, 0);
      L >= 0 && N.setSelectionRange(L, L, "backward");
    },
    right(N, L) {
      const q = N.value.length;
      let T = Math.min(q, L + 1);
      for (; T <= q; T++)
        if (i[T] === je) {
          L = T;
          break;
        } else i[T - 1] === je && (L = T);
      if (T > q && i[L - 1] !== void 0 && i[L - 1] !== je) return g.left(N, q);
      N.setSelectionRange(L, L, "forward");
    },
    leftReverse(N, L) {
      const q = _(N.value.length);
      let T = Math.max(0, L - 1);
      for (; T >= 0; T--)
        if (q[T - 1] === je) {
          L = T;
          break;
        } else if (q[T] === je && ((L = T), T === 0)) break;
      if (T < 0 && q[L] !== void 0 && q[L] !== je) return g.rightReverse(N, 0);
      L >= 0 && N.setSelectionRange(L, L, "backward");
    },
    rightReverse(N, L) {
      const q = N.value.length,
        T = _(q),
        Q = T.slice(0, L + 1).indexOf(je) === -1;
      let $ = Math.min(q, L + 1);
      for (; $ <= q; $++)
        if (T[$ - 1] === je) {
          (L = $), L > 0 && Q === !0 && L--;
          break;
        }
      if ($ > q && T[L - 1] !== void 0 && T[L - 1] !== je)
        return g.leftReverse(N, q);
      N.setSelectionRange(L, L, "forward");
    },
  };
  function E(N) {
    t("click", N), (u = void 0);
  }
  function b(N) {
    if ((t("keydown", N), Nd(N) === !0 || N.altKey === !0)) return;
    const L = r.value,
      q = L.selectionStart,
      T = L.selectionEnd;
    if ((N.shiftKey || (u = void 0), N.keyCode === 37 || N.keyCode === 39)) {
      N.shiftKey &&
        u === void 0 &&
        (u = L.selectionDirection === "forward" ? q : T);
      const Q =
        g[
          (N.keyCode === 39 ? "right" : "left") +
            (e.reverseFillMask === !0 ? "Reverse" : "")
        ];
      if ((N.preventDefault(), Q(L, u === q ? T : q), N.shiftKey)) {
        const $ = L.selectionStart;
        L.setSelectionRange(Math.min(u, $), Math.max(u, $), "forward");
      }
    } else
      N.keyCode === 8 && e.reverseFillMask !== !0 && q === T
        ? (g.left(L, q), L.setSelectionRange(L.selectionStart, T, "backward"))
        : N.keyCode === 46 &&
          e.reverseFillMask === !0 &&
          q === T &&
          (g.rightReverse(L, T),
          L.setSelectionRange(q, L.selectionEnd, "forward"));
  }
  function O(N) {
    if (N == null || N === "") return "";
    if (e.reverseFillMask === !0) return P(N);
    const L = s;
    let q = 0,
      T = "";
    for (let Q = 0; Q < L.length; Q++) {
      const $ = N[q],
        te = L[Q];
      if (typeof te == "string") (T += te), $ === te && q++;
      else if ($ !== void 0 && te.regex.test($))
        (T += te.transform !== void 0 ? te.transform($) : $), q++;
      else return T;
    }
    return T;
  }
  function P(N) {
    const L = s,
      q = i.indexOf(je);
    let T = N.length - 1,
      Q = "";
    for (let $ = L.length - 1; $ >= 0 && T !== -1; $--) {
      const te = L[$];
      let ee = N[T];
      if (typeof te == "string") (Q = te + Q), ee === te && T--;
      else if (ee !== void 0 && te.regex.test(ee))
        do
          (Q = (te.transform !== void 0 ? te.transform(ee) : ee) + Q),
            T--,
            (ee = N[T]);
        while (q === $ && ee !== void 0 && te.regex.test(ee));
      else return Q;
    }
    return Q;
  }
  function A(N) {
    return typeof N != "string" || a === void 0
      ? typeof N == "number"
        ? a("" + N)
        : N
      : a(N);
  }
  function K(N) {
    return o.length - N.length <= 0
      ? N
      : e.reverseFillMask === !0 && N.length !== 0
      ? o.slice(0, -N.length) + N
      : N + o.slice(N.length);
  }
  return {
    innerValue: f,
    hasMask: c,
    moveCursorForPaste: y,
    updateMaskValue: C,
    onMaskedKeydown: b,
    onMaskedClick: E,
  };
}
const Il = {
  name: String,
};
function PT(e) {
  return M(() => ({
    type: "hidden",
    name: e.name,
    value: e.modelValue,
  }));
}
function og(e = {}) {
  return (t, n, r) => {
    t[n](
      j("input", {
        class: "hidden" + (r || ""),
        ...e.value,
      })
    );
  };
}
function ck(e) {
  return M(() => e.name || e.for);
}
function uk(e, t) {
  function n() {
    const r = e.modelValue;
    try {
      const i =
        "DataTransfer" in window
          ? new DataTransfer()
          : "ClipboardEvent" in window
          ? new ClipboardEvent("").clipboardData
          : void 0;
      return (
        Object(r) === r &&
          ("length" in r ? Array.from(r) : [r]).forEach((o) => {
            i.items.add(o);
          }),
        {
          files: i.files,
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
const fk =
    /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
  dk =
    /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,
  hk = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,
  mk = /[a-z0-9_ -]$/i;
function gk(e) {
  return function (n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== !0) return;
      (n.target.qComposing = !1), e(n);
    } else
      n.type === "compositionupdate" &&
        n.target.qComposing !== !0 &&
        typeof n.data == "string" &&
        (Be.is.firefox === !0
          ? mk.test(n.data) === !1
          : fk.test(n.data) === !0 ||
            dk.test(n.data) === !0 ||
            hk.test(n.data) === !0) === !0 &&
        (n.target.qComposing = !0);
  };
}
const pk = nt({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...nk,
    ...ak,
    ...Il,
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
  emits: [...rk, "paste", "change", "keydown", "click", "animationend"],
  setup(e, { emit: t, attrs: n }) {
    const { proxy: r } = Ie(),
      { $q: i } = r,
      o = {};
    let s = NaN,
      a,
      l,
      u = null,
      c;
    const f = ue(null),
      d = ck(e),
      {
        innerValue: h,
        hasMask: _,
        moveCursorForPaste: S,
        updateMaskValue: C,
        onMaskedKeydown: y,
        onMaskedClick: g,
      } = lk(e, t, ee, f),
      E = uk(e, !0),
      b = M(() => Ca(h.value)),
      O = gk($),
      P = ik({
        changeEvent: !0,
      }),
      A = M(() => e.type === "textarea" || e.autogrow === !0),
      K = M(
        () =>
          A.value === !0 ||
          ["text", "search", "url", "tel", "password"].includes(e.type)
      ),
      N = M(() => {
        const B = {
          ...P.splitAttrs.listeners.value,
          onInput: $,
          onPaste: Q,
          onChange: H,
          onBlur: oe,
          onFocus: ho,
        };
        return (
          (B.onCompositionstart =
            B.onCompositionupdate =
            B.onCompositionend =
              O),
          _.value === !0 && ((B.onKeydown = y), (B.onClick = g)),
          e.autogrow === !0 && (B.onAnimationend = te),
          B
        );
      }),
      L = M(() => {
        const B = {
          tabindex: 0,
          "data-autofocus": e.autofocus === !0 || void 0,
          rows: e.type === "textarea" ? 6 : void 0,
          "aria-label": e.label,
          name: d.value,
          ...P.splitAttrs.attributes.value,
          id: P.targetUid.value,
          maxlength: e.maxlength,
          disabled: e.disable === !0,
          readonly: e.readonly === !0,
        };
        return (
          A.value === !1 && (B.type = e.type),
          e.autogrow === !0 && (B.rows = 1),
          B
        );
      });
    fe(
      () => e.type,
      () => {
        f.value && (f.value.value = e.modelValue);
      }
    ),
      fe(
        () => e.modelValue,
        (B) => {
          if (_.value === !0) {
            if (l === !0 && ((l = !1), String(B) === s)) return;
            C(B);
          } else
            h.value !== B &&
              ((h.value = B),
              e.type === "number" &&
                o.hasOwnProperty("value") === !0 &&
                (a === !0 ? (a = !1) : delete o.value));
          e.autogrow === !0 && dt(Z);
        }
      ),
      fe(
        () => e.autogrow,
        (B) => {
          B === !0
            ? dt(Z)
            : f.value !== null && n.rows > 0 && (f.value.style.height = "auto");
        }
      ),
      fe(
        () => e.dense,
        () => {
          e.autogrow === !0 && dt(Z);
        }
      );
    function q() {
      kl(() => {
        const B = document.activeElement;
        f.value !== null &&
          f.value !== B &&
          (B === null || B.id !== P.targetUid.value) &&
          f.value.focus({
            preventScroll: !0,
          });
      });
    }
    function T() {
      f.value !== null && f.value.select();
    }
    function Q(B) {
      if (_.value === !0 && e.reverseFillMask !== !0) {
        const pe = B.target;
        S(pe, pe.selectionStart, pe.selectionEnd);
      }
      t("paste", B);
    }
    function $(B) {
      if (!B || !B.target) return;
      if (e.type === "file") {
        t("update:modelValue", B.target.files);
        return;
      }
      const pe = B.target.value;
      if (B.target.qComposing === !0) {
        o.value = pe;
        return;
      }
      if (_.value === !0) C(pe, !1, B.inputType);
      else if (
        (ee(pe), K.value === !0 && B.target === document.activeElement)
      ) {
        const { selectionStart: Ne, selectionEnd: Re } = B.target;
        Ne !== void 0 &&
          Re !== void 0 &&
          dt(() => {
            B.target === document.activeElement &&
              pe.indexOf(B.target.value) === 0 &&
              B.target.setSelectionRange(Ne, Re);
          });
      }
      e.autogrow === !0 && Z();
    }
    function te(B) {
      t("animationend", B), Z();
    }
    function ee(B, pe) {
      (c = () => {
        (u = null),
          e.type !== "number" &&
            o.hasOwnProperty("value") === !0 &&
            delete o.value,
          e.modelValue !== B &&
            s !== B &&
            ((s = B),
            pe === !0 && (l = !0),
            t("update:modelValue", B),
            dt(() => {
              s === B && (s = NaN);
            })),
          (c = void 0);
      }),
        e.type === "number" && ((a = !0), (o.value = B)),
        e.debounce !== void 0
          ? (u !== null && clearTimeout(u),
            (o.value = B),
            (u = setTimeout(c, e.debounce)))
          : c();
    }
    function Z() {
      requestAnimationFrame(() => {
        const B = f.value;
        if (B !== null) {
          const pe = B.parentNode.style,
            { scrollTop: Ne } = B,
            { overflowY: Re, maxHeight: re } =
              i.platform.is.firefox === !0 ? {} : window.getComputedStyle(B),
            D = Re !== void 0 && Re !== "scroll";
          D === !0 && (B.style.overflowY = "hidden"),
            (pe.marginBottom = B.scrollHeight - 1 + "px"),
            (B.style.height = "1px"),
            (B.style.height = B.scrollHeight + "px"),
            D === !0 &&
              (B.style.overflowY =
                parseInt(re, 10) < B.scrollHeight ? "auto" : "hidden"),
            (pe.marginBottom = ""),
            (B.scrollTop = Ne);
        }
      });
    }
    function H(B) {
      O(B),
        u !== null && (clearTimeout(u), (u = null)),
        c !== void 0 && c(),
        t("change", B.target.value);
    }
    function oe(B) {
      B !== void 0 && ho(B),
        u !== null && (clearTimeout(u), (u = null)),
        c !== void 0 && c(),
        (a = !1),
        (l = !1),
        delete o.value,
        e.type !== "file" &&
          setTimeout(() => {
            f.value !== null &&
              (f.value.value = h.value !== void 0 ? h.value : "");
          });
    }
    function le() {
      return o.hasOwnProperty("value") === !0
        ? o.value
        : h.value !== void 0
        ? h.value
        : "";
    }
    wt(() => {
      oe();
    }),
      Nt(() => {
        e.autogrow === !0 && Z();
      }),
      Object.assign(P, {
        innerValue: h,
        fieldClass: M(
          () =>
            `q-${A.value === !0 ? "textarea" : "input"}` +
            (e.autogrow === !0 ? " q-textarea--autogrow" : "")
        ),
        hasShadow: M(
          () =>
            e.type !== "file" &&
            typeof e.shadowText == "string" &&
            e.shadowText.length !== 0
        ),
        inputRef: f,
        emitValue: ee,
        hasValue: b,
        floatingLabel: M(
          () =>
            (b.value === !0 &&
              (e.type !== "number" || isNaN(h.value) === !1)) ||
            Ca(e.displayValue)
        ),
        getControl: () =>
          j(A.value === !0 ? "textarea" : "input", {
            ref: f,
            class: ["q-field__native q-placeholder", e.inputClass],
            style: e.inputStyle,
            ...L.value,
            ...N.value,
            ...(e.type !== "file"
              ? {
                  value: le(),
                }
              : E.value),
          }),
        getShadowControl: () =>
          j(
            "div",
            {
              class:
                "q-field__native q-field__shadow absolute-bottom no-pointer-events" +
                (A.value === !0 ? "" : " text-no-wrap"),
            },
            [
              j(
                "span",
                {
                  class: "invisible",
                },
                le()
              ),
              j("span", e.shadowText),
            ]
          ),
      });
    const de = ok(P);
    return (
      Object.assign(r, {
        focus: q,
        select: T,
        getNativeElement: () => f.value,
      }),
      Ir(r, "nativeEl", () => f.value),
      de
    );
  },
});
function sg(e, t) {
  const n = ue(null),
    r = M(() =>
      e.disable === !0
        ? null
        : j("span", {
            ref: n,
            class: "no-outline",
            tabindex: -1,
          })
    );
  function i(o) {
    const s = t.value;
    o !== void 0 && o.type.indexOf("key") === 0
      ? s !== null &&
        document.activeElement !== s &&
        s.contains(document.activeElement) === !0 &&
        s.focus()
      : n.value !== null &&
        (o === void 0 || (s !== null && s.contains(o.target) === !0)) &&
        n.value.focus();
  }
  return {
    refocusTargetEl: r,
    refocusTarget: i,
  };
}
const ag = {
    xs: 30,
    sm: 35,
    md: 40,
    lg: 50,
    xl: 60,
  },
  vk = () =>
    j(
      "svg",
      {
        key: "svg",
        class: "q-radio__bg absolute non-selectable",
        viewBox: "0 0 24 24",
      },
      [
        j("path", {
          d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12",
        }),
        j("path", {
          class: "q-radio__check",
          d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6",
        }),
      ]
    ),
  _k = nt({
    name: "QRadio",
    props: {
      ...Qn,
      ...Ei,
      ...Il,
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
      const { proxy: r } = Ie(),
        i = Xn(e, r.$q),
        o = Si(e, ag),
        s = ue(null),
        { refocusTargetEl: a, refocusTarget: l } = sg(e, s),
        u = M(() => he(e.modelValue) === he(e.val)),
        c = M(
          () =>
            "q-radio cursor-pointer no-outline row inline no-wrap items-center" +
            (e.disable === !0 ? " disabled" : "") +
            (i.value === !0 ? " q-radio--dark" : "") +
            (e.dense === !0 ? " q-radio--dense" : "") +
            (e.leftLabel === !0 ? " reverse" : "")
        ),
        f = M(() => {
          const b =
            e.color !== void 0 && (e.keepColor === !0 || u.value === !0)
              ? ` text-${e.color}`
              : "";
          return `q-radio__inner relative-position q-radio__inner--${
            u.value === !0 ? "truthy" : "falsy"
          }${b}`;
        }),
        d = M(() => (u.value === !0 ? e.checkedIcon : e.uncheckedIcon) || null),
        h = M(() => (e.disable === !0 ? -1 : e.tabindex || 0)),
        _ = M(() => {
          const b = {
            type: "radio",
          };
          return (
            e.name !== void 0 &&
              Object.assign(b, {
                ".checked": u.value === !0,
                "^checked": u.value === !0 ? "checked" : void 0,
                name: e.name,
                value: e.val,
              }),
            b
          );
        }),
        S = og(_);
      function C(b) {
        b !== void 0 && (Tt(b), l(b)),
          e.disable !== !0 &&
            u.value !== !0 &&
            n("update:modelValue", e.val, b);
      }
      function y(b) {
        (b.keyCode === 13 || b.keyCode === 32) && Tt(b);
      }
      function g(b) {
        (b.keyCode === 13 || b.keyCode === 32) && C(b);
      }
      Object.assign(r, {
        set: C,
      });
      const E = vk();
      return () => {
        const b =
          d.value !== null
            ? [
                j(
                  "div",
                  {
                    key: "icon",
                    class:
                      "q-radio__icon-container absolute-full flex flex-center no-wrap",
                  },
                  [
                    j(on, {
                      class: "q-radio__icon",
                      name: d.value,
                    }),
                  ]
                ),
              ]
            : [E];
        e.disable !== !0 &&
          S(b, "unshift", " q-radio__native q-ma-none q-pa-none");
        const O = [
          j(
            "div",
            {
              class: f.value,
              style: o.value,
              "aria-hidden": "true",
            },
            b
          ),
        ];
        a.value !== null && O.push(a.value);
        const P = e.label !== void 0 ? $n(t.default, [e.label]) : Lt(t.default);
        return (
          P !== void 0 &&
            O.push(
              j(
                "div",
                {
                  class: "q-radio__label q-anchor--skip",
                },
                P
              )
            ),
          j(
            "div",
            {
              ref: s,
              class: c.value,
              tabindex: h.value,
              role: "radio",
              "aria-label": e.label,
              "aria-checked": u.value === !0 ? "true" : "false",
              "aria-disabled": e.disable === !0 ? "true" : void 0,
              onClick: C,
              onKeydown: y,
              onKeyup: g,
            },
            O
          )
        );
      };
    },
  }),
  lg = {
    ...Qn,
    ...Ei,
    ...Il,
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
  cg = ["update:modelValue"];
function ug(e, t) {
  const { props: n, slots: r, emit: i, proxy: o } = Ie(),
    { $q: s } = o,
    a = Xn(n, s),
    l = ue(null),
    { refocusTargetEl: u, refocusTarget: c } = sg(n, l),
    f = Si(n, ag),
    d = M(() => n.val !== void 0 && Array.isArray(n.modelValue)),
    h = M(() => {
      const T = he(n.val);
      return d.value === !0 ? n.modelValue.findIndex((Q) => he(Q) === T) : -1;
    }),
    _ = M(() =>
      d.value === !0 ? h.value !== -1 : he(n.modelValue) === he(n.trueValue)
    ),
    S = M(() =>
      d.value === !0 ? h.value === -1 : he(n.modelValue) === he(n.falseValue)
    ),
    C = M(() => _.value === !1 && S.value === !1),
    y = M(() => (n.disable === !0 ? -1 : n.tabindex || 0)),
    g = M(
      () =>
        `q-${e} cursor-pointer no-outline row inline no-wrap items-center` +
        (n.disable === !0 ? " disabled" : "") +
        (a.value === !0 ? ` q-${e}--dark` : "") +
        (n.dense === !0 ? ` q-${e}--dense` : "") +
        (n.leftLabel === !0 ? " reverse" : "")
    ),
    E = M(() => {
      const T = _.value === !0 ? "truthy" : S.value === !0 ? "falsy" : "indet",
        Q =
          n.color !== void 0 &&
          (n.keepColor === !0 ||
            (e === "toggle" ? _.value === !0 : S.value !== !0))
            ? ` text-${n.color}`
            : "";
      return `q-${e}__inner relative-position non-selectable q-${e}__inner--${T}${Q}`;
    }),
    b = M(() => {
      const T = {
        type: "checkbox",
      };
      return (
        n.name !== void 0 &&
          Object.assign(T, {
            ".checked": _.value,
            "^checked": _.value === !0 ? "checked" : void 0,
            name: n.name,
            value: d.value === !0 ? n.val : n.trueValue,
          }),
        T
      );
    }),
    O = og(b),
    P = M(() => {
      const T = {
        tabindex: y.value,
        role: e === "toggle" ? "switch" : "checkbox",
        "aria-label": n.label,
        "aria-checked":
          C.value === !0 ? "mixed" : _.value === !0 ? "true" : "false",
      };
      return n.disable === !0 && (T["aria-disabled"] = "true"), T;
    });
  function A(T) {
    T !== void 0 && (Tt(T), c(T)),
      n.disable !== !0 && i("update:modelValue", K(), T);
  }
  function K() {
    if (d.value === !0) {
      if (_.value === !0) {
        const T = n.modelValue.slice();
        return T.splice(h.value, 1), T;
      }
      return n.modelValue.concat([n.val]);
    }
    if (_.value === !0) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1)
        return n.falseValue;
    } else if (S.value === !0) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === !1)
        return n.trueValue;
    } else return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function N(T) {
    (T.keyCode === 13 || T.keyCode === 32) && Tt(T);
  }
  function L(T) {
    (T.keyCode === 13 || T.keyCode === 32) && A(T);
  }
  const q = t(_, C);
  return (
    Object.assign(o, {
      toggle: A,
    }),
    () => {
      const T = q();
      n.disable !== !0 &&
        O(T, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
      const Q = [
        j(
          "div",
          {
            class: E.value,
            style: f.value,
            "aria-hidden": "true",
          },
          T
        ),
      ];
      u.value !== null && Q.push(u.value);
      const $ = n.label !== void 0 ? $n(r.default, [n.label]) : Lt(r.default);
      return (
        $ !== void 0 &&
          Q.push(
            j(
              "div",
              {
                class: `q-${e}__label q-anchor--skip`,
              },
              $
            )
          ),
        j(
          "div",
          {
            ref: l,
            class: g.value,
            ...P.value,
            onClick: A,
            onKeydown: N,
            onKeyup: L,
          },
          Q
        )
      );
    }
  );
}
const bk = () =>
    j(
      "div",
      {
        key: "svg",
        class: "q-checkbox__bg absolute",
      },
      [
        j(
          "svg",
          {
            class: "q-checkbox__svg fit absolute-full",
            viewBox: "0 0 24 24",
          },
          [
            j("path", {
              class: "q-checkbox__truthy",
              fill: "none",
              d: "M1.73,12.91 8.1,19.28 22.79,4.59",
            }),
            j("path", {
              class: "q-checkbox__indet",
              d: "M4,14H20V10H4",
            }),
          ]
        ),
      ]
    ),
  yk = nt({
    name: "QCheckbox",
    props: lg,
    emits: cg,
    setup(e) {
      const t = bk();
      function n(r, i) {
        const o = M(
          () =>
            (r.value === !0
              ? e.checkedIcon
              : i.value === !0
              ? e.indeterminateIcon
              : e.uncheckedIcon) || null
        );
        return () =>
          o.value !== null
            ? [
                j(
                  "div",
                  {
                    key: "icon",
                    class:
                      "q-checkbox__icon-container absolute-full flex flex-center no-wrap",
                  },
                  [
                    j(on, {
                      class: "q-checkbox__icon",
                      name: o.value,
                    }),
                  ]
                ),
              ]
            : [t];
      }
      return ug("checkbox", n);
    },
  }),
  wk = nt({
    name: "QToggle",
    props: {
      ...lg,
      icon: String,
      iconColor: String,
    },
    emits: cg,
    setup(e) {
      function t(n, r) {
        const i = M(
            () =>
              (n.value === !0
                ? e.checkedIcon
                : r.value === !0
                ? e.indeterminateIcon
                : e.uncheckedIcon) || e.icon
          ),
          o = M(() => (n.value === !0 ? e.iconColor : null));
        return () => [
          j("div", {
            class: "q-toggle__track",
          }),
          j(
            "div",
            {
              class: "q-toggle__thumb absolute flex flex-center no-wrap",
            },
            i.value !== void 0
              ? [
                  j(on, {
                    name: i.value,
                    color: o.value,
                  }),
                ]
              : void 0
          ),
        ];
      }
      return ug("toggle", t);
    },
  }),
  fg = {
    radio: _k,
    checkbox: yk,
    toggle: wk,
  },
  Ek = Object.keys(fg);
function Is(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (r) => r[n];
}
const Sk = nt({
    name: "QOptionGroup",
    props: {
      ...Qn,
      modelValue: {
        required: !0,
      },
      options: {
        type: Array,
        validator: (e) => e.every(vt),
        default: () => [],
      },
      optionValue: [Function, String],
      optionLabel: [Function, String],
      optionDisable: [Function, String],
      name: String,
      type: {
        type: String,
        default: "radio",
        validator: (e) => Ek.includes(e),
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
        } = Ie(),
        i = Array.isArray(e.modelValue);
      e.type === "radio"
        ? i === !0 && console.error("q-option-group: model should not be array")
        : i === !1 &&
          console.error("q-option-group: model should be array in your case");
      const o = Xn(e, r),
        s = M(() => fg[e.type]),
        a = M(() => Is(e.optionValue, "value")),
        l = M(() => Is(e.optionLabel, "label")),
        u = M(() => Is(e.optionDisable, "disable")),
        c = M(() =>
          e.options.map((_) => ({
            val: a.value(_),
            name: _.name === void 0 ? e.name : _.name,
            disable: e.disable || u.value(_),
            leftLabel: _.leftLabel === void 0 ? e.leftLabel : _.leftLabel,
            color: _.color === void 0 ? e.color : _.color,
            checkedIcon: _.checkedIcon,
            uncheckedIcon: _.uncheckedIcon,
            dark: _.dark === void 0 ? o.value : _.dark,
            size: _.size === void 0 ? e.size : _.size,
            dense: e.dense,
            keepColor: _.keepColor === void 0 ? e.keepColor : _.keepColor,
          }))
        ),
        f = M(
          () =>
            "q-option-group q-gutter-x-sm" +
            (e.inline === !0 ? " q-option-group--inline" : "")
        ),
        d = M(() => {
          const _ = {
            role: "group",
          };
          return (
            e.type === "radio" &&
              ((_.role = "radiogroup"),
              e.disable === !0 && (_["aria-disabled"] = "true")),
            _
          );
        });
      function h(_) {
        t("update:modelValue", _);
      }
      return () =>
        j(
          "div",
          {
            class: f.value,
            ...d.value,
          },
          e.options.map((_, S) => {
            const C =
              n["label-" + S] !== void 0
                ? () => n["label-" + S](_)
                : n.label !== void 0
                ? () => n.label(_)
                : void 0;
            return j("div", [
              j(
                s.value,
                {
                  label: C === void 0 ? l.value(_) : null,
                  modelValue: e.modelValue,
                  "onUpdate:modelValue": h,
                  ...c.value[S],
                },
                C
              ),
            ]);
          })
        );
    },
  }),
  Ck = nt({
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
      const { proxy: n } = Ie(),
        { $q: r } = n,
        i = Xn(e, r),
        o = ue(null),
        s = ue(
          e.prompt !== void 0
            ? e.prompt.model
            : e.options !== void 0
            ? e.options.model
            : void 0
        ),
        a = M(
          () =>
            "q-dialog-plugin" +
            (i.value === !0 ? " q-dialog-plugin--dark q-dark" : "") +
            (e.progress !== !1 ? " q-dialog-plugin--progress" : "")
        ),
        l = M(() => e.color || (i.value === !0 ? "amber" : "primary")),
        u = M(() =>
          e.progress === !1
            ? null
            : vt(e.progress) === !0
            ? {
                component: e.progress.spinner || kr,
                props: {
                  color: e.progress.color || l.value,
                },
              }
            : {
                component: kr,
                props: {
                  color: l.value,
                },
              }
        ),
        c = M(() => e.prompt !== void 0 || e.options !== void 0),
        f = M(() => {
          if (c.value !== !0) return {};
          const {
            model: $,
            isValid: te,
            items: ee,
            ...Z
          } = e.prompt !== void 0 ? e.prompt : e.options;
          return Z;
        }),
        d = M(() => (vt(e.ok) === !0 || e.ok === !0 ? r.lang.label.ok : e.ok)),
        h = M(() =>
          vt(e.cancel) === !0 || e.cancel === !0
            ? r.lang.label.cancel
            : e.cancel
        ),
        _ = M(() =>
          e.prompt !== void 0
            ? e.prompt.isValid !== void 0 && e.prompt.isValid(s.value) !== !0
            : e.options !== void 0
            ? e.options.isValid !== void 0 && e.options.isValid(s.value) !== !0
            : !1
        ),
        S = M(() => ({
          color: l.value,
          label: d.value,
          ripple: !1,
          disable: _.value,
          ...(vt(e.ok) === !0
            ? e.ok
            : {
                flat: !0,
              }),
          "data-autofocus": (e.focus === "ok" && c.value !== !0) || void 0,
          onClick: E,
        })),
        C = M(() => ({
          color: l.value,
          label: h.value,
          ripple: !1,
          ...(vt(e.cancel) === !0
            ? e.cancel
            : {
                flat: !0,
              }),
          "data-autofocus": (e.focus === "cancel" && c.value !== !0) || void 0,
          onClick: b,
        }));
      fe(() => e.prompt && e.prompt.model, P),
        fe(() => e.options && e.options.model, P);
      function y() {
        o.value.show();
      }
      function g() {
        o.value.hide();
      }
      function E() {
        t("ok", he(s.value)), g();
      }
      function b() {
        g();
      }
      function O() {
        t("hide");
      }
      function P($) {
        s.value = $;
      }
      function A($) {
        _.value !== !0 &&
          e.prompt.type !== "textarea" &&
          hi($, 13) === !0 &&
          E();
      }
      function K($, te) {
        return e.html === !0
          ? j(Vr, {
              class: $,
              innerHTML: te,
            })
          : j(
              Vr,
              {
                class: $,
              },
              () => te
            );
      }
      function N() {
        return [
          j(pk, {
            color: l.value,
            dense: !0,
            autofocus: !0,
            dark: i.value,
            ...f.value,
            modelValue: s.value,
            "onUpdate:modelValue": P,
            onKeyup: A,
          }),
        ];
      }
      function L() {
        return [
          j(Sk, {
            color: l.value,
            options: e.options.items,
            dark: i.value,
            ...f.value,
            modelValue: s.value,
            "onUpdate:modelValue": P,
          }),
        ];
      }
      function q() {
        const $ = [];
        return (
          e.cancel && $.push(j(Ea, C.value)),
          e.ok && $.push(j(Ea, S.value)),
          j(
            HC,
            {
              class: e.stackButtons === !0 ? "items-end" : "",
              vertical: e.stackButtons,
              align: "right",
            },
            () => $
          )
        );
      }
      function T() {
        const $ = [];
        return (
          e.title && $.push(K("q-dialog__title", e.title)),
          e.progress !== !1 &&
            $.push(
              j(
                Vr,
                {
                  class: "q-dialog__progress",
                },
                () => j(u.value.component, u.value.props)
              )
            ),
          e.message && $.push(K("q-dialog__message", e.message)),
          e.prompt !== void 0
            ? $.push(
                j(
                  Vr,
                  {
                    class: "scroll q-dialog-plugin__form",
                  },
                  N
                )
              )
            : e.options !== void 0 &&
              $.push(
                j(Wu, {
                  dark: i.value,
                }),
                j(
                  Vr,
                  {
                    class: "scroll q-dialog-plugin__form",
                  },
                  L
                ),
                j(Wu, {
                  dark: i.value,
                })
              ),
          (e.ok || e.cancel) && $.push(q()),
          $
        );
      }
      function Q() {
        return [
          j(
            BC,
            {
              class: [a.value, e.cardClass],
              style: e.cardStyle,
              dark: i.value,
            },
            T
          ),
        ];
      }
      return (
        Object.assign(n, {
          show: y,
          hide: g,
        }),
        () =>
          j(
            yC,
            {
              ref: o,
              onHide: O,
            },
            Q
          )
      );
    },
  });
function dg(e, t) {
  for (const n in t)
    n !== "spinner" && Object(t[n]) === t[n]
      ? ((e[n] =
          Object(e[n]) !== e[n]
            ? {}
            : {
                ...e[n],
              }),
        dg(e[n], t[n]))
      : (e[n] = t[n]);
}
function kk(e, t, n) {
  return (r) => {
    let i, o;
    const s = r.component !== void 0;
    if (s === !0) {
      const { component: g, componentProps: E } = r;
      (i = typeof g == "string" ? n.component(g) : g), (o = E || {});
    } else {
      const { class: g, style: E, ...b } = r;
      (i = e),
        (o = b),
        g !== void 0 && (b.cardClass = g),
        E !== void 0 && (b.cardStyle = E);
    }
    let a,
      l = !1;
    const u = ue(null),
      c = Go(!1, "dialog"),
      f = (g) => {
        if (u.value !== null && u.value[g] !== void 0) {
          u.value[g]();
          return;
        }
        const E = a.$.subTree;
        if (E && E.component) {
          if (E.component.proxy && E.component.proxy[g]) {
            E.component.proxy[g]();
            return;
          }
          if (
            E.component.subTree &&
            E.component.subTree.component &&
            E.component.subTree.component.proxy &&
            E.component.subTree.component.proxy[g]
          ) {
            E.component.subTree.component.proxy[g]();
            return;
          }
        }
        console.error("[Quasar] Incorrectly defined Dialog component");
      },
      d = [],
      h = [],
      _ = {
        onOk(g) {
          return d.push(g), _;
        },
        onCancel(g) {
          return h.push(g), _;
        },
        onDismiss(g) {
          return d.push(g), h.push(g), _;
        },
        hide() {
          return f("hide"), _;
        },
        update(g) {
          if (a !== null) {
            if (s === !0) Object.assign(o, g);
            else {
              const { class: E, style: b, ...O } = g;
              E !== void 0 && (O.cardClass = E),
                b !== void 0 && (O.cardStyle = b),
                dg(o, O);
            }
            a.$forceUpdate();
          }
          return _;
        },
      },
      S = (g) => {
        (l = !0),
          d.forEach((E) => {
            E(g);
          });
      },
      C = () => {
        y.unmount(c),
          Tl(c),
          (y = null),
          (a = null),
          l !== !0 &&
            h.forEach((g) => {
              g();
            });
      };
    let y = Qa(
      {
        name: "QGlobalDialog",
        setup: () => () =>
          j(i, {
            ...o,
            ref: u,
            onOk: S,
            onHide: C,
            onVnodeMounted(...g) {
              typeof o.onVnodeMounted == "function" && o.onVnodeMounted(...g),
                dt(() => f("show"));
            },
          }),
      },
      n
    );
    return (a = y.mount(c)), _;
  };
}
const Tk = {
  install({ $q: e, parentApp: t }) {
    e.dialog = this.create = kk(Ck, !0, t);
  },
};
let ir,
  As,
  Yu = 0,
  Mn = null,
  ze = {},
  jn = {};
const hg = {
    group: "__default_quasar_group__",
    delay: 0,
    message: !1,
    html: !1,
    spinnerSize: 80,
    spinnerColor: "",
    messageColor: "",
    backgroundColor: "",
    boxClass: "",
    spinner: kr,
    customClass: "",
  },
  mg = {
    ...hg,
  };
function Ik(e) {
  if (e && e.group !== void 0 && jn[e.group] !== void 0)
    return Object.assign(jn[e.group], e);
  const t =
    vt(e) === !0 && e.ignoreDefaults === !0
      ? {
          ...hg,
          ...e,
        }
      : {
          ...mg,
          ...e,
        };
  return (jn[t.group] = t), t;
}
const Pt = Ar(
    {
      isActive: !1,
    },
    {
      show(e) {
        ze = Ik(e);
        const { group: t } = ze;
        return (
          (Pt.isActive = !0),
          ir !== void 0
            ? ((ze.uid = Yu), As.$forceUpdate())
            : ((ze.uid = ++Yu),
              Mn !== null && clearTimeout(Mn),
              (Mn = setTimeout(() => {
                Mn = null;
                const n = Go("q-loading");
                (ir = Qa(
                  {
                    name: "QLoading",
                    setup() {
                      Nt(() => {
                        ya(!0);
                      });
                      function r() {
                        Pt.isActive !== !0 &&
                          ir !== void 0 &&
                          (ya(!1),
                          ir.unmount(n),
                          Tl(n),
                          (ir = void 0),
                          (As = void 0));
                      }
                      function i() {
                        if (Pt.isActive !== !0) return null;
                        const o = [
                          j(ze.spinner, {
                            class: "q-loading__spinner",
                            color: ze.spinnerColor,
                            size: ze.spinnerSize,
                          }),
                        ];
                        return (
                          ze.message &&
                            o.push(
                              j("div", {
                                class:
                                  "q-loading__message" +
                                  (ze.messageColor
                                    ? ` text-${ze.messageColor}`
                                    : ""),
                                [ze.html === !0 ? "innerHTML" : "textContent"]:
                                  ze.message,
                              })
                            ),
                          j(
                            "div",
                            {
                              class:
                                "q-loading fullscreen flex flex-center z-max " +
                                ze.customClass.trim(),
                              key: ze.uid,
                            },
                            [
                              j("div", {
                                class:
                                  "q-loading__backdrop" +
                                  (ze.backgroundColor
                                    ? ` bg-${ze.backgroundColor}`
                                    : ""),
                              }),
                              j(
                                "div",
                                {
                                  class:
                                    "q-loading__box column items-center " +
                                    ze.boxClass,
                                },
                                o
                              ),
                            ]
                          )
                        );
                      }
                      return () =>
                        j(
                          fi,
                          {
                            name: "q-transition--fade",
                            appear: !0,
                            onAfterLeave: r,
                          },
                          i
                        );
                    },
                  },
                  Pt.__parentApp
                )),
                  (As = ir.mount(n));
              }, ze.delay))),
          (n) => {
            if (n === void 0 || Object(n) !== n) {
              Pt.hide(t);
              return;
            }
            Pt.show({
              ...n,
              group: t,
            });
          }
        );
      },
      hide(e) {
        if (Pt.isActive === !0) {
          if (e === void 0) jn = {};
          else {
            if (jn[e] === void 0) return;
            {
              delete jn[e];
              const t = Object.keys(jn);
              if (t.length !== 0) {
                const n = t[t.length - 1];
                Pt.show({
                  group: n,
                });
                return;
              }
            }
          }
          Mn !== null && (clearTimeout(Mn), (Mn = null)), (Pt.isActive = !1);
        }
      },
      setDefaults(e) {
        vt(e) === !0 && Object.assign(mg, e);
      },
      install({ $q: e, parentApp: t }) {
        (e.loading = this),
          (Pt.__parentApp = t),
          e.config.loading !== void 0 && this.setDefaults(e.config.loading);
      },
    }
  ),
  Ak = nt({
    name: "QAvatar",
    props: {
      ...Ei,
      fontSize: String,
      color: String,
      textColor: String,
      icon: String,
      square: Boolean,
      rounded: Boolean,
    },
    setup(e, { slots: t }) {
      const n = Si(e),
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
        i = M(() =>
          e.fontSize
            ? {
                fontSize: e.fontSize,
              }
            : null
        );
      return () => {
        const o =
          e.icon !== void 0
            ? [
                j(on, {
                  name: e.icon,
                }),
              ]
            : void 0;
        return j(
          "div",
          {
            class: r.value,
            style: n.value,
          },
          [
            j(
              "div",
              {
                class: "q-avatar__content row flex-center overflow-hidden",
                style: i.value,
              },
              hC(t.default, o)
            ),
          ]
        );
      };
    },
  });
let Ok = 0;
const Xi = {},
  Yi = {},
  xt = {},
  gg = {},
  Nk = /^\s*$/,
  pg = [],
  Pk = [void 0, null, !0, !1, ""],
  Al = [
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
  xk = ["top-left", "top-right", "bottom-left", "bottom-right"],
  lr = {
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
function vg(e, t, n) {
  if (!e) return qr("parameter required");
  let r;
  const i = {
    textColor: "white",
  };
  if (
    (e.ignoreDefaults !== !0 && Object.assign(i, Xi),
    vt(e) === !1 &&
      (i.type && Object.assign(i, lr[i.type]),
      (e = {
        message: e,
      })),
    Object.assign(i, lr[e.type || i.type], e),
    typeof i.icon == "function" && (i.icon = i.icon(t)),
    i.spinner
      ? (i.spinner === !0 && (i.spinner = kr), (i.spinner = bi(i.spinner)))
      : (i.spinner = !1),
    (i.meta = {
      hasMedia: !!(i.spinner !== !1 || i.icon || i.avatar),
      hasText: Ju(i.message) || Ju(i.caption),
    }),
    i.position)
  ) {
    if (Al.includes(i.position) === !1) return qr("wrong position", e);
  } else i.position = "bottom";
  if (Pk.includes(i.timeout) === !0) i.timeout = 5e3;
  else {
    const l = Number(i.timeout);
    if (isNaN(l) || l < 0) return qr("wrong timeout", e);
    i.timeout = Number.isFinite(l) ? l : 0;
  }
  i.timeout === 0
    ? (i.progress = !1)
    : i.progress === !0 &&
      ((i.meta.progressClass =
        "q-notification__progress" +
        (i.progressClass ? ` ${i.progressClass}` : "")),
      (i.meta.progressStyle = {
        animationDuration: `${i.timeout + 1e3}ms`,
      }));
  const o = (Array.isArray(e.actions) === !0 ? e.actions : [])
      .concat(
        e.ignoreDefaults !== !0 && Array.isArray(Xi.actions) === !0
          ? Xi.actions
          : []
      )
      .concat(
        lr[e.type] !== void 0 && Array.isArray(lr[e.type].actions) === !0
          ? lr[e.type].actions
          : []
      ),
    { closeBtn: s } = i;
  if (
    (s &&
      o.push({
        label: typeof s == "string" ? s : t.lang.label.close,
      }),
    (i.actions = o.map(({ handler: l, noDismiss: u, ...c }) => ({
      flat: !0,
      ...c,
      onClick:
        typeof l == "function"
          ? () => {
              l(), u !== !0 && a();
            }
          : () => {
              a();
            },
    }))),
    i.multiLine === void 0 && (i.multiLine = i.actions.length > 1),
    Object.assign(i.meta, {
      class:
        `q-notification row items-stretch q-notification--${
          i.multiLine === !0 ? "multi-line" : "standard"
        }` +
        (i.color !== void 0 ? ` bg-${i.color}` : "") +
        (i.textColor !== void 0 ? ` text-${i.textColor}` : "") +
        (i.classes !== void 0 ? ` ${i.classes}` : ""),
      wrapperClass:
        "q-notification__wrapper col relative-position border-radius-inherit " +
        (i.multiLine === !0
          ? "column no-wrap justify-center"
          : "row items-center"),
      contentClass:
        "q-notification__content row items-center" +
        (i.multiLine === !0 ? "" : " col"),
      leftClass: i.meta.hasText === !0 ? "additional" : "single",
      attrs: {
        role: "alert",
        ...i.attrs,
      },
    }),
    i.group === !1
      ? ((i.group = void 0), (i.meta.group = void 0))
      : ((i.group === void 0 || i.group === !0) &&
          (i.group = [i.message, i.caption, i.multiline]
            .concat(i.actions.map((l) => `${l.label}*${l.icon}`))
            .join("|")),
        (i.meta.group = i.group + "|" + i.position)),
    i.actions.length === 0
      ? (i.actions = void 0)
      : (i.meta.actionsClass =
          "q-notification__actions row items-center " +
          (i.multiLine === !0 ? "justify-end" : "col-auto") +
          (i.meta.hasMedia === !0
            ? " q-notification__actions--with-media"
            : "")),
    n !== void 0)
  ) {
    n.notif.meta.timer &&
      (clearTimeout(n.notif.meta.timer), (n.notif.meta.timer = void 0)),
      (i.meta.uid = n.notif.meta.uid);
    const l = xt[i.position].value.indexOf(n.notif);
    xt[i.position].value[l] = i;
  } else {
    const l = Yi[i.meta.group];
    if (l === void 0) {
      if (
        ((i.meta.uid = Ok++),
        (i.meta.badge = 1),
        ["left", "right", "center"].indexOf(i.position) !== -1)
      )
        xt[i.position].value.splice(
          Math.floor(xt[i.position].value.length / 2),
          0,
          i
        );
      else {
        const u = i.position.indexOf("top") !== -1 ? "unshift" : "push";
        xt[i.position].value[u](i);
      }
      i.group !== void 0 && (Yi[i.meta.group] = i);
    } else {
      if (
        (l.meta.timer && (clearTimeout(l.meta.timer), (l.meta.timer = void 0)),
        i.badgePosition !== void 0)
      ) {
        if (xk.includes(i.badgePosition) === !1)
          return qr("wrong badgePosition", e);
      } else
        i.badgePosition = `top-${
          i.position.indexOf("left") !== -1 ? "right" : "left"
        }`;
      (i.meta.uid = l.meta.uid),
        (i.meta.badge = l.meta.badge + 1),
        (i.meta.badgeClass =
          `q-notification__badge q-notification__badge--${i.badgePosition}` +
          (i.badgeColor !== void 0 ? ` bg-${i.badgeColor}` : "") +
          (i.badgeTextColor !== void 0 ? ` text-${i.badgeTextColor}` : "") +
          (i.badgeClass ? ` ${i.badgeClass}` : ""));
      const u = xt[i.position].value.indexOf(l);
      xt[i.position].value[u] = Yi[i.meta.group] = i;
    }
  }
  const a = () => {
    Lk(i), (r = void 0);
  };
  if (
    (i.timeout > 0 &&
      (i.meta.timer = setTimeout(() => {
        (i.meta.timer = void 0), a();
      }, i.timeout + 1e3)),
    i.group !== void 0)
  )
    return (l) => {
      l !== void 0
        ? qr("trying to update a grouped one which is forbidden", e)
        : a();
    };
  if (
    ((r = {
      dismiss: a,
      config: e,
      notif: i,
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
        const u = Object.assign({}, r.config, l, {
          group: !1,
          position: i.position,
        });
        vg(u, t, r);
      }
  };
}
function Lk(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), (e.meta.timer = void 0));
  const t = xt[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete Yi[e.meta.group];
    const n = pg["" + e.meta.uid];
    if (n) {
      const { width: r, height: i } = getComputedStyle(n);
      (n.style.left = `${n.offsetLeft}px`),
        (n.style.width = r),
        (n.style.height = i);
    }
    xt[e.position].value.splice(t, 1),
      typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function Ju(e) {
  return e != null && Nk.test(e) !== !0;
}
function qr(e, t) {
  return console.error(`Notify: ${e}`, t), !1;
}
function Rk() {
  return nt({
    name: "QNotifications",
    devtools: {
      hide: !0,
    },
    setup() {
      return () =>
        j(
          "div",
          {
            class: "q-notifications",
          },
          Al.map((e) =>
            j(
              Gv,
              {
                key: e,
                class: gg[e],
                tag: "div",
                name: `q-notification--${e}`,
              },
              () =>
                xt[e].value.map((t) => {
                  const n = t.meta,
                    r = [];
                  if (
                    (n.hasMedia === !0 &&
                      (t.spinner !== !1
                        ? r.push(
                            j(t.spinner, {
                              class:
                                "q-notification__spinner q-notification__spinner--" +
                                n.leftClass,
                              color: t.spinnerColor,
                              size: t.spinnerSize,
                            })
                          )
                        : t.icon
                        ? r.push(
                            j(on, {
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
                            j(
                              Ak,
                              {
                                class:
                                  "q-notification__avatar q-notification__avatar--" +
                                  n.leftClass,
                              },
                              () =>
                                j("img", {
                                  src: t.avatar,
                                  "aria-hidden": "true",
                                })
                            )
                          )),
                    n.hasText === !0)
                  ) {
                    let o;
                    const s = {
                      class: "q-notification__message col",
                    };
                    if (t.html === !0)
                      s.innerHTML = t.caption
                        ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>`
                        : t.message;
                    else {
                      const a = [t.message];
                      o = t.caption
                        ? [
                            j("div", a),
                            j(
                              "div",
                              {
                                class: "q-notification__caption",
                              },
                              [t.caption]
                            ),
                          ]
                        : a;
                    }
                    r.push(j("div", s, o));
                  }
                  const i = [
                    j(
                      "div",
                      {
                        class: n.contentClass,
                      },
                      r
                    ),
                  ];
                  return (
                    t.progress === !0 &&
                      i.push(
                        j("div", {
                          key: `${n.uid}|p|${n.badge}`,
                          class: n.progressClass,
                          style: n.progressStyle,
                        })
                      ),
                    t.actions !== void 0 &&
                      i.push(
                        j(
                          "div",
                          {
                            class: n.actionsClass,
                          },
                          t.actions.map((o) => j(Ea, o))
                        )
                      ),
                    n.badge > 1 &&
                      i.push(
                        j(
                          "div",
                          {
                            key: `${n.uid}|${n.badge}`,
                            class: t.meta.badgeClass,
                            style: t.badgeStyle,
                          },
                          [n.badge]
                        )
                      ),
                    j(
                      "div",
                      {
                        ref: (o) => {
                          pg["" + n.uid] = o;
                        },
                        key: n.uid,
                        class: n.class,
                        ...n.attrs,
                      },
                      [
                        j(
                          "div",
                          {
                            class: n.wrapperClass,
                          },
                          i
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
const Mk = {
    setDefaults(e) {
      vt(e) === !0 && Object.assign(Xi, e);
    },
    registerType(e, t) {
      vt(t) === !0 && (lr[e] = t);
    },
    install({ $q: e, parentApp: t }) {
      if (
        ((e.notify = this.create = (n) => vg(n, e)),
        (e.notify.setDefaults = this.setDefaults),
        (e.notify.registerType = this.registerType),
        e.config.notify !== void 0 && this.setDefaults(e.config.notify),
        this.__installed !== !0)
      ) {
        Al.forEach((r) => {
          xt[r] = ue([]);
          const i =
              ["left", "center", "right"].includes(r) === !0
                ? "center"
                : r.indexOf("top") !== -1
                ? "top"
                : "bottom",
            o =
              r.indexOf("left") !== -1
                ? "start"
                : r.indexOf("right") !== -1
                ? "end"
                : "center",
            s = ["left", "right"].includes(r)
              ? `items-${r === "left" ? "start" : "end"} justify-center`
              : r === "center"
              ? "flex-center"
              : `items-${o}`;
          gg[
            r
          ] = `q-notifications__list q-notifications__list--${i} fixed column no-wrap ${s}`;
        });
        const n = Go("q-notify");
        Qa(Rk(), t).mount(n);
      }
    },
  },
  Wr = {};
function Dk(e) {
  Object.assign(Xe, {
    request: e,
    exit: e,
    toggle: e,
  });
}
function _g() {
  return (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement ||
    null
  );
}
function bg() {
  const e = (Xe.activeEl = Xe.isActive === !1 ? null : _g());
  tC(e === null || e === document.documentElement ? document.body : e);
}
function Fk() {
  (Xe.isActive = Xe.isActive === !1), bg();
}
function Zu(e, t) {
  try {
    const n = e[t]();
    return n === void 0 ? Promise.resolve() : n;
  } catch (n) {
    return Promise.reject(n);
  }
}
const Xe = Ar(
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
(Wr.request = [
  "requestFullscreen",
  "msRequestFullscreen",
  "mozRequestFullScreen",
  "webkitRequestFullscreen",
].find((e) => document.documentElement[e] !== void 0)),
  (Xe.isCapable = Wr.request !== void 0),
  Xe.isCapable === !1
    ? Dk(() => Promise.reject("Not capable"))
    : (Object.assign(Xe, {
        request(e) {
          const t = e || document.documentElement,
            { activeEl: n } = Xe;
          return t === n
            ? Promise.resolve()
            : (n !== null && t.contains(n) === !0
                ? Xe.exit()
                : Promise.resolve()
              ).finally(() => Zu(t, Wr.request));
        },
        exit() {
          return Xe.isActive === !0 ? Zu(document, Wr.exit) : Promise.resolve();
        },
        toggle(e) {
          return Xe.isActive === !0 ? Xe.exit() : Xe.request(e);
        },
      }),
      (Wr.exit = [
        "exitFullscreen",
        "msExitFullscreen",
        "mozCancelFullScreen",
        "webkitExitFullscreen",
      ].find((e) => document[e])),
      (Xe.isActive = !!_g()),
      Xe.isActive === !0 && bg(),
      [
        "onfullscreenchange",
        "onmsfullscreenchange",
        "onwebkitfullscreenchange",
      ].forEach((e) => {
        document[e] = Fk;
      }));
const $k = {
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
    plugins: {
      Dialog: Tk,
      Loading: Pt,
      Notify: Mk,
      AppFullscreen: Xe,
    },
  },
  jk = "/";
async function Vk({ app: e, router: t, store: n, storeKey: r }, i) {
  let o = !1;
  const s = (u) => {
      try {
        return t.resolve(u).href;
      } catch {}
      return Object(u) === u ? null : u;
    },
    a = (u) => {
      if (((o = !0), typeof u == "string" && /^https?:\/\//.test(u))) {
        window.location.href = u;
        return;
      }
      const c = s(u);
      c !== null && (window.location.href = c);
    },
    l = window.location.href.replace(window.location.origin, "");
  for (let u = 0; o === !1 && u < i.length; u++)
    try {
      await i[u]({
        app: e,
        router: t,
        store: n,
        ssrContext: null,
        redirect: a,
        urlPath: l,
        publicPath: jk,
      });
    } catch (c) {
      if (c && c.url) {
        a(c.url);
        return;
      }
      console.error("[Quasar] boot error:", c);
      return;
    }
  o !== !0 && (e.use(t), e.use(n, r), e.mount("#q-app"));
}
US(Td, $k).then((e) => {
  const [t, n] =
    Promise.allSettled !== void 0
      ? [
          "allSettled",
          (r) =>
            r.map((i) => {
              if (i.status === "rejected") {
                console.error("[Quasar] boot error:", i.reason);
                return;
              }
              return i.value.default;
            }),
        ]
      : ["all", (r) => r.map((i) => i.default)];
  return Promise[t]([
    me(() => import("https://wheelofnames.com/assets/i18n-v319.js"), __vite__mapDeps([62, 63])),
    me(() => import("https://wheelofnames.com/assets/head-v319.js"), __vite__mapDeps([64, 47])),
  ]).then((r) => {
    const i = n(r).filter((o) => typeof o == "function");
    Vk(e, i);
  });
});
export {
  rT as $,
  Xn as A,
  KS as B,
  XS as C,
  ET as D,
  GS as E,
  Ye as F,
  zS as G,
  YS as H,
  QS as I,
  oC as J,
  wt as K,
  d_ as L,
  f_ as M,
  ST as N,
  Tt as O,
  Ei as P,
  BC as Q,
  Si as R,
  AT as S,
  fi as T,
  on as U,
  hC as V,
  PC as W,
  Hs as X,
  Tk as Y,
  Mk as Z,
  Q0 as _,
  et as a,
  nT as a$,
  ut as a0,
  eT as a1,
  tT as a2,
  $h as a3,
  Ea as a4,
  sT as a5,
  Xb as a6,
  Kn as a7,
  f0 as a8,
  wk as a9,
  cr as aA,
  km as aB,
  lS as aC,
  qm as aD,
  xp as aE,
  zs as aF,
  iT as aG,
  hi as aH,
  yn as aI,
  dt as aJ,
  ft as aK,
  Qi as aL,
  Be as aM,
  TT as aN,
  l_ as aO,
  di as aP,
  Jk as aQ,
  Zk as aR,
  c_ as aS,
  Wk as aT,
  Yl as aU,
  Zt as aV,
  V0 as aW,
  j0 as aX,
  z0 as aY,
  QE as aZ,
  Qk as a_,
  OT as aa,
  DC as ab,
  eg as ac,
  tg as ad,
  bT as ae,
  oT as af,
  Ho as ag,
  HC as ah,
  M0 as ai,
  ES as aj,
  bS as ak,
  me as al,
  Qb as am,
  vT as an,
  dT as ao,
  pk as ap,
  Yk as aq,
  Mf as ar,
  Xk as as,
  D0 as at,
  Oa as au,
  _T as av,
  pT as aw,
  Ve as ax,
  rS as ay,
  yC as az,
  hT as b,
  x0 as b$,
  Nd as b0,
  cs as b1,
  Sa as b2,
  Ro as b3,
  zf as b4,
  Ui as b5,
  zE as b6,
  pt as b7,
  mT as b8,
  P0 as b9,
  oS as bA,
  HE as bB,
  sS as bC,
  W0 as bD,
  U0 as bE,
  mm as bF,
  aS as bG,
  _C as bH,
  Pu as bI,
  Nu as bJ,
  kl as bK,
  nC as bL,
  vC as bM,
  aC as bN,
  yT as bO,
  wT as bP,
  H0 as bQ,
  sm as bR,
  R0 as bS,
  Gk as bT,
  uS as bU,
  Uk as bV,
  Wu as bW,
  uT as bX,
  fl as bY,
  Gv as bZ,
  he as b_,
  Fp as ba,
  GE as bb,
  IT as bc,
  Bm as bd,
  Hm as be,
  zn as bf,
  Do as bg,
  Ak as bh,
  Na as bi,
  B0 as bj,
  $0 as bk,
  jh as bl,
  L0 as bm,
  eS as bn,
  nS as bo,
  tS as bp,
  XE as bq,
  JE as br,
  ZE as bs,
  Mm as bt,
  YE as bu,
  cT as bv,
  aT as bw,
  q0 as bx,
  BE as by,
  iS as bz,
  lo as c,
  cm as c0,
  _S as c1,
  yk as c2,
  _k as c3,
  wS as c4,
  cS as c5,
  N0 as c6,
  za as c7,
  yS as c8,
  fT as c9,
  zo as cA,
  I0 as cB,
  Gt as cC,
  K0 as cD,
  J0 as cE,
  T0 as cF,
  CT as cG,
  kT as cH,
  lT as cI,
  k0 as cJ,
  C0 as cK,
  F0 as cL,
  dl as cM,
  Hk as cN,
  Pm as ca,
  qC as cb,
  QC as cc,
  NT as cd,
  ho as ce,
  A0 as cf,
  nk as cg,
  rk as ch,
  ok as ci,
  ik as cj,
  Ad as ck,
  Il as cl,
  ck as cm,
  Gf as cn,
  Wa as co,
  Ca as cp,
  gk as cq,
  kf as cr,
  vt as cs,
  og as ct,
  PT as cu,
  Ts as cv,
  NC as cw,
  tk as cx,
  uk as cy,
  Ir as cz,
  gd as d,
  Vr as e,
  gv as f,
  nt as g,
  M as h,
  j as i,
  $n as j,
  Kk as k,
  zk as l,
  Lt as m,
  ue as n,
  ao as o,
  Sn as p,
  Nt as q,
  Bk as r,
  kr as s,
  $g as t,
  HS as u,
  fe as v,
  kp as w,
  Wm as x,
  Ie as y,
  Qn as z,
};
