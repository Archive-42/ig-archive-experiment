__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function n(n) {
      var t = n.children,
        o = n.isSmallWidth,
        s = n.showHeader,
        l = void 0 === s || s;
      return a(d[16]).createElement(
        "div",
        { className: "_lTir" },
        a(d[16]).createElement(i(d[25]), null),
        a(d[16]).createElement(i(d[26]), null),
        a(d[16]).createElement(i(d[27]), {
          id: i(d[10]).fbSignupPage,
          title: u,
        }),
        a(d[16]).createElement(
          "div",
          { className: "_0r0cu" },
          l &&
            a(d[16]).createElement(
              "div",
              { className: "w8Ejx" },
              a(d[16]).createElement(
                i(d[28]),
                {
                  className:
                    "Szr5J t98Id " +
                    (o ? "" : "coreSpriteLoggedOutWordmark") +
                    " " +
                    (o ? "coreSpriteMobileNavTypeLogo" : ""),
                  href: "/",
                },
                r(d[3])(2394)
              )
            ),
          t
        )
      );
    }
    function t(n) {
      var t = n.url;
      return a(d[16]).createElement(
        "div",
        { className: "BdFXH" },
        a(d[16]).createElement("img", {
          alt: r(d[3])(2908),
          className: "ulnoR",
          src: t,
        })
      );
    }
    function o() {
      return a(d[16]).createElement(
        "div",
        { className: "_ltf8" },
        a(d[16]).createElement(r(d[29]).Spinner, {
          position: "absolute",
          size: "medium",
        })
      );
    }
    function s(n) {
      var t = n.message,
        o = n.onGoHome;
      return a(d[16]).createElement(
        "div",
        { className: "rYEZO" },
        a(d[16]).createElement(r(d[29]).Text.Body, null, t),
        a(d[16]).createElement(
          r(d[29]).Box,
          { marginTop: 5 },
          a(d[16]).createElement(
            r(d[29]).Button,
            { color: "ig-secondary-button", onClick: o },
            r(d[3])(1491)
          )
        )
      );
    }
    function l(n) {
      var t = n.requestInFlight;
      return a(d[16]).createElement(i(d[30]), {
        pageIdentifier: i(d[10]).fbSignupPage,
        requestInFlight: t,
      });
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      r(d[0]),
      r(d[1]),
      r(d[2]);
    var u = r(d[3])(3018),
      c = (function (u) {
        function c(n) {
          var t, o;
          return (
            (o = u.call(this, n) || this),
            (o.$Page3 = function (n) {
              o.props.igAccount ||
                o.setState({ earlyError: a(d[5]).ERROR_FB_COULDNT_LOAD_INFO });
            }),
            (o.$Page4 = function () {
              o.props.history.push(r(d[6]).SIGNUP_PATH),
                r(d[7]).logAction_DEPRECATED(
                  "emailOrPhoneTakenNewAccount",
                  o.getExtraDataForLogger()
                );
            }),
            (o.$Page5 = function () {
              o.props.history.push(r(d[6]).SIGNUP_PATH),
                r(d[7]).logAction_DEPRECATED(
                  "emailTakenNewAccount",
                  o.getExtraDataForLogger()
                );
            }),
            (o.$Page6 = function () {
              o.props.history.push(
                r(d[8]).buildLoginLink("", { source: "fb_email_taken" })
              ),
                r(d[7]).logAction_DEPRECATED(
                  "emailTakenLogIn",
                  o.getExtraDataForLogger()
                );
            }),
            (o.$Page7 = function () {
              o.props.history.push("/");
            }),
            (o.$Page1 = null),
            (o.$Page2 = null),
            (o.state = {
              earlyError: (
                null === (t = n.oAuthResponse) || void 0 === t
                  ? void 0
                  : t.success
              )
                ? void 0
                : a(d[5]).ERROR_SIGNUP_UNKNOWN,
            }),
            o
          );
        }
        i(d[4])(c, u);
        var p = c.prototype;
        return (
          (p.getExtraDataForLogger = function () {
            return {
              type: "fb",
              platform: r(d[9]).getAppPlatform(),
              source: i(d[10]).fbSignupPage,
            };
          }),
          (p.componentDidMount = function () {
            var n = this;
            window.history.replaceState &&
              window.history.replaceState({}, "", r(d[6]).SIGNUP_PATH);
            var t = 1,
              o = setInterval(function () {
                t-- > 0
                  ? i(d[11]).reloadSDK()
                  : (clearInterval(o),
                    r(d[7]).logAction_DEPRECATED(
                      "signupFBConnectFailed",
                      n.getExtraDataForLogger()
                    ),
                    r(d[12]).logLoggedOutCtaEvent({
                      ctaType: "fb_signup_page",
                      ctaVersion: "",
                      eventName: "fb_connect_failed",
                    }),
                    n.$Page3());
              }, 5e3);
            if (
              (i(d[11]).sdkReady(function () {
                return clearInterval(o);
              }),
              r(d[9]).isLoggedIn())
            ) {
              var s;
              if (
                (null === (s = this.props.oAuthResponse) || void 0 === s
                  ? void 0
                  : s.accessToken) &&
                !0 ===
                  i(d[13])._(
                    "fxcal_ig_fbconnect_loggedout_holdouts",
                    "48d7c64d7adf7cbd2f84bfcb56bd6d62"
                  )
              ) {
                var l,
                  u =
                    null === (l = this.props.oAuthResponse) || void 0 === l
                      ? void 0
                      : l.accessToken;
                r(d[14]).saveAccessToken(u),
                  this.props.onLinkAccountToFB(this.props.oAuthResponse);
              } else
                i(d[15])("fb oauth token is missing"),
                  this.props.history.push("/");
            } else this.props.onLoadFBSignupOAuthLandingPage();
          }),
          (p.componentDidUpdate = function (n, t) {
            this.$Page1 &&
              !this.isFormVisible(n) &&
              this.$Page1.focusUsername();
          }),
          (p.isFormVisible = function (n) {
            return (
              null === n.igAccount &&
              null != n.fbPictureUrl &&
              null !== n.usernameSuggestions &&
              void 0 !== n.usernameSuggestions
            );
          }),
          (p.needEmailOrPhone = function () {
            var n = this.props,
              t = n.fbEmail,
              o = n.fbPhone;
            return !t && !(!t && o);
          }),
          (p.render = function () {
            var u,
              c = this,
              p = !0;
            if (this.state.earlyError)
              u = a(d[16]).createElement(s, {
                message: this.state.earlyError,
                onGoHome: this.$Page7,
              });
            else if (this.props.fbProfileError && !this.props.igAccount)
              u = a(d[16]).createElement(s, {
                message: a(d[5]).ERROR_FB_COULDNT_LOAD_INFO,
                onGoHome: this.$Page7,
              });
            else if (this.props.hasTwoFactorChallenge)
              u = a(d[16]).createElement(
                a(d[16]).Fragment,
                null,
                a(d[16]).createElement("h1", {
                  className: "Szr5J SIUqf coreSpriteLock",
                }),
                a(d[16]).createElement(l, {
                  requestInFlight: this.props.requestInFlight,
                })
              );
            else if (this.isFormVisible(this.props)) {
              var f = this.props,
                h = f.fbName,
                v = f.fbPictureUrl;
              (v && h) || i(d[17])(0),
                this.props.fbEmail || this.props.fbPhone || i(d[17])(0),
                (u = a(d[16]).createElement(
                  a(d[16]).Fragment,
                  null,
                  a(d[16]).createElement(t, { url: v }),
                  a(d[16]).createElement(i(d[18]), {
                    canUsePhone: !1,
                    className: "c3Opt",
                    errorNonce: this.props.errorNonce,
                    fbConnectedStatus: this.props.fbConnectStatus,
                    fbUserID: this.props.fbUserID,
                    gdprRequired: !1,
                    hideFBOption: !0,
                    hideHeader: !0,
                    initialFullName: h,
                    needEmailOrPhone: this.needEmailOrPhone(),
                    needPassword: !0,
                    onSignupFocusChange: this.props.onFocusChange,
                    onSubmit: function (n) {
                      c.props.onSignupWithFB(
                        n,
                        c.props.accessToken,
                        c.props.accountId
                      );
                    },
                    pageIdentifier: i(d[10]).fbSignupPage,
                    ref: function (n) {
                      return (c.$Page1 = n);
                    },
                    requestInFlight: this.props.requestInFlight,
                    requireUsername: !0,
                    signupResult: this.props.signupResult,
                    usernameSuggestions: this.props.usernameSuggestions || [],
                  })
                ));
            } else (p = !1), (u = a(d[16]).createElement(o, null));
            return a(d[16]).createElement(
              n,
              { isSmallWidth: this.props.isSmallWidth, showHeader: p },
              u
            );
          }),
          c
        );
      })(a(d[16]).Component),
      p = r(d[23]).withRouter(
        r(d[24]).connect(
          function (n) {
            var t,
              o,
              s,
              l,
              u,
              c,
              p,
              f,
              h,
              v,
              E,
              P,
              b = n.auth,
              F = n.fb,
              S = n.signup,
              A = n.twoFactor,
              _ =
                (null === S || void 0 === S ? void 0 : S.requestInFlight) ||
                (null === A || void 0 === A ? void 0 : A.requestInFlight) ||
                !1;
            return {
              accessToken:
                null === S || void 0 === S
                  ? void 0
                  : null === (t = S.fbOAuth) || void 0 === t
                  ? void 0
                  : t.accessToken,
              accountId:
                null === S || void 0 === S
                  ? void 0
                  : null === (o = S.fbProfile) || void 0 === o
                  ? void 0
                  : o.id,
              errorNonce:
                (null === S || void 0 === S ? void 0 : S.submissionCount) || 0,
              fbConnectStatus: F.status,
              fbEmail:
                null === S || void 0 === S
                  ? void 0
                  : null === (s = S.fbProfile) || void 0 === s
                  ? void 0
                  : null === (l = s.result) || void 0 === l
                  ? void 0
                  : l.email,
              fbName:
                null === S || void 0 === S
                  ? void 0
                  : null === (u = S.fbProfile) || void 0 === u
                  ? void 0
                  : null === (c = u.result) || void 0 === c
                  ? void 0
                  : c.name,
              fbPhone:
                null === S || void 0 === S
                  ? void 0
                  : null === (p = S.fbProfile) || void 0 === p
                  ? void 0
                  : null === (f = p.result) || void 0 === f
                  ? void 0
                  : f.phone,
              fbPictureUrl:
                null === S || void 0 === S
                  ? void 0
                  : null === (h = S.fbProfile) || void 0 === h
                  ? void 0
                  : null === (v = h.result) || void 0 === v
                  ? void 0
                  : v.profilePictureUrl,
              fbProfileError:
                null === S || void 0 === S
                  ? void 0
                  : null === (E = S.fbProfile) || void 0 === E
                  ? void 0
                  : E.error,
              fbUserID: Number(
                null === F || void 0 === F
                  ? void 0
                  : null === (P = F.authResponse) || void 0 === P
                  ? void 0
                  : P.userID
              ),
              igAccount:
                (null === F || void 0 === F ? void 0 : F.igProfile) || null,
              igAccounts:
                (null === F || void 0 === F ? void 0 : F.igProfiles) || null,
              isSmallWidth: n.displayProperties.viewportWidth < 640,
              oAuthResponse: null === S || void 0 === S ? void 0 : S.fbOAuth,
              requestInFlight: _,
              signupResult:
                null === S || void 0 === S ? void 0 : S.signupResult,
              hasTwoFactorChallenge: !!A,
              usernameSuggestions:
                null === S || void 0 === S ? void 0 : S.usernameSuggestions,
              nextUrl: b.next,
            };
          },
          function (n) {
            return {
              onLinkAccountToFB: function (t) {
                if (null != t) {
                  var o = t.accessToken,
                    s = t.returnURL;
                  n(r(d[19]).linkAccountToFB(o, s));
                }
              },
              onLoadFBSignupOAuthLandingPage: function () {
                n(r(d[20]).loadFBSignupOAuthLandingPage());
              },
              onFocusChange: function (t, o) {
                n(r(d[20]).changeFBSignupFormFocus(t, o));
              },
              onSignupWithFB: (function () {
                var t = i(d[21])(
                  i(d[22]).mark(function t(o, s, l) {
                    return i(d[22]).wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              n(r(d[20]).signupWithFB(o, i(d[10]).fbSignupPage))
                            );
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (n, o, s) {
                  return t.apply(this, arguments);
                };
              })(),
            };
          }
        )(c)
      );
    (e.PAGE_ID = i(d[10]).fbSignupPage), (e.FBSignupPage = p);
  },
  7077888,
  [
    13434998, 7077889, 13434975, 13369406, 13369428, 13434926, 13369603,
    13369462, 13369651, 13369351, 13369600, 13369814, 13369819, 13369520,
    13369818, 13369445, 3, 3276909, 13173238, 13369811, 13369821, 13369346,
    13369347, 6, 5, 13435346, 3801093, 13435342, 13434940, 13434927, 13173248,
  ]
);
__d(function () {}, 7077889, []);
