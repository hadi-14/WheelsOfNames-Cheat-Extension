const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/TutorialsPage-v403.js",
      "assets/QToolbar-v403.js",
      "assets/QLayout-v403.js",
      "assets/QVideo-v403.js",
      "assets/use-ratio-v403.js",
      "assets/QPageContainer-v403.js",
      "assets/AppToolbarSimple-v403.js",
      "assets/QToolbarTitle-v403.js",
      "assets/DarkModeToggle.vue_vue_type_script_setup_true_lang-v403.js",
      "assets/use-quasar-v403.js",
      "assets/_plugin-vue_export-helper-v403.js",
      "assets/AppToolbarSimple-CHAO1SW4.css",
      "assets/ClassroomPage-v403.js",
      "assets/PrivacyPolicyPage-v403.js",
      "assets/QBadge-v403.js",
      "assets/QMarkupTable-v403.js",
      "assets/PrivacyPolicyPage-DQhoww1I.css",
      "assets/TermsOfServicePage-v403.js",
      "assets/QPage-v403.js",
      "assets/AppFooter-v403.js",
      "assets/server-settings-store-v403.js",
      "assets/AppFooter-DkQD7BVU.css",
      "assets/ChangelogPage-v403.js",
      "assets/ChangelogPage-BEhan5LW.css",
      "assets/ApiPage-v403.js",
      "assets/AboutCard-v403.js",
      "assets/Messenger-v403.js",
      "assets/AppLogin-v403.js",
      "assets/AppLogin-DdTeCRXr.css",
      "assets/ApiPage-B7JLaRog.css",
      "assets/ExportPage-v403.js",
      "assets/ExportPage-CU-yncGd.css",
      "assets/TranslationPage-v403.js",
      "assets/AdminPage-v403.js",
      "assets/QBreadcrumbs-v403.js",
      "assets/QSpace-v403.js",
      "assets/QImg-v403.js",
      "assets/AdminPage-Cp1v64oL.css",
      "assets/ReviewWheelPage-v403.js",
      "assets/QMenu-v403.js",
      "assets/position-engine-v403.js",
      "assets/QList-v403.js",
      "assets/ReviewTextbox-v403.js",
      "assets/ReviewTextbox-D_CFvDKw.css",
      "assets/DialogCloseIcon-v403.js",
      "assets/GalleryReviewPage-v403.js",
      "assets/GallerySearch-v403.js",
      "assets/QTooltip-v403.js",
      "assets/QChip-v403.js",
      "assets/GallerySearch-BPUPfI51.css",
      "assets/GalleryReviewPage-CQN7wILF.css",
      "assets/AdminUserPage-v403.js",
      "assets/WheelInfoCard-v403.js",
      "assets/WheelInfoCard-DZcn62r1.css",
      "assets/AdminUserPage-BNJuh2l3.css",
      "assets/EditWheelPage-v403.js",
      "assets/QSelect-v403.js",
      "assets/OpenWheelWorkflow.vue_vue_type_script_setup_true_lang-v403.js",
      "assets/WinnerAnimation-v403.js",
      "assets/WinnerAnimation-CKtHtUN0.css",
      "assets/WheelConfigUtil-v403.js",
      "assets/LoginDialog.vue_vue_type_script_setup_true_lang-v403.js",
      "assets/OpenWheelWorkflow-A4tYSj3G.css",
      "assets/ConfettiLauncher-v403.js",
      "assets/ConfettiLauncher-BqlblGPI.css",
      "assets/vue.Cr7xSEtD-v403.js",
      "assets/PageBackground-v403.js",
      "assets/EditWheelPage-FWHWJpQE.css",
      "assets/SharedWheelPage-v403.js",
      "assets/SharedWheelPage-C-AJ4DsS.css",
      "assets/GalleryPage-v403.js",
      "assets/FairnessTestPage-v403.js",
      "assets/LoginPage-v403.js",
      "assets/MigrateAccountPage-v403.js",
      "assets/MigrateAccountPage-BzacQR_Y.css",
      "assets/StreamingPage-v403.js",
      "assets/StreamingPage-NYXaas40.css",
      "assets/StreamingViewPage-v403.js",
      "assets/StreamingViewPage-DKHidB-Q.css",
      "assets/i18n-v403.js",
      "assets/en-US-v403.js",
      "assets/head-v403.js",
    ]),
) => i.map((i) => d[i]);
const Uv = (function () {
    const t = typeof document < "u" && document.createElement("link").relList;
    return t && t.supports && t.supports("modulepreload")
      ? "modulepreload"
      : "preload";
  })(),
  Bv = function (e) {
    return "/" + e;
  },
  lu = {},
  Pe = function (t, n, r) {
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
              }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        a = o?.nonce || o?.getAttribute("nonce");
      s = l(
        n.map((c) => {
          if (((c = Bv(c)), c in lu)) return;
          lu[c] = !0;
          const u = c.endsWith(".css"),
            f = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${f}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = u ? "stylesheet" : Uv),
            u || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = c),
            a && d.setAttribute("nonce", a),
            document.head.appendChild(d),
            u)
          )
            return new Promise((h, m) => {
              (d.addEventListener("load", h),
                d.addEventListener("error", () =>
                  m(new Error(`Unable to preload CSS for ${c}`)),
                ));
            });
        }),
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

function rc(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ye = {},
  Ur = [],
  rn = () => {},
  vh = () => !1,
  Do = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  sc = (e) => e.startsWith("onUpdate:"),
  Be = Object.assign,
  ic = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Vv = Object.prototype.hasOwnProperty,
  Se = (e, t) => Vv.call(e, t),
  oe = Array.isArray,
  Br = (e) => os(e) === "[object Map]",
  yh = (e) => os(e) === "[object Set]",
  cu = (e) => os(e) === "[object Date]",
  Wv = (e) => os(e) === "[object RegExp]",
  ue = (e) => typeof e == "function",
  Me = (e) => typeof e == "string",
  Ht = (e) => typeof e == "symbol",
  be = (e) => e !== null && typeof e == "object",
  _h = (e) => (be(e) || ue(e)) && ue(e.then) && ue(e.catch),
  bh = Object.prototype.toString,
  os = (e) => bh.call(e),
  jv = (e) => os(e).slice(8, -1),
  wh = (e) => os(e) === "[object Object]",
  Fo = (e) =>
    Me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Ps = rc(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  $o = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  qv = /-\w/g,
  It = $o((e) => e.replace(qv, (t) => t.slice(1).toUpperCase())),
  Hv = /\B([A-Z])/g,
  Ln = $o((e) => e.replace(Hv, "-$1").toLowerCase()),
  Uo = $o((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  pa = $o((e) => (e ? `on${Uo(e)}` : "")),
  pt = (e, t) => !Object.is(e, t),
  Ns = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Eh = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  zv = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Kv = (e) => {
    const t = Me(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let uu;
const Bo = () =>
  uu ||
  (uu =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function oc(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = Me(r) ? Qv(r) : oc(r);
      if (s) for (const i in s) t[i] = s[i];
    }
    return t;
  } else if (Me(e) || be(e)) return e;
}
const Gv = /;(?![^(]*\))/g,
  Jv = /:([^]+)/,
  Yv = /\/\*[^]*?\*\//g;
function Qv(e) {
  const t = {};
  return (
    e
      .replace(Yv, "")
      .split(Gv)
      .forEach((n) => {
        if (n) {
          const r = n.split(Jv);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function ac(e) {
  let t = "";
  if (Me(e)) t = e;
  else if (oe(e))
    for (let n = 0; n < e.length; n++) {
      const r = ac(e[n]);
      r && (t += r + " ");
    }
  else if (be(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Xv =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Zv = rc(Xv);
function Sh(e) {
  return !!e || e === "";
}
function ey(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++) n = lc(e[r], t[r]);
  return n;
}
function lc(e, t) {
  if (e === t) return !0;
  let n = cu(e),
    r = cu(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
  if (((n = Ht(e)), (r = Ht(t)), n || r)) return e === t;
  if (((n = oe(e)), (r = oe(t)), n || r)) return n && r ? ey(e, t) : !1;
  if (((n = be(e)), (r = be(t)), n || r)) {
    if (!n || !r) return !1;
    const s = Object.keys(e).length,
      i = Object.keys(t).length;
    if (s !== i) return !1;
    for (const o in e) {
      const a = e.hasOwnProperty(o),
        l = t.hasOwnProperty(o);
      if ((a && !l) || (!a && l) || !lc(e[o], t[o])) return !1;
    }
  }
  return String(e) === String(t);
}
const Ch = (e) => !!(e && e.__v_isRef === !0),
  ty = (e) =>
    Me(e)
      ? e
      : e == null
        ? ""
        : oe(e) || (be(e) && (e.toString === bh || !ue(e.toString)))
          ? Ch(e)
            ? ty(e.value)
            : JSON.stringify(e, Ih, 2)
          : String(e),
  Ih = (e, t) =>
    Ch(t)
      ? Ih(e, t.value)
      : Br(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], i) => ((n[va(r, i) + " =>"] = s), n),
              {},
            ),
          }
        : yh(t)
          ? {
              [`Set(${t.size})`]: [...t.values()].map((n) => va(n)),
            }
          : Ht(t)
            ? va(t)
            : be(t) && !oe(t) && !wh(t)
              ? String(t)
              : t,
  va = (e, t = "") => {
    var n;
    return Ht(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
let ot;
class Th {
  constructor(t = !1) {
    ((this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.__v_skip = !0),
      (this.parent = ot),
      !t &&
        ot &&
        (this.index = (ot.scopes || (ot.scopes = [])).push(this) - 1));
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
      const n = ot;
      try {
        return ((ot = this), t());
      } finally {
        ot = n;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = ot), (ot = this));
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((ot = this.prevScope), (this.prevScope = void 0));
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
function cc(e) {
  return new Th(e);
}
function Vo() {
  return ot;
}
function kh(e, t = !1) {
  ot && ot.cleanups.push(e);
}
let Ne;
const ya = new WeakSet();
class Ah {
  constructor(t) {
    ((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      ot && ot.active && ot.effects.push(this));
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), ya.has(this) && (ya.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Nh(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    ((this.flags |= 2), fu(this), Rh(this));
    const t = Ne,
      n = jt;
    ((Ne = this), (jt = !0));
    try {
      return this.fn();
    } finally {
      (Oh(this), (Ne = t), (jt = n), (this.flags &= -3));
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) dc(t);
      ((this.deps = this.depsTail = void 0),
        fu(this),
        this.onStop && this.onStop(),
        (this.flags &= -2));
    }
  }
  trigger() {
    this.flags & 64
      ? ya.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    ll(this) && this.run();
  }
  get dirty() {
    return ll(this);
  }
}
let Ph = 0,
  Rs,
  Os;
function Nh(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ((e.next = Os), (Os = e));
    return;
  }
  ((e.next = Rs), (Rs = e));
}
function uc() {
  Ph++;
}
function fc() {
  if (--Ph > 0) return;
  if (Os) {
    let t = Os;
    for (Os = void 0; t; ) {
      const n = t.next;
      ((t.next = void 0), (t.flags &= -9), (t = n));
    }
  }
  let e;
  for (; Rs; ) {
    let t = Rs;
    for (Rs = void 0; t; ) {
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
function Rh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t));
}
function Oh(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    (r.version === -1 ? (r === n && (n = s), dc(r), ny(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s));
  }
  ((e.deps = t), (e.depsTail = n));
}
function ll(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Lh(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Lh(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Hs) ||
    ((e.globalVersion = Hs),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !ll(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    n = Ne,
    r = jt;
  ((Ne = e), (jt = !0));
  try {
    Rh(e);
    const s = e.fn(e._value);
    (t.version === 0 || pt(s, e._value)) &&
      ((e.flags |= 128), (e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    ((Ne = n), (jt = r), Oh(e), (e.flags &= -3));
  }
}
function dc(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) dc(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ny(e) {
  const { prevDep: t, nextDep: n } = e;
  (t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0)));
}
let jt = !0;
const xh = [];
function In() {
  (xh.push(jt), (jt = !1));
}
function Tn() {
  const e = xh.pop();
  jt = e === void 0 ? !0 : e;
}
function fu(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = Ne;
    Ne = void 0;
    try {
      t();
    } finally {
      Ne = n;
    }
  }
}
let Hs = 0;
class ry {
  constructor(t, n) {
    ((this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0));
  }
}
class Wo {
  constructor(t) {
    ((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0));
  }
  track(t) {
    if (!Ne || !jt || Ne === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ne)
      ((n = this.activeLink = new ry(Ne, this)),
        Ne.deps
          ? ((n.prevDep = Ne.depsTail),
            (Ne.depsTail.nextDep = n),
            (Ne.depsTail = n))
          : (Ne.deps = Ne.depsTail = n),
        Mh(n));
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      ((r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = Ne.depsTail),
        (n.nextDep = void 0),
        (Ne.depsTail.nextDep = n),
        (Ne.depsTail = n),
        Ne.deps === n && (Ne.deps = r));
    }
    return n;
  }
  trigger(t) {
    (this.version++, Hs++, this.notify(t));
  }
  notify(t) {
    uc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      fc();
    }
  }
}
function Mh(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Mh(r);
    }
    const n = e.dep.subs;
    (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
  }
}
const ro = new WeakMap(),
  _r = Symbol(""),
  cl = Symbol(""),
  zs = Symbol("");
function at(e, t, n) {
  if (jt && Ne) {
    let r = ro.get(e);
    r || ro.set(e, (r = new Map()));
    let s = r.get(n);
    (s || (r.set(n, (s = new Wo())), (s.map = r), (s.key = n)), s.track());
  }
}
function pn(e, t, n, r, s, i) {
  const o = ro.get(e);
  if (!o) {
    Hs++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((uc(), t === "clear")) o.forEach(a);
  else {
    const l = oe(e),
      c = l && Fo(n);
    if (l && n === "length") {
      const u = Number(r);
      o.forEach((f, d) => {
        (d === "length" || d === zs || (!Ht(d) && d >= u)) && a(f);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && a(o.get(n)), c && a(o.get(zs)), t)
      ) {
        case "add":
          l ? c && a(o.get("length")) : (a(o.get(_r)), Br(e) && a(o.get(cl)));
          break;
        case "delete":
          l || (a(o.get(_r)), Br(e) && a(o.get(cl)));
          break;
        case "set":
          Br(e) && a(o.get(_r));
          break;
      }
  }
  fc();
}
function sy(e, t) {
  const n = ro.get(e);
  return n && n.get(t);
}
function Ar(e) {
  const t = fe(e);
  return t === e ? t : (at(t, "iterate", zs), Et(e) ? t : t.map(zt));
}
function jo(e) {
  return (at((e = fe(e)), "iterate", zs), e);
}
function Wn(e, t) {
  return kn(e) ? Kr(Sn(e) ? zt(t) : t) : zt(t);
}
const iy = {
  __proto__: null,
  [Symbol.iterator]() {
    return _a(this, Symbol.iterator, (e) => Wn(this, e));
  },
  concat(...e) {
    return Ar(this).concat(...e.map((t) => (oe(t) ? Ar(t) : t)));
  },
  entries() {
    return _a(this, "entries", (e) => ((e[1] = Wn(this, e[1])), e));
  },
  every(e, t) {
    return fn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return fn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Wn(this, r)),
      arguments,
    );
  },
  find(e, t) {
    return fn(this, "find", e, t, (n) => Wn(this, n), arguments);
  },
  findIndex(e, t) {
    return fn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return fn(this, "findLast", e, t, (n) => Wn(this, n), arguments);
  },
  findLastIndex(e, t) {
    return fn(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return fn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ba(this, "includes", e);
  },
  indexOf(...e) {
    return ba(this, "indexOf", e);
  },
  join(e) {
    return Ar(this).join(e);
  },
  lastIndexOf(...e) {
    return ba(this, "lastIndexOf", e);
  },
  map(e, t) {
    return fn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ds(this, "pop");
  },
  push(...e) {
    return ds(this, "push", e);
  },
  reduce(e, ...t) {
    return du(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return du(this, "reduceRight", e, t);
  },
  shift() {
    return ds(this, "shift");
  },
  some(e, t) {
    return fn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ds(this, "splice", e);
  },
  toReversed() {
    return Ar(this).toReversed();
  },
  toSorted(e) {
    return Ar(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ar(this).toSpliced(...e);
  },
  unshift(...e) {
    return ds(this, "unshift", e);
  },
  values() {
    return _a(this, "values", (e) => Wn(this, e));
  },
};
function _a(e, t, n) {
  const r = jo(e),
    s = r[t]();
  return (
    r !== e &&
      !Et(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const i = s._next();
        return (i.done || (i.value = n(i.value)), i);
      })),
    s
  );
}
const oy = Array.prototype;
function fn(e, t, n, r, s, i) {
  const o = jo(e),
    a = o !== e && !Et(e),
    l = o[t];
  if (l !== oy[t]) {
    const f = l.apply(e, i);
    return a ? zt(f) : f;
  }
  let c = n;
  o !== e &&
    (a
      ? (c = function (f, d) {
          return n.call(this, Wn(e, f), d, e);
        })
      : n.length > 2 &&
        (c = function (f, d) {
          return n.call(this, f, d, e);
        }));
  const u = l.call(o, c, r);
  return a && s ? s(u) : u;
}
function du(e, t, n, r) {
  const s = jo(e);
  let i = n;
  return (
    s !== e &&
      (Et(e)
        ? n.length > 3 &&
          (i = function (o, a, l) {
            return n.call(this, o, a, l, e);
          })
        : (i = function (o, a, l) {
            return n.call(this, o, Wn(e, a), l, e);
          })),
    s[t](i, ...r)
  );
}
function ba(e, t, n) {
  const r = fe(e);
  at(r, "iterate", zs);
  const s = r[t](...n);
  return (s === -1 || s === !1) && zo(n[0])
    ? ((n[0] = fe(n[0])), r[t](...n))
    : s;
}
function ds(e, t, n = []) {
  (In(), uc());
  const r = fe(e)[t].apply(e, n);
  return (fc(), Tn(), r);
}
const ay = rc("__proto__,__v_isRef,__isVue"),
  Dh = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Ht),
  );
function ly(e) {
  Ht(e) || (e = String(e));
  const t = fe(this);
  return (at(t, "has", e), t.hasOwnProperty(e));
}
class Fh {
  constructor(t = !1, n = !1) {
    ((this._isReadonly = t), (this._isShallow = n));
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return r === (s ? (i ? jh : Wh) : i ? Vh : Bh).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const o = oe(t);
    if (!s) {
      let l;
      if (o && (l = iy[n])) return l;
      if (n === "hasOwnProperty") return ly;
    }
    const a = Reflect.get(t, n, Re(t) ? t : r);
    if ((Ht(n) ? Dh.has(n) : ay(n)) || (s || at(t, "get", n), i)) return a;
    if (Re(a)) {
      const l = o && Fo(n) ? a : a.value;
      return s && be(l) ? so(l) : l;
    }
    return be(a) ? (s ? so(a) : Cr(a)) : a;
  }
}
class $h extends Fh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = oe(t) && Fo(n);
    if (!this._isShallow) {
      const c = kn(i);
      if (
        (!Et(r) && !kn(r) && ((i = fe(i)), (r = fe(r))), !o && Re(i) && !Re(r))
      )
        return (c || (i.value = r), !0);
    }
    const a = o ? Number(n) < t.length : Se(t, n),
      l = Reflect.set(t, n, r, Re(t) ? t : s);
    return (
      t === fe(s) && (a ? pt(r, i) && pn(t, "set", n, r) : pn(t, "add", n, r)),
      l
    );
  }
  deleteProperty(t, n) {
    const r = Se(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return (s && r && pn(t, "delete", n, void 0), s);
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return ((!Ht(n) || !Dh.has(n)) && at(t, "has", n), r);
  }
  ownKeys(t) {
    return (at(t, "iterate", oe(t) ? "length" : _r), Reflect.ownKeys(t));
  }
}
class Uh extends Fh {
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
const cy = new $h(),
  uy = new Uh(),
  fy = new $h(!0),
  dy = new Uh(!0),
  ul = (e) => e,
  Ci = (e) => Reflect.getPrototypeOf(e);
function hy(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      i = fe(s),
      o = Br(i),
      a = e === "entries" || (e === Symbol.iterator && o),
      l = e === "keys" && o,
      c = s[e](...r),
      u = n ? ul : t ? Kr : zt;
    return (
      !t && at(i, "iterate", l ? cl : _r),
      Be(Object.create(c), {
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
      })
    );
  };
}
function Ii(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function gy(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw,
        o = fe(i),
        a = fe(s);
      e || (pt(s, a) && at(o, "get", s), at(o, "get", a));
      const { has: l } = Ci(o),
        c = t ? ul : e ? Kr : zt;
      if (l.call(o, s)) return c(i.get(s));
      if (l.call(o, a)) return c(i.get(a));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return (!e && at(fe(s), "iterate", _r), s.size);
    },
    has(s) {
      const i = this.__v_raw,
        o = fe(i),
        a = fe(s);
      return (
        e || (pt(s, a) && at(o, "has", s), at(o, "has", a)),
        s === a ? i.has(s) : i.has(s) || i.has(a)
      );
    },
    forEach(s, i) {
      const o = this,
        a = o.__v_raw,
        l = fe(a),
        c = t ? ul : e ? Kr : zt;
      return (
        !e && at(l, "iterate", _r),
        a.forEach((u, f) => s.call(i, c(u), c(f), o))
      );
    },
  };
  return (
    Be(
      n,
      e
        ? {
            add: Ii("add"),
            set: Ii("set"),
            delete: Ii("delete"),
            clear: Ii("clear"),
          }
        : {
            add(s) {
              !t && !Et(s) && !kn(s) && (s = fe(s));
              const i = fe(this);
              return (
                Ci(i).has.call(i, s) || (i.add(s), pn(i, "add", s, s)),
                this
              );
            },
            set(s, i) {
              !t && !Et(i) && !kn(i) && (i = fe(i));
              const o = fe(this),
                { has: a, get: l } = Ci(o);
              let c = a.call(o, s);
              c || ((s = fe(s)), (c = a.call(o, s)));
              const u = l.call(o, s);
              return (
                o.set(s, i),
                c ? pt(i, u) && pn(o, "set", s, i) : pn(o, "add", s, i),
                this
              );
            },
            delete(s) {
              const i = fe(this),
                { has: o, get: a } = Ci(i);
              let l = o.call(i, s);
              (l || ((s = fe(s)), (l = o.call(i, s))), a && a.call(i, s));
              const c = i.delete(s);
              return (l && pn(i, "delete", s, void 0), c);
            },
            clear() {
              const s = fe(this),
                i = s.size !== 0,
                o = s.clear();
              return (i && pn(s, "clear", void 0, void 0), o);
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      n[s] = hy(s, e, t);
    }),
    n
  );
}
function qo(e, t) {
  const n = gy(e, t);
  return (r, s, i) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
        ? e
        : s === "__v_raw"
          ? r
          : Reflect.get(Se(n, s) && s in r ? n : r, s, i);
}
const my = {
    get: qo(!1, !1),
  },
  py = {
    get: qo(!1, !0),
  },
  vy = {
    get: qo(!0, !1),
  },
  yy = {
    get: qo(!0, !0),
  },
  Bh = new WeakMap(),
  Vh = new WeakMap(),
  Wh = new WeakMap(),
  jh = new WeakMap();
function _y(e) {
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
function by(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _y(jv(e));
}
function Cr(e) {
  return kn(e) ? e : Ho(e, !1, cy, my, Bh);
}
function qh(e) {
  return Ho(e, !1, fy, py, Vh);
}
function so(e) {
  return Ho(e, !0, uy, vy, Wh);
}
function wy(e) {
  return Ho(e, !0, dy, yy, jh);
}
function Ho(e, t, n, r, s) {
  if (!be(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = by(e);
  if (i === 0) return e;
  const o = s.get(e);
  if (o) return o;
  const a = new Proxy(e, i === 2 ? r : n);
  return (s.set(e, a), a);
}
function Sn(e) {
  return kn(e) ? Sn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function kn(e) {
  return !!(e && e.__v_isReadonly);
}
function Et(e) {
  return !!(e && e.__v_isShallow);
}
function zo(e) {
  return e ? !!e.__v_raw : !1;
}
function fe(e) {
  const t = e && e.__v_raw;
  return t ? fe(t) : e;
}
function Ir(e) {
  return (
    !Se(e, "__v_skip") && Object.isExtensible(e) && Eh(e, "__v_skip", !0),
    e
  );
}
const zt = (e) => (be(e) ? Cr(e) : e),
  Kr = (e) => (be(e) ? so(e) : e);
function Re(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function he(e) {
  return Hh(e, !1);
}
function St(e) {
  return Hh(e, !0);
}
function Hh(e, t) {
  return Re(e) ? e : new Ey(e, t);
}
class Ey {
  constructor(t, n) {
    ((this.dep = new Wo()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : fe(t)),
      (this._value = n ? t : zt(t)),
      (this.__v_isShallow = n));
  }
  get value() {
    return (this.dep.track(), this._value);
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || Et(t) || kn(t);
    ((t = r ? t : fe(t)),
      pt(t, n) &&
        ((this._rawValue = t),
        (this._value = r ? t : zt(t)),
        this.dep.trigger()));
  }
}
function sn(e) {
  return Re(e) ? e.value : e;
}
function Rt(e) {
  return ue(e) ? e() : sn(e);
}
const Sy = {
  get: (e, t, n) => (t === "__v_raw" ? e : sn(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    return Re(s) && !Re(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function zh(e) {
  return Sn(e) ? e : new Proxy(e, Sy);
}
class Cy {
  constructor(t) {
    ((this.__v_isRef = !0), (this._value = void 0));
    const n = (this.dep = new Wo()),
      { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    ((this._get = r), (this._set = s));
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function Kh(e) {
  return new Cy(e);
}
function Iy(e) {
  const t = oe(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Gh(e, n);
  return t;
}
class Ty {
  constructor(t, n, r) {
    ((this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0),
      (this._value = void 0),
      (this._raw = fe(t)));
    let s = !0,
      i = t;
    if (!oe(t) || !Fo(String(n)))
      do s = !zo(i) || Et(i);
      while (s && (i = i.__v_raw));
    this._shallow = s;
  }
  get value() {
    let t = this._object[this._key];
    return (
      this._shallow && (t = sn(t)),
      (this._value = t === void 0 ? this._defaultValue : t)
    );
  }
  set value(t) {
    if (this._shallow && Re(this._raw[this._key])) {
      const n = this._object[this._key];
      if (Re(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return sy(this._raw, this._key);
  }
}
class ky {
  constructor(t) {
    ((this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0));
  }
  get value() {
    return (this._value = this._getter());
  }
}
function Ay(e, t, n) {
  return Re(e)
    ? e
    : ue(e)
      ? new ky(e)
      : be(e) && arguments.length > 1
        ? Gh(e, t, n)
        : he(e);
}
function Gh(e, t, n) {
  return new Ty(e, t, n);
}
class Py {
  constructor(t, n, r) {
    ((this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Wo(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Hs - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r));
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Ne !== this))
      return (Nh(this, !0), !0);
  }
  get value() {
    const t = this.dep.track();
    return (Lh(this), t && (t.version = this.dep.version), this._value);
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ny(e, t, n = !1) {
  let r, s;
  return (ue(e) ? (r = e) : ((r = e.get), (s = e.set)), new Py(r, s, n));
}
const Ti = {},
  io = new WeakMap();
let dr;
function Ry(e, t = !1, n = dr) {
  if (n) {
    let r = io.get(n);
    (r || io.set(n, (r = [])), r.push(e));
  }
}
function Oy(e, t, n = ye) {
  const {
      immediate: r,
      deep: s,
      once: i,
      scheduler: o,
      augmentJob: a,
      call: l,
    } = n,
    c = (_) => (s ? _ : Et(_) || s === !1 || s === 0 ? vn(_, 1) : vn(_));
  let u,
    f,
    d,
    h,
    m = !1,
    E = !1;
  if (
    (Re(e)
      ? ((f = () => e.value), (m = Et(e)))
      : Sn(e)
        ? ((f = () => c(e)), (m = !0))
        : oe(e)
          ? ((E = !0),
            (m = e.some((_) => Sn(_) || Et(_))),
            (f = () =>
              e.map((_) => {
                if (Re(_)) return _.value;
                if (Sn(_)) return c(_);
                if (ue(_)) return l ? l(_, 2) : _();
              })))
          : ue(e)
            ? t
              ? (f = l ? () => l(e, 2) : e)
              : (f = () => {
                  if (d) {
                    In();
                    try {
                      d();
                    } finally {
                      Tn();
                    }
                  }
                  const _ = dr;
                  dr = u;
                  try {
                    return l ? l(e, 3, [h]) : e(h);
                  } finally {
                    dr = _;
                  }
                })
            : (f = rn),
    t && s)
  ) {
    const _ = f,
      T = s === !0 ? 1 / 0 : s;
    f = () => vn(_(), T);
  }
  const C = Vo(),
    v = () => {
      (u.stop(), C && C.active && ic(C.effects, u));
    };
  if (i && t) {
    const _ = t;
    t = (...T) => {
      (_(...T), v());
    };
  }
  let g = E ? new Array(e.length).fill(Ti) : Ti;
  const b = (_) => {
    if (!(!(u.flags & 1) || (!u.dirty && !_)))
      if (t) {
        const T = u.run();
        if (s || m || (E ? T.some((R, P) => pt(R, g[P])) : pt(T, g))) {
          d && d();
          const R = dr;
          dr = u;
          try {
            const P = [T, g === Ti ? void 0 : E && g[0] === Ti ? [] : g, h];
            ((g = T), l ? l(t, 3, P) : t(...P));
          } finally {
            dr = R;
          }
        }
      } else u.run();
  };
  return (
    a && a(b),
    (u = new Ah(f)),
    (u.scheduler = o ? () => o(b, !1) : b),
    (h = (_) => Ry(_, !1, u)),
    (d = u.onStop =
      () => {
        const _ = io.get(u);
        if (_) {
          if (l) l(_, 4);
          else for (const T of _) T();
          io.delete(u);
        }
      }),
    t ? (r ? b(!0) : (g = u.run())) : o ? o(b.bind(null, !0), !0) : u.run(),
    (v.pause = u.pause.bind(u)),
    (v.resume = u.resume.bind(u)),
    (v.stop = v),
    v
  );
}
function vn(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !be(e) ||
    e.__v_skip ||
    ((n = n || new Map()), (n.get(e) || 0) >= t)
  )
    return e;
  if ((n.set(e, t), t--, Re(e))) vn(e.value, t, n);
  else if (oe(e)) for (let r = 0; r < e.length; r++) vn(e[r], t, n);
  else if (yh(e) || Br(e))
    e.forEach((r) => {
      vn(r, t, n);
    });
  else if (wh(e)) {
    for (const r in e) vn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && vn(e[r], t, n);
  }
  return e;
}
function li(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    ci(s, t, n);
  }
}
function Kt(e, t, n, r) {
  if (ue(e)) {
    const s = li(e, t, n, r);
    return (
      s &&
        _h(s) &&
        s.catch((i) => {
          ci(i, t, n);
        }),
      s
    );
  }
  if (oe(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++) s.push(Kt(e[i], t, n, r));
    return s;
  }
}
function ci(e, t, n, r = !0) {
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
      (In(), li(i, null, 10, [e, l, c]), Tn());
      return;
    }
  }
  Ly(e, n, s, r, o);
}
function Ly(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const ft = [];
let en = -1;
const Vr = [];
let jn = null,
  Dr = 0;
const Jh = Promise.resolve();
let oo = null;
function dt(e) {
  const t = oo || Jh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xy(e) {
  let t = en + 1,
    n = ft.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = ft[r],
      i = Ks(s);
    i < e || (i === e && s.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function hc(e) {
  if (!(e.flags & 1)) {
    const t = Ks(e),
      n = ft[ft.length - 1];
    (!n || (!(e.flags & 2) && t >= Ks(n)) ? ft.push(e) : ft.splice(xy(t), 0, e),
      (e.flags |= 1),
      Yh());
  }
}
function Yh() {
  oo || (oo = Jh.then(Xh));
}
function My(e) {
  (oe(e)
    ? Vr.push(...e)
    : jn && e.id === -1
      ? jn.splice(Dr + 1, 0, e)
      : e.flags & 1 || (Vr.push(e), (e.flags |= 1)),
    Yh());
}
function hu(e, t, n = en + 1) {
  for (; n < ft.length; n++) {
    const r = ft[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      (ft.splice(n, 1),
        n--,
        r.flags & 4 && (r.flags &= -2),
        r(),
        r.flags & 4 || (r.flags &= -2));
    }
  }
}
function Qh(e) {
  if (Vr.length) {
    const t = [...new Set(Vr)].sort((n, r) => Ks(n) - Ks(r));
    if (((Vr.length = 0), jn)) {
      jn.push(...t);
      return;
    }
    for (jn = t, Dr = 0; Dr < jn.length; Dr++) {
      const n = jn[Dr];
      (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2));
    }
    ((jn = null), (Dr = 0));
  }
}
const Ks = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Xh(e) {
  try {
    for (en = 0; en < ft.length; en++) {
      const t = ft[en];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        li(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; en < ft.length; en++) {
      const t = ft[en];
      t && (t.flags &= -2);
    }
    ((en = -1),
      (ft.length = 0),
      Qh(),
      (oo = null),
      (ft.length || Vr.length) && Xh());
  }
}
let nt = null,
  Zh = null;
function ao(e) {
  const t = nt;
  return ((nt = e), (Zh = (e && e.type.__scopeId) || null), t);
}
function Dy(e, t = nt, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && mo(-1);
    const i = ao(t);
    let o;
    try {
      o = e(...s);
    } finally {
      (ao(i), r._d && mo(1));
    }
    return o;
  };
  return ((r._n = !0), (r._c = !0), (r._d = !0), r);
}
function eg(e, t) {
  if (nt === null) return e;
  const n = Xo(nt),
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, a, l = ye] = t[s];
    i &&
      (ue(i) &&
        (i = {
          mounted: i,
          updated: i,
        }),
      i.deep && vn(o),
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
function ar(e, t, n, r) {
  const s = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    i && (a.oldValue = i[o].value);
    let l = a.dir[r];
    l && (In(), Kt(l, n, 8, [e.el, a, e, t]), Tn());
  }
}
function Wi(e, t) {
  if (tt) {
    let n = tt.provides;
    const r = tt.parent && tt.parent.provides;
    (r === n && (n = tt.provides = Object.create(r)), (n[e] = t));
  }
}
function ht(e, t, n = !1) {
  const r = Ce();
  if (r || br) {
    let s = br
      ? br._context.provides
      : r
        ? r.parent == null || r.ce
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && ue(t) ? t.call(r && r.proxy) : t;
  }
}
function gc() {
  return !!(Ce() || br);
}
const Fy = Symbol.for("v-scx"),
  $y = () => ht(Fy);
function tg(e, t) {
  return Ko(e, null, t);
}
function Uy(e, t) {
  return Ko(e, null, {
    flush: "sync",
  });
}
function me(e, t, n) {
  return Ko(e, t, n);
}
function Ko(e, t, n = ye) {
  const { immediate: r, deep: s, flush: i, once: o } = n,
    a = Be({}, n),
    l = (t && r) || (!t && i !== "post");
  let c;
  if (Jr) {
    if (i === "sync") {
      const h = $y();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {};
      return ((h.stop = rn), (h.resume = rn), (h.pause = rn), h);
    }
  }
  const u = tt;
  a.call = (h, m, E) => Kt(h, u, m, E);
  let f = !1;
  (i === "post"
    ? (a.scheduler = (h) => {
        We(h, u && u.suspense);
      })
    : i !== "sync" &&
      ((f = !0),
      (a.scheduler = (h, m) => {
        m ? h() : hc(h);
      })),
    (a.augmentJob = (h) => {
      (t && (h.flags |= 4),
        f && ((h.flags |= 2), u && ((h.id = u.uid), (h.i = u))));
    }));
  const d = Oy(e, t, a);
  return (Jr && (c ? c.push(d) : l && d()), d);
}
function By(e, t, n) {
  const r = this.proxy,
    s = Me(e) ? (e.includes(".") ? ng(r, e) : () => r[e]) : e.bind(r, r);
  let i;
  ue(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = di(this),
    a = Ko(s, i.bind(r), n);
  return (o(), a);
}
function ng(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
const rg = Symbol("_vte"),
  sg = (e) => e.__isTeleport,
  Ls = (e) => e && (e.disabled || e.disabled === ""),
  gu = (e) => e && (e.defer || e.defer === ""),
  mu = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  pu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  fl = (e, t) => {
    const n = e && e.to;
    return Me(n) ? (t ? t(n) : null) : n;
  },
  ig = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, s, i, o, a, l, c) {
      const {
          mc: u,
          pc: f,
          pbc: d,
          o: { insert: h, querySelector: m, createText: E, createComment: C },
        } = c,
        v = Ls(t.props);
      let { shapeFlag: g, children: b, dynamicChildren: _ } = t;
      if (e == null) {
        const T = (t.el = E("")),
          R = (t.anchor = E(""));
        (h(T, n, r), h(R, n, r));
        const P = (B, L) => {
            g & 16 && u(b, B, L, s, i, o, a, l);
          },
          q = () => {
            const B = (t.target = fl(t.props, m)),
              L = dl(B, t, E, h);
            B &&
              (o !== "svg" && mu(B)
                ? (o = "svg")
                : o !== "mathml" && pu(B) && (o = "mathml"),
              s &&
                s.isCE &&
                (
                  s.ce._teleportTargets || (s.ce._teleportTargets = new Set())
                ).add(B),
              v || (P(B, L), ji(t, !1)));
          };
        (v && (P(n, R), ji(t, !0)),
          gu(t.props)
            ? ((t.el.__isMounted = !1),
              We(() => {
                (q(), delete t.el.__isMounted);
              }, i))
            : q());
      } else {
        if (gu(t.props) && e.el.__isMounted === !1) {
          We(() => {
            ig.process(e, t, n, r, s, i, o, a, l, c);
          }, i);
          return;
        }
        ((t.el = e.el), (t.targetStart = e.targetStart));
        const T = (t.anchor = e.anchor),
          R = (t.target = e.target),
          P = (t.targetAnchor = e.targetAnchor),
          q = Ls(e.props),
          B = q ? n : R,
          L = q ? T : P;
        if (
          (o === "svg" || mu(R)
            ? (o = "svg")
            : (o === "mathml" || pu(R)) && (o = "mathml"),
          _
            ? (d(e.dynamicChildren, _, B, s, i, o, a), bc(e, t, !0))
            : l || f(e, t, B, L, s, i, o, a, !1),
          v)
        )
          q
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : ki(t, n, T, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const x = (t.target = fl(t.props, m));
          x && ki(t, x, null, c, 0);
        } else q && ki(t, R, P, c, 1);
        ji(t, v);
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
        const h = i || !Ls(d);
        for (let m = 0; m < a.length; m++) {
          const E = a[m];
          r(E, t, n, h, !!E.dynamicChildren);
        }
      }
    },
    move: ki,
    hydrate: Vy,
  };
function ki(e, t, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: a, shapeFlag: l, children: c, props: u } = e,
    f = i === 2;
  if ((f && r(o, t, n), (!f || Ls(u)) && l & 16))
    for (let d = 0; d < c.length; d++) s(c[d], t, n, 2);
  f && r(a, t, n);
}
function Vy(
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
  f,
) {
  function d(C, v) {
    let g = v;
    for (; g; ) {
      if (g && g.nodeType === 8) {
        if (g.data === "teleport start anchor") t.targetStart = g;
        else if (g.data === "teleport anchor") {
          ((t.targetAnchor = g),
            (C._lpa = t.targetAnchor && o(t.targetAnchor)));
          break;
        }
      }
      g = o(g);
    }
  }
  function h(C, v) {
    v.anchor = f(o(C), v, a(C), n, r, s, i);
  }
  const m = (t.target = fl(t.props, l)),
    E = Ls(t.props);
  if (m) {
    const C = m._lpa || m.firstChild;
    (t.shapeFlag & 16 &&
      (E
        ? (h(e, t),
          d(m, C),
          t.targetAnchor || dl(m, t, u, c, a(e) === m ? e : null))
        : ((t.anchor = o(e)),
          d(m, C),
          t.targetAnchor || dl(m, t, u, c),
          f(C && o(C), t, m, n, r, s, i))),
      ji(t, E));
  } else
    E &&
      t.shapeFlag & 16 &&
      (h(e, t), (t.targetStart = e), (t.targetAnchor = o(e)));
  return t.anchor && o(t.anchor);
}
const Wy = ig;
function ji(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (
      t
        ? ((r = e.el), (s = e.anchor))
        : ((r = e.targetStart), (s = e.targetAnchor));
      r && r !== s;
    )
      (r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid),
        (r = r.nextSibling));
    n.ut();
  }
}
function dl(e, t, n, r, s = null) {
  const i = (t.targetStart = n("")),
    o = (t.targetAnchor = n(""));
  return ((i[rg] = o), e && (r(i, e, s), r(o, e, s)), o);
}
const tn = Symbol("_leaveCb"),
  hs = Symbol("_enterCb");
function og() {
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
    Mt(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const kt = [Function, Array],
  ag = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: kt,
    onEnter: kt,
    onAfterEnter: kt,
    onEnterCancelled: kt,
    onBeforeLeave: kt,
    onLeave: kt,
    onAfterLeave: kt,
    onLeaveCancelled: kt,
    onBeforeAppear: kt,
    onAppear: kt,
    onAfterAppear: kt,
    onAppearCancelled: kt,
  },
  lg = (e) => {
    const t = e.subTree;
    return t.component ? lg(t.component) : t;
  },
  jy = {
    name: "BaseTransition",
    props: ag,
    setup(e, { slots: t }) {
      const n = Ce(),
        r = og();
      return () => {
        const s = t.default && mc(t.default(), !0);
        if (!s || !s.length) return;
        const i = cg(s),
          o = fe(e),
          { mode: a } = o;
        if (r.isLeaving) return wa(i);
        const l = vu(i);
        if (!l) return wa(i);
        let c = Gs(l, o, r, n, (f) => (c = f));
        l.type !== et && Zn(l, c);
        let u = n.subTree && vu(n.subTree);
        if (u && u.type !== et && !zn(u, l) && lg(n).type !== et) {
          let f = Gs(u, o, r, n);
          if ((Zn(u, f), a === "out-in" && l.type !== et))
            return (
              (r.isLeaving = !0),
              (f.afterLeave = () => {
                ((r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete f.afterLeave,
                  (u = void 0));
              }),
              wa(i)
            );
          a === "in-out" && l.type !== et
            ? (f.delayLeave = (d, h, m) => {
                const E = ug(r, u);
                ((E[String(u.key)] = u),
                  (d[tn] = () => {
                    (h(),
                      (d[tn] = void 0),
                      delete c.delayedLeave,
                      (u = void 0));
                  }),
                  (c.delayedLeave = () => {
                    (m(), delete c.delayedLeave, (u = void 0));
                  }));
              })
            : (u = void 0);
        } else u && (u = void 0);
        return i;
      };
    },
  };
function cg(e) {
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
const qy = jy;
function ug(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return (r || ((r = Object.create(null)), n.set(t.type, r)), r);
}
function Gs(e, t, n, r, s) {
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
      onAfterLeave: m,
      onLeaveCancelled: E,
      onBeforeAppear: C,
      onAppear: v,
      onAfterAppear: g,
      onAppearCancelled: b,
    } = t,
    _ = String(e.key),
    T = ug(n, e),
    R = (B, L) => {
      B && Kt(B, r, 9, L);
    },
    P = (B, L) => {
      const x = L[1];
      (R(B, L),
        oe(B) ? B.every((I) => I.length <= 1) && x() : B.length <= 1 && x());
    },
    q = {
      mode: o,
      persisted: a,
      beforeEnter(B) {
        let L = l;
        if (!n.isMounted)
          if (i) L = C || l;
          else return;
        B[tn] && B[tn](!0);
        const x = T[_];
        (x && zn(e, x) && x.el[tn] && x.el[tn](), R(L, [B]));
      },
      enter(B) {
        if (T[_] === e) return;
        let L = c,
          x = u,
          I = f;
        if (!n.isMounted)
          if (i) ((L = v || c), (x = g || u), (I = b || f));
          else return;
        let V = !1;
        B[hs] = (Y) => {
          V ||
            ((V = !0),
            Y ? R(I, [B]) : R(x, [B]),
            q.delayedLeave && q.delayedLeave(),
            (B[hs] = void 0));
        };
        const $ = B[hs].bind(null, !1);
        L ? P(L, [B, $]) : $();
      },
      leave(B, L) {
        const x = String(e.key);
        if ((B[hs] && B[hs](!0), n.isUnmounting)) return L();
        R(d, [B]);
        let I = !1;
        B[tn] = ($) => {
          I ||
            ((I = !0),
            L(),
            $ ? R(E, [B]) : R(m, [B]),
            (B[tn] = void 0),
            T[x] === e && delete T[x]);
        };
        const V = B[tn].bind(null, !1);
        ((T[x] = e), h ? P(h, [B, V]) : V());
      },
      clone(B) {
        const L = Gs(B, t, n, r, s);
        return (s && s(L), L);
      },
    };
  return q;
}
function wa(e) {
  if (ui(e)) return ((e = An(e)), (e.children = null), e);
}
function vu(e) {
  if (!ui(e)) return sg(e.type) && e.children ? cg(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && ue(n.default)) return n.default();
  }
}
function Zn(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Zn(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function mc(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === lt
      ? (o.patchFlag & 128 && s++, (r = r.concat(mc(o.children, t, a))))
      : (t || o.type !== et) &&
        r.push(
          a != null
            ? An(o, {
                key: a,
              })
            : o,
        );
  }
  if (s > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r;
}
function tr(e, t) {
  return ue(e)
    ? Be(
        {
          name: e.name,
        },
        t,
        {
          setup: e,
        },
      )
    : e;
}
function pc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function x1(e) {
  const t = Ce(),
    n = St(null);
  if (t) {
    const s = t.refs === ye ? (t.refs = {}) : t.refs;
    Object.defineProperty(s, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => (n.value = i),
    });
  }
  return n;
}
function yu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const lo = new WeakMap();
function xs(e, t, n, r, s = !1) {
  if (oe(e)) {
    e.forEach((E, C) => xs(E, t && (oe(t) ? t[C] : t), n, r, s));
    return;
  }
  if (Yn(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      xs(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Xo(r.component) : r.el,
    o = s ? null : i,
    { i: a, r: l } = e,
    c = t && t.r,
    u = a.refs === ye ? (a.refs = {}) : a.refs,
    f = a.setupState,
    d = fe(f),
    h = f === ye ? vh : (E) => (yu(u, E) ? !1 : Se(d, E)),
    m = (E, C) => !(C && yu(u, C));
  if (c != null && c !== l) {
    if ((_u(t), Me(c))) ((u[c] = null), h(c) && (f[c] = null));
    else if (Re(c)) {
      const E = t;
      (m(c, E.k) && (c.value = null), E.k && (u[E.k] = null));
    }
  }
  if (ue(l)) li(l, a, 12, [o, u]);
  else {
    const E = Me(l),
      C = Re(l);
    if (E || C) {
      const v = () => {
        if (e.f) {
          const g = E ? (h(l) ? f[l] : u[l]) : m() || !e.k ? l.value : u[e.k];
          if (s) oe(g) && ic(g, i);
          else if (oe(g)) g.includes(i) || g.push(i);
          else if (E) ((u[l] = [i]), h(l) && (f[l] = u[l]));
          else {
            const b = [i];
            (m(l, e.k) && (l.value = b), e.k && (u[e.k] = b));
          }
        } else
          E
            ? ((u[l] = o), h(l) && (f[l] = o))
            : C && (m(l, e.k) && (l.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const g = () => {
          (v(), lo.delete(e));
        };
        ((g.id = -1), lo.set(e, g), We(g, n));
      } else (_u(e), v());
    }
  }
}
function _u(e) {
  const t = lo.get(e);
  t && ((t.flags |= 8), lo.delete(e));
}
const bu = (e) => e.nodeType === 8;
Bo().requestIdleCallback;
Bo().cancelIdleCallback;
function Hy(e, t) {
  if (bu(e) && e.data === "[") {
    let n = 1,
      r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1) break;
      } else if (bu(r))
        if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
      r = r.nextSibling;
    }
  } else t(e);
}
const Yn = (e) => !!e.type.__asyncLoader;
function M1(e) {
  ue(e) &&
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
      let m;
      return (
        c ||
        (m = c =
          t()
            .catch((E) => {
              if (((E = E instanceof Error ? E : new Error(String(E))), l))
                return new Promise((C, v) => {
                  l(
                    E,
                    () => C(d()),
                    () => v(E),
                    f + 1,
                  );
                });
              throw E;
            })
            .then((E) =>
              m !== c && c
                ? c
                : (E &&
                    (E.__esModule || E[Symbol.toStringTag] === "Module") &&
                    (E = E.default),
                  (u = E),
                  E),
            ))
      );
    };
  return tr({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    __asyncHydrate(m, E, C) {
      let v = !1;
      (E.bu || (E.bu = [])).push(() => (v = !0));
      const g = () => {
          v || C();
        },
        b = i
          ? () => {
              const _ = i(g, (T) => Hy(m, T));
              _ && (E.bum || (E.bum = [])).push(_);
            }
          : g;
      u ? b() : h().then(() => !E.isUnmounted && b());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      const m = tt;
      if ((pc(m), u)) return () => Ai(u, m);
      const E = (b) => {
        ((c = null), ci(b, m, 13, !r));
      };
      if ((a && m.suspense) || Jr)
        return h()
          .then((b) => () => Ai(b, m))
          .catch(
            (b) => (
              E(b),
              () =>
                r
                  ? qe(r, {
                      error: b,
                    })
                  : null
            ),
          );
      const C = he(!1),
        v = he(),
        g = he(!!s);
      return (
        s &&
          setTimeout(() => {
            g.value = !1;
          }, s),
        o != null &&
          setTimeout(() => {
            if (!C.value && !v.value) {
              const b = new Error(`Async component timed out after ${o}ms.`);
              (E(b), (v.value = b));
            }
          }, o),
        h()
          .then(() => {
            ((C.value = !0),
              m.parent && ui(m.parent.vnode) && m.parent.update());
          })
          .catch((b) => {
            (E(b), (v.value = b));
          }),
        () => {
          if (C.value && u) return Ai(u, m);
          if (v.value && r)
            return qe(r, {
              error: v.value,
            });
          if (n && !g.value) return Ai(n, m);
        }
      );
    },
  });
}
function Ai(e, t) {
  const { ref: n, props: r, children: s, ce: i } = t.vnode,
    o = qe(e, r, s);
  return ((o.ref = n), (o.ce = i), delete t.vnode.ce, o);
}
const ui = (e) => e.type.__isKeepAlive,
  zy = {
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
          const g = t.default && t.default();
          return g && g.length === 1 ? g[0] : g;
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
      ((r.activate = (g, b, _, T, R) => {
        const P = g.component;
        (c(g, b, _, 0, a),
          l(P.vnode, g, b, _, P, a, T, g.slotScopeIds, R),
          We(() => {
            ((P.isDeactivated = !1), P.a && Ns(P.a));
            const q = g.props && g.props.onVnodeMounted;
            q && Pt(q, P.parent, g);
          }, a));
      }),
        (r.deactivate = (g) => {
          const b = g.component;
          (fo(b.m),
            fo(b.a),
            c(g, d, null, 1, a),
            We(() => {
              b.da && Ns(b.da);
              const _ = g.props && g.props.onVnodeUnmounted;
              (_ && Pt(_, b.parent, g), (b.isDeactivated = !0));
            }, a));
        }));
      function h(g) {
        (Ea(g), u(g, n, a, !0));
      }
      function m(g) {
        s.forEach((b, _) => {
          const T = yl(Yn(b) ? b.type.__asyncResolved || {} : b.type);
          T && !g(T) && E(_);
        });
      }
      function E(g) {
        const b = s.get(g);
        (b && (!o || !zn(b, o)) ? h(b) : o && Ea(o), s.delete(g), i.delete(g));
      }
      me(
        () => [e.include, e.exclude],
        ([g, b]) => {
          (g && m((_) => Ss(g, _)), b && m((_) => !Ss(b, _)));
        },
        {
          flush: "post",
          deep: !0,
        },
      );
      let C = null;
      const v = () => {
        C != null &&
          (ho(n.subTree.type)
            ? We(() => {
                s.set(C, Pi(n.subTree));
              }, n.subTree.suspense)
            : s.set(C, Pi(n.subTree)));
      };
      return (
        xt(v),
        vc(v),
        Mt(() => {
          s.forEach((g) => {
            const { subTree: b, suspense: _ } = n,
              T = Pi(b);
            if (g.type === T.type && g.key === T.key) {
              Ea(T);
              const R = T.component.da;
              R && We(R, _);
              return;
            }
            h(g);
          });
        }),
        () => {
          if (((C = null), !t.default)) return (o = null);
          const g = t.default(),
            b = g[0];
          if (g.length > 1) return ((o = null), g);
          if (!Gr(b) || (!(b.shapeFlag & 4) && !(b.shapeFlag & 128)))
            return ((o = null), b);
          let _ = Pi(b);
          if (_.type === et) return ((o = null), _);
          const T = _.type,
            R = yl(Yn(_) ? _.type.__asyncResolved || {} : T),
            { include: P, exclude: q, max: B } = e;
          if ((P && (!R || !Ss(P, R))) || (q && R && Ss(q, R)))
            return ((_.shapeFlag &= -257), (o = _), b);
          const L = _.key == null ? T : _.key,
            x = s.get(L);
          return (
            _.el && ((_ = An(_)), b.shapeFlag & 128 && (b.ssContent = _)),
            (C = L),
            x
              ? ((_.el = x.el),
                (_.component = x.component),
                _.transition && Zn(_, _.transition),
                (_.shapeFlag |= 512),
                i.delete(L),
                i.add(L))
              : (i.add(L),
                B && i.size > parseInt(B, 10) && E(i.values().next().value)),
            (_.shapeFlag |= 256),
            (o = _),
            ho(b.type) ? b : _
          );
        }
      );
    },
  },
  D1 = zy;
function Ss(e, t) {
  return oe(e)
    ? e.some((n) => Ss(n, t))
    : Me(e)
      ? e.split(",").includes(t)
      : Wv(e)
        ? ((e.lastIndex = 0), e.test(t))
        : !1;
}
function fg(e, t) {
  dg(e, "a", t);
}
function Go(e, t) {
  dg(e, "da", t);
}
function dg(e, t, n = tt) {
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
  if ((Jo(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      (ui(s.parent.vnode) && Ky(r, t, n, s), (s = s.parent));
  }
}
function Ky(e, t, n, r) {
  const s = Jo(t, e, r, !0);
  Yo(() => {
    ic(r[t], s);
  }, n);
}
function Ea(e) {
  ((e.shapeFlag &= -257), (e.shapeFlag &= -513));
}
function Pi(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Jo(e, t, n = tt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          In();
          const a = di(n),
            l = Kt(t, n, e, o);
          return (a(), Tn(), l);
        });
    return (r ? s.unshift(i) : s.push(i), i);
  }
}
const xn =
    (e) =>
    (t, n = tt) => {
      (!Jr || e === "sp") && Jo(e, (...r) => t(...r), n);
    },
  Gy = xn("bm"),
  xt = xn("m"),
  hg = xn("bu"),
  vc = xn("u"),
  Mt = xn("bum"),
  Yo = xn("um"),
  Jy = xn("sp"),
  Yy = xn("rtg"),
  Qy = xn("rtc");
function Xy(e, t = tt) {
  Jo("ec", e, t);
}
const Zy = "components";
function e_(e, t) {
  return n_(Zy, e, !0, t) || e;
}
const t_ = Symbol.for("v-ndc");
function n_(e, t, n = !0, r = !1) {
  const s = nt || tt;
  if (s) {
    const i = s.type;
    {
      const a = yl(i, !1);
      if (a && (a === t || a === It(t) || a === Uo(It(t)))) return i;
    }
    const o = wu(s[e] || i[e], t) || wu(s.appContext[e], t);
    return !o && r ? i : o;
  }
}
function wu(e, t) {
  return e && (e[t] || e[It(t)] || e[Uo(It(t))]);
}
function F1(e, t, n, r) {
  let s;
  const i = n && n[r],
    o = oe(e);
  if (o || Me(e)) {
    const a = o && Sn(e);
    let l = !1,
      c = !1;
    (a && ((l = !Et(e)), (c = kn(e)), (e = jo(e))), (s = new Array(e.length)));
    for (let u = 0, f = e.length; u < f; u++)
      s[u] = t(l ? (c ? Kr(zt(e[u])) : zt(e[u])) : e[u], u, void 0, i && i[u]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, i && i[a]);
  } else if (be(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (a, l) => t(a, l, void 0, i && i[l]));
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        s[l] = t(e[u], u, l, i && i[l]);
      }
    }
  else s = [];
  return (n && (n[r] = s), s);
}
function $1(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (oe(r)) for (let s = 0; s < r.length; s++) e[r[s].name] = r[s].fn;
    else
      r &&
        (e[r.name] = r.key
          ? (...s) => {
              const i = r.fn(...s);
              return (i && (i.key = r.key), i);
            }
          : r.fn);
  }
  return e;
}
function U1(e, t, n = {}, r, s) {
  if (nt.ce || (nt.parent && Yn(nt.parent) && nt.parent.ce)) {
    const c = Object.keys(n).length > 0;
    return (
      t !== "default" && (n.name = t),
      go(),
      po(lt, null, [qe("slot", n, r && r())], c ? -2 : 64)
    );
  }
  let i = e[t];
  (i && i._c && (i._d = !1), go());
  const o = i && gg(i(n)),
    a = n.key || (o && o.key),
    l = po(
      lt,
      {
        key: (a && !Ht(a) ? a : `_${t}`) + (!o && r ? "_fb" : ""),
      },
      o || (r ? r() : []),
      o && e._ === 1 ? 64 : -2,
    );
  return (
    !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    l
  );
}
function gg(e) {
  return e.some((t) =>
    Gr(t) ? !(t.type === et || (t.type === lt && !gg(t.children))) : !0,
  )
    ? e
    : null;
}
const hl = (e) => (e ? (xg(e) ? Xo(e) : hl(e.parent)) : null),
  Ms = Be(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => hl(e.parent),
    $root: (e) => hl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => pg(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        hc(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = dt.bind(e.proxy)),
    $watch: (e) => By.bind(e),
  }),
  Sa = (e, t) => e !== ye && !e.__isScriptSetup && Se(e, t),
  r_ = {
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
      if (t[0] !== "$") {
        const d = o[t];
        if (d !== void 0)
          switch (d) {
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
          if (Sa(r, t)) return ((o[t] = 1), r[t]);
          if (s !== ye && Se(s, t)) return ((o[t] = 2), s[t]);
          if (Se(i, t)) return ((o[t] = 3), i[t]);
          if (n !== ye && Se(n, t)) return ((o[t] = 4), n[t]);
          gl && (o[t] = 0);
        }
      }
      const c = Ms[t];
      let u, f;
      if (c) return (t === "$attrs" && at(e.attrs, "get", ""), c(e));
      if ((u = a.__cssModules) && (u = u[t])) return u;
      if (n !== ye && Se(n, t)) return ((o[t] = 4), n[t]);
      if (((f = l.config.globalProperties), Se(f, t))) return f[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: i } = e;
      return Sa(s, t)
        ? ((s[t] = n), !0)
        : r !== ye && Se(r, t)
          ? ((r[t] = n), !0)
          : Se(e.props, t) || (t[0] === "$" && t.slice(1) in e)
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
          props: i,
          type: o,
        },
      },
      a,
    ) {
      let l;
      return !!(
        n[a] ||
        (e !== ye && a[0] !== "$" && Se(e, a)) ||
        Sa(t, a) ||
        Se(i, a) ||
        Se(r, a) ||
        Se(Ms, a) ||
        Se(s.config.globalProperties, a) ||
        ((l = o.__cssModules) && l[a])
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
function co(e) {
  return oe(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function B1(e, t) {
  return !e || !t
    ? e || t
    : oe(e) && oe(t)
      ? e.concat(t)
      : Be({}, co(e), co(t));
}
let gl = !0;
function s_(e) {
  const t = pg(e),
    n = e.proxy,
    r = e.ctx;
  ((gl = !1), t.beforeCreate && Eu(t.beforeCreate, e, "bc"));
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
    updated: m,
    activated: E,
    deactivated: C,
    beforeDestroy: v,
    beforeUnmount: g,
    destroyed: b,
    unmounted: _,
    render: T,
    renderTracked: R,
    renderTriggered: P,
    errorCaptured: q,
    serverPrefetch: B,
    expose: L,
    inheritAttrs: x,
    components: I,
    directives: V,
    filters: $,
  } = t;
  if ((c && i_(c, r, null), o))
    for (const J in o) {
      const W = o[J];
      ue(W) && (r[J] = W.bind(n));
    }
  if (s) {
    const J = s.call(n, n);
    be(J) && (e.data = Cr(J));
  }
  if (((gl = !0), i))
    for (const J in i) {
      const W = i[J],
        se = ue(W) ? W.bind(n, n) : ue(W.get) ? W.get.bind(n, n) : rn,
        Ie = !ue(W) && ue(W.set) ? W.set.bind(n) : rn,
        ce = D({
          get: se,
          set: Ie,
        });
      Object.defineProperty(r, J, {
        enumerable: !0,
        configurable: !0,
        get: () => ce.value,
        set: (G) => (ce.value = G),
      });
    }
  if (a) for (const J in a) mg(a[J], r, n, J);
  if (l) {
    const J = ue(l) ? l.call(n) : l;
    Reflect.ownKeys(J).forEach((W) => {
      Wi(W, J[W]);
    });
  }
  u && Eu(u, e, "c");
  function ee(J, W) {
    oe(W) ? W.forEach((se) => J(se.bind(n))) : W && J(W.bind(n));
  }
  if (
    (ee(Gy, f),
    ee(xt, d),
    ee(hg, h),
    ee(vc, m),
    ee(fg, E),
    ee(Go, C),
    ee(Xy, q),
    ee(Qy, R),
    ee(Yy, P),
    ee(Mt, g),
    ee(Yo, _),
    ee(Jy, B),
    oe(L))
  )
    if (L.length) {
      const J = e.exposed || (e.exposed = {});
      L.forEach((W) => {
        Object.defineProperty(J, W, {
          get: () => n[W],
          set: (se) => (n[W] = se),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  (T && e.render === rn && (e.render = T),
    x != null && (e.inheritAttrs = x),
    I && (e.components = I),
    V && (e.directives = V),
    B && pc(e));
}
function i_(e, t, n = rn) {
  oe(e) && (e = ml(e));
  for (const r in e) {
    const s = e[r];
    let i;
    (be(s)
      ? "default" in s
        ? (i = ht(s.from || r, s.default, !0))
        : (i = ht(s.from || r))
      : (i = ht(s)),
      Re(i)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[r] = i));
  }
}
function Eu(e, t, n) {
  Kt(oe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function mg(e, t, n, r) {
  let s = r.includes(".") ? ng(n, r) : () => n[r];
  if (Me(e)) {
    const i = t[e];
    ue(i) && me(s, i);
  } else if (ue(e)) me(s, e.bind(n));
  else if (be(e))
    if (oe(e)) e.forEach((i) => mg(i, t, n, r));
    else {
      const i = ue(e.handler) ? e.handler.bind(n) : t[e.handler];
      ue(i) && me(s, i, e);
    }
}
function pg(e) {
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
        : ((l = {}),
          s.length && s.forEach((c) => uo(l, c, o, !0)),
          uo(l, t, o)),
    be(t) && i.set(t, l),
    l
  );
}
function uo(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  (i && uo(e, i, n, !0), s && s.forEach((o) => uo(e, o, n, !0)));
  for (const o in t)
    if (!(r && o === "expose")) {
      const a = o_[o] || (n && n[o]);
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const o_ = {
  data: Su,
  props: Cu,
  emits: Cu,
  methods: Cs,
  computed: Cs,
  beforeCreate: ct,
  created: ct,
  beforeMount: ct,
  mounted: ct,
  beforeUpdate: ct,
  updated: ct,
  beforeDestroy: ct,
  beforeUnmount: ct,
  destroyed: ct,
  unmounted: ct,
  activated: ct,
  deactivated: ct,
  errorCaptured: ct,
  serverPrefetch: ct,
  components: Cs,
  directives: Cs,
  watch: l_,
  provide: Su,
  inject: a_,
};
function Su(e, t) {
  return t
    ? e
      ? function () {
          return Be(
            ue(e) ? e.call(this, this) : e,
            ue(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function a_(e, t) {
  return Cs(ml(e), ml(t));
}
function ml(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ct(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Cs(e, t) {
  return e ? Be(Object.create(null), e, t) : t;
}
function Cu(e, t) {
  return e
    ? oe(e) && oe(t)
      ? [...new Set([...e, ...t])]
      : Be(Object.create(null), co(e), co(t ?? {}))
    : t;
}
function l_(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Be(Object.create(null), e);
  for (const r in t) n[r] = ct(e[r], t[r]);
  return n;
}
function vg() {
  return {
    app: null,
    config: {
      isNativeTag: vh,
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
let c_ = 0;
function u_(e, t) {
  return function (r, s = null) {
    (ue(r) || (r = Be({}, r)), s != null && !be(s) && (s = null));
    const i = vg(),
      o = new WeakSet(),
      a = [];
    let l = !1;
    const c = (i.app = {
      _uid: c_++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: V_,
      get config() {
        return i.config;
      },
      set config(u) {},
      use(u, ...f) {
        return (
          o.has(u) ||
            (u && ue(u.install)
              ? (o.add(u), u.install(c, ...f))
              : ue(u) && (o.add(u), u(c, ...f))),
          c
        );
      },
      mixin(u) {
        return (i.mixins.includes(u) || i.mixins.push(u), c);
      },
      component(u, f) {
        return f ? ((i.components[u] = f), c) : i.components[u];
      },
      directive(u, f) {
        return f ? ((i.directives[u] = f), c) : i.directives[u];
      },
      mount(u, f, d) {
        if (!l) {
          const h = c._ceVNode || qe(r, s);
          return (
            (h.appContext = i),
            d === !0 ? (d = "svg") : d === !1 && (d = void 0),
            e(h, u, d),
            (l = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            Xo(h.component)
          );
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        l &&
          (Kt(a, c._instance, 16),
          e(null, c._container),
          delete c._container.__vue_app__);
      },
      provide(u, f) {
        return ((i.provides[u] = f), c);
      },
      runWithContext(u) {
        const f = br;
        br = c;
        try {
          return u();
        } finally {
          br = f;
        }
      },
    });
    return c;
  };
}
let br = null;
function V1(e, t, n = ye) {
  const r = Ce(),
    s = It(t),
    i = Ln(t),
    o = yg(e, s),
    a = Kh((l, c) => {
      let u,
        f = ye,
        d;
      return (
        Uy(() => {
          const h = e[s];
          pt(u, h) && ((u = h), c());
        }),
        {
          get() {
            return (l(), n.get ? n.get(u) : u);
          },
          set(h) {
            const m = n.set ? n.set(h) : h;
            if (!pt(m, u) && !(f !== ye && pt(h, f))) return;
            const E = r.vnode.props;
            ((E &&
              (t in E || s in E || i in E) &&
              (`onUpdate:${t}` in E ||
                `onUpdate:${s}` in E ||
                `onUpdate:${i}` in E)) ||
              ((u = h), c()),
              r.emit(`update:${t}`, m),
              pt(h, m) && pt(h, f) && !pt(m, d) && c(),
              (f = h),
              (d = m));
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
const yg = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${It(t)}Modifiers`] || e[`${Ln(t)}Modifiers`];
function f_(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ye;
  let s = n;
  const i = t.startsWith("update:"),
    o = i && yg(r, t.slice(7));
  o &&
    (o.trim && (s = n.map((u) => (Me(u) ? u.trim() : u))),
    o.number && (s = n.map(zv)));
  let a,
    l = r[(a = pa(t))] || r[(a = pa(It(t)))];
  (!l && i && (l = r[(a = pa(Ln(t)))]), l && Kt(l, e, 6, s));
  const c = r[a + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    ((e.emitted[a] = !0), Kt(c, e, 6, s));
  }
}
const d_ = new WeakMap();
function _g(e, t, n = !1) {
  const r = n ? d_ : t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const i = e.emits;
  let o = {},
    a = !1;
  if (!ue(e)) {
    const l = (c) => {
      const u = _g(c, t, !0);
      u && ((a = !0), Be(o, u));
    };
    (!n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l));
  }
  return !i && !a
    ? (be(e) && r.set(e, null), null)
    : (oe(i) ? i.forEach((l) => (o[l] = null)) : Be(o, i),
      be(e) && r.set(e, o),
      o);
}
function Qo(e, t) {
  return !e || !Do(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, Ln(t)) || Se(e, t));
}
function Iu(e) {
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
      ctx: m,
      inheritAttrs: E,
    } = e,
    C = ao(e);
  let v, g;
  try {
    if (n.shapeFlag & 4) {
      const _ = s || r,
        T = _;
      ((v = nn(c.call(T, _, u, f, h, d, m))), (g = a));
    } else {
      const _ = t;
      ((v = nn(
        _.length > 1
          ? _(f, {
              attrs: a,
              slots: o,
              emit: l,
            })
          : _(f, null),
      )),
        (g = t.props ? a : h_(a)));
    }
  } catch (_) {
    ((Ds.length = 0), ci(_, e, 1), (v = qe(et)));
  }
  let b = v;
  if (g && E !== !1) {
    const _ = Object.keys(g),
      { shapeFlag: T } = b;
    _.length &&
      T & 7 &&
      (i && _.some(sc) && (g = g_(g, i)), (b = An(b, g, !1, !0)));
  }
  return (
    n.dirs &&
      ((b = An(b, null, !1, !0)),
      (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Zn(b, n.transition),
    (v = b),
    ao(C),
    v
  );
}
const h_ = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Do(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  g_ = (e, t) => {
    const n = {};
    for (const r in e) (!sc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function m_(e, t, n) {
  const { props: r, children: s, component: i } = e,
    { props: o, children: a, patchFlag: l } = t,
    c = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? Tu(r, o, c) : !!o;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (bg(o, r, d) && !Qo(c, d)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable)
      ? !0
      : r === o
        ? !1
        : r
          ? o
            ? Tu(r, o, c)
            : !0
          : !!o;
  return !1;
}
function Tu(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (bg(t, e, i) && !Qo(n, i)) return !0;
  }
  return !1;
}
function bg(e, t, n) {
  const r = e[n],
    s = t[n];
  return n === "style" && be(r) && be(s) ? !lc(r, s) : r !== s;
}
function p_({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      (((e = t.vnode).el = n), (t = t.parent));
    else break;
  }
}
const wg = {},
  Eg = () => Object.create(wg),
  Sg = (e) => Object.getPrototypeOf(e) === wg;
function v_(e, t, n, r = !1) {
  const s = {},
    i = Eg();
  ((e.propsDefaults = Object.create(null)), Cg(e, t, s, i));
  for (const o in e.propsOptions[0]) o in s || (s[o] = void 0);
  (n ? (e.props = r ? s : qh(s)) : e.type.props ? (e.props = s) : (e.props = i),
    (e.attrs = i));
}
function y_(e, t, n, r) {
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
        if (Qo(e.emitsOptions, d)) continue;
        const h = t[d];
        if (l)
          if (Se(i, d)) h !== i[d] && ((i[d] = h), (c = !0));
          else {
            const m = It(d);
            s[m] = pl(l, a, m, h, e, !1);
          }
        else h !== i[d] && ((i[d] = h), (c = !0));
      }
    }
  } else {
    Cg(e, t, s, i) && (c = !0);
    let u;
    for (const f in a)
      (!t || (!Se(t, f) && ((u = Ln(f)) === f || !Se(t, u)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (s[f] = pl(l, a, f, void 0, e, !0))
          : delete s[f]);
    if (i !== a)
      for (const f in i) (!t || !Se(t, f)) && (delete i[f], (c = !0));
  }
  c && pn(e.attrs, "set", "");
}
function Cg(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1,
    a;
  if (t)
    for (let l in t) {
      if (Ps(l)) continue;
      const c = t[l];
      let u;
      s && Se(s, (u = It(l)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : Qo(e.emitsOptions, l) ||
          ((!(l in r) || c !== r[l]) && ((r[l] = c), (o = !0)));
    }
  if (i) {
    const l = fe(n),
      c = a || ye;
    for (let u = 0; u < i.length; u++) {
      const f = i[u];
      n[f] = pl(s, l, f, c[f], e, !Se(c, f));
    }
  }
  return o;
}
function pl(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const a = Se(o, "default");
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && ue(l)) {
        const { propsDefaults: c } = s;
        if (n in c) r = c[n];
        else {
          const u = di(s);
          ((r = c[n] = l.call(null, t)), u());
        }
      } else r = l;
      s.ce && s.ce._setProp(n, r);
    }
    o[0] &&
      (i && !a ? (r = !1) : o[1] && (r === "" || r === Ln(n)) && (r = !0));
  }
  return r;
}
const __ = new WeakMap();
function Ig(e, t, n = !1) {
  const r = n ? __ : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const i = e.props,
    o = {},
    a = [];
  let l = !1;
  if (!ue(e)) {
    const u = (f) => {
      l = !0;
      const [d, h] = Ig(f, t, !0);
      (Be(o, d), h && a.push(...h));
    };
    (!n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u));
  }
  if (!i && !l) return (be(e) && r.set(e, Ur), Ur);
  if (oe(i))
    for (let u = 0; u < i.length; u++) {
      const f = It(i[u]);
      ku(f) && (o[f] = ye);
    }
  else if (i)
    for (const u in i) {
      const f = It(u);
      if (ku(f)) {
        const d = i[u],
          h = (o[f] =
            oe(d) || ue(d)
              ? {
                  type: d,
                }
              : Be({}, d)),
          m = h.type;
        let E = !1,
          C = !0;
        if (oe(m))
          for (let v = 0; v < m.length; ++v) {
            const g = m[v],
              b = ue(g) && g.name;
            if (b === "Boolean") {
              E = !0;
              break;
            } else b === "String" && (C = !1);
          }
        else E = ue(m) && m.name === "Boolean";
        ((h[0] = E), (h[1] = C), (E || Se(h, "default")) && a.push(f));
      }
    }
  const c = [o, a];
  return (be(e) && r.set(e, c), c);
}
function ku(e) {
  return e[0] !== "$" && !Ps(e);
}
const yc = (e) => e === "_" || e === "_ctx" || e === "$stable",
  _c = (e) => (oe(e) ? e.map(nn) : [nn(e)]),
  b_ = (e, t, n) => {
    if (t._n) return t;
    const r = Dy((...s) => _c(t(...s)), n);
    return ((r._c = !1), r);
  },
  Tg = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (yc(s)) continue;
      const i = e[s];
      if (ue(i)) t[s] = b_(s, i, r);
      else if (i != null) {
        const o = _c(i);
        t[s] = () => o;
      }
    }
  },
  kg = (e, t) => {
    const n = _c(t);
    e.slots.default = () => n;
  },
  Ag = (e, t, n) => {
    for (const r in t) (n || !yc(r)) && (e[r] = t[r]);
  },
  w_ = (e, t, n) => {
    const r = (e.slots = Eg());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (Ag(r, t, n), n && Eh(r, "_", s, !0)) : Tg(t, r);
    } else t && kg(e, t);
  },
  E_ = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let i = !0,
      o = ye;
    if (r.shapeFlag & 32) {
      const a = t._;
      (a
        ? n && a === 1
          ? (i = !1)
          : Ag(s, t, n)
        : ((i = !t.$stable), Tg(t, s)),
        (o = t));
    } else
      t &&
        (kg(e, t),
        (o = {
          default: 1,
        }));
    if (i) for (const a in s) !yc(a) && o[a] == null && delete s[a];
  },
  We = k_;
function S_(e) {
  return C_(e);
}
function C_(e, t) {
  const n = Bo();
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
      setScopeId: h = rn,
      insertStaticContent: m,
    } = e,
    E = (
      w,
      S,
      N,
      j = null,
      z = null,
      H = null,
      p = void 0,
      y = null,
      k = !!S.dynamicChildren,
    ) => {
      if (w === S) return;
      (w && !zn(w, S) && ((j = M(w)), G(w, z, H, !0), (w = null)),
        S.patchFlag === -2 && ((k = !1), (S.dynamicChildren = null)));
      const { type: O, ref: Z, shapeFlag: K } = S;
      switch (O) {
        case fi:
          C(w, S, N, j);
          break;
        case et:
          v(w, S, N, j);
          break;
        case qi:
          w == null && g(S, N, j, p);
          break;
        case lt:
          I(w, S, N, j, z, H, p, y, k);
          break;
        default:
          K & 1
            ? T(w, S, N, j, z, H, p, y, k)
            : K & 6
              ? V(w, S, N, j, z, H, p, y, k)
              : (K & 64 || K & 128) && O.process(w, S, N, j, z, H, p, y, k, ne);
      }
      Z != null && z
        ? xs(Z, w && w.ref, H, S || w, !S)
        : Z == null && w && w.ref != null && xs(w.ref, null, H, w, !0);
    },
    C = (w, S, N, j) => {
      if (w == null) r((S.el = a(S.children)), N, j);
      else {
        const z = (S.el = w.el);
        S.children !== w.children && c(z, S.children);
      }
    },
    v = (w, S, N, j) => {
      w == null ? r((S.el = l(S.children || "")), N, j) : (S.el = w.el);
    },
    g = (w, S, N, j) => {
      [w.el, w.anchor] = m(w.children, S, N, j, w.el, w.anchor);
    },
    b = ({ el: w, anchor: S }, N, j) => {
      let z;
      for (; w && w !== S; ) ((z = d(w)), r(w, N, j), (w = z));
      r(S, N, j);
    },
    _ = ({ el: w, anchor: S }) => {
      let N;
      for (; w && w !== S; ) ((N = d(w)), s(w), (w = N));
      s(S);
    },
    T = (w, S, N, j, z, H, p, y, k) => {
      if (
        (S.type === "svg" ? (p = "svg") : S.type === "math" && (p = "mathml"),
        w == null)
      )
        R(S, N, j, z, H, p, y, k);
      else {
        const O = w.el && w.el._isVueCE ? w.el : null;
        try {
          (O && O._beginPatch(), B(w, S, z, H, p, y, k));
        } finally {
          O && O._endPatch();
        }
      }
    },
    R = (w, S, N, j, z, H, p, y) => {
      let k, O;
      const { props: Z, shapeFlag: K, transition: A, dirs: F } = w;
      if (
        ((k = w.el = o(w.type, H, Z && Z.is, Z)),
        K & 8
          ? u(k, w.children)
          : K & 16 && q(w.children, k, null, j, z, Ca(w, H), p, y),
        F && ar(w, null, j, "created"),
        P(k, w, w.scopeId, p, j),
        Z)
      ) {
        for (const le in Z)
          le !== "value" && !Ps(le) && i(k, le, null, Z[le], H, j);
        ("value" in Z && i(k, "value", null, Z.value, H),
          (O = Z.onVnodeBeforeMount) && Pt(O, j, w));
      }
      F && ar(w, null, j, "beforeMount");
      const re = I_(z, A);
      (re && A.beforeEnter(k),
        r(k, S, N),
        ((O = Z && Z.onVnodeMounted) || re || F) &&
          We(() => {
            (O && Pt(O, j, w),
              re && A.enter(k),
              F && ar(w, null, j, "mounted"));
          }, z));
    },
    P = (w, S, N, j, z) => {
      if ((N && h(w, N), j)) for (let H = 0; H < j.length; H++) h(w, j[H]);
      if (z) {
        let H = z.subTree;
        if (
          S === H ||
          (ho(H.type) && (H.ssContent === S || H.ssFallback === S))
        ) {
          const p = z.vnode;
          P(w, p, p.scopeId, p.slotScopeIds, z.parent);
        }
      }
    },
    q = (w, S, N, j, z, H, p, y, k = 0) => {
      for (let O = k; O < w.length; O++) {
        const Z = (w[O] = y ? mn(w[O]) : nn(w[O]));
        E(null, Z, S, N, j, z, H, p, y);
      }
    },
    B = (w, S, N, j, z, H, p) => {
      const y = (S.el = w.el);
      let { patchFlag: k, dynamicChildren: O, dirs: Z } = S;
      k |= w.patchFlag & 16;
      const K = w.props || ye,
        A = S.props || ye;
      let F;
      if (
        (N && lr(N, !1),
        (F = A.onVnodeBeforeUpdate) && Pt(F, N, S, w),
        Z && ar(S, w, N, "beforeUpdate"),
        N && lr(N, !0),
        ((K.innerHTML && A.innerHTML == null) ||
          (K.textContent && A.textContent == null)) &&
          u(y, ""),
        O
          ? L(w.dynamicChildren, O, y, N, j, Ca(S, z), H)
          : p || W(w, S, y, null, N, j, Ca(S, z), H, !1),
        k > 0)
      ) {
        if (k & 16) x(y, K, A, N, z);
        else if (
          (k & 2 && K.class !== A.class && i(y, "class", null, A.class, z),
          k & 4 && i(y, "style", K.style, A.style, z),
          k & 8)
        ) {
          const re = S.dynamicProps;
          for (let le = 0; le < re.length; le++) {
            const pe = re[le],
              He = K[pe],
              Fe = A[pe];
            (Fe !== He || pe === "value") && i(y, pe, He, Fe, z, N);
          }
        }
        k & 1 && w.children !== S.children && u(y, S.children);
      } else !p && O == null && x(y, K, A, N, z);
      ((F = A.onVnodeUpdated) || Z) &&
        We(() => {
          (F && Pt(F, N, S, w), Z && ar(S, w, N, "updated"));
        }, j);
    },
    L = (w, S, N, j, z, H, p) => {
      for (let y = 0; y < S.length; y++) {
        const k = w[y],
          O = S[y],
          Z =
            k.el && (k.type === lt || !zn(k, O) || k.shapeFlag & 198)
              ? f(k.el)
              : N;
        E(k, O, Z, null, j, z, H, p, !0);
      }
    },
    x = (w, S, N, j, z) => {
      if (S !== N) {
        if (S !== ye)
          for (const H in S) !Ps(H) && !(H in N) && i(w, H, S[H], null, z, j);
        for (const H in N) {
          if (Ps(H)) continue;
          const p = N[H],
            y = S[H];
          p !== y && H !== "value" && i(w, H, y, p, z, j);
        }
        "value" in N && i(w, "value", S.value, N.value, z);
      }
    },
    I = (w, S, N, j, z, H, p, y, k) => {
      const O = (S.el = w ? w.el : a("")),
        Z = (S.anchor = w ? w.anchor : a(""));
      let { patchFlag: K, dynamicChildren: A, slotScopeIds: F } = S;
      (F && (y = y ? y.concat(F) : F),
        w == null
          ? (r(O, N, j), r(Z, N, j), q(S.children || [], N, Z, z, H, p, y, k))
          : K > 0 &&
              K & 64 &&
              A &&
              w.dynamicChildren &&
              w.dynamicChildren.length === A.length
            ? (L(w.dynamicChildren, A, N, z, H, p, y),
              (S.key != null || (z && S === z.subTree)) && bc(w, S, !0))
            : W(w, S, N, Z, z, H, p, y, k));
    },
    V = (w, S, N, j, z, H, p, y, k) => {
      ((S.slotScopeIds = y),
        w == null
          ? S.shapeFlag & 512
            ? z.ctx.activate(S, N, j, p, k)
            : $(S, N, j, z, H, p, k)
          : Y(w, S, k));
    },
    $ = (w, S, N, j, z, H, p) => {
      const y = (w.component = M_(w, j, z));
      if ((ui(w) && (y.ctx.renderer = ne), D_(y, !1, p), y.asyncDep)) {
        if ((z && z.registerDep(y, ee, p), !w.el)) {
          const k = (y.subTree = qe(et));
          (v(null, k, S, N), (w.placeholder = k.el));
        }
      } else ee(y, w, S, N, z, H, p);
    },
    Y = (w, S, N) => {
      const j = (S.component = w.component);
      if (m_(w, S, N))
        if (j.asyncDep && !j.asyncResolved) {
          J(j, S, N);
          return;
        } else ((j.next = S), j.update());
      else ((S.el = w.el), (j.vnode = S));
    },
    ee = (w, S, N, j, z, H, p) => {
      const y = () => {
        if (w.isMounted) {
          let { next: K, bu: A, u: F, parent: re, vnode: le } = w;
          {
            const Dt = Pg(w);
            if (Dt) {
              (K && ((K.el = le.el), J(w, K, p)),
                Dt.asyncDep.then(() => {
                  We(() => {
                    w.isUnmounted || O();
                  }, z);
                }));
              return;
            }
          }
          let pe = K,
            He;
          (lr(w, !1),
            K ? ((K.el = le.el), J(w, K, p)) : (K = le),
            A && Ns(A),
            (He = K.props && K.props.onVnodeBeforeUpdate) && Pt(He, re, K, le),
            lr(w, !0));
          const Fe = Iu(w),
            Tt = w.subTree;
          ((w.subTree = Fe),
            E(Tt, Fe, f(Tt.el), M(Tt), w, z, H),
            (K.el = Fe.el),
            pe === null && p_(w, Fe.el),
            F && We(F, z),
            (He = K.props && K.props.onVnodeUpdated) &&
              We(() => Pt(He, re, K, le), z));
        } else {
          let K;
          const { el: A, props: F } = S,
            { bm: re, m: le, parent: pe, root: He, type: Fe } = w,
            Tt = Yn(S);
          (lr(w, !1),
            re && Ns(re),
            !Tt && (K = F && F.onVnodeBeforeMount) && Pt(K, pe, S),
            lr(w, !0));
          {
            He.ce && He.ce._hasShadowRoot() && He.ce._injectChildStyle(Fe);
            const Dt = (w.subTree = Iu(w));
            (E(null, Dt, N, j, w, z, H), (S.el = Dt.el));
          }
          if ((le && We(le, z), !Tt && (K = F && F.onVnodeMounted))) {
            const Dt = S;
            We(() => Pt(K, pe, Dt), z);
          }
          ((S.shapeFlag & 256 ||
            (pe && Yn(pe.vnode) && pe.vnode.shapeFlag & 256)) &&
            w.a &&
            We(w.a, z),
            (w.isMounted = !0),
            (S = N = j = null));
        }
      };
      w.scope.on();
      const k = (w.effect = new Ah(y));
      w.scope.off();
      const O = (w.update = k.run.bind(k)),
        Z = (w.job = k.runIfDirty.bind(k));
      ((Z.i = w), (Z.id = w.uid), (k.scheduler = () => hc(Z)), lr(w, !0), O());
    },
    J = (w, S, N) => {
      S.component = w;
      const j = w.vnode.props;
      ((w.vnode = S),
        (w.next = null),
        y_(w, S.props, j, N),
        E_(w, S.children, N),
        In(),
        hu(w),
        Tn());
    },
    W = (w, S, N, j, z, H, p, y, k = !1) => {
      const O = w && w.children,
        Z = w ? w.shapeFlag : 0,
        K = S.children,
        { patchFlag: A, shapeFlag: F } = S;
      if (A > 0) {
        if (A & 128) {
          Ie(O, K, N, j, z, H, p, y, k);
          return;
        } else if (A & 256) {
          se(O, K, N, j, z, H, p, y, k);
          return;
        }
      }
      F & 8
        ? (Z & 16 && ie(O, z, H), K !== O && u(N, K))
        : Z & 16
          ? F & 16
            ? Ie(O, K, N, j, z, H, p, y, k)
            : ie(O, z, H, !0)
          : (Z & 8 && u(N, ""), F & 16 && q(K, N, j, z, H, p, y, k));
    },
    se = (w, S, N, j, z, H, p, y, k) => {
      ((w = w || Ur), (S = S || Ur));
      const O = w.length,
        Z = S.length,
        K = Math.min(O, Z);
      let A;
      for (A = 0; A < K; A++) {
        const F = (S[A] = k ? mn(S[A]) : nn(S[A]));
        E(w[A], F, N, null, z, H, p, y, k);
      }
      O > Z ? ie(w, z, H, !0, !1, K) : q(S, N, j, z, H, p, y, k, K);
    },
    Ie = (w, S, N, j, z, H, p, y, k) => {
      let O = 0;
      const Z = S.length;
      let K = w.length - 1,
        A = Z - 1;
      for (; O <= K && O <= A; ) {
        const F = w[O],
          re = (S[O] = k ? mn(S[O]) : nn(S[O]));
        if (zn(F, re)) E(F, re, N, null, z, H, p, y, k);
        else break;
        O++;
      }
      for (; O <= K && O <= A; ) {
        const F = w[K],
          re = (S[A] = k ? mn(S[A]) : nn(S[A]));
        if (zn(F, re)) E(F, re, N, null, z, H, p, y, k);
        else break;
        (K--, A--);
      }
      if (O > K) {
        if (O <= A) {
          const F = A + 1,
            re = F < Z ? S[F].el : j;
          for (; O <= A; )
            (E(null, (S[O] = k ? mn(S[O]) : nn(S[O])), N, re, z, H, p, y, k),
              O++);
        }
      } else if (O > A) for (; O <= K; ) (G(w[O], z, H, !0), O++);
      else {
        const F = O,
          re = O,
          le = new Map();
        for (O = re; O <= A; O++) {
          const vt = (S[O] = k ? mn(S[O]) : nn(S[O]));
          vt.key != null && le.set(vt.key, O);
        }
        let pe,
          He = 0;
        const Fe = A - re + 1;
        let Tt = !1,
          Dt = 0;
        const fs = new Array(Fe);
        for (O = 0; O < Fe; O++) fs[O] = 0;
        for (O = F; O <= K; O++) {
          const vt = w[O];
          if (He >= Fe) {
            G(vt, z, H, !0);
            continue;
          }
          let Yt;
          if (vt.key != null) Yt = le.get(vt.key);
          else
            for (pe = re; pe <= A; pe++)
              if (fs[pe - re] === 0 && zn(vt, S[pe])) {
                Yt = pe;
                break;
              }
          Yt === void 0
            ? G(vt, z, H, !0)
            : ((fs[Yt - re] = O + 1),
              Yt >= Dt ? (Dt = Yt) : (Tt = !0),
              E(vt, S[Yt], N, null, z, H, p, y, k),
              He++);
        }
        const iu = Tt ? T_(fs) : Ur;
        for (pe = iu.length - 1, O = Fe - 1; O >= 0; O--) {
          const vt = re + O,
            Yt = S[vt],
            ou = S[vt + 1],
            au = vt + 1 < Z ? ou.el || Ng(ou) : j;
          fs[O] === 0
            ? E(null, Yt, N, au, z, H, p, y, k)
            : Tt && (pe < 0 || O !== iu[pe] ? ce(Yt, N, au, 2) : pe--);
        }
      }
    },
    ce = (w, S, N, j, z = null) => {
      const { el: H, type: p, transition: y, children: k, shapeFlag: O } = w;
      if (O & 6) {
        ce(w.component.subTree, S, N, j);
        return;
      }
      if (O & 128) {
        w.suspense.move(S, N, j);
        return;
      }
      if (O & 64) {
        p.move(w, S, N, ne);
        return;
      }
      if (p === lt) {
        r(H, S, N);
        for (let K = 0; K < k.length; K++) ce(k[K], S, N, j);
        r(w.anchor, S, N);
        return;
      }
      if (p === qi) {
        b(w, S, N);
        return;
      }
      if (j !== 2 && O & 1 && y)
        if (j === 0) (y.beforeEnter(H), r(H, S, N), We(() => y.enter(H), z));
        else {
          const { leave: K, delayLeave: A, afterLeave: F } = y,
            re = () => {
              w.ctx.isUnmounted ? s(H) : r(H, S, N);
            },
            le = () => {
              (H._isLeaving && H[tn](!0),
                K(H, () => {
                  (re(), F && F());
                }));
            };
          A ? A(H, re, le) : le();
        }
      else r(H, S, N);
    },
    G = (w, S, N, j = !1, z = !1) => {
      const {
        type: H,
        props: p,
        ref: y,
        children: k,
        dynamicChildren: O,
        shapeFlag: Z,
        patchFlag: K,
        dirs: A,
        cacheIndex: F,
      } = w;
      if (
        (K === -2 && (z = !1),
        y != null && (In(), xs(y, null, N, w, !0), Tn()),
        F != null && (S.renderCache[F] = void 0),
        Z & 256)
      ) {
        S.ctx.deactivate(w);
        return;
      }
      const re = Z & 1 && A,
        le = !Yn(w);
      let pe;
      if ((le && (pe = p && p.onVnodeBeforeUnmount) && Pt(pe, S, w), Z & 6))
        Oe(w.component, N, j);
      else {
        if (Z & 128) {
          w.suspense.unmount(N, j);
          return;
        }
        (re && ar(w, null, S, "beforeUnmount"),
          Z & 64
            ? w.type.remove(w, S, N, ne, j)
            : O && !O.hasOnce && (H !== lt || (K > 0 && K & 64))
              ? ie(O, S, N, !1, !0)
              : ((H === lt && K & 384) || (!z && Z & 16)) && ie(k, S, N),
          j && de(w));
      }
      ((le && (pe = p && p.onVnodeUnmounted)) || re) &&
        We(() => {
          (pe && Pt(pe, S, w), re && ar(w, null, S, "unmounted"));
        }, N);
    },
    de = (w) => {
      const { type: S, el: N, anchor: j, transition: z } = w;
      if (S === lt) {
        Te(N, j);
        return;
      }
      if (S === qi) {
        _(w);
        return;
      }
      const H = () => {
        (s(N), z && !z.persisted && z.afterLeave && z.afterLeave());
      };
      if (w.shapeFlag & 1 && z && !z.persisted) {
        const { leave: p, delayLeave: y } = z,
          k = () => p(N, H);
        y ? y(w.el, H, k) : k();
      } else H();
    },
    Te = (w, S) => {
      let N;
      for (; w !== S; ) ((N = d(w)), s(w), (w = N));
      s(S);
    },
    Oe = (w, S, N) => {
      const { bum: j, scope: z, job: H, subTree: p, um: y, m: k, a: O } = w;
      (fo(k),
        fo(O),
        j && Ns(j),
        z.stop(),
        H && ((H.flags |= 8), G(p, w, S, N)),
        y && We(y, S),
        We(() => {
          w.isUnmounted = !0;
        }, S));
    },
    ie = (w, S, N, j = !1, z = !1, H = 0) => {
      for (let p = H; p < w.length; p++) G(w[p], S, N, j, z);
    },
    M = (w) => {
      if (w.shapeFlag & 6) return M(w.component.subTree);
      if (w.shapeFlag & 128) return w.suspense.next();
      const S = d(w.anchor || w.el),
        N = S && S[rg];
      return N ? d(N) : S;
    };
  let Q = !1;
  const X = (w, S, N) => {
      let j;
      (w == null
        ? S._vnode && (G(S._vnode, null, null, !0), (j = S._vnode.component))
        : E(S._vnode || null, w, S, null, null, null, N),
        (S._vnode = w),
        Q || ((Q = !0), hu(j), Qh(), (Q = !1)));
    },
    ne = {
      p: E,
      um: G,
      m: ce,
      r: de,
      mt: $,
      mc: q,
      pc: W,
      pbc: L,
      n: M,
      o: e,
    };
  return {
    render: X,
    hydrate: void 0,
    createApp: u_(X),
  };
}
function Ca({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function lr({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function I_(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function bc(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (oe(r) && oe(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = s[i];
      (a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = s[i] = mn(s[i])), (a.el = o.el)),
        !n && a.patchFlag !== -2 && bc(o, a)),
        a.type === fi &&
          (a.patchFlag === -1 && (a = s[i] = mn(a)), (a.el = o.el)),
        a.type === et && !a.el && (a.el = o.el));
    }
}
function T_(e) {
  const t = e.slice(),
    n = [0];
  let r, s, i, o, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (((s = n[n.length - 1]), e[s] < c)) {
        ((t[r] = s), n.push(r));
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        ((a = (i + o) >> 1), e[n[a]] < c ? (i = a + 1) : (o = a));
      c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) ((n[i] = o), (o = t[o]));
  return n;
}
function Pg(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Pg(t);
}
function fo(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ng(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? Ng(t.subTree) : null;
}
const ho = (e) => e.__isSuspense;
function k_(e, t) {
  t && t.pendingBranch
    ? oe(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : My(e);
}
const lt = Symbol.for("v-fgt"),
  fi = Symbol.for("v-txt"),
  et = Symbol.for("v-cmt"),
  qi = Symbol.for("v-stc"),
  Ds = [];
let bt = null;
function go(e = !1) {
  Ds.push((bt = e ? null : []));
}
function A_() {
  (Ds.pop(), (bt = Ds[Ds.length - 1] || null));
}
let Js = 1;
function mo(e, t = !1) {
  ((Js += e), e < 0 && bt && t && (bt.hasOnce = !0));
}
function Rg(e) {
  return (
    (e.dynamicChildren = Js > 0 ? bt || Ur : null),
    A_(),
    Js > 0 && bt && bt.push(e),
    e
  );
}
function W1(e, t, n, r, s, i) {
  return Rg(Lg(e, t, n, r, s, i, !0));
}
function po(e, t, n, r, s) {
  return Rg(qe(e, t, n, r, s, !0));
}
function Gr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function zn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Og = ({ key: e }) => e ?? null,
  Hi = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Me(e) || Re(e) || ue(e)
        ? {
            i: nt,
            r: e,
            k: t,
            f: !!n,
          }
        : e
      : null
  );
function Lg(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  i = e === lt ? 0 : 1,
  o = !1,
  a = !1,
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Og(t),
    ref: t && Hi(t),
    scopeId: Zh,
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
    ctx: nt,
  };
  return (
    a
      ? (wc(l, n), i & 128 && e.normalize(l))
      : n && (l.shapeFlag |= Me(n) ? 8 : 16),
    Js > 0 &&
      !o &&
      bt &&
      (l.patchFlag > 0 || i & 6) &&
      l.patchFlag !== 32 &&
      bt.push(l),
    l
  );
}
const qe = P_;
function P_(e, t = null, n = null, r = 0, s = null, i = !1) {
  if (((!e || e === t_) && (e = et), Gr(e))) {
    const a = An(e, t, !0);
    return (
      n && wc(a, n),
      Js > 0 &&
        !i &&
        bt &&
        (a.shapeFlag & 6 ? (bt[bt.indexOf(e)] = a) : bt.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((B_(e) && (e = e.__vccOpts), t)) {
    t = N_(t);
    let { class: a, style: l } = t;
    (a && !Me(a) && (t.class = ac(a)),
      be(l) && (zo(l) && !oe(l) && (l = Be({}, l)), (t.style = oc(l))));
  }
  const o = Me(e) ? 1 : ho(e) ? 128 : sg(e) ? 64 : be(e) ? 4 : ue(e) ? 2 : 0;
  return Lg(e, t, n, r, s, o, i, !0);
}
function N_(e) {
  return e ? (zo(e) || Sg(e) ? Be({}, e) : e) : null;
}
function An(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: a, transition: l } = e,
    c = t ? O_(s || {}, t) : s,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && Og(c),
      ref:
        t && t.ref
          ? n && i
            ? oe(i)
              ? i.concat(Hi(t))
              : [i, Hi(t)]
            : Hi(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== lt ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && An(e.ssContent),
      ssFallback: e.ssFallback && An(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return (l && r && Zn(u, l.clone(u)), u);
}
function R_(e = " ", t = 0) {
  return qe(fi, null, e, t);
}
function j1(e, t) {
  const n = qe(qi, null, e);
  return ((n.staticCount = t), n);
}
function q1(e = "", t = !1) {
  return t ? (go(), po(et, null, e)) : qe(et, null, e);
}
function nn(e) {
  return e == null || typeof e == "boolean"
    ? qe(et)
    : oe(e)
      ? qe(lt, null, e.slice())
      : Gr(e)
        ? mn(e)
        : qe(fi, null, String(e));
}
function mn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : An(e);
}
function wc(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (oe(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), wc(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Sg(t)
        ? (t._ctx = nt)
        : s === 3 &&
          nt &&
          (nt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ue(t)
      ? ((t = {
          default: t,
          _ctx: nt,
        }),
        (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [R_(t)])) : (n = 8));
  ((e.children = t), (e.shapeFlag |= n));
}
function O_(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = ac([t.class, r.class]));
      else if (s === "style") t.style = oc([t.style, r.style]);
      else if (Do(s)) {
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
function Pt(e, t, n, r = null) {
  Kt(e, t, 7, [n, r]);
}
const L_ = vg();
let x_ = 0;
function M_(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || L_,
    i = {
      uid: x_++,
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
      scope: new Th(!0),
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
      propsOptions: Ig(r, s),
      emitsOptions: _g(r, s),
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
    (i.emit = f_.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let tt = null;
const Ce = () => tt || nt;
let vo, vl;
{
  const e = Bo(),
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
  ((vo = t("__VUE_INSTANCE_SETTERS__", (n) => (tt = n))),
    (vl = t("__VUE_SSR_SETTERS__", (n) => (Jr = n))));
}
const di = (e) => {
    const t = tt;
    return (
      vo(e),
      e.scope.on(),
      () => {
        (e.scope.off(), vo(t));
      }
    );
  },
  Au = () => {
    (tt && tt.scope.off(), vo(null));
  };
function xg(e) {
  return e.vnode.shapeFlag & 4;
}
let Jr = !1;
function D_(e, t = !1, n = !1) {
  t && vl(t);
  const { props: r, children: s } = e.vnode,
    i = xg(e);
  (v_(e, r, i, t), w_(e, s, n || t));
  const o = i ? F_(e, t) : void 0;
  return (t && vl(!1), o);
}
function F_(e, t) {
  const n = e.type;
  ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, r_)));
  const { setup: r } = n;
  if (r) {
    In();
    const s = (e.setupContext = r.length > 1 ? U_(e) : null),
      i = di(e),
      o = li(r, e, 0, [e.props, s]),
      a = _h(o);
    if ((Tn(), i(), (a || e.sp) && !Yn(e) && pc(e), a)) {
      if ((o.then(Au, Au), t))
        return o
          .then((l) => {
            Pu(e, l);
          })
          .catch((l) => {
            ci(l, e, 0);
          });
      e.asyncDep = o;
    } else Pu(e, o);
  } else Mg(e);
}
function Pu(e, t, n) {
  (ue(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : be(t) && (e.setupState = zh(t)),
    Mg(e));
}
function Mg(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || rn);
  {
    const s = di(e);
    In();
    try {
      s_(e);
    } finally {
      (Tn(), s());
    }
  }
}
const $_ = {
  get(e, t) {
    return (at(e, "get", ""), e[t]);
  },
};
function U_(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, $_),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Xo(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(zh(Ir(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Ms) return Ms[n](e);
          },
          has(t, n) {
            return n in t || n in Ms;
          },
        }))
    : e.proxy;
}
function yl(e, t = !0) {
  return ue(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function B_(e) {
  return ue(e) && "__vccOpts" in e;
}
const D = (e, t) => Ny(e, t, Jr);
function U(e, t, n) {
  try {
    mo(-1);
    const r = arguments.length;
    return r === 2
      ? be(t) && !oe(t)
        ? Gr(t)
          ? qe(e, null, [t])
          : qe(e, t)
        : qe(e, null, t)
      : (r > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : r === 3 && Gr(n) && (n = [n]),
        qe(e, t, n));
  } finally {
    mo(1);
  }
}
const V_ = "3.5.29";
let _l;
const Nu = typeof window < "u" && window.trustedTypes;
if (Nu)
  try {
    _l = Nu.createPolicy("vue", {
      createHTML: (e) => e,
    });
  } catch {}
const Dg = _l ? (e) => _l.createHTML(e) : (e) => e,
  W_ = "http://www.w3.org/2000/svg",
  j_ = "http://www.w3.org/1998/Math/MathML",
  gn = typeof document < "u" ? document : null,
  Ru = gn && gn.createElement("template"),
  q_ = {
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
          ? gn.createElementNS(W_, e)
          : t === "mathml"
            ? gn.createElementNS(j_, e)
            : n
              ? gn.createElement(e, {
                  is: n,
                })
              : gn.createElement(e);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => gn.createTextNode(e),
    createComment: (e) => gn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => gn.querySelector(e),
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
        Ru.innerHTML = Dg(
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
              ? `<math>${e}</math>`
              : e,
        );
        const a = Ru.content;
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
  Dn = "transition",
  gs = "animation",
  Yr = Symbol("_vtc"),
  Fg = {
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
  $g = Be({}, ag, Fg),
  H_ = (e) => ((e.displayName = "Transition"), (e.props = $g), e),
  Ys = H_((e, { slots: t }) => U(qy, Ug(e), t)),
  cr = (e, t = []) => {
    oe(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Ou = (e) => (e ? (oe(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Ug(e) {
  const t = {};
  for (const I in e) I in Fg || (t[I] = e[I]);
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
    m = z_(s),
    E = m && m[0],
    C = m && m[1],
    {
      onBeforeEnter: v,
      onEnter: g,
      onEnterCancelled: b,
      onLeave: _,
      onLeaveCancelled: T,
      onBeforeAppear: R = v,
      onAppear: P = g,
      onAppearCancelled: q = b,
    } = t,
    B = (I, V, $, Y) => {
      ((I._enterCancelled = Y), Un(I, V ? u : a), Un(I, V ? c : o), $ && $());
    },
    L = (I, V) => {
      ((I._isLeaving = !1), Un(I, f), Un(I, h), Un(I, d), V && V());
    },
    x = (I) => (V, $) => {
      const Y = I ? P : g,
        ee = () => B(V, I, $);
      (cr(Y, [V, ee]),
        Lu(() => {
          (Un(V, I ? l : i), Zt(V, I ? u : a), Ou(Y) || xu(V, r, E, ee));
        }));
    };
  return Be(t, {
    onBeforeEnter(I) {
      (cr(v, [I]), Zt(I, i), Zt(I, o));
    },
    onBeforeAppear(I) {
      (cr(R, [I]), Zt(I, l), Zt(I, c));
    },
    onEnter: x(!1),
    onAppear: x(!0),
    onLeave(I, V) {
      I._isLeaving = !0;
      const $ = () => L(I, V);
      (Zt(I, f),
        I._enterCancelled ? (Zt(I, d), bl(I)) : (bl(I), Zt(I, d)),
        Lu(() => {
          I._isLeaving && (Un(I, f), Zt(I, h), Ou(_) || xu(I, r, C, $));
        }),
        cr(_, [I, $]));
    },
    onEnterCancelled(I) {
      (B(I, !1, void 0, !0), cr(b, [I]));
    },
    onAppearCancelled(I) {
      (B(I, !0, void 0, !0), cr(q, [I]));
    },
    onLeaveCancelled(I) {
      (L(I), cr(T, [I]));
    },
  });
}
function z_(e) {
  if (e == null) return null;
  if (be(e)) return [Ia(e.enter), Ia(e.leave)];
  {
    const t = Ia(e);
    return [t, t];
  }
}
function Ia(e) {
  return Kv(e);
}
function Zt(e, t) {
  (t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Yr] || (e[Yr] = new Set())).add(t));
}
function Un(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Yr];
  n && (n.delete(t), n.size || (e[Yr] = void 0));
}
function Lu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let K_ = 0;
function xu(e, t, n, r) {
  const s = (e._endId = ++K_),
    i = () => {
      s === e._endId && r();
    };
  if (n != null) return setTimeout(i, n);
  const { type: o, timeout: a, propCount: l } = Bg(e, t);
  if (!o) return r();
  const c = o + "end";
  let u = 0;
  const f = () => {
      (e.removeEventListener(c, d), i());
    },
    d = (h) => {
      h.target === e && ++u >= l && f();
    };
  (setTimeout(() => {
    u < l && f();
  }, a + 1),
    e.addEventListener(c, d));
}
function Bg(e, t) {
  const n = window.getComputedStyle(e),
    r = (m) => (n[m] || "").split(", "),
    s = r(`${Dn}Delay`),
    i = r(`${Dn}Duration`),
    o = Mu(s, i),
    a = r(`${gs}Delay`),
    l = r(`${gs}Duration`),
    c = Mu(a, l);
  let u = null,
    f = 0,
    d = 0;
  t === Dn
    ? o > 0 && ((u = Dn), (f = o), (d = i.length))
    : t === gs
      ? c > 0 && ((u = gs), (f = c), (d = l.length))
      : ((f = Math.max(o, c)),
        (u = f > 0 ? (o > c ? Dn : gs) : null),
        (d = u ? (u === Dn ? i.length : l.length) : 0));
  const h =
    u === Dn &&
    /\b(?:transform|all)(?:,|$)/.test(r(`${Dn}Property`).toString());
  return {
    type: u,
    timeout: f,
    propCount: d,
    hasTransform: h,
  };
}
function Mu(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Du(n) + Du(e[r])));
}
function Du(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function bl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function G_(e, t, n) {
  const r = e[Yr];
  (r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t));
}
const yo = Symbol("_vod"),
  Vg = Symbol("_vsh"),
  H1 = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      ((e[yo] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : ms(e, t));
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), ms(e, !0), r.enter(e))
            : r.leave(e, () => {
                ms(e, !1);
              })
          : ms(e, t));
    },
    beforeUnmount(e, { value: t }) {
      ms(e, t);
    },
  };
function ms(e, t) {
  ((e.style.display = t ? e[yo] : "none"), (e[Vg] = !t));
}
const J_ = Symbol(""),
  Y_ = /(?:^|;)\s*display\s*:/;
function Q_(e, t, n) {
  const r = e.style,
    s = Me(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (Me(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && zi(r, a, "");
        }
      else for (const o in t) n[o] == null && zi(r, o, "");
    for (const o in n) (o === "display" && (i = !0), zi(r, o, n[o]));
  } else if (s) {
    if (t !== n) {
      const o = r[J_];
      (o && (n += ";" + o), (r.cssText = n), (i = Y_.test(n)));
    }
  } else t && e.removeAttribute("style");
  yo in e && ((e[yo] = i ? r.display : ""), e[Vg] && (r.display = "none"));
}
const Fu = /\s*!important$/;
function zi(e, t, n) {
  if (oe(n)) n.forEach((r) => zi(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = X_(e, t);
    Fu.test(n)
      ? e.setProperty(Ln(r), n.replace(Fu, ""), "important")
      : (e[r] = n);
  }
}
const $u = ["Webkit", "Moz", "ms"],
  Ta = {};
function X_(e, t) {
  const n = Ta[t];
  if (n) return n;
  let r = It(t);
  if (r !== "filter" && r in e) return (Ta[t] = r);
  r = Uo(r);
  for (let s = 0; s < $u.length; s++) {
    const i = $u[s] + r;
    if (i in e) return (Ta[t] = i);
  }
  return t;
}
const Uu = "http://www.w3.org/1999/xlink";
function Bu(e, t, n, r, s, i = Zv(t)) {
  r && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Uu, t.slice(6, t.length))
      : e.setAttributeNS(Uu, t, n)
    : n == null || (i && !Sh(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : Ht(n) ? String(n) : n);
}
function Vu(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Dg(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      l = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    ((a !== l || !("_value" in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n));
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = Sh(n))
      : n == null && a === "string"
        ? ((n = ""), (o = !0))
        : a === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(s || t);
}
function Z_(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function eb(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Wu = Symbol("_vei");
function tb(e, t, n, r, s = null) {
  const i = e[Wu] || (e[Wu] = {}),
    o = i[t];
  if (r && o) o.value = r;
  else {
    const [a, l] = nb(t);
    if (r) {
      const c = (i[t] = ib(r, s));
      Z_(e, a, c, l);
    } else o && (eb(e, a, o, l), (i[t] = void 0));
  }
}
const ju = /(?:Once|Passive|Capture)$/;
function nb(e) {
  let t;
  if (ju.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(ju)); )
      ((e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0));
  }
  return [e[2] === ":" ? e.slice(3) : Ln(e.slice(2)), t];
}
let ka = 0;
const rb = Promise.resolve(),
  sb = () => ka || (rb.then(() => (ka = 0)), (ka = Date.now()));
function ib(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Kt(ob(r, n.value), t, 5, [r]);
  };
  return ((n.value = e), (n.attached = sb()), n);
}
function ob(e, t) {
  if (oe(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        (n.call(e), (e._stopped = !0));
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const qu = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  ab = (e, t, n, r, s, i) => {
    const o = s === "svg";
    t === "class"
      ? G_(e, r, o)
      : t === "style"
        ? Q_(e, n, r)
        : Do(t)
          ? sc(t) || tb(e, t, n, r, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : lb(e, t, r, o)
              )
            ? (Vu(e, t, r),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                Bu(e, t, r, o, i, t !== "value"))
            : e._isVueCE && (/[A-Z]/.test(t) || !Me(r))
              ? Vu(e, It(t), r, i, t)
              : (t === "true-value"
                  ? (e._trueValue = r)
                  : t === "false-value" && (e._falseValue = r),
                Bu(e, t, r, o));
  };
function lb(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && qu(t) && ue(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "autocorrect" ||
    (t === "sandbox" && e.tagName === "IFRAME") ||
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
  return qu(t) && Me(n) ? !1 : t in e;
}
const Wg = new WeakMap(),
  jg = new WeakMap(),
  _o = Symbol("_moveCb"),
  Hu = Symbol("_enterCb"),
  cb = (e) => (delete e.props.mode, e),
  ub = cb({
    name: "TransitionGroup",
    props: Be({}, $g, {
      tag: String,
      moveClass: String,
    }),
    setup(e, { slots: t }) {
      const n = Ce(),
        r = og();
      let s, i;
      return (
        vc(() => {
          if (!s.length) return;
          const o = e.moveClass || `${e.name || "v"}-move`;
          if (!mb(s[0].el, n.vnode.el, o)) {
            s = [];
            return;
          }
          (s.forEach(db), s.forEach(hb));
          const a = s.filter(gb);
          (bl(n.vnode.el),
            a.forEach((l) => {
              const c = l.el,
                u = c.style;
              (Zt(c, o),
                (u.transform = u.webkitTransform = u.transitionDuration = ""));
              const f = (c[_o] = (d) => {
                (d && d.target !== c) ||
                  ((!d || d.propertyName.endsWith("transform")) &&
                    (c.removeEventListener("transitionend", f),
                    (c[_o] = null),
                    Un(c, o)));
              });
              c.addEventListener("transitionend", f);
            }),
            (s = []));
        }),
        () => {
          const o = fe(e),
            a = Ug(o);
          let l = o.tag || lt;
          if (((s = []), i))
            for (let c = 0; c < i.length; c++) {
              const u = i[c];
              u.el &&
                u.el instanceof Element &&
                (s.push(u), Zn(u, Gs(u, a, r, n)), Wg.set(u, qg(u.el)));
            }
          i = t.default ? mc(t.default()) : [];
          for (let c = 0; c < i.length; c++) {
            const u = i[c];
            u.key != null && Zn(u, Gs(u, a, r, n));
          }
          return qe(l, null, i);
        }
      );
    },
  }),
  fb = ub;
function db(e) {
  const t = e.el;
  (t[_o] && t[_o](), t[Hu] && t[Hu]());
}
function hb(e) {
  jg.set(e, qg(e.el));
}
function gb(e) {
  const t = Wg.get(e),
    n = jg.get(e),
    r = t.left - n.left,
    s = t.top - n.top;
  if (r || s) {
    const i = e.el,
      o = i.style,
      a = i.getBoundingClientRect();
    let l = 1,
      c = 1;
    return (
      i.offsetWidth && (l = a.width / i.offsetWidth),
      i.offsetHeight && (c = a.height / i.offsetHeight),
      (!Number.isFinite(l) || l === 0) && (l = 1),
      (!Number.isFinite(c) || c === 0) && (c = 1),
      Math.abs(l - 1) < 0.01 && (l = 1),
      Math.abs(c - 1) < 0.01 && (c = 1),
      (o.transform = o.webkitTransform = `translate(${r / l}px,${s / c}px)`),
      (o.transitionDuration = "0s"),
      e
    );
  }
}
function qg(e) {
  const t = e.getBoundingClientRect();
  return {
    left: t.left,
    top: t.top,
  };
}
function mb(e, t, n) {
  const r = e.cloneNode(),
    s = e[Yr];
  (s &&
    s.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }),
    n.split(/\s+/).forEach((a) => a && r.classList.add(a)),
    (r.style.display = "none"));
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(r);
  const { hasTransform: o } = Bg(r);
  return (i.removeChild(r), o);
}
const pb = ["ctrl", "shift", "alt", "meta"],
  vb = {
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
    exact: (e, t) => pb.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  z1 = (e, t) => {
    if (!e) return e;
    const n = e._withMods || (e._withMods = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (s, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const a = vb[t[o]];
          if (a && a(s, t)) return;
        }
        return e(s, ...i);
      })
    );
  },
  yb = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  K1 = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (s) => {
        if (!("key" in s)) return;
        const i = Ln(s.key);
        if (t.some((o) => o === i || yb[o] === i)) return e(s);
      })
    );
  },
  _b = Be(
    {
      patchProp: ab,
    },
    q_,
  );
let zu;
function bb() {
  return zu || (zu = S_(_b));
}
const Hg = (...e) => {
  const t = bb().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = Eb(r);
      if (!s) return;
      const i = t._component;
      (!ue(i) && !i.render && !i.template && (i.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = ""));
      const o = n(s, !1, wb(s));
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function wb(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Eb(e) {
  return Me(e) ? document.querySelector(e) : e;
}
function as(e, t, n, r) {
  return (
    Object.defineProperty(e, t, {
      get: n,
      set: r,
      enumerable: !0,
    }),
    e
  );
}
const er = he(!1);
let wl;
function Sb(e, t) {
  const n =
    /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) ||
    /(opr)[\/]([\w.]+)/.exec(e) ||
    /(vivaldi)[\/]([\w.]+)/.exec(e) ||
    /(chrome|crios)[\/]([\w.]+)/.exec(e) ||
    /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(
      e,
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
function Cb(e) {
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
const zg = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function Ib(e) {
  const t = e.toLowerCase(),
    n = Cb(t),
    r = Sb(t, n),
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
  (r.browser &&
    ((s[r.browser] = !0),
    (s.version = r.version),
    (s.versionNumber = parseInt(r.version, 10))),
    r.platform && (s[r.platform] = !0));
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
      er.value === !0 &&
        (wl = {
          is: {
            ...s,
          },
        }),
      zg === !0 &&
        s.mac === !0 &&
        ((s.desktop === !0 && s.safari === !0) ||
          (s.nativeMobile === !0 &&
            s.android !== !0 &&
            s.ios !== !0 &&
            s.ipad !== !0)))
    ) {
      (delete s.mac, delete s.desktop);
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
const Ku = navigator.userAgent || navigator.vendor || window.opera,
  Tb = {
    has: {
      touch: !1,
      webStorage: !1,
    },
    within: {
      iframe: !1,
    },
  },
  Ke = {
    userAgent: Ku,
    is: Ib(Ku),
    has: {
      touch: zg,
    },
    within: {
      iframe: window.self !== window.top,
    },
  },
  El = {
    install(e) {
      const { $q: t } = e;
      er.value === !0
        ? (e.onSSRHydrated.push(() => {
            (Object.assign(t.platform, Ke), (er.value = !1));
          }),
          (t.platform = Cr(this)))
        : (t.platform = this);
    },
  };
{
  let e;
  (as(Ke.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return ((e = !0), !0);
    } catch {}
    return ((e = !1), !1);
  }),
    Object.assign(El, Ke),
    er.value === !0 && (Object.assign(El, wl, Tb), (wl = null)));
}
function st(e) {
  return Ir(tr(e));
}
function kb(e) {
  return Ir(e);
}
const ls = (e, t) => {
    const n = Cr(e);
    for (const r in e)
      as(
        t,
        r,
        () => n[r],
        (s) => {
          n[r] = s;
        },
      );
    return t;
  },
  mt = {
    hasPassive: !1,
    passiveCapture: !0,
    notPassiveCapture: !0,
  };
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(mt, {
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
  (window.addEventListener("qtest", null, e),
    window.removeEventListener("qtest", null, e));
} catch {}
function Qs() {}
function G1(e) {
  return e.button === 0;
}
function Ab(e) {
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
function Pb(e) {
  if (e.path) return e.path;
  if (e.composedPath) return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if ((t.push(n), n.tagName === "HTML"))
      return (t.push(document), t.push(window), t);
    n = n.parentElement;
  }
}
function bo(e) {
  e.stopPropagation();
}
function Kn(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function Nt(e) {
  (e.cancelable !== !1 && e.preventDefault(), e.stopPropagation());
}
function J1(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return;
  const n =
    t === !0
      ? (r) => {
          ((r.__dragPrevented = !0),
            r.addEventListener("dragstart", Kn, mt.notPassiveCapture));
        }
      : (r) => {
          (delete r.__dragPrevented,
            r.removeEventListener("dragstart", Kn, mt.notPassiveCapture));
        };
  e.querySelectorAll("a, img").forEach(n);
}
function Nb(e, t, n) {
  const r = `__q_${t}_evt`;
  ((e[r] = e[r] !== void 0 ? e[r].concat(n) : n),
    n.forEach((s) => {
      s[0].addEventListener(s[1], e[s[2]], mt[s[3]]);
    }));
}
function Rb(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 &&
    (e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], mt[r[3]]);
    }),
    (e[n] = void 0));
}
function Kg(e, t = 250, n) {
  let r = null;
  function s() {
    const i = arguments,
      o = () => {
        ((r = null), e.apply(this, i));
      };
    (r !== null && clearTimeout(r), (r = setTimeout(o, t)));
  }
  return (
    (s.cancel = () => {
      r !== null && clearTimeout(r);
    }),
    s
  );
}
const Aa = ["sm", "md", "lg", "xl"],
  { passive: Gu } = mt,
  Ob = ls(
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
      setSizes: Qs,
      setDebounce: Qs,
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
            n === void 0 || Ke.is.mobile === !0
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
          let m = this.sizes;
          ((this.gt.xs = d >= m.sm),
            (this.gt.sm = d >= m.md),
            (this.gt.md = d >= m.lg),
            (this.gt.lg = d >= m.xl),
            (this.lt.sm = d < m.sm),
            (this.lt.md = d < m.md),
            (this.lt.lg = d < m.lg),
            (this.lt.xl = d < m.xl),
            (this.xs = this.lt.sm),
            (this.sm = this.gt.xs === !0 && this.lt.md === !0),
            (this.md = this.gt.sm === !0 && this.lt.lg === !0),
            (this.lg = this.gt.md === !0 && this.lt.xl === !0),
            (this.xl = this.gt.lg),
            (m =
              (this.xs === !0 && "xs") ||
              (this.sm === !0 && "sm") ||
              (this.md === !0 && "md") ||
              (this.lg === !0 && "lg") ||
              "xl"),
            m !== this.name &&
              (o === !0 &&
                (document.body.classList.remove(`screen--${this.name}`),
                document.body.classList.add(`screen--${m}`)),
              (this.name = m)));
        };
        let a,
          l = {},
          c = 16;
        ((this.setSizes = (f) => {
          Aa.forEach((d) => {
            f[d] !== void 0 && (l[d] = f[d]);
          });
        }),
          (this.setDebounce = (f) => {
            c = f;
          }));
        const u = () => {
          const f = getComputedStyle(document.body);
          (f.getPropertyValue("--q-size-sm") &&
            Aa.forEach((d) => {
              this.sizes[d] = parseInt(f.getPropertyValue(`--q-size-${d}`), 10);
            }),
            (this.setSizes = (d) => {
              (Aa.forEach((h) => {
                d[h] && (this.sizes[h] = d[h]);
              }),
                this.__update(!0));
            }),
            (this.setDebounce = (d) => {
              (a !== void 0 && r.removeEventListener("resize", a, Gu),
                (a = d > 0 ? Kg(this.__update, d) : this.__update),
                r.addEventListener("resize", a, Gu));
            }),
            this.setDebounce(c),
            Object.keys(l).length !== 0
              ? (this.setSizes(l), (l = void 0))
              : this.__update(),
            o === !0 &&
              this.name === "xs" &&
              document.body.classList.add("screen--xs"));
        };
        er.value === !0 ? t.push(u) : u();
      },
    },
  ),
  Qe = ls(
    {
      isActive: !1,
      mode: !1,
    },
    {
      __media: void 0,
      set(e) {
        ((Qe.mode = e),
          e === "auto"
            ? (Qe.__media === void 0 &&
                ((Qe.__media = window.matchMedia(
                  "(prefers-color-scheme: dark)",
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
            `body--${e === !0 ? "light" : "dark"}`,
          ),
          document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`));
      },
      toggle() {
        Qe.set(Qe.isActive === !1);
      },
      install({ $q: e, ssrContext: t }) {
        const n = e.config.dark;
        ((e.dark = this),
          this.__installed !== !0 && this.set(n !== void 0 ? n : !1));
      },
    },
  );
function Lb(e, t, n = document.body) {
  if (typeof e != "string")
    throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
let Gg = !1;
function xb(e) {
  Gg = e.isComposing === !0;
}
function Jg(e) {
  return (
    Gg === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
  );
}
function Xs(e, t) {
  return Jg(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function Yg(e) {
  if (e.ios === !0) return "ios";
  if (e.android === !0) return "android";
}
function Mb({ is: e, has: t, within: n }, r) {
  const s = [
    e.desktop === !0 ? "desktop" : "mobile",
    `${t.touch === !1 ? "no-" : ""}touch`,
  ];
  if (e.mobile === !0) {
    const i = Yg(e);
    i !== void 0 && s.push("platform-" + i);
  }
  if (e.nativeMobile === !0) {
    const i = e.nativeMobileWrapper;
    (s.push(i),
      s.push("native-mobile"),
      e.ios === !0 &&
        (r[i] === void 0 || r[i].iosStatusBarPadding !== !1) &&
        s.push("q-ios-padding"));
  } else e.electron === !0 ? s.push("electron") : e.bex === !0 && s.push("bex");
  return (n.iframe === !0 && s.push("within-iframe"), s);
}
function Db() {
  const { is: e } = Ke,
    t = document.body.className,
    n = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
    if (e.desktop === !0)
      (n.delete("mobile"),
        n.delete("platform-ios"),
        n.delete("platform-android"),
        n.add("desktop"));
    else if (e.mobile === !0) {
      (n.delete("desktop"),
        n.add("mobile"),
        n.delete("platform-ios"),
        n.delete("platform-android"));
      const s = Yg(e);
      s !== void 0 && n.add(`platform-${s}`);
    }
  }
  (Ke.has.touch === !0 && (n.delete("no-touch"), n.add("touch")),
    Ke.within.iframe === !0 && n.add("within-iframe"));
  const r = Array.from(n).join(" ");
  t !== r && (document.body.className = r);
}
function Fb(e) {
  for (const t in e) Lb(t, e[t]);
}
const $b = {
    install(e) {
      if (this.__installed !== !0) {
        if (er.value === !0) Db();
        else {
          const { $q: t } = e;
          t.config.brand !== void 0 && Fb(t.config.brand);
          const n = Mb(Ke, t.config);
          document.body.classList.add.apply(document.body.classList, n);
        }
        (Ke.is.ios === !0 && document.body.addEventListener("touchstart", Qs),
          window.addEventListener("keydown", xb, !0));
      }
    },
  },
  Qg = () => !0;
function Ub(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function Bb(e) {
  return (
    e.startsWith("#") === !0 && (e = e.substring(1)),
    e.startsWith("/") === !1 && (e = "/" + e),
    e.endsWith("/") === !0 && (e = e.substring(0, e.length - 1)),
    "#" + e
  );
}
function Vb(e) {
  if (e.backButtonExit === !1) return () => !1;
  if (e.backButtonExit === "*") return Qg;
  const t = ["#/"];
  return (
    Array.isArray(e.backButtonExit) === !0 &&
      t.push(...e.backButtonExit.filter(Ub).map(Bb)),
    () => t.includes(window.location.hash)
  );
}
const Sl = {
    __history: [],
    add: Qs,
    remove: Qs,
    install({ $q: e }) {
      if (this.__installed === !0) return;
      const { cordova: t, capacitor: n } = Ke.is;
      if (t !== !0 && n !== !0) return;
      const r = e.config[t === !0 ? "cordova" : "capacitor"];
      if (
        r?.backButton === !1 ||
        (n === !0 &&
          (window.Capacitor === void 0 ||
            window.Capacitor.Plugins.App === void 0))
      )
        return;
      ((this.add = (o) => {
        (o.condition === void 0 && (o.condition = Qg), this.__history.push(o));
      }),
        (this.remove = (o) => {
          const a = this.__history.indexOf(o);
          a >= 0 && this.__history.splice(a, 1);
        }));
      const s = Vb(
          Object.assign(
            {
              backButtonExit: !0,
            },
            r,
          ),
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
  Ju = {
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
        "_",
      ),
      daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      months:
        "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_",
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
function Yu() {
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
            : t[0].toUpperCase() + t.slice(1).toLowerCase(),
      )
      .join("-");
}
const qn = ls(
    {
      __qLang: {},
    },
    {
      getLocale: Yu,
      set(e = Ju, t) {
        const n = {
          ...e,
          rtl: e.rtl === !0,
          getLocale: Yu,
        };
        {
          if (
            ((n.set = qn.set),
            qn.__langConfig === void 0 || qn.__langConfig.noHtmlAttrs !== !0)
          ) {
            const r = document.documentElement;
            (r.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"),
              r.setAttribute("lang", n.isoName));
          }
          Object.assign(qn.__qLang, n);
        }
      },
      install({ $q: e, lang: t, ssrContext: n }) {
        ((e.lang = qn.__qLang),
          (qn.__langConfig = e.config.lang),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : ((this.props = new Proxy(this.__qLang, {
                get() {
                  return Reflect.get(...arguments);
                },
                ownKeys(r) {
                  return Reflect.ownKeys(r).filter(
                    (s) => s !== "set" && s !== "getLocale",
                  );
                },
              })),
              this.set(t || Ju)));
      },
    },
  ),
  Wb = {
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
  wo = ls(
    {
      iconMapFn: null,
      __qIconSet: {},
    },
    {
      set(e, t) {
        const n = {
          ...e,
        };
        ((n.set = wo.set), Object.assign(wo.__qIconSet, n));
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        (e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__qIconSet),
          as(
            e,
            "iconMapFn",
            () => this.iconMapFn,
            (r) => {
              this.iconMapFn = r;
            },
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
              this.set(t || Wb)));
      },
    },
  ),
  jb = "_q_",
  Y1 = "_q_s_",
  Q1 = "_q_l_",
  X1 = "_q_pc_",
  qb = "_q_fo_",
  Z1 = "_q_tabs_";
function eR() {}
const Eo = {};
let Xg = !1;
function Hb() {
  Xg = !0;
}
function Pa(e, t) {
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
      for (r = n; r-- !== 0; ) if (Pa(e[r], t[r]) !== !0) return !1;
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
        if (Pa(r.value[1], t.get(r.value[0])) !== !0) return !1;
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
      if (Pa(e[i], t[i]) !== !0) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function yt(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== !0;
}
function tR(e) {
  return typeof e == "number" && isFinite(e);
}
const Qu = [El, $b, Qe, Ob, Sl, qn, wo];
function Ec(e, t) {
  const n = Hg(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: r, ...s } = t._context;
  return (Object.assign(n._context, s), n);
}
function Xu(e, t) {
  t.forEach((n) => {
    (n.install(e), (n.__installed = !0));
  });
}
function zb(e, t, n) {
  ((e.config.globalProperties.$q = n.$q),
    e.provide(jb, n.$q),
    Xu(n, Qu),
    t.components !== void 0 &&
      Object.values(t.components).forEach((r) => {
        yt(r) === !0 && r.name !== void 0 && e.component(r.name, r);
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((r) => {
        yt(r) === !0 && r.name !== void 0 && e.directive(r.name, r);
      }),
    t.plugins !== void 0 &&
      Xu(
        n,
        Object.values(t.plugins).filter(
          (r) => typeof r.install == "function" && Qu.includes(r) === !1,
        ),
      ),
    er.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        (n.onSSRHydrated.forEach((r) => {
          r();
        }),
          (n.$q.onSSRHydrated = () => {}));
      }));
}
const Kb = function (e, t = {}) {
    const n = {
      version: "2.18.6",
    };
    (Xg === !1
      ? (t.config !== void 0 && Object.assign(Eo, t.config),
        (n.config = {
          ...Eo,
        }),
        Hb())
      : (n.config = t.config || {}),
      zb(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: [],
      }));
  },
  Gb = {
    name: "Quasar",
    version: "2.18.6",
    install: Kb,
    lang: qn,
    iconSet: wo,
  };
const Fr = typeof document < "u";
function Zg(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Jb(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && Zg(e.default))
  );
}
const we = Object.assign;
function Na(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Gt(s) ? s.map(e) : e(s);
  }
  return n;
}
const Fs = () => {},
  Gt = Array.isArray;
function Zu(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
let De = (function (e) {
  return (
    (e[(e.MATCHER_NOT_FOUND = 1)] = "MATCHER_NOT_FOUND"),
    (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = "NAVIGATION_GUARD_REDIRECT"),
    (e[(e.NAVIGATION_ABORTED = 4)] = "NAVIGATION_ABORTED"),
    (e[(e.NAVIGATION_CANCELLED = 8)] = "NAVIGATION_CANCELLED"),
    (e[(e.NAVIGATION_DUPLICATED = 16)] = "NAVIGATION_DUPLICATED"),
    e
  );
})({});
const em = Symbol("");
(De.MATCHER_NOT_FOUND + "",
  De.NAVIGATION_GUARD_REDIRECT + "",
  De.NAVIGATION_ABORTED + "",
  De.NAVIGATION_CANCELLED + "",
  De.NAVIGATION_DUPLICATED + "");
function Qr(e, t) {
  return we(
    new Error(),
    {
      type: e,
      [em]: !0,
    },
    t,
  );
}
function dn(e, t) {
  return e instanceof Error && em in e && (t == null || !!(e.type & t));
}
const Yb = ["params", "query", "hash"];
function Qb(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of Yb) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Xb = Symbol(""),
  ef = Symbol(""),
  Zo = Symbol(""),
  Sc = Symbol(""),
  Cl = Symbol("");
function nR() {
  return ht(Zo);
}
function Zb(e) {
  return ht(Sc);
}
const tm = /#/g,
  ew = /&/g,
  tw = /\//g,
  nw = /=/g,
  rw = /\?/g,
  nm = /\+/g,
  sw = /%5B/g,
  iw = /%5D/g,
  rm = /%5E/g,
  ow = /%60/g,
  sm = /%7B/g,
  aw = /%7C/g,
  im = /%7D/g,
  lw = /%20/g;
function Cc(e) {
  return e == null
    ? ""
    : encodeURI("" + e)
        .replace(aw, "|")
        .replace(sw, "[")
        .replace(iw, "]");
}
function cw(e) {
  return Cc(e).replace(sm, "{").replace(im, "}").replace(rm, "^");
}
function Il(e) {
  return Cc(e)
    .replace(nm, "%2B")
    .replace(lw, "+")
    .replace(tm, "%23")
    .replace(ew, "%26")
    .replace(ow, "`")
    .replace(sm, "{")
    .replace(im, "}")
    .replace(rm, "^");
}
function uw(e) {
  return Il(e).replace(nw, "%3D");
}
function fw(e) {
  return Cc(e).replace(tm, "%23").replace(rw, "%3F");
}
function dw(e) {
  return fw(e).replace(tw, "%2F");
}
function Zs(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const hw = /\/$/,
  gw = (e) => e.replace(hw, "");
function Ra(e, t, n = "/") {
  let r,
    s = {},
    i = "",
    o = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    (l = a >= 0 && l > a ? -1 : l),
    l >= 0 &&
      ((r = t.slice(0, l)),
      (i = t.slice(l, a > 0 ? a : t.length)),
      (s = e(i.slice(1)))),
    a >= 0 && ((r = r || t.slice(0, a)), (o = t.slice(a, t.length))),
    (r = yw(r ?? t, n)),
    {
      fullPath: r + i + o,
      path: r,
      query: s,
      hash: Zs(o),
    }
  );
}
function mw(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function tf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function pw(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Xr(t.matched[r], n.matched[s]) &&
    om(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Xr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function om(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!vw(e[n], t[n])) return !1;
  return !0;
}
function vw(e, t) {
  return Gt(e)
    ? nf(e, t)
    : Gt(t)
      ? nf(t, e)
      : (e && e.valueOf()) === (t && t.valueOf());
}
function nf(e, t) {
  return Gt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function yw(e, t) {
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
const Fn = {
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
let Tl = (function (e) {
    return ((e.pop = "pop"), (e.push = "push"), e);
  })({}),
  Oa = (function (e) {
    return ((e.back = "back"), (e.forward = "forward"), (e.unknown = ""), e);
  })({});
function _w(e) {
  if (!e)
    if (Fr) {
      const t = document.querySelector("base");
      ((e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, "")));
    } else e = "/";
  return (e[0] !== "/" && e[0] !== "#" && (e = "/" + e), gw(e));
}
const bw = /^[^#]+#/;
function ww(e, t) {
  return e.replace(bw, "#") + t;
}
function Ew(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const ea = () => ({
  left: window.scrollX,
  top: window.scrollY,
});
function Sw(e) {
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
    t = Ew(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      );
}
function rf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const kl = new Map();
function Cw(e, t) {
  kl.set(e, t);
}
function Iw(e) {
  const t = kl.get(e);
  return (kl.delete(e), t);
}
function Tw(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function am(e) {
  return typeof e == "string" || typeof e == "symbol";
}
function kw(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const s = n[r].replace(nm, " "),
      i = s.indexOf("="),
      o = Zs(i < 0 ? s : s.slice(0, i)),
      a = i < 0 ? null : Zs(s.slice(i + 1));
    if (o in t) {
      let l = t[o];
      (Gt(l) || (l = t[o] = [l]), l.push(a));
    } else t[o] = a;
  }
  return t;
}
function sf(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = uw(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Gt(r) ? r.map((s) => s && Il(s)) : [r && Il(r)]).forEach((s) => {
      s !== void 0 &&
        ((t += (t.length ? "&" : "") + n), s != null && (t += "=" + s));
    });
  }
  return t;
}
function Aw(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Gt(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
          ? r
          : "" + r);
  }
  return t;
}
function ps() {
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
function Hn(e, t, n, r, s, i = (o) => o()) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((a, l) => {
      const c = (d) => {
          d === !1
            ? l(
                Qr(De.NAVIGATION_ABORTED, {
                  from: n,
                  to: t,
                }),
              )
            : d instanceof Error
              ? l(d)
              : Tw(d)
                ? l(
                    Qr(De.NAVIGATION_GUARD_REDIRECT, {
                      from: t,
                      to: d,
                    }),
                  )
                : (o &&
                    r.enterCallbacks[s] === o &&
                    typeof d == "function" &&
                    o.push(d),
                  a());
        },
        u = i(() => e.call(r && r.instances[s], t, n, c));
      let f = Promise.resolve(u);
      (e.length < 3 && (f = f.then(c)), f.catch((d) => l(d)));
    });
}
function La(e, t, n, r, s = (i) => i()) {
  const i = [];
  for (const o of e)
    for (const a in o.components) {
      let l = o.components[a];
      if (!(t !== "beforeRouteEnter" && !o.instances[a]))
        if (Zg(l)) {
          const c = (l.__vccOpts || l)[t];
          c && i.push(Hn(c, n, r, o, a, s));
        } else {
          let c = l();
          i.push(() =>
            c.then((u) => {
              if (!u)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${o.path}"`,
                );
              const f = Jb(u) ? u.default : u;
              ((o.mods[a] = u), (o.components[a] = f));
              const d = (f.__vccOpts || f)[t];
              return d && Hn(d, n, r, o, a, s)();
            }),
          );
        }
    }
  return i;
}
function Pw(e, t) {
  const n = [],
    r = [],
    s = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < i; o++) {
    const a = t.matched[o];
    a && (e.matched.find((c) => Xr(c, a)) ? r.push(a) : n.push(a));
    const l = e.matched[o];
    l && (t.matched.find((c) => Xr(c, l)) || s.push(l));
  }
  return [n, r, s];
}
let Nw = () => location.protocol + "//" + location.host;
function lm(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let o = s.includes(e.slice(i)) ? e.slice(i).length : 1,
      a = s.slice(o);
    return (a[0] !== "/" && (a = "/" + a), tf(a, ""));
  }
  return tf(n, e) + r + s;
}
function Rw(e, t, n, r) {
  let s = [],
    i = [],
    o = null;
  const a = ({ state: d }) => {
    const h = lm(e, location),
      m = n.value,
      E = t.value;
    let C = 0;
    if (d) {
      if (((n.value = h), (t.value = d), o && o === m)) {
        o = null;
        return;
      }
      C = E ? d.position - E.position : 0;
    } else r(h);
    s.forEach((v) => {
      v(n.value, m, {
        delta: C,
        type: Tl.pop,
        direction: C ? (C > 0 ? Oa.forward : Oa.back) : Oa.unknown,
      });
    });
  };
  function l() {
    o = n.value;
  }
  function c(d) {
    s.push(d);
    const h = () => {
      const m = s.indexOf(d);
      m > -1 && s.splice(m, 1);
    };
    return (i.push(h), h);
  }
  function u() {
    if (document.visibilityState === "hidden") {
      const { history: d } = window;
      if (!d.state) return;
      d.replaceState(
        we({}, d.state, {
          scroll: ea(),
        }),
        "",
      );
    }
  }
  function f() {
    for (const d of i) d();
    ((i = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("pagehide", u),
      document.removeEventListener("visibilitychange", u));
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("pagehide", u),
    document.addEventListener("visibilitychange", u),
    {
      pauseListeners: l,
      listen: c,
      destroy: f,
    }
  );
}
function of(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? ea() : null,
  };
}
function Ow(e) {
  const { history: t, location: n } = window,
    r = {
      value: lm(e, n),
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
      !0,
    );
  function i(l, c, u) {
    const f = e.indexOf("#"),
      d =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l
          : Nw() + e + l;
    try {
      (t[u ? "replaceState" : "pushState"](c, "", d), (s.value = c));
    } catch (h) {
      (console.error(h), n[u ? "replace" : "assign"](d));
    }
  }
  function o(l, c) {
    (i(
      l,
      we({}, t.state, of(s.value.back, l, s.value.forward, !0), c, {
        position: s.value.position,
      }),
      !0,
    ),
      (r.value = l));
  }
  function a(l, c) {
    const u = we({}, s.value, t.state, {
      forward: l,
      scroll: ea(),
    });
    (i(u.current, u, !0),
      i(
        l,
        we(
          {},
          of(r.value, l, null),
          {
            position: u.position + 1,
          },
          c,
        ),
        !1,
      ),
      (r.value = l));
  }
  return {
    location: r,
    state: s,
    push: a,
    replace: o,
  };
}
function Lw(e) {
  e = _w(e);
  const t = Ow(e),
    n = Rw(e, t.state, t.location, t.replace);
  function r(i, o = !0) {
    (o || n.pauseListeners(), history.go(i));
  }
  const s = we(
    {
      location: "",
      base: e,
      go: r,
      createHref: ww.bind(null, e),
    },
    t,
    n,
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
let gr = (function (e) {
  return (
    (e[(e.Static = 0)] = "Static"),
    (e[(e.Param = 1)] = "Param"),
    (e[(e.Group = 2)] = "Group"),
    e
  );
})({});
var ze = (function (e) {
  return (
    (e[(e.Static = 0)] = "Static"),
    (e[(e.Param = 1)] = "Param"),
    (e[(e.ParamRegExp = 2)] = "ParamRegExp"),
    (e[(e.ParamRegExpEnd = 3)] = "ParamRegExpEnd"),
    (e[(e.EscapeNext = 4)] = "EscapeNext"),
    e
  );
})(ze || {});
const xw = {
    type: gr.Static,
    value: "",
  },
  Mw = /[a-zA-Z0-9_]/;
function Dw(e) {
  if (!e) return [[]];
  if (e === "/") return [[xw]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`);
  }
  let n = ze.Static,
    r = n;
  const s = [];
  let i;
  function o() {
    (i && s.push(i), (i = []));
  }
  let a = 0,
    l,
    c = "",
    u = "";
  function f() {
    c &&
      (n === ze.Static
        ? i.push({
            type: gr.Static,
            value: c,
          })
        : n === ze.Param || n === ze.ParamRegExp || n === ze.ParamRegExpEnd
          ? (i.length > 1 &&
              (l === "*" || l === "+") &&
              t(
                `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`,
              ),
            i.push({
              type: gr.Param,
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
    if (((l = e[a++]), l === "\\" && n !== ze.ParamRegExp)) {
      ((r = n), (n = ze.EscapeNext));
      continue;
    }
    switch (n) {
      case ze.Static:
        l === "/" ? (c && f(), o()) : l === ":" ? (f(), (n = ze.Param)) : d();
        break;
      case ze.EscapeNext:
        (d(), (n = r));
        break;
      case ze.Param:
        l === "("
          ? (n = ze.ParamRegExp)
          : Mw.test(l)
            ? d()
            : (f(),
              (n = ze.Static),
              l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case ze.ParamRegExp:
        l === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + l)
            : (n = ze.ParamRegExpEnd)
          : (u += l);
        break;
      case ze.ParamRegExpEnd:
        (f(),
          (n = ze.Static),
          l !== "*" && l !== "?" && l !== "+" && a--,
          (u = ""));
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return (
    n === ze.ParamRegExp && t(`Unfinished custom RegExp for param "${c}"`),
    f(),
    o(),
    s
  );
}
const af = "[^/]+?",
  Fw = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0,
  };
var ut = (function (e) {
  return (
    (e[(e._multiplier = 10)] = "_multiplier"),
    (e[(e.Root = 90)] = "Root"),
    (e[(e.Segment = 40)] = "Segment"),
    (e[(e.SubSegment = 30)] = "SubSegment"),
    (e[(e.Static = 40)] = "Static"),
    (e[(e.Dynamic = 20)] = "Dynamic"),
    (e[(e.BonusCustomRegExp = 10)] = "BonusCustomRegExp"),
    (e[(e.BonusWildcard = -50)] = "BonusWildcard"),
    (e[(e.BonusRepeatable = -20)] = "BonusRepeatable"),
    (e[(e.BonusOptional = -8)] = "BonusOptional"),
    (e[(e.BonusStrict = 0.7000000000000001)] = "BonusStrict"),
    (e[(e.BonusCaseSensitive = 0.25)] = "BonusCaseSensitive"),
    e
  );
})(ut || {});
const $w = /[.+*?^${}()[\]/\\]/g;
function Uw(e, t) {
  const n = we({}, Fw, t),
    r = [];
  let s = n.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const u = c.length ? [] : [ut.Root];
    n.strict && !c.length && (s += "/");
    for (let f = 0; f < c.length; f++) {
      const d = c[f];
      let h = ut.Segment + (n.sensitive ? ut.BonusCaseSensitive : 0);
      if (d.type === gr.Static)
        (f || (s += "/"), (s += d.value.replace($w, "\\$&")), (h += ut.Static));
      else if (d.type === gr.Param) {
        const { value: m, repeatable: E, optional: C, regexp: v } = d;
        i.push({
          name: m,
          repeatable: E,
          optional: C,
        });
        const g = v || af;
        if (g !== af) {
          h += ut.BonusCustomRegExp;
          try {
            new RegExp(`(${g})`);
          } catch (_) {
            throw new Error(
              `Invalid custom RegExp for param "${m}" (${g}): ` + _.message,
            );
          }
        }
        let b = E ? `((?:${g})(?:/(?:${g}))*)` : `(${g})`;
        (f || (b = C && c.length < 2 ? `(?:/${b})` : "/" + b),
          C && (b += "?"),
          (s += b),
          (h += ut.Dynamic),
          C && (h += ut.BonusOptional),
          E && (h += ut.BonusRepeatable),
          g === ".*" && (h += ut.BonusWildcard));
      }
      u.push(h);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += ut.BonusStrict;
  }
  (n.strict || (s += "/?"),
    n.end ? (s += "$") : n.strict && !s.endsWith("/") && (s += "(?:/|$)"));
  const o = new RegExp(s, n.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(o),
      f = {};
    if (!u) return null;
    for (let d = 1; d < u.length; d++) {
      const h = u[d] || "",
        m = i[d - 1];
      f[m.name] = h && m.repeatable ? h.split("/") : h;
    }
    return f;
  }
  function l(c) {
    let u = "",
      f = !1;
    for (const d of e) {
      ((!f || !u.endsWith("/")) && (u += "/"), (f = !1));
      for (const h of d)
        if (h.type === gr.Static) u += h.value;
        else if (h.type === gr.Param) {
          const { value: m, repeatable: E, optional: C } = h,
            v = m in c ? c[m] : "";
          if (Gt(v) && !E)
            throw new Error(
              `Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const g = Gt(v) ? v.join("/") : v;
          if (!g)
            if (C)
              d.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${m}"`);
          u += g;
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
function Bw(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === ut.Static + ut.Segment
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === ut.Static + ut.Segment
        ? 1
        : -1
      : 0;
}
function cm(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const i = Bw(r[n], s[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (lf(r)) return 1;
    if (lf(s)) return -1;
  }
  return s.length - r.length;
}
function lf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Vw = {
  strict: !1,
  end: !0,
  sensitive: !1,
};
function Ww(e, t, n) {
  const r = Uw(Dw(e.path), n),
    s = we(r, {
      record: e,
      parent: t,
      children: [],
      alias: [],
    });
  return (t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s);
}
function jw(e, t) {
  const n = [],
    r = new Map();
  t = Zu(Vw, t);
  function s(f) {
    return r.get(f);
  }
  function i(f, d, h) {
    const m = !h,
      E = uf(f);
    E.aliasOf = h && h.record;
    const C = Zu(t, f),
      v = [E];
    if ("alias" in f) {
      const _ = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const T of _)
        v.push(
          uf(
            we({}, E, {
              components: h ? h.record.components : E.components,
              path: T,
              aliasOf: h ? h.record : E,
            }),
          ),
        );
    }
    let g, b;
    for (const _ of v) {
      const { path: T } = _;
      if (d && T[0] !== "/") {
        const R = d.record.path,
          P = R[R.length - 1] === "/" ? "" : "/";
        _.path = d.record.path + (T && P + T);
      }
      if (
        ((g = Ww(_, d, C)),
        h
          ? h.alias.push(g)
          : ((b = b || g),
            b !== g && b.alias.push(g),
            m && f.name && !ff(g) && o(f.name)),
        um(g) && l(g),
        E.children)
      ) {
        const R = E.children;
        for (let P = 0; P < R.length; P++) i(R[P], g, h && h.children[P]);
      }
      h = h || g;
    }
    return b
      ? () => {
          o(b);
        }
      : Fs;
  }
  function o(f) {
    if (am(f)) {
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
    const d = zw(f, n);
    (n.splice(d, 0, f), f.record.name && !ff(f) && r.set(f.record.name, f));
  }
  function c(f, d) {
    let h,
      m = {},
      E,
      C;
    if ("name" in f && f.name) {
      if (((h = r.get(f.name)), !h))
        throw Qr(De.MATCHER_NOT_FOUND, {
          location: f,
        });
      ((C = h.record.name),
        (m = we(
          cf(
            d.params,
            h.keys
              .filter((b) => !b.optional)
              .concat(h.parent ? h.parent.keys.filter((b) => b.optional) : [])
              .map((b) => b.name),
          ),
          f.params &&
            cf(
              f.params,
              h.keys.map((b) => b.name),
            ),
        )),
        (E = h.stringify(m)));
    } else if (f.path != null)
      ((E = f.path),
        (h = n.find((b) => b.re.test(E))),
        h && ((m = h.parse(E)), (C = h.record.name)));
    else {
      if (((h = d.name ? r.get(d.name) : n.find((b) => b.re.test(d.path))), !h))
        throw Qr(De.MATCHER_NOT_FOUND, {
          location: f,
          currentLocation: d,
        });
      ((C = h.record.name),
        (m = we({}, d.params, f.params)),
        (E = h.stringify(m)));
    }
    const v = [];
    let g = h;
    for (; g; ) (v.unshift(g.record), (g = g.parent));
    return {
      name: C,
      path: E,
      params: m,
      matched: v,
      meta: Hw(v),
    };
  }
  e.forEach((f) => i(f));
  function u() {
    ((n.length = 0), r.clear());
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
function cf(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function uf(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: qw(e),
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
function qw(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function ff(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Hw(e) {
  return e.reduce((t, n) => we(t, n.meta), {});
}
function zw(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const i = (n + r) >> 1;
    cm(e, t[i]) < 0 ? (r = i) : (n = i + 1);
  }
  const s = Kw(e);
  return (s && (r = t.lastIndexOf(s, r - 1)), r);
}
function Kw(e) {
  let t = e;
  for (; (t = t.parent); ) if (um(t) && cm(e, t) === 0) return t;
}
function um({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function df(e) {
  const t = ht(Zo),
    n = ht(Sc),
    r = D(() => {
      const l = sn(e.to);
      return t.resolve(l);
    }),
    s = D(() => {
      const { matched: l } = r.value,
        { length: c } = l,
        u = l[c - 1],
        f = n.matched;
      if (!u || !f.length) return -1;
      const d = f.findIndex(Xr.bind(null, u));
      if (d > -1) return d;
      const h = hf(l[c - 2]);
      return c > 1 && hf(u) === h && f[f.length - 1].path !== h
        ? f.findIndex(Xr.bind(null, l[c - 2]))
        : d;
    }),
    i = D(() => s.value > -1 && Xw(n.params, r.value.params)),
    o = D(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        om(n.params, r.value.params),
    );
  function a(l = {}) {
    if (Qw(l)) {
      const c = t[sn(e.replace) ? "replace" : "push"](sn(e.to)).catch(Fs);
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
    href: D(() => r.value.href),
    isActive: i,
    isExactActive: o,
    navigate: a,
  };
}
function Gw(e) {
  return e.length === 1 ? e[0] : e;
}
const Jw = tr({
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
    useLink: df,
    setup(e, { slots: t }) {
      const n = Cr(df(e)),
        { options: r } = ht(Zo),
        s = D(() => ({
          [gf(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [gf(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && Gw(t.default(n));
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
              i,
            );
      };
    },
  }),
  Yw = Jw;
function Qw(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return (e.preventDefault && e.preventDefault(), !0);
  }
}
function Xw(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (
      !Gt(s) ||
      s.length !== r.length ||
      r.some((i, o) => i.valueOf() !== s[o].valueOf())
    )
      return !1;
  }
  return !0;
}
function hf(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const gf = (e, t, n) => e ?? t ?? n,
  Zw = tr({
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
      const r = ht(Cl),
        s = D(() => e.route || r.value),
        i = ht(ef, 0),
        o = D(() => {
          let c = sn(i);
          const { matched: u } = s.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        a = D(() => s.value.matched[o.value]);
      (Wi(
        ef,
        D(() => o.value + 1),
      ),
        Wi(Xb, a),
        Wi(Cl, s));
      const l = he();
      return (
        me(
          () => [l.value, a.value, e.name],
          ([c, u, f], [d, h, m]) => {
            (u &&
              ((u.instances[f] = c),
              h &&
                h !== u &&
                c &&
                c === d &&
                (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                u.updateGuards.size || (u.updateGuards = h.updateGuards))),
              c &&
                u &&
                (!h || !Xr(u, h) || !d) &&
                (u.enterCallbacks[f] || []).forEach((E) => E(c)));
          },
          {
            flush: "post",
          },
        ),
        () => {
          const c = s.value,
            u = e.name,
            f = a.value,
            d = f && f.components[u];
          if (!d)
            return mf(n.default, {
              Component: d,
              route: c,
            });
          const h = f.props[u],
            m = h
              ? h === !0
                ? c.params
                : typeof h == "function"
                  ? h(c)
                  : h
              : null,
            C = U(
              d,
              we({}, m, t, {
                onVnodeUnmounted: (v) => {
                  v.component.isUnmounted && (f.instances[u] = null);
                },
                ref: l,
              }),
            );
          return (
            mf(n.default, {
              Component: C,
              route: c,
            }) || C
          );
        }
      );
    },
  });
function mf(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const eE = Zw;
function tE(e) {
  const t = jw(e.routes, e),
    n = e.parseQuery || kw,
    r = e.stringifyQuery || sf,
    s = e.history,
    i = ps(),
    o = ps(),
    a = ps(),
    l = St(Fn);
  let c = Fn;
  Fr &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = Na.bind(null, (M) => "" + M),
    f = Na.bind(null, dw),
    d = Na.bind(null, Zs);
  function h(M, Q) {
    let X, ne;
    return (
      am(M) ? ((X = t.getRecordMatcher(M)), (ne = Q)) : (ne = M),
      t.addRoute(ne, X)
    );
  }
  function m(M) {
    const Q = t.getRecordMatcher(M);
    Q && t.removeRoute(Q);
  }
  function E() {
    return t.getRoutes().map((M) => M.record);
  }
  function C(M) {
    return !!t.getRecordMatcher(M);
  }
  function v(M, Q) {
    if (((Q = we({}, Q || l.value)), typeof M == "string")) {
      const N = Ra(n, M, Q.path),
        j = t.resolve(
          {
            path: N.path,
          },
          Q,
        ),
        z = s.createHref(N.fullPath);
      return we(N, j, {
        params: d(j.params),
        hash: Zs(N.hash),
        redirectedFrom: void 0,
        href: z,
      });
    }
    let X;
    if (M.path != null)
      X = we({}, M, {
        path: Ra(n, M.path, Q.path).path,
      });
    else {
      const N = we({}, M.params);
      for (const j in N) N[j] == null && delete N[j];
      ((X = we({}, M, {
        params: f(N),
      })),
        (Q.params = f(Q.params)));
    }
    const ne = t.resolve(X, Q),
      ge = M.hash || "";
    ne.params = u(d(ne.params));
    const w = mw(
        r,
        we({}, M, {
          hash: cw(ge),
          path: ne.path,
        }),
      ),
      S = s.createHref(w);
    return we(
      {
        fullPath: w,
        hash: ge,
        query: r === sf ? Aw(M.query) : M.query || {},
      },
      ne,
      {
        redirectedFrom: void 0,
        href: S,
      },
    );
  }
  function g(M) {
    return typeof M == "string" ? Ra(n, M, l.value.path) : we({}, M);
  }
  function b(M, Q) {
    if (c !== M)
      return Qr(De.NAVIGATION_CANCELLED, {
        from: Q,
        to: M,
      });
  }
  function _(M) {
    return P(M);
  }
  function T(M) {
    return _(
      we(g(M), {
        replace: !0,
      }),
    );
  }
  function R(M, Q) {
    const X = M.matched[M.matched.length - 1];
    if (X && X.redirect) {
      const { redirect: ne } = X;
      let ge = typeof ne == "function" ? ne(M, Q) : ne;
      return (
        typeof ge == "string" &&
          ((ge =
            ge.includes("?") || ge.includes("#")
              ? (ge = g(ge))
              : {
                  path: ge,
                }),
          (ge.params = {})),
        we(
          {
            query: M.query,
            hash: M.hash,
            params: ge.path != null ? {} : M.params,
          },
          ge,
        )
      );
    }
  }
  function P(M, Q) {
    const X = (c = v(M)),
      ne = l.value,
      ge = M.state,
      w = M.force,
      S = M.replace === !0,
      N = R(X, ne);
    if (N)
      return P(
        we(g(N), {
          state: typeof N == "object" ? we({}, ge, N.state) : ge,
          force: w,
          replace: S,
        }),
        Q || X,
      );
    const j = X;
    j.redirectedFrom = Q;
    let z;
    return (
      !w &&
        pw(r, ne, X) &&
        ((z = Qr(De.NAVIGATION_DUPLICATED, {
          to: j,
          from: ne,
        })),
        ce(ne, ne, !0, !1)),
      (z ? Promise.resolve(z) : L(j, ne))
        .catch((H) =>
          dn(H)
            ? dn(H, De.NAVIGATION_GUARD_REDIRECT)
              ? H
              : Ie(H)
            : W(H, j, ne),
        )
        .then((H) => {
          if (H) {
            if (dn(H, De.NAVIGATION_GUARD_REDIRECT))
              return P(
                we(
                  {
                    replace: S,
                  },
                  g(H.to),
                  {
                    state:
                      typeof H.to == "object" ? we({}, ge, H.to.state) : ge,
                    force: w,
                  },
                ),
                Q || j,
              );
          } else H = I(j, ne, !0, S, ge);
          return (x(j, ne, H), H);
        })
    );
  }
  function q(M, Q) {
    const X = b(M, Q);
    return X ? Promise.reject(X) : Promise.resolve();
  }
  function B(M) {
    const Q = Te.values().next().value;
    return Q && typeof Q.runWithContext == "function"
      ? Q.runWithContext(M)
      : M();
  }
  function L(M, Q) {
    let X;
    const [ne, ge, w] = Pw(M, Q);
    X = La(ne.reverse(), "beforeRouteLeave", M, Q);
    for (const N of ne)
      N.leaveGuards.forEach((j) => {
        X.push(Hn(j, M, Q));
      });
    const S = q.bind(null, M, Q);
    return (
      X.push(S),
      ie(X)
        .then(() => {
          X = [];
          for (const N of i.list()) X.push(Hn(N, M, Q));
          return (X.push(S), ie(X));
        })
        .then(() => {
          X = La(ge, "beforeRouteUpdate", M, Q);
          for (const N of ge)
            N.updateGuards.forEach((j) => {
              X.push(Hn(j, M, Q));
            });
          return (X.push(S), ie(X));
        })
        .then(() => {
          X = [];
          for (const N of w)
            if (N.beforeEnter)
              if (Gt(N.beforeEnter))
                for (const j of N.beforeEnter) X.push(Hn(j, M, Q));
              else X.push(Hn(N.beforeEnter, M, Q));
          return (X.push(S), ie(X));
        })
        .then(
          () => (
            M.matched.forEach((N) => (N.enterCallbacks = {})),
            (X = La(w, "beforeRouteEnter", M, Q, B)),
            X.push(S),
            ie(X)
          ),
        )
        .then(() => {
          X = [];
          for (const N of o.list()) X.push(Hn(N, M, Q));
          return (X.push(S), ie(X));
        })
        .catch((N) => (dn(N, De.NAVIGATION_CANCELLED) ? N : Promise.reject(N)))
    );
  }
  function x(M, Q, X) {
    a.list().forEach((ne) => B(() => ne(M, Q, X)));
  }
  function I(M, Q, X, ne, ge) {
    const w = b(M, Q);
    if (w) return w;
    const S = Q === Fn,
      N = Fr ? history.state : {};
    (X &&
      (ne || S
        ? s.replace(
            M.fullPath,
            we(
              {
                scroll: S && N && N.scroll,
              },
              ge,
            ),
          )
        : s.push(M.fullPath, ge)),
      (l.value = M),
      ce(M, Q, X, S),
      Ie());
  }
  let V;
  function $() {
    V ||
      (V = s.listen((M, Q, X) => {
        if (!Oe.listening) return;
        const ne = v(M),
          ge = R(ne, Oe.currentRoute.value);
        if (ge) {
          P(
            we(ge, {
              replace: !0,
              force: !0,
            }),
            ne,
          ).catch(Fs);
          return;
        }
        c = ne;
        const w = l.value;
        (Fr && Cw(rf(w.fullPath, X.delta), ea()),
          L(ne, w)
            .catch((S) =>
              dn(S, De.NAVIGATION_ABORTED | De.NAVIGATION_CANCELLED)
                ? S
                : dn(S, De.NAVIGATION_GUARD_REDIRECT)
                  ? (P(
                      we(g(S.to), {
                        force: !0,
                      }),
                      ne,
                    )
                      .then((N) => {
                        dn(
                          N,
                          De.NAVIGATION_ABORTED | De.NAVIGATION_DUPLICATED,
                        ) &&
                          !X.delta &&
                          X.type === Tl.pop &&
                          s.go(-1, !1);
                      })
                      .catch(Fs),
                    Promise.reject())
                  : (X.delta && s.go(-X.delta, !1), W(S, ne, w)),
            )
            .then((S) => {
              ((S = S || I(ne, w, !1)),
                S &&
                  (X.delta && !dn(S, De.NAVIGATION_CANCELLED)
                    ? s.go(-X.delta, !1)
                    : X.type === Tl.pop &&
                      dn(S, De.NAVIGATION_ABORTED | De.NAVIGATION_DUPLICATED) &&
                      s.go(-1, !1)),
                x(ne, w, S));
            })
            .catch(Fs));
      }));
  }
  let Y = ps(),
    ee = ps(),
    J;
  function W(M, Q, X) {
    Ie(M);
    const ne = ee.list();
    return (
      ne.length ? ne.forEach((ge) => ge(M, Q, X)) : console.error(M),
      Promise.reject(M)
    );
  }
  function se() {
    return J && l.value !== Fn
      ? Promise.resolve()
      : new Promise((M, Q) => {
          Y.add([M, Q]);
        });
  }
  function Ie(M) {
    return (
      J ||
        ((J = !M),
        $(),
        Y.list().forEach(([Q, X]) => (M ? X(M) : Q())),
        Y.reset()),
      M
    );
  }
  function ce(M, Q, X, ne) {
    const { scrollBehavior: ge } = e;
    if (!Fr || !ge) return Promise.resolve();
    const w =
      (!X && Iw(rf(M.fullPath, 0))) ||
      ((ne || !X) && history.state && history.state.scroll) ||
      null;
    return dt()
      .then(() => ge(M, Q, w))
      .then((S) => S && Sw(S))
      .catch((S) => W(S, M, Q));
  }
  const G = (M) => s.go(M);
  let de;
  const Te = new Set(),
    Oe = {
      currentRoute: l,
      listening: !0,
      addRoute: h,
      removeRoute: m,
      clearRoutes: t.clearRoutes,
      hasRoute: C,
      getRoutes: E,
      resolve: v,
      options: e,
      push: _,
      replace: T,
      go: G,
      back: () => G(-1),
      forward: () => G(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: ee.add,
      isReady: se,
      install(M) {
        (M.component("RouterLink", Yw),
          M.component("RouterView", eE),
          (M.config.globalProperties.$router = Oe),
          Object.defineProperty(M.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => sn(l),
          }),
          Fr &&
            !de &&
            l.value === Fn &&
            ((de = !0), _(s.location).catch((ne) => {})));
        const Q = {};
        for (const ne in Fn)
          Object.defineProperty(Q, ne, {
            get: () => l.value[ne],
            enumerable: !0,
          });
        (M.provide(Zo, Oe), M.provide(Sc, qh(Q)), M.provide(Cl, l));
        const X = M.unmount;
        (Te.add(M),
          (M.unmount = function () {
            (Te.delete(M),
              Te.size < 1 &&
                ((c = Fn),
                V && V(),
                (V = null),
                (l.value = Fn),
                (de = !1),
                (J = !1)),
              X());
          }));
      },
    };
  function ie(M) {
    return M.reduce((Q, X) => Q.then(() => B(X)), Promise.resolve());
  }
  return Oe;
}
function nE(e, t) {
  typeof console < "u" &&
    (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const So = typeof window < "u",
  nr = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  rE = (e, t, n) =>
    sE({
      l: e,
      k: t,
      s: n,
    }),
  sE = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029")
      .replace(/\u0027/g, "\\u0027"),
  je = (e) => typeof e == "number" && isFinite(e),
  iE = (e) => Ic(e) === "[object Date]",
  Co = (e) => Ic(e) === "[object RegExp]",
  ta = (e) => ve(e) && Object.keys(e).length === 0,
  rt = Object.assign,
  oE = Object.create,
  Ae = (e = null) => oE(e);
function pf(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/\//g, "&#x2F;")
    .replace(/=/g, "&#x3D;");
}
function vf(e) {
  return e
    .replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function aE(e) {
  return (
    (e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, i) => `${s}="${vf(i)}"`)),
    (e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, i) => `${s}='${vf(i)}'`)),
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
const lE = Object.prototype.hasOwnProperty;
function Bt(e, t) {
  return lE.call(e, t);
}
const Ue = Array.isArray,
  Le = (e) => typeof e == "function",
  te = (e) => typeof e == "string",
  xe = (e) => typeof e == "boolean",
  _e = (e) => e !== null && typeof e == "object",
  cE = (e) => _e(e) && Le(e.then) && Le(e.catch),
  fm = Object.prototype.toString,
  Ic = (e) => fm.call(e),
  ve = (e) => Ic(e) === "[object Object]",
  uE = (e) =>
    e == null
      ? ""
      : Ue(e) || (ve(e) && e.toString === fm)
        ? JSON.stringify(e, null, 2)
        : String(e);
function Tc(e, t = "") {
  return e.reduce((n, r, s) => (s === 0 ? n + r : n + t + r), "");
}
const Ni = (e) => !_e(e) || Ue(e);
function Ki(e, t) {
  if (Ni(e) || Ni(t)) throw new Error("Invalid value");
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
        (_e(r[i]) && !_e(s[i]) && (s[i] = Array.isArray(r[i]) ? [] : Ae()),
        Ni(s[i]) || Ni(r[i])
          ? (s[i] = r[i])
          : n.push({
              src: r[i],
              des: s[i],
            }));
    });
  }
}
function fE(e, t, n) {
  return {
    line: e,
    column: t,
    offset: n,
  };
}
function Al(e, t, n) {
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
  dE = 17;
function na(e, t, n = {}) {
  const { domain: r, messages: s, args: i } = n,
    o = e,
    a = new SyntaxError(String(o));
  return ((a.code = e), t && (a.location = t), (a.domain = r), a);
}
function hE(e) {
  throw e;
}
const Qt = " ",
  gE = "\r",
  it = `
`,
  mE = "\u2028",
  pE = "\u2029";
function vE(e) {
  const t = e;
  let n = 0,
    r = 1,
    s = 1,
    i = 0;
  const o = (P) => t[P] === gE && t[P + 1] === it,
    a = (P) => t[P] === it,
    l = (P) => t[P] === pE,
    c = (P) => t[P] === mE,
    u = (P) => o(P) || a(P) || l(P) || c(P),
    f = () => n,
    d = () => r,
    h = () => s,
    m = () => i,
    E = (P) => (o(P) || l(P) || c(P) ? it : t[P]),
    C = () => E(n),
    v = () => E(n + i);
  function g() {
    return ((i = 0), u(n) && (r++, (s = 0)), o(n) && n++, n++, s++, t[n]);
  }
  function b() {
    return (o(n + i) && i++, i++, t[n + i]);
  }
  function _() {
    ((n = 0), (r = 1), (s = 1), (i = 0));
  }
  function T(P = 0) {
    i = P;
  }
  function R() {
    const P = n + i;
    for (; P !== n; ) g();
    i = 0;
  }
  return {
    index: f,
    line: d,
    column: h,
    peekOffset: m,
    charAt: E,
    currentChar: C,
    currentPeek: v,
    next: g,
    peek: b,
    reset: _,
    resetPeek: T,
    skipToPeek: R,
  };
}
const hn = void 0,
  yE = ".",
  yf = "'",
  _E = "tokenizer";
function bE(e, t = {}) {
  const n = t.location !== !1,
    r = vE(e),
    s = () => r.index(),
    i = () => fE(r.line(), r.column(), r.index()),
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
  function f(p, y, k, ...O) {
    const Z = c();
    if (((y.column += k), (y.offset += k), u)) {
      const K = n ? Al(Z.startLoc, y) : null,
        A = na(p, K, {
          domain: _E,
          args: O,
        });
      u(A);
    }
  }
  function d(p, y, k) {
    ((p.endLoc = i()), (p.currentType = y));
    const O = {
      type: y,
    };
    return (
      n && (O.loc = Al(p.startLoc, p.endLoc)),
      k != null && (O.value = k),
      O
    );
  }
  const h = (p) => d(p, 13);
  function m(p, y) {
    return p.currentChar() === y
      ? (p.next(), y)
      : (f(Ee.EXPECTED_TOKEN, i(), 0, y), "");
  }
  function E(p) {
    let y = "";
    for (; p.currentPeek() === Qt || p.currentPeek() === it; )
      ((y += p.currentPeek()), p.peek());
    return y;
  }
  function C(p) {
    const y = E(p);
    return (p.skipToPeek(), y);
  }
  function v(p) {
    if (p === hn) return !1;
    const y = p.charCodeAt(0);
    return (y >= 97 && y <= 122) || (y >= 65 && y <= 90) || y === 95;
  }
  function g(p) {
    if (p === hn) return !1;
    const y = p.charCodeAt(0);
    return y >= 48 && y <= 57;
  }
  function b(p, y) {
    const { currentType: k } = y;
    if (k !== 2) return !1;
    E(p);
    const O = v(p.currentPeek());
    return (p.resetPeek(), O);
  }
  function _(p, y) {
    const { currentType: k } = y;
    if (k !== 2) return !1;
    E(p);
    const O = p.currentPeek() === "-" ? p.peek() : p.currentPeek(),
      Z = g(O);
    return (p.resetPeek(), Z);
  }
  function T(p, y) {
    const { currentType: k } = y;
    if (k !== 2) return !1;
    E(p);
    const O = p.currentPeek() === yf;
    return (p.resetPeek(), O);
  }
  function R(p, y) {
    const { currentType: k } = y;
    if (k !== 7) return !1;
    E(p);
    const O = p.currentPeek() === ".";
    return (p.resetPeek(), O);
  }
  function P(p, y) {
    const { currentType: k } = y;
    if (k !== 8) return !1;
    E(p);
    const O = v(p.currentPeek());
    return (p.resetPeek(), O);
  }
  function q(p, y) {
    const { currentType: k } = y;
    if (!(k === 7 || k === 11)) return !1;
    E(p);
    const O = p.currentPeek() === ":";
    return (p.resetPeek(), O);
  }
  function B(p, y) {
    const { currentType: k } = y;
    if (k !== 9) return !1;
    const O = () => {
        const K = p.currentPeek();
        return K === "{"
          ? v(p.peek())
          : K === "@" || K === "|" || K === ":" || K === "." || K === Qt || !K
            ? !1
            : K === it
              ? (p.peek(), O())
              : x(p, !1);
      },
      Z = O();
    return (p.resetPeek(), Z);
  }
  function L(p) {
    E(p);
    const y = p.currentPeek() === "|";
    return (p.resetPeek(), y);
  }
  function x(p, y = !0) {
    const k = (Z = !1, K = "") => {
        const A = p.currentPeek();
        return A === "{" || A === "@" || !A
          ? Z
          : A === "|"
            ? !(K === Qt || K === it)
            : A === Qt
              ? (p.peek(), k(!0, Qt))
              : A === it
                ? (p.peek(), k(!0, it))
                : !0;
      },
      O = k();
    return (y && p.resetPeek(), O);
  }
  function I(p, y) {
    const k = p.currentChar();
    return k === hn ? hn : y(k) ? (p.next(), k) : null;
  }
  function V(p) {
    const y = p.charCodeAt(0);
    return (
      (y >= 97 && y <= 122) ||
      (y >= 65 && y <= 90) ||
      (y >= 48 && y <= 57) ||
      y === 95 ||
      y === 36
    );
  }
  function $(p) {
    return I(p, V);
  }
  function Y(p) {
    const y = p.charCodeAt(0);
    return (
      (y >= 97 && y <= 122) ||
      (y >= 65 && y <= 90) ||
      (y >= 48 && y <= 57) ||
      y === 95 ||
      y === 36 ||
      y === 45
    );
  }
  function ee(p) {
    return I(p, Y);
  }
  function J(p) {
    const y = p.charCodeAt(0);
    return y >= 48 && y <= 57;
  }
  function W(p) {
    return I(p, J);
  }
  function se(p) {
    const y = p.charCodeAt(0);
    return (
      (y >= 48 && y <= 57) || (y >= 65 && y <= 70) || (y >= 97 && y <= 102)
    );
  }
  function Ie(p) {
    return I(p, se);
  }
  function ce(p) {
    let y = "",
      k = "";
    for (; (y = W(p)); ) k += y;
    return k;
  }
  function G(p) {
    let y = "";
    for (;;) {
      const k = p.currentChar();
      if (k === "{" || k === "}" || k === "@" || k === "|" || !k) break;
      if (k === Qt || k === it)
        if (x(p)) ((y += k), p.next());
        else {
          if (L(p)) break;
          ((y += k), p.next());
        }
      else ((y += k), p.next());
    }
    return y;
  }
  function de(p) {
    C(p);
    let y = "",
      k = "";
    for (; (y = ee(p)); ) k += y;
    const O = p.currentChar();
    if (O && O !== "}" && O !== hn && O !== Qt && O !== it && O !== "　") {
      const Z = ne(p);
      return (f(Ee.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, k + Z), k + Z);
    }
    return (
      p.currentChar() === hn && f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0),
      k
    );
  }
  function Te(p) {
    C(p);
    let y = "";
    return (
      p.currentChar() === "-" ? (p.next(), (y += `-${ce(p)}`)) : (y += ce(p)),
      p.currentChar() === hn && f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0),
      y
    );
  }
  function Oe(p) {
    return p !== yf && p !== it;
  }
  function ie(p) {
    (C(p), m(p, "'"));
    let y = "",
      k = "";
    for (; (y = I(p, Oe)); ) y === "\\" ? (k += M(p)) : (k += y);
    const O = p.currentChar();
    return O === it || O === hn
      ? (f(Ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0),
        O === it && (p.next(), m(p, "'")),
        k)
      : (m(p, "'"), k);
  }
  function M(p) {
    const y = p.currentChar();
    switch (y) {
      case "\\":
      case "'":
        return (p.next(), `\\${y}`);
      case "u":
        return Q(p, y, 4);
      case "U":
        return Q(p, y, 6);
      default:
        return (f(Ee.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, y), "");
    }
  }
  function Q(p, y, k) {
    m(p, y);
    let O = "";
    for (let Z = 0; Z < k; Z++) {
      const K = Ie(p);
      if (!K) {
        f(
          Ee.INVALID_UNICODE_ESCAPE_SEQUENCE,
          i(),
          0,
          `\\${y}${O}${p.currentChar()}`,
        );
        break;
      }
      O += K;
    }
    return `\\${y}${O}`;
  }
  function X(p) {
    return p !== "{" && p !== "}" && p !== Qt && p !== it;
  }
  function ne(p) {
    C(p);
    let y = "",
      k = "";
    for (; (y = I(p, X)); ) k += y;
    return k;
  }
  function ge(p) {
    let y = "",
      k = "";
    for (; (y = $(p)); ) k += y;
    return k;
  }
  function w(p) {
    const y = (k) => {
      const O = p.currentChar();
      return O === "{" ||
        O === "@" ||
        O === "|" ||
        O === "(" ||
        O === ")" ||
        !O ||
        O === Qt
        ? k
        : ((k += O), p.next(), y(k));
    };
    return y("");
  }
  function S(p) {
    C(p);
    const y = m(p, "|");
    return (C(p), y);
  }
  function N(p, y) {
    let k = null;
    switch (p.currentChar()) {
      case "{":
        return (
          y.braceNest >= 1 && f(Ee.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0),
          p.next(),
          (k = d(y, 2, "{")),
          C(p),
          y.braceNest++,
          k
        );
      case "}":
        return (
          y.braceNest > 0 &&
            y.currentType === 2 &&
            f(Ee.EMPTY_PLACEHOLDER, i(), 0),
          p.next(),
          (k = d(y, 3, "}")),
          y.braceNest--,
          y.braceNest > 0 && C(p),
          y.inLinked && y.braceNest === 0 && (y.inLinked = !1),
          k
        );
      case "@":
        return (
          y.braceNest > 0 && f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0),
          (k = j(p, y) || h(y)),
          (y.braceNest = 0),
          k
        );
      default: {
        let Z = !0,
          K = !0,
          A = !0;
        if (L(p))
          return (
            y.braceNest > 0 && f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0),
            (k = d(y, 1, S(p))),
            (y.braceNest = 0),
            (y.inLinked = !1),
            k
          );
        if (
          y.braceNest > 0 &&
          (y.currentType === 4 || y.currentType === 5 || y.currentType === 6)
        )
          return (
            f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0),
            (y.braceNest = 0),
            z(p, y)
          );
        if ((Z = b(p, y))) return ((k = d(y, 4, de(p))), C(p), k);
        if ((K = _(p, y))) return ((k = d(y, 5, Te(p))), C(p), k);
        if ((A = T(p, y))) return ((k = d(y, 6, ie(p))), C(p), k);
        if (!Z && !K && !A)
          return (
            (k = d(y, 12, ne(p))),
            f(Ee.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, k.value),
            C(p),
            k
          );
        break;
      }
    }
    return k;
  }
  function j(p, y) {
    const { currentType: k } = y;
    let O = null;
    const Z = p.currentChar();
    switch (
      ((k === 7 || k === 8 || k === 11 || k === 9) &&
        (Z === it || Z === Qt) &&
        f(Ee.INVALID_LINKED_FORMAT, i(), 0),
      Z)
    ) {
      case "@":
        return (p.next(), (O = d(y, 7, "@")), (y.inLinked = !0), O);
      case ".":
        return (C(p), p.next(), d(y, 8, "."));
      case ":":
        return (C(p), p.next(), d(y, 9, ":"));
      default:
        return L(p)
          ? ((O = d(y, 1, S(p))), (y.braceNest = 0), (y.inLinked = !1), O)
          : R(p, y) || q(p, y)
            ? (C(p), j(p, y))
            : P(p, y)
              ? (C(p), d(y, 11, ge(p)))
              : B(p, y)
                ? (C(p), Z === "{" ? N(p, y) || O : d(y, 10, w(p)))
                : (k === 7 && f(Ee.INVALID_LINKED_FORMAT, i(), 0),
                  (y.braceNest = 0),
                  (y.inLinked = !1),
                  z(p, y));
    }
  }
  function z(p, y) {
    let k = {
      type: 13,
    };
    if (y.braceNest > 0) return N(p, y) || h(y);
    if (y.inLinked) return j(p, y) || h(y);
    switch (p.currentChar()) {
      case "{":
        return N(p, y) || h(y);
      case "}":
        return (f(Ee.UNBALANCED_CLOSING_BRACE, i(), 0), p.next(), d(y, 3, "}"));
      case "@":
        return j(p, y) || h(y);
      default: {
        if (L(p))
          return ((k = d(y, 1, S(p))), (y.braceNest = 0), (y.inLinked = !1), k);
        if (x(p)) return d(y, 0, G(p));
        break;
      }
    }
    return k;
  }
  function H() {
    const { currentType: p, offset: y, startLoc: k, endLoc: O } = l;
    return (
      (l.lastType = p),
      (l.lastOffset = y),
      (l.lastStartLoc = k),
      (l.lastEndLoc = O),
      (l.offset = s()),
      (l.startLoc = i()),
      r.currentChar() === hn ? d(l, 13) : z(r, l)
    );
  }
  return {
    nextToken: H,
    currentOffset: s,
    currentPosition: i,
    context: c,
  };
}
const wE = "parser",
  EE = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function SE(e, t, n) {
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
function CE(e = {}) {
  const t = e.location !== !1,
    { onError: n } = e;
  function r(v, g, b, _, ...T) {
    const R = v.currentPosition();
    if (((R.offset += _), (R.column += _), n)) {
      const P = t ? Al(b, R) : null,
        q = na(g, P, {
          domain: wE,
          args: T,
        });
      n(q);
    }
  }
  function s(v, g, b) {
    const _ = {
      type: v,
    };
    return (
      t &&
        ((_.start = g),
        (_.end = g),
        (_.loc = {
          start: b,
          end: b,
        })),
      _
    );
  }
  function i(v, g, b, _) {
    t && ((v.end = g), v.loc && (v.loc.end = b));
  }
  function o(v, g) {
    const b = v.context(),
      _ = s(3, b.offset, b.startLoc);
    return ((_.value = g), i(_, v.currentOffset(), v.currentPosition()), _);
  }
  function a(v, g) {
    const b = v.context(),
      { lastOffset: _, lastStartLoc: T } = b,
      R = s(5, _, T);
    return (
      (R.index = parseInt(g, 10)),
      v.nextToken(),
      i(R, v.currentOffset(), v.currentPosition()),
      R
    );
  }
  function l(v, g) {
    const b = v.context(),
      { lastOffset: _, lastStartLoc: T } = b,
      R = s(4, _, T);
    return (
      (R.key = g),
      v.nextToken(),
      i(R, v.currentOffset(), v.currentPosition()),
      R
    );
  }
  function c(v, g) {
    const b = v.context(),
      { lastOffset: _, lastStartLoc: T } = b,
      R = s(9, _, T);
    return (
      (R.value = g.replace(EE, SE)),
      v.nextToken(),
      i(R, v.currentOffset(), v.currentPosition()),
      R
    );
  }
  function u(v) {
    const g = v.nextToken(),
      b = v.context(),
      { lastOffset: _, lastStartLoc: T } = b,
      R = s(8, _, T);
    return g.type !== 11
      ? (r(v, Ee.UNEXPECTED_EMPTY_LINKED_MODIFIER, b.lastStartLoc, 0),
        (R.value = ""),
        i(R, _, T),
        {
          nextConsumeToken: g,
          node: R,
        })
      : (g.value == null &&
          r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Xt(g)),
        (R.value = g.value || ""),
        i(R, v.currentOffset(), v.currentPosition()),
        {
          node: R,
        });
  }
  function f(v, g) {
    const b = v.context(),
      _ = s(7, b.offset, b.startLoc);
    return ((_.value = g), i(_, v.currentOffset(), v.currentPosition()), _);
  }
  function d(v) {
    const g = v.context(),
      b = s(6, g.offset, g.startLoc);
    let _ = v.nextToken();
    if (_.type === 8) {
      const T = u(v);
      ((b.modifier = T.node), (_ = T.nextConsumeToken || v.nextToken()));
    }
    switch (
      (_.type !== 9 &&
        r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Xt(_)),
      (_ = v.nextToken()),
      _.type === 2 && (_ = v.nextToken()),
      _.type)
    ) {
      case 10:
        (_.value == null &&
          r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Xt(_)),
          (b.key = f(v, _.value || "")));
        break;
      case 4:
        (_.value == null &&
          r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Xt(_)),
          (b.key = l(v, _.value || "")));
        break;
      case 5:
        (_.value == null &&
          r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Xt(_)),
          (b.key = a(v, _.value || "")));
        break;
      case 6:
        (_.value == null &&
          r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Xt(_)),
          (b.key = c(v, _.value || "")));
        break;
      default: {
        r(v, Ee.UNEXPECTED_EMPTY_LINKED_KEY, g.lastStartLoc, 0);
        const T = v.context(),
          R = s(7, T.offset, T.startLoc);
        return (
          (R.value = ""),
          i(R, T.offset, T.startLoc),
          (b.key = R),
          i(b, T.offset, T.startLoc),
          {
            nextConsumeToken: _,
            node: b,
          }
        );
      }
    }
    return (
      i(b, v.currentOffset(), v.currentPosition()),
      {
        node: b,
      }
    );
  }
  function h(v) {
    const g = v.context(),
      b = g.currentType === 1 ? v.currentOffset() : g.offset,
      _ = g.currentType === 1 ? g.endLoc : g.startLoc,
      T = s(2, b, _);
    T.items = [];
    let R = null;
    do {
      const B = R || v.nextToken();
      switch (((R = null), B.type)) {
        case 0:
          (B.value == null &&
            r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Xt(B)),
            T.items.push(o(v, B.value || "")));
          break;
        case 5:
          (B.value == null &&
            r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Xt(B)),
            T.items.push(a(v, B.value || "")));
          break;
        case 4:
          (B.value == null &&
            r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Xt(B)),
            T.items.push(l(v, B.value || "")));
          break;
        case 6:
          (B.value == null &&
            r(v, Ee.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Xt(B)),
            T.items.push(c(v, B.value || "")));
          break;
        case 7: {
          const L = d(v);
          (T.items.push(L.node), (R = L.nextConsumeToken || null));
          break;
        }
      }
    } while (g.currentType !== 13 && g.currentType !== 1);
    const P = g.currentType === 1 ? g.lastOffset : v.currentOffset(),
      q = g.currentType === 1 ? g.lastEndLoc : v.currentPosition();
    return (i(T, P, q), T);
  }
  function m(v, g, b, _) {
    const T = v.context();
    let R = _.items.length === 0;
    const P = s(1, g, b);
    ((P.cases = []), P.cases.push(_));
    do {
      const q = h(v);
      (R || (R = q.items.length === 0), P.cases.push(q));
    } while (T.currentType !== 13);
    return (
      R && r(v, Ee.MUST_HAVE_MESSAGES_IN_PLURAL, b, 0),
      i(P, v.currentOffset(), v.currentPosition()),
      P
    );
  }
  function E(v) {
    const g = v.context(),
      { offset: b, startLoc: _ } = g,
      T = h(v);
    return g.currentType === 13 ? T : m(v, b, _, T);
  }
  function C(v) {
    const g = bE(v, rt({}, e)),
      b = g.context(),
      _ = s(0, b.offset, b.startLoc);
    return (
      t && _.loc && (_.loc.source = v),
      (_.body = E(g)),
      e.onCacheKey && (_.cacheKey = e.onCacheKey(v)),
      b.currentType !== 13 &&
        r(
          g,
          Ee.UNEXPECTED_LEXICAL_ANALYSIS,
          b.lastStartLoc,
          0,
          v[b.offset] || "",
        ),
      i(_, g.currentOffset(), g.currentPosition()),
      _
    );
  }
  return {
    parse: C,
  };
}
function Xt(e) {
  if (e.type === 13) return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function IE(e, t = {}) {
  const n = {
    ast: e,
    helpers: new Set(),
  };
  return {
    context: () => n,
    helper: (i) => (n.helpers.add(i), i),
  };
}
function _f(e, t) {
  for (let n = 0; n < e.length; n++) kc(e[n], t);
}
function kc(e, t) {
  switch (e.type) {
    case 1:
      (_f(e.cases, t), t.helper("plural"));
      break;
    case 2:
      _f(e.items, t);
      break;
    case 6: {
      (kc(e.key, t), t.helper("linked"), t.helper("type"));
      break;
    }
    case 5:
      (t.helper("interpolate"), t.helper("list"));
      break;
    case 4:
      (t.helper("interpolate"), t.helper("named"));
      break;
  }
}
function TE(e, t = {}) {
  const n = IE(e);
  (n.helper("normalize"), e.body && kc(e.body, n));
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function kE(e) {
  const t = e.body;
  return (t.type === 2 ? bf(t) : t.cases.forEach((n) => bf(n)), e);
}
function bf(e) {
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
      e.static = Tc(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function $r(e) {
  switch (((e.t = e.type), e.type)) {
    case 0: {
      const t = e;
      ($r(t.body), (t.b = t.body), delete t.body);
      break;
    }
    case 1: {
      const t = e,
        n = t.cases;
      for (let r = 0; r < n.length; r++) $r(n[r]);
      ((t.c = n), delete t.cases);
      break;
    }
    case 2: {
      const t = e,
        n = t.items;
      for (let r = 0; r < n.length; r++) $r(n[r]);
      ((t.i = n),
        delete t.items,
        t.static && ((t.s = t.static), delete t.static));
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
      ($r(t.key),
        (t.k = t.key),
        delete t.key,
        t.modifier && ($r(t.modifier), (t.m = t.modifier), delete t.modifier));
      break;
    }
    case 5: {
      const t = e;
      ((t.i = t.index), delete t.index);
      break;
    }
    case 4: {
      const t = e;
      ((t.k = t.key), delete t.key);
      break;
    }
  }
  delete e.type;
}
function AE(e, t) {
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
  function l(E, C) {
    o.code += E;
  }
  function c(E, C = !0) {
    const v = C ? r : "";
    l(s ? v + "  ".repeat(E) : v);
  }
  function u(E = !0) {
    const C = ++o.indentLevel;
    E && c(C);
  }
  function f(E = !0) {
    const C = --o.indentLevel;
    E && c(C);
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
    helper: (E) => `_${E}`,
    needIndent: () => o.needIndent,
  };
}
function PE(e, t) {
  const { helper: n } = e;
  (e.push(`${n("linked")}(`),
    Zr(e, t.key),
    t.modifier
      ? (e.push(", "), Zr(e, t.modifier), e.push(", _type"))
      : e.push(", undefined, _type"),
    e.push(")"));
}
function NE(e, t) {
  const { helper: n, needIndent: r } = e;
  (e.push(`${n("normalize")}([`), e.indent(r()));
  const s = t.items.length;
  for (let i = 0; i < s && (Zr(e, t.items[i]), i !== s - 1); i++) e.push(", ");
  (e.deindent(r()), e.push("])"));
}
function RE(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    (e.push(`${n("plural")}([`), e.indent(r()));
    const s = t.cases.length;
    for (let i = 0; i < s && (Zr(e, t.cases[i]), i !== s - 1); i++)
      e.push(", ");
    (e.deindent(r()), e.push("])"));
  }
}
function OE(e, t) {
  t.body ? Zr(e, t.body) : e.push("null");
}
function Zr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      OE(e, t);
      break;
    case 1:
      RE(e, t);
      break;
    case 2:
      NE(e, t);
      break;
    case 6:
      PE(e, t);
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
const LE = (e, t = {}) => {
  const n = te(t.mode) ? t.mode : "normal",
    r = te(t.filename) ? t.filename : "message.intl";
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
    a = AE(e, {
      filename: r,
      breakLineCode: s,
      needIndent: i,
    });
  (a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    a.indent(i),
    o.length > 0 &&
      (a.push(
        `const { ${Tc(
          o.map((u) => `${u}: _${u}`),
          ", ",
        )} } = ctx`,
      ),
      a.newline()),
    a.push("return "),
    Zr(a, e),
    a.deindent(i),
    a.push("}"),
    delete e.helpers);
  const { code: l, map: c } = a.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0,
  };
};
function xE(e, t = {}) {
  const n = rt({}, t),
    r = !!n.jit,
    s = !!n.minify,
    i = n.optimize == null ? !0 : n.optimize,
    a = CE(n).parse(e);
  return r
    ? (i && kE(a),
      s && $r(a),
      {
        ast: a,
        code: "",
      })
    : (TE(a, n), LE(a, n));
}
function on(e) {
  return _e(e) && Ac(e) === 0 && (Bt(e, "b") || Bt(e, "body"));
}
const dm = ["b", "body"];
function ME(e) {
  return rr(e, dm);
}
const hm = ["c", "cases"];
function DE(e) {
  return rr(e, hm, []);
}
const gm = ["s", "static"];
function FE(e) {
  return rr(e, gm);
}
const mm = ["i", "items"];
function $E(e) {
  return rr(e, mm, []);
}
const pm = ["t", "type"];
function Ac(e) {
  return rr(e, pm);
}
const vm = ["v", "value"];
function Ri(e, t) {
  const n = rr(e, vm);
  if (n != null) return n;
  throw ei(t);
}
const ym = ["m", "modifier"];
function UE(e) {
  return rr(e, ym);
}
const _m = ["k", "key"];
function BE(e) {
  const t = rr(e, _m);
  if (t) return t;
  throw ei(6);
}
function rr(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (Bt(e, s) && e[s] != null) return e[s];
  }
  return n;
}
const bm = [...dm, ...hm, ...gm, ...mm, ..._m, ...ym, ...vm, ...pm];
function ei(e) {
  return new Error(`unhandled node type: ${e}`);
}
function xa(e) {
  return (n) => VE(n, e);
}
function VE(e, t) {
  const n = ME(t);
  if (n == null) throw ei(0);
  if (Ac(n) === 1) {
    const i = DE(n);
    return e.plural(i.reduce((o, a) => [...o, wf(e, a)], []));
  } else return wf(e, n);
}
function wf(e, t) {
  const n = FE(t);
  if (n != null) return e.type === "text" ? n : e.normalize([n]);
  {
    const r = $E(t).reduce((s, i) => [...s, Pl(e, i)], []);
    return e.normalize(r);
  }
}
function Pl(e, t) {
  const n = Ac(t);
  switch (n) {
    case 3:
      return Ri(t, n);
    case 9:
      return Ri(t, n);
    case 4: {
      const r = t;
      if (Bt(r, "k") && r.k) return e.interpolate(e.named(r.k));
      if (Bt(r, "key") && r.key) return e.interpolate(e.named(r.key));
      throw ei(n);
    }
    case 5: {
      const r = t;
      if (Bt(r, "i") && je(r.i)) return e.interpolate(e.list(r.i));
      if (Bt(r, "index") && je(r.index)) return e.interpolate(e.list(r.index));
      throw ei(n);
    }
    case 6: {
      const r = t,
        s = UE(r),
        i = BE(r);
      return e.linked(Pl(e, i), s ? Pl(e, s) : void 0, e.type);
    }
    case 7:
      return Ri(t, n);
    case 8:
      return Ri(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const WE = (e) => e;
let Oi = Ae();
function jE(e, t = {}) {
  let n = !1;
  const r = t.onError || hE;
  return (
    (t.onError = (s) => {
      ((n = !0), r(s));
    }),
    {
      ...xE(e, t),
      detectError: n,
    }
  );
}
function qE(e, t) {
  if (te(e)) {
    xe(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || WE)(e),
      s = Oi[r];
    if (s) return s;
    const { ast: i, detectError: o } = jE(e, {
        ...t,
        location: !1,
        jit: !0,
      }),
      a = xa(i);
    return o ? a : (Oi[r] = a);
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Oi[n];
      return r || (Oi[n] = xa(e));
    } else return xa(e);
  }
}
const _n = {
    INVALID_ARGUMENT: dE,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23,
  },
  HE = 24;
function bn(e) {
  return na(e, null, void 0);
}
function Pc(e, t) {
  return t.locale != null ? Ef(t.locale) : Ef(e.locale);
}
let Ma;
function Ef(e) {
  if (te(e)) return e;
  if (Le(e)) {
    if (e.resolvedOnce && Ma != null) return Ma;
    if (e.constructor.name === "Function") {
      const t = e();
      if (cE(t)) throw bn(_n.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return (Ma = t);
    } else throw bn(_n.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else throw bn(_n.NOT_SUPPORT_LOCALE_TYPE);
}
function zE(e, t, n) {
  return [
    ...new Set([
      n,
      ...(Ue(t) ? t : _e(t) ? Object.keys(t) : te(t) ? [t] : [n]),
    ]),
  ];
}
function wm(e, t, n) {
  const r = te(n) ? n : Io,
    s = e;
  s.__localeChainCache || (s.__localeChainCache = new Map());
  let i = s.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let o = [n];
    for (; Ue(o); ) o = Sf(i, o, t);
    const a = Ue(t) || !ve(t) ? t : t.default ? t.default : null;
    ((o = te(a) ? [a] : a),
      Ue(o) && Sf(i, o, !1),
      s.__localeChainCache.set(r, i));
  }
  return i;
}
function Sf(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && xe(r); s++) {
    const i = t[s];
    te(i) && (r = KE(e, t[s], n));
  }
  return r;
}
function KE(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const i = s.join("-");
    ((r = GE(e, i, n)), s.splice(-1, 1));
  } while (s.length && r === !0);
  return r;
}
function GE(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    (e.push(s), (Ue(n) || ve(n)) && n[s] && (r = n[s]));
  }
  return r;
}
const sr = [];
sr[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7],
};
sr[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7],
};
sr[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0],
};
sr[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1],
};
sr[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0],
};
sr[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0],
};
sr[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0],
};
const JE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function YE(e) {
  return JE.test(e);
}
function QE(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function XE(e) {
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
function ZE(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e))
    ? !1
    : YE(t)
      ? QE(t)
      : "*" + t;
}
function e0(e) {
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
  ((d[0] = () => {
    o === void 0 ? (o = a) : (o += a);
  }),
    (d[1] = () => {
      o !== void 0 && (t.push(o), (o = void 0));
    }),
    (d[2] = () => {
      (d[0](), s++);
    }),
    (d[3] = () => {
      if (s > 0) (s--, (r = 4), d[0]());
      else {
        if (((s = 0), o === void 0 || ((o = ZE(o)), o === !1))) return !1;
        d[1]();
      }
    }));
  function h() {
    const m = e[n + 1];
    if ((r === 5 && m === "'") || (r === 6 && m === '"'))
      return (n++, (a = "\\" + m), d[0](), !0);
  }
  for (; r !== null; )
    if ((n++, (i = e[n]), !(i === "\\" && h()))) {
      if (
        ((l = XE(i)),
        (f = sr[r]),
        (c = f[l] || f.l || 8),
        c === 8 ||
          ((r = c[0]),
          c[1] !== void 0 && ((u = d[c[1]]), u && ((a = i), u() === !1))))
      )
        return;
      if (r === 7) return t;
    }
}
const Cf = new Map();
function t0(e, t) {
  return _e(e) ? e[t] : null;
}
function n0(e, t) {
  if (!_e(e)) return null;
  let n = Cf.get(t);
  if ((n || ((n = e0(t)), n && Cf.set(t, n)), !n)) return null;
  const r = n.length;
  let s = e,
    i = 0;
  for (; i < r; ) {
    const o = n[i];
    if (bm.includes(o) && on(s)) return null;
    const a = s[o];
    if (a === void 0 || Le(s)) return null;
    ((s = a), i++);
  }
  return s;
}
const r0 = "11.2.8",
  ra = -1,
  Io = "en-US",
  If = "",
  Tf = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function s0() {
  return {
    upper: (e, t) =>
      t === "text" && te(e)
        ? e.toUpperCase()
        : t === "vnode" && _e(e) && "__v_isVNode" in e
          ? e.children.toUpperCase()
          : e,
    lower: (e, t) =>
      t === "text" && te(e)
        ? e.toLowerCase()
        : t === "vnode" && _e(e) && "__v_isVNode" in e
          ? e.children.toLowerCase()
          : e,
    capitalize: (e, t) =>
      t === "text" && te(e)
        ? Tf(e)
        : t === "vnode" && _e(e) && "__v_isVNode" in e
          ? Tf(e.children)
          : e,
  };
}
let Em;
function i0(e) {
  Em = e;
}
let Sm;
function o0(e) {
  Sm = e;
}
let Cm;
function a0(e) {
  Cm = e;
}
let Im = null;
const kf = (e) => {
    Im = e;
  },
  l0 = () => Im;
let Af = 0;
function c0(e = {}) {
  const t = Le(e.onWarn) ? e.onWarn : nE,
    n = te(e.version) ? e.version : r0,
    r = te(e.locale) || Le(e.locale) ? e.locale : Io,
    s = Le(r) ? Io : r,
    i =
      Ue(e.fallbackLocale) ||
      ve(e.fallbackLocale) ||
      te(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : s,
    o = ve(e.messages) ? e.messages : Da(s),
    a = ve(e.datetimeFormats) ? e.datetimeFormats : Da(s),
    l = ve(e.numberFormats) ? e.numberFormats : Da(s),
    c = rt(Ae(), e.modifiers, s0()),
    u = e.pluralRules || Ae(),
    f = Le(e.missing) ? e.missing : null,
    d = xe(e.missingWarn) || Co(e.missingWarn) ? e.missingWarn : !0,
    h = xe(e.fallbackWarn) || Co(e.fallbackWarn) ? e.fallbackWarn : !0,
    m = !!e.fallbackFormat,
    E = !!e.unresolving,
    C = Le(e.postTranslation) ? e.postTranslation : null,
    v = ve(e.processor) ? e.processor : null,
    g = xe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    b = !!e.escapeParameter,
    _ = Le(e.messageCompiler) ? e.messageCompiler : Em,
    T = Le(e.messageResolver) ? e.messageResolver : Sm || t0,
    R = Le(e.localeFallbacker) ? e.localeFallbacker : Cm || zE,
    P = _e(e.fallbackContext) ? e.fallbackContext : void 0,
    q = e,
    B = _e(q.__datetimeFormatters) ? q.__datetimeFormatters : new Map(),
    L = _e(q.__numberFormatters) ? q.__numberFormatters : new Map(),
    x = _e(q.__meta) ? q.__meta : {};
  Af++;
  const I = {
    version: n,
    cid: Af,
    locale: r,
    fallbackLocale: i,
    messages: o,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: d,
    fallbackWarn: h,
    fallbackFormat: m,
    unresolving: E,
    postTranslation: C,
    processor: v,
    warnHtmlMessage: g,
    escapeParameter: b,
    messageCompiler: _,
    messageResolver: T,
    localeFallbacker: R,
    fallbackContext: P,
    onWarn: t,
    __meta: x,
  };
  return (
    (I.datetimeFormats = a),
    (I.numberFormats = l),
    (I.__datetimeFormatters = B),
    (I.__numberFormatters = L),
    I
  );
}
const Da = (e) => ({
  [e]: Ae(),
});
function Nc(e, t, n, r, s) {
  const { missing: i, onWarn: o } = e;
  if (i !== null) {
    const a = i(e, n, t, s);
    return te(a) ? a : t;
  } else return t;
}
function vs(e, t, n) {
  const r = e;
  ((r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t));
}
function u0(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function f0(e, t) {
  const n = t.indexOf(e);
  if (n === -1) return !1;
  for (let r = n + 1; r < t.length; r++) if (u0(e, t[r])) return !0;
  return !1;
}
function Pf(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: i,
      localeFallbacker: o,
    } = e,
    { __datetimeFormatters: a } = e,
    [l, c, u, f] = Nl(...t),
    d = xe(u.missingWarn) ? u.missingWarn : e.missingWarn;
  xe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const h = !!u.part,
    m = Pc(e, u),
    E = o(e, s, m);
  if (!te(l) || l === "") return new Intl.DateTimeFormat(m, f).format(c);
  let C = {},
    v,
    g = null;
  const b = "datetime format";
  for (
    let R = 0;
    R < E.length && ((v = E[R]), (C = n[v] || {}), (g = C[l]), !ve(g));
    R++
  )
    Nc(e, l, v, d, b);
  if (!ve(g) || !te(v)) return r ? ra : l;
  let _ = `${v}__${l}`;
  ta(f) || (_ = `${_}__${JSON.stringify(f)}`);
  let T = a.get(_);
  return (
    T || ((T = new Intl.DateTimeFormat(v, rt({}, g, f))), a.set(_, T)),
    h ? T.formatToParts(c) : T.format(c)
  );
}
const Tm = [
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
function Nl(...e) {
  const [t, n, r, s] = e,
    i = Ae();
  let o = Ae(),
    a;
  if (te(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l) throw bn(_n.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3]
      ? l[3].trim().startsWith("T")
        ? `${l[1].trim()}${l[3].trim()}`
        : `${l[1].trim()}T${l[3].trim()}`
      : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString();
    } catch {
      throw bn(_n.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (iE(t)) {
    if (isNaN(t.getTime())) throw bn(_n.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (je(t)) a = t;
  else throw bn(_n.INVALID_ARGUMENT);
  return (
    te(n)
      ? (i.key = n)
      : ve(n) &&
        Object.keys(n).forEach((l) => {
          Tm.includes(l) ? (o[l] = n[l]) : (i[l] = n[l]);
        }),
    te(r) ? (i.locale = r) : ve(r) && (o = r),
    ve(s) && (o = s),
    [i.key || "", a, i, o]
  );
}
function Nf(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i);
  }
}
function Rf(e, ...t) {
  const {
      numberFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: i,
      localeFallbacker: o,
    } = e,
    { __numberFormatters: a } = e,
    [l, c, u, f] = Rl(...t),
    d = xe(u.missingWarn) ? u.missingWarn : e.missingWarn;
  xe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const h = !!u.part,
    m = Pc(e, u),
    E = o(e, s, m);
  if (!te(l) || l === "") return new Intl.NumberFormat(m, f).format(c);
  let C = {},
    v,
    g = null;
  const b = "number format";
  for (
    let R = 0;
    R < E.length && ((v = E[R]), (C = n[v] || {}), (g = C[l]), !ve(g));
    R++
  )
    Nc(e, l, v, d, b);
  if (!ve(g) || !te(v)) return r ? ra : l;
  let _ = `${v}__${l}`;
  ta(f) || (_ = `${_}__${JSON.stringify(f)}`);
  let T = a.get(_);
  return (
    T || ((T = new Intl.NumberFormat(v, rt({}, g, f))), a.set(_, T)),
    h ? T.formatToParts(c) : T.format(c)
  );
}
const km = [
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
function Rl(...e) {
  const [t, n, r, s] = e,
    i = Ae();
  let o = Ae();
  if (!je(t)) throw bn(_n.INVALID_ARGUMENT);
  const a = t;
  return (
    te(n)
      ? (i.key = n)
      : ve(n) &&
        Object.keys(n).forEach((l) => {
          km.includes(l) ? (o[l] = n[l]) : (i[l] = n[l]);
        }),
    te(r) ? (i.locale = r) : ve(r) && (o = r),
    ve(s) && (o = s),
    [i.key || "", a, i, o]
  );
}
function Of(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    r.__numberFormatters.has(i) && r.__numberFormatters.delete(i);
  }
}
const d0 = (e) => e,
  h0 = (e) => "",
  g0 = "text",
  m0 = (e) => (e.length === 0 ? "" : Tc(e)),
  p0 = uE;
function Lf(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function v0(e) {
  const t = je(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (je(e.named.count) || je(e.named.n))
    ? je(e.named.count)
      ? e.named.count
      : je(e.named.n)
        ? e.named.n
        : t
    : t;
}
function y0(e, t) {
  (t.count || (t.count = e), t.n || (t.n = e));
}
function _0(e = {}) {
  const t = e.locale,
    n = v0(e),
    r =
      _e(e.pluralRules) && te(t) && Le(e.pluralRules[t])
        ? e.pluralRules[t]
        : Lf,
    s = _e(e.pluralRules) && te(t) && Le(e.pluralRules[t]) ? Lf : void 0,
    i = (v) => v[r(n, v.length, s)],
    o = e.list || [],
    a = (v) => o[v],
    l = e.named || Ae();
  je(e.pluralIndex) && y0(n, l);
  const c = (v) => l[v];
  function u(v, g) {
    const b = Le(e.messages)
      ? e.messages(v, !!g)
      : _e(e.messages)
        ? e.messages[v]
        : !1;
    return b || (e.parent ? e.parent.message(v) : h0);
  }
  const f = (v) => (e.modifiers ? e.modifiers[v] : d0),
    d =
      ve(e.processor) && Le(e.processor.normalize) ? e.processor.normalize : m0,
    h =
      ve(e.processor) && Le(e.processor.interpolate)
        ? e.processor.interpolate
        : p0,
    m = ve(e.processor) && te(e.processor.type) ? e.processor.type : g0,
    C = {
      list: a,
      named: c,
      plural: i,
      linked: (v, ...g) => {
        const [b, _] = g;
        let T = "text",
          R = "";
        g.length === 1
          ? _e(b)
            ? ((R = b.modifier || R), (T = b.type || T))
            : te(b) && (R = b || R)
          : g.length === 2 && (te(b) && (R = b || R), te(_) && (T = _ || T));
        const P = u(v, !0)(C),
          q = T === "vnode" && Ue(P) && R ? P[0] : P;
        return R ? f(R)(q, T) : q;
      },
      message: u,
      type: m,
      interpolate: h,
      normalize: d,
      values: rt(Ae(), o, l),
    };
  return C;
}
const xf = () => "",
  Cn = (e) => Le(e);
function Mf(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: s,
      messageCompiler: i,
      fallbackLocale: o,
      messages: a,
    } = e,
    [l, c] = Ol(...t),
    u = xe(c.missingWarn) ? c.missingWarn : e.missingWarn,
    f = xe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn,
    d = xe(c.escapeParameter) ? c.escapeParameter : e.escapeParameter,
    h = !!c.resolvedMessage,
    m =
      te(c.default) || xe(c.default)
        ? xe(c.default)
          ? i
            ? l
            : () => l
          : c.default
        : n
          ? i
            ? l
            : () => l
          : null,
    E = n || (m != null && (te(m) || Le(m))),
    C = Pc(e, c);
  d && b0(c);
  let [v, g, b] = h ? [l, C, a[C] || Ae()] : Am(e, l, C, o, f, u),
    _ = v,
    T = l;
  if (
    (!h && !(te(_) || on(_) || Cn(_)) && E && ((_ = m), (T = _)),
    !h && (!(te(_) || on(_) || Cn(_)) || !te(g)))
  )
    return s ? ra : l;
  let R = !1;
  const P = () => {
      R = !0;
    },
    q = Cn(_) ? _ : Pm(e, l, g, _, T, P);
  if (R) return _;
  const B = S0(e, g, b, c),
    L = _0(B),
    x = w0(e, q, L);
  let I = r ? r(x, l) : x;
  return (d && te(I) && (I = aE(I)), I);
}
function b0(e) {
  Ue(e.list)
    ? (e.list = e.list.map((t) => (te(t) ? pf(t) : t)))
    : _e(e.named) &&
      Object.keys(e.named).forEach((t) => {
        te(e.named[t]) && (e.named[t] = pf(e.named[t]));
      });
}
function Am(e, t, n, r, s, i) {
  const { messages: o, onWarn: a, messageResolver: l, localeFallbacker: c } = e,
    u = c(e, r, n);
  let f = Ae(),
    d,
    h = null;
  const m = "translate";
  for (
    let E = 0;
    E < u.length &&
    ((d = u[E]),
    (f = o[d] || Ae()),
    (h = l(f, t)) === null && (h = f[t]),
    !(te(h) || on(h) || Cn(h)));
    E++
  )
    if (!f0(d, u)) {
      const C = Nc(e, t, d, i, m);
      C !== t && (h = C);
    }
  return [h, d, f];
}
function Pm(e, t, n, r, s, i) {
  const { messageCompiler: o, warnHtmlMessage: a } = e;
  if (Cn(r)) {
    const c = r;
    return ((c.locale = c.locale || n), (c.key = c.key || t), c);
  }
  if (o == null) {
    const c = () => r;
    return ((c.locale = n), (c.key = t), c);
  }
  const l = o(r, E0(e, n, s, r, a, i));
  return ((l.locale = n), (l.key = t), (l.source = r), l);
}
function w0(e, t, n) {
  return t(n);
}
function Ol(...e) {
  const [t, n, r] = e,
    s = Ae();
  if (!te(t) && !je(t) && !Cn(t) && !on(t)) throw bn(_n.INVALID_ARGUMENT);
  const i = je(t) ? String(t) : (Cn(t), t);
  return (
    je(n)
      ? (s.plural = n)
      : te(n)
        ? (s.default = n)
        : ve(n) && !ta(n)
          ? (s.named = n)
          : Ue(n) && (s.list = n),
    je(r) ? (s.plural = r) : te(r) ? (s.default = r) : ve(r) && rt(s, r),
    [i, s]
  );
}
function E0(e, t, n, r, s, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      throw (i && i(o), o);
    },
    onCacheKey: (o) => rE(t, n, o),
  };
}
function S0(e, t, n, r) {
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
      messages: (h, m) => {
        let E = o(n, h);
        if (E == null && (u || m)) {
          const [, , C] = Am(u || e, h, t, a, l, c);
          E = o(C, h);
        }
        if (te(E) || on(E)) {
          let C = !1;
          const g = Pm(e, h, t, E, h, () => {
            C = !0;
          });
          return C ? xf : g;
        } else return Cn(E) ? E : xf;
      },
    };
  return (
    e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    je(r.plural) && (d.pluralIndex = r.plural),
    d
  );
}
const C0 = "11.2.8",
  Ot = {
    UNEXPECTED_RETURN_TYPE: HE,
    INVALID_ARGUMENT: 25,
    MUST_BE_CALL_SETUP_TOP: 26,
    NOT_INSTALLED: 27,
    REQUIRED_VALUE: 28,
    INVALID_VALUE: 29,
    NOT_INSTALLED_WITH_PROVIDE: 31,
    UNEXPECTED_ERROR: 32,
  };
function Jt(e, ...t) {
  return na(e, null, void 0);
}
const Ll = nr("__translateVNode"),
  xl = nr("__datetimeParts"),
  Ml = nr("__numberParts"),
  I0 = nr("__setPluralRules"),
  T0 = nr("__injectWithOption"),
  Dl = nr("__dispose");
function ti(e) {
  if (!_e(e) || on(e)) return e;
  for (const t in e)
    if (Bt(e, t))
      if (!t.includes(".")) _e(e[t]) && ti(e[t]);
      else {
        const n = t.split("."),
          r = n.length - 1;
        let s = e,
          i = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] === "__proto__") throw new Error(`unsafe key: ${n[o]}`);
          if ((n[o] in s || (s[n[o]] = Ae()), !_e(s[n[o]]))) {
            i = !0;
            break;
          }
          s = s[n[o]];
        }
        if (
          (i ||
            (on(s)
              ? bm.includes(n[r]) || delete e[t]
              : ((s[n[r]] = e[t]), delete e[t])),
          !on(s))
        ) {
          const o = s[n[r]];
          _e(o) && ti(o);
        }
      }
  return e;
}
function Nm(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: i } = t,
    o = ve(n)
      ? n
      : Ue(r)
        ? Ae()
        : {
            [e]: Ae(),
          };
  if (
    (Ue(r) &&
      r.forEach((a) => {
        if ("locale" in a && "resource" in a) {
          const { locale: l, resource: c } = a;
          l ? ((o[l] = o[l] || Ae()), Ki(c, o[l])) : Ki(c, o);
        } else te(a) && Ki(JSON.parse(a), o);
      }),
    s == null && i)
  )
    for (const a in o) Bt(o, a) && ti(o[a]);
  return o;
}
function k0(e) {
  return e.type;
}
function A0(e, t, n) {
  let r = _e(t.messages) ? t.messages : Ae();
  "__i18nGlobal" in n &&
    (r = Nm(e.locale.value, {
      messages: r,
      __i18n: n.__i18nGlobal,
    }));
  const s = Object.keys(r);
  s.length &&
    s.forEach((i) => {
      e.mergeLocaleMessage(i, r[i]);
    });
  {
    if (_e(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length &&
        i.forEach((o) => {
          e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
        });
    }
    if (_e(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length &&
        i.forEach((o) => {
          e.mergeNumberFormat(o, t.numberFormats[o]);
        });
    }
  }
}
function Df(e) {
  return qe(fi, null, e, 0);
}
function Rm() {
  return Ce();
}
const Ff = () => [],
  P0 = () => !1;
let $f = 0;
function Uf(e) {
  return (t, n, r, s) => e(n, r, Rm() || void 0, s);
}
function Om(e = {}) {
  const { __root: t, __injectWithOption: n } = e,
    r = t === void 0,
    s = e.flatJson,
    i = So ? he : St;
  let o = xe(e.inheritLocale) ? e.inheritLocale : !0;
  const a = i(t && o ? t.locale.value : te(e.locale) ? e.locale : Io),
    l = i(
      t && o
        ? t.fallbackLocale.value
        : te(e.fallbackLocale) ||
            Ue(e.fallbackLocale) ||
            ve(e.fallbackLocale) ||
            e.fallbackLocale === !1
          ? e.fallbackLocale
          : a.value,
    ),
    c = i(Nm(a.value, e)),
    u = i(
      ve(e.datetimeFormats)
        ? e.datetimeFormats
        : {
            [a.value]: {},
          },
    ),
    f = i(
      ve(e.numberFormats)
        ? e.numberFormats
        : {
            [a.value]: {},
          },
    );
  let d = t
      ? t.missingWarn
      : xe(e.missingWarn) || Co(e.missingWarn)
        ? e.missingWarn
        : !0,
    h = t
      ? t.fallbackWarn
      : xe(e.fallbackWarn) || Co(e.fallbackWarn)
        ? e.fallbackWarn
        : !0,
    m = t ? t.fallbackRoot : xe(e.fallbackRoot) ? e.fallbackRoot : !0,
    E = !!e.fallbackFormat,
    C = Le(e.missing) ? e.missing : null,
    v = Le(e.missing) ? Uf(e.missing) : null,
    g = Le(e.postTranslation) ? e.postTranslation : null,
    b = t ? t.warnHtmlMessage : xe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    _ = !!e.escapeParameter;
  const T = t ? t.modifiers : ve(e.modifiers) ? e.modifiers : {};
  let R = e.pluralRules || (t && t.pluralRules),
    P;
  ((P = (() => {
    r && kf(null);
    const A = {
      version: C0,
      locale: a.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: T,
      pluralRules: R,
      missing: v === null ? void 0 : v,
      missingWarn: d,
      fallbackWarn: h,
      fallbackFormat: E,
      unresolving: !0,
      postTranslation: g === null ? void 0 : g,
      warnHtmlMessage: b,
      escapeParameter: _,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: {
        framework: "vue",
      },
    };
    ((A.datetimeFormats = u.value),
      (A.numberFormats = f.value),
      (A.__datetimeFormatters = ve(P) ? P.__datetimeFormatters : void 0),
      (A.__numberFormatters = ve(P) ? P.__numberFormatters : void 0));
    const F = c0(A);
    return (r && kf(F), F);
  })()),
    vs(P, a.value, l.value));
  function B() {
    return [a.value, l.value, c.value, u.value, f.value];
  }
  const L = D({
      get: () => a.value,
      set: (A) => {
        ((P.locale = A), (a.value = A));
      },
    }),
    x = D({
      get: () => l.value,
      set: (A) => {
        ((P.fallbackLocale = A), (l.value = A), vs(P, a.value, A));
      },
    }),
    I = D(() => c.value),
    V = D(() => u.value),
    $ = D(() => f.value);
  function Y() {
    return Le(g) ? g : null;
  }
  function ee(A) {
    ((g = A), (P.postTranslation = A));
  }
  function J() {
    return C;
  }
  function W(A) {
    (A !== null && (v = Uf(A)), (C = A), (P.missing = v));
  }
  const se = (A, F, re, le, pe, He) => {
    B();
    let Fe;
    try {
      (r || (P.fallbackContext = t ? l0() : void 0), (Fe = A(P)));
    } finally {
      r || (P.fallbackContext = void 0);
    }
    if (
      (re !== "translate exists" && je(Fe) && Fe === ra) ||
      (re === "translate exists" && !Fe)
    ) {
      const [Tt, Dt] = F();
      return t && m ? le(t) : pe(Tt);
    } else {
      if (He(Fe)) return Fe;
      throw Jt(Ot.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ie(...A) {
    return se(
      (F) => Reflect.apply(Mf, null, [F, ...A]),
      () => Ol(...A),
      "translate",
      (F) => Reflect.apply(F.t, F, [...A]),
      (F) => F,
      (F) => te(F),
    );
  }
  function ce(...A) {
    const [F, re, le] = A;
    if (le && !_e(le)) throw Jt(Ot.INVALID_ARGUMENT);
    return Ie(
      F,
      re,
      rt(
        {
          resolvedMessage: !0,
        },
        le || {},
      ),
    );
  }
  function G(...A) {
    return se(
      (F) => Reflect.apply(Pf, null, [F, ...A]),
      () => Nl(...A),
      "datetime format",
      (F) => Reflect.apply(F.d, F, [...A]),
      () => If,
      (F) => te(F) || Ue(F),
    );
  }
  function de(...A) {
    return se(
      (F) => Reflect.apply(Rf, null, [F, ...A]),
      () => Rl(...A),
      "number format",
      (F) => Reflect.apply(F.n, F, [...A]),
      () => If,
      (F) => te(F) || Ue(F),
    );
  }
  function Te(A) {
    return A.map((F) => (te(F) || je(F) || xe(F) ? Df(String(F)) : F));
  }
  const ie = {
    normalize: Te,
    interpolate: (A) => A,
    type: "vnode",
  };
  function M(...A) {
    return se(
      (F) => {
        let re;
        const le = F;
        try {
          ((le.processor = ie), (re = Reflect.apply(Mf, null, [le, ...A])));
        } finally {
          le.processor = null;
        }
        return re;
      },
      () => Ol(...A),
      "translate",
      (F) => F[Ll](...A),
      (F) => [Df(F)],
      (F) => Ue(F),
    );
  }
  function Q(...A) {
    return se(
      (F) => Reflect.apply(Rf, null, [F, ...A]),
      () => Rl(...A),
      "number format",
      (F) => F[Ml](...A),
      Ff,
      (F) => te(F) || Ue(F),
    );
  }
  function X(...A) {
    return se(
      (F) => Reflect.apply(Pf, null, [F, ...A]),
      () => Nl(...A),
      "datetime format",
      (F) => F[xl](...A),
      Ff,
      (F) => te(F) || Ue(F),
    );
  }
  function ne(A) {
    ((R = A), (P.pluralRules = R));
  }
  function ge(A, F) {
    return se(
      () => {
        if (!A) return !1;
        const re = te(F) ? F : a.value,
          le = N(re),
          pe = P.messageResolver(le, A);
        return on(pe) || Cn(pe) || te(pe);
      },
      () => [A],
      "translate exists",
      (re) => Reflect.apply(re.te, re, [A, F]),
      P0,
      (re) => xe(re),
    );
  }
  function w(A) {
    let F = null;
    const re = wm(P, l.value, a.value);
    for (let le = 0; le < re.length; le++) {
      const pe = c.value[re[le]] || {},
        He = P.messageResolver(pe, A);
      if (He != null) {
        F = He;
        break;
      }
    }
    return F;
  }
  function S(A) {
    const F = w(A);
    return F ?? (t ? t.tm(A) || {} : {});
  }
  function N(A) {
    return c.value[A] || {};
  }
  function j(A, F) {
    if (s) {
      const re = {
        [A]: F,
      };
      for (const le in re) Bt(re, le) && ti(re[le]);
      F = re[A];
    }
    ((c.value[A] = F), (P.messages = c.value));
  }
  function z(A, F) {
    c.value[A] = c.value[A] || {};
    const re = {
      [A]: F,
    };
    if (s) for (const le in re) Bt(re, le) && ti(re[le]);
    ((F = re[A]), Ki(F, c.value[A]), (P.messages = c.value));
  }
  function H(A) {
    return u.value[A] || {};
  }
  function p(A, F) {
    ((u.value[A] = F), (P.datetimeFormats = u.value), Nf(P, A, F));
  }
  function y(A, F) {
    ((u.value[A] = rt(u.value[A] || {}, F)),
      (P.datetimeFormats = u.value),
      Nf(P, A, F));
  }
  function k(A) {
    return f.value[A] || {};
  }
  function O(A, F) {
    ((f.value[A] = F), (P.numberFormats = f.value), Of(P, A, F));
  }
  function Z(A, F) {
    ((f.value[A] = rt(f.value[A] || {}, F)),
      (P.numberFormats = f.value),
      Of(P, A, F));
  }
  ($f++,
    t &&
      So &&
      (me(t.locale, (A) => {
        o && ((a.value = A), (P.locale = A), vs(P, a.value, l.value));
      }),
      me(t.fallbackLocale, (A) => {
        o && ((l.value = A), (P.fallbackLocale = A), vs(P, a.value, l.value));
      })));
  const K = {
    id: $f,
    locale: L,
    fallbackLocale: x,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(A) {
      ((o = A),
        A &&
          t &&
          ((a.value = t.locale.value),
          (l.value = t.fallbackLocale.value),
          vs(P, a.value, l.value)));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: I,
    get modifiers() {
      return T;
    },
    get pluralRules() {
      return R || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(A) {
      ((d = A), (P.missingWarn = d));
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(A) {
      ((h = A), (P.fallbackWarn = h));
    },
    get fallbackRoot() {
      return m;
    },
    set fallbackRoot(A) {
      m = A;
    },
    get fallbackFormat() {
      return E;
    },
    set fallbackFormat(A) {
      ((E = A), (P.fallbackFormat = E));
    },
    get warnHtmlMessage() {
      return b;
    },
    set warnHtmlMessage(A) {
      ((b = A), (P.warnHtmlMessage = A));
    },
    get escapeParameter() {
      return _;
    },
    set escapeParameter(A) {
      ((_ = A), (P.escapeParameter = A));
    },
    t: Ie,
    getLocaleMessage: N,
    setLocaleMessage: j,
    mergeLocaleMessage: z,
    getPostTranslationHandler: Y,
    setPostTranslationHandler: ee,
    getMissingHandler: J,
    setMissingHandler: W,
    [I0]: ne,
  };
  return (
    (K.datetimeFormats = V),
    (K.numberFormats = $),
    (K.rt = ce),
    (K.te = ge),
    (K.tm = S),
    (K.d = G),
    (K.n = de),
    (K.getDateTimeFormat = H),
    (K.setDateTimeFormat = p),
    (K.mergeDateTimeFormat = y),
    (K.getNumberFormat = k),
    (K.setNumberFormat = O),
    (K.mergeNumberFormat = Z),
    (K[T0] = n),
    (K[Ll] = M),
    (K[xl] = X),
    (K[Ml] = Q),
    K
  );
}
const Rc = {
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
function N0({ slots: e }, t) {
  return t.length === 1 && t[0] === "default"
    ? (e.default ? e.default() : []).reduce(
        (r, s) => [...r, ...(s.type === lt ? s.children : [s])],
        [],
      )
    : t.reduce((n, r) => {
        const s = e[r];
        return (s && (n[r] = s()), n);
      }, Ae());
}
function Lm() {
  return lt;
}
const R0 = tr({
    name: "i18n-t",
    props: rt(
      {
        keypath: {
          type: String,
          required: !0,
        },
        plural: {
          type: [Number, String],
          validator: (e) => je(e) || !isNaN(e),
        },
      },
      Rc,
    ),
    setup(e, t) {
      const { slots: n, attrs: r } = t,
        s =
          e.i18n ||
          sa({
            useScope: e.scope,
            __useComponent: !0,
          });
      return () => {
        const i = Object.keys(n).filter((f) => f[0] !== "_"),
          o = Ae();
        (e.locale && (o.locale = e.locale),
          e.plural !== void 0 &&
            (o.plural = te(e.plural) ? +e.plural : e.plural));
        const a = N0(t, i),
          l = s[Ll](e.keypath, a, o),
          c = rt(Ae(), r),
          u = te(e.tag) || _e(e.tag) ? e.tag : Lm();
        return U(u, c, l);
      };
    },
  }),
  Bf = R0;
function O0(e) {
  return Ue(e) && !te(e[0]);
}
function xm(e, t, n, r) {
  const { slots: s, attrs: i } = t;
  return () => {
    const o = {
      part: !0,
    };
    let a = Ae();
    (e.locale && (o.locale = e.locale),
      te(e.format)
        ? (o.key = e.format)
        : _e(e.format) &&
          (te(e.format.key) && (o.key = e.format.key),
          (a = Object.keys(e.format).reduce(
            (d, h) =>
              n.includes(h)
                ? rt(Ae(), d, {
                    [h]: e.format[h],
                  })
                : d,
            Ae(),
          ))));
    const l = r(e.value, o, a);
    let c = [o.key];
    Ue(l)
      ? (c = l.map((d, h) => {
          const m = s[d.type],
            E = m
              ? m({
                  [d.type]: d.value,
                  index: h,
                  parts: l,
                })
              : [d.value];
          return (O0(E) && (E[0].key = `${d.type}-${h}`), E);
        }))
      : te(l) && (c = [l]);
    const u = rt(Ae(), i),
      f = te(e.tag) || _e(e.tag) ? e.tag : Lm();
    return U(f, u, c);
  };
}
const L0 = tr({
    name: "i18n-n",
    props: rt(
      {
        value: {
          type: Number,
          required: !0,
        },
        format: {
          type: [String, Object],
        },
      },
      Rc,
    ),
    setup(e, t) {
      const n =
        e.i18n ||
        sa({
          useScope: e.scope,
          __useComponent: !0,
        });
      return xm(e, t, km, (...r) => n[Ml](...r));
    },
  }),
  Vf = L0;
function x0(e, t) {
  const n = e;
  if (e.mode === "composition") return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function M0(e) {
  const t = (o) => {
    const { instance: a, value: l } = o;
    if (!a || !a.$) throw Jt(Ot.UNEXPECTED_ERROR);
    const c = x0(e, a.$),
      u = Wf(l);
    return [Reflect.apply(c.t, c, [...jf(u)]), c];
  };
  return {
    created: (o, a) => {
      const [l, c] = t(a);
      (So &&
        e.global === c &&
        (o.__i18nWatcher = me(c.locale, () => {
          a.instance && a.instance.$forceUpdate();
        })),
        (o.__composer = c),
        (o.textContent = l));
    },
    unmounted: (o) => {
      (So &&
        o.__i18nWatcher &&
        (o.__i18nWatcher(), (o.__i18nWatcher = void 0), delete o.__i18nWatcher),
        o.__composer && ((o.__composer = void 0), delete o.__composer));
    },
    beforeUpdate: (o, { value: a }) => {
      if (o.__composer) {
        const l = o.__composer,
          c = Wf(a);
        o.textContent = Reflect.apply(l.t, l, [...jf(c)]);
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
function Wf(e) {
  if (te(e))
    return {
      path: e,
    };
  if (ve(e)) {
    if (!("path" in e)) throw Jt(Ot.REQUIRED_VALUE, "path");
    return e;
  } else throw Jt(Ot.INVALID_VALUE);
}
function jf(e) {
  const { path: t, locale: n, args: r, choice: s, plural: i } = e,
    o = {},
    a = r || {};
  return (
    te(n) && (o.locale = n),
    je(s) && (o.plural = s),
    je(i) && (o.plural = i),
    [t, a, o]
  );
}
function D0(e, t, ...n) {
  const r = ve(n[0]) ? n[0] : {};
  ((!xe(r.globalInstall) || r.globalInstall) &&
    ([Bf.name, "I18nT"].forEach((i) => e.component(i, Bf)),
    [Vf.name, "I18nN"].forEach((i) => e.component(i, Vf)),
    [Hf.name, "I18nD"].forEach((i) => e.component(i, Hf))),
    e.directive("t", M0(t)));
}
const F0 = nr("global-vue-i18n");
function rR(e = {}) {
  const t = xe(e.globalInjection) ? e.globalInjection : !0,
    n = new Map(),
    [r, s] = $0(e),
    i = nr("");
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
        const m = f[0];
        ((c.__composerExtend = m.__composerExtend),
          (c.__vueI18nExtend = m.__vueI18nExtend));
      }
      let d = null;
      (t && (d = z0(u, c.global)), D0(u, c, ...f));
      const h = u.unmount;
      u.unmount = () => {
        (d && d(), c.dispose(), h());
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
function sa(e = {}) {
  const t = Rm();
  if (t == null) throw Jt(Ot.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw Jt(Ot.NOT_INSTALLED);
  const n = U0(t),
    r = V0(n),
    s = k0(t),
    i = B0(e, s);
  if (i === "global") return (A0(r, e, s), r);
  if (i === "parent") {
    let l = W0(n, t, e.__useComponent);
    return (l == null && (l = r), l);
  }
  const o = n;
  let a = o.__getInstance(t);
  if (a == null) {
    const l = rt({}, e);
    ("__i18n" in s && (l.__i18n = s.__i18n),
      r && (l.__root = r),
      (a = Om(l)),
      o.__composerExtend && (a[Dl] = o.__composerExtend(a)),
      q0(o, t, a),
      o.__setInstance(t, a));
  }
  return a;
}
function $0(e, t) {
  const n = cc(),
    r = n.run(() => Om(e));
  if (r == null) throw Jt(Ot.UNEXPECTED_ERROR);
  return [n, r];
}
function U0(e) {
  const t = ht(e.isCE ? F0 : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Jt(e.isCE ? Ot.NOT_INSTALLED_WITH_PROVIDE : Ot.UNEXPECTED_ERROR);
  return t;
}
function B0(e, t) {
  return ta(e)
    ? "__i18n" in t
      ? "local"
      : "global"
    : e.useScope
      ? e.useScope
      : "local";
}
function V0(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function W0(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let i = j0(t, n);
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
function j0(e, t = !1) {
  return e == null ? null : (t && e.vnode.ctx) || e.parent;
}
function q0(e, t, n) {
  (xt(() => {}, t),
    Yo(() => {
      const r = n;
      e.__deleteInstance(t);
      const s = r[Dl];
      s && (s(), delete r[Dl]);
    }, t));
}
const H0 = ["locale", "fallbackLocale", "availableLocales"],
  qf = ["t", "rt", "d", "n", "tm", "te"];
function z0(e, t) {
  const n = Object.create(null);
  return (
    H0.forEach((s) => {
      const i = Object.getOwnPropertyDescriptor(t, s);
      if (!i) throw Jt(Ot.UNEXPECTED_ERROR);
      const o = Re(i.value)
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
    qf.forEach((s) => {
      const i = Object.getOwnPropertyDescriptor(t, s);
      if (!i || !i.value) throw Jt(Ot.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${s}`, i);
    }),
    () => {
      (delete e.config.globalProperties.$i18n,
        qf.forEach((s) => {
          delete e.config.globalProperties[`$${s}`];
        }));
    }
  );
}
const K0 = tr({
    name: "i18n-d",
    props: rt(
      {
        value: {
          type: [Number, Date],
          required: !0,
        },
        format: {
          type: [String, Object],
        },
      },
      Rc,
    ),
    setup(e, t) {
      const n =
        e.i18n ||
        sa({
          useScope: e.scope,
          __useComponent: !0,
        });
      return xm(e, t, Tm, (...r) => n[xl](...r));
    },
  }),
  Hf = K0;
i0(qE);
o0(n0);
a0(wm);
function ni(e, t) {
  return Vo() ? (kh(e, t), !0) : !1;
}
const Fa = new WeakMap(),
  G0 = (...e) => {
    var t;
    const n = e[0],
      r = (t = Ce()) === null || t === void 0 ? void 0 : t.proxy,
      s = r ?? Vo();
    if (s == null && !gc())
      throw new Error("injectLocal must be called in setup");
    return s && Fa.has(s) && n in Fa.get(s) ? Fa.get(s)[n] : ht(...e);
  },
  To = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Mm = (e) => e != null,
  J0 = Object.prototype.toString,
  Y0 = (e) => J0.call(e) === "[object Object]",
  $s = () => {};
function Q0(...e) {
  if (e.length !== 1) return Ay(...e);
  const t = e[0];
  return typeof t == "function"
    ? so(
        Kh(() => ({
          get: t,
          set: $s,
        })),
      )
    : he(t);
}
function zf(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Us(e) {
  return Array.isArray(e) ? e : [e];
}
function X0(e) {
  return Ce();
}
function Z0(e, t = !0, n) {
  X0() ? xt(e, n) : t ? e() : dt(e);
}
function sR(e, t = 1e3, n = {}) {
  const { immediate: r = !0, immediateCallback: s = !1 } = n;
  let i = null;
  const o = St(!1);
  function a() {
    i && (clearInterval(i), (i = null));
  }
  function l() {
    ((o.value = !1), a());
  }
  function c() {
    const u = Rt(t);
    u <= 0 ||
      ((o.value = !0), s && e(), a(), o.value && (i = setInterval(e, u)));
  }
  return (
    r && To && c(),
    (Re(t) || typeof t == "function") &&
      ni(
        me(t, () => {
          o.value && To && c();
        }),
      ),
    ni(l),
    {
      isActive: wy(o),
      pause: l,
      resume: c,
    }
  );
}
function eS(e, t, n) {
  return me(e, t, {
    ...n,
    immediate: !0,
  });
}
function iR(e, t, n) {
  var r;
  let s;
  Re(n)
    ? (s = {
        evaluating: n,
      })
    : (s = n || {});
  const {
      lazy: i = !1,
      flush: o = "sync",
      evaluating: a = void 0,
      shallow: l = !0,
      onError: c = (r = globalThis.reportError) !== null && r !== void 0
        ? r
        : $s,
    } = s,
    u = St(!i),
    f = l ? St(t) : he(t);
  let d = 0;
  return (
    tg(
      async (h) => {
        if (!u.value) return;
        d++;
        const m = d;
        let E = !1;
        a &&
          Promise.resolve().then(() => {
            a.value = !0;
          });
        try {
          const C = await e((v) => {
            h(() => {
              (a && (a.value = !1), E || v());
            });
          });
          m === d && (f.value = C);
        } catch (C) {
          c(C);
        } finally {
          (a && m === d && (a.value = !1), (E = !0));
        }
      },
      {
        flush: o,
      },
    ),
    i ? D(() => ((u.value = !0), f.value)) : f
  );
}
const cs = To ? window : void 0,
  tS = To ? window.document : void 0;
function Bs(e) {
  var t;
  const n = Rt(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function ko(...e) {
  const t = (r, s, i, o) => (
      r.addEventListener(s, i, o),
      () => r.removeEventListener(s, i, o)
    ),
    n = D(() => {
      const r = Us(Rt(e[0])).filter((s) => s != null);
      return r.every((s) => typeof s != "string") ? r : void 0;
    });
  return eS(
    () => {
      var r, s;
      return [
        (r =
          (s = n.value) === null || s === void 0
            ? void 0
            : s.map((i) => Bs(i))) !== null && r !== void 0
          ? r
          : [cs].filter((i) => i != null),
        Us(Rt(n.value ? e[1] : e[0])),
        Us(sn(n.value ? e[2] : e[1])),
        Rt(n.value ? e[3] : e[2]),
      ];
    },
    ([r, s, i, o], a, l) => {
      if (!r?.length || !s?.length || !i?.length) return;
      const c = Y0(o)
          ? {
              ...o,
            }
          : o,
        u = r.flatMap((f) => s.flatMap((d) => i.map((h) => t(f, d, h, c))));
      l(() => {
        u.forEach((f) => f());
      });
    },
    {
      flush: "post",
    },
  );
}
function nS() {
  const e = St(!1),
    t = Ce();
  return (
    t &&
      xt(() => {
        e.value = !0;
      }, t),
    e
  );
}
function Oc(e) {
  const t = nS();
  return D(() => (t.value, !!e()));
}
function rS(e, t, n = {}) {
  const { window: r = cs, ...s } = n;
  let i;
  const o = Oc(() => r && "MutationObserver" in r),
    a = () => {
      i && (i.disconnect(), (i = void 0));
    },
    l = me(
      D(() => {
        const f = Us(Rt(e)).map(Bs).filter(Mm);
        return new Set(f);
      }),
      (f) => {
        (a(),
          o.value &&
            f.size &&
            ((i = new MutationObserver(t)), f.forEach((d) => i.observe(d, s))));
      },
      {
        immediate: !0,
        flush: "post",
      },
    ),
    c = () => i?.takeRecords(),
    u = () => {
      (l(), a());
    };
  return (
    ni(u),
    {
      isSupported: o,
      stop: u,
      takeRecords: c,
    }
  );
}
function sS(e) {
  return typeof e == "function"
    ? e
    : typeof e == "string"
      ? (t) => t.key === e
      : Array.isArray(e)
        ? (t) => e.includes(t.key)
        : () => !0;
}
function oR(...e) {
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
      target: s = cs,
      eventName: i = "keydown",
      passive: o = !1,
      dedupe: a = !1,
    } = r,
    l = sS(t);
  return ko(
    s,
    i,
    (u) => {
      (u.repeat && Rt(a)) || (l(u) && n(u));
    },
    o,
  );
}
const iS = Symbol("vueuse-ssr-width");
function oS() {
  const e = gc() ? G0(iS, null) : null;
  return typeof e == "number" ? e : void 0;
}
function aS(e, t = {}) {
  const { window: n = cs, ssrWidth: r = oS() } = t,
    s = Oc(() => n && "matchMedia" in n && typeof n.matchMedia == "function"),
    i = St(typeof r == "number"),
    o = St(),
    a = St(!1),
    l = (c) => {
      a.value = c.matches;
    };
  return (
    tg(() => {
      if (i.value) {
        ((i.value = !s.value),
          (a.value = Rt(e)
            .split(",")
            .some((c) => {
              const u = c.includes("not all"),
                f = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
                d = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
              let h = !!(f || d);
              return (
                f && h && (h = r >= zf(f[1])),
                d && h && (h = r <= zf(d[1])),
                u ? !h : h
              );
            })));
        return;
      }
      s.value && ((o.value = n.matchMedia(Rt(e))), (a.value = o.value.matches));
    }),
    ko(o, "change", l, {
      passive: !0,
    }),
    D(() => a.value)
  );
}
function aR(e, t, n = {}) {
  const {
      root: r,
      rootMargin: s,
      threshold: i = 0,
      window: o = cs,
      immediate: a = !0,
    } = n,
    l = Oc(() => o && "IntersectionObserver" in o),
    c = D(() => Us(Rt(e)).map(Bs).filter(Mm));
  let u = $s;
  const f = St(a),
    d = l.value
      ? me(
          () => [c.value, Bs(r), Rt(s), f.value],
          ([m, E, C]) => {
            if ((u(), !f.value || !m.length)) return;
            const v = new IntersectionObserver(t, {
              root: Bs(E),
              rootMargin: C,
              threshold: i,
            });
            (m.forEach((g) => g && v.observe(g)),
              (u = () => {
                (v.disconnect(), (u = $s));
              }));
          },
          {
            immediate: a,
            flush: "post",
          },
        )
      : $s,
    h = () => {
      (u(), d(), (f.value = !1));
    };
  return (
    ni(h),
    {
      isSupported: l,
      isActive: f,
      pause() {
        (u(), (f.value = !1));
      },
      resume() {
        f.value = !0;
      },
      stop: h,
    }
  );
}
function lS(e = null, t = {}) {
  var n, r;
  const { document: s = tS, restoreOnUnmount: i = (f) => f } = t,
    o = (n = s?.title) !== null && n !== void 0 ? n : "",
    a = Q0((r = e ?? s?.title) !== null && r !== void 0 ? r : null),
    l = !!(e && typeof e == "function");
  function c(f) {
    if (!("titleTemplate" in t)) return f;
    const d = t.titleTemplate || "%s";
    return typeof d == "function" ? d(f) : Rt(d).replace(/%s/g, f);
  }
  if (
    (me(
      a,
      (f, d) => {
        f !== d && s && (s.title = c(f ?? ""));
      },
      {
        immediate: !0,
      },
    ),
    t.observe && !t.titleTemplate && s && !l)
  ) {
    var u;
    rS(
      (u = s.head) === null || u === void 0 ? void 0 : u.querySelector("title"),
      () => {
        s && s.title !== a.value && (a.value = c(s.title));
      },
      {
        childList: !0,
      },
    );
  }
  return (
    ni(() => {
      if (i) {
        const f = i(o, a.value || "");
        f != null && s && (s.title = f);
      }
    }),
    a
  );
}
function lR(e = {}) {
  const {
      window: t = cs,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: r = Number.POSITIVE_INFINITY,
      listenOrientation: s = !0,
      includeScrollbar: i = !0,
      type: o = "inner",
    } = e,
    a = St(n),
    l = St(r),
    c = () => {
      if (t)
        if (o === "outer")
          ((a.value = t.outerWidth), (l.value = t.outerHeight));
        else if (o === "visual" && t.visualViewport) {
          const { width: f, height: d, scale: h } = t.visualViewport;
          ((a.value = Math.round(f * h)), (l.value = Math.round(d * h)));
        } else
          i
            ? ((a.value = t.innerWidth), (l.value = t.innerHeight))
            : ((a.value = t.document.documentElement.clientWidth),
              (l.value = t.document.documentElement.clientHeight));
    };
  (c(), Z0(c));
  const u = {
    passive: !0,
  };
  return (
    ko("resize", c, u),
    t &&
      o === "visual" &&
      t.visualViewport &&
      ko(t.visualViewport, "resize", c, u),
    s && me(aS("(orientation: portrait)"), () => c()),
    {
      width: a,
      height: l,
    }
  );
}
const cS = (e) => e,
  uS = cS;
let Dm;
const ia = (e) => (Dm = e),
  Fm = Symbol();
function Fl(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var Vs;
(function (e) {
  ((e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function"));
})(Vs || (Vs = {}));
function fS() {
  const e = cc(!0),
    t = e.run(() => he({}));
  let n = [],
    r = [];
  const s = Ir({
    install(i) {
      (ia(s),
        (s._a = i),
        i.provide(Fm, s),
        (i.config.globalProperties.$pinia = s),
        r.forEach((o) => n.push(o)),
        (r = []));
    },
    use(i) {
      return (this._a ? n.push(i) : r.push(i), this);
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return s;
}
const $m = () => {};
function Kf(e, t, n, r = $m) {
  e.add(t);
  const s = () => {
    e.delete(t) && r();
  };
  return (!n && Vo() && kh(s), s);
}
function Pr(e, ...t) {
  e.forEach((n) => {
    n(...t);
  });
}
const dS = (e) => e(),
  Gf = Symbol(),
  $a = Symbol();
function $l(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((n, r) => e.set(r, n))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      s = e[n];
    Fl(s) && Fl(r) && e.hasOwnProperty(n) && !Re(r) && !Sn(r)
      ? (e[n] = $l(s, r))
      : (e[n] = r);
  }
  return e;
}
const hS = Symbol();
function gS(e) {
  return !Fl(e) || !Object.prototype.hasOwnProperty.call(e, hS);
}
const { assign: Bn } = Object;
function mS(e) {
  return !!(Re(e) && e.effect);
}
function pS(e, t, n, r) {
  const { state: s, actions: i, getters: o } = t,
    a = n.state.value[e];
  let l;
  function c() {
    a || (n.state.value[e] = s ? s() : {});
    const u = Iy(n.state.value[e]);
    return Bn(
      u,
      i,
      Object.keys(o || {}).reduce(
        (f, d) => (
          (f[d] = Ir(
            D(() => {
              ia(n);
              const h = n._s.get(e);
              return o[d].call(h, h);
            }),
          )),
          f
        ),
        {},
      ),
    );
  }
  return ((l = Um(e, c, t, n, r, !0)), l);
}
function Um(e, t, n = {}, r, s, i) {
  let o;
  const a = Bn(
      {
        actions: {},
      },
      n,
    ),
    l = {
      deep: !0,
    };
  let c,
    u,
    f = new Set(),
    d = new Set(),
    h;
  const m = r.state.value[e];
  !i && !m && (r.state.value[e] = {});
  let E;
  function C(q) {
    let B;
    ((c = u = !1),
      typeof q == "function"
        ? (q(r.state.value[e]),
          (B = {
            type: Vs.patchFunction,
            storeId: e,
            events: h,
          }))
        : ($l(r.state.value[e], q),
          (B = {
            type: Vs.patchObject,
            payload: q,
            storeId: e,
            events: h,
          })));
    const L = (E = Symbol());
    (dt().then(() => {
      E === L && (c = !0);
    }),
      (u = !0),
      Pr(f, B, r.state.value[e]));
  }
  const v = i
    ? function () {
        const { state: B } = n,
          L = B ? B() : {};
        this.$patch((x) => {
          Bn(x, L);
        });
      }
    : $m;
  function g() {
    (o.stop(), f.clear(), d.clear(), r._s.delete(e));
  }
  const b = (q, B = "") => {
      if (Gf in q) return ((q[$a] = B), q);
      const L = function () {
        ia(r);
        const x = Array.from(arguments),
          I = new Set(),
          V = new Set();
        function $(J) {
          I.add(J);
        }
        function Y(J) {
          V.add(J);
        }
        Pr(d, {
          args: x,
          name: L[$a],
          store: T,
          after: $,
          onError: Y,
        });
        let ee;
        try {
          ee = q.apply(this && this.$id === e ? this : T, x);
        } catch (J) {
          throw (Pr(V, J), J);
        }
        return ee instanceof Promise
          ? ee
              .then((J) => (Pr(I, J), J))
              .catch((J) => (Pr(V, J), Promise.reject(J)))
          : (Pr(I, ee), ee);
      };
      return ((L[Gf] = !0), (L[$a] = B), L);
    },
    _ = {
      _p: r,
      $id: e,
      $onAction: Kf.bind(null, d),
      $patch: C,
      $reset: v,
      $subscribe(q, B = {}) {
        const L = Kf(f, q, B.detached, () => x()),
          x = o.run(() =>
            me(
              () => r.state.value[e],
              (I) => {
                (B.flush === "sync" ? u : c) &&
                  q(
                    {
                      storeId: e,
                      type: Vs.direct,
                      events: h,
                    },
                    I,
                  );
              },
              Bn({}, l, B),
            ),
          );
        return L;
      },
      $dispose: g,
    },
    T = Cr(_);
  r._s.set(e, T);
  const P = ((r._a && r._a.runWithContext) || dS)(() =>
    r._e.run(() =>
      (o = cc()).run(() =>
        t({
          action: b,
        }),
      ),
    ),
  );
  for (const q in P) {
    const B = P[q];
    if ((Re(B) && !mS(B)) || Sn(B))
      i ||
        (m && gS(B) && (Re(B) ? (B.value = m[q]) : $l(B, m[q])),
        (r.state.value[e][q] = B));
    else if (typeof B == "function") {
      const L = b(B, q);
      ((P[q] = L), (a.actions[q] = B));
    }
  }
  return (
    Bn(T, P),
    Bn(fe(T), P),
    Object.defineProperty(T, "$state", {
      get: () => r.state.value[e],
      set: (q) => {
        C((B) => {
          Bn(B, q);
        });
      },
    }),
    r._p.forEach((q) => {
      Bn(
        T,
        o.run(() =>
          q({
            store: T,
            app: r._a,
            pinia: r,
            options: a,
          }),
        ),
      );
    }),
    m && i && n.hydrate && n.hydrate(T.$state, m),
    (c = !0),
    (u = !0),
    T
  );
}
function Lc(e, t, n) {
  let r;
  const s = typeof t == "function";
  r = s ? n : t;
  function i(o, a) {
    const l = gc();
    return (
      (o = o || (l ? ht(Fm, null) : null)),
      o && ia(o),
      (o = Dm),
      o._s.has(e) || (s ? Um(e, t, r, o) : pS(e, r, o)),
      o._s.get(e)
    );
  }
  return ((i.$id = e), i);
}
const vS = Lc("preferences", {
  state: () => ({
    version: 403,
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
      ("appInfoVisible" in e && (this.appInfoVisible = e.appInfoVisible),
        "darkMode" in e && (this.darkMode = e.darkMode),
        "latestSeenVersion" in e &&
          (this.latestSeenVersion = e.latestSeenVersion),
        "seenUkraineBanner" in e &&
          (this.seenUkraineBanner = e.seenUkraineBanner),
        "wheelLocation" in e && (this.wheelLocation = e.wheelLocation),
        "showWheelOverlay" in e && (this.showWheelOverlay = e.showWheelOverlay),
        this.savePrefsToLocalStorage());
    },
    setLatestSeenVersion(e) {
      ((this.latestSeenVersion = e), this.savePrefsToLocalStorage());
    },
    setUserHasSeenCurrentVersion(e) {
      this.userHasSeenCurrentVersion = e;
    },
    toggleAppInfoVisibility() {
      ((this.appInfoVisible = !this.appInfoVisible),
        this.savePrefsToLocalStorage());
    },
    setDarkMode(e) {
      ((this.darkMode = e), Qe.set(e), this.savePrefsToLocalStorage());
    },
    setSeenUkraineBanner() {
      ((this.seenUkraineBanner = !0), this.savePrefsToLocalStorage());
    },
    setWheelLocation(e) {
      ((this.wheelLocation = e), this.savePrefsToLocalStorage());
    },
    switchWheelLocation() {
      this.wheelLocation = this.wheelLocation === "cloud" ? "local" : "cloud";
    },
    setShowWheelOverlay(e) {
      ((this.showWheelOverlay = e), this.savePrefsToLocalStorage());
    },
    setShowWheelOverlayNoPersist(e) {
      this.showWheelOverlay = e;
    },
    loadPreferences() {
      try {
        const e = JSON.parse(localStorage.getItem("Preferences") || "{}");
        (this.setUserHasSeenCurrentVersion(this.version <= e.latestSeenVersion),
          this.setDurablePrefs(e));
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
        }),
      );
    },
  },
});
function yS(e, t) {
  if (e === t) return !0;
  if (e === null || t === null || e.length !== t.length) return !1;
  for (let n = 0; n < e.length; ++n) if (e[n] !== t[n]) return !1;
  return !0;
}
function Bm(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const s of n) {
    const i = e[s],
      o = t[s],
      a = Jf(i) && Jf(o);
    if ((a && !Bm(i, o)) || (!a && i !== o)) return !1;
  }
  return !0;
}
function Jf(e) {
  return e !== null && typeof e == "object";
}
function Vm(e, t, n, r, s) {
  return (
    (t ** 2 - (s / 2) ** 2) ** 0.5 -
      Math.max((s * Math.cos(e)) / (2 * Math.sin(e)), n) >=
    r
  );
}
function _S(e) {
  if (!e) return "";
  let t = e;
  const n = t.match(/<img.*?src="(.*?)".*?>/);
  return (n && (t = t.replace(n[0], "")), CS(t));
}
function Wm(e) {
  let t = "";
  if (e) {
    t = e;
    const n = 18;
    t.length > n && (t = `${t.substring(0, n - 1)}…`);
  }
  return t;
}
function bS(e, t) {
  if (e) return t;
  const n = [],
    r = [];
  for (const s of t) {
    const i = wS(s);
    n.includes(i) || (n.push(i), r.push(s));
  }
  return r;
}
function wS(e) {
  const t = {};
  return (
    e.text && (t.text = e.text),
    e.image && (t.image = e.image),
    JSON.stringify(t)
  );
}
function ES(e) {
  let t = "";
  if (e) {
    const n = e.match(/<img.*?src="(.*?)".*?>/);
    n && (t = n[1]);
  }
  return t;
}
function SS(e) {
  const t = [...e];
  let n;
  for (let r = t.length - 1; r > 0; r--)
    ((n = Math.floor(Math.random() * (r + 1))), ([t[r], t[n]] = [t[n], t[r]]));
  return t;
}
function cR() {
  const e = new Uint32Array(1);
  return (crypto.getRandomValues(e), e[0] / 4294967295);
}
function Yf(e) {
  return e.slice(0).sort((t, n) => {
    const r = t.text || "",
      s = n.text || "";
    return r.localeCompare(s, "en", {
      numeric: !0,
      sensitivity: "base",
    });
  });
}
function CS(e) {
  return e
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}
function Gi() {
  let t = "";
  const n = "abcdefghjkmnpqrstuvwxyz23456789";
  for (let r = 0; r < 10; r++)
    t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}
function xc(e) {
  return !e || !e.map ? [] : e.map((t) => ((t.id = t.id || Gi()), t));
}
function IS(e, t, n = Math.random) {
  const r = Math.ceil(e),
    s = Math.floor(t);
  return Math.floor(n() * (s - r + 1) + r);
}
function jm(e) {
  return e.reduce(
    (t, n) =>
      n.weight && (n.enabled === !0 || !("enabled" in n)) ? t + n.weight : t,
    0,
  );
}
function oa(e, t) {
  let n = 0;
  if (e.length === 0) return 0;
  if (e[0].weight) {
    const r = jm(e),
      s = e.map((a) => (2 * Math.PI * (a.weight ?? 1)) / r),
      i = [];
    n = 0;
    let o = s[0] / 2;
    for (
      e.forEach((a, l) => {
        (i.push(o), (o += s[l + 1]));
      }),
        n = 0;
      !(t < i[n] || (n++, n > i.length - 1));
    );
  } else {
    const r = (2 * Math.PI) / e.length;
    n = Math.round(t / r);
  }
  return (n >= e.length && (n = 0), n);
}
function qm(e) {
  if (!e) return "#000000";
  const t = e.charAt(0) === "#" ? e.substring(1, 7) : e,
    n = Number.parseInt(t.substring(0, 2), 16),
    r = Number.parseInt(t.substring(2, 4), 16),
    s = Number.parseInt(t.substring(4, 6), 16),
    o = [n / 255, r / 255, s / 255].map((l) =>
      l <= 0.04045 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4,
    );
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2] > 0.179
    ? "#000000"
    : "#FFFFFF";
}
function uR(e) {
  return new Promise((t) => setTimeout(t, e));
}
function fR(e) {
  return ["spin-only", "copyable", "gallery"].includes(e);
}
function TS(e) {
  return e instanceof Error
    ? e.message
    : typeof e == "string"
      ? e
      : e instanceof Object
        ? e.toString()
        : "An unknown error occurred";
}
function kS(e) {
  return JSON.parse(JSON.stringify(e));
}
function aa(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
function AS(e, t, n, r, s, i) {
  const o = PS(e, n, r, s, i),
    a = NS(e, t, r, s, i);
  return `${RS(o, a)}px Quicksand, sans-serif`;
}
const Ua = new Map();
function PS(e, t, n, r, s) {
  const i = JSON.stringify({
    texts: t,
    wheelRadius: n,
    hubRadius: r,
    smallestAngle: s,
  });
  if (Ua.get(i)) return Ua.get(i) || [10];
  const o = "Quicksand, sans-serif",
    a = t.map((c) => Hm(e, c, o, n, r, s)),
    l = MS(a);
  return (Ua.set(i, l), l);
}
function NS(e, t, n, r, s) {
  return Hm(e, t, "Quicksand, sans-serif", n, r, s);
}
function RS(e, t) {
  for (let n = e.length - 1; n >= 0; n--) if (e[n] <= t) return e[n];
  return e[0];
}
const Ba = new Map();
function Hm(e, t, n, r, s, i) {
  const o = JSON.stringify({
    displayText: t,
    fontName: n,
    wheelRadius: r,
    hubRadius: s,
    smallestAngle: i,
  });
  if (Ba.get(o)) return Ba.get(o) || 10;
  const a = OS(e, t, n, r, s, i);
  return (Ba.set(o, a), a);
}
function OS(e, t, n, r, s, i) {
  return LS(e, r, s, i, n, t, 3, 200);
}
function LS(e, t, n, r, s, i, o, a) {
  let l,
    c = o,
    u = a;
  for (;;) {
    l = Math.round((c + u) / 2);
    const f = `${l}px ${s}`;
    if ((xS(e, t, n, r / 2, i, f, l) ? (c = l) : (u = l), Math.abs(u - c) < 2))
      break;
  }
  return l;
}
function xS(e, t, n, r, s, i, o) {
  if (!s) return !0;
  e.font = i;
  const a = e.measureText(` ${Wm(s)} `).width;
  return Vm(r, t, n, a, o);
}
function MS(e) {
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
async function dR(e) {
  return new Promise((t) => {
    const n = new Image();
    ((n.onload = () => {
      const r = $S(n.width, n.height, 200);
      (zm(r, n), t(Dc(r, e, 0.5)));
    }),
      (n.src = e));
  });
}
async function hR(e) {
  return new Promise((t) => {
    const n = new Image();
    ((n.onload = () => {
      const r = Mc(370);
      (US(n) || zm(r, n, "blur(4px)"), Km(r, n, !0), t(Dc(r, null, 0.5)));
    }),
      (n.src = e));
  });
}
async function gR(e) {
  return new Promise((t) => {
    const n = new Image();
    ((n.onload = () => {
      const r = Mc(700);
      (Km(r, n, !1), t(Dc(r, null, 0.7)));
    }),
      (n.src = e));
  });
}
function Nr(e) {
  const t = document.createElement("canvas");
  return ((t.width = e.canvas.width), (t.height = e.canvas.height), t);
}
function ri(e) {
  const t = hi(document.createElement("canvas"));
  t.drawImage(e, 0, 0);
  const n = t.getImageData(0, 0, 1, 1).data;
  return VS(n[0], n[1], n[2]) ? "#FFFFFFFF" : WS(n[0], n[1], n[2], n[3]);
}
function DS(e) {
  const t = e.match(/#\w\w\w\w\w\w(\w\w)/);
  return t ? (Number.parseInt(t[1], 16) / 255) * 100 < 50 : !1;
}
function mR(e) {
  const n = Mc(300),
    r = hi(n);
  ((r.fillStyle = "white"),
    r.fillRect(0, 0, 300, 300),
    (r.fillStyle = "black"),
    (r.textBaseline = "middle"),
    (r.textAlign = "center"));
  const s = 300 * 0.9;
  return (
    FS(r, e, s),
    r.fillText(e, 300 / 2, 300 / 2, s),
    n.toDataURL("image/webp", 0.5)
  );
}
function Qf(e) {
  return new Promise((t) => {
    const n = new Image();
    (n.setAttribute("crossOrigin", "anonymous"),
      (n.onload = () => t(n)),
      (n.src = e));
  });
}
function Xf(e) {
  return ri(e).slice(7) === "00";
}
function FS(e, t, n) {
  for (
    let r = Math.round(n / 2);
    r >= n / 20 &&
    ((e.font = `${r}px Quicksand, sans-serif`), !(e.measureText(t).width <= n));
    r--
  );
}
function $S(e, t, n) {
  const r = n / e,
    s = n / t,
    i = Math.max(r, s),
    o = document.createElement("canvas");
  return ((o.width = e * i), (o.height = t * i), o);
}
function Mc(e) {
  const t = document.createElement("canvas");
  return ((t.width = e), (t.height = e), t);
}
function US(e) {
  const t = ri(e);
  return t === "#FFFFFFFF" || t.slice(7) === "FF";
}
function BS(e) {
  return e.getImageData(0, 0, 1, 1).data[3] < 5;
}
function VS(e, t, n) {
  return e === t && e === n && e > 230;
}
function WS(e, t, n, r) {
  return `#${Li(e)}${Li(t)}${Li(n)}${Li(r)}`;
}
const Li = (e) => e.toString(16).padStart(2, "0");
function zm(e, t, n) {
  const r = hi(e);
  (r.save(),
    n && (r.filter = n),
    r.drawImage(t, -2, -2, e.width + 4, e.height + 4),
    r.restore());
}
function Km(e, t, n) {
  const r = e.width;
  let s = r / Math.min(t.width, t.height);
  n && (s = r / Math.max(t.width, t.height));
  const i = t.width * s,
    o = (r - i) / 2,
    a = t.height * s,
    l = (r - a) / 2;
  hi(e).drawImage(t, o, l, i, a);
}
function Dc(e, t, n) {
  let r;
  const s = hi(e);
  return (
    BS(s)
      ? (r = e.toDataURL("image/webp", 0.5))
      : (r = e.toDataURL("image/jpeg", n)),
    t && t.length < r.length ? t : r
  );
}
function hi(e) {
  const t = e.getContext("2d");
  if (!t) throw Error("Could not get canvas context");
  return t;
}
function Zf(e) {
  const t = e.context;
  (t.save(),
    e.wheelConfig.type === "image" && jS(e),
    e.wheelConfig.type === "color" &&
      (e.image ? (GS(e.image) ? qS(e) : HS(e)) : zS(e)),
    t.restore());
}
function jS(e) {
  ($c(e),
    la(e, {
      fill: "white",
      outline: "black",
    }),
    ca(e));
}
function qS(e) {
  (Fc(e),
    $c(e),
    la(e, {
      fill: "white",
      outline: "black",
    }),
    ca(e));
}
function HS(e) {
  if (!e.image) return;
  const t = Gm(e.image);
  (Fc({
    ...e,
    color: e.entry.color || t,
  }),
    $c(e),
    la(e, {
      fill: "white",
      outline: "black",
    }),
    ca(e));
}
function zS(e) {
  Fc(e);
  const t = {
    fill: qm(e.color),
    outline: "",
  };
  (la(e, t), ca(e));
}
function Fc(e) {
  const t = e.context;
  (t.beginPath(),
    t.moveTo(0, 0),
    t.arc(0, 0, e.wheelRadius, -e.radians / 2, e.radians / 2),
    t.lineTo(0, 0),
    (t.fillStyle = e.color),
    t.fill());
}
function la(e, t) {
  if (!e.entry.text) return;
  const n = e.context,
    r = Wm(e.entry.text ?? "");
  ((n.font = AS(
    n,
    r,
    e.displayEntries.map((s) => s.text || ""),
    e.wheelRadius,
    e.hubRadius,
    e.radians,
  )),
    (n.lineJoin = "round"),
    (n.textBaseline = "middle"),
    (n.textAlign = "end"),
    t.outline &&
      ((n.lineWidth = 4),
      (n.strokeStyle = t.outline),
      n.strokeText(` ${r} `, e.wheelRadius, 0)),
    (n.fillStyle = t.fill),
    n.fillText(` ${r} `, e.wheelRadius, 0));
}
function $c(e) {
  if (!e.image) return;
  const t = e.radians / 2,
    n = e.wheelRadius,
    r = e.hubRadius,
    s = KS(t, n, r, e.image.height / e.image.width);
  e.context.drawImage(e.image, s.x, s.y, s.w, s.h);
}
function ca(e) {
  if (!e.wheelConfig.drawOutlines) return;
  const t = e.context;
  (t.beginPath(),
    t.moveTo(0, 0),
    t.arc(0, 0, e.wheelRadius, -e.radians / 2, e.radians / 2),
    t.lineTo(0, 0),
    (t.lineWidth = 1),
    (t.strokeStyle = "#333333"),
    t.stroke());
}
function KS(e, t, n, r) {
  let s,
    i = 0;
  for (s = t; s > 0 && ((i = s * r), !Vm(e, t, n, s, i)); s--);
  return {
    x: Math.max((i * Math.cos(e)) / (2 * Math.sin(e)), n),
    y: -i / 2,
    w: s,
    h: i,
  };
}
function Gm(e) {
  return ri(e);
}
function GS(e) {
  return DS(Gm(e));
}
function JS(e) {
  return {
    afterSpinSound: "applause-sound-soft",
    afterSpinSoundVolume: 50,
    allowDuplicates: !0,
    animateWinner: !1,
    autoRemoveWinner: !1,
    centerText: "",
    colorSettings: [
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
    ],
    coverImageName: "",
    coverImageType: "",
    customCoverImageDataUri: "",
    customPictureDataUri: "",
    customPictureName: "",
    description: "",
    displayHideButton: !0,
    displayRemoveButton: !0,
    displayWinnerDialog: !0,
    drawOutlines: !1,
    drawShadow: !0,
    duringSpinSound: "ticking-sound",
    duringSpinSoundVolume: 50,
    entries: [
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
    ],
    galleryPicture: "/images/none.png",
    hubSize: "S",
    isAdvanced: !1,
    launchConfetti: !0,
    maxNames: 1e3,
    pageBackgroundColor: "#FFFFFF",
    pictureType: "none",
    playClickWhenWinnerRemoved: !1,
    showTitle: !0,
    slowSpin: !1,
    spinTime: 10,
    title: "",
    type: "color",
    winnerMessage: "",
    pointerChangesColor: !0,
    pageGradient: !0,
    ...e,
  };
}
function YS(e) {
  return e.pictureType === "none"
    ? null
    : e.pictureType === "gallery" && e.galleryPicture
      ? e.galleryPicture
      : (e.pictureType === "uploaded" || e.pictureType === "text") &&
          e.customPictureDataUri
        ? e.customPictureDataUri
        : null;
}
function QS(e) {
  return e.coverImageType === "gallery" && e.coverImageName
    ? e.coverImageName
    : e.coverImageType === "uploaded" && e.customCoverImageDataUri
      ? e.customCoverImageDataUri
      : null;
}
function Jm(e) {
  const t = e.colorSettings.filter((n) => n.enabled).map((n) => n.color);
  return t.length > 0 ? t : ["#CCCCCC"];
}
function ed(e, t) {
  const n = Jm(e);
  return e.entries.length > 1 && XS(e, t) && n.length > 2
    ? n[1]
    : n[t % n.length];
}
function XS(e, t) {
  if (t === e.entries.length - 1) {
    const n = Jm(e);
    return t % n.length === 0;
  }
  return !1;
}
function pR(e) {
  if (
    e.type !== "color" ||
    (e.entries.length > 0 && e.entries.every((n) => n.image))
  )
    return !1;
  const t = JS();
  return Bm(e.colorSettings, t.colorSettings);
}
const Uc = 0.005,
  ZS = 15e-5,
  eC = 0.001,
  tC = 0.6,
  nC = 3;
function rC() {
  return {
    angle: 0,
    speed: Uc,
    allEntries: [],
    maxSlices: 1e3,
    visibleEntries: [],
    indexAtPointer: 0,
    prevIndexAtPointer: -1,
    entryAtPointer: {},
    phase: "InitialDemoPhase",
    ticksInPhase: 0,
    fps: 60,
    spinTime: 10,
    slowSpin: !1,
    visibleEntriesChanged: !1,
  };
}
function sC(e, t, n, r) {
  return {
    ...e,
    fps: t,
    spinTime: n,
    slowSpin: r,
  };
}
function iC(e, t, n, r) {
  const s = r ? t : yC(t),
    i = JSON.parse(JSON.stringify(s)),
    o = i.slice(0, n),
    a = {
      ...e,
      maxSlices: n,
      allEntries: i,
      visibleEntries: o,
    };
  return aa(Qm, Xm)(a);
}
function oC(e) {
  return ["AcceleratingPhase", "DeceleratingPhase"].includes(e.phase);
}
function aC(e) {
  return {
    ...e,
    visibleEntriesChanged: !1,
  };
}
function lC(e, t) {
  const n = {
    ...t,
    prevIndexAtPointer: t.indexAtPointer,
  };
  return aa(aC, dC, fC(e), Qm, gC, Xm, hC)(n);
}
function cC(e) {
  return Ym[e.phase].onClick(e);
}
function uC(e) {
  return {
    ...e,
    angle: 0,
  };
}
const Ym = {
  InitialDemoPhase: {
    onTick: (e) => ({
      ...e,
      speed: Uc,
    }),
    onClick: (e) => xi("AcceleratingPhase")(e),
  },
  AcceleratingPhase: {
    onTick: (e, t) => {
      if (e.ticksInPhase > Bc(e.fps, e.spinTime)) {
        const s = {
          ...xi("DeceleratingPhase")(e),
          angle: t() * 2 * Math.PI,
        };
        if (keypressed != undefined) {
          const angle =
            Array.from(
              { length: s.spinTime * s.fps },
              (_, i) => s.speed * Math.pow(vC(s.fps, s.spinTime, s.slowSpin), i + 1)
            ).reduce((acc, val) => acc + val, 0) % 2;
          const targetValue = [0, 1, 2, 3, 4].includes(keypressed)
            ? (keypressed + 1) * (Math.PI / 6)
            : (keypressed - 4) * (Math.PI / 6) + Math.PI;
          const valueToAdd =
            angle < targetValue ? targetValue - angle : targetValue + 2 - angle;
          console.log(angle, valueToAdd);
          s.angle = valueToAdd;
        }
        // console.log(s);
        return pC(t)(s);
      }
      const n = e.speed + Zm(e.fps, e.slowSpin);
      return {
        ...e,
        speed: n,
      };
    },
    onClick: (e) => e,
  },
  DeceleratingPhase: {
    onTick: (e) => {
      if (e.ticksInPhase > ep(e.fps, e.spinTime)) return xi("StoppedPhase")(e);
      const t = vC(e.fps, e.spinTime, e.slowSpin);
      console.log(t);
      return {
        ...e,
        speed: e.speed * t,
      };
    },
    onClick: (e) => e,
  },
  StoppedPhase: {
    onTick: (e) => ({
      ...e,
      speed: 0,
    }),
    onClick: (e) => xi("AcceleratingPhase")(e),
  },
};
function fC(e) {
  return (t) => Ym[t.phase].onTick(t, e);
}
function xi(e) {
  return (t) => ({
    ...t,
    phase: e,
    ticksInPhase: 0,
  });
}
function dC(e) {
  const t = (e.angle + e.speed) % (2 * Math.PI);
  return {
    ...e,
    angle: t,
  };
}
function hC(e) {
  return {
    ...e,
    ticksInPhase: e.ticksInPhase + 1,
  };
}
function Qm(e) {
  return {
    ...e,
    indexAtPointer: oa(e.visibleEntries, e.angle),
  };
}
function Xm(e) {
  return {
    ...e,
    entryAtPointer: _C(e.visibleEntries, e.angle),
  };
}
function gC(e) {
  if (e.allEntries.length <= e.maxSlices)
    return e.visibleEntries.length !== e.allEntries.length
      ? {
          ...e,
          visibleEntries: e.allEntries,
          visibleEntriesChanged: !0,
        }
      : e;
  if (e.indexAtPointer === e.prevIndexAtPointer || e.prevIndexAtPointer === -1)
    return e;
  let t = e.visibleEntries;
  const n = t.length,
    r = (e.indexAtPointer - e.prevIndexAtPointer + n) % n;
  if (r === 0) return e;
  let s = e.prevIndexAtPointer;
  for (let i = 0; i < r; i++) ((s = (s + 1) % n), (t = mC(e, t, s)));
  return {
    ...e,
    visibleEntries: t,
    visibleEntriesChanged: !0,
  };
}
function mC(e, t, n) {
  const r = [...t],
    s = Math.floor(n + e.maxSlices / 2) % e.maxSlices,
    i = td(r, s - 1),
    o = bC(e.allEntries, i);
  if (o === -1)
    return (console.error("Could not find entry in allEntries", i), r);
  const a = td(e.allEntries, o + 1);
  return ((r[s] = a), r);
}
function pC(e) {
  return (t) => {
    if (t.allEntries.length <= t.maxSlices) return t;
    const n = Math.floor(e() * t.allEntries.length),
      s = [...t.allEntries, ...t.allEntries].slice(n, n + t.maxSlices);
    return {
      ...t,
      visibleEntries: s,
    };
  };
}
function Bc(e, t) {
  return Math.min(e, (t * e) / nC);
}
function Zm(e, t) {
  return t ? eC : tC / e;
}
function ep(e, t) {
  return t * e - Bc(e, t);
}
function vC(e, t, n) {
  const r = Bc(e, t) + 1,
    s = Zm(e, n),
    i = Uc + r * s,
    o = ep(e, t);
  return Math.exp(Math.log(ZS / i) / o);
}
function yC(e) {
  const t = new Set();
  return e.filter(({ text: n, image: r }) => {
    const s = (n || "") + "||" + (r || "");
    return t.has(s) ? !1 : (t.add(s), !0);
  });
}
function _C(e, t) {
  return e.length === 0 ? {} : e[oa(e, t)];
}
function td(e, t) {
  const n = ((t % e.length) + e.length) % e.length;
  return e[n];
}
function bC(e, t) {
  return t.id ? e.findIndex(({ id: n }) => n === t.id) : -1;
}
const wC = {
  XS: 0.01,
  S: 0.2,
  M: 0.3,
  L: 0.4,
  XL: 0.5,
  XXL: 0.6,
};
class EC {
  images = {};
  emptyImage = new Image();
  constructor() {
    this.emptyImage.src =
      "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  }
  addImage(t) {
    ((this.images[t] = new Image()), (this.images[t].src = t));
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
const SC = 700;
class tp {
  imageCache = new EC();
  entries = [];
  imageDataCache = {};
  wheelImage = null;
  pointerImages = null;
  coverPlateImage = null;
  wheelShadowImage = null;
  wheelFaceShadowImage = null;
  watermarkImage = null;
  draw(t, n, r, s, i, o = "", a = "#BBBBBB") {
    const l = t.canvas.width * 0.44,
      c = this.getHubRadius(i, l);
    (this.drawBackground(t),
      i.drawShadow && this.drawWheelShadow(t, l),
      this.drawCoverImage(t, i, n, l),
      this.drawWheel(t, i, n, l, c, s, r),
      this.drawWheelBevel(t, l),
      this.drawBevelShading(t, l),
      this.drawWheelFaceShadow(t, l),
      this.drawLightFromTop(t, l),
      a && this.drawPointer(t, i, l, a),
      this.drawCenterImage(t, i, n, c));
    try {
      this.drawCoverPlate(t, l, c, s, r);
    } catch {}
    o && this.drawWatermark(t, o, i);
  }
  getHubRadius(t, n) {
    if (t.type === "image") return 0;
    const r = wC[t.hubSize] || 0.2;
    return Math.round(r * n);
  }
  refresh() {
    ((this.wheelImage = null),
      (this.pointerImages = null),
      (this.coverPlateImage = null));
  }
  drawBackground(t) {
    t.clearRect(0, 0, t.canvas.width, t.canvas.height);
  }
  drawWheelShadow(t, n) {
    (this.wheelShadowImage ||
      ((this.wheelShadowImage = Nr(t)),
      this.drawWheelShadowNoCache(Rr(this.wheelShadowImage), n)),
      t.drawImage(this.wheelShadowImage, 0, 0));
  }
  drawWheelShadowNoCache(t, n) {
    const r = t.canvas.width / 2,
      s = t.canvas.height / 2,
      i = t.createRadialGradient(r, s, n, r, s + 4, n + 8);
    (i.addColorStop(0, "#00000034"),
      i.addColorStop(1, "#00000000"),
      (t.fillStyle = i),
      t.fillRect(0, 0, t.canvas.width, t.canvas.height));
  }
  drawWheel(t, n, r, s, i, o, a) {
    this.wheelImage ||
      ((this.wheelImage = Nr(t)),
      (this.entries = a.slice(0)),
      this.drawWheelNoCache({
        context: Rr(this.wheelImage),
        wheelConfig: n,
        wheelRadius: s,
        hubRadius: i,
        allEntries: o,
        displayEntries: a,
      }));
    const l = t.canvas.width,
      c = t.canvas.height;
    (t.save(),
      t.translate(l / 2, c / 2),
      t.rotate(r),
      t.translate(-l / 2, -c / 2),
      t.drawImage(this.wheelImage, 0, 0),
      t.restore());
  }
  drawWheelNoCache(t) {
    this.drawSlices(t);
    try {
      this.drawTexture(t.context, t.wheelRadius);
    } catch {}
    this.drawCenterCircle(t.context, t.wheelConfig, t.hubRadius);
  }
  drawCoverImage(t, n, r, s) {
    if (n.type === "color") return;
    const i = this.imageCache.getImage(QS(n));
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
    (n.save(),
      n.translate(n.canvas.width / 2, n.canvas.height / 2),
      t.wheelConfig.isAdvanced
        ? this.drawAdvancedSlices(t)
        : this.drawBasicSlices(t),
      n.restore());
  }
  drawBasicSlices(t) {
    const n = (2 * Math.PI) / t.displayEntries.length;
    for (const [r, s] of t.displayEntries.entries()) {
      const i = ed(t.wheelConfig, r);
      (Zf({
        ...t,
        entry: s,
        color: i,
        radians: n,
        image: this.getImageFromData(s.image),
      }),
        t.context.rotate(-n));
    }
  }
  drawAdvancedSlices(t) {
    const n = jm(this.entries),
      r = [];
    this.entries.forEach((s, i) => {
      r[i] = (2 * Math.PI * (s.weight || 1)) / n;
    });
    for (const [s, i] of t.displayEntries.entries()) {
      const o = r[s] / 2 + r[s + 1] / 2,
        a = i.color || ed(t.wheelConfig, s);
      (Zf({
        ...t,
        entry: i,
        color: a,
        radians: r[s],
        image: this.getImageFromData(i.image),
      }),
        t.context.rotate(-o));
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
        ((this.pointerImages[s] = Nr(t)),
        this.drawPointerNoCache(Rr(this.pointerImages[s]), n, r, s)),
      t.drawImage(this.pointerImages[s], 0, 0));
  }
  drawPointerNoCache(t, n, r, s) {
    (t.save(), t.translate(t.canvas.width / 2 + r, t.canvas.height / 2));
    const i = CC(t),
      o = -15 * i,
      a = 20 * i,
      l = 25 * i,
      c = -20 * i,
      u = 20 * i;
    n.drawShadow &&
      ((t.shadowColor = "#0008"),
      (t.shadowOffsetY = 4 * i),
      (t.shadowBlur = 10 * i));
    const f = {
        l1: this.adjustBrightness(s, 0.1),
        l2: this.adjustBrightness(s, 0.2),
        l3: this.adjustBrightness(s, 0.3),
        d1: this.adjustBrightness(s, -0.1),
        d2: this.adjustBrightness(s, -0.2),
        d3: this.adjustBrightness(s, -0.3),
      },
      d = t.createLinearGradient(0, c, 0, u);
    (d.addColorStop(0, f.l2),
      d.addColorStop(1, f.d2),
      (t.fillStyle = d),
      t.beginPath(),
      t.moveTo(o, 0),
      t.lineTo(l, c),
      t.lineTo(a, 0),
      t.lineTo(l, u),
      t.closePath(),
      t.fill(),
      (t.shadowColor = "transparent"),
      (t.lineWidth = 3 * i));
    const h = t.createLinearGradient(0, c, 0, u);
    (h.addColorStop(0, f.l3),
      h.addColorStop(0.49, f.l2),
      h.addColorStop(0.51, f.d2),
      h.addColorStop(1, f.d3),
      (t.strokeStyle = h),
      t.beginPath(),
      t.moveTo(l, u),
      t.lineTo(o, 0),
      t.lineTo(l, c),
      t.stroke(),
      (t.lineWidth = 2 * i));
    const m = t.createLinearGradient(0, c, 0, u);
    (m.addColorStop(0, f.d2),
      m.addColorStop(0.49, f.d1),
      m.addColorStop(0.51, f.l1),
      m.addColorStop(1, f.l2),
      (t.strokeStyle = m),
      t.beginPath(),
      t.moveTo(l, c),
      t.lineTo(a, 0),
      t.lineTo(l, u),
      t.stroke(),
      t.restore());
  }
  drawTexture(t, n) {
    const r = this.imageCache.getImage("/images/nice-snow.png");
    if (!r) return;
    const s = t.createPattern(r, "repeat");
    s &&
      (t.save(),
      t.translate(t.canvas.width / 2, t.canvas.height / 2),
      t.beginPath(),
      t.arc(0, 0, n, 0, Math.PI * 2),
      t.clip(),
      (t.fillStyle = s),
      (t.globalAlpha = 0.15),
      (t.globalCompositeOperation = "lighter"),
      t.fillRect(-n, -n, n * 2, n * 2),
      t.scale(-1, -1),
      (t.globalCompositeOperation = "difference"),
      t.fillRect(-n, -n, n * 2, n * 2),
      t.restore());
  }
  drawWheelFaceShadow(t, n) {
    (this.wheelFaceShadowImage ||
      ((this.wheelFaceShadowImage = Nr(t)),
      this.drawWheelFaceShadowNoCache(Rr(this.wheelFaceShadowImage), n)),
      t.drawImage(this.wheelFaceShadowImage, 0, 0));
  }
  drawWheelFaceShadowNoCache(t, n) {
    (t.save(), t.translate(t.canvas.width / 2, t.canvas.height / 2));
    const r = t.createRadialGradient(-n / 2, -n, n, -n / 2, -n, n * 2);
    (r.addColorStop(0.75, "#00000000"),
      r.addColorStop(1, "#00000028"),
      (t.fillStyle = r),
      t.beginPath(),
      t.arc(0, 0, n, 0, Math.PI * 2),
      t.fill(),
      t.restore());
  }
  drawWheelBevel(t, n) {
    (t.save(), t.translate(t.canvas.width / 2, t.canvas.height / 2));
    const r = t.createRadialGradient(0, 0, n * 0.99, 0, 0, n);
    (r.addColorStop(0, "#00000000"),
      r.addColorStop(1, "#00000088"),
      (t.fillStyle = r),
      t.beginPath(),
      t.arc(0, 0, n, 0, Math.PI * 2),
      t.fill(),
      t.restore());
  }
  drawLightFromTop(t, n) {
    (t.save(), t.translate(t.canvas.width / 2, t.canvas.height / 2));
    const r = t.createRadialGradient(-n / 2, -n, 0, -n / 2, -n, n);
    (r.addColorStop(0, "#FFFFFF36"),
      r.addColorStop(1, "#FFFFFF00"),
      (t.fillStyle = r),
      t.beginPath(),
      t.arc(0, 0, n, 0, Math.PI * 2),
      t.fill(),
      t.restore());
  }
  drawBevelShading(t, n) {
    (t.save(), t.translate(t.canvas.width / 2, t.canvas.height / 2));
    const r = t.createConicGradient(0, 0, 0),
      s = "255 255 255",
      i = `rgb(${s} / 25%)`,
      o = `rgb(${s} / 0)`,
      a = "0 0 0",
      l = `rgb(${a} / 10%)`,
      c = `rgb(${a} / 0)`;
    (r.addColorStop(0.417, o),
      r.addColorStop(0.625, i),
      r.addColorStop(0.833, o),
      r.addColorStop(0.917, c),
      r.addColorStop(0.125, l),
      r.addColorStop(0.333, c),
      t.beginPath(),
      t.arc(0, 0, n - 2, 0, Math.PI * 2),
      (t.lineWidth = 4),
      (t.strokeStyle = r),
      t.stroke(),
      t.restore());
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
        ((this.coverPlateImage = Nr(t)),
        this.drawCoverPlateNoCache(Rr(this.coverPlateImage), n, r, i)),
      this.coverPlateImage && t.drawImage(this.coverPlateImage, 0, 0));
  }
  drawCoverPlateNoCache(t, n, r, s) {
    const i = this.imageCache.getImage("/images/brushed-metal.png");
    if (!i) return;
    const o = s.length,
      a = Math.max((4 * Math.PI) / o, Math.PI / 4);
    (t.save(),
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
      t.restore());
  }
  drawCenterImage(t, n, r, s) {
    if (n.type === "image") return;
    const i = this.imageCache.getImage(YS(n));
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
        ((this.watermarkImage = Nr(t)),
        this.drawWatermarkNoCache(Rr(this.watermarkImage), n, r)),
      t.drawImage(this.watermarkImage, 0, 0));
  }
  drawWatermarkNoCache(t, n, r) {
    (t.save(),
      (t.textAlign = "end"),
      (t.font = "14px Quicksand, sans-serif"),
      (t.fillStyle = qm(r.pageBackgroundColor)),
      t.fillText(n, t.canvas.width - 10, t.canvas.height - 10),
      t.restore());
  }
  getImageFromData(t) {
    if (t) {
      if (!this.imageDataCache[t]) {
        const n = new Image();
        ((n.onload = () => this.clearCachedWheelImage()),
          n.setAttribute("crossOrigin", "anonymous"),
          (n.src = t),
          (this.imageDataCache[t] = n));
      }
      return this.imageDataCache[t];
    }
  }
  clearCachedWheelImage() {
    this.wheelImage = null;
  }
}
function Rr(e) {
  const t = e.getContext("2d");
  if (!t) throw Error("Could not get canvas context");
  return t;
}
function CC(e) {
  return Math.min(e.canvas.width, e.canvas.height) / SC;
}
class wt {
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
  pageGradient = !0;
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
    const t = new wt();
    return (t.loadValues(this.getValues()), t);
  }
  hasOnlyDefaultEntries() {
    return yS(this.getTexts(), new wt().getTexts());
  }
  setUploadedCenterImage(t, n) {
    ((this.customPictureName = t),
      (this.customPictureDataUri = n),
      (this.pictureType = "uploaded"),
      (this.centerText = ""));
  }
  setUploadedBackgroundImage(t, n) {
    ((this.coverImageName = t),
      (this.customCoverImageDataUri = n),
      (this.coverImageType = "uploaded"));
  }
  setGalleryBackgroundImage(t) {
    ((this.coverImageType = "gallery"), (this.coverImageName = t));
  }
  setGalleryCenterImage(t) {
    ((this.centerText = ""),
      (this.pictureType = "gallery"),
      (this.galleryPicture = t),
      (this.customPictureName = ""),
      (this.customPictureDataUri = ""));
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
    (Object.assign(this, t), this.convertOldData());
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
          const r = _S(n),
            s = ES(n);
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
            "",
          )
          .replace("\r", ""));
    (xc(t.entries),
      (t.entries = t.entries.filter(
        (n) => n.text || n.image || "enabled" in n,
      )));
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
const nd = Object.fromEntries(
  Object.entries(new wt().getValues()).map(([e, t]) => [e, typeof t]),
);
function Vc(e) {
  const t = new wt(
    Object.fromEntries(
      Object.entries(kS(e)).filter(([n, r]) => n in nd && typeof r === nd[n]),
    ),
  );
  for (const n of t.entries) delete n.id;
  for (const n of t.colorSettings)
    n.color.length === 4 &&
      (n.color = `#${n.color[1]}${n.color[1]}${n.color[2]}${n.color[2]}${n.color[3]}${n.color[3]}`);
  return t;
}
class ys {
  array;
  length;
  elementJsonCache;
  constructor(t) {
    ((this.array = t.slice(0)),
      (this.length = t.length),
      (this.elementJsonCache = null));
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
    ((this.array[r] = n), (this.elementJsonCache = null));
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
class IC {
  startIndex;
  endIndex;
  length;
  index;
  constructor(t, n, r) {
    ((this.startIndex = t),
      (this.endIndex = n),
      (this.length = r),
      (this.index = this.startIndex));
  }
  isDone() {
    return this.index === this.endIndex;
  }
  getIndex() {
    return this.index;
  }
  increment() {
    ((this.index += 1),
      this.index >= this.length && (this.index -= this.length));
  }
}
class TC {
  allEntries;
  maxSlices;
  prevIndexAtPointer;
  displayEntries;
  constructor() {
    ((this.allEntries = new ys([])),
      (this.maxSlices = 1e6),
      (this.prevIndexAtPointer = -1),
      (this.displayEntries = new ys([])));
  }
  setEntries(t, n, r) {
    ((this.maxSlices = n),
      (this.allEntries = new ys(bS(r, t))),
      this.allEntries.length <= n || this.entriesHaveUnequalWeight(t)
        ? (this.displayEntries = this.allEntries)
        : (this.displayEntries = new ys(this.allEntries.slice(0, n))));
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
    const n = new IC(this.prevIndexAtPointer, t, this.displayEntries.length);
    for (; !n.isDone(); ) {
      n.increment();
      const r = n.getIndex(),
        s = Math.floor(r + this.maxSlices / 2) % this.maxSlices,
        i = this.displayEntries.getElement(s - 1),
        o = this.allEntries.getNextElement(i);
      this.displayEntries.setElement(s, o);
    }
    return ((this.prevIndexAtPointer = t), !0);
  }
  entriesHaveUnequalWeight(t) {
    return t.length === 0 || !t[0].weight ? !1 : t.find((n) => n.weight !== 1);
  }
  setRandomPosition(t) {
    if (this.maxSlices < this.allEntries.length) {
      const n = IS(0, this.allEntries.length - 1, t);
      this.displayEntries = new ys(
        this.allEntries.slice(n, n + this.maxSlices),
      );
    }
  }
}
let vR = class {
  angle = 0;
  speed = 0;
  fps = 60;
  watermark = "";
  wheelConfig = new wt();
  state;
  wheelPainter = new tp();
  entryPicker = new TC();
  indexFromLastTick = 0;
  indexFromThisTick = 0;
  nameChangedCallback;
  doneSpinningCallback;
  constructor(t = () => {}, n = () => {}) {
    ((this.state = new kC(this)),
      (this.nameChangedCallback = t),
      (this.doneSpinningCallback = n));
  }
  setEntries(t, n, r) {
    if (!this.state.isSpinning()) {
      const s = t.filter((i) => i.enabled !== !1);
      (this.entryPicker.setEntries(s, n, r), this.refresh());
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
    this.getDisplayEntries().length > 0 && this.state.click(this);
  }
  spinIsDone() {
    this.doneSpinningCallback(this.getEntryAtPointer());
  }
  isSpinning() {
    return this.state.isSpinning();
  }
  setAngle(t) {
    ((this.angle = t), this.entryPicker.setRandomPosition(Math.random));
  }
  getIndexAtPointer() {
    return oa(this.entryPicker.getDisplayEntries(), this.angle);
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
        this.getPointerColor(),
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
class gi {
  name = "NullSpinState";
  tick(t, ...n) {}
  click(t) {}
  isSpinning() {
    return !1;
  }
}
class kC extends gi {
  name = "InitialDemoSpinState";
  constructor(t) {
    (super(), (t.speed = 0.005));
  }
  tick(t) {
    t.angle += t.speed;
  }
  click(t) {
    t.setNewState(new np(t));
  }
}
class np extends gi {
  name = "AcceleratingState";
  age;
  MAX_AGE;
  constructor(t) {
    (super(),
      (this.age = 0),
      (this.MAX_AGE = t.getStateTimeLengths().accelerating));
  }
  tick(t, n) {
    if (((t.angle += t.speed), this.age <= this.MAX_AGE)) {
      const r = t.wheelConfig.slowSpin ? 0.001 : 0.6 / t.fps;
      ((t.speed += r), (this.age += 1));
    } else t.setNewState(new AC(t, n));
  }
  isSpinning() {
    return !0;
  }
}
class AC extends gi {
  name = "DeceleratingState";
  age;
  MAX_AGE;
  deceleration;
  constructor(t, n) {
    (super(),
      (t.angle = Math.PI * 2 * n()),
      t.entryPicker.setRandomPosition(0),
      (this.age = 0),
      (this.MAX_AGE = t.getStateTimeLengths().decelerating));
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
      // console.log(angle, valueToAdd);
      t.angle = valueToAdd;
    }
    console.log(this.deceleration, t.angle, keypressed);
  }
  tick(t) {
    ((t.angle += t.speed),
      this.age <= this.MAX_AGE
        ? ((t.speed = t.speed * this.deceleration), (this.age += 1))
        : ((t.speed = 0), t.setNewState(new PC(t, t.angle))));
  }
  isSpinning() {
    return !0;
  }
}
class PC extends gi {
  name = "AnnounceWinnerState";
  constructor(t, n) {
    (super(), (t.angle = n));
  }
  tick(t) {
    (t.spinIsDone(), t.setNewState(new NC(t, t.angle)));
  }
}
class NC extends gi {
  name = "StoppedState";
  constructor(t, n) {
    (super(), (t.angle = n), (t.speed = 0));
  }
  click(t) {
    t.setNewState(new np(t));
  }
}
class _R {
  watermark = "";
  wheelConfig = new wt();
  wheelState = rC();
  wheelPainter = new tp();
  nameChangedCallback;
  doneSpinningCallback;
  constructor(t = () => {}, n = () => {}) {
    ((this.nameChangedCallback = t), (this.doneSpinningCallback = n));
  }
  setEntries(t, n, r) {
    if (!this.isSpinning()) {
      const s = t.filter((i) => i.enabled !== !1);
      ((this.wheelState = iC(this.wheelState, s, n, r)), this.refresh());
    }
  }
  refresh() {
    this.wheelPainter.refresh();
  }
  configure(t, n = 60, r) {
    this.isSpinning() ||
      ((this.wheelConfig = t),
      r && (this.watermark = r),
      this.refresh(),
      (this.wheelState = sC(
        this.wheelState,
        n,
        this.wheelConfig.spinTime,
        this.wheelConfig.slowSpin,
      )));
  }
  isSpinning() {
    return oC(this.wheelState);
  }
  tick(t) {
    const n = this.wheelState,
      r = lC(t, n);
    (r.phase === "StoppedPhase" &&
      n.phase !== "StoppedPhase" &&
      this.doneSpinningCallback(this.getEntryAtAngle(r.angle)),
      r.indexAtPointer !== n.indexAtPointer && this.nameChangedCallback(),
      r.visibleEntriesChanged && this.refresh(),
      (this.wheelState = r));
  }
  click() {
    this.getDisplayEntries().length > 0 &&
      (this.wheelState = cC(this.wheelState));
  }
  resetRotation() {
    this.wheelState = uC(this.wheelState);
  }
  getIndexAtPointer(t) {
    return oa(this.wheelState.visibleEntries, t);
  }
  getEntryAtAngle(t) {
    return this.wheelState.visibleEntries[this.getIndexAtPointer(t)];
  }
  getEntryAtPointer() {
    return this.wheelState.entryAtPointer;
  }
  getDisplayEntries() {
    return this.wheelState.visibleEntries;
  }
  getPointerColor() {
    const t = this.wheelConfig,
      n = this.wheelState;
    if (
      t.pointerChangesColor &&
      t.type === "color" &&
      n.visibleEntries.length <= 80
    ) {
      const r = n.entryAtPointer;
      if (r && Object.keys(r).length > 0 && !r.image) {
        const s = n.indexAtPointer;
        return r.color || t.getEntryColor(s);
      }
    }
    return "#BBBBBB";
  }
  draw(t) {
    this.wheelConfig &&
      this.wheelState &&
      this.wheelPainter.draw(
        t,
        this.wheelState.angle,
        this.wheelState.visibleEntries,
        this.wheelState.allEntries,
        this.wheelConfig,
        this.watermark,
        this.getPointerColor(),
      );
  }
}
const RC = [
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/spreadsheets.readonly",
];
function OC(e) {
  if (!e) return "";
  const t = e.match(/<img.*?src="(.*?)".*?>/);
  return rd(t ? e.replace(t[0], "") : e);
}
function bR(e, t) {
  if (e) return t;
  const n = [],
    r = [];
  for (const s of t) {
    const i = Ul(s);
    n.includes(i) || (n.push(i), r.push(s));
  }
  return r;
}
function Ul(e) {
  const t = {};
  return (
    e.text && (t.text = e.text),
    e.image && (t.image = e.image),
    JSON.stringify(t)
  );
}
function wR(e, t) {
  const n = [];
  for (let r = 0; r < e.length; r++)
    if ((Ul(t) === Ul(e[r]) && n.push(r), t.id === e[r].id)) return n[0] !== r;
  return !1;
}
function ER(e) {
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
      const i = OC(s),
        o = LC(s);
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
function LC(e) {
  let t = "";
  if (e) {
    const n = e.match(/<img.*?src="(.*?)".*?>/);
    n?.[1] && (t = n[1]);
  }
  return t;
}
function SR(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function CR(e, t) {
  return t ? e.reduce((n, r) => n + (r?.trim() === t.trim() ? 1 : 0), 0) : 0;
}
function xC(e, t) {
  location.host.startsWith("localhost") ||
    location.host.startsWith("test") ||
    (typeof gtag < "u" &&
      gtag("event", e, {
        event_label: t,
        app_version: "403",
        user_agent: navigator.userAgent,
      }));
}
function MC(e, t) {
  const n = TS(t);
  (xC(e, n), console.error(n));
}
function rp(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function IR(e) {
  const t = e.replace(/<mark>/g, "||mark||").replace(/<\/mark>/g, "||/mark||");
  return rp(t)
    .replace(/\|\|mark\|\|/g, "<mark>")
    .replace(/\|\|\/mark\|\|/g, "</mark>");
}
function rd(e) {
  return e
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}
function TR(e) {
  return e.replace(/<.*?>/g, "");
}
function DC() {
  let t = "";
  const n = "abcdefghjkmnpqrstuvwxyz23456789";
  for (let r = 0; r < 10; r++)
    t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}
function kR(e) {
  return !e || !e.map ? [] : e.map((t) => ((t.id = t.id || DC()), t));
}
function AR(e) {
  let t = "",
    n = "";
  return (
    e &&
      (e.image &&
        (t = `<img src="${e.image}" style="height:25px" style="font-size:1rem;">`),
      e.text && ((n = rp(e.text)), (n = n.replace(/^ +$/g, "&nbsp;")))),
    `<div>${t}${n}</div>`
  );
}
function PR(e) {
  e && e.toLowerCase() !== "#ffffff"
    ? (document.body.style.backgroundColor = e)
    : document.body.style.removeProperty("background-color");
}
function NR(e, t) {
  if (/^#[0-9a-fA-F]{6}$/.test(e)) {
    const n = Math.round(t * 255)
      .toString(16)
      .padStart(2, "0");
    return e + n;
  }
  return e;
}
function RR(e, t) {
  return `https://docs.google.com/forms/d/e/1FAIpQLSeryxMCuDjQUGawpgIeMwSY-81fqwdbpVTIOyh1-WJG5LCeeQ/viewform?entry.1064273724=${encodeURIComponent(e)}&entry.558479038=${t}`;
}
function OR(e, t) {
  return FC($C(e), t);
}
function FC(e, t = "en", n = Date.now()) {
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
function $C(e) {
  return e?._seconds
    ? e._seconds * 1e3
    : e?.seconds
      ? e.seconds * 1e3
      : e && Number.isInteger(e)
        ? e
        : 0;
}
function LR(e) {
  const t = Number(e);
  return Number.isNaN(t) ? "?" : `$${t.toFixed(2)}`;
}
function xR(e) {
  const t = Number(e);
  return !Number.isNaN(t) && t >= 0 ? `${Math.round(t * 100)}%` : "?";
}
function MR() {
  return window.self !== window.top;
}
function Wc(e) {
  return location.host.startsWith("localhost")
    ? `http://localhost:8081/${e}`
    : `/${e}`;
}
function DR(e, t) {
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
              : 0,
    )
    .reduce((r, s) => ((r[s[0]] = s[1]), r), {});
}
async function FR(e) {
  const { extractColors: t } = await Pe(async () => {
      const { extractColors: r } = await import("https://wheelofnames.com/assets/extract-colors-v403.js");
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
function $R(e, t, n) {
  return e
    .slice()
    .sort((r, s) =>
      t === "title"
        ? r.wheelConfig.title || s.wheelConfig.title
          ? UC(r, s, n)
          : sd(r, s, n)
        : t === "created"
          ? sd(r, s, n)
          : t === "lastWrite"
            ? BC(r, s, n)
            : t === "readCount"
              ? VC(r, s, n)
              : 0,
    );
}
function UC(e, t, n) {
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
function sd(e, t, n) {
  return n === "desc" ? t.created - e.created : e.created - t.created;
}
function BC(e, t, n) {
  return n === "desc" ? t.lastWrite - e.lastWrite : e.lastWrite - t.lastWrite;
}
function VC(e, t, n) {
  return n === "desc" ? t.readCount - e.readCount : e.readCount - t.readCount;
}
function UR(e, t) {
  return e.length <= t ? e : e.slice(0, t - 3) + "...";
}
async function sp(e, t, n, r) {
  const s = {
    method: e,
    mode: "cors",
    headers: {},
  };
  (n && (s.headers.Authorization = n),
    r &&
      ((s.headers["Content-Type"] = "application/json"),
      (s.body = JSON.stringify(r))));
  const i = await fetch(Wc(t), s);
  return await op(i);
}
async function ip(e, t, n, r) {
  const s = {
    method: e,
    mode: "cors",
    headers: {},
  };
  return (
    n && (s.headers.Authorization = n),
    await (await fetch(Wc(t), s)).blob()
  );
}
async function op(e) {
  const t = await e.text();
  if (t.startsWith("<")) throw new Error(t);
  const n = JSON.parse(t);
  if ("error" in n) throw new Error(n.error);
  return n;
}
async function WC({ wheelConfig: e, idToken: t, shareMode: n }) {
  const r = {
    wheelConfig: Vc(e),
    shareMode: n,
  };
  return (await Ge("POST", "api/v2/wheels", t, r)).data.path;
}
async function jC(e, t) {
  let n = "api/v2/wheels/shared";
  return (
    t && t.length > 0 && (n += `?fields=${t}`),
    (await Ge("GET", n, e)).data.wheels
  );
}
async function qC(e, t) {
  let n = "api/v2/wheels/private";
  return (
    t && t.length > 0 && (n += `?fields=${t}`),
    (await Ge("GET", n, e)).data.wheels
  );
}
async function HC(e, t) {
  return (await Ge("GET", `api/v2/wheels/${e}`, t)).data;
}
async function zC(e, t) {
  let n = "api/v2/wheels";
  return (
    t && t.length > 0 && (n += `?fields=${t}`),
    (await Ge("GET", n, e)).data.wheels
  );
}
async function KC(e, t) {
  const n = "api/v2/wheels/private",
    r = {
      wheelConfig: Vc(t),
    };
  return (await Ge("PUT", n, e, r)).data.path;
}
async function GC(e, t, n) {
  await Ge("PUT", `api/v2/wheels/${t}`, e, n);
}
async function JC(e, t) {
  await Ge("DELETE", `api/v2/wheels/${t}`, e);
}
async function id(e) {
  await Ge("POST", "api/v2/users", e);
}
async function Va(e, t) {
  await Ge("POST", "api/v2/wheels/change-owner", t, {
    oldIdToken: e,
  });
}
async function YC(e) {
  await Ge("DELETE", "api/v2/users", e);
}
async function QC(e) {
  try {
    return !!(await Ge("GET", "api/v2/users", e)).data.premium;
  } catch (t) {
    if (t instanceof Error && t.message === "Unauthorized") return !1;
    throw t;
  }
}
async function BR(e, t) {
  const n = new URLSearchParams();
  return (
    e && n.append("search", e),
    t && n.append("pageNumber", String(t)),
    (await Ge("GET", `api/v2/gallery?${n.toString()}`)).data
  );
}
async function VR() {
  return (await Ge("GET", "api/v2/gallery/suggestions")).data.suggestions;
}
async function WR() {
  return (await Ge("GET", "api/v2/client-settings")).data;
}
async function XC(e) {
  return (await Ge("POST", "api/v2/api-keys", e)).data.apiKey;
}
async function ZC(e) {
  await Ge("DELETE", "api/v2/api-keys", e);
}
async function eI(e) {
  return (await Ge("GET", "api/v2/api-keys", e)).data;
}
async function jR(e) {
  const t = {
      method: "GET",
      mode: "cors",
      headers: {
        "x-api-key": e,
      },
    },
    n = await fetch(Wc("api/v2/api-keys"), t);
  return (await rI(n)).data;
}
async function qR() {
  return (await Ge("GET", "api/v2/languages")).data.languages;
}
async function tI(e, t, n) {
  const r = `api/v2/wheels/thumbnails/${t}?size=${n}`;
  return await nI("GET", r, e);
}
async function Ge(e, t, n, r) {
  return await sp(e, t, n, r);
}
async function nI(e, t, n, r) {
  return await ip(e, t, n);
}
async function rI(e) {
  return await op(e);
}
const sI = () => {};
var od = {};
const ap = function (e) {
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
  iI = function (e) {
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
        ((t[r++] = String.fromCharCode(55296 + (l >> 10))),
          (t[r++] = String.fromCharCode(56320 + (l & 1023))));
      } else {
        const i = e[n++],
          o = e[n++];
        t[r++] = String.fromCharCode(
          ((s & 15) << 12) | ((i & 63) << 6) | (o & 63),
        );
      }
    }
    return t.join("");
  },
  lp = {
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
        (l || ((h = 64), o || (d = 64)), r.push(n[u], n[f], n[d], n[h]));
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(ap(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : iI(this.decodeStringToByteArray(e, t));
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
          throw new oI();
        const d = (i << 2) | (a >> 4);
        if ((r.push(d), c !== 64)) {
          const h = ((a << 4) & 240) | (c >> 2);
          if ((r.push(h), f !== 64)) {
            const m = ((c << 6) & 192) | f;
            r.push(m);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        ((this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {}));
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          ((this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)));
      }
    },
  };
class oI extends Error {
  constructor() {
    (super(...arguments), (this.name = "DecodeBase64StringError"));
  }
}
const aI = function (e) {
    const t = ap(e);
    return lp.encodeByteArray(t, !0);
  },
  cp = function (e) {
    return aI(e).replace(/\https://wheelofnames.com/assets/g, "");
  },
  up = function (e) {
    try {
      return lp.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
function lI() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
const cI = () => lI().__FIREBASE_DEFAULTS__,
  uI = () => {
    if (typeof process > "u" || typeof od > "u") return;
    const e = od.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  fI = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && up(e[1]);
    return t && JSON.parse(t);
  },
  jc = () => {
    try {
      return sI() || cI() || uI() || fI();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  dI = (e) => jc()?.emulatorHosts?.[e],
  fp = () => jc()?.config,
  dp = (e) => jc()?.[`_${e}`];
class hI {
  constructor() {
    ((this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        ((this.resolve = t), (this.reject = n));
      })));
  }
  wrapCallback(t) {
    return (n, r) => {
      (n ? this.reject(n) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r)));
    };
  }
}
function ua(e) {
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
async function gI(e) {
  return (
    await fetch(e, {
      credentials: "include",
    })
  ).ok;
}
const Ws = {};
function mI() {
  const e = {
    prod: [],
    emulator: [],
  };
  for (const t of Object.keys(Ws)) Ws[t] ? e.emulator.push(t) : e.prod.push(t);
  return e;
}
function pI(e) {
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
let ad = !1;
function vI(e, t) {
  if (
    typeof window > "u" ||
    typeof document > "u" ||
    !ua(window.location.host) ||
    Ws[e] === t ||
    Ws[e] ||
    ad
  )
    return;
  Ws[e] = t;
  function n(d) {
    return `__firebase__banner__${d}`;
  }
  const r = "__firebase__banner",
    i = mI().prod.length > 0;
  function o() {
    const d = document.getElementById(r);
    d && d.remove();
  }
  function a(d) {
    ((d.style.display = "flex"),
      (d.style.background = "#7faaf0"),
      (d.style.position = "fixed"),
      (d.style.bottom = "5px"),
      (d.style.left = "5px"),
      (d.style.padding = ".5em"),
      (d.style.borderRadius = "5px"),
      (d.style.alignItems = "center"));
  }
  function l(d, h) {
    (d.setAttribute("width", "24"),
      d.setAttribute("id", h),
      d.setAttribute("height", "24"),
      d.setAttribute("viewBox", "0 0 24 24"),
      d.setAttribute("fill", "none"),
      (d.style.marginLeft = "-6px"));
  }
  function c() {
    const d = document.createElement("span");
    return (
      (d.style.cursor = "pointer"),
      (d.style.marginLeft = "16px"),
      (d.style.fontSize = "24px"),
      (d.innerHTML = " &times;"),
      (d.onclick = () => {
        ((ad = !0), o());
      }),
      d
    );
  }
  function u(d, h) {
    (d.setAttribute("id", h),
      (d.innerText = "Learn more"),
      (d.href =
        "https://firebase.google.com/docs/studio/preview-apps#preview-backend"),
      d.setAttribute("target", "__blank"),
      (d.style.paddingLeft = "5px"),
      (d.style.textDecoration = "underline"));
  }
  function f() {
    const d = pI(r),
      h = n("text"),
      m = document.getElementById(h) || document.createElement("span"),
      E = n("learnmore"),
      C = document.getElementById(E) || document.createElement("a"),
      v = n("preprendIcon"),
      g =
        document.getElementById(v) ||
        document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (d.created) {
      const b = d.element;
      (a(b), u(C, E));
      const _ = c();
      (l(g, v), b.append(g, m, C, _), document.body.appendChild(b));
    }
    (i
      ? ((m.innerText = "Preview backend disconnected."),
        (g.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`))
      : ((g.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`),
        (m.innerText = "Preview backend running in this workspace.")),
      m.setAttribute("id", h));
  }
  document.readyState === "loading"
    ? window.addEventListener("DOMContentLoaded", f)
    : f();
}
function gt() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function yI() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())
  );
}
function _I() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function bI() {
  const e =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
        ? browser.runtime
        : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function wI() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function EI() {
  const e = gt();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function SI() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function CI() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        s = self.indexedDB.open(r);
      ((s.onsuccess = () => {
        (s.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0));
      }),
        (s.onupgradeneeded = () => {
          n = !1;
        }),
        (s.onerror = () => {
          t(s.error?.message || "");
        }));
    } catch (n) {
      t(n);
    }
  });
}
const II = "FirebaseError";
class ir extends Error {
  constructor(t, n, r) {
    (super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = II),
      Object.setPrototypeOf(this, ir.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, mi.prototype.create));
  }
}
class mi {
  constructor(t, n, r) {
    ((this.service = t), (this.serviceName = n), (this.errors = r));
  }
  create(t, ...n) {
    const r = n[0] || {},
      s = `${this.service}/${t}`,
      i = this.errors[t],
      o = i ? TI(i, r) : "Error",
      a = `${this.serviceName}: ${o} (${s}).`;
    return new ir(s, a, r);
  }
}
function TI(e, t) {
  return e.replace(kI, (n, r) => {
    const s = t[r];
    return s != null ? String(s) : `<${r}?>`;
  });
}
const kI = /\{\$([^}]+)}/g;
function AI(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function es(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const s of n) {
    if (!r.includes(s)) return !1;
    const i = e[s],
      o = t[s];
    if (ld(i) && ld(o)) {
      if (!es(i, o)) return !1;
    } else if (i !== o) return !1;
  }
  for (const s of r) if (!n.includes(s)) return !1;
  return !0;
}
function ld(e) {
  return e !== null && typeof e == "object";
}
function pi(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((s) => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(s));
        })
      : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return t.length ? "&" + t.join("&") : "";
}
function Is(e) {
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
function Ts(e) {
  const t = e.indexOf("?");
  if (!t) return "";
  const n = e.indexOf("#", t);
  return e.substring(t, n > 0 ? n : void 0);
}
function PI(e, t) {
  const n = new NI(e, t);
  return n.subscribe.bind(n);
}
class NI {
  constructor(t, n) {
    ((this.observers = []),
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
        }));
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    (this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t));
  }
  complete() {
    (this.forEachObserver((t) => {
      t.complete();
    }),
      this.close());
  }
  subscribe(t, n, r) {
    let s;
    if (t === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    (RI(t, ["next", "error", "complete"])
      ? (s = t)
      : (s = {
          next: t,
          error: n,
          complete: r,
        }),
      s.next === void 0 && (s.next = Wa),
      s.error === void 0 && (s.error = Wa),
      s.complete === void 0 && (s.complete = Wa));
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
        ((this.observers = void 0), (this.onNoObservers = void 0));
      }));
  }
}
function RI(e, t) {
  if (typeof e != "object" || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == "function") return !0;
  return !1;
}
function Wa() {}
function or(e) {
  return e && e._delegate ? e._delegate : e;
}
class ts {
  constructor(t, n, r) {
    ((this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null));
  }
  setInstantiationMode(t) {
    return ((this.instantiationMode = t), this);
  }
  setMultipleInstances(t) {
    return ((this.multipleInstances = t), this);
  }
  setServiceProps(t) {
    return ((this.serviceProps = t), this);
  }
  setInstanceCreatedCallback(t) {
    return ((this.onInstanceCreated = t), this);
  }
}
const hr = "[DEFAULT]";
class OI {
  constructor(t, n) {
    ((this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map()));
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new hI();
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
      if (xI(t))
        try {
          this.getOrInitializeService({
            instanceIdentifier: hr,
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
  clearInstance(t = hr) {
    (this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t));
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
  isInitialized(t = hr) {
    return this.instances.has(t);
  }
  getOptions(t = hr) {
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
    (s.add(t), this.onInitCallbacks.set(r, s));
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
        instanceIdentifier: LI(t),
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
  normalizeInstanceIdentifier(t = hr) {
    return this.component ? (this.component.multipleInstances ? t : hr) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function LI(e) {
  return e === hr ? void 0 : e;
}
function xI(e) {
  return e.instantiationMode === "EAGER";
}
class MI {
  constructor(t) {
    ((this.name = t), (this.providers = new Map()));
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`,
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    (this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t));
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new OI(t, this);
    return (this.providers.set(t, n), n);
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
var ke;
(function (e) {
  ((e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT"));
})(ke || (ke = {}));
const DI = {
    debug: ke.DEBUG,
    verbose: ke.VERBOSE,
    info: ke.INFO,
    warn: ke.WARN,
    error: ke.ERROR,
    silent: ke.SILENT,
  },
  FI = ke.INFO,
  $I = {
    [ke.DEBUG]: "log",
    [ke.VERBOSE]: "log",
    [ke.INFO]: "info",
    [ke.WARN]: "warn",
    [ke.ERROR]: "error",
  },
  UI = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      s = $I[t];
    if (s) console[s](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`,
      );
  };
class hp {
  constructor(t) {
    ((this.name = t),
      (this._logLevel = FI),
      (this._logHandler = UI),
      (this._userLogHandler = null));
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in ke))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? DI[t] : t;
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
    (this._userLogHandler && this._userLogHandler(this, ke.DEBUG, ...t),
      this._logHandler(this, ke.DEBUG, ...t));
  }
  log(...t) {
    (this._userLogHandler && this._userLogHandler(this, ke.VERBOSE, ...t),
      this._logHandler(this, ke.VERBOSE, ...t));
  }
  info(...t) {
    (this._userLogHandler && this._userLogHandler(this, ke.INFO, ...t),
      this._logHandler(this, ke.INFO, ...t));
  }
  warn(...t) {
    (this._userLogHandler && this._userLogHandler(this, ke.WARN, ...t),
      this._logHandler(this, ke.WARN, ...t));
  }
  error(...t) {
    (this._userLogHandler && this._userLogHandler(this, ke.ERROR, ...t),
      this._logHandler(this, ke.ERROR, ...t));
  }
}
const BI = (e, t) => t.some((n) => e instanceof n);
let cd, ud;
function VI() {
  return (
    cd ||
    (cd = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function WI() {
  return (
    ud ||
    (ud = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const gp = new WeakMap(),
  Bl = new WeakMap(),
  mp = new WeakMap(),
  ja = new WeakMap(),
  qc = new WeakMap();
function jI(e) {
  const t = new Promise((n, r) => {
    const s = () => {
        (e.removeEventListener("success", i),
          e.removeEventListener("error", o));
      },
      i = () => {
        (n(Qn(e.result)), s());
      },
      o = () => {
        (r(e.error), s());
      };
    (e.addEventListener("success", i), e.addEventListener("error", o));
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && gp.set(n, e);
      })
      .catch(() => {}),
    qc.set(t, e),
    t
  );
}
function qI(e) {
  if (Bl.has(e)) return;
  const t = new Promise((n, r) => {
    const s = () => {
        (e.removeEventListener("complete", i),
          e.removeEventListener("error", o),
          e.removeEventListener("abort", o));
      },
      i = () => {
        (n(), s());
      },
      o = () => {
        (r(e.error || new DOMException("AbortError", "AbortError")), s());
      };
    (e.addEventListener("complete", i),
      e.addEventListener("error", o),
      e.addEventListener("abort", o));
  });
  Bl.set(e, t);
}
let Vl = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return Bl.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || mp.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return Qn(e[t]);
  },
  set(e, t, n) {
    return ((e[t] = n), !0);
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function HI(e) {
  Vl = e(Vl);
}
function zI(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(qa(this), t, ...n);
        return (mp.set(r, t.sort ? t.sort() : [t]), Qn(r));
      }
    : WI().includes(e)
      ? function (...t) {
          return (e.apply(qa(this), t), Qn(gp.get(this)));
        }
      : function (...t) {
          return Qn(e.apply(qa(this), t));
        };
}
function KI(e) {
  return typeof e == "function"
    ? zI(e)
    : (e instanceof IDBTransaction && qI(e),
      BI(e, VI()) ? new Proxy(e, Vl) : e);
}
function Qn(e) {
  if (e instanceof IDBRequest) return jI(e);
  if (ja.has(e)) return ja.get(e);
  const t = KI(e);
  return (t !== e && (ja.set(e, t), qc.set(t, e)), t);
}
const qa = (e) => qc.get(e);
function GI(e, t, { blocked: n, upgrade: r, blocking: s, terminated: i } = {}) {
  const o = indexedDB.open(e, t),
    a = Qn(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (l) => {
        r(Qn(o.result), l.oldVersion, l.newVersion, Qn(o.transaction), l);
      }),
    n && o.addEventListener("blocked", (l) => n(l.oldVersion, l.newVersion, l)),
    a
      .then((l) => {
        (i && l.addEventListener("close", () => i()),
          s &&
            l.addEventListener("versionchange", (c) =>
              s(c.oldVersion, c.newVersion, c),
            ));
      })
      .catch(() => {}),
    a
  );
}
const JI = ["get", "getKey", "getAll", "getAllKeys", "count"],
  YI = ["put", "add", "delete", "clear"],
  Ha = new Map();
function fd(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (Ha.get(t)) return Ha.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    s = YI.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(s || JI.includes(n))
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
  return (Ha.set(t, i), i);
}
HI((e) => ({
  ...e,
  get: (t, n, r) => fd(t, n) || e.get(t, n, r),
  has: (t, n) => !!fd(t, n) || e.has(t, n),
}));
class QI {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (XI(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function XI(e) {
  return e.getComponent()?.type === "VERSION";
}
const Wl = "@firebase/app",
  dd = "0.14.8";
const Pn = new hp("@firebase/app"),
  ZI = "@firebase/app-compat",
  eT = "@firebase/analytics-compat",
  tT = "@firebase/analytics",
  nT = "@firebase/app-check-compat",
  rT = "@firebase/app-check",
  sT = "@firebase/auth",
  iT = "@firebase/auth-compat",
  oT = "@firebase/database",
  aT = "@firebase/data-connect",
  lT = "@firebase/database-compat",
  cT = "@firebase/functions",
  uT = "@firebase/functions-compat",
  fT = "@firebase/installations",
  dT = "@firebase/installations-compat",
  hT = "@firebase/messaging",
  gT = "@firebase/messaging-compat",
  mT = "@firebase/performance",
  pT = "@firebase/performance-compat",
  vT = "@firebase/remote-config",
  yT = "@firebase/remote-config-compat",
  _T = "@firebase/storage",
  bT = "@firebase/storage-compat",
  wT = "@firebase/firestore",
  ET = "@firebase/ai",
  ST = "@firebase/firestore-compat",
  CT = "firebase",
  IT = "12.9.0";
const jl = "[DEFAULT]",
  TT = {
    [Wl]: "fire-core",
    [ZI]: "fire-core-compat",
    [tT]: "fire-analytics",
    [eT]: "fire-analytics-compat",
    [rT]: "fire-app-check",
    [nT]: "fire-app-check-compat",
    [sT]: "fire-auth",
    [iT]: "fire-auth-compat",
    [oT]: "fire-rtdb",
    [aT]: "fire-data-connect",
    [lT]: "fire-rtdb-compat",
    [cT]: "fire-fn",
    [uT]: "fire-fn-compat",
    [fT]: "fire-iid",
    [dT]: "fire-iid-compat",
    [hT]: "fire-fcm",
    [gT]: "fire-fcm-compat",
    [mT]: "fire-perf",
    [pT]: "fire-perf-compat",
    [vT]: "fire-rc",
    [yT]: "fire-rc-compat",
    [_T]: "fire-gcs",
    [bT]: "fire-gcs-compat",
    [wT]: "fire-fst",
    [ST]: "fire-fst-compat",
    [ET]: "fire-vertex",
    "fire-js": "fire-js",
    [CT]: "fire-js-all",
  };
const Ao = new Map(),
  kT = new Map(),
  ql = new Map();
function hd(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    Pn.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n,
    );
  }
}
function si(e) {
  const t = e.name;
  if (ql.has(t))
    return (
      Pn.debug(`There were multiple attempts to register component ${t}.`),
      !1
    );
  ql.set(t, e);
  for (const n of Ao.values()) hd(n, e);
  for (const n of kT.values()) hd(n, e);
  return !0;
}
function pp(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({
    optional: !0,
  });
  return (n && n.triggerHeartbeat(), e.container.getProvider(t));
}
function _t(e) {
  return e == null ? !1 : e.settings !== void 0;
}
const AT = {
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
  Xn = new mi("app", "Firebase", AT);
class PT {
  constructor(t, n, r) {
    ((this._isDeleted = !1),
      (this._options = {
        ...t,
      }),
      (this._config = {
        ...n,
      }),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new ts("app", () => this, "PUBLIC")));
  }
  get automaticDataCollectionEnabled() {
    return (this.checkDestroyed(), this._automaticDataCollectionEnabled);
  }
  set automaticDataCollectionEnabled(t) {
    (this.checkDestroyed(), (this._automaticDataCollectionEnabled = t));
  }
  get name() {
    return (this.checkDestroyed(), this._name);
  }
  get options() {
    return (this.checkDestroyed(), this._options);
  }
  get config() {
    return (this.checkDestroyed(), this._config);
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
      throw Xn.create("app-deleted", {
        appName: this._name,
      });
  }
}
const vi = IT;
function vp(e, t = {}) {
  let n = e;
  typeof t != "object" &&
    (t = {
      name: t,
    });
  const r = {
      name: jl,
      automaticDataCollectionEnabled: !0,
      ...t,
    },
    s = r.name;
  if (typeof s != "string" || !s)
    throw Xn.create("bad-app-name", {
      appName: String(s),
    });
  if ((n || (n = fp()), !n)) throw Xn.create("no-options");
  const i = Ao.get(s);
  if (i) {
    if (es(n, i.options) && es(r, i.config)) return i;
    throw Xn.create("duplicate-app", {
      appName: s,
    });
  }
  const o = new MI(s);
  for (const l of ql.values()) o.addComponent(l);
  const a = new PT(n, r, o);
  return (Ao.set(s, a), a);
}
function NT(e = jl) {
  const t = Ao.get(e);
  if (!t && e === jl && fp()) return vp();
  if (!t)
    throw Xn.create("no-app", {
      appName: e,
    });
  return t;
}
function Wr(e, t, n) {
  let r = TT[e] ?? e;
  n && (r += `-${n}`);
  const s = r.match(/\s|\//),
    i = t.match(/\s|\//);
  if (s || i) {
    const o = [`Unable to register library "${r}" with version "${t}":`];
    (s &&
      o.push(
        `library name "${r}" contains illegal characters (whitespace or "/")`,
      ),
      s && i && o.push("and"),
      i &&
        o.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`,
        ),
      Pn.warn(o.join(" ")));
    return;
  }
  si(
    new ts(
      `${r}-version`,
      () => ({
        library: r,
        version: t,
      }),
      "VERSION",
    ),
  );
}
const RT = "firebase-heartbeat-database",
  OT = 1,
  ii = "firebase-heartbeat-store";
let za = null;
function yp() {
  return (
    za ||
      (za = GI(RT, OT, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(ii);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw Xn.create("idb-open", {
          originalErrorMessage: e.message,
        });
      })),
    za
  );
}
async function LT(e) {
  try {
    const n = (await yp()).transaction(ii),
      r = await n.objectStore(ii).get(_p(e));
    return (await n.done, r);
  } catch (t) {
    if (t instanceof ir) Pn.warn(t.message);
    else {
      const n = Xn.create("idb-get", {
        originalErrorMessage: t?.message,
      });
      Pn.warn(n.message);
    }
  }
}
async function gd(e, t) {
  try {
    const r = (await yp()).transaction(ii, "readwrite");
    (await r.objectStore(ii).put(t, _p(e)), await r.done);
  } catch (n) {
    if (n instanceof ir) Pn.warn(n.message);
    else {
      const r = Xn.create("idb-set", {
        originalErrorMessage: n?.message,
      });
      Pn.warn(r.message);
    }
  }
}
function _p(e) {
  return `${e.name}!${e.options.appId}`;
}
const xT = 1024,
  MT = 30;
class DT {
  constructor(t) {
    ((this.container = t), (this._heartbeatsCache = null));
    const n = this.container.getProvider("app").getImmediate();
    ((this._storage = new $T(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r))));
  }
  async triggerHeartbeat() {
    try {
      const n = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        r = md();
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
        this._heartbeatsCache.heartbeats.length > MT)
      ) {
        const s = UT(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(s, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (t) {
      Pn.warn(t);
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
      const t = md(),
        { heartbeatsToSend: n, unsentEntries: r } = FT(
          this._heartbeatsCache.heartbeats,
        ),
        s = cp(
          JSON.stringify({
            version: 2,
            heartbeats: n,
          }),
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
      return (Pn.warn(t), "");
    }
  }
}
function md() {
  return new Date().toISOString().substring(0, 10);
}
function FT(e, t = xT) {
  const n = [];
  let r = e.slice();
  for (const s of e) {
    const i = n.find((o) => o.agent === s.agent);
    if (i) {
      if ((i.dates.push(s.date), pd(n) > t)) {
        i.dates.pop();
        break;
      }
    } else if (
      (n.push({
        agent: s.agent,
        dates: [s.date],
      }),
      pd(n) > t)
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
class $T {
  constructor(t) {
    ((this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()));
  }
  async runIndexedDBEnvironmentCheck() {
    return SI()
      ? CI()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await LT(this.app);
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
      return gd(this.app, {
        lastSentHeartbeatDate:
          t.lastSentHeartbeatDate ?? r.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return gd(this.app, {
        lastSentHeartbeatDate:
          t.lastSentHeartbeatDate ?? r.lastSentHeartbeatDate,
        heartbeats: [...r.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function pd(e) {
  return cp(
    JSON.stringify({
      version: 2,
      heartbeats: e,
    }),
  ).length;
}
function UT(e) {
  if (e.length === 0) return -1;
  let t = 0,
    n = e[0].date;
  for (let r = 1; r < e.length; r++)
    e[r].date < n && ((n = e[r].date), (t = r));
  return t;
}
function BT(e) {
  (si(new ts("platform-logger", (t) => new QI(t), "PRIVATE")),
    si(new ts("heartbeat", (t) => new DT(t), "PRIVATE")),
    Wr(Wl, dd, e),
    Wr(Wl, dd, "esm2020"),
    Wr("fire-js", ""));
}
BT("");
var VT = "firebase",
  WT = "12.9.0";
Wr(VT, WT, "app");
function bp() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const jT = bp,
  wp = new mi("auth", "Firebase", bp());
const Po = new hp("@firebase/auth");
function qT(e, ...t) {
  Po.logLevel <= ke.WARN && Po.warn(`Auth (${vi}): ${e}`, ...t);
}
function Ji(e, ...t) {
  Po.logLevel <= ke.ERROR && Po.error(`Auth (${vi}): ${e}`, ...t);
}
function Lt(e, ...t) {
  throw zc(e, ...t);
}
function qt(e, ...t) {
  return zc(e, ...t);
}
function Hc(e, t, n) {
  const r = {
    ...jT(),
    [t]: n,
  };
  return new mi("auth", "Firebase", r).create(t, {
    appName: e.name,
  });
}
function an(e) {
  return Hc(
    e,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp",
  );
}
function HT(e, t, n) {
  const r = n;
  if (!(t instanceof r))
    throw (
      r.name !== t.constructor.name && Lt(e, "argument-error"),
      Hc(
        e,
        "argument-error",
        `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`,
      )
    );
}
function zc(e, ...t) {
  if (typeof e != "string") {
    const n = t[0],
      r = [...t.slice(1)];
    return (r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r));
  }
  return wp.create(e, ...t);
}
function ae(e, t, ...n) {
  if (!e) throw zc(t, ...n);
}
function wn(e) {
  const t = "INTERNAL ASSERTION FAILED: " + e;
  throw (Ji(t), new Error(t));
}
function Nn(e, t) {
  e || wn(t);
}
function Hl() {
  return (typeof self < "u" && self.location?.href) || "";
}
function zT() {
  return vd() === "http:" || vd() === "https:";
}
function vd() {
  return (typeof self < "u" && self.location?.protocol) || null;
}
function KT() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (zT() || bI() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function GT() {
  if (typeof navigator > "u") return null;
  const e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
class yi {
  constructor(t, n) {
    ((this.shortDelay = t),
      (this.longDelay = n),
      Nn(n > t, "Short delay should be less than long delay!"),
      (this.isMobile = yI() || wI()));
  }
  get() {
    return KT()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
function Kc(e, t) {
  Nn(e.emulator, "Emulator should always be set here");
  const { url: n } = e.emulator;
  return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
class Ep {
  static initialize(t, n, r) {
    ((this.fetchImpl = t),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r));
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    wn(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    wn(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    wn(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
    );
  }
}
const JT = {
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
const YT = [
    "/v1/accounts:signInWithCustomToken",
    "/v1/accounts:signInWithEmailLink",
    "/v1/accounts:signInWithIdp",
    "/v1/accounts:signInWithPassword",
    "/v1/accounts:signInWithPhoneNumber",
    "/v1/token",
  ],
  QT = new yi(3e4, 6e4);
function Mn(e, t) {
  return e.tenantId && !t.tenantId
    ? {
        ...t,
        tenantId: e.tenantId,
      }
    : t;
}
async function cn(e, t, n, r, s = {}) {
  return Sp(e, s, async () => {
    let i = {},
      o = {};
    r &&
      (t === "GET"
        ? (o = r)
        : (i = {
            body: JSON.stringify(r),
          }));
    const a = pi({
        key: e.config.apiKey,
        ...o,
      }).slice(1),
      l = await e._getAdditionalHeaders();
    ((l["Content-Type"] = "application/json"),
      e.languageCode && (l["X-Firebase-Locale"] = e.languageCode));
    const c = {
      method: t,
      headers: l,
      ...i,
    };
    return (
      _I() || (c.referrerPolicy = "no-referrer"),
      e.emulatorConfig &&
        ua(e.emulatorConfig.host) &&
        (c.credentials = "include"),
      Ep.fetch()(await Cp(e, e.config.apiHost, n, a), c)
    );
  });
}
async function Sp(e, t, n) {
  e._canInitEmulator = !1;
  const r = {
    ...JT,
    ...t,
  };
  try {
    const s = new ZT(e),
      i = await Promise.race([n(), s.promise]);
    s.clearNetworkTimeout();
    const o = await i.json();
    if ("needConfirmation" in o)
      throw Mi(e, "account-exists-with-different-credential", o);
    if (i.ok && !("errorMessage" in o)) return o;
    {
      const a = i.ok ? o.errorMessage : o.error.message,
        [l, c] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Mi(e, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS") throw Mi(e, "email-already-in-use", o);
      if (l === "USER_DISABLED") throw Mi(e, "user-disabled", o);
      const u = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (c) throw Hc(e, u, c);
      Lt(e, u);
    }
  } catch (s) {
    if (s instanceof ir) throw s;
    Lt(e, "network-request-failed", {
      message: String(s),
    });
  }
}
async function _i(e, t, n, r, s = {}) {
  const i = await cn(e, t, n, r, s);
  return (
    "mfaPendingCredential" in i &&
      Lt(e, "multi-factor-auth-required", {
        _serverResponse: i,
      }),
    i
  );
}
async function Cp(e, t, n, r) {
  const s = `${t}${n}?${r}`,
    i = e,
    o = i.config.emulator ? Kc(e.config, s) : `${e.config.apiScheme}://${s}`;
  return YT.includes(n) &&
    (await i._persistenceManagerAvailable, i._getPersistenceType() === "COOKIE")
    ? i._getPersistence()._getFinalTarget(o).toString()
    : o;
}
function XT(e) {
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
class ZT {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(t) {
    ((this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(qt(this.auth, "network-request-failed")),
          QT.get(),
        );
      })));
  }
}
function Mi(e, t, n) {
  const r = {
    appName: e.name,
  };
  (n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber));
  const s = qt(e, t, r);
  return ((s.customData._tokenResponse = n), s);
}
function yd(e) {
  return e !== void 0 && e.enterprise !== void 0;
}
class ek {
  constructor(t) {
    if (
      ((this.siteKey = ""),
      (this.recaptchaEnforcementState = []),
      t.recaptchaKey === void 0)
    )
      throw new Error("recaptchaKey undefined");
    ((this.siteKey = t.recaptchaKey.split("/")[3]),
      (this.recaptchaEnforcementState = t.recaptchaEnforcementState));
  }
  getProviderEnforcementState(t) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const n of this.recaptchaEnforcementState)
      if (n.provider && n.provider === t) return XT(n.enforcementState);
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
async function tk(e, t) {
  return cn(e, "GET", "/v2/recaptchaConfig", Mn(e, t));
}
async function nk(e, t) {
  return cn(e, "POST", "/v1/accounts:delete", t);
}
async function No(e, t) {
  return cn(e, "POST", "/v1/accounts:lookup", t);
}
function js(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function rk(e, t = !1) {
  const n = or(e),
    r = await n.getIdToken(t),
    s = Gc(r);
  ae(s && s.exp && s.auth_time && s.iat, n.auth, "internal-error");
  const i = typeof s.firebase == "object" ? s.firebase : void 0,
    o = i?.sign_in_provider;
  return {
    claims: s,
    token: r,
    authTime: js(Ka(s.auth_time)),
    issuedAtTime: js(Ka(s.iat)),
    expirationTime: js(Ka(s.exp)),
    signInProvider: o || null,
    signInSecondFactor: i?.sign_in_second_factor || null,
  };
}
function Ka(e) {
  return Number(e) * 1e3;
}
function Gc(e) {
  const [t, n, r] = e.split(".");
  if (t === void 0 || n === void 0 || r === void 0)
    return (Ji("JWT malformed, contained fewer than 3 sections"), null);
  try {
    const s = up(n);
    return s
      ? JSON.parse(s)
      : (Ji("Failed to decode base64 JWT payload"), null);
  } catch (s) {
    return (
      Ji("Caught error parsing JWT payload as JSON", s?.toString()),
      null
    );
  }
}
function _d(e) {
  const t = Gc(e);
  return (
    ae(t, "internal-error"),
    ae(typeof t.exp < "u", "internal-error"),
    ae(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
  );
}
async function ns(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (
      r instanceof ir &&
        sk(r) &&
        e.auth.currentUser === e &&
        (await e.auth.signOut()),
      r
    );
  }
}
function sk({ code: e }) {
  return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
class ik {
  constructor(t) {
    ((this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4));
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
      return ((this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), n);
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
class zl {
  constructor(t, n) {
    ((this.createdAt = t), (this.lastLoginAt = n), this._initializeTime());
  }
  _initializeTime() {
    ((this.lastSignInTime = js(this.lastLoginAt)),
      (this.creationTime = js(this.createdAt)));
  }
  _copy(t) {
    ((this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime());
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt,
    };
  }
}
async function Ro(e) {
  const t = e.auth,
    n = await e.getIdToken(),
    r = await ns(
      e,
      No(t, {
        idToken: n,
      }),
    );
  ae(r?.users.length, t, "internal-error");
  const s = r.users[0];
  e._notifyReloadListener(s);
  const i = s.providerUserInfo?.length ? Ip(s.providerUserInfo) : [],
    o = ak(e.providerData, i),
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
      metadata: new zl(s.createdAt, s.lastLoginAt),
      isAnonymous: c,
    };
  Object.assign(e, u);
}
async function ok(e) {
  const t = or(e);
  (await Ro(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t));
}
function ak(e, t) {
  return [
    ...e.filter((r) => !t.some((s) => s.providerId === r.providerId)),
    ...t,
  ];
}
function Ip(e) {
  return e.map(({ providerId: t, ...n }) => ({
    providerId: t,
    uid: n.rawId || "",
    displayName: n.displayName || null,
    email: n.email || null,
    phoneNumber: n.phoneNumber || null,
    photoURL: n.photoUrl || null,
  }));
}
async function lk(e, t) {
  const n = await Sp(e, {}, async () => {
    const r = pi({
        grant_type: "refresh_token",
        refresh_token: t,
      }).slice(1),
      { tokenApiHost: s, apiKey: i } = e.config,
      o = await Cp(e, s, "/v1/token", `key=${i}`),
      a = await e._getAdditionalHeaders();
    a["Content-Type"] = "application/x-www-form-urlencoded";
    const l = {
      method: "POST",
      headers: a,
      body: r,
    };
    return (
      e.emulatorConfig &&
        ua(e.emulatorConfig.host) &&
        (l.credentials = "include"),
      Ep.fetch()(o, l)
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
async function ck(e, t) {
  return cn(e, "POST", "/v2/accounts:revokeToken", Mn(e, t));
}
class jr {
  constructor() {
    ((this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null));
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    (ae(t.idToken, "internal-error"),
      ae(typeof t.idToken < "u", "internal-error"),
      ae(typeof t.refreshToken < "u", "internal-error"));
    const n =
      "expiresIn" in t && typeof t.expiresIn < "u"
        ? Number(t.expiresIn)
        : _d(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  updateFromIdToken(t) {
    ae(t.length !== 0, "internal-error");
    const n = _d(t);
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
    const { accessToken: r, refreshToken: s, expiresIn: i } = await lk(t, n);
    this.updateTokensAndExpiration(r, s, Number(i));
  }
  updateTokensAndExpiration(t, n, r) {
    ((this.refreshToken = n || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + r * 1e3));
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: s, expirationTime: i } = n,
      o = new jr();
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
    ((this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime));
  }
  _clone() {
    return Object.assign(new jr(), this.toJSON());
  }
  _performRefresh() {
    return wn("not implemented");
  }
}
function $n(e, t) {
  ae(typeof e == "string" || typeof e > "u", "internal-error", {
    appName: t,
  });
}
class Vt {
  constructor({ uid: t, auth: n, stsTokenManager: r, ...s }) {
    ((this.providerId = "firebase"),
      (this.proactiveRefresh = new ik(this)),
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
      (this.metadata = new zl(s.createdAt || void 0, s.lastLoginAt || void 0)));
  }
  async getIdToken(t) {
    const n = await ns(this, this.stsTokenManager.getToken(this.auth, t));
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
    return rk(this, t);
  }
  reload() {
    return ok(this);
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
    const n = new Vt({
      ...this,
      auth: t,
      stsTokenManager: this.stsTokenManager._clone(),
    });
    return (n.metadata._copy(this.metadata), n);
  }
  _onReload(t) {
    (ae(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null)));
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
    (t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
      n && (await Ro(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this));
  }
  async delete() {
    if (_t(this.auth.app)) return Promise.reject(an(this.auth));
    const t = await this.getIdToken();
    return (
      await ns(
        this,
        nk(this.auth, {
          idToken: t,
        }),
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
        providerData: m,
        stsTokenManager: E,
      } = n;
    ae(f && E, t, "internal-error");
    const C = jr.fromJSON(this.name, E);
    (ae(typeof f == "string", t, "internal-error"),
      $n(r, t.name),
      $n(s, t.name),
      ae(typeof d == "boolean", t, "internal-error"),
      ae(typeof h == "boolean", t, "internal-error"),
      $n(i, t.name),
      $n(o, t.name),
      $n(a, t.name),
      $n(l, t.name),
      $n(c, t.name),
      $n(u, t.name));
    const v = new Vt({
      uid: f,
      auth: t,
      email: s,
      emailVerified: d,
      displayName: r,
      isAnonymous: h,
      photoURL: o,
      phoneNumber: i,
      tenantId: a,
      stsTokenManager: C,
      createdAt: c,
      lastLoginAt: u,
    });
    return (
      m &&
        Array.isArray(m) &&
        (v.providerData = m.map((g) => ({
          ...g,
        }))),
      l && (v._redirectEventId = l),
      v
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const s = new jr();
    s.updateFromServerResponse(n);
    const i = new Vt({
      uid: n.localId,
      auth: t,
      stsTokenManager: s,
      isAnonymous: r,
    });
    return (await Ro(i), i);
  }
  static async _fromGetAccountInfoResponse(t, n, r) {
    const s = n.users[0];
    ae(s.localId !== void 0, "internal-error");
    const i = s.providerUserInfo !== void 0 ? Ip(s.providerUserInfo) : [],
      o = !(s.email && s.passwordHash) && !i?.length,
      a = new jr();
    a.updateFromIdToken(r);
    const l = new Vt({
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
        metadata: new zl(s.createdAt, s.lastLoginAt),
        isAnonymous: !(s.email && s.passwordHash) && !i?.length,
      };
    return (Object.assign(l, c), l);
  }
}
const bd = new Map();
function En(e) {
  Nn(e instanceof Function, "Expected a class definition");
  let t = bd.get(e);
  return t
    ? (Nn(t instanceof e, "Instance stored in cache mismatched with class"), t)
    : ((t = new e()), bd.set(e, t), t);
}
class Tp {
  constructor() {
    ((this.type = "NONE"), (this.storage = {}));
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
Tp.type = "NONE";
const wd = Tp;
function Yi(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class qr {
  constructor(t, n, r) {
    ((this.persistence = t), (this.auth = n), (this.userKey = r));
    const { config: s, name: i } = this.auth;
    ((this.fullUserKey = Yi(this.userKey, s.apiKey, i)),
      (this.fullPersistenceKey = Yi("persistence", s.apiKey, i)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler));
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    if (!t) return null;
    if (typeof t == "string") {
      const n = await No(this.auth, {
        idToken: t,
      }).catch(() => {});
      return n ? Vt._fromGetAccountInfoResponse(this.auth, n, t) : null;
    }
    return Vt._fromJSON(this.auth, t);
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type,
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
    if (!n.length) return new qr(En(wd), t, r);
    const s = (
      await Promise.all(
        n.map(async (c) => {
          if (await c._isAvailable()) return c;
        }),
      )
    ).filter((c) => c);
    let i = s[0] || En(wd);
    const o = Yi(r, t.config.apiKey, t.name);
    let a = null;
    for (const c of n)
      try {
        const u = await c._get(o);
        if (u) {
          let f;
          if (typeof u == "string") {
            const d = await No(t, {
              idToken: u,
            }).catch(() => {});
            if (!d) break;
            f = await Vt._fromGetAccountInfoResponse(t, d, u);
          } else f = Vt._fromJSON(t, u);
          (c !== i && (a = f), (i = c));
          break;
        }
      } catch {}
    const l = s.filter((c) => c._shouldAllowMigration);
    return !i._shouldAllowMigration || !l.length
      ? new qr(i, t, r)
      : ((i = l[0]),
        a && (await i._set(o, a.toJSON())),
        await Promise.all(
          n.map(async (c) => {
            if (c !== i)
              try {
                await c._remove(o);
              } catch {}
          }),
        ),
        new qr(i, t, r));
  }
}
function Ed(e) {
  const t = e.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (Np(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (kp(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (Op(t)) return "Blackberry";
  if (Lp(t)) return "Webos";
  if (Ap(t)) return "Safari";
  if ((t.includes("chrome/") || Pp(t)) && !t.includes("edge/")) return "Chrome";
  if (Rp(t)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if (r?.length === 2) return r[1];
  }
  return "Other";
}
function kp(e = gt()) {
  return /firefox\//i.test(e);
}
function Ap(e = gt()) {
  const t = e.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function Pp(e = gt()) {
  return /crios\//i.test(e);
}
function Np(e = gt()) {
  return /iemobile/i.test(e);
}
function Rp(e = gt()) {
  return /android/i.test(e);
}
function Op(e = gt()) {
  return /blackberry/i.test(e);
}
function Lp(e = gt()) {
  return /webos/i.test(e);
}
function Jc(e = gt()) {
  return (
    /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  );
}
function uk(e = gt()) {
  return Jc(e) && !!window.navigator?.standalone;
}
function fk() {
  return EI() && document.documentMode === 10;
}
function xp(e = gt()) {
  return Jc(e) || Rp(e) || Lp(e) || Op(e) || /windows phone/i.test(e) || Np(e);
}
function Mp(e, t = []) {
  let n;
  switch (e) {
    case "Browser":
      n = Ed(gt());
      break;
    case "Worker":
      n = `${Ed(gt())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${vi}/${r}`;
}
class dk {
  constructor(t) {
    ((this.auth = t), (this.queue = []));
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
    ((r.onAbort = n), this.queue.push(r));
    const s = this.queue.length - 1;
    return () => {
      this.queue[s] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) (await r(t), r.onAbort && n.push(r.onAbort));
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
async function hk(e, t = {}) {
  return cn(e, "GET", "/v2/passwordPolicy", Mn(e, t));
}
const gk = 6;
class mk {
  constructor(t) {
    const n = t.customStrengthOptions;
    ((this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        n.minPasswordLength ?? gk),
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
      (this.schemaVersion = t.schemaVersion));
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
    (r && (n.meetsMinPasswordLength = t.length >= r),
      s && (n.meetsMaxPasswordLength = t.length <= s));
  }
  validatePasswordCharacterOptions(t, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let s = 0; s < t.length; s++)
      ((r = t.charAt(s)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= "a" && r <= "z",
          r >= "A" && r <= "Z",
          r >= "0" && r <= "9",
          this.allowedNonAlphanumericCharacters.includes(r),
        ));
  }
  updatePasswordCharacterOptionsStatuses(t, n, r, s, i) {
    (this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = s)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter ||
          (t.containsNonAlphanumericCharacter = i)));
  }
}
class pk {
  constructor(t, n, r, s) {
    ((this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = s),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Sd(this)),
      (this.idTokenSubscription = new Sd(this)),
      (this.beforeStateQueue = new dk(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = wp),
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
        (i) => (this._resolvePersistenceManagerAvailable = i),
      )));
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = En(n)),
      (this._initializationPromise = this.queue(async () => {
        if (
          !this._deleted &&
          ((this.persistenceManager = await qr.create(this, t)),
          this._resolvePersistenceManagerAvailable?.(),
          !this._deleted)
        ) {
          if (this._popupRedirectResolver?._shouldInitProactively)
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          (await this.initializeCurrentUser(n),
            (this.lastNotifiedUid = this.currentUser?.uid || null),
            !this._deleted && (this._isInitialized = !0));
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
        (this._currentUser._assign(t), await this.currentUser.getIdToken());
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUserFromIdToken(t) {
    try {
      const n = await No(this, {
          idToken: t,
        }),
        r = await Vt._fromGetAccountInfoResponse(this, n, t);
      await this.directlySetCurrentUser(r);
    } catch (n) {
      (console.warn(
        "FirebaseServerApp could not login user with provided authIdToken: ",
        n,
      ),
        await this.directlySetCurrentUser(null));
    }
  }
  async initializeCurrentUser(t) {
    if (_t(this.app)) {
      const i = this.app.settings.authIdToken;
      return i
        ? new Promise((o) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(i).then(o, o),
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
          ((r = n),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(i),
            ));
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
      await Ro(t);
    } catch (n) {
      if (n?.code !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = GT();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    if (_t(this.app)) return Promise.reject(an(this));
    const n = t ? or(t) : null;
    return (
      n &&
        ae(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token",
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
          (await this.directlySetCurrentUser(t), this.notifyAuthListeners());
        })
      );
  }
  async signOut() {
    return _t(this.app)
      ? Promise.reject(an(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(t) {
    return _t(this.app)
      ? Promise.reject(an(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(En(t));
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
            {},
          ),
        )
      : n.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await hk(this),
      n = new mk(t);
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
    this._errorFactory = new mi("auth", "Firebase", t());
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
          (r(), t());
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
      (this.tenantId != null && (r.tenantId = this.tenantId),
        await ck(this, r));
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
      const n = (t && En(t)) || this._popupRedirectResolver;
      (ae(n, this, "argument-error"),
        (this.redirectPersistenceManager = await qr.create(
          this,
          [En(n._redirectPersistence)],
          "redirectUser",
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser()));
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
    ((this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh());
  }
  _stopProactiveRefresh() {
    ((this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh());
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
        ((o = !0), l());
      };
    } else {
      const l = t.addObserver(n);
      return () => {
        ((o = !0), l());
      };
    }
  }
  async directlySetCurrentUser(t) {
    (this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser());
  }
  queue(t) {
    return ((this.operations = this.operations.then(t, t)), this.operations);
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
      (this.clientVersion = Mp(
        this.config.clientPlatform,
        this._getFrameworks(),
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
    return (r && (t["X-Firebase-AppCheck"] = r), t);
  }
  async _getAppCheckToken() {
    if (_t(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const t = await this.appCheckServiceProvider
      .getImmediate({
        optional: !0,
      })
      ?.getToken();
    return (
      t?.error && qT(`Error while retrieving App Check token: ${t.error}`),
      t?.token
    );
  }
}
function un(e) {
  return or(e);
}
class Sd {
  constructor(t) {
    ((this.auth = t),
      (this.observer = null),
      (this.addObserver = PI((n) => (this.observer = n))));
  }
  get next() {
    return (
      ae(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
let fa = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function vk(e) {
  fa = e;
}
function Dp(e) {
  return fa.loadJS(e);
}
function yk() {
  return fa.recaptchaEnterpriseScript;
}
function _k() {
  return fa.gapiScript;
}
function bk(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
class wk {
  constructor() {
    this.enterprise = new Ek();
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
class Ek {
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
const Sk = "recaptcha-enterprise",
  Fp = "NO_RECAPTCHA";
class Ck {
  constructor(t) {
    ((this.type = Sk), (this.auth = un(t)));
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
        tk(i, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE",
        })
          .then((l) => {
            if (l.recaptchaKey === void 0)
              a(new Error("recaptcha Enterprise site key undefined"));
            else {
              const c = new ek(l);
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
      yd(l)
        ? l.enterprise.ready(() => {
            l.enterprise
              .execute(i, {
                action: t,
              })
              .then((c) => {
                o(c);
              })
              .catch(() => {
                o(Fp);
              });
          })
        : a(Error("No reCAPTCHA enterprise script loaded."));
    }
    return this.auth.settings.appVerificationDisabledForTesting
      ? new wk().execute("siteKey", {
          action: "verify",
        })
      : new Promise((i, o) => {
          r(this.auth)
            .then((a) => {
              if (!n && yd(window.grecaptcha)) s(a, i, o);
              else {
                if (typeof window > "u") {
                  o(
                    new Error("RecaptchaVerifier is only supported in browser"),
                  );
                  return;
                }
                let l = yk();
                (l.length !== 0 && (l += a),
                  Dp(l)
                    .then(() => {
                      s(a, i, o);
                    })
                    .catch((c) => {
                      o(c);
                    }));
              }
            })
            .catch((a) => {
              o(a);
            });
        });
  }
}
async function Cd(e, t, n, r = !1, s = !1) {
  const i = new Ck(e);
  let o;
  if (s) o = Fp;
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
async function Oo(e, t, n, r, s) {
  if (e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
    const i = await Cd(e, t, n, n === "getOobCode");
    return r(e, i);
  } else
    return r(e, t).catch(async (i) => {
      if (i.code === "auth/missing-recaptcha-token") {
        console.log(
          `${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`,
        );
        const o = await Cd(e, t, n, n === "getOobCode");
        return r(e, o);
      } else return Promise.reject(i);
    });
}
function Ik(e, t) {
  const n = pp(e, "auth");
  if (n.isInitialized()) {
    const s = n.getImmediate(),
      i = n.getOptions();
    if (es(i, t ?? {})) return s;
    Lt(s, "already-initialized");
  }
  return n.initialize({
    options: t,
  });
}
function Tk(e, t) {
  const n = t?.persistence || [],
    r = (Array.isArray(n) ? n : [n]).map(En);
  (t?.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(r, t?.popupRedirectResolver));
}
function kk(e, t, n) {
  const r = un(e);
  ae(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
  const s = !1,
    i = $p(t),
    { host: o, port: a } = Ak(t),
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
    (ae(r.config.emulator && r.emulatorConfig, r, "emulator-config-failed"),
      ae(
        es(c, r.config.emulator) && es(u, r.emulatorConfig),
        r,
        "emulator-config-failed",
      ));
    return;
  }
  ((r.config.emulator = c),
    (r.emulatorConfig = u),
    (r.settings.appVerificationDisabledForTesting = !0),
    ua(o) ? (gI(`${i}//${o}${l}`), vI("Auth", !0)) : Pk());
}
function $p(e) {
  const t = e.indexOf(":");
  return t < 0 ? "" : e.substr(0, t + 1);
}
function Ak(e) {
  const t = $p(e),
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
      port: Id(r.substr(i.length + 1)),
    };
  } else {
    const [i, o] = r.split(":");
    return {
      host: i,
      port: Id(o),
    };
  }
}
function Id(e) {
  if (!e) return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function Pk() {
  function e() {
    const t = document.createElement("p"),
      n = t.style;
    ((t.innerText =
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
      document.body.appendChild(t));
  }
  (typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.",
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", e)
        : e()));
}
class Yc {
  constructor(t, n) {
    ((this.providerId = t), (this.signInMethod = n));
  }
  toJSON() {
    return wn("not implemented");
  }
  _getIdTokenResponse(t) {
    return wn("not implemented");
  }
  _linkToIdToken(t, n) {
    return wn("not implemented");
  }
  _getReauthenticationResolver(t) {
    return wn("not implemented");
  }
}
async function Nk(e, t) {
  return cn(e, "POST", "/v1/accounts:signUp", t);
}
async function Rk(e, t) {
  return _i(e, "POST", "/v1/accounts:signInWithPassword", Mn(e, t));
}
async function Ok(e, t) {
  return cn(e, "POST", "/v1/accounts:sendOobCode", Mn(e, t));
}
async function Lk(e, t) {
  return Ok(e, t);
}
async function xk(e, t) {
  return _i(e, "POST", "/v1/accounts:signInWithEmailLink", Mn(e, t));
}
async function Mk(e, t) {
  return _i(e, "POST", "/v1/accounts:signInWithEmailLink", Mn(e, t));
}
class oi extends Yc {
  constructor(t, n, r, s = null) {
    (super("password", r),
      (this._email = t),
      (this._password = n),
      (this._tenantId = s));
  }
  static _fromEmailAndPassword(t, n) {
    return new oi(t, n, "password");
  }
  static _fromEmailAndCode(t, n, r = null) {
    return new oi(t, n, "emailLink", r);
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
        return Oo(t, n, "signInWithPassword", Rk);
      case "emailLink":
        return xk(t, {
          email: this._email,
          oobCode: this._password,
        });
      default:
        Lt(t, "internal-error");
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
        return Oo(t, r, "signUpPassword", Nk);
      case "emailLink":
        return Mk(t, {
          idToken: n,
          email: this._email,
          oobCode: this._password,
        });
      default:
        Lt(t, "internal-error");
    }
  }
  _getReauthenticationResolver(t) {
    return this._getIdTokenResponse(t);
  }
}
async function Hr(e, t) {
  return _i(e, "POST", "/v1/accounts:signInWithIdp", Mn(e, t));
}
const Dk = "http://localhost";
class Sr extends Yc {
  constructor() {
    (super(...arguments), (this.pendingToken = null));
  }
  static _fromParams(t) {
    const n = new Sr(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (n.idToken = t.idToken),
          t.accessToken && (n.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (n.nonce = t.nonce),
          t.pendingToken && (n.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
          ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
          : Lt("argument-error"),
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
    const o = new Sr(r, s);
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
    return Hr(t, n);
  }
  _linkToIdToken(t, n) {
    const r = this.buildRequest();
    return ((r.idToken = n), Hr(t, r));
  }
  _getReauthenticationResolver(t) {
    const n = this.buildRequest();
    return ((n.autoCreate = !1), Hr(t, n));
  }
  buildRequest() {
    const t = {
      requestUri: Dk,
      returnSecureToken: !0,
    };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const n = {};
      (this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (t.postBody = pi(n)));
    }
    return t;
  }
}
function Fk(e) {
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
function $k(e) {
  const t = Is(Ts(e)).link,
    n = t ? Is(Ts(t)).deep_link_id : null,
    r = Is(Ts(e)).deep_link_id;
  return (r ? Is(Ts(r)).link : null) || r || n || t || e;
}
class Qc {
  constructor(t) {
    const n = Is(Ts(t)),
      r = n.apiKey ?? null,
      s = n.oobCode ?? null,
      i = Fk(n.mode ?? null);
    (ae(r && s && i, "argument-error"),
      (this.apiKey = r),
      (this.operation = i),
      (this.code = s),
      (this.continueUrl = n.continueUrl ?? null),
      (this.languageCode = n.lang ?? null),
      (this.tenantId = n.tenantId ?? null));
  }
  static parseLink(t) {
    const n = $k(t);
    try {
      return new Qc(n);
    } catch {
      return null;
    }
  }
}
class us {
  constructor() {
    this.providerId = us.PROVIDER_ID;
  }
  static credential(t, n) {
    return oi._fromEmailAndPassword(t, n);
  }
  static credentialWithLink(t, n) {
    const r = Qc.parseLink(n);
    return (
      ae(r, "argument-error"),
      oi._fromEmailAndCode(t, r.code, r.tenantId)
    );
  }
}
us.PROVIDER_ID = "password";
us.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
us.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
class Xc {
  constructor(t) {
    ((this.providerId = t),
      (this.defaultLanguageCode = null),
      (this.customParameters = {}));
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return ((this.customParameters = t), this);
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
class bi extends Xc {
  constructor() {
    (super(...arguments), (this.scopes = []));
  }
  addScope(t) {
    return (this.scopes.includes(t) || this.scopes.push(t), this);
  }
  getScopes() {
    return [...this.scopes];
  }
}
class Gn extends bi {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return Sr._fromParams({
      providerId: Gn.PROVIDER_ID,
      signInMethod: Gn.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Gn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Gn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Gn.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Gn.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Gn.PROVIDER_ID = "facebook.com";
class Ut extends bi {
  constructor() {
    (super("google.com"), this.addScope("profile"));
  }
  static credential(t, n) {
    return Sr._fromParams({
      providerId: Ut.PROVIDER_ID,
      signInMethod: Ut.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return Ut.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Ut.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return Ut.credential(n, r);
    } catch {
      return null;
    }
  }
}
Ut.GOOGLE_SIGN_IN_METHOD = "google.com";
Ut.PROVIDER_ID = "google.com";
class Jn extends bi {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return Sr._fromParams({
      providerId: Jn.PROVIDER_ID,
      signInMethod: Jn.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Jn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Jn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Jn.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Jn.GITHUB_SIGN_IN_METHOD = "github.com";
Jn.PROVIDER_ID = "github.com";
class yn extends bi {
  constructor() {
    super("twitter.com");
  }
  static credential(t, n) {
    return Sr._fromParams({
      providerId: yn.PROVIDER_ID,
      signInMethod: yn.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return yn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return yn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return yn.credential(n, r);
    } catch {
      return null;
    }
  }
}
yn.TWITTER_SIGN_IN_METHOD = "twitter.com";
yn.PROVIDER_ID = "twitter.com";
async function Up(e, t) {
  return _i(e, "POST", "/v1/accounts:signUp", Mn(e, t));
}
class Rn {
  constructor(t) {
    ((this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType));
  }
  static async _fromIdTokenResponse(t, n, r, s = !1) {
    const i = await Vt._fromIdTokenResponse(t, r, s),
      o = Td(r);
    return new Rn({
      user: i,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    const s = Td(r);
    return new Rn({
      user: t,
      providerId: s,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function Td(e) {
  return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
async function Uk(e) {
  if (_t(e.app)) return Promise.reject(an(e));
  const t = un(e);
  if ((await t._initializationPromise, t.currentUser?.isAnonymous))
    return new Rn({
      user: t.currentUser,
      providerId: null,
      operationType: "signIn",
    });
  const n = await Up(t, {
      returnSecureToken: !0,
    }),
    r = await Rn._fromIdTokenResponse(t, "signIn", n, !0);
  return (await t._updateCurrentUser(r.user), r);
}
class Lo extends ir {
  constructor(t, n, r, s) {
    (super(n.code, n.message),
      (this.operationType = r),
      (this.user = s),
      Object.setPrototypeOf(this, Lo.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: t.tenantId ?? void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      }));
  }
  static _fromErrorAndOperation(t, n, r, s) {
    return new Lo(t, n, r, s);
  }
}
function Bp(e, t, n, r) {
  return (
    t === "reauthenticate"
      ? n._getReauthenticationResolver(e)
      : n._getIdTokenResponse(e)
  ).catch((i) => {
    throw i.code === "auth/multi-factor-auth-required"
      ? Lo._fromErrorAndOperation(e, i, t, r)
      : i;
  });
}
async function Bk(e, t, n = !1) {
  const r = await ns(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return Rn._forOperation(e, "link", r);
}
async function Vk(e, t, n = !1) {
  const { auth: r } = e;
  if (_t(r.app)) return Promise.reject(an(r));
  const s = "reauthenticate";
  try {
    const i = await ns(e, Bp(r, s, t, e), n);
    ae(i.idToken, r, "internal-error");
    const o = Gc(i.idToken);
    ae(o, r, "internal-error");
    const { sub: a } = o;
    return (ae(e.uid === a, r, "user-mismatch"), Rn._forOperation(e, s, i));
  } catch (i) {
    throw (i?.code === "auth/user-not-found" && Lt(r, "user-mismatch"), i);
  }
}
async function Vp(e, t, n = !1) {
  if (_t(e.app)) return Promise.reject(an(e));
  const r = "signIn",
    s = await Bp(e, r, t),
    i = await Rn._fromIdTokenResponse(e, r, s);
  return (n || (await e._updateCurrentUser(i.user)), i);
}
async function Wk(e, t) {
  return Vp(un(e), t);
}
async function Wp(e) {
  const t = un(e);
  t._getPasswordPolicyInternal() && (await t._updatePasswordPolicy());
}
async function jk(e, t, n) {
  const r = un(e);
  await Oo(
    r,
    {
      requestType: "PASSWORD_RESET",
      email: t,
      clientType: "CLIENT_TYPE_WEB",
    },
    "getOobCode",
    Lk,
  );
}
async function qk(e, t, n) {
  if (_t(e.app)) return Promise.reject(an(e));
  const r = un(e),
    o = await Oo(
      r,
      {
        returnSecureToken: !0,
        email: t,
        password: n,
        clientType: "CLIENT_TYPE_WEB",
      },
      "signUpPassword",
      Up,
    ).catch((l) => {
      throw (l.code === "auth/password-does-not-meet-requirements" && Wp(e), l);
    }),
    a = await Rn._fromIdTokenResponse(r, "signIn", o);
  return (await r._updateCurrentUser(a.user), a);
}
function Hk(e, t, n) {
  return _t(e.app)
    ? Promise.reject(an(e))
    : Wk(or(e), us.credential(t, n)).catch(async (r) => {
        throw (
          r.code === "auth/password-does-not-meet-requirements" && Wp(e),
          r
        );
      });
}
async function zk(e, t) {
  return cn(e, "POST", "/v1/accounts:update", t);
}
async function Kk(e, { displayName: t, photoURL: n }) {
  if (t === void 0 && n === void 0) return;
  const r = or(e),
    i = {
      idToken: await r.getIdToken(),
      displayName: t,
      photoUrl: n,
      returnSecureToken: !0,
    },
    o = await ns(r, zk(r.auth, i));
  ((r.displayName = o.displayName || null), (r.photoURL = o.photoUrl || null));
  const a = r.providerData.find(({ providerId: l }) => l === "password");
  (a && ((a.displayName = r.displayName), (a.photoURL = r.photoURL)),
    await r._updateTokensIfNecessary(o));
}
function Gk(e, t, n, r) {
  return or(e).onIdTokenChanged(t, n, r);
}
function Jk(e, t, n) {
  return or(e).beforeAuthStateChanged(t, n);
}
const xo = "__sak";
class jp {
  constructor(t, n) {
    ((this.storageRetriever = t), (this.type = n));
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(xo, "1"),
          this.storage.removeItem(xo),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, n) {
    return (this.storage.setItem(t, JSON.stringify(n)), Promise.resolve());
  }
  _get(t) {
    const n = this.storage.getItem(t);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(t) {
    return (this.storage.removeItem(t), Promise.resolve());
  }
  get storage() {
    return this.storageRetriever();
  }
}
const Yk = 1e3,
  Qk = 10;
class qp extends jp {
  constructor() {
    (super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = xp()),
      (this._shouldAllowMigration = !0));
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
    fk() && i !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(s, Qk)
      : s();
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const s of Array.from(r)) s(n && JSON.parse(n));
  }
  startPolling() {
    (this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", {
              key: t,
              oldValue: n,
              newValue: r,
            }),
            !0,
          );
        });
      }, Yk)));
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
    (Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()),
        (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(n));
  }
  _removeListener(t, n) {
    (this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling()));
  }
  async _set(t, n) {
    (await super._set(t, n), (this.localCache[t] = JSON.stringify(n)));
  }
  async _get(t) {
    const n = await super._get(t);
    return ((this.localCache[t] = JSON.stringify(n)), n);
  }
  async _remove(t) {
    (await super._remove(t), delete this.localCache[t]);
  }
}
qp.type = "LOCAL";
const Xk = qp;
class Hp extends jp {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
Hp.type = "SESSION";
const zp = Hp;
function Zk(e) {
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
    }),
  );
}
class da {
  constructor(t) {
    ((this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this)));
  }
  static _getInstance(t) {
    const n = this.receivers.find((s) => s.isListeningto(t));
    if (n) return n;
    const r = new da(t);
    return (this.receivers.push(r), r);
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
      l = await Zk(a);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: s,
      response: l,
    });
  }
  _subscribe(t, n) {
    (Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(n));
  }
  _unsubscribe(t, n) {
    (this.handlersMap[t] && n && this.handlersMap[t].delete(n),
      (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener(
          "message",
          this.boundEventHandler,
        ));
  }
}
da.receivers = [];
function Zc(e = "", t = 10) {
  let n = "";
  for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10);
  return e + n;
}
class eA {
  constructor(t) {
    ((this.target = t), (this.handlers = new Set()));
  }
  removeMessageHandler(t) {
    (t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t));
  }
  async _send(t, n, r = 50) {
    const s = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!s) throw new Error("connection_unavailable");
    let i, o;
    return new Promise((a, l) => {
      const c = Zc("", 20);
      s.port1.start();
      const u = setTimeout(() => {
        l(new Error("unsupported_event"));
      }, r);
      ((o = {
        messageChannel: s,
        onMessage(f) {
          const d = f;
          if (d.data.eventId === c)
            switch (d.data.status) {
              case "ack":
                (clearTimeout(u),
                  (i = setTimeout(() => {
                    l(new Error("timeout"));
                  }, 3e3)));
                break;
              case "done":
                (clearTimeout(i), a(d.data.response));
                break;
              default:
                (clearTimeout(u),
                  clearTimeout(i),
                  l(new Error("invalid_response")));
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
          [s.port2],
        ));
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
function ln() {
  return window;
}
function tA(e) {
  ln().location.href = e;
}
function Kp() {
  return (
    typeof ln().WorkerGlobalScope < "u" &&
    typeof ln().importScripts == "function"
  );
}
async function nA() {
  if (!navigator?.serviceWorker) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function rA() {
  return navigator?.serviceWorker?.controller || null;
}
function sA() {
  return Kp() ? self : null;
}
const Gp = "firebaseLocalStorageDb",
  iA = 1,
  Mo = "firebaseLocalStorage",
  Jp = "fbase_key";
class wi {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, n) => {
      (this.request.addEventListener("success", () => {
        t(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        }));
    });
  }
}
function ha(e, t) {
  return e.transaction([Mo], t ? "readwrite" : "readonly").objectStore(Mo);
}
function oA() {
  const e = indexedDB.deleteDatabase(Gp);
  return new wi(e).toPromise();
}
function Kl() {
  const e = indexedDB.open(Gp, iA);
  return new Promise((t, n) => {
    (e.addEventListener("error", () => {
      n(e.error);
    }),
      e.addEventListener("upgradeneeded", () => {
        const r = e.result;
        try {
          r.createObjectStore(Mo, {
            keyPath: Jp,
          });
        } catch (s) {
          n(s);
        }
      }),
      e.addEventListener("success", async () => {
        const r = e.result;
        r.objectStoreNames.contains(Mo)
          ? t(r)
          : (r.close(), await oA(), t(await Kl()));
      }));
  });
}
async function kd(e, t, n) {
  const r = ha(e, !0).put({
    [Jp]: t,
    value: n,
  });
  return new wi(r).toPromise();
}
async function aA(e, t) {
  const n = ha(e, !1).get(t),
    r = await new wi(n).toPromise();
  return r === void 0 ? null : r.value;
}
function Ad(e, t) {
  const n = ha(e, !0).delete(t);
  return new wi(n).toPromise();
}
const lA = 800,
  cA = 3;
class Yp {
  constructor() {
    ((this.type = "LOCAL"),
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
          () => {},
        )));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Kl()), this.db);
  }
  async _withRetries(t) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await t(r);
      } catch (r) {
        if (n++ > cA) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Kp() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    ((this.receiver = da._getInstance(sA())),
      this.receiver._subscribe("keyChanged", async (t, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (t, n) => ["keyChanged"]));
  }
  async initializeSender() {
    if (((this.activeServiceWorker = await nA()), !this.activeServiceWorker))
      return;
    this.sender = new eA(this.activeServiceWorker);
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
        rA() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          {
            key: t,
          },
          this.serviceWorkerReceiverAvailable ? 800 : 50,
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await Kl();
      return (await kd(t, xo, "1"), await Ad(t, xo), !0);
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
        await this._withRetries((r) => kd(r, t, n)),
        (this.localCache[t] = n),
        this.notifyServiceWorker(t)
      ),
    );
  }
  async _get(t) {
    const n = await this._withRetries((r) => aA(r, t));
    return ((this.localCache[t] = n), n);
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => Ad(n, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      ),
    );
  }
  async _poll() {
    const t = await this._withRetries((s) => {
      const i = ha(s, !1).getAll();
      return new wi(i).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    if (t.length !== 0)
      for (const { fbase_key: s, value: i } of t)
        (r.add(s),
          JSON.stringify(this.localCache[s]) !== JSON.stringify(i) &&
            (this.notifyListeners(s, i), n.push(s)));
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
    (this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), lA)));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, n) {
    (Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(n));
  }
  _removeListener(t, n) {
    (this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling());
  }
}
Yp.type = "LOCAL";
const uA = Yp;
new yi(3e4, 6e4);
function Qp(e, t) {
  return t
    ? En(t)
    : (ae(e._popupRedirectResolver, e, "argument-error"),
      e._popupRedirectResolver);
}
class eu extends Yc {
  constructor(t) {
    (super("custom", "custom"), (this.params = t));
  }
  _getIdTokenResponse(t) {
    return Hr(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, n) {
    return Hr(t, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(t) {
    return Hr(t, this._buildIdpRequest());
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
    return (t && (n.idToken = t), n);
  }
}
function fA(e) {
  return Vp(e.auth, new eu(e), e.bypassAuthState);
}
function dA(e) {
  const { auth: t, user: n } = e;
  return (ae(n, t, "internal-error"), Vk(n, new eu(e), e.bypassAuthState));
}
async function hA(e) {
  const { auth: t, user: n } = e;
  return (ae(n, t, "internal-error"), Bk(n, new eu(e), e.bypassAuthState));
}
class Xp {
  constructor(t, n, r, s, i = !1) {
    ((this.auth = t),
      (this.resolver = r),
      (this.user = s),
      (this.bypassAuthState = i),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]));
  }
  execute() {
    return new Promise(async (t, n) => {
      this.pendingPromise = {
        resolve: t,
        reject: n,
      };
      try {
        ((this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this));
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
        return fA;
      case "linkViaPopup":
      case "linkViaRedirect":
        return hA;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return dA;
      default:
        Lt(this.auth, "internal-error");
    }
  }
  resolve(t) {
    (Nn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp());
  }
  reject(t) {
    (Nn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp());
  }
  unregisterAndCleanUp() {
    (this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp());
  }
}
const gA = new yi(2e3, 1e4);
async function Gl(e, t, n) {
  if (_t(e.app))
    return Promise.reject(qt(e, "operation-not-supported-in-this-environment"));
  const r = un(e);
  HT(e, t, Xc);
  const s = Qp(r, n);
  return new mr(r, "signInViaPopup", t, s).executeNotNull();
}
class mr extends Xp {
  constructor(t, n, r, s, i) {
    (super(t, n, s, i),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      mr.currentPopupAction && mr.currentPopupAction.cancel(),
      (mr.currentPopupAction = this));
  }
  async executeNotNull() {
    const t = await this.execute();
    return (ae(t, this.auth, "internal-error"), t);
  }
  async onExecution() {
    Nn(this.filter.length === 1, "Popup operations only handle one event");
    const t = Zc();
    ((this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t,
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(qt(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation());
  }
  get eventId() {
    return this.authWindow?.associatedEvent || null;
  }
  cancel() {
    this.reject(qt(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    (this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (mr.currentPopupAction = null));
  }
  pollUserCancellation() {
    const t = () => {
      if (this.authWindow?.window?.closed) {
        this.pollId = window.setTimeout(() => {
          ((this.pollId = null),
            this.reject(qt(this.auth, "popup-closed-by-user")));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, gA.get());
    };
    t();
  }
}
mr.currentPopupAction = null;
const mA = "pendingRedirect",
  Qi = new Map();
class pA extends Xp {
  constructor(t, n, r = !1) {
    (super(
      t,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r,
    ),
      (this.eventId = null));
  }
  async execute() {
    let t = Qi.get(this.auth._key());
    if (!t) {
      try {
        const r = (await vA(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(r);
      } catch (n) {
        t = () => Promise.reject(n);
      }
      Qi.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        Qi.set(this.auth._key(), () => Promise.resolve(null)),
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
      if (n) return ((this.user = n), super.onAuthEvent(t));
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function vA(e, t) {
  const n = bA(t),
    r = _A(e);
  if (!(await r._isAvailable())) return !1;
  const s = (await r._get(n)) === "true";
  return (await r._remove(n), s);
}
function yA(e, t) {
  Qi.set(e._key(), t);
}
function _A(e) {
  return En(e._redirectPersistence);
}
function bA(e) {
  return Yi(mA, e.config.apiKey, e.name);
}
async function wA(e, t, n = !1) {
  if (_t(e.app)) return Promise.reject(an(e));
  const r = un(e),
    s = Qp(r, t),
    o = await new pA(r, s, n).execute();
  return (
    o &&
      !n &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, t)),
    o
  );
}
const EA = 600 * 1e3;
class SA {
  constructor(t) {
    ((this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now()));
  }
  registerConsumer(t) {
    (this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null)));
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
        !CA(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = t), (n = !0))),
      n
    );
  }
  sendToConsumer(t, n) {
    if (t.error && !Zp(t)) {
      const r = t.error.code?.split("auth/")[1] || "internal-error";
      n.onError(qt(this.auth, r));
    } else n.onAuthEvent(t);
  }
  isEventForConsumer(t, n) {
    const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
    return n.filter.includes(t.type) && r;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= EA &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(Pd(t))
    );
  }
  saveEventToCache(t) {
    (this.cachedEventUids.add(Pd(t)),
      (this.lastProcessedEventTime = Date.now()));
  }
}
function Pd(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId]
    .filter((t) => t)
    .join("-");
}
function Zp({ type: e, error: t }) {
  return e === "unknown" && t?.code === "auth/no-auth-event";
}
function CA(e) {
  switch (e.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Zp(e);
    default:
      return !1;
  }
}
async function IA(e, t = {}) {
  return cn(e, "GET", "/v1/projects", t);
}
const TA = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  kA = /^https?/;
async function AA(e) {
  if (e.config.emulator) return;
  const { authorizedDomains: t } = await IA(e);
  for (const n of t)
    try {
      if (PA(n)) return;
    } catch {}
  Lt(e, "unauthorized-domain");
}
function PA(e) {
  const t = Hl(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith("chrome-extension://")) {
    const o = new URL(e);
    return o.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          e.replace("chrome-extension://", "") ===
            t.replace("chrome-extension://", "")
      : n === "chrome-extension:" && o.hostname === r;
  }
  if (!kA.test(n)) return !1;
  if (TA.test(e)) return r === e;
  const s = e.replace(/\https://wheelofnames.com/assets/g, "\\.");
  return new RegExp("^(.+\\." + s + "|" + s + ")$", "i").test(r);
}
const NA = new yi(3e4, 6e4);
function Nd() {
  const e = ln().___jsl;
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
function RA(e) {
  return new Promise((t, n) => {
    function r() {
      (Nd(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            (Nd(), n(qt(e, "network-request-failed")));
          },
          timeout: NA.get(),
        }));
    }
    if (ln().gapi?.iframes?.Iframe) t(gapi.iframes.getContext());
    else if (ln().gapi?.load) r();
    else {
      const s = bk("iframefcb");
      return (
        (ln()[s] = () => {
          gapi.load ? r() : n(qt(e, "network-request-failed"));
        }),
        Dp(`${_k()}?onload=${s}`).catch((i) => n(i))
      );
    }
  }).catch((t) => {
    throw ((Xi = null), t);
  });
}
let Xi = null;
function OA(e) {
  return ((Xi = Xi || RA(e)), Xi);
}
const LA = new yi(5e3, 15e3),
  xA = "__/auth/iframe",
  MA = "emulator/auth/iframe",
  DA = {
    style: {
      position: "absolute",
      top: "-100px",
      width: "1px",
      height: "1px",
    },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  FA = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function $A(e) {
  const t = e.config;
  ae(t.authDomain, e, "auth-domain-config-required");
  const n = t.emulator ? Kc(t, MA) : `https://${e.config.authDomain}/${xA}`,
    r = {
      apiKey: t.apiKey,
      appName: e.name,
      v: vi,
    },
    s = FA.get(e.config.apiHost);
  s && (r.eid = s);
  const i = e._getFrameworks();
  return (i.length && (r.fw = i.join(",")), `${n}?${pi(r).slice(1)}`);
}
async function UA(e) {
  const t = await OA(e),
    n = ln().gapi;
  return (
    ae(n, e, "internal-error"),
    t.open(
      {
        where: document.body,
        url: $A(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: DA,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (s, i) => {
          await r.restyle({
            setHideOnLeave: !1,
          });
          const o = qt(e, "network-request-failed"),
            a = ln().setTimeout(() => {
              i(o);
            }, LA.get());
          function l() {
            (ln().clearTimeout(a), s(r));
          }
          r.ping(l).then(l, () => {
            i(o);
          });
        }),
    )
  );
}
const BA = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  VA = 500,
  WA = 600,
  jA = "_blank",
  qA = "http://localhost";
class Rd {
  constructor(t) {
    ((this.window = t), (this.associatedEvent = null));
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function HA(e, t, n, r = VA, s = WA) {
  const i = Math.max((window.screen.availHeight - s) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = "";
  const l = {
      ...BA,
      width: r.toString(),
      height: s.toString(),
      top: i,
      left: o,
    },
    c = gt().toLowerCase();
  (n && (a = Pp(c) ? jA : n), kp(c) && ((t = t || qA), (l.scrollbars = "yes")));
  const u = Object.entries(l).reduce((d, [h, m]) => `${d}${h}=${m},`, "");
  if (uk(c) && a !== "_self") return (zA(t || "", a), new Rd(null));
  const f = window.open(t || "", a, u);
  ae(f, e, "popup-blocked");
  try {
    f.focus();
  } catch {}
  return new Rd(f);
}
function zA(e, t) {
  const n = document.createElement("a");
  ((n.href = e), (n.target = t));
  const r = document.createEvent("MouseEvent");
  (r.initMouseEvent(
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
    null,
  ),
    n.dispatchEvent(r));
}
const KA = "__/auth/handler",
  GA = "emulator/auth/handler",
  JA = encodeURIComponent("fac");
async function Od(e, t, n, r, s, i) {
  (ae(e.config.authDomain, e, "auth-domain-config-required"),
    ae(e.config.apiKey, e, "invalid-api-key"));
  const o = {
    apiKey: e.config.apiKey,
    appName: e.name,
    authType: n,
    redirectUrl: r,
    v: vi,
    eventId: s,
  };
  if (t instanceof Xc) {
    (t.setDefaultLanguage(e.languageCode),
      (o.providerId = t.providerId || ""),
      AI(t.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(t.getCustomParameters())));
    for (const [u, f] of Object.entries({})) o[u] = f;
  }
  if (t instanceof bi) {
    const u = t.getScopes().filter((f) => f !== "");
    u.length > 0 && (o.scopes = u.join(","));
  }
  e.tenantId && (o.tid = e.tenantId);
  const a = o;
  for (const u of Object.keys(a)) a[u] === void 0 && delete a[u];
  const l = await e._getAppCheckToken(),
    c = l ? `#${JA}=${encodeURIComponent(l)}` : "";
  return `${YA(e)}?${pi(a).slice(1)}${c}`;
}
function YA({ config: e }) {
  return e.emulator ? Kc(e, GA) : `https://${e.authDomain}/${KA}`;
}
const Ga = "webStorageSupport";
class QA {
  constructor() {
    ((this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = zp),
      (this._completeRedirectFn = wA),
      (this._overrideRedirectResult = yA));
  }
  async _openPopup(t, n, r, s) {
    Nn(
      this.eventManagers[t._key()]?.manager,
      "_initialize() not called before _openPopup()",
    );
    const i = await Od(t, n, r, Hl(), s);
    return HA(t, i, Zc());
  }
  async _openRedirect(t, n, r, s) {
    await this._originValidation(t);
    const i = await Od(t, n, r, Hl(), s);
    return (tA(i), new Promise(() => {}));
  }
  _initialize(t) {
    const n = t._key();
    if (this.eventManagers[n]) {
      const { manager: s, promise: i } = this.eventManagers[n];
      return s
        ? Promise.resolve(s)
        : (Nn(i, "If manager is not set, promise should be"), i);
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
    const n = await UA(t),
      r = new SA(t);
    return (
      n.register(
        "authEvent",
        (s) => (
          ae(s?.authEvent, t, "invalid-auth-event"),
          {
            status: r.onEvent(s.authEvent) ? "ACK" : "ERROR",
          }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
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
      Ga,
      {
        type: Ga,
      },
      (s) => {
        const i = s?.[0]?.[Ga];
        (i !== void 0 && n(!!i), Lt(t, "internal-error"));
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    );
  }
  _originValidation(t) {
    const n = t._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = AA(t)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return xp() || Ap() || Jc();
  }
}
const XA = QA;
var Ld = "@firebase/auth",
  xd = "1.12.0";
class ZA {
  constructor(t) {
    ((this.auth = t), (this.internalListeners = new Map()));
  }
  getUid() {
    return (this.assertAuthConfigured(), this.auth.currentUser?.uid || null);
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
    (this.internalListeners.set(t, n), this.updateProactiveRefresh());
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(t);
    n && (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    ae(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth",
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
function eP(e) {
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
function tP(e) {
  (si(
    new ts(
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
            sdkClientVersion: Mp(e),
          },
          c = new pk(r, s, i, l);
        return (Tk(c, n), c);
      },
      "PUBLIC",
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider("auth-internal").initialize();
      }),
  ),
    si(
      new ts(
        "auth-internal",
        (t) => {
          const n = un(t.getProvider("auth").getImmediate());
          return ((r) => new ZA(r))(n);
        },
        "PRIVATE",
      ).setInstantiationMode("EXPLICIT"),
    ),
    Wr(Ld, xd, eP(e)),
    Wr(Ld, xd, "esm2020"));
}
const nP = 300,
  rP = dp("authIdTokenMaxAge") || nP;
let Md = null;
const sP = (e) => async (t) => {
  const n = t && (await t.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > rP) return;
  const s = n?.token;
  Md !== s &&
    ((Md = s),
    await fetch(e, {
      method: s ? "POST" : "DELETE",
      headers: s
        ? {
            Authorization: `Bearer ${s}`,
          }
        : {},
    }));
};
function iP(e = NT()) {
  const t = pp(e, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const n = Ik(e, {
      popupRedirectResolver: XA,
      persistence: [uA, Xk, zp],
    }),
    r = dp("authTokenSyncURL");
  if (r && typeof isSecureContext == "boolean" && isSecureContext) {
    const i = new URL(r, location.origin);
    if (location.origin === i.origin) {
      const o = sP(i.toString());
      (Jk(n, o, () => o(n.currentUser)), Gk(n, (a) => o(a)));
    }
  }
  const s = dI("auth");
  return (s && kk(n, `http://${s}`), n);
}
function oP() {
  return document.getElementsByTagName("head")?.[0] ?? document;
}
vk({
  loadJS(e) {
    return new Promise((t, n) => {
      const r = document.createElement("script");
      (r.setAttribute("src", e),
        (r.onload = t),
        (r.onerror = (s) => {
          const i = qt("internal-error");
          ((i.customData = s), n(i));
        }),
        (r.type = "text/javascript"),
        (r.charset = "UTF-8"),
        oP().appendChild(r));
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
tP("Browser");
const aP = [
    {
      partialName: "noms",
      locale: "fr",
    },
  ],
  ga = [
    {
      name: "am",
      googleName: "am_ET",
      twitterName: "am",
      file: "am-ET.json",
      englishName: "Amharic",
      localName: "አማርኛ",
    },
    {
      name: "ar",
      googleName: "ar_AR",
      twitterName: "ar",
      file: "ar-EG.json",
      englishName: "Arabic",
      localName: "العربية",
    },
    {
      name: "az",
      googleName: "az_AZ",
      twitterName: "az",
      file: "az-Latn-AZ.json",
      englishName: "Azerbaijani",
      localName: "Azərbaycanca",
    },
    {
      name: "be",
      googleName: "be_BY",
      twitterName: "be",
      file: "be-BY.json",
      englishName: "Belarusian",
      localName: "Беларуская",
    },
    {
      name: "bg",
      googleName: "bg_BG",
      twitterName: "bg",
      file: "bg-BG.json",
      englishName: "Bulgarian",
      localName: "български",
    },
    {
      name: "bn",
      googleName: "bn_IN",
      twitterName: "bn",
      file: "bn-IN.json",
      englishName: "Bengali",
      localName: "বাংলা",
    },
    {
      name: "bs",
      googleName: "bs_BA",
      twitterName: "bs",
      file: "bs-Latn-BA.json",
      englishName: "Bosnian",
      localName: "Bosanski",
    },
    {
      name: "ca",
      googleName: "ca_ES",
      twitterName: "ca",
      file: "ca-ES.json",
      englishName: "Catalan",
      localName: "Català",
    },
    {
      name: "cs",
      googleName: "cs_CZ",
      twitterName: "cs",
      file: "cs-CZ.json",
      englishName: "Czech",
      localName: "Čeština",
    },
    {
      name: "cy",
      googleName: "cy_GB",
      twitterName: "cy",
      file: "cy-GB.json",
      englishName: "Welsh",
      localName: "Cymraeg",
    },
    {
      name: "da",
      googleName: "da_DK",
      twitterName: "da",
      file: "da-DK.json",
      englishName: "Danish",
      localName: "Dansk",
    },
    {
      name: "de",
      googleName: "de_DE",
      twitterName: "de",
      file: "de-DE.json",
      englishName: "German",
      localName: "Deutsch",
    },
    {
      name: "el",
      googleName: "el_GR",
      twitterName: "el",
      file: "el-GR.json",
      englishName: "Greek",
      localName: "Eλληνικά",
    },
    {
      name: "en-PI",
      googleName: "en_US",
      twitterName: "en",
      file: "en-PI.json",
      englishName: "English (Pirate)",
      localName: "English (Pirate)",
    },
    {
      name: "en",
      googleName: "en_US",
      twitterName: "en",
      file: "en-US.json",
      englishName: "English",
      localName: "English",
    },
    {
      name: "es",
      googleName: "es_ES",
      twitterName: "es",
      file: "es-ES.json",
      englishName: "Spanish",
      localName: "Español",
    },
    {
      name: "et",
      googleName: "et_EE",
      twitterName: "et",
      file: "et-EE.json",
      englishName: "Estonian",
      localName: "Eesti",
    },
    {
      name: "fa",
      googleName: "fa_IR",
      twitterName: "fa",
      file: "fa-IR.json",
      englishName: "Persian",
      localName: "فارسی",
    },
    {
      name: "fi",
      googleName: "fi_FI",
      twitterName: "fi",
      file: "fi-FI.json",
      englishName: "Finnish",
      localName: "Suomi",
    },
    {
      name: "fil",
      googleName: "fil_PH",
      twitterName: "fil",
      file: "fil-PH.json",
      englishName: "Filipino",
      localName: "Filipino",
    },
    {
      name: "fr",
      googleName: "fr_FR",
      twitterName: "fr",
      file: "fr-FR.json",
      englishName: "French",
      localName: "Français",
    },
    {
      name: "gl",
      googleName: "gl_ES",
      twitterName: "gl",
      file: "gl-ES.json",
      englishName: "Galician",
      localName: "Galego",
    },
    {
      name: "gu",
      googleName: "gu_IN",
      twitterName: "gu",
      file: "gu-IN.json",
      englishName: "Gujarati",
      localName: "ગુજરાતી",
    },
    {
      name: "he",
      googleName: "he_IL",
      twitterName: "he",
      file: "he-IL.json",
      englishName: "Hebrew",
      localName: "עברית",
    },
    {
      name: "hi",
      googleName: "hi_IN",
      twitterName: "hi",
      file: "hi-IN.json",
      englishName: "Hindi",
      localName: "हिंदी",
    },
    {
      name: "hr",
      googleName: "hr_HR",
      twitterName: "hr",
      file: "hr-HR.json",
      englishName: "Croatian",
      localName: "Hrvatski",
    },
    {
      name: "hu",
      googleName: "hu_HU",
      twitterName: "hu",
      file: "hu-HU.json",
      englishName: "Hungarian",
      localName: "Magyar",
    },
    {
      name: "hy",
      googleName: "hy_AM",
      twitterName: "hy",
      file: "hy-AM.json",
      englishName: "Armenian",
      localName: "Հայերեն",
    },
    {
      name: "id",
      googleName: "id_ID",
      twitterName: "id",
      file: "id-ID.json",
      englishName: "Indonesian",
      localName: "Bahasa Indonesia",
    },
    {
      name: "is",
      googleName: "is_IS",
      twitterName: "is",
      file: "is-IS.json",
      englishName: "Icelandic",
      localName: "Íslenskur",
    },
    {
      name: "it",
      googleName: "it_IT",
      twitterName: "it",
      file: "it-IT.json",
      englishName: "Italian",
      localName: "Italiano",
    },
    {
      name: "ja",
      googleName: "ja_JP",
      twitterName: "ja",
      file: "ja-JP.json",
      englishName: "Japanese",
      localName: "日本語",
    },
    {
      name: "ka",
      googleName: "ka_GE",
      twitterName: "ka",
      file: "ka-GE.json",
      englishName: "Georgian",
      localName: "ქართული",
    },
    {
      name: "kk",
      googleName: "kk_KZ",
      twitterName: "kk",
      file: "kk-KZ.json",
      englishName: "Kazakh",
      localName: "Қазақ тілі",
    },
    {
      name: "kn",
      googleName: "kn_IN",
      twitterName: "kn",
      file: "kn-IN.json",
      englishName: "Kannada",
      localName: "ಕನ್ನಡ",
    },
    {
      name: "ko",
      googleName: "ko_KR",
      twitterName: "ko",
      file: "ko-KR.json",
      englishName: "Korean",
      localName: "한국어",
    },
    {
      name: "lo",
      googleName: "lo_LA",
      twitterName: "lo",
      file: "lo-LA.json",
      englishName: "Lao",
      localName: "ພາສາລາວ",
    },
    {
      name: "lt",
      googleName: "lt_LT",
      twitterName: "lt",
      file: "lt-LT.json",
      englishName: "Lithuanian",
      localName: "Lietuvių",
    },
    {
      name: "lv",
      googleName: "lv_LV",
      twitterName: "lv",
      file: "lv-LV.json",
      englishName: "Latvian",
      localName: "Latviešu",
    },
    {
      name: "mk",
      googleName: "mk_MK",
      twitterName: "mk",
      file: "mk-MK.json",
      englishName: "Macedonian",
      localName: "Mакедонски",
    },
    {
      name: "ml",
      googleName: "ml_IN",
      twitterName: "ml",
      file: "ml-IN.json",
      englishName: "Malayalam",
      localName: "മലയാളം",
    },
    {
      name: "mn",
      googleName: "mn_MN",
      twitterName: "mn",
      file: "mn-MN.json",
      englishName: "Mongolian",
      localName: "Mонгол",
    },
    {
      name: "ms",
      googleName: "ms_MY",
      twitterName: "ms",
      file: "ms-MY.json",
      englishName: "Malay",
      localName: "Bahasa Melayu",
    },
    {
      name: "my",
      googleName: "my_MM",
      twitterName: "my",
      file: "my-MM.json",
      englishName: "Burmese",
      localName: "မြန်မာစာ",
    },
    {
      name: "nl",
      googleName: "nl_NL",
      twitterName: "nl",
      file: "nl-NL.json",
      englishName: "Dutch",
      localName: "Nederlands",
    },
    {
      name: "no",
      googleName: "nb_NO",
      twitterName: "no",
      file: "nb-NO.json",
      englishName: "Norwegian",
      localName: "Norsk",
    },
    {
      name: "pa",
      googleName: "pa_IN",
      twitterName: "pa",
      file: "pa-IN.json",
      englishName: "Punjabi",
      localName: "ਪੰਜਾਬੀ",
    },
    {
      name: "pl",
      googleName: "pl_PL",
      twitterName: "pl",
      file: "pl-PL.json",
      englishName: "Polish",
      localName: "Polski",
    },
    {
      name: "pt",
      googleName: "pt_BR",
      twitterName: "pt",
      file: "pt-PT.json",
      englishName: "Portuguese",
      localName: "Português",
    },
    {
      name: "ro",
      googleName: "ro_RO",
      twitterName: "ro",
      file: "ro-RO.json",
      englishName: "Romanian",
      localName: "Română",
    },
    {
      name: "ru",
      googleName: "ru_RU",
      twitterName: "ru",
      file: "ru-RU.json",
      englishName: "Russian",
      localName: "Pусский",
    },
    {
      name: "sd",
      googleName: "sd_PK",
      twitterName: "sd",
      file: "sd-PK.json",
      englishName: "Sindhi",
      localName: "سنڌي",
    },
    {
      name: "sl",
      googleName: "sl_SL",
      twitterName: "sl",
      file: "sl-SI.json",
      englishName: "Slovenian",
      localName: "Slovenščina",
    },
    {
      name: "so",
      googleName: "so_SO",
      twitterName: "so",
      file: "so-SO.json",
      englishName: "Somali",
      localName: "Soomaali",
    },
    {
      name: "sq",
      googleName: "sq_AL",
      twitterName: "sq",
      file: "sq-AL.json",
      englishName: "Albanian",
      localName: "Shqip",
    },
    {
      name: "sr",
      googleName: "sr_SP",
      twitterName: "sr",
      file: "sr-Latn-RS.json",
      englishName: "Serbian",
      localName: "Srpski",
    },
    {
      name: "sv",
      googleName: "sv_SE",
      twitterName: "sv",
      file: "sv-SE.json",
      englishName: "Swedish",
      localName: "Svenska",
    },
    {
      name: "ta",
      googleName: "ta_IN",
      twitterName: "ta",
      file: "ta-IN.json",
      englishName: "Tamil",
      localName: "தமிழ்",
    },
    {
      name: "th",
      googleName: "th_TH",
      twitterName: "th",
      file: "th-TH.json",
      englishName: "Thai",
      localName: "ไทย",
    },
    {
      name: "tr",
      googleName: "tr_TR",
      twitterName: "tr",
      file: "tr-TR.json",
      englishName: "Turkish",
      localName: "Türkçe",
    },
    {
      name: "uk",
      googleName: "uk_UA",
      twitterName: "uk",
      file: "uk-UA.json",
      englishName: "Ukrainian",
      localName: "Українська",
    },
    {
      name: "ur",
      googleName: "ur_PK",
      twitterName: "ur",
      file: "ur-PK.json",
      englishName: "Urdu",
      localName: "اردو",
    },
    {
      name: "uz",
      googleName: "uz_UZ",
      twitterName: "uz",
      file: "uz-Latn-UZ.json",
      englishName: "Uzbek",
      localName: "Oʻzbekcha",
    },
    {
      name: "vi",
      googleName: "vi_VN",
      twitterName: "vi",
      file: "vi-VN.json",
      englishName: "Vietnamese",
      localName: "Tiếng Việt",
    },
    {
      name: "zh-CN",
      googleName: "zh_CN",
      twitterName: "zh-cn",
      file: "zh-CN.json",
      englishName: "Chinese (Simplified)",
      localName: "简体中文",
    },
    {
      name: "zh-HK",
      googleName: "zh_TW",
      twitterName: "zh-tw",
      file: "zh-HK.json",
      englishName: "Chinese (Traditional)",
      localName: "繁體中文",
    },
  ];
function lP(e, t) {
  return mP(e) === t ? "/" : `/${t}/`;
}
function HR(e, t, n) {
  return `${e}${lP(e, t)}/${n}`.replace("//", "/");
}
function ev(e, t) {
  const n = ga.find((s) => s.name === t),
    r = e.toLowerCase() === "twitter" ? "twitterName" : "googleName";
  return n?.[r] || "en_US";
}
function zR(e) {
  return ga.find((t) => t.name === e)?.file.slice(0, -5) || "en-US";
}
function KR(e, t) {
  const n = Dd("")(t);
  return aa(tv, cP(e), Dd({}), (r) => r.name ?? "")([n]);
}
function GR(e) {
  return Array.isArray(e) ? aa(tv, fP, hP)(e) : [];
}
function JR() {
  return ga
    .map((e) => ({
      name: e.name,
      localName: e.localName,
      englishName: e.englishName,
    }))
    .sort(uP);
}
function cP(e) {
  return (t) => t.filter((n) => !nv(e, n.name));
}
function tv(e) {
  return ga.filter((t) => e.some((n) => nv(n, t.name)));
}
function Dd(e) {
  return (t) => t?.[0] ?? e;
}
function uP(e, t) {
  return e.localName.localeCompare(t.localName);
}
function fP(e) {
  return e.filter((t) => !dP(t));
}
function dP(e) {
  return e.name === "en-PI";
}
function hP(e) {
  return e.map(gP);
}
function gP(e) {
  return {
    name: e.name,
    localName: e.localName,
  };
}
function mP(e) {
  return aP.find((t) => e.includes(t.partialName))?.locale || "en";
}
function nv(e, t) {
  return e.length === t.length ? e === t : Fd(e) === Fd(t);
}
function Fd(e) {
  return e.split("-")[0];
}
const pP = vp({
    apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
    authDomain: "wheel-of-names-firebase.firebaseapp.com",
    databaseURL: "https://wheel-of-names-firebase.firebaseio.com",
    projectId: "wheel-of-names-firebase",
  }),
  Ct = iP(pP);
async function vP() {
  const e = await rs();
  return !!e && !e.isAnonymous;
}
async function rs() {
  return (
    Ct.currentUser ||
    new Promise((e) => {
      Ct.onAuthStateChanged((t) => e(t));
    })
  );
}
async function $e() {
  return (await (await rs())?.getIdToken()) ?? "";
}
async function YR() {
  return (await rs())?.uid;
}
async function Ja() {
  const e = await rs();
  if (e?.isAnonymous) return await e.getIdToken();
}
async function yP() {
  return (await Uk(Ct), Ct.currentUser);
}
async function _P(e, t) {
  if (((Ct.languageCode = ev("Google", e)), t === "google")) {
    const n = new Ut();
    return (
      n.setCustomParameters({
        prompt: "select_account",
      }),
      (await Gl(Ct, n)).user
    );
  }
  if (t === "twitter") return (await Gl(Ct, new yn())).user;
}
async function bP(e, t) {
  return (await Hk(Ct, e, t)).user;
}
async function wP(e, t, n) {
  const r = await qk(Ct, e, t);
  return (
    await Kk(r.user, {
      displayName: n,
    }),
    r.user
  );
}
async function EP(e) {
  await jk(Ct, e);
}
async function SP(e) {
  Ct.languageCode = ev("Google", e);
  const t = new Ut();
  for (const r of RC) t.addScope(r);
  t.setCustomParameters({
    prompt: "select_account",
  });
  const n = await Gl(Ct, t);
  return Ut.credentialFromResult(n)?.accessToken;
}
async function $d() {
  await Ct.signOut();
}
async function QR(e, t) {
  return (await Je("GET", `api/v2/admin/wheels/${t}`, e)).data;
}
async function XR(e, t, n) {
  let r = `api/v2/admin/users/${e}/wheels`;
  return (
    n && n.length > 0 && (r += `?fields=${n}`),
    (await Je("GET", r, t)).data.wheels
  );
}
async function CP(e, t) {
  return (await Je("GET", `api/v2/admin/users/${t}`, e)).data;
}
async function ZR(e) {
  return (await Je("GET", "api/v2/admin/review-queue", e)).data;
}
async function eO(e, t) {
  return (
    await Je("POST", "api/v2/admin/translate", e, {
      texts: t,
    })
  ).data.translations;
}
async function rv(e) {
  try {
    return (await Je("GET", "api/v2/admin", e)).data.isAdmin;
  } catch {
    return !1;
  }
}
async function tO(e, t, n) {
  await Je("PUT", "api/v2/admin/administrators", e, {
    uid: t,
    totalReviews: n,
  });
}
async function nO(e, t, n) {
  await Je("PUT", "api/v2/admin/administrators", e, {
    uid: t,
    sessionReviews: n,
  });
}
async function rO(e) {
  return (await Je("GET", "api/v2/admin/dirty-words", e)).data.dirtyWords;
}
async function sO(e, t) {
  await Je("PUT", "api/v2/admin/dirty-words", e, {
    dirtyWords: t,
  });
}
async function iO(e) {
  return (await Je("GET", "api/v2/admin/administrators", e)).data
    .administrators;
}
async function oO(e, t, n) {
  await Je("POST", "api/v2/admin/administrators", e, {
    uid: t,
    name: n,
  });
}
async function aO(e, t) {
  await Je("DELETE", "api/v2/admin/administrators", e, {
    uid: t,
  });
}
async function lO(e, t) {
  const n = `api/v2/admin/wheels/${t}`;
  await Je("PUT", n, e, {
    shareMode: "copyable",
  });
}
async function cO(e, t) {
  await Je("DELETE", `api/v2/admin/wheels/${t}`, e);
}
async function uO(e) {
  return (await Je("GET", "api/v2/admin/review-queue/next-shared-wheel", e))
    .data.wheel;
}
async function fO(e) {
  return (await Je("GET", "api/v2/admin/review-queue/next-gallery-wheel", e))
    .data.wheel;
}
async function dO(e, t) {
  const n = `api/v2/admin/review-queue/approve/${t}`;
  await Je("POST", n, e);
}
async function hO(e, t) {
  await Je("POST", `api/v2/admin/review-queue/reject/${t}`, e);
}
async function IP(e, t, n) {
  const r = `api/v2/admin/wheels/thumbnails/${t}?size=${n}`;
  return await TP("GET", r, e);
}
async function Je(e, t, n, r) {
  return await sp(e, t, n, r);
}
async function TP(e, t, n, r) {
  return await ip(e, t, n);
}
const kP = Lc("user", {
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
        ((this.userDisplayName = e.displayName ?? ""),
          (this.userPhotoUrl = e.photoURL || "images/user_profile.png"),
          (this.uid = e.uid ?? ""));
        const t = e.providerData[0]?.providerId ?? "unknown";
        this.loginProvider = AP[t] ?? "";
      },
      clearUser() {
        ((this.userDisplayName = ""),
          (this.userPhotoUrl = ""),
          (this.uid = ""),
          (this.loginProvider = ""),
          (this.premium = null),
          (this.admin = !1));
      },
      async userIsLoggedIn() {
        const e = await vP();
        if (e) {
          const t = await rs();
          this.setUser(t);
        }
        return e;
      },
      async logOut() {
        (await $d(), this.clearUser());
      },
      async deleteAccount() {
        const e = await $e();
        (await YC(e), $d(), this.clearUser());
      },
      async logInAnonymously() {
        await yP();
      },
      async logInWithPopup(e, t) {
        const n = await Ja(),
          r = await _P(e, t);
        if (!r) throw new Error("Login failed");
        this.setUser(r);
        const s = await $e();
        (await id(s), n && (await Va(n, s)));
      },
      async logInWithEmail(e, t, n) {
        const r = await Ja(),
          s = await (n ? wP(e, t, n) : bP(e, t));
        if (!s) throw new Error("Login failed");
        this.setUser(s);
        const i = await $e();
        (await id(i), r && (await Va(r, i)));
      },
      async logInToSheets(e) {
        const t = await Ja(),
          n = await SP(e),
          r = await rs();
        if ((this.setUser(r), t)) {
          const s = await $e();
          await Va(t, s);
        }
        return n;
      },
      async sendPasswordResetEmail(e) {
        await EP(e);
      },
      async setPremiumStatus() {
        if (this.premium) return;
        const e = await $e();
        this.premium = await QC(e);
      },
      async userIsAdmin() {
        const e = await $e();
        try {
          return await rv(e);
        } catch {
          return !1;
        }
      },
      async getAccount(e) {
        const t = await $e();
        return await CP(t, e);
      },
      async getUserIdToken() {
        return await $e();
      },
      async getSavedWheels(e) {
        const t = await $e();
        return (await qC(t, e)).sort((r, s) =>
          r.wheelConfig.title.localeCompare(s.wheelConfig.title, "en", {
            numeric: !0,
            sensitivity: "base",
          }),
        );
      },
      async loadWheel(e) {
        const t = await $e();
        return await HC(e, t);
      },
      async loadMyWheels(e) {
        const t = await $e();
        return await zC(t, e);
      },
      async saveWheel(e) {
        const t = await $e();
        return await KC(t, e);
      },
      async getSharedWheels(e) {
        const t = await $e();
        return await jC(t, e);
      },
      async shareWheel(e, t) {
        const n = await $e();
        return await WC({
          idToken: n,
          wheelConfig: e,
          shareMode: t,
        });
      },
      async updateWheel(e, t, n) {
        const r = await $e();
        return await GC(r, e, {
          wheelConfig: t,
          shareMode: n,
        });
      },
      async deleteWheel(e) {
        const t = await $e();
        return await JC(t, e);
      },
      async generateApiKey() {
        const e = await $e();
        return await XC(e);
      },
      async getExistingApiKey() {
        const e = await $e();
        return await eI(e);
      },
      async deleteExistingApiKey() {
        const e = await $e();
        await ZC(e);
      },
      async getWheelThumbnail(e, t) {
        const n = await $e();
        return this.admin ? await IP(n, e, t) : await tI(n, e, t);
      },
    },
  }),
  AP = {
    "google.com": "Google",
    "twitter.com": "Twitter",
    password: "email",
  },
  PP = RP(),
  NP = Lc("wheel", {
    state: () => ({
      busyWheels: new Set(),
      wheels: PP,
      sheetLinked: !1,
      winnerEntry: {},
      winners: [],
      unsavedChanges: !1,
      previousWheels: "",
    }),
    getters: {
      wheelIsBusy: (e) => !!e.busyWheels.size,
      wheelCount: (e) => e.wheels.length || 1,
      multiWheel: (e) => e.wheels.length > 1,
    },
    actions: {
      addWheel(e) {
        (this.wheels.push({
          wheelConfig: Ud(new wt(e?.wheelConfig)),
          path: e?.path ?? "",
          shareMode: e?.shareMode ?? null,
        }),
          this.persistWheels());
      },
      removeWheel(e) {
        (this.wheels.splice(e, 1), this.persistWheels());
      },
      setWheelBusy(e, t) {
        t ? this.busyWheels.add(e) : this.busyWheels.delete(e);
      },
      isWheelBusy(e) {
        return this.busyWheels.has(e);
      },
      setWheels(e) {
        ((this.wheels = e.map((t) => ({
          wheelConfig: Ud(Vc(t.wheelConfig)),
          path: t.path,
          shareMode: t.shareMode,
        }))),
          (this.unsavedChanges = !1),
          this.persistWheels(),
          (this.winners = []));
      },
      setWheelConfig(e, t) {
        ((this.wheels[t].wheelConfig = e), this.persistWheels());
      },
      copyWheel(e) {
        this.setWheels([
          {
            wheelConfig: e,
            path: "",
            shareMode: null,
          },
        ]);
      },
      saveWheelsForUndo() {
        this.previousWheels = JSON.stringify(this.wheels);
      },
      undoWheelsChange() {
        this.setWheels(JSON.parse(this.previousWheels));
      },
      persistWheels() {
        try {
          localStorage.setItem(
            "LastWheels",
            JSON.stringify({
              wheels: this.wheels.map((e) => ({
                wheelConfig: e.wheelConfig.getValues(),
                shareMode: e.shareMode,
                path: e.path,
              })),
            }),
          );
        } catch {
          console.error("Error saving wheel to local storage");
        }
      },
      setWheelTitle(e, t) {
        ((this.wheels[t].wheelConfig.title = e),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      setWheelDescription(e, t) {
        ((this.wheels[t].wheelConfig.description = e),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      setShowTitle(e, t) {
        ((this.wheels[t].wheelConfig.showTitle = e),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      setEntries(e, t) {
        ((this.wheels[t].wheelConfig.entries = xc(e)),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      shuffleEntries(e) {
        const { wheelConfig: t } = this.wheels[e];
        ((t.entries = SS(t.entries)),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      sortEntries(e) {
        const { wheelConfig: t } = this.wheels[e];
        ((t.entries = Yf(fe(t.entries))),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      addEntry(e, t) {
        const { entries: n } = this.wheels[t].wheelConfig;
        (n.push({
          ...e,
          id: Gi(),
        }),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      enableAllEntries(e) {
        const { wheelConfig: t } = this.wheels[e];
        ((t.entries = t.entries.map((n) => ({
          ...n,
          enabled: !0,
        }))),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      setEntryText(e, t, n) {
        const r = this.wheels[n].wheelConfig.entries.at(e);
        r && ((r.text = t), this.persistWheels(), (this.unsavedChanges = !0));
      },
      unsetEntryImage(e, t) {
        const n = this.wheels[t].wheelConfig.entries.at(e);
        if (n) {
          const { image: r, ...s } = n;
          ((this.wheels[t].wheelConfig.entries[e] = s),
            this.persistWheels(),
            (this.unsavedChanges = !0));
        }
      },
      setEntryColor(e, t, n) {
        const r = this.wheels[n].wheelConfig.entries.at(e);
        r && ((r.color = t), this.persistWheels(), (this.unsavedChanges = !0));
      },
      unsetEntryColor(e, t) {
        const n = this.wheels[t].wheelConfig.entries.at(e);
        if (n) {
          const { color: r, ...s } = n;
          ((this.wheels[t].wheelConfig.entries[e] = s),
            this.persistWheels(),
            (this.unsavedChanges = !0));
        }
      },
      setEntryEnabled(e, t, n) {
        const r = this.wheels[n].wheelConfig.entries.at(e);
        r &&
          ((r.enabled = t), this.persistWheels(), (this.unsavedChanges = !0));
      },
      setEntryWeight(e, t, n) {
        const r = this.wheels[n].wheelConfig.entries.at(e);
        r && ((r.weight = t), this.persistWheels(), (this.unsavedChanges = !0));
      },
      removeEntryByIndex(e, t) {
        (this.wheels[t].wheelConfig.entries.splice(e, 1),
          this.persistWheels(),
          (this.sheetLinked = !1),
          (this.unsavedChanges = !0));
      },
      removeEntry(e, t) {
        const { wheelConfig: n } = this.wheels[t];
        ((n.entries = n.entries.filter((r) => r.id !== e.id)),
          this.persistWheels(),
          (this.sheetLinked = !1),
          (this.unsavedChanges = !0));
      },
      removeEntryAll(e, t) {
        const { wheelConfig: n } = this.wheels[t];
        ((n.entries = n.entries.filter(
          (r) =>
            (r.text && r.text.trim() !== e.text?.trim()) ||
            (r.image && r.image !== e.image),
        )),
          this.persistWheels(),
          (this.sheetLinked = !1),
          (this.unsavedChanges = !0));
      },
      hideEntry(e, t) {
        const n = this.wheels[t].wheelConfig.entries.find((r) => r.id === e.id);
        n &&
          ((n.enabled = !1), this.persistWheels(), (this.unsavedChanges = !0));
      },
      moveEntry(e, t, n) {
        const r = e + t,
          s = this.wheels[n].wheelConfig.entries;
        r < 0 ||
          r >= s.length ||
          (([s[e], s[r]] = [s[r], s[e]]),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      duplicateEntry(e, t) {
        const { wheelConfig: n } = this.wheels[t],
          s = {
            ...n.entries.at(e),
            id: Gi(),
          };
        (n.entries.splice(e + 1, 0, s),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      setColorValues(e, t) {
        (this.wheels[t].wheelConfig.setColorValues(e),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      setHubSize(e, t) {
        ((this.wheels[t].wheelConfig.hubSize = e),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      setUploadedCenterImage(e, t, n) {
        const { wheelConfig: r } = this.wheels[n];
        ((r.type = "color"),
          r.setUploadedCenterImage(e, t),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      setUploadedBackgroundImage(e, t, n) {
        const { wheelConfig: r } = this.wheels[n];
        ((r.type = "image"),
          r.setUploadedBackgroundImage(e, t),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      setGalleryBackgroundImage(e, t) {
        const { wheelConfig: n } = this.wheels[t];
        ((n.type = "image"),
          n.setGalleryBackgroundImage(e),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      setGalleryCenterImage(e, t) {
        const { wheelConfig: n } = this.wheels[t];
        ((n.type = "color"),
          n.setGalleryCenterImage(e),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      setAnimateWinner(e, t) {
        ((this.wheels[t].wheelConfig.animateWinner = e),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      linkSheet() {
        this.multiWheel ||
          ((this.sheetLinked = !0), (this.unsavedChanges = !0));
      },
      unlinkSheet() {
        this.sheetLinked = !1;
      },
      setPath(e, t) {
        this.wheels[t].path = e;
      },
      setShareMode(e, t) {
        this.wheels[t].shareMode = e;
      },
      addWinner(e) {
        ((this.winnerEntry = e), this.winners.push(e));
      },
      sortWinners() {
        this.winners = Yf(this.winners);
      },
      clearWinners() {
        this.winners = [];
      },
      setVolumes(e, t, n) {
        const { wheelConfig: r } = this.wheels[n];
        ((r.duringSpinSoundVolume = e),
          (r.afterSpinSoundVolume = t),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      resetWheel() {
        (this.unlinkSheet(),
          this.setWheels([
            {
              wheelConfig: new wt(),
              shareMode: null,
              path: "",
            },
          ]),
          this.clearWinners(),
          (this.unsavedChanges = !1));
      },
      addImageEntry(e, t) {
        (this.wheels[t].wheelConfig.entries.push({
          image: e,
          id: Gi(),
        }),
          this.persistWheels(),
          (this.unsavedChanges = !0));
      },
      async addImageToEntry(e, t, n) {
        const r = this.wheels[n].wheelConfig.entries.at(t);
        if (r) {
          const s = await Qf(e);
          (Xf(s) || (r.color = ri(s).slice(0, 7)),
            (r.image = e),
            this.persistWheels(),
            (this.unsavedChanges = !0));
        }
      },
      async setAdvanced(e, t) {
        const { wheelConfig: n } = this.wheels[t];
        if (((n.isAdvanced = e), e))
          for (const r of n.entries) {
            if (r.image) {
              const s = await Qf(r.image);
              Xf(s) || (r.color = ri(s).slice(0, 7));
            }
            ((r.weight = 1), (r.enabled = !0));
          }
        else {
          for (let r = 0; r < n.entries.length; r++) {
            const {
              color: s,
              weight: i,
              enabled: o,
              sound: a,
              message: l,
              ...c
            } = n.entries[r];
            n.entries[r] = c;
          }
          n.entries = n.entries.filter((r) => r.text || r.image);
        }
        (this.persistWheels(), (this.unsavedChanges = !0));
      },
    },
  });
function RP() {
  try {
    const e = localStorage.getItem("LastWheels");
    if (e)
      return JSON.parse(e).wheels.map((i) => ({
        wheelConfig: new wt(i.wheelConfig),
        path: i.path,
        shareMode: i.shareMode,
      }));
    const t = localStorage.getItem("LastWheel");
    if (t) {
      const { wheelConfig: r, shareMode: s, path: i } = JSON.parse(t);
      return [
        {
          wheelConfig: new wt(r),
          shareMode: s,
          path: i,
        },
      ];
    }
    const n = localStorage.getItem("LastWheelConfig");
    if (n)
      return [
        {
          wheelConfig: new wt(JSON.parse(n)),
          shareMode: null,
          path: "",
        },
      ];
  } catch (e) {
    console.error("Error parsing wheel config from localStorage:", e);
  }
  return [
    {
      wheelConfig: new wt({}),
      shareMode: null,
      path: "",
    },
  ];
}
function Ud(e) {
  return (xc(e.entries), e);
}
const Ya = uS(() => fS()),
  OP = tr({
    __name: "App",
    setup(e) {
      document.querySelector("#preload-static-content")?.remove();
      const t = Zb(),
        { t: n, locale: r } = sa(),
        s = vS(),
        i = NP(),
        o = D(() =>
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
                          : t.path.includes("audit")
                            ? "Audit"
                            : i.wheels[0].wheelConfig.title
                              ? i.wheels[0].wheelConfig.title
                              : `Wheel of Names | ${n("app.Random name picker")}`,
        );
      (lS(o),
        s.loadPreferences(),
        Qe.set(s.darkMode),
        me(
          () => t.path,
          () => {
            (a(), l());
          },
          {
            immediate: !0,
          },
        ),
        me(
          () => r.value,
          () => {
            (a(), l());
          },
        ));
      function a() {
        let c = "en";
        (t.meta.translated && (c = r.value),
          document.documentElement.setAttribute("lang", c));
      }
      function l() {
        let c = "";
        (t.name === "home" && (c = n("app.Free and easy to use")),
          document
            .querySelector('meta[name="description"]')
            ?.setAttribute("content", c));
      }
      return (c, u) => {
        const f = e_("router-view");
        return (go(), po(f));
      };
    },
  });
function gO(e) {
  return e;
}
const LP = [
    {
      path: "/user-reviews-and-tutorials",
      component: () =>
        Pe(
          () => import("https://wheelofnames.com/assets/TutorialsPage-v403.js"),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
        ),
    },
    {
      path: "/how-to-use-in-the-classroom",
      component: () =>
        Pe(
          () => import("https://wheelofnames.com/assets/ClassroomPage-v403.js"),
          __vite__mapDeps([12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
        ),
    },
    {
      path: "/privacy-policy",
      alias: "/privacy-policy.html",
      component: () =>
        Pe(
          () => import("https://wheelofnames.com/assets/PrivacyPolicyPage-v403.js"),
          __vite__mapDeps([13, 1, 2, 14, 15, 5, 6, 7, 8, 9, 10, 11, 16]),
        ),
    },
    {
      path: "/terms",
      component: () =>
        Pe(
          () => import("https://wheelofnames.com/assets/TermsOfServicePage-v403.js"),
          __vite__mapDeps([17, 1, 2, 18, 5, 19, 20, 10, 21, 6, 7, 8, 9, 11]),
        ),
    },
    {
      path: "/changelog",
      component: () =>
        Pe(
          () => import("https://wheelofnames.com/assets/ChangelogPage-v403.js"),
          __vite__mapDeps([22, 1, 2, 5, 6, 7, 8, 9, 10, 11, 15, 23]),
        ),
    },
    {
      path: "/api-doc",
      component: () =>
        Pe(
          () => import("https://wheelofnames.com/assets/ApiPage-v403.js"),
          __vite__mapDeps([
            24, 1, 2, 18, 5, 25, 10, 26, 27, 28, 6, 7, 8, 9, 11, 29,
          ]),
        ),
    },
    {
      path: "/export",
      component: () =>
        Pe(
          () => import("https://wheelofnames.com/assets/ExportPage-v403.js"),
          __vite__mapDeps([30, 1, 2, 18, 5, 6, 7, 8, 9, 10, 11, 31]),
        ),
    },
    {
      path: "/translations",
      component: () =>
        Pe(
          () => import("https://wheelofnames.com/assets/TranslationPage-v403.js"),
          __vite__mapDeps([32, 1, 2, 15, 5, 6, 7, 8, 9, 10, 11, 25]),
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
            Pe(
              () => import("https://wheelofnames.com/assets/AdminPage-v403.js"),
              __vite__mapDeps([33, 34, 35, 1, 2, 18, 5, 8, 9, 36, 4, 10, 37]),
            ),
        },
        {
          path: "review",
          component: () =>
            Pe(
              () => import("https://wheelofnames.com/assets/ReviewWheelPage-v403.js"),
              __vite__mapDeps([
                38, 34, 35, 39, 40, 41, 1, 2, 15, 18, 5, 9, 42, 10, 43, 8, 44,
                26,
              ]),
            ),
        },
        {
          path: "gallery",
          component: () =>
            Pe(
              () => import("https://wheelofnames.com/assets/GalleryReviewPage-v403.js"),
              __vite__mapDeps([
                45, 34, 1, 2, 18, 5, 46, 35, 47, 40, 48, 10, 26, 49, 50,
              ]),
            ),
        },
        {
          path: "user",
          component: () =>
            Pe(
              () => import("https://wheelofnames.com/assets/AdminUserPage-v403.js"),
              __vite__mapDeps([
                51, 34, 1, 2, 15, 9, 26, 52, 10, 53, 42, 43, 8, 54,
              ]),
            ),
        },
      ],
    },
    {
      meta: {
        translated: !0,
      },
      path: "/:lang([a-z][a-z][a-z]?|[a-z][a-z]-[A-Z][A-Z])?",
      component: () => Pe(() => import("https://wheelofnames.com/assets/lang-v403.js"), []),
      children: [
        {
          name: "home",
          path: "",
          component: () =>
            Pe(
              () => import("https://wheelofnames.com/assets/EditWheelPage-v403.js"),
              __vite__mapDeps([
                55, 1, 2, 5, 9, 20, 7, 35, 47, 40, 39, 56, 48, 41, 57, 44, 10,
                58, 59, 60, 26, 14, 36, 4, 52, 53, 61, 27, 28, 62, 19, 21, 63,
                64, 25, 65, 66, 67,
              ]),
            ),
        },
        {
          name: "shared-wheel",
          path: ":wheelPath(\\w\\w\\w-\\w\\w\\w)",
          component: () =>
            Pe(
              () => import("https://wheelofnames.com/assets/SharedWheelPage-v403.js"),
              __vite__mapDeps([
                68, 18, 5, 2, 9, 63, 10, 64, 60, 44, 58, 59, 26, 66, 65, 69,
              ]),
            ),
        },
        {
          name: "shared-wheel-view",
          path: "view/:wheelPath(\\w\\w\\w-\\w\\w\\w)?",
          component: () =>
            Pe(
              () => import("https://wheelofnames.com/assets/SharedWheelPage-v403.js"),
              __vite__mapDeps([
                68, 18, 5, 2, 9, 63, 10, 64, 60, 44, 58, 59, 26, 66, 65, 69,
              ]),
            ),
        },
        {
          name: "gallery",
          path: "gallery",
          component: () =>
            Pe(
              () => import("https://wheelofnames.com/assets/GalleryPage-v403.js"),
              __vite__mapDeps([
                70, 1, 2, 18, 5, 6, 7, 8, 9, 10, 11, 46, 35, 47, 40, 48, 26, 49,
              ]),
            ),
        },
        {
          name: "randomness-audit",
          path: "randomness-audit",
          component: () =>
            Pe(
              () => import("https://wheelofnames.com/assets/FairnessTestPage-v403.js"),
              __vite__mapDeps([
                71, 1, 2, 56, 48, 39, 40, 15, 18, 5, 6, 7, 8, 9, 10, 11,
              ]),
            ),
        },
        {
          name: "login",
          path: "login",
          component: () =>
            Pe(
              () => import("https://wheelofnames.com/assets/LoginPage-v403.js"),
              __vite__mapDeps([72, 1, 2, 27, 26, 10, 28, 6, 7, 8, 9, 11]),
            ),
        },
        {
          name: "migrate-account",
          path: "migrate-account",
          component: () =>
            Pe(
              () => import("https://wheelofnames.com/assets/MigrateAccountPage-v403.js"),
              __vite__mapDeps([
                73, 1, 2, 26, 19, 20, 10, 21, 6, 7, 8, 9, 11, 61, 27, 28, 74,
              ]),
            ),
        },
        {
          name: "streaming",
          path: "streaming",
          component: () =>
            Pe(
              () => import("https://wheelofnames.com/assets/StreamingPage-v403.js"),
              __vite__mapDeps([
                75, 1, 2, 57, 44, 10, 58, 59, 56, 48, 39, 40, 60, 41, 26, 47, 9,
                35, 14, 36, 4, 52, 53, 61, 27, 28, 62, 5, 20, 7, 76,
              ]),
            ),
        },
        {
          name: "streaming-view",
          path: "s/:wheelPath(\\w\\w\\w-\\w\\w\\w)?",
          component: () =>
            Pe(
              () => import("https://wheelofnames.com/assets/StreamingViewPage-v403.js"),
              __vite__mapDeps([77, 9, 60, 26, 63, 10, 64, 78]),
            ),
        },
      ],
    },
    {
      path: "/:catchAll(.*)*",
      component: () => Pe(() => import("https://wheelofnames.com/assets/Error404-v403.js"), []),
    },
  ],
  Qa = () => {
    const e = tE({
      scrollBehavior: (t) =>
        t.hash
          ? {
              el: t.hash,
              top: 50,
            }
          : {
              top: 0,
            },
      routes: LP,
      history: Lw("/"),
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
            t,
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
            t,
          ).fullPath;
        const r = kP();
        if (t.meta.adminOnly) {
          const s = await $e();
          if (await rv(s)) r.admin = !0;
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
                .catch(Bd));
      }),
      e.onError(Bd),
      e
    );
  };
function Bd(e) {
  (MC("RouterError", e),
    confirm(`An update is available. Do you want to reload?

If reloading does not fix the issue, try using https://old.wheelofnames.com.`) &&
      location.reload());
}
async function xP(e, t) {
  const n = e(OP);
  n.use(Gb, t);
  const r = typeof Ya == "function" ? await Ya({}) : Ya;
  n.use(r);
  const s = Ir(
    typeof Qa == "function"
      ? await Qa({
          store: r,
        })
      : Qa,
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
const MP = {
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
function DP(e, t, n) {
  let r;
  function s() {
    r !== void 0 && (Sl.remove(r), (r = void 0));
  }
  return (
    Mt(() => {
      e.value === !0 && s();
    }),
    {
      removeFromHistory: s,
      addToHistory() {
        ((r = {
          condition: () => n.value === !0,
          handler: t,
        }),
          Sl.add(r));
      },
    }
  );
}
function Zi(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function sv(e, t) {
  typeof t.type == "symbol"
    ? Array.isArray(t.children) === !0 &&
      t.children.forEach((n) => {
        sv(e, n);
      })
    : e.add(t);
}
function mO(e) {
  const t = new Set();
  return (
    e.forEach((n) => {
      sv(t, n);
    }),
    Array.from(t)
  );
}
function iv(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function ov(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function FP() {
  let e = null;
  const t = Ce();
  function n() {
    e !== null && (clearTimeout(e), (e = null));
  }
  return (
    Go(n),
    Mt(n),
    {
      removeTimeout: n,
      registerTimeout(r, s) {
        (n(),
          ov(t) === !1 &&
            (e = setTimeout(() => {
              ((e = null), r());
            }, s)));
      },
    }
  );
}
function $P() {
  let e;
  const t = Ce();
  function n() {
    e = void 0;
  }
  return (
    Go(n),
    Mt(n),
    {
      removeTick: n,
      registerTick(r) {
        ((e = r),
          dt(() => {
            e === r && (ov(t) === !1 && e(), (e = void 0));
          }));
      },
    }
  );
}
const UP = {
    modelValue: {
      type: Boolean,
      default: null,
    },
    "onUpdate:modelValue": [Function, Array],
  },
  BP = ["beforeShow", "show", "beforeHide", "hide"];
function VP({
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
  function f(g) {
    e.value === !0 ? m(g) : d(g);
  }
  function d(g) {
    if (
      a.disable === !0 ||
      g?.qAnchorHandled === !0 ||
      (t !== void 0 && t(g) !== !0)
    )
      return;
    const b = a["onUpdate:modelValue"] !== void 0;
    (b === !0 &&
      (l("update:modelValue", !0),
      (u = g),
      dt(() => {
        u === g && (u = void 0);
      })),
      (a.modelValue === null || b === !1) && h(g));
  }
  function h(g) {
    e.value !== !0 &&
      ((e.value = !0), l("beforeShow", g), r !== void 0 ? r(g) : l("show", g));
  }
  function m(g) {
    if (a.disable === !0) return;
    const b = a["onUpdate:modelValue"] !== void 0;
    (b === !0 &&
      (l("update:modelValue", !1),
      (u = g),
      dt(() => {
        u === g && (u = void 0);
      })),
      (a.modelValue === null || b === !1) && E(g));
  }
  function E(g) {
    e.value !== !1 &&
      ((e.value = !1), l("beforeHide", g), s !== void 0 ? s(g) : l("hide", g));
  }
  function C(g) {
    a.disable === !0 && g === !0
      ? a["onUpdate:modelValue"] !== void 0 && l("update:modelValue", !1)
      : (g === !0) !== e.value && (g === !0 ? h : E)(u);
  }
  (me(() => a.modelValue, C),
    n !== void 0 &&
      iv(o) === !0 &&
      me(
        () => c.$route.fullPath,
        () => {
          n.value === !0 && e.value === !0 && m();
        },
      ),
    i === !0 &&
      xt(() => {
        C(a.modelValue);
      }));
  const v = {
    show: d,
    hide: m,
    toggle: f,
  };
  return (Object.assign(c, v), v);
}
const WP = {
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
function jP(e, t = () => {}, n = () => {}) {
  return {
    transitionProps: D(() => {
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
    transitionStyle: D(
      () => `--q-transition-duration: ${e.transitionDuration}ms`,
    ),
  };
}
let pr = [],
  ai = [];
function av(e) {
  ai = ai.filter((t) => t !== e);
}
function qP(e) {
  (av(e), ai.push(e));
}
function Vd(e) {
  (av(e),
    ai.length === 0 && pr.length !== 0 && (pr[pr.length - 1](), (pr = [])));
}
function tu(e) {
  ai.length === 0 ? e() : pr.push(e);
}
function HP(e) {
  pr = pr.filter((t) => t !== e);
}
const zr = [],
  qs = [];
let zP = 1,
  Vn = document.body;
function ma(e, t) {
  const n = document.createElement("div");
  if (
    ((n.id = t !== void 0 ? `q-portal--${t}--${zP++}` : e),
    Eo.globalNodes !== void 0)
  ) {
    const r = Eo.globalNodes.class;
    r !== void 0 && (n.className = r);
  }
  return (Vn.appendChild(n), zr.push(n), qs.push(t), n);
}
function nu(e) {
  const t = zr.indexOf(e);
  (zr.splice(t, 1), qs.splice(t, 1), e.remove());
}
function KP(e) {
  if (e === Vn) return;
  if (
    ((Vn = e),
    Vn === document.body ||
      qs.reduce((n, r) => (r === "dialog" ? n + 1 : n), 0) < 2)
  ) {
    zr.forEach((n) => {
      n.contains(Vn) === !1 && Vn.appendChild(n);
    });
    return;
  }
  const t = qs.lastIndexOf("dialog");
  for (let n = 0; n < zr.length; n++) {
    const r = zr[n];
    (n === t || qs[n] !== "dialog") &&
      r.contains(Vn) === !1 &&
      Vn.appendChild(r);
  }
}
const eo = [];
function pO(e) {
  return eo.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function GP(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if ((e.hide(t), e.$props.separateClosePopup === !0)) return Zi(e);
    } else if (e.__qPortal === !0) {
      const n = Zi(e);
      return n?.$options.name === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = Zi(e);
  } while (e != null);
}
function vO(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === !0) {
      if ((n--, e.$options.name === "QMenu")) {
        e = GP(e, t);
        continue;
      }
      e.hide(t);
    }
    e = Zi(e);
  }
}
const JP = st({
  name: "QPortal",
  setup(e, { slots: t }) {
    return () => t.default();
  },
});
function YP(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return !1;
    e = e.parent;
  }
  return !1;
}
function QP(e, t, n, r) {
  const s = he(!1),
    i = he(!1);
  let o = null;
  const a = {},
    l = r === "dialog" && YP(e);
  function c(f) {
    if (f === !0) {
      (Vd(a), (i.value = !0));
      return;
    }
    ((i.value = !1),
      s.value === !1 &&
        (l === !1 && o === null && (o = ma(!1, r)),
        (s.value = !0),
        eo.push(e.proxy),
        qP(a)));
  }
  function u(f) {
    if (((i.value = !1), f !== !0)) return;
    (Vd(a), (s.value = !1));
    const d = eo.indexOf(e.proxy);
    (d !== -1 && eo.splice(d, 1), o !== null && (nu(o), (o = null)));
  }
  return (
    Yo(() => {
      u(!0);
    }),
    (e.proxy.__qPortal = !0),
    as(e.proxy, "contentEl", () => t.value),
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
                  Wy,
                  {
                    to: o,
                  },
                  U(JP, n),
                ),
              ]
            : void 0,
    }
  );
}
function Jl(e, t) {
  const n = e.style;
  for (const r in t) n[r] = t[r];
}
function XP(e) {
  if (e == null) return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = sn(e);
  if (t) return t.$el || t;
}
function ZP(e, t) {
  if (e == null || e.contains(t) === !0) return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t)) return !0;
  return !1;
}
const yO = [Element, String],
  eN = [
    null,
    document,
    document.body,
    document.scrollingElement,
    document.documentElement,
  ];
function _O(e, t) {
  let n = XP(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return eN.includes(n) ? window : n;
}
function lv(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function cv(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
function uv(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3],
    s = lv(e);
  if (n <= 0) {
    s !== t && Yl(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    const o = i - r,
      a = s + ((t - s) / Math.max(o, n)) * o;
    (Yl(e, a), a !== t && uv(e, t, n - o, i));
  });
}
function fv(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3],
    s = cv(e);
  if (n <= 0) {
    s !== t && Ql(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    const o = i - r,
      a = s + ((t - s) / Math.max(o, n)) * o;
    (Ql(e, a), a !== t && fv(e, t, n - o, i));
  });
}
function Yl(e, t) {
  if (e === window) {
    window.scrollTo(
      window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
      t,
    );
    return;
  }
  e.scrollTop = t;
}
function Ql(e, t) {
  if (e === window) {
    window.scrollTo(
      t,
      window.pageYOffset || window.scrollY || document.body.scrollTop || 0,
    );
    return;
  }
  e.scrollLeft = t;
}
function bO(e, t, n) {
  if (n) {
    uv(e, t, n);
    return;
  }
  Yl(e, t);
}
function wO(e, t, n) {
  if (n) {
    fv(e, t, n);
    return;
  }
  Ql(e, t);
}
let Di;
function EO() {
  if (Di !== void 0) return Di;
  const e = document.createElement("p"),
    t = document.createElement("div");
  (Jl(e, {
    width: "100%",
    height: "200px",
  }),
    Jl(t, {
      position: "absolute",
      top: "0px",
      left: "0px",
      visibility: "hidden",
      width: "200px",
      height: "150px",
      overflow: "hidden",
    }),
    t.appendChild(e),
    document.body.appendChild(t));
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let r = e.offsetWidth;
  return (n === r && (r = t.clientWidth), t.remove(), (Di = n - r), Di);
}
function tN(e, t = !0) {
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
          ["auto", "scroll"].includes(
            window.getComputedStyle(e)["overflow-x"],
          ));
}
let _s = 0,
  Xa,
  Za,
  ks,
  el = !1,
  Wd,
  jd,
  qd,
  ur = null;
function nN(e) {
  rN(e) && Nt(e);
}
function rN(e) {
  if (
    e.target === document.body ||
    e.target.classList.contains("q-layout__backdrop")
  )
    return !0;
  const t = Pb(e),
    n = e.shiftKey && !e.deltaX,
    r = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    s = n || r ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    if (tN(o, r))
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
function Hd(e) {
  e.target === document &&
    (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Fi(e) {
  el !== !0 &&
    ((el = !0),
    requestAnimationFrame(() => {
      el = !1;
      const { height: t } = e.target,
        { clientHeight: n, scrollTop: r } = document.scrollingElement;
      ((ks === void 0 || t !== window.innerHeight) &&
        ((ks = n - t), (document.scrollingElement.scrollTop = r)),
        r > ks &&
          (document.scrollingElement.scrollTop -= Math.ceil((r - ks) / 8)));
    }));
}
function zd(e) {
  const t = document.body,
    n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: r, overflowX: s } = window.getComputedStyle(t);
    ((Xa = cv(window)),
      (Za = lv(window)),
      (Wd = t.style.left),
      (jd = t.style.top),
      (qd = window.location.href),
      (t.style.left = `-${Xa}px`),
      (t.style.top = `-${Za}px`),
      s !== "hidden" &&
        (s === "scroll" || t.scrollWidth > window.innerWidth) &&
        t.classList.add("q-body--force-scrollbar-x"),
      r !== "hidden" &&
        (r === "scroll" || t.scrollHeight > window.innerHeight) &&
        t.classList.add("q-body--force-scrollbar-y"),
      t.classList.add("q-body--prevent-scroll"),
      (document.qScrollPrevented = !0),
      Ke.is.ios === !0 &&
        (n === !0
          ? (window.scrollTo(0, 0),
            window.visualViewport.addEventListener(
              "resize",
              Fi,
              mt.passiveCapture,
            ),
            window.visualViewport.addEventListener(
              "scroll",
              Fi,
              mt.passiveCapture,
            ),
            window.scrollTo(0, 0))
          : window.addEventListener("scroll", Hd, mt.passiveCapture)));
  }
  (Ke.is.desktop === !0 &&
    Ke.is.mac === !0 &&
    window[`${e}EventListener`]("wheel", nN, mt.notPassive),
    e === "remove" &&
      (Ke.is.ios === !0 &&
        (n === !0
          ? (window.visualViewport.removeEventListener(
              "resize",
              Fi,
              mt.passiveCapture,
            ),
            window.visualViewport.removeEventListener(
              "scroll",
              Fi,
              mt.passiveCapture,
            ))
          : window.removeEventListener("scroll", Hd, mt.passiveCapture)),
      t.classList.remove("q-body--prevent-scroll"),
      t.classList.remove("q-body--force-scrollbar-x"),
      t.classList.remove("q-body--force-scrollbar-y"),
      (document.qScrollPrevented = !1),
      (t.style.left = Wd),
      (t.style.top = jd),
      window.location.href === qd && window.scrollTo(Xa, Za),
      (ks = void 0)));
}
function Xl(e) {
  let t = "add";
  if (e === !0) {
    if ((_s++, ur !== null)) {
      (clearTimeout(ur), (ur = null));
      return;
    }
    if (_s > 1) return;
  } else {
    if (_s === 0 || (_s--, _s > 0)) return;
    if (((t = "remove"), Ke.is.ios === !0 && Ke.is.nativeMobile === !0)) {
      (ur !== null && clearTimeout(ur),
        (ur = setTimeout(() => {
          (zd(t), (ur = null));
        }, 100)));
      return;
    }
  }
  zd(t);
}
function sN() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && ((e = t), Xl(t));
    },
  };
}
function Wt(e, t) {
  return (e !== void 0 && e()) || t;
}
function SO(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null) return n.slice();
  }
  return t;
}
function vr(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function iN(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function CO(e, t, n, r, s, i) {
  t.key = r + s;
  const o = U(e, t, n);
  return s === !0 ? eg(o, i()) : o;
}
const wr = [];
let ss;
function oN(e) {
  ss = e.keyCode === 27;
}
function aN() {
  ss === !0 && (ss = !1);
}
function lN(e) {
  ss === !0 && ((ss = !1), Xs(e, 27) === !0 && wr[wr.length - 1](e));
}
function dv(e) {
  (window[e]("keydown", oN),
    window[e]("blur", aN),
    window[e]("keyup", lN),
    (ss = !1));
}
function cN(e) {
  Ke.is.desktop === !0 &&
    (wr.push(e), wr.length === 1 && dv("addEventListener"));
}
function Kd(e) {
  const t = wr.indexOf(e);
  t !== -1 && (wr.splice(t, 1), wr.length === 0 && dv("removeEventListener"));
}
const Er = [];
function hv(e) {
  Er[Er.length - 1](e);
}
function uN(e) {
  Ke.is.desktop === !0 &&
    (Er.push(e),
    Er.length === 1 && document.body.addEventListener("focusin", hv));
}
function Gd(e) {
  const t = Er.indexOf(e);
  t !== -1 &&
    (Er.splice(t, 1),
    Er.length === 0 && document.body.removeEventListener("focusin", hv));
}
let $i = 0;
const fN = {
    standard: "fixed-full flex-center",
    top: "fixed-top justify-center",
    bottom: "fixed-bottom justify-center",
    right: "fixed-right items-center",
    left: "fixed-left items-center",
  },
  Jd = {
    standard: ["scale", "scale"],
    top: ["slide-down", "slide-up"],
    bottom: ["slide-up", "slide-down"],
    right: ["slide-left", "slide-right"],
    left: ["slide-right", "slide-left"],
  },
  dN = st({
    name: "QDialog",
    inheritAttrs: !1,
    props: {
      ...UP,
      ...WP,
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
    emits: [...BP, "shake", "click", "escapeKey"],
    setup(e, { slots: t, emit: n, attrs: r }) {
      const s = Ce(),
        i = he(null),
        o = he(!1),
        a = he(!1);
      let l = null,
        c = null,
        u,
        f;
      const d = D(
          () =>
            e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0,
        ),
        { preventBodyScroll: h } = sN(),
        { registerTimeout: m } = FP(),
        { registerTick: E, removeTick: C } = $P(),
        { transitionProps: v, transitionStyle: g } = jP(
          e,
          () => Jd[e.position][0],
          () => Jd[e.position][1],
        ),
        b = D(
          () =>
            g.value +
            (e.backdropFilter !== void 0
              ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`
              : ""),
        ),
        {
          showPortal: _,
          hidePortal: T,
          portalIsAccessible: R,
          renderPortal: P,
        } = QP(s, i, Oe, "dialog"),
        { hide: q } = VP({
          showing: o,
          hideOnRouteChange: d,
          handleShow: Y,
          handleHide: ee,
          processOnMount: !0,
        }),
        { addToHistory: B, removeFromHistory: L } = DP(o, q, d),
        x = D(
          () =>
            `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${fN[e.position]}` +
            (a.value === !0 ? " q-dialog__inner--animating" : "") +
            (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") +
            (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") +
            (e.square === !0 ? " q-dialog__inner--square" : ""),
        ),
        I = D(() => o.value === !0 && e.seamless !== !0),
        V = D(() =>
          e.autoClose === !0
            ? {
                onClick: G,
              }
            : {},
        ),
        $ = D(() => [
          `q-dialog fullscreen no-pointer-events q-dialog--${I.value === !0 ? "modal" : "seamless"}`,
          r.class,
        ]);
      (me(
        () => e.maximized,
        (ie) => {
          o.value === !0 && ce(ie);
        },
      ),
        me(I, (ie) => {
          (h(ie), ie === !0 ? (uN(Te), cN(se)) : (Gd(Te), Kd(se)));
        }));
      function Y(ie) {
        (B(),
          (c =
            e.noRefocus === !1 && document.activeElement !== null
              ? document.activeElement
              : null),
          ce(e.maximized),
          _(),
          (a.value = !0),
          e.noFocus !== !0 ? (document.activeElement?.blur(), E(J)) : C(),
          m(() => {
            if (s.proxy.$q.platform.is.ios === !0) {
              if (e.seamless !== !0 && document.activeElement) {
                const { top: M, bottom: Q } =
                    document.activeElement.getBoundingClientRect(),
                  { innerHeight: X } = window,
                  ne =
                    window.visualViewport !== void 0
                      ? window.visualViewport.height
                      : X;
                (M > 0 &&
                  Q > ne / 2 &&
                  (document.scrollingElement.scrollTop = Math.min(
                    document.scrollingElement.scrollHeight - ne,
                    Q >= X
                      ? 1 / 0
                      : Math.ceil(
                          document.scrollingElement.scrollTop + Q - ne / 2,
                        ),
                  )),
                  document.activeElement.scrollIntoView());
              }
              ((f = !0), i.value.click(), (f = !1));
            }
            (_(!0), (a.value = !1), n("show", ie));
          }, e.transitionDuration));
      }
      function ee(ie) {
        (C(),
          L(),
          Ie(!0),
          (a.value = !0),
          T(),
          c !== null &&
            ((
              (ie?.type.indexOf("key") === 0
                ? c.closest('[tabindex]:not([tabindex^="-"])')
                : void 0) || c
            ).focus(),
            (c = null)),
          m(() => {
            (T(!0), (a.value = !1), n("hide", ie));
          }, e.transitionDuration));
      }
      function J(ie) {
        tu(() => {
          let M = i.value;
          if (M !== null) {
            if (ie !== void 0) {
              const Q = M.querySelector(ie);
              if (Q !== null) {
                Q.focus({
                  preventScroll: !0,
                });
                return;
              }
            }
            M.contains(document.activeElement) !== !0 &&
              ((M =
                M.querySelector(
                  "[autofocus][tabindex], [data-autofocus][tabindex]",
                ) ||
                M.querySelector(
                  "[autofocus] [tabindex], [data-autofocus] [tabindex]",
                ) ||
                M.querySelector("[autofocus], [data-autofocus]") ||
                M),
              M.focus({
                preventScroll: !0,
              }));
          }
        });
      }
      function W(ie) {
        (ie && typeof ie.focus == "function"
          ? ie.focus({
              preventScroll: !0,
            })
          : J(),
          n("shake"));
        const M = i.value;
        M !== null &&
          (M.classList.remove("q-animate--scale"),
          M.classList.add("q-animate--scale"),
          l !== null && clearTimeout(l),
          (l = setTimeout(() => {
            ((l = null),
              i.value !== null &&
                (M.classList.remove("q-animate--scale"), J()));
          }, 170)));
      }
      function se() {
        e.seamless !== !0 &&
          (e.persistent === !0 || e.noEscDismiss === !0
            ? e.maximized !== !0 && e.noShake !== !0 && W()
            : (n("escapeKey"), q()));
      }
      function Ie(ie) {
        (l !== null && (clearTimeout(l), (l = null)),
          (ie === !0 || o.value === !0) &&
            (ce(!1), e.seamless !== !0 && (h(!1), Gd(Te), Kd(se))),
          ie !== !0 && (c = null));
      }
      function ce(ie) {
        ie === !0
          ? u !== !0 &&
            ($i < 1 && document.body.classList.add("q-body--dialog"),
            $i++,
            (u = !0))
          : u === !0 &&
            ($i < 2 && document.body.classList.remove("q-body--dialog"),
            $i--,
            (u = !1));
      }
      function G(ie) {
        f !== !0 && (q(ie), n("click", ie));
      }
      function de(ie) {
        e.persistent !== !0 && e.noBackdropDismiss !== !0
          ? q(ie)
          : e.noShake !== !0 && W();
      }
      function Te(ie) {
        e.allowFocusOutside !== !0 &&
          R.value === !0 &&
          ZP(i.value, ie.target) !== !0 &&
          J('[tabindex]:not([tabindex="-1"])');
      }
      (Object.assign(s.proxy, {
        focus: J,
        shake: W,
        __updateRefocusTarget(ie) {
          c = ie || null;
        },
      }),
        Mt(Ie));
      function Oe() {
        return U(
          "div",
          {
            role: "dialog",
            "aria-modal": I.value === !0 ? "true" : "false",
            ...r,
            class: $.value,
          },
          [
            U(
              Ys,
              {
                name: "q-transition--fade",
                appear: !0,
              },
              () =>
                I.value === !0
                  ? U("div", {
                      class: "q-dialog__backdrop fixed-full",
                      style: b.value,
                      "aria-hidden": "true",
                      tabindex: -1,
                      onClick: de,
                    })
                  : null,
            ),
            U(Ys, v.value, () =>
              o.value === !0
                ? U(
                    "div",
                    {
                      ref: i,
                      class: x.value,
                      style: g.value,
                      tabindex: -1,
                      ...V.value,
                    },
                    Wt(t.default),
                  )
                : null,
            ),
          ],
        );
      }
      return P;
    },
  }),
  Zl = {
    xs: 18,
    sm: 24,
    md: 32,
    lg: 38,
    xl: 46,
  },
  Ei = {
    size: String,
  };
function Si(e, t = Zl) {
  return D(() =>
    e.size !== void 0
      ? {
          fontSize: e.size in t ? `${t[e.size]}px` : e.size,
        }
      : null,
  );
}
const Yd = "0 0 24 24",
  tl = (e) => e,
  nl = (e) => `ionicons ${e}`,
  gv = {
    "mdi-": (e) => `mdi ${e}`,
    "icon-": tl,
    "bt-": (e) => `bt ${e}`,
    "eva-": (e) => `eva ${e}`,
    "ion-md": nl,
    "ion-ios": nl,
    "ion-logo": nl,
    "iconfont ": tl,
    "ti-": (e) => `themify-icon ${e}`,
    "bi-": (e) => `bootstrap-icons ${e}`,
    "i-": tl,
  },
  mv = {
    o_: "-outlined",
    r_: "-round",
    s_: "-sharp",
  },
  pv = {
    sym_o_: "-outlined",
    sym_r_: "-rounded",
    sym_s_: "-sharp",
  },
  hN = new RegExp("^(" + Object.keys(gv).join("|") + ")"),
  gN = new RegExp("^(" + Object.keys(mv).join("|") + ")"),
  Qd = new RegExp("^(" + Object.keys(pv).join("|") + ")"),
  mN = /^[Mm]\s?[-+]?\.?\d/,
  pN = /^img:/,
  vN = /^svguse:/,
  yN = /^ion-/,
  _N =
    /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,
  On = st({
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
        } = Ce(),
        r = Si(e),
        s = D(
          () =>
            "q-icon" +
            (e.left === !0 ? " on-left" : "") +
            (e.right === !0 ? " on-right" : "") +
            (e.color !== void 0 ? ` text-${e.color}` : ""),
        ),
        i = D(() => {
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
          if (mN.test(a) === !0) {
            const [u, f = Yd] = a.split("|");
            return {
              svg: !0,
              viewBox: f,
              nodes: u.split("&&").map((d) => {
                const [h, m, E] = d.split("@@");
                return U("path", {
                  style: m,
                  d: h,
                  transform: E,
                });
              }),
            };
          }
          if (pN.test(a) === !0)
            return {
              img: !0,
              src: a.substring(4),
            };
          if (vN.test(a) === !0) {
            const [u, f = Yd] = a.split("|");
            return {
              svguse: !0,
              src: u.substring(7),
              viewBox: f,
            };
          }
          let l = " ";
          const c = a.match(hN);
          if (c !== null) o = gv[c[1]](a);
          else if (_N.test(a) === !0) o = a;
          else if (yN.test(a) === !0)
            o = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${a.substring(3)}`;
          else if (Qd.test(a) === !0) {
            o = "notranslate material-symbols";
            const u = a.match(Qd);
            (u !== null && ((a = a.substring(6)), (o += pv[u[1]])), (l = a));
          } else {
            o = "notranslate material-icons";
            const u = a.match(gN);
            (u !== null && ((a = a.substring(2)), (o += mv[u[1]])), (l = a));
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
          ? U(e.tag, o, Wt(t.default))
          : i.value.img === !0
            ? U(
                e.tag,
                o,
                vr(t.default, [
                  U("img", {
                    src: i.value.src,
                  }),
                ]),
              )
            : i.value.svg === !0
              ? U(
                  e.tag,
                  o,
                  vr(t.default, [
                    U(
                      "svg",
                      {
                        viewBox: i.value.viewBox || "0 0 24 24",
                      },
                      i.value.nodes,
                    ),
                  ]),
                )
              : i.value.svguse === !0
                ? U(
                    e.tag,
                    o,
                    vr(t.default, [
                      U(
                        "svg",
                        {
                          viewBox: i.value.viewBox,
                        },
                        [
                          U("use", {
                            "xlink:href": i.value.src,
                          }),
                        ],
                      ),
                    ]),
                  )
                : (i.value.cls !== void 0 && (o.class += " " + i.value.cls),
                  U(e.tag, o, vr(t.default, [i.value.content])));
      };
    },
  }),
  bN = {
    size: {
      type: [String, Number],
      default: "1em",
    },
    color: String,
  };
function wN(e) {
  return {
    cSize: D(() => (e.size in Zl ? `${Zl[e.size]}px` : e.size)),
    classes: D(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")),
  };
}
const is = st({
  name: "QSpinner",
  props: {
    ...bN,
    thickness: {
      type: Number,
      default: 5,
    },
  },
  setup(e) {
    const { cSize: t, classes: n } = wN(e);
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
        ],
      );
  },
});
function EN(e, t = 250) {
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
function Xd(e, t, n, r) {
  n.modifiers.stop === !0 && bo(e);
  const s = n.modifiers.color;
  let i = n.modifiers.center;
  i = i === !0 || r === !0;
  const o = document.createElement("span"),
    a = document.createElement("span"),
    l = Ab(e),
    { left: c, top: u, width: f, height: d } = t.getBoundingClientRect(),
    h = Math.sqrt(f * f + d * d),
    m = h / 2,
    E = `${(f - h) / 2}px`,
    C = i ? E : `${l.left - c - m}px`,
    v = `${(d - h) / 2}px`,
    g = i ? v : `${l.top - u - m}px`;
  ((a.className = "q-ripple__inner"),
    Jl(a, {
      height: `${h}px`,
      width: `${h}px`,
      transform: `translate3d(${C},${g},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (o.className = `q-ripple${s ? " text-" + s : ""}`),
    o.setAttribute("dir", "ltr"),
    o.appendChild(a),
    t.appendChild(o));
  const b = () => {
    (o.remove(), clearTimeout(_));
  };
  n.abort.push(b);
  let _ = setTimeout(() => {
    (a.classList.add("q-ripple__inner--enter"),
      (a.style.transform = `translate3d(${E},${v},0) scale3d(1,1,1)`),
      (a.style.opacity = 0.2),
      (_ = setTimeout(() => {
        (a.classList.remove("q-ripple__inner--enter"),
          a.classList.add("q-ripple__inner--leave"),
          (a.style.opacity = 0),
          (_ = setTimeout(() => {
            (o.remove(), n.abort.splice(n.abort.indexOf(b), 1));
          }, 275)));
      }, 250)));
  }, 50);
}
function Zd(e, { modifiers: t, value: n, arg: r }) {
  const s = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: s.early === !0,
    stop: s.stop === !0,
    center: s.center === !0,
    color: s.color || r,
    keyCodes: [].concat(s.keyCodes || 13),
  };
}
const SN = kb({
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
            Xd(s, e, r, s.qKeyEvent === !0);
        },
        keystart: EN((s) => {
          r.enabled === !0 &&
            s.qSkipRipple !== !0 &&
            Xs(s, r.modifiers.keyCodes) === !0 &&
            s.type === `key${r.modifiers.early === !0 ? "down" : "up"}` &&
            Xd(s, e, r, !0);
        }, 300),
      };
      (Zd(r, t),
        (e.__qripple = r),
        Nb(r, "main", [
          [e, "pointerdown", "start", "passive"],
          [e, "click", "start", "passive"],
          [e, "keydown", "keystart", "passive"],
          [e, "keyup", "keystart", "passive"],
        ]));
    },
    updated(e, t) {
      if (t.oldValue !== t.value) {
        const n = e.__qripple;
        n !== void 0 &&
          ((n.enabled = t.value !== !1),
          n.enabled === !0 && Object(t.value) === t.value && Zd(n, t));
      }
    },
    beforeUnmount(e) {
      const t = e.__qripple;
      t !== void 0 &&
        (t.abort.forEach((n) => {
          n();
        }),
        Rb(t, "main"),
        delete e._qripple);
    },
  }),
  vv = {
    left: "start",
    center: "center",
    right: "end",
    between: "between",
    around: "around",
    evenly: "evenly",
    stretch: "stretch",
  },
  CN = Object.keys(vv),
  yv = {
    align: {
      type: String,
      validator: (e) => CN.includes(e),
    },
  };
function _v(e) {
  return D(() => {
    const t =
      e.align === void 0 ? (e.vertical === !0 ? "stretch" : "left") : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${vv[t]}`;
  });
}
function eh(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
function th(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function IN(e, t) {
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
function nh(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function TN(e, t) {
  return Array.isArray(e) === !0
    ? nh(e, t)
    : Array.isArray(t) === !0
      ? nh(t, e)
      : e === t;
}
function kN(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (TN(e[n], t[n]) === !1) return !1;
  return !0;
}
const bv = {
    to: [String, Object],
    replace: Boolean,
    href: String,
    target: String,
    disable: Boolean,
  },
  IO = {
    ...bv,
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
function AN({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = Ce(),
    { props: r, proxy: s, emit: i } = n,
    o = iv(n),
    a = D(() => r.disable !== !0 && r.href !== void 0),
    l = D(
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
            r.to !== "",
    ),
    c = D(() => (l.value === !0 ? g(r.to) : null)),
    u = D(() => c.value !== null),
    f = D(() => a.value === !0 || u.value === !0),
    d = D(() => (r.type === "a" || f.value === !0 ? "a" : r.tag || e || "div")),
    h = D(() =>
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
          : {},
    ),
    m = D(() => {
      if (u.value === !1) return -1;
      const { matched: T } = c.value,
        { length: R } = T,
        P = T[R - 1];
      if (P === void 0) return -1;
      const q = s.$route.matched;
      if (q.length === 0) return -1;
      const B = q.findIndex(th.bind(null, P));
      if (B !== -1) return B;
      const L = eh(T[R - 2]);
      return R > 1 && eh(P) === L && q[q.length - 1].path !== L
        ? q.findIndex(th.bind(null, T[R - 2]))
        : B;
    }),
    E = D(
      () =>
        u.value === !0 && m.value !== -1 && IN(s.$route.params, c.value.params),
    ),
    C = D(
      () =>
        E.value === !0 &&
        m.value === s.$route.matched.length - 1 &&
        kN(s.$route.params, c.value.params),
    ),
    v = D(() =>
      u.value === !0
        ? C.value === !0
          ? ` ${r.exactActiveClass} ${r.activeClass}`
          : r.exact === !0
            ? ""
            : E.value === !0
              ? ` ${r.activeClass}`
              : ""
        : "",
    );
  function g(T) {
    try {
      return s.$router.resolve(T);
    } catch {}
    return null;
  }
  function b(
    T,
    { returnRouterError: R, to: P = r.to, replace: q = r.replace } = {},
  ) {
    if (r.disable === !0) return (T.preventDefault(), Promise.resolve(!1));
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
    const B = s.$router[q === !0 ? "replace" : "push"](P);
    return R === !0 ? B : B.then(() => {}).catch(() => {});
  }
  function _(T) {
    if (u.value === !0) {
      const R = (P) => b(T, P);
      (i("click", T, R), T.defaultPrevented !== !0 && R());
    } else i("click", T);
  }
  return {
    hasRouterLink: u,
    hasHrefLink: a,
    hasLink: f,
    linkTag: d,
    resolvedLink: c,
    linkIsActive: E,
    linkIsExactActive: C,
    linkClass: v,
    linkAttrs: h,
    getLink: g,
    navigateToRouterLink: b,
    navigateOnClick: _,
  };
}
const rh = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  PN = {
    xs: 8,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 24,
  },
  NN = ["button", "submit", "reset"],
  RN = /[^\s]\/[^\s]/,
  ON = ["flat", "outline", "push", "unelevated"];
function wv(e, t) {
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
function TO(e) {
  const t = wv(e);
  return t !== void 0
    ? {
        [t]: !0,
      }
    : {};
}
const LN = {
    ...Ei,
    ...bv,
    type: {
      type: String,
      default: "button",
    },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...ON.reduce((e, t) => (e[t] = Boolean) && e, {}),
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
      ...yv.align,
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
  xN = {
    ...LN,
    round: Boolean,
  };
function MN(e) {
  const t = Si(e, PN),
    n = _v(e),
    {
      hasRouterLink: r,
      hasLink: s,
      linkTag: i,
      linkAttrs: o,
      navigateOnClick: a,
    } = AN({
      fallbackTag: "button",
    }),
    l = D(() => {
      const C = e.fab === !1 && e.fabMini === !1 ? t.value : {};
      return e.padding !== void 0
        ? Object.assign({}, C, {
            padding: e.padding
              .split(/\s+/)
              .map((v) => (v in rh ? rh[v] + "px" : v))
              .join(" "),
            minWidth: "0",
            minHeight: "0",
          })
        : C;
    }),
    c = D(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    u = D(() => e.disable !== !0 && e.loading !== !0),
    f = D(() => (u.value === !0 ? e.tabindex || 0 : -1)),
    d = D(() => wv(e, "standard")),
    h = D(() => {
      const C = {
        tabindex: f.value,
      };
      return (
        s.value === !0
          ? Object.assign(C, o.value)
          : NN.includes(e.type) === !0 && (C.type = e.type),
        i.value === "a"
          ? (e.disable === !0
              ? (C["aria-disabled"] = "true")
              : C.href === void 0 && (C.role = "button"),
            r.value !== !0 && RN.test(e.type) === !0 && (C.type = e.type))
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
    m = D(() => {
      let C;
      e.color !== void 0
        ? e.flat === !0 || e.outline === !0
          ? (C = `text-${e.textColor || e.color}`)
          : (C = `bg-${e.color} text-${e.textColor || "white"}`)
        : e.textColor && (C = `text-${e.textColor}`);
      const v =
        e.round === !0
          ? "round"
          : `rectangle${c.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
      return (
        `q-btn--${d.value} q-btn--${v}` +
        (C !== void 0 ? " " + C : "") +
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
    E = D(
      () =>
        n.value +
        (e.stack === !0 ? " column" : " row") +
        (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") +
        (e.loading === !0 ? " q-btn__content--hidden" : ""),
    );
  return {
    classes: m,
    style: l,
    innerClasses: E,
    attributes: h,
    hasLink: s,
    linkTag: i,
    navigateOnClick: a,
    isActionable: u,
  };
}
const { passiveCapture: At } = mt;
let Or = null,
  Lr = null,
  xr = null;
const ec = st({
    name: "QBtn",
    props: {
      ...xN,
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
        } = MN(e),
        d = he(null),
        h = he(null);
      let m = null,
        E,
        C = null;
      const v = D(
          () => e.label !== void 0 && e.label !== null && e.label !== "",
        ),
        g = D(() =>
          e.disable === !0 || e.ripple === !1
            ? !1
            : {
                keyCodes: l.value === !0 ? [13, 32] : [13],
                ...(e.ripple === !0 ? {} : e.ripple),
              },
        ),
        b = D(() => ({
          center: e.round,
        })),
        _ = D(() => {
          const $ = Math.max(0, Math.min(100, e.percentage));
          return $ > 0
            ? {
                transition: "transform 0.6s",
                transform: `translateX(${$ - 100}%)`,
              }
            : {};
        }),
        T = D(() => {
          if (e.loading === !0)
            return {
              onMousedown: V,
              onTouchstart: V,
              onClick: V,
              onKeydown: V,
              onKeyup: V,
            };
          if (f.value === !0) {
            const $ = {
              onClick: P,
              onKeydown: q,
              onMousedown: L,
            };
            if (r.$q.platform.has.touch === !0) {
              const Y = e.onTouchstart !== void 0 ? "" : "Passive";
              $[`onTouchstart${Y}`] = B;
            }
            return $;
          }
          return {
            onClick: Nt,
          };
        }),
        R = D(() => ({
          ref: d,
          class: "q-btn q-btn-item non-selectable no-outline " + s.value,
          style: i.value,
          ...a.value,
          ...T.value,
        }));
      function P($) {
        if (d.value !== null) {
          if ($ !== void 0) {
            if ($.defaultPrevented === !0) return;
            const Y = document.activeElement;
            if (
              e.type === "submit" &&
              Y !== document.body &&
              d.value.contains(Y) === !1 &&
              Y.contains(d.value) === !1
            ) {
              $.qAvoidFocus !== !0 && d.value.focus();
              const ee = () => {
                (document.removeEventListener("keydown", Nt, !0),
                  document.removeEventListener("keyup", ee, At),
                  d.value?.removeEventListener("blur", ee, At));
              };
              (document.addEventListener("keydown", Nt, !0),
                document.addEventListener("keyup", ee, At),
                d.value.addEventListener("blur", ee, At));
            }
          }
          u($);
        }
      }
      function q($) {
        d.value !== null &&
          (n("keydown", $),
          Xs($, [13, 32]) === !0 &&
            Lr !== d.value &&
            (Lr !== null && I(),
            $.defaultPrevented !== !0 &&
              ($.qAvoidFocus !== !0 && d.value.focus(),
              (Lr = d.value),
              d.value.classList.add("q-btn--active"),
              document.addEventListener("keyup", x, !0),
              d.value.addEventListener("blur", x, At)),
            Nt($)));
      }
      function B($) {
        d.value !== null &&
          (n("touchstart", $),
          $.defaultPrevented !== !0 &&
            (Or !== d.value &&
              (Or !== null && I(),
              (Or = d.value),
              (m = $.target),
              m.addEventListener("touchcancel", x, At),
              m.addEventListener("touchend", x, At)),
            (E = !0),
            C !== null && clearTimeout(C),
            (C = setTimeout(() => {
              ((C = null), (E = !1));
            }, 200))));
      }
      function L($) {
        d.value !== null &&
          (($.qSkipRipple = E === !0),
          n("mousedown", $),
          $.defaultPrevented !== !0 &&
            xr !== d.value &&
            (xr !== null && I(),
            (xr = d.value),
            d.value.classList.add("q-btn--active"),
            document.addEventListener("mouseup", x, At)));
      }
      function x($) {
        if (
          d.value !== null &&
          !($?.type === "blur" && document.activeElement === d.value)
        ) {
          if ($?.type === "keyup") {
            if (Lr === d.value && Xs($, [13, 32]) === !0) {
              const Y = new MouseEvent("click", $);
              ((Y.qKeyEvent = !0),
                $.defaultPrevented === !0 && Kn(Y),
                $.cancelBubble === !0 && bo(Y),
                d.value.dispatchEvent(Y),
                Nt($),
                ($.qKeyEvent = !0));
            }
            n("keyup", $);
          }
          I();
        }
      }
      function I($) {
        const Y = h.value;
        ($ !== !0 &&
          (Or === d.value || xr === d.value) &&
          Y !== null &&
          Y !== document.activeElement &&
          (Y.setAttribute("tabindex", -1), Y.focus()),
          Or === d.value &&
            (m !== null &&
              (m.removeEventListener("touchcancel", x, At),
              m.removeEventListener("touchend", x, At)),
            (Or = m = null)),
          xr === d.value &&
            (document.removeEventListener("mouseup", x, At), (xr = null)),
          Lr === d.value &&
            (document.removeEventListener("keyup", x, !0),
            d.value?.removeEventListener("blur", x, At),
            (Lr = null)),
          d.value?.classList.remove("q-btn--active"));
      }
      function V($) {
        (Nt($), ($.qSkipRipple = !0));
      }
      return (
        Mt(() => {
          I(!0);
        }),
        Object.assign(r, {
          click: ($) => {
            f.value === !0 && P($);
          },
        }),
        () => {
          let $ = [];
          (e.icon !== void 0 &&
            $.push(
              U(On, {
                name: e.icon,
                left: e.stack !== !0 && v.value === !0,
                role: "img",
              }),
            ),
            v.value === !0 &&
              $.push(
                U(
                  "span",
                  {
                    class: "block",
                  },
                  [e.label],
                ),
              ),
            ($ = vr(t.default, $)),
            e.iconRight !== void 0 &&
              e.round === !1 &&
              $.push(
                U(On, {
                  name: e.iconRight,
                  right: e.stack !== !0 && v.value === !0,
                  role: "img",
                }),
              ));
          const Y = [
            U("span", {
              class: "q-focus-helper",
              ref: h,
            }),
          ];
          return (
            e.loading === !0 &&
              e.percentage !== void 0 &&
              Y.push(
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
                  ],
                ),
              ),
            Y.push(
              U(
                "span",
                {
                  class:
                    "q-btn__content text-center col items-center q-anchor--skip " +
                    o.value,
                },
                $,
              ),
            ),
            e.loading !== null &&
              Y.push(
                U(
                  Ys,
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
                            t.loading !== void 0 ? t.loading() : [U(is)],
                          ),
                        ]
                      : null,
                ),
              ),
            eg(U(c.value, R.value, Y), [[SN, g.value, void 0, b.value]])
          );
        }
      );
    },
  }),
  Tr = {
    dark: {
      type: Boolean,
      default: null,
    },
  };
function kr(e, t) {
  return D(() => (e.dark === null ? t.dark.isActive : e.dark));
}
const DN = st({
    name: "QCard",
    props: {
      ...Tr,
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
        r = kr(e, n),
        s = D(
          () =>
            "q-card" +
            (r.value === !0 ? " q-card--dark q-dark" : "") +
            (e.bordered === !0 ? " q-card--bordered" : "") +
            (e.square === !0 ? " q-card--square no-border-radius" : "") +
            (e.flat === !0 ? " q-card--flat no-shadow" : ""),
        );
      return () =>
        U(
          e.tag,
          {
            class: s.value,
          },
          Wt(t.default),
        );
    },
  }),
  bs = st({
    name: "QCardSection",
    props: {
      tag: {
        type: String,
        default: "div",
      },
      horizontal: Boolean,
    },
    setup(e, { slots: t }) {
      const n = D(
        () =>
          `q-card__section q-card__section--${e.horizontal === !0 ? "horiz row no-wrap" : "vert"}`,
      );
      return () =>
        U(
          e.tag,
          {
            class: n.value,
          },
          Wt(t.default),
        );
    },
  }),
  FN = st({
    name: "QCardActions",
    props: {
      ...yv,
      vertical: Boolean,
    },
    setup(e, { slots: t }) {
      const n = _v(e),
        r = D(
          () =>
            `q-card__actions ${n.value} q-card__actions--${e.vertical === !0 ? "vert column" : "horiz row"}`,
        );
      return () =>
        U(
          "div",
          {
            class: r.value,
          },
          Wt(t.default),
        );
    },
  }),
  $N = {
    true: "inset",
    item: "item-inset",
    "item-thumbnail": "item-thumbnail-inset",
  },
  rl = {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  },
  sh = st({
    name: "QSeparator",
    props: {
      ...Tr,
      spaced: [Boolean, String],
      inset: [Boolean, String],
      vertical: Boolean,
      color: String,
      size: String,
    },
    setup(e) {
      const t = Ce(),
        n = kr(e, t.proxy.$q),
        r = D(() => (e.vertical === !0 ? "vertical" : "horizontal")),
        s = D(() => ` q-separator--${r.value}`),
        i = D(() => (e.inset !== !1 ? `${s.value}-${$N[e.inset]}` : "")),
        o = D(
          () =>
            `q-separator${s.value}${i.value}` +
            (e.color !== void 0 ? ` bg-${e.color}` : "") +
            (n.value === !0 ? " q-separator--dark" : ""),
        ),
        a = D(() => {
          const l = {};
          if (
            (e.size !== void 0 &&
              (l[e.vertical === !0 ? "width" : "height"] = e.size),
            e.spaced !== !1)
          ) {
            const c =
                e.spaced === !0
                  ? `${rl.md}px`
                  : e.spaced in rl
                    ? `${rl[e.spaced]}px`
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
let sl,
  Ui = 0;
const Xe = new Array(256);
for (let e = 0; e < 256; e++) Xe[e] = (e + 256).toString(16).substring(1);
const UN = (() => {
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
          return (e.getRandomValues(n), n);
        };
    }
    return (t) => {
      const n = [];
      for (let r = t; r > 0; r--) n.push(Math.floor(Math.random() * 256));
      return n;
    };
  })(),
  ih = 4096;
function tc() {
  (sl === void 0 || Ui + 16 > ih) && ((Ui = 0), (sl = UN(ih)));
  const e = Array.prototype.slice.call(sl, Ui, (Ui += 16));
  return (
    (e[6] = (e[6] & 15) | 64),
    (e[8] = (e[8] & 63) | 128),
    Xe[e[0]] +
      Xe[e[1]] +
      Xe[e[2]] +
      Xe[e[3]] +
      "-" +
      Xe[e[4]] +
      Xe[e[5]] +
      "-" +
      Xe[e[6]] +
      Xe[e[7]] +
      "-" +
      Xe[e[8]] +
      Xe[e[9]] +
      "-" +
      Xe[e[10]] +
      Xe[e[11]] +
      Xe[e[12]] +
      Xe[e[13]] +
      Xe[e[14]] +
      Xe[e[15]]
  );
}
function BN(e) {
  return e ?? null;
}
function oh(e, t) {
  return e ?? (t === !0 ? `f_${tc()}` : null);
}
function VN({ getValue: e, required: t = !0 } = {}) {
  if (er.value === !0) {
    const n = he(e !== void 0 ? BN(e()) : null);
    return (
      t === !0 &&
        n.value === null &&
        xt(() => {
          n.value = `f_${tc()}`;
        }),
      e !== void 0 &&
        me(e, (r) => {
          n.value = oh(r, t);
        }),
      n
    );
  }
  return e !== void 0 ? D(() => oh(e(), t)) : he(`f_${tc()}`);
}
const ah = /^on[A-Z]/;
function WN() {
  const { attrs: e, vnode: t } = Ce(),
    n = {
      listeners: he({}),
      attributes: he({}),
    };
  function r() {
    const s = {},
      i = {};
    for (const o in e)
      o !== "class" && o !== "style" && ah.test(o) === !1 && (s[o] = e[o]);
    for (const o in t.props) ah.test(o) === !0 && (i[o] = t.props[o]);
    ((n.attributes.value = s), (n.listeners.value = i));
  }
  return (hg(r), r(), n);
}
function jN({ validate: e, resetValidation: t, requiresQForm: n }) {
  const r = ht(qb, !1);
  if (r !== !1) {
    const { props: s, proxy: i } = Ce();
    (Object.assign(i, {
      validate: e,
      resetValidation: t,
    }),
      me(
        () => s.disable,
        (o) => {
          o === !0
            ? (typeof t == "function" && t(), r.unbindComponent(i))
            : r.bindComponent(i);
        },
      ),
      xt(() => {
        s.disable !== !0 && r.bindComponent(i);
      }),
      Mt(() => {
        s.disable !== !0 && r.unbindComponent(i);
      }));
  } else n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const lh = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
  ch = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
  uh = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  Bi =
    /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
  Vi =
    /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
  il = {
    date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    email: (e) =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e,
      ),
    hexColor: (e) => lh.test(e),
    hexaColor: (e) => ch.test(e),
    hexOrHexaColor: (e) => uh.test(e),
    rgbColor: (e) => Bi.test(e),
    rgbaColor: (e) => Vi.test(e),
    rgbOrRgbaColor: (e) => Bi.test(e) || Vi.test(e),
    hexOrRgbColor: (e) => lh.test(e) || Bi.test(e),
    hexaOrRgbaColor: (e) => ch.test(e) || Vi.test(e),
    anyColor: (e) => uh.test(e) || Bi.test(e) || Vi.test(e),
  },
  qN = [!0, !1, "ondemand"],
  HN = {
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
      validator: (e) => qN.includes(e),
    },
  };
function zN(e, t) {
  const { props: n, proxy: r } = Ce(),
    s = he(!1),
    i = he(null),
    o = he(!1);
  jN({
    validate: E,
    resetValidation: m,
  });
  let a = 0,
    l;
  const c = D(
      () => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0,
    ),
    u = D(() => n.disable !== !0 && c.value === !0 && t.value === !1),
    f = D(() => n.error === !0 || s.value === !0),
    d = D(() =>
      typeof n.errorMessage == "string" && n.errorMessage.length !== 0
        ? n.errorMessage
        : i.value,
    );
  me(
    () => n.modelValue,
    () => {
      ((o.value = !0), u.value === !0 && n.lazyRules === !1 && C());
    },
  );
  function h() {
    n.lazyRules !== "ondemand" && u.value === !0 && o.value === !0 && C();
  }
  (me(
    () => n.reactiveRules,
    (v) => {
      v === !0
        ? l === void 0 &&
          (l = me(() => n.rules, h, {
            immediate: !0,
            deep: !0,
          }))
        : l !== void 0 && (l(), (l = void 0));
    },
    {
      immediate: !0,
    },
  ),
    me(() => n.lazyRules, h),
    me(e, (v) => {
      v === !0
        ? (o.value = !0)
        : u.value === !0 && n.lazyRules !== "ondemand" && C();
    }));
  function m() {
    (a++,
      (t.value = !1),
      (o.value = !1),
      (s.value = !1),
      (i.value = null),
      C.cancel());
  }
  function E(v = n.modelValue) {
    if (n.disable === !0 || c.value === !1) return !0;
    const g = ++a,
      b =
        t.value !== !0
          ? () => {
              o.value = !0;
            }
          : () => {},
      _ = (R, P) => {
        (R === !0 && b(), (s.value = R), (i.value = P || null), (t.value = !1));
      },
      T = [];
    for (let R = 0; R < n.rules.length; R++) {
      const P = n.rules[R];
      let q;
      if (
        (typeof P == "function"
          ? (q = P(v, il))
          : typeof P == "string" && il[P] !== void 0 && (q = il[P](v)),
        q === !1 || typeof q == "string")
      )
        return (_(!0, q), !1);
      q !== !0 && q !== void 0 && T.push(q);
    }
    return T.length === 0
      ? (_(!1), !0)
      : ((t.value = !0),
        Promise.all(T).then(
          (R) => {
            if (R === void 0 || Array.isArray(R) === !1 || R.length === 0)
              return (g === a && _(!1), !0);
            const P = R.find((q) => q === !1 || typeof q == "string");
            return (g === a && _(P !== void 0, P), P === void 0);
          },
          (R) => (g === a && (console.error(R), _(!0)), !1),
        ));
  }
  const C = Kg(E, 0);
  return (
    Mt(() => {
      (l?.(), C.cancel());
    }),
    Object.assign(r, {
      resetValidation: m,
      validate: E,
    }),
    as(r, "hasError", () => f.value),
    {
      isDirtyModel: o,
      hasRules: c,
      hasError: f,
      errorMessage: d,
      validate: E,
      resetValidation: m,
    }
  );
}
function nc(e) {
  return e != null && ("" + e).length !== 0;
}
const KN = {
    ...Tr,
    ...HN,
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
  GN = {
    ...KN,
    maxlength: [Number, String],
  },
  JN = ["update:modelValue", "clear", "focus", "blur"];
function YN({ requiredForAttr: e = !0, tagProp: t, changeEvent: n = !1 } = {}) {
  const { props: r, proxy: s } = Ce(),
    i = kr(r, s.$q),
    o = VN({
      required: e,
      getValue: () => r.for,
    });
  return {
    requiredForAttr: e,
    changeEvent: n,
    tag:
      t === !0
        ? D(() => r.tag)
        : {
            value: "label",
          },
    isDark: i,
    editable: D(() => r.disable !== !0 && r.readonly !== !0),
    innerLoading: he(!1),
    focused: he(!1),
    hasPopupOpen: !1,
    splitAttrs: WN(),
    targetUid: o,
    rootRef: he(null),
    targetRef: he(null),
    controlRef: he(null),
  };
}
function QN(e) {
  const { props: t, emit: n, slots: r, attrs: s, proxy: i } = Ce(),
    { $q: o } = i;
  let a = null;
  (e.hasValue === void 0 && (e.hasValue = D(() => nc(t.modelValue))),
    e.emitValue === void 0 &&
      (e.emitValue = (W) => {
        n("update:modelValue", W);
      }),
    e.controlEvents === void 0 &&
      (e.controlEvents = {
        onFocusin: B,
        onFocusout: L,
      }),
    Object.assign(e, {
      clearValue: x,
      onControlFocusin: B,
      onControlFocusout: L,
      focus: P,
    }),
    e.computedCounter === void 0 &&
      (e.computedCounter = D(() => {
        if (t.counter !== !1) {
          const W =
              typeof t.modelValue == "string" || typeof t.modelValue == "number"
                ? ("" + t.modelValue).length
                : Array.isArray(t.modelValue) === !0
                  ? t.modelValue.length
                  : 0,
            se = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
          return W + (se !== void 0 ? " / " + se : "");
        }
      })));
  const {
      isDirtyModel: l,
      hasRules: c,
      hasError: u,
      errorMessage: f,
      resetValidation: d,
    } = zN(e.focused, e.innerLoading),
    h =
      e.floatingLabel !== void 0
        ? D(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.floatingLabel.value === !0,
          )
        : D(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.hasValue.value === !0,
          ),
    m = D(
      () =>
        t.bottomSlots === !0 ||
        t.hint !== void 0 ||
        c.value === !0 ||
        t.counter === !0 ||
        t.error !== null,
    ),
    E = D(() =>
      t.filled === !0
        ? "filled"
        : t.outlined === !0
          ? "outlined"
          : t.borderless === !0
            ? "borderless"
            : t.standout
              ? "standout"
              : "standard",
    ),
    C = D(
      () =>
        `q-field row no-wrap items-start q-field--${E.value}` +
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
        (u.value === !0 ? " q-field--error" : "") +
        (u.value === !0 || e.focused.value === !0
          ? " q-field--highlighted"
          : "") +
        (t.hideBottomSpace !== !0 && m.value === !0
          ? " q-field--with-bottom"
          : "") +
        (t.disable === !0
          ? " q-field--disabled"
          : t.readonly === !0
            ? " q-field--readonly"
            : ""),
    ),
    v = D(
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
              : ""),
    ),
    g = D(() => t.labelSlot === !0 || t.label !== void 0),
    b = D(
      () =>
        "q-field__label no-pointer-events absolute ellipsis" +
        (t.labelColor !== void 0 && u.value !== !0
          ? ` text-${t.labelColor}`
          : ""),
    ),
    _ = D(() => ({
      id: e.targetUid.value,
      editable: e.editable.value,
      focused: e.focused.value,
      floatingLabel: h.value,
      modelValue: t.modelValue,
      emitValue: e.emitValue,
    })),
    T = D(() => {
      const W = {};
      return (
        e.targetUid.value && (W.for = e.targetUid.value),
        t.disable === !0 && (W["aria-disabled"] = "true"),
        W
      );
    });
  function R() {
    const W = document.activeElement;
    let se = e.targetRef?.value;
    se &&
      (W === null || W.id !== e.targetUid.value) &&
      (se.hasAttribute("tabindex") === !0 ||
        (se = se.querySelector("[tabindex]")),
      se !== W &&
        se?.focus({
          preventScroll: !0,
        }));
  }
  function P() {
    tu(R);
  }
  function q() {
    HP(R);
    const W = document.activeElement;
    W !== null && e.rootRef.value.contains(W) && W.blur();
  }
  function B(W) {
    (a !== null && (clearTimeout(a), (a = null)),
      e.editable.value === !0 &&
        e.focused.value === !1 &&
        ((e.focused.value = !0), n("focus", W)));
  }
  function L(W, se) {
    (a !== null && clearTimeout(a),
      (a = setTimeout(() => {
        ((a = null),
          !(
            document.hasFocus() === !0 &&
            (e.hasPopupOpen === !0 ||
              e.controlRef === void 0 ||
              e.controlRef.value === null ||
              e.controlRef.value.contains(document.activeElement) !== !1)
          ) &&
            (e.focused.value === !0 && ((e.focused.value = !1), n("blur", W)),
            se?.()));
      })));
  }
  function x(W) {
    (Nt(W),
      o.platform.is.mobile !== !0
        ? (e.targetRef?.value || e.rootRef.value).focus()
        : e.rootRef.value.contains(document.activeElement) === !0 &&
          document.activeElement.blur(),
      t.type === "file" && (e.inputRef.value.value = null),
      n("update:modelValue", null),
      e.changeEvent === !0 && n("change", null),
      n("clear", t.modelValue),
      dt(() => {
        const se = l.value;
        (d(), (l.value = se));
      }));
  }
  function I(W) {
    [13, 32].includes(W.keyCode) && x(W);
  }
  function V() {
    const W = [];
    return (
      r.prepend !== void 0 &&
        W.push(
          U(
            "div",
            {
              class:
                "q-field__prepend q-field__marginal row no-wrap items-center",
              key: "prepend",
              onClick: Kn,
            },
            r.prepend(),
          ),
        ),
      W.push(
        U(
          "div",
          {
            class:
              "q-field__control-container col relative-position row no-wrap q-anchor--skip",
          },
          $(),
        ),
      ),
      u.value === !0 &&
        t.noErrorIcon === !1 &&
        W.push(
          ee("error", [
            U(On, {
              name: o.iconSet.field.error,
              color: "negative",
            }),
          ]),
        ),
      t.loading === !0 || e.innerLoading.value === !0
        ? W.push(
            ee(
              "inner-loading-append",
              r.loading !== void 0
                ? r.loading()
                : [
                    U(is, {
                      color: t.color,
                    }),
                  ],
            ),
          )
        : t.clearable === !0 &&
          e.hasValue.value === !0 &&
          e.editable.value === !0 &&
          W.push(
            ee("inner-clearable-append", [
              U(On, {
                class: "q-field__focusable-action",
                name: t.clearIcon || o.iconSet.field.clear,
                tabindex: 0,
                role: "button",
                "aria-hidden": "false",
                "aria-label": o.lang.label.clear,
                onKeyup: I,
                onClick: x,
              }),
            ]),
          ),
      r.append !== void 0 &&
        W.push(
          U(
            "div",
            {
              class:
                "q-field__append q-field__marginal row no-wrap items-center",
              key: "append",
              onClick: Kn,
            },
            r.append(),
          ),
        ),
      e.getInnerAppend !== void 0 &&
        W.push(ee("inner-append", e.getInnerAppend())),
      e.getControlChild !== void 0 && W.push(e.getControlChild()),
      W
    );
  }
  function $() {
    const W = [];
    return (
      t.prefix !== void 0 &&
        t.prefix !== null &&
        W.push(
          U(
            "div",
            {
              class: "q-field__prefix no-pointer-events row items-center",
            },
            t.prefix,
          ),
        ),
      e.getShadowControl !== void 0 &&
        e.hasShadow.value === !0 &&
        W.push(e.getShadowControl()),
      g.value === !0 &&
        W.push(
          U(
            "div",
            {
              class: b.value,
            },
            Wt(r.label, t.label),
          ),
        ),
      e.getControl !== void 0
        ? W.push(e.getControl())
        : r.rawControl !== void 0
          ? W.push(r.rawControl())
          : r.control !== void 0 &&
            W.push(
              U(
                "div",
                {
                  ref: e.targetRef,
                  class: "q-field__native row",
                  tabindex: -1,
                  ...e.splitAttrs.attributes.value,
                  "data-autofocus": t.autofocus === !0 || void 0,
                },
                r.control(_.value),
              ),
            ),
      t.suffix !== void 0 &&
        t.suffix !== null &&
        W.push(
          U(
            "div",
            {
              class: "q-field__suffix no-pointer-events row items-center",
            },
            t.suffix,
          ),
        ),
      W.concat(Wt(r.default))
    );
  }
  function Y() {
    let W, se;
    u.value === !0
      ? f.value !== null
        ? ((W = [
            U(
              "div",
              {
                role: "alert",
              },
              f.value,
            ),
          ]),
          (se = `q--slot-error-${f.value}`))
        : ((W = Wt(r.error)), (se = "q--slot-error"))
      : (t.hideHint !== !0 || e.focused.value === !0) &&
        (t.hint !== void 0
          ? ((W = [U("div", t.hint)]), (se = `q--slot-hint-${t.hint}`))
          : ((W = Wt(r.hint)), (se = "q--slot-hint")));
    const Ie = t.counter === !0 || r.counter !== void 0;
    if (t.hideBottomSpace === !0 && Ie === !1 && W === void 0) return;
    const ce = U(
      "div",
      {
        key: se,
        class: "q-field__messages col",
      },
      W,
    );
    return U(
      "div",
      {
        class:
          "q-field__bottom row items-start q-field__bottom--" +
          (t.hideBottomSpace !== !0 ? "animated" : "stale"),
        onClick: Kn,
      },
      [
        t.hideBottomSpace === !0
          ? ce
          : U(
              Ys,
              {
                name: "q-transition--field-message",
              },
              () => ce,
            ),
        Ie === !0
          ? U(
              "div",
              {
                class: "q-field__counter",
              },
              r.counter !== void 0 ? r.counter() : e.computedCounter.value,
            )
          : null,
      ],
    );
  }
  function ee(W, se) {
    return se === null
      ? null
      : U(
          "div",
          {
            key: W,
            class:
              "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip",
          },
          se,
        );
  }
  let J = !1;
  return (
    Go(() => {
      J = !0;
    }),
    fg(() => {
      J === !0 && t.autofocus === !0 && i.focus();
    }),
    t.autofocus === !0 &&
      xt(() => {
        i.focus();
      }),
    Mt(() => {
      a !== null && clearTimeout(a);
    }),
    Object.assign(i, {
      focus: P,
      blur: q,
    }),
    function () {
      const se =
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
          class: [C.value, s.class],
          style: s.style,
          ...se,
        },
        [
          r.before !== void 0
            ? U(
                "div",
                {
                  class:
                    "q-field__before q-field__marginal row no-wrap items-center",
                  onClick: Kn,
                },
                r.before(),
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
                  class: v.value,
                  tabindex: -1,
                  ...e.controlEvents,
                },
                V(),
              ),
              m.value === !0 ? Y() : null,
            ],
          ),
          r.after !== void 0
            ? U(
                "div",
                {
                  class:
                    "q-field__after q-field__marginal row no-wrap items-center",
                  onClick: Kn,
                },
                r.after(),
              )
            : null,
        ],
      );
    }
  );
}
const fh = {
    date: "####/##/##",
    datetime: "####/##/## ##:##",
    time: "##:##",
    fulltime: "##:##:##",
    phone: "(###) ### - ####",
    card: "#### #### #### ####",
  },
  { tokenMap: dh, tokenKeys: XN } = Ev({
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
  });
function Ev(e) {
  const t = Object.keys(e),
    n = {};
  return (
    t.forEach((r) => {
      const s = e[r];
      n[r] = {
        ...s,
        regex: new RegExp(s.pattern),
      };
    }),
    {
      tokenMap: n,
      tokenKeys: t,
    }
  );
}
function Sv(e) {
  return new RegExp(
    "\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + e.join("") + "])|(.)",
    "g",
  );
}
const hh = /[.*+?^${}()|[\]\\]/g,
  ZN = Sv(XN),
  Ve = "",
  e1 = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean,
    maskTokens: Object,
  };
function t1(e, t, n, r) {
  let s, i, o, a, l, c;
  const u = D(() => {
      if (e.maskTokens === void 0 || e.maskTokens === null)
        return {
          tokenMap: dh,
          tokenRegexMask: ZN,
        };
      const { tokenMap: L } = Ev(e.maskTokens),
        x = {
          ...dh,
          ...L,
        };
      return {
        tokenMap: x,
        tokenRegexMask: Sv(Object.keys(x)),
      };
    }),
    f = he(null),
    d = he(m());
  function h() {
    return (
      e.autogrow === !0 ||
      ["textarea", "text", "search", "url", "tel", "password"].includes(e.type)
    );
  }
  (me(() => e.type + e.autogrow, C),
    me(
      () => e.mask,
      (L) => {
        if (L !== void 0) v(d.value, !0);
        else {
          const x = q(d.value);
          (C(), e.modelValue !== x && t("update:modelValue", x));
        }
      },
    ),
    me(
      () => e.fillMask + e.reverseFillMask,
      () => {
        f.value === !0 && v(d.value, !0);
      },
    ),
    me(
      () => e.unmaskedValue,
      () => {
        f.value === !0 && v(d.value);
      },
    ));
  function m() {
    if ((C(), f.value === !0)) {
      const L = R(q(e.modelValue));
      return e.fillMask !== !1 ? B(L) : L;
    }
    return e.modelValue;
  }
  function E(L) {
    if (L < s.length) return s.slice(-L);
    let x = "",
      I = s;
    const V = I.indexOf(Ve);
    if (V !== -1) {
      for (let $ = L - I.length; $ > 0; $--) x += Ve;
      I = I.slice(0, V) + x + I.slice(V);
    }
    return I;
  }
  function C() {
    if (
      ((f.value = e.mask !== void 0 && e.mask.length !== 0 && h()),
      f.value === !1)
    ) {
      ((a = void 0), (s = ""), (i = ""));
      return;
    }
    const L = fh[e.mask] === void 0 ? e.mask : fh[e.mask],
      x =
        typeof e.fillMask == "string" && e.fillMask.length !== 0
          ? e.fillMask.slice(0, 1)
          : "_",
      I = x.replace(hh, "\\$&"),
      V = [],
      $ = [],
      Y = [];
    let ee = e.reverseFillMask === !0,
      J = "",
      W = "";
    L.replace(u.value.tokenRegexMask, (G, de, Te, Oe, ie) => {
      if (Oe !== void 0) {
        const M = u.value.tokenMap[Oe];
        (Y.push(M),
          (W = M.negate),
          ee === !0 &&
            ($.push(
              "(?:" +
                W +
                "+)?(" +
                M.pattern +
                "+)?(?:" +
                W +
                "+)?(" +
                M.pattern +
                "+)?",
            ),
            (ee = !1)),
          $.push("(?:" + W + "+)?(" + M.pattern + ")?"));
      } else if (Te !== void 0)
        ((J = "\\" + (Te === "\\" ? "" : Te)),
          Y.push(Te),
          V.push("([^" + J + "]+)?" + J + "?"));
      else {
        const M = de !== void 0 ? de : ie;
        ((J = M === "\\" ? "\\\\\\\\" : M.replace(hh, "\\\\$&")),
          Y.push(M),
          V.push("([^" + J + "]+)?" + J + "?"));
      }
    });
    const se = new RegExp(
        "^" +
          V.join("") +
          "(" +
          (J === "" ? "." : "[^" + J + "]") +
          "+)?" +
          (J === "" ? "" : "[" + J + "]*") +
          "$",
      ),
      Ie = $.length - 1,
      ce = $.map((G, de) =>
        de === 0 && e.reverseFillMask === !0
          ? new RegExp("^" + I + "*" + G)
          : de === Ie
            ? new RegExp(
                "^" +
                  G +
                  "(" +
                  (W === "" ? "." : W) +
                  "+)?" +
                  (e.reverseFillMask === !0 ? "$" : I + "*"),
              )
            : new RegExp("^" + G),
      );
    ((o = Y),
      (a = (G) => {
        const de = se.exec(
          e.reverseFillMask === !0 ? G : G.slice(0, Y.length + 1),
        );
        de !== null && (G = de.slice(1).join(""));
        const Te = [],
          Oe = ce.length;
        for (let ie = 0, M = G; ie < Oe; ie++) {
          const Q = ce[ie].exec(M);
          if (Q === null) break;
          ((M = M.slice(Q.shift().length)), Te.push(...Q));
        }
        return Te.length !== 0 ? Te.join("") : G;
      }),
      (s = Y.map((G) => (typeof G == "string" ? G : Ve)).join("")),
      (i = s.split(Ve).join(x)));
  }
  function v(L, x, I) {
    const V = r.value,
      $ = V.selectionEnd,
      Y = V.value.length - $,
      ee = q(L);
    x === !0 && C();
    const J = R(ee, x),
      W = e.fillMask !== !1 ? B(J) : J,
      se = d.value !== W;
    (V.value !== W && (V.value = W),
      se === !0 && (d.value = W),
      document.activeElement === V &&
        dt(() => {
          if (W === i) {
            const ce = e.reverseFillMask === !0 ? i.length : 0;
            V.setSelectionRange(ce, ce, "forward");
            return;
          }
          if (I === "insertFromPaste" && e.reverseFillMask !== !0) {
            const ce = V.selectionEnd;
            let G = $ - 1;
            for (let de = l; de <= G && de < ce; de++) s[de] !== Ve && G++;
            b.right(V, G);
            return;
          }
          if (
            ["deleteContentBackward", "deleteContentForward"].indexOf(I) !== -1
          ) {
            const ce =
              e.reverseFillMask === !0
                ? $ === 0
                  ? W.length > J.length
                    ? 1
                    : 0
                  : Math.max(
                      0,
                      W.length - (W === i ? 0 : Math.min(J.length, Y) + 1),
                    ) + 1
                : $;
            V.setSelectionRange(ce, ce, "forward");
            return;
          }
          if (e.reverseFillMask === !0)
            if (se === !0) {
              const ce = Math.max(
                0,
                W.length - (W === i ? 0 : Math.min(J.length, Y + 1)),
              );
              ce === 1 && $ === 1
                ? V.setSelectionRange(ce, ce, "forward")
                : b.rightReverse(V, ce);
            } else {
              const ce = W.length - Y;
              V.setSelectionRange(ce, ce, "backward");
            }
          else if (se === !0) {
            const ce = Math.max(0, s.indexOf(Ve), Math.min(J.length, $) - 1);
            b.right(V, ce);
          } else {
            const ce = $ - 1;
            b.right(V, ce);
          }
        }));
    const Ie = e.unmaskedValue === !0 ? q(W) : W;
    String(e.modelValue) !== Ie &&
      (e.modelValue !== null || Ie !== "") &&
      n(Ie, !0);
  }
  function g(L, x, I) {
    const V = R(q(L.value));
    ((x = Math.max(0, s.indexOf(Ve), Math.min(V.length, x))),
      (l = x),
      L.setSelectionRange(x, I, "forward"));
  }
  const b = {
    left(L, x) {
      const I = s.slice(x - 1).indexOf(Ve) === -1;
      let V = Math.max(0, x - 1);
      for (; V >= 0; V--)
        if (s[V] === Ve) {
          ((x = V), I === !0 && x++);
          break;
        }
      if (V < 0 && s[x] !== void 0 && s[x] !== Ve) return b.right(L, 0);
      x >= 0 && L.setSelectionRange(x, x, "backward");
    },
    right(L, x) {
      const I = L.value.length;
      let V = Math.min(I, x + 1);
      for (; V <= I; V++)
        if (s[V] === Ve) {
          x = V;
          break;
        } else s[V - 1] === Ve && (x = V);
      if (V > I && s[x - 1] !== void 0 && s[x - 1] !== Ve) return b.left(L, I);
      L.setSelectionRange(x, x, "forward");
    },
    leftReverse(L, x) {
      const I = E(L.value.length);
      let V = Math.max(0, x - 1);
      for (; V >= 0; V--)
        if (I[V - 1] === Ve) {
          x = V;
          break;
        } else if (I[V] === Ve && ((x = V), V === 0)) break;
      if (V < 0 && I[x] !== void 0 && I[x] !== Ve) return b.rightReverse(L, 0);
      x >= 0 && L.setSelectionRange(x, x, "backward");
    },
    rightReverse(L, x) {
      const I = L.value.length,
        V = E(I),
        $ = V.slice(0, x + 1).indexOf(Ve) === -1;
      let Y = Math.min(I, x + 1);
      for (; Y <= I; Y++)
        if (V[Y - 1] === Ve) {
          ((x = Y), x > 0 && $ === !0 && x--);
          break;
        }
      if (Y > I && V[x - 1] !== void 0 && V[x - 1] !== Ve)
        return b.leftReverse(L, I);
      L.setSelectionRange(x, x, "forward");
    },
  };
  function _(L) {
    (t("click", L), (c = void 0));
  }
  function T(L) {
    if ((t("keydown", L), Jg(L) === !0 || L.altKey === !0)) return;
    const x = r.value,
      I = x.selectionStart,
      V = x.selectionEnd;
    if ((L.shiftKey || (c = void 0), L.keyCode === 37 || L.keyCode === 39)) {
      L.shiftKey &&
        c === void 0 &&
        (c = x.selectionDirection === "forward" ? I : V);
      const $ =
        b[
          (L.keyCode === 39 ? "right" : "left") +
            (e.reverseFillMask === !0 ? "Reverse" : "")
        ];
      if ((L.preventDefault(), $(x, c === I ? V : I), L.shiftKey)) {
        const Y = x.selectionStart;
        x.setSelectionRange(Math.min(c, Y), Math.max(c, Y), "forward");
      }
    } else
      L.keyCode === 8 && e.reverseFillMask !== !0 && I === V
        ? (b.left(x, I), x.setSelectionRange(x.selectionStart, V, "backward"))
        : L.keyCode === 46 &&
          e.reverseFillMask === !0 &&
          I === V &&
          (b.rightReverse(x, V),
          x.setSelectionRange(I, x.selectionEnd, "forward"));
  }
  function R(L, x) {
    if (L == null || L === "") return "";
    if (e.reverseFillMask === !0) return P(L, x);
    const I = o;
    let V = 0,
      $ = "";
    for (let Y = 0; Y < I.length; Y++) {
      const ee = L[V],
        J = I[Y];
      if (typeof J == "string") (($ += J), x === !0 && ee === J && V++);
      else if (ee !== void 0 && J.regex.test(ee))
        (($ += J.transform !== void 0 ? J.transform(ee) : ee), V++);
      else return $;
    }
    return $;
  }
  function P(L, x) {
    const I = o,
      V = s.indexOf(Ve);
    let $ = L.length - 1,
      Y = "";
    for (let ee = I.length - 1; ee >= 0 && $ !== -1; ee--) {
      const J = I[ee];
      let W = L[$];
      if (typeof J == "string") ((Y = J + Y), x === !0 && W === J && $--);
      else if (W !== void 0 && J.regex.test(W))
        do
          ((Y = (J.transform !== void 0 ? J.transform(W) : W) + Y),
            $--,
            (W = L[$]));
        while (V === ee && W !== void 0 && J.regex.test(W));
      else return Y;
    }
    return Y;
  }
  function q(L) {
    return typeof L != "string" || a === void 0
      ? typeof L == "number"
        ? a("" + L)
        : L
      : a(L);
  }
  function B(L) {
    return i.length - L.length <= 0
      ? L
      : e.reverseFillMask === !0 && L.length !== 0
        ? i.slice(0, -L.length) + L
        : L + i.slice(L.length);
  }
  return {
    innerValue: d,
    hasMask: f,
    moveCursorForPaste: g,
    updateMaskValue: v,
    onMaskedKeydown: T,
    onMaskedClick: _,
  };
}
const ru = {
  name: String,
};
function kO(e) {
  return D(() => ({
    type: "hidden",
    name: e.name,
    value: e.modelValue,
  }));
}
function Cv(e = {}) {
  return (t, n, r) => {
    t[n](
      U("input", {
        class: "hidden" + (r || ""),
        ...e.value,
      }),
    );
  };
}
function n1(e) {
  return D(() => e.name || e.for);
}
function r1(e, t) {
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
  return D(
    t === !0
      ? () => {
          if (e.type === "file") return n();
        }
      : n,
  );
}
const s1 =
    /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
  i1 =
    /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,
  o1 = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,
  a1 = /[a-z0-9_ -]$/i;
function l1(e) {
  return function (n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== !0) return;
      ((n.target.qComposing = !1), e(n));
    } else
      n.type === "compositionupdate" &&
        n.target.qComposing !== !0 &&
        typeof n.data == "string" &&
        (Ke.is.firefox === !0
          ? a1.test(n.data) === !1
          : s1.test(n.data) === !0 ||
            i1.test(n.data) === !0 ||
            o1.test(n.data) === !0) === !0 &&
        (n.target.qComposing = !0);
  };
}
const c1 = st({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...GN,
    ...e1,
    ...ru,
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
  emits: [...JN, "paste", "change", "keydown", "click", "animationend"],
  setup(e, { emit: t, attrs: n }) {
    const { proxy: r } = Ce(),
      { $q: s } = r,
      i = {};
    let o = NaN,
      a,
      l,
      c = null,
      u;
    const f = he(null),
      d = n1(e),
      {
        innerValue: h,
        hasMask: m,
        moveCursorForPaste: E,
        updateMaskValue: C,
        onMaskedKeydown: v,
        onMaskedClick: g,
      } = t1(e, t, ee, f),
      b = r1(e, !0),
      _ = D(() => nc(h.value)),
      T = l1($),
      R = YN({
        changeEvent: !0,
      }),
      P = D(() => e.type === "textarea" || e.autogrow === !0),
      q = D(
        () =>
          P.value === !0 ||
          ["text", "search", "url", "tel", "password"].includes(e.type),
      ),
      B = D(() => {
        const G = {
          ...R.splitAttrs.listeners.value,
          onInput: $,
          onPaste: V,
          onChange: W,
          onBlur: se,
          onFocus: bo,
        };
        return (
          (G.onCompositionstart =
            G.onCompositionupdate =
            G.onCompositionend =
              T),
          m.value === !0 && ((G.onKeydown = v), (G.onClick = g)),
          e.autogrow === !0 && (G.onAnimationend = Y),
          G
        );
      }),
      L = D(() => {
        const G = {
          tabindex: 0,
          "data-autofocus": e.autofocus === !0 || void 0,
          rows: e.type === "textarea" ? 6 : void 0,
          "aria-label": e.label,
          name: d.value,
          ...R.splitAttrs.attributes.value,
          id: R.targetUid.value,
          maxlength: e.maxlength,
          disabled: e.disable === !0,
          readonly: e.readonly === !0,
        };
        return (
          P.value === !1 && (G.type = e.type),
          e.autogrow === !0 && (G.rows = 1),
          G
        );
      });
    (me(
      () => e.type,
      () => {
        f.value && (f.value.value = e.modelValue);
      },
    ),
      me(
        () => e.modelValue,
        (G) => {
          if (m.value === !0) {
            if (l === !0 && ((l = !1), String(G) === o)) return;
            C(G);
          } else
            h.value !== G &&
              ((h.value = G),
              e.type === "number" &&
                i.hasOwnProperty("value") === !0 &&
                (a === !0 ? (a = !1) : delete i.value));
          e.autogrow === !0 && dt(J);
        },
      ),
      me(
        () => e.autogrow,
        (G) => {
          G === !0
            ? dt(J)
            : f.value !== null && n.rows > 0 && (f.value.style.height = "auto");
        },
      ),
      me(
        () => e.dense,
        () => {
          e.autogrow === !0 && dt(J);
        },
      ));
    function x() {
      tu(() => {
        const G = document.activeElement;
        f.value !== null &&
          f.value !== G &&
          (G === null || G.id !== R.targetUid.value) &&
          f.value.focus({
            preventScroll: !0,
          });
      });
    }
    function I() {
      f.value?.select();
    }
    function V(G) {
      if (m.value === !0 && e.reverseFillMask !== !0) {
        const de = G.target;
        E(de, de.selectionStart, de.selectionEnd);
      }
      t("paste", G);
    }
    function $(G) {
      if (!G || !G.target) return;
      if (e.type === "file") {
        t("update:modelValue", G.target.files);
        return;
      }
      const de = G.target.value;
      if (G.target.qComposing === !0) {
        i.value = de;
        return;
      }
      if (m.value === !0) C(de, !1, G.inputType);
      else if (
        (ee(de), q.value === !0 && G.target === document.activeElement)
      ) {
        const { selectionStart: Te, selectionEnd: Oe } = G.target;
        Te !== void 0 &&
          Oe !== void 0 &&
          dt(() => {
            G.target === document.activeElement &&
              de.indexOf(G.target.value) === 0 &&
              G.target.setSelectionRange(Te, Oe);
          });
      }
      e.autogrow === !0 && J();
    }
    function Y(G) {
      (t("animationend", G), J());
    }
    function ee(G, de) {
      ((u = () => {
        ((c = null),
          e.type !== "number" &&
            i.hasOwnProperty("value") === !0 &&
            delete i.value,
          e.modelValue !== G &&
            o !== G &&
            ((o = G),
            de === !0 && (l = !0),
            t("update:modelValue", G),
            dt(() => {
              o === G && (o = NaN);
            })),
          (u = void 0));
      }),
        e.type === "number" && ((a = !0), (i.value = G)),
        e.debounce !== void 0
          ? (c !== null && clearTimeout(c),
            (i.value = G),
            (c = setTimeout(u, e.debounce)))
          : u());
    }
    function J() {
      requestAnimationFrame(() => {
        const G = f.value;
        if (G !== null) {
          const de = G.parentNode.style,
            { scrollTop: Te } = G,
            { overflowY: Oe, maxHeight: ie } =
              s.platform.is.firefox === !0 ? {} : window.getComputedStyle(G),
            M = Oe !== void 0 && Oe !== "scroll";
          (M === !0 && (G.style.overflowY = "hidden"),
            (de.marginBottom = G.scrollHeight - 1 + "px"),
            (G.style.height = "1px"),
            (G.style.height = G.scrollHeight + "px"),
            M === !0 &&
              (G.style.overflowY =
                parseInt(ie, 10) < G.scrollHeight ? "auto" : "hidden"),
            (de.marginBottom = ""),
            (G.scrollTop = Te));
        }
      });
    }
    function W(G) {
      (T(G),
        c !== null && (clearTimeout(c), (c = null)),
        u?.(),
        t("change", G.target.value));
    }
    function se(G) {
      (G !== void 0 && bo(G),
        c !== null && (clearTimeout(c), (c = null)),
        u?.(),
        (a = !1),
        (l = !1),
        delete i.value,
        e.type !== "file" &&
          setTimeout(() => {
            f.value !== null &&
              (f.value.value = h.value !== void 0 ? h.value : "");
          }));
    }
    function Ie() {
      return i.hasOwnProperty("value") === !0
        ? i.value
        : h.value !== void 0
          ? h.value
          : "";
    }
    (Mt(() => {
      se();
    }),
      xt(() => {
        e.autogrow === !0 && J();
      }),
      Object.assign(R, {
        innerValue: h,
        fieldClass: D(
          () =>
            `q-${P.value === !0 ? "textarea" : "input"}` +
            (e.autogrow === !0 ? " q-textarea--autogrow" : ""),
        ),
        hasShadow: D(
          () =>
            e.type !== "file" &&
            typeof e.shadowText == "string" &&
            e.shadowText.length !== 0,
        ),
        inputRef: f,
        emitValue: ee,
        hasValue: _,
        floatingLabel: D(
          () =>
            (_.value === !0 &&
              (e.type !== "number" || isNaN(h.value) === !1)) ||
            nc(e.displayValue),
        ),
        getControl: () =>
          U(P.value === !0 ? "textarea" : "input", {
            ref: f,
            class: ["q-field__native q-placeholder", e.inputClass],
            style: e.inputStyle,
            ...L.value,
            ...B.value,
            ...(e.type !== "file"
              ? {
                  value: Ie(),
                }
              : b.value),
          }),
        getShadowControl: () =>
          U(
            "div",
            {
              class:
                "q-field__native q-field__shadow absolute-bottom no-pointer-events" +
                (P.value === !0 ? "" : " text-no-wrap"),
            },
            [
              U(
                "span",
                {
                  class: "invisible",
                },
                Ie(),
              ),
              U("span", e.shadowText),
            ],
          ),
      }));
    const ce = QN(R);
    return (
      Object.assign(r, {
        focus: x,
        select: I,
        getNativeElement: () => f.value,
      }),
      as(r, "nativeEl", () => f.value),
      ce
    );
  },
});
function Iv(e, t) {
  const n = he(null),
    r = D(() =>
      e.disable === !0
        ? null
        : U("span", {
            ref: n,
            class: "no-outline",
            tabindex: -1,
          }),
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
const Tv = {
    xs: 30,
    sm: 35,
    md: 40,
    lg: 50,
    xl: 60,
  },
  u1 = () =>
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
      ],
    ),
  f1 = st({
    name: "QRadio",
    props: {
      ...Tr,
      ...Ei,
      ...ru,
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
        s = kr(e, r.$q),
        i = Si(e, Tv),
        o = he(null),
        { refocusTargetEl: a, refocusTarget: l } = Iv(e, o),
        c = D(() => fe(e.modelValue) === fe(e.val)),
        u = D(
          () =>
            "q-radio cursor-pointer no-outline row inline no-wrap items-center" +
            (e.disable === !0 ? " disabled" : "") +
            (s.value === !0 ? " q-radio--dark" : "") +
            (e.dense === !0 ? " q-radio--dense" : "") +
            (e.leftLabel === !0 ? " reverse" : ""),
        ),
        f = D(() => {
          const _ =
            e.color !== void 0 && (e.keepColor === !0 || c.value === !0)
              ? ` text-${e.color}`
              : "";
          return `q-radio__inner relative-position q-radio__inner--${c.value === !0 ? "truthy" : "falsy"}${_}`;
        }),
        d = D(() => (c.value === !0 ? e.checkedIcon : e.uncheckedIcon) || null),
        h = D(() => (e.disable === !0 ? -1 : e.tabindex || 0)),
        m = D(() => {
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
        E = Cv(m);
      function C(_) {
        (_ !== void 0 && (Nt(_), l(_)),
          e.disable !== !0 &&
            c.value !== !0 &&
            n("update:modelValue", e.val, _));
      }
      function v(_) {
        (_.keyCode === 13 || _.keyCode === 32) && Nt(_);
      }
      function g(_) {
        (_.keyCode === 13 || _.keyCode === 32) && C(_);
      }
      Object.assign(r, {
        set: C,
      });
      const b = u1();
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
                    U(On, {
                      class: "q-radio__icon",
                      name: d.value,
                    }),
                  ],
                ),
              ]
            : [b];
        e.disable !== !0 &&
          E(_, "unshift", " q-radio__native q-ma-none q-pa-none");
        const T = [
          U(
            "div",
            {
              class: f.value,
              style: i.value,
              "aria-hidden": "true",
            },
            _,
          ),
        ];
        a.value !== null && T.push(a.value);
        const R = e.label !== void 0 ? vr(t.default, [e.label]) : Wt(t.default);
        return (
          R !== void 0 &&
            T.push(
              U(
                "div",
                {
                  class: "q-radio__label q-anchor--skip",
                },
                R,
              ),
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
              onClick: C,
              onKeydown: v,
              onKeyup: g,
            },
            T,
          )
        );
      };
    },
  }),
  kv = {
    ...Tr,
    ...Ei,
    ...ru,
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
  Av = ["update:modelValue"];
function Pv(e, t) {
  const { props: n, slots: r, emit: s, proxy: i } = Ce(),
    { $q: o } = i,
    a = kr(n, o),
    l = he(null),
    { refocusTargetEl: c, refocusTarget: u } = Iv(n, l),
    f = Si(n, Tv),
    d = D(() => n.val !== void 0 && Array.isArray(n.modelValue)),
    h = D(() => {
      const I = fe(n.val);
      return d.value === !0 ? n.modelValue.findIndex((V) => fe(V) === I) : -1;
    }),
    m = D(() =>
      d.value === !0 ? h.value !== -1 : fe(n.modelValue) === fe(n.trueValue),
    ),
    E = D(() =>
      d.value === !0 ? h.value === -1 : fe(n.modelValue) === fe(n.falseValue),
    ),
    C = D(() => m.value === !1 && E.value === !1),
    v = D(() => (n.disable === !0 ? -1 : n.tabindex || 0)),
    g = D(
      () =>
        `q-${e} cursor-pointer no-outline row inline no-wrap items-center` +
        (n.disable === !0 ? " disabled" : "") +
        (a.value === !0 ? ` q-${e}--dark` : "") +
        (n.dense === !0 ? ` q-${e}--dense` : "") +
        (n.leftLabel === !0 ? " reverse" : ""),
    ),
    b = D(() => {
      const I = m.value === !0 ? "truthy" : E.value === !0 ? "falsy" : "indet",
        V =
          n.color !== void 0 &&
          (n.keepColor === !0 ||
            (e === "toggle" ? m.value === !0 : E.value !== !0))
            ? ` text-${n.color}`
            : "";
      return `q-${e}__inner relative-position non-selectable q-${e}__inner--${I}${V}`;
    }),
    _ = D(() => {
      const I = {
        type: "checkbox",
      };
      return (
        n.name !== void 0 &&
          Object.assign(I, {
            ".checked": m.value,
            "^checked": m.value === !0 ? "checked" : void 0,
            name: n.name,
            value: d.value === !0 ? n.val : n.trueValue,
          }),
        I
      );
    }),
    T = Cv(_),
    R = D(() => {
      const I = {
        tabindex: v.value,
        role: e === "toggle" ? "switch" : "checkbox",
        "aria-label": n.label,
        "aria-checked":
          C.value === !0 ? "mixed" : m.value === !0 ? "true" : "false",
      };
      return (n.disable === !0 && (I["aria-disabled"] = "true"), I);
    });
  function P(I) {
    (I !== void 0 && (Nt(I), u(I)),
      n.disable !== !0 && s("update:modelValue", q(), I));
  }
  function q() {
    if (d.value === !0) {
      if (m.value === !0) {
        const I = n.modelValue.slice();
        return (I.splice(h.value, 1), I);
      }
      return n.modelValue.concat([n.val]);
    }
    if (m.value === !0) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1)
        return n.falseValue;
    } else if (E.value === !0) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === !1)
        return n.trueValue;
    } else return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function B(I) {
    (I.keyCode === 13 || I.keyCode === 32) && Nt(I);
  }
  function L(I) {
    (I.keyCode === 13 || I.keyCode === 32) && P(I);
  }
  const x = t(m, C);
  return (
    Object.assign(i, {
      toggle: P,
    }),
    () => {
      const I = x();
      n.disable !== !0 &&
        T(I, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
      const V = [
        U(
          "div",
          {
            class: b.value,
            style: f.value,
            "aria-hidden": "true",
          },
          I,
        ),
      ];
      c.value !== null && V.push(c.value);
      const $ = n.label !== void 0 ? vr(r.default, [n.label]) : Wt(r.default);
      return (
        $ !== void 0 &&
          V.push(
            U(
              "div",
              {
                class: `q-${e}__label q-anchor--skip`,
              },
              $,
            ),
          ),
        U(
          "div",
          {
            ref: l,
            class: g.value,
            ...R.value,
            onClick: P,
            onKeydown: B,
            onKeyup: L,
          },
          V,
        )
      );
    }
  );
}
const d1 = () =>
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
          ],
        ),
      ],
    ),
  h1 = st({
    name: "QCheckbox",
    props: kv,
    emits: Av,
    setup(e) {
      const t = d1();
      function n(r, s) {
        const i = D(
          () =>
            (r.value === !0
              ? e.checkedIcon
              : s.value === !0
                ? e.indeterminateIcon
                : e.uncheckedIcon) || null,
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
                    U(On, {
                      class: "q-checkbox__icon",
                      name: i.value,
                    }),
                  ],
                ),
              ]
            : [t];
      }
      return Pv("checkbox", n);
    },
  }),
  g1 = st({
    name: "QToggle",
    props: {
      ...kv,
      icon: String,
      iconColor: String,
    },
    emits: Av,
    setup(e) {
      function t(n, r) {
        const s = D(
            () =>
              (n.value === !0
                ? e.checkedIcon
                : r.value === !0
                  ? e.indeterminateIcon
                  : e.uncheckedIcon) || e.icon,
          ),
          i = D(() => (n.value === !0 ? e.iconColor : null));
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
                  U(On, {
                    name: s.value,
                    color: i.value,
                  }),
                ]
              : void 0,
          ),
        ];
      }
      return Pv("toggle", t);
    },
  }),
  Nv = {
    radio: f1,
    checkbox: h1,
    toggle: g1,
  },
  m1 = Object.keys(Nv);
function ol(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (r) => r[n];
}
const p1 = st({
    name: "QOptionGroup",
    props: {
      ...Tr,
      modelValue: {
        required: !0,
      },
      options: {
        type: Array,
        validator: (e) => e.every(yt),
        default: () => [],
      },
      optionValue: [Function, String],
      optionLabel: [Function, String],
      optionDisable: [Function, String],
      name: String,
      type: {
        type: String,
        default: "radio",
        validator: (e) => m1.includes(e),
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
      const i = kr(e, r),
        o = D(() => Nv[e.type]),
        a = D(() => ol(e.optionValue, "value")),
        l = D(() => ol(e.optionLabel, "label")),
        c = D(() => ol(e.optionDisable, "disable")),
        u = D(() =>
          e.options.map((m) => ({
            val: a.value(m),
            name: m.name === void 0 ? e.name : m.name,
            disable: e.disable || c.value(m),
            leftLabel: m.leftLabel === void 0 ? e.leftLabel : m.leftLabel,
            color: m.color === void 0 ? e.color : m.color,
            checkedIcon: m.checkedIcon,
            uncheckedIcon: m.uncheckedIcon,
            dark: m.dark === void 0 ? i.value : m.dark,
            size: m.size === void 0 ? e.size : m.size,
            dense: e.dense,
            keepColor: m.keepColor === void 0 ? e.keepColor : m.keepColor,
          })),
        ),
        f = D(
          () =>
            "q-option-group q-gutter-x-sm" +
            (e.inline === !0 ? " q-option-group--inline" : ""),
        ),
        d = D(() => {
          const m = {
            role: "group",
          };
          return (
            e.type === "radio" &&
              ((m.role = "radiogroup"),
              e.disable === !0 && (m["aria-disabled"] = "true")),
            m
          );
        });
      function h(m) {
        t("update:modelValue", m);
      }
      return () =>
        U(
          "div",
          {
            class: f.value,
            ...d.value,
          },
          e.options.map((m, E) => {
            const C =
              n["label-" + E] !== void 0
                ? () => n["label-" + E](m)
                : n.label !== void 0
                  ? () => n.label(m)
                  : void 0;
            return U("div", [
              U(
                o.value,
                {
                  label: C === void 0 ? l.value(m) : null,
                  modelValue: e.modelValue,
                  "onUpdate:modelValue": h,
                  ...u.value[E],
                },
                C,
              ),
            ]);
          }),
        );
    },
  }),
  v1 = st({
    name: "DialogPluginComponent",
    props: {
      ...Tr,
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
        s = kr(e, r),
        i = he(null),
        o = he(
          e.prompt !== void 0
            ? e.prompt.model
            : e.options !== void 0
              ? e.options.model
              : void 0,
        ),
        a = D(
          () =>
            "q-dialog-plugin" +
            (s.value === !0 ? " q-dialog-plugin--dark q-dark" : "") +
            (e.progress !== !1 ? " q-dialog-plugin--progress" : ""),
        ),
        l = D(() => e.color || (s.value === !0 ? "amber" : "primary")),
        c = D(() =>
          e.progress === !1
            ? null
            : yt(e.progress) === !0
              ? {
                  component: e.progress.spinner || is,
                  props: {
                    color: e.progress.color || l.value,
                  },
                }
              : {
                  component: is,
                  props: {
                    color: l.value,
                  },
                },
        ),
        u = D(() => e.prompt !== void 0 || e.options !== void 0),
        f = D(() => {
          if (u.value !== !0) return {};
          const {
            model: $,
            isValid: Y,
            items: ee,
            ...J
          } = e.prompt !== void 0 ? e.prompt : e.options;
          return J;
        }),
        d = D(() => (yt(e.ok) === !0 || e.ok === !0 ? r.lang.label.ok : e.ok)),
        h = D(() =>
          yt(e.cancel) === !0 || e.cancel === !0
            ? r.lang.label.cancel
            : e.cancel,
        ),
        m = D(() =>
          e.prompt !== void 0
            ? e.prompt.isValid !== void 0 && e.prompt.isValid(o.value) !== !0
            : e.options !== void 0
              ? e.options.isValid !== void 0 &&
                e.options.isValid(o.value) !== !0
              : !1,
        ),
        E = D(() => ({
          color: l.value,
          label: d.value,
          ripple: !1,
          disable: m.value,
          ...(yt(e.ok) === !0
            ? e.ok
            : {
                flat: !0,
              }),
          "data-autofocus": (e.focus === "ok" && u.value !== !0) || void 0,
          onClick: b,
        })),
        C = D(() => ({
          color: l.value,
          label: h.value,
          ripple: !1,
          ...(yt(e.cancel) === !0
            ? e.cancel
            : {
                flat: !0,
              }),
          "data-autofocus": (e.focus === "cancel" && u.value !== !0) || void 0,
          onClick: _,
        }));
      (me(() => e.prompt && e.prompt.model, R),
        me(() => e.options && e.options.model, R));
      function v() {
        i.value.show();
      }
      function g() {
        i.value.hide();
      }
      function b() {
        (t("ok", fe(o.value)), g());
      }
      function _() {
        g();
      }
      function T() {
        t("hide");
      }
      function R($) {
        o.value = $;
      }
      function P($) {
        m.value !== !0 &&
          e.prompt.type !== "textarea" &&
          Xs($, 13) === !0 &&
          b();
      }
      function q($, Y) {
        return e.html === !0
          ? U(bs, {
              class: $,
              innerHTML: Y,
            })
          : U(
              bs,
              {
                class: $,
              },
              () => Y,
            );
      }
      function B() {
        return [
          U(c1, {
            color: l.value,
            dense: !0,
            autofocus: !0,
            dark: s.value,
            ...f.value,
            modelValue: o.value,
            "onUpdate:modelValue": R,
            onKeyup: P,
          }),
        ];
      }
      function L() {
        return [
          U(p1, {
            color: l.value,
            options: e.options.items,
            dark: s.value,
            ...f.value,
            modelValue: o.value,
            "onUpdate:modelValue": R,
          }),
        ];
      }
      function x() {
        const $ = [];
        return (
          e.cancel && $.push(U(ec, C.value)),
          e.ok && $.push(U(ec, E.value)),
          U(
            FN,
            {
              class: e.stackButtons === !0 ? "items-end" : "",
              vertical: e.stackButtons,
              align: "right",
            },
            () => $,
          )
        );
      }
      function I() {
        const $ = [];
        return (
          e.title && $.push(q("q-dialog__title", e.title)),
          e.progress !== !1 &&
            $.push(
              U(
                bs,
                {
                  class: "q-dialog__progress",
                },
                () => U(c.value.component, c.value.props),
              ),
            ),
          e.message && $.push(q("q-dialog__message", e.message)),
          e.prompt !== void 0
            ? $.push(
                U(
                  bs,
                  {
                    class: "scroll q-dialog-plugin__form",
                  },
                  B,
                ),
              )
            : e.options !== void 0 &&
              $.push(
                U(sh, {
                  dark: s.value,
                }),
                U(
                  bs,
                  {
                    class: "scroll q-dialog-plugin__form",
                  },
                  L,
                ),
                U(sh, {
                  dark: s.value,
                }),
              ),
          (e.ok || e.cancel) && $.push(x()),
          $
        );
      }
      function V() {
        return [
          U(
            DN,
            {
              class: [a.value, e.cardClass],
              style: e.cardStyle,
              dark: s.value,
            },
            I,
          ),
        ];
      }
      return (
        Object.assign(n, {
          show: v,
          hide: g,
        }),
        () =>
          U(
            dN,
            {
              ref: i,
              onHide: T,
            },
            V,
          )
      );
    },
  });
function Rv(e, t) {
  for (const n in t)
    n !== "spinner" && Object(t[n]) === t[n]
      ? ((e[n] =
          Object(e[n]) !== e[n]
            ? {}
            : {
                ...e[n],
              }),
        Rv(e[n], t[n]))
      : (e[n] = t[n]);
}
function y1(e, t, n) {
  return (r) => {
    let s, i;
    const o = r.component !== void 0;
    if (o === !0) {
      const { component: g, componentProps: b } = r;
      ((s = typeof g == "string" ? n.component(g) : g), (i = b || {}));
    } else {
      const { class: g, style: b, ..._ } = r;
      ((s = e),
        (i = _),
        g !== void 0 && (_.cardClass = g),
        b !== void 0 && (_.cardStyle = b));
    }
    let a,
      l = !1;
    const c = he(null),
      u = ma(!1, "dialog"),
      f = (g) => {
        if (c.value?.[g] !== void 0) {
          c.value[g]();
          return;
        }
        const b = a.$.subTree;
        if (b?.component) {
          if (b.component.proxy && b.component.proxy[g]) {
            b.component.proxy[g]();
            return;
          }
          if (
            b.component.subTree &&
            b.component.subTree.component &&
            b.component.subTree.component.proxy &&
            b.component.subTree.component.proxy[g]
          ) {
            b.component.subTree.component.proxy[g]();
            return;
          }
        }
        console.error("[Quasar] Incorrectly defined Dialog component");
      },
      d = [],
      h = [],
      m = {
        onOk(g) {
          return (d.push(g), m);
        },
        onCancel(g) {
          return (h.push(g), m);
        },
        onDismiss(g) {
          return (d.push(g), h.push(g), m);
        },
        hide() {
          return (f("hide"), m);
        },
        update(g) {
          if (a !== null) {
            if (o === !0) Object.assign(i, g);
            else {
              const { class: b, style: _, ...T } = g;
              (b !== void 0 && (T.cardClass = b),
                _ !== void 0 && (T.cardStyle = _),
                Rv(i, T));
            }
            a.$forceUpdate();
          }
          return m;
        },
      },
      E = (g) => {
        ((l = !0),
          d.forEach((b) => {
            b(g);
          }));
      },
      C = () => {
        (v.unmount(u),
          nu(u),
          (v = null),
          (a = null),
          l !== !0 &&
            h.forEach((g) => {
              g();
            }));
      };
    let v = Ec(
      {
        name: "QGlobalDialog",
        setup: () => () =>
          U(s, {
            ...i,
            ref: c,
            onOk: E,
            onHide: C,
            onVnodeMounted(...g) {
              (typeof i.onVnodeMounted == "function" && i.onVnodeMounted(...g),
                dt(() => f("show")));
            },
          }),
      },
      n,
    );
    return ((a = v.mount(u)), m);
  };
}
const _1 = {
  install({ $q: e, parentApp: t }) {
    e.dialog = this.create = y1(v1, !0, t);
  },
};
let Mr,
  al,
  gh = 0,
  fr = null,
  Ye = {},
  yr = {};
const Ov = {
    group: "__default_quasar_group__",
    delay: 0,
    message: !1,
    html: !1,
    spinnerSize: 80,
    spinnerColor: "",
    messageColor: "",
    backgroundColor: "",
    boxClass: "",
    spinner: is,
    customClass: "",
  },
  Lv = {
    ...Ov,
  };
function b1(e) {
  if (e?.group !== void 0 && yr[e.group] !== void 0)
    return Object.assign(yr[e.group], e);
  const t =
    yt(e) === !0 && e.ignoreDefaults === !0
      ? {
          ...Ov,
          ...e,
        }
      : {
          ...Lv,
          ...e,
        };
  return ((yr[t.group] = t), t);
}
const Ft = ls(
    {
      isActive: !1,
    },
    {
      show(e) {
        Ye = b1(e);
        const { group: t } = Ye;
        return (
          (Ft.isActive = !0),
          Mr !== void 0
            ? ((Ye.uid = gh), al.$forceUpdate())
            : ((Ye.uid = ++gh),
              fr !== null && clearTimeout(fr),
              (fr = setTimeout(() => {
                fr = null;
                const n = ma("q-loading");
                ((Mr = Ec(
                  {
                    name: "QLoading",
                    setup() {
                      xt(() => {
                        Xl(!0);
                      });
                      function r() {
                        Ft.isActive !== !0 &&
                          Mr !== void 0 &&
                          (Xl(!1),
                          Mr.unmount(n),
                          nu(n),
                          (Mr = void 0),
                          (al = void 0));
                      }
                      function s() {
                        if (Ft.isActive !== !0) return null;
                        const i = [
                          U(Ye.spinner, {
                            class: "q-loading__spinner",
                            color: Ye.spinnerColor,
                            size: Ye.spinnerSize,
                          }),
                        ];
                        return (
                          Ye.message &&
                            i.push(
                              U("div", {
                                class:
                                  "q-loading__message" +
                                  (Ye.messageColor
                                    ? ` text-${Ye.messageColor}`
                                    : ""),
                                [Ye.html === !0 ? "innerHTML" : "textContent"]:
                                  Ye.message,
                              }),
                            ),
                          U(
                            "div",
                            {
                              class:
                                "q-loading fullscreen flex flex-center z-max " +
                                Ye.customClass.trim(),
                              key: Ye.uid,
                            },
                            [
                              U("div", {
                                class:
                                  "q-loading__backdrop" +
                                  (Ye.backgroundColor
                                    ? ` bg-${Ye.backgroundColor}`
                                    : ""),
                              }),
                              U(
                                "div",
                                {
                                  class:
                                    "q-loading__box column items-center " +
                                    Ye.boxClass,
                                },
                                i,
                              ),
                            ],
                          )
                        );
                      }
                      return () =>
                        U(
                          Ys,
                          {
                            name: "q-transition--fade",
                            appear: !0,
                            onAfterLeave: r,
                          },
                          s,
                        );
                    },
                  },
                  Ft.__parentApp,
                )),
                  (al = Mr.mount(n)));
              }, Ye.delay))),
          (n) => {
            if (n === void 0 || Object(n) !== n) {
              Ft.hide(t);
              return;
            }
            Ft.show({
              ...n,
              group: t,
            });
          }
        );
      },
      hide(e) {
        if (Ft.isActive === !0) {
          if (e === void 0) yr = {};
          else {
            if (yr[e] === void 0) return;
            {
              delete yr[e];
              const t = Object.keys(yr);
              if (t.length !== 0) {
                const n = t[t.length - 1];
                Ft.show({
                  group: n,
                });
                return;
              }
            }
          }
          (fr !== null && (clearTimeout(fr), (fr = null)), (Ft.isActive = !1));
        }
      },
      setDefaults(e) {
        yt(e) === !0 && Object.assign(Lv, e);
      },
      install({ $q: e, parentApp: t }) {
        ((e.loading = this),
          (Ft.__parentApp = t),
          e.config.loading !== void 0 && this.setDefaults(e.config.loading));
      },
    },
  ),
  w1 = st({
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
        r = D(
          () =>
            "q-avatar" +
            (e.color ? ` bg-${e.color}` : "") +
            (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") +
            (e.square === !0
              ? " q-avatar--square"
              : e.rounded === !0
                ? " rounded-borders"
                : ""),
        ),
        s = D(() =>
          e.fontSize
            ? {
                fontSize: e.fontSize,
              }
            : null,
        );
      return () => {
        const i =
          e.icon !== void 0
            ? [
                U(On, {
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
              iN(t.default, i),
            ),
          ],
        );
      };
    },
  });
let E1 = 0;
const to = {},
  no = {},
  $t = {},
  xv = {},
  S1 = /^\s*$/,
  Mv = [],
  C1 = [void 0, null, !0, !1, ""],
  su = [
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
  I1 = ["top-left", "top-right", "bottom-left", "bottom-right"],
  As = {
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
function Dv(e, t, n) {
  if (!e) return ws("parameter required");
  let r;
  const s = {
    textColor: "white",
  };
  if (
    (e.ignoreDefaults !== !0 && Object.assign(s, to),
    yt(e) === !1 &&
      (s.type && Object.assign(s, As[s.type]),
      (e = {
        message: e,
      })),
    Object.assign(s, As[e.type || s.type], e),
    typeof s.icon == "function" && (s.icon = s.icon(t)),
    s.spinner
      ? (s.spinner === !0 && (s.spinner = is), (s.spinner = Ir(s.spinner)))
      : (s.spinner = !1),
    (s.meta = {
      hasMedia: !!(s.spinner !== !1 || s.icon || s.avatar),
      hasText: mh(s.message) || mh(s.caption),
    }),
    s.position)
  ) {
    if (su.includes(s.position) === !1) return ws("wrong position", e);
  } else s.position = "bottom";
  if (C1.includes(s.timeout) === !0) s.timeout = 5e3;
  else {
    const l = Number(s.timeout);
    if (isNaN(l) || l < 0) return ws("wrong timeout", e);
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
        e.ignoreDefaults !== !0 && Array.isArray(to.actions) === !0
          ? to.actions
          : [],
      )
      .concat(
        Array.isArray(As[e.type]?.actions) === !0 ? As[e.type].actions : [],
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
              (l(), c !== !0 && a());
            }
          : () => {
              a();
            },
    }))),
    s.multiLine === void 0 && (s.multiLine = s.actions.length > 1),
    Object.assign(s.meta, {
      class:
        `q-notification row items-stretch q-notification--${s.multiLine === !0 ? "multi-line" : "standard"}` +
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
    (n.notif.meta.timer &&
      (clearTimeout(n.notif.meta.timer), (n.notif.meta.timer = void 0)),
      (s.meta.uid = n.notif.meta.uid));
    const l = $t[s.position].value.indexOf(n.notif);
    $t[s.position].value[l] = s;
  } else {
    const l = no[s.meta.group];
    if (l === void 0) {
      if (
        ((s.meta.uid = E1++),
        (s.meta.badge = 1),
        ["left", "right", "center"].indexOf(s.position) !== -1)
      )
        $t[s.position].value.splice(
          Math.floor($t[s.position].value.length / 2),
          0,
          s,
        );
      else {
        const c = s.position.indexOf("top") !== -1 ? "unshift" : "push";
        $t[s.position].value[c](s);
      }
      s.group !== void 0 && (no[s.meta.group] = s);
    } else {
      if (
        (l.meta.timer && (clearTimeout(l.meta.timer), (l.meta.timer = void 0)),
        s.badgePosition !== void 0)
      ) {
        if (I1.includes(s.badgePosition) === !1)
          return ws("wrong badgePosition", e);
      } else
        s.badgePosition = `top-${s.position.indexOf("left") !== -1 ? "right" : "left"}`;
      ((s.meta.uid = l.meta.uid),
        (s.meta.badge = l.meta.badge + 1),
        (s.meta.badgeClass =
          `q-notification__badge q-notification__badge--${s.badgePosition}` +
          (s.badgeColor !== void 0 ? ` bg-${s.badgeColor}` : "") +
          (s.badgeTextColor !== void 0 ? ` text-${s.badgeTextColor}` : "") +
          (s.badgeClass ? ` ${s.badgeClass}` : "")));
      const c = $t[s.position].value.indexOf(l);
      $t[s.position].value[c] = no[s.meta.group] = s;
    }
  }
  const a = () => {
    (T1(s), (r = void 0));
  };
  if (
    (s.timeout > 0 &&
      (s.meta.timer = setTimeout(() => {
        ((s.meta.timer = void 0), a());
      }, s.timeout + 1e3)),
    s.group !== void 0)
  )
    return (l) => {
      l !== void 0
        ? ws("trying to update a grouped one which is forbidden", e)
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
        Dv(c, t, r);
      }
  };
}
function T1(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), (e.meta.timer = void 0));
  const t = $t[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete no[e.meta.group];
    const n = Mv["" + e.meta.uid];
    if (n) {
      const { width: r, height: s } = getComputedStyle(n);
      ((n.style.left = `${n.offsetLeft}px`),
        (n.style.width = r),
        (n.style.height = s));
    }
    ($t[e.position].value.splice(t, 1),
      typeof e.onDismiss == "function" && e.onDismiss());
  }
}
function mh(e) {
  return e != null && S1.test(e) !== !0;
}
function ws(e, t) {
  return (console.error(`Notify: ${e}`, t), !1);
}
function k1() {
  return st({
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
          su.map((e) =>
            U(
              fb,
              {
                key: e,
                class: xv[e],
                tag: "div",
                name: `q-notification--${e}`,
              },
              () =>
                $t[e].value.map((t) => {
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
                            }),
                          )
                        : t.icon
                          ? r.push(
                              U(On, {
                                class:
                                  "q-notification__icon q-notification__icon--" +
                                  n.leftClass,
                                name: t.icon,
                                color: t.iconColor,
                                size: t.iconSize,
                                role: "img",
                              }),
                            )
                          : t.avatar &&
                            r.push(
                              U(
                                w1,
                                {
                                  class:
                                    "q-notification__avatar q-notification__avatar--" +
                                    n.leftClass,
                                },
                                () =>
                                  U("img", {
                                    src: t.avatar,
                                    "aria-hidden": "true",
                                  }),
                              ),
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
                              [t.caption],
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
                      r,
                    ),
                  ];
                  return (
                    t.progress === !0 &&
                      s.push(
                        U("div", {
                          key: `${n.uid}|p|${n.badge}`,
                          class: n.progressClass,
                          style: n.progressStyle,
                        }),
                      ),
                    t.actions !== void 0 &&
                      s.push(
                        U(
                          "div",
                          {
                            class: n.actionsClass,
                          },
                          t.actions.map((i) => U(ec, i)),
                        ),
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
                          [n.badge],
                        ),
                      ),
                    U(
                      "div",
                      {
                        ref: (i) => {
                          Mv["" + n.uid] = i;
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
                          s,
                        ),
                      ],
                    )
                  );
                }),
            ),
          ),
        );
    },
  });
}
const A1 = {
    setDefaults(e) {
      yt(e) === !0 && Object.assign(to, e);
    },
    registerType(e, t) {
      yt(t) === !0 && (As[e] = t);
    },
    install({ $q: e, parentApp: t }) {
      if (
        ((e.notify = this.create = (n) => Dv(n, e)),
        (e.notify.setDefaults = this.setDefaults),
        (e.notify.registerType = this.registerType),
        e.config.notify !== void 0 && this.setDefaults(e.config.notify),
        this.__installed !== !0)
      ) {
        su.forEach((r) => {
          $t[r] = he([]);
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
          xv[r] =
            `q-notifications__list q-notifications__list--${s} fixed column no-wrap ${o}`;
        });
        const n = ma("q-notify");
        Ec(k1(), t).mount(n);
      }
    },
  },
  Es = {};
function P1(e) {
  Object.assign(Ze, {
    request: e,
    exit: e,
    toggle: e,
  });
}
function Fv() {
  return (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement ||
    null
  );
}
function $v() {
  const e = (Ze.activeEl = Ze.isActive === !1 ? null : Fv());
  KP(e === null || e === document.documentElement ? document.body : e);
}
function N1() {
  ((Ze.isActive = Ze.isActive === !1), $v());
}
function ph(e, t) {
  try {
    const n = e[t]();
    return n === void 0 ? Promise.resolve() : n;
  } catch (n) {
    return Promise.reject(n);
  }
}
const Ze = ls(
  {
    isActive: !1,
    activeEl: null,
  },
  {
    isCapable: !1,
    install({ $q: e }) {
      e.fullscreen = this;
    },
  },
);
((Es.request = [
  "requestFullscreen",
  "msRequestFullscreen",
  "mozRequestFullScreen",
  "webkitRequestFullscreen",
].find((e) => document.documentElement[e] !== void 0)),
  (Ze.isCapable = Es.request !== void 0),
  Ze.isCapable === !1
    ? P1(() => Promise.reject("Not capable"))
    : (Object.assign(Ze, {
        request(e) {
          const t = e || document.documentElement,
            { activeEl: n } = Ze;
          return t === n
            ? Promise.resolve()
            : (n !== null && t.contains(n) === !0
                ? Ze.exit()
                : Promise.resolve()
              ).finally(() => ph(t, Es.request));
        },
        exit() {
          return Ze.isActive === !0 ? ph(document, Es.exit) : Promise.resolve();
        },
        toggle(e) {
          return Ze.isActive === !0 ? Ze.exit() : Ze.request(e);
        },
      }),
      (Es.exit = [
        "exitFullscreen",
        "msExitFullscreen",
        "mozCancelFullScreen",
        "webkitExitFullscreen",
      ].find((e) => document[e])),
      (Ze.isActive = !!Fv()),
      Ze.isActive === !0 && $v(),
      [
        "onfullscreenchange",
        "onmsfullscreenchange",
        "onwebkitfullscreenchange",
      ].forEach((e) => {
        document[e] = N1;
      })));
const R1 = {
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
    iconSet: MP,
    plugins: {
      Dialog: _1,
      Loading: Ft,
      Notify: A1,
      AppFullscreen: Ze,
    },
  },
  O1 = "/";
async function L1({ app: e, router: t, store: n }, r) {
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
        publicPath: O1,
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
xP(Hg, R1).then((e) => {
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
    Pe(() => import("https://wheelofnames.com/assets/i18n-v403.js"), __vite__mapDeps([79, 80])),
    Pe(() => import("https://wheelofnames.com/assets/head-v403.js"), __vite__mapDeps([81, 65])),
  ]).then((r) => {
    const s = n(r).filter((i) => typeof i == "function");
    L1(e, s);
  });
});
export {
  fO as $,
  he as A,
  uR as B,
  jR as C,
  F1 as D,
  nR as E,
  lt as F,
  dN as G,
  FN as H,
  MC as I,
  $e as J,
  iO as K,
  oO as L,
  aO as M,
  LR as N,
  sn as O,
  tO as P,
  DN as Q,
  dt as R,
  rO as S,
  sO as T,
  YR as U,
  nO as V,
  oR as W,
  sR as X,
  xR as Y,
  uO as Z,
  XR as _,
  po as a,
  g1 as a$,
  eO as a0,
  dO as a1,
  hO as a2,
  lO as a3,
  QR as a4,
  ZR as a5,
  NP as a6,
  oc as a7,
  eg as a8,
  H1 as a9,
  SN as aA,
  ht as aB,
  eR as aC,
  Y1 as aD,
  D1 as aE,
  Tr as aF,
  kr as aG,
  CO as aH,
  Wi as aI,
  ac as aJ,
  SS as aK,
  yS as aL,
  f1 as aM,
  h1 as aN,
  pR as aO,
  TS as aP,
  Vc as aQ,
  HR as aR,
  aR as aS,
  z1 as aT,
  TR as aU,
  Yo as aV,
  x1 as aW,
  MR as aX,
  M1 as aY,
  CR as aZ,
  U1 as a_,
  wt as aa,
  cO as ab,
  K1 as ac,
  Re as ad,
  Zb as ae,
  me as af,
  CP as ag,
  FC as ah,
  St as ai,
  AR as aj,
  IO as ak,
  AN as al,
  vr as am,
  yv as an,
  mO as ao,
  Wt as ap,
  _v as aq,
  JR as ar,
  KR as as,
  A1 as at,
  zR as au,
  Pe as av,
  w1 as aw,
  sh as ax,
  xC as ay,
  Ce as az,
  gO as b,
  nc as b$,
  qm as b0,
  PR as b1,
  fe as b2,
  NR as b3,
  Rt as b4,
  gc as b5,
  tg as b6,
  Mt as b7,
  Go as b8,
  fg as b9,
  Qs as bA,
  Nb as bB,
  Nt as bC,
  Ab as bD,
  G1 as bE,
  FP as bF,
  Z1 as bG,
  Xs as bH,
  Jg as bI,
  $P as bJ,
  Kn as bK,
  ru as bL,
  Cv as bM,
  tR as bN,
  yt as bO,
  kO as bP,
  il as bQ,
  EN as bR,
  BP as bS,
  UP as bT,
  VP as bU,
  tc as bV,
  V1 as bW,
  B1 as bX,
  JN as bY,
  KN as bZ,
  YN as b_,
  IR as ba,
  VR as bb,
  BR as bc,
  Iy as bd,
  vc as be,
  qh as bf,
  Wy as bg,
  vR as bh,
  cR as bi,
  Jm as bj,
  Q1 as bk,
  X1 as bl,
  Ft as bm,
  Va as bn,
  YC as bo,
  j1 as bp,
  WP as bq,
  LN as br,
  VN as bs,
  TO as bt,
  bo as bu,
  Ys as bv,
  kb as bw,
  Rb as bx,
  Ke as by,
  J1 as bz,
  rR as c,
  Lc as c$,
  as as c0,
  QN as c1,
  r1 as c2,
  n1 as c3,
  Wc as c4,
  SR as c5,
  hR as c6,
  UR as c7,
  FR as c8,
  gR as c9,
  fR as cA,
  pO as cB,
  vO as cC,
  yO as cD,
  QP as cE,
  _O as cF,
  jP as cG,
  GN as cH,
  Gy as cI,
  Pa as cJ,
  hg as cK,
  l1 as cL,
  SO as cM,
  cN,
  Kd as cO,
  uN as cP,
  Gd as cQ,
  tu as cR,
  GP as cS,
  ZP as cT,
  Ei as cU,
  Si as cV,
  iN as cW,
  El as cX,
  mt as cY,
  eo as cZ,
  EO as c_,
  wC as ca,
  mR as cb,
  GR as cc,
  qR as cd,
  dR as ce,
  ER as cf,
  Kg as cg,
  wO as ch,
  bO as ci,
  iR as cj,
  Qf as ck,
  Xf as cl,
  ri as cm,
  wR as cn,
  bR as co,
  jm as cp,
  DC as cq,
  $1 as cr,
  RC as cs,
  fb as ct,
  $R as cu,
  rp as cv,
  er as cw,
  is as cx,
  ov as cy,
  lR as cz,
  qe as d,
  WR as d0,
  lv as d1,
  cv as d2,
  Cr as d3,
  _R as d4,
  DR as d5,
  IS as d6,
  kR as d7,
  _1 as d8,
  jb as d9,
  Ze as da,
  Lg as e,
  bs as f,
  R_ as g,
  st as h,
  U as i,
  D as j,
  tr as k,
  W1 as l,
  RR as m,
  kP as n,
  go as o,
  sa as p,
  xt as q,
  e_ as r,
  OR as s,
  q1 as t,
  vS as u,
  ty as v,
  Dy as w,
  ec as x,
  On as y,
  c1 as z,
};
