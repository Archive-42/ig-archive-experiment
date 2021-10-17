__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function t(t) {
      return a(d[2]).createElement(
        "div",
        { className: "wo5Ip" },
        a(d[2]).createElement(
          r(d[3]).Box,
          {
            alignItems: "center",
            direction: "row",
            flex: "grow",
            justifyContent: "center",
            padding: 2,
          },
          a(d[2]).createElement(
            r(d[3]).Text.BodyEmphasized,
            {
              color: "web-always-white",
              display: "inline",
              textAlign: "center",
            },
            t.text
          )
        )
      );
    }
    function o(t) {
      for (var o in a(d[4]))
        if (null != r(d[5]).matchPath(t, { path: a(d[4])[o], exact: !0 }))
          return null;
      for (
        var n = 0,
          l = [
            { path: "/:username", source: "profile_posts" },
            {
              path: "/:username/:permalinkKey(p|tv|reel)/:shortcode",
              source: "profile_posts",
            },
            { path: "/:username/following", source: "follows_list" },
            { path: "/:username/followers", source: "followed_by_list" },
            { path: "/:username/hashtag_following", source: "followHashtag" },
            {
              path: "/:username/:type(similar_accounts|related_profiles)",
              source: "profile_posts",
            },
            {
              path: "/:username/guide/:slug/:guide_id/",
              source: "profile_posts",
            },
            { path: "/:username/saved/:slug/", source: "profile_posts" },
            {
              path: "/:username/saved/:slug/:collection_id/",
              source: "profile_posts",
            },
            { path: "/:username/live/", source: "view_profile_live" },
            { path: "/stories/:username", source: "view_profile_story" },
            {
              path: "/stories/:username/:initialMediaId",
              source: "view_profile_story",
            },
          ];
        n < l.length;
        n++
      ) {
        var u,
          s = l[n],
          c = r(d[5]).matchPath(t, { path: s.path, exact: !0 }),
          p =
            null === c || void 0 === c
              ? void 0
              : null === (u = c.params) || void 0 === u
              ? void 0
              : u.username;
        if (null != p) return { source: s.source, username: p };
      }
      return null;
    }
    function n() {
      var t,
        n,
        l =
          null === (t = r(d[6]).getQueryParams(window.location.href)) ||
          void 0 === t
            ? void 0
            : null === (n = t.next) || void 0 === n
            ? void 0
            : n.split("?")[0];
      if (null != l) {
        var u = o(l);
        if (null != u)
          return r(d[7]).getContextualLoginText(u.source, "login", u.username);
      }
      return r(d[8]).LOGIN_TEXT_DEFAULT;
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var l = r(d[1])(527),
      u = r(d[1])(856),
      s = r(d[1])(2698);
    e.default = function (o) {
      var c = o.forceLoginIgId,
        p = o.forceLoginProfilePicUrl,
        f = o.forceLoginUsername,
        v = o.isCaptchaEnabled,
        h = o.recaptchaKey,
        _ = o.testAccountType,
        w = o.usernameHint,
        y = r(d[9]).useSelector(function (t) {
          return null === t || void 0 === t ? void 0 : t.authType;
        }),
        E = r(d[9]).useSelector(function (t) {
          return !(
            null === t ||
            void 0 === t ||
            !t.auth.login ||
            "deactivate" !==
              (null === t || void 0 === t ? void 0 : t.auth.login.source)
          );
        }),
        b = r(d[9]).useSelector(function (t) {
          var o, n;
          return Boolean(
            null === t || void 0 === t
              ? void 0
              : null === (o = t.auth) || void 0 === o
              ? void 0
              : null === (n = o.accountRecovery) || void 0 === n
              ? void 0
              : n.showAccountRecoveryModal
          );
        }),
        x = r(d[9]).useSelector(function (t) {
          var o, n, l, u, s;
          return !0 ===
            i(d[10])._("mani_fb_to_ig_sso", "2810cf3650e49f9b4e752a49b9420ba6")
            ? null !==
                (o =
                  null === t || void 0 === t
                    ? void 0
                    : null === (n = t.auth) || void 0 === n
                    ? void 0
                    : null === (l = n.login) || void 0 === l
                    ? void 0
                    : l.showSSODisabledModal) &&
                void 0 !== o &&
                o
            : null !==
                (u =
                  null === t || void 0 === t
                    ? void 0
                    : null === (s = t.fb) || void 0 === s
                    ? void 0
                    : s.showSSODisabledModal) &&
                void 0 !== u &&
                u;
        }),
        I =
          y === r(d[11]).AUTH.signup ? i(d[12]).signupPage : i(d[12]).loginPage,
        L = y === r(d[11]).AUTH.signup ? u : l,
        P =
          !0 ===
          i(d[10])._(
            "ig_growth_logged_out_conversion",
            "05956afe0d1745c0b06b31bb66c280b2"
          );
      if (r(d[13]).isMobile())
        return a(d[2]).createElement(
          i(d[14]),
          {
            pageIdentifier: I,
            title: L,
            topBanner: E && a(d[2]).createElement(t, { text: s }),
          },
          a(d[2]).createElement(
            r(d[3]).Box,
            {
              alignItems: "start",
              direction: "row",
              display: "flex",
              justifyContent: "center",
              minHeight: "100%",
              overflow: "hidden",
            },
            a(d[2]).createElement(i(d[15]), {
              forceLoginIgId: c,
              forceLoginProfilePicUrl: p,
              forceLoginUsername: f,
              isCaptchaEnabled: v,
              pageIdentifier: I,
              recaptchaKey: h,
              usernameHint: w,
              valuePropText: !0 === P ? n() : void 0,
            })
          ),
          b && a(d[2]).createElement(i(d[16]), null),
          x && a(d[2]).createElement(i(d[17]), null)
        );
      var T = r(d[18]).maybeGetDeepLinks();
      return a(d[2]).createElement(
        i(d[19]),
        {
          androidAppLink: T.android,
          hideNavigation: !0,
          iOSAppLink: T.ios,
          maxWidth: r(d[20]).SITE_WIDTHS.wide,
          pageIdentifier: I,
        },
        a(d[2]).createElement(i(d[21]), { id: I, title: L }),
        E && a(d[2]).createElement(t, { text: s }),
        a(d[2]).createElement(
          r(d[3]).Box,
          {
            alignItems: "center",
            direction: "row",
            display: "flex",
            flex: "grow",
            justifyContent: "center",
            marginBottom: 11,
            minHeight: "100%",
            overflow: "hidden",
          },
          a(d[2]).createElement(i(d[15]), {
            forceLoginIgId: c,
            forceLoginProfilePicUrl: p,
            forceLoginUsername: f,
            isCaptchaEnabled: v,
            pageIdentifier: I,
            recaptchaKey: h,
            testAccountType: _,
            usernameHint: w,
            valuePropText: !0 === P ? n() : void 0,
          })
        ),
        b && a(d[2]).createElement(i(d[16]), null),
        x && a(d[2]).createElement(i(d[17]), null)
      );
    };
  },
  8519680,
  [
    8519681, 13369406, 3, 13434927, 13369603, 6, 13369573, 13369809, 13369810,
    5, 13369520, 13369796, 13369600, 13369353, 13173265, 13173218, 13173270,
    13173274, 13172906, 13172897, 13435062, 13435342,
  ]
);
__d(function () {}, 8519681, []);
