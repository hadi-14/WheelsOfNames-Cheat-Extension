const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/FaqPage-v379.js",
      "assets/QToolbar-v379.js",
      "assets/_plugin-vue_export-helper-v379.js",
      "assets/QPage-v379.js",
      "assets/QPageContainer-v379.js",
      "assets/AppFooter-v379.js",
      "assets/AppFooter-BhUctadA.css",
      "assets/AppToolbarSimple-v379.js",
      "assets/QToolbarTitle-v379.js",
      "assets/DarkModeToggle.vue_vue_type_script_setup_true_lang-v379.js",
      "assets/use-quasar-v379.js",
      "assets/AppToolbarSimple-B8xFJhSm.css",
      "assets/QBadge-v379.js",
      "assets/FaqPage-DBneeRvV.css",
      "assets/TutorialsPage-v379.js",
      "assets/QVideo-v379.js",
      "assets/use-ratio-v379.js",
      "assets/ClassroomPage-v379.js",
      "assets/PrivacyPolicyPage-v379.js",
      "assets/QMarkupTable-v379.js",
      "assets/PrivacyPolicyPage-DKzzxG2E.css",
      "assets/TermsOfServicePage-v379.js",
      "assets/ChangelogPage-v379.js",
      "assets/ChangelogPage-BWbK9Yxp.css",
      "assets/ApiPage-v379.js",
      "assets/AboutCard-v379.js",
      "assets/Messenger-v379.js",
      "assets/AppLogin-v379.js",
      "assets/AppLogin-CaKG578L.css",
      "assets/ApiPage-B7JLaRog.css",
      "assets/ExportPage-v379.js",
      "assets/ExportPage-0Sx1av4-.css",
      "assets/TranslationPage-v379.js",
      "assets/AdminPage-v379.js",
      "assets/QBreadcrumbs-v379.js",
      "assets/QSpace-v379.js",
      "assets/QImg-v379.js",
      "assets/AdminPage-Cp1v64oL.css",
      "assets/ReviewWheelPage-v379.js",
      "assets/QMenu-v379.js",
      "assets/position-engine-v379.js",
      "assets/ReviewTextbox-v379.js",
      "assets/ReviewTextbox-D_CFvDKw.css",
      "assets/DialogCloseIcon-v379.js",
      "assets/GalleryReviewPage-v379.js",
      "assets/GallerySearch-v379.js",
      "assets/QChip-v379.js",
      "assets/GallerySearch-CHWVGQxH.css",
      "assets/GalleryReviewPage-Dl2bvBvp.css",
      "assets/AdminUserPage-v379.js",
      "assets/WheelInfoCard-v379.js",
      "assets/WheelInfoCard-C61_c4lB.css",
      "assets/AdminUserPage-r_qM_huX.css",
      "assets/EditWheelPage-v379.js",
      "assets/ConfettiLauncher-v379.js",
      "assets/ConfettiLauncher-B6aIVo8x.css",
      "assets/LoginDialog.vue_vue_type_script_setup_true_lang-v379.js",
      "assets/vue.BYLJNEcq-v379.js",
      "assets/EditWheelPage-Cuv1bOwl.css",
      "assets/SharedWheelPage-v379.js",
      "assets/SharedWheelPage-BoYEs6dV.css",
      "assets/GalleryPage-v379.js",
      "assets/LoginPage-v379.js",
      "assets/MigrateAccountPage-v379.js",
      "assets/MigrateAccountPage-CzuTiuVo.css",
      "assets/i18n-v379.js",
      "assets/en-US-v379.js",
      "assets/head-v379.js",
    ])
) => i.map((i) => d[i]);
const mv = (function () {
    const t = typeof document < "u" && document.createElement("link").relList;
    return t && t.supports && t.supports("modulepreload")
      ? "modulepreload"
      : "preload";
  })(),
  gv = function (e) {
    return "/" + e;
  },
  eu = {},
  Re = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      let l = function (c) {
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
      const o = document.querySelector("meta[property=csp-nonce]"),
        a = o?.nonce || o?.getAttribute("nonce");
      s = l(
        n.map((c) => {
          if (((c = gv(c)), c in eu)) return;
          eu[c] = !0;
          const u = c.endsWith(".css"),
            f = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${f}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = u ? "stylesheet" : mv),
            u || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = c),
            a && d.setAttribute("nonce", a),
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
 * @vue/shared v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function Gl(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _e = {},
  Lr = [],
  Xt = () => {},
  pv = () => !1,
  No = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Jl = (e) => e.startsWith("onUpdate:"),
  We = Object.assign,
  Yl = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  vv = Object.prototype.hasOwnProperty,
  Ee = (e, t) => vv.call(e, t),
  oe = Array.isArray,
  xr = (e) => si(e) === "[object Map]",
  th = (e) => si(e) === "[object Set]",
  yv = (e) => si(e) === "[object RegExp]",
  ce = (e) => typeof e == "function",
  xe = (e) => typeof e == "string",
  Cn = (e) => typeof e == "symbol",
  Pe = (e) => e !== null && typeof e == "object",
  nh = (e) => (Pe(e) || ce(e)) && ce(e.then) && ce(e.catch),
  rh = Object.prototype.toString,
  si = (e) => rh.call(e),
  _v = (e) => si(e).slice(8, -1),
  sh = (e) => si(e) === "[object Object]",
  Xl = (e) =>
    xe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Is = Gl(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Ro = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  bv = /-(\w)/g,
  wt = Ro((e) => e.replace(bv, (t, n) => (n ? n.toUpperCase() : ""))),
  wv = /\B([A-Z])/g,
  In = Ro((e) => e.replace(wv, "-$1").toLowerCase()),
  Oo = Ro((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ia = Ro((e) => (e ? `on${Oo(e)}` : "")),
  mt = (e, t) => !Object.is(e, t),
  ks = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  el = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  Ev = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Sv = (e) => {
    const t = xe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let tu;
const Lo = () =>
  tu ||
  (tu =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Ql(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = xe(r) ? Tv(r) : Ql(r);
      if (s) for (const i in s) t[i] = s[i];
    }
    return t;
  } else if (xe(e) || Pe(e)) return e;
}
const Cv = /;(?![^(]*\))/g,
  Iv = /:([^]+)/,
  kv = /\/\*[^]*?\*\//g;
function Tv(e) {
  const t = {};
  return (
    e
      .replace(kv, "")
      .split(Cv)
      .forEach((n) => {
        if (n) {
          const r = n.split(Iv);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Zl(e) {
  let t = "";
  if (xe(e)) t = e;
  else if (oe(e))
    for (let n = 0; n < e.length; n++) {
      const r = Zl(e[n]);
      r && (t += r + " ");
    }
  else if (Pe(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Pv =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Av = Gl(Pv);
function ih(e) {
  return !!e || e === "";
}
const oh = (e) => !!(e && e.__v_isRef === !0),
  Nv = (e) =>
    xe(e)
      ? e
      : e == null
      ? ""
      : oe(e) || (Pe(e) && (e.toString === rh || !ce(e.toString)))
      ? oh(e)
        ? Nv(e.value)
        : JSON.stringify(e, ah, 2)
      : String(e),
  ah = (e, t) =>
    oh(t)
      ? ah(e, t.value)
      : xr(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s], i) => ((n[oa(r, i) + " =>"] = s), n),
            {}
          ),
        }
      : th(t)
      ? {
          [`Set(${t.size})`]: [...t.values()].map((n) => oa(n)),
        }
      : Cn(t)
      ? oa(t)
      : Pe(t) && !oe(t) && !sh(t)
      ? String(t)
      : t,
  oa = (e, t = "") => {
    var n;
    return Cn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let st;
class lh {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = st),
      !t && st && (this.index = (st.scopes || (st.scopes = [])).push(this) - 1);
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
      const n = st;
      try {
        return (st = this), t();
      } finally {
        st = n;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = st), (st = this));
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((st = this.prevScope), (this.prevScope = void 0));
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
function ec(e) {
  return new lh(e);
}
function tc() {
  return st;
}
function ch(e, t = !1) {
  st && st.cleanups.push(e);
}
let Te;
const aa = new WeakSet();
class uh {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      st && st.active && st.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), aa.has(this) && (aa.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || dh(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), nu(this), hh(this);
    const t = Te,
      n = Bt;
    (Te = this), (Bt = !0);
    try {
      return this.fn();
    } finally {
      mh(this), (Te = t), (Bt = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) sc(t);
      (this.deps = this.depsTail = void 0),
        nu(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? aa.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    tl(this) && this.run();
  }
  get dirty() {
    return tl(this);
  }
}
let fh = 0,
  Ts,
  Ps;
function dh(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Ps), (Ps = e);
    return;
  }
  (e.next = Ts), (Ts = e);
}
function nc() {
  fh++;
}
function rc() {
  if (--fh > 0) return;
  if (Ps) {
    let t = Ps;
    for (Ps = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Ts; ) {
    let t = Ts;
    for (Ts = void 0; t; ) {
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
function hh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function mh(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), sc(r), Rv(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s);
  }
  (e.deps = t), (e.depsTail = n);
}
function tl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (gh(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function gh(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Ws) ||
    ((e.globalVersion = Ws),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !tl(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    n = Te,
    r = Bt;
  (Te = e), (Bt = !0);
  try {
    hh(e);
    const s = e.fn(e._value);
    (t.version === 0 || mt(s, e._value)) &&
      ((e.flags |= 128), (e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (Te = n), (Bt = r), mh(e), (e.flags &= -3);
  }
}
function sc(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) sc(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Rv(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Bt = !0;
const ph = [];
function vn() {
  ph.push(Bt), (Bt = !1);
}
function yn() {
  const e = ph.pop();
  Bt = e === void 0 ? !0 : e;
}
function nu(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = Te;
    Te = void 0;
    try {
      t();
    } finally {
      Te = n;
    }
  }
}
let Ws = 0;
class Ov {
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
class xo {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0);
  }
  track(t) {
    if (!Te || !Bt || Te === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Te)
      (n = this.activeLink = new Ov(Te, this)),
        Te.deps
          ? ((n.prevDep = Te.depsTail),
            (Te.depsTail.nextDep = n),
            (Te.depsTail = n))
          : (Te.deps = Te.depsTail = n),
        vh(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = Te.depsTail),
        (n.nextDep = void 0),
        (Te.depsTail.nextDep = n),
        (Te.depsTail = n),
        Te.deps === n && (Te.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ws++, this.notify(t);
  }
  notify(t) {
    nc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      rc();
    }
  }
}
function vh(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) vh(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Qi = new WeakMap(),
  mr = Symbol(""),
  nl = Symbol(""),
  js = Symbol("");
function it(e, t, n) {
  if (Bt && Te) {
    let r = Qi.get(e);
    r || Qi.set(e, (r = new Map()));
    let s = r.get(n);
    s || (r.set(n, (s = new xo())), (s.map = r), (s.key = n)), s.track();
  }
}
function ln(e, t, n, r, s, i) {
  const o = Qi.get(e);
  if (!o) {
    Ws++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((nc(), t === "clear")) o.forEach(a);
  else {
    const l = oe(e),
      c = l && Xl(n);
    if (l && n === "length") {
      const u = Number(r);
      o.forEach((f, d) => {
        (d === "length" || d === js || (!Cn(d) && d >= u)) && a(f);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && a(o.get(n)), c && a(o.get(js)), t)
      ) {
        case "add":
          l ? c && a(o.get("length")) : (a(o.get(mr)), xr(e) && a(o.get(nl)));
          break;
        case "delete":
          l || (a(o.get(mr)), xr(e) && a(o.get(nl)));
          break;
        case "set":
          xr(e) && a(o.get(mr));
          break;
      }
  }
  rc();
}
function Lv(e, t) {
  const n = Qi.get(e);
  return n && n.get(t);
}
function Cr(e) {
  const t = fe(e);
  return t === e ? t : (it(t, "iterate", js), Tt(e) ? t : t.map(Qe));
}
function Mo(e) {
  return it((e = fe(e)), "iterate", js), e;
}
const xv = {
  __proto__: null,
  [Symbol.iterator]() {
    return la(this, Symbol.iterator, Qe);
  },
  concat(...e) {
    return Cr(this).concat(...e.map((t) => (oe(t) ? Cr(t) : t)));
  },
  entries() {
    return la(this, "entries", (e) => ((e[1] = Qe(e[1])), e));
  },
  every(e, t) {
    return rn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return rn(this, "filter", e, t, (n) => n.map(Qe), arguments);
  },
  find(e, t) {
    return rn(this, "find", e, t, Qe, arguments);
  },
  findIndex(e, t) {
    return rn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return rn(this, "findLast", e, t, Qe, arguments);
  },
  findLastIndex(e, t) {
    return rn(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return rn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ca(this, "includes", e);
  },
  indexOf(...e) {
    return ca(this, "indexOf", e);
  },
  join(e) {
    return Cr(this).join(e);
  },
  lastIndexOf(...e) {
    return ca(this, "lastIndexOf", e);
  },
  map(e, t) {
    return rn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return os(this, "pop");
  },
  push(...e) {
    return os(this, "push", e);
  },
  reduce(e, ...t) {
    return ru(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ru(this, "reduceRight", e, t);
  },
  shift() {
    return os(this, "shift");
  },
  some(e, t) {
    return rn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return os(this, "splice", e);
  },
  toReversed() {
    return Cr(this).toReversed();
  },
  toSorted(e) {
    return Cr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Cr(this).toSpliced(...e);
  },
  unshift(...e) {
    return os(this, "unshift", e);
  },
  values() {
    return la(this, "values", Qe);
  },
};
function la(e, t, n) {
  const r = Mo(e),
    s = r[t]();
  return (
    r !== e &&
      !Tt(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const i = s._next();
        return i.value && (i.value = n(i.value)), i;
      })),
    s
  );
}
const Mv = Array.prototype;
function rn(e, t, n, r, s, i) {
  const o = Mo(e),
    a = o !== e && !Tt(e),
    l = o[t];
  if (l !== Mv[t]) {
    const f = l.apply(e, i);
    return a ? Qe(f) : f;
  }
  let c = n;
  o !== e &&
    (a
      ? (c = function (f, d) {
          return n.call(this, Qe(f), d, e);
        })
      : n.length > 2 &&
        (c = function (f, d) {
          return n.call(this, f, d, e);
        }));
  const u = l.call(o, c, r);
  return a && s ? s(u) : u;
}
function ru(e, t, n, r) {
  const s = Mo(e);
  let i = n;
  return (
    s !== e &&
      (Tt(e)
        ? n.length > 3 &&
          (i = function (o, a, l) {
            return n.call(this, o, a, l, e);
          })
        : (i = function (o, a, l) {
            return n.call(this, o, Qe(a), l, e);
          })),
    s[t](i, ...r)
  );
}
function ca(e, t, n) {
  const r = fe(e);
  it(r, "iterate", js);
  const s = r[t](...n);
  return (s === -1 || s === !1) && oc(n[0])
    ? ((n[0] = fe(n[0])), r[t](...n))
    : s;
}
function os(e, t, n = []) {
  vn(), nc();
  const r = fe(e)[t].apply(e, n);
  return rc(), yn(), r;
}
const Dv = Gl("__proto__,__v_isRef,__isVue"),
  yh = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Cn)
  );
function Fv(e) {
  Cn(e) || (e = String(e));
  const t = fe(this);
  return it(t, "has", e), t.hasOwnProperty(e);
}
class _h {
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
      return r === (s ? (i ? Ih : Ch) : i ? Sh : Eh).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const o = oe(t);
    if (!s) {
      let l;
      if (o && (l = xv[n])) return l;
      if (n === "hasOwnProperty") return Fv;
    }
    const a = Reflect.get(t, n, Ae(t) ? t : r);
    return (Cn(n) ? yh.has(n) : Dv(n)) || (s || it(t, "get", n), i)
      ? a
      : Ae(a)
      ? o && Xl(n)
        ? a
        : a.value
      : Pe(a)
      ? s
        ? ic(a)
        : br(a)
      : a;
  }
}
class bh extends _h {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    if (!this._isShallow) {
      const l = Gn(i);
      if (
        (!Tt(r) && !Gn(r) && ((i = fe(i)), (r = fe(r))),
        !oe(t) && Ae(i) && !Ae(r))
      )
        return l ? !1 : ((i.value = r), !0);
    }
    const o = oe(t) && Xl(n) ? Number(n) < t.length : Ee(t, n),
      a = Reflect.set(t, n, r, Ae(t) ? t : s);
    return (
      t === fe(s) && (o ? mt(r, i) && ln(t, "set", n, r) : ln(t, "add", n, r)),
      a
    );
  }
  deleteProperty(t, n) {
    const r = Ee(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && ln(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Cn(n) || !yh.has(n)) && it(t, "has", n), r;
  }
  ownKeys(t) {
    return it(t, "iterate", oe(t) ? "length" : mr), Reflect.ownKeys(t);
  }
}
class wh extends _h {
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
const $v = new bh(),
  Uv = new wh(),
  Bv = new bh(!0),
  Vv = new wh(!0),
  rl = (e) => e,
  bi = (e) => Reflect.getPrototypeOf(e);
function Wv(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      i = fe(s),
      o = xr(i),
      a = e === "entries" || (e === Symbol.iterator && o),
      l = e === "keys" && o,
      c = s[e](...r),
      u = n ? rl : t ? Zi : Qe;
    return (
      !t && it(i, "iterate", l ? nl : mr),
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
function wi(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function jv(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw,
        o = fe(i),
        a = fe(s);
      e || (mt(s, a) && it(o, "get", s), it(o, "get", a));
      const { has: l } = bi(o),
        c = t ? rl : e ? Zi : Qe;
      if (l.call(o, s)) return c(i.get(s));
      if (l.call(o, a)) return c(i.get(a));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && it(fe(s), "iterate", mr), Reflect.get(s, "size", s);
    },
    has(s) {
      const i = this.__v_raw,
        o = fe(i),
        a = fe(s);
      return (
        e || (mt(s, a) && it(o, "has", s), it(o, "has", a)),
        s === a ? i.has(s) : i.has(s) || i.has(a)
      );
    },
    forEach(s, i) {
      const o = this,
        a = o.__v_raw,
        l = fe(a),
        c = t ? rl : e ? Zi : Qe;
      return (
        !e && it(l, "iterate", mr),
        a.forEach((u, f) => s.call(i, c(u), c(f), o))
      );
    },
  };
  return (
    We(
      n,
      e
        ? {
            add: wi("add"),
            set: wi("set"),
            delete: wi("delete"),
            clear: wi("clear"),
          }
        : {
            add(s) {
              !t && !Tt(s) && !Gn(s) && (s = fe(s));
              const i = fe(this);
              return (
                bi(i).has.call(i, s) || (i.add(s), ln(i, "add", s, s)), this
              );
            },
            set(s, i) {
              !t && !Tt(i) && !Gn(i) && (i = fe(i));
              const o = fe(this),
                { has: a, get: l } = bi(o);
              let c = a.call(o, s);
              c || ((s = fe(s)), (c = a.call(o, s)));
              const u = l.call(o, s);
              return (
                o.set(s, i),
                c ? mt(i, u) && ln(o, "set", s, i) : ln(o, "add", s, i),
                this
              );
            },
            delete(s) {
              const i = fe(this),
                { has: o, get: a } = bi(i);
              let l = o.call(i, s);
              l || ((s = fe(s)), (l = o.call(i, s))), a && a.call(i, s);
              const c = i.delete(s);
              return l && ln(i, "delete", s, void 0), c;
            },
            clear() {
              const s = fe(this),
                i = s.size !== 0,
                o = s.clear();
              return i && ln(s, "clear", void 0, void 0), o;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      n[s] = Wv(s, e, t);
    }),
    n
  );
}
function Do(e, t) {
  const n = jv(e, t);
  return (r, s, i) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(Ee(n, s) && s in r ? n : r, s, i);
}
const qv = {
    get: Do(!1, !1),
  },
  Hv = {
    get: Do(!1, !0),
  },
  zv = {
    get: Do(!0, !1),
  },
  Kv = {
    get: Do(!0, !0),
  },
  Eh = new WeakMap(),
  Sh = new WeakMap(),
  Ch = new WeakMap(),
  Ih = new WeakMap();
function Gv(e) {
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
function Jv(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Gv(_v(e));
}
function br(e) {
  return Gn(e) ? e : Fo(e, !1, $v, qv, Eh);
}
function kh(e) {
  return Fo(e, !1, Bv, Hv, Sh);
}
function ic(e) {
  return Fo(e, !0, Uv, zv, Ch);
}
function Yv(e) {
  return Fo(e, !0, Vv, Kv, Ih);
}
function Fo(e, t, n, r, s) {
  if (!Pe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = Jv(e);
  if (i === 0) return e;
  const o = s.get(e);
  if (o) return o;
  const a = new Proxy(e, i === 2 ? r : n);
  return s.set(e, a), a;
}
function Hn(e) {
  return Gn(e) ? Hn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Gn(e) {
  return !!(e && e.__v_isReadonly);
}
function Tt(e) {
  return !!(e && e.__v_isShallow);
}
function oc(e) {
  return e ? !!e.__v_raw : !1;
}
function fe(e) {
  const t = e && e.__v_raw;
  return t ? fe(t) : e;
}
function wr(e) {
  return (
    !Ee(e, "__v_skip") && Object.isExtensible(e) && el(e, "__v_skip", !0), e
  );
}
const Qe = (e) => (Pe(e) ? br(e) : e),
  Zi = (e) => (Pe(e) ? ic(e) : e);
function Ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function he(e) {
  return Th(e, !1);
}
function Pt(e) {
  return Th(e, !0);
}
function Th(e, t) {
  return Ae(e) ? e : new Xv(e, t);
}
class Xv {
  constructor(t, n) {
    (this.dep = new xo()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : fe(t)),
      (this._value = n ? t : Qe(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || Tt(t) || Gn(t);
    (t = r ? t : fe(t)),
      mt(t, n) &&
        ((this._rawValue = t),
        (this._value = r ? t : Qe(t)),
        this.dep.trigger());
  }
}
function gn(e) {
  return Ae(e) ? e.value : e;
}
function Vt(e) {
  return ce(e) ? e() : gn(e);
}
const Qv = {
  get: (e, t, n) => (t === "__v_raw" ? e : gn(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    return Ae(s) && !Ae(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Ph(e) {
  return Hn(e) ? e : new Proxy(e, Qv);
}
class Zv {
  constructor(t) {
    (this.__v_isRef = !0), (this._value = void 0);
    const n = (this.dep = new xo()),
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
function Ah(e) {
  return new Zv(e);
}
function ey(e) {
  const t = oe(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Nh(e, n);
  return t;
}
class ty {
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
    return Lv(fe(this._object), this._key);
  }
}
class ny {
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
function ry(e, t, n) {
  return Ae(e)
    ? e
    : ce(e)
    ? new ny(e)
    : Pe(e) && arguments.length > 1
    ? Nh(e, t, n)
    : he(e);
}
function Nh(e, t, n) {
  const r = e[t];
  return Ae(r) ? r : new ty(e, t, n);
}
class sy {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new xo(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Ws - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Te !== this))
      return dh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return gh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function iy(e, t, n = !1) {
  let r, s;
  return ce(e) ? (r = e) : ((r = e.get), (s = e.set)), new sy(r, s, n);
}
const Ei = {},
  eo = new WeakMap();
let lr;
function oy(e, t = !1, n = lr) {
  if (n) {
    let r = eo.get(n);
    r || eo.set(n, (r = [])), r.push(e);
  }
}
function ay(e, t, n = _e) {
  const {
      immediate: r,
      deep: s,
      once: i,
      scheduler: o,
      augmentJob: a,
      call: l,
    } = n,
    c = (_) => (s ? _ : Tt(_) || s === !1 || s === 0 ? cn(_, 1) : cn(_));
  let u,
    f,
    d,
    h,
    g = !1,
    w = !1;
  if (
    (Ae(e)
      ? ((f = () => e.value), (g = Tt(e)))
      : Hn(e)
      ? ((f = () => c(e)), (g = !0))
      : oe(e)
      ? ((w = !0),
        (g = e.some((_) => Hn(_) || Tt(_))),
        (f = () =>
          e.map((_) => {
            if (Ae(_)) return _.value;
            if (Hn(_)) return c(_);
            if (ce(_)) return l ? l(_, 2) : _();
          })))
      : ce(e)
      ? t
        ? (f = l ? () => l(e, 2) : e)
        : (f = () => {
            if (d) {
              vn();
              try {
                d();
              } finally {
                yn();
              }
            }
            const _ = lr;
            lr = u;
            try {
              return l ? l(e, 3, [h]) : e(h);
            } finally {
              lr = _;
            }
          })
      : (f = Xt),
    t && s)
  ) {
    const _ = f,
      T = s === !0 ? 1 / 0 : s;
    f = () => cn(_(), T);
  }
  const k = tc(),
    y = () => {
      u.stop(), k && k.active && Yl(k.effects, u);
    };
  if (i && t) {
    const _ = t;
    t = (...T) => {
      _(...T), y();
    };
  }
  let m = w ? new Array(e.length).fill(Ei) : Ei;
  const E = (_) => {
    if (!(!(u.flags & 1) || (!u.dirty && !_)))
      if (t) {
        const T = u.run();
        if (s || g || (w ? T.some((O, N) => mt(O, m[N])) : mt(T, m))) {
          d && d();
          const O = lr;
          lr = u;
          try {
            const N = [T, m === Ei ? void 0 : w && m[0] === Ei ? [] : m, h];
            (m = T), l ? l(t, 3, N) : t(...N);
          } finally {
            lr = O;
          }
        }
      } else u.run();
  };
  return (
    a && a(E),
    (u = new uh(f)),
    (u.scheduler = o ? () => o(E, !1) : E),
    (h = (_) => oy(_, !1, u)),
    (d = u.onStop =
      () => {
        const _ = eo.get(u);
        if (_) {
          if (l) l(_, 4);
          else for (const T of _) T();
          eo.delete(u);
        }
      }),
    t ? (r ? E(!0) : (m = u.run())) : o ? o(E.bind(null, !0), !0) : u.run(),
    (y.pause = u.pause.bind(u)),
    (y.resume = u.resume.bind(u)),
    (y.stop = y),
    y
  );
}
function cn(e, t = 1 / 0, n) {
  if (t <= 0 || !Pe(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, Ae(e))) cn(e.value, t, n);
  else if (oe(e)) for (let r = 0; r < e.length; r++) cn(e[r], t, n);
  else if (th(e) || xr(e))
    e.forEach((r) => {
      cn(r, t, n);
    });
  else if (sh(e)) {
    for (const r in e) cn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && cn(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function ii(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    oi(s, t, n);
  }
}
function jt(e, t, n, r) {
  if (ce(e)) {
    const s = ii(e, t, n, r);
    return (
      s &&
        nh(s) &&
        s.catch((i) => {
          oi(i, t, n);
        }),
      s
    );
  }
  if (oe(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++) s.push(jt(e[i], t, n, r));
    return s;
  }
}
function oi(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || _e;
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
      vn(), ii(i, null, 10, [e, l, c]), yn();
      return;
    }
  }
  ly(e, n, s, r, o);
}
function ly(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const ct = [];
let Jt = -1;
const Mr = [];
let Dn = null,
  Nr = 0;
const Rh = Promise.resolve();
let to = null;
function ut(e) {
  const t = to || Rh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function cy(e) {
  let t = Jt + 1,
    n = ct.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = ct[r],
      i = qs(s);
    i < e || (i === e && s.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function ac(e) {
  if (!(e.flags & 1)) {
    const t = qs(e),
      n = ct[ct.length - 1];
    !n || (!(e.flags & 2) && t >= qs(n)) ? ct.push(e) : ct.splice(cy(t), 0, e),
      (e.flags |= 1),
      Oh();
  }
}
function Oh() {
  to || (to = Rh.then(xh));
}
function uy(e) {
  oe(e)
    ? Mr.push(...e)
    : Dn && e.id === -1
    ? Dn.splice(Nr + 1, 0, e)
    : e.flags & 1 || (Mr.push(e), (e.flags |= 1)),
    Oh();
}
function su(e, t, n = Jt + 1) {
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
function Lh(e) {
  if (Mr.length) {
    const t = [...new Set(Mr)].sort((n, r) => qs(n) - qs(r));
    if (((Mr.length = 0), Dn)) {
      Dn.push(...t);
      return;
    }
    for (Dn = t, Nr = 0; Nr < Dn.length; Nr++) {
      const n = Dn[Nr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (Dn = null), (Nr = 0);
  }
}
const qs = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function xh(e) {
  try {
    for (Jt = 0; Jt < ct.length; Jt++) {
      const t = ct[Jt];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        ii(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Jt < ct.length; Jt++) {
      const t = ct[Jt];
      t && (t.flags &= -2);
    }
    (Jt = -1),
      (ct.length = 0),
      Lh(),
      (to = null),
      (ct.length || Mr.length) && xh();
  }
}
let tt = null,
  Mh = null;
function no(e) {
  const t = tt;
  return (tt = e), (Mh = (e && e.type.__scopeId) || null), t;
}
function fy(e, t = tt, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && vu(-1);
    const i = no(t);
    let o;
    try {
      o = e(...s);
    } finally {
      no(i), r._d && vu(1);
    }
    return o;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Dh(e, t) {
  if (tt === null) return e;
  const n = jo(tt),
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, a, l = _e] = t[s];
    i &&
      (ce(i) &&
        (i = {
          mounted: i,
          updated: i,
        }),
      i.deep && cn(o),
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
function rr(e, t, n, r) {
  const s = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    i && (a.oldValue = i[o].value);
    let l = a.dir[r];
    l && (vn(), jt(l, n, 8, [e.el, a, e, t]), yn());
  }
}
const Fh = Symbol("_vte"),
  $h = (e) => e.__isTeleport,
  As = (e) => e && (e.disabled || e.disabled === ""),
  iu = (e) => e && (e.defer || e.defer === ""),
  ou = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  au = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  sl = (e, t) => {
    const n = e && e.to;
    return xe(n) ? (t ? t(n) : null) : n;
  },
  Uh = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, s, i, o, a, l, c) {
      const {
          mc: u,
          pc: f,
          pbc: d,
          o: { insert: h, querySelector: g, createText: w, createComment: k },
        } = c,
        y = As(t.props);
      let { shapeFlag: m, children: E, dynamicChildren: _ } = t;
      if (e == null) {
        const T = (t.el = w("")),
          O = (t.anchor = w(""));
        h(T, n, r), h(O, n, r);
        const N = (I, L) => {
            m & 16 &&
              (s && s.isCE && (s.ce._teleportTarget = I),
              u(E, I, L, s, i, o, a, l));
          },
          W = () => {
            const I = (t.target = sl(t.props, g)),
              L = Bh(I, t, w, h);
            I &&
              (o !== "svg" && ou(I)
                ? (o = "svg")
                : o !== "mathml" && au(I) && (o = "mathml"),
              y || (N(I, L), Fi(t, !1)));
          };
        y && (N(n, O), Fi(t, !0)),
          iu(t.props)
            ? ((t.el.__isMounted = !1),
              qe(() => {
                W(), delete t.el.__isMounted;
              }, i))
            : W();
      } else {
        if (iu(t.props) && e.el.__isMounted === !1) {
          qe(() => {
            Uh.process(e, t, n, r, s, i, o, a, l, c);
          }, i);
          return;
        }
        (t.el = e.el), (t.targetStart = e.targetStart);
        const T = (t.anchor = e.anchor),
          O = (t.target = e.target),
          N = (t.targetAnchor = e.targetAnchor),
          W = As(e.props),
          I = W ? n : O,
          L = W ? T : N;
        if (
          (o === "svg" || ou(O)
            ? (o = "svg")
            : (o === "mathml" || au(O)) && (o = "mathml"),
          _
            ? (d(e.dynamicChildren, _, I, s, i, o, a), mc(e, t, !0))
            : l || f(e, t, I, L, s, i, o, a, !1),
          y)
        )
          W
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : Si(t, n, T, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const B = (t.target = sl(t.props, g));
          B && Si(t, B, null, c, 0);
        } else W && Si(t, O, N, c, 1);
        Fi(t, y);
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
        const h = i || !As(d);
        for (let g = 0; g < a.length; g++) {
          const w = a[g];
          r(w, t, n, h, !!w.dynamicChildren);
        }
      }
    },
    move: Si,
    hydrate: dy,
  };
function Si(e, t, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: a, shapeFlag: l, children: c, props: u } = e,
    f = i === 2;
  if ((f && r(o, t, n), (!f || As(u)) && l & 16))
    for (let d = 0; d < c.length; d++) s(c[d], t, n, 2);
  f && r(a, t, n);
}
function dy(
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
  const d = (t.target = sl(t.props, l));
  if (d) {
    const h = As(t.props),
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
        t.targetAnchor || Bh(d, t, u, c), f(g && o(g), t, d, n, r, s, i);
      }
    Fi(t, h);
  }
  return t.anchor && o(t.anchor);
}
const hy = Uh;
function Fi(e, t) {
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
function Bh(e, t, n, r) {
  const s = (t.targetStart = n("")),
    i = (t.targetAnchor = n(""));
  return (s[Fh] = i), e && (r(s, e), r(i, e)), i;
}
const Fn = Symbol("_leaveCb"),
  Ci = Symbol("_enterCb");
function Vh() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Rt(() => {
      e.isMounted = !0;
    }),
    Ot(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const St = [Function, Array],
  Wh = {
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
  jh = (e) => {
    const t = e.subTree;
    return t.component ? jh(t.component) : t;
  },
  my = {
    name: "BaseTransition",
    props: Wh,
    setup(e, { slots: t }) {
      const n = Se(),
        r = Vh();
      return () => {
        const s = t.default && lc(t.default(), !0);
        if (!s || !s.length) return;
        const i = qh(s),
          o = fe(e),
          { mode: a } = o;
        if (r.isLeaving) return ua(i);
        const l = lu(i);
        if (!l) return ua(i);
        let c = Hs(l, o, r, n, (f) => (c = f));
        l.type !== Ze && Jn(l, c);
        let u = n.subTree && lu(n.subTree);
        if (u && u.type !== Ze && !Vn(l, u) && jh(n).type !== Ze) {
          let f = Hs(u, o, r, n);
          if ((Jn(u, f), a === "out-in" && l.type !== Ze))
            return (
              (r.isLeaving = !0),
              (f.afterLeave = () => {
                (r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete f.afterLeave,
                  (u = void 0);
              }),
              ua(i)
            );
          a === "in-out" && l.type !== Ze
            ? (f.delayLeave = (d, h, g) => {
                const w = Hh(r, u);
                (w[String(u.key)] = u),
                  (d[Fn] = () => {
                    h(), (d[Fn] = void 0), delete c.delayedLeave, (u = void 0);
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
function qh(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ze) {
        t = n;
        break;
      }
  }
  return t;
}
const gy = my;
function Hh(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Hs(e, t, n, r, s) {
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
      onBeforeAppear: k,
      onAppear: y,
      onAfterAppear: m,
      onAppearCancelled: E,
    } = t,
    _ = String(e.key),
    T = Hh(n, e),
    O = (I, L) => {
      I && jt(I, r, 9, L);
    },
    N = (I, L) => {
      const B = L[1];
      O(I, L),
        oe(I) ? I.every((C) => C.length <= 1) && B() : I.length <= 1 && B();
    },
    W = {
      mode: o,
      persisted: a,
      beforeEnter(I) {
        let L = l;
        if (!n.isMounted)
          if (i) L = k || l;
          else return;
        I[Fn] && I[Fn](!0);
        const B = T[_];
        B && Vn(e, B) && B.el[Fn] && B.el[Fn](), O(L, [I]);
      },
      enter(I) {
        let L = c,
          B = u,
          C = f;
        if (!n.isMounted)
          if (i) (L = y || c), (B = m || u), (C = E || f);
          else return;
        let G = !1;
        const $ = (I[Ci] = (ee) => {
          G ||
            ((G = !0),
            ee ? O(C, [I]) : O(B, [I]),
            W.delayedLeave && W.delayedLeave(),
            (I[Ci] = void 0));
        });
        L ? N(L, [I, $]) : $();
      },
      leave(I, L) {
        const B = String(e.key);
        if ((I[Ci] && I[Ci](!0), n.isUnmounting)) return L();
        O(d, [I]);
        let C = !1;
        const G = (I[Fn] = ($) => {
          C ||
            ((C = !0),
            L(),
            $ ? O(w, [I]) : O(g, [I]),
            (I[Fn] = void 0),
            T[B] === e && delete T[B]);
        });
        (T[B] = e), h ? N(h, [I, G]) : G();
      },
      clone(I) {
        const L = Hs(I, t, n, r, s);
        return s && s(L), L;
      },
    };
  return W;
}
function ua(e) {
  if (ai(e)) return (e = _n(e)), (e.children = null), e;
}
function lu(e) {
  if (!ai(e)) return $h(e.type) && e.children ? qh(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && ce(n.default)) return n.default();
  }
}
function Jn(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Jn(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function lc(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === ot
      ? (o.patchFlag & 128 && s++, (r = r.concat(lc(o.children, t, a))))
      : (t || o.type !== Ze) &&
        r.push(
          a != null
            ? _n(o, {
                key: a,
              })
            : o
        );
  }
  if (s > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
function Xn(e, t) {
  return ce(e)
    ? We(
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
function cc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ns(e, t, n, r, s = !1) {
  if (oe(e)) {
    e.forEach((g, w) => Ns(g, t && (oe(t) ? t[w] : t), n, r, s));
    return;
  }
  if (gr(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      Ns(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? jo(r.component) : r.el,
    o = s ? null : i,
    { i: a, r: l } = e,
    c = t && t.r,
    u = a.refs === _e ? (a.refs = {}) : a.refs,
    f = a.setupState,
    d = fe(f),
    h = f === _e ? () => !1 : (g) => Ee(d, g);
  if (
    (c != null &&
      c !== l &&
      (xe(c)
        ? ((u[c] = null), h(c) && (f[c] = null))
        : Ae(c) && (c.value = null)),
    ce(l))
  )
    ii(l, a, 12, [o, u]);
  else {
    const g = xe(l),
      w = Ae(l);
    if (g || w) {
      const k = () => {
        if (e.f) {
          const y = g ? (h(l) ? f[l] : u[l]) : l.value;
          s
            ? oe(y) && Yl(y, i)
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
      o ? ((k.id = -1), qe(k, n)) : k();
    }
  }
}
const cu = (e) => e.nodeType === 8;
Lo().requestIdleCallback;
Lo().cancelIdleCallback;
function py(e, t) {
  if (cu(e) && e.data === "[") {
    let n = 1,
      r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1) break;
      } else if (cu(r))
        if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
      r = r.nextSibling;
    }
  } else t(e);
}
const gr = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
function A1(e) {
  ce(e) &&
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
                return new Promise((k, y) => {
                  l(
                    w,
                    () => k(d()),
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
  return Xn({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    __asyncHydrate(g, w, k) {
      let y = !1;
      (w.bu || (w.bu = [])).push(() => (y = !0));
      const m = () => {
          y || k();
        },
        E = i
          ? () => {
              const _ = i(m, (T) => py(g, T));
              _ && (w.bum || (w.bum = [])).push(_);
            }
          : m;
      u ? E() : h().then(() => !w.isUnmounted && E());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      const g = et;
      if ((cc(g), u)) return () => fa(u, g);
      const w = (E) => {
        (c = null), oi(E, g, 13, !r);
      };
      if ((a && g.suspense) || jr)
        return h()
          .then((E) => () => fa(E, g))
          .catch(
            (E) => (
              w(E),
              () =>
                r
                  ? Ue(r, {
                      error: E,
                    })
                  : null
            )
          );
      const k = he(!1),
        y = he(),
        m = he(!!s);
      return (
        s &&
          setTimeout(() => {
            m.value = !1;
          }, s),
        o != null &&
          setTimeout(() => {
            if (!k.value && !y.value) {
              const E = new Error(`Async component timed out after ${o}ms.`);
              w(E), (y.value = E);
            }
          }, o),
        h()
          .then(() => {
            (k.value = !0), g.parent && ai(g.parent.vnode) && g.parent.update();
          })
          .catch((E) => {
            w(E), (y.value = E);
          }),
        () => {
          if (k.value && u) return fa(u, g);
          if (y.value && r)
            return Ue(r, {
              error: y.value,
            });
          if (n && !m.value) return Ue(n);
        }
      );
    },
  });
}
function fa(e, t) {
  const { ref: n, props: r, children: s, ce: i } = t.vnode,
    o = Ue(e, r, s);
  return (o.ref = n), (o.ce = i), delete t.vnode.ce, o;
}
const ai = (e) => e.type.__isKeepAlive,
  vy = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = Se(),
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
      (r.activate = (m, E, _, T, O) => {
        const N = m.component;
        c(m, E, _, 0, a),
          l(N.vnode, m, E, _, N, a, T, m.slotScopeIds, O),
          qe(() => {
            (N.isDeactivated = !1), N.a && ks(N.a);
            const W = m.props && m.props.onVnodeMounted;
            W && It(W, N.parent, m);
          }, a);
      }),
        (r.deactivate = (m) => {
          const E = m.component;
          io(E.m),
            io(E.a),
            c(m, d, null, 1, a),
            qe(() => {
              E.da && ks(E.da);
              const _ = m.props && m.props.onVnodeUnmounted;
              _ && It(_, E.parent, m), (E.isDeactivated = !0);
            }, a);
        });
      function h(m) {
        da(m), u(m, n, a, !0);
      }
      function g(m) {
        s.forEach((E, _) => {
          const T = ul(E.type);
          T && !m(T) && w(_);
        });
      }
      function w(m) {
        const E = s.get(m);
        E && (!o || !Vn(E, o)) ? h(E) : o && da(o), s.delete(m), i.delete(m);
      }
      me(
        () => [e.include, e.exclude],
        ([m, E]) => {
          m && g((_) => ys(m, _)), E && g((_) => !ys(E, _));
        },
        {
          flush: "post",
          deep: !0,
        }
      );
      let k = null;
      const y = () => {
        k != null &&
          (oo(n.subTree.type)
            ? qe(() => {
                s.set(k, Ii(n.subTree));
              }, n.subTree.suspense)
            : s.set(k, Ii(n.subTree)));
      };
      return (
        Rt(y),
        uc(y),
        Ot(() => {
          s.forEach((m) => {
            const { subTree: E, suspense: _ } = n,
              T = Ii(E);
            if (m.type === T.type && m.key === T.key) {
              da(T);
              const O = T.component.da;
              O && qe(O, _);
              return;
            }
            h(m);
          });
        }),
        () => {
          if (((k = null), !t.default)) return (o = null);
          const m = t.default(),
            E = m[0];
          if (m.length > 1) return (o = null), m;
          if (!Wr(E) || (!(E.shapeFlag & 4) && !(E.shapeFlag & 128)))
            return (o = null), E;
          let _ = Ii(E);
          if (_.type === Ze) return (o = null), _;
          const T = _.type,
            O = ul(gr(_) ? _.type.__asyncResolved || {} : T),
            { include: N, exclude: W, max: I } = e;
          if ((N && (!O || !ys(N, O))) || (W && O && ys(W, O)))
            return (_.shapeFlag &= -257), (o = _), E;
          const L = _.key == null ? T : _.key,
            B = s.get(L);
          return (
            _.el && ((_ = _n(_)), E.shapeFlag & 128 && (E.ssContent = _)),
            (k = L),
            B
              ? ((_.el = B.el),
                (_.component = B.component),
                _.transition && Jn(_, _.transition),
                (_.shapeFlag |= 512),
                i.delete(L),
                i.add(L))
              : (i.add(L),
                I && i.size > parseInt(I, 10) && w(i.values().next().value)),
            (_.shapeFlag |= 256),
            (o = _),
            oo(E.type) ? E : _
          );
        }
      );
    },
  },
  N1 = vy;
function ys(e, t) {
  return oe(e)
    ? e.some((n) => ys(n, t))
    : xe(e)
    ? e.split(",").includes(t)
    : yv(e)
    ? ((e.lastIndex = 0), e.test(t))
    : !1;
}
function zh(e, t) {
  Kh(e, "a", t);
}
function $o(e, t) {
  Kh(e, "da", t);
}
function Kh(e, t, n = et) {
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
  if ((Uo(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      ai(s.parent.vnode) && yy(r, t, n, s), (s = s.parent);
  }
}
function yy(e, t, n, r) {
  const s = Uo(t, e, r, !0);
  Bo(() => {
    Yl(r[t], s);
  }, n);
}
function da(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function Ii(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Uo(e, t, n = et, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          vn();
          const a = ci(n),
            l = jt(t, n, e, o);
          return a(), yn(), l;
        });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const kn =
    (e) =>
    (t, n = et) => {
      (!jr || e === "sp") && Uo(e, (...r) => t(...r), n);
    },
  _y = kn("bm"),
  Rt = kn("m"),
  Gh = kn("bu"),
  uc = kn("u"),
  Ot = kn("bum"),
  Bo = kn("um"),
  by = kn("sp"),
  wy = kn("rtg"),
  Ey = kn("rtc");
function Sy(e, t = et) {
  Uo("ec", e, t);
}
const Cy = "components";
function Iy(e, t) {
  return Ty(Cy, e, !0, t) || e;
}
const ky = Symbol.for("v-ndc");
function Ty(e, t, n = !0, r = !1) {
  const s = tt || et;
  if (s) {
    const i = s.type;
    {
      const a = ul(i, !1);
      if (a && (a === t || a === wt(t) || a === Oo(wt(t)))) return i;
    }
    const o = uu(s[e] || i[e], t) || uu(s.appContext[e], t);
    return !o && r ? i : o;
  }
}
function uu(e, t) {
  return e && (e[t] || e[wt(t)] || e[Oo(wt(t))]);
}
function R1(e, t, n, r) {
  let s;
  const i = n,
    o = oe(e);
  if (o || xe(e)) {
    const a = o && Hn(e);
    let l = !1,
      c = !1;
    a && ((l = !Tt(e)), (c = Gn(e)), (e = Mo(e))), (s = new Array(e.length));
    for (let u = 0, f = e.length; u < f; u++)
      s[u] = t(l ? (c ? Zi(Qe(e[u])) : Qe(e[u])) : e[u], u, void 0, i);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, i);
  } else if (Pe(e))
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
function O1(e, t) {
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
function L1(e, t, n = {}, r, s) {
  if (tt.ce || (tt.parent && gr(tt.parent) && tt.parent.ce))
    return (
      t !== "default" && (n.name = t),
      ao(),
      lo(ot, null, [Ue("slot", n, r)], 64)
    );
  let i = e[t];
  i && i._c && (i._d = !1), ao();
  const o = i && Jh(i(n)),
    a = n.key || (o && o.key),
    l = lo(
      ot,
      {
        key: (a && !Cn(a) ? a : `_${t}`) + (!o && r ? "_fb" : ""),
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
function Jh(e) {
  return e.some((t) =>
    Wr(t) ? !(t.type === Ze || (t.type === ot && !Jh(t.children))) : !0
  )
    ? e
    : null;
}
const il = (e) => (e ? (gm(e) ? jo(e) : il(e.parent)) : null),
  Rs = We(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => il(e.parent),
    $root: (e) => il(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Xh(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ac(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = ut.bind(e.proxy)),
    $watch: (e) => Jy.bind(e),
  }),
  ha = (e, t) => e !== _e && !e.__isScriptSetup && Ee(e, t),
  Py = {
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
          if (ha(r, t)) return (o[t] = 1), r[t];
          if (s !== _e && Ee(s, t)) return (o[t] = 2), s[t];
          if ((c = e.propsOptions[0]) && Ee(c, t)) return (o[t] = 3), i[t];
          if (n !== _e && Ee(n, t)) return (o[t] = 4), n[t];
          ol && (o[t] = 0);
        }
      }
      const u = Rs[t];
      let f, d;
      if (u) return t === "$attrs" && it(e.attrs, "get", ""), u(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== _e && Ee(n, t)) return (o[t] = 4), n[t];
      if (((d = l.config.globalProperties), Ee(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: i } = e;
      return ha(s, t)
        ? ((s[t] = n), !0)
        : r !== _e && Ee(r, t)
        ? ((r[t] = n), !0)
        : Ee(e.props, t) || (t[0] === "$" && t.slice(1) in e)
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
        (e !== _e && Ee(e, o)) ||
        ha(t, o) ||
        ((a = i[0]) && Ee(a, o)) ||
        Ee(r, o) ||
        Ee(Rs, o) ||
        Ee(s.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Ee(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function ro(e) {
  return oe(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function x1(e, t) {
  return !e || !t
    ? e || t
    : oe(e) && oe(t)
    ? e.concat(t)
    : We({}, ro(e), ro(t));
}
let ol = !0;
function Ay(e) {
  const t = Xh(e),
    n = e.proxy,
    r = e.ctx;
  (ol = !1), t.beforeCreate && fu(t.beforeCreate, e, "bc");
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
    deactivated: k,
    beforeDestroy: y,
    beforeUnmount: m,
    destroyed: E,
    unmounted: _,
    render: T,
    renderTracked: O,
    renderTriggered: N,
    errorCaptured: W,
    serverPrefetch: I,
    expose: L,
    inheritAttrs: B,
    components: C,
    directives: G,
    filters: $,
  } = t;
  if ((c && Ny(c, r, null), o))
    for (const J in o) {
      const K = o[J];
      ce(K) && (r[J] = K.bind(n));
    }
  if (s) {
    const J = s.call(n, n);
    Pe(J) && (e.data = br(J));
  }
  if (((ol = !0), i))
    for (const J in i) {
      const K = i[J],
        ie = ce(K) ? K.bind(n, n) : ce(K.get) ? K.get.bind(n, n) : Xt,
        ue = !ce(K) && ce(K.set) ? K.set.bind(n) : Xt,
        de = M({
          get: ie,
          set: ue,
        });
      Object.defineProperty(r, J, {
        enumerable: !0,
        configurable: !0,
        get: () => de.value,
        set: (z) => (de.value = z),
      });
    }
  if (a) for (const J in a) Yh(a[J], r, n, J);
  if (l) {
    const J = ce(l) ? l.call(n) : l;
    Reflect.ownKeys(J).forEach((K) => {
      $i(K, J[K]);
    });
  }
  u && fu(u, e, "c");
  function Z(J, K) {
    oe(K) ? K.forEach((ie) => J(ie.bind(n))) : K && J(K.bind(n));
  }
  if (
    (Z(_y, f),
    Z(Rt, d),
    Z(Gh, h),
    Z(uc, g),
    Z(zh, w),
    Z($o, k),
    Z(Sy, W),
    Z(Ey, O),
    Z(wy, N),
    Z(Ot, m),
    Z(Bo, _),
    Z(by, I),
    oe(L))
  )
    if (L.length) {
      const J = e.exposed || (e.exposed = {});
      L.forEach((K) => {
        Object.defineProperty(J, K, {
          get: () => n[K],
          set: (ie) => (n[K] = ie),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === Xt && (e.render = T),
    B != null && (e.inheritAttrs = B),
    C && (e.components = C),
    G && (e.directives = G),
    I && cc(e);
}
function Ny(e, t, n = Xt) {
  oe(e) && (e = al(e));
  for (const r in e) {
    const s = e[r];
    let i;
    Pe(s)
      ? "default" in s
        ? (i = ft(s.from || r, s.default, !0))
        : (i = ft(s.from || r))
      : (i = ft(s)),
      Ae(i)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[r] = i);
  }
}
function fu(e, t, n) {
  jt(oe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Yh(e, t, n, r) {
  let s = r.includes(".") ? cm(n, r) : () => n[r];
  if (xe(e)) {
    const i = t[e];
    ce(i) && me(s, i);
  } else if (ce(e)) me(s, e.bind(n));
  else if (Pe(e))
    if (oe(e)) e.forEach((i) => Yh(i, t, n, r));
    else {
      const i = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      ce(i) && me(s, i, e);
    }
}
function Xh(e) {
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
      : ((l = {}), s.length && s.forEach((c) => so(l, c, o, !0)), so(l, t, o)),
    Pe(t) && i.set(t, l),
    l
  );
}
function so(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && so(e, i, n, !0), s && s.forEach((o) => so(e, o, n, !0));
  for (const o in t)
    if (!(r && o === "expose")) {
      const a = Ry[o] || (n && n[o]);
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const Ry = {
  data: du,
  props: hu,
  emits: hu,
  methods: _s,
  computed: _s,
  beforeCreate: at,
  created: at,
  beforeMount: at,
  mounted: at,
  beforeUpdate: at,
  updated: at,
  beforeDestroy: at,
  beforeUnmount: at,
  destroyed: at,
  unmounted: at,
  activated: at,
  deactivated: at,
  errorCaptured: at,
  serverPrefetch: at,
  components: _s,
  directives: _s,
  watch: Ly,
  provide: du,
  inject: Oy,
};
function du(e, t) {
  return t
    ? e
      ? function () {
          return We(
            ce(e) ? e.call(this, this) : e,
            ce(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Oy(e, t) {
  return _s(al(e), al(t));
}
function al(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function at(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function _s(e, t) {
  return e ? We(Object.create(null), e, t) : t;
}
function hu(e, t) {
  return e
    ? oe(e) && oe(t)
      ? [...new Set([...e, ...t])]
      : We(Object.create(null), ro(e), ro(t ?? {}))
    : t;
}
function Ly(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = We(Object.create(null), e);
  for (const r in t) n[r] = at(e[r], t[r]);
  return n;
}
function Qh() {
  return {
    app: null,
    config: {
      isNativeTag: pv,
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
let xy = 0;
function My(e, t) {
  return function (r, s = null) {
    ce(r) || (r = We({}, r)), s != null && !Pe(s) && (s = null);
    const i = Qh(),
      o = new WeakSet(),
      a = [];
    let l = !1;
    const c = (i.app = {
      _uid: xy++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: g_,
      get config() {
        return i.config;
      },
      set config(u) {},
      use(u, ...f) {
        return (
          o.has(u) ||
            (u && ce(u.install)
              ? (o.add(u), u.install(c, ...f))
              : ce(u) && (o.add(u), u(c, ...f))),
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
          const h = c._ceVNode || Ue(r, s);
          return (
            (h.appContext = i),
            d === !0 ? (d = "svg") : d === !1 && (d = void 0),
            e(h, u, d),
            (l = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            jo(h.component)
          );
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        l &&
          (jt(a, c._instance, 16),
          e(null, c._container),
          delete c._container.__vue_app__);
      },
      provide(u, f) {
        return (i.provides[u] = f), c;
      },
      runWithContext(u) {
        const f = pr;
        pr = c;
        try {
          return u();
        } finally {
          pr = f;
        }
      },
    });
    return c;
  };
}
let pr = null;
function $i(e, t) {
  if (et) {
    let n = et.provides;
    const r = et.parent && et.parent.provides;
    r === n && (n = et.provides = Object.create(r)), (n[e] = t);
  }
}
function ft(e, t, n = !1) {
  const r = Se();
  if (r || pr) {
    let s = pr
      ? pr._context.provides
      : r
      ? r.parent == null || r.ce
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && ce(t) ? t.call(r && r.proxy) : t;
  }
}
function fc() {
  return !!(Se() || pr);
}
const Zh = {},
  em = () => Object.create(Zh),
  tm = (e) => Object.getPrototypeOf(e) === Zh;
function Dy(e, t, n, r = !1) {
  const s = {},
    i = em();
  (e.propsDefaults = Object.create(null)), nm(e, t, s, i);
  for (const o in e.propsOptions[0]) o in s || (s[o] = void 0);
  n ? (e.props = r ? s : kh(s)) : e.type.props ? (e.props = s) : (e.props = i),
    (e.attrs = i);
}
function Fy(e, t, n, r) {
  const {
      props: s,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    a = fe(s),
    [l] = e.propsOptions;
  let c = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (Wo(e.emitsOptions, d)) continue;
        const h = t[d];
        if (l)
          if (Ee(i, d)) h !== i[d] && ((i[d] = h), (c = !0));
          else {
            const g = wt(d);
            s[g] = ll(l, a, g, h, e, !1);
          }
        else h !== i[d] && ((i[d] = h), (c = !0));
      }
    }
  } else {
    nm(e, t, s, i) && (c = !0);
    let u;
    for (const f in a)
      (!t || (!Ee(t, f) && ((u = In(f)) === f || !Ee(t, u)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (s[f] = ll(l, a, f, void 0, e, !0))
          : delete s[f]);
    if (i !== a)
      for (const f in i) (!t || !Ee(t, f)) && (delete i[f], (c = !0));
  }
  c && ln(e.attrs, "set", "");
}
function nm(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1,
    a;
  if (t)
    for (let l in t) {
      if (Is(l)) continue;
      const c = t[l];
      let u;
      s && Ee(s, (u = wt(l)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : Wo(e.emitsOptions, l) ||
          ((!(l in r) || c !== r[l]) && ((r[l] = c), (o = !0)));
    }
  if (i) {
    const l = fe(n),
      c = a || _e;
    for (let u = 0; u < i.length; u++) {
      const f = i[u];
      n[f] = ll(s, l, f, c[f], e, !Ee(c, f));
    }
  }
  return o;
}
function ll(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const a = Ee(o, "default");
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && ce(l)) {
        const { propsDefaults: c } = s;
        if (n in c) r = c[n];
        else {
          const u = ci(s);
          (r = c[n] = l.call(null, t)), u();
        }
      } else r = l;
      s.ce && s.ce._setProp(n, r);
    }
    o[0] &&
      (i && !a ? (r = !1) : o[1] && (r === "" || r === In(n)) && (r = !0));
  }
  return r;
}
const $y = new WeakMap();
function rm(e, t, n = !1) {
  const r = n ? $y : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const i = e.props,
    o = {},
    a = [];
  let l = !1;
  if (!ce(e)) {
    const u = (f) => {
      l = !0;
      const [d, h] = rm(f, t, !0);
      We(o, d), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!i && !l) return Pe(e) && r.set(e, Lr), Lr;
  if (oe(i))
    for (let u = 0; u < i.length; u++) {
      const f = wt(i[u]);
      mu(f) && (o[f] = _e);
    }
  else if (i)
    for (const u in i) {
      const f = wt(u);
      if (mu(f)) {
        const d = i[u],
          h = (o[f] =
            oe(d) || ce(d)
              ? {
                  type: d,
                }
              : We({}, d)),
          g = h.type;
        let w = !1,
          k = !0;
        if (oe(g))
          for (let y = 0; y < g.length; ++y) {
            const m = g[y],
              E = ce(m) && m.name;
            if (E === "Boolean") {
              w = !0;
              break;
            } else E === "String" && (k = !1);
          }
        else w = ce(g) && g.name === "Boolean";
        (h[0] = w), (h[1] = k), (w || Ee(h, "default")) && a.push(f);
      }
    }
  const c = [o, a];
  return Pe(e) && r.set(e, c), c;
}
function mu(e) {
  return e[0] !== "$" && !Is(e);
}
const dc = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable",
  hc = (e) => (oe(e) ? e.map(Yt) : [Yt(e)]),
  Uy = (e, t, n) => {
    if (t._n) return t;
    const r = fy((...s) => hc(t(...s)), n);
    return (r._c = !1), r;
  },
  sm = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (dc(s)) continue;
      const i = e[s];
      if (ce(i)) t[s] = Uy(s, i, r);
      else if (i != null) {
        const o = hc(i);
        t[s] = () => o;
      }
    }
  },
  im = (e, t) => {
    const n = hc(t);
    e.slots.default = () => n;
  },
  om = (e, t, n) => {
    for (const r in t) (n || !dc(r)) && (e[r] = t[r]);
  },
  By = (e, t, n) => {
    const r = (e.slots = em());
    if (e.vnode.shapeFlag & 32) {
      const s = t.__;
      s && el(r, "__", s, !0);
      const i = t._;
      i ? (om(r, t, n), n && el(r, "_", i, !0)) : sm(t, r);
    } else t && im(e, t);
  },
  Vy = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let i = !0,
      o = _e;
    if (r.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (i = !1)
          : om(s, t, n)
        : ((i = !t.$stable), sm(t, s)),
        (o = t);
    } else
      t &&
        (im(e, t),
        (o = {
          default: 1,
        }));
    if (i) for (const a in s) !dc(a) && o[a] == null && delete s[a];
  },
  qe = t_;
function Wy(e) {
  return jy(e);
}
function jy(e, t) {
  const n = Lo();
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
      setScopeId: h = Xt,
      insertStaticContent: g,
    } = e,
    w = (
      b,
      S,
      R,
      V = null,
      q = null,
      j = null,
      p = void 0,
      v = null,
      A = !!S.dynamicChildren
    ) => {
      if (b === S) return;
      b && !Vn(b, S) && ((V = D(b)), z(b, q, j, !0), (b = null)),
        S.patchFlag === -2 && ((A = !1), (S.dynamicChildren = null));
      const { type: x, ref: Q, shapeFlag: H } = S;
      switch (x) {
        case li:
          k(b, S, R, V);
          break;
        case Ze:
          y(b, S, R, V);
          break;
        case Ui:
          b == null && m(S, R, V, p);
          break;
        case ot:
          C(b, S, R, V, q, j, p, v, A);
          break;
        default:
          H & 1
            ? T(b, S, R, V, q, j, p, v, A)
            : H & 6
            ? G(b, S, R, V, q, j, p, v, A)
            : (H & 64 || H & 128) && x.process(b, S, R, V, q, j, p, v, A, te);
      }
      Q != null && q
        ? Ns(Q, b && b.ref, j, S || b, !S)
        : Q == null && b && b.ref != null && Ns(b.ref, null, j, b, !0);
    },
    k = (b, S, R, V) => {
      if (b == null) r((S.el = a(S.children)), R, V);
      else {
        const q = (S.el = b.el);
        S.children !== b.children && c(q, S.children);
      }
    },
    y = (b, S, R, V) => {
      b == null ? r((S.el = l(S.children || "")), R, V) : (S.el = b.el);
    },
    m = (b, S, R, V) => {
      [b.el, b.anchor] = g(b.children, S, R, V, b.el, b.anchor);
    },
    E = ({ el: b, anchor: S }, R, V) => {
      let q;
      for (; b && b !== S; ) (q = d(b)), r(b, R, V), (b = q);
      r(S, R, V);
    },
    _ = ({ el: b, anchor: S }) => {
      let R;
      for (; b && b !== S; ) (R = d(b)), s(b), (b = R);
      s(S);
    },
    T = (b, S, R, V, q, j, p, v, A) => {
      S.type === "svg" ? (p = "svg") : S.type === "math" && (p = "mathml"),
        b == null ? O(S, R, V, q, j, p, v, A) : I(b, S, q, j, p, v, A);
    },
    O = (b, S, R, V, q, j, p, v) => {
      let A, x;
      const { props: Q, shapeFlag: H, transition: P, dirs: F } = b;
      if (
        ((A = b.el = o(b.type, j, Q && Q.is, Q)),
        H & 8
          ? u(A, b.children)
          : H & 16 && W(b.children, A, null, V, q, ma(b, j), p, v),
        F && rr(b, null, V, "created"),
        N(A, b, b.scopeId, p, V),
        Q)
      ) {
        for (const le in Q)
          le !== "value" && !Is(le) && i(A, le, null, Q[le], j, V);
        "value" in Q && i(A, "value", null, Q.value, j),
          (x = Q.onVnodeBeforeMount) && It(x, V, b);
      }
      F && rr(b, null, V, "beforeMount");
      const se = qy(q, P);
      se && P.beforeEnter(A),
        r(A, S, R),
        ((x = Q && Q.onVnodeMounted) || se || F) &&
          qe(() => {
            x && It(x, V, b), se && P.enter(A), F && rr(b, null, V, "mounted");
          }, q);
    },
    N = (b, S, R, V, q) => {
      if ((R && h(b, R), V)) for (let j = 0; j < V.length; j++) h(b, V[j]);
      if (q) {
        let j = q.subTree;
        if (
          S === j ||
          (oo(j.type) && (j.ssContent === S || j.ssFallback === S))
        ) {
          const p = q.vnode;
          N(b, p, p.scopeId, p.slotScopeIds, q.parent);
        }
      }
    },
    W = (b, S, R, V, q, j, p, v, A = 0) => {
      for (let x = A; x < b.length; x++) {
        const Q = (b[x] = v ? $n(b[x]) : Yt(b[x]));
        w(null, Q, S, R, V, q, j, p, v);
      }
    },
    I = (b, S, R, V, q, j, p) => {
      const v = (S.el = b.el);
      let { patchFlag: A, dynamicChildren: x, dirs: Q } = S;
      A |= b.patchFlag & 16;
      const H = b.props || _e,
        P = S.props || _e;
      let F;
      if (
        (R && sr(R, !1),
        (F = P.onVnodeBeforeUpdate) && It(F, R, S, b),
        Q && rr(S, b, R, "beforeUpdate"),
        R && sr(R, !0),
        ((H.innerHTML && P.innerHTML == null) ||
          (H.textContent && P.textContent == null)) &&
          u(v, ""),
        x
          ? L(b.dynamicChildren, x, v, R, V, ma(S, q), j)
          : p || K(b, S, v, null, R, V, ma(S, q), j, !1),
        A > 0)
      ) {
        if (A & 16) B(v, H, P, R, q);
        else if (
          (A & 2 && H.class !== P.class && i(v, "class", null, P.class, q),
          A & 4 && i(v, "style", H.style, P.style, q),
          A & 8)
        ) {
          const se = S.dynamicProps;
          for (let le = 0; le < se.length; le++) {
            const ge = se[le],
              je = H[ge],
              De = P[ge];
            (De !== je || ge === "value") && i(v, ge, je, De, q, R);
          }
        }
        A & 1 && b.children !== S.children && u(v, S.children);
      } else !p && x == null && B(v, H, P, R, q);
      ((F = P.onVnodeUpdated) || Q) &&
        qe(() => {
          F && It(F, R, S, b), Q && rr(S, b, R, "updated");
        }, V);
    },
    L = (b, S, R, V, q, j, p) => {
      for (let v = 0; v < S.length; v++) {
        const A = b[v],
          x = S[v],
          Q =
            A.el && (A.type === ot || !Vn(A, x) || A.shapeFlag & 198)
              ? f(A.el)
              : R;
        w(A, x, Q, null, V, q, j, p, !0);
      }
    },
    B = (b, S, R, V, q) => {
      if (S !== R) {
        if (S !== _e)
          for (const j in S) !Is(j) && !(j in R) && i(b, j, S[j], null, q, V);
        for (const j in R) {
          if (Is(j)) continue;
          const p = R[j],
            v = S[j];
          p !== v && j !== "value" && i(b, j, v, p, q, V);
        }
        "value" in R && i(b, "value", S.value, R.value, q);
      }
    },
    C = (b, S, R, V, q, j, p, v, A) => {
      const x = (S.el = b ? b.el : a("")),
        Q = (S.anchor = b ? b.anchor : a(""));
      let { patchFlag: H, dynamicChildren: P, slotScopeIds: F } = S;
      F && (v = v ? v.concat(F) : F),
        b == null
          ? (r(x, R, V), r(Q, R, V), W(S.children || [], R, Q, q, j, p, v, A))
          : H > 0 && H & 64 && P && b.dynamicChildren
          ? (L(b.dynamicChildren, P, R, q, j, p, v),
            (S.key != null || (q && S === q.subTree)) && mc(b, S, !0))
          : K(b, S, R, Q, q, j, p, v, A);
    },
    G = (b, S, R, V, q, j, p, v, A) => {
      (S.slotScopeIds = v),
        b == null
          ? S.shapeFlag & 512
            ? q.ctx.activate(S, R, V, p, A)
            : $(S, R, V, q, j, p, A)
          : ee(b, S, A);
    },
    $ = (b, S, R, V, q, j, p) => {
      const v = (b.component = c_(b, V, q));
      if ((ai(b) && (v.ctx.renderer = te), u_(v, !1, p), v.asyncDep)) {
        if ((q && q.registerDep(v, Z, p), !b.el)) {
          const A = (v.subTree = Ue(Ze));
          y(null, A, S, R), (b.placeholder = A.el);
        }
      } else Z(v, b, S, R, q, j, p);
    },
    ee = (b, S, R) => {
      const V = (S.component = b.component);
      if (Zy(b, S, R))
        if (V.asyncDep && !V.asyncResolved) {
          J(V, S, R);
          return;
        } else (V.next = S), V.update();
      else (S.el = b.el), (V.vnode = S);
    },
    Z = (b, S, R, V, q, j, p) => {
      const v = () => {
        if (b.isMounted) {
          let { next: H, bu: P, u: F, parent: se, vnode: le } = b;
          {
            const Lt = am(b);
            if (Lt) {
              H && ((H.el = le.el), J(b, H, p)),
                Lt.asyncDep.then(() => {
                  b.isUnmounted || v();
                });
              return;
            }
          }
          let ge = H,
            je;
          sr(b, !1),
            H ? ((H.el = le.el), J(b, H, p)) : (H = le),
            P && ks(P),
            (je = H.props && H.props.onVnodeBeforeUpdate) && It(je, se, H, le),
            sr(b, !0);
          const De = gu(b),
            Et = b.subTree;
          (b.subTree = De),
            w(Et, De, f(Et.el), D(Et), b, q, j),
            (H.el = De.el),
            ge === null && e_(b, De.el),
            F && qe(F, q),
            (je = H.props && H.props.onVnodeUpdated) &&
              qe(() => It(je, se, H, le), q);
        } else {
          let H;
          const { el: P, props: F } = S,
            { bm: se, m: le, parent: ge, root: je, type: De } = b,
            Et = gr(S);
          sr(b, !1),
            se && ks(se),
            !Et && (H = F && F.onVnodeBeforeMount) && It(H, ge, S),
            sr(b, !0);
          {
            je.ce &&
              je.ce._def.shadowRoot !== !1 &&
              je.ce._injectChildStyle(De);
            const Lt = (b.subTree = gu(b));
            w(null, Lt, R, V, b, q, j), (S.el = Lt.el);
          }
          if ((le && qe(le, q), !Et && (H = F && F.onVnodeMounted))) {
            const Lt = S;
            qe(() => It(H, ge, Lt), q);
          }
          (S.shapeFlag & 256 ||
            (ge && gr(ge.vnode) && ge.vnode.shapeFlag & 256)) &&
            b.a &&
            qe(b.a, q),
            (b.isMounted = !0),
            (S = R = V = null);
        }
      };
      b.scope.on();
      const A = (b.effect = new uh(v));
      b.scope.off();
      const x = (b.update = A.run.bind(A)),
        Q = (b.job = A.runIfDirty.bind(A));
      (Q.i = b), (Q.id = b.uid), (A.scheduler = () => ac(Q)), sr(b, !0), x();
    },
    J = (b, S, R) => {
      S.component = b;
      const V = b.vnode.props;
      (b.vnode = S),
        (b.next = null),
        Fy(b, S.props, V, R),
        Vy(b, S.children, R),
        vn(),
        su(b),
        yn();
    },
    K = (b, S, R, V, q, j, p, v, A = !1) => {
      const x = b && b.children,
        Q = b ? b.shapeFlag : 0,
        H = S.children,
        { patchFlag: P, shapeFlag: F } = S;
      if (P > 0) {
        if (P & 128) {
          ue(x, H, R, V, q, j, p, v, A);
          return;
        } else if (P & 256) {
          ie(x, H, R, V, q, j, p, v, A);
          return;
        }
      }
      F & 8
        ? (Q & 16 && ne(x, q, j), H !== x && u(R, H))
        : Q & 16
        ? F & 16
          ? ue(x, H, R, V, q, j, p, v, A)
          : ne(x, q, j, !0)
        : (Q & 8 && u(R, ""), F & 16 && W(H, R, V, q, j, p, v, A));
    },
    ie = (b, S, R, V, q, j, p, v, A) => {
      (b = b || Lr), (S = S || Lr);
      const x = b.length,
        Q = S.length,
        H = Math.min(x, Q);
      let P;
      for (P = 0; P < H; P++) {
        const F = (S[P] = A ? $n(S[P]) : Yt(S[P]));
        w(b[P], F, R, null, q, j, p, v, A);
      }
      x > Q ? ne(b, q, j, !0, !1, H) : W(S, R, V, q, j, p, v, A, H);
    },
    ue = (b, S, R, V, q, j, p, v, A) => {
      let x = 0;
      const Q = S.length;
      let H = b.length - 1,
        P = Q - 1;
      for (; x <= H && x <= P; ) {
        const F = b[x],
          se = (S[x] = A ? $n(S[x]) : Yt(S[x]));
        if (Vn(F, se)) w(F, se, R, null, q, j, p, v, A);
        else break;
        x++;
      }
      for (; x <= H && x <= P; ) {
        const F = b[H],
          se = (S[P] = A ? $n(S[P]) : Yt(S[P]));
        if (Vn(F, se)) w(F, se, R, null, q, j, p, v, A);
        else break;
        H--, P--;
      }
      if (x > H) {
        if (x <= P) {
          const F = P + 1,
            se = F < Q ? S[F].el : V;
          for (; x <= P; )
            w(null, (S[x] = A ? $n(S[x]) : Yt(S[x])), R, se, q, j, p, v, A),
              x++;
        }
      } else if (x > P) for (; x <= H; ) z(b[x], q, j, !0), x++;
      else {
        const F = x,
          se = x,
          le = new Map();
        for (x = se; x <= P; x++) {
          const gt = (S[x] = A ? $n(S[x]) : Yt(S[x]));
          gt.key != null && le.set(gt.key, x);
        }
        let ge,
          je = 0;
        const De = P - se + 1;
        let Et = !1,
          Lt = 0;
        const is = new Array(De);
        for (x = 0; x < De; x++) is[x] = 0;
        for (x = F; x <= H; x++) {
          const gt = b[x];
          if (je >= De) {
            z(gt, q, j, !0);
            continue;
          }
          let zt;
          if (gt.key != null) zt = le.get(gt.key);
          else
            for (ge = se; ge <= P; ge++)
              if (is[ge - se] === 0 && Vn(gt, S[ge])) {
                zt = ge;
                break;
              }
          zt === void 0
            ? z(gt, q, j, !0)
            : ((is[zt - se] = x + 1),
              zt >= Lt ? (Lt = zt) : (Et = !0),
              w(gt, S[zt], R, null, q, j, p, v, A),
              je++);
        }
        const Xc = Et ? Hy(is) : Lr;
        for (ge = Xc.length - 1, x = De - 1; x >= 0; x--) {
          const gt = se + x,
            zt = S[gt],
            Qc = S[gt + 1],
            Zc = gt + 1 < Q ? Qc.el || Qc.placeholder : V;
          is[x] === 0
            ? w(null, zt, R, Zc, q, j, p, v, A)
            : Et && (ge < 0 || x !== Xc[ge] ? de(zt, R, Zc, 2) : ge--);
        }
      }
    },
    de = (b, S, R, V, q = null) => {
      const { el: j, type: p, transition: v, children: A, shapeFlag: x } = b;
      if (x & 6) {
        de(b.component.subTree, S, R, V);
        return;
      }
      if (x & 128) {
        b.suspense.move(S, R, V);
        return;
      }
      if (x & 64) {
        p.move(b, S, R, te);
        return;
      }
      if (p === ot) {
        r(j, S, R);
        for (let H = 0; H < A.length; H++) de(A[H], S, R, V);
        r(b.anchor, S, R);
        return;
      }
      if (p === Ui) {
        E(b, S, R);
        return;
      }
      if (V !== 2 && x & 1 && v)
        if (V === 0) v.beforeEnter(j), r(j, S, R), qe(() => v.enter(j), q);
        else {
          const { leave: H, delayLeave: P, afterLeave: F } = v,
            se = () => {
              b.ctx.isUnmounted ? s(j) : r(j, S, R);
            },
            le = () => {
              H(j, () => {
                se(), F && F();
              });
            };
          P ? P(j, se, le) : le();
        }
      else r(j, S, R);
    },
    z = (b, S, R, V = !1, q = !1) => {
      const {
        type: j,
        props: p,
        ref: v,
        children: A,
        dynamicChildren: x,
        shapeFlag: Q,
        patchFlag: H,
        dirs: P,
        cacheIndex: F,
      } = b;
      if (
        (H === -2 && (q = !1),
        v != null && (vn(), Ns(v, null, R, b, !0), yn()),
        F != null && (S.renderCache[F] = void 0),
        Q & 256)
      ) {
        S.ctx.deactivate(b);
        return;
      }
      const se = Q & 1 && P,
        le = !gr(b);
      let ge;
      if ((le && (ge = p && p.onVnodeBeforeUnmount) && It(ge, S, b), Q & 6))
        Me(b.component, R, V);
      else {
        if (Q & 128) {
          b.suspense.unmount(R, V);
          return;
        }
        se && rr(b, null, S, "beforeUnmount"),
          Q & 64
            ? b.type.remove(b, S, R, te, V)
            : x && !x.hasOnce && (j !== ot || (H > 0 && H & 64))
            ? ne(x, S, R, !1, !0)
            : ((j === ot && H & 384) || (!q && Q & 16)) && ne(A, S, R),
          V && pe(b);
      }
      ((le && (ge = p && p.onVnodeUnmounted)) || se) &&
        qe(() => {
          ge && It(ge, S, b), se && rr(b, null, S, "unmounted");
        }, R);
    },
    pe = (b) => {
      const { type: S, el: R, anchor: V, transition: q } = b;
      if (S === ot) {
        Ne(R, V);
        return;
      }
      if (S === Ui) {
        _(b);
        return;
      }
      const j = () => {
        s(R), q && !q.persisted && q.afterLeave && q.afterLeave();
      };
      if (b.shapeFlag & 1 && q && !q.persisted) {
        const { leave: p, delayLeave: v } = q,
          A = () => p(R, j);
        v ? v(b.el, j, A) : A();
      } else j();
    },
    Ne = (b, S) => {
      let R;
      for (; b !== S; ) (R = d(b)), s(b), (b = R);
      s(S);
    },
    Me = (b, S, R) => {
      const {
        bum: V,
        scope: q,
        job: j,
        subTree: p,
        um: v,
        m: A,
        a: x,
        parent: Q,
        slots: { __: H },
      } = b;
      io(A),
        io(x),
        V && ks(V),
        Q &&
          oe(H) &&
          H.forEach((P) => {
            Q.renderCache[P] = void 0;
          }),
        q.stop(),
        j && ((j.flags |= 8), z(p, b, S, R)),
        v && qe(v, S),
        qe(() => {
          b.isUnmounted = !0;
        }, S),
        S &&
          S.pendingBranch &&
          !S.isUnmounted &&
          b.asyncDep &&
          !b.asyncResolved &&
          b.suspenseId === S.pendingId &&
          (S.deps--, S.deps === 0 && S.resolve());
    },
    ne = (b, S, R, V = !1, q = !1, j = 0) => {
      for (let p = j; p < b.length; p++) z(b[p], S, R, V, q);
    },
    D = (b) => {
      if (b.shapeFlag & 6) return D(b.component.subTree);
      if (b.shapeFlag & 128) return b.suspense.next();
      const S = d(b.anchor || b.el),
        R = S && S[Fh];
      return R ? d(R) : S;
    };
  let X = !1;
  const Y = (b, S, R) => {
      b == null
        ? S._vnode && z(S._vnode, null, null, !0)
        : w(S._vnode || null, b, S, null, null, null, R),
        (S._vnode = b),
        X || ((X = !0), su(), Lh(), (X = !1));
    },
    te = {
      p: w,
      um: z,
      m: de,
      r: pe,
      mt: $,
      mc: W,
      pc: K,
      pbc: L,
      n: D,
      o: e,
    };
  return {
    render: Y,
    hydrate: void 0,
    createApp: My(Y),
  };
}
function ma({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function sr({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function qy(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function mc(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (oe(r) && oe(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = s[i];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = s[i] = $n(s[i])), (a.el = o.el)),
        !n && a.patchFlag !== -2 && mc(o, a)),
        a.type === li && (a.el = o.el),
        a.type === Ze && !a.el && (a.el = o.el);
    }
}
function Hy(e) {
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
function am(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : am(t);
}
function io(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const zy = Symbol.for("v-scx"),
  Ky = () => ft(zy);
function lm(e, t) {
  return Vo(e, null, t);
}
function Gy(e, t) {
  return Vo(e, null, {
    flush: "sync",
  });
}
function me(e, t, n) {
  return Vo(e, t, n);
}
function Vo(e, t, n = _e) {
  const { immediate: r, deep: s, flush: i, once: o } = n,
    a = We({}, n),
    l = (t && r) || (!t && i !== "post");
  let c;
  if (jr) {
    if (i === "sync") {
      const h = Ky();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {};
      return (h.stop = Xt), (h.resume = Xt), (h.pause = Xt), h;
    }
  }
  const u = et;
  a.call = (h, g, w) => jt(h, u, g, w);
  let f = !1;
  i === "post"
    ? (a.scheduler = (h) => {
        qe(h, u && u.suspense);
      })
    : i !== "sync" &&
      ((f = !0),
      (a.scheduler = (h, g) => {
        g ? h() : ac(h);
      })),
    (a.augmentJob = (h) => {
      t && (h.flags |= 4),
        f && ((h.flags |= 2), u && ((h.id = u.uid), (h.i = u)));
    });
  const d = ay(e, t, a);
  return jr && (c ? c.push(d) : l && d()), d;
}
function Jy(e, t, n) {
  const r = this.proxy,
    s = xe(e) ? (e.includes(".") ? cm(r, e) : () => r[e]) : e.bind(r, r);
  let i;
  ce(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = ci(this),
    a = Vo(s, i.bind(r), n);
  return o(), a;
}
function cm(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function M1(e, t, n = _e) {
  const r = Se(),
    s = wt(t),
    i = In(t),
    o = um(e, s),
    a = Ah((l, c) => {
      let u,
        f = _e,
        d;
      return (
        Gy(() => {
          const h = e[s];
          mt(u, h) && ((u = h), c());
        }),
        {
          get() {
            return l(), n.get ? n.get(u) : u;
          },
          set(h) {
            const g = n.set ? n.set(h) : h;
            if (!mt(g, u) && !(f !== _e && mt(h, f))) return;
            const w = r.vnode.props;
            (w &&
              (t in w || s in w || i in w) &&
              (`onUpdate:${t}` in w ||
                `onUpdate:${s}` in w ||
                `onUpdate:${i}` in w)) ||
              ((u = h), c()),
              r.emit(`update:${t}`, g),
              mt(h, g) && mt(h, f) && !mt(g, d) && c(),
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
                value: l++ ? o || _e : a,
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
const um = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${wt(t)}Modifiers`] || e[`${In(t)}Modifiers`];
function Yy(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || _e;
  let s = n;
  const i = t.startsWith("update:"),
    o = i && um(r, t.slice(7));
  o &&
    (o.trim && (s = n.map((u) => (xe(u) ? u.trim() : u))),
    o.number && (s = n.map(Ev)));
  let a,
    l = r[(a = ia(t))] || r[(a = ia(wt(t)))];
  !l && i && (l = r[(a = ia(In(t)))]), l && jt(l, e, 6, s);
  const c = r[a + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), jt(c, e, 6, s);
  }
}
function fm(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const i = e.emits;
  let o = {},
    a = !1;
  if (!ce(e)) {
    const l = (c) => {
      const u = fm(c, t, !0);
      u && ((a = !0), We(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !i && !a
    ? (Pe(e) && r.set(e, null), null)
    : (oe(i) ? i.forEach((l) => (o[l] = null)) : We(o, i),
      Pe(e) && r.set(e, o),
      o);
}
function Wo(e, t) {
  return !e || !No(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Ee(e, t[0].toLowerCase() + t.slice(1)) || Ee(e, In(t)) || Ee(e, t));
}
function gu(e) {
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
    k = no(e);
  let y, m;
  try {
    if (n.shapeFlag & 4) {
      const _ = s || r,
        T = _;
      (y = Yt(c.call(T, _, u, f, h, d, g))), (m = a);
    } else {
      const _ = t;
      (y = Yt(
        _.length > 1
          ? _(f, {
              attrs: a,
              slots: o,
              emit: l,
            })
          : _(f, null)
      )),
        (m = t.props ? a : Xy(a));
    }
  } catch (_) {
    (Os.length = 0), oi(_, e, 1), (y = Ue(Ze));
  }
  let E = y;
  if (m && w !== !1) {
    const _ = Object.keys(m),
      { shapeFlag: T } = E;
    _.length &&
      T & 7 &&
      (i && _.some(Jl) && (m = Qy(m, i)), (E = _n(E, m, !1, !0)));
  }
  return (
    n.dirs &&
      ((E = _n(E, null, !1, !0)),
      (E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Jn(E, n.transition),
    (y = E),
    no(k),
    y
  );
}
const Xy = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || No(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Qy = (e, t) => {
    const n = {};
    for (const r in e) (!Jl(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Zy(e, t, n) {
  const { props: r, children: s, component: i } = e,
    { props: o, children: a, patchFlag: l } = t,
    c = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? pu(r, o, c) : !!o;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (o[d] !== r[d] && !Wo(c, d)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable)
      ? !0
      : r === o
      ? !1
      : r
      ? o
        ? pu(r, o, c)
        : !0
      : !!o;
  return !1;
}
function pu(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t[i] !== e[i] && !Wo(n, i)) return !0;
  }
  return !1;
}
function e_({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const oo = (e) => e.__isSuspense;
function t_(e, t) {
  t && t.pendingBranch
    ? oe(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : uy(e);
}
const ot = Symbol.for("v-fgt"),
  li = Symbol.for("v-txt"),
  Ze = Symbol.for("v-cmt"),
  Ui = Symbol.for("v-stc"),
  Os = [];
let yt = null;
function ao(e = !1) {
  Os.push((yt = e ? null : []));
}
function n_() {
  Os.pop(), (yt = Os[Os.length - 1] || null);
}
let zs = 1;
function vu(e, t = !1) {
  (zs += e), e < 0 && yt && t && (yt.hasOnce = !0);
}
function dm(e) {
  return (
    (e.dynamicChildren = zs > 0 ? yt || Lr : null),
    n_(),
    zs > 0 && yt && yt.push(e),
    e
  );
}
function D1(e, t, n, r, s, i) {
  return dm(mm(e, t, n, r, s, i, !0));
}
function lo(e, t, n, r, s) {
  return dm(Ue(e, t, n, r, s, !0));
}
function Wr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Vn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const hm = ({ key: e }) => e ?? null,
  Bi = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? xe(e) || Ae(e) || ce(e)
        ? {
            i: tt,
            r: e,
            k: t,
            f: !!n,
          }
        : e
      : null
  );
function mm(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  i = e === ot ? 0 : 1,
  o = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && hm(t),
    ref: t && Bi(t),
    scopeId: Mh,
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
    ctx: tt,
  };
  return (
    a
      ? (gc(l, n), i & 128 && e.normalize(l))
      : n && (l.shapeFlag |= xe(n) ? 8 : 16),
    zs > 0 &&
      !o &&
      yt &&
      (l.patchFlag > 0 || i & 6) &&
      l.patchFlag !== 32 &&
      yt.push(l),
    l
  );
}
const Ue = r_;
function r_(e, t = null, n = null, r = 0, s = null, i = !1) {
  if (((!e || e === ky) && (e = Ze), Wr(e))) {
    const a = _n(e, t, !0);
    return (
      n && gc(a, n),
      zs > 0 &&
        !i &&
        yt &&
        (a.shapeFlag & 6 ? (yt[yt.indexOf(e)] = a) : yt.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((m_(e) && (e = e.__vccOpts), t)) {
    t = s_(t);
    let { class: a, style: l } = t;
    a && !xe(a) && (t.class = Zl(a)),
      Pe(l) && (oc(l) && !oe(l) && (l = We({}, l)), (t.style = Ql(l)));
  }
  const o = xe(e) ? 1 : oo(e) ? 128 : $h(e) ? 64 : Pe(e) ? 4 : ce(e) ? 2 : 0;
  return mm(e, t, n, r, s, o, i, !0);
}
function s_(e) {
  return e ? (oc(e) || tm(e) ? We({}, e) : e) : null;
}
function _n(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: a, transition: l } = e,
    c = t ? o_(s || {}, t) : s,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && hm(c),
      ref:
        t && t.ref
          ? n && i
            ? oe(i)
              ? i.concat(Bi(t))
              : [i, Bi(t)]
            : Bi(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ot ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && _n(e.ssContent),
      ssFallback: e.ssFallback && _n(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && r && Jn(u, l.clone(u)), u;
}
function i_(e = " ", t = 0) {
  return Ue(li, null, e, t);
}
function F1(e, t) {
  const n = Ue(Ui, null, e);
  return (n.staticCount = t), n;
}
function $1(e = "", t = !1) {
  return t ? (ao(), lo(Ze, null, e)) : Ue(Ze, null, e);
}
function Yt(e) {
  return e == null || typeof e == "boolean"
    ? Ue(Ze)
    : oe(e)
    ? Ue(ot, null, e.slice())
    : Wr(e)
    ? $n(e)
    : Ue(li, null, String(e));
}
function $n(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : _n(e);
}
function gc(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (oe(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), gc(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !tm(t)
        ? (t._ctx = tt)
        : s === 3 &&
          tt &&
          (tt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ce(t)
      ? ((t = {
          default: t,
          _ctx: tt,
        }),
        (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [i_(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function o_(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Zl([t.class, r.class]));
      else if (s === "style") t.style = Ql([t.style, r.style]);
      else if (No(s)) {
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
function It(e, t, n, r = null) {
  jt(e, t, 7, [n, r]);
}
const a_ = Qh();
let l_ = 0;
function c_(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || a_,
    i = {
      uid: l_++,
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
      scope: new lh(!0),
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
      propsOptions: rm(r, s),
      emitsOptions: fm(r, s),
      emit: null,
      emitted: null,
      propsDefaults: _e,
      inheritAttrs: r.inheritAttrs,
      ctx: _e,
      data: _e,
      props: _e,
      attrs: _e,
      slots: _e,
      refs: _e,
      setupState: _e,
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
    (i.emit = Yy.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let et = null;
const Se = () => et || tt;
let co, cl;
{
  const e = Lo(),
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
  (co = t("__VUE_INSTANCE_SETTERS__", (n) => (et = n))),
    (cl = t("__VUE_SSR_SETTERS__", (n) => (jr = n)));
}
const ci = (e) => {
    const t = et;
    return (
      co(e),
      e.scope.on(),
      () => {
        e.scope.off(), co(t);
      }
    );
  },
  yu = () => {
    et && et.scope.off(), co(null);
  };
function gm(e) {
  return e.vnode.shapeFlag & 4;
}
let jr = !1;
function u_(e, t = !1, n = !1) {
  t && cl(t);
  const { props: r, children: s } = e.vnode,
    i = gm(e);
  Dy(e, r, i, t), By(e, s, n || t);
  const o = i ? f_(e, t) : void 0;
  return t && cl(!1), o;
}
function f_(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Py));
  const { setup: r } = n;
  if (r) {
    vn();
    const s = (e.setupContext = r.length > 1 ? h_(e) : null),
      i = ci(e),
      o = ii(r, e, 0, [e.props, s]),
      a = nh(o);
    if ((yn(), i(), (a || e.sp) && !gr(e) && cc(e), a)) {
      if ((o.then(yu, yu), t))
        return o
          .then((l) => {
            _u(e, l);
          })
          .catch((l) => {
            oi(l, e, 0);
          });
      e.asyncDep = o;
    } else _u(e, o);
  } else pm(e);
}
function _u(e, t, n) {
  ce(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Pe(t) && (e.setupState = Ph(t)),
    pm(e);
}
function pm(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Xt);
  {
    const s = ci(e);
    vn();
    try {
      Ay(e);
    } finally {
      yn(), s();
    }
  }
}
const d_ = {
  get(e, t) {
    return it(e, "get", ""), e[t];
  },
};
function h_(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, d_),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function jo(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ph(wr(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Rs) return Rs[n](e);
          },
          has(t, n) {
            return n in t || n in Rs;
          },
        }))
    : e.proxy;
}
function ul(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function m_(e) {
  return ce(e) && "__vccOpts" in e;
}
const M = (e, t) => iy(e, t, jr);
function U(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Pe(t) && !oe(t)
      ? Wr(t)
        ? Ue(e, null, [t])
        : Ue(e, t)
      : Ue(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Wr(n) && (n = [n]),
      Ue(e, t, n));
}
const g_ = "3.5.18";
/**
 * @vue/runtime-dom v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let fl;
const bu = typeof window < "u" && window.trustedTypes;
if (bu)
  try {
    fl = bu.createPolicy("vue", {
      createHTML: (e) => e,
    });
  } catch {}
const vm = fl ? (e) => fl.createHTML(e) : (e) => e,
  p_ = "http://www.w3.org/2000/svg",
  v_ = "http://www.w3.org/1998/Math/MathML",
  an = typeof document < "u" ? document : null,
  wu = an && an.createElement("template"),
  y_ = {
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
          ? an.createElementNS(p_, e)
          : t === "mathml"
          ? an.createElementNS(v_, e)
          : n
          ? an.createElement(e, {
              is: n,
            })
          : an.createElement(e);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => an.createTextNode(e),
    createComment: (e) => an.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => an.querySelector(e),
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
        wu.innerHTML = vm(
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const a = wu.content;
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
  An = "transition",
  as = "animation",
  qr = Symbol("_vtc"),
  ym = {
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
  _m = We({}, Wh, ym),
  __ = (e) => ((e.displayName = "Transition"), (e.props = _m), e),
  Ks = __((e, { slots: t }) => U(gy, bm(e), t)),
  ir = (e, t = []) => {
    oe(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Eu = (e) => (e ? (oe(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function bm(e) {
  const t = {};
  for (const C in e) C in ym || (t[C] = e[C]);
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
    g = b_(s),
    w = g && g[0],
    k = g && g[1],
    {
      onBeforeEnter: y,
      onEnter: m,
      onEnterCancelled: E,
      onLeave: _,
      onLeaveCancelled: T,
      onBeforeAppear: O = y,
      onAppear: N = m,
      onAppearCancelled: W = E,
    } = t,
    I = (C, G, $, ee) => {
      (C._enterCancelled = ee), Ln(C, G ? u : a), Ln(C, G ? c : o), $ && $();
    },
    L = (C, G) => {
      (C._isLeaving = !1), Ln(C, f), Ln(C, h), Ln(C, d), G && G();
    },
    B = (C) => (G, $) => {
      const ee = C ? N : m,
        Z = () => I(G, C, $);
      ir(ee, [G, Z]),
        Su(() => {
          Ln(G, C ? l : i), Gt(G, C ? u : a), Eu(ee) || Cu(G, r, w, Z);
        });
    };
  return We(t, {
    onBeforeEnter(C) {
      ir(y, [C]), Gt(C, i), Gt(C, o);
    },
    onBeforeAppear(C) {
      ir(O, [C]), Gt(C, l), Gt(C, c);
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(C, G) {
      C._isLeaving = !0;
      const $ = () => L(C, G);
      Gt(C, f),
        C._enterCancelled ? (Gt(C, d), dl()) : (dl(), Gt(C, d)),
        Su(() => {
          C._isLeaving && (Ln(C, f), Gt(C, h), Eu(_) || Cu(C, r, k, $));
        }),
        ir(_, [C, $]);
    },
    onEnterCancelled(C) {
      I(C, !1, void 0, !0), ir(E, [C]);
    },
    onAppearCancelled(C) {
      I(C, !0, void 0, !0), ir(W, [C]);
    },
    onLeaveCancelled(C) {
      L(C), ir(T, [C]);
    },
  });
}
function b_(e) {
  if (e == null) return null;
  if (Pe(e)) return [ga(e.enter), ga(e.leave)];
  {
    const t = ga(e);
    return [t, t];
  }
}
function ga(e) {
  return Sv(e);
}
function Gt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[qr] || (e[qr] = new Set())).add(t);
}
function Ln(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[qr];
  n && (n.delete(t), n.size || (e[qr] = void 0));
}
function Su(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let w_ = 0;
function Cu(e, t, n, r) {
  const s = (e._endId = ++w_),
    i = () => {
      s === e._endId && r();
    };
  if (n != null) return setTimeout(i, n);
  const { type: o, timeout: a, propCount: l } = wm(e, t);
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
function wm(e, t) {
  const n = window.getComputedStyle(e),
    r = (g) => (n[g] || "").split(", "),
    s = r(`${An}Delay`),
    i = r(`${An}Duration`),
    o = Iu(s, i),
    a = r(`${as}Delay`),
    l = r(`${as}Duration`),
    c = Iu(a, l);
  let u = null,
    f = 0,
    d = 0;
  t === An
    ? o > 0 && ((u = An), (f = o), (d = i.length))
    : t === as
    ? c > 0 && ((u = as), (f = c), (d = l.length))
    : ((f = Math.max(o, c)),
      (u = f > 0 ? (o > c ? An : as) : null),
      (d = u ? (u === An ? i.length : l.length) : 0));
  const h =
    u === An && /\b(transform|all)(,|$)/.test(r(`${An}Property`).toString());
  return {
    type: u,
    timeout: f,
    propCount: d,
    hasTransform: h,
  };
}
function Iu(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => ku(n) + ku(e[r])));
}
function ku(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function dl() {
  return document.body.offsetHeight;
}
function E_(e, t, n) {
  const r = e[qr];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const uo = Symbol("_vod"),
  Em = Symbol("_vsh"),
  U1 = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[uo] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : ls(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), ls(e, !0), r.enter(e))
            : r.leave(e, () => {
                ls(e, !1);
              })
          : ls(e, t));
    },
    beforeUnmount(e, { value: t }) {
      ls(e, t);
    },
  };
function ls(e, t) {
  (e.style.display = t ? e[uo] : "none"), (e[Em] = !t);
}
const S_ = Symbol(""),
  C_ = /(^|;)\s*display\s*:/;
function I_(e, t, n) {
  const r = e.style,
    s = xe(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (xe(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && Vi(r, a, "");
        }
      else for (const o in t) n[o] == null && Vi(r, o, "");
    for (const o in n) o === "display" && (i = !0), Vi(r, o, n[o]);
  } else if (s) {
    if (t !== n) {
      const o = r[S_];
      o && (n += ";" + o), (r.cssText = n), (i = C_.test(n));
    }
  } else t && e.removeAttribute("style");
  uo in e && ((e[uo] = i ? r.display : ""), e[Em] && (r.display = "none"));
}
const Tu = /\s*!important$/;
function Vi(e, t, n) {
  if (oe(n)) n.forEach((r) => Vi(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = k_(e, t);
    Tu.test(n)
      ? e.setProperty(In(r), n.replace(Tu, ""), "important")
      : (e[r] = n);
  }
}
const Pu = ["Webkit", "Moz", "ms"],
  pa = {};
function k_(e, t) {
  const n = pa[t];
  if (n) return n;
  let r = wt(t);
  if (r !== "filter" && r in e) return (pa[t] = r);
  r = Oo(r);
  for (let s = 0; s < Pu.length; s++) {
    const i = Pu[s] + r;
    if (i in e) return (pa[t] = i);
  }
  return t;
}
const Au = "http://www.w3.org/1999/xlink";
function Nu(e, t, n, r, s, i = Av(t)) {
  r && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Au, t.slice(6, t.length))
      : e.setAttributeNS(Au, t, n)
    : n == null || (i && !ih(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, i ? "" : Cn(n) ? String(n) : n);
}
function Ru(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? vm(n) : n);
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
      ? (n = ih(n))
      : n == null && a === "string"
      ? ((n = ""), (o = !0))
      : a === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(s || t);
}
function T_(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function P_(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ou = Symbol("_vei");
function A_(e, t, n, r, s = null) {
  const i = e[Ou] || (e[Ou] = {}),
    o = i[t];
  if (r && o) o.value = r;
  else {
    const [a, l] = N_(t);
    if (r) {
      const c = (i[t] = L_(r, s));
      T_(e, a, c, l);
    } else o && (P_(e, a, o, l), (i[t] = void 0));
  }
}
const Lu = /(?:Once|Passive|Capture)$/;
function N_(e) {
  let t;
  if (Lu.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Lu)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : In(e.slice(2)), t];
}
let va = 0;
const R_ = Promise.resolve(),
  O_ = () => va || (R_.then(() => (va = 0)), (va = Date.now()));
function L_(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    jt(x_(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = O_()), n;
}
function x_(e, t) {
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
const xu = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  M_ = (e, t, n, r, s, i) => {
    const o = s === "svg";
    t === "class"
      ? E_(e, r, o)
      : t === "style"
      ? I_(e, n, r)
      : No(t)
      ? Jl(t) || A_(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : D_(e, t, r, o)
        )
      ? (Ru(e, t, r),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          Nu(e, t, r, o, i, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !xe(r))
      ? Ru(e, wt(t), r, i, t)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        Nu(e, t, r, o));
  };
function D_(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && xu(t) && ce(n))
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
  return xu(t) && xe(n) ? !1 : t in e;
}
const Sm = new WeakMap(),
  Cm = new WeakMap(),
  fo = Symbol("_moveCb"),
  Mu = Symbol("_enterCb"),
  F_ = (e) => (delete e.props.mode, e),
  $_ = F_({
    name: "TransitionGroup",
    props: We({}, _m, {
      tag: String,
      moveClass: String,
    }),
    setup(e, { slots: t }) {
      const n = Se(),
        r = Vh();
      let s, i;
      return (
        uc(() => {
          if (!s.length) return;
          const o = e.moveClass || `${e.name || "v"}-move`;
          if (!j_(s[0].el, n.vnode.el, o)) {
            s = [];
            return;
          }
          s.forEach(B_), s.forEach(V_);
          const a = s.filter(W_);
          dl(),
            a.forEach((l) => {
              const c = l.el,
                u = c.style;
              Gt(c, o),
                (u.transform = u.webkitTransform = u.transitionDuration = "");
              const f = (c[fo] = (d) => {
                (d && d.target !== c) ||
                  ((!d || /transform$/.test(d.propertyName)) &&
                    (c.removeEventListener("transitionend", f),
                    (c[fo] = null),
                    Ln(c, o)));
              });
              c.addEventListener("transitionend", f);
            }),
            (s = []);
        }),
        () => {
          const o = fe(e),
            a = bm(o);
          let l = o.tag || ot;
          if (((s = []), i))
            for (let c = 0; c < i.length; c++) {
              const u = i[c];
              u.el &&
                u.el instanceof Element &&
                (s.push(u),
                Jn(u, Hs(u, a, r, n)),
                Sm.set(u, u.el.getBoundingClientRect()));
            }
          i = t.default ? lc(t.default()) : [];
          for (let c = 0; c < i.length; c++) {
            const u = i[c];
            u.key != null && Jn(u, Hs(u, a, r, n));
          }
          return Ue(l, null, i);
        }
      );
    },
  }),
  U_ = $_;
function B_(e) {
  const t = e.el;
  t[fo] && t[fo](), t[Mu] && t[Mu]();
}
function V_(e) {
  Cm.set(e, e.el.getBoundingClientRect());
}
function W_(e) {
  const t = Sm.get(e),
    n = Cm.get(e),
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
function j_(e, t, n) {
  const r = e.cloneNode(),
    s = e[qr];
  s &&
    s.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }),
    n.split(/\s+/).forEach((a) => a && r.classList.add(a)),
    (r.style.display = "none");
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(r);
  const { hasTransform: o } = wm(r);
  return i.removeChild(r), o;
}
const q_ = ["ctrl", "shift", "alt", "meta"],
  H_ = {
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
    exact: (e, t) => q_.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  B1 = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (s, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const a = H_[t[o]];
          if (a && a(s, t)) return;
        }
        return e(s, ...i);
      })
    );
  },
  z_ = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  V1 = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (s) => {
        if (!("key" in s)) return;
        const i = In(s.key);
        if (t.some((o) => o === i || z_[o] === i)) return e(s);
      })
    );
  },
  K_ = We(
    {
      patchProp: M_,
    },
    y_
  );
let Du;
function G_() {
  return Du || (Du = Wy(K_));
}
const Im = (...e) => {
  const t = G_().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = Y_(r);
      if (!s) return;
      const i = t._component;
      !ce(i) && !i.render && !i.template && (i.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = "");
      const o = n(s, !1, J_(s));
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function J_(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Y_(e) {
  return xe(e) ? document.querySelector(e) : e;
}
function ts(e, t, n, r) {
  return (
    Object.defineProperty(e, t, {
      get: n,
      set: r,
      enumerable: !0,
    }),
    e
  );
}
const Yn = he(!1);
let hl;
function X_(e, t) {
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
function Q_(e) {
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
const km = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function Z_(e) {
  const t = e.toLowerCase(),
    n = Q_(t),
    r = X_(t, n),
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
      Yn.value === !0 &&
        (hl = {
          is: {
            ...s,
          },
        }),
      km === !0 &&
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
const Fu = navigator.userAgent || navigator.vendor || window.opera,
  eb = {
    has: {
      touch: !1,
      webStorage: !1,
    },
    within: {
      iframe: !1,
    },
  },
  He = {
    userAgent: Fu,
    is: Z_(Fu),
    has: {
      touch: km,
    },
    within: {
      iframe: window.self !== window.top,
    },
  },
  ml = {
    install(e) {
      const { $q: t } = e;
      Yn.value === !0
        ? (e.onSSRHydrated.push(() => {
            Object.assign(t.platform, He), (Yn.value = !1);
          }),
          (t.platform = br(this)))
        : (t.platform = this);
    },
  };
{
  let e;
  ts(He.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return (e = !0), !0;
    } catch {}
    return (e = !1), !1;
  }),
    Object.assign(ml, He),
    Yn.value === !0 && (Object.assign(ml, hl, eb), (hl = null));
}
function rt(e) {
  return wr(Xn(e));
}
function tb(e) {
  return wr(e);
}
const ns = (e, t) => {
    const n = br(e);
    for (const r in e)
      ts(
        t,
        r,
        () => n[r],
        (s) => {
          n[r] = s;
        }
      );
    return t;
  },
  ht = {
    hasPassive: !1,
    passiveCapture: !0,
    notPassiveCapture: !0,
  };
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(ht, {
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
function Gs() {}
function W1(e) {
  return e.button === 0;
}
function nb(e) {
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
function rb(e) {
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
function Wn(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function kt(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function j1(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return;
  const n =
    t === !0
      ? (r) => {
          (r.__dragPrevented = !0),
            r.addEventListener("dragstart", Wn, ht.notPassiveCapture);
        }
      : (r) => {
          delete r.__dragPrevented,
            r.removeEventListener("dragstart", Wn, ht.notPassiveCapture);
        };
  e.querySelectorAll("a, img").forEach(n);
}
function sb(e, t, n) {
  const r = `__q_${t}_evt`;
  (e[r] = e[r] !== void 0 ? e[r].concat(n) : n),
    n.forEach((s) => {
      s[0].addEventListener(s[1], e[s[2]], ht[s[3]]);
    });
}
function ib(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 &&
    (e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], ht[r[3]]);
    }),
    (e[n] = void 0));
}
function Tm(e, t = 250, n) {
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
const ya = ["sm", "md", "lg", "xl"],
  { passive: $u } = ht,
  ob = ns(
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
      setSizes: Gs,
      setDebounce: Gs,
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
            n === void 0 || He.is.mobile === !0
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
          ya.forEach((d) => {
            f[d] !== void 0 && (l[d] = f[d]);
          });
        }),
          (this.setDebounce = (f) => {
            c = f;
          });
        const u = () => {
          const f = getComputedStyle(document.body);
          f.getPropertyValue("--q-size-sm") &&
            ya.forEach((d) => {
              this.sizes[d] = parseInt(f.getPropertyValue(`--q-size-${d}`), 10);
            }),
            (this.setSizes = (d) => {
              ya.forEach((h) => {
                d[h] && (this.sizes[h] = d[h]);
              }),
                this.__update(!0);
            }),
            (this.setDebounce = (d) => {
              a !== void 0 && r.removeEventListener("resize", a, $u),
                (a = d > 0 ? Tm(this.__update, d) : this.__update),
                r.addEventListener("resize", a, $u);
            }),
            this.setDebounce(c),
            Object.keys(l).length !== 0
              ? (this.setSizes(l), (l = void 0))
              : this.__update(),
            o === !0 &&
              this.name === "xs" &&
              document.body.classList.add("screen--xs");
        };
        Yn.value === !0 ? t.push(u) : u();
      },
    }
  ),
  Je = ns(
    {
      isActive: !1,
      mode: !1,
    },
    {
      __media: void 0,
      set(e) {
        (Je.mode = e),
          e === "auto"
            ? (Je.__media === void 0 &&
                ((Je.__media = window.matchMedia(
                  "(prefers-color-scheme: dark)"
                )),
                (Je.__updateMedia = () => {
                  Je.set("auto");
                }),
                Je.__media.addListener(Je.__updateMedia)),
              (e = Je.__media.matches))
            : Je.__media !== void 0 &&
              (Je.__media.removeListener(Je.__updateMedia),
              (Je.__media = void 0)),
          (Je.isActive = e === !0),
          document.body.classList.remove(
            `body--${e === !0 ? "light" : "dark"}`
          ),
          document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`);
      },
      toggle() {
        Je.set(Je.isActive === !1);
      },
      install({ $q: e, ssrContext: t }) {
        const n = e.config.dark;
        (e.dark = this),
          this.__installed !== !0 && this.set(n !== void 0 ? n : !1);
      },
    }
  );
function ab(e, t, n = document.body) {
  if (typeof e != "string")
    throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
let Pm = !1;
function lb(e) {
  Pm = e.isComposing === !0;
}
function Am(e) {
  return (
    Pm === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
  );
}
function Js(e, t) {
  return Am(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function Nm(e) {
  if (e.ios === !0) return "ios";
  if (e.android === !0) return "android";
}
function cb({ is: e, has: t, within: n }, r) {
  const s = [
    e.desktop === !0 ? "desktop" : "mobile",
    `${t.touch === !1 ? "no-" : ""}touch`,
  ];
  if (e.mobile === !0) {
    const i = Nm(e);
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
function ub() {
  const { is: e } = He,
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
      const s = Nm(e);
      s !== void 0 && n.add(`platform-${s}`);
    }
  }
  He.has.touch === !0 && (n.delete("no-touch"), n.add("touch")),
    He.within.iframe === !0 && n.add("within-iframe");
  const r = Array.from(n).join(" ");
  t !== r && (document.body.className = r);
}
function fb(e) {
  for (const t in e) ab(t, e[t]);
}
const db = {
    install(e) {
      if (this.__installed !== !0) {
        if (Yn.value === !0) ub();
        else {
          const { $q: t } = e;
          t.config.brand !== void 0 && fb(t.config.brand);
          const n = cb(He, t.config);
          document.body.classList.add.apply(document.body.classList, n);
        }
        He.is.ios === !0 && document.body.addEventListener("touchstart", Gs),
          window.addEventListener("keydown", lb, !0);
      }
    },
  },
  Rm = () => !0;
function hb(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function mb(e) {
  return (
    e.startsWith("#") === !0 && (e = e.substring(1)),
    e.startsWith("/") === !1 && (e = "/" + e),
    e.endsWith("/") === !0 && (e = e.substring(0, e.length - 1)),
    "#" + e
  );
}
function gb(e) {
  if (e.backButtonExit === !1) return () => !1;
  if (e.backButtonExit === "*") return Rm;
  const t = ["#/"];
  return (
    Array.isArray(e.backButtonExit) === !0 &&
      t.push(...e.backButtonExit.filter(hb).map(mb)),
    () => t.includes(window.location.hash)
  );
}
const gl = {
    __history: [],
    add: Gs,
    remove: Gs,
    install({ $q: e }) {
      if (this.__installed === !0) return;
      const { cordova: t, capacitor: n } = He.is;
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
        o.condition === void 0 && (o.condition = Rm), this.__history.push(o);
      }),
        (this.remove = (o) => {
          const a = this.__history.indexOf(o);
          a >= 0 && this.__history.splice(a, 1);
        });
      const s = gb(
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
  Uu = {
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
function Bu() {
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
const Un = ns(
    {
      __qLang: {},
    },
    {
      getLocale: Bu,
      set(e = Uu, t) {
        const n = {
          ...e,
          rtl: e.rtl === !0,
          getLocale: Bu,
        };
        {
          if (
            ((n.set = Un.set),
            Un.__langConfig === void 0 || Un.__langConfig.noHtmlAttrs !== !0)
          ) {
            const r = document.documentElement;
            r.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"),
              r.setAttribute("lang", n.isoName);
          }
          Object.assign(Un.__qLang, n);
        }
      },
      install({ $q: e, lang: t, ssrContext: n }) {
        (e.lang = Un.__qLang),
          (Un.__langConfig = e.config.lang),
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
              this.set(t || Uu));
      },
    }
  ),
  pb = {
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
  mo = ns(
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
          ts(
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
              this.set(t || pb));
      },
    }
  ),
  vb = "_q_",
  q1 = "_q_l_",
  H1 = "_q_pc_",
  yb = "_q_fo_",
  z1 = "_q_tabs_";
function K1() {}
const go = {};
let Om = !1;
function _b() {
  Om = !0;
}
function _a(e, t) {
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
      for (r = n; r-- !== 0; ) if (_a(e[r], t[r]) !== !0) return !1;
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
        if (_a(r.value[1], t.get(r.value[0])) !== !0) return !1;
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
      if (_a(e[i], t[i]) !== !0) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function pt(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== !0;
}
function G1(e) {
  return typeof e == "number" && isFinite(e);
}
const Vu = [ml, db, Je, ob, gl, Un, mo];
function pc(e, t) {
  const n = Im(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: r, ...s } = t._context;
  return Object.assign(n._context, s), n;
}
function Wu(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0);
  });
}
function bb(e, t, n) {
  (e.config.globalProperties.$q = n.$q),
    e.provide(vb, n.$q),
    Wu(n, Vu),
    t.components !== void 0 &&
      Object.values(t.components).forEach((r) => {
        pt(r) === !0 && r.name !== void 0 && e.component(r.name, r);
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((r) => {
        pt(r) === !0 && r.name !== void 0 && e.directive(r.name, r);
      }),
    t.plugins !== void 0 &&
      Wu(
        n,
        Object.values(t.plugins).filter(
          (r) => typeof r.install == "function" && Vu.includes(r) === !1
        )
      ),
    Yn.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((r) => {
          r();
        }),
          (n.$q.onSSRHydrated = () => {});
      });
}
const wb = function (e, t = {}) {
    const n = {
      version: "2.18.2",
    };
    Om === !1
      ? (t.config !== void 0 && Object.assign(go, t.config),
        (n.config = {
          ...go,
        }),
        _b())
      : (n.config = t.config || {}),
      bb(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: [],
      });
  },
  Eb = {
    name: "Quasar",
    version: "2.18.2",
    install: wb,
    lang: Un,
    iconSet: mo,
  };
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const Rr = typeof document < "u";
function Lm(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Sb(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && Lm(e.default))
  );
}
const we = Object.assign;
function ba(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = qt(s) ? s.map(e) : e(s);
  }
  return n;
}
const Ls = () => {},
  qt = Array.isArray,
  xm = /#/g,
  Cb = /&/g,
  Ib = /\//g,
  kb = /=/g,
  Tb = /\?/g,
  Mm = /\+/g,
  Pb = /%5B/g,
  Ab = /%5D/g,
  Dm = /%5E/g,
  Nb = /%60/g,
  Fm = /%7B/g,
  Rb = /%7C/g,
  $m = /%7D/g,
  Ob = /%20/g;
function vc(e) {
  return encodeURI("" + e)
    .replace(Rb, "|")
    .replace(Pb, "[")
    .replace(Ab, "]");
}
function Lb(e) {
  return vc(e).replace(Fm, "{").replace($m, "}").replace(Dm, "^");
}
function pl(e) {
  return vc(e)
    .replace(Mm, "%2B")
    .replace(Ob, "+")
    .replace(xm, "%23")
    .replace(Cb, "%26")
    .replace(Nb, "`")
    .replace(Fm, "{")
    .replace($m, "}")
    .replace(Dm, "^");
}
function xb(e) {
  return pl(e).replace(kb, "%3D");
}
function Mb(e) {
  return vc(e).replace(xm, "%23").replace(Tb, "%3F");
}
function Db(e) {
  return e == null ? "" : Mb(e).replace(Ib, "%2F");
}
function Ys(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const Fb = /\/$/,
  $b = (e) => e.replace(Fb, "");
function wa(e, t, n = "/") {
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
    (r = Wb(r ?? t, n)),
    {
      fullPath: r + (i && "?") + i + o,
      path: r,
      query: s,
      hash: Ys(o),
    }
  );
}
function Ub(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ju(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Bb(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Hr(t.matched[r], n.matched[s]) &&
    Um(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Hr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Um(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Vb(e[n], t[n])) return !1;
  return !0;
}
function Vb(e, t) {
  return qt(e) ? qu(e, t) : qt(t) ? qu(t, e) : e === t;
}
function qu(e, t) {
  return qt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function Wb(e, t) {
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
const Nn = {
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
var Xs;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Xs || (Xs = {}));
var xs;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(xs || (xs = {}));
function jb(e) {
  if (!e)
    if (Rr) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), $b(e);
}
const qb = /^[^#]+#/;
function Hb(e, t) {
  return e.replace(qb, "#") + t;
}
function zb(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const qo = () => ({
  left: window.scrollX,
  top: window.scrollY,
});
function Kb(e) {
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
    t = zb(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function Hu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const vl = new Map();
function Gb(e, t) {
  vl.set(e, t);
}
function Jb(e) {
  const t = vl.get(e);
  return vl.delete(e), t;
}
let Yb = () => location.protocol + "//" + location.host;
function Bm(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let a = s.includes(e.slice(i)) ? e.slice(i).length : 1,
      l = s.slice(a);
    return l[0] !== "/" && (l = "/" + l), ju(l, "");
  }
  return ju(n, e) + r + s;
}
function Xb(e, t, n, r) {
  let s = [],
    i = [],
    o = null;
  const a = ({ state: d }) => {
    const h = Bm(e, location),
      g = n.value,
      w = t.value;
    let k = 0;
    if (d) {
      if (((n.value = h), (t.value = d), o && o === g)) {
        o = null;
        return;
      }
      k = w ? d.position - w.position : 0;
    } else r(h);
    s.forEach((y) => {
      y(n.value, g, {
        delta: k,
        type: Xs.pop,
        direction: k ? (k > 0 ? xs.forward : xs.back) : xs.unknown,
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
        we({}, d.state, {
          scroll: qo(),
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
function zu(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? qo() : null,
  };
}
function Qb(e) {
  const { history: t, location: n } = window,
    r = {
      value: Bm(e, n),
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
          : Yb() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", d), (s.value = c);
    } catch (h) {
      console.error(h), n[u ? "replace" : "assign"](d);
    }
  }
  function o(l, c) {
    const u = we({}, t.state, zu(s.value.back, l, s.value.forward, !0), c, {
      position: s.value.position,
    });
    i(l, u, !0), (r.value = l);
  }
  function a(l, c) {
    const u = we({}, s.value, t.state, {
      forward: l,
      scroll: qo(),
    });
    i(u.current, u, !0);
    const f = we(
      {},
      zu(r.value, l, null),
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
function Zb(e) {
  e = jb(e);
  const t = Qb(e),
    n = Xb(e, t.state, t.location, t.replace);
  function r(i, o = !0) {
    o || n.pauseListeners(), history.go(i);
  }
  const s = we(
    {
      location: "",
      base: e,
      go: r,
      createHref: Hb.bind(null, e),
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
function ew(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Vm(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Wm = Symbol("");
var Ku;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Ku || (Ku = {}));
function zr(e, t) {
  return we(
    new Error(),
    {
      type: e,
      [Wm]: !0,
    },
    t
  );
}
function sn(e, t) {
  return e instanceof Error && Wm in e && (t == null || !!(e.type & t));
}
const Gu = "[^/]+?",
  tw = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0,
  },
  nw = /[.+*?^${}()[\]/\\]/g;
function rw(e, t) {
  const n = we({}, tw, t),
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
        f || (s += "/"), (s += d.value.replace(nw, "\\$&")), (h += 40);
      else if (d.type === 1) {
        const { value: g, repeatable: w, optional: k, regexp: y } = d;
        i.push({
          name: g,
          repeatable: w,
          optional: k,
        });
        const m = y || Gu;
        if (m !== Gu) {
          h += 10;
          try {
            new RegExp(`(${m})`);
          } catch (_) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${m}): ` + _.message
            );
          }
        }
        let E = w ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`;
        f || (E = k && c.length < 2 ? `(?:/${E})` : "/" + E),
          k && (E += "?"),
          (s += E),
          (h += 20),
          k && (h += -8),
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
          const { value: g, repeatable: w, optional: k } = h,
            y = g in c ? c[g] : "";
          if (qt(y) && !w)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            );
          const m = qt(y) ? y.join("/") : y;
          if (!m)
            if (k)
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
function sw(e, t) {
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
function jm(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const i = sw(r[n], s[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Ju(r)) return 1;
    if (Ju(s)) return -1;
  }
  return s.length - r.length;
}
function Ju(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const iw = {
    type: 0,
    value: "",
  },
  ow = /[a-zA-Z0-9_]/;
function aw(e) {
  if (!e) return [[]];
  if (e === "/") return [[iw]];
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
          : ow.test(l)
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
function lw(e, t, n) {
  const r = rw(aw(e.path), n),
    s = we(r, {
      record: e,
      parent: t,
      children: [],
      alias: [],
    });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function cw(e, t) {
  const n = [],
    r = new Map();
  t = Zu(
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
      w = Xu(f);
    w.aliasOf = h && h.record;
    const k = Zu(t, f),
      y = [w];
    if ("alias" in f) {
      const _ = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const T of _)
        y.push(
          Xu(
            we({}, w, {
              components: h ? h.record.components : w.components,
              path: T,
              aliasOf: h ? h.record : w,
            })
          )
        );
    }
    let m, E;
    for (const _ of y) {
      const { path: T } = _;
      if (d && T[0] !== "/") {
        const O = d.record.path,
          N = O[O.length - 1] === "/" ? "" : "/";
        _.path = d.record.path + (T && N + T);
      }
      if (
        ((m = lw(_, d, k)),
        h
          ? h.alias.push(m)
          : ((E = E || m),
            E !== m && E.alias.push(m),
            g && f.name && !Qu(m) && o(f.name)),
        qm(m) && l(m),
        w.children)
      ) {
        const O = w.children;
        for (let N = 0; N < O.length; N++) i(O[N], m, h && h.children[N]);
      }
      h = h || m;
    }
    return E
      ? () => {
          o(E);
        }
      : Ls;
  }
  function o(f) {
    if (Vm(f)) {
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
    const d = dw(f, n);
    n.splice(d, 0, f), f.record.name && !Qu(f) && r.set(f.record.name, f);
  }
  function c(f, d) {
    let h,
      g = {},
      w,
      k;
    if ("name" in f && f.name) {
      if (((h = r.get(f.name)), !h))
        throw zr(1, {
          location: f,
        });
      (k = h.record.name),
        (g = we(
          Yu(
            d.params,
            h.keys
              .filter((E) => !E.optional)
              .concat(h.parent ? h.parent.keys.filter((E) => E.optional) : [])
              .map((E) => E.name)
          ),
          f.params &&
            Yu(
              f.params,
              h.keys.map((E) => E.name)
            )
        )),
        (w = h.stringify(g));
    } else if (f.path != null)
      (w = f.path),
        (h = n.find((E) => E.re.test(w))),
        h && ((g = h.parse(w)), (k = h.record.name));
    else {
      if (((h = d.name ? r.get(d.name) : n.find((E) => E.re.test(d.path))), !h))
        throw zr(1, {
          location: f,
          currentLocation: d,
        });
      (k = h.record.name),
        (g = we({}, d.params, f.params)),
        (w = h.stringify(g));
    }
    const y = [];
    let m = h;
    for (; m; ) y.unshift(m.record), (m = m.parent);
    return {
      name: k,
      path: w,
      params: g,
      matched: y,
      meta: fw(y),
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
function Yu(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Xu(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: uw(e),
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
function uw(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Qu(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function fw(e) {
  return e.reduce((t, n) => we(t, n.meta), {});
}
function Zu(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function dw(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const i = (n + r) >> 1;
    jm(e, t[i]) < 0 ? (r = i) : (n = i + 1);
  }
  const s = hw(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r;
}
function hw(e) {
  let t = e;
  for (; (t = t.parent); ) if (qm(t) && jm(e, t) === 0) return t;
}
function qm({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function mw(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const i = r[s].replace(Mm, " "),
      o = i.indexOf("="),
      a = Ys(o < 0 ? i : i.slice(0, o)),
      l = o < 0 ? null : Ys(i.slice(o + 1));
    if (a in t) {
      let c = t[a];
      qt(c) || (c = t[a] = [c]), c.push(l);
    } else t[a] = l;
  }
  return t;
}
function ef(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = xb(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (qt(r) ? r.map((i) => i && pl(i)) : [r && pl(r)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? "&" : "") + n), i != null && (t += "=" + i));
    });
  }
  return t;
}
function gw(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = qt(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const pw = Symbol(""),
  tf = Symbol(""),
  Ho = Symbol(""),
  yc = Symbol(""),
  yl = Symbol("");
function cs() {
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
function Bn(e, t, n, r, s, i = (o) => o()) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((a, l) => {
      const c = (d) => {
          d === !1
            ? l(
                zr(4, {
                  from: n,
                  to: t,
                })
              )
            : d instanceof Error
            ? l(d)
            : ew(d)
            ? l(
                zr(2, {
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
function Ea(e, t, n, r, s = (i) => i()) {
  const i = [];
  for (const o of e)
    for (const a in o.components) {
      let l = o.components[a];
      if (!(t !== "beforeRouteEnter" && !o.instances[a]))
        if (Lm(l)) {
          const u = (l.__vccOpts || l)[t];
          u && i.push(Bn(u, n, r, o, a, s));
        } else {
          let c = l();
          i.push(() =>
            c.then((u) => {
              if (!u)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${o.path}"`
                );
              const f = Sb(u) ? u.default : u;
              (o.mods[a] = u), (o.components[a] = f);
              const h = (f.__vccOpts || f)[t];
              return h && Bn(h, n, r, o, a, s)();
            })
          );
        }
    }
  return i;
}
function nf(e) {
  const t = ft(Ho),
    n = ft(yc),
    r = M(() => {
      const l = gn(e.to);
      return t.resolve(l);
    }),
    s = M(() => {
      const { matched: l } = r.value,
        { length: c } = l,
        u = l[c - 1],
        f = n.matched;
      if (!u || !f.length) return -1;
      const d = f.findIndex(Hr.bind(null, u));
      if (d > -1) return d;
      const h = rf(l[c - 2]);
      return c > 1 && rf(u) === h && f[f.length - 1].path !== h
        ? f.findIndex(Hr.bind(null, l[c - 2]))
        : d;
    }),
    i = M(() => s.value > -1 && ww(n.params, r.value.params)),
    o = M(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Um(n.params, r.value.params)
    );
  function a(l = {}) {
    if (bw(l)) {
      const c = t[gn(e.replace) ? "replace" : "push"](gn(e.to)).catch(Ls);
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
function vw(e) {
  return e.length === 1 ? e[0] : e;
}
const yw = Xn({
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
    useLink: nf,
    setup(e, { slots: t }) {
      const n = br(nf(e)),
        { options: r } = ft(Ho),
        s = M(() => ({
          [sf(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [sf(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && vw(t.default(n));
        return e.custom
          ? i
          : U(
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
  _w = yw;
function bw(e) {
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
function ww(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!qt(s) || s.length !== r.length || r.some((i, o) => i !== s[o]))
      return !1;
  }
  return !0;
}
function rf(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const sf = (e, t, n) => e ?? t ?? n,
  Ew = Xn({
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
      const r = ft(yl),
        s = M(() => e.route || r.value),
        i = ft(tf, 0),
        o = M(() => {
          let c = gn(i);
          const { matched: u } = s.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        a = M(() => s.value.matched[o.value]);
      $i(
        tf,
        M(() => o.value + 1)
      ),
        $i(pw, a),
        $i(yl, s);
      const l = he();
      return (
        me(
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
                (!h || !Hr(u, h) || !d) &&
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
            return of(n.default, {
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
            k = U(
              d,
              we({}, g, t, {
                onVnodeUnmounted: (y) => {
                  y.component.isUnmounted && (f.instances[u] = null);
                },
                ref: l,
              })
            );
          return (
            of(n.default, {
              Component: k,
              route: c,
            }) || k
          );
        }
      );
    },
  });
function of(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Sw = Ew;
function Cw(e) {
  const t = cw(e.routes, e),
    n = e.parseQuery || mw,
    r = e.stringifyQuery || ef,
    s = e.history,
    i = cs(),
    o = cs(),
    a = cs(),
    l = Pt(Nn);
  let c = Nn;
  Rr &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = ba.bind(null, (D) => "" + D),
    f = ba.bind(null, Db),
    d = ba.bind(null, Ys);
  function h(D, X) {
    let Y, te;
    return (
      Vm(D) ? ((Y = t.getRecordMatcher(D)), (te = X)) : (te = D),
      t.addRoute(te, Y)
    );
  }
  function g(D) {
    const X = t.getRecordMatcher(D);
    X && t.removeRoute(X);
  }
  function w() {
    return t.getRoutes().map((D) => D.record);
  }
  function k(D) {
    return !!t.getRecordMatcher(D);
  }
  function y(D, X) {
    if (((X = we({}, X || l.value)), typeof D == "string")) {
      const R = wa(n, D, X.path),
        V = t.resolve(
          {
            path: R.path,
          },
          X
        ),
        q = s.createHref(R.fullPath);
      return we(R, V, {
        params: d(V.params),
        hash: Ys(R.hash),
        redirectedFrom: void 0,
        href: q,
      });
    }
    let Y;
    if (D.path != null)
      Y = we({}, D, {
        path: wa(n, D.path, X.path).path,
      });
    else {
      const R = we({}, D.params);
      for (const V in R) R[V] == null && delete R[V];
      (Y = we({}, D, {
        params: f(R),
      })),
        (X.params = f(X.params));
    }
    const te = t.resolve(Y, X),
      ye = D.hash || "";
    te.params = u(d(te.params));
    const b = Ub(
        r,
        we({}, D, {
          hash: Lb(ye),
          path: te.path,
        })
      ),
      S = s.createHref(b);
    return we(
      {
        fullPath: b,
        hash: ye,
        query: r === ef ? gw(D.query) : D.query || {},
      },
      te,
      {
        redirectedFrom: void 0,
        href: S,
      }
    );
  }
  function m(D) {
    return typeof D == "string" ? wa(n, D, l.value.path) : we({}, D);
  }
  function E(D, X) {
    if (c !== D)
      return zr(8, {
        from: X,
        to: D,
      });
  }
  function _(D) {
    return N(D);
  }
  function T(D) {
    return _(
      we(m(D), {
        replace: !0,
      })
    );
  }
  function O(D) {
    const X = D.matched[D.matched.length - 1];
    if (X && X.redirect) {
      const { redirect: Y } = X;
      let te = typeof Y == "function" ? Y(D) : Y;
      return (
        typeof te == "string" &&
          ((te =
            te.includes("?") || te.includes("#")
              ? (te = m(te))
              : {
                  path: te,
                }),
          (te.params = {})),
        we(
          {
            query: D.query,
            hash: D.hash,
            params: te.path != null ? {} : D.params,
          },
          te
        )
      );
    }
  }
  function N(D, X) {
    const Y = (c = y(D)),
      te = l.value,
      ye = D.state,
      b = D.force,
      S = D.replace === !0,
      R = O(Y);
    if (R)
      return N(
        we(m(R), {
          state: typeof R == "object" ? we({}, ye, R.state) : ye,
          force: b,
          replace: S,
        }),
        X || Y
      );
    const V = Y;
    V.redirectedFrom = X;
    let q;
    return (
      !b &&
        Bb(r, te, Y) &&
        ((q = zr(16, {
          to: V,
          from: te,
        })),
        de(te, te, !0, !1)),
      (q ? Promise.resolve(q) : L(V, te))
        .catch((j) => (sn(j) ? (sn(j, 2) ? j : ue(j)) : K(j, V, te)))
        .then((j) => {
          if (j) {
            if (sn(j, 2))
              return N(
                we(
                  {
                    replace: S,
                  },
                  m(j.to),
                  {
                    state:
                      typeof j.to == "object" ? we({}, ye, j.to.state) : ye,
                    force: b,
                  }
                ),
                X || V
              );
          } else j = C(V, te, !0, S, ye);
          return B(V, te, j), j;
        })
    );
  }
  function W(D, X) {
    const Y = E(D, X);
    return Y ? Promise.reject(Y) : Promise.resolve();
  }
  function I(D) {
    const X = Ne.values().next().value;
    return X && typeof X.runWithContext == "function"
      ? X.runWithContext(D)
      : D();
  }
  function L(D, X) {
    let Y;
    const [te, ye, b] = Iw(D, X);
    Y = Ea(te.reverse(), "beforeRouteLeave", D, X);
    for (const R of te)
      R.leaveGuards.forEach((V) => {
        Y.push(Bn(V, D, X));
      });
    const S = W.bind(null, D, X);
    return (
      Y.push(S),
      ne(Y)
        .then(() => {
          Y = [];
          for (const R of i.list()) Y.push(Bn(R, D, X));
          return Y.push(S), ne(Y);
        })
        .then(() => {
          Y = Ea(ye, "beforeRouteUpdate", D, X);
          for (const R of ye)
            R.updateGuards.forEach((V) => {
              Y.push(Bn(V, D, X));
            });
          return Y.push(S), ne(Y);
        })
        .then(() => {
          Y = [];
          for (const R of b)
            if (R.beforeEnter)
              if (qt(R.beforeEnter))
                for (const V of R.beforeEnter) Y.push(Bn(V, D, X));
              else Y.push(Bn(R.beforeEnter, D, X));
          return Y.push(S), ne(Y);
        })
        .then(
          () => (
            D.matched.forEach((R) => (R.enterCallbacks = {})),
            (Y = Ea(b, "beforeRouteEnter", D, X, I)),
            Y.push(S),
            ne(Y)
          )
        )
        .then(() => {
          Y = [];
          for (const R of o.list()) Y.push(Bn(R, D, X));
          return Y.push(S), ne(Y);
        })
        .catch((R) => (sn(R, 8) ? R : Promise.reject(R)))
    );
  }
  function B(D, X, Y) {
    a.list().forEach((te) => I(() => te(D, X, Y)));
  }
  function C(D, X, Y, te, ye) {
    const b = E(D, X);
    if (b) return b;
    const S = X === Nn,
      R = Rr ? history.state : {};
    Y &&
      (te || S
        ? s.replace(
            D.fullPath,
            we(
              {
                scroll: S && R && R.scroll,
              },
              ye
            )
          )
        : s.push(D.fullPath, ye)),
      (l.value = D),
      de(D, X, Y, S),
      ue();
  }
  let G;
  function $() {
    G ||
      (G = s.listen((D, X, Y) => {
        if (!Me.listening) return;
        const te = y(D),
          ye = O(te);
        if (ye) {
          N(
            we(ye, {
              replace: !0,
              force: !0,
            }),
            te
          ).catch(Ls);
          return;
        }
        c = te;
        const b = l.value;
        Rr && Gb(Hu(b.fullPath, Y.delta), qo()),
          L(te, b)
            .catch((S) =>
              sn(S, 12)
                ? S
                : sn(S, 2)
                ? (N(
                    we(m(S.to), {
                      force: !0,
                    }),
                    te
                  )
                    .then((R) => {
                      sn(R, 20) &&
                        !Y.delta &&
                        Y.type === Xs.pop &&
                        s.go(-1, !1);
                    })
                    .catch(Ls),
                  Promise.reject())
                : (Y.delta && s.go(-Y.delta, !1), K(S, te, b))
            )
            .then((S) => {
              (S = S || C(te, b, !1)),
                S &&
                  (Y.delta && !sn(S, 8)
                    ? s.go(-Y.delta, !1)
                    : Y.type === Xs.pop && sn(S, 20) && s.go(-1, !1)),
                B(te, b, S);
            })
            .catch(Ls);
      }));
  }
  let ee = cs(),
    Z = cs(),
    J;
  function K(D, X, Y) {
    ue(D);
    const te = Z.list();
    return (
      te.length ? te.forEach((ye) => ye(D, X, Y)) : console.error(D),
      Promise.reject(D)
    );
  }
  function ie() {
    return J && l.value !== Nn
      ? Promise.resolve()
      : new Promise((D, X) => {
          ee.add([D, X]);
        });
  }
  function ue(D) {
    return (
      J ||
        ((J = !D),
        $(),
        ee.list().forEach(([X, Y]) => (D ? Y(D) : X())),
        ee.reset()),
      D
    );
  }
  function de(D, X, Y, te) {
    const { scrollBehavior: ye } = e;
    if (!Rr || !ye) return Promise.resolve();
    const b =
      (!Y && Jb(Hu(D.fullPath, 0))) ||
      ((te || !Y) && history.state && history.state.scroll) ||
      null;
    return ut()
      .then(() => ye(D, X, b))
      .then((S) => S && Kb(S))
      .catch((S) => K(S, D, X));
  }
  const z = (D) => s.go(D);
  let pe;
  const Ne = new Set(),
    Me = {
      currentRoute: l,
      listening: !0,
      addRoute: h,
      removeRoute: g,
      clearRoutes: t.clearRoutes,
      hasRoute: k,
      getRoutes: w,
      resolve: y,
      options: e,
      push: _,
      replace: T,
      go: z,
      back: () => z(-1),
      forward: () => z(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: Z.add,
      isReady: ie,
      install(D) {
        const X = this;
        D.component("RouterLink", _w),
          D.component("RouterView", Sw),
          (D.config.globalProperties.$router = X),
          Object.defineProperty(D.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => gn(l),
          }),
          Rr &&
            !pe &&
            l.value === Nn &&
            ((pe = !0), _(s.location).catch((ye) => {}));
        const Y = {};
        for (const ye in Nn)
          Object.defineProperty(Y, ye, {
            get: () => l.value[ye],
            enumerable: !0,
          });
        D.provide(Ho, X), D.provide(yc, kh(Y)), D.provide(yl, l);
        const te = D.unmount;
        Ne.add(D),
          (D.unmount = function () {
            Ne.delete(D),
              Ne.size < 1 &&
                ((c = Nn),
                G && G(),
                (G = null),
                (l.value = Nn),
                (pe = !1),
                (J = !1)),
              te();
          });
      },
    };
  function ne(D) {
    return D.reduce((X, Y) => X.then(() => I(Y)), Promise.resolve());
  }
  return Me;
}
function Iw(e, t) {
  const n = [],
    r = [],
    s = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < i; o++) {
    const a = t.matched[o];
    a && (e.matched.find((c) => Hr(c, a)) ? r.push(a) : n.push(a));
    const l = e.matched[o];
    l && (t.matched.find((c) => Hr(c, l)) || s.push(l));
  }
  return [n, r, s];
}
function J1() {
  return ft(Ho);
}
function kw(e) {
  return ft(yc);
}
/*!
 * shared v11.1.11
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function Tw(e, t) {
  typeof console < "u" &&
    (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const po = typeof window < "u",
  Qn = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  Pw = (e, t, n) =>
    Aw({
      l: e,
      k: t,
      s: n,
    }),
  Aw = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029")
      .replace(/\u0027/g, "\\u0027"),
  Ve = (e) => typeof e == "number" && isFinite(e),
  Nw = (e) => _c(e) === "[object Date]",
  vo = (e) => _c(e) === "[object RegExp]",
  zo = (e) => ve(e) && Object.keys(e).length === 0,
  nt = Object.assign,
  Rw = Object.create,
  ke = (e = null) => Rw(e);
function af(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/\//g, "&#x2F;")
    .replace(/=/g, "&#x3D;");
}
function lf(e) {
  return e
    .replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function Ow(e) {
  return (
    (e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, i) => `${s}="${lf(i)}"`)),
    (e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, i) => `${s}='${lf(i)}'`)),
    /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) &&
      (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")),
    [
      /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
      /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi,
    ].forEach((r) => {
      e = e.replace(r, "$1javascript&#58;");
    }),
    e
  );
}
const Lw = Object.prototype.hasOwnProperty;
function Ft(e, t) {
  return Lw.call(e, t);
}
const $e = Array.isArray,
  Oe = (e) => typeof e == "function",
  re = (e) => typeof e == "string",
  Le = (e) => typeof e == "boolean",
  be = (e) => e !== null && typeof e == "object",
  xw = (e) => be(e) && Oe(e.then) && Oe(e.catch),
  Hm = Object.prototype.toString,
  _c = (e) => Hm.call(e),
  ve = (e) => _c(e) === "[object Object]",
  Mw = (e) =>
    e == null
      ? ""
      : $e(e) || (ve(e) && e.toString === Hm)
      ? JSON.stringify(e, null, 2)
      : String(e);
function bc(e, t = "") {
  return e.reduce((n, r, s) => (s === 0 ? n + r : n + t + r), "");
}
const ki = (e) => !be(e) || $e(e);
function Wi(e, t) {
  if (ki(e) || ki(t)) throw new Error("Invalid value");
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
        ki(s[i]) || ki(r[i])
          ? (s[i] = r[i])
          : n.push({
              src: r[i],
              des: s[i],
            }));
    });
  }
}
/*!
 * message-compiler v11.1.11
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function Dw(e, t, n) {
  return {
    line: e,
    column: t,
    offset: n,
  };
}
function _l(e, t, n) {
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
  },
  Fw = 17;
function Ko(e, t, n = {}) {
  const { domain: r, messages: s, args: i } = n,
    o = e,
    a = new SyntaxError(String(o));
  return (a.code = e), t && (a.location = t), (a.domain = r), a;
}
function $w(e) {
  throw e;
}
const on = " ",
  Uw = "\r",
  lt = `
`,
  Bw = "\u2028",
  Vw = "\u2029";
function Ww(e) {
  const t = e;
  let n = 0,
    r = 1,
    s = 1,
    i = 0;
  const o = (N) => t[N] === Uw && t[N + 1] === lt,
    a = (N) => t[N] === lt,
    l = (N) => t[N] === Vw,
    c = (N) => t[N] === Bw,
    u = (N) => o(N) || a(N) || l(N) || c(N),
    f = () => n,
    d = () => r,
    h = () => s,
    g = () => i,
    w = (N) => (o(N) || l(N) || c(N) ? lt : t[N]),
    k = () => w(n),
    y = () => w(n + i);
  function m() {
    return (i = 0), u(n) && (r++, (s = 0)), o(n) && n++, n++, s++, t[n];
  }
  function E() {
    return o(n + i) && i++, i++, t[n + i];
  }
  function _() {
    (n = 0), (r = 1), (s = 1), (i = 0);
  }
  function T(N = 0) {
    i = N;
  }
  function O() {
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
    currentChar: k,
    currentPeek: y,
    next: m,
    peek: E,
    reset: _,
    resetPeek: T,
    skipToPeek: O,
  };
}
const Rn = void 0,
  jw = ".",
  cf = "'",
  qw = "tokenizer";
function Hw(e, t = {}) {
  const n = t.location !== !1,
    r = Ww(e),
    s = () => r.index(),
    i = () => Dw(r.line(), r.column(), r.index()),
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
  function f(p, v, A, ...x) {
    const Q = c();
    if (((v.column += A), (v.offset += A), u)) {
      const H = n ? _l(Q.startLoc, v) : null,
        P = Ko(p, H, {
          domain: qw,
          args: x,
        });
      u(P);
    }
  }
  function d(p, v, A) {
    (p.endLoc = i()), (p.currentType = v);
    const x = {
      type: v,
    };
    return (
      n && (x.loc = _l(p.startLoc, p.endLoc)), A != null && (x.value = A), x
    );
  }
  const h = (p) => d(p, 13);
  function g(p, v) {
    return p.currentChar() === v
      ? (p.next(), v)
      : (f(Ce.EXPECTED_TOKEN, i(), 0, v), "");
  }
  function w(p) {
    let v = "";
    for (; p.currentPeek() === on || p.currentPeek() === lt; )
      (v += p.currentPeek()), p.peek();
    return v;
  }
  function k(p) {
    const v = w(p);
    return p.skipToPeek(), v;
  }
  function y(p) {
    if (p === Rn) return !1;
    const v = p.charCodeAt(0);
    return (v >= 97 && v <= 122) || (v >= 65 && v <= 90) || v === 95;
  }
  function m(p) {
    if (p === Rn) return !1;
    const v = p.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function E(p, v) {
    const { currentType: A } = v;
    if (A !== 2) return !1;
    w(p);
    const x = y(p.currentPeek());
    return p.resetPeek(), x;
  }
  function _(p, v) {
    const { currentType: A } = v;
    if (A !== 2) return !1;
    w(p);
    const x = p.currentPeek() === "-" ? p.peek() : p.currentPeek(),
      Q = m(x);
    return p.resetPeek(), Q;
  }
  function T(p, v) {
    const { currentType: A } = v;
    if (A !== 2) return !1;
    w(p);
    const x = p.currentPeek() === cf;
    return p.resetPeek(), x;
  }
  function O(p, v) {
    const { currentType: A } = v;
    if (A !== 7) return !1;
    w(p);
    const x = p.currentPeek() === ".";
    return p.resetPeek(), x;
  }
  function N(p, v) {
    const { currentType: A } = v;
    if (A !== 8) return !1;
    w(p);
    const x = y(p.currentPeek());
    return p.resetPeek(), x;
  }
  function W(p, v) {
    const { currentType: A } = v;
    if (!(A === 7 || A === 11)) return !1;
    w(p);
    const x = p.currentPeek() === ":";
    return p.resetPeek(), x;
  }
  function I(p, v) {
    const { currentType: A } = v;
    if (A !== 9) return !1;
    const x = () => {
        const H = p.currentPeek();
        return H === "{"
          ? y(p.peek())
          : H === "@" || H === "|" || H === ":" || H === "." || H === on || !H
          ? !1
          : H === lt
          ? (p.peek(), x())
          : B(p, !1);
      },
      Q = x();
    return p.resetPeek(), Q;
  }
  function L(p) {
    w(p);
    const v = p.currentPeek() === "|";
    return p.resetPeek(), v;
  }
  function B(p, v = !0) {
    const A = (Q = !1, H = "") => {
        const P = p.currentPeek();
        return P === "{" || P === "@" || !P
          ? Q
          : P === "|"
          ? !(H === on || H === lt)
          : P === on
          ? (p.peek(), A(!0, on))
          : P === lt
          ? (p.peek(), A(!0, lt))
          : !0;
      },
      x = A();
    return v && p.resetPeek(), x;
  }
  function C(p, v) {
    const A = p.currentChar();
    return A === Rn ? Rn : v(A) ? (p.next(), A) : null;
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
  function Z(p) {
    return C(p, ee);
  }
  function J(p) {
    const v = p.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function K(p) {
    return C(p, J);
  }
  function ie(p) {
    const v = p.charCodeAt(0);
    return (
      (v >= 48 && v <= 57) || (v >= 65 && v <= 70) || (v >= 97 && v <= 102)
    );
  }
  function ue(p) {
    return C(p, ie);
  }
  function de(p) {
    let v = "",
      A = "";
    for (; (v = K(p)); ) A += v;
    return A;
  }
  function z(p) {
    let v = "";
    for (;;) {
      const A = p.currentChar();
      if (A === "{" || A === "}" || A === "@" || A === "|" || !A) break;
      if (A === on || A === lt)
        if (B(p)) (v += A), p.next();
        else {
          if (L(p)) break;
          (v += A), p.next();
        }
      else (v += A), p.next();
    }
    return v;
  }
  function pe(p) {
    k(p);
    let v = "",
      A = "";
    for (; (v = Z(p)); ) A += v;
    return (
      p.currentChar() === Rn && f(Ce.UNTERMINATED_CLOSING_BRACE, i(), 0), A
    );
  }
  function Ne(p) {
    k(p);
    let v = "";
    return (
      p.currentChar() === "-" ? (p.next(), (v += `-${de(p)}`)) : (v += de(p)),
      p.currentChar() === Rn && f(Ce.UNTERMINATED_CLOSING_BRACE, i(), 0),
      v
    );
  }
  function Me(p) {
    return p !== cf && p !== lt;
  }
  function ne(p) {
    k(p), g(p, "'");
    let v = "",
      A = "";
    for (; (v = C(p, Me)); ) v === "\\" ? (A += D(p)) : (A += v);
    const x = p.currentChar();
    return x === lt || x === Rn
      ? (f(Ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0),
        x === lt && (p.next(), g(p, "'")),
        A)
      : (g(p, "'"), A);
  }
  function D(p) {
    const v = p.currentChar();
    switch (v) {
      case "\\":
      case "'":
        return p.next(), `\\${v}`;
      case "u":
        return X(p, v, 4);
      case "U":
        return X(p, v, 6);
      default:
        return f(Ce.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, v), "";
    }
  }
  function X(p, v, A) {
    g(p, v);
    let x = "";
    for (let Q = 0; Q < A; Q++) {
      const H = ue(p);
      if (!H) {
        f(
          Ce.INVALID_UNICODE_ESCAPE_SEQUENCE,
          i(),
          0,
          `\\${v}${x}${p.currentChar()}`
        );
        break;
      }
      x += H;
    }
    return `\\${v}${x}`;
  }
  function Y(p) {
    return p !== "{" && p !== "}" && p !== on && p !== lt;
  }
  function te(p) {
    k(p);
    let v = "",
      A = "";
    for (; (v = C(p, Y)); ) A += v;
    return A;
  }
  function ye(p) {
    let v = "",
      A = "";
    for (; (v = $(p)); ) A += v;
    return A;
  }
  function b(p) {
    const v = (A) => {
      const x = p.currentChar();
      return x === "{" ||
        x === "@" ||
        x === "|" ||
        x === "(" ||
        x === ")" ||
        !x ||
        x === on
        ? A
        : ((A += x), p.next(), v(A));
    };
    return v("");
  }
  function S(p) {
    k(p);
    const v = g(p, "|");
    return k(p), v;
  }
  function R(p, v) {
    let A = null;
    switch (p.currentChar()) {
      case "{":
        return (
          v.braceNest >= 1 && f(Ce.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0),
          p.next(),
          (A = d(v, 2, "{")),
          k(p),
          v.braceNest++,
          A
        );
      case "}":
        return (
          v.braceNest > 0 &&
            v.currentType === 2 &&
            f(Ce.EMPTY_PLACEHOLDER, i(), 0),
          p.next(),
          (A = d(v, 3, "}")),
          v.braceNest--,
          v.braceNest > 0 && k(p),
          v.inLinked && v.braceNest === 0 && (v.inLinked = !1),
          A
        );
      case "@":
        return (
          v.braceNest > 0 && f(Ce.UNTERMINATED_CLOSING_BRACE, i(), 0),
          (A = V(p, v) || h(v)),
          (v.braceNest = 0),
          A
        );
      default: {
        let Q = !0,
          H = !0,
          P = !0;
        if (L(p))
          return (
            v.braceNest > 0 && f(Ce.UNTERMINATED_CLOSING_BRACE, i(), 0),
            (A = d(v, 1, S(p))),
            (v.braceNest = 0),
            (v.inLinked = !1),
            A
          );
        if (
          v.braceNest > 0 &&
          (v.currentType === 4 || v.currentType === 5 || v.currentType === 6)
        )
          return (
            f(Ce.UNTERMINATED_CLOSING_BRACE, i(), 0), (v.braceNest = 0), q(p, v)
          );
        if ((Q = E(p, v))) return (A = d(v, 4, pe(p))), k(p), A;
        if ((H = _(p, v))) return (A = d(v, 5, Ne(p))), k(p), A;
        if ((P = T(p, v))) return (A = d(v, 6, ne(p))), k(p), A;
        if (!Q && !H && !P)
          return (
            (A = d(v, 12, te(p))),
            f(Ce.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, A.value),
            k(p),
            A
          );
        break;
      }
    }
    return A;
  }
  function V(p, v) {
    const { currentType: A } = v;
    let x = null;
    const Q = p.currentChar();
    switch (
      ((A === 7 || A === 8 || A === 11 || A === 9) &&
        (Q === lt || Q === on) &&
        f(Ce.INVALID_LINKED_FORMAT, i(), 0),
      Q)
    ) {
      case "@":
        return p.next(), (x = d(v, 7, "@")), (v.inLinked = !0), x;
      case ".":
        return k(p), p.next(), d(v, 8, ".");
      case ":":
        return k(p), p.next(), d(v, 9, ":");
      default:
        return L(p)
          ? ((x = d(v, 1, S(p))), (v.braceNest = 0), (v.inLinked = !1), x)
          : O(p, v) || W(p, v)
          ? (k(p), V(p, v))
          : N(p, v)
          ? (k(p), d(v, 11, ye(p)))
          : I(p, v)
          ? (k(p), Q === "{" ? R(p, v) || x : d(v, 10, b(p)))
          : (A === 7 && f(Ce.INVALID_LINKED_FORMAT, i(), 0),
            (v.braceNest = 0),
            (v.inLinked = !1),
            q(p, v));
    }
  }
  function q(p, v) {
    let A = {
      type: 13,
    };
    if (v.braceNest > 0) return R(p, v) || h(v);
    if (v.inLinked) return V(p, v) || h(v);
    switch (p.currentChar()) {
      case "{":
        return R(p, v) || h(v);
      case "}":
        return f(Ce.UNBALANCED_CLOSING_BRACE, i(), 0), p.next(), d(v, 3, "}");
      case "@":
        return V(p, v) || h(v);
      default: {
        if (L(p))
          return (A = d(v, 1, S(p))), (v.braceNest = 0), (v.inLinked = !1), A;
        if (B(p)) return d(v, 0, z(p));
        break;
      }
    }
    return A;
  }
  function j() {
    const { currentType: p, offset: v, startLoc: A, endLoc: x } = l;
    return (
      (l.lastType = p),
      (l.lastOffset = v),
      (l.lastStartLoc = A),
      (l.lastEndLoc = x),
      (l.offset = s()),
      (l.startLoc = i()),
      r.currentChar() === Rn ? d(l, 13) : q(r, l)
    );
  }
  return {
    nextToken: j,
    currentOffset: s,
    currentPosition: i,
    context: c,
  };
}
const zw = "parser",
  Kw = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Gw(e, t, n) {
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
function Jw(e = {}) {
  const t = e.location !== !1,
    { onError: n } = e;
  function r(y, m, E, _, ...T) {
    const O = y.currentPosition();
    if (((O.offset += _), (O.column += _), n)) {
      const N = t ? _l(E, O) : null,
        W = Ko(m, N, {
          domain: zw,
          args: T,
        });
      n(W);
    }
  }
  function s(y, m, E) {
    const _ = {
      type: y,
    };
    return (
      t &&
        ((_.start = m),
        (_.end = m),
        (_.loc = {
          start: E,
          end: E,
        })),
      _
    );
  }
  function i(y, m, E, _) {
    t && ((y.end = m), y.loc && (y.loc.end = E));
  }
  function o(y, m) {
    const E = y.context(),
      _ = s(3, E.offset, E.startLoc);
    return (_.value = m), i(_, y.currentOffset(), y.currentPosition()), _;
  }
  function a(y, m) {
    const E = y.context(),
      { lastOffset: _, lastStartLoc: T } = E,
      O = s(5, _, T);
    return (
      (O.index = parseInt(m, 10)),
      y.nextToken(),
      i(O, y.currentOffset(), y.currentPosition()),
      O
    );
  }
  function l(y, m) {
    const E = y.context(),
      { lastOffset: _, lastStartLoc: T } = E,
      O = s(4, _, T);
    return (
      (O.key = m),
      y.nextToken(),
      i(O, y.currentOffset(), y.currentPosition()),
      O
    );
  }
  function c(y, m) {
    const E = y.context(),
      { lastOffset: _, lastStartLoc: T } = E,
      O = s(9, _, T);
    return (
      (O.value = m.replace(Kw, Gw)),
      y.nextToken(),
      i(O, y.currentOffset(), y.currentPosition()),
      O
    );
  }
  function u(y) {
    const m = y.nextToken(),
      E = y.context(),
      { lastOffset: _, lastStartLoc: T } = E,
      O = s(8, _, T);
    return m.type !== 11
      ? (r(y, Ce.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0),
        (O.value = ""),
        i(O, _, T),
        {
          nextConsumeToken: m,
          node: O,
        })
      : (m.value == null &&
          r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Kt(m)),
        (O.value = m.value || ""),
        i(O, y.currentOffset(), y.currentPosition()),
        {
          node: O,
        });
  }
  function f(y, m) {
    const E = y.context(),
      _ = s(7, E.offset, E.startLoc);
    return (_.value = m), i(_, y.currentOffset(), y.currentPosition()), _;
  }
  function d(y) {
    const m = y.context(),
      E = s(6, m.offset, m.startLoc);
    let _ = y.nextToken();
    if (_.type === 8) {
      const T = u(y);
      (E.modifier = T.node), (_ = T.nextConsumeToken || y.nextToken());
    }
    switch (
      (_.type !== 9 &&
        r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Kt(_)),
      (_ = y.nextToken()),
      _.type === 2 && (_ = y.nextToken()),
      _.type)
    ) {
      case 10:
        _.value == null &&
          r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Kt(_)),
          (E.key = f(y, _.value || ""));
        break;
      case 4:
        _.value == null &&
          r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Kt(_)),
          (E.key = l(y, _.value || ""));
        break;
      case 5:
        _.value == null &&
          r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Kt(_)),
          (E.key = a(y, _.value || ""));
        break;
      case 6:
        _.value == null &&
          r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Kt(_)),
          (E.key = c(y, _.value || ""));
        break;
      default: {
        r(y, Ce.UNEXPECTED_EMPTY_LINKED_KEY, m.lastStartLoc, 0);
        const T = y.context(),
          O = s(7, T.offset, T.startLoc);
        return (
          (O.value = ""),
          i(O, T.offset, T.startLoc),
          (E.key = O),
          i(E, T.offset, T.startLoc),
          {
            nextConsumeToken: _,
            node: E,
          }
        );
      }
    }
    return (
      i(E, y.currentOffset(), y.currentPosition()),
      {
        node: E,
      }
    );
  }
  function h(y) {
    const m = y.context(),
      E = m.currentType === 1 ? y.currentOffset() : m.offset,
      _ = m.currentType === 1 ? m.endLoc : m.startLoc,
      T = s(2, E, _);
    T.items = [];
    let O = null;
    do {
      const I = O || y.nextToken();
      switch (((O = null), I.type)) {
        case 0:
          I.value == null &&
            r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Kt(I)),
            T.items.push(o(y, I.value || ""));
          break;
        case 5:
          I.value == null &&
            r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Kt(I)),
            T.items.push(a(y, I.value || ""));
          break;
        case 4:
          I.value == null &&
            r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Kt(I)),
            T.items.push(l(y, I.value || ""));
          break;
        case 6:
          I.value == null &&
            r(y, Ce.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Kt(I)),
            T.items.push(c(y, I.value || ""));
          break;
        case 7: {
          const L = d(y);
          T.items.push(L.node), (O = L.nextConsumeToken || null);
          break;
        }
      }
    } while (m.currentType !== 13 && m.currentType !== 1);
    const N = m.currentType === 1 ? m.lastOffset : y.currentOffset(),
      W = m.currentType === 1 ? m.lastEndLoc : y.currentPosition();
    return i(T, N, W), T;
  }
  function g(y, m, E, _) {
    const T = y.context();
    let O = _.items.length === 0;
    const N = s(1, m, E);
    (N.cases = []), N.cases.push(_);
    do {
      const W = h(y);
      O || (O = W.items.length === 0), N.cases.push(W);
    } while (T.currentType !== 13);
    return (
      O && r(y, Ce.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0),
      i(N, y.currentOffset(), y.currentPosition()),
      N
    );
  }
  function w(y) {
    const m = y.context(),
      { offset: E, startLoc: _ } = m,
      T = h(y);
    return m.currentType === 13 ? T : g(y, E, _, T);
  }
  function k(y) {
    const m = Hw(y, nt({}, e)),
      E = m.context(),
      _ = s(0, E.offset, E.startLoc);
    return (
      t && _.loc && (_.loc.source = y),
      (_.body = w(m)),
      e.onCacheKey && (_.cacheKey = e.onCacheKey(y)),
      E.currentType !== 13 &&
        r(
          m,
          Ce.UNEXPECTED_LEXICAL_ANALYSIS,
          E.lastStartLoc,
          0,
          y[E.offset] || ""
        ),
      i(_, m.currentOffset(), m.currentPosition()),
      _
    );
  }
  return {
    parse: k,
  };
}
function Kt(e) {
  if (e.type === 13) return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Yw(e, t = {}) {
  const n = {
    ast: e,
    helpers: new Set(),
  };
  return {
    context: () => n,
    helper: (i) => (n.helpers.add(i), i),
  };
}
function uf(e, t) {
  for (let n = 0; n < e.length; n++) wc(e[n], t);
}
function wc(e, t) {
  switch (e.type) {
    case 1:
      uf(e.cases, t), t.helper("plural");
      break;
    case 2:
      uf(e.items, t);
      break;
    case 6: {
      wc(e.key, t), t.helper("linked"), t.helper("type");
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
function Xw(e, t = {}) {
  const n = Yw(e);
  n.helper("normalize"), e.body && wc(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Qw(e) {
  const t = e.body;
  return t.type === 2 ? ff(t) : t.cases.forEach((n) => ff(n)), e;
}
function ff(e) {
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
      e.static = bc(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function Or(e) {
  switch (((e.t = e.type), e.type)) {
    case 0: {
      const t = e;
      Or(t.body), (t.b = t.body), delete t.body;
      break;
    }
    case 1: {
      const t = e,
        n = t.cases;
      for (let r = 0; r < n.length; r++) Or(n[r]);
      (t.c = n), delete t.cases;
      break;
    }
    case 2: {
      const t = e,
        n = t.items;
      for (let r = 0; r < n.length; r++) Or(n[r]);
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
      Or(t.key),
        (t.k = t.key),
        delete t.key,
        t.modifier && (Or(t.modifier), (t.m = t.modifier), delete t.modifier);
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
function Zw(e, t) {
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
  function l(w, k) {
    o.code += w;
  }
  function c(w, k = !0) {
    const y = k ? r : "";
    l(s ? y + "  ".repeat(w) : y);
  }
  function u(w = !0) {
    const k = ++o.indentLevel;
    w && c(k);
  }
  function f(w = !0) {
    const k = --o.indentLevel;
    w && c(k);
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
function eE(e, t) {
  const { helper: n } = e;
  e.push(`${n("linked")}(`),
    Kr(e, t.key),
    t.modifier
      ? (e.push(", "), Kr(e, t.modifier), e.push(", _type"))
      : e.push(", undefined, _type"),
    e.push(")");
}
function tE(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n("normalize")}([`), e.indent(r());
  const s = t.items.length;
  for (let i = 0; i < s && (Kr(e, t.items[i]), i !== s - 1); i++) e.push(", ");
  e.deindent(r()), e.push("])");
}
function nE(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(r());
    const s = t.cases.length;
    for (let i = 0; i < s && (Kr(e, t.cases[i]), i !== s - 1); i++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function rE(e, t) {
  t.body ? Kr(e, t.body) : e.push("null");
}
function Kr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      rE(e, t);
      break;
    case 1:
      nE(e, t);
      break;
    case 2:
      tE(e, t);
      break;
    case 6:
      eE(e, t);
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
const sE = (e, t = {}) => {
  const n = re(t.mode) ? t.mode : "normal",
    r = re(t.filename) ? t.filename : "message.intl";
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
    a = Zw(e, {
      filename: r,
      breakLineCode: s,
      needIndent: i,
    });
  a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    a.indent(i),
    o.length > 0 &&
      (a.push(
        `const { ${bc(
          o.map((u) => `${u}: _${u}`),
          ", "
        )} } = ctx`
      ),
      a.newline()),
    a.push("return "),
    Kr(a, e),
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
function iE(e, t = {}) {
  const n = nt({}, t),
    r = !!n.jit,
    s = !!n.minify,
    i = n.optimize == null ? !0 : n.optimize,
    a = Jw(n).parse(e);
  return r
    ? (i && Qw(a),
      s && Or(a),
      {
        ast: a,
        code: "",
      })
    : (Xw(a, n), sE(a, n));
}
/*!
 * core-base v11.1.11
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function Qt(e) {
  return be(e) && Ec(e) === 0 && (Ft(e, "b") || Ft(e, "body"));
}
const zm = ["b", "body"];
function oE(e) {
  return Zn(e, zm);
}
const Km = ["c", "cases"];
function aE(e) {
  return Zn(e, Km, []);
}
const Gm = ["s", "static"];
function lE(e) {
  return Zn(e, Gm);
}
const Jm = ["i", "items"];
function cE(e) {
  return Zn(e, Jm, []);
}
const Ym = ["t", "type"];
function Ec(e) {
  return Zn(e, Ym);
}
const Xm = ["v", "value"];
function Ti(e, t) {
  const n = Zn(e, Xm);
  if (n != null) return n;
  throw Qs(t);
}
const Qm = ["m", "modifier"];
function uE(e) {
  return Zn(e, Qm);
}
const Zm = ["k", "key"];
function fE(e) {
  const t = Zn(e, Zm);
  if (t) return t;
  throw Qs(6);
}
function Zn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (Ft(e, s) && e[s] != null) return e[s];
  }
  return n;
}
const eg = [...zm, ...Km, ...Gm, ...Jm, ...Zm, ...Qm, ...Xm, ...Ym];
function Qs(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Sa(e) {
  return (n) => dE(n, e);
}
function dE(e, t) {
  const n = oE(t);
  if (n == null) throw Qs(0);
  if (Ec(n) === 1) {
    const i = aE(n);
    return e.plural(i.reduce((o, a) => [...o, df(e, a)], []));
  } else return df(e, n);
}
function df(e, t) {
  const n = lE(t);
  if (n != null) return e.type === "text" ? n : e.normalize([n]);
  {
    const r = cE(t).reduce((s, i) => [...s, bl(e, i)], []);
    return e.normalize(r);
  }
}
function bl(e, t) {
  const n = Ec(t);
  switch (n) {
    case 3:
      return Ti(t, n);
    case 9:
      return Ti(t, n);
    case 4: {
      const r = t;
      if (Ft(r, "k") && r.k) return e.interpolate(e.named(r.k));
      if (Ft(r, "key") && r.key) return e.interpolate(e.named(r.key));
      throw Qs(n);
    }
    case 5: {
      const r = t;
      if (Ft(r, "i") && Ve(r.i)) return e.interpolate(e.list(r.i));
      if (Ft(r, "index") && Ve(r.index)) return e.interpolate(e.list(r.index));
      throw Qs(n);
    }
    case 6: {
      const r = t,
        s = uE(r),
        i = fE(r);
      return e.linked(bl(e, i), s ? bl(e, s) : void 0, e.type);
    }
    case 7:
      return Ti(t, n);
    case 8:
      return Ti(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const hE = (e) => e;
let Pi = ke();
function mE(e, t = {}) {
  let n = !1;
  const r = t.onError || $w;
  return (
    (t.onError = (s) => {
      (n = !0), r(s);
    }),
    {
      ...iE(e, t),
      detectError: n,
    }
  );
}
function gE(e, t) {
  if (re(e)) {
    Le(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || hE)(e),
      s = Pi[r];
    if (s) return s;
    const { ast: i, detectError: o } = mE(e, {
        ...t,
        location: !1,
        jit: !0,
      }),
      a = Sa(i);
    return o ? a : (Pi[r] = a);
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Pi[n];
      return r || (Pi[n] = Sa(e));
    } else return Sa(e);
  }
}
const fn = {
    INVALID_ARGUMENT: Fw,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23,
  },
  pE = 24;
function dn(e) {
  return Ko(e, null, void 0);
}
function Sc(e, t) {
  return t.locale != null ? hf(t.locale) : hf(e.locale);
}
let Ca;
function hf(e) {
  if (re(e)) return e;
  if (Oe(e)) {
    if (e.resolvedOnce && Ca != null) return Ca;
    if (e.constructor.name === "Function") {
      const t = e();
      if (xw(t)) throw dn(fn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return (Ca = t);
    } else throw dn(fn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else throw dn(fn.NOT_SUPPORT_LOCALE_TYPE);
}
function vE(e, t, n) {
  return [
    ...new Set([
      n,
      ...($e(t) ? t : be(t) ? Object.keys(t) : re(t) ? [t] : [n]),
    ]),
  ];
}
function tg(e, t, n) {
  const r = re(n) ? n : yo,
    s = e;
  s.__localeChainCache || (s.__localeChainCache = new Map());
  let i = s.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let o = [n];
    for (; $e(o); ) o = mf(i, o, t);
    const a = $e(t) || !ve(t) ? t : t.default ? t.default : null;
    (o = re(a) ? [a] : a),
      $e(o) && mf(i, o, !1),
      s.__localeChainCache.set(r, i);
  }
  return i;
}
function mf(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && Le(r); s++) {
    const i = t[s];
    re(i) && (r = yE(e, t[s], n));
  }
  return r;
}
function yE(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const i = s.join("-");
    (r = _E(e, i, n)), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function _E(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), ($e(n) || ve(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const er = [];
er[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7],
};
er[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7],
};
er[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0],
};
er[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1],
};
er[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0],
};
er[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0],
};
er[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0],
};
const bE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function wE(e) {
  return bE.test(e);
}
function EE(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function SE(e) {
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
function CE(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e))
    ? !1
    : wE(t)
    ? EE(t)
    : "*" + t;
}
function IE(e) {
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
        if (((s = 0), o === void 0 || ((o = CE(o)), o === !1))) return !1;
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
        ((l = SE(i)),
        (f = er[r]),
        (c = f[l] || f.l || 8),
        c === 8 ||
          ((r = c[0]),
          c[1] !== void 0 && ((u = d[c[1]]), u && ((a = i), u() === !1))))
      )
        return;
      if (r === 7) return t;
    }
}
const gf = new Map();
function kE(e, t) {
  return be(e) ? e[t] : null;
}
function TE(e, t) {
  if (!be(e)) return null;
  let n = gf.get(t);
  if ((n || ((n = IE(t)), n && gf.set(t, n)), !n)) return null;
  const r = n.length;
  let s = e,
    i = 0;
  for (; i < r; ) {
    const o = n[i];
    if (eg.includes(o) && Qt(s)) return null;
    const a = s[o];
    if (a === void 0 || Oe(s)) return null;
    (s = a), i++;
  }
  return s;
}
const PE = "11.1.11",
  Go = -1,
  yo = "en-US",
  pf = "",
  vf = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function AE() {
  return {
    upper: (e, t) =>
      t === "text" && re(e)
        ? e.toUpperCase()
        : t === "vnode" && be(e) && "__v_isVNode" in e
        ? e.children.toUpperCase()
        : e,
    lower: (e, t) =>
      t === "text" && re(e)
        ? e.toLowerCase()
        : t === "vnode" && be(e) && "__v_isVNode" in e
        ? e.children.toLowerCase()
        : e,
    capitalize: (e, t) =>
      t === "text" && re(e)
        ? vf(e)
        : t === "vnode" && be(e) && "__v_isVNode" in e
        ? vf(e.children)
        : e,
  };
}
let ng;
function NE(e) {
  ng = e;
}
let rg;
function RE(e) {
  rg = e;
}
let sg;
function OE(e) {
  sg = e;
}
let ig = null;
const yf = (e) => {
    ig = e;
  },
  LE = () => ig;
let _f = 0;
function xE(e = {}) {
  const t = Oe(e.onWarn) ? e.onWarn : Tw,
    n = re(e.version) ? e.version : PE,
    r = re(e.locale) || Oe(e.locale) ? e.locale : yo,
    s = Oe(r) ? yo : r,
    i =
      $e(e.fallbackLocale) ||
      ve(e.fallbackLocale) ||
      re(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : s,
    o = ve(e.messages) ? e.messages : Ia(s),
    a = ve(e.datetimeFormats) ? e.datetimeFormats : Ia(s),
    l = ve(e.numberFormats) ? e.numberFormats : Ia(s),
    c = nt(ke(), e.modifiers, AE()),
    u = e.pluralRules || ke(),
    f = Oe(e.missing) ? e.missing : null,
    d = Le(e.missingWarn) || vo(e.missingWarn) ? e.missingWarn : !0,
    h = Le(e.fallbackWarn) || vo(e.fallbackWarn) ? e.fallbackWarn : !0,
    g = !!e.fallbackFormat,
    w = !!e.unresolving,
    k = Oe(e.postTranslation) ? e.postTranslation : null,
    y = ve(e.processor) ? e.processor : null,
    m = Le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    E = !!e.escapeParameter,
    _ = Oe(e.messageCompiler) ? e.messageCompiler : ng,
    T = Oe(e.messageResolver) ? e.messageResolver : rg || kE,
    O = Oe(e.localeFallbacker) ? e.localeFallbacker : sg || vE,
    N = be(e.fallbackContext) ? e.fallbackContext : void 0,
    W = e,
    I = be(W.__datetimeFormatters) ? W.__datetimeFormatters : new Map(),
    L = be(W.__numberFormatters) ? W.__numberFormatters : new Map(),
    B = be(W.__meta) ? W.__meta : {};
  _f++;
  const C = {
    version: n,
    cid: _f,
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
    postTranslation: k,
    processor: y,
    warnHtmlMessage: m,
    escapeParameter: E,
    messageCompiler: _,
    messageResolver: T,
    localeFallbacker: O,
    fallbackContext: N,
    onWarn: t,
    __meta: B,
  };
  return (
    (C.datetimeFormats = a),
    (C.numberFormats = l),
    (C.__datetimeFormatters = I),
    (C.__numberFormatters = L),
    C
  );
}
const Ia = (e) => ({
  [e]: ke(),
});
function Cc(e, t, n, r, s) {
  const { missing: i, onWarn: o } = e;
  if (i !== null) {
    const a = i(e, n, t, s);
    return re(a) ? a : t;
  } else return t;
}
function us(e, t, n) {
  const r = e;
  (r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
function ME(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function DE(e, t) {
  const n = t.indexOf(e);
  if (n === -1) return !1;
  for (let r = n + 1; r < t.length; r++) if (ME(e, t[r])) return !0;
  return !1;
}
function bf(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: i,
      localeFallbacker: o,
    } = e,
    { __datetimeFormatters: a } = e,
    [l, c, u, f] = wl(...t),
    d = Le(u.missingWarn) ? u.missingWarn : e.missingWarn;
  Le(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const h = !!u.part,
    g = Sc(e, u),
    w = o(e, s, g);
  if (!re(l) || l === "") return new Intl.DateTimeFormat(g, f).format(c);
  let k = {},
    y,
    m = null;
  const E = "datetime format";
  for (
    let O = 0;
    O < w.length && ((y = w[O]), (k = n[y] || {}), (m = k[l]), !ve(m));
    O++
  )
    Cc(e, l, y, d, E);
  if (!ve(m) || !re(y)) return r ? Go : l;
  let _ = `${y}__${l}`;
  zo(f) || (_ = `${_}__${JSON.stringify(f)}`);
  let T = a.get(_);
  return (
    T || ((T = new Intl.DateTimeFormat(y, nt({}, m, f))), a.set(_, T)),
    h ? T.formatToParts(c) : T.format(c)
  );
}
const og = [
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
function wl(...e) {
  const [t, n, r, s] = e,
    i = ke();
  let o = ke(),
    a;
  if (re(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l) throw dn(fn.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3]
      ? l[3].trim().startsWith("T")
        ? `${l[1].trim()}${l[3].trim()}`
        : `${l[1].trim()}T${l[3].trim()}`
      : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString();
    } catch {
      throw dn(fn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Nw(t)) {
    if (isNaN(t.getTime())) throw dn(fn.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (Ve(t)) a = t;
  else throw dn(fn.INVALID_ARGUMENT);
  return (
    re(n)
      ? (i.key = n)
      : ve(n) &&
        Object.keys(n).forEach((l) => {
          og.includes(l) ? (o[l] = n[l]) : (i[l] = n[l]);
        }),
    re(r) ? (i.locale = r) : ve(r) && (o = r),
    ve(s) && (o = s),
    [i.key || "", a, i, o]
  );
}
function wf(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i);
  }
}
function Ef(e, ...t) {
  const {
      numberFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: i,
      localeFallbacker: o,
    } = e,
    { __numberFormatters: a } = e,
    [l, c, u, f] = El(...t),
    d = Le(u.missingWarn) ? u.missingWarn : e.missingWarn;
  Le(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const h = !!u.part,
    g = Sc(e, u),
    w = o(e, s, g);
  if (!re(l) || l === "") return new Intl.NumberFormat(g, f).format(c);
  let k = {},
    y,
    m = null;
  const E = "number format";
  for (
    let O = 0;
    O < w.length && ((y = w[O]), (k = n[y] || {}), (m = k[l]), !ve(m));
    O++
  )
    Cc(e, l, y, d, E);
  if (!ve(m) || !re(y)) return r ? Go : l;
  let _ = `${y}__${l}`;
  zo(f) || (_ = `${_}__${JSON.stringify(f)}`);
  let T = a.get(_);
  return (
    T || ((T = new Intl.NumberFormat(y, nt({}, m, f))), a.set(_, T)),
    h ? T.formatToParts(c) : T.format(c)
  );
}
const ag = [
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
function El(...e) {
  const [t, n, r, s] = e,
    i = ke();
  let o = ke();
  if (!Ve(t)) throw dn(fn.INVALID_ARGUMENT);
  const a = t;
  return (
    re(n)
      ? (i.key = n)
      : ve(n) &&
        Object.keys(n).forEach((l) => {
          ag.includes(l) ? (o[l] = n[l]) : (i[l] = n[l]);
        }),
    re(r) ? (i.locale = r) : ve(r) && (o = r),
    ve(s) && (o = s),
    [i.key || "", a, i, o]
  );
}
function Sf(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    r.__numberFormatters.has(i) && r.__numberFormatters.delete(i);
  }
}
const FE = (e) => e,
  $E = (e) => "",
  UE = "text",
  BE = (e) => (e.length === 0 ? "" : bc(e)),
  VE = Mw;
function Cf(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function WE(e) {
  const t = Ve(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ve(e.named.count) || Ve(e.named.n))
    ? Ve(e.named.count)
      ? e.named.count
      : Ve(e.named.n)
      ? e.named.n
      : t
    : t;
}
function jE(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function qE(e = {}) {
  const t = e.locale,
    n = WE(e),
    r =
      be(e.pluralRules) && re(t) && Oe(e.pluralRules[t])
        ? e.pluralRules[t]
        : Cf,
    s = be(e.pluralRules) && re(t) && Oe(e.pluralRules[t]) ? Cf : void 0,
    i = (y) => y[r(n, y.length, s)],
    o = e.list || [],
    a = (y) => o[y],
    l = e.named || ke();
  Ve(e.pluralIndex) && jE(n, l);
  const c = (y) => l[y];
  function u(y, m) {
    const E = Oe(e.messages)
      ? e.messages(y, !!m)
      : be(e.messages)
      ? e.messages[y]
      : !1;
    return E || (e.parent ? e.parent.message(y) : $E);
  }
  const f = (y) => (e.modifiers ? e.modifiers[y] : FE),
    d =
      ve(e.processor) && Oe(e.processor.normalize) ? e.processor.normalize : BE,
    h =
      ve(e.processor) && Oe(e.processor.interpolate)
        ? e.processor.interpolate
        : VE,
    g = ve(e.processor) && re(e.processor.type) ? e.processor.type : UE,
    k = {
      list: a,
      named: c,
      plural: i,
      linked: (y, ...m) => {
        const [E, _] = m;
        let T = "text",
          O = "";
        m.length === 1
          ? be(E)
            ? ((O = E.modifier || O), (T = E.type || T))
            : re(E) && (O = E || O)
          : m.length === 2 && (re(E) && (O = E || O), re(_) && (T = _ || T));
        const N = u(y, !0)(k),
          W = T === "vnode" && $e(N) && O ? N[0] : N;
        return O ? f(O)(W, T) : W;
      },
      message: u,
      type: g,
      interpolate: h,
      normalize: d,
      values: nt(ke(), o, l),
    };
  return k;
}
const If = () => "",
  pn = (e) => Oe(e);
function kf(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: s,
      messageCompiler: i,
      fallbackLocale: o,
      messages: a,
    } = e,
    [l, c] = Sl(...t),
    u = Le(c.missingWarn) ? c.missingWarn : e.missingWarn,
    f = Le(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn,
    d = Le(c.escapeParameter) ? c.escapeParameter : e.escapeParameter,
    h = !!c.resolvedMessage,
    g =
      re(c.default) || Le(c.default)
        ? Le(c.default)
          ? i
            ? l
            : () => l
          : c.default
        : n
        ? i
          ? l
          : () => l
        : null,
    w = n || (g != null && (re(g) || Oe(g))),
    k = Sc(e, c);
  d && HE(c);
  let [y, m, E] = h ? [l, k, a[k] || ke()] : lg(e, l, k, o, f, u),
    _ = y,
    T = l;
  if (
    (!h && !(re(_) || Qt(_) || pn(_)) && w && ((_ = g), (T = _)),
    !h && (!(re(_) || Qt(_) || pn(_)) || !re(m)))
  )
    return s ? Go : l;
  let O = !1;
  const N = () => {
      O = !0;
    },
    W = pn(_) ? _ : cg(e, l, m, _, T, N);
  if (O) return _;
  const I = GE(e, m, E, c),
    L = qE(I),
    B = zE(e, W, L);
  let C = r ? r(B, l) : B;
  return d && re(C) && (C = Ow(C)), C;
}
function HE(e) {
  $e(e.list)
    ? (e.list = e.list.map((t) => (re(t) ? af(t) : t)))
    : be(e.named) &&
      Object.keys(e.named).forEach((t) => {
        re(e.named[t]) && (e.named[t] = af(e.named[t]));
      });
}
function lg(e, t, n, r, s, i) {
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
    !(re(h) || Qt(h) || pn(h)));
    w++
  )
    if (!DE(d, u)) {
      const k = Cc(e, t, d, i, g);
      k !== t && (h = k);
    }
  return [h, d, f];
}
function cg(e, t, n, r, s, i) {
  const { messageCompiler: o, warnHtmlMessage: a } = e;
  if (pn(r)) {
    const c = r;
    return (c.locale = c.locale || n), (c.key = c.key || t), c;
  }
  if (o == null) {
    const c = () => r;
    return (c.locale = n), (c.key = t), c;
  }
  const l = o(r, KE(e, n, s, r, a, i));
  return (l.locale = n), (l.key = t), (l.source = r), l;
}
function zE(e, t, n) {
  return t(n);
}
function Sl(...e) {
  const [t, n, r] = e,
    s = ke();
  if (!re(t) && !Ve(t) && !pn(t) && !Qt(t)) throw dn(fn.INVALID_ARGUMENT);
  const i = Ve(t) ? String(t) : (pn(t), t);
  return (
    Ve(n)
      ? (s.plural = n)
      : re(n)
      ? (s.default = n)
      : ve(n) && !zo(n)
      ? (s.named = n)
      : $e(n) && (s.list = n),
    Ve(r) ? (s.plural = r) : re(r) ? (s.default = r) : ve(r) && nt(s, r),
    [i, s]
  );
}
function KE(e, t, n, r, s, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      throw (i && i(o), o);
    },
    onCacheKey: (o) => Pw(t, n, o),
  };
}
function GE(e, t, n, r) {
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
          const [, , k] = lg(u || e, h, t, a, l, c);
          w = o(k, h);
        }
        if (re(w) || Qt(w)) {
          let k = !1;
          const m = cg(e, h, t, w, h, () => {
            k = !0;
          });
          return k ? If : m;
        } else return pn(w) ? w : If;
      },
    };
  return (
    e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    Ve(r.plural) && (d.pluralIndex = r.plural),
    d
  );
}
/*!
 * vue-i18n v11.1.11
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
const JE = "11.1.11",
  At = {
    UNEXPECTED_RETURN_TYPE: pE,
    INVALID_ARGUMENT: 25,
    MUST_BE_CALL_SETUP_TOP: 26,
    NOT_INSTALLED: 27,
    REQUIRED_VALUE: 28,
    INVALID_VALUE: 29,
    NOT_INSTALLED_WITH_PROVIDE: 31,
    UNEXPECTED_ERROR: 32,
  };
function Ht(e, ...t) {
  return Ko(e, null, void 0);
}
const Cl = Qn("__translateVNode"),
  Il = Qn("__datetimeParts"),
  kl = Qn("__numberParts"),
  YE = Qn("__setPluralRules"),
  XE = Qn("__injectWithOption"),
  Tl = Qn("__dispose");
function Zs(e) {
  if (!be(e) || Qt(e)) return e;
  for (const t in e)
    if (Ft(e, t))
      if (!t.includes(".")) be(e[t]) && Zs(e[t]);
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
            (Qt(s)
              ? eg.includes(n[r]) || delete e[t]
              : ((s[n[r]] = e[t]), delete e[t])),
          !Qt(s))
        ) {
          const o = s[n[r]];
          be(o) && Zs(o);
        }
      }
  return e;
}
function ug(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: i } = t,
    o = ve(n)
      ? n
      : $e(r)
      ? ke()
      : {
          [e]: ke(),
        };
  if (
    ($e(r) &&
      r.forEach((a) => {
        if ("locale" in a && "resource" in a) {
          const { locale: l, resource: c } = a;
          l ? ((o[l] = o[l] || ke()), Wi(c, o[l])) : Wi(c, o);
        } else re(a) && Wi(JSON.parse(a), o);
      }),
    s == null && i)
  )
    for (const a in o) Ft(o, a) && Zs(o[a]);
  return o;
}
function QE(e) {
  return e.type;
}
function ZE(e, t, n) {
  let r = be(t.messages) ? t.messages : ke();
  "__i18nGlobal" in n &&
    (r = ug(e.locale.value, {
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
function Tf(e) {
  return Ue(li, null, e, 0);
}
const Pf = () => [],
  e0 = () => !1;
let Af = 0;
function Nf(e) {
  return (t, n, r, s) => e(n, r, Se() || void 0, s);
}
function fg(e = {}) {
  const { __root: t, __injectWithOption: n } = e,
    r = t === void 0,
    s = e.flatJson,
    i = po ? he : Pt;
  let o = Le(e.inheritLocale) ? e.inheritLocale : !0;
  const a = i(t && o ? t.locale.value : re(e.locale) ? e.locale : yo),
    l = i(
      t && o
        ? t.fallbackLocale.value
        : re(e.fallbackLocale) ||
          $e(e.fallbackLocale) ||
          ve(e.fallbackLocale) ||
          e.fallbackLocale === !1
        ? e.fallbackLocale
        : a.value
    ),
    c = i(ug(a.value, e)),
    u = i(
      ve(e.datetimeFormats)
        ? e.datetimeFormats
        : {
            [a.value]: {},
          }
    ),
    f = i(
      ve(e.numberFormats)
        ? e.numberFormats
        : {
            [a.value]: {},
          }
    );
  let d = t
      ? t.missingWarn
      : Le(e.missingWarn) || vo(e.missingWarn)
      ? e.missingWarn
      : !0,
    h = t
      ? t.fallbackWarn
      : Le(e.fallbackWarn) || vo(e.fallbackWarn)
      ? e.fallbackWarn
      : !0,
    g = t ? t.fallbackRoot : Le(e.fallbackRoot) ? e.fallbackRoot : !0,
    w = !!e.fallbackFormat,
    k = Oe(e.missing) ? e.missing : null,
    y = Oe(e.missing) ? Nf(e.missing) : null,
    m = Oe(e.postTranslation) ? e.postTranslation : null,
    E = t ? t.warnHtmlMessage : Le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    _ = !!e.escapeParameter;
  const T = t ? t.modifiers : ve(e.modifiers) ? e.modifiers : {};
  let O = e.pluralRules || (t && t.pluralRules),
    N;
  (N = (() => {
    r && yf(null);
    const P = {
      version: JE,
      locale: a.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: T,
      pluralRules: O,
      missing: y === null ? void 0 : y,
      missingWarn: d,
      fallbackWarn: h,
      fallbackFormat: w,
      unresolving: !0,
      postTranslation: m === null ? void 0 : m,
      warnHtmlMessage: E,
      escapeParameter: _,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: {
        framework: "vue",
      },
    };
    (P.datetimeFormats = u.value),
      (P.numberFormats = f.value),
      (P.__datetimeFormatters = ve(N) ? N.__datetimeFormatters : void 0),
      (P.__numberFormatters = ve(N) ? N.__numberFormatters : void 0);
    const F = xE(P);
    return r && yf(F), F;
  })()),
    us(N, a.value, l.value);
  function I() {
    return [a.value, l.value, c.value, u.value, f.value];
  }
  const L = M({
      get: () => a.value,
      set: (P) => {
        (N.locale = P), (a.value = P);
      },
    }),
    B = M({
      get: () => l.value,
      set: (P) => {
        (N.fallbackLocale = P), (l.value = P), us(N, a.value, P);
      },
    }),
    C = M(() => c.value),
    G = M(() => u.value),
    $ = M(() => f.value);
  function ee() {
    return Oe(m) ? m : null;
  }
  function Z(P) {
    (m = P), (N.postTranslation = P);
  }
  function J() {
    return k;
  }
  function K(P) {
    P !== null && (y = Nf(P)), (k = P), (N.missing = y);
  }
  const ie = (P, F, se, le, ge, je) => {
    I();
    let De;
    try {
      r || (N.fallbackContext = t ? LE() : void 0), (De = P(N));
    } finally {
      r || (N.fallbackContext = void 0);
    }
    if (
      (se !== "translate exists" && Ve(De) && De === Go) ||
      (se === "translate exists" && !De)
    ) {
      const [Et, Lt] = F();
      return t && g ? le(t) : ge(Et);
    } else {
      if (je(De)) return De;
      throw Ht(At.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ue(...P) {
    return ie(
      (F) => Reflect.apply(kf, null, [F, ...P]),
      () => Sl(...P),
      "translate",
      (F) => Reflect.apply(F.t, F, [...P]),
      (F) => F,
      (F) => re(F)
    );
  }
  function de(...P) {
    const [F, se, le] = P;
    if (le && !be(le)) throw Ht(At.INVALID_ARGUMENT);
    return ue(
      F,
      se,
      nt(
        {
          resolvedMessage: !0,
        },
        le || {}
      )
    );
  }
  function z(...P) {
    return ie(
      (F) => Reflect.apply(bf, null, [F, ...P]),
      () => wl(...P),
      "datetime format",
      (F) => Reflect.apply(F.d, F, [...P]),
      () => pf,
      (F) => re(F) || $e(F)
    );
  }
  function pe(...P) {
    return ie(
      (F) => Reflect.apply(Ef, null, [F, ...P]),
      () => El(...P),
      "number format",
      (F) => Reflect.apply(F.n, F, [...P]),
      () => pf,
      (F) => re(F) || $e(F)
    );
  }
  function Ne(P) {
    return P.map((F) => (re(F) || Ve(F) || Le(F) ? Tf(String(F)) : F));
  }
  const ne = {
    normalize: Ne,
    interpolate: (P) => P,
    type: "vnode",
  };
  function D(...P) {
    return ie(
      (F) => {
        let se;
        const le = F;
        try {
          (le.processor = ne), (se = Reflect.apply(kf, null, [le, ...P]));
        } finally {
          le.processor = null;
        }
        return se;
      },
      () => Sl(...P),
      "translate",
      (F) => F[Cl](...P),
      (F) => [Tf(F)],
      (F) => $e(F)
    );
  }
  function X(...P) {
    return ie(
      (F) => Reflect.apply(Ef, null, [F, ...P]),
      () => El(...P),
      "number format",
      (F) => F[kl](...P),
      Pf,
      (F) => re(F) || $e(F)
    );
  }
  function Y(...P) {
    return ie(
      (F) => Reflect.apply(bf, null, [F, ...P]),
      () => wl(...P),
      "datetime format",
      (F) => F[Il](...P),
      Pf,
      (F) => re(F) || $e(F)
    );
  }
  function te(P) {
    (O = P), (N.pluralRules = O);
  }
  function ye(P, F) {
    return ie(
      () => {
        if (!P) return !1;
        const se = re(F) ? F : a.value,
          le = R(se),
          ge = N.messageResolver(le, P);
        return Qt(ge) || pn(ge) || re(ge);
      },
      () => [P],
      "translate exists",
      (se) => Reflect.apply(se.te, se, [P, F]),
      e0,
      (se) => Le(se)
    );
  }
  function b(P) {
    let F = null;
    const se = tg(N, l.value, a.value);
    for (let le = 0; le < se.length; le++) {
      const ge = c.value[se[le]] || {},
        je = N.messageResolver(ge, P);
      if (je != null) {
        F = je;
        break;
      }
    }
    return F;
  }
  function S(P) {
    const F = b(P);
    return F ?? (t ? t.tm(P) || {} : {});
  }
  function R(P) {
    return c.value[P] || {};
  }
  function V(P, F) {
    if (s) {
      const se = {
        [P]: F,
      };
      for (const le in se) Ft(se, le) && Zs(se[le]);
      F = se[P];
    }
    (c.value[P] = F), (N.messages = c.value);
  }
  function q(P, F) {
    c.value[P] = c.value[P] || {};
    const se = {
      [P]: F,
    };
    if (s) for (const le in se) Ft(se, le) && Zs(se[le]);
    (F = se[P]), Wi(F, c.value[P]), (N.messages = c.value);
  }
  function j(P) {
    return u.value[P] || {};
  }
  function p(P, F) {
    (u.value[P] = F), (N.datetimeFormats = u.value), wf(N, P, F);
  }
  function v(P, F) {
    (u.value[P] = nt(u.value[P] || {}, F)),
      (N.datetimeFormats = u.value),
      wf(N, P, F);
  }
  function A(P) {
    return f.value[P] || {};
  }
  function x(P, F) {
    (f.value[P] = F), (N.numberFormats = f.value), Sf(N, P, F);
  }
  function Q(P, F) {
    (f.value[P] = nt(f.value[P] || {}, F)),
      (N.numberFormats = f.value),
      Sf(N, P, F);
  }
  Af++,
    t &&
      po &&
      (me(t.locale, (P) => {
        o && ((a.value = P), (N.locale = P), us(N, a.value, l.value));
      }),
      me(t.fallbackLocale, (P) => {
        o && ((l.value = P), (N.fallbackLocale = P), us(N, a.value, l.value));
      }));
  const H = {
    id: Af,
    locale: L,
    fallbackLocale: B,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(P) {
      (o = P),
        P &&
          t &&
          ((a.value = t.locale.value),
          (l.value = t.fallbackLocale.value),
          us(N, a.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: C,
    get modifiers() {
      return T;
    },
    get pluralRules() {
      return O || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(P) {
      (d = P), (N.missingWarn = d);
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(P) {
      (h = P), (N.fallbackWarn = h);
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(P) {
      g = P;
    },
    get fallbackFormat() {
      return w;
    },
    set fallbackFormat(P) {
      (w = P), (N.fallbackFormat = w);
    },
    get warnHtmlMessage() {
      return E;
    },
    set warnHtmlMessage(P) {
      (E = P), (N.warnHtmlMessage = P);
    },
    get escapeParameter() {
      return _;
    },
    set escapeParameter(P) {
      (_ = P), (N.escapeParameter = P);
    },
    t: ue,
    getLocaleMessage: R,
    setLocaleMessage: V,
    mergeLocaleMessage: q,
    getPostTranslationHandler: ee,
    setPostTranslationHandler: Z,
    getMissingHandler: J,
    setMissingHandler: K,
    [YE]: te,
  };
  return (
    (H.datetimeFormats = G),
    (H.numberFormats = $),
    (H.rt = de),
    (H.te = ye),
    (H.tm = S),
    (H.d = z),
    (H.n = pe),
    (H.getDateTimeFormat = j),
    (H.setDateTimeFormat = p),
    (H.mergeDateTimeFormat = v),
    (H.getNumberFormat = A),
    (H.setNumberFormat = x),
    (H.mergeNumberFormat = Q),
    (H[XE] = n),
    (H[Cl] = D),
    (H[Il] = Y),
    (H[kl] = X),
    H
  );
}
const Ic = {
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
function t0({ slots: e }, t) {
  return t.length === 1 && t[0] === "default"
    ? (e.default ? e.default() : []).reduce(
        (r, s) => [...r, ...(s.type === ot ? s.children : [s])],
        []
      )
    : t.reduce((n, r) => {
        const s = e[r];
        return s && (n[r] = s()), n;
      }, ke());
}
function dg() {
  return ot;
}
const n0 = Xn({
    name: "i18n-t",
    props: nt(
      {
        keypath: {
          type: String,
          required: !0,
        },
        plural: {
          type: [Number, String],
          validator: (e) => Ve(e) || !isNaN(e),
        },
      },
      Ic
    ),
    setup(e, t) {
      const { slots: n, attrs: r } = t,
        s =
          e.i18n ||
          Jo({
            useScope: e.scope,
            __useComponent: !0,
          });
      return () => {
        const i = Object.keys(n).filter((f) => f[0] !== "_"),
          o = ke();
        e.locale && (o.locale = e.locale),
          e.plural !== void 0 &&
            (o.plural = re(e.plural) ? +e.plural : e.plural);
        const a = t0(t, i),
          l = s[Cl](e.keypath, a, o),
          c = nt(ke(), r),
          u = re(e.tag) || be(e.tag) ? e.tag : dg();
        return U(u, c, l);
      };
    },
  }),
  Rf = n0;
function r0(e) {
  return $e(e) && !re(e[0]);
}
function hg(e, t, n, r) {
  const { slots: s, attrs: i } = t;
  return () => {
    const o = {
      part: !0,
    };
    let a = ke();
    e.locale && (o.locale = e.locale),
      re(e.format)
        ? (o.key = e.format)
        : be(e.format) &&
          (re(e.format.key) && (o.key = e.format.key),
          (a = Object.keys(e.format).reduce(
            (d, h) =>
              n.includes(h)
                ? nt(ke(), d, {
                    [h]: e.format[h],
                  })
                : d,
            ke()
          )));
    const l = r(e.value, o, a);
    let c = [o.key];
    $e(l)
      ? (c = l.map((d, h) => {
          const g = s[d.type],
            w = g
              ? g({
                  [d.type]: d.value,
                  index: h,
                  parts: l,
                })
              : [d.value];
          return r0(w) && (w[0].key = `${d.type}-${h}`), w;
        }))
      : re(l) && (c = [l]);
    const u = nt(ke(), i),
      f = re(e.tag) || be(e.tag) ? e.tag : dg();
    return U(f, u, c);
  };
}
const s0 = Xn({
    name: "i18n-n",
    props: nt(
      {
        value: {
          type: Number,
          required: !0,
        },
        format: {
          type: [String, Object],
        },
      },
      Ic
    ),
    setup(e, t) {
      const n =
        e.i18n ||
        Jo({
          useScope: e.scope,
          __useComponent: !0,
        });
      return hg(e, t, ag, (...r) => n[kl](...r));
    },
  }),
  Of = s0;
function i0(e, t) {
  const n = e;
  if (e.mode === "composition") return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function o0(e) {
  const t = (o) => {
    const { instance: a, value: l } = o;
    if (!a || !a.$) throw Ht(At.UNEXPECTED_ERROR);
    const c = i0(e, a.$),
      u = Lf(l);
    return [Reflect.apply(c.t, c, [...xf(u)]), c];
  };
  return {
    created: (o, a) => {
      const [l, c] = t(a);
      po &&
        e.global === c &&
        (o.__i18nWatcher = me(c.locale, () => {
          a.instance && a.instance.$forceUpdate();
        })),
        (o.__composer = c),
        (o.textContent = l);
    },
    unmounted: (o) => {
      po &&
        o.__i18nWatcher &&
        (o.__i18nWatcher(), (o.__i18nWatcher = void 0), delete o.__i18nWatcher),
        o.__composer && ((o.__composer = void 0), delete o.__composer);
    },
    beforeUpdate: (o, { value: a }) => {
      if (o.__composer) {
        const l = o.__composer,
          c = Lf(a);
        o.textContent = Reflect.apply(l.t, l, [...xf(c)]);
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
function Lf(e) {
  if (re(e))
    return {
      path: e,
    };
  if (ve(e)) {
    if (!("path" in e)) throw Ht(At.REQUIRED_VALUE, "path");
    return e;
  } else throw Ht(At.INVALID_VALUE);
}
function xf(e) {
  const { path: t, locale: n, args: r, choice: s, plural: i } = e,
    o = {},
    a = r || {};
  return (
    re(n) && (o.locale = n),
    Ve(s) && (o.plural = s),
    Ve(i) && (o.plural = i),
    [t, a, o]
  );
}
function a0(e, t, ...n) {
  const r = ve(n[0]) ? n[0] : {};
  (Le(r.globalInstall) ? r.globalInstall : !0) &&
    ([Rf.name, "I18nT"].forEach((i) => e.component(i, Rf)),
    [Of.name, "I18nN"].forEach((i) => e.component(i, Of)),
    [Df.name, "I18nD"].forEach((i) => e.component(i, Df))),
    e.directive("t", o0(t));
}
const l0 = Qn("global-vue-i18n");
function Y1(e = {}) {
  const t = Le(e.globalInjection) ? e.globalInjection : !0,
    n = new Map(),
    [r, s] = c0(e),
    i = Qn("");
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
        ve(f[0]))
      ) {
        const g = f[0];
        (c.__composerExtend = g.__composerExtend),
          (c.__vueI18nExtend = g.__vueI18nExtend);
      }
      let d = null;
      t && (d = v0(u, c.global)), a0(u, c, ...f);
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
function Jo(e = {}) {
  const t = Se();
  if (t == null) throw Ht(At.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw Ht(At.NOT_INSTALLED);
  const n = u0(t),
    r = d0(n),
    s = QE(t),
    i = f0(e, s);
  if (i === "global") return ZE(r, e, s), r;
  if (i === "parent") {
    let l = h0(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const o = n;
  let a = o.__getInstance(t);
  if (a == null) {
    const l = nt({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n),
      r && (l.__root = r),
      (a = fg(l)),
      o.__composerExtend && (a[Tl] = o.__composerExtend(a)),
      g0(o, t, a),
      o.__setInstance(t, a);
  }
  return a;
}
function c0(e, t) {
  const n = ec(),
    r = n.run(() => fg(e));
  if (r == null) throw Ht(At.UNEXPECTED_ERROR);
  return [n, r];
}
function u0(e) {
  const t = ft(e.isCE ? l0 : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Ht(e.isCE ? At.NOT_INSTALLED_WITH_PROVIDE : At.UNEXPECTED_ERROR);
  return t;
}
function f0(e, t) {
  return zo(e)
    ? "__i18n" in t
      ? "local"
      : "global"
    : e.useScope
    ? e.useScope
    : "local";
}
function d0(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function h0(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let i = m0(t, n);
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
function m0(e, t = !1) {
  return e == null ? null : (t && e.vnode.ctx) || e.parent;
}
function g0(e, t, n) {
  Rt(() => {}, t),
    Bo(() => {
      const r = n;
      e.__deleteInstance(t);
      const s = r[Tl];
      s && (s(), delete r[Tl]);
    }, t);
}
const p0 = ["locale", "fallbackLocale", "availableLocales"],
  Mf = ["t", "rt", "d", "n", "tm", "te"];
function v0(e, t) {
  const n = Object.create(null);
  return (
    p0.forEach((s) => {
      const i = Object.getOwnPropertyDescriptor(t, s);
      if (!i) throw Ht(At.UNEXPECTED_ERROR);
      const o = Ae(i.value)
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
    Mf.forEach((s) => {
      const i = Object.getOwnPropertyDescriptor(t, s);
      if (!i || !i.value) throw Ht(At.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${s}`, i);
    }),
    () => {
      delete e.config.globalProperties.$i18n,
        Mf.forEach((s) => {
          delete e.config.globalProperties[`$${s}`];
        });
    }
  );
}
const y0 = Xn({
    name: "i18n-d",
    props: nt(
      {
        value: {
          type: [Number, Date],
          required: !0,
        },
        format: {
          type: [String, Object],
        },
      },
      Ic
    ),
    setup(e, t) {
      const n =
        e.i18n ||
        Jo({
          useScope: e.scope,
          __useComponent: !0,
        });
      return hg(e, t, og, (...r) => n[Il](...r));
    },
  }),
  Df = y0;
NE(gE);
RE(TE);
OE(tg);
function Gr(e) {
  return tc() ? (ch(e), !0) : !1;
}
const ka = new WeakMap(),
  _0 = (...e) => {
    var t;
    const n = e[0],
      r = (t = Se()) == null ? void 0 : t.proxy;
    if (r == null && !fc())
      throw new Error("injectLocal must be called in setup");
    return r && ka.has(r) && n in ka.get(r) ? ka.get(r)[n] : ft(...e);
  },
  _o = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const mg = (e) => e != null,
  b0 = Object.prototype.toString,
  w0 = (e) => b0.call(e) === "[object Object]",
  Ms = () => {};
function E0(...e) {
  if (e.length !== 1) return ry(...e);
  const t = e[0];
  return typeof t == "function"
    ? ic(
        Ah(() => ({
          get: t,
          set: Ms,
        }))
      )
    : he(t);
}
function Ff(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Ds(e) {
  return Array.isArray(e) ? e : [e];
}
function S0(e) {
  return Se();
}
function C0(e, t = !0, n) {
  S0() ? Rt(e, n) : t ? e() : ut(e);
}
function X1(e, t = 1e3, n = {}) {
  const { immediate: r = !0, immediateCallback: s = !1 } = n;
  let i = null;
  const o = Pt(!1);
  function a() {
    i && (clearInterval(i), (i = null));
  }
  function l() {
    (o.value = !1), a();
  }
  function c() {
    const u = Vt(t);
    u <= 0 ||
      ((o.value = !0), s && e(), a(), o.value && (i = setInterval(e, u)));
  }
  if ((r && _o && c(), Ae(t) || typeof t == "function")) {
    const u = me(t, () => {
      o.value && _o && c();
    });
    Gr(u);
  }
  return (
    Gr(l),
    {
      isActive: Yv(o),
      pause: l,
      resume: c,
    }
  );
}
function I0(e, t, n) {
  return me(e, t, {
    ...n,
    immediate: !0,
  });
}
function Q1(e, t, n) {
  let r;
  Ae(n)
    ? (r = {
        evaluating: n,
      })
    : (r = {});
  const {
      lazy: s = !1,
      flush: i = "pre",
      evaluating: o = void 0,
      shallow: a = !0,
      onError: l = Ms,
    } = r,
    c = Pt(!s),
    u = a ? Pt(t) : he(t);
  let f = 0;
  return (
    lm(
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
          const w = await e((k) => {
            d(() => {
              o && (o.value = !1), g || k();
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
const rs = _o ? window : void 0,
  k0 = _o ? window.document : void 0;
function Fs(e) {
  var t;
  const n = Vt(e);
  return (t = n?.$el) != null ? t : n;
}
function bo(...e) {
  const t = [],
    n = () => {
      t.forEach((a) => a()), (t.length = 0);
    },
    r = (a, l, c, u) => (
      a.addEventListener(l, c, u), () => a.removeEventListener(l, c, u)
    ),
    s = M(() => {
      const a = Ds(Vt(e[0])).filter((l) => l != null);
      return a.every((l) => typeof l != "string") ? a : void 0;
    }),
    i = I0(
      () => {
        var a, l;
        return [
          (l = (a = s.value) == null ? void 0 : a.map((c) => Fs(c))) != null
            ? l
            : [rs].filter((c) => c != null),
          Ds(Vt(s.value ? e[1] : e[0])),
          Ds(gn(s.value ? e[2] : e[1])),
          Vt(s.value ? e[3] : e[2]),
        ];
      },
      ([a, l, c, u]) => {
        if ((n(), !a?.length || !l?.length || !c?.length)) return;
        const f = w0(u)
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
  return Gr(n), o;
}
function T0() {
  const e = Pt(!1),
    t = Se();
  return (
    t &&
      Rt(() => {
        e.value = !0;
      }, t),
    e
  );
}
function kc(e) {
  const t = T0();
  return M(() => (t.value, !!e()));
}
function P0(e, t, n = {}) {
  const { window: r = rs, ...s } = n;
  let i;
  const o = kc(() => r && "MutationObserver" in r),
    a = () => {
      i && (i.disconnect(), (i = void 0));
    },
    l = M(() => {
      const d = Vt(e),
        h = Ds(d).map(Fs).filter(mg);
      return new Set(h);
    }),
    c = me(
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
    Gr(f),
    {
      isSupported: o,
      stop: f,
      takeRecords: u,
    }
  );
}
function A0(e) {
  return typeof e == "function"
    ? e
    : typeof e == "string"
    ? (t) => t.key === e
    : Array.isArray(e)
    ? (t) => e.includes(t.key)
    : () => !0;
}
function Z1(...e) {
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
      target: s = rs,
      eventName: i = "keydown",
      passive: o = !1,
      dedupe: a = !1,
    } = r,
    l = A0(t);
  return bo(
    s,
    i,
    (u) => {
      (u.repeat && Vt(a)) || (l(u) && n(u));
    },
    o
  );
}
const N0 = Symbol("vueuse-ssr-width");
function R0() {
  const e = fc() ? _0(N0, null) : null;
  return typeof e == "number" ? e : void 0;
}
function O0(e, t = {}) {
  const { window: n = rs, ssrWidth: r = R0() } = t,
    s = kc(() => n && "matchMedia" in n && typeof n.matchMedia == "function"),
    i = Pt(typeof r == "number"),
    o = Pt(),
    a = Pt(!1),
    l = (c) => {
      a.value = c.matches;
    };
  return (
    lm(() => {
      if (i.value) {
        i.value = !s.value;
        const c = Vt(e).split(",");
        a.value = c.some((u) => {
          const f = u.includes("not all"),
            d = u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
            h = u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
          let g = !!(d || h);
          return (
            d && g && (g = r >= Ff(d[1])),
            h && g && (g = r <= Ff(h[1])),
            f ? !g : g
          );
        });
        return;
      }
      s.value && ((o.value = n.matchMedia(Vt(e))), (a.value = o.value.matches));
    }),
    bo(o, "change", l, {
      passive: !0,
    }),
    M(() => a.value)
  );
}
function eN(e, t, n = {}) {
  const {
      root: r,
      rootMargin: s = "0px",
      threshold: i = 0,
      window: o = rs,
      immediate: a = !0,
    } = n,
    l = kc(() => o && "IntersectionObserver" in o),
    c = M(() => {
      const g = Vt(e);
      return Ds(g).map(Fs).filter(mg);
    });
  let u = Ms;
  const f = Pt(a),
    d = l.value
      ? me(
          () => [c.value, Fs(r), f.value],
          ([g, w]) => {
            if ((u(), !f.value || !g.length)) return;
            const k = new IntersectionObserver(t, {
              root: Fs(w),
              rootMargin: s,
              threshold: i,
            });
            g.forEach((y) => y && k.observe(y)),
              (u = () => {
                k.disconnect(), (u = Ms);
              });
          },
          {
            immediate: a,
            flush: "post",
          }
        )
      : Ms,
    h = () => {
      u(), d(), (f.value = !1);
    };
  return (
    Gr(h),
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
function L0(e = null, t = {}) {
  var n, r, s;
  const { document: i = k0, restoreOnUnmount: o = (f) => f } = t,
    a = (n = i?.title) != null ? n : "",
    l = E0((r = e ?? i?.title) != null ? r : null),
    c = !!(e && typeof e == "function");
  function u(f) {
    if (!("titleTemplate" in t)) return f;
    const d = t.titleTemplate || "%s";
    return typeof d == "function" ? d(f) : Vt(d).replace(/%s/g, f);
  }
  return (
    me(
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
      P0(
        (s = i.head) == null ? void 0 : s.querySelector("title"),
        () => {
          i && i.title !== l.value && (l.value = u(i.title));
        },
        {
          childList: !0,
        }
      ),
    Gr(() => {
      if (o) {
        const f = o(a, l.value || "");
        f != null && i && (i.title = f);
      }
    }),
    l
  );
}
function tN(e = {}) {
  const {
      window: t = rs,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: r = Number.POSITIVE_INFINITY,
      listenOrientation: s = !0,
      includeScrollbar: i = !0,
      type: o = "inner",
    } = e,
    a = Pt(n),
    l = Pt(r),
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
  c(), C0(c);
  const u = {
    passive: !0,
  };
  if (
    (bo("resize", c, u),
    t &&
      o === "visual" &&
      t.visualViewport &&
      bo(t.visualViewport, "resize", c, u),
    s)
  ) {
    const f = O0("(orientation: portrait)");
    me(f, () => c());
  }
  return {
    width: a,
    height: l,
  };
}
const x0 = (e) => e,
  M0 = x0;
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let gg;
const Yo = (e) => (gg = e),
  pg = Symbol();
function Pl(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var $s;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})($s || ($s = {}));
function D0() {
  const e = ec(!0),
    t = e.run(() => he({}));
  let n = [],
    r = [];
  const s = wr({
    install(i) {
      Yo(s),
        (s._a = i),
        i.provide(pg, s),
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
const vg = () => {};
function $f(e, t, n, r = vg) {
  e.push(t);
  const s = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), r());
  };
  return !n && tc() && ch(s), s;
}
function Ir(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const F0 = (e) => e(),
  Uf = Symbol(),
  Ta = Symbol();
function Al(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((n, r) => e.set(r, n))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      s = e[n];
    Pl(s) && Pl(r) && e.hasOwnProperty(n) && !Ae(r) && !Hn(r)
      ? (e[n] = Al(s, r))
      : (e[n] = r);
  }
  return e;
}
const $0 = Symbol();
function U0(e) {
  return !Pl(e) || !Object.prototype.hasOwnProperty.call(e, $0);
}
const { assign: xn } = Object;
function B0(e) {
  return !!(Ae(e) && e.effect);
}
function V0(e, t, n, r) {
  const { state: s, actions: i, getters: o } = t,
    a = n.state.value[e];
  let l;
  function c() {
    a || (n.state.value[e] = s ? s() : {});
    const u = ey(n.state.value[e]);
    return xn(
      u,
      i,
      Object.keys(o || {}).reduce(
        (f, d) => (
          (f[d] = wr(
            M(() => {
              Yo(n);
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
  return (l = yg(e, c, t, n, r, !0)), l;
}
function yg(e, t, n = {}, r, s, i) {
  let o;
  const a = xn(
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
  !i && !g && (r.state.value[e] = {}), he({});
  let w;
  function k(W) {
    let I;
    (c = u = !1),
      typeof W == "function"
        ? (W(r.state.value[e]),
          (I = {
            type: $s.patchFunction,
            storeId: e,
            events: h,
          }))
        : (Al(r.state.value[e], W),
          (I = {
            type: $s.patchObject,
            payload: W,
            storeId: e,
            events: h,
          }));
    const L = (w = Symbol());
    ut().then(() => {
      w === L && (c = !0);
    }),
      (u = !0),
      Ir(f, I, r.state.value[e]);
  }
  const y = i
    ? function () {
        const { state: I } = n,
          L = I ? I() : {};
        this.$patch((B) => {
          xn(B, L);
        });
      }
    : vg;
  function m() {
    o.stop(), (f = []), (d = []), r._s.delete(e);
  }
  const E = (W, I = "") => {
      if (Uf in W) return (W[Ta] = I), W;
      const L = function () {
        Yo(r);
        const B = Array.from(arguments),
          C = [],
          G = [];
        function $(J) {
          C.push(J);
        }
        function ee(J) {
          G.push(J);
        }
        Ir(d, {
          args: B,
          name: L[Ta],
          store: T,
          after: $,
          onError: ee,
        });
        let Z;
        try {
          Z = W.apply(this && this.$id === e ? this : T, B);
        } catch (J) {
          throw (Ir(G, J), J);
        }
        return Z instanceof Promise
          ? Z.then((J) => (Ir(C, J), J)).catch(
              (J) => (Ir(G, J), Promise.reject(J))
            )
          : (Ir(C, Z), Z);
      };
      return (L[Uf] = !0), (L[Ta] = I), L;
    },
    _ = {
      _p: r,
      $id: e,
      $onAction: $f.bind(null, d),
      $patch: k,
      $reset: y,
      $subscribe(W, I = {}) {
        const L = $f(f, W, I.detached, () => B()),
          B = o.run(() =>
            me(
              () => r.state.value[e],
              (C) => {
                (I.flush === "sync" ? u : c) &&
                  W(
                    {
                      storeId: e,
                      type: $s.direct,
                      events: h,
                    },
                    C
                  );
              },
              xn({}, l, I)
            )
          );
        return L;
      },
      $dispose: m,
    },
    T = br(_);
  r._s.set(e, T);
  const N = ((r._a && r._a.runWithContext) || F0)(() =>
    r._e.run(() =>
      (o = ec()).run(() =>
        t({
          action: E,
        })
      )
    )
  );
  for (const W in N) {
    const I = N[W];
    if ((Ae(I) && !B0(I)) || Hn(I))
      i ||
        (g && U0(I) && (Ae(I) ? (I.value = g[W]) : Al(I, g[W])),
        (r.state.value[e][W] = I));
    else if (typeof I == "function") {
      const L = E(I, W);
      (N[W] = L), (a.actions[W] = I);
    }
  }
  return (
    xn(T, N),
    xn(fe(T), N),
    Object.defineProperty(T, "$state", {
      get: () => r.state.value[e],
      set: (W) => {
        k((I) => {
          xn(I, W);
        });
      },
    }),
    r._p.forEach((W) => {
      xn(
        T,
        o.run(() =>
          W({
            store: T,
            app: r._a,
            pinia: r,
            options: a,
          })
        )
      );
    }),
    g && i && n.hydrate && n.hydrate(T.$state, g),
    (c = !0),
    (u = !0),
    T
  );
}
/*! #__NO_SIDE_EFFECTS__ */
function Tc(e, t, n) {
  let r;
  const s = typeof t == "function";
  r = s ? n : t;
  function i(o, a) {
    const l = fc();
    return (
      (o = o || (l ? ft(pg, null) : null)),
      o && Yo(o),
      (o = gg),
      o._s.has(e) || (s ? yg(e, t, r, o) : V0(e, r, o)),
      o._s.get(e)
    );
  }
  return (i.$id = e), i;
}
const W0 = Tc("preferences", {
  state: () => ({
    version: 379,
    appInfoVisible: !0,
    darkMode: "auto",
    latestSeenVersion: 0,
    userHasSeenCurrentVersion: !1,
    seenUkraineBanner: !1,
    wheelLocation: null,
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
      (this.darkMode = e), Je.set(e), this.savePrefsToLocalStorage();
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
function j0(e, t) {
  if (e === t) return !0;
  if (e === null || t === null || e.length !== t.length) return !1;
  for (let n = 0; n < e.length; ++n) if (e[n] !== t[n]) return !1;
  return !0;
}
function _g(e, t, n, r, s) {
  return (
    (t ** 2 - (s / 2) ** 2) ** 0.5 -
      Math.max((s * Math.cos(e)) / (2 * Math.sin(e)), n) >=
    r
  );
}
function q0(e) {
  if (!e) return "";
  let t = e;
  const n = t.match(/<img.*?src="(.*?)".*?>/);
  return n && (t = t.replace(n[0], "")), J0(t);
}
function bg(e) {
  let t = "";
  if (e) {
    t = e;
    const n = 18;
    t.length > n && (t = `${t.substring(0, n - 1)}…`);
  }
  return t;
}
function H0(e, t) {
  if (e) return t;
  const n = [],
    r = [];
  for (const s of t) {
    const i = z0(s);
    n.includes(i) || (n.push(i), r.push(s));
  }
  return r;
}
function z0(e) {
  const t = {};
  return (
    e.text && (t.text = e.text),
    e.image && (t.image = e.image),
    JSON.stringify(t)
  );
}
function K0(e) {
  let t = "";
  if (e) {
    const n = e.match(/<img.*?src="(.*?)".*?>/);
    n && (t = n[1]);
  }
  return t;
}
function G0(e) {
  const t = [...e];
  let n;
  for (let r = t.length - 1; r > 0; r--)
    (n = Math.floor(Math.random() * (r + 1))), ([t[r], t[n]] = [t[n], t[r]]);
  return t;
}
function Bf(e) {
  return e.slice(0).sort((t, n) => {
    const r = t.text || "",
      s = n.text || "";
    return r.localeCompare(s, "en", {
      numeric: !0,
      sensitivity: "base",
    });
  });
}
function J0(e) {
  return e
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}
function ji() {
  let t = "";
  const n = "abcdefghjkmnpqrstuvwxyz23456789";
  for (let r = 0; r < 10; r++)
    t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}
function bs(e) {
  return !e || !e.map ? [] : e.map((t) => ((t.id = t.id || ji()), t));
}
function Y0(e, t, n = Math.random) {
  const r = Math.ceil(e),
    s = Math.floor(t);
  return Math.floor(n() * (s - r + 1) + r);
}
function wg(e) {
  return e.reduce(
    (t, n) =>
      n.weight && (n.enabled === !0 || !("enabled" in n)) ? t + n.weight : t,
    0
  );
}
function X0(e, t) {
  let n = 0;
  if (e.length === 0) return 0;
  if (e[0].weight) {
    const r = wg(e),
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
function Eg(e) {
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
function nN(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Q0(e) {
  return ["spin-only", "copyable", "gallery"].includes(e);
}
function Z0(e) {
  return e instanceof Error
    ? e.message
    : typeof e == "string"
    ? e
    : e instanceof Object
    ? e.toString()
    : "An unknown error occurred";
}
function Sg(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
async function rN(e) {
  return new Promise((t) => {
    const n = new Image();
    (n.onload = () => {
      const r = nS(n.width, n.height, 200);
      Cg(r, n), t(Ac(r, e, 0.5));
    }),
      (n.src = e);
  });
}
async function sN(e) {
  return new Promise((t) => {
    const n = new Image();
    (n.onload = () => {
      const r = Pc(370);
      rS(n) || Cg(r, n, "blur(4px)"), Ig(r, n, !0), t(Ac(r, null, 0.5));
    }),
      (n.src = e);
  });
}
async function iN(e) {
  return new Promise((t) => {
    const n = new Image();
    (n.onload = () => {
      const r = Pc(700);
      Ig(r, n, !1), t(Ac(r, null, 0.7));
    }),
      (n.src = e);
  });
}
function fs(e) {
  const t = document.createElement("canvas");
  return (t.width = e.canvas.width), (t.height = e.canvas.height), t;
}
function Dr(e) {
  const t = ui(document.createElement("canvas"));
  t.drawImage(e, 0, 0);
  const n = t.getImageData(0, 0, 1, 1).data;
  return iS(n[0], n[1], n[2]) ? "#FFFFFFFF" : oS(n[0], n[1], n[2], n[3]);
}
function eS(e) {
  const t = e.match(/#\w\w\w\w\w\w(\w\w)/);
  return t ? (Number.parseInt(t[1], 16) / 255) * 100 < 50 : !1;
}
function oN(e) {
  const n = Pc(300),
    r = ui(n);
  (r.fillStyle = "white"),
    r.fillRect(0, 0, 300, 300),
    (r.fillStyle = "black"),
    (r.textBaseline = "middle"),
    (r.textAlign = "center");
  const s = 300 * 0.9;
  return (
    tS(r, e, s),
    r.fillText(e, 300 / 2, 300 / 2, s),
    n.toDataURL("image/webp", 0.5)
  );
}
function Pa(e) {
  return new Promise((t) => {
    const n = new Image();
    n.setAttribute("crossOrigin", "anonymous"),
      (n.onload = () => t(n)),
      (n.src = e);
  });
}
function Aa(e) {
  return Dr(e).slice(7) === "00";
}
function tS(e, t, n) {
  for (
    let r = Math.round(n / 2);
    r >= n / 20 &&
    ((e.font = `${r}px Quicksand, sans-serif`), !(e.measureText(t).width <= n));
    r--
  );
}
function nS(e, t, n) {
  const r = n / e,
    s = n / t,
    i = Math.max(r, s),
    o = document.createElement("canvas");
  return (o.width = e * i), (o.height = t * i), o;
}
function Pc(e) {
  const t = document.createElement("canvas");
  return (t.width = e), (t.height = e), t;
}
function rS(e) {
  const t = Dr(e);
  return t === "#FFFFFFFF" || t.slice(7) === "FF";
}
function sS(e) {
  return e.getImageData(0, 0, 1, 1).data[3] < 5;
}
function iS(e, t, n) {
  return e === t && e === n && e > 230;
}
function oS(e, t, n, r) {
  return `#${Ai(e)}${Ai(t)}${Ai(n)}${Ai(r)}`;
}
const Ai = (e) => e.toString(16).padStart(2, "0");
function Cg(e, t, n) {
  const r = ui(e);
  r.save(),
    n && (r.filter = n),
    r.drawImage(t, -2, -2, e.width + 4, e.height + 4),
    r.restore();
}
function Ig(e, t, n) {
  const r = e.width;
  let s = r / Math.min(t.width, t.height);
  n && (s = r / Math.max(t.width, t.height));
  const i = t.width * s,
    o = (r - i) / 2,
    a = t.height * s,
    l = (r - a) / 2;
  ui(e).drawImage(t, o, l, i, a);
}
function Ac(e, t, n) {
  let r;
  const s = ui(e);
  return (
    sS(s)
      ? (r = e.toDataURL("image/webp", 0.5))
      : (r = e.toDataURL("image/jpeg", n)),
    t && t.length < r.length ? t : r
  );
}
function ui(e) {
  const t = e.getContext("2d");
  if (!t) throw Error("Could not get canvas context");
  return t;
}
function aS(e, t, n, r, s, i) {
  const o = lS(e, n, r, s, i),
    a = cS(e, t, r, s, i);
  return `${uS(o, a)}px Quicksand, sans-serif`;
}
const Na = new Map();
function lS(e, t, n, r, s) {
  const i = JSON.stringify({
    texts: t,
    wheelRadius: n,
    hubRadius: r,
    smallestAngle: s,
  });
  if (Na.get(i)) return Na.get(i) || [10];
  const o = "Quicksand, sans-serif",
    a = t.map((c) => kg(e, c, o, n, r, s)),
    l = mS(a);
  return Na.set(i, l), l;
}
function cS(e, t, n, r, s) {
  return kg(e, t, "Quicksand, sans-serif", n, r, s);
}
function uS(e, t) {
  for (let n = e.length - 1; n >= 0; n--) if (e[n] <= t) return e[n];
  return e[0];
}
const Ra = new Map();
function kg(e, t, n, r, s, i) {
  const o = JSON.stringify({
    displayText: t,
    fontName: n,
    wheelRadius: r,
    hubRadius: s,
    smallestAngle: i,
  });
  if (Ra.get(o)) return Ra.get(o) || 10;
  const a = fS(e, t, n, r, s, i);
  return Ra.set(o, a), a;
}
function fS(e, t, n, r, s, i) {
  return dS(e, r, s, i, n, t, 3, 200);
}
function dS(e, t, n, r, s, i, o, a) {
  let l,
    c = o,
    u = a;
  for (;;) {
    l = Math.round((c + u) / 2);
    const f = `${l}px ${s}`;
    if ((hS(e, t, n, r / 2, i, f, l) ? (c = l) : (u = l), Math.abs(u - c) < 2))
      break;
  }
  return l;
}
function hS(e, t, n, r, s, i, o) {
  if (!s) return !0;
  e.font = i;
  const a = e.measureText(` ${bg(s)} `).width;
  return _g(r, t, n, a, o);
}
function mS(e) {
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
function Vf(e) {
  const t = e.context;
  t.save(),
    e.wheelConfig.type === "image" && gS(e),
    e.wheelConfig.type === "color" &&
      (e.image ? (bS(e.image) ? pS(e) : vS(e)) : yS(e)),
    t.restore();
}
function gS(e) {
  Rc(e),
    Xo(e, {
      fill: "white",
      outline: "black",
    }),
    Qo(e);
}
function pS(e) {
  Nc(e),
    Rc(e),
    Xo(e, {
      fill: "white",
      outline: "black",
    }),
    Qo(e);
}
function vS(e) {
  if (!e.image) return;
  const t = Tg(e.image);
  Nc({
    ...e,
    color: e.entry.color || t,
  }),
    Rc(e),
    Xo(e, {
      fill: "white",
      outline: "black",
    }),
    Qo(e);
}
function yS(e) {
  Nc(e);
  const t = {
    fill: Eg(e.color),
    outline: "",
  };
  Xo(e, t), Qo(e);
}
function Nc(e) {
  const t = e.context;
  t.beginPath(),
    t.moveTo(0, 0),
    t.arc(0, 0, e.wheelRadius, -e.radians / 2, e.radians / 2),
    t.lineTo(0, 0),
    (t.fillStyle = e.color),
    t.fill();
}
function Xo(e, t) {
  if (!e.entry.text) return;
  const n = e.context,
    r = bg(e.entry.text ?? "");
  (n.font = aS(
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
function Rc(e) {
  if (!e.image) return;
  const t = e.radians / 2,
    n = e.wheelRadius,
    r = e.hubRadius,
    s = _S(t, n, r, e.image.height / e.image.width);
  e.context.drawImage(e.image, s.x, s.y, s.w, s.h);
}
function Qo(e) {
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
function _S(e, t, n, r) {
  let s,
    i = 0;
  for (s = t; s > 0 && ((i = s * r), !_g(e, t, n, s, i)); s--);
  return {
    x: Math.max((i * Math.cos(e)) / (2 * Math.sin(e)), n),
    y: -i / 2,
    w: s,
    h: i,
  };
}
function Tg(e) {
  return Dr(e);
}
function bS(e) {
  return eS(Tg(e));
}
const wS = {
  XS: 0.01,
  S: 0.2,
  M: 0.3,
  L: 0.4,
  XL: 0.5,
  XXL: 0.6,
};
class ES {
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
class SS {
  imageCache = new ES();
  entries = [];
  imageDataCache = {};
  wheelImage = null;
  pointerImages = null;
  coverPlateImage = null;
  wheelShadowImage = null;
  watermarkImage = null;
  draw(t, n, r, s, i, o = "", a = "#BBBBBB") {
    const l = t.canvas.width * 0.44,
      c = this.getHubRadius(i, l);
    this.drawBackground(t),
      i.drawShadow && this.drawWheelShadow(t, l),
      this.drawCoverImage(t, i, n, l),
      this.drawWheel(t, i, n, l, c, s, r),
      this.drawPointer(t, i, l, a),
      this.drawCenterImage(t, i, n, c);
    try {
      this.drawCoverPlate(t, l, c, s, r);
    } catch {}
    o && this.drawWatermark(t, o, i);
  }
  getHubRadius(t, n) {
    if (t.type === "image") return 0;
    const r = wS[t.hubSize] || 0.2;
    return Math.round(r * n);
  }
  refresh() {
    (this.wheelImage = null),
      (this.pointerImages = null),
      (this.coverPlateImage = null);
  }
  drawBackground(t) {
    t.clearRect(0, 0, t.canvas.width, t.canvas.height);
  }
  drawWheelShadow(t, n) {
    this.wheelShadowImage ||
      ((this.wheelShadowImage = fs(t)),
      this.drawWheelShadowNoCache(ds(this.wheelShadowImage), n)),
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
      ((this.wheelImage = fs(t)),
      (this.entries = a.slice(0)),
      this.drawWheelNoCache({
        context: ds(this.wheelImage),
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
      Vf({
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
    const n = wg(this.entries),
      r = [];
    this.entries.forEach((s, i) => {
      r[i] = (2 * Math.PI * (s.weight || 1)) / n;
    });
    for (const [s, i] of t.displayEntries.entries()) {
      const o = r[s] / 2 + r[s + 1] / 2,
        a = i.color || t.wheelConfig.getEntryColor(s);
      Vf({
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
  drawPointer(t, n, r, s) {
    t.canvas.width < 200 ||
      (this.pointerImages || (this.pointerImages = {}),
      this.pointerImages[s] ||
        ((this.pointerImages[s] = fs(t)),
        this.drawPointerNoCache(ds(this.pointerImages[s]), n, r, s)),
      t.drawImage(this.pointerImages[s], 0, 0));
  }
  drawPointerNoCache(t, n, r, s) {
    t.save(),
      t.translate(t.canvas.width / 2 + r, t.canvas.height / 2),
      n.drawShadow &&
        ((t.shadowColor = "#0008"), (t.shadowOffsetY = 4), (t.shadowBlur = 10));
    const i = {
        l1: this.adjustBrightness(s, 0.1),
        l2: this.adjustBrightness(s, 0.2),
        l3: this.adjustBrightness(s, 0.3),
        d1: this.adjustBrightness(s, -0.1),
        d2: this.adjustBrightness(s, -0.2),
        d3: this.adjustBrightness(s, -0.3),
      },
      o = t.createLinearGradient(0, -20, 0, 20);
    o.addColorStop(0, i.l2),
      o.addColorStop(1, i.d2),
      (t.fillStyle = o),
      t.beginPath(),
      t.moveTo(-15, 0),
      t.lineTo(25, -20),
      t.lineTo(20, 0),
      t.lineTo(25, 20),
      t.closePath(),
      t.fill(),
      (t.shadowColor = "transparent"),
      (t.lineWidth = 3);
    const a = t.createLinearGradient(0, -20, 0, 20);
    a.addColorStop(0, i.l3),
      a.addColorStop(0.49, i.l2),
      a.addColorStop(0.51, i.d2),
      a.addColorStop(1, i.d3),
      (t.strokeStyle = a),
      t.beginPath(),
      t.moveTo(25, 20),
      t.lineTo(-15, 0),
      t.lineTo(25, -20),
      t.stroke(),
      (t.lineWidth = 2);
    const l = t.createLinearGradient(0, -20, 0, 20);
    l.addColorStop(0, i.d2),
      l.addColorStop(0.49, i.d1),
      l.addColorStop(0.51, i.l1),
      l.addColorStop(1, i.l2),
      (t.strokeStyle = l),
      t.beginPath(),
      t.moveTo(25, -20),
      t.lineTo(20, 0),
      t.lineTo(25, 20),
      t.stroke(),
      t.restore();
  }
  adjustBrightness(t, n) {
    const r = t.replace("#", ""),
      s = Number.parseInt(r.substring(0, 2), 16),
      i = Number.parseInt(r.substring(2, 4), 16),
      o = Number.parseInt(r.substring(4, 6), 16),
      a = Math.max(0, Math.min(255, Math.round(s + 255 * n))),
      l = Math.max(0, Math.min(255, Math.round(i + 255 * n))),
      c = Math.max(0, Math.min(255, Math.round(o + 255 * n))),
      u = (f) => f.toString(16).padStart(2, "0");
    return `#${u(a)}${u(l)}${u(c)}`;
  }
  drawCoverPlate(t, n, r, s, i) {
    i.length !== s.length &&
      (!this.coverPlateImage &&
        i.length > 0 &&
        ((this.coverPlateImage = fs(t)),
        this.drawCoverPlateNoCache(ds(this.coverPlateImage), n, r, i)),
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
        ((this.watermarkImage = fs(t)),
        this.drawWatermarkNoCache(ds(this.watermarkImage), n, r)),
      t.drawImage(this.watermarkImage, 0, 0));
  }
  drawWatermarkNoCache(t, n, r) {
    t.save(),
      (t.textAlign = "end"),
      (t.font = "14px Quicksand, sans-serif"),
      (t.fillStyle = Eg(r.pageBackgroundColor)),
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
function ds(e) {
  const t = e.getContext("2d");
  if (!t) throw Error("Could not get canvas context");
  return t;
}
class _t {
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
  pointerChangesColor = !0;
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
    const t = new _t();
    return t.loadValues(this.getValues()), t;
  }
  hasOnlyDefaultEntries() {
    return j0(this.getTexts(), new _t().getTexts());
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
          const r = q0(n),
            s = K0(n);
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
    bs(t.entries),
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
const Wf = Object.fromEntries(
  Object.entries(new _t().getValues()).map(([e, t]) => [e, typeof t])
);
function Pg(e) {
  const t = new _t(
    Object.fromEntries(
      Object.entries(structuredClone(e)).filter(
        ([n, r]) => n in Wf && typeof r === Wf[n]
      )
    )
  );
  for (const n of t.entries) delete n.id;
  for (const n of t.colorSettings)
    n.color.length === 4 &&
      (n.color = `#${n.color[1]}${n.color[1]}${n.color[2]}${n.color[2]}${n.color[3]}${n.color[3]}`);
  return t;
}
class hs {
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
class CS {
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
class IS {
  allEntries;
  maxSlices;
  prevIndexAtPointer;
  displayEntries;
  constructor() {
    (this.allEntries = new hs([])),
      (this.maxSlices = 1e6),
      (this.prevIndexAtPointer = -1),
      (this.displayEntries = new hs([]));
  }
  setEntries(t, n, r) {
    (this.maxSlices = n),
      (this.allEntries = new hs(H0(r, t))),
      this.allEntries.length <= n || this.entriesHaveUnequalWeight(t)
        ? (this.displayEntries = this.allEntries)
        : (this.displayEntries = new hs(this.allEntries.slice(0, n)));
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
    const n = new CS(this.prevIndexAtPointer, t, this.displayEntries.length);
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
      const n = Y0(0, this.allEntries.length - 1, t);
      this.displayEntries = new hs(
        this.allEntries.slice(n, n + this.maxSlices)
      );
    }
  }
}
let aN = class {
  angle = 0;
  speed = 0;
  fps = 60;
  watermark = "";
  wheelConfig = new _t();
  state;
  wheelPainter = new SS();
  entryPicker = new IS();
  indexFromLastTick = 0;
  indexFromThisTick = 0;
  nameChangedCallback;
  doneSpinningCallback;
  onStateChangeCallback;
  constructor(t, n, r) {
    (this.state = new Ag(this)),
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
    return X0(this.entryPicker.getDisplayEntries(), this.angle);
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
        this.watermark,
        this.getPointerColor()
      );
  }
  getPointerColor() {
    const t = this.wheelConfig;
    if (
      t.pointerChangesColor &&
      t.type === "color" &&
      Math.min(t.entries.length, t.maxNames) <= 80
    ) {
      const n = this.getEntryAtPointer();
      if (n && !n.image) {
        const r = this.getIndexAtPointer();
        return n.color || t.getEntryColor(r);
      }
    }
    return "#BBBBBB";
  }
};
class Tn {
  name = "NullSpinState";
  tick(t, ...n) {}
  click(t) {}
  receiveFromNetwork(t, n) {}
  isSpinning() {
    return !1;
  }
}
class Ag extends Tn {
  name = "InitialDemoSpinState";
  constructor(t) {
    super(), (t.speed = 0.005);
  }
  tick(t) {
    t.angle += t.speed;
  }
  click(t) {
    t.setNewState(new Oc(t));
  }
  receiveFromNetwork(t, n) {
    n.name === "Spinning" && t.setNewState(new Lc(t, n.decelAngle)),
      n.name === "Stopped" && t.setNewState(new Rg(t, n.position));
  }
}
class Oc extends Tn {
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
    } else t.setNewState(new kS(t, n));
  }
  isSpinning() {
    return !0;
  }
}
class Lc extends Tn {
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
    } else t.setNewState(new TS(t, this.decelAngle));
  }
  receiveFromNetwork(t, n) {
    n.name === "AnnounceWinner" && t.setNewState(new Ng(t, n.position));
  }
  isSpinning() {
    return !0;
  }
}
class kS extends Tn {
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
        : ((t.speed = 0), t.setNewState(new PS(t, t.angle)));
  }
  isSpinning() {
    return !0;
  }
}
class TS extends Tn {
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
      this.age > this.MAX_AGE + 180 && t.setNewState(new Ag(t)),
      (this.age += 1);
  }
  receiveFromNetwork(t, n) {
    n.name === "AnnounceWinner" && t.setNewState(new Ng(t, n.position));
  }
  isSpinning() {
    return !0;
  }
}
class PS extends Tn {
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
    t.spinIsDone(), t.setNewState(new AS(t, t.angle));
  }
}
class Ng extends Tn {
  name = "SpectatorAnnounceWinnerState";
  constructor(t, n) {
    super(), (t.angle = n);
  }
  tick(t) {
    t.spinIsDone(), t.setNewState(new Rg(t, t.angle));
  }
}
class AS extends Tn {
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
    t.setNewState(new Oc(t));
  }
  receiveFromNetwork(t, n) {
    n.name === "Spinning" && t.setNewState(new Lc(t, n.decelAngle));
  }
}
class Rg extends Tn {
  name = "SpectatorStoppedState";
  constructor(t, n) {
    super(), (t.angle = n), (t.speed = 0);
  }
  click(t) {
    t.setNewState(new Oc(t));
  }
  receiveFromNetwork(t, n) {
    n.name === "Spinning" && t.setNewState(new Lc(t, n.decelAngle));
  }
}
const NS = [
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/spreadsheets.readonly",
];
function RS(e) {
  if (!e) return "";
  const t = e.match(/<img.*?src="(.*?)".*?>/);
  return jf(t ? e.replace(t[0], "") : e);
}
function cN(e, t) {
  if (e) return t;
  const n = [],
    r = [];
  for (const s of t) {
    const i = Nl(s);
    n.includes(i) || (n.push(i), r.push(s));
  }
  return r;
}
function Nl(e) {
  const t = {};
  return (
    e.text && (t.text = e.text),
    e.image && (t.image = e.image),
    JSON.stringify(t)
  );
}
function uN(e, t) {
  const n = [];
  for (let r = 0; r < e.length; r++)
    if ((Nl(t) === Nl(e[r]) && n.push(r), t.id === e[r].id)) return n[0] !== r;
  return !1;
}
function fN(e) {
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
      const i = RS(s),
        o = OS(s);
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
function OS(e) {
  let t = "";
  if (e) {
    const n = e.match(/<img.*?src="(.*?)".*?>/);
    n?.[1] && (t = n[1]);
  }
  return t;
}
function dN(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function hN(e, t) {
  return t ? e.reduce((n, r) => n + (r?.trim() === t.trim() ? 1 : 0), 0) : 0;
}
function LS(e, t, n) {
  location.host.startsWith("localhost") ||
    location.host.startsWith("test") ||
    (typeof gtag < "u" &&
      gtag("event", t, {
        event_label: n,
      }));
}
function xS(e, t) {
  const n = Z0(t);
  LS("", `${e}: ${n}`, navigator.userAgent), console.error(n);
}
function Og(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function mN(e) {
  const t = e.replace(/<mark>/g, "||mark||").replace(/<\/mark>/g, "||/mark||");
  return Og(t)
    .replace(/\|\|mark\|\|/g, "<mark>")
    .replace(/\|\|\/mark\|\|/g, "</mark>");
}
function jf(e) {
  return e
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}
function gN(e) {
  return e.replace(/<.*?>/g, "");
}
function MS() {
  let t = "";
  const n = "abcdefghjkmnpqrstuvwxyz23456789";
  for (let r = 0; r < 10; r++)
    t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}
function pN(e) {
  return !e || !e.map ? [] : e.map((t) => ((t.id = t.id || MS()), t));
}
function vN(e) {
  let t = "",
    n = "";
  return (
    e &&
      (e.image &&
        (t = `<img src="${e.image}" style="height:25px" style="font-size:1rem;">`),
      e.text && ((n = Og(e.text)), (n = n.replace(/^ +$/g, "&nbsp;")))),
    `<div>${t}${n}</div>`
  );
}
function yN(e) {
  e && e.toLowerCase() !== "#ffffff"
    ? (document.body.style.backgroundColor = e)
    : document.body.style.removeProperty("background-color");
}
function _N(e, t) {
  return `https://docs.google.com/forms/d/e/1FAIpQLSeryxMCuDjQUGawpgIeMwSY-81fqwdbpVTIOyh1-WJG5LCeeQ/viewform?entry.1064273724=${encodeURIComponent(
    e
  )}&entry.558479038=${t}`;
}
function bN(e, t) {
  return DS(FS(e), t);
}
function DS(e, t = "en", n = Date.now()) {
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
function FS(e) {
  return e?._seconds
    ? e._seconds * 1e3
    : e?.seconds
    ? e.seconds * 1e3
    : e && Number.isInteger(e)
    ? e
    : 0;
}
function wN(e) {
  const t = Number(e);
  return Number.isNaN(t) ? "?" : `$${t.toFixed(2)}`;
}
function EN(e) {
  const t = Number(e);
  return !Number.isNaN(t) && t >= 0 ? `${Math.round(t * 100)}%` : "?";
}
function SN() {
  return window.self !== window.top;
}
function xc(e) {
  return location.host.startsWith("localhost")
    ? `http://localhost:8081/${e}`
    : `/${e}`;
}
function CN(e, t) {
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
async function IN(e) {
  const { extractColors: t } = await Re(async () => {
      const { extractColors: r } = await import("https://wheelofnames.com/assets/extract-colors-v379.js");
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
function kN(e, t, n) {
  return e
    .slice()
    .sort((r, s) =>
      t === "title"
        ? r.wheelConfig.title || s.wheelConfig.title
          ? $S(r, s, n)
          : qf(r, s, n)
        : t === "created"
        ? qf(r, s, n)
        : t === "lastWrite"
        ? US(r, s, n)
        : 0
    );
}
function $S(e, t, n) {
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
function qf(e, t, n) {
  return n === "desc" ? t.created - e.created : e.created - t.created;
}
function US(e, t, n) {
  return n === "desc" ? t.lastWrite - e.lastWrite : e.lastWrite - t.lastWrite;
}
async function Lg(e, t, n, r) {
  const s = {
    method: e,
    mode: "cors",
    headers: {},
  };
  n && (s.headers.Authorization = n),
    r &&
      ((s.headers["Content-Type"] = "application/json"),
      (s.body = JSON.stringify(r)));
  const i = await fetch(xc(t), s);
  return await Mg(i);
}
async function xg(e, t, n, r) {
  const s = {
    method: e,
    mode: "cors",
    headers: {},
  };
  return (
    n && (s.headers.Authorization = n), await (await fetch(xc(t), s)).blob()
  );
}
async function Mg(e) {
  const t = await e.text();
  if (t.startsWith("<")) throw new Error(t);
  const n = JSON.parse(t);
  if ("error" in n) throw new Error(n.error);
  return n;
}
async function BS({ wheelConfig: e, idToken: t, shareMode: n }) {
  const r = {
    wheelConfig: Pg(e),
    shareMode: n,
  };
  return (await ze("POST", "api/v2/wheels", t, r)).data.path;
}
async function VS(e, t) {
  let n = "api/v2/wheels/shared";
  return (
    t && t.length > 0 && (n += `?fields=${t}`),
    (await ze("GET", n, e)).data.wheels
  );
}
async function WS(e, t) {
  let n = "api/v2/wheels/private";
  return (
    t && t.length > 0 && (n += `?fields=${t}`),
    (await ze("GET", n, e)).data.wheels
  );
}
async function jS(e, t) {
  return (await ze("GET", `api/v2/wheels/${e}`, t)).data;
}
async function qS(e, t) {
  let n = "api/v2/wheels";
  return (
    t && t.length > 0 && (n += `?fields=${t}`),
    (await ze("GET", n, e)).data.wheels
  );
}
async function HS(e, t) {
  const n = "api/v2/wheels/private",
    r = {
      wheelConfig: Pg(t),
    };
  return (await ze("PUT", n, e, r)).data.path;
}
async function zS(e, t, n) {
  await ze("PUT", `api/v2/wheels/${t}`, e, n);
}
async function KS(e, t) {
  await ze("DELETE", `api/v2/wheels/${t}`, e);
}
async function Hf(e) {
  await ze("POST", "api/v2/users", e);
}
async function Oa(e, t) {
  await ze("POST", "api/v2/wheels/change-owner", t, {
    oldIdToken: e,
  });
}
async function GS(e) {
  await ze("DELETE", "api/v2/users", e);
}
async function JS(e) {
  try {
    return !!(await ze("GET", "api/v2/users", e)).data.premium;
  } catch (t) {
    if (t instanceof Error && t.message === "Unauthorized") return !1;
    throw t;
  }
}
async function TN(e, t) {
  const n = new URLSearchParams();
  return (
    e && n.append("search", e),
    t && n.append("pageNumber", String(t)),
    (await ze("GET", `api/v2/gallery?${n.toString()}`)).data
  );
}
async function PN() {
  return (await ze("GET", "api/v2/gallery/suggestions")).data.suggestions;
}
async function AN() {
  return (await ze("GET", "api/v2/client-settings")).data;
}
async function YS(e) {
  return (await ze("POST", "api/v2/api-keys", e)).data.apiKey;
}
async function XS(e) {
  await ze("DELETE", "api/v2/api-keys", e);
}
async function QS(e) {
  return (await ze("GET", "api/v2/api-keys", e)).data;
}
async function NN(e) {
  const t = {
      method: "GET",
      mode: "cors",
      headers: {
        "x-api-key": e,
      },
    },
    n = await fetch(xc("api/v2/api-keys"), t);
  return (await Dg(n)).data;
}
async function RN() {
  return (await ze("GET", "api/v2/languages")).data.languages;
}
async function ON() {
  const n = await fetch(
      "https://discord-bot-wada35rq7a-uc.a.run.app/guild-count",
      {
        method: "GET",
        mode: "cors",
      }
    ),
    r = await Dg(n);
  if ("guildCount" in r) return r.guildCount;
  throw new Error("No guildCount property in response");
}
async function ZS(e, t, n) {
  const r = `api/v2/wheels/thumbnails/${t}?size=${n}`;
  return await eC("GET", r, e);
}
async function ze(e, t, n, r) {
  return await Lg(e, t, n, r);
}
async function eC(e, t, n, r) {
  return await xg(e, t, n);
}
async function Dg(e) {
  return await Mg(e);
}
const tC = () => {};
var zf = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fg = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let s = e.charCodeAt(r);
      s < 128
        ? (t[n++] = s)
        : s < 2048
        ? ((t[n++] = (s >> 6) | 192), (t[n++] = (s & 63) | 128))
        : (s & 64512) === 55296 &&
          r + 1 < e.length &&
          (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((s = 65536 + ((s & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (s >> 18) | 240),
          (t[n++] = ((s >> 12) & 63) | 128),
          (t[n++] = ((s >> 6) & 63) | 128),
          (t[n++] = (s & 63) | 128))
        : ((t[n++] = (s >> 12) | 224),
          (t[n++] = ((s >> 6) & 63) | 128),
          (t[n++] = (s & 63) | 128));
    }
    return t;
  },
  nC = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const s = e[n++];
      if (s < 128) t[r++] = String.fromCharCode(s);
      else if (s > 191 && s < 224) {
        const i = e[n++];
        t[r++] = String.fromCharCode(((s & 31) << 6) | (i & 63));
      } else if (s > 239 && s < 365) {
        const i = e[n++],
          o = e[n++],
          a = e[n++],
          l =
            (((s & 7) << 18) | ((i & 63) << 12) | ((o & 63) << 6) | (a & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (l >> 10))),
          (t[r++] = String.fromCharCode(56320 + (l & 1023)));
      } else {
        const i = e[n++],
          o = e[n++];
        t[r++] = String.fromCharCode(
          ((s & 15) << 12) | ((i & 63) << 6) | (o & 63)
        );
      }
    }
    return t.join("");
  },
  $g = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let s = 0; s < e.length; s += 3) {
        const i = e[s],
          o = s + 1 < e.length,
          a = o ? e[s + 1] : 0,
          l = s + 2 < e.length,
          c = l ? e[s + 2] : 0,
          u = i >> 2,
          f = ((i & 3) << 4) | (a >> 4);
        let d = ((a & 15) << 2) | (c >> 6),
          h = c & 63;
        l || ((h = 64), o || (d = 64)), r.push(n[u], n[f], n[d], n[h]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(Fg(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : nC(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let s = 0; s < e.length; ) {
        const i = n[e.charAt(s++)],
          a = s < e.length ? n[e.charAt(s)] : 0;
        ++s;
        const c = s < e.length ? n[e.charAt(s)] : 64;
        ++s;
        const f = s < e.length ? n[e.charAt(s)] : 64;
        if ((++s, i == null || a == null || c == null || f == null))
          throw new rC();
        const d = (i << 2) | (a >> 4);
        if ((r.push(d), c !== 64)) {
          const h = ((a << 4) & 240) | (c >> 2);
          if ((r.push(h), f !== 64)) {
            const g = ((c << 6) & 192) | f;
            r.push(g);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class rC extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const sC = function (e) {
    const t = Fg(e);
    return $g.encodeByteArray(t, !0);
  },
  Ug = function (e) {
    return sC(e).replace(/\./g, "");
  },
  Bg = function (e) {
    try {
      return $g.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function iC() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oC = () => iC().__FIREBASE_DEFAULTS__,
  aC = () => {
    if (typeof process > "u" || typeof zf > "u") return;
    const e = zf.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  lC = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && Bg(e[1]);
    return t && JSON.parse(t);
  },
  Mc = () => {
    try {
      return tC() || oC() || aC() || lC();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  cC = (e) => Mc()?.emulatorHosts?.[e],
  Vg = () => Mc()?.config,
  Wg = (e) => Mc()?.[`_${e}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uC {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zo(e) {
  try {
    return (
      e.startsWith("http://") || e.startsWith("https://")
        ? new URL(e).hostname
        : e
    ).endsWith(".cloudworkstations.dev");
  } catch {
    return !1;
  }
}
async function fC(e) {
  return (
    await fetch(e, {
      credentials: "include",
    })
  ).ok;
}
const Us = {};
function dC() {
  const e = {
    prod: [],
    emulator: [],
  };
  for (const t of Object.keys(Us)) Us[t] ? e.emulator.push(t) : e.prod.push(t);
  return e;
}
function hC(e) {
  let t = document.getElementById(e),
    n = !1;
  return (
    t ||
      ((t = document.createElement("div")), t.setAttribute("id", e), (n = !0)),
    {
      created: n,
      element: t,
    }
  );
}
let Kf = !1;
function mC(e, t) {
  if (
    typeof window > "u" ||
    typeof document > "u" ||
    !Zo(window.location.host) ||
    Us[e] === t ||
    Us[e] ||
    Kf
  )
    return;
  Us[e] = t;
  function n(d) {
    return `__firebase__banner__${d}`;
  }
  const r = "__firebase__banner",
    i = dC().prod.length > 0;
  function o() {
    const d = document.getElementById(r);
    d && d.remove();
  }
  function a(d) {
    (d.style.display = "flex"),
      (d.style.background = "#7faaf0"),
      (d.style.position = "fixed"),
      (d.style.bottom = "5px"),
      (d.style.left = "5px"),
      (d.style.padding = ".5em"),
      (d.style.borderRadius = "5px"),
      (d.style.alignItems = "center");
  }
  function l(d, h) {
    d.setAttribute("width", "24"),
      d.setAttribute("id", h),
      d.setAttribute("height", "24"),
      d.setAttribute("viewBox", "0 0 24 24"),
      d.setAttribute("fill", "none"),
      (d.style.marginLeft = "-6px");
  }
  function c() {
    const d = document.createElement("span");
    return (
      (d.style.cursor = "pointer"),
      (d.style.marginLeft = "16px"),
      (d.style.fontSize = "24px"),
      (d.innerHTML = " &times;"),
      (d.onclick = () => {
        (Kf = !0), o();
      }),
      d
    );
  }
  function u(d, h) {
    d.setAttribute("id", h),
      (d.innerText = "Learn more"),
      (d.href =
        "https://firebase.google.com/docs/studio/preview-apps#preview-backend"),
      d.setAttribute("target", "__blank"),
      (d.style.paddingLeft = "5px"),
      (d.style.textDecoration = "underline");
  }
  function f() {
    const d = hC(r),
      h = n("text"),
      g = document.getElementById(h) || document.createElement("span"),
      w = n("learnmore"),
      k = document.getElementById(w) || document.createElement("a"),
      y = n("preprendIcon"),
      m =
        document.getElementById(y) ||
        document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (d.created) {
      const E = d.element;
      a(E), u(k, w);
      const _ = c();
      l(m, y), E.append(m, g, k, _), document.body.appendChild(E);
    }
    i
      ? ((g.innerText = "Preview backend disconnected."),
        (m.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`))
      : ((m.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`),
        (g.innerText = "Preview backend running in this workspace.")),
      g.setAttribute("id", h);
  }
  document.readyState === "loading"
    ? window.addEventListener("DOMContentLoaded", f)
    : f();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dt() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function gC() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())
  );
}
function pC() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function vC() {
  const e =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function yC() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function _C() {
  const e = dt();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function bC() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function wC() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        s = self.indexedDB.open(r);
      (s.onsuccess = () => {
        s.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (s.onupgradeneeded = () => {
          n = !1;
        }),
        (s.onerror = () => {
          t(s.error?.message || "");
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const EC = "FirebaseError";
class tr extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = EC),
      Object.setPrototypeOf(this, tr.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, fi.prototype.create);
  }
}
class fi {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      s = `${this.service}/${t}`,
      i = this.errors[t],
      o = i ? SC(i, r) : "Error",
      a = `${this.serviceName}: ${o} (${s}).`;
    return new tr(s, a, r);
  }
}
function SC(e, t) {
  return e.replace(CC, (n, r) => {
    const s = t[r];
    return s != null ? String(s) : `<${r}?>`;
  });
}
const CC = /\{\$([^}]+)}/g;
function IC(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function Jr(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const s of n) {
    if (!r.includes(s)) return !1;
    const i = e[s],
      o = t[s];
    if (Gf(i) && Gf(o)) {
      if (!Jr(i, o)) return !1;
    } else if (i !== o) return !1;
  }
  for (const s of r) if (!n.includes(s)) return !1;
  return !0;
}
function Gf(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function di(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((s) => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(s));
        })
      : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return t.length ? "&" + t.join("&") : "";
}
function ws(e) {
  const t = {};
  return (
    e
      .replace(/^\?/, "")
      .split("&")
      .forEach((r) => {
        if (r) {
          const [s, i] = r.split("=");
          t[decodeURIComponent(s)] = decodeURIComponent(i);
        }
      }),
    t
  );
}
function Es(e) {
  const t = e.indexOf("?");
  if (!t) return "";
  const n = e.indexOf("#", t);
  return e.substring(t, n > 0 ? n : void 0);
}
function kC(e, t) {
  const n = new TC(e, t);
  return n.subscribe.bind(n);
}
class TC {
  constructor(t, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          t(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, n, r) {
    let s;
    if (t === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    PC(t, ["next", "error", "complete"])
      ? (s = t)
      : (s = {
          next: t,
          error: n,
          complete: r,
        }),
      s.next === void 0 && (s.next = La),
      s.error === void 0 && (s.error = La),
      s.complete === void 0 && (s.complete = La);
    const i = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? s.error(this.finalError) : s.complete();
          } catch {}
        }),
      this.observers.push(s),
      i
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
  }
  sendOne(t, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          n(this.observers[t]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function PC(e, t) {
  if (typeof e != "object" || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == "function") return !0;
  return !1;
}
function La() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nr(e) {
  return e && e._delegate ? e._delegate : e;
}
class Yr {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cr = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AC {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new uC();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const s = this.getOrInitializeService({
            instanceIdentifier: n,
          });
          s && r.resolve(s);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    const n = this.normalizeInstanceIdentifier(t?.identifier),
      r = t?.optional ?? !1;
    if (this.isInitialized(n) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: n,
        });
      } catch (s) {
        if (r) return null;
        throw s;
      }
    else {
      if (r) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (RC(t))
        try {
          this.getOrInitializeService({
            instanceIdentifier: cr,
          });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const s = this.normalizeInstanceIdentifier(n);
        try {
          const i = this.getOrInitializeService({
            instanceIdentifier: s,
          });
          r.resolve(i);
        } catch {}
      }
    }
  }
  clearInstance(t = cr) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = cr) {
    return this.instances.has(t);
  }
  getOptions(t = cr) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const s = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [i, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(i);
      r === a && o.resolve(s);
    }
    return s;
  }
  onInit(t, n) {
    const r = this.normalizeInstanceIdentifier(n),
      s = this.onInitCallbacks.get(r) ?? new Set();
    s.add(t), this.onInitCallbacks.set(r, s);
    const i = this.instances.get(r);
    return (
      i && t(i, r),
      () => {
        s.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const s of r)
        try {
          s(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: NC(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = cr) {
    return this.component ? (this.component.multipleInstances ? t : cr) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function NC(e) {
  return e === cr ? void 0 : e;
}
function RC(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class OC {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new AC(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ie;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(Ie || (Ie = {}));
const LC = {
    debug: Ie.DEBUG,
    verbose: Ie.VERBOSE,
    info: Ie.INFO,
    warn: Ie.WARN,
    error: Ie.ERROR,
    silent: Ie.SILENT,
  },
  xC = Ie.INFO,
  MC = {
    [Ie.DEBUG]: "log",
    [Ie.VERBOSE]: "log",
    [Ie.INFO]: "info",
    [Ie.WARN]: "warn",
    [Ie.ERROR]: "error",
  },
  DC = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      s = MC[t];
    if (s) console[s](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class jg {
  constructor(t) {
    (this.name = t),
      (this._logLevel = xC),
      (this._logHandler = DC),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in Ie))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? LC[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, Ie.DEBUG, ...t),
      this._logHandler(this, Ie.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, Ie.VERBOSE, ...t),
      this._logHandler(this, Ie.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, Ie.INFO, ...t),
      this._logHandler(this, Ie.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, Ie.WARN, ...t),
      this._logHandler(this, Ie.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, Ie.ERROR, ...t),
      this._logHandler(this, Ie.ERROR, ...t);
  }
}
const FC = (e, t) => t.some((n) => e instanceof n);
let Jf, Yf;
function $C() {
  return (
    Jf ||
    (Jf = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function UC() {
  return (
    Yf ||
    (Yf = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const qg = new WeakMap(),
  Rl = new WeakMap(),
  Hg = new WeakMap(),
  xa = new WeakMap(),
  Dc = new WeakMap();
function BC(e) {
  const t = new Promise((n, r) => {
    const s = () => {
        e.removeEventListener("success", i), e.removeEventListener("error", o);
      },
      i = () => {
        n(zn(e.result)), s();
      },
      o = () => {
        r(e.error), s();
      };
    e.addEventListener("success", i), e.addEventListener("error", o);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && qg.set(n, e);
      })
      .catch(() => {}),
    Dc.set(t, e),
    t
  );
}
function VC(e) {
  if (Rl.has(e)) return;
  const t = new Promise((n, r) => {
    const s = () => {
        e.removeEventListener("complete", i),
          e.removeEventListener("error", o),
          e.removeEventListener("abort", o);
      },
      i = () => {
        n(), s();
      },
      o = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), s();
      };
    e.addEventListener("complete", i),
      e.addEventListener("error", o),
      e.addEventListener("abort", o);
  });
  Rl.set(e, t);
}
let Ol = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return Rl.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || Hg.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return zn(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function WC(e) {
  Ol = e(Ol);
}
function jC(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(Ma(this), t, ...n);
        return Hg.set(r, t.sort ? t.sort() : [t]), zn(r);
      }
    : UC().includes(e)
    ? function (...t) {
        return e.apply(Ma(this), t), zn(qg.get(this));
      }
    : function (...t) {
        return zn(e.apply(Ma(this), t));
      };
}
function qC(e) {
  return typeof e == "function"
    ? jC(e)
    : (e instanceof IDBTransaction && VC(e),
      FC(e, $C()) ? new Proxy(e, Ol) : e);
}
function zn(e) {
  if (e instanceof IDBRequest) return BC(e);
  if (xa.has(e)) return xa.get(e);
  const t = qC(e);
  return t !== e && (xa.set(e, t), Dc.set(t, e)), t;
}
const Ma = (e) => Dc.get(e);
function HC(e, t, { blocked: n, upgrade: r, blocking: s, terminated: i } = {}) {
  const o = indexedDB.open(e, t),
    a = zn(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (l) => {
        r(zn(o.result), l.oldVersion, l.newVersion, zn(o.transaction), l);
      }),
    n && o.addEventListener("blocked", (l) => n(l.oldVersion, l.newVersion, l)),
    a
      .then((l) => {
        i && l.addEventListener("close", () => i()),
          s &&
            l.addEventListener("versionchange", (c) =>
              s(c.oldVersion, c.newVersion, c)
            );
      })
      .catch(() => {}),
    a
  );
}
const zC = ["get", "getKey", "getAll", "getAllKeys", "count"],
  KC = ["put", "add", "delete", "clear"],
  Da = new Map();
function Xf(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (Da.get(t)) return Da.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    s = KC.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(s || zC.includes(n))
  )
    return;
  const i = async function (o, ...a) {
    const l = this.transaction(o, s ? "readwrite" : "readonly");
    let c = l.store;
    return (
      r && (c = c.index(a.shift())),
      (await Promise.all([c[n](...a), s && l.done]))[0]
    );
  };
  return Da.set(t, i), i;
}
WC((e) => ({
  ...e,
  get: (t, n, r) => Xf(t, n) || e.get(t, n, r),
  has: (t, n) => !!Xf(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class GC {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (JC(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function JC(e) {
  return e.getComponent()?.type === "VERSION";
}
const Ll = "@firebase/app",
  Qf = "0.14.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn = new jg("@firebase/app"),
  YC = "@firebase/app-compat",
  XC = "@firebase/analytics-compat",
  QC = "@firebase/analytics",
  ZC = "@firebase/app-check-compat",
  eI = "@firebase/app-check",
  tI = "@firebase/auth",
  nI = "@firebase/auth-compat",
  rI = "@firebase/database",
  sI = "@firebase/data-connect",
  iI = "@firebase/database-compat",
  oI = "@firebase/functions",
  aI = "@firebase/functions-compat",
  lI = "@firebase/installations",
  cI = "@firebase/installations-compat",
  uI = "@firebase/messaging",
  fI = "@firebase/messaging-compat",
  dI = "@firebase/performance",
  hI = "@firebase/performance-compat",
  mI = "@firebase/remote-config",
  gI = "@firebase/remote-config-compat",
  pI = "@firebase/storage",
  vI = "@firebase/storage-compat",
  yI = "@firebase/firestore",
  _I = "@firebase/ai",
  bI = "@firebase/firestore-compat",
  wI = "firebase",
  EI = "12.0.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xl = "[DEFAULT]",
  SI = {
    [Ll]: "fire-core",
    [YC]: "fire-core-compat",
    [QC]: "fire-analytics",
    [XC]: "fire-analytics-compat",
    [eI]: "fire-app-check",
    [ZC]: "fire-app-check-compat",
    [tI]: "fire-auth",
    [nI]: "fire-auth-compat",
    [rI]: "fire-rtdb",
    [sI]: "fire-data-connect",
    [iI]: "fire-rtdb-compat",
    [oI]: "fire-fn",
    [aI]: "fire-fn-compat",
    [lI]: "fire-iid",
    [cI]: "fire-iid-compat",
    [uI]: "fire-fcm",
    [fI]: "fire-fcm-compat",
    [dI]: "fire-perf",
    [hI]: "fire-perf-compat",
    [mI]: "fire-rc",
    [gI]: "fire-rc-compat",
    [pI]: "fire-gcs",
    [vI]: "fire-gcs-compat",
    [yI]: "fire-fst",
    [bI]: "fire-fst-compat",
    [_I]: "fire-vertex",
    "fire-js": "fire-js",
    [wI]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wo = new Map(),
  CI = new Map(),
  Ml = new Map();
function Zf(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    bn.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function ei(e) {
  const t = e.name;
  if (Ml.has(t))
    return (
      bn.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Ml.set(t, e);
  for (const n of wo.values()) Zf(n, e);
  for (const n of CI.values()) Zf(n, e);
  return !0;
}
function zg(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({
    optional: !0,
  });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
function vt(e) {
  return e == null ? !1 : e.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const II = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  Kn = new fi("app", "Firebase", II);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kI {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = {
        ...t,
      }),
      (this._config = {
        ...n,
      }),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Yr("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted)
      throw Kn.create("app-deleted", {
        appName: this._name,
      });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hi = EI;
function Kg(e, t = {}) {
  let n = e;
  typeof t != "object" &&
    (t = {
      name: t,
    });
  const r = {
      name: xl,
      automaticDataCollectionEnabled: !0,
      ...t,
    },
    s = r.name;
  if (typeof s != "string" || !s)
    throw Kn.create("bad-app-name", {
      appName: String(s),
    });
  if ((n || (n = Vg()), !n)) throw Kn.create("no-options");
  const i = wo.get(s);
  if (i) {
    if (Jr(n, i.options) && Jr(r, i.config)) return i;
    throw Kn.create("duplicate-app", {
      appName: s,
    });
  }
  const o = new OC(s);
  for (const l of Ml.values()) o.addComponent(l);
  const a = new kI(n, r, o);
  return wo.set(s, a), a;
}
function TI(e = xl) {
  const t = wo.get(e);
  if (!t && e === xl && Vg()) return Kg();
  if (!t)
    throw Kn.create("no-app", {
      appName: e,
    });
  return t;
}
function Fr(e, t, n) {
  let r = SI[e] ?? e;
  n && (r += `-${n}`);
  const s = r.match(/\s|\//),
    i = t.match(/\s|\//);
  if (s || i) {
    const o = [`Unable to register library "${r}" with version "${t}":`];
    s &&
      o.push(
        `library name "${r}" contains illegal characters (whitespace or "/")`
      ),
      s && i && o.push("and"),
      i &&
        o.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      bn.warn(o.join(" "));
    return;
  }
  ei(
    new Yr(
      `${r}-version`,
      () => ({
        library: r,
        version: t,
      }),
      "VERSION"
    )
  );
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PI = "firebase-heartbeat-database",
  AI = 1,
  ti = "firebase-heartbeat-store";
let Fa = null;
function Gg() {
  return (
    Fa ||
      (Fa = HC(PI, AI, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(ti);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw Kn.create("idb-open", {
          originalErrorMessage: e.message,
        });
      })),
    Fa
  );
}
async function NI(e) {
  try {
    const n = (await Gg()).transaction(ti),
      r = await n.objectStore(ti).get(Jg(e));
    return await n.done, r;
  } catch (t) {
    if (t instanceof tr) bn.warn(t.message);
    else {
      const n = Kn.create("idb-get", {
        originalErrorMessage: t?.message,
      });
      bn.warn(n.message);
    }
  }
}
async function ed(e, t) {
  try {
    const r = (await Gg()).transaction(ti, "readwrite");
    await r.objectStore(ti).put(t, Jg(e)), await r.done;
  } catch (n) {
    if (n instanceof tr) bn.warn(n.message);
    else {
      const r = Kn.create("idb-set", {
        originalErrorMessage: n?.message,
      });
      bn.warn(r.message);
    }
  }
}
function Jg(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const RI = 1024,
  OI = 30;
class LI {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new MI(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    try {
      const n = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        r = td();
      if (
        (this._heartbeatsCache?.heartbeats == null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          this._heartbeatsCache?.heartbeats == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === r ||
        this._heartbeatsCache.heartbeats.some((s) => s.date === r)
      )
        return;
      if (
        (this._heartbeatsCache.heartbeats.push({
          date: r,
          agent: n,
        }),
        this._heartbeatsCache.heartbeats.length > OI)
      ) {
        const s = DI(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(s, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (t) {
      bn.warn(t);
    }
  }
  async getHeartbeatsHeader() {
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        this._heartbeatsCache?.heartbeats == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const t = td(),
        { heartbeatsToSend: n, unsentEntries: r } = xI(
          this._heartbeatsCache.heartbeats
        ),
        s = Ug(
          JSON.stringify({
            version: 2,
            heartbeats: n,
          })
        );
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = t),
        r.length > 0
          ? ((this._heartbeatsCache.heartbeats = r),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        s
      );
    } catch (t) {
      return bn.warn(t), "";
    }
  }
}
function td() {
  return new Date().toISOString().substring(0, 10);
}
function xI(e, t = RI) {
  const n = [];
  let r = e.slice();
  for (const s of e) {
    const i = n.find((o) => o.agent === s.agent);
    if (i) {
      if ((i.dates.push(s.date), nd(n) > t)) {
        i.dates.pop();
        break;
      }
    } else if (
      (n.push({
        agent: s.agent,
        dates: [s.date],
      }),
      nd(n) > t)
    ) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return {
    heartbeatsToSend: n,
    unsentEntries: r,
  };
}
class MI {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return bC()
      ? wC()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await NI(this.app);
      return n?.heartbeats
        ? n
        : {
            heartbeats: [],
          };
    } else
      return {
        heartbeats: [],
      };
  }
  async overwrite(t) {
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return ed(this.app, {
        lastSentHeartbeatDate:
          t.lastSentHeartbeatDate ?? r.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return ed(this.app, {
        lastSentHeartbeatDate:
          t.lastSentHeartbeatDate ?? r.lastSentHeartbeatDate,
        heartbeats: [...r.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function nd(e) {
  return Ug(
    JSON.stringify({
      version: 2,
      heartbeats: e,
    })
  ).length;
}
function DI(e) {
  if (e.length === 0) return -1;
  let t = 0,
    n = e[0].date;
  for (let r = 1; r < e.length; r++)
    e[r].date < n && ((n = e[r].date), (t = r));
  return t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function FI(e) {
  ei(new Yr("platform-logger", (t) => new GC(t), "PRIVATE")),
    ei(new Yr("heartbeat", (t) => new LI(t), "PRIVATE")),
    Fr(Ll, Qf, e),
    Fr(Ll, Qf, "esm2020"),
    Fr("fire-js", "");
}
FI("");
var $I = "firebase",
  UI = "12.0.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Fr($I, UI, "app");
function Yg() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const BI = Yg,
  Xg = new fi("auth", "Firebase", Yg());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Eo = new jg("@firebase/auth");
function VI(e, ...t) {
  Eo.logLevel <= Ie.WARN && Eo.warn(`Auth (${hi}): ${e}`, ...t);
}
function qi(e, ...t) {
  Eo.logLevel <= Ie.ERROR && Eo.error(`Auth (${hi}): ${e}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(e, ...t) {
  throw $c(e, ...t);
}
function Wt(e, ...t) {
  return $c(e, ...t);
}
function Fc(e, t, n) {
  const r = {
    ...BI(),
    [t]: n,
  };
  return new fi("auth", "Firebase", r).create(t, {
    appName: e.name,
  });
}
function Zt(e) {
  return Fc(
    e,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function WI(e, t, n) {
  const r = n;
  if (!(t instanceof r))
    throw (
      (r.name !== t.constructor.name && Nt(e, "argument-error"),
      Fc(
        e,
        "argument-error",
        `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function $c(e, ...t) {
  if (typeof e != "string") {
    const n = t[0],
      r = [...t.slice(1)];
    return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
  }
  return Xg.create(e, ...t);
}
function ae(e, t, ...n) {
  if (!e) throw $c(t, ...n);
}
function hn(e) {
  const t = "INTERNAL ASSERTION FAILED: " + e;
  throw (qi(t), new Error(t));
}
function wn(e, t) {
  e || hn(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dl() {
  return (typeof self < "u" && self.location?.href) || "";
}
function jI() {
  return rd() === "http:" || rd() === "https:";
}
function rd() {
  return (typeof self < "u" && self.location?.protocol) || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qI() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (jI() || vC() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function HI() {
  if (typeof navigator > "u") return null;
  const e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mi {
  constructor(t, n) {
    (this.shortDelay = t),
      (this.longDelay = n),
      wn(n > t, "Short delay should be less than long delay!"),
      (this.isMobile = gC() || yC());
  }
  get() {
    return qI()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Uc(e, t) {
  wn(e.emulator, "Emulator should always be set here");
  const { url: n } = e.emulator;
  return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qg {
  static initialize(t, n, r) {
    (this.fetchImpl = t),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    hn(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    hn(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    hn(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zI = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const KI = [
    "/v1/accounts:signInWithCustomToken",
    "/v1/accounts:signInWithEmailLink",
    "/v1/accounts:signInWithIdp",
    "/v1/accounts:signInWithPassword",
    "/v1/accounts:signInWithPhoneNumber",
    "/v1/token",
  ],
  GI = new mi(3e4, 6e4);
function Pn(e, t) {
  return e.tenantId && !t.tenantId
    ? {
        ...t,
        tenantId: e.tenantId,
      }
    : t;
}
async function tn(e, t, n, r, s = {}) {
  return Zg(e, s, async () => {
    let i = {},
      o = {};
    r &&
      (t === "GET"
        ? (o = r)
        : (i = {
            body: JSON.stringify(r),
          }));
    const a = di({
        key: e.config.apiKey,
        ...o,
      }).slice(1),
      l = await e._getAdditionalHeaders();
    (l["Content-Type"] = "application/json"),
      e.languageCode && (l["X-Firebase-Locale"] = e.languageCode);
    const c = {
      method: t,
      headers: l,
      ...i,
    };
    return (
      pC() || (c.referrerPolicy = "no-referrer"),
      e.emulatorConfig &&
        Zo(e.emulatorConfig.host) &&
        (c.credentials = "include"),
      Qg.fetch()(await ep(e, e.config.apiHost, n, a), c)
    );
  });
}
async function Zg(e, t, n) {
  e._canInitEmulator = !1;
  const r = {
    ...zI,
    ...t,
  };
  try {
    const s = new YI(e),
      i = await Promise.race([n(), s.promise]);
    s.clearNetworkTimeout();
    const o = await i.json();
    if ("needConfirmation" in o)
      throw Ni(e, "account-exists-with-different-credential", o);
    if (i.ok && !("errorMessage" in o)) return o;
    {
      const a = i.ok ? o.errorMessage : o.error.message,
        [l, c] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Ni(e, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS") throw Ni(e, "email-already-in-use", o);
      if (l === "USER_DISABLED") throw Ni(e, "user-disabled", o);
      const u = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (c) throw Fc(e, u, c);
      Nt(e, u);
    }
  } catch (s) {
    if (s instanceof tr) throw s;
    Nt(e, "network-request-failed", {
      message: String(s),
    });
  }
}
async function gi(e, t, n, r, s = {}) {
  const i = await tn(e, t, n, r, s);
  return (
    "mfaPendingCredential" in i &&
      Nt(e, "multi-factor-auth-required", {
        _serverResponse: i,
      }),
    i
  );
}
async function ep(e, t, n, r) {
  const s = `${t}${n}?${r}`,
    i = e,
    o = i.config.emulator ? Uc(e.config, s) : `${e.config.apiScheme}://${s}`;
  return KI.includes(n) &&
    (await i._persistenceManagerAvailable, i._getPersistenceType() === "COOKIE")
    ? i._getPersistence()._getFinalTarget(o).toString()
    : o;
}
function JI(e) {
  switch (e) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
class YI {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(Wt(this.auth, "network-request-failed")),
          GI.get()
        );
      }));
  }
}
function Ni(e, t, n) {
  const r = {
    appName: e.name,
  };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const s = Wt(e, t, r);
  return (s.customData._tokenResponse = n), s;
}
function sd(e) {
  return e !== void 0 && e.enterprise !== void 0;
}
class XI {
  constructor(t) {
    if (
      ((this.siteKey = ""),
      (this.recaptchaEnforcementState = []),
      t.recaptchaKey === void 0)
    )
      throw new Error("recaptchaKey undefined");
    (this.siteKey = t.recaptchaKey.split("/")[3]),
      (this.recaptchaEnforcementState = t.recaptchaEnforcementState);
  }
  getProviderEnforcementState(t) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const n of this.recaptchaEnforcementState)
      if (n.provider && n.provider === t) return JI(n.enforcementState);
    return null;
  }
  isProviderEnabled(t) {
    return (
      this.getProviderEnforcementState(t) === "ENFORCE" ||
      this.getProviderEnforcementState(t) === "AUDIT"
    );
  }
  isAnyProviderEnabled() {
    return (
      this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") ||
      this.isProviderEnabled("PHONE_PROVIDER")
    );
  }
}
async function QI(e, t) {
  return tn(e, "GET", "/v2/recaptchaConfig", Pn(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ZI(e, t) {
  return tn(e, "POST", "/v1/accounts:delete", t);
}
async function So(e, t) {
  return tn(e, "POST", "/v1/accounts:lookup", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bs(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function ek(e, t = !1) {
  const n = nr(e),
    r = await n.getIdToken(t),
    s = Bc(r);
  ae(s && s.exp && s.auth_time && s.iat, n.auth, "internal-error");
  const i = typeof s.firebase == "object" ? s.firebase : void 0,
    o = i?.sign_in_provider;
  return {
    claims: s,
    token: r,
    authTime: Bs($a(s.auth_time)),
    issuedAtTime: Bs($a(s.iat)),
    expirationTime: Bs($a(s.exp)),
    signInProvider: o || null,
    signInSecondFactor: i?.sign_in_second_factor || null,
  };
}
function $a(e) {
  return Number(e) * 1e3;
}
function Bc(e) {
  const [t, n, r] = e.split(".");
  if (t === void 0 || n === void 0 || r === void 0)
    return qi("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const s = Bg(n);
    return s
      ? JSON.parse(s)
      : (qi("Failed to decode base64 JWT payload"), null);
  } catch (s) {
    return qi("Caught error parsing JWT payload as JSON", s?.toString()), null;
  }
}
function id(e) {
  const t = Bc(e);
  return (
    ae(t, "internal-error"),
    ae(typeof t.exp < "u", "internal-error"),
    ae(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xr(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (
      (r instanceof tr &&
        tk(r) &&
        e.auth.currentUser === e &&
        (await e.auth.signOut()),
      r)
    );
  }
}
function tk({ code: e }) {
  return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nk {
  constructor(t) {
    (this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    if (t) {
      const n = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), n;
    } else {
      this.errorBackoff = 3e4;
      const r =
        (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 3e5;
      return Math.max(0, r);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      t?.code === "auth/network-request-failed" && this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fl {
  constructor(t, n) {
    (this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = Bs(this.lastLoginAt)),
      (this.creationTime = Bs(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt,
    };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Co(e) {
  const t = e.auth,
    n = await e.getIdToken(),
    r = await Xr(
      e,
      So(t, {
        idToken: n,
      })
    );
  ae(r?.users.length, t, "internal-error");
  const s = r.users[0];
  e._notifyReloadListener(s);
  const i = s.providerUserInfo?.length ? tp(s.providerUserInfo) : [],
    o = sk(e.providerData, i),
    a = e.isAnonymous,
    l = !(e.email && s.passwordHash) && !o?.length,
    c = a ? l : !1,
    u = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: o,
      metadata: new Fl(s.createdAt, s.lastLoginAt),
      isAnonymous: c,
    };
  Object.assign(e, u);
}
async function rk(e) {
  const t = nr(e);
  await Co(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function sk(e, t) {
  return [
    ...e.filter((r) => !t.some((s) => s.providerId === r.providerId)),
    ...t,
  ];
}
function tp(e) {
  return e.map(({ providerId: t, ...n }) => ({
    providerId: t,
    uid: n.rawId || "",
    displayName: n.displayName || null,
    email: n.email || null,
    phoneNumber: n.phoneNumber || null,
    photoURL: n.photoUrl || null,
  }));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ik(e, t) {
  const n = await Zg(e, {}, async () => {
    const r = di({
        grant_type: "refresh_token",
        refresh_token: t,
      }).slice(1),
      { tokenApiHost: s, apiKey: i } = e.config,
      o = await ep(e, s, "/v1/token", `key=${i}`),
      a = await e._getAdditionalHeaders();
    a["Content-Type"] = "application/x-www-form-urlencoded";
    const l = {
      method: "POST",
      headers: a,
      body: r,
    };
    return (
      e.emulatorConfig &&
        Zo(e.emulatorConfig.host) &&
        (l.credentials = "include"),
      Qg.fetch()(o, l)
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
async function ok(e, t) {
  return tn(e, "POST", "/v2/accounts:revokeToken", Pn(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $r {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    ae(t.idToken, "internal-error"),
      ae(typeof t.idToken < "u", "internal-error"),
      ae(typeof t.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in t && typeof t.expiresIn < "u"
        ? Number(t.expiresIn)
        : id(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  updateFromIdToken(t) {
    ae(t.length !== 0, "internal-error");
    const n = id(t);
    this.updateTokensAndExpiration(t, null, n);
  }
  async getToken(t, n = !1) {
    return !n && this.accessToken && !this.isExpired
      ? this.accessToken
      : (ae(this.refreshToken, t, "user-token-expired"),
        this.refreshToken
          ? (await this.refresh(t, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, n) {
    const { accessToken: r, refreshToken: s, expiresIn: i } = await ik(t, n);
    this.updateTokensAndExpiration(r, s, Number(i));
  }
  updateTokensAndExpiration(t, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: s, expirationTime: i } = n,
      o = new $r();
    return (
      r &&
        (ae(typeof r == "string", "internal-error", {
          appName: t,
        }),
        (o.refreshToken = r)),
      s &&
        (ae(typeof s == "string", "internal-error", {
          appName: t,
        }),
        (o.accessToken = s)),
      i &&
        (ae(typeof i == "number", "internal-error", {
          appName: t,
        }),
        (o.expirationTime = i)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(t) {
    (this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new $r(), this.toJSON());
  }
  _performRefresh() {
    return hn("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function On(e, t) {
  ae(typeof e == "string" || typeof e > "u", "internal-error", {
    appName: t,
  });
}
class $t {
  constructor({ uid: t, auth: n, stsTokenManager: r, ...s }) {
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new nk(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = t),
      (this.auth = n),
      (this.stsTokenManager = r),
      (this.accessToken = r.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new Fl(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const n = await Xr(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      ae(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(t) {
    return ek(this, t);
  }
  reload() {
    return rk(this);
  }
  _assign(t) {
    this !== t &&
      (ae(this.uid === t.uid, this.auth, "internal-error"),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((n) => ({
        ...n,
      }))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const n = new $t({
      ...this,
      auth: t,
      stsTokenManager: this.stsTokenManager._clone(),
    });
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(t) {
    ae(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, n = !1) {
    let r = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
      n && (await Co(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (vt(this.auth.app)) return Promise.reject(Zt(this.auth));
    const t = await this.getIdToken();
    return (
      await Xr(
        this,
        ZI(this.auth, {
          idToken: t,
        })
      ),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return {
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((t) => ({
        ...t,
      })),
      stsTokenManager: this.stsTokenManager.toJSON(),
      _redirectEventId: this._redirectEventId,
      ...this.metadata.toJSON(),
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name,
    };
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(t, n) {
    const r = n.displayName ?? void 0,
      s = n.email ?? void 0,
      i = n.phoneNumber ?? void 0,
      o = n.photoURL ?? void 0,
      a = n.tenantId ?? void 0,
      l = n._redirectEventId ?? void 0,
      c = n.createdAt ?? void 0,
      u = n.lastLoginAt ?? void 0,
      {
        uid: f,
        emailVerified: d,
        isAnonymous: h,
        providerData: g,
        stsTokenManager: w,
      } = n;
    ae(f && w, t, "internal-error");
    const k = $r.fromJSON(this.name, w);
    ae(typeof f == "string", t, "internal-error"),
      On(r, t.name),
      On(s, t.name),
      ae(typeof d == "boolean", t, "internal-error"),
      ae(typeof h == "boolean", t, "internal-error"),
      On(i, t.name),
      On(o, t.name),
      On(a, t.name),
      On(l, t.name),
      On(c, t.name),
      On(u, t.name);
    const y = new $t({
      uid: f,
      auth: t,
      email: s,
      emailVerified: d,
      displayName: r,
      isAnonymous: h,
      photoURL: o,
      phoneNumber: i,
      tenantId: a,
      stsTokenManager: k,
      createdAt: c,
      lastLoginAt: u,
    });
    return (
      g &&
        Array.isArray(g) &&
        (y.providerData = g.map((m) => ({
          ...m,
        }))),
      l && (y._redirectEventId = l),
      y
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const s = new $r();
    s.updateFromServerResponse(n);
    const i = new $t({
      uid: n.localId,
      auth: t,
      stsTokenManager: s,
      isAnonymous: r,
    });
    return await Co(i), i;
  }
  static async _fromGetAccountInfoResponse(t, n, r) {
    const s = n.users[0];
    ae(s.localId !== void 0, "internal-error");
    const i = s.providerUserInfo !== void 0 ? tp(s.providerUserInfo) : [],
      o = !(s.email && s.passwordHash) && !i?.length,
      a = new $r();
    a.updateFromIdToken(r);
    const l = new $t({
        uid: s.localId,
        auth: t,
        stsTokenManager: a,
        isAnonymous: o,
      }),
      c = {
        uid: s.localId,
        displayName: s.displayName || null,
        photoURL: s.photoUrl || null,
        email: s.email || null,
        emailVerified: s.emailVerified || !1,
        phoneNumber: s.phoneNumber || null,
        tenantId: s.tenantId || null,
        providerData: i,
        metadata: new Fl(s.createdAt, s.lastLoginAt),
        isAnonymous: !(s.email && s.passwordHash) && !i?.length,
      };
    return Object.assign(l, c), l;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const od = new Map();
function mn(e) {
  wn(e instanceof Function, "Expected a class definition");
  let t = od.get(e);
  return t
    ? (wn(t instanceof e, "Instance stored in cache mismatched with class"), t)
    : ((t = new e()), od.set(e, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class np {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, n) {
    this.storage[t] = n;
  }
  async _get(t) {
    const n = this.storage[t];
    return n === void 0 ? null : n;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
np.type = "NONE";
const ad = np;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hi(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class Ur {
  constructor(t, n, r) {
    (this.persistence = t), (this.auth = n), (this.userKey = r);
    const { config: s, name: i } = this.auth;
    (this.fullUserKey = Hi(this.userKey, s.apiKey, i)),
      (this.fullPersistenceKey = Hi("persistence", s.apiKey, i)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    if (!t) return null;
    if (typeof t == "string") {
      const n = await So(this.auth, {
        idToken: t,
      }).catch(() => {});
      return n ? $t._fromGetAccountInfoResponse(this.auth, n, t) : null;
    }
    return $t._fromJSON(this.auth, t);
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, n, r = "authUser") {
    if (!n.length) return new Ur(mn(ad), t, r);
    const s = (
      await Promise.all(
        n.map(async (c) => {
          if (await c._isAvailable()) return c;
        })
      )
    ).filter((c) => c);
    let i = s[0] || mn(ad);
    const o = Hi(r, t.config.apiKey, t.name);
    let a = null;
    for (const c of n)
      try {
        const u = await c._get(o);
        if (u) {
          let f;
          if (typeof u == "string") {
            const d = await So(t, {
              idToken: u,
            }).catch(() => {});
            if (!d) break;
            f = await $t._fromGetAccountInfoResponse(t, d, u);
          } else f = $t._fromJSON(t, u);
          c !== i && (a = f), (i = c);
          break;
        }
      } catch {}
    const l = s.filter((c) => c._shouldAllowMigration);
    return !i._shouldAllowMigration || !l.length
      ? new Ur(i, t, r)
      : ((i = l[0]),
        a && (await i._set(o, a.toJSON())),
        await Promise.all(
          n.map(async (c) => {
            if (c !== i)
              try {
                await c._remove(o);
              } catch {}
          })
        ),
        new Ur(i, t, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ld(e) {
  const t = e.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (op(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (rp(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (lp(t)) return "Blackberry";
  if (cp(t)) return "Webos";
  if (sp(t)) return "Safari";
  if ((t.includes("chrome/") || ip(t)) && !t.includes("edge/")) return "Chrome";
  if (ap(t)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if (r?.length === 2) return r[1];
  }
  return "Other";
}
function rp(e = dt()) {
  return /firefox\//i.test(e);
}
function sp(e = dt()) {
  const t = e.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function ip(e = dt()) {
  return /crios\//i.test(e);
}
function op(e = dt()) {
  return /iemobile/i.test(e);
}
function ap(e = dt()) {
  return /android/i.test(e);
}
function lp(e = dt()) {
  return /blackberry/i.test(e);
}
function cp(e = dt()) {
  return /webos/i.test(e);
}
function Vc(e = dt()) {
  return (
    /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  );
}
function ak(e = dt()) {
  return Vc(e) && !!window.navigator?.standalone;
}
function lk() {
  return _C() && document.documentMode === 10;
}
function up(e = dt()) {
  return Vc(e) || ap(e) || cp(e) || lp(e) || /windows phone/i.test(e) || op(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fp(e, t = []) {
  let n;
  switch (e) {
    case "Browser":
      n = ld(dt());
      break;
    case "Worker":
      n = `${ld(dt())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${hi}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ck {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, n) {
    const r = (i) =>
      new Promise((o, a) => {
        try {
          const l = t(i);
          o(l);
        } catch (l) {
          a(l);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const s = this.queue.length - 1;
    return () => {
      this.queue[s] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const s of n)
        try {
          s();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r?.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function uk(e, t = {}) {
  return tn(e, "GET", "/v2/passwordPolicy", Pn(e, t));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fk = 6;
class dk {
  constructor(t) {
    const n = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        n.minPasswordLength ?? fk),
      n.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = n.maxPasswordLength),
      n.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          n.containsLowercaseCharacter),
      n.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          n.containsUppercaseCharacter),
      n.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          n.containsNumericCharacter),
      n.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          n.containsNonAlphanumericCharacter),
      (this.enforcementState = t.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        t.allowedNonAlphanumericCharacters?.join("") ?? ""),
      (this.forceUpgradeOnSignin = t.forceUpgradeOnSignin ?? !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    const n = {
      isValid: !0,
      passwordPolicy: this,
    };
    return (
      this.validatePasswordLengthOptions(t, n),
      this.validatePasswordCharacterOptions(t, n),
      n.isValid && (n.isValid = n.meetsMinPasswordLength ?? !0),
      n.isValid && (n.isValid = n.meetsMaxPasswordLength ?? !0),
      n.isValid && (n.isValid = n.containsLowercaseLetter ?? !0),
      n.isValid && (n.isValid = n.containsUppercaseLetter ?? !0),
      n.isValid && (n.isValid = n.containsNumericCharacter ?? !0),
      n.isValid && (n.isValid = n.containsNonAlphanumericCharacter ?? !0),
      n
    );
  }
  validatePasswordLengthOptions(t, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      s = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = t.length >= r),
      s && (n.meetsMaxPasswordLength = t.length <= s);
  }
  validatePasswordCharacterOptions(t, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let s = 0; s < t.length; s++)
      (r = t.charAt(s)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= "a" && r <= "z",
          r >= "A" && r <= "Z",
          r >= "0" && r <= "9",
          this.allowedNonAlphanumericCharacters.includes(r)
        );
  }
  updatePasswordCharacterOptionsStatuses(t, n, r, s, i) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = s)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter ||
          (t.containsNonAlphanumericCharacter = i));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hk {
  constructor(t, n, r, s) {
    (this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = s),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new cd(this)),
      (this.idTokenSubscription = new cd(this)),
      (this.beforeStateQueue = new ck(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = Xg),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this._resolvePersistenceManagerAvailable = void 0),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = {
        appVerificationDisabledForTesting: !1,
      }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = s.sdkClientVersion),
      (this._persistenceManagerAvailable = new Promise(
        (i) => (this._resolvePersistenceManagerAvailable = i)
      ));
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = mn(n)),
      (this._initializationPromise = this.queue(async () => {
        if (
          !this._deleted &&
          ((this.persistenceManager = await Ur.create(this, t)),
          this._resolvePersistenceManagerAvailable?.(),
          !this._deleted)
        ) {
          if (this._popupRedirectResolver?._shouldInitProactively)
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid = this.currentUser?.uid || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUserFromIdToken(t) {
    try {
      const n = await So(this, {
          idToken: t,
        }),
        r = await $t._fromGetAccountInfoResponse(this, n, t);
      await this.directlySetCurrentUser(r);
    } catch (n) {
      console.warn(
        "FirebaseServerApp could not login user with provided authIdToken: ",
        n
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(t) {
    if (vt(this.app)) {
      const i = this.app.settings.authIdToken;
      return i
        ? new Promise((o) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(i).then(o, o)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const n = await this.assertedPersistence.getCurrentUser();
    let r = n,
      s = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const i = this.redirectUser?._redirectEventId,
        o = r?._redirectEventId,
        a = await this.tryRedirectSignIn(t);
      (!i || i === o) && a?.user && ((r = a.user), (s = !0));
    }
    if (!r) return this.directlySetCurrentUser(null);
    if (!r._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(r);
        } catch (i) {
          (r = n),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(i)
            );
        }
      return r
        ? this.reloadAndSetCurrentUserOrClear(r)
        : this.directlySetCurrentUser(null);
    }
    return (
      ae(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === r._redirectEventId
        ? this.directlySetCurrentUser(r)
        : this.reloadAndSetCurrentUserOrClear(r)
    );
  }
  async tryRedirectSignIn(t) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await Co(t);
    } catch (n) {
      if (n?.code !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = HI();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    if (vt(this.app)) return Promise.reject(Zt(this));
    const n = t ? nr(t) : null;
    return (
      n &&
        ae(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(t, n = !1) {
    if (!this._deleted)
      return (
        t && ae(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return vt(this.app)
      ? Promise.reject(Zt(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(t) {
    return vt(this.app)
      ? Promise.reject(Zt(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(mn(t));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {}
          )
        )
      : n.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await uk(this),
      n = new dk(t);
    this.tenantId === null
      ? (this._projectPasswordPolicy = n)
      : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(t) {
    this._errorFactory = new fi("auth", "Firebase", t());
  }
  onAuthStateChanged(t, n, r) {
    return this.registerStateListener(this.authStateSubscription, t, n, r);
  }
  beforeAuthStateChanged(t, n) {
    return this.beforeStateQueue.pushCallback(t, n);
  }
  onIdTokenChanged(t, n, r) {
    return this.registerStateListener(this.idTokenSubscription, t, n, r);
  }
  authStateReady() {
    return new Promise((t, n) => {
      if (this.currentUser) t();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), t();
        }, n);
      }
    });
  }
  async revokeAccessToken(t) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(),
        r = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: t,
          idToken: n,
        };
      this.tenantId != null && (r.tenantId = this.tenantId), await ok(this, r);
    }
  }
  toJSON() {
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: this._currentUser?.toJSON(),
    };
  }
  async _setRedirectUser(t, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return t === null ? r.removeCurrentUser() : r.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const n = (t && mn(t)) || this._popupRedirectResolver;
      ae(n, this, "argument-error"),
        (this.redirectPersistenceManager = await Ur.create(
          this,
          [mn(n._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    return (
      this._isInitialized && (await this.queue(async () => {})),
      this._currentUser?._redirectEventId === t
        ? this._currentUser
        : this.redirectUser?._redirectEventId === t
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const t = this.currentUser?.uid ?? null;
    this.lastNotifiedUid !== t &&
      ((this.lastNotifiedUid = t),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, n, r, s) {
    if (this._deleted) return () => {};
    const i = typeof n == "function" ? n : n.next.bind(n);
    let o = !1;
    const a = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (ae(a, this, "internal-error"),
      a.then(() => {
        o || i(this.currentUser);
      }),
      typeof n == "function")
    ) {
      const l = t.addObserver(n, r, s);
      return () => {
        (o = !0), l();
      };
    } else {
      const l = t.addObserver(n);
      return () => {
        (o = !0), l();
      };
    }
  }
  async directlySetCurrentUser(t) {
    this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return (
      ae(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = fp(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    const t = {
      "X-Client-Version": this.clientVersion,
    };
    this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId);
    const n = await this.heartbeatServiceProvider
      .getImmediate({
        optional: !0,
      })
      ?.getHeartbeatsHeader();
    n && (t["X-Firebase-Client"] = n);
    const r = await this._getAppCheckToken();
    return r && (t["X-Firebase-AppCheck"] = r), t;
  }
  async _getAppCheckToken() {
    if (vt(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const t = await this.appCheckServiceProvider
      .getImmediate({
        optional: !0,
      })
      ?.getToken();
    return (
      t?.error && VI(`Error while retrieving App Check token: ${t.error}`),
      t?.token
    );
  }
}
function nn(e) {
  return nr(e);
}
class cd {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = kC((n) => (this.observer = n)));
  }
  get next() {
    return (
      ae(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ea = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function mk(e) {
  ea = e;
}
function dp(e) {
  return ea.loadJS(e);
}
function gk() {
  return ea.recaptchaEnterpriseScript;
}
function pk() {
  return ea.gapiScript;
}
function vk(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
class yk {
  constructor() {
    this.enterprise = new _k();
  }
  ready(t) {
    t();
  }
  execute(t, n) {
    return Promise.resolve("token");
  }
  render(t, n) {
    return "";
  }
}
class _k {
  ready(t) {
    t();
  }
  execute(t, n) {
    return Promise.resolve("token");
  }
  render(t, n) {
    return "";
  }
}
const bk = "recaptcha-enterprise",
  hp = "NO_RECAPTCHA";
class wk {
  constructor(t) {
    (this.type = bk), (this.auth = nn(t));
  }
  async verify(t = "verify", n = !1) {
    async function r(i) {
      if (!n) {
        if (i.tenantId == null && i._agentRecaptchaConfig != null)
          return i._agentRecaptchaConfig.siteKey;
        if (
          i.tenantId != null &&
          i._tenantRecaptchaConfigs[i.tenantId] !== void 0
        )
          return i._tenantRecaptchaConfigs[i.tenantId].siteKey;
      }
      return new Promise(async (o, a) => {
        QI(i, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE",
        })
          .then((l) => {
            if (l.recaptchaKey === void 0)
              a(new Error("recaptcha Enterprise site key undefined"));
            else {
              const c = new XI(l);
              return (
                i.tenantId == null
                  ? (i._agentRecaptchaConfig = c)
                  : (i._tenantRecaptchaConfigs[i.tenantId] = c),
                o(c.siteKey)
              );
            }
          })
          .catch((l) => {
            a(l);
          });
      });
    }
    function s(i, o, a) {
      const l = window.grecaptcha;
      sd(l)
        ? l.enterprise.ready(() => {
            l.enterprise
              .execute(i, {
                action: t,
              })
              .then((c) => {
                o(c);
              })
              .catch(() => {
                o(hp);
              });
          })
        : a(Error("No reCAPTCHA enterprise script loaded."));
    }
    return this.auth.settings.appVerificationDisabledForTesting
      ? new yk().execute("siteKey", {
          action: "verify",
        })
      : new Promise((i, o) => {
          r(this.auth)
            .then((a) => {
              if (!n && sd(window.grecaptcha)) s(a, i, o);
              else {
                if (typeof window > "u") {
                  o(
                    new Error("RecaptchaVerifier is only supported in browser")
                  );
                  return;
                }
                let l = gk();
                l.length !== 0 && (l += a),
                  dp(l)
                    .then(() => {
                      s(a, i, o);
                    })
                    .catch((c) => {
                      o(c);
                    });
              }
            })
            .catch((a) => {
              o(a);
            });
        });
  }
}
async function ud(e, t, n, r = !1, s = !1) {
  const i = new wk(e);
  let o;
  if (s) o = hp;
  else
    try {
      o = await i.verify(n);
    } catch {
      o = await i.verify(n, !0);
    }
  const a = {
    ...t,
  };
  if (n === "mfaSmsEnrollment" || n === "mfaSmsSignIn") {
    if ("phoneEnrollmentInfo" in a) {
      const l = a.phoneEnrollmentInfo.phoneNumber,
        c = a.phoneEnrollmentInfo.recaptchaToken;
      Object.assign(a, {
        phoneEnrollmentInfo: {
          phoneNumber: l,
          recaptchaToken: c,
          captchaResponse: o,
          clientType: "CLIENT_TYPE_WEB",
          recaptchaVersion: "RECAPTCHA_ENTERPRISE",
        },
      });
    } else if ("phoneSignInInfo" in a) {
      const l = a.phoneSignInInfo.recaptchaToken;
      Object.assign(a, {
        phoneSignInInfo: {
          recaptchaToken: l,
          captchaResponse: o,
          clientType: "CLIENT_TYPE_WEB",
          recaptchaVersion: "RECAPTCHA_ENTERPRISE",
        },
      });
    }
    return a;
  }
  return (
    r
      ? Object.assign(a, {
          captchaResp: o,
        })
      : Object.assign(a, {
          captchaResponse: o,
        }),
    Object.assign(a, {
      clientType: "CLIENT_TYPE_WEB",
    }),
    Object.assign(a, {
      recaptchaVersion: "RECAPTCHA_ENTERPRISE",
    }),
    a
  );
}
async function Io(e, t, n, r, s) {
  if (e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
    const i = await ud(e, t, n, n === "getOobCode");
    return r(e, i);
  } else
    return r(e, t).catch(async (i) => {
      if (i.code === "auth/missing-recaptcha-token") {
        console.log(
          `${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
        );
        const o = await ud(e, t, n, n === "getOobCode");
        return r(e, o);
      } else return Promise.reject(i);
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ek(e, t) {
  const n = zg(e, "auth");
  if (n.isInitialized()) {
    const s = n.getImmediate(),
      i = n.getOptions();
    if (Jr(i, t ?? {})) return s;
    Nt(s, "already-initialized");
  }
  return n.initialize({
    options: t,
  });
}
function Sk(e, t) {
  const n = t?.persistence || [],
    r = (Array.isArray(n) ? n : [n]).map(mn);
  t?.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(r, t?.popupRedirectResolver);
}
function Ck(e, t, n) {
  const r = nn(e);
  ae(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
  const s = !1,
    i = mp(t),
    { host: o, port: a } = Ik(t),
    l = a === null ? "" : `:${a}`,
    c = {
      url: `${i}//${o}${l}/`,
    },
    u = Object.freeze({
      host: o,
      port: a,
      protocol: i.replace(":", ""),
      options: Object.freeze({
        disableWarnings: s,
      }),
    });
  if (!r._canInitEmulator) {
    ae(r.config.emulator && r.emulatorConfig, r, "emulator-config-failed"),
      ae(
        Jr(c, r.config.emulator) && Jr(u, r.emulatorConfig),
        r,
        "emulator-config-failed"
      );
    return;
  }
  (r.config.emulator = c),
    (r.emulatorConfig = u),
    (r.settings.appVerificationDisabledForTesting = !0),
    Zo(o) ? (fC(`${i}//${o}${l}`), mC("Auth", !0)) : kk();
}
function mp(e) {
  const t = e.indexOf(":");
  return t < 0 ? "" : e.substr(0, t + 1);
}
function Ik(e) {
  const t = mp(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n)
    return {
      host: "",
      port: null,
    };
  const r = n[2].split("@").pop() || "",
    s = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (s) {
    const i = s[1];
    return {
      host: i,
      port: fd(r.substr(i.length + 1)),
    };
  } else {
    const [i, o] = r.split(":");
    return {
      host: i,
      port: fd(o),
    };
  }
}
function fd(e) {
  if (!e) return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function kk() {
  function e() {
    const t = document.createElement("p"),
      n = t.style;
    (t.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (n.position = "fixed"),
      (n.width = "100%"),
      (n.backgroundColor = "#ffffff"),
      (n.border = ".1em solid #000000"),
      (n.color = "#b50000"),
      (n.bottom = "0px"),
      (n.left = "0px"),
      (n.margin = "0px"),
      (n.zIndex = "10000"),
      (n.textAlign = "center"),
      t.classList.add("firebase-emulator-warning"),
      document.body.appendChild(t);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", e)
        : e());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wc {
  constructor(t, n) {
    (this.providerId = t), (this.signInMethod = n);
  }
  toJSON() {
    return hn("not implemented");
  }
  _getIdTokenResponse(t) {
    return hn("not implemented");
  }
  _linkToIdToken(t, n) {
    return hn("not implemented");
  }
  _getReauthenticationResolver(t) {
    return hn("not implemented");
  }
}
async function Tk(e, t) {
  return tn(e, "POST", "/v1/accounts:signUp", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pk(e, t) {
  return gi(e, "POST", "/v1/accounts:signInWithPassword", Pn(e, t));
}
async function Ak(e, t) {
  return tn(e, "POST", "/v1/accounts:sendOobCode", Pn(e, t));
}
async function Nk(e, t) {
  return Ak(e, t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rk(e, t) {
  return gi(e, "POST", "/v1/accounts:signInWithEmailLink", Pn(e, t));
}
async function Ok(e, t) {
  return gi(e, "POST", "/v1/accounts:signInWithEmailLink", Pn(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ni extends Wc {
  constructor(t, n, r, s = null) {
    super("password", r),
      (this._email = t),
      (this._password = n),
      (this._tenantId = s);
  }
  static _fromEmailAndPassword(t, n) {
    return new ni(t, n, "password");
  }
  static _fromEmailAndCode(t, n, r = null) {
    return new ni(t, n, "emailLink", r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t;
    if (n?.email && n?.password) {
      if (n.signInMethod === "password")
        return this._fromEmailAndPassword(n.email, n.password);
      if (n.signInMethod === "emailLink")
        return this._fromEmailAndCode(n.email, n.password, n.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(t) {
    switch (this.signInMethod) {
      case "password":
        const n = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return Io(t, n, "signInWithPassword", Pk);
      case "emailLink":
        return Rk(t, {
          email: this._email,
          oobCode: this._password,
        });
      default:
        Nt(t, "internal-error");
    }
  }
  async _linkToIdToken(t, n) {
    switch (this.signInMethod) {
      case "password":
        const r = {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return Io(t, r, "signUpPassword", Tk);
      case "emailLink":
        return Ok(t, {
          idToken: n,
          email: this._email,
          oobCode: this._password,
        });
      default:
        Nt(t, "internal-error");
    }
  }
  _getReauthenticationResolver(t) {
    return this._getIdTokenResponse(t);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Br(e, t) {
  return gi(e, "POST", "/v1/accounts:signInWithIdp", Pn(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lk = "http://localhost";
class _r extends Wc {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const n = new _r(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (n.idToken = t.idToken),
          t.accessToken && (n.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (n.nonce = t.nonce),
          t.pendingToken && (n.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
        : Nt("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t,
      { providerId: r, signInMethod: s, ...i } = n;
    if (!r || !s) return null;
    const o = new _r(r, s);
    return (
      (o.idToken = i.idToken || void 0),
      (o.accessToken = i.accessToken || void 0),
      (o.secret = i.secret),
      (o.nonce = i.nonce),
      (o.pendingToken = i.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(t) {
    const n = this.buildRequest();
    return Br(t, n);
  }
  _linkToIdToken(t, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Br(t, r);
  }
  _getReauthenticationResolver(t) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Br(t, n);
  }
  buildRequest() {
    const t = {
      requestUri: Lk,
      returnSecureToken: !0,
    };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (t.postBody = di(n));
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xk(e) {
  switch (e) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function Mk(e) {
  const t = ws(Es(e)).link,
    n = t ? ws(Es(t)).deep_link_id : null,
    r = ws(Es(e)).deep_link_id;
  return (r ? ws(Es(r)).link : null) || r || n || t || e;
}
class jc {
  constructor(t) {
    const n = ws(Es(t)),
      r = n.apiKey ?? null,
      s = n.oobCode ?? null,
      i = xk(n.mode ?? null);
    ae(r && s && i, "argument-error"),
      (this.apiKey = r),
      (this.operation = i),
      (this.code = s),
      (this.continueUrl = n.continueUrl ?? null),
      (this.languageCode = n.lang ?? null),
      (this.tenantId = n.tenantId ?? null);
  }
  static parseLink(t) {
    const n = Mk(t);
    try {
      return new jc(n);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ss {
  constructor() {
    this.providerId = ss.PROVIDER_ID;
  }
  static credential(t, n) {
    return ni._fromEmailAndPassword(t, n);
  }
  static credentialWithLink(t, n) {
    const r = jc.parseLink(n);
    return ae(r, "argument-error"), ni._fromEmailAndCode(t, r.code, r.tenantId);
  }
}
ss.PROVIDER_ID = "password";
ss.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
ss.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qc {
  constructor(t) {
    (this.providerId = t),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return (this.customParameters = t), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pi extends qc {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jn extends pi {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return _r._fromParams({
      providerId: jn.PROVIDER_ID,
      signInMethod: jn.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return jn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return jn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return jn.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
jn.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
jn.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt extends pi {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, n) {
    return _r._fromParams({
      providerId: Dt.PROVIDER_ID,
      signInMethod: Dt.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return Dt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Dt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return Dt.credential(n, r);
    } catch {
      return null;
    }
  }
}
Dt.GOOGLE_SIGN_IN_METHOD = "google.com";
Dt.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qn extends pi {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return _r._fromParams({
      providerId: qn.PROVIDER_ID,
      signInMethod: qn.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return qn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return qn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return qn.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
qn.GITHUB_SIGN_IN_METHOD = "github.com";
qn.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class un extends pi {
  constructor() {
    super("twitter.com");
  }
  static credential(t, n) {
    return _r._fromParams({
      providerId: un.PROVIDER_ID,
      signInMethod: un.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return un.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return un.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return un.credential(n, r);
    } catch {
      return null;
    }
  }
}
un.TWITTER_SIGN_IN_METHOD = "twitter.com";
un.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function gp(e, t) {
  return gi(e, "POST", "/v1/accounts:signUp", Pn(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class En {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, n, r, s = !1) {
    const i = await $t._fromIdTokenResponse(t, r, s),
      o = dd(r);
    return new En({
      user: i,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    const s = dd(r);
    return new En({
      user: t,
      providerId: s,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function dd(e) {
  return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Dk(e) {
  if (vt(e.app)) return Promise.reject(Zt(e));
  const t = nn(e);
  if ((await t._initializationPromise, t.currentUser?.isAnonymous))
    return new En({
      user: t.currentUser,
      providerId: null,
      operationType: "signIn",
    });
  const n = await gp(t, {
      returnSecureToken: !0,
    }),
    r = await En._fromIdTokenResponse(t, "signIn", n, !0);
  return await t._updateCurrentUser(r.user), r;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ko extends tr {
  constructor(t, n, r, s) {
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = s),
      Object.setPrototypeOf(this, ko.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: t.tenantId ?? void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(t, n, r, s) {
    return new ko(t, n, r, s);
  }
}
function pp(e, t, n, r) {
  return (
    t === "reauthenticate"
      ? n._getReauthenticationResolver(e)
      : n._getIdTokenResponse(e)
  ).catch((i) => {
    throw i.code === "auth/multi-factor-auth-required"
      ? ko._fromErrorAndOperation(e, i, t, r)
      : i;
  });
}
async function Fk(e, t, n = !1) {
  const r = await Xr(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return En._forOperation(e, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $k(e, t, n = !1) {
  const { auth: r } = e;
  if (vt(r.app)) return Promise.reject(Zt(r));
  const s = "reauthenticate";
  try {
    const i = await Xr(e, pp(r, s, t, e), n);
    ae(i.idToken, r, "internal-error");
    const o = Bc(i.idToken);
    ae(o, r, "internal-error");
    const { sub: a } = o;
    return ae(e.uid === a, r, "user-mismatch"), En._forOperation(e, s, i);
  } catch (i) {
    throw (i?.code === "auth/user-not-found" && Nt(r, "user-mismatch"), i);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function vp(e, t, n = !1) {
  if (vt(e.app)) return Promise.reject(Zt(e));
  const r = "signIn",
    s = await pp(e, r, t),
    i = await En._fromIdTokenResponse(e, r, s);
  return n || (await e._updateCurrentUser(i.user)), i;
}
async function Uk(e, t) {
  return vp(nn(e), t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yp(e) {
  const t = nn(e);
  t._getPasswordPolicyInternal() && (await t._updatePasswordPolicy());
}
async function Bk(e, t, n) {
  const r = nn(e);
  await Io(
    r,
    {
      requestType: "PASSWORD_RESET",
      email: t,
      clientType: "CLIENT_TYPE_WEB",
    },
    "getOobCode",
    Nk
  );
}
async function Vk(e, t, n) {
  if (vt(e.app)) return Promise.reject(Zt(e));
  const r = nn(e),
    o = await Io(
      r,
      {
        returnSecureToken: !0,
        email: t,
        password: n,
        clientType: "CLIENT_TYPE_WEB",
      },
      "signUpPassword",
      gp
    ).catch((l) => {
      throw (l.code === "auth/password-does-not-meet-requirements" && yp(e), l);
    }),
    a = await En._fromIdTokenResponse(r, "signIn", o);
  return await r._updateCurrentUser(a.user), a;
}
function Wk(e, t, n) {
  return vt(e.app)
    ? Promise.reject(Zt(e))
    : Uk(nr(e), ss.credential(t, n)).catch(async (r) => {
        throw (
          (r.code === "auth/password-does-not-meet-requirements" && yp(e), r)
        );
      });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function jk(e, t) {
  return tn(e, "POST", "/v1/accounts:update", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qk(e, { displayName: t, photoURL: n }) {
  if (t === void 0 && n === void 0) return;
  const r = nr(e),
    i = {
      idToken: await r.getIdToken(),
      displayName: t,
      photoUrl: n,
      returnSecureToken: !0,
    },
    o = await Xr(r, jk(r.auth, i));
  (r.displayName = o.displayName || null), (r.photoURL = o.photoUrl || null);
  const a = r.providerData.find(({ providerId: l }) => l === "password");
  a && ((a.displayName = r.displayName), (a.photoURL = r.photoURL)),
    await r._updateTokensIfNecessary(o);
}
function Hk(e, t, n, r) {
  return nr(e).onIdTokenChanged(t, n, r);
}
function zk(e, t, n) {
  return nr(e).beforeAuthStateChanged(t, n);
}
const To = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _p {
  constructor(t, n) {
    (this.storageRetriever = t), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(To, "1"),
          this.storage.removeItem(To),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, n) {
    return this.storage.setItem(t, JSON.stringify(n)), Promise.resolve();
  }
  _get(t) {
    const n = this.storage.getItem(t);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kk = 1e3,
  Gk = 10;
class bp extends _p {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = up()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        s = this.localCache[n];
      r !== s && t(n, s, r);
    }
  }
  onStorageEvent(t, n = !1) {
    if (!t.key) {
      this.forAllChangedKeys((o, a, l) => {
        this.notifyListeners(o, l);
      });
      return;
    }
    const r = t.key;
    n ? this.detachListener() : this.stopPolling();
    const s = () => {
        const o = this.storage.getItem(r);
        (!n && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      i = this.storage.getItem(r);
    lk() && i !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(s, Gk)
      : s();
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const s of Array.from(r)) s(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", {
              key: t,
              oldValue: n,
              newValue: r,
            }),
            !0
          );
        });
      }, Kk));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()),
        (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(t, n) {
    await super._set(t, n), (this.localCache[t] = JSON.stringify(n));
  }
  async _get(t) {
    const n = await super._get(t);
    return (this.localCache[t] = JSON.stringify(n)), n;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
bp.type = "LOCAL";
const Jk = bp;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wp extends _p {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
wp.type = "SESSION";
const Ep = wp;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yk(e) {
  return Promise.all(
    e.map(async (t) => {
      try {
        return {
          fulfilled: !0,
          value: await t,
        };
      } catch (n) {
        return {
          fulfilled: !1,
          reason: n,
        };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ta {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const n = this.receivers.find((s) => s.isListeningto(t));
    if (n) return n;
    const r = new ta(t);
    return this.receivers.push(r), r;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const n = t,
      { eventId: r, eventType: s, data: i } = n.data,
      o = this.handlersMap[s];
    if (!o?.size) return;
    n.ports[0].postMessage({
      status: "ack",
      eventId: r,
      eventType: s,
    });
    const a = Array.from(o).map(async (c) => c(n.origin, i)),
      l = await Yk(a);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: s,
      response: l,
    });
  }
  _subscribe(t, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(n);
  }
  _unsubscribe(t, n) {
    this.handlersMap[t] && n && this.handlersMap[t].delete(n),
      (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
ta.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hc(e = "", t = 10) {
  let n = "";
  for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10);
  return e + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xk {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, n, r = 50) {
    const s = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!s) throw new Error("connection_unavailable");
    let i, o;
    return new Promise((a, l) => {
      const c = Hc("", 20);
      s.port1.start();
      const u = setTimeout(() => {
        l(new Error("unsupported_event"));
      }, r);
      (o = {
        messageChannel: s,
        onMessage(f) {
          const d = f;
          if (d.data.eventId === c)
            switch (d.data.status) {
              case "ack":
                clearTimeout(u),
                  (i = setTimeout(() => {
                    l(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(i), a(d.data.response);
                break;
              default:
                clearTimeout(u),
                  clearTimeout(i),
                  l(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(o),
        s.port1.addEventListener("message", o.onMessage),
        this.target.postMessage(
          {
            eventType: t,
            eventId: c,
            data: n,
          },
          [s.port2]
        );
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en() {
  return window;
}
function Qk(e) {
  en().location.href = e;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sp() {
  return (
    typeof en().WorkerGlobalScope < "u" &&
    typeof en().importScripts == "function"
  );
}
async function Zk() {
  if (!navigator?.serviceWorker) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function eT() {
  return navigator?.serviceWorker?.controller || null;
}
function tT() {
  return Sp() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cp = "firebaseLocalStorageDb",
  nT = 1,
  Po = "firebaseLocalStorage",
  Ip = "fbase_key";
class vi {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, n) => {
      this.request.addEventListener("success", () => {
        t(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        });
    });
  }
}
function na(e, t) {
  return e.transaction([Po], t ? "readwrite" : "readonly").objectStore(Po);
}
function rT() {
  const e = indexedDB.deleteDatabase(Cp);
  return new vi(e).toPromise();
}
function $l() {
  const e = indexedDB.open(Cp, nT);
  return new Promise((t, n) => {
    e.addEventListener("error", () => {
      n(e.error);
    }),
      e.addEventListener("upgradeneeded", () => {
        const r = e.result;
        try {
          r.createObjectStore(Po, {
            keyPath: Ip,
          });
        } catch (s) {
          n(s);
        }
      }),
      e.addEventListener("success", async () => {
        const r = e.result;
        r.objectStoreNames.contains(Po)
          ? t(r)
          : (r.close(), await rT(), t(await $l()));
      });
  });
}
async function hd(e, t, n) {
  const r = na(e, !0).put({
    [Ip]: t,
    value: n,
  });
  return new vi(r).toPromise();
}
async function sT(e, t) {
  const n = na(e, !1).get(t),
    r = await new vi(n).toPromise();
  return r === void 0 ? null : r.value;
}
function md(e, t) {
  const n = na(e, !0).delete(t);
  return new vi(n).toPromise();
}
const iT = 800,
  oT = 3;
class kp {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await $l()), this.db);
  }
  async _withRetries(t) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await t(r);
      } catch (r) {
        if (n++ > oT) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Sp() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = ta._getInstance(tT())),
      this.receiver._subscribe("keyChanged", async (t, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (t, n) => ["keyChanged"]);
  }
  async initializeSender() {
    if (((this.activeServiceWorker = await Zk()), !this.activeServiceWorker))
      return;
    this.sender = new Xk(this.activeServiceWorker);
    const t = await this.sender._send("ping", {}, 800);
    t &&
      t[0]?.fulfilled &&
      t[0]?.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        eT() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          {
            key: t,
          },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await $l();
      return await hd(t, To, "1"), await md(t, To), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(t) {
    this.pendingWrites++;
    try {
      await t();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(t, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => hd(r, t, n)),
        (this.localCache[t] = n),
        this.notifyServiceWorker(t)
      )
    );
  }
  async _get(t) {
    const n = await this._withRetries((r) => sT(r, t));
    return (this.localCache[t] = n), n;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => md(n, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      )
    );
  }
  async _poll() {
    const t = await this._withRetries((s) => {
      const i = na(s, !1).getAll();
      return new vi(i).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    if (t.length !== 0)
      for (const { fbase_key: s, value: i } of t)
        r.add(s),
          JSON.stringify(this.localCache[s]) !== JSON.stringify(i) &&
            (this.notifyListeners(s, i), n.push(s));
    for (const s of Object.keys(this.localCache))
      this.localCache[s] &&
        !r.has(s) &&
        (this.notifyListeners(s, null), n.push(s));
    return n;
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const s of Array.from(r)) s(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), iT));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
kp.type = "LOCAL";
const aT = kp;
new mi(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tp(e, t) {
  return t
    ? mn(t)
    : (ae(e._popupRedirectResolver, e, "argument-error"),
      e._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zc extends Wc {
  constructor(t) {
    super("custom", "custom"), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return Br(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, n) {
    return Br(t, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(t) {
    return Br(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (n.idToken = t), n;
  }
}
function lT(e) {
  return vp(e.auth, new zc(e), e.bypassAuthState);
}
function cT(e) {
  const { auth: t, user: n } = e;
  return ae(n, t, "internal-error"), $k(n, new zc(e), e.bypassAuthState);
}
async function uT(e) {
  const { auth: t, user: n } = e;
  return ae(n, t, "internal-error"), Fk(n, new zc(e), e.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pp {
  constructor(t, n, r, s, i = !1) {
    (this.auth = t),
      (this.resolver = r),
      (this.user = s),
      (this.bypassAuthState = i),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (t, n) => {
      this.pendingPromise = {
        resolve: t,
        reject: n,
      };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(t) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: s,
      tenantId: i,
      error: o,
      type: a,
    } = t;
    if (o) {
      this.reject(o);
      return;
    }
    const l = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: i || void 0,
      postBody: s || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(a)(l));
    } catch (c) {
      this.reject(c);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return lT;
      case "linkViaPopup":
      case "linkViaRedirect":
        return uT;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return cT;
      default:
        Nt(this.auth, "internal-error");
    }
  }
  resolve(t) {
    wn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    wn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fT = new mi(2e3, 1e4);
async function Ul(e, t, n) {
  if (vt(e.app))
    return Promise.reject(Wt(e, "operation-not-supported-in-this-environment"));
  const r = nn(e);
  WI(e, t, qc);
  const s = Tp(r, n);
  return new ur(r, "signInViaPopup", t, s).executeNotNull();
}
class ur extends Pp {
  constructor(t, n, r, s, i) {
    super(t, n, s, i),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      ur.currentPopupAction && ur.currentPopupAction.cancel(),
      (ur.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return ae(t, this.auth, "internal-error"), t;
  }
  async onExecution() {
    wn(this.filter.length === 1, "Popup operations only handle one event");
    const t = Hc();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(Wt(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    return this.authWindow?.associatedEvent || null;
  }
  cancel() {
    this.reject(Wt(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (ur.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      if (this.authWindow?.window?.closed) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(Wt(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, fT.get());
    };
    t();
  }
}
ur.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dT = "pendingRedirect",
  zi = new Map();
class hT extends Pp {
  constructor(t, n, r = !1) {
    super(
      t,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let t = zi.get(this.auth._key());
    if (!t) {
      try {
        const r = (await mT(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(r);
      } catch (n) {
        t = () => Promise.reject(n);
      }
      zi.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        zi.set(this.auth._key(), () => Promise.resolve(null)),
      t()
    );
  }
  async onAuthEvent(t) {
    if (t.type === "signInViaRedirect") return super.onAuthEvent(t);
    if (t.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const n = await this.auth._redirectUserForId(t.eventId);
      if (n) return (this.user = n), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function mT(e, t) {
  const n = vT(t),
    r = pT(e);
  if (!(await r._isAvailable())) return !1;
  const s = (await r._get(n)) === "true";
  return await r._remove(n), s;
}
function gT(e, t) {
  zi.set(e._key(), t);
}
function pT(e) {
  return mn(e._redirectPersistence);
}
function vT(e) {
  return Hi(dT, e.config.apiKey, e.name);
}
async function yT(e, t, n = !1) {
  if (vt(e.app)) return Promise.reject(Zt(e));
  const r = nn(e),
    s = Tp(r, t),
    o = await new hT(r, s, n).execute();
  return (
    o &&
      !n &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, t)),
    o
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _T = 10 * 60 * 1e3;
class bT {
  constructor(t) {
    (this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(t) {
    this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(t, r) &&
          ((n = !0), this.sendToConsumer(t, r), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !wT(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = t), (n = !0))),
      n
    );
  }
  sendToConsumer(t, n) {
    if (t.error && !Ap(t)) {
      const r = t.error.code?.split("auth/")[1] || "internal-error";
      n.onError(Wt(this.auth, r));
    } else n.onAuthEvent(t);
  }
  isEventForConsumer(t, n) {
    const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
    return n.filter.includes(t.type) && r;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= _T &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(gd(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(gd(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function gd(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId]
    .filter((t) => t)
    .join("-");
}
function Ap({ type: e, error: t }) {
  return e === "unknown" && t?.code === "auth/no-auth-event";
}
function wT(e) {
  switch (e.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Ap(e);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ET(e, t = {}) {
  return tn(e, "GET", "/v1/projects", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ST = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  CT = /^https?/;
async function IT(e) {
  if (e.config.emulator) return;
  const { authorizedDomains: t } = await ET(e);
  for (const n of t)
    try {
      if (kT(n)) return;
    } catch {}
  Nt(e, "unauthorized-domain");
}
function kT(e) {
  const t = Dl(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith("chrome-extension://")) {
    const o = new URL(e);
    return o.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          e.replace("chrome-extension://", "") ===
            t.replace("chrome-extension://", "")
      : n === "chrome-extension:" && o.hostname === r;
  }
  if (!CT.test(n)) return !1;
  if (ST.test(e)) return r === e;
  const s = e.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + s + "|" + s + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const TT = new mi(3e4, 6e4);
function pd() {
  const e = en().___jsl;
  if (e?.H) {
    for (const t of Object.keys(e.H))
      if (
        ((e.H[t].r = e.H[t].r || []),
        (e.H[t].L = e.H[t].L || []),
        (e.H[t].r = [...e.H[t].L]),
        e.CP)
      )
        for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
}
function PT(e) {
  return new Promise((t, n) => {
    function r() {
      pd(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            pd(), n(Wt(e, "network-request-failed"));
          },
          timeout: TT.get(),
        });
    }
    if (en().gapi?.iframes?.Iframe) t(gapi.iframes.getContext());
    else if (en().gapi?.load) r();
    else {
      const s = vk("iframefcb");
      return (
        (en()[s] = () => {
          gapi.load ? r() : n(Wt(e, "network-request-failed"));
        }),
        dp(`${pk()}?onload=${s}`).catch((i) => n(i))
      );
    }
  }).catch((t) => {
    throw ((Ki = null), t);
  });
}
let Ki = null;
function AT(e) {
  return (Ki = Ki || PT(e)), Ki;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const NT = new mi(5e3, 15e3),
  RT = "__/auth/iframe",
  OT = "emulator/auth/iframe",
  LT = {
    style: {
      position: "absolute",
      top: "-100px",
      width: "1px",
      height: "1px",
    },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  xT = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function MT(e) {
  const t = e.config;
  ae(t.authDomain, e, "auth-domain-config-required");
  const n = t.emulator ? Uc(t, OT) : `https://${e.config.authDomain}/${RT}`,
    r = {
      apiKey: t.apiKey,
      appName: e.name,
      v: hi,
    },
    s = xT.get(e.config.apiHost);
  s && (r.eid = s);
  const i = e._getFrameworks();
  return i.length && (r.fw = i.join(",")), `${n}?${di(r).slice(1)}`;
}
async function DT(e) {
  const t = await AT(e),
    n = en().gapi;
  return (
    ae(n, e, "internal-error"),
    t.open(
      {
        where: document.body,
        url: MT(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: LT,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (s, i) => {
          await r.restyle({
            setHideOnLeave: !1,
          });
          const o = Wt(e, "network-request-failed"),
            a = en().setTimeout(() => {
              i(o);
            }, NT.get());
          function l() {
            en().clearTimeout(a), s(r);
          }
          r.ping(l).then(l, () => {
            i(o);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const FT = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  $T = 500,
  UT = 600,
  BT = "_blank",
  VT = "http://localhost";
class vd {
  constructor(t) {
    (this.window = t), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function WT(e, t, n, r = $T, s = UT) {
  const i = Math.max((window.screen.availHeight - s) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = "";
  const l = {
      ...FT,
      width: r.toString(),
      height: s.toString(),
      top: i,
      left: o,
    },
    c = dt().toLowerCase();
  n && (a = ip(c) ? BT : n), rp(c) && ((t = t || VT), (l.scrollbars = "yes"));
  const u = Object.entries(l).reduce((d, [h, g]) => `${d}${h}=${g},`, "");
  if (ak(c) && a !== "_self") return jT(t || "", a), new vd(null);
  const f = window.open(t || "", a, u);
  ae(f, e, "popup-blocked");
  try {
    f.focus();
  } catch {}
  return new vd(f);
}
function jT(e, t) {
  const n = document.createElement("a");
  (n.href = e), (n.target = t);
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qT = "__/auth/handler",
  HT = "emulator/auth/handler",
  zT = encodeURIComponent("fac");
async function yd(e, t, n, r, s, i) {
  ae(e.config.authDomain, e, "auth-domain-config-required"),
    ae(e.config.apiKey, e, "invalid-api-key");
  const o = {
    apiKey: e.config.apiKey,
    appName: e.name,
    authType: n,
    redirectUrl: r,
    v: hi,
    eventId: s,
  };
  if (t instanceof qc) {
    t.setDefaultLanguage(e.languageCode),
      (o.providerId = t.providerId || ""),
      IC(t.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [u, f] of Object.entries({})) o[u] = f;
  }
  if (t instanceof pi) {
    const u = t.getScopes().filter((f) => f !== "");
    u.length > 0 && (o.scopes = u.join(","));
  }
  e.tenantId && (o.tid = e.tenantId);
  const a = o;
  for (const u of Object.keys(a)) a[u] === void 0 && delete a[u];
  const l = await e._getAppCheckToken(),
    c = l ? `#${zT}=${encodeURIComponent(l)}` : "";
  return `${KT(e)}?${di(a).slice(1)}${c}`;
}
function KT({ config: e }) {
  return e.emulator ? Uc(e, HT) : `https://${e.authDomain}/${qT}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ua = "webStorageSupport";
class GT {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Ep),
      (this._completeRedirectFn = yT),
      (this._overrideRedirectResult = gT);
  }
  async _openPopup(t, n, r, s) {
    wn(
      this.eventManagers[t._key()]?.manager,
      "_initialize() not called before _openPopup()"
    );
    const i = await yd(t, n, r, Dl(), s);
    return WT(t, i, Hc());
  }
  async _openRedirect(t, n, r, s) {
    await this._originValidation(t);
    const i = await yd(t, n, r, Dl(), s);
    return Qk(i), new Promise(() => {});
  }
  _initialize(t) {
    const n = t._key();
    if (this.eventManagers[n]) {
      const { manager: s, promise: i } = this.eventManagers[n];
      return s
        ? Promise.resolve(s)
        : (wn(i, "If manager is not set, promise should be"), i);
    }
    const r = this.initAndGetManager(t);
    return (
      (this.eventManagers[n] = {
        promise: r,
      }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(t) {
    const n = await DT(t),
      r = new bT(t);
    return (
      n.register(
        "authEvent",
        (s) => (
          ae(s?.authEvent, t, "invalid-auth-event"),
          {
            status: r.onEvent(s.authEvent) ? "ACK" : "ERROR",
          }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[t._key()] = {
        manager: r,
      }),
      (this.iframes[t._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(t, n) {
    this.iframes[t._key()].send(
      Ua,
      {
        type: Ua,
      },
      (s) => {
        const i = s?.[0]?.[Ua];
        i !== void 0 && n(!!i), Nt(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const n = t._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = IT(t)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return up() || sp() || Vc();
  }
}
const JT = GT;
var _d = "@firebase/auth",
  bd = "1.11.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class YT {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    return this.assertAuthConfigured(), this.auth.currentUser?.uid || null;
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? {
            accessToken: await this.auth.currentUser.getIdToken(t),
          }
        : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      t(r?.stsTokenManager.accessToken || null);
    });
    this.internalListeners.set(t, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(t);
    n && (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    ae(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function XT(e) {
  switch (e) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function QT(e) {
  ei(
    new Yr(
      "auth",
      (t, { options: n }) => {
        const r = t.getProvider("app").getImmediate(),
          s = t.getProvider("heartbeat"),
          i = t.getProvider("app-check-internal"),
          { apiKey: o, authDomain: a } = r.options;
        ae(o && !o.includes(":"), "invalid-api-key", {
          appName: r.name,
        });
        const l = {
            apiKey: o,
            authDomain: a,
            clientPlatform: e,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: fp(e),
          },
          c = new hk(r, s, i, l);
        return Sk(c, n), c;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    ei(
      new Yr(
        "auth-internal",
        (t) => {
          const n = nn(t.getProvider("auth").getImmediate());
          return ((r) => new YT(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    Fr(_d, bd, XT(e)),
    Fr(_d, bd, "esm2020");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ZT = 5 * 60,
  eP = Wg("authIdTokenMaxAge") || ZT;
let wd = null;
const tP = (e) => async (t) => {
  const n = t && (await t.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > eP) return;
  const s = n?.token;
  wd !== s &&
    ((wd = s),
    await fetch(e, {
      method: s ? "POST" : "DELETE",
      headers: s
        ? {
            Authorization: `Bearer ${s}`,
          }
        : {},
    }));
};
function nP(e = TI()) {
  const t = zg(e, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const n = Ek(e, {
      popupRedirectResolver: JT,
      persistence: [aT, Jk, Ep],
    }),
    r = Wg("authTokenSyncURL");
  if (r && typeof isSecureContext == "boolean" && isSecureContext) {
    const i = new URL(r, location.origin);
    if (location.origin === i.origin) {
      const o = tP(i.toString());
      zk(n, o, () => o(n.currentUser)), Hk(n, (a) => o(a));
    }
  }
  const s = cC("auth");
  return s && Ck(n, `http://${s}`), n;
}
function rP() {
  return document.getElementsByTagName("head")?.[0] ?? document;
}
mk({
  loadJS(e) {
    return new Promise((t, n) => {
      const r = document.createElement("script");
      r.setAttribute("src", e),
        (r.onload = t),
        (r.onerror = (s) => {
          const i = Wt("internal-error");
          (i.customData = s), n(i);
        }),
        (r.type = "text/javascript"),
        (r.charset = "UTF-8"),
        rP().appendChild(r);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
QT("Browser");
const sP = [
    {
      partialName: "noms",
      locale: "fr",
    },
  ],
  ra = [
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
function iP(e, t) {
  return dP(e) === t ? "/" : `/${t}/`;
}
function LN(e, t, n) {
  return `${e}${iP(e, t)}/${n}`.replace("//", "/");
}
function Np(e, t) {
  const n = ra.find((s) => s.name === t),
    r = e.toLowerCase() === "twitter" ? "twitterName" : "googleName";
  return n?.[r] || "en_US";
}
function xN(e) {
  return ra.find((t) => t.name === e)?.file.slice(0, -5) || "en-US";
}
function MN(e, t) {
  const n = Ed("")(t);
  return Sg(Rp, oP(e), Ed({}), (r) => r.name ?? "")([n]);
}
function DN(e) {
  return Array.isArray(e) ? Sg(Rp, lP, uP)(e) : [];
}
function FN() {
  return ra
    .map((e) => ({
      name: e.name,
      humanName: e.humanName,
    }))
    .sort(aP);
}
function oP(e) {
  return (t) => t.filter((n) => !Op(e, n.name));
}
function Rp(e) {
  return ra.filter((t) => e.some((n) => Op(n, t.name)));
}
function Ed(e) {
  return (t) => t?.[0] ?? e;
}
function aP(e, t) {
  return e.humanName.localeCompare(t.humanName);
}
function lP(e) {
  return e.filter((t) => !cP(t));
}
function cP(e) {
  return e.name === "en-PI";
}
function uP(e) {
  return e.map(fP);
}
function fP(e) {
  return {
    name: e.name,
    humanName: e.humanName,
  };
}
function dP(e) {
  return sP.find((t) => e.includes(t.partialName))?.locale || "en";
}
function Op(e, t) {
  return e.length === t.length ? e === t : Sd(e) === Sd(t);
}
function Sd(e) {
  return e.split("-")[0];
}
const hP = Kg({
    apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
    authDomain: "wheel-of-names-firebase.firebaseapp.com",
    databaseURL: "https://wheel-of-names-firebase.firebaseio.com",
    projectId: "wheel-of-names-firebase",
  }),
  bt = nP(hP);
async function mP() {
  const e = await Qr();
  return !!e && !e.isAnonymous;
}
async function Qr() {
  return (
    bt.currentUser ||
    new Promise((e) => {
      bt.onAuthStateChanged((t) => e(t));
    })
  );
}
async function Fe() {
  return (await (await Qr())?.getIdToken()) ?? "";
}
async function $N() {
  return (await Qr())?.uid;
}
async function Ba() {
  const e = await Qr();
  if (e?.isAnonymous) return await e.getIdToken();
}
async function gP() {
  return await Dk(bt), bt.currentUser;
}
async function pP(e, t) {
  if (((bt.languageCode = Np("Google", e)), t === "google")) {
    const n = new Dt();
    return (
      n.setCustomParameters({
        prompt: "select_account",
      }),
      (await Ul(bt, n)).user
    );
  }
  if (t === "twitter") return (await Ul(bt, new un())).user;
}
async function vP(e, t) {
  return (await Wk(bt, e, t)).user;
}
async function yP(e, t, n) {
  const r = await Vk(bt, e, t);
  return (
    await qk(r.user, {
      displayName: n,
    }),
    r.user
  );
}
async function _P(e) {
  await Bk(bt, e);
}
async function bP(e) {
  bt.languageCode = Np("Google", e);
  const t = new Dt();
  for (const r of NS) t.addScope(r);
  t.setCustomParameters({
    prompt: "select_account",
  });
  const n = await Ul(bt, t);
  return Dt.credentialFromResult(n)?.accessToken;
}
async function Cd() {
  await bt.signOut();
}
async function UN(e, t) {
  return (await Ke("GET", `api/v2/admin/wheels/${t}`, e)).data;
}
async function BN(e, t, n) {
  let r = `api/v2/admin/users/${e}/wheels`;
  return (
    n && n.length > 0 && (r += `?fields=${n}`),
    (await Ke("GET", r, t)).data.wheels
  );
}
async function wP(e, t) {
  return (await Ke("GET", `api/v2/admin/users/${t}`, e)).data;
}
async function VN(e) {
  return (await Ke("GET", "api/v2/admin/review-queue", e)).data;
}
async function WN(e, t) {
  return (
    await Ke("POST", "api/v2/admin/translate", e, {
      texts: t,
    })
  ).data.translations;
}
async function Lp(e) {
  try {
    return (await Ke("GET", "api/v2/admin", e)).data.isAdmin;
  } catch {
    return !1;
  }
}
async function jN(e, t, n) {
  await Ke("PUT", "api/v2/admin/administrators", e, {
    uid: t,
    totalReviews: n,
  });
}
async function qN(e, t, n) {
  await Ke("PUT", "api/v2/admin/administrators", e, {
    uid: t,
    sessionReviews: n,
  });
}
async function HN(e) {
  return (await Ke("GET", "api/v2/admin/dirty-words", e)).data.dirtyWords;
}
async function zN(e, t) {
  await Ke("PUT", "api/v2/admin/dirty-words", e, {
    dirtyWords: t,
  });
}
async function KN(e) {
  return (await Ke("GET", "api/v2/admin/administrators", e)).data
    .administrators;
}
async function GN(e, t, n) {
  await Ke("POST", "api/v2/admin/administrators", e, {
    uid: t,
    name: n,
  });
}
async function JN(e, t) {
  await Ke("DELETE", "api/v2/admin/administrators", e, {
    uid: t,
  });
}
async function YN(e, t) {
  const n = `api/v2/admin/wheels/${t}`;
  await Ke("PUT", n, e, {
    shareMode: "copyable",
  });
}
async function XN(e, t) {
  await Ke("DELETE", `api/v2/admin/wheels/${t}`, e);
}
async function QN(e) {
  return (await Ke("GET", "api/v2/admin/review-queue/next-shared-wheel", e))
    .data.wheel;
}
async function ZN(e) {
  return (await Ke("GET", "api/v2/admin/review-queue/next-gallery-wheel", e))
    .data.wheel;
}
async function eR(e, t) {
  const n = `api/v2/admin/review-queue/approve/${t}`;
  await Ke("POST", n, e);
}
async function tR(e, t) {
  await Ke("POST", `api/v2/admin/review-queue/reject/${t}`, e);
}
async function EP(e, t, n) {
  const r = `api/v2/admin/wheels/thumbnails/${t}?size=${n}`;
  return await SP("GET", r, e);
}
async function Ke(e, t, n, r) {
  return await Lg(e, t, n, r);
}
async function SP(e, t, n, r) {
  return await xg(e, t, n);
}
const CP = Tc("user", {
    state: () => ({
      userPhotoUrl: "",
      userDisplayName: "",
      uid: "",
      loginProvider: "",
      premium: null,
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
        this.loginProvider = IP[t] ?? "";
      },
      clearUser() {
        (this.userDisplayName = ""),
          (this.userPhotoUrl = ""),
          (this.uid = ""),
          (this.loginProvider = ""),
          (this.premium = null),
          (this.admin = !1);
      },
      async userIsLoggedIn() {
        const e = await mP();
        if (e) {
          const t = await Qr();
          this.setUser(t);
        }
        return e;
      },
      async logOut() {
        await Cd(), this.clearUser();
      },
      async deleteAccount() {
        const e = await Fe();
        await GS(e), Cd(), this.clearUser();
      },
      async logInAnonymously() {
        await gP();
      },
      async logInWithPopup(e, t) {
        const n = await Ba(),
          r = await pP(e, t);
        if (!r) throw new Error("Login failed");
        this.setUser(r);
        const s = await Fe();
        await Hf(s), n && (await Oa(n, s));
      },
      async logInWithEmail(e, t, n) {
        const r = await Ba(),
          s = await (n ? yP(e, t, n) : vP(e, t));
        if (!s) throw new Error("Login failed");
        this.setUser(s);
        const i = await Fe();
        await Hf(i), r && (await Oa(r, i));
      },
      async logInToSheets(e) {
        const t = await Ba(),
          n = await bP(e),
          r = await Qr();
        if ((this.setUser(r), t)) {
          const s = await Fe();
          await Oa(t, s);
        }
        return n;
      },
      async sendPasswordResetEmail(e) {
        await _P(e);
      },
      async setPremiumStatus() {
        if (this.premium) return;
        const e = await Fe();
        this.premium = await JS(e);
      },
      async userIsAdmin() {
        const e = await Fe();
        try {
          return await Lp(e);
        } catch {
          return !1;
        }
      },
      async getAccount(e) {
        const t = await Fe();
        return await wP(t, e);
      },
      async getUserIdToken() {
        return await Fe();
      },
      async getSavedWheels(e) {
        const t = await Fe();
        return (await WS(t, e)).sort((r, s) =>
          r.wheelConfig.title.localeCompare(s.wheelConfig.title, "en", {
            numeric: !0,
            sensitivity: "base",
          })
        );
      },
      async loadWheel(e) {
        const t = await Fe();
        return await jS(e, t);
      },
      async loadMyWheels(e) {
        const t = await Fe();
        return await qS(t, e);
      },
      async saveWheel(e) {
        const t = await Fe();
        return await HS(t, e);
      },
      async getSharedWheels(e) {
        const t = await Fe();
        return await VS(t, e);
      },
      async shareWheel(e, t) {
        const n = await Fe();
        return await BS({
          idToken: n,
          wheelConfig: e,
          shareMode: t,
        });
      },
      async updateWheel(e, t, n) {
        const r = await Fe();
        return await zS(r, e, {
          wheelConfig: t,
          shareMode: n,
        });
      },
      async deleteWheel(e) {
        const t = await Fe();
        return await KS(t, e);
      },
      async generateApiKey() {
        const e = await Fe();
        return await YS(e);
      },
      async getExistingApiKey() {
        const e = await Fe();
        return await QS(e);
      },
      async deleteExistingApiKey() {
        const e = await Fe();
        await XS(e);
      },
      async getWheelThumbnail(e, t) {
        const n = await Fe();
        return this.admin ? await EP(n, e, t) : await ZS(n, e, t);
      },
    },
  }),
  IP = {
    "google.com": "Google",
    "twitter.com": "Twitter",
    password: "email",
  },
  Va = TP(),
  kP = Tc("wheel", {
    state: () => ({
      wheelConfig: Va.wheelConfig,
      path: Va.path,
      shareMode: Va.shareMode,
      sheetLinked: !1,
      wheelIsBusy: !1,
      winnerEntry: {},
      winners: [],
      unsavedChanges: !1,
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
      wheelIsShared: (e) => !!e.shareMode && Q0(e.shareMode),
      wheelIsAdvanced: (e) => e.wheelConfig.isAdvanced,
      wheelTitle: (e) => e.wheelConfig.title,
      wheelDescription: (e) => e.wheelConfig.description,
      showTitle: (e) => e.wheelConfig.showTitle,
      hubSize: (e) => e.wheelConfig.hubSize,
    },
    actions: {
      setWheelConfig(e) {
        (this.wheelConfig = new _t(e)), this.persistWheel();
      },
      setWheel(e) {
        (this.wheelConfig = new _t(e.wheelConfig)),
          (this.path = e.path),
          (this.shareMode = e.shareMode),
          this.persistWheel(),
          (this.unsavedChanges = !1),
          (this.winners = []);
      },
      copyWheel(e) {
        this.setWheel({
          wheelConfig: e,
          path: "",
          shareMode: null,
        });
      },
      saveWheelConfigForUndo() {
        this.previousWheelConfig = this.wheelConfig.getJson();
      },
      undoWheelConfigChange() {
        this.setWheelConfig(new _t(JSON.parse(this.previousWheelConfig)));
      },
      persistWheel() {
        try {
          localStorage.setItem(
            "LastWheel",
            JSON.stringify({
              wheelConfig: this.wheelConfig.getValues(),
              shareMode: this.shareMode,
              path: this.path,
            })
          );
        } catch {
          console.error("Error saving wheel config to local storage");
        }
      },
      setWheelTitle(e) {
        (this.wheelConfig.title = e),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      setWheelDescription(e) {
        (this.wheelConfig.description = e),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      setShowTitle(e) {
        (this.wheelConfig.showTitle = e),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      setEntries(e) {
        (this.wheelConfig.entries = bs(e)),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      shuffleEntries() {
        (this.wheelConfig.entries = G0(this.wheelConfig.entries)),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      sortEntries() {
        (this.wheelConfig.entries = Bf(fe(this.wheelConfig.entries))),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      addEntry(e) {
        this.wheelConfig.entries.push({
          ...e,
          id: ji(),
        }),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      setEntryText(e, t) {
        const n = this.wheelConfig.entries.at(e);
        n && ((n.text = t), this.persistWheel(), (this.unsavedChanges = !0));
      },
      setEntryColor(e, t) {
        const n = this.wheelConfig.entries.at(e);
        n &&
          (t ? (n.color = t) : delete n.color,
          this.persistWheel(),
          (this.unsavedChanges = !0));
      },
      setEntrySound(e, t) {
        const n = this.wheelConfig.entries.at(e);
        n &&
          (t ? (n.sound = t) : delete n.sound,
          this.persistWheel(),
          (this.unsavedChanges = !0));
      },
      setEntryMessage(e, t) {
        const n = this.wheelConfig.entries.at(e);
        n &&
          (t ? (n.message = t) : delete n.message,
          this.persistWheel(),
          (this.unsavedChanges = !0));
      },
      setEntryEnabled(e, t) {
        const n = this.wheelConfig.entries.at(e);
        n && ((n.enabled = t), this.persistWheel(), (this.unsavedChanges = !0));
      },
      setEntryWeight(e, t) {
        this.wheelConfig.entries[e] &&
          ((this.wheelConfig.entries[e].weight = t),
          this.persistWheel(),
          (this.unsavedChanges = !0));
      },
      refreshEntries() {
        (this.wheelConfig.entries = bs(this.wheelConfig.entries)),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      setTextEntries(e) {
        (this.wheelConfig.entries = bs(
          e.map((t) => ({
            text: t,
          }))
        )),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      addTextEntries(e) {
        (this.wheelConfig.entries = bs([
          ...this.wheelConfig.entries,
          ...e.map((t) => ({
            text: t,
          })),
        ])),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      removeTextEntries(e) {
        (this.wheelConfig.entries = this.wheelConfig.entries.filter(
          (t) => t.text && !e.includes(t.text)
        )),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      removeEntryByIndex(e) {
        this.wheelConfig.entries.splice(e, 1),
          this.persistWheel(),
          (this.sheetLinked = !1),
          (this.unsavedChanges = !0);
      },
      removeEntry(e) {
        (this.wheelConfig.entries = this.wheelConfig.entries.filter(
          (t) => t.id !== e.id
        )),
          this.persistWheel(),
          (this.sheetLinked = !1),
          (this.unsavedChanges = !0);
      },
      removeEntryAll(e) {
        (this.wheelConfig.entries = this.wheelConfig.entries.filter(
          (t) => !t.text || t.text.trim() !== e.text?.trim()
        )),
          this.persistWheel(),
          (this.sheetLinked = !1),
          (this.unsavedChanges = !0);
      },
      hideEntry(e) {
        const t = this.wheelConfig.entries.find((n) => n.id === e.id);
        t &&
          ((t.enabled = !1), this.persistWheel(), (this.unsavedChanges = !0));
      },
      moveEntry(e, t) {
        const n = e + t,
          r = this.wheelConfig.entries;
        n < 0 ||
          n >= r.length ||
          (([r[e], r[n]] = [r[n], r[e]]),
          this.persistWheel(),
          (this.unsavedChanges = !0));
      },
      duplicateEntry(e) {
        const n = {
          ...this.wheelConfig.entries.at(e),
          id: ji(),
        };
        this.wheelConfig.entries.splice(e + 1, 0, n),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      setColorValues(e) {
        this.wheelConfig.setColorValues(e),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      setHubSize(e) {
        (this.wheelConfig.hubSize = e),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      setUploadedCenterImage(e, t) {
        (this.wheelConfig.type = "color"),
          this.wheelConfig.setUploadedCenterImage(e, t),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      setUploadedBackgroundImage(e, t) {
        (this.wheelConfig.type = "image"),
          this.wheelConfig.setUploadedBackgroundImage(e, t),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      setGalleryBackgroundImage(e) {
        (this.wheelConfig.type = "image"),
          this.wheelConfig.setGalleryBackgroundImage(e),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      setGalleryCenterImage(e) {
        (this.wheelConfig.type = "color"),
          this.wheelConfig.setGalleryCenterImage(e),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      removeImageFromEntry(e) {
        const t = this.wheelConfig.entries.at(e);
        t && (delete t.image, this.persistWheel(), (this.unsavedChanges = !0));
      },
      setWheelBusy(e) {
        this.wheelIsBusy = e;
      },
      linkSheet() {
        (this.sheetLinked = !0), (this.unsavedChanges = !0);
      },
      unlinkSheet() {
        this.sheetLinked = !1;
      },
      setPath(e) {
        this.path = e;
      },
      setShareMode(e) {
        this.shareMode = e;
      },
      addWinner(e) {
        (this.winnerEntry = e), this.winners.push(e);
      },
      sortWinners() {
        this.winners = Bf(this.winners);
      },
      clearWinners() {
        this.winners = [];
      },
      setVolumes(e, t) {
        (this.wheelConfig.duringSpinSoundVolume = e),
          (this.wheelConfig.afterSpinSoundVolume = t),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      resetWheel() {
        this.unlinkSheet(),
          this.setWheel({
            wheelConfig: new _t(),
            shareMode: null,
            path: "",
          }),
          this.clearWinners(),
          (this.unsavedChanges = !1);
      },
      async addImageEntry(e) {
        let t;
        if (this.wheelConfig.isAdvanced) {
          const n = await Pa(e);
          Aa(n)
            ? (t = {
                image: e,
                weight: 1,
                enabled: !0,
              })
            : (t = {
                image: e,
                color: Dr(n).slice(0, 7),
                weight: 1,
                enabled: !0,
              });
        } else
          t = {
            image: e,
          };
        (t.id = ji()),
          this.wheelConfig.entries.push(t),
          this.persistWheel(),
          (this.unsavedChanges = !0);
      },
      async addImageToEntry(e, t) {
        const n = this.wheelConfig.entries.at(t);
        if (n) {
          const r = await Pa(e);
          Aa(r) || (n.color = Dr(r).slice(0, 7)),
            (n.image = e),
            this.persistWheel(),
            (this.unsavedChanges = !0);
        }
      },
      async setAdvanced(e) {
        if (((this.wheelConfig.isAdvanced = e), e))
          for (const t of this.wheelConfig.entries) {
            if (t.image) {
              const n = await Pa(t.image);
              Aa(n) || (t.color = Dr(n).slice(0, 7));
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
        this.persistWheel(), (this.unsavedChanges = !0);
      },
    },
  });
function TP() {
  try {
    const e = localStorage.getItem("LastWheel");
    if (e) {
      const { wheelConfig: n, shareMode: r, path: s } = JSON.parse(e);
      return {
        wheelConfig: new _t(n),
        shareMode: r,
        path: s,
      };
    }
    const t = localStorage.getItem("LastWheelConfig");
    if (t)
      return {
        wheelConfig: new _t(JSON.parse(t)),
        shareMode: null,
        path: "",
      };
  } catch (e) {
    console.error("Error parsing wheel config from localStorage:", e);
  }
  return {
    wheelConfig: new _t({}),
    shareMode: null,
    path: "",
  };
}
const Wa = M0(() => D0()),
  PP = Xn({
    __name: "App",
    setup(e) {
      document.querySelector("#preload-static-content")?.remove();
      const t = kw(),
        { t: n, locale: r } = Jo(),
        s = W0(),
        i = kP(),
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
      L0(o),
        s.loadPreferences(),
        Je.set(s.darkMode),
        me(
          () => t.path,
          () => {
            a(), l();
          },
          {
            immediate: !0,
          }
        ),
        me(
          () => r.value,
          () => {
            a(), l();
          }
        );
      function a() {
        let c = "en";
        t.meta.translated && (c = r.value),
          document.documentElement.setAttribute("lang", c);
      }
      function l() {
        let c = "";
        t.name === "home" && (c = n("app.Free and easy to use")),
          document
            .querySelector('meta[name="description"]')
            ?.setAttribute("content", c);
      }
      return (c, u) => {
        const f = Iy("router-view");
        return ao(), lo(f);
      };
    },
  });
function nR(e) {
  return e;
}
const AP = [
    {
      path: "/faq/:section?",
      component: () =>
        Re(
          () => import("https://wheelofnames.com/assets/FaqPage-v379.js"),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
        ),
    },
    {
      path: "/user-reviews-and-tutorials",
      component: () =>
        Re(
          () => import("https://wheelofnames.com/assets/TutorialsPage-v379.js"),
          __vite__mapDeps([14, 1, 2, 15, 16, 4, 7, 8, 9, 10, 11])
        ),
    },
    {
      path: "/how-to-use-in-the-classroom",
      component: () =>
        Re(
          () => import("https://wheelofnames.com/assets/ClassroomPage-v379.js"),
          __vite__mapDeps([17, 1, 2, 15, 16, 4, 7, 8, 9, 10, 11])
        ),
    },
    {
      path: "/privacy-policy",
      alias: "/privacy-policy.html",
      component: () =>
        Re(
          () => import("https://wheelofnames.com/assets/PrivacyPolicyPage-v379.js"),
          __vite__mapDeps([18, 1, 2, 12, 19, 4, 7, 8, 9, 10, 11, 20])
        ),
    },
    {
      path: "/terms",
      component: () =>
        Re(
          () => import("https://wheelofnames.com/assets/TermsOfServicePage-v379.js"),
          __vite__mapDeps([21, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
        ),
    },
    {
      path: "/changelog",
      component: () =>
        Re(
          () => import("https://wheelofnames.com/assets/ChangelogPage-v379.js"),
          __vite__mapDeps([22, 1, 2, 4, 7, 8, 9, 10, 11, 19, 23])
        ),
    },
    {
      path: "/api-doc",
      component: () =>
        Re(
          () => import("https://wheelofnames.com/assets/ApiPage-v379.js"),
          __vite__mapDeps([24, 1, 2, 3, 4, 25, 26, 27, 28, 7, 8, 9, 10, 11, 29])
        ),
    },
    {
      path: "/export",
      component: () =>
        Re(
          () => import("https://wheelofnames.com/assets/ExportPage-v379.js"),
          __vite__mapDeps([30, 1, 2, 3, 4, 7, 8, 9, 10, 11, 31])
        ),
    },
    {
      path: "/translations",
      component: () =>
        Re(
          () => import("https://wheelofnames.com/assets/TranslationPage-v379.js"),
          __vite__mapDeps([32, 1, 2, 19, 4, 7, 8, 9, 10, 11, 25])
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
            Re(
              () => import("https://wheelofnames.com/assets/AdminPage-v379.js"),
              __vite__mapDeps([33, 34, 35, 1, 2, 3, 4, 9, 10, 36, 16, 37])
            ),
        },
        {
          path: "review",
          component: () =>
            Re(
              () => import("https://wheelofnames.com/assets/ReviewWheelPage-v379.js"),
              __vite__mapDeps([
                38, 34, 35, 39, 40, 1, 2, 19, 3, 4, 10, 41, 42, 9, 43, 26,
              ])
            ),
        },
        {
          path: "gallery",
          component: () =>
            Re(
              () => import("https://wheelofnames.com/assets/GalleryReviewPage-v379.js"),
              __vite__mapDeps([44, 34, 1, 2, 3, 4, 45, 35, 46, 40, 26, 47, 48])
            ),
        },
        {
          path: "user",
          component: () =>
            Re(
              () => import("https://wheelofnames.com/assets/AdminUserPage-v379.js"),
              __vite__mapDeps([49, 34, 1, 2, 19, 10, 26, 50, 51, 41, 42, 9, 52])
            ),
        },
      ],
    },
    {
      meta: {
        translated: !0,
      },
      path: "/:lang([a-z][a-z][a-z]?|[a-z][a-z]-[A-Z][A-Z])?",
      component: () => Re(() => import("https://wheelofnames.com/assets/lang-v379.js"), []),
      children: [
        {
          name: "home",
          path: "",
          component: () =>
            Re(
              () => import("https://wheelofnames.com/assets/EditWheelPage-v379.js"),
              __vite__mapDeps([
                53, 1, 2, 4, 10, 5, 6, 8, 35, 46, 40, 39, 43, 54, 55, 26, 56,
                27, 28, 50, 51, 36, 16, 12, 25, 57, 58,
              ])
            ),
        },
        {
          name: "shared-wheel",
          path: ":wheelPath(\\w\\w\\w-\\w\\w\\w)",
          component: () =>
            Re(
              () => import("https://wheelofnames.com/assets/SharedWheelPage-v379.js"),
              __vite__mapDeps([59, 3, 4, 2, 54, 10, 55, 43, 26, 57, 60])
            ),
        },
        {
          name: "shared-wheel-view",
          path: "view/:wheelPath(\\w\\w\\w-\\w\\w\\w)?",
          component: () =>
            Re(
              () => import("https://wheelofnames.com/assets/SharedWheelPage-v379.js"),
              __vite__mapDeps([59, 3, 4, 2, 54, 10, 55, 43, 26, 57, 60])
            ),
        },
        {
          name: "gallery",
          path: "gallery",
          component: () =>
            Re(
              () => import("https://wheelofnames.com/assets/GalleryPage-v379.js"),
              __vite__mapDeps([
                61, 1, 2, 3, 4, 7, 8, 9, 10, 11, 45, 35, 46, 40, 26, 47,
              ])
            ),
        },
        {
          name: "login",
          path: "login",
          component: () =>
            Re(
              () => import("https://wheelofnames.com/assets/LoginPage-v379.js"),
              __vite__mapDeps([62, 1, 2, 27, 26, 28, 7, 8, 9, 10, 11])
            ),
        },
        {
          name: "migrate-account",
          path: "migrate-account",
          component: () =>
            Re(
              () => import("https://wheelofnames.com/assets/MigrateAccountPage-v379.js"),
              __vite__mapDeps([
                63, 1, 2, 26, 5, 6, 7, 8, 9, 10, 11, 56, 27, 28, 64,
              ])
            ),
        },
      ],
    },
    {
      path: "/:catchAll(.*)*",
      component: () => Re(() => import("https://wheelofnames.com/assets/Error404-v379.js"), []),
    },
  ],
  ja = () => {
    const e = Cw({
      scrollBehavior: (t) =>
        t.hash
          ? {
              el: t.hash,
              top: 50,
            }
          : {
              top: 0,
            },
      routes: AP,
      history: Zb("/"),
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
        if (t.name === "shared-wheel-view" && t.params.wheelPath)
          return e.resolve(
            {
              name: "shared-wheel",
            },
            t
          ).fullPath;
        const r = CP();
        if (t.meta.adminOnly) {
          const s = await Fe();
          if (await Lp(s)) r.admin = !0;
          else {
            const o = `/login?redirect=${t.fullPath}`;
            if (n.fullPath !== o) return o;
            location.reload();
          }
        }
        t.name === "home" &&
          r.premium === null &&
          (r.uid
            ? ((r.premium = "pending"),
              r.setPremiumStatus().catch(() => {
                r.premium = null;
              }))
            : r
                .userIsLoggedIn()
                .then((s) => {
                  s &&
                    ((r.premium = "pending"),
                    r.setPremiumStatus().catch(() => {
                      r.premium = null;
                    }));
                })
                .catch(Id));
      }),
      e.onError(Id),
      e
    );
  };
function Id(e) {
  xS("RouterError", e),
    confirm(`An update is available. Do you want to reload?

If reloading does not fix the issue, try using https://old.wheelofnames.com.`) &&
      location.reload();
}
async function NP(e, t) {
  const n = e(PP);
  n.use(Eb, t);
  const r = typeof Wa == "function" ? await Wa({}) : Wa;
  n.use(r);
  const s = wr(
    typeof ja == "function"
      ? await ja({
          store: r,
        })
      : ja
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
const RP = {
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
function OP(e, t, n) {
  let r;
  function s() {
    r !== void 0 && (gl.remove(r), (r = void 0));
  }
  return (
    Ot(() => {
      e.value === !0 && s();
    }),
    {
      removeFromHistory: s,
      addToHistory() {
        (r = {
          condition: () => n.value === !0,
          handler: t,
        }),
          gl.add(r);
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
function xp(e, t) {
  typeof t.type == "symbol"
    ? Array.isArray(t.children) === !0 &&
      t.children.forEach((n) => {
        xp(e, n);
      })
    : e.add(t);
}
function rR(e) {
  const t = new Set();
  return (
    e.forEach((n) => {
      xp(t, n);
    }),
    Array.from(t)
  );
}
function Mp(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function Dp(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function LP() {
  let e = null;
  const t = Se();
  function n() {
    e !== null && (clearTimeout(e), (e = null));
  }
  return (
    $o(n),
    Ot(n),
    {
      removeTimeout: n,
      registerTimeout(r, s) {
        n(),
          Dp(t) === !1 &&
            (e = setTimeout(() => {
              (e = null), r();
            }, s));
      },
    }
  );
}
function xP() {
  let e;
  const t = Se();
  function n() {
    e = void 0;
  }
  return (
    $o(n),
    Ot(n),
    {
      removeTick: n,
      registerTick(r) {
        (e = r),
          ut(() => {
            e === r && (Dp(t) === !1 && e(), (e = void 0));
          });
      },
    }
  );
}
const MP = {
    modelValue: {
      type: Boolean,
      default: null,
    },
    "onUpdate:modelValue": [Function, Array],
  },
  DP = ["beforeShow", "show", "beforeHide", "hide"];
function FP({
  showing: e,
  canShow: t,
  hideOnRouteChange: n,
  handleShow: r,
  handleHide: s,
  processOnMount: i,
}) {
  const o = Se(),
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
    const E = a["onUpdate:modelValue"] !== void 0;
    E === !0 &&
      (l("update:modelValue", !0),
      (u = m),
      ut(() => {
        u === m && (u = void 0);
      })),
      (a.modelValue === null || E === !1) && h(m);
  }
  function h(m) {
    e.value !== !0 &&
      ((e.value = !0), l("beforeShow", m), r !== void 0 ? r(m) : l("show", m));
  }
  function g(m) {
    if (a.disable === !0) return;
    const E = a["onUpdate:modelValue"] !== void 0;
    E === !0 &&
      (l("update:modelValue", !1),
      (u = m),
      ut(() => {
        u === m && (u = void 0);
      })),
      (a.modelValue === null || E === !1) && w(m);
  }
  function w(m) {
    e.value !== !1 &&
      ((e.value = !1), l("beforeHide", m), s !== void 0 ? s(m) : l("hide", m));
  }
  function k(m) {
    a.disable === !0 && m === !0
      ? a["onUpdate:modelValue"] !== void 0 && l("update:modelValue", !1)
      : (m === !0) !== e.value && (m === !0 ? h : w)(u);
  }
  me(() => a.modelValue, k),
    n !== void 0 &&
      Mp(o) === !0 &&
      me(
        () => c.$route.fullPath,
        () => {
          n.value === !0 && e.value === !0 && g();
        }
      ),
    i === !0 &&
      Rt(() => {
        k(a.modelValue);
      });
  const y = {
    show: d,
    hide: g,
    toggle: f,
  };
  return Object.assign(c, y), y;
}
const $P = {
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
function UP(e, t = () => {}, n = () => {}) {
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
let fr = [],
  ri = [];
function Fp(e) {
  ri = ri.filter((t) => t !== e);
}
function BP(e) {
  Fp(e), ri.push(e);
}
function kd(e) {
  Fp(e), ri.length === 0 && fr.length !== 0 && (fr[fr.length - 1](), (fr = []));
}
function Kc(e) {
  ri.length === 0 ? e() : fr.push(e);
}
function VP(e) {
  fr = fr.filter((t) => t !== e);
}
const Vr = [],
  Vs = [];
let WP = 1,
  Mn = document.body;
function sa(e, t) {
  const n = document.createElement("div");
  if (
    ((n.id = t !== void 0 ? `q-portal--${t}--${WP++}` : e),
    go.globalNodes !== void 0)
  ) {
    const r = go.globalNodes.class;
    r !== void 0 && (n.className = r);
  }
  return Mn.appendChild(n), Vr.push(n), Vs.push(t), n;
}
function Gc(e) {
  const t = Vr.indexOf(e);
  Vr.splice(t, 1), Vs.splice(t, 1), e.remove();
}
function jP(e) {
  if (e === Mn) return;
  if (
    ((Mn = e),
    Mn === document.body ||
      Vs.reduce((n, r) => (r === "dialog" ? n + 1 : n), 0) < 2)
  ) {
    Vr.forEach((n) => {
      n.contains(Mn) === !1 && Mn.appendChild(n);
    });
    return;
  }
  const t = Vs.lastIndexOf("dialog");
  for (let n = 0; n < Vr.length; n++) {
    const r = Vr[n];
    (n === t || Vs[n] !== "dialog") &&
      r.contains(Mn) === !1 &&
      Mn.appendChild(r);
  }
}
const Ji = [];
function sR(e) {
  return Ji.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function qP(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if ((e.hide(t), e.$props.separateClosePopup === !0)) return Gi(e);
    } else if (e.__qPortal === !0) {
      const n = Gi(e);
      return n?.$options.name === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = Gi(e);
  } while (e != null);
}
function iR(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === !0) {
      if ((n--, e.$options.name === "QMenu")) {
        e = qP(e, t);
        continue;
      }
      e.hide(t);
    }
    e = Gi(e);
  }
}
const HP = rt({
  name: "QPortal",
  setup(e, { slots: t }) {
    return () => t.default();
  },
});
function zP(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return !1;
    e = e.parent;
  }
  return !1;
}
function KP(e, t, n, r) {
  const s = he(!1),
    i = he(!1);
  let o = null;
  const a = {},
    l = r === "dialog" && zP(e);
  function c(f) {
    if (f === !0) {
      kd(a), (i.value = !0);
      return;
    }
    (i.value = !1),
      s.value === !1 &&
        (l === !1 && o === null && (o = sa(!1, r)),
        (s.value = !0),
        Ji.push(e.proxy),
        BP(a));
  }
  function u(f) {
    if (((i.value = !1), f !== !0)) return;
    kd(a), (s.value = !1);
    const d = Ji.indexOf(e.proxy);
    d !== -1 && Ji.splice(d, 1), o !== null && (Gc(o), (o = null));
  }
  return (
    Bo(() => {
      u(!0);
    }),
    (e.proxy.__qPortal = !0),
    ts(e.proxy, "contentEl", () => t.value),
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
              U(
                hy,
                {
                  to: o,
                },
                U(HP, n)
              ),
            ]
          : void 0,
    }
  );
}
function Bl(e, t) {
  const n = e.style;
  for (const r in t) n[r] = t[r];
}
function GP(e) {
  if (e == null) return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = gn(e);
  if (t) return t.$el || t;
}
function JP(e, t) {
  if (e == null || e.contains(t) === !0) return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t)) return !0;
  return !1;
}
const oR = [Element, String],
  YP = [
    null,
    document,
    document.body,
    document.scrollingElement,
    document.documentElement,
  ];
function aR(e, t) {
  let n = GP(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return YP.includes(n) ? window : n;
}
function $p(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function Up(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
function Bp(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3],
    s = $p(e);
  if (n <= 0) {
    s !== t && Vl(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    const o = i - r,
      a = s + ((t - s) / Math.max(o, n)) * o;
    Vl(e, a), a !== t && Bp(e, t, n - o, i);
  });
}
function Vp(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3],
    s = Up(e);
  if (n <= 0) {
    s !== t && Wl(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    const o = i - r,
      a = s + ((t - s) / Math.max(o, n)) * o;
    Wl(e, a), a !== t && Vp(e, t, n - o, i);
  });
}
function Vl(e, t) {
  if (e === window) {
    window.scrollTo(
      window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
      t
    );
    return;
  }
  e.scrollTop = t;
}
function Wl(e, t) {
  if (e === window) {
    window.scrollTo(
      t,
      window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    );
    return;
  }
  e.scrollLeft = t;
}
function lR(e, t, n) {
  if (n) {
    Bp(e, t, n);
    return;
  }
  Vl(e, t);
}
function cR(e, t, n) {
  if (n) {
    Vp(e, t, n);
    return;
  }
  Wl(e, t);
}
let Ri;
function uR() {
  if (Ri !== void 0) return Ri;
  const e = document.createElement("p"),
    t = document.createElement("div");
  Bl(e, {
    width: "100%",
    height: "200px",
  }),
    Bl(t, {
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
  return n === r && (r = t.clientWidth), t.remove(), (Ri = n - r), Ri;
}
function XP(e, t = !0) {
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
let ms = 0,
  qa,
  Ha,
  Ss,
  za = !1,
  Td,
  Pd,
  Ad,
  or = null;
function QP(e) {
  ZP(e) && kt(e);
}
function ZP(e) {
  if (
    e.target === document.body ||
    e.target.classList.contains("q-layout__backdrop")
  )
    return !0;
  const t = rb(e),
    n = e.shiftKey && !e.deltaX,
    r = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    s = n || r ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    if (XP(o, r))
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
function Nd(e) {
  e.target === document &&
    (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Oi(e) {
  za !== !0 &&
    ((za = !0),
    requestAnimationFrame(() => {
      za = !1;
      const { height: t } = e.target,
        { clientHeight: n, scrollTop: r } = document.scrollingElement;
      (Ss === void 0 || t !== window.innerHeight) &&
        ((Ss = n - t), (document.scrollingElement.scrollTop = r)),
        r > Ss &&
          (document.scrollingElement.scrollTop -= Math.ceil((r - Ss) / 8));
    }));
}
function Rd(e) {
  const t = document.body,
    n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: r, overflowX: s } = window.getComputedStyle(t);
    (qa = Up(window)),
      (Ha = $p(window)),
      (Td = t.style.left),
      (Pd = t.style.top),
      (Ad = window.location.href),
      (t.style.left = `-${qa}px`),
      (t.style.top = `-${Ha}px`),
      s !== "hidden" &&
        (s === "scroll" || t.scrollWidth > window.innerWidth) &&
        t.classList.add("q-body--force-scrollbar-x"),
      r !== "hidden" &&
        (r === "scroll" || t.scrollHeight > window.innerHeight) &&
        t.classList.add("q-body--force-scrollbar-y"),
      t.classList.add("q-body--prevent-scroll"),
      (document.qScrollPrevented = !0),
      He.is.ios === !0 &&
        (n === !0
          ? (window.scrollTo(0, 0),
            window.visualViewport.addEventListener(
              "resize",
              Oi,
              ht.passiveCapture
            ),
            window.visualViewport.addEventListener(
              "scroll",
              Oi,
              ht.passiveCapture
            ),
            window.scrollTo(0, 0))
          : window.addEventListener("scroll", Nd, ht.passiveCapture));
  }
  He.is.desktop === !0 &&
    He.is.mac === !0 &&
    window[`${e}EventListener`]("wheel", QP, ht.notPassive),
    e === "remove" &&
      (He.is.ios === !0 &&
        (n === !0
          ? (window.visualViewport.removeEventListener(
              "resize",
              Oi,
              ht.passiveCapture
            ),
            window.visualViewport.removeEventListener(
              "scroll",
              Oi,
              ht.passiveCapture
            ))
          : window.removeEventListener("scroll", Nd, ht.passiveCapture)),
      t.classList.remove("q-body--prevent-scroll"),
      t.classList.remove("q-body--force-scrollbar-x"),
      t.classList.remove("q-body--force-scrollbar-y"),
      (document.qScrollPrevented = !1),
      (t.style.left = Td),
      (t.style.top = Pd),
      window.location.href === Ad && window.scrollTo(qa, Ha),
      (Ss = void 0));
}
function jl(e) {
  let t = "add";
  if (e === !0) {
    if ((ms++, or !== null)) {
      clearTimeout(or), (or = null);
      return;
    }
    if (ms > 1) return;
  } else {
    if (ms === 0 || (ms--, ms > 0)) return;
    if (((t = "remove"), He.is.ios === !0 && He.is.nativeMobile === !0)) {
      or !== null && clearTimeout(or),
        (or = setTimeout(() => {
          Rd(t), (or = null);
        }, 100));
      return;
    }
  }
  Rd(t);
}
function eA() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && ((e = t), jl(t));
    },
  };
}
function Ut(e, t) {
  return (e !== void 0 && e()) || t;
}
function fR(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null) return n.slice();
  }
  return t;
}
function dr(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function tA(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function dR(e, t, n, r, s, i) {
  t.key = r + s;
  const o = U(e, t, n);
  return s === !0 ? Dh(o, i()) : o;
}
const vr = [];
let Zr;
function nA(e) {
  Zr = e.keyCode === 27;
}
function rA() {
  Zr === !0 && (Zr = !1);
}
function sA(e) {
  Zr === !0 && ((Zr = !1), Js(e, 27) === !0 && vr[vr.length - 1](e));
}
function Wp(e) {
  window[e]("keydown", nA),
    window[e]("blur", rA),
    window[e]("keyup", sA),
    (Zr = !1);
}
function iA(e) {
  He.is.desktop === !0 &&
    (vr.push(e), vr.length === 1 && Wp("addEventListener"));
}
function Od(e) {
  const t = vr.indexOf(e);
  t !== -1 && (vr.splice(t, 1), vr.length === 0 && Wp("removeEventListener"));
}
const yr = [];
function jp(e) {
  yr[yr.length - 1](e);
}
function oA(e) {
  He.is.desktop === !0 &&
    (yr.push(e),
    yr.length === 1 && document.body.addEventListener("focusin", jp));
}
function Ld(e) {
  const t = yr.indexOf(e);
  t !== -1 &&
    (yr.splice(t, 1),
    yr.length === 0 && document.body.removeEventListener("focusin", jp));
}
let Li = 0;
const aA = {
    standard: "fixed-full flex-center",
    top: "fixed-top justify-center",
    bottom: "fixed-bottom justify-center",
    right: "fixed-right items-center",
    left: "fixed-left items-center",
  },
  xd = {
    standard: ["scale", "scale"],
    top: ["slide-down", "slide-up"],
    bottom: ["slide-up", "slide-down"],
    right: ["slide-left", "slide-right"],
    left: ["slide-right", "slide-left"],
  },
  lA = rt({
    name: "QDialog",
    inheritAttrs: !1,
    props: {
      ...MP,
      ...$P,
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
    emits: [...DP, "shake", "click", "escapeKey"],
    setup(e, { slots: t, emit: n, attrs: r }) {
      const s = Se(),
        i = he(null),
        o = he(!1),
        a = he(!1);
      let l = null,
        c = null,
        u,
        f;
      const d = M(
          () =>
            e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
        ),
        { preventBodyScroll: h } = eA(),
        { registerTimeout: g } = LP(),
        { registerTick: w, removeTick: k } = xP(),
        { transitionProps: y, transitionStyle: m } = UP(
          e,
          () => xd[e.position][0],
          () => xd[e.position][1]
        ),
        E = M(
          () =>
            m.value +
            (e.backdropFilter !== void 0
              ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`
              : "")
        ),
        {
          showPortal: _,
          hidePortal: T,
          portalIsAccessible: O,
          renderPortal: N,
        } = KP(s, i, Me, "dialog"),
        { hide: W } = FP({
          showing: o,
          hideOnRouteChange: d,
          handleShow: ee,
          handleHide: Z,
          processOnMount: !0,
        }),
        { addToHistory: I, removeFromHistory: L } = OP(o, W, d),
        B = M(
          () =>
            `q-dialog__inner flex no-pointer-events q-dialog__inner--${
              e.maximized === !0 ? "maximized" : "minimized"
            } q-dialog__inner--${e.position} ${aA[e.position]}` +
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
      me(
        () => e.maximized,
        (ne) => {
          o.value === !0 && de(ne);
        }
      ),
        me(C, (ne) => {
          h(ne), ne === !0 ? (oA(Ne), iA(ie)) : (Ld(Ne), Od(ie));
        });
      function ee(ne) {
        I(),
          (c =
            e.noRefocus === !1 && document.activeElement !== null
              ? document.activeElement
              : null),
          de(e.maximized),
          _(),
          (a.value = !0),
          e.noFocus !== !0 ? (document.activeElement?.blur(), w(J)) : k(),
          g(() => {
            if (s.proxy.$q.platform.is.ios === !0) {
              if (e.seamless !== !0 && document.activeElement) {
                const { top: D, bottom: X } =
                    document.activeElement.getBoundingClientRect(),
                  { innerHeight: Y } = window,
                  te =
                    window.visualViewport !== void 0
                      ? window.visualViewport.height
                      : Y;
                D > 0 &&
                  X > te / 2 &&
                  (document.scrollingElement.scrollTop = Math.min(
                    document.scrollingElement.scrollHeight - te,
                    X >= Y
                      ? 1 / 0
                      : Math.ceil(
                          document.scrollingElement.scrollTop + X - te / 2
                        )
                  )),
                  document.activeElement.scrollIntoView();
              }
              (f = !0), i.value.click(), (f = !1);
            }
            _(!0), (a.value = !1), n("show", ne);
          }, e.transitionDuration);
      }
      function Z(ne) {
        k(),
          L(),
          ue(!0),
          (a.value = !0),
          T(),
          c !== null &&
            ((
              (ne?.type.indexOf("key") === 0
                ? c.closest('[tabindex]:not([tabindex^="-"])')
                : void 0) || c
            ).focus(),
            (c = null)),
          g(() => {
            T(!0), (a.value = !1), n("hide", ne);
          }, e.transitionDuration);
      }
      function J(ne) {
        Kc(() => {
          let D = i.value;
          if (D !== null) {
            if (ne !== void 0) {
              const X = D.querySelector(ne);
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
      function K(ne) {
        ne && typeof ne.focus == "function"
          ? ne.focus({
              preventScroll: !0,
            })
          : J(),
          n("shake");
        const D = i.value;
        D !== null &&
          (D.classList.remove("q-animate--scale"),
          D.classList.add("q-animate--scale"),
          l !== null && clearTimeout(l),
          (l = setTimeout(() => {
            (l = null),
              i.value !== null && (D.classList.remove("q-animate--scale"), J());
          }, 170)));
      }
      function ie() {
        e.seamless !== !0 &&
          (e.persistent === !0 || e.noEscDismiss === !0
            ? e.maximized !== !0 && e.noShake !== !0 && K()
            : (n("escapeKey"), W()));
      }
      function ue(ne) {
        l !== null && (clearTimeout(l), (l = null)),
          (ne === !0 || o.value === !0) &&
            (de(!1), e.seamless !== !0 && (h(!1), Ld(Ne), Od(ie))),
          ne !== !0 && (c = null);
      }
      function de(ne) {
        ne === !0
          ? u !== !0 &&
            (Li < 1 && document.body.classList.add("q-body--dialog"),
            Li++,
            (u = !0))
          : u === !0 &&
            (Li < 2 && document.body.classList.remove("q-body--dialog"),
            Li--,
            (u = !1));
      }
      function z(ne) {
        f !== !0 && (W(ne), n("click", ne));
      }
      function pe(ne) {
        e.persistent !== !0 && e.noBackdropDismiss !== !0
          ? W(ne)
          : e.noShake !== !0 && K();
      }
      function Ne(ne) {
        e.allowFocusOutside !== !0 &&
          O.value === !0 &&
          JP(i.value, ne.target) !== !0 &&
          J('[tabindex]:not([tabindex="-1"])');
      }
      Object.assign(s.proxy, {
        focus: J,
        shake: K,
        __updateRefocusTarget(ne) {
          c = ne || null;
        },
      }),
        Ot(ue);
      function Me() {
        return U(
          "div",
          {
            role: "dialog",
            "aria-modal": C.value === !0 ? "true" : "false",
            ...r,
            class: $.value,
          },
          [
            U(
              Ks,
              {
                name: "q-transition--fade",
                appear: !0,
              },
              () =>
                C.value === !0
                  ? U("div", {
                      class: "q-dialog__backdrop fixed-full",
                      style: E.value,
                      "aria-hidden": "true",
                      tabindex: -1,
                      onClick: pe,
                    })
                  : null
            ),
            U(Ks, y.value, () =>
              o.value === !0
                ? U(
                    "div",
                    {
                      ref: i,
                      class: B.value,
                      style: m.value,
                      tabindex: -1,
                      ...G.value,
                    },
                    Ut(t.default)
                  )
                : null
            ),
          ]
        );
      }
      return N;
    },
  }),
  ql = {
    xs: 18,
    sm: 24,
    md: 32,
    lg: 38,
    xl: 46,
  },
  yi = {
    size: String,
  };
function _i(e, t = ql) {
  return M(() =>
    e.size !== void 0
      ? {
          fontSize: e.size in t ? `${t[e.size]}px` : e.size,
        }
      : null
  );
}
const Md = "0 0 24 24",
  Ka = (e) => e,
  Ga = (e) => `ionicons ${e}`,
  qp = {
    "mdi-": (e) => `mdi ${e}`,
    "icon-": Ka,
    "bt-": (e) => `bt ${e}`,
    "eva-": (e) => `eva ${e}`,
    "ion-md": Ga,
    "ion-ios": Ga,
    "ion-logo": Ga,
    "iconfont ": Ka,
    "ti-": (e) => `themify-icon ${e}`,
    "bi-": (e) => `bootstrap-icons ${e}`,
    "i-": Ka,
  },
  Hp = {
    o_: "-outlined",
    r_: "-round",
    s_: "-sharp",
  },
  zp = {
    sym_o_: "-outlined",
    sym_r_: "-rounded",
    sym_s_: "-sharp",
  },
  cA = new RegExp("^(" + Object.keys(qp).join("|") + ")"),
  uA = new RegExp("^(" + Object.keys(Hp).join("|") + ")"),
  Dd = new RegExp("^(" + Object.keys(zp).join("|") + ")"),
  fA = /^[Mm]\s?[-+]?\.?\d/,
  dA = /^img:/,
  hA = /^svguse:/,
  mA = /^ion-/,
  gA =
    /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,
  Sn = rt({
    name: "QIcon",
    props: {
      ...yi,
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
        } = Se(),
        r = _i(e),
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
          if (fA.test(a) === !0) {
            const [u, f = Md] = a.split("|");
            return {
              svg: !0,
              viewBox: f,
              nodes: u.split("&&").map((d) => {
                const [h, g, w] = d.split("@@");
                return U("path", {
                  style: g,
                  d: h,
                  transform: w,
                });
              }),
            };
          }
          if (dA.test(a) === !0)
            return {
              img: !0,
              src: a.substring(4),
            };
          if (hA.test(a) === !0) {
            const [u, f = Md] = a.split("|");
            return {
              svguse: !0,
              src: u.substring(7),
              viewBox: f,
            };
          }
          let l = " ";
          const c = a.match(cA);
          if (c !== null) o = qp[c[1]](a);
          else if (gA.test(a) === !0) o = a;
          else if (mA.test(a) === !0)
            o = `ionicons ion-${
              n.platform.is.ios === !0 ? "ios" : "md"
            }${a.substring(3)}`;
          else if (Dd.test(a) === !0) {
            o = "notranslate material-symbols";
            const u = a.match(Dd);
            u !== null && ((a = a.substring(6)), (o += zp[u[1]])), (l = a);
          } else {
            o = "notranslate material-icons";
            const u = a.match(uA);
            u !== null && ((a = a.substring(2)), (o += Hp[u[1]])), (l = a);
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
          ? U(e.tag, o, Ut(t.default))
          : i.value.img === !0
          ? U(
              e.tag,
              o,
              dr(t.default, [
                U("img", {
                  src: i.value.src,
                }),
              ])
            )
          : i.value.svg === !0
          ? U(
              e.tag,
              o,
              dr(t.default, [
                U(
                  "svg",
                  {
                    viewBox: i.value.viewBox || "0 0 24 24",
                  },
                  i.value.nodes
                ),
              ])
            )
          : i.value.svguse === !0
          ? U(
              e.tag,
              o,
              dr(t.default, [
                U(
                  "svg",
                  {
                    viewBox: i.value.viewBox,
                  },
                  [
                    U("use", {
                      "xlink:href": i.value.src,
                    }),
                  ]
                ),
              ])
            )
          : (i.value.cls !== void 0 && (o.class += " " + i.value.cls),
            U(e.tag, o, dr(t.default, [i.value.content])));
      };
    },
  }),
  pA = {
    size: {
      type: [String, Number],
      default: "1em",
    },
    color: String,
  };
function vA(e) {
  return {
    cSize: M(() => (e.size in ql ? `${ql[e.size]}px` : e.size)),
    classes: M(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")),
  };
}
const es = rt({
  name: "QSpinner",
  props: {
    ...pA,
    thickness: {
      type: Number,
      default: 5,
    },
  },
  setup(e) {
    const { cSize: t, classes: n } = vA(e);
    return () =>
      U(
        "svg",
        {
          class: n.value + " q-spinner-mat",
          width: t.value,
          height: t.value,
          viewBox: "25 25 50 50",
        },
        [
          U("circle", {
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
function yA(e, t = 250) {
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
function Fd(e, t, n, r) {
  n.modifiers.stop === !0 && ho(e);
  const s = n.modifiers.color;
  let i = n.modifiers.center;
  i = i === !0 || r === !0;
  const o = document.createElement("span"),
    a = document.createElement("span"),
    l = nb(e),
    { left: c, top: u, width: f, height: d } = t.getBoundingClientRect(),
    h = Math.sqrt(f * f + d * d),
    g = h / 2,
    w = `${(f - h) / 2}px`,
    k = i ? w : `${l.left - c - g}px`,
    y = `${(d - h) / 2}px`,
    m = i ? y : `${l.top - u - g}px`;
  (a.className = "q-ripple__inner"),
    Bl(a, {
      height: `${h}px`,
      width: `${h}px`,
      transform: `translate3d(${k},${m},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (o.className = `q-ripple${s ? " text-" + s : ""}`),
    o.setAttribute("dir", "ltr"),
    o.appendChild(a),
    t.appendChild(o);
  const E = () => {
    o.remove(), clearTimeout(_);
  };
  n.abort.push(E);
  let _ = setTimeout(() => {
    a.classList.add("q-ripple__inner--enter"),
      (a.style.transform = `translate3d(${w},${y},0) scale3d(1,1,1)`),
      (a.style.opacity = 0.2),
      (_ = setTimeout(() => {
        a.classList.remove("q-ripple__inner--enter"),
          a.classList.add("q-ripple__inner--leave"),
          (a.style.opacity = 0),
          (_ = setTimeout(() => {
            o.remove(), n.abort.splice(n.abort.indexOf(E), 1);
          }, 275));
      }, 250));
  }, 50);
}
function $d(e, { modifiers: t, value: n, arg: r }) {
  const s = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: s.early === !0,
    stop: s.stop === !0,
    center: s.center === !0,
    color: s.color || r,
    keyCodes: [].concat(s.keyCodes || 13),
  };
}
const _A = tb({
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
            Fd(s, e, r, s.qKeyEvent === !0);
        },
        keystart: yA((s) => {
          r.enabled === !0 &&
            s.qSkipRipple !== !0 &&
            Js(s, r.modifiers.keyCodes) === !0 &&
            s.type === `key${r.modifiers.early === !0 ? "down" : "up"}` &&
            Fd(s, e, r, !0);
        }, 300),
      };
      $d(r, t),
        (e.__qripple = r),
        sb(r, "main", [
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
          n.enabled === !0 && Object(t.value) === t.value && $d(n, t));
      }
    },
    beforeUnmount(e) {
      const t = e.__qripple;
      t !== void 0 &&
        (t.abort.forEach((n) => {
          n();
        }),
        ib(t, "main"),
        delete e._qripple);
    },
  }),
  Kp = {
    left: "start",
    center: "center",
    right: "end",
    between: "between",
    around: "around",
    evenly: "evenly",
    stretch: "stretch",
  },
  bA = Object.keys(Kp),
  Gp = {
    align: {
      type: String,
      validator: (e) => bA.includes(e),
    },
  };
function Jp(e) {
  return M(() => {
    const t =
      e.align === void 0 ? (e.vertical === !0 ? "stretch" : "left") : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${Kp[t]}`;
  });
}
function Ud(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
function Bd(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function wA(e, t) {
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
function Vd(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function EA(e, t) {
  return Array.isArray(e) === !0
    ? Vd(e, t)
    : Array.isArray(t) === !0
    ? Vd(t, e)
    : e === t;
}
function SA(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (EA(e[n], t[n]) === !1) return !1;
  return !0;
}
const Yp = {
    to: [String, Object],
    replace: Boolean,
    href: String,
    target: String,
    disable: Boolean,
  },
  hR = {
    ...Yp,
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
function CA({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = Se(),
    { props: r, proxy: s, emit: i } = n,
    o = Mp(n),
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
      const { matched: T } = c.value,
        { length: O } = T,
        N = T[O - 1];
      if (N === void 0) return -1;
      const W = s.$route.matched;
      if (W.length === 0) return -1;
      const I = W.findIndex(Bd.bind(null, N));
      if (I !== -1) return I;
      const L = Ud(T[O - 2]);
      return O > 1 && Ud(N) === L && W[W.length - 1].path !== L
        ? W.findIndex(Bd.bind(null, T[O - 2]))
        : I;
    }),
    w = M(
      () =>
        u.value === !0 && g.value !== -1 && wA(s.$route.params, c.value.params)
    ),
    k = M(
      () =>
        w.value === !0 &&
        g.value === s.$route.matched.length - 1 &&
        SA(s.$route.params, c.value.params)
    ),
    y = M(() =>
      u.value === !0
        ? k.value === !0
          ? ` ${r.exactActiveClass} ${r.activeClass}`
          : r.exact === !0
          ? ""
          : w.value === !0
          ? ` ${r.activeClass}`
          : ""
        : ""
    );
  function m(T) {
    try {
      return s.$router.resolve(T);
    } catch {}
    return null;
  }
  function E(
    T,
    { returnRouterError: O, to: N = r.to, replace: W = r.replace } = {}
  ) {
    if (r.disable === !0) return T.preventDefault(), Promise.resolve(!1);
    if (
      T.metaKey ||
      T.altKey ||
      T.ctrlKey ||
      T.shiftKey ||
      (T.button !== void 0 && T.button !== 0) ||
      r.target === "_blank"
    )
      return Promise.resolve(!1);
    T.preventDefault();
    const I = s.$router[W === !0 ? "replace" : "push"](N);
    return O === !0 ? I : I.then(() => {}).catch(() => {});
  }
  function _(T) {
    if (u.value === !0) {
      const O = (N) => E(T, N);
      i("click", T, O), T.defaultPrevented !== !0 && O();
    } else i("click", T);
  }
  return {
    hasRouterLink: u,
    hasHrefLink: a,
    hasLink: f,
    linkTag: d,
    resolvedLink: c,
    linkIsActive: w,
    linkIsExactActive: k,
    linkClass: y,
    linkAttrs: h,
    getLink: m,
    navigateToRouterLink: E,
    navigateOnClick: _,
  };
}
const Wd = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  IA = {
    xs: 8,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 24,
  },
  kA = ["button", "submit", "reset"],
  TA = /[^\s]\/[^\s]/,
  PA = ["flat", "outline", "push", "unelevated"];
function Xp(e, t) {
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
function mR(e) {
  const t = Xp(e);
  return t !== void 0
    ? {
        [t]: !0,
      }
    : {};
}
const AA = {
    ...yi,
    ...Yp,
    type: {
      type: String,
      default: "button",
    },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...PA.reduce((e, t) => (e[t] = Boolean) && e, {}),
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
      ...Gp.align,
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
  NA = {
    ...AA,
    round: Boolean,
  };
function RA(e) {
  const t = _i(e, IA),
    n = Jp(e),
    {
      hasRouterLink: r,
      hasLink: s,
      linkTag: i,
      linkAttrs: o,
      navigateOnClick: a,
    } = CA({
      fallbackTag: "button",
    }),
    l = M(() => {
      const k = e.fab === !1 && e.fabMini === !1 ? t.value : {};
      return e.padding !== void 0
        ? Object.assign({}, k, {
            padding: e.padding
              .split(/\s+/)
              .map((y) => (y in Wd ? Wd[y] + "px" : y))
              .join(" "),
            minWidth: "0",
            minHeight: "0",
          })
        : k;
    }),
    c = M(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    u = M(() => e.disable !== !0 && e.loading !== !0),
    f = M(() => (u.value === !0 ? e.tabindex || 0 : -1)),
    d = M(() => Xp(e, "standard")),
    h = M(() => {
      const k = {
        tabindex: f.value,
      };
      return (
        s.value === !0
          ? Object.assign(k, o.value)
          : kA.includes(e.type) === !0 && (k.type = e.type),
        i.value === "a"
          ? (e.disable === !0
              ? (k["aria-disabled"] = "true")
              : k.href === void 0 && (k.role = "button"),
            r.value !== !0 && TA.test(e.type) === !0 && (k.type = e.type))
          : e.disable === !0 &&
            ((k.disabled = ""), (k["aria-disabled"] = "true")),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(k, {
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": e.percentage,
          }),
        k
      );
    }),
    g = M(() => {
      let k;
      e.color !== void 0
        ? e.flat === !0 || e.outline === !0
          ? (k = `text-${e.textColor || e.color}`)
          : (k = `bg-${e.color} text-${e.textColor || "white"}`)
        : e.textColor && (k = `text-${e.textColor}`);
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
        (k !== void 0 ? " " + k : "") +
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
const { passiveCapture: Ct } = ht;
let kr = null,
  Tr = null,
  Pr = null;
const Hl = rt({
    name: "QBtn",
    props: {
      ...NA,
      percentage: Number,
      darkPercentage: Boolean,
      onTouchstart: [Function, Array],
    },
    emits: ["click", "keydown", "mousedown", "keyup"],
    setup(e, { slots: t, emit: n }) {
      const { proxy: r } = Se(),
        {
          classes: s,
          style: i,
          innerClasses: o,
          attributes: a,
          hasLink: l,
          linkTag: c,
          navigateOnClick: u,
          isActionable: f,
        } = RA(e),
        d = he(null),
        h = he(null);
      let g = null,
        w,
        k = null;
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
        E = M(() => ({
          center: e.round,
        })),
        _ = M(() => {
          const $ = Math.max(0, Math.min(100, e.percentage));
          return $ > 0
            ? {
                transition: "transform 0.6s",
                transform: `translateX(${$ - 100}%)`,
              }
            : {};
        }),
        T = M(() => {
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
              onMousedown: L,
            };
            if (r.$q.platform.has.touch === !0) {
              const ee = e.onTouchstart !== void 0 ? "" : "Passive";
              $[`onTouchstart${ee}`] = I;
            }
            return $;
          }
          return {
            onClick: kt,
          };
        }),
        O = M(() => ({
          ref: d,
          class: "q-btn q-btn-item non-selectable no-outline " + s.value,
          style: i.value,
          ...a.value,
          ...T.value,
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
              const Z = () => {
                document.removeEventListener("keydown", kt, !0),
                  document.removeEventListener("keyup", Z, Ct),
                  d.value?.removeEventListener("blur", Z, Ct);
              };
              document.addEventListener("keydown", kt, !0),
                document.addEventListener("keyup", Z, Ct),
                d.value.addEventListener("blur", Z, Ct);
            }
          }
          u($);
        }
      }
      function W($) {
        d.value !== null &&
          (n("keydown", $),
          Js($, [13, 32]) === !0 &&
            Tr !== d.value &&
            (Tr !== null && C(),
            $.defaultPrevented !== !0 &&
              ($.qAvoidFocus !== !0 && d.value.focus(),
              (Tr = d.value),
              d.value.classList.add("q-btn--active"),
              document.addEventListener("keyup", B, !0),
              d.value.addEventListener("blur", B, Ct)),
            kt($)));
      }
      function I($) {
        d.value !== null &&
          (n("touchstart", $),
          $.defaultPrevented !== !0 &&
            (kr !== d.value &&
              (kr !== null && C(),
              (kr = d.value),
              (g = $.target),
              g.addEventListener("touchcancel", B, Ct),
              g.addEventListener("touchend", B, Ct)),
            (w = !0),
            k !== null && clearTimeout(k),
            (k = setTimeout(() => {
              (k = null), (w = !1);
            }, 200))));
      }
      function L($) {
        d.value !== null &&
          (($.qSkipRipple = w === !0),
          n("mousedown", $),
          $.defaultPrevented !== !0 &&
            Pr !== d.value &&
            (Pr !== null && C(),
            (Pr = d.value),
            d.value.classList.add("q-btn--active"),
            document.addEventListener("mouseup", B, Ct)));
      }
      function B($) {
        if (
          d.value !== null &&
          !($?.type === "blur" && document.activeElement === d.value)
        ) {
          if ($?.type === "keyup") {
            if (Tr === d.value && Js($, [13, 32]) === !0) {
              const ee = new MouseEvent("click", $);
              (ee.qKeyEvent = !0),
                $.defaultPrevented === !0 && Wn(ee),
                $.cancelBubble === !0 && ho(ee),
                d.value.dispatchEvent(ee),
                kt($),
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
          (kr === d.value || Pr === d.value) &&
          ee !== null &&
          ee !== document.activeElement &&
          (ee.setAttribute("tabindex", -1), ee.focus()),
          kr === d.value &&
            (g !== null &&
              (g.removeEventListener("touchcancel", B, Ct),
              g.removeEventListener("touchend", B, Ct)),
            (kr = g = null)),
          Pr === d.value &&
            (document.removeEventListener("mouseup", B, Ct), (Pr = null)),
          Tr === d.value &&
            (document.removeEventListener("keyup", B, !0),
            d.value?.removeEventListener("blur", B, Ct),
            (Tr = null)),
          d.value?.classList.remove("q-btn--active");
      }
      function G($) {
        kt($), ($.qSkipRipple = !0);
      }
      return (
        Ot(() => {
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
              U(Sn, {
                name: e.icon,
                left: e.stack !== !0 && y.value === !0,
                role: "img",
              })
            ),
            y.value === !0 &&
              $.push(
                U(
                  "span",
                  {
                    class: "block",
                  },
                  [e.label]
                )
              ),
            ($ = dr(t.default, $)),
            e.iconRight !== void 0 &&
              e.round === !1 &&
              $.push(
                U(Sn, {
                  name: e.iconRight,
                  right: e.stack !== !0 && y.value === !0,
                  role: "img",
                })
              );
          const ee = [
            U("span", {
              class: "q-focus-helper",
              ref: h,
            }),
          ];
          return (
            e.loading === !0 &&
              e.percentage !== void 0 &&
              ee.push(
                U(
                  "span",
                  {
                    class:
                      "q-btn__progress absolute-full overflow-hidden" +
                      (e.darkPercentage === !0 ? " q-btn__progress--dark" : ""),
                  },
                  [
                    U("span", {
                      class: "q-btn__progress-indicator fit block",
                      style: _.value,
                    }),
                  ]
                )
              ),
            ee.push(
              U(
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
                U(
                  Ks,
                  {
                    name: "q-transition--fade",
                  },
                  () =>
                    e.loading === !0
                      ? [
                          U(
                            "span",
                            {
                              key: "loading",
                              class: "absolute-full flex flex-center",
                            },
                            t.loading !== void 0 ? t.loading() : [U(es)]
                          ),
                        ]
                      : null
                )
              ),
            Dh(U(c.value, O.value, ee), [[_A, m.value, void 0, E.value]])
          );
        }
      );
    },
  }),
  Er = {
    dark: {
      type: Boolean,
      default: null,
    },
  };
function Sr(e, t) {
  return M(() => (e.dark === null ? t.dark.isActive : e.dark));
}
const OA = rt({
    name: "QCard",
    props: {
      ...Er,
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
        } = Se(),
        r = Sr(e, n),
        s = M(
          () =>
            "q-card" +
            (r.value === !0 ? " q-card--dark q-dark" : "") +
            (e.bordered === !0 ? " q-card--bordered" : "") +
            (e.square === !0 ? " q-card--square no-border-radius" : "") +
            (e.flat === !0 ? " q-card--flat no-shadow" : "")
        );
      return () =>
        U(
          e.tag,
          {
            class: s.value,
          },
          Ut(t.default)
        );
    },
  }),
  gs = rt({
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
        U(
          e.tag,
          {
            class: n.value,
          },
          Ut(t.default)
        );
    },
  }),
  LA = rt({
    name: "QCardActions",
    props: {
      ...Gp,
      vertical: Boolean,
    },
    setup(e, { slots: t }) {
      const n = Jp(e),
        r = M(
          () =>
            `q-card__actions ${n.value} q-card__actions--${
              e.vertical === !0 ? "vert column" : "horiz row"
            }`
        );
      return () =>
        U(
          "div",
          {
            class: r.value,
          },
          Ut(t.default)
        );
    },
  }),
  xA = {
    true: "inset",
    item: "item-inset",
    "item-thumbnail": "item-thumbnail-inset",
  },
  Ja = {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  },
  jd = rt({
    name: "QSeparator",
    props: {
      ...Er,
      spaced: [Boolean, String],
      inset: [Boolean, String],
      vertical: Boolean,
      color: String,
      size: String,
    },
    setup(e) {
      const t = Se(),
        n = Sr(e, t.proxy.$q),
        r = M(() => (e.vertical === !0 ? "vertical" : "horizontal")),
        s = M(() => ` q-separator--${r.value}`),
        i = M(() => (e.inset !== !1 ? `${s.value}-${xA[e.inset]}` : "")),
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
                  ? `${Ja.md}px`
                  : e.spaced in Ja
                  ? `${Ja[e.spaced]}px`
                  : e.spaced,
              u = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
            l[`margin${u[0]}`] = l[`margin${u[1]}`] = c;
          }
          return l;
        });
      return () =>
        U("hr", {
          class: o.value,
          style: a.value,
          "aria-orientation": r.value,
        });
    },
  });
let Ya,
  xi = 0;
const Ye = new Array(256);
for (let e = 0; e < 256; e++) Ye[e] = (e + 256).toString(16).substring(1);
const MA = (() => {
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
  qd = 4096;
function zl() {
  (Ya === void 0 || xi + 16 > qd) && ((xi = 0), (Ya = MA(qd)));
  const e = Array.prototype.slice.call(Ya, xi, (xi += 16));
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
function DA(e) {
  return e ?? null;
}
function Hd(e, t) {
  return e ?? (t === !0 ? `f_${zl()}` : null);
}
function FA({ getValue: e, required: t = !0 } = {}) {
  if (Yn.value === !0) {
    const n = he(e !== void 0 ? DA(e()) : null);
    return (
      t === !0 &&
        n.value === null &&
        Rt(() => {
          n.value = `f_${zl()}`;
        }),
      e !== void 0 &&
        me(e, (r) => {
          n.value = Hd(r, t);
        }),
      n
    );
  }
  return e !== void 0 ? M(() => Hd(e(), t)) : he(`f_${zl()}`);
}
const zd = /^on[A-Z]/;
function $A() {
  const { attrs: e, vnode: t } = Se(),
    n = {
      listeners: he({}),
      attributes: he({}),
    };
  function r() {
    const s = {},
      i = {};
    for (const o in e)
      o !== "class" && o !== "style" && zd.test(o) === !1 && (s[o] = e[o]);
    for (const o in t.props) zd.test(o) === !0 && (i[o] = t.props[o]);
    (n.attributes.value = s), (n.listeners.value = i);
  }
  return Gh(r), r(), n;
}
function UA({ validate: e, resetValidation: t, requiresQForm: n }) {
  const r = ft(yb, !1);
  if (r !== !1) {
    const { props: s, proxy: i } = Se();
    Object.assign(i, {
      validate: e,
      resetValidation: t,
    }),
      me(
        () => s.disable,
        (o) => {
          o === !0
            ? (typeof t == "function" && t(), r.unbindComponent(i))
            : r.bindComponent(i);
        }
      ),
      Rt(() => {
        s.disable !== !0 && r.bindComponent(i);
      }),
      Ot(() => {
        s.disable !== !0 && r.unbindComponent(i);
      });
  } else n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const Kd = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
  Gd = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
  Jd = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  Mi =
    /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
  Di =
    /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
  Xa = {
    date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    email: (e) =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e
      ),
    hexColor: (e) => Kd.test(e),
    hexaColor: (e) => Gd.test(e),
    hexOrHexaColor: (e) => Jd.test(e),
    rgbColor: (e) => Mi.test(e),
    rgbaColor: (e) => Di.test(e),
    rgbOrRgbaColor: (e) => Mi.test(e) || Di.test(e),
    hexOrRgbColor: (e) => Kd.test(e) || Mi.test(e),
    hexaOrRgbaColor: (e) => Gd.test(e) || Di.test(e),
    anyColor: (e) => Jd.test(e) || Mi.test(e) || Di.test(e),
  },
  BA = [!0, !1, "ondemand"],
  VA = {
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
      validator: (e) => BA.includes(e),
    },
  };
function WA(e, t) {
  const { props: n, proxy: r } = Se(),
    s = he(!1),
    i = he(null),
    o = he(!1);
  UA({
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
  me(
    () => n.modelValue,
    () => {
      (o.value = !0), u.value === !0 && n.lazyRules === !1 && k();
    }
  );
  function h() {
    n.lazyRules !== "ondemand" && u.value === !0 && o.value === !0 && k();
  }
  me(
    () => n.reactiveRules,
    (y) => {
      y === !0
        ? l === void 0 &&
          (l = me(() => n.rules, h, {
            immediate: !0,
            deep: !0,
          }))
        : l !== void 0 && (l(), (l = void 0));
    },
    {
      immediate: !0,
    }
  ),
    me(() => n.lazyRules, h),
    me(e, (y) => {
      y === !0
        ? (o.value = !0)
        : u.value === !0 && n.lazyRules !== "ondemand" && k();
    });
  function g() {
    a++,
      (t.value = !1),
      (o.value = !1),
      (s.value = !1),
      (i.value = null),
      k.cancel();
  }
  function w(y = n.modelValue) {
    if (n.disable === !0 || c.value === !1) return !0;
    const m = ++a,
      E =
        t.value !== !0
          ? () => {
              o.value = !0;
            }
          : () => {},
      _ = (O, N) => {
        O === !0 && E(), (s.value = O), (i.value = N || null), (t.value = !1);
      },
      T = [];
    for (let O = 0; O < n.rules.length; O++) {
      const N = n.rules[O];
      let W;
      if (
        (typeof N == "function"
          ? (W = N(y, Xa))
          : typeof N == "string" && Xa[N] !== void 0 && (W = Xa[N](y)),
        W === !1 || typeof W == "string")
      )
        return _(!0, W), !1;
      W !== !0 && W !== void 0 && T.push(W);
    }
    return T.length === 0
      ? (_(!1), !0)
      : ((t.value = !0),
        Promise.all(T).then(
          (O) => {
            if (O === void 0 || Array.isArray(O) === !1 || O.length === 0)
              return m === a && _(!1), !0;
            const N = O.find((W) => W === !1 || typeof W == "string");
            return m === a && _(N !== void 0, N), N === void 0;
          },
          (O) => (m === a && (console.error(O), _(!0)), !1)
        ));
  }
  const k = Tm(w, 0);
  return (
    Ot(() => {
      l?.(), k.cancel();
    }),
    Object.assign(r, {
      resetValidation: g,
      validate: w,
    }),
    ts(r, "hasError", () => f.value),
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
function Kl(e) {
  return e != null && ("" + e).length !== 0;
}
const jA = {
    ...Er,
    ...VA,
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
  qA = {
    ...jA,
    maxlength: [Number, String],
  },
  HA = ["update:modelValue", "clear", "focus", "blur"];
function zA({ requiredForAttr: e = !0, tagProp: t, changeEvent: n = !1 } = {}) {
  const { props: r, proxy: s } = Se(),
    i = Sr(r, s.$q),
    o = FA({
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
    innerLoading: he(!1),
    focused: he(!1),
    hasPopupOpen: !1,
    splitAttrs: $A(),
    targetUid: o,
    rootRef: he(null),
    targetRef: he(null),
    controlRef: he(null),
  };
}
function KA(e) {
  const { props: t, emit: n, slots: r, attrs: s, proxy: i } = Se(),
    { $q: o } = i;
  let a = null;
  e.hasValue === void 0 && (e.hasValue = M(() => Kl(t.modelValue))),
    e.emitValue === void 0 &&
      (e.emitValue = (K) => {
        n("update:modelValue", K);
      }),
    e.controlEvents === void 0 &&
      (e.controlEvents = {
        onFocusin: I,
        onFocusout: L,
      }),
    Object.assign(e, {
      clearValue: B,
      onControlFocusin: I,
      onControlFocusout: L,
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
    } = WA(e.focused, e.innerLoading),
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
    k = M(
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
    E = M(
      () =>
        "q-field__label no-pointer-events absolute ellipsis" +
        (t.labelColor !== void 0 && u.value !== !0
          ? ` text-${t.labelColor}`
          : "")
    ),
    _ = M(() => ({
      id: e.targetUid.value,
      editable: e.editable.value,
      focused: e.focused.value,
      floatingLabel: h.value,
      modelValue: t.modelValue,
      emitValue: e.emitValue,
    })),
    T = M(() => {
      const K = {};
      return (
        e.targetUid.value && (K.for = e.targetUid.value),
        t.disable === !0 && (K["aria-disabled"] = "true"),
        K
      );
    });
  function O() {
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
    Kc(O);
  }
  function W() {
    VP(O);
    const K = document.activeElement;
    K !== null && e.rootRef.value.contains(K) && K.blur();
  }
  function I(K) {
    a !== null && (clearTimeout(a), (a = null)),
      e.editable.value === !0 &&
        e.focused.value === !1 &&
        ((e.focused.value = !0), n("focus", K));
  }
  function L(K, ie) {
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
  function B(K) {
    kt(K),
      o.platform.is.mobile !== !0
        ? (e.targetRef?.value || e.rootRef.value).focus()
        : e.rootRef.value.contains(document.activeElement) === !0 &&
          document.activeElement.blur(),
      t.type === "file" && (e.inputRef.value.value = null),
      n("update:modelValue", null),
      e.changeEvent === !0 && n("change", null),
      n("clear", t.modelValue),
      ut(() => {
        const ie = l.value;
        d(), (l.value = ie);
      });
  }
  function C(K) {
    [13, 32].includes(K.keyCode) && B(K);
  }
  function G() {
    const K = [];
    return (
      r.prepend !== void 0 &&
        K.push(
          U(
            "div",
            {
              class:
                "q-field__prepend q-field__marginal row no-wrap items-center",
              key: "prepend",
              onClick: Wn,
            },
            r.prepend()
          )
        ),
      K.push(
        U(
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
          Z("error", [
            U(Sn, {
              name: o.iconSet.field.error,
              color: "negative",
            }),
          ])
        ),
      t.loading === !0 || e.innerLoading.value === !0
        ? K.push(
            Z(
              "inner-loading-append",
              r.loading !== void 0
                ? r.loading()
                : [
                    U(es, {
                      color: t.color,
                    }),
                  ]
            )
          )
        : t.clearable === !0 &&
          e.hasValue.value === !0 &&
          e.editable.value === !0 &&
          K.push(
            Z("inner-clearable-append", [
              U(Sn, {
                class: "q-field__focusable-action",
                name: t.clearIcon || o.iconSet.field.clear,
                tabindex: 0,
                role: "button",
                "aria-hidden": "false",
                "aria-label": o.lang.label.clear,
                onKeyup: C,
                onClick: B,
              }),
            ])
          ),
      r.append !== void 0 &&
        K.push(
          U(
            "div",
            {
              class:
                "q-field__append q-field__marginal row no-wrap items-center",
              key: "append",
              onClick: Wn,
            },
            r.append()
          )
        ),
      e.getInnerAppend !== void 0 &&
        K.push(Z("inner-append", e.getInnerAppend())),
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
          U(
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
            U(
              "div",
              {
                ref: e.targetRef,
                class: "q-field__native row",
                tabindex: -1,
                ...e.splitAttrs.attributes.value,
                "data-autofocus": t.autofocus === !0 || void 0,
              },
              r.control(_.value)
            )
          ),
      m.value === !0 &&
        K.push(
          U(
            "div",
            {
              class: E.value,
            },
            Ut(r.label, t.label)
          )
        ),
      t.suffix !== void 0 &&
        t.suffix !== null &&
        K.push(
          U(
            "div",
            {
              class: "q-field__suffix no-pointer-events row items-center",
            },
            t.suffix
          )
        ),
      K.concat(Ut(r.default))
    );
  }
  function ee() {
    let K, ie;
    u.value === !0
      ? f.value !== null
        ? ((K = [
            U(
              "div",
              {
                role: "alert",
              },
              f.value
            ),
          ]),
          (ie = `q--slot-error-${f.value}`))
        : ((K = Ut(r.error)), (ie = "q--slot-error"))
      : (t.hideHint !== !0 || e.focused.value === !0) &&
        (t.hint !== void 0
          ? ((K = [U("div", t.hint)]), (ie = `q--slot-hint-${t.hint}`))
          : ((K = Ut(r.hint)), (ie = "q--slot-hint")));
    const ue = t.counter === !0 || r.counter !== void 0;
    if (t.hideBottomSpace === !0 && ue === !1 && K === void 0) return;
    const de = U(
      "div",
      {
        key: ie,
        class: "q-field__messages col",
      },
      K
    );
    return U(
      "div",
      {
        class:
          "q-field__bottom row items-start q-field__bottom--" +
          (t.hideBottomSpace !== !0 ? "animated" : "stale"),
        onClick: Wn,
      },
      [
        t.hideBottomSpace === !0
          ? de
          : U(
              Ks,
              {
                name: "q-transition--field-message",
              },
              () => de
            ),
        ue === !0
          ? U(
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
  function Z(K, ie) {
    return ie === null
      ? null
      : U(
          "div",
          {
            key: K,
            class:
              "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip",
          },
          ie
        );
  }
  let J = !1;
  return (
    $o(() => {
      J = !0;
    }),
    zh(() => {
      J === !0 && t.autofocus === !0 && i.focus();
    }),
    t.autofocus === !0 &&
      Rt(() => {
        i.focus();
      }),
    Ot(() => {
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
              ...T.value,
            }
          : T.value;
      return U(
        e.tag.value,
        {
          ref: e.rootRef,
          class: [k.value, s.class],
          style: s.style,
          ...ie,
        },
        [
          r.before !== void 0
            ? U(
                "div",
                {
                  class:
                    "q-field__before q-field__marginal row no-wrap items-center",
                  onClick: Wn,
                },
                r.before()
              )
            : null,
          U(
            "div",
            {
              class: "q-field__inner relative-position col self-stretch",
            },
            [
              U(
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
            ? U(
                "div",
                {
                  class:
                    "q-field__after q-field__marginal row no-wrap items-center",
                  onClick: Wn,
                },
                r.after()
              )
            : null,
        ]
      );
    }
  );
}
const Yd = {
    date: "####/##/##",
    datetime: "####/##/## ##:##",
    time: "##:##",
    fulltime: "##:##:##",
    phone: "(###) ### - ####",
    card: "#### #### #### ####",
  },
  Ao = {
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
  Qp = Object.keys(Ao);
Qp.forEach((e) => {
  Ao[e].regex = new RegExp(Ao[e].pattern);
});
const GA = new RegExp(
    "\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Qp.join("") + "])|(.)",
    "g"
  ),
  Xd = /[.*+?^${}()|[\]\\]/g,
  Be = "",
  JA = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean,
  };
function YA(e, t, n, r) {
  let s, i, o, a, l, c;
  const u = he(null),
    f = he(h());
  function d() {
    return (
      e.autogrow === !0 ||
      ["textarea", "text", "search", "url", "tel", "password"].includes(e.type)
    );
  }
  me(() => e.type + e.autogrow, w),
    me(
      () => e.mask,
      (I) => {
        if (I !== void 0) k(f.value, !0);
        else {
          const L = N(f.value);
          w(), e.modelValue !== L && t("update:modelValue", L);
        }
      }
    ),
    me(
      () => e.fillMask + e.reverseFillMask,
      () => {
        u.value === !0 && k(f.value, !0);
      }
    ),
    me(
      () => e.unmaskedValue,
      () => {
        u.value === !0 && k(f.value);
      }
    );
  function h() {
    if ((w(), u.value === !0)) {
      const I = T(N(e.modelValue));
      return e.fillMask !== !1 ? W(I) : I;
    }
    return e.modelValue;
  }
  function g(I) {
    if (I < s.length) return s.slice(-I);
    let L = "",
      B = s;
    const C = B.indexOf(Be);
    if (C !== -1) {
      for (let G = I - B.length; G > 0; G--) L += Be;
      B = B.slice(0, C) + L + B.slice(C);
    }
    return B;
  }
  function w() {
    if (
      ((u.value = e.mask !== void 0 && e.mask.length !== 0 && d()),
      u.value === !1)
    ) {
      (a = void 0), (s = ""), (i = "");
      return;
    }
    const I = Yd[e.mask] === void 0 ? e.mask : Yd[e.mask],
      L =
        typeof e.fillMask == "string" && e.fillMask.length !== 0
          ? e.fillMask.slice(0, 1)
          : "_",
      B = L.replace(Xd, "\\$&"),
      C = [],
      G = [],
      $ = [];
    let ee = e.reverseFillMask === !0,
      Z = "",
      J = "";
    I.replace(GA, (de, z, pe, Ne, Me) => {
      if (Ne !== void 0) {
        const ne = Ao[Ne];
        $.push(ne),
          (J = ne.negate),
          ee === !0 &&
            (G.push(
              "(?:" +
                J +
                "+)?(" +
                ne.pattern +
                "+)?(?:" +
                J +
                "+)?(" +
                ne.pattern +
                "+)?"
            ),
            (ee = !1)),
          G.push("(?:" + J + "+)?(" + ne.pattern + ")?");
      } else if (pe !== void 0)
        (Z = "\\" + (pe === "\\" ? "" : pe)),
          $.push(pe),
          C.push("([^" + Z + "]+)?" + Z + "?");
      else {
        const ne = z !== void 0 ? z : Me;
        (Z = ne === "\\" ? "\\\\\\\\" : ne.replace(Xd, "\\\\$&")),
          $.push(ne),
          C.push("([^" + Z + "]+)?" + Z + "?");
      }
    });
    const K = new RegExp(
        "^" +
          C.join("") +
          "(" +
          (Z === "" ? "." : "[^" + Z + "]") +
          "+)?" +
          (Z === "" ? "" : "[" + Z + "]*") +
          "$"
      ),
      ie = G.length - 1,
      ue = G.map((de, z) =>
        z === 0 && e.reverseFillMask === !0
          ? new RegExp("^" + B + "*" + de)
          : z === ie
          ? new RegExp(
              "^" +
                de +
                "(" +
                (J === "" ? "." : J) +
                "+)?" +
                (e.reverseFillMask === !0 ? "$" : B + "*")
            )
          : new RegExp("^" + de)
      );
    (o = $),
      (a = (de) => {
        const z = K.exec(
          e.reverseFillMask === !0 ? de : de.slice(0, $.length + 1)
        );
        z !== null && (de = z.slice(1).join(""));
        const pe = [],
          Ne = ue.length;
        for (let Me = 0, ne = de; Me < Ne; Me++) {
          const D = ue[Me].exec(ne);
          if (D === null) break;
          (ne = ne.slice(D.shift().length)), pe.push(...D);
        }
        return pe.length !== 0 ? pe.join("") : de;
      }),
      (s = $.map((de) => (typeof de == "string" ? de : Be)).join("")),
      (i = s.split(Be).join(L));
  }
  function k(I, L, B) {
    const C = r.value,
      G = C.selectionEnd,
      $ = C.value.length - G,
      ee = N(I);
    L === !0 && w();
    const Z = T(ee),
      J = e.fillMask !== !1 ? W(Z) : Z,
      K = f.value !== J;
    C.value !== J && (C.value = J),
      K === !0 && (f.value = J),
      document.activeElement === C &&
        ut(() => {
          if (J === i) {
            const ue = e.reverseFillMask === !0 ? i.length : 0;
            C.setSelectionRange(ue, ue, "forward");
            return;
          }
          if (B === "insertFromPaste" && e.reverseFillMask !== !0) {
            const ue = C.selectionEnd;
            let de = G - 1;
            for (let z = l; z <= de && z < ue; z++) s[z] !== Be && de++;
            m.right(C, de);
            return;
          }
          if (
            ["deleteContentBackward", "deleteContentForward"].indexOf(B) !== -1
          ) {
            const ue =
              e.reverseFillMask === !0
                ? G === 0
                  ? J.length > Z.length
                    ? 1
                    : 0
                  : Math.max(
                      0,
                      J.length - (J === i ? 0 : Math.min(Z.length, $) + 1)
                    ) + 1
                : G;
            C.setSelectionRange(ue, ue, "forward");
            return;
          }
          if (e.reverseFillMask === !0)
            if (K === !0) {
              const ue = Math.max(
                0,
                J.length - (J === i ? 0 : Math.min(Z.length, $ + 1))
              );
              ue === 1 && G === 1
                ? C.setSelectionRange(ue, ue, "forward")
                : m.rightReverse(C, ue);
            } else {
              const ue = J.length - $;
              C.setSelectionRange(ue, ue, "backward");
            }
          else if (K === !0) {
            const ue = Math.max(0, s.indexOf(Be), Math.min(Z.length, G) - 1);
            m.right(C, ue);
          } else {
            const ue = G - 1;
            m.right(C, ue);
          }
        });
    const ie = e.unmaskedValue === !0 ? N(J) : J;
    String(e.modelValue) !== ie &&
      (e.modelValue !== null || ie !== "") &&
      n(ie, !0);
  }
  function y(I, L, B) {
    const C = T(N(I.value));
    (L = Math.max(0, s.indexOf(Be), Math.min(C.length, L))),
      (l = L),
      I.setSelectionRange(L, B, "forward");
  }
  const m = {
    left(I, L) {
      const B = s.slice(L - 1).indexOf(Be) === -1;
      let C = Math.max(0, L - 1);
      for (; C >= 0; C--)
        if (s[C] === Be) {
          (L = C), B === !0 && L++;
          break;
        }
      if (C < 0 && s[L] !== void 0 && s[L] !== Be) return m.right(I, 0);
      L >= 0 && I.setSelectionRange(L, L, "backward");
    },
    right(I, L) {
      const B = I.value.length;
      let C = Math.min(B, L + 1);
      for (; C <= B; C++)
        if (s[C] === Be) {
          L = C;
          break;
        } else s[C - 1] === Be && (L = C);
      if (C > B && s[L - 1] !== void 0 && s[L - 1] !== Be) return m.left(I, B);
      I.setSelectionRange(L, L, "forward");
    },
    leftReverse(I, L) {
      const B = g(I.value.length);
      let C = Math.max(0, L - 1);
      for (; C >= 0; C--)
        if (B[C - 1] === Be) {
          L = C;
          break;
        } else if (B[C] === Be && ((L = C), C === 0)) break;
      if (C < 0 && B[L] !== void 0 && B[L] !== Be) return m.rightReverse(I, 0);
      L >= 0 && I.setSelectionRange(L, L, "backward");
    },
    rightReverse(I, L) {
      const B = I.value.length,
        C = g(B),
        G = C.slice(0, L + 1).indexOf(Be) === -1;
      let $ = Math.min(B, L + 1);
      for (; $ <= B; $++)
        if (C[$ - 1] === Be) {
          (L = $), L > 0 && G === !0 && L--;
          break;
        }
      if ($ > B && C[L - 1] !== void 0 && C[L - 1] !== Be)
        return m.leftReverse(I, B);
      I.setSelectionRange(L, L, "forward");
    },
  };
  function E(I) {
    t("click", I), (c = void 0);
  }
  function _(I) {
    if ((t("keydown", I), Am(I) === !0 || I.altKey === !0)) return;
    const L = r.value,
      B = L.selectionStart,
      C = L.selectionEnd;
    if ((I.shiftKey || (c = void 0), I.keyCode === 37 || I.keyCode === 39)) {
      I.shiftKey &&
        c === void 0 &&
        (c = L.selectionDirection === "forward" ? B : C);
      const G =
        m[
          (I.keyCode === 39 ? "right" : "left") +
            (e.reverseFillMask === !0 ? "Reverse" : "")
        ];
      if ((I.preventDefault(), G(L, c === B ? C : B), I.shiftKey)) {
        const $ = L.selectionStart;
        L.setSelectionRange(Math.min(c, $), Math.max(c, $), "forward");
      }
    } else
      I.keyCode === 8 && e.reverseFillMask !== !0 && B === C
        ? (m.left(L, B), L.setSelectionRange(L.selectionStart, C, "backward"))
        : I.keyCode === 46 &&
          e.reverseFillMask === !0 &&
          B === C &&
          (m.rightReverse(L, C),
          L.setSelectionRange(B, L.selectionEnd, "forward"));
  }
  function T(I) {
    if (I == null || I === "") return "";
    if (e.reverseFillMask === !0) return O(I);
    const L = o;
    let B = 0,
      C = "";
    for (let G = 0; G < L.length; G++) {
      const $ = I[B],
        ee = L[G];
      if (typeof ee == "string") C += ee;
      else if ($ !== void 0 && ee.regex.test($))
        (C += ee.transform !== void 0 ? ee.transform($) : $), B++;
      else return C;
    }
    return C;
  }
  function O(I) {
    const L = o,
      B = s.indexOf(Be);
    let C = I.length - 1,
      G = "";
    for (let $ = L.length - 1; $ >= 0 && C !== -1; $--) {
      const ee = L[$];
      let Z = I[C];
      if (typeof ee == "string") G = ee + G;
      else if (Z !== void 0 && ee.regex.test(Z))
        do
          (G = (ee.transform !== void 0 ? ee.transform(Z) : Z) + G),
            C--,
            (Z = I[C]);
        while (B === $ && Z !== void 0 && ee.regex.test(Z));
      else return G;
    }
    return G;
  }
  function N(I) {
    return typeof I != "string" || a === void 0
      ? typeof I == "number"
        ? a("" + I)
        : I
      : a(I);
  }
  function W(I) {
    return i.length - I.length <= 0
      ? I
      : e.reverseFillMask === !0 && I.length !== 0
      ? i.slice(0, -I.length) + I
      : I + i.slice(I.length);
  }
  return {
    innerValue: f,
    hasMask: u,
    moveCursorForPaste: y,
    updateMaskValue: k,
    onMaskedKeydown: _,
    onMaskedClick: E,
  };
}
const Jc = {
  name: String,
};
function gR(e) {
  return M(() => ({
    type: "hidden",
    name: e.name,
    value: e.modelValue,
  }));
}
function Zp(e = {}) {
  return (t, n, r) => {
    t[n](
      U("input", {
        class: "hidden" + (r || ""),
        ...e.value,
      })
    );
  };
}
function XA(e) {
  return M(() => e.name || e.for);
}
function QA(e, t) {
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
const ZA =
    /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
  e1 =
    /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,
  t1 = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,
  n1 = /[a-z0-9_ -]$/i;
function r1(e) {
  return function (n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== !0) return;
      (n.target.qComposing = !1), e(n);
    } else
      n.type === "compositionupdate" &&
        n.target.qComposing !== !0 &&
        typeof n.data == "string" &&
        (He.is.firefox === !0
          ? n1.test(n.data) === !1
          : ZA.test(n.data) === !0 ||
            e1.test(n.data) === !0 ||
            t1.test(n.data) === !0) === !0 &&
        (n.target.qComposing = !0);
  };
}
const s1 = rt({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...qA,
    ...JA,
    ...Jc,
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
  emits: [...HA, "paste", "change", "keydown", "click", "animationend"],
  setup(e, { emit: t, attrs: n }) {
    const { proxy: r } = Se(),
      { $q: s } = r,
      i = {};
    let o = NaN,
      a,
      l,
      c = null,
      u;
    const f = he(null),
      d = XA(e),
      {
        innerValue: h,
        hasMask: g,
        moveCursorForPaste: w,
        updateMaskValue: k,
        onMaskedKeydown: y,
        onMaskedClick: m,
      } = YA(e, t, Z, f),
      E = QA(e, !0),
      _ = M(() => Kl(h.value)),
      T = r1($),
      O = zA({
        changeEvent: !0,
      }),
      N = M(() => e.type === "textarea" || e.autogrow === !0),
      W = M(
        () =>
          N.value === !0 ||
          ["text", "search", "url", "tel", "password"].includes(e.type)
      ),
      I = M(() => {
        const z = {
          ...O.splitAttrs.listeners.value,
          onInput: $,
          onPaste: G,
          onChange: K,
          onBlur: ie,
          onFocus: ho,
        };
        return (
          (z.onCompositionstart =
            z.onCompositionupdate =
            z.onCompositionend =
              T),
          g.value === !0 && ((z.onKeydown = y), (z.onClick = m)),
          e.autogrow === !0 && (z.onAnimationend = ee),
          z
        );
      }),
      L = M(() => {
        const z = {
          tabindex: 0,
          "data-autofocus": e.autofocus === !0 || void 0,
          rows: e.type === "textarea" ? 6 : void 0,
          "aria-label": e.label,
          name: d.value,
          ...O.splitAttrs.attributes.value,
          id: O.targetUid.value,
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
    me(
      () => e.type,
      () => {
        f.value && (f.value.value = e.modelValue);
      }
    ),
      me(
        () => e.modelValue,
        (z) => {
          if (g.value === !0) {
            if (l === !0 && ((l = !1), String(z) === o)) return;
            k(z);
          } else
            h.value !== z &&
              ((h.value = z),
              e.type === "number" &&
                i.hasOwnProperty("value") === !0 &&
                (a === !0 ? (a = !1) : delete i.value));
          e.autogrow === !0 && ut(J);
        }
      ),
      me(
        () => e.autogrow,
        (z) => {
          z === !0
            ? ut(J)
            : f.value !== null && n.rows > 0 && (f.value.style.height = "auto");
        }
      ),
      me(
        () => e.dense,
        () => {
          e.autogrow === !0 && ut(J);
        }
      );
    function B() {
      Kc(() => {
        const z = document.activeElement;
        f.value !== null &&
          f.value !== z &&
          (z === null || z.id !== O.targetUid.value) &&
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
        const pe = z.target;
        w(pe, pe.selectionStart, pe.selectionEnd);
      }
      t("paste", z);
    }
    function $(z) {
      if (!z || !z.target) return;
      if (e.type === "file") {
        t("update:modelValue", z.target.files);
        return;
      }
      const pe = z.target.value;
      if (z.target.qComposing === !0) {
        i.value = pe;
        return;
      }
      if (g.value === !0) k(pe, !1, z.inputType);
      else if ((Z(pe), W.value === !0 && z.target === document.activeElement)) {
        const { selectionStart: Ne, selectionEnd: Me } = z.target;
        Ne !== void 0 &&
          Me !== void 0 &&
          ut(() => {
            z.target === document.activeElement &&
              pe.indexOf(z.target.value) === 0 &&
              z.target.setSelectionRange(Ne, Me);
          });
      }
      e.autogrow === !0 && J();
    }
    function ee(z) {
      t("animationend", z), J();
    }
    function Z(z, pe) {
      (u = () => {
        (c = null),
          e.type !== "number" &&
            i.hasOwnProperty("value") === !0 &&
            delete i.value,
          e.modelValue !== z &&
            o !== z &&
            ((o = z),
            pe === !0 && (l = !0),
            t("update:modelValue", z),
            ut(() => {
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
    function J() {
      requestAnimationFrame(() => {
        const z = f.value;
        if (z !== null) {
          const pe = z.parentNode.style,
            { scrollTop: Ne } = z,
            { overflowY: Me, maxHeight: ne } =
              s.platform.is.firefox === !0 ? {} : window.getComputedStyle(z),
            D = Me !== void 0 && Me !== "scroll";
          D === !0 && (z.style.overflowY = "hidden"),
            (pe.marginBottom = z.scrollHeight - 1 + "px"),
            (z.style.height = "1px"),
            (z.style.height = z.scrollHeight + "px"),
            D === !0 &&
              (z.style.overflowY =
                parseInt(ne, 10) < z.scrollHeight ? "auto" : "hidden"),
            (pe.marginBottom = ""),
            (z.scrollTop = Ne);
        }
      });
    }
    function K(z) {
      T(z),
        c !== null && (clearTimeout(c), (c = null)),
        u?.(),
        t("change", z.target.value);
    }
    function ie(z) {
      z !== void 0 && ho(z),
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
    function ue() {
      return i.hasOwnProperty("value") === !0
        ? i.value
        : h.value !== void 0
        ? h.value
        : "";
    }
    Ot(() => {
      ie();
    }),
      Rt(() => {
        e.autogrow === !0 && J();
      }),
      Object.assign(O, {
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
        emitValue: Z,
        hasValue: _,
        floatingLabel: M(
          () =>
            (_.value === !0 &&
              (e.type !== "number" || isNaN(h.value) === !1)) ||
            Kl(e.displayValue)
        ),
        getControl: () =>
          U(N.value === !0 ? "textarea" : "input", {
            ref: f,
            class: ["q-field__native q-placeholder", e.inputClass],
            style: e.inputStyle,
            ...L.value,
            ...I.value,
            ...(e.type !== "file"
              ? {
                  value: ue(),
                }
              : E.value),
          }),
        getShadowControl: () =>
          U(
            "div",
            {
              class:
                "q-field__native q-field__shadow absolute-bottom no-pointer-events" +
                (N.value === !0 ? "" : " text-no-wrap"),
            },
            [
              U(
                "span",
                {
                  class: "invisible",
                },
                ue()
              ),
              U("span", e.shadowText),
            ]
          ),
      });
    const de = KA(O);
    return (
      Object.assign(r, {
        focus: B,
        select: C,
        getNativeElement: () => f.value,
      }),
      ts(r, "nativeEl", () => f.value),
      de
    );
  },
});
function ev(e, t) {
  const n = he(null),
    r = M(() =>
      e.disable === !0
        ? null
        : U("span", {
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
const tv = {
    xs: 30,
    sm: 35,
    md: 40,
    lg: 50,
    xl: 60,
  },
  i1 = () =>
    U(
      "svg",
      {
        key: "svg",
        class: "q-radio__bg absolute non-selectable",
        viewBox: "0 0 24 24",
      },
      [
        U("path", {
          d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12",
        }),
        U("path", {
          class: "q-radio__check",
          d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6",
        }),
      ]
    ),
  o1 = rt({
    name: "QRadio",
    props: {
      ...Er,
      ...yi,
      ...Jc,
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
      const { proxy: r } = Se(),
        s = Sr(e, r.$q),
        i = _i(e, tv),
        o = he(null),
        { refocusTargetEl: a, refocusTarget: l } = ev(e, o),
        c = M(() => fe(e.modelValue) === fe(e.val)),
        u = M(
          () =>
            "q-radio cursor-pointer no-outline row inline no-wrap items-center" +
            (e.disable === !0 ? " disabled" : "") +
            (s.value === !0 ? " q-radio--dark" : "") +
            (e.dense === !0 ? " q-radio--dense" : "") +
            (e.leftLabel === !0 ? " reverse" : "")
        ),
        f = M(() => {
          const _ =
            e.color !== void 0 && (e.keepColor === !0 || c.value === !0)
              ? ` text-${e.color}`
              : "";
          return `q-radio__inner relative-position q-radio__inner--${
            c.value === !0 ? "truthy" : "falsy"
          }${_}`;
        }),
        d = M(() => (c.value === !0 ? e.checkedIcon : e.uncheckedIcon) || null),
        h = M(() => (e.disable === !0 ? -1 : e.tabindex || 0)),
        g = M(() => {
          const _ = {
            type: "radio",
          };
          return (
            e.name !== void 0 &&
              Object.assign(_, {
                ".checked": c.value === !0,
                "^checked": c.value === !0 ? "checked" : void 0,
                name: e.name,
                value: e.val,
              }),
            _
          );
        }),
        w = Zp(g);
      function k(_) {
        _ !== void 0 && (kt(_), l(_)),
          e.disable !== !0 &&
            c.value !== !0 &&
            n("update:modelValue", e.val, _);
      }
      function y(_) {
        (_.keyCode === 13 || _.keyCode === 32) && kt(_);
      }
      function m(_) {
        (_.keyCode === 13 || _.keyCode === 32) && k(_);
      }
      Object.assign(r, {
        set: k,
      });
      const E = i1();
      return () => {
        const _ =
          d.value !== null
            ? [
                U(
                  "div",
                  {
                    key: "icon",
                    class:
                      "q-radio__icon-container absolute-full flex flex-center no-wrap",
                  },
                  [
                    U(Sn, {
                      class: "q-radio__icon",
                      name: d.value,
                    }),
                  ]
                ),
              ]
            : [E];
        e.disable !== !0 &&
          w(_, "unshift", " q-radio__native q-ma-none q-pa-none");
        const T = [
          U(
            "div",
            {
              class: f.value,
              style: i.value,
              "aria-hidden": "true",
            },
            _
          ),
        ];
        a.value !== null && T.push(a.value);
        const O = e.label !== void 0 ? dr(t.default, [e.label]) : Ut(t.default);
        return (
          O !== void 0 &&
            T.push(
              U(
                "div",
                {
                  class: "q-radio__label q-anchor--skip",
                },
                O
              )
            ),
          U(
            "div",
            {
              ref: o,
              class: u.value,
              tabindex: h.value,
              role: "radio",
              "aria-label": e.label,
              "aria-checked": c.value === !0 ? "true" : "false",
              "aria-disabled": e.disable === !0 ? "true" : void 0,
              onClick: k,
              onKeydown: y,
              onKeyup: m,
            },
            T
          )
        );
      };
    },
  }),
  nv = {
    ...Er,
    ...yi,
    ...Jc,
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
  rv = ["update:modelValue"];
function sv(e, t) {
  const { props: n, slots: r, emit: s, proxy: i } = Se(),
    { $q: o } = i,
    a = Sr(n, o),
    l = he(null),
    { refocusTargetEl: c, refocusTarget: u } = ev(n, l),
    f = _i(n, tv),
    d = M(() => n.val !== void 0 && Array.isArray(n.modelValue)),
    h = M(() => {
      const C = fe(n.val);
      return d.value === !0 ? n.modelValue.findIndex((G) => fe(G) === C) : -1;
    }),
    g = M(() =>
      d.value === !0 ? h.value !== -1 : fe(n.modelValue) === fe(n.trueValue)
    ),
    w = M(() =>
      d.value === !0 ? h.value === -1 : fe(n.modelValue) === fe(n.falseValue)
    ),
    k = M(() => g.value === !1 && w.value === !1),
    y = M(() => (n.disable === !0 ? -1 : n.tabindex || 0)),
    m = M(
      () =>
        `q-${e} cursor-pointer no-outline row inline no-wrap items-center` +
        (n.disable === !0 ? " disabled" : "") +
        (a.value === !0 ? ` q-${e}--dark` : "") +
        (n.dense === !0 ? ` q-${e}--dense` : "") +
        (n.leftLabel === !0 ? " reverse" : "")
    ),
    E = M(() => {
      const C = g.value === !0 ? "truthy" : w.value === !0 ? "falsy" : "indet",
        G =
          n.color !== void 0 &&
          (n.keepColor === !0 ||
            (e === "toggle" ? g.value === !0 : w.value !== !0))
            ? ` text-${n.color}`
            : "";
      return `q-${e}__inner relative-position non-selectable q-${e}__inner--${C}${G}`;
    }),
    _ = M(() => {
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
    T = Zp(_),
    O = M(() => {
      const C = {
        tabindex: y.value,
        role: e === "toggle" ? "switch" : "checkbox",
        "aria-label": n.label,
        "aria-checked":
          k.value === !0 ? "mixed" : g.value === !0 ? "true" : "false",
      };
      return n.disable === !0 && (C["aria-disabled"] = "true"), C;
    });
  function N(C) {
    C !== void 0 && (kt(C), u(C)),
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
  function I(C) {
    (C.keyCode === 13 || C.keyCode === 32) && kt(C);
  }
  function L(C) {
    (C.keyCode === 13 || C.keyCode === 32) && N(C);
  }
  const B = t(g, k);
  return (
    Object.assign(i, {
      toggle: N,
    }),
    () => {
      const C = B();
      n.disable !== !0 &&
        T(C, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
      const G = [
        U(
          "div",
          {
            class: E.value,
            style: f.value,
            "aria-hidden": "true",
          },
          C
        ),
      ];
      c.value !== null && G.push(c.value);
      const $ = n.label !== void 0 ? dr(r.default, [n.label]) : Ut(r.default);
      return (
        $ !== void 0 &&
          G.push(
            U(
              "div",
              {
                class: `q-${e}__label q-anchor--skip`,
              },
              $
            )
          ),
        U(
          "div",
          {
            ref: l,
            class: m.value,
            ...O.value,
            onClick: N,
            onKeydown: I,
            onKeyup: L,
          },
          G
        )
      );
    }
  );
}
const a1 = () =>
    U(
      "div",
      {
        key: "svg",
        class: "q-checkbox__bg absolute",
      },
      [
        U(
          "svg",
          {
            class: "q-checkbox__svg fit absolute-full",
            viewBox: "0 0 24 24",
          },
          [
            U("path", {
              class: "q-checkbox__truthy",
              fill: "none",
              d: "M1.73,12.91 8.1,19.28 22.79,4.59",
            }),
            U("path", {
              class: "q-checkbox__indet",
              d: "M4,14H20V10H4",
            }),
          ]
        ),
      ]
    ),
  l1 = rt({
    name: "QCheckbox",
    props: nv,
    emits: rv,
    setup(e) {
      const t = a1();
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
                U(
                  "div",
                  {
                    key: "icon",
                    class:
                      "q-checkbox__icon-container absolute-full flex flex-center no-wrap",
                  },
                  [
                    U(Sn, {
                      class: "q-checkbox__icon",
                      name: i.value,
                    }),
                  ]
                ),
              ]
            : [t];
      }
      return sv("checkbox", n);
    },
  }),
  c1 = rt({
    name: "QToggle",
    props: {
      ...nv,
      icon: String,
      iconColor: String,
    },
    emits: rv,
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
          U("div", {
            class: "q-toggle__track",
          }),
          U(
            "div",
            {
              class: "q-toggle__thumb absolute flex flex-center no-wrap",
            },
            s.value !== void 0
              ? [
                  U(Sn, {
                    name: s.value,
                    color: i.value,
                  }),
                ]
              : void 0
          ),
        ];
      }
      return sv("toggle", t);
    },
  }),
  iv = {
    radio: o1,
    checkbox: l1,
    toggle: c1,
  },
  u1 = Object.keys(iv);
function Qa(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (r) => r[n];
}
const f1 = rt({
    name: "QOptionGroup",
    props: {
      ...Er,
      modelValue: {
        required: !0,
      },
      options: {
        type: Array,
        validator: (e) => e.every(pt),
        default: () => [],
      },
      optionValue: [Function, String],
      optionLabel: [Function, String],
      optionDisable: [Function, String],
      name: String,
      type: {
        type: String,
        default: "radio",
        validator: (e) => u1.includes(e),
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
        } = Se(),
        s = Array.isArray(e.modelValue);
      e.type === "radio"
        ? s === !0 && console.error("q-option-group: model should not be array")
        : s === !1 &&
          console.error("q-option-group: model should be array in your case");
      const i = Sr(e, r),
        o = M(() => iv[e.type]),
        a = M(() => Qa(e.optionValue, "value")),
        l = M(() => Qa(e.optionLabel, "label")),
        c = M(() => Qa(e.optionDisable, "disable")),
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
        U(
          "div",
          {
            class: f.value,
            ...d.value,
          },
          e.options.map((g, w) => {
            const k =
              n["label-" + w] !== void 0
                ? () => n["label-" + w](g)
                : n.label !== void 0
                ? () => n.label(g)
                : void 0;
            return U("div", [
              U(
                o.value,
                {
                  label: k === void 0 ? l.value(g) : null,
                  modelValue: e.modelValue,
                  "onUpdate:modelValue": h,
                  ...u.value[w],
                },
                k
              ),
            ]);
          })
        );
    },
  }),
  d1 = rt({
    name: "DialogPluginComponent",
    props: {
      ...Er,
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
      const { proxy: n } = Se(),
        { $q: r } = n,
        s = Sr(e, r),
        i = he(null),
        o = he(
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
            : pt(e.progress) === !0
            ? {
                component: e.progress.spinner || es,
                props: {
                  color: e.progress.color || l.value,
                },
              }
            : {
                component: es,
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
            items: Z,
            ...J
          } = e.prompt !== void 0 ? e.prompt : e.options;
          return J;
        }),
        d = M(() => (pt(e.ok) === !0 || e.ok === !0 ? r.lang.label.ok : e.ok)),
        h = M(() =>
          pt(e.cancel) === !0 || e.cancel === !0
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
          ...(pt(e.ok) === !0
            ? e.ok
            : {
                flat: !0,
              }),
          "data-autofocus": (e.focus === "ok" && u.value !== !0) || void 0,
          onClick: E,
        })),
        k = M(() => ({
          color: l.value,
          label: h.value,
          ripple: !1,
          ...(pt(e.cancel) === !0
            ? e.cancel
            : {
                flat: !0,
              }),
          "data-autofocus": (e.focus === "cancel" && u.value !== !0) || void 0,
          onClick: _,
        }));
      me(() => e.prompt && e.prompt.model, O),
        me(() => e.options && e.options.model, O);
      function y() {
        i.value.show();
      }
      function m() {
        i.value.hide();
      }
      function E() {
        t("ok", fe(o.value)), m();
      }
      function _() {
        m();
      }
      function T() {
        t("hide");
      }
      function O($) {
        o.value = $;
      }
      function N($) {
        g.value !== !0 &&
          e.prompt.type !== "textarea" &&
          Js($, 13) === !0 &&
          E();
      }
      function W($, ee) {
        return e.html === !0
          ? U(gs, {
              class: $,
              innerHTML: ee,
            })
          : U(
              gs,
              {
                class: $,
              },
              () => ee
            );
      }
      function I() {
        return [
          U(s1, {
            color: l.value,
            dense: !0,
            autofocus: !0,
            dark: s.value,
            ...f.value,
            modelValue: o.value,
            "onUpdate:modelValue": O,
            onKeyup: N,
          }),
        ];
      }
      function L() {
        return [
          U(f1, {
            color: l.value,
            options: e.options.items,
            dark: s.value,
            ...f.value,
            modelValue: o.value,
            "onUpdate:modelValue": O,
          }),
        ];
      }
      function B() {
        const $ = [];
        return (
          e.cancel && $.push(U(Hl, k.value)),
          e.ok && $.push(U(Hl, w.value)),
          U(
            LA,
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
              U(
                gs,
                {
                  class: "q-dialog__progress",
                },
                () => U(c.value.component, c.value.props)
              )
            ),
          e.message && $.push(W("q-dialog__message", e.message)),
          e.prompt !== void 0
            ? $.push(
                U(
                  gs,
                  {
                    class: "scroll q-dialog-plugin__form",
                  },
                  I
                )
              )
            : e.options !== void 0 &&
              $.push(
                U(jd, {
                  dark: s.value,
                }),
                U(
                  gs,
                  {
                    class: "scroll q-dialog-plugin__form",
                  },
                  L
                ),
                U(jd, {
                  dark: s.value,
                })
              ),
          (e.ok || e.cancel) && $.push(B()),
          $
        );
      }
      function G() {
        return [
          U(
            OA,
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
          U(
            lA,
            {
              ref: i,
              onHide: T,
            },
            G
          )
      );
    },
  });
function ov(e, t) {
  for (const n in t)
    n !== "spinner" && Object(t[n]) === t[n]
      ? ((e[n] =
          Object(e[n]) !== e[n]
            ? {}
            : {
                ...e[n],
              }),
        ov(e[n], t[n]))
      : (e[n] = t[n]);
}
function h1(e, t, n) {
  return (r) => {
    let s, i;
    const o = r.component !== void 0;
    if (o === !0) {
      const { component: m, componentProps: E } = r;
      (s = typeof m == "string" ? n.component(m) : m), (i = E || {});
    } else {
      const { class: m, style: E, ..._ } = r;
      (s = e),
        (i = _),
        m !== void 0 && (_.cardClass = m),
        E !== void 0 && (_.cardStyle = E);
    }
    let a,
      l = !1;
    const c = he(null),
      u = sa(!1, "dialog"),
      f = (m) => {
        if (c.value?.[m] !== void 0) {
          c.value[m]();
          return;
        }
        const E = a.$.subTree;
        if (E?.component) {
          if (E.component.proxy && E.component.proxy[m]) {
            E.component.proxy[m]();
            return;
          }
          if (
            E.component.subTree &&
            E.component.subTree.component &&
            E.component.subTree.component.proxy &&
            E.component.subTree.component.proxy[m]
          ) {
            E.component.subTree.component.proxy[m]();
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
              const { class: E, style: _, ...T } = m;
              E !== void 0 && (T.cardClass = E),
                _ !== void 0 && (T.cardStyle = _),
                ov(i, T);
            }
            a.$forceUpdate();
          }
          return g;
        },
      },
      w = (m) => {
        (l = !0),
          d.forEach((E) => {
            E(m);
          });
      },
      k = () => {
        y.unmount(u),
          Gc(u),
          (y = null),
          (a = null),
          l !== !0 &&
            h.forEach((m) => {
              m();
            });
      };
    let y = pc(
      {
        name: "QGlobalDialog",
        setup: () => () =>
          U(s, {
            ...i,
            ref: c,
            onOk: w,
            onHide: k,
            onVnodeMounted(...m) {
              typeof i.onVnodeMounted == "function" && i.onVnodeMounted(...m),
                ut(() => f("show"));
            },
          }),
      },
      n
    );
    return (a = y.mount(u)), g;
  };
}
const m1 = {
  install({ $q: e, parentApp: t }) {
    e.dialog = this.create = h1(d1, !0, t);
  },
};
let Ar,
  Za,
  Qd = 0,
  ar = null,
  Ge = {},
  hr = {};
const av = {
    group: "__default_quasar_group__",
    delay: 0,
    message: !1,
    html: !1,
    spinnerSize: 80,
    spinnerColor: "",
    messageColor: "",
    backgroundColor: "",
    boxClass: "",
    spinner: es,
    customClass: "",
  },
  lv = {
    ...av,
  };
function g1(e) {
  if (e?.group !== void 0 && hr[e.group] !== void 0)
    return Object.assign(hr[e.group], e);
  const t =
    pt(e) === !0 && e.ignoreDefaults === !0
      ? {
          ...av,
          ...e,
        }
      : {
          ...lv,
          ...e,
        };
  return (hr[t.group] = t), t;
}
const xt = ns(
    {
      isActive: !1,
    },
    {
      show(e) {
        Ge = g1(e);
        const { group: t } = Ge;
        return (
          (xt.isActive = !0),
          Ar !== void 0
            ? ((Ge.uid = Qd), Za.$forceUpdate())
            : ((Ge.uid = ++Qd),
              ar !== null && clearTimeout(ar),
              (ar = setTimeout(() => {
                ar = null;
                const n = sa("q-loading");
                (Ar = pc(
                  {
                    name: "QLoading",
                    setup() {
                      Rt(() => {
                        jl(!0);
                      });
                      function r() {
                        xt.isActive !== !0 &&
                          Ar !== void 0 &&
                          (jl(!1),
                          Ar.unmount(n),
                          Gc(n),
                          (Ar = void 0),
                          (Za = void 0));
                      }
                      function s() {
                        if (xt.isActive !== !0) return null;
                        const i = [
                          U(Ge.spinner, {
                            class: "q-loading__spinner",
                            color: Ge.spinnerColor,
                            size: Ge.spinnerSize,
                          }),
                        ];
                        return (
                          Ge.message &&
                            i.push(
                              U("div", {
                                class:
                                  "q-loading__message" +
                                  (Ge.messageColor
                                    ? ` text-${Ge.messageColor}`
                                    : ""),
                                [Ge.html === !0 ? "innerHTML" : "textContent"]:
                                  Ge.message,
                              })
                            ),
                          U(
                            "div",
                            {
                              class:
                                "q-loading fullscreen flex flex-center z-max " +
                                Ge.customClass.trim(),
                              key: Ge.uid,
                            },
                            [
                              U("div", {
                                class:
                                  "q-loading__backdrop" +
                                  (Ge.backgroundColor
                                    ? ` bg-${Ge.backgroundColor}`
                                    : ""),
                              }),
                              U(
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
                        U(
                          Ks,
                          {
                            name: "q-transition--fade",
                            appear: !0,
                            onAfterLeave: r,
                          },
                          s
                        );
                    },
                  },
                  xt.__parentApp
                )),
                  (Za = Ar.mount(n));
              }, Ge.delay))),
          (n) => {
            if (n === void 0 || Object(n) !== n) {
              xt.hide(t);
              return;
            }
            xt.show({
              ...n,
              group: t,
            });
          }
        );
      },
      hide(e) {
        if (xt.isActive === !0) {
          if (e === void 0) hr = {};
          else {
            if (hr[e] === void 0) return;
            {
              delete hr[e];
              const t = Object.keys(hr);
              if (t.length !== 0) {
                const n = t[t.length - 1];
                xt.show({
                  group: n,
                });
                return;
              }
            }
          }
          ar !== null && (clearTimeout(ar), (ar = null)), (xt.isActive = !1);
        }
      },
      setDefaults(e) {
        pt(e) === !0 && Object.assign(lv, e);
      },
      install({ $q: e, parentApp: t }) {
        (e.loading = this),
          (xt.__parentApp = t),
          e.config.loading !== void 0 && this.setDefaults(e.config.loading);
      },
    }
  ),
  p1 = rt({
    name: "QAvatar",
    props: {
      ...yi,
      fontSize: String,
      color: String,
      textColor: String,
      icon: String,
      square: Boolean,
      rounded: Boolean,
    },
    setup(e, { slots: t }) {
      const n = _i(e),
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
                U(Sn, {
                  name: e.icon,
                }),
              ]
            : void 0;
        return U(
          "div",
          {
            class: r.value,
            style: n.value,
          },
          [
            U(
              "div",
              {
                class: "q-avatar__content row flex-center overflow-hidden",
                style: s.value,
              },
              tA(t.default, i)
            ),
          ]
        );
      };
    },
  });
let v1 = 0;
const Yi = {},
  Xi = {},
  Mt = {},
  cv = {},
  y1 = /^\s*$/,
  uv = [],
  _1 = [void 0, null, !0, !1, ""],
  Yc = [
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
  b1 = ["top-left", "top-right", "bottom-left", "bottom-right"],
  Cs = {
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
function fv(e, t, n) {
  if (!e) return ps("parameter required");
  let r;
  const s = {
    textColor: "white",
  };
  if (
    (e.ignoreDefaults !== !0 && Object.assign(s, Yi),
    pt(e) === !1 &&
      (s.type && Object.assign(s, Cs[s.type]),
      (e = {
        message: e,
      })),
    Object.assign(s, Cs[e.type || s.type], e),
    typeof s.icon == "function" && (s.icon = s.icon(t)),
    s.spinner
      ? (s.spinner === !0 && (s.spinner = es), (s.spinner = wr(s.spinner)))
      : (s.spinner = !1),
    (s.meta = {
      hasMedia: !!(s.spinner !== !1 || s.icon || s.avatar),
      hasText: Zd(s.message) || Zd(s.caption),
    }),
    s.position)
  ) {
    if (Yc.includes(s.position) === !1) return ps("wrong position", e);
  } else s.position = "bottom";
  if (_1.includes(s.timeout) === !0) s.timeout = 5e3;
  else {
    const l = Number(s.timeout);
    if (isNaN(l) || l < 0) return ps("wrong timeout", e);
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
        e.ignoreDefaults !== !0 && Array.isArray(Yi.actions) === !0
          ? Yi.actions
          : []
      )
      .concat(
        Array.isArray(Cs[e.type]?.actions) === !0 ? Cs[e.type].actions : []
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
    const l = Mt[s.position].value.indexOf(n.notif);
    Mt[s.position].value[l] = s;
  } else {
    const l = Xi[s.meta.group];
    if (l === void 0) {
      if (
        ((s.meta.uid = v1++),
        (s.meta.badge = 1),
        ["left", "right", "center"].indexOf(s.position) !== -1)
      )
        Mt[s.position].value.splice(
          Math.floor(Mt[s.position].value.length / 2),
          0,
          s
        );
      else {
        const c = s.position.indexOf("top") !== -1 ? "unshift" : "push";
        Mt[s.position].value[c](s);
      }
      s.group !== void 0 && (Xi[s.meta.group] = s);
    } else {
      if (
        (l.meta.timer && (clearTimeout(l.meta.timer), (l.meta.timer = void 0)),
        s.badgePosition !== void 0)
      ) {
        if (b1.includes(s.badgePosition) === !1)
          return ps("wrong badgePosition", e);
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
      const c = Mt[s.position].value.indexOf(l);
      Mt[s.position].value[c] = Xi[s.meta.group] = s;
    }
  }
  const a = () => {
    w1(s), (r = void 0);
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
        ? ps("trying to update a grouped one which is forbidden", e)
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
        fv(c, t, r);
      }
  };
}
function w1(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), (e.meta.timer = void 0));
  const t = Mt[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete Xi[e.meta.group];
    const n = uv["" + e.meta.uid];
    if (n) {
      const { width: r, height: s } = getComputedStyle(n);
      (n.style.left = `${n.offsetLeft}px`),
        (n.style.width = r),
        (n.style.height = s);
    }
    Mt[e.position].value.splice(t, 1),
      typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function Zd(e) {
  return e != null && y1.test(e) !== !0;
}
function ps(e, t) {
  return console.error(`Notify: ${e}`, t), !1;
}
function E1() {
  return rt({
    name: "QNotifications",
    devtools: {
      hide: !0,
    },
    setup() {
      return () =>
        U(
          "div",
          {
            class: "q-notifications",
          },
          Yc.map((e) =>
            U(
              U_,
              {
                key: e,
                class: cv[e],
                tag: "div",
                name: `q-notification--${e}`,
              },
              () =>
                Mt[e].value.map((t) => {
                  const n = t.meta,
                    r = [];
                  if (
                    (n.hasMedia === !0 &&
                      (t.spinner !== !1
                        ? r.push(
                            U(t.spinner, {
                              class:
                                "q-notification__spinner q-notification__spinner--" +
                                n.leftClass,
                              color: t.spinnerColor,
                              size: t.spinnerSize,
                            })
                          )
                        : t.icon
                        ? r.push(
                            U(Sn, {
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
                            U(
                              p1,
                              {
                                class:
                                  "q-notification__avatar q-notification__avatar--" +
                                  n.leftClass,
                              },
                              () =>
                                U("img", {
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
                            U("div", a),
                            U(
                              "div",
                              {
                                class: "q-notification__caption",
                              },
                              [t.caption]
                            ),
                          ]
                        : a;
                    }
                    r.push(U("div", o, i));
                  }
                  const s = [
                    U(
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
                        U("div", {
                          key: `${n.uid}|p|${n.badge}`,
                          class: n.progressClass,
                          style: n.progressStyle,
                        })
                      ),
                    t.actions !== void 0 &&
                      s.push(
                        U(
                          "div",
                          {
                            class: n.actionsClass,
                          },
                          t.actions.map((i) => U(Hl, i))
                        )
                      ),
                    n.badge > 1 &&
                      s.push(
                        U(
                          "div",
                          {
                            key: `${n.uid}|${n.badge}`,
                            class: t.meta.badgeClass,
                            style: t.badgeStyle,
                          },
                          [n.badge]
                        )
                      ),
                    U(
                      "div",
                      {
                        ref: (i) => {
                          uv["" + n.uid] = i;
                        },
                        key: n.uid,
                        class: n.class,
                        ...n.attrs,
                      },
                      [
                        U(
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
const S1 = {
    setDefaults(e) {
      pt(e) === !0 && Object.assign(Yi, e);
    },
    registerType(e, t) {
      pt(t) === !0 && (Cs[e] = t);
    },
    install({ $q: e, parentApp: t }) {
      if (
        ((e.notify = this.create = (n) => fv(n, e)),
        (e.notify.setDefaults = this.setDefaults),
        (e.notify.registerType = this.registerType),
        e.config.notify !== void 0 && this.setDefaults(e.config.notify),
        this.__installed !== !0)
      ) {
        Yc.forEach((r) => {
          Mt[r] = he([]);
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
          cv[
            r
          ] = `q-notifications__list q-notifications__list--${s} fixed column no-wrap ${o}`;
        });
        const n = sa("q-notify");
        pc(E1(), t).mount(n);
      }
    },
  },
  vs = {};
function C1(e) {
  Object.assign(Xe, {
    request: e,
    exit: e,
    toggle: e,
  });
}
function dv() {
  return (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement ||
    null
  );
}
function hv() {
  const e = (Xe.activeEl = Xe.isActive === !1 ? null : dv());
  jP(e === null || e === document.documentElement ? document.body : e);
}
function I1() {
  (Xe.isActive = Xe.isActive === !1), hv();
}
function eh(e, t) {
  try {
    const n = e[t]();
    return n === void 0 ? Promise.resolve() : n;
  } catch (n) {
    return Promise.reject(n);
  }
}
const Xe = ns(
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
(vs.request = [
  "requestFullscreen",
  "msRequestFullscreen",
  "mozRequestFullScreen",
  "webkitRequestFullscreen",
].find((e) => document.documentElement[e] !== void 0)),
  (Xe.isCapable = vs.request !== void 0),
  Xe.isCapable === !1
    ? C1(() => Promise.reject("Not capable"))
    : (Object.assign(Xe, {
        request(e) {
          const t = e || document.documentElement,
            { activeEl: n } = Xe;
          return t === n
            ? Promise.resolve()
            : (n !== null && t.contains(n) === !0
                ? Xe.exit()
                : Promise.resolve()
              ).finally(() => eh(t, vs.request));
        },
        exit() {
          return Xe.isActive === !0 ? eh(document, vs.exit) : Promise.resolve();
        },
        toggle(e) {
          return Xe.isActive === !0 ? Xe.exit() : Xe.request(e);
        },
      }),
      (vs.exit = [
        "exitFullscreen",
        "msExitFullscreen",
        "mozCancelFullScreen",
        "webkitExitFullscreen",
      ].find((e) => document[e])),
      (Xe.isActive = !!dv()),
      Xe.isActive === !0 && hv(),
      [
        "onfullscreenchange",
        "onmsfullscreenchange",
        "onwebkitfullscreenchange",
      ].forEach((e) => {
        document[e] = I1;
      }));
const k1 = {
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
    iconSet: RP,
    plugins: {
      Dialog: m1,
      Loading: xt,
      Notify: S1,
      AppFullscreen: Xe,
    },
  },
  T1 = "/";
async function P1({ app: e, router: t, store: n }, r) {
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
        publicPath: T1,
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
NP(Im, k1).then((e) => {
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
    Re(() => import("https://wheelofnames.com/assets/i18n-v379.js"), __vite__mapDeps([65, 66])),
    Re(() => import("https://wheelofnames.com/assets/head-v379.js"), __vite__mapDeps([67, 57])),
  ]).then((r) => {
    const s = n(r).filter((i) => typeof i == "function");
    P1(e, s);
  });
});
export {
  ZN as $,
  Hl as A,
  Sn as B,
  s1 as C,
  nN as D,
  NN as E,
  ot as F,
  R1 as G,
  lA as H,
  LA as I,
  Fe as J,
  KN as K,
  GN as L,
  JN as M,
  wN as N,
  gn as O,
  jN as P,
  OA as Q,
  ut as R,
  HN as S,
  zN as T,
  EN as U,
  $N as V,
  qN as W,
  Z1 as X,
  X1 as Y,
  QN as Z,
  BN as _,
  D1 as a,
  Wn as a$,
  WN as a0,
  eR as a1,
  tR as a2,
  YN as a3,
  UN as a4,
  VN as a5,
  kP as a6,
  Ql as a7,
  Dh as a8,
  U1 as a9,
  FA as aA,
  mR as aB,
  ho as aC,
  W0 as aD,
  _N as aE,
  p1 as aF,
  jd as aG,
  LS as aH,
  Eg as aI,
  hN as aJ,
  Bo as aK,
  HA as aL,
  qA as aM,
  KA as aN,
  zA as aO,
  Tm as aP,
  _y as aQ,
  $o as aR,
  zh as aS,
  Ot as aT,
  Gs as aU,
  Jc as aV,
  XA as aW,
  Kl as aX,
  r1 as aY,
  _a as aZ,
  Am as a_,
  XN as aa,
  V1 as ab,
  Ae as ac,
  kw as ad,
  Pt as ae,
  me as af,
  wP as ag,
  DS as ah,
  vN as ai,
  Er as aj,
  Sr as ak,
  Se as al,
  Ut as am,
  hR as an,
  CA as ao,
  dr as ap,
  Gp as aq,
  Jp as ar,
  rR as as,
  FN as at,
  MN as au,
  S1 as av,
  xN as aw,
  Re as ax,
  $P as ay,
  AA as az,
  nR as b,
  Q1 as b$,
  kt as b0,
  Gh as b1,
  uc as b2,
  Js as b3,
  ft as b4,
  K1 as b5,
  z1 as b6,
  _A as b7,
  xP as b8,
  LP as b9,
  DP as bA,
  MP as bB,
  FP as bC,
  zl as bD,
  kh as bE,
  Zl as bF,
  x1 as bG,
  M1 as bH,
  L1 as bI,
  c1 as bJ,
  jA as bK,
  QA as bL,
  ts as bM,
  xc as bN,
  dN as bO,
  sN as bP,
  IN as bQ,
  iN as bR,
  wS as bS,
  oN as bT,
  DN as bU,
  RN as bV,
  rN as bW,
  fN as bX,
  cR as bY,
  lR as bZ,
  _t as b_,
  $i as ba,
  kN as bb,
  U_ as bc,
  Og as bd,
  gN as be,
  Pg as bf,
  o1 as bg,
  l1 as bh,
  LN as bi,
  Z0 as bj,
  tb as bk,
  ib as bl,
  He as bm,
  j1 as bn,
  sb as bo,
  nb as bp,
  W1 as bq,
  G1 as br,
  pt as bs,
  Zp as bt,
  dR as bu,
  gR as bv,
  Ks as bw,
  N1 as bx,
  Xa as by,
  yA as bz,
  Y1 as c,
  Xe as c$,
  Pa as c0,
  Aa as c1,
  Dr as c2,
  uN as c3,
  cN as c4,
  wg as c5,
  MS as c6,
  O1 as c7,
  B1 as c8,
  NS as c9,
  Vt as cA,
  fc as cB,
  lm as cC,
  sR as cD,
  iR as cE,
  mN as cF,
  PN as cG,
  TN as cH,
  yi as cI,
  _i as cJ,
  tA as cK,
  ml as cL,
  ht as cM,
  Ji as cN,
  uR as cO,
  q1 as cP,
  H1 as cQ,
  xt as cR,
  Oa as cS,
  GS as cT,
  Tc as cU,
  AN as cV,
  vb as cW,
  m1 as cX,
  $p as cY,
  Up as cZ,
  br as c_,
  yN as ca,
  SN as cb,
  A1 as cc,
  Yn as cd,
  es as ce,
  Dp as cf,
  fR as cg,
  oR as ch,
  UP as ci,
  KP as cj,
  iA as ck,
  Od as cl,
  oA as cm,
  Ld as cn,
  aR as co,
  qP as cp,
  Kc as cq,
  JP as cr,
  eN as cs,
  tN as ct,
  Q0 as cu,
  fe as cv,
  CN as cw,
  Y0 as cx,
  aN as cy,
  pN as cz,
  mm as d,
  i_ as e,
  Ue as f,
  F1 as g,
  Xn as h,
  he as i,
  M as j,
  Rt as k,
  ON as l,
  Nv as m,
  lo as n,
  ao as o,
  gs as p,
  rt as q,
  Iy as r,
  U as s,
  xS as t,
  J1 as u,
  CP as v,
  fy as w,
  Jo as x,
  bN as y,
  $1 as z,
};
