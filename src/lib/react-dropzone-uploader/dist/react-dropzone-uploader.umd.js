!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.ReactDropzoneUploader = t())
    : (e.ReactDropzoneUploader = t())
})(window, function () {
  return (
    (r = {}),
    (a.m = n =
      [
        function (e, t, n) {
          e.exports = n(27)()
        },
        function (e, t, n) {
          'use strict'
          e.exports = n(25)
        },
        function (e, t, n) {
          e.exports = n(21)
        },
        function (e, t, n) {
          var a = n(20)
          e.exports = function (t) {
            for (var e = 1; e < arguments.length; e++)
              if (e % 2) {
                var n = null != arguments[e] ? arguments[e] : {},
                  r = Object.keys(n)
                'function' == typeof Object.getOwnPropertySymbols &&
                  (r = r.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }),
                  )),
                  r.forEach(function (e) {
                    a(t, e, n[e])
                  })
              } else Object.defineProperties(t, Object.getOwnPropertyDescriptors(arguments[e]))
            return t
          }
        },
        function (e, t) {
          function s(e, t, n, r, a, o, i) {
            try {
              var u = e[o](i),
                s = u.value
            } catch (e) {
              return void n(e)
            }
            u.done ? t(s) : Promise.resolve(s).then(r, a)
          }
          e.exports = function (u) {
            return function () {
              var e = this,
                i = arguments
              return new Promise(function (t, n) {
                var r = u.apply(e, i)
                function a(e) {
                  s(r, t, n, a, o, 'next', e)
                }
                function o(e) {
                  s(r, t, n, a, o, 'throw', e)
                }
                a(void 0)
              })
            }
          }
        },
        function (t, e) {
          function n(e) {
            return (
              (t.exports = n =
                Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e)
                    }),
              n(e)
            )
          }
          t.exports = n
        },
        function (e, t) {
          e.exports = function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          }
        },
        function (e, t) {
          function r(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          e.exports = function (e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
          }
        },
        function (e, t, n) {
          var r = n(22),
            a = n(9)
          e.exports = function (e, t) {
            return !t || ('object' !== r(t) && 'function' != typeof t) ? a(e) : t
          }
        },
        function (e, t) {
          e.exports = function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          }
        },
        function (e, t, n) {
          var r = n(23)
          e.exports = function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && r(e, t)
          }
        },
        function (e, t, n) {
          var r = n(29),
            a = n(30),
            o = n(31)
          e.exports = function (e, t) {
            return r(e) || a(e, t) || o()
          }
        },
        function (e, t, n) {
          var r = n(17),
            a = n(18),
            o = n(19)
          e.exports = function (e) {
            return r(e) || a(e) || o()
          }
        },
        function (r, e, t) {
          t(5)
          var o = t(24)
          function a(e, t, n) {
            return (
              'undefined' != typeof Reflect && Reflect.get
                ? (r.exports = a = Reflect.get)
                : (r.exports = a =
                    function (e, t, n) {
                      var r = o(e, t)
                      if (r) {
                        var a = Object.getOwnPropertyDescriptor(r, t)
                        return a.get ? a.get.call(n) : a.value
                      }
                    }),
              a(e, t, n || e)
            )
          }
          r.exports = a
        },
        function (e, t) {
          e.exports =
            'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOCAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMzMzMzMzIj48cGF0aCBkPSJNMSwxNCBDMC40LDE0IDAsMTMuNiAwLDEzIEwwLDEgQzAsMC40IDAuNCwwIDEsMCBDMS42LDAgMiwwLjQgMiwxIEwyLDEzIEMyLDEzLjYgMS42LDE0IDEsMTQgWiIgaWQ9IlBhdGgiPjwvcGF0aD48cGF0aCBkPSJNNywxNCBDNi40LDE0IDYsMTMuNiA2LDEzIEw2LDEgQzYsMC40IDYuNCwwIDcsMCBDNy42LDAgOCwwLjQgOCwxIEw4LDEzIEM4LDEzLjYgNy42LDE0IDcsMTQgWiIgaWQ9IlBhdGgiPjwvcGF0aD48L2c+PC9zdmc+Cg=='
        },
        function (e, t) {
          e.exports =
            'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuMCwgMC4wKSIgZmlsbD0iIzMzMzMzMyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4wLCAwLjApIj48cG9seWdvbiBwb2ludHM9IjcuNzE5IDQuOTY0IDEyLjY5MiAwLjAxNyAxNC4zODkgMS43MTUgOS40MTIgNi42NjYgMTQuMzU0IDExLjYzNCAxMi42NTcgMTMuMzMxIDYuMDE3IDYuNjU3IDcuNzE1IDQuOTYwIj48L3BvbHlnb24+PHBvbHlnb24gcG9pbnRzPSI3LjYxMiA0Ljk2NCA3LjYxNiA0Ljk2MCA5LjMxMyA2LjY1NyAyLjY3NCAxMy4zMzEgMC45NzcgMTEuNjM0IDUuOTE5IDYuNjY2IDAuOTQyIDEuNzE1IDIuNjM5IDAuMDE3Ij48L3BvbHlnb24+PC9nPjwvZz48L3N2Zz4K'
        },
        function (e, t) {
          e.exports =
            'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTEgMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0iTTAuNSwxNC45IEMwLjIsMTQuNyAwLDE0LjQgMCwxNCBMMCwyIEMwLDEuNiAwLjIsMS4zIDAuNSwxLjEgQzAuOCwwLjkgMS4yLDAuOSAxLjUsMS4xIEwxMC41LDcuMSBDMTAuOCw3LjMgMTAuOSw3LjYgMTAuOSw3LjkgQzEwLjksOC4yIDEwLjcsOC41IDEwLjUsOC43IEwxLjUsMTQuNyBDMS40LDE0LjkgMC44LDE1LjEgMC41LDE0LjkgWiBNMiwzLjkgTDIsMTIuMiBMOC4yLDguMSBMMiwzLjkgWiI+PC9wYXRoPjwvZz48L3N2Zz4K'
        },
        function (e, t) {
          e.exports = function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t]
              return n
            }
          }
        },
        function (e, t) {
          e.exports = function (e) {
            if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e))
              return Array.from(e)
          }
        },
        function (e, t) {
          e.exports = function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance')
          }
        },
        function (e, t) {
          e.exports = function (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                : (e[t] = n),
              e
            )
          }
        },
        function (e, t, n) {
          var r = (function (o) {
            'use strict'
            var s,
              e = Object.prototype,
              c = e.hasOwnProperty,
              t = 'function' == typeof Symbol ? Symbol : {},
              a = t.iterator || '@@iterator',
              n = t.asyncIterator || '@@asyncIterator',
              r = t.toStringTag || '@@toStringTag'
            function i(e, t, n, r) {
              var a = t && t.prototype instanceof u ? t : u,
                o = Object.create(a.prototype),
                i = new O(r || [])
              return (
                (o._invoke = (function (o, i, u) {
                  var s = f
                  return function (e, t) {
                    if (s === d) throw new Error('Generator is already running')
                    if (s === m) {
                      if ('throw' === e) throw t
                      return D()
                    }
                    for (u.method = e, u.arg = t; ; ) {
                      var n = u.delegate
                      if (n) {
                        var r = R(n, u)
                        if (r) {
                          if (r === y) continue
                          return r
                        }
                      }
                      if ('next' === u.method) u.sent = u._sent = u.arg
                      else if ('throw' === u.method) {
                        if (s === f) throw ((s = m), u.arg)
                        u.dispatchException(u.arg)
                      } else 'return' === u.method && u.abrupt('return', u.arg)
                      s = d
                      var a = l(o, i, u)
                      if ('normal' === a.type) {
                        if (((s = u.done ? m : p), a.arg === y)) continue
                        return { value: a.arg, done: u.done }
                      }
                      'throw' === a.type && ((s = m), (u.method = 'throw'), (u.arg = a.arg))
                    }
                  }
                })(e, n, i)),
                o
              )
            }
            function l(e, t, n) {
              try {
                return { type: 'normal', arg: e.call(t, n) }
              } catch (e) {
                return { type: 'throw', arg: e }
              }
            }
            o.wrap = i
            var f = 'suspendedStart',
              p = 'suspendedYield',
              d = 'executing',
              m = 'completed',
              y = {}
            function u() {}
            function h() {}
            function v() {}
            var g = {}
            g[a] = function () {
              return this
            }
            var b = Object.getPrototypeOf,
              w = b && b(b(L([])))
            w && w !== e && c.call(w, a) && (g = w)
            var x = (v.prototype = u.prototype = Object.create(g))
            function S(e) {
              ;['next', 'throw', 'return'].forEach(function (t) {
                e[t] = function (e) {
                  return this._invoke(t, e)
                }
              })
            }
            function E(s) {
              var t
              this._invoke = function (n, r) {
                function e() {
                  return new Promise(function (e, t) {
                    !(function t(e, n, r, a) {
                      var o = l(s[e], s, n)
                      if ('throw' !== o.type) {
                        var i = o.arg,
                          u = i.value
                        return u && 'object' == typeof u && c.call(u, '__await')
                          ? Promise.resolve(u.__await).then(
                              function (e) {
                                t('next', e, r, a)
                              },
                              function (e) {
                                t('throw', e, r, a)
                              },
                            )
                          : Promise.resolve(u).then(
                              function (e) {
                                ;(i.value = e), r(i)
                              },
                              function (e) {
                                return t('throw', e, r, a)
                              },
                            )
                      }
                      a(o.arg)
                    })(n, r, e, t)
                  })
                }
                return (t = t ? t.then(e, e) : e())
              }
            }
            function R(e, t) {
              var n = e.iterator[t.method]
              if (n === s) {
                if (((t.delegate = null), 'throw' === t.method)) {
                  if (e.iterator.return && ((t.method = 'return'), (t.arg = s), R(e, t), 'throw' === t.method)) return y
                  ;(t.method = 'throw'), (t.arg = new TypeError("The iterator does not provide a 'throw' method"))
                }
                return y
              }
              var r = l(n, e.iterator, t.arg)
              if ('throw' === r.type) return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), y
              var a = r.arg
              return a
                ? a.done
                  ? ((t[e.resultName] = a.value),
                    (t.next = e.nextLoc),
                    'return' !== t.method && ((t.method = 'next'), (t.arg = s)),
                    (t.delegate = null),
                    y)
                  : a
                : ((t.method = 'throw'),
                  (t.arg = new TypeError('iterator result is not an object')),
                  (t.delegate = null),
                  y)
            }
            function j(e) {
              var t = { tryLoc: e[0] }
              1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t)
            }
            function C(e) {
              var t = e.completion || {}
              ;(t.type = 'normal'), delete t.arg, (e.completion = t)
            }
            function O(e) {
              ;(this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(j, this), this.reset(!0)
            }
            function L(t) {
              if (t) {
                var e = t[a]
                if (e) return e.call(t)
                if ('function' == typeof t.next) return t
                if (!isNaN(t.length)) {
                  var n = -1,
                    r = function e() {
                      for (; ++n < t.length; ) if (c.call(t, n)) return (e.value = t[n]), (e.done = !1), e
                      return (e.value = s), (e.done = !0), e
                    }
                  return (r.next = r)
                }
              }
              return { next: D }
            }
            function D() {
              return { value: s, done: !0 }
            }
            return (
              (h.prototype = x.constructor = v),
              (v.constructor = h),
              (v[r] = h.displayName = 'GeneratorFunction'),
              (o.isGeneratorFunction = function (e) {
                var t = 'function' == typeof e && e.constructor
                return !!t && (t === h || 'GeneratorFunction' === (t.displayName || t.name))
              }),
              (o.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, v)
                    : ((e.__proto__ = v), r in e || (e[r] = 'GeneratorFunction')),
                  (e.prototype = Object.create(x)),
                  e
                )
              }),
              (o.awrap = function (e) {
                return { __await: e }
              }),
              S(E.prototype),
              (E.prototype[n] = function () {
                return this
              }),
              (o.AsyncIterator = E),
              (o.async = function (e, t, n, r) {
                var a = new E(i(e, t, n, r))
                return o.isGeneratorFunction(t)
                  ? a
                  : a.next().then(function (e) {
                      return e.done ? e.value : a.next()
                    })
              }),
              S(x),
              (x[r] = 'Generator'),
              (x[a] = function () {
                return this
              }),
              (x.toString = function () {
                return '[object Generator]'
              }),
              (o.keys = function (n) {
                var r = []
                for (var e in n) r.push(e)
                return (
                  r.reverse(),
                  function e() {
                    for (; r.length; ) {
                      var t = r.pop()
                      if (t in n) return (e.value = t), (e.done = !1), e
                    }
                    return (e.done = !0), e
                  }
                )
              }),
              (o.values = L),
              (O.prototype = {
                constructor: O,
                reset: function (e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = s),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = 'next'),
                    (this.arg = s),
                    this.tryEntries.forEach(C),
                    !e)
                  )
                    for (var t in this) 't' === t.charAt(0) && c.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = s)
                },
                stop: function () {
                  this.done = !0
                  var e = this.tryEntries[0].completion
                  if ('throw' === e.type) throw e.arg
                  return this.rval
                },
                dispatchException: function (n) {
                  if (this.done) throw n
                  var r = this
                  function e(e, t) {
                    return (o.type = 'throw'), (o.arg = n), (r.next = e), t && ((r.method = 'next'), (r.arg = s)), !!t
                  }
                  for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                    var a = this.tryEntries[t],
                      o = a.completion
                    if ('root' === a.tryLoc) return e('end')
                    if (a.tryLoc <= this.prev) {
                      var i = c.call(a, 'catchLoc'),
                        u = c.call(a, 'finallyLoc')
                      if (i && u) {
                        if (this.prev < a.catchLoc) return e(a.catchLoc, !0)
                        if (this.prev < a.finallyLoc) return e(a.finallyLoc)
                      } else if (i) {
                        if (this.prev < a.catchLoc) return e(a.catchLoc, !0)
                      } else {
                        if (!u) throw new Error('try statement without catch or finally')
                        if (this.prev < a.finallyLoc) return e(a.finallyLoc)
                      }
                    }
                  }
                },
                abrupt: function (e, t) {
                  for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                    var r = this.tryEntries[n]
                    if (r.tryLoc <= this.prev && c.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                      var a = r
                      break
                    }
                  }
                  a && ('break' === e || 'continue' === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null)
                  var o = a ? a.completion : {}
                  return (
                    (o.type = e),
                    (o.arg = t),
                    a ? ((this.method = 'next'), (this.next = a.finallyLoc), y) : this.complete(o)
                  )
                },
                complete: function (e, t) {
                  if ('throw' === e.type) throw e.arg
                  return (
                    'break' === e.type || 'continue' === e.type
                      ? (this.next = e.arg)
                      : 'return' === e.type
                      ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                      : 'normal' === e.type && t && (this.next = t),
                    y
                  )
                },
                finish: function (e) {
                  for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                    var n = this.tryEntries[t]
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), C(n), y
                  }
                },
                catch: function (e) {
                  for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                    var n = this.tryEntries[t]
                    if (n.tryLoc === e) {
                      var r = n.completion
                      if ('throw' === r.type) {
                        var a = r.arg
                        C(n)
                      }
                      return a
                    }
                  }
                  throw new Error('illegal catch attempt')
                },
                delegateYield: function (e, t, n) {
                  return (
                    (this.delegate = { iterator: L(e), resultName: t, nextLoc: n }),
                    'next' === this.method && (this.arg = s),
                    y
                  )
                },
              }),
              o
            )
          })(e.exports)
          try {
            regeneratorRuntime = r
          } catch (e) {
            Function('r', 'regeneratorRuntime = r')(r)
          }
        },
        function (t, e) {
          function n(e) {
            return (n =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  })(e)
          }
          function r(e) {
            return (
              'function' == typeof Symbol && 'symbol' === n(Symbol.iterator)
                ? (t.exports = r =
                    function (e) {
                      return n(e)
                    })
                : (t.exports = r =
                    function (e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                        ? 'symbol'
                        : n(e)
                    }),
              r(e)
            )
          }
          t.exports = r
        },
        function (n, e) {
          function r(e, t) {
            return (
              (n.exports = r =
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e
                }),
              r(e, t)
            )
          }
          n.exports = r
        },
        function (e, t, n) {
          var r = n(5)
          e.exports = function (e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e)); );
            return e
          }
        },
        function (e, t, n) {
          'use strict'
          /** @license React v16.8.6
           * react.production.min.js
           *
           * Copyright (c) Facebook, Inc. and its affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */ var l = n(26),
            r = 'function' == typeof Symbol && Symbol.for,
            f = r ? Symbol.for('react.element') : 60103,
            c = r ? Symbol.for('react.portal') : 60106,
            a = r ? Symbol.for('react.fragment') : 60107,
            o = r ? Symbol.for('react.strict_mode') : 60108,
            i = r ? Symbol.for('react.profiler') : 60114,
            u = r ? Symbol.for('react.provider') : 60109,
            s = r ? Symbol.for('react.context') : 60110,
            p = r ? Symbol.for('react.concurrent_mode') : 60111,
            d = r ? Symbol.for('react.forward_ref') : 60112,
            m = r ? Symbol.for('react.suspense') : 60113,
            y = r ? Symbol.for('react.memo') : 60115,
            h = r ? Symbol.for('react.lazy') : 60116,
            v = 'function' == typeof Symbol && Symbol.iterator
          function g(e) {
            for (
              var t = arguments.length - 1, n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 0;
              r < t;
              r++
            )
              n += '&args[]=' + encodeURIComponent(arguments[r + 1])
            !(function (e, t, n, r, a, o, i, u) {
              if (!e) {
                if ((e = void 0) === t)
                  e = Error(
                    'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
                  )
                else {
                  var s = [n, r, a, o, i, u],
                    c = 0
                  ;(e = Error(
                    t.replace(/%s/g, function () {
                      return s[c++]
                    }),
                  )).name = 'Invariant Violation'
                }
                throw ((e.framesToPop = 1), e)
              }
            })(
              !1,
              'Minified React error #' +
                e +
                '; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
              n,
            )
          }
          var b = {
              isMounted: function () {
                return !1
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {},
            },
            w = {}
          function x(e, t, n) {
            ;(this.props = e), (this.context = t), (this.refs = w), (this.updater = n || b)
          }
          function S() {}
          function E(e, t, n) {
            ;(this.props = e), (this.context = t), (this.refs = w), (this.updater = n || b)
          }
          ;(x.prototype.isReactComponent = {}),
            (x.prototype.setState = function (e, t) {
              'object' != typeof e && 'function' != typeof e && null != e && g('85'),
                this.updater.enqueueSetState(this, e, t, 'setState')
            }),
            (x.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
            }),
            (S.prototype = x.prototype)
          var R = (E.prototype = new S())
          ;(R.constructor = E), l(R, x.prototype), (R.isPureReactComponent = !0)
          var j = { current: null },
            C = { current: null },
            O = Object.prototype.hasOwnProperty,
            L = { key: !0, ref: !0, __self: !0, __source: !0 }
          function D(e, t, n) {
            var r = void 0,
              a = {},
              o = null,
              i = null
            if (null != t)
              for (r in (void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (o = '' + t.key), t))
                O.call(t, r) && !L.hasOwnProperty(r) && (a[r] = t[r])
            var u = arguments.length - 2
            if (1 === u) a.children = n
            else if (1 < u) {
              for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2]
              a.children = s
            }
            if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r])
            return { $$typeof: f, type: e, key: o, ref: i, props: a, _owner: C.current }
          }
          function _(e) {
            return 'object' == typeof e && null !== e && e.$$typeof === f
          }
          var z = /\/+/g,
            N = []
          function I(e, t, n, r) {
            if (N.length) {
              var a = N.pop()
              return (a.result = e), (a.keyPrefix = t), (a.func = n), (a.context = r), (a.count = 0), a
            }
            return { result: e, keyPrefix: t, func: n, context: r, count: 0 }
          }
          function M(e) {
            ;(e.result = null),
              (e.keyPrefix = null),
              (e.func = null),
              (e.context = null),
              (e.count = 0),
              N.length < 10 && N.push(e)
          }
          function P(e, t, n) {
            return null == e
              ? 0
              : (function e(t, n, r, a) {
                  var o = typeof t
                  ;('undefined' !== o && 'boolean' !== o) || (t = null)
                  var i = !1
                  if (null === t) i = !0
                  else
                    switch (o) {
                      case 'string':
                      case 'number':
                        i = !0
                        break
                      case 'object':
                        switch (t.$$typeof) {
                          case f:
                          case c:
                            i = !0
                        }
                    }
                  if (i) return r(a, t, '' === n ? '.' + F(t, 0) : n), 1
                  if (((i = 0), (n = '' === n ? '.' : n + ':'), Array.isArray(t)))
                    for (var u = 0; u < t.length; u++) {
                      var s = n + F((o = t[u]), u)
                      i += e(o, s, r, a)
                    }
                  else if (
                    'function' ==
                    typeof (s =
                      null === t || 'object' != typeof t
                        ? null
                        : 'function' == typeof (s = (v && t[v]) || t['@@iterator'])
                        ? s
                        : null)
                  )
                    for (t = s.call(t), u = 0; !(o = t.next()).done; ) i += e((o = o.value), (s = n + F(o, u++)), r, a)
                  else
                    'object' === o &&
                      g(
                        '31',
                        '[object Object]' == (r = '' + t) ? 'object with keys {' + Object.keys(t).join(', ') + '}' : r,
                        '',
                      )
                  return i
                })(e, '', t, n)
          }
          function F(e, t) {
            return 'object' == typeof e && null !== e && null != e.key
              ? (function (e) {
                  var t = { '=': '=0', ':': '=2' }
                  return (
                    '$' +
                    ('' + e).replace(/[=:]/g, function (e) {
                      return t[e]
                    })
                  )
                })(e.key)
              : t.toString(36)
          }
          function k(e, t) {
            e.func.call(e.context, t, e.count++)
          }
          function q(e, t, n) {
            var r = e.result,
              a = e.keyPrefix
            ;(e = e.func.call(e.context, t, e.count++)),
              Array.isArray(e)
                ? T(e, r, n, function (e) {
                    return e
                  })
                : null != e &&
                  (_(e) &&
                    (e = (function (e, t) {
                      return { $$typeof: f, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
                    })(e, a + (!e.key || (t && t.key === e.key) ? '' : ('' + e.key).replace(z, '$&/') + '/') + n)),
                  r.push(e))
          }
          function T(e, t, n, r, a) {
            var o = ''
            null != n && (o = ('' + n).replace(z, '$&/') + '/'), P(e, q, (t = I(t, o, r, a))), M(t)
          }
          function B() {
            var e = j.current
            return null === e && g('321'), e
          }
          var A = {
              Children: {
                map: function (e, t, n) {
                  if (null == e) return e
                  var r = []
                  return T(e, r, null, t, n), r
                },
                forEach: function (e, t, n) {
                  if (null == e) return e
                  P(e, k, (t = I(null, null, t, n))), M(t)
                },
                count: function (e) {
                  return P(
                    e,
                    function () {
                      return null
                    },
                    null,
                  )
                },
                toArray: function (e) {
                  var t = []
                  return (
                    T(e, t, null, function (e) {
                      return e
                    }),
                    t
                  )
                },
                only: function (e) {
                  return _(e) || g('143'), e
                },
              },
              createRef: function () {
                return { current: null }
              },
              Component: x,
              PureComponent: E,
              createContext: function (e, t) {
                return (
                  void 0 === t && (t = null),
                  ((e = {
                    $$typeof: s,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                  }).Provider = { $$typeof: u, _context: e }),
                  (e.Consumer = e)
                )
              },
              forwardRef: function (e) {
                return { $$typeof: d, render: e }
              },
              lazy: function (e) {
                return { $$typeof: h, _ctor: e, _status: -1, _result: null }
              },
              memo: function (e, t) {
                return { $$typeof: y, type: e, compare: void 0 === t ? null : t }
              },
              useCallback: function (e, t) {
                return B().useCallback(e, t)
              },
              useContext: function (e, t) {
                return B().useContext(e, t)
              },
              useEffect: function (e, t) {
                return B().useEffect(e, t)
              },
              useImperativeHandle: function (e, t, n) {
                return B().useImperativeHandle(e, t, n)
              },
              useDebugValue: function () {},
              useLayoutEffect: function (e, t) {
                return B().useLayoutEffect(e, t)
              },
              useMemo: function (e, t) {
                return B().useMemo(e, t)
              },
              useReducer: function (e, t, n) {
                return B().useReducer(e, t, n)
              },
              useRef: function (e) {
                return B().useRef(e)
              },
              useState: function (e) {
                return B().useState(e)
              },
              Fragment: a,
              StrictMode: o,
              Suspense: m,
              createElement: D,
              cloneElement: function (e, t, n) {
                null == e && g('267', e)
                var r = void 0,
                  a = l({}, e.props),
                  o = e.key,
                  i = e.ref,
                  u = e._owner
                if (null != t) {
                  void 0 !== t.ref && ((i = t.ref), (u = C.current)), void 0 !== t.key && (o = '' + t.key)
                  var s = void 0
                  for (r in (e.type && e.type.defaultProps && (s = e.type.defaultProps), t))
                    O.call(t, r) && !L.hasOwnProperty(r) && (a[r] = void 0 === t[r] && void 0 !== s ? s[r] : t[r])
                }
                if (1 === (r = arguments.length - 2)) a.children = n
                else if (1 < r) {
                  s = Array(r)
                  for (var c = 0; c < r; c++) s[c] = arguments[c + 2]
                  a.children = s
                }
                return { $$typeof: f, type: e.type, key: o, ref: i, props: a, _owner: u }
              },
              createFactory: function (e) {
                var t = D.bind(null, e)
                return (t.type = e), t
              },
              isValidElement: _,
              version: '16.8.6',
              unstable_ConcurrentMode: p,
              unstable_Profiler: i,
              __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher: j,
                ReactCurrentOwner: C,
                assign: l,
              },
            },
            U = A
          e.exports = U.default || U
        },
        function (e, t, n) {
          'use strict'
          /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var s = Object.getOwnPropertySymbols,
            c = Object.prototype.hasOwnProperty,
            l = Object.prototype.propertyIsEnumerable
          e.exports = (function () {
            try {
              if (!Object.assign) return !1
              var e = new String('abc')
              if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
              for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                  .map(function (e) {
                    return t[e]
                  })
                  .join('')
              )
                return !1
              var r = {}
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  r[e] = e
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
              )
            } catch (e) {
              return !1
            }
          })()
            ? Object.assign
            : function (e, t) {
                for (
                  var n,
                    r,
                    a = (function (e) {
                      if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined')
                      return Object(e)
                    })(e),
                    o = 1;
                  o < arguments.length;
                  o++
                ) {
                  for (var i in (n = Object(arguments[o]))) c.call(n, i) && (a[i] = n[i])
                  if (s) {
                    r = s(n)
                    for (var u = 0; u < r.length; u++) l.call(n, r[u]) && (a[r[u]] = n[r[u]])
                  }
                }
                return a
              }
        },
        function (e, t, n) {
          'use strict'
          var u = n(28)
          function r() {}
          function a() {}
          ;(a.resetWarningCache = r),
            (e.exports = function () {
              function e(e, t, n, r, a, o) {
                if (o !== u) {
                  var i = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                  )
                  throw ((i.name = 'Invariant Violation'), i)
                }
              }
              function t() {
                return e
              }
              var n = {
                array: (e.isRequired = e),
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: a,
                resetWarningCache: r,
              }
              return (n.PropTypes = n)
            })
        },
        function (e, t, n) {
          'use strict'
          e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
        },
        function (e, t) {
          e.exports = function (e) {
            if (Array.isArray(e)) return e
          }
        },
        function (e, t) {
          e.exports = function (e, t) {
            var n = [],
              r = !0,
              a = !1,
              o = void 0
            try {
              for (
                var i, u = e[Symbol.iterator]();
                !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              ;(a = !0), (o = e)
            } finally {
              try {
                r || null == u.return || u.return()
              } finally {
                if (a) throw o
              }
            }
            return n
          }
        },
        function (e, t) {
          e.exports = function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
          }
        },
        function (e, t, n) {
          'use strict'
          n.r(t)
          function r(e) {
            var t = e.input,
              n = e.previews,
              r = e.submitButton,
              a = e.dropzoneProps,
              o = e.files,
              i = e.extra.maxFiles
            return pe.a.createElement('div', Object.assign({}, a), n, o.length < i && t, 0 < o.length && r)
          }
          var a = n(12),
            le = n.n(a),
            o = n(3),
            fe = n.n(o),
            i = n(2),
            R = n.n(i),
            u = n(4),
            h = n.n(u),
            s = n(6),
            c = n.n(s),
            l = n(7),
            f = n.n(l),
            p = n(8),
            d = n.n(p),
            m = n(9),
            y = n.n(m),
            v = n(10),
            g = n.n(v),
            b = n(5),
            w = n.n(b),
            x = n(13),
            S = n.n(x),
            E = n(1),
            pe = n.n(E),
            j = n(0),
            C = n.n(j)
          r.propTypes = {
            input: C.a.node,
            previews: C.a.arrayOf(C.a.node),
            submitButton: C.a.node,
            dropzoneProps: C.a.shape({
              ref: C.a.any.isRequired,
              className: C.a.string.isRequired,
              style: C.a.object,
              onDragEnter: C.a.func.isRequired,
              onDragOver: C.a.func.isRequired,
              onDragLeave: C.a.func.isRequired,
              onDrop: C.a.func.isRequired,
            }).isRequired,
            files: C.a.arrayOf(C.a.any).isRequired,
            extra: C.a.shape({
              active: C.a.bool.isRequired,
              reject: C.a.bool.isRequired,
              dragged: C.a.arrayOf(C.a.any).isRequired,
              accept: C.a.string.isRequired,
              multiple: C.a.bool.isRequired,
              minSizeBytes: C.a.number.isRequired,
              maxSizeBytes: C.a.number.isRequired,
              maxFiles: C.a.number.isRequired,
              onFiles: C.a.func.isRequired,
              onCancelFile: C.a.func.isRequired,
              onRemoveFile: C.a.func.isRequired,
              onRestartFile: C.a.func.isRequired,
            }).isRequired,
          }
          function O(e) {
            var t,
              n = e.className,
              r = e.labelClassName,
              a = e.labelWithFilesClassName,
              o = e.style,
              i = e.labelStyle,
              u = e.labelWithFilesStyle,
              s = e.getFilesFromEvent,
              c = e.accept,
              l = e.multiple,
              f = e.disabled,
              p = e.content,
              d = e.withFilesContent,
              m = e.onFiles,
              y = e.files
            return pe.a.createElement(
              'label',
              { className: 0 < y.length ? a : r, style: 0 < y.length ? u : i },
              0 < y.length ? d : p,
              pe.a.createElement('input', {
                className: n,
                style: o,
                type: 'file',
                accept: c,
                multiple: l,
                disabled: f,
                onChange:
                  ((t = h()(
                    R.a.mark(function e(t) {
                      var n, r
                      return R.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (n = t.target), (e.next = 3), s(t)
                            case 3:
                              ;(r = e.sent), m(r), (n.value = null)
                            case 6:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    }),
                  )),
                  function (e) {
                    return t.apply(this, arguments)
                  }),
              }),
            )
          }
          var de = r
          O.propTypes = {
            className: C.a.string,
            labelClassName: C.a.string,
            labelWithFilesClassName: C.a.string,
            style: C.a.object,
            labelStyle: C.a.object,
            labelWithFilesStyle: C.a.object,
            getFilesFromEvent: C.a.func.isRequired,
            accept: C.a.string.isRequired,
            multiple: C.a.bool.isRequired,
            disabled: C.a.bool.isRequired,
            content: C.a.node,
            withFilesContent: C.a.node,
            onFiles: C.a.func.isRequired,
            files: C.a.arrayOf(C.a.any).isRequired,
            extra: C.a.shape({
              active: C.a.bool.isRequired,
              reject: C.a.bool.isRequired,
              dragged: C.a.arrayOf(C.a.any).isRequired,
              accept: C.a.string.isRequired,
              multiple: C.a.bool.isRequired,
              minSizeBytes: C.a.number.isRequired,
              maxSizeBytes: C.a.number.isRequired,
              maxFiles: C.a.number.isRequired,
            }).isRequired,
          }
          function L(e) {
            for (var t = 0, n = e; 1024 <= n; ) (n /= 1024), (t += 1)
            return ''
              .concat(n.toFixed(10 <= n || t < 1 ? 0 : 1))
              .concat(['bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][t])
          }
          function D(e) {
            var t = new Date(0)
            t.setSeconds(e)
            var n = t.toISOString().slice(11, 19)
            return e < 3600 ? n.slice(3) : n
          }
          function me(t, e) {
            if (!e || '*' === e) return !0
            var n = t.type || '',
              r = n.replace(/\/.*$/, '')
            return e
              .split(',')
              .map(function (e) {
                return e.trim()
              })
              .some(function (e) {
                return '.' === e.charAt(0)
                  ? void 0 === t.name || t.name.toLowerCase().endsWith(e.toLowerCase())
                  : e.endsWith('/*')
                  ? r === e.replace(/\/.*$/, '')
                  : n === e
              })
          }
          function ye(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]
            return 'function' == typeof e ? e.apply(void 0, n) : e
          }
          function _(e) {
            var t = null
            if ('dataTransfer' in e) {
              var n = e.dataTransfer
              'files' in n && n.files.length ? (t = n.files) : n.items && n.items.length && (t = n.items)
            } else e.target && e.target.files && (t = e.target.files)
            return Array.prototype.slice.call(t)
          }
          var he = O,
            z = n(11),
            ve = n.n(z),
            ge = {
              dropzone: 'dzu-dropzone',
              dropzoneActive: 'dzu-dropzoneActive',
              dropzoneReject: 'dzu-dropzoneActive',
              dropzoneDisabled: 'dzu-dropzoneDisabled',
              input: 'dzu-input',
              inputLabel: 'dzu-inputLabel',
              inputLabelWithFiles: 'dzu-inputLabelWithFiles',
              preview: 'dzu-previewContainer',
              previewImage: 'dzu-previewImage',
              submitButtonContainer: 'dzu-submitButtonContainer',
              submitButton: 'dzu-submitButton',
            },
            N = n(14),
            I = n.n(N),
            M = n(15),
            P = n.n(M),
            F = n(16),
            k = n.n(F),
            q = {
              cancel: { backgroundImage: 'url('.concat(I.a, ')') },
              remove: { backgroundImage: 'url('.concat(P.a, ')') },
              restart: { backgroundImage: 'url('.concat(k.a, ')') },
            },
            T = (function (e) {
              function t() {
                return c()(this, t), d()(this, w()(t).apply(this, arguments))
              }
              return (
                g()(t, e),
                f()(t, [
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = e.imageClassName,
                        r = e.style,
                        a = e.imageStyle,
                        o = e.fileWithMeta,
                        i = o.cancel,
                        u = o.remove,
                        s = o.restart,
                        c = e.meta,
                        l = c.name,
                        f = void 0 === l ? '' : l,
                        p = c.percent,
                        d = void 0 === p ? 0 : p,
                        m = c.size,
                        y = void 0 === m ? 0 : m,
                        h = c.previewUrl,
                        v = c.status,
                        g = c.duration,
                        b = c.validationError,
                        w = e.isUpload,
                        x = e.canCancel,
                        S = e.canRemove,
                        E = e.canRestart,
                        R = e.extra.minSizeBytes,
                        j = ''.concat(f || '?', ', ').concat(L(y))
                      return (
                        g && (j = ''.concat(j, ', ').concat(D(g))),
                        'error_file_size' === v || 'error_validation' === v
                          ? pe.a.createElement(
                              'div',
                              { className: t, style: r },
                              pe.a.createElement('span', { className: 'dzu-previewFileNameError' }, j),
                              'error_file_size' === v &&
                                pe.a.createElement('span', null, y < R ? 'File too small' : 'File too big'),
                              'error_validation' === v && pe.a.createElement('span', null, String(b)),
                              S &&
                                pe.a.createElement('span', {
                                  className: 'dzu-previewButton',
                                  style: q.remove,
                                  onClick: u,
                                }),
                            )
                          : (('error_upload_params' !== v && 'exception_upload' !== v && 'error_upload' !== v) ||
                              (j = ''.concat(j, ' (upload failed)')),
                            'aborted' === v && (j = ''.concat(j, ' (cancelled)')),
                            pe.a.createElement(
                              'div',
                              { className: t, style: r },
                              h && pe.a.createElement('img', { className: n, style: a, src: h, alt: j, title: j }),
                              !h && pe.a.createElement('span', { className: 'dzu-previewFileName' }, j),
                              pe.a.createElement(
                                'div',
                                { className: 'dzu-previewStatusContainer' },
                                w &&
                                  pe.a.createElement('progress', {
                                    max: 100,
                                    value: 'done' === v || 'headers_received' === v ? 100 : d,
                                  }),
                                'uploading' === v &&
                                  x &&
                                  pe.a.createElement('span', {
                                    className: 'dzu-previewButton',
                                    style: q.cancel,
                                    onClick: i,
                                  }),
                                'preparing' !== v &&
                                  'getting_upload_params' !== v &&
                                  'uploading' !== v &&
                                  S &&
                                  pe.a.createElement('span', {
                                    className: 'dzu-previewButton',
                                    style: q.remove,
                                    onClick: u,
                                  }),
                                [
                                  'error_upload_params',
                                  'exception_upload',
                                  'error_upload',
                                  'aborted',
                                  'ready',
                                ].includes(v) &&
                                  E &&
                                  pe.a.createElement('span', {
                                    className: 'dzu-previewButton',
                                    style: q.restart,
                                    onClick: s,
                                  }),
                              ),
                            ))
                      )
                    },
                  },
                ]),
                t
              )
            })(pe.a.PureComponent)
          T.propTypes = {
            className: C.a.string,
            imageClassName: C.a.string,
            style: C.a.object,
            imageStyle: C.a.object,
            fileWithMeta: C.a.shape({
              file: C.a.any.isRequired,
              meta: C.a.object.isRequired,
              cancel: C.a.func.isRequired,
              restart: C.a.func.isRequired,
              remove: C.a.func.isRequired,
              xhr: C.a.any,
            }).isRequired,
            meta: C.a.shape({
              status: C.a.oneOf([
                'preparing',
                'error_file_size',
                'error_validation',
                'ready',
                'getting_upload_params',
                'error_upload_params',
                'uploading',
                'exception_upload',
                'aborted',
                'error_upload',
                'headers_received',
                'done',
              ]).isRequired,
              type: C.a.string.isRequired,
              name: C.a.string,
              uploadedDate: C.a.string.isRequired,
              percent: C.a.number,
              size: C.a.number,
              lastModifiedDate: C.a.string,
              previewUrl: C.a.string,
              duration: C.a.number,
              width: C.a.number,
              height: C.a.number,
              videoWidth: C.a.number,
              videoHeight: C.a.number,
              validationError: C.a.any,
            }).isRequired,
            isUpload: C.a.bool.isRequired,
            canCancel: C.a.bool.isRequired,
            canRemove: C.a.bool.isRequired,
            canRestart: C.a.bool.isRequired,
            files: C.a.arrayOf(C.a.any).isRequired,
            extra: C.a.shape({
              active: C.a.bool.isRequired,
              reject: C.a.bool.isRequired,
              dragged: C.a.arrayOf(C.a.any).isRequired,
              accept: C.a.string.isRequired,
              multiple: C.a.bool.isRequired,
              minSizeBytes: C.a.number.isRequired,
              maxSizeBytes: C.a.number.isRequired,
              maxFiles: C.a.number.isRequired,
            }).isRequired,
          }
          function B(e) {
            var t = e.className,
              n = e.buttonClassName,
              r = e.style,
              a = e.buttonStyle,
              o = e.disabled,
              i = e.content,
              u = e.onSubmit,
              s = e.files,
              c =
                s.some(function (e) {
                  return ['preparing', 'getting_upload_params', 'uploading'].includes(e.meta.status)
                }) ||
                !s.some(function (e) {
                  return ['headers_received', 'done'].includes(e.meta.status)
                })
            return pe.a.createElement(
              'div',
              { className: t, style: r },
              pe.a.createElement(
                'button',
                {
                  className: n,
                  style: a,
                  onClick: function () {
                    u(
                      s.filter(function (e) {
                        return ['headers_received', 'done'].includes(e.meta.status)
                      }),
                    )
                  },
                  disabled: o || c,
                },
                i,
              ),
            )
          }
          var be = T
          B.propTypes = {
            className: C.a.string,
            buttonClassName: C.a.string,
            style: C.a.object,
            buttonStyle: C.a.object,
            disabled: C.a.bool.isRequired,
            content: C.a.node,
            onSubmit: C.a.func.isRequired,
            files: C.a.arrayOf(C.a.object).isRequired,
            extra: C.a.shape({
              active: C.a.bool.isRequired,
              reject: C.a.bool.isRequired,
              dragged: C.a.arrayOf(C.a.any).isRequired,
              accept: C.a.string.isRequired,
              multiple: C.a.bool.isRequired,
              minSizeBytes: C.a.number.isRequired,
              maxSizeBytes: C.a.number.isRequired,
              maxFiles: C.a.number.isRequired,
            }).isRequired,
          }
          var we = B
          n.d(t, 'Layout', function () {
            return de
          }),
            n.d(t, 'Input', function () {
              return he
            }),
            n.d(t, 'Preview', function () {
              return be
            }),
            n.d(t, 'SubmitButton', function () {
              return we
            }),
            n.d(t, 'formatBytes', function () {
              return L
            }),
            n.d(t, 'formatDuration', function () {
              return D
            }),
            n.d(t, 'accepts', function () {
              return me
            }),
            n.d(t, 'defaultClassNames', function () {
              return ge
            }),
            n.d(t, 'getFilesFromEvent', function () {
              return _
            })
          var A = (function (e) {
            function t(e) {
              var E
              return (
                c()(this, t),
                ((E = d()(this, w()(t).call(this, e))).forceUpdate = function () {
                  E.mounted && S()(w()(t.prototype), 'forceUpdate', y()(E)).call(y()(E))
                }),
                (E.getFilesFromEvent = function () {
                  return E.props.getFilesFromEvent || _
                }),
                (E.getDataTransferItemsFromEvent = function () {
                  return E.props.getDataTransferItemsFromEvent || _
                }),
                (E.handleDragEnter = (function () {
                  var t = h()(
                    R.a.mark(function e(t) {
                      var n
                      return R.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.preventDefault(),
                                t.stopPropagation(),
                                (e.next = 4),
                                E.getDataTransferItemsFromEvent()(t)
                              )
                            case 4:
                              ;(n = e.sent), E.setState({ active: !0, dragged: n })
                            case 6:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    }),
                  )
                  return function (e) {
                    return t.apply(this, arguments)
                  }
                })()),
                (E.handleDragOver = (function () {
                  var t = h()(
                    R.a.mark(function e(t) {
                      var n
                      return R.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.preventDefault(),
                                t.stopPropagation(),
                                clearTimeout(E.dragTimeoutId),
                                (e.next = 5),
                                E.getDataTransferItemsFromEvent()(t)
                              )
                            case 5:
                              ;(n = e.sent), E.setState({ active: !0, dragged: n })
                            case 7:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    }),
                  )
                  return function (e) {
                    return t.apply(this, arguments)
                  }
                })()),
                (E.handleDragLeave = function (e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    (E.dragTimeoutId = window.setTimeout(function () {
                      return E.setState({ active: !1, dragged: [] })
                    }, 150))
                }),
                (E.handleDrop = (function () {
                  var t = h()(
                    R.a.mark(function e(t) {
                      var n
                      return R.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.preventDefault(),
                                t.stopPropagation(),
                                E.setState({ active: !1, dragged: [] }),
                                (e.next = 5),
                                E.getFilesFromEvent()(t)
                              )
                            case 5:
                              ;(n = e.sent), E.handleFiles(n)
                            case 7:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    }),
                  )
                  return function (e) {
                    return t.apply(this, arguments)
                  }
                })()),
                (E.handleDropDisabled = function (e) {
                  e.preventDefault(), e.stopPropagation(), E.setState({ active: !1, dragged: [] })
                }),
                (E.handleChangeStatus = function (e) {
                  if (E.props.onChangeStatus) {
                    var t = (E.props.onChangeStatus(e, e.meta.status, E.files) || {}).meta,
                      n = void 0 === t ? {} : t
                    n && (delete n.status, (e.meta = fe()({}, e.meta, {}, n)), E.forceUpdate())
                  }
                }),
                (E.handleSubmit = function (e) {
                  E.props.onSubmit && E.props.onSubmit(e, le()(E.files))
                }),
                (E.handleCancel = function (e) {
                  'uploading' === e.meta.status &&
                    ((e.meta.status = 'aborted'), e.xhr && e.xhr.abort(), E.handleChangeStatus(e), E.forceUpdate())
                }),
                (E.handleRemove = function (t) {
                  var e = E.files.findIndex(function (e) {
                    return e === t
                  })
                  ;-1 !== e &&
                    (URL.revokeObjectURL(t.meta.previewUrl || ''),
                    (t.meta.status = 'removed'),
                    E.handleChangeStatus(t),
                    E.files.splice(e, 1),
                    E.forceUpdate())
                }),
                (E.handleRestart = function (e) {
                  E.props.getUploadParams &&
                    ('ready' === e.meta.status ? (e.meta.status = 'started') : (e.meta.status = 'restarted'),
                    E.handleChangeStatus(e),
                    (e.meta.status = 'getting_upload_params'),
                    (e.meta.percent = 0),
                    E.handleChangeStatus(e),
                    E.forceUpdate(),
                    E.uploadFile(e))
                }),
                (E.handleFiles = function (e) {
                  e.forEach(function (e, t) {
                    return E.handleFile(e, ''.concat(new Date().getTime(), '-').concat(t))
                  })
                  var t = E.dropzone.current
                  t &&
                    setTimeout(function () {
                      return t.scroll({ top: t.scrollHeight, behavior: 'smooth' })
                    }, 150)
                }),
                (E.handleFile = (function () {
                  var n = h()(
                    R.a.mark(function e(t, n) {
                      var r, a, o, i, u, s, c, l, f, p, d, m, y, h, v, g
                      return R.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((r = t.name),
                                (a = t.size),
                                (o = t.type),
                                (i = t.lastModified),
                                (u = E.props),
                                (s = u.minSizeBytes),
                                (c = u.maxSizeBytes),
                                (l = u.maxFiles),
                                (f = u.accept),
                                (p = u.getUploadParams),
                                (d = u.autoUpload),
                                (m = u.validate),
                                (y = new Date().toISOString()),
                                (h = i && new Date(i).toISOString()),
                                (v = {
                                  file: t,
                                  meta: {
                                    name: r,
                                    size: a,
                                    type: o,
                                    lastModifiedDate: h,
                                    uploadedDate: y,
                                    percent: 0,
                                    id: n,
                                  },
                                }),
                                'application/x-moz-file' === t.type || me(t, f))
                              ) {
                                e.next = 9
                                break
                              }
                              return (v.meta.status = 'rejected_file_type'), E.handleChangeStatus(v), e.abrupt('return')
                            case 9:
                              if (E.files.length >= l)
                                return (
                                  (v.meta.status = 'rejected_max_files'), E.handleChangeStatus(v), e.abrupt('return')
                                )
                              e.next = 13
                              break
                            case 13:
                              if (
                                ((v.cancel = function () {
                                  return E.handleCancel(v)
                                }),
                                (v.remove = function () {
                                  return E.handleRemove(v)
                                }),
                                (v.restart = function () {
                                  return E.handleRestart(v)
                                }),
                                (v.meta.status = 'preparing'),
                                E.files.push(v),
                                E.handleChangeStatus(v),
                                E.forceUpdate(),
                                a < s || c < a)
                              )
                                return (
                                  (v.meta.status = 'error_file_size'),
                                  E.handleChangeStatus(v),
                                  E.forceUpdate(),
                                  e.abrupt('return')
                                )
                              e.next = 25
                              break
                            case 25:
                              return (e.next = 27), E.generatePreview(v)
                            case 27:
                              if (!m) {
                                e.next = 35
                                break
                              }
                              if ((g = m(v)))
                                return (
                                  (v.meta.status = 'error_validation'),
                                  (v.meta.validationError = g),
                                  E.handleChangeStatus(v),
                                  E.forceUpdate(),
                                  e.abrupt('return')
                                )
                              e.next = 35
                              break
                            case 35:
                              p
                                ? d
                                  ? (E.uploadFile(v), (v.meta.status = 'getting_upload_params'))
                                  : (v.meta.status = 'ready')
                                : (v.meta.status = 'done'),
                                E.handleChangeStatus(v),
                                E.forceUpdate()
                            case 38:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    }),
                  )
                  return function (e, t) {
                    return n.apply(this, arguments)
                  }
                })()),
                (E.generatePreview = (function () {
                  var t = h()(
                    R.a.mark(function e(t) {
                      var n, r, a, o, i, u, s, c, l, f
                      return R.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = t.meta.type),
                                  (r = t.file),
                                  (a = n.startsWith('image/')),
                                  (o = n.startsWith('audio/')),
                                  (i = n.startsWith('video/')),
                                  a || o || i)
                                ) {
                                  e.next = 6
                                  break
                                }
                                return e.abrupt('return')
                              case 6:
                                if (
                                  ((u = URL.createObjectURL(r)),
                                  (s = function (t) {
                                    return Promise.race([
                                      new Promise(function (e) {
                                        t instanceof HTMLImageElement ? (t.onload = e) : (t.onloadedmetadata = e)
                                      }),
                                      new Promise(function (e, t) {
                                        setTimeout(t, 1e3)
                                      }),
                                    ])
                                  }),
                                  (e.prev = 8),
                                  a)
                                )
                                  return ((c = new Image()).src = u), (t.meta.previewUrl = u), (e.next = 15), s(c)
                                e.next = 17
                                break
                              case 15:
                                ;(t.meta.width = c.width), (t.meta.height = c.height)
                              case 17:
                                if (o) return ((l = new Audio()).src = u), (e.next = 22), s(l)
                                e.next = 23
                                break
                              case 22:
                                t.meta.duration = l.duration
                              case 23:
                                if (i) return ((f = document.createElement('video')).src = u), (e.next = 28), s(f)
                                e.next = 31
                                break
                              case 28:
                                ;(t.meta.duration = f.duration),
                                  (t.meta.videoWidth = f.videoWidth),
                                  (t.meta.videoHeight = f.videoHeight)
                              case 31:
                                a || URL.revokeObjectURL(u), (e.next = 37)
                                break
                              case 34:
                                ;(e.prev = 34), (e.t0 = e.catch(8)), URL.revokeObjectURL(u)
                              case 37:
                                E.forceUpdate()
                              case 38:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[8, 34]],
                      )
                    }),
                  )
                  return function (e) {
                    return t.apply(this, arguments)
                  }
                })()),
                (E.uploadFile = (function () {
                  var t = h()(
                    R.a.mark(function e(t) {
                      var n, r, a, o, i, u, s, c, l, f, p, d, m, y, h, v, g, b, w, x, S
                      return R.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ((n = E.props.getUploadParams)) {
                                  e.next = 3
                                  break
                                }
                                return e.abrupt('return')
                              case 3:
                                return (r = null), (e.prev = 4), (e.next = 7), n(t)
                              case 7:
                                ;(r = e.sent), (e.next = 13)
                                break
                              case 10:
                                ;(e.prev = 10), (e.t0 = e.catch(4)), console.error('Error Upload Params', e.t0.stack)
                              case 13:
                                if (null === r) return e.abrupt('return')
                                e.next = 15
                                break
                              case 15:
                                if (
                                  ((o = (a = r).url),
                                  (i = a.method),
                                  (u = void 0 === i ? 'POST' : i),
                                  (s = a.body),
                                  (c = a.fields),
                                  (l = void 0 === c ? {} : c),
                                  (f = a.headers),
                                  (p = void 0 === f ? {} : f),
                                  (d = a.meta),
                                  delete (m = void 0 === d ? {} : d).status,
                                  o)
                                ) {
                                  e.next = 22
                                  break
                                }
                                return (
                                  (t.meta.status = 'error_upload_params'),
                                  E.handleChangeStatus(t),
                                  E.forceUpdate(),
                                  e.abrupt('return')
                                )
                              case 22:
                                for (
                                  y = new XMLHttpRequest(),
                                    h = new FormData(),
                                    y.open(u, o, !0),
                                    v = 0,
                                    g = Object.keys(l);
                                  v < g.length;
                                  v++
                                )
                                  (b = g[v]), h.append(b, l[b])
                                for (
                                  y.setRequestHeader('X-Requested-With', 'XMLHttpRequest'), w = 0, x = Object.keys(p);
                                  w < x.length;
                                  w++
                                )
                                  (S = x[w]), y.setRequestHeader(S, p[S])
                                ;(t.meta = fe()({}, t.meta, {}, m)),
                                  y.upload.addEventListener('progress', function (e) {
                                    ;(t.meta.percent = (100 * e.loaded) / e.total || 100), E.forceUpdate()
                                  }),
                                  y.addEventListener('readystatechange', function () {
                                    ;(2 !== y.readyState && 4 !== y.readyState) ||
                                      (0 === y.status &&
                                        'aborted' !== t.meta.status &&
                                        ((t.meta.status = 'exception_upload'),
                                        E.handleChangeStatus(t),
                                        E.forceUpdate()),
                                      0 < y.status &&
                                        y.status < 400 &&
                                        ((t.meta.percent = 100),
                                        2 === y.readyState && (t.meta.status = 'headers_received'),
                                        4 === y.readyState && (t.meta.status = 'done'),
                                        E.handleChangeStatus(t),
                                        E.forceUpdate()),
                                      400 <= y.status &&
                                        'error_upload' !== t.meta.status &&
                                        ((t.meta.status = 'error_upload'), E.handleChangeStatus(t), E.forceUpdate()))
                                  }),
                                  h.append('file', t.file),
                                  E.props.timeout && (y.timeout = E.props.timeout),
                                  y.send(s || h),
                                  (t.xhr = y),
                                  (t.meta.status = 'uploading'),
                                  E.handleChangeStatus(t),
                                  E.forceUpdate()
                              case 38:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[4, 10]],
                      )
                    }),
                  )
                  return function (e) {
                    return t.apply(this, arguments)
                  }
                })()),
                (E.state = { active: !1, dragged: [] }),
                (E.files = []),
                (E.mounted = !0),
                (E.dropzone = pe.a.createRef()),
                E
              )
            }
            return (
              g()(t, e),
              f()(t, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.props.initialFiles && this.handleFiles(this.props.initialFiles)
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props.initialFiles
                    e.initialFiles !== t && t && this.handleFiles(t)
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    var e = !(this.mounted = !1),
                      t = !1,
                      n = void 0
                    try {
                      for (var r, a = this.files[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
                        var o = r.value
                        this.handleCancel(o)
                      }
                    } catch (e) {
                      ;(t = !0), (n = e)
                    } finally {
                      try {
                        e || null == a.return || a.return()
                      } finally {
                        if (t) throw n
                      }
                    }
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accept,
                      n = e.multiple,
                      r = e.maxFiles,
                      a = e.minSizeBytes,
                      o = e.maxSizeBytes,
                      i = e.onSubmit,
                      u = e.getUploadParams,
                      s = e.disabled,
                      c = e.canCancel,
                      l = e.canRemove,
                      f = e.canRestart,
                      p = e.inputContent,
                      d = e.inputWithFilesContent,
                      m = e.submitButtonDisabled,
                      y = e.submitButtonContent,
                      h = e.classNames,
                      v = e.styles,
                      g = e.addClassNames,
                      b = e.InputComponent,
                      w = e.PreviewComponent,
                      x = e.SubmitButtonComponent,
                      S = e.LayoutComponent,
                      E = this.state,
                      R = E.active,
                      j = E.dragged,
                      C = j.some(function (e) {
                        return 'application/x-moz-file' !== e.type && !me(e, t)
                      }),
                      O = {
                        active: R,
                        reject: C,
                        dragged: j,
                        accept: t,
                        multiple: n,
                        minSizeBytes: a,
                        maxSizeBytes: o,
                        maxFiles: r,
                      },
                      L = le()(this.files),
                      D = ye(s, L, O),
                      _ = (function (e, t, n) {
                        for (
                          var r = fe()({}, ge),
                            a = fe()({}, t),
                            o = arguments.length,
                            i = new Array(3 < o ? o - 3 : 0),
                            u = 3;
                          u < o;
                          u++
                        )
                          i[u - 3] = arguments[u]
                        for (var s = 0, c = Object.entries(e); s < c.length; s++) {
                          var l = ve()(c[s], 2),
                            f = l[0],
                            p = l[1]
                          r[f] = ye.apply(void 0, [p].concat(i))
                        }
                        for (var d = 0, m = Object.entries(n); d < m.length; d++) {
                          var y = ve()(m[d], 2)
                          ;(f = y[0]), (p = y[1])
                          r[f] = ''.concat(r[f], ' ').concat(ye.apply(void 0, [p].concat(i)))
                        }
                        for (var h = 0, v = Object.entries(t); h < v.length; h++) {
                          var g = ve()(v[h], 2)
                          ;(f = g[0]), (p = g[1])
                          a[f] = ye.apply(void 0, [p].concat(i))
                        }
                        return { classNames: r, styles: a }
                      })(h, v, g, L, O),
                      z = _.classNames,
                      N = z.dropzone,
                      I = z.dropzoneActive,
                      M = z.dropzoneReject,
                      P = z.dropzoneDisabled,
                      F = z.input,
                      k = z.inputLabel,
                      q = z.inputLabelWithFiles,
                      T = z.preview,
                      B = z.previewImage,
                      A = z.submitButtonContainer,
                      U = z.submitButton,
                      W = _.styles,
                      G = W.dropzone,
                      H = W.dropzoneActive,
                      Y = W.dropzoneReject,
                      $ = W.dropzoneDisabled,
                      Q = W.input,
                      Z = W.inputLabel,
                      J = W.inputLabelWithFiles,
                      V = W.preview,
                      X = W.previewImage,
                      K = W.submitButtonContainer,
                      ee = W.submitButton,
                      te = b || he,
                      ne = w || be,
                      re = x || we,
                      ae = S || de,
                      oe = null
                    null !== w &&
                      (oe = L.map(function (e) {
                        return pe.a.createElement(ne, {
                          className: T,
                          imageClassName: B,
                          style: V,
                          imageStyle: X,
                          key: e.meta.id,
                          fileWithMeta: e,
                          meta: fe()({}, e.meta),
                          isUpload: Boolean(u),
                          canCancel: ye(c, L, O),
                          canRemove: ye(l, L, O),
                          canRestart: ye(f, L, O),
                          files: L,
                          extra: O,
                        })
                      }))
                    var ie =
                        null !== b
                          ? pe.a.createElement(te, {
                              className: F,
                              labelClassName: k,
                              labelWithFilesClassName: q,
                              style: Q,
                              labelStyle: Z,
                              labelWithFilesStyle: J,
                              getFilesFromEvent: this.getFilesFromEvent(),
                              accept: t,
                              multiple: n,
                              disabled: D,
                              content: ye(p, L, O),
                              withFilesContent: ye(d, L, O),
                              onFiles: this.handleFiles,
                              files: L,
                              extra: O,
                            })
                          : null,
                      ue =
                        i && null !== x
                          ? pe.a.createElement(re, {
                              className: A,
                              buttonClassName: U,
                              style: K,
                              buttonStyle: ee,
                              disabled: ye(m, L, O),
                              content: ye(y, L, O),
                              onSubmit: this.handleSubmit,
                              files: L,
                              extra: O,
                            })
                          : null,
                      se = N,
                      ce = G
                    return (
                      D
                        ? ((se = ''.concat(se, ' ').concat(P)), (ce = fe()({}, ce || {}, {}, $ || {})))
                        : C
                        ? ((se = ''.concat(se, ' ').concat(M)), (ce = fe()({}, ce || {}, {}, Y || {})))
                        : R && ((se = ''.concat(se, ' ').concat(I)), (ce = fe()({}, ce || {}, {}, H || {}))),
                      pe.a.createElement(ae, {
                        input: ie,
                        previews: oe,
                        submitButton: ue,
                        dropzoneProps: {
                          ref: this.dropzone,
                          className: se,
                          style: ce,
                          onDragEnter: this.handleDragEnter,
                          onDragOver: this.handleDragOver,
                          onDragLeave: this.handleDragLeave,
                          onDrop: D ? this.handleDropDisabled : this.handleDrop,
                        },
                        files: L,
                        extra: fe()({}, O, {
                          onFiles: this.handleFiles,
                          onCancelFile: this.handleCancel,
                          onRemoveFile: this.handleRemove,
                          onRestartFile: this.handleRestart,
                        }),
                      })
                    )
                  },
                },
              ]),
              t
            )
          })(pe.a.Component)
          ;(A.defaultProps = {
            accept: '*',
            multiple: !0,
            minSizeBytes: 0,
            maxSizeBytes: Number.MAX_SAFE_INTEGER,
            maxFiles: Number.MAX_SAFE_INTEGER,
            autoUpload: !0,
            disabled: !1,
            canCancel: !0,
            canRemove: !0,
            canRestart: !0,
            inputContent: 'Drag Files or Click to Browse',
            inputWithFilesContent: 'Add Files',
            submitButtonDisabled: !1,
            submitButtonContent: 'Submit',
            classNames: {},
            styles: {},
            addClassNames: {},
          }),
            (A.propTypes = {
              onChangeStatus: C.a.func,
              getUploadParams: C.a.func,
              onSubmit: C.a.func,
              getFilesFromEvent: C.a.func,
              getDataTransferItemsFromEvent: C.a.func,
              accept: C.a.string,
              multiple: C.a.bool,
              minSizeBytes: C.a.number.isRequired,
              maxSizeBytes: C.a.number.isRequired,
              maxFiles: C.a.number.isRequired,
              validate: C.a.func,
              autoUpload: C.a.bool,
              timeout: C.a.number,
              initialFiles: C.a.arrayOf(C.a.any),
              disabled: C.a.oneOfType([C.a.bool, C.a.func]),
              canCancel: C.a.oneOfType([C.a.bool, C.a.func]),
              canRemove: C.a.oneOfType([C.a.bool, C.a.func]),
              canRestart: C.a.oneOfType([C.a.bool, C.a.func]),
              inputContent: C.a.oneOfType([C.a.node, C.a.func]),
              inputWithFilesContent: C.a.oneOfType([C.a.node, C.a.func]),
              submitButtonDisabled: C.a.oneOfType([C.a.bool, C.a.func]),
              submitButtonContent: C.a.oneOfType([C.a.node, C.a.func]),
              classNames: C.a.object.isRequired,
              styles: C.a.object.isRequired,
              addClassNames: C.a.object.isRequired,
              InputComponent: C.a.func,
              PreviewComponent: C.a.func,
              SubmitButtonComponent: C.a.func,
              LayoutComponent: C.a.func,
            })
          t.default = A
        },
      ]),
    (a.c = r),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (a.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var n = Object.create(null)
      if ((a.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
        for (var r in t)
          a.d(
            n,
            r,
            function (e) {
              return t[e]
            }.bind(null, r),
          )
      return n
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return a.d(t, 'a', t), t
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (a.p = ''),
    a((a.s = 32))
  )
  function a(e) {
    if (r[e]) return r[e].exports
    var t = (r[e] = { i: e, l: !1, exports: {} })
    return n[e].call(t.exports, t, t.exports, a), (t.l = !0), t.exports
  }
  var n, r
})
