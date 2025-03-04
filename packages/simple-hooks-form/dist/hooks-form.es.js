import T, { useContext as we, forwardRef as Ne, useCallback as Oe, useImperativeHandle as Re, useEffect as Fe, useRef as Ie } from "react";
import { useFormContext as Te, useFieldArray as Ye, Controller as $e, useForm as Le, FormProvider as Me } from "react-hook-form";
var ee = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe;
function We() {
  if (pe) return B;
  pe = 1;
  var n = Symbol.for("react.transitional.element"), b = Symbol.for("react.fragment");
  function g(i, l, m) {
    var c = null;
    if (m !== void 0 && (c = "" + m), l.key !== void 0 && (c = "" + l.key), "key" in l) {
      m = {};
      for (var y in l)
        y !== "key" && (m[y] = l[y]);
    } else m = l;
    return l = m.ref, {
      $$typeof: n,
      type: i,
      key: c,
      ref: l !== void 0 ? l : null,
      props: m
    };
  }
  return B.Fragment = b, B.jsx = g, B.jsxs = g, B;
}
var Z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function ze() {
  return _e || (_e = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Se ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case p:
          return "Fragment";
        case j:
          return "Portal";
        case z:
          return "Profiler";
        case W:
          return "StrictMode";
        case V:
          return "Suspense";
        case q:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case K:
            return (e.displayName || "Context") + ".Provider";
          case Q:
            return (e._context.displayName || "Context") + ".Consumer";
          case U:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case G:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case J:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function b(e) {
      return "" + e;
    }
    function g(e) {
      try {
        b(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), b(e);
      }
    }
    function i() {
    }
    function l() {
      if (H === 0) {
        ce = console.log, fe = console.info, me = console.warn, de = console.error, ve = console.group, Ee = console.groupCollapsed, be = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      H++;
    }
    function m() {
      if (H--, H === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: I({}, e, { value: ce }),
          info: I({}, e, { value: fe }),
          warn: I({}, e, { value: me }),
          error: I({}, e, { value: de }),
          group: I({}, e, { value: ve }),
          groupCollapsed: I({}, e, { value: Ee }),
          groupEnd: I({}, e, { value: be })
        });
      }
      0 > H && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function c(e) {
      if (oe === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          oe = r && r[1] || "", ge = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + oe + e + ge;
    }
    function y(e, r) {
      if (!e || ne) return "";
      var t = ae.get(e);
      if (t !== void 0) return t;
      ne = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var a = null;
      a = F.H, F.H = null, l();
      try {
        var f = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var N = function() {
                  throw Error();
                };
                if (Object.defineProperty(N.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(N, []);
                  } catch (R) {
                    var D = R;
                  }
                  Reflect.construct(e, [], N);
                } else {
                  try {
                    N.call();
                  } catch (R) {
                    D = R;
                  }
                  e.call(N.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (R) {
                  D = R;
                }
                (N = e()) && typeof N.catch == "function" && N.catch(function() {
                });
              }
            } catch (R) {
              if (R && D && typeof R.stack == "string")
                return [R.stack, D.stack];
            }
            return [null, null];
          }
        };
        f.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var s = Object.getOwnPropertyDescriptor(
          f.DetermineComponentFrameRoot,
          "name"
        );
        s && s.configurable && Object.defineProperty(
          f.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = f.DetermineComponentFrameRoot(), w = o[0], L = o[1];
        if (w && L) {
          var E = w.split(`
`), Y = L.split(`
`);
          for (o = s = 0; s < E.length && !E[s].includes(
            "DetermineComponentFrameRoot"
          ); )
            s++;
          for (; o < Y.length && !Y[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (s === E.length || o === Y.length)
            for (s = E.length - 1, o = Y.length - 1; 1 <= s && 0 <= o && E[s] !== Y[o]; )
              o--;
          for (; 1 <= s && 0 <= o; s--, o--)
            if (E[s] !== Y[o]) {
              if (s !== 1 || o !== 1)
                do
                  if (s--, o--, 0 > o || E[s] !== Y[o]) {
                    var X = `
` + E[s].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), typeof e == "function" && ae.set(e, X), X;
                  }
                while (1 <= s && 0 <= o);
              break;
            }
        }
      } finally {
        ne = !1, F.H = a, m(), Error.prepareStackTrace = t;
      }
      return E = (E = e ? e.displayName || e.name : "") ? c(E) : "", typeof e == "function" && ae.set(e, E), E;
    }
    function x(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return y(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return c(e);
      switch (e) {
        case V:
          return c("Suspense");
        case q:
          return c("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case U:
            return e = y(e.render, !1), e;
          case G:
            return x(e.type);
          case J:
            r = e._payload, e = e._init;
            try {
              return x(e(r));
            } catch {
            }
        }
      return "";
    }
    function h() {
      var e = F.A;
      return e === null ? null : e.getOwner();
    }
    function O(e) {
      if (ie.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function M(e, r) {
      function t() {
        xe || (xe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function k() {
      var e = n(this.type);
      return ye[e] || (ye[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function S(e, r, t, a, f, s) {
      return t = s.ref, e = {
        $$typeof: v,
        type: e,
        key: r,
        props: s,
        _owner: f
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: k
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function $(e, r, t, a, f, s) {
      if (typeof e == "string" || typeof e == "function" || e === p || e === z || e === W || e === V || e === q || e === re || typeof e == "object" && e !== null && (e.$$typeof === J || e.$$typeof === G || e.$$typeof === K || e.$$typeof === Q || e.$$typeof === U || e.$$typeof === Pe || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (a)
            if (te(o)) {
              for (a = 0; a < o.length; a++)
                P(o[a], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else P(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : te(e) ? a = "array" : e !== void 0 && e.$$typeof === v ? (a = "<" + (n(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          a,
          o
        );
      if (ie.call(r, "key")) {
        o = n(e);
        var w = Object.keys(r).filter(function(E) {
          return E !== "key";
        });
        a = 0 < w.length ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}", he[o + a] || (w = 0 < w.length ? "{" + w.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          o,
          w,
          o
        ), he[o + a] = !0);
      }
      if (o = null, t !== void 0 && (g(t), o = "" + t), O(r) && (g(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var L in r)
          L !== "key" && (t[L] = r[L]);
      } else t = r;
      return o && M(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), S(e, o, s, f, h(), t);
    }
    function P(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== Ae) {
        if (te(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            A(a) && _(a, r);
          }
        else if (A(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = ue && e[ue] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            A(e.value) && _(e.value, r);
      }
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    function _(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = d(r), !je[r])) {
        je[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== h() && (t = null, typeof e._owner.tag == "number" ? t = n(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var a = F.getCurrentStack;
        F.getCurrentStack = function() {
          var f = x(e.type);
          return a && (f += a() || ""), f;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), F.getCurrentStack = a;
      }
    }
    function d(e) {
      var r = "", t = h();
      return t && (t = n(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = n(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var C = T, v = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), Q = Symbol.for("react.consumer"), K = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), ue = Symbol.iterator, Se = Symbol.for("react.client.reference"), F = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = Object.prototype.hasOwnProperty, I = Object.assign, Pe = Symbol.for("react.client.reference"), te = Array.isArray, H = 0, ce, fe, me, de, ve, Ee, be;
    i.__reactDisabledLog = !0;
    var oe, ge, ne = !1, ae = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ae = Symbol.for("react.client.reference"), xe, ye = {}, he = {}, je = {};
    Z.Fragment = p, Z.jsx = function(e, r, t, a, f) {
      return $(e, r, t, !1, a, f);
    }, Z.jsxs = function(e, r, t, a, f) {
      return $(e, r, t, !0, a, f);
    };
  }()), Z;
}
var Ce;
function Ue() {
  return Ce || (Ce = 1, process.env.NODE_ENV === "production" ? ee.exports = We() : ee.exports = ze()), ee.exports;
}
var u = Ue();
const se = T.createContext(
  {}
), Ve = ({ children: n, ...b }) => /* @__PURE__ */ u.jsx(se.Provider, { value: { ...b }, children: n }), qe = (n) => {
  var p, W;
  const { formItems: b = [], containerLayout: g, ...i } = n, {
    control: l,
    watch: m,
    formState: { errors: c },
    ...y
  } = Te(), { fields: x, append: h, prepend: O, remove: M, swap: k, move: S, insert: $ } = Ye(
    {
      name: i.formItemProps.name,
      control: l
    }
  );
  console.log(y, "restFormContext");
  const { itemLayout: P, size: A } = we(se), _ = n.itemLayout || P, d = i.dependencies ? m(i.dependencies) : null;
  if ((p = n == null ? void 0 : n.hidden) != null && p.call(n, d))
    return null;
  let C = {}, v = null;
  g ? (C = {
    ...i
  }, v = g) : v = T.Fragment;
  const j = (W = c == null ? void 0 : c[i.formItemProps.name]) == null ? void 0 : W.root;
  return /* @__PURE__ */ u.jsxs(v, { ...C, children: [
    j && /* @__PURE__ */ u.jsx("div", { children: j.message }),
    x.map((z, Q) => /* @__PURE__ */ u.jsx(T.Fragment, { children: b.map((K, U) => {
      const {
        formItemProps: V,
        itemLayout: q = _,
        ...G
      } = K, { name: J, ...re } = V;
      return /* @__PURE__ */ u.jsx(
        le,
        {
          itemLayout: q,
          formItemProps: {
            ...re,
            name: `${i.formItemProps.name}.${Q}.${J}`
          },
          ...G
        },
        `${z.id}-${U}`
      );
    }) }, z.id)),
    /* @__PURE__ */ u.jsx("button", { type: "button", onClick: () => h({}), children: "add" })
  ] });
}, le = (n) => {
  const {
    type: b,
    children: g = null,
    formControlProps: i = null,
    formItemProps: l,
    ...m
  } = n, { control: c, ...y } = Te(), { itemLayout: x, size: h } = we(se);
  let O = n.itemLayout || x;
  switch (b) {
    case "list":
      return /* @__PURE__ */ u.jsx(
        qe,
        {
          formItemProps: l,
          ...m
        }
      );
    default:
      const M = n.as || n.type || "input";
      return /* @__PURE__ */ u.jsx(
        $e,
        {
          control: c,
          render: ({
            field: { onChange: k, value: S, ...$ },
            fieldState: P,
            formState: A
          }) => {
            let _ = {};
            O ? _ = {
              label: n.formItemProps.label,
              fieldState: P
            } : O = T.Fragment;
            const { errors: d } = A, C = l.name.split(".");
            let v = null;
            if (Object.keys(d).length > 0)
              if (C.length > 1) {
                let j = d;
                C.forEach((p) => {
                  j = j == null ? void 0 : j[isNaN(parseInt(p)) ? p : parseInt(p)];
                }), v = j;
              } else
                v = d[l.name];
            return (
              //@ts-ignore
              /* @__PURE__ */ u.jsxs(O, { ..._, children: [
                /* @__PURE__ */ u.jsx(
                  M,
                  {
                    onChange: k,
                    placeholder: n.formItemProps.label,
                    "aira-invalid": (!!v).toString(),
                    value: S,
                    ...i,
                    size: (i == null ? void 0 : i.size) || h
                  }
                ),
                v && /* @__PURE__ */ u.jsx(u.Fragment, { children: v == null ? void 0 : v.message })
              ] })
            );
          },
          ...l
        }
      );
  }
};
le.displayName = "FormItem";
const ke = Ne(
  ({
    formItems: n = [],
    itemLayout: b = null,
    containerLayout: g = null,
    onSubmit: i = () => {
    },
    onError: l = () => {
    },
    formOptions: m = {},
    size: c = "middle"
  }, y) => {
    const x = Le({ ...m }), {
      handleSubmit: h,
      register: O,
      control: M,
      formState: { isValid: k, errors: S = {} } = {},
      ...$
    } = x;
    console.log("formInstance", x, l, $);
    const P = Oe(() => h(i, l)(), [h]);
    Re(
      y,
      () => ({
        ...x,
        submitForm: P
      }),
      []
    );
    const A = b || T.Fragment, _ = g || T.Fragment;
    return Fe(() => {
      if (!k && Object.keys(S).length > 0) {
        const d = document.querySelector("[aira-invalid=true]");
        console.log(k, S, "isValid,errors", d), d == null || d.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    }, [k, S]), /* @__PURE__ */ u.jsx(Ve, { itemLayout: A, size: c, children: /* @__PURE__ */ u.jsx(Me, { ...x, children: /* @__PURE__ */ u.jsx(_, { children: n.map((d, C) => /* @__PURE__ */ u.jsx(
      T.Fragment,
      {
        children: /* @__PURE__ */ u.jsx(le, { ...d })
      },
      d.formItemId || `form-item-${C + 1}`
    )) }) }) });
  }
);
ke.displayName = "hooks form";
const He = T.forwardRef((n, b) => {
  const g = Ie({});
  return Re(b, () => g.current, []), /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx(ke, { ref: g, ...n }) });
});
export {
  He as NormalForm
};
