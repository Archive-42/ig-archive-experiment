__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function o(o, t) {
      var s = Object.keys(o);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(o);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(o, t).enumerable;
          })),
          s.push.apply(s, n);
      }
      return s;
    }
    function t(t) {
      for (var s = 1; s < arguments.length; s++) {
        var n = null != arguments[s] ? arguments[s] : {};
        s % 2
          ? o(n, !0).forEach(function (o) {
              i(d[0])(t, o, n[o]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : o(n).forEach(function (o) {
              Object.defineProperty(
                t,
                o,
                Object.getOwnPropertyDescriptor(n, o)
              );
            });
      }
      return t;
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = 5,
      n = r(d[14]).connect(
        function (o, n) {
          var l = r(d[1]).getViewer(o),
            c = o.feed,
            u = c.currentState,
            p = c.items,
            f = c.paginationInfo,
            P = c.postModalId,
            S = c.showSurvey,
            h = c.visibleCount,
            w = o.navigation,
            O = w.navSelection,
            T = w.route,
            v =
              o.feed.extrasDataFetchStatus ===
              r(d[2]).EXTRAS_DATA_FETCH_STATUS.loaded,
            E = {
              canFBConnect: r(d[3]).shouldDisplayFacebookConnect(o),
              extrasLoaded: v,
              followsSomeone: o.relationships.valueSeq().some(function (o) {
                return (
                  o.followedByViewer.state === r(d[4]).FOLLOW_STATUS_FOLLOWING
                );
              }),
              hasNewPosts: r(d[5]).hasNewPosts(o),
              hasNextPage: !1,
              isConsentModalOpen: r(d[6]).isConsentModalOpen(o),
              isFetching:
                o.feed.isLoading ||
                (!(null === f || void 0 === f ? void 0 : f.hasNextPage) &&
                  o.suggestedUsers.isLoadingSuggestions),
              isOldestPostVisible: !1,
              items: p,
              justPosted: o.feed.justPosted,
              maxPostsToDisplay: h,
              navSelection: O,
              postModalId: P,
              prefetchNextPageThreshold:
                u === r(d[7]).FEED_STATE_CACHE ? s : void 0,
              profilePicUploadIsInFlight: o.users.profilePicUploadIsInFlight,
              qp: o.qp.promotions,
              route: T,
              showAppInstallModal: !!n.showAppInstallModal,
              showSurvey: S,
              showUploadProgressBar: null !== o.uploadProgress.status,
              suggestedUserIds: r(d[3]).getNonDismissedAysfIds(o),
              viewer: l,
              viewportWidth: o.displayProperties.viewportWidth,
              willScrollToTop: o.feed.willScrollToTop,
            };
          p &&
            ((E = t({}, E, { items: p })),
            f &&
              (E = t({}, E, {
                hasNextPage: Boolean(f.hasNextPage),
                isOldestPostVisible:
                  !0 !== f.hasNextPage && null != h && h >= p.count(),
              })),
            (u === r(d[7]).FEED_STATE_CACHE ||
              u === r(d[7]).FEED_STATE_CACHE_PAGINATED) &&
              null === f &&
              (E = t({}, E, { hasNextPage: !0 })));
          return E;
        },
        function (o) {
          return {
            onClearJustPosted: function () {
              o(r(d[8]).clearJustPosted());
            },
            onConsentFlowStart: function (t) {
              o(r(d[9]).loadConsents(t));
            },
            onLoadBroadcasts: function () {
              o(r(d[10]).getBroadcasts());
            },
            onLoadNewPosts: function () {
              o(r(d[8]).commitStagedFeed());
            },
            onLoadNextPage: function (t, s) {
              o(r(d[8]).loadNextPage(t, s));
            },
            onClosePostModal: function () {
              o(r(d[8]).closePostModal());
            },
            onOpenPostModal: function (t, s) {
              o(r(d[8]).openPostModalForId(t)),
                s && o(r(d[8]).loadNextPage(r(d[11]).DEFAULT_PAGE_SIZE));
            },
            onScrollToTop: function () {
              o(r(d[8]).scrolledToTop());
            },
            onSendConfirmEmail: function () {
              o(r(d[12]).sendConfirmEmail());
            },
            onSetFeedPageFilter: function (t) {
              o(r(d[13]).setFeedPageFilter(t));
            },
            onSetShowSurvey: function (t) {
              o(r(d[8]).setShowSurvey(t));
            },
          };
        }
      )(r(d[11]).FeedPage);
    e.default = n;
  },
  7667712,
  [
    13369345, 13369740, 13369629, 3932171, 13369527, 13369777, 7667713,
    13369524, 13369739, 13369949, 13370067, 7667714, 13369744, 13370096, 5,
  ]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function s(s) {
      return !s.suggestedUsers.viewerHasFBConnect;
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = r(d[0]).createSelector(
        s,
        r(d[1]).isFBConnectEligible,
        function (s, t) {
          return (
            !s &&
            t &&
            !1 !==
              i(d[2])._(
                "ig_web_fxcal_nux_holdout_universe",
                "50372b591eb5911ad5fd277f83e88162"
              ) &&
            !1 !==
              i(d[2])._(
                "fxcal_ig_fbconnect_loggedout_holdouts",
                "4a4821fbdaf0ad6813abb69f4449ab94"
              )
          );
        }
      ),
      n = r(d[0]).createSelector(
        function (s) {
          return s.suggestedUsers.ids;
        },
        function (s) {
          return s.suggestedUsers.dismissedAysfIds;
        },
        function (s, t) {
          return s.subtract(t).toArray();
        }
      ),
      u = r(d[0]).createSelector(
        function (s) {
          return s.suggestedUsers.dismissedAysfIds;
        },
        function (s, t) {
          return i(d[3])(t.userIds).map(function (t) {
            return r(d[4]).getUserById(s, t);
          });
        },
        function (s, t) {
          return t
            .filter(function (t) {
              return !s.has(t.id);
            })
            .toArray();
        }
      ),
      o = r(d[0]).createSelector(
        function (s) {
          return s.suggestedUsers.ids;
        },
        function (s) {
          return s.toArray();
        }
      );
    (e.isViewerFacebookConnected = s),
      (e.shouldDisplayFacebookConnect = t),
      (e.getNonDismissedAysfIds = n),
      (e.getProfileChainingFailure = function (s, t) {
        return !!s.suggestedUsers.profileChainingFailures.get(t);
      }),
      (e.getProfileChainingSuggestions = function (s, t) {
        return s.suggestedUsers.profileChainingSuggestions.get(t);
      }),
      (e.getFeedAysfUsers = u),
      (e.getSuggestions = o),
      (e.isInitialLoad = function (s) {
        return (
          s.suggestedUsers.isLoadingSuggestions &&
          0 === s.suggestedUsers.ids.size
        );
      });
  },
  3932171,
  [9, 3932172, 13369520, 13434908, 13369740]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.isConsentModalOpen = function (n) {
        return n.consent.isModalOpen;
      });
  },
  7667713,
  []
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function t(t, o) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        o &&
          (n = n.filter(function (o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable;
          })),
          s.push.apply(s, n);
      }
      return s;
    }
    function o(o) {
      for (var s = 1; s < arguments.length; s++) {
        var n = null != arguments[s] ? arguments[s] : {};
        s % 2
          ? t(n, !0).forEach(function (t) {
              i(d[1])(o, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n))
          : t(n).forEach(function (t) {
              Object.defineProperty(
                o,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return o;
    }
    function s(t) {
      return !!Object.values(r(d[20]).ConsentEntrypoints).includes(t);
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var n = r(d[2]).createAsyncComponent({
        fallback: a(d[3]).createElement(i(d[4]), { className: "KQA-S" }),
        resolve: function () {
          return r(d[6])(d[5], "EmptyFeedPage");
        },
      }),
      l = r(d[2]).createAsyncComponent({
        fallback: a(d[3]).createElement(i(d[4]), { className: "KQA-S" }),
        resolve: function () {
          return r(d[6])(d[7], "NewUserActivatorsUnit");
        },
      }),
      p = r(d[2]).createAsyncComponent({
        fallback: a(d[3]).createElement(i(d[4]), { className: "KQA-S" }),
        resolve: function () {
          return r(d[6])(d[8], "FeedEndSuggestedUserUnit");
        },
      }),
      c = "feed",
      h = 12,
      u = (function (t) {
        function o() {
          for (var o, s = arguments.length, n = new Array(s), l = 0; l < s; l++)
            n[l] = arguments[l];
          return (
            (o = t.call.apply(t, [this].concat(n)) || this),
            (o.$MobileHeader1 = function (t) {
              i(d[10])(o.$MobileHeader2).handleStoryCreationClick();
            }),
            (o.$MobileHeader3 = function (t) {
              window.scrollTo(0, 0), t.preventDefault();
            }),
            o
          );
        }
        i(d[9])(o, t);
        var s = o.prototype;
        return (
          (s.$MobileHeader4 = function () {
            var t = a(d[3]).createElement(i(d[11]), {
              containerModule: r(d[12]).CONNECTIONS_CONTAINER_MODULES
                .feed_timeline,
            });
            return r(d[13]).hasDirect()
              ? a(d[3]).createElement(i(d[14]), {
                  location: this.props.location,
                })
              : t;
          }),
          (s.render = function () {
            var t = this,
              o = a(d[3]).createElement(
                "button",
                {
                  className: "mTGkH",
                  key: "create_story",
                  onClick: this.$MobileHeader1,
                },
                a(d[3]).createElement(i(d[15]), {
                  alt: r(d[16]).NEW_STORY_TEXT,
                })
              );
            return a(d[3]).createElement(
              "div",
              null,
              a(d[3]).createElement(i(d[17]), {
                leftActions: [o],
                rightActions: this.$MobileHeader4(),
                title: a(d[3]).createElement(i(d[18]), { isLink: !0 }),
              }),
              a(d[3]).createElement(i(d[19]), {
                entryPoint: "quick_cam_button",
                ref: function (o) {
                  return (t.$MobileHeader2 = o);
                },
              })
            );
          }),
          o
        );
      })(a(d[3]).Component),
      P = (function () {
        var t = !1;
        return function () {
          t ||
            (i(d[21]).appendActionIfNew(
              r(d[22]).IG_WEB_NUX_FUNNEL,
              r(d[22]).NUX_FUNNEL_FEED
            ),
            i(d[21]).endFunnel(r(d[22]).IG_WEB_NUX_FUNNEL),
            (t = !0));
        };
      })(),
      _ = (function (t) {
        function _(o) {
          var s, n;
          ((n = t.call(this, o) || this).$_FeedPage1 = 0),
            (n.$_FeedPage2 = !1),
            (n.$_FeedPage7 = function () {
              window.scrollTo(0, 0), n.props.onScrollToTop();
            }),
            (n.$_FeedPage10 = function (t) {
              return t
                ? i(d[23]).VARIANTS.none
                : r(d[24]).isMobile()
                ? i(d[23]).VARIANTS.slim
                : i(d[23]).VARIANTS.centered;
            }),
            (n.$_FeedPage9 = function () {
              return n.props.items && 0 === n.props.items.size
                ? i(d[25]).emptyFeedPage
                : i(d[25]).feedPage;
            }),
            (n.$_FeedPage11 = function () {
              n.setState({ showProfilePicAdder: !1 });
            }),
            (n.$_FeedPage12 = function () {
              n.setState({ showAppInstallModal: !1 });
            }),
            (n.$_FeedPage13 = function (t) {
              var o =
                null != n.props.maxPostsToDisplay
                  ? t - n.props.maxPostsToDisplay
                  : 0;
              o > 0 && n.props.onLoadNextPage(o);
            }),
            (n.$_FeedPage14 = function () {
              n.props.history.goBack();
            }),
            (n.$_FeedPage5 = function () {
              n.props.hasNewPosts &&
                0 === window.scrollY &&
                n.props.onLoadNewPosts();
            }),
            (n.$_FeedPage16 = function () {
              var t =
                  r(d[24]).isDesktop() &&
                  !0 ===
                    i(d[26])._(
                      "ig_web_stories_tray",
                      "d8118551b4099d61db8828c411077db5"
                    ),
                o = n.$_FeedPage15();
              return (
                !t &&
                !o &&
                n.props.viewportWidth <=
                  i(d[27])["feed-sidebar-threshold-min"].value
              );
            }),
            (n.$_FeedPage17 = function () {
              var t = n.$_FeedPage15();
              return (
                r(d[24]).isDesktop() &&
                !t &&
                !0 ===
                  i(d[26])._(
                    "ig_web_stories_tray",
                    "d8118551b4099d61db8828c411077db5"
                  )
              );
            }),
            (n.$_FeedPage18 = function () {
              return (
                !n.$_FeedPage15() &&
                r(d[24]).isDesktop() &&
                n.props.viewportWidth >=
                  i(d[27])["feed-sidebar-threshold-min"].value
              );
            }),
            (n.$_FeedPage22 = function () {
              r(d[28]).logAction_DEPRECATED("newPostsPillClick"),
                n.$_FeedPage7();
            }),
            (n.$_FeedPage23 = function (t) {
              n.props.onLoadNextPage(h, t);
            }),
            (n.$_FeedPage24 = function (t) {
              null != t.followHashtagInfo
                ? r(d[29]).logImpression(t)
                : r(d[30]).logImpressionForPost(t, c);
            }),
            (n.$_FeedPage25 = function (t, o) {
              var s = n.props,
                l = s.hasNextPage,
                p = s.items,
                c = !1;
              l && p && (c = o === p.size - 2), n.props.onOpenPostModal(t, c);
            });
          var l = !(null === (s = n.props.viewer) || void 0 === s
            ? void 0
            : s.hasProfilePic);
          return (
            (n.state = {
              blockGDPRQPs: !1,
              isZeroRatingNewAndResEligible: r(
                d[31]
              ).isZeroRatingNewAndResEligible(),
              isZeroRatingSelectEligible: r(d[31]).isZeroRatingSelectEligible(),
              isZeroRatingSlimEligible: r(d[31]).isZeroRatingSlimEligible(),
              showAppInstallModal: n.props.showAppInstallModal,
              showProfilePicAdder: l,
              showCreationUpsell: !1,
              showPostModal: !1,
              postModalId: null,
            }),
            (n.$_FeedPage3 = o.location),
            r(d[24]).isDesktop() && r(d[32]).preloadModule(),
            n
          );
        }
        i(d[9])(_, t);
        var f = _.prototype;
        return (
          (f.$_FeedPage4 = function () {
            null != this.props.items && this.props.onDisplayDone();
          }),
          (f.componentDidMount = function () {
            var t;
            try {
              t = r(d[33]).parseQueryParams();
            } catch (t) {}
            t &&
              t.terms_start &&
              s(t.terms_start) &&
              (this.props.onConsentFlowStart(t.terms_start),
              this.setState({ blockGDPRQPs: !0 })),
              r(d[24]).isDesktop() &&
                r(d[34]).shouldFetchLiveInStories() &&
                this.props.onLoadBroadcasts(),
              this.$_FeedPage4(),
              r(d[35]).hasFeedCaching() &&
                (this.props.hasNewPosts &&
                !r(d[36]).shouldRestoreScroll(this.props.history)
                  ? this.props.onLoadNewPosts()
                  : window.addEventListener("scroll", this.$_FeedPage5)),
              r(d[37]).requestIdleCallback(function () {
                r(d[38]).preloadPostModals();
              });
          }),
          (f.componentWillUnmount = function () {
            if (r(d[35]).hasFeedCaching()) {
              window.removeEventListener("scroll", this.$_FeedPage5);
              var t = this.props,
                o = t.hasNewPosts,
                s = t.navSelection;
              o &&
                s !== r(d[39]).NAVIGATION_SECTION_HOME &&
                (r(d[36]).clearScrollPosition(this.$_FeedPage3),
                this.props.onLoadNewPosts());
            }
          }),
          (f.$_FeedPage6 = function () {
            var t = this.props.history.location.hash;
            if (t)
              switch (
                (this.props.history.replace(
                  this.props.history.location.pathname
                ),
                t)
              ) {
                case i(d[40]).sharePhoto:
                  this.props.onStartCreation(
                    "feed_upsell",
                    r(d[41]).CreationMode.POST
                  );
                  break;
                case i(d[40]).openGDPRMegaphone:
                  this.props.onConsentFlowStart(
                    r(d[20]).ConsentEntrypoints.MEGAPHONE
                  );
                  break;
                case i(d[40]).openGDPRFullscreen:
                  this.props.onConsentFlowStart(
                    r(d[20]).ConsentEntrypoints.FULLSCREEN
                  );
                  break;
                case i(d[40]).openGDPRDialog:
                  this.props.onConsentFlowStart(
                    r(d[20]).ConsentEntrypoints.DIALOG
                  );
                  break;
                case i(d[40]).confirmEmail:
                  this.props.onSendConfirmEmail();
                  break;
                case i(d[40]).changeEmail:
                  this.props.history.push(r(d[42]).PROFILE_EDIT_PATH);
                  break;
                case i(d[40]).turnOnDataSaver:
                  r(d[43]).setDataSaverConfig(
                    o({}, r(d[43]).getDataSaverOnDefaultConfig()),
                    !0
                  ),
                    this.props.history.push(
                      r(d[42]).DATA_SAVER_PREFERENCES_PATH
                    );
                  break;
                case i(d[40]).survey:
                  this.props.onSetShowSurvey(!0);
              }
          }),
          (f.componentDidUpdate = function (t) {
            var o, s;
            this.props.willScrollToTop && this.$_FeedPage7(),
              this.props.justPosted && this.$_FeedPage8(),
              this.$_FeedPage6(),
              t.items &&
                this.props.items &&
                t.items.size !== this.props.items.size &&
                (this.$_FeedPage1 = r(d[44]).now()),
              this.$_FeedPage4(),
              null != t.items &&
                (null === (o = t.items) || void 0 === o ? void 0 : o.size) !==
                  (null === (s = this.props.items) || void 0 === s
                    ? void 0
                    : s.size) &&
                (r(d[45]).logComponentPerformanceTiming({
                  component: "Feed",
                  eventType: "nextPage",
                  pageId: this.$_FeedPage9(),
                  route: this.props.route,
                  timeTaken: r(d[44]).now() - this.$_FeedPage1,
                }),
                (this.$_FeedPage1 = 0));
            !t.hasNewPosts &&
              this.props.hasNewPosts &&
              0 === window.scrollY &&
              this.props.onLoadNewPosts();
          }),
          (f.$_FeedPage8 = function () {
            this.props.onClearJustPosted();
          }),
          (f.$_FeedPage15 = function () {
            var t = this.props,
              o = t.items,
              s = t.suggestedUserIds;
            return null != o && 0 === o.size && null != s && s.length > 0;
          }),
          (f.$_FeedPage19 = function () {
            return (
              this.state.showProfilePicAdder &&
              a(d[3]).createElement(i(d[46]), {
                analyticsContext: c,
                className: "zMhqu",
                onHideClick: this.$_FeedPage11,
                profilePicUploadIsInFlight:
                  this.props.profilePicUploadIsInFlight,
              })
            );
          }),
          (f.$_FeedPage20 = function () {
            return a(d[3]).createElement(i(d[47]), {
              campaign: "webSignup",
              onClose: this.$_FeedPage12,
            });
          }),
          (f.$_FeedPage21 = function () {
            var t,
              o =
                ((t = {}),
                (t[i(d[48]).fbconnect] = this.props.canFBConnect),
                (t[i(d[48]).gdprDialog] = !this.state.blockGDPRQPs),
                (t[i(d[48]).gdprFullscreen] = !this.state.blockGDPRQPs),
                (t[i(d[48]).gdprMegaphoneDis] = !this.state.blockGDPRQPs),
                (t[i(d[48]).gdprMegaphoneNondis] = !this.state.blockGDPRQPs),
                t);
            return (
              this.props.onSetFeedPageFilter(o),
              a(d[3]).createElement(i(d[49]), { filter: o, slot: "feed" })
            );
          }),
          (f.$_FeedPage26 = function () {
            var t = [];
            if (this.props.items) {
              var o = !0,
                s = !1,
                n = void 0;
              try {
                for (
                  var l, p = this.props.items[Symbol.iterator]();
                  !(o = (l = p.next()).done);
                  o = !0
                ) {
                  var c = l.value;
                  switch (c.type) {
                    case r(d[50]).GRAPH_IMAGE:
                    case r(d[50]).GRAPH_VIDEO:
                    case r(d[50]).GRAPH_SIDECAR:
                      t.push(c.postId);
                  }
                }
              } catch (t) {
                (s = !0), (n = t);
              } finally {
                try {
                  o || null == p.return || p.return();
                } finally {
                  if (s) throw n;
                }
              }
            }
            return a(d[3]).createElement(i(d[51]), {
              postIds: t,
              viewKey: r(d[52]).FEED_VIEW,
            });
          }),
          (f.$_FeedPage27 = function () {
            var t = this.props,
              o = t.hasNextPage,
              s = t.items,
              n = t.maxPostsToDisplay,
              h = t.viewportWidth;
            if (null == s)
              return a(d[3]).createElement(i(d[4]), { className: "KQA-S" });
            var u =
                h >= r(d[53]).SITE_WIDTHS.narrow
                  ? r(d[54]).VARIANTS.wide
                  : r(d[54]).VARIANTS.narrow,
              P = "_8Rm4L " + (r(d[24]).isDesktop() ? "bLWKA" : "");
            return a(d[3]).createElement(
              a(d[3]).Fragment,
              null,
              s.size > 0 &&
                a(d[3]).createElement(l, {
                  className: "_2eEhX",
                  module: r(d[55]).MODULES.feed,
                }),
              null != n &&
                a(d[3]).createElement(i(d[56]), {
                  allowSampledScrollLogging: !0,
                  analyticsContext: c,
                  hasNextPage: this.props.hasNextPage,
                  isFetching: this.props.isFetching,
                  itemClassName: P,
                  items: s,
                  onNextPage: this.$_FeedPage23,
                  onPostImpression: this.$_FeedPage24,
                  prefetchNextPageThreshold:
                    this.props.prefetchNextPageThreshold,
                  variant: u,
                  visibleCount: Math.min(n, s.size),
                }),
              !o &&
                null != s &&
                s.size > 0 &&
                a(d[3]).createElement(p, { variant: u })
            );
          }),
          (f.$_FeedPage28 = function () {
            return (
              null != this.props.items && this.props.items.size > 0 && P(),
              a(d[3]).createElement(
                a(d[3]).Fragment,
                null,
                this.$_FeedPage27(),
                this.$_FeedPage26()
              )
            );
          }),
          (f.$_FeedPage29 = function () {
            var t = this.props,
              o = t.followsSomeone,
              s = t.onScrollToTop,
              l = t.suggestedUserIds;
            return a(d[3]).createElement(n, {
              followsSomeone: o,
              onScrollToTop: s,
              scrollToTop: this.$_FeedPage7,
              suggestedUserIds: l,
            });
          }),
          (f.$_FeedPage30 = function () {
            if (!r(d[24]).isMobile()) return null;
            var t = null;
            return (
              this.state.isZeroRatingNewAndResEligible
                ? (t = "new_res_banner_impression")
                : this.state.isZeroRatingSelectEligible
                ? (t = "select_banner_impression")
                : this.state.isZeroRatingSlimEligible &&
                  (t = "slim_banner_impression"),
              t &&
                !this.$_FeedPage2 &&
                (r(d[28]).logZeroEvent({ event_name: t }),
                (this.$_FeedPage2 = !0)),
              t ? a(d[3]).createElement(i(d[57]), null) : null
            );
          }),
          (f.$_FeedPage31 = function () {
            return this.props.isConsentModalOpen
              ? null
              : r(d[58]).showAddToHomeScreen()
              ? a(d[3]).createElement(r(d[60]).AddToHomeScreenModal, null)
              : a(d[3]).createElement(i(d[59]), null);
          }),
          (f.$_FeedPage32 = function () {
            return (
              this.props.hasNewPosts &&
              a(d[3]).createElement(
                r(d[61]).Box,
                { position: "fixed" },
                a(d[3]).createElement(
                  r(d[61]).Pill,
                  { onClick: this.$_FeedPage22 },
                  r(d[62])(589)
                )
              )
            );
          }),
          (f.render = function () {
            var t = this,
              o = this.$_FeedPage15(),
              s = this.props.justPosted,
              n =
                void 0 !== this.props.likedByShortcode &&
                "" !== this.props.likedByShortcode
                  ? a(d[3]).createElement(i(d[63]), {
                      display: i(d[64]).modal,
                      onClose: this.$_FeedPage14,
                      shortcode: this.props.likedByShortcode,
                    })
                  : null,
              l = this.$_FeedPage9(),
              p = o && r(d[24]).isMobile();
            return a(d[3]).createElement(
              i(d[65]),
              {
                androidAppLink: s ? void 0 : "/_n/mainfeed/",
                footerVariant: this.$_FeedPage10(this.$_FeedPage18()),
                iOSAppLink: s ? void 0 : "mainfeed",
                maxWidth:
                  r(d[24]).isMobile() || !o
                    ? r(d[53]).SITE_WIDTHS.narrow
                    : r(d[53]).SITE_WIDTHS.wide,
                mobileHeader: a(d[3]).createElement(u, {
                  location: this.props.location,
                }),
                pageIdentifier: l,
              },
              a(d[3]).createElement(i(d[66]), { id: l }),
              a(d[3]).createElement(
                i(d[67]),
                null,
                a(d[3]).createElement(
                  "section",
                  {
                    className:
                      "_1SP8R " +
                      (r(d[24]).isDesktop() &&
                      !0 ===
                        i(d[26])._(
                          "ig_web_navigation",
                          "7ccf1c9d7ae5a8950e32502eae613a72"
                        )
                        ? "C3uDN"
                        : "") +
                      " " +
                      (this.$_FeedPage18() ? "j9XKR" : "") +
                      " " +
                      (r(d[24]).isMobile() ? "M_qbh" : "") +
                      " " +
                      (p ? "yWxDb" : ""),
                  },
                  this.$_FeedPage30(),
                  this.props.showUploadProgressBar &&
                    a(d[3]).createElement(i(d[68]), null),
                  this.$_FeedPage16() &&
                    a(d[3]).createElement(i(d[69]), { key: "storyTray" }),
                  a(d[3]).createElement(
                    "div",
                    { className: this.$_FeedPage18() ? "cGcGK" : "" },
                    this.$_FeedPage17() &&
                      a(d[3]).createElement(i(d[69]), {
                        hideOwnStory: this.$_FeedPage18(),
                        key: "storyTray",
                      }),
                    !p && (this.$_FeedPage21() || this.$_FeedPage19()),
                    o ? this.$_FeedPage29() : this.$_FeedPage28()
                  ),
                  this.$_FeedPage18() &&
                    a(d[3]).createElement(
                      r(d[32]).FeedSidebarContainerLoader,
                      null
                    )
                ),
                this.state.showAppInstallModal && this.$_FeedPage20(),
                this.$_FeedPage31(),
                n,
                a(d[3]).createElement(i(d[70]), null),
                !this.state.showProfilePicAdder &&
                  a(d[3]).createElement(i(d[71]), null),
                this.$_FeedPage32(),
                this.props.extrasLoaded &&
                  a(d[3]).createElement(i(d[72]), { prefetchContext: "feed" }),
                this.props.showSurvey &&
                  a(d[3]).createElement(i(d[73]), {
                    onClose: function () {
                      return t.props.onSetShowSurvey(!1);
                    },
                  }),
                null !== this.props.postModalId &&
                  a(d[3]).createElement(i(d[74]), {
                    onClose: this.props.onClosePostModal,
                    onOpen: this.$_FeedPage25,
                    postId: this.props.postModalId || "",
                  }),
                i(d[75])._("ig_web_interaction_tracing") &&
                  a(d[3]).createElement(r(d[76]).HeroHoldTrigger, {
                    description: "FeedPage",
                    hold: this.props.isFetching,
                  })
              )
            );
          }),
          _
        );
      })(a(d[3]).Component),
      f = r(d[77]).withRouter(
        r(d[78]).displayDoneBlocking("FeedPage", i(d[79])(_))
      );
    (e.DEFAULT_PAGE_SIZE = h), (e._FeedPage = _), (e.FeedPage = f);
  },
  7667714,
  [
    7667715, 13369345, 13435189, 3, 7667716, 7274496, 68, 7340032, 7405568,
    13369428, 13434908, 6750211, 13370039, 13369523, 13435292, 7667718,
    13369991, 13435182, 7667720, 7667722, 13369884, 13369865, 6881284, 13172914,
    13369353, 13369600, 13369520, 13434920, 13369462, 7667723, 13173649,
    13369432, 7667724, 13369795, 13370063, 13369519, 3932209, 13369827,
    13173494, 13369787, 7667726, 13434923, 13369603, 13369956, 13369574,
    13369575, 7667727, 13172913, 13369792, 13173275, 13369476, 3801276,
    13369477, 13435062, 13173479, 7667729, 7667730, 7667731, 3932220, 7667733,
    3932218, 13434927, 13369406, 13173735, 13173407, 13172897, 13435342,
    7667736, 7667737, 7667739, 13173296, 13435253, 3801274, 7667755, 7667779,
    13369403, 13369860, 6, 13435109, 3932180,
  ]
);
__d(function () {}, 7667715, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      r(d[0]),
      (e.default = function (t) {
        var s = t.className,
          l = r(d[1]).useTheme();
        return a(d[2]).createElement(
          "div",
          i(d[3])({}, i(d[4]).VisualCompletionAttributes.LOADING_STATE, {
            className: i(d[5])("_tcb0", s),
          }),
          a(d[2]).createElement(
            "div",
            { className: "pOb2E" },
            a(d[2]).createElement("div", { className: "OzqB_" }),
            a(d[2]).createElement(
              "div",
              { className: "L3tlg" },
              a(d[2]).createElement("div", { className: "_8VIOK" }),
              a(d[2]).createElement("div", { className: "u9F97" })
            )
          ),
          a(d[2]).createElement("div", {
            className:
              "WidCF " + (l.getTheme() === r(d[1]).THEME.dark ? "-bs0y" : ""),
          })
        );
      });
  },
  7667716,
  [7667717, 13434936, 3, 13369825, 13369830, 13434933]
);
__d(function () {}, 7667717, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = function (t) {
      var n = t.containerModule,
        o = t.filled,
        E = void 0 !== o && o;
      return a(d[0]).createElement(
        i(d[1]),
        {
          onClick: function () {
            r(d[2]).logAction_DEPRECATED("discoverButtonClicked", {
              containerModule: n,
            }),
              r(d[3]).browserHistory.push(r(d[4]).DISCOVER_PEOPLE_PATH);
          },
        },
        E
          ? a(d[0]).createElement(i(d[5]), {
              alt: r(d[6]).DISCOVER_PEOPLE_TEXT,
            })
          : a(d[0]).createElement(i(d[7]), {
              alt: r(d[6]).DISCOVER_PEOPLE_TEXT,
            })
      );
    };
    e.default = t;
  },
  6750211,
  [3, 13434960, 13369462, 13369778, 13369603, 6750212, 13369991, 6750213]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var c = a(d[0]).memo(function (c) {
      return a(d[0]).createElement(
        i(d[1]),
        i(d[2])({}, c, { viewBox: "0 0 48 48" }),
        a(d[0]).createElement("path", {
          clipRule: "evenodd",
          d: "M46 41.5H18c-.8 0-1.5-.7-1.5-1.5v-1.5c0-5.5 4.5-10 10-10h11c5.5 0 10 4.5 10 10V40c0 .8-.7 1.5-1.5 1.5zm-14-16c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5 9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5zm-16 1h-4.5V31c0 .8-.7 1.5-1.5 1.5H8c-.8 0-1.5-.7-1.5-1.5v-4.5H2c-.8 0-1.5-.7-1.5-1.5v-2c0-.8.7-1.5 1.5-1.5h4.5V17c0-.8.7-1.5 1.5-1.5h2c.8 0 1.5.7 1.5 1.5v4.5H16c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5z",
          fillRule: "evenodd",
        })
      );
    });
    e.default = c;
  },
  6750212,
  [3, 13434963, 13369825]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var c = a(d[0]).memo(function (c) {
      return a(d[0]).createElement(
        i(d[1]),
        i(d[2])({}, c, { viewBox: "0 0 48 48" }),
        a(d[0]).createElement("path", {
          d: "M32 25.5c5.2 0 9.5-4.3 9.5-9.5S37.2 6.5 32 6.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5zm0-16c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zm5.5 19h-11c-5.5 0-10 4.5-10 10V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-3.9 3.1-7 7-7h11c3.9 0 7 3.1 7 7V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-5.5-4.5-10-10-10zm-20-4.5c0-.8-.7-1.5-1.5-1.5h-5.5V17c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.5H2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5V31c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.5H16c.8 0 1.5-.7 1.5-1.5z",
        })
      );
    });
    e.default = c;
  },
  6750213,
  [3, 13434963, 13369825]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var c = a(d[2]).memo(function (c) {
      return !0 ===
        (r(d[0]).isUserLoggedIn()
          ? i(d[1])._(
              "ig_web_pano_updates_logged_in",
              "5674296d5992b855933c716066375b34"
            )
          : i(d[1])._(
              "ig_web_pano_updates_logged_out",
              "42f2cd6fa53e15b032c207ba139724e3"
            ))
        ? a(d[2]).createElement(i(d[3]), c)
        : a(d[2]).createElement(
            i(d[4]),
            i(d[5])({}, c, { viewBox: "0 0 48 48" }),
            a(d[2]).createElement("path", {
              clipRule: "evenodd",
              d: "M38.5 46h-29c-5 0-9-4-9-9V17c0-5 4-9 9-9h1.1c1.1 0 2.2-.6 2.7-1.7l.5-1c1-2 3.1-3.3 5.4-3.3h9.6c2.3 0 4.4 1.3 5.4 3.3l.5 1c.5 1 1.5 1.7 2.7 1.7h1.1c5 0 9 4 9 9v20c0 5-4 9-9 9zm6-29c0-3.3-2.7-6-6-6h-1.1C35.1 11 33 9.7 32 7.7l-.5-1C31 5.6 29.9 5 28.8 5h-9.6c-1.1 0-2.2.6-2.7 1.7l-.5 1c-1 2-3.1 3.3-5.4 3.3H9.5c-3.3 0-6 2.7-6 6v20c0 3.3 2.7 6 6 6h29c3.3 0 6-2.7 6-6V17zM24 38c-6.4 0-11.5-5.1-11.5-11.5S17.6 15 24 15s11.5 5.1 11.5 11.5S30.4 38 24 38zm0-20c-4.7 0-8.5 3.8-8.5 8.5S19.3 35 24 35s8.5-3.8 8.5-8.5S28.7 18 24 18z",
              fillRule: "evenodd",
            })
          );
    });
    e.default = c;
  },
  7667718,
  [13369464, 13369520, 3, 7667719, 13434963, 13369825]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = a(d[0]).memo(function (t) {
      return a(d[0]).createElement(
        i(d[1]),
        i(d[2])({}, t, { viewBox: "0 0 24 24" }),
        a(d[0]).createElement("circle", {
          cx: "12",
          cy: "13.191",
          fill: "none",
          r: "4.539",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: "2",
        }),
        a(d[0]).createElement("path", {
          d: "M18.592 21.374A3.408 3.408 0 0022 17.966V8.874a3.41 3.41 0 00-3.41-3.409h-.52a2.108 2.108 0 01-1.954-1.375 2.082 2.082 0 00-2.204-1.348h-3.824A2.082 2.082 0 007.884 4.09 2.108 2.108 0 015.93 5.465h-.52A3.41 3.41 0 002 8.875v9.091a3.408 3.408 0 003.408 3.408z",
          fill: "none",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: "2",
        })
      );
    });
    e.default = t;
  },
  7667719,
  [3, 13434963, 13369825]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var t = function () {
        return a(d[1]).createElement(r(d[2]).Image, {
          alt: r(d[3]).INSTAGRAM_TEXT,
          srcx: "images/web/mobile_nav_type_logo.png",
          __src: {
            light:
              "/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",
            dark: "/static/images/web/mobile_nav_type_logo-dark.png/ff9b85f2b7ca.png",
          },
          __srcSet: {
            light:
              "/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png 2x",
            dark: "/static/images/web/mobile_nav_type_logo-dark-2x.png/908edfc84eda.png 2x",
          },
        });
      },
      n = r(d[6]).withRouter(function (n) {
        var l = n.history,
          o = n.isLink,
          c = l.location.pathname === r(d[4]).FEED_PATH,
          _ = function (t) {
            window.scrollTo(0, 0), t.preventDefault();
          };
        return !0 === o
          ? a(d[1]).createElement(
              "div",
              { className: "nLR5g" },
              a(d[1]).createElement(
                i(d[5]),
                { href: "/", onClick: c ? _ : void 0 },
                a(d[1]).createElement(t, null)
              )
            )
          : a(d[1]).createElement(
              "div",
              { className: "i4jjS" },
              a(d[1]).createElement(t, null)
            );
      });
    e.default = n;
  },
  7667720,
  [7667721, 3, 13434927, 13369754, 13369603, 13434940, 6]
);
__d(function () {}, 7667721, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = (function (t) {
        function n() {
          for (var n, o = arguments.length, c = new Array(o), l = 0; l < o; l++)
            c[l] = arguments[l];
          return (
            (n = t.call.apply(t, [this].concat(c)) || this),
            (n.handleStoryCreationClick = function () {
              !0 !== n.$StoryCreationFileForm1 &&
                (i(d[1]).startFunnel(r(d[2]).STORY_CREATION_FUNNEL),
                (n.$StoryCreationFileForm1 = !0),
                n.props
                  .onStartStoryCreation(n.props.entryPoint)
                  .then(function () {
                    i(d[3])(n.$StoryCreationFileForm2).selectFile(),
                      (n.$StoryCreationFileForm1 = !1);
                  })
                  .catch(function () {
                    n.$StoryCreationFileForm1 = !1;
                  }));
            }),
            n
          );
        }
        i(d[0])(n, t);
        return (
          (n.prototype.render = function () {
            var t = this;
            return a(d[4]).createElement(r(d[5]).ImageFileForm, {
              acceptMimeTypes: ["image/jpeg"],
              onFileChange: this.props.onMediaSelect,
              ref: function (n) {
                return (t.$StoryCreationFileForm2 = n);
              },
            });
          }),
          n
        );
      })(a(d[4]).Component),
      n = r(d[7]).connect(
        null,
        function (t) {
          return {
            onMediaSelect: function (n) {
              n.length &&
                (i(d[1]).appendAction(
                  r(d[2]).STORY_CREATION_FUNNEL,
                  r(d[2]).STORY_CREATION_PICKED_FILE
                ),
                t(r(d[6]).storyCreationSelectMedia(n[0])));
            },
            onStartStoryCreation: function (n) {
              return t(r(d[6]).startStoryCreationSession(n));
            },
          };
        },
        null,
        { forwardRef: !0 }
      )(t);
    e.default = n;
  },
  7667722,
  [13369428, 13369865, 6357000, 13434908, 3, 13435209, 6356999, 5]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    (e.STORY_CREATION_BAD_ASPECT_RATIO = "bad_aspect_ratio"),
      (e.STORY_CREATION_DISCARD_CANCEL = "discard_cancel"),
      (e.STORY_CREATION_DISCARD_CONFIRMATION = "discard_confirmation"),
      (e.STORY_CREATION_DOODLE_ENTER = "story_creation_doodle_enter"),
      (e.STORY_CREATION_DOODLE_EXIT = "story_creation_doodle_exit"),
      (e.STORY_CREATION_FINALIZE_FAILED = "story_finalize_failed"),
      (e.STORY_CREATION_FUNNEL = "IG_WEB_STORY_CREATION_FUNNEL"),
      (e.STORY_CREATION_PICKED_FILE = "picked_file"),
      (e.STORY_CREATION_SAVE = "save"),
      (e.STORY_CREATION_START_PICK_FILE = "start_pick_file"),
      (e.STORY_CREATION_STORY_CREATION_FAILED = "story_creation_failed"),
      (e.STORY_CREATION_STORY_CREATION_SUCCESS = "story_creation_success"),
      (e.STORY_CREATION_UPLOAD_STAGE_SUCCESS = "upload_staged"),
      (e.STORY_CREATION_UPLOAD_START = "upload_start");
  },
  6357000,
  []
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function t(t, n) {
      var o = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var _ = Object.getOwnPropertySymbols(t);
        n &&
          (_ = _.filter(function (n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable;
          })),
          o.push.apply(o, _);
      }
      return o;
    }
    function n(n) {
      for (var o = 1; o < arguments.length; o++) {
        var _ = null != arguments[o] ? arguments[o] : {};
        o % 2
          ? t(_, !0).forEach(function (t) {
              i(d[0])(n, t, _[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(_))
          : t(_).forEach(function (t) {
              Object.defineProperty(
                n,
                t,
                Object.getOwnPropertyDescriptor(_, t)
              );
            });
      }
      return n;
    }
    function o(t, o) {
      var _ = o.storyCreation,
        T = _.logData,
        E = T.start_time,
        O = i(d[8])(T, ["start_time"]),
        u = (Date.now() - E) / 1e3,
        R = _.canvasStickers,
        S = !1,
        c = [],
        s = !0,
        A = !1,
        C = void 0;
      try {
        for (
          var N, I = R[Symbol.iterator]();
          !(s = (N = I.next()).done);
          s = !0
        ) {
          var p = N.value;
          p.type === r(d[9]).TEXT_TYPE ? (S = !0) : c.push(p.variants[0].id);
        }
      } catch (t) {
        (A = !0), (C = t);
      } finally {
        try {
          s || null == I.return || I.return();
        } finally {
          if (A) throw C;
        }
      }
      return n({}, O, {
        exit_point: r(d[7]).STORY_CREATION_EXIT_POINT.POST,
        has_brush: _.activeDrawing.linesArray.length > 0,
        has_sticker: c.length > 0,
        has_text: S,
        step: t,
        sticker_ids: c,
        waterfall_duration: u,
        waterfall_id: i(d[10])(_.sessionId),
      });
    }
    function _(t) {
      return function (n, _) {
        var T = _();
        return (
          r(d[7]).logStoryCreationEvent(o("image_process_attempt", T)),
          i(d[16])(
            r(d[11])
              .readImageFile(t)
              .then(
                function (T) {
                  n({
                    type: r(d[1]).STORY_CREATION_IMAGE_PROCESSED,
                    height: T.height,
                    location: T.location,
                    orientation: T.orientation,
                    sourceDataURL: T.dataURL,
                    sourceImage: t,
                    width: T.width,
                    flash: T.flash,
                  }),
                    r(d[7]).logStoryCreationEvent(
                      o("image_process_success", _())
                    ),
                    r(d[17]).browserHistory.push("/create/story/");
                },
                function (t) {
                  r(d[7]).logStoryCreationEvent(o("image_process_failure", T)),
                    n(
                      r(d[4]).showToast({
                        text: r(d[18])(3025),
                        persistOnNavigate: !0,
                      })
                    ),
                    t instanceof Error
                      ? ((t.name = "[StoryCreation] " + t.name),
                        r(d[19]).logError(t))
                      : i(d[20])("[StoryCreation] error in processing image");
                }
              )
          )
        );
      };
    }
    function T(t) {
      return function (n, o) {
        var _ = Date.now().toString(),
          T = "story_" + _;
        return i(d[16])(
          r(d[12])
            .readVideoFile(t)
            .then(function (o) {
              return (
                n({
                  type: r(d[1]).STORY_CREATION_VIDEO_PROCESSED,
                  dataURL: o.src,
                  entityName: T,
                  file: t,
                  uploadId: _,
                  uploadMediaHeight: o.videoHeight,
                  uploadMediaWidth: o.videoWidth,
                  uploadMediaDurationMs: Math.floor(1e3 * o.duration),
                  videoTransform: null,
                  mediaPublishMode: r(d[21]).MediaPublishMode.REEL,
                }),
                r(d[22]).getVideoCoverPhoto(o)
              );
            })
            .then(function (t) {
              n({
                type: r(d[1]).STORY_CREATION_VIDEO_COVER_PHOTO_UPDATED,
                dataURL: t.dataURL,
                entityName: T,
                file: t.file,
                uploadId: _,
                uploadMediaHeight: t.uploadMediaHeight,
                uploadMediaWidth: t.uploadMediaWidth,
              }),
                r(d[17]).browserHistory.push("/create/story/");
            })
            .catch(function (t) {
              t instanceof Error
                ? ((t.name = "[StoryCreation] " + t.name), r(d[19]).logError(t))
                : i(d[20])("[StoryCreation] error in processing video");
            })
        );
      };
    }
    function E(t) {
      return function (n) {
        return i(d[16])(
          r(d[23])
            .creationFinalizeStory(t)
            .then(function (o) {
              if (!o.media || !o.media.pk) throw o;
              n({
                type: r(d[1]).STORY_CREATION_UPLOAD_SUCCEEDED,
                toast: {
                  text: r(d[5]).VIDEO_ADDED_TEXT,
                  persistOnNavigate: !0,
                },
                uploadId: t,
              }),
                n(O());
            })
        );
      };
    }
    function O() {
      return function (t, n) {
        return t(r(d[26]).refreshStoryReels()).then(function () {
          var o = i(d[10])(r(d[27]).getViewer(n()));
          t(r(d[26]).invalidateStoryReel(o.id)),
            r(d[17]).browserHistory.push("/"),
            t(r(d[25]).setNavSelection("NAVIGATION_SECTION_HOME"));
        });
      };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = "error",
      R = function (t) {
        for (var n = 0; n < t.length; n++)
          if ("number" == typeof t[n].id) return n;
        return -1;
      };
    (e.setCanvasDimensions = function (t, n) {
      return {
        type: r(d[1]).STORY_CREATION_SET_CANVAS_DIMENSIONS,
        canvasWidth: t,
        canvasHeight: n,
      };
    }),
      (e.startStoryCreationSession = function (t) {
        return function (n, o) {
          return new Promise(function (_, T) {
            var E = o().displayProperties;
            if (E.viewportHeight < E.viewportWidth)
              return (
                i(d[2]).appendAction(
                  r(d[3]).STORY_CREATION_FUNNEL,
                  r(d[3]).STORY_CREATION_BAD_ASPECT_RATIO
                ),
                i(d[2]).endFunnel(r(d[3]).STORY_CREATION_FUNNEL),
                n(
                  r(d[4]).showToast({
                    text: r(d[5]).STORY_LANDSCAPE_WARNING_TEXT,
                  })
                ),
                T({})
              );
            i(d[2]).appendAction(
              r(d[3]).STORY_CREATION_FUNNEL,
              r(d[3]).STORY_CREATION_START_PICK_FILE
            );
            var O = i(d[6])();
            return (
              n({
                type: r(d[1]).STORY_CREATION_SESSION_STARTED,
                sessionId: O,
                entryPoint: t,
                startTime: Date.now(),
              }),
              r(d[7]).logStoryCreationEvent({
                step: "enter",
                waterfall_id: O,
                entry_point: t,
              }),
              _({})
            );
          });
        };
      }),
      (e.storyCreationSelectMedia = function (t) {
        return function (n) {
          var o = t.type;
          r(d[11]).isImage(o)
            ? n(_(t))
            : r(d[12]).isVideo(o) && r(d[13]).getIgLiteStoryVideoUploadQE()
            ? n(T(t))
            : (n(
                r(d[14]).updateCreationError(
                  new Error(r(d[15]).NOT_SUPPORTED_MEDIA_TEXT)
                )
              ),
              n(r(d[14]).updateCreationDialogStatus("error")));
        };
      }),
      (e.storyCreationSelectImage = _),
      (e.storyCreationSelectVideo = T),
      (e.uploadStory = function (t, n) {
        return function (_, T) {
          _({ type: r(d[1]).STORY_CREATION_UPLOAD_REQUESTED, uploadedBlob: t }),
            i(d[2]).appendAction(
              r(d[3]).STORY_CREATION_FUNNEL,
              r(d[3]).STORY_CREATION_UPLOAD_START
            );
          var E = T(),
            u = E.storyCreation.activeText.renderText.join("\n");
          return (
            r(d[7]).logStoryCreationEvent(o("compose_stage_attempt", E)),
            i(d[16])(
              r(d[23])
                .fbUploaderPhoto(t)
                .then(function (t) {
                  i(d[2]).appendAction(
                    r(d[3]).STORY_CREATION_FUNNEL,
                    r(d[3]).STORY_CREATION_UPLOAD_STAGE_SUCCESS
                  );
                  var n = t.upload_id;
                  return (
                    _({
                      type: r(d[1]).STORY_CREATION_UPLOAD_STAGED,
                      uploadId: n,
                    }),
                    (E = T()),
                    r(d[7]).logStoryCreationEvent(
                      o("compose_finalize_attempt", E)
                    ),
                    r(d[23])
                      .creationFinalizeStory(n, u)
                      .then(function (t) {
                        i(d[2]).appendAction(
                          r(d[3]).STORY_CREATION_FUNNEL,
                          r(d[3]).STORY_CREATION_STORY_CREATION_SUCCESS
                        ),
                          i(d[2]).endFunnel(r(d[3]).STORY_CREATION_FUNNEL),
                          r(d[7]).logStoryCreationEvent(o("compose", E)),
                          _({
                            type: r(d[1]).STORY_CREATION_UPLOAD_SUCCEEDED,
                            toast: {
                              text: r(d[5]).PHOTO_ADDED_TEXT,
                              persistOnNavigate: !0,
                            },
                            uploadId: n,
                          }),
                          _(O());
                      })
                      .catch(function (t) {
                        throw (
                          (i(d[2]).appendAction(
                            r(d[3]).STORY_CREATION_FUNNEL,
                            r(d[3]).STORY_CREATION_FINALIZE_FAILED
                          ),
                          t)
                        );
                      })
                  );
                })
                .catch(function (t) {
                  i(d[2]).appendAction(
                    r(d[3]).STORY_CREATION_FUNNEL,
                    r(d[3]).STORY_CREATION_STORY_CREATION_FAILED
                  ),
                    n || i(d[2]).endFunnel(r(d[3]).STORY_CREATION_FUNNEL),
                    r(d[7]).logStoryCreationEvent(o("compose_failure", E)),
                    _({
                      type: r(d[1]).STORY_CREATION_UPLOAD_FAILED,
                      toast: {
                        text: r(d[5]).UPLOAD_FAILED_TEXT,
                        persistOnNavigate: !0,
                        actionText: n && r(d[24]).RETRY_TEXT,
                        actionHandler: n,
                      },
                    }),
                    t instanceof Error
                      ? ((t.name = "[StoryCreation] " + t.name),
                        r(d[19]).logError(t))
                      : i(d[20])("[StoryCreation] error in uploading story");
                })
            )
          );
        };
      }),
      (e.uploadStoryVideo = function () {
        return function (t, n) {
          var o = n().storyCreation,
            _ = o.sourceVideo,
            T = o.coverPhoto,
            O = i(d[10])(_).uploadId;
          return (
            t({ type: r(d[1]).STORY_CREATION_VIDEO_UPLOAD_REQUESTED }),
            i(d[16])(
              r(d[23])
                .ruploadVideo(_)
                .then(function () {
                  return r(d[23]).ruploadPhoto(T);
                })
                .then(function () {
                  return t(E(O));
                })
                .catch(function (n) {
                  r(d[17]).browserHistory.push("/"),
                    t(r(d[25]).setNavSelection("NAVIGATION_SECTION_HOME")),
                    t({
                      type: r(d[1]).STORY_CREATION_UPLOAD_FAILED,
                      toast: {
                        text: r(d[5]).UPLOAD_FAILED_TEXT,
                        persistOnNavigate: !0,
                      },
                    });
                })
            )
          );
        };
      }),
      (e.refreshStoryReelAndNavigateToFeed = O),
      (e.changeActiveText = function (t, n, o) {
        return {
          type: r(d[1]).STORY_CREATION_CHANGE_TEXT,
          rawText: t,
          width: n,
          height: o,
        };
      }),
      (e.enterAddText = function () {
        return { type: r(d[1]).STORY_CREATION_ENTER_ADD_TEXT };
      }),
      (e.enterEditText = function () {
        return { type: r(d[1]).STORY_CREATION_ENTER_EDIT_TEXT };
      }),
      (e.saveText = function (t, n) {
        return {
          type: r(d[1]).STORY_CREATION_SAVE_TEXT,
          renderText: t,
          timeSpent: n,
        };
      }),
      (e.transformCanvasSticker = function (t, n) {
        return {
          type: r(d[1]).STORY_CREATION_TRANSFORM_CANVAS_STICKER,
          stillMoving: t,
          transform: n,
        };
      }),
      (e.deleteCanvasSticker = function () {
        return { type: r(d[1]).STORY_CREATION_DELETE_CANVAS_STICKER };
      }),
      (e.moveCanvasSticker = function (t, n, o) {
        return {
          type: r(d[1]).STORY_CREATION_MOVE_CANVAS_STICKER,
          deltaX: t,
          deltaY: n,
          overTrash: o,
        };
      }),
      (e.changeBrush = function (t) {
        return { type: r(d[1]).STORY_CREATION_CHANGE_ACTIVE_BRUSH, brush: t };
      }),
      (e.changeBrushSize = function (t) {
        return { type: r(d[1]).STORY_CREATION_CHANGE_BRUSH_SIZE, size: t };
      }),
      (e.changeColor = function (t) {
        return { type: r(d[1]).STORY_CREATION_CHANGE_COLOR, color: t };
      }),
      (e.changeDrawColor = function (t) {
        return { type: r(d[1]).STORY_CREATION_CHANGE_DRAW_COLOR, color: t };
      }),
      (e.editDrawing = function () {
        return (
          i(d[2]).appendAction(
            r(d[3]).STORY_CREATION_FUNNEL,
            r(d[3]).STORY_CREATION_DOODLE_ENTER
          ),
          { type: r(d[1]).STORY_CREATION_EDIT_DRAWING }
        );
      }),
      (e.startDrawing = function (t) {
        return { type: r(d[1]).STORY_CREATION_START_DRAWING, startIndex: t };
      }),
      (e.drawLineAction = function (t) {
        return { type: r(d[1]).STORY_CREATION_DRAW_LINE, line: t };
      }),
      (e.useModal = function (t) {
        return { type: r(d[1]).STORY_CREATION_USE_MODAL, isUsingModal: t };
      }),
      (e.undoDrawing = function () {
        return { type: r(d[1]).STORY_CREATION_UNDO_DRAWING };
      }),
      (e.saveDrawing = function (t) {
        return (
          i(d[2]).appendAction(
            r(d[3]).STORY_CREATION_FUNNEL,
            r(d[3]).STORY_CREATION_DOODLE_EXIT
          ),
          { type: r(d[1]).STORY_CREATION_SAVE_DRAWING, timeSpent: t }
        );
      }),
      (e.openStickerTool = function () {
        return { type: r(d[1]).STORY_CREATION_OPEN_STICKER_TOOL };
      }),
      (e.closeStickerTool = function () {
        return { type: r(d[1]).STORY_CREATION_CLOSE_STICKER_TOOL };
      }),
      (e.changeStickerOrder = function (t) {
        return {
          type: r(d[1]).STORY_CREATION_CHANGE_STICKER_ORDER,
          bumpIndex: t,
        };
      }),
      (e.addSticker = function (t) {
        return { type: r(d[1]).STORY_CREATION_ADD_STICKER, sticker: t };
      }),
      (e.cacheStickerResults = function () {
        return function (t, n) {
          var o = r(d[27]).getViewer(n());
          return r(d[9])
            .getPosition()
            .then(
              function (n) {
                var _ = {
                  latitude: n.coords.latitude,
                  longitude: n.coords.longitude,
                };
                return i(d[16])(
                  r(d[23])
                    .getStickers({ user: o, location: _ })
                    .then(
                      function (n) {
                        var o = R(n.static_stickers);
                        t({
                          type: r(d[1]).STORY_CREATION_CACHE_STICKER_RESULTS,
                          results: n.static_stickers.slice(o),
                        });
                      },
                      function (n) {
                        t({
                          type: r(d[1]).STORY_CREATION_CACHE_STICKER_RESULTS,
                          results: u,
                        });
                      }
                    )
                );
              },
              function (n) {
                return i(d[16])(
                  r(d[23])
                    .getStickers({ user: o, location: null })
                    .then(
                      function (n) {
                        var o = R(n.static_stickers);
                        t({
                          type: r(d[1]).STORY_CREATION_CACHE_STICKER_RESULTS,
                          results: n.static_stickers.slice(o),
                        });
                      },
                      function (n) {
                        t({
                          type: r(d[1]).STORY_CREATION_CACHE_STICKER_RESULTS,
                          results: u,
                        });
                      }
                    )
                );
              }
            );
        };
      }),
      (e.resetStickerResults = function () {
        return function (t, n) {
          return new Promise(function (n, o) {
            return (
              t({ type: r(d[1]).STORY_CREATION_RESET_STICKER_RESULTS }), n({})
            );
          });
        };
      }),
      (e.saveStory = function () {
        return (
          i(d[2]).appendAction(
            r(d[3]).STORY_CREATION_FUNNEL,
            r(d[3]).STORY_CREATION_SAVE
          ),
          { type: r(d[1]).STORY_CREATION_SAVE_STORY }
        );
      }),
      (e.attemptExitStoryCreation = function () {
        return function (t, n) {
          r(d[7]).logStoryCreationEvent(o("exit_attempt", n())),
            i(d[2]).appendAction(
              r(d[3]).STORY_CREATION_FUNNEL,
              r(d[3]).STORY_CREATION_DISCARD_CONFIRMATION
            ),
            t({ type: r(d[1]).STORY_CREATION_EXIT_ATTEMPT });
        };
      }),
      (e.exitStoryCreation = function () {
        return function (t, n) {
          r(d[7]).logStoryCreationEvent(o("exit", n())),
            i(d[2]).endFunnel(r(d[3]).STORY_CREATION_FUNNEL),
            t({ type: r(d[1]).STORY_CREATION_EXIT });
        };
      }),
      (e.cancelExitStoryCreation = function () {
        return function (t, n) {
          r(d[7]).logStoryCreationEvent(o("exit_cancel", n())),
            i(d[2]).appendAction(
              r(d[3]).STORY_CREATION_FUNNEL,
              r(d[3]).STORY_CREATION_DISCARD_CANCEL
            ),
            t({ type: r(d[1]).STORY_CREATION_EXIT_CANCEL });
        };
      }),
      (e.toggleStickerVariant = function () {
        return { type: r(d[1]).STORY_CREATION_TOGGLE_STICKER_VARIANT };
      });
  },
  6356999,
  [
    13369345, 13172773, 13369865, 6357000, 13369752, 6356994, 13434909, 6357001,
    13369417, 13173359, 13434908, 13369605, 13370049, 13369519, 13370043,
    13370044, 13369454, 13369778, 13369406, 13369446, 13369445, 13369608,
    13370050, 13369546, 13369754, 13369785, 13370075, 13369740,
  ]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var T = r(d[0])(3438),
      _ = r(d[0])(1587),
      E = r(d[0])(3918),
      O = r(d[0])(728),
      I = r(d[0])(607),
      R = r(d[0])(713),
      A = r(d[0])(2737),
      D = r(d[0])(3005),
      N = r(d[0])(507),
      X = r(d[0])(1762),
      C = r(d[0])(542),
      S = r(d[0])(2782),
      Y = r(d[0])(1554),
      P = r(d[0])(994),
      L = r(d[0])(1972),
      F = r(d[0])(357),
      M = r(d[0])(1263),
      t = r(d[0])(4001),
      u = r(d[0])(3543),
      K = r(d[0])(2852),
      W = r(d[0])(2505);
    (e.EXIT_STORY_CREATION_CONFIRM_TITLE = T),
      (e.EXIT_STORY_CREATION_CONFIRM_TEXT = _),
      (e.EXIT_STORY_VIDEO_CREATION_CONFIRM_TITLE = E),
      (e.EXIT_STORY_VIDEO_CREATION_CONFIRM_TEXT = O),
      (e.EXIT_STORY_CREATION_DISCARD_TEXT = I),
      (e.EXIT_STORY_CREATION_KEEP_TEXT = R),
      (e.EXIT_STORY_CREATION_KEEP_MEDIA_TEXT = A),
      (e.STORY_LANDSCAPE_WARNING_TEXT = D),
      (e.STORY_LANDSCAPE_WARNING_TEXT_EDITING = N),
      (e.TAP_FOR_MORE = X),
      (e.CANNOT_LOAD_STICKERS = C),
      (e.CHECK_CONNECTION = S),
      (e.RETRY = Y),
      (e.ADD_TO_STORY_TEXT = P),
      (e.PHOTO_ADDED_TEXT = L),
      (e.VIDEO_ADDED_TEXT = F),
      (e.UPLOAD_FAILED_TEXT = M),
      (e.PHOTO_ADDED_TEXT_NEW = t),
      (e.UPLOAD_FAILED_TEXT_NEW = u),
      (e.YOUR_STORY_TEXT = K),
      (e.SEND_TO_TEXT = W);
  },
  6356994,
  [13369406]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function t(t, o) {
      var c = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        o &&
          (n = n.filter(function (o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable;
          })),
          c.push.apply(c, n);
      }
      return c;
    }
    function o(o) {
      for (var c = 1; c < arguments.length; c++) {
        var n = null != arguments[c] ? arguments[c] : {};
        c % 2
          ? t(n, !0).forEach(function (t) {
              i(d[0])(o, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n))
          : t(n).forEach(function (t) {
              Object.defineProperty(
                o,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return o;
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var c = {
      event_name: "reel_creation_waterfall",
      library_upload_count: 1,
      library_media_available: 1,
      media_type: "1",
      source: "library",
      has_flash: !1,
      camera_position: null,
      capture_type: "normal",
      text_edit_count: 0,
      text_edit_duration: 0,
      tool_toggle_count: 0,
      duration: 0,
      color_toggle_count: 0,
      save_media_count: 0,
      has_text: !1,
      has_brush: !1,
      sticker_ids: [],
      sticker_toggle_count: 0,
      has_sticker: !1,
    };
    (e.STORY_CREATION_EXIT_POINT = { POST: 1, EXIT: 2, UNKNOWN: -1 }),
      (e.logStoryCreationEvent = function (t) {
        switch (t.step) {
          case "enter":
          case "image_process_attempt":
          case "image_process_success":
          case "image_process_failure":
            return void r(d[1]).logPigeonEvent(
              r(d[2]).createEvent(
                "instagram_web_story_creation",
                r(d[1]).getExtra(
                  o({}, t, { event_name: "reel_creation_waterfall" })
                )
              )
            );
          case "compose_stage_attempt":
          case "compose_finalize_attempt":
          case "compose_failure":
          case "compose":
          case "exit_attempt":
          case "exit_cancel":
          case "exit":
            return void r(d[1]).logPigeonEvent(
              r(d[2]).createEvent(
                "instagram_web_story_creation",
                r(d[1]).getExtra(o({}, c, {}, t))
              )
            );
        }
      });
  },
  6357001,
  [13369345, 13369462, 13369442]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    (e.IG_WEB_NUX_FUNNEL = "IG_WEB_NUX_FUNNEL"),
      (e.NUX_FUNNEL_FACEBOOK_INTERSTITIAL = "fb_interstitial"),
      (e.NUX_FUNNEL_PROFILE_PIC_INTERSTITIAL = "prof_pic_interstitial"),
      (e.NUX_FUNNEL_IMPORT_CONTACTS_INTERSTITIAL = "contacts_interstitial"),
      (e.NUX_FUNNEL_ADD_PHONE_NUMBER_INTERSTITIAL = "phone_num_interstitial"),
      (e.NUX_FUNNEL_EMPTY_FEED_WITH_SU = "empty_feed_with_su"),
      (e.NUX_FUNNEL_EMPTY_FEED_WITHOUT_SU = "empty_feed_without_su"),
      (e.NUX_FUNNEL_FEED = "feed"),
      (e.NUX_FUNNEL_DISCOVER_PEOPLE = "discover_people");
  },
  6881284,
  []
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function t(t, o) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(t);
        o &&
          (c = c.filter(function (o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable;
          })),
          n.push.apply(n, c);
      }
      return n;
    }
    function o(o) {
      for (var n = 1; n < arguments.length; n++) {
        var c = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? t(c, !0).forEach(function (t) {
              i(d[0])(o, t, c[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
          : t(c).forEach(function (t) {
              Object.defineProperty(
                o,
                t,
                Object.getOwnPropertyDescriptor(c, t)
              );
            });
      }
      return o;
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = { photo: 1, video: 2, carousel: 8 },
      c = {
        containermodule: "feed_timeline",
        delivery_class: "organic",
        hashtag_follow_status: "following",
        inventory_source: "follow_hashtag_story",
        is_id: !1,
        device_os: "Web",
      };
    e.logImpression = function (t) {
      var s = t.followHashtagInfo,
        l =
          !0 === t.isSidecar
            ? "carousel"
            : !0 === t.isVideo
            ? "video"
            : "photo",
        p = o({}, r(d[1]).getExtra(), {}, c, {
          event_name: "impression",
          hashtag_id: null === s || void 0 === s ? void 0 : s.id,
          hashtag_name: null === s || void 0 === s ? void 0 : s.name,
          m_pk: t.id,
          media_type: n[l],
          media_type_name: l,
          deviceid: r(d[2]).getDeviceOrMachineId(),
          device_model: r(d[3]).getBrowserString(),
          primary_locale: r(d[4]).getLocale(),
        });
      r(d[1]).logPigeonEvent(
        r(d[5]).createEvent("instagram_organic_impression", p, {
          module: "feed_timeline",
        })
      );
    };
  },
  7667723,
  [13369345, 13369462, 13369443, 13369353, 13369351, 13369442]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var n = a(d[3]).lazy(function () {
        return r(d[2])(d[1], "FeedSidebarContainer");
      }),
      t = function () {
        return a(d[3]).createElement(
          "div",
          { className: "wAANn" },
          a(d[3]).createElement(r(d[4]).Spinner, {
            position: "absolute",
            size: "small",
          })
        );
      },
      o = r(d[6]).displayDoneBlocking(
        "FeedSidebarContainerModule",
        function (o) {
          return a(d[3]).createElement(
            i(d[5]),
            { loadingRenderer: a(d[3]).createElement(t, null) },
            a(d[3]).createElement(n, { onDisplayDone: o.onDisplayDone })
          );
        }
      );
    (e.preloadModule = function () {
      r(d[2])(d[1], "FeedSidebarContainer");
    }),
      (e.FeedSidebarContainerLoader = o);
  },
  7667724,
  [7667725, 7471104, 68, 3, 13434927, 13435215, 13435109]
);
__d(function () {}, 7667725, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    e.default = {
      changeEmail: "#change-email",
      changePhone: "#change-phone",
      confirmEmail: "#confirm-email",
      confirmPhone: "#confirm-phone",
      importContacts: "#import-contacts",
      openGDPRDialog: "#consent",
      openGDPRFullscreen: "#open-GDPR-fullscreen",
      openGDPRMegaphone: "#open-gdpr",
      sharePhoto: "#share-photo",
      survey: "#survey",
      turnOnDataSaver: "#data-saver-on",
    };
  },
  7667726,
  []
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var t = (function (t) {
        function o() {
          for (var o, n = arguments.length, l = new Array(n), s = 0; s < n; s++)
            l[s] = arguments[s];
          return (
            (o = t.call.apply(t, [this].concat(l)) || this),
            (o.handleSelectButtonClick = function (t) {
              o.$ProfilePicAdder2 &&
                o.$ProfilePicAdder2.handleEditProfilePic(t);
            }),
            (o.handleNextButtonClick = function (t) {
              o.props.onNextButtonClick(), o.props.onHideClick();
            }),
            o
          );
        }
        i(d[1])(o, t);
        var n = o.prototype;
        return (
          (n.componentDidUpdate = function (t) {
            var o = this;
            t.profilePicUploadIsInFlight &&
              !this.props.profilePicUploadIsInFlight &&
              (t.onHideClick(),
              (this.$ProfilePicAdder1 = setTimeout(function () {
                o.$ProfilePicAdder2 &&
                  o.$ProfilePicAdder2.handleCloseEditProfilePicMenu();
              }, 1e4)));
          }),
          (n.componentWillUnmount = function () {
            clearTimeout(this.$ProfilePicAdder1);
          }),
          (n.$ProfilePicAdder3 = function () {
            return this.$ProfilePicAdder4()
              ? a(d[2]).createElement(
                  "div",
                  { className: "iOyYw", key: "profile_pic" },
                  a(d[2]).createElement("img", {
                    alt: "",
                    className: "_7YDdj",
                    src: this.props.profilePictureUrl,
                  })
                )
              : a(d[2]).createElement(r(d[3]).BorderedIcon, {
                  alt: r(d[4])(2933),
                  icon: r(d[3]).ICONS.USER_OUTLINE_24_GREY9,
                  size: r(d[3]).CORE_CONSTANTS.AVATAR_SIZES.large,
                });
          }),
          (n.$ProfilePicAdder4 = function () {
            return !!this.props.profilePictureUrl;
          }),
          (n.$ProfilePicAdder5 = function () {
            if (
              null == this.props.secondaryButtonText ||
              "" === this.props.secondaryButtonText
            )
              return null;
            var t =
              null == this.props.profilePictureUrl ||
              "" === this.props.profilePictureUrl
                ? this.props.onSecondaryButtonClick
                : this.handleSelectButtonClick;
            return a(d[2]).createElement(
              "button",
              { className: this.props.secondaryButtonClass, onClick: t },
              this.props.secondaryButtonText
            );
          }),
          (n.render = function () {
            var t = this;
            return a(d[2]).createElement(
              "section",
              { className: this.props.className },
              a(d[2]).createElement(i(d[5]), {
                bodyText:
                  null != this.props.bodyText && "" !== this.props.bodyText
                    ? this.props.bodyText
                    : r(d[4])(27),
                buttonText: this.$ProfilePicAdder4()
                  ? r(d[4])(2751)
                  : r(d[4])(2777),
                headerText:
                  void 0 !== this.props.headerText &&
                  "" !== this.props.headerText
                    ? this.props.headerText
                    : r(d[4])(1421),
                icon: this.$ProfilePicAdder3(),
                isProcessing: this.props.profilePicUploadIsInFlight,
                onButtonClick: this.$ProfilePicAdder4()
                  ? this.handleNextButtonClick
                  : this.handleSelectButtonClick,
              }),
              a(d[2]).createElement(i(d[6]), {
                analyticsContext: this.props.analyticsContext,
                hasExistingPic: this.$ProfilePicAdder4(),
                ref: function (o) {
                  return (t.$ProfilePicAdder2 = o);
                },
                skipEditMenu: !!i(d[7])._(
                  "ig_web_nux_universe",
                  "d71f5281d23877fb16e51afe6fa0db15"
                ),
              }),
              this.$ProfilePicAdder5()
            );
          }),
          o
        );
      })(a(d[2]).Component),
      o = r(d[11]).connect(
        null,
        function (t) {
          return {
            onNextButtonClick: function () {
              t(r(d[8]).syncProfilePic(i(d[9]).regInterstitialPage)),
                t(
                  r(d[10]).showToast({
                    text: r(d[8]).PROFILE_PIC_ADDED_TOAST_MESSAGE,
                    persistOnNavigate: !0,
                  })
                );
            },
          };
        },
        null,
        { forwardRef: !0 }
      )(t);
    e.default = o;
  },
  7667727,
  [
    7667728, 13369428, 3, 13434927, 13369406, 4653176, 13435253, 13369520,
    13369744, 13369600, 13369752, 5,
  ]
);
__d(function () {}, 7667728, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var t = function (t) {
      return a(d[1]).createElement(
        "section",
        { className: i(d[2])("ABCxa", t.className) },
        a(d[1]).createElement(
          "div",
          { className: "JErX0" },
          a(d[1]).createElement("div", { className: "ig3mj" }, t.icon),
          a(d[1]).createElement("div", { className: "olLwo" }, t.headerText),
          a(d[1]).createElement("div", { className: "f5C5x" }, t.bodyText),
          !t.hideAction &&
            a(d[1]).createElement(
              r(d[3]).Button,
              {
                disabled: t.buttonDisabled,
                loading: t.isProcessing,
                onClick: t.onButtonClick,
              },
              t.buttonText
            ),
          t.footer
        )
      );
    };
    t.defaultProps = { hideAction: !1 };
    var n = t;
    e.default = n;
  },
  4653176,
  [4653177, 3, 13434933, 13434927]
);
__d(function () {}, 4653177, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function n(s, t) {
      return (
        void 0 === t && (t = null),
        s.sidecarChildren && s.sidecarChildren.length
          ? n(s.sidecarChildren[0])
          : !0 === s.isVideo
          ? null
          : null != s.src && "" !== s.src && s.displayResources
          ? {
              type: r(d[0]).PREFETCHED_IMAGE,
              id: s.id,
              src: s.src,
              srcSet: s.displayResources,
              intrinsicDimensions: i(d[1])(s.dimensions),
            }
          : null
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = [],
      t = r(d[4]).connect(function (t, l) {
        var u = l.getResourceFromPost || n,
          c = r(d[2]).getCurrentReel(t),
          o = t.stories.currentReelItemIndex;
        return {
          currentPostId: null != c && null != c.itemIds ? c.itemIds[o] : null,
          enabled:
            null == l.viewKey ||
            !!t.mediaPrefetches.isEnabledForView.get(l.viewKey),
          resources: (l.postIds || s)
            .map(function (n) {
              return u(r(d[3]).getPostById(t, n), c);
            })
            .filter(Boolean),
        };
      })(r(d[0]).MediaPrefetcher);
    e.default = t;
  },
  3801276,
  [3801205, 13434908, 13369525, 3801128, 5]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var t = "PREFETCHED_IMAGE",
      n = new Set(),
      o = new Set(),
      c = new Set(),
      l = [],
      s = 1e4,
      u = (function (u) {
        function f() {
          for (var t, h = arguments.length, p = new Array(h), P = 0; P < h; P++)
            p[P] = arguments[P];
          return (
            (t = u.call.apply(u, [this].concat(p)) || this),
            (t.state = { next: null }),
            (t.$MediaPrefetcher4 = function (t) {
              return n.has(t) || o.has(t);
            }),
            (t.$MediaPrefetcher1 = function () {
              if (null == t.props.postIds) return !1;
              var n = !0,
                o = !1,
                c = void 0;
              try {
                for (
                  var l, s = t.props.resources[Symbol.iterator]();
                  !(n = (l = s.next()).done);
                  n = !0
                ) {
                  var u = l.value;
                  if (!t.$MediaPrefetcher4(u.id)) return !1;
                }
              } catch (t) {
                (o = !0), (c = t);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (o) throw c;
                }
              }
              return !0;
            }),
            (t.$MediaPrefetcher3 = function () {
              var o = t.state.next;
              if (null != o && !c.has(o.id)) {
                var u = setTimeout(function () {
                  n.has(o.id) || t.$MediaPrefetcher5(o.id);
                }, s);
                c.add(o.id), l.push(u);
              }
            }),
            (t.$MediaPrefetcher2 = function () {
              t.props.resources.length > 0 &&
                (r(d[2]).logAction_DEPRECATED("mediaPrefetchComplete", {
                  successCount: n.size,
                  timeoutCount: o.size,
                  eligibleResourceCount: t.props.resources.length,
                  viewKey: t.props.viewKey,
                }),
                i(d[3]).incr("web.media_prefetch.complete")),
                null != t.props.onLoadComplete && t.props.onLoadComplete();
            }),
            (t.$MediaPrefetcher5 = function (n) {
              r(d[2]).logAction_DEPRECATED("mediaPrefetchTimedOut", {
                resource: t.state.next,
              }),
                i(d[3]).incr("web.media_prefetch.timeout"),
                o.add(n),
                c.delete(n),
                t.setState(f.prefetchNext(t.props)),
                t.$MediaPrefetcher1() && t.$MediaPrefetcher2();
            }),
            (t.$MediaPrefetcher6 = function () {
              var o = t.state.next;
              null != o &&
                (r(d[2]).logAction_DEPRECATED("mediaPrefetchSuccess", {
                  resource: t.state.next,
                }),
                i(d[3]).incr("web.media_prefetch.success"),
                n.add(o.id),
                t.setState(f.prefetchNext(t.props))),
                t.$MediaPrefetcher1() && t.$MediaPrefetcher2();
            }),
            t
          );
        }
        i(d[1])(f, u),
          (f.getDerivedStateFromProps = function (t) {
            return f.prefetchNext(t);
          });
        var h = f.prototype;
        return (
          (h.componentDidMount = function () {
            this.$MediaPrefetcher1()
              ? this.$MediaPrefetcher2()
              : this.$MediaPrefetcher3();
          }),
          (h.componentDidUpdate = function () {
            this.$MediaPrefetcher3();
          }),
          (h.componentWillUnmount = function () {
            c.clear(), o.clear();
            var t = !0,
              n = !1,
              s = void 0;
            try {
              for (
                var u, f = l[Symbol.iterator]();
                !(t = (u = f.next()).done);
                t = !0
              ) {
                var h = u.value;
                clearTimeout(h);
              }
            } catch (t) {
              (n = !0), (s = t);
            } finally {
              try {
                t || null == f.return || f.return();
              } finally {
                if (n) throw s;
              }
            }
            l.length = 0;
          }),
          (h.shouldComponentUpdate = function (t, n) {
            return (
              this.props.enabled !== t.enabled || this.state.next !== n.next
            );
          }),
          (f.prefetchNext = function (t) {
            var c = t.resources;
            if (!t.enabled) return null;
            var l = !0,
              s = !1,
              u = void 0;
            try {
              for (
                var f, h = c[Symbol.iterator]();
                !(l = (f = h.next()).done);
                l = !0
              ) {
                var p = f.value;
                if (!n.has(p.id) && !o.has(p.id)) return { next: p };
              }
            } catch (t) {
              (s = !0), (u = t);
            } finally {
              try {
                l || null == h.return || h.return();
              } finally {
                if (s) throw u;
              }
            }
            return { next: null };
          }),
          (h.render = function () {
            var n = this.props,
              o = n.currentPostId,
              c = n.enabled,
              l = n.layoutWrapper,
              s = this.state.next;
            if (null == s || !c) return null;
            var u =
              !this.$MediaPrefetcher4(s.id) &&
              (null == o || (null != o && o !== s.id)) &&
              (s.type === t
                ? a(d[4]).createElement(i(d[5]), {
                    className: "ZIm78",
                    key: s.src,
                    onError: this.$MediaPrefetcher6,
                    onLoad: this.$MediaPrefetcher6,
                    src: s.src,
                    srcSet: s.srcSet,
                  })
                : a(d[4]).createElement(i(d[6]), {
                    className: "ZIm78",
                    key: s.src,
                    onError: this.$MediaPrefetcher6,
                    onLoaded: this.$MediaPrefetcher6,
                    preloadOnly: !0,
                    sources: s.srcSet,
                  }));
            return a(d[4]).createElement(l, { resource: s }, u);
          }),
          f
        );
      })(a(d[4]).Component);
    (u.defaultProps = {
      enabled: !0,
      layoutWrapper: function (t) {
        return t.children;
      },
    }),
      (e.PREFETCHED_IMAGE = t),
      (e.PREFETCHED_VIDEO = "PREFETCHED_VIDEO"),
      (e.TIMEOUT_DURATION = s),
      (e.MediaPrefetcher = u),
      (e._resetState = function () {
        n.clear(), c.clear(), o.clear();
      });
  },
  3801205,
  [3801206, 13369428, 13369462, 13369438, 3, 3801201, 3801203]
);
__d(function () {}, 3801206, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function o(o, t) {
      var n = Object.keys(o);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(o);
        t &&
          (s = s.filter(function (t) {
            return Object.getOwnPropertyDescriptor(o, t).enumerable;
          })),
          n.push.apply(n, s);
      }
      return n;
    }
    function t(t) {
      for (var n = 1; n < arguments.length; n++) {
        var s = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? o(s, !0).forEach(function (o) {
              i(d[0])(t, o, s[o]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : o(s).forEach(function (o) {
              Object.defineProperty(
                t,
                o,
                Object.getOwnPropertyDescriptor(s, o)
              );
            });
      }
      return t;
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function (o) {
        function n(t) {
          var n;
          return (
            (n = o.call(this, t) || this),
            (n.$ResponsiveVideo4 = function (o) {
              (n.$ResponsiveVideo2 = o),
                n.props.videoRef && n.props.videoRef(o);
            }),
            (n.state = { width: null }),
            n
          );
        }
        i(d[1])(n, o);
        var s = n.prototype;
        return (
          (s.$ResponsiveVideo1 = function () {
            return i(d[2])(this.$ResponsiveVideo2).getBoundingClientRect()
              .width;
          }),
          (s.$ResponsiveVideo3 = function () {
            return this.$ResponsiveVideo1() * (window.devicePixelRatio || 1);
          }),
          (s.$ResponsiveVideo5 = function (o, t, n) {
            return null == o
              ? t
              : this.props.downgradeVideoResolution
              ? t.configWidth < o.configWidth
                ? t
                : o
              : o.configWidth < n && t.configWidth > o.configWidth
              ? t
              : t.configWidth > n && t.configWidth <= o.configWidth
              ? t
              : o;
          }),
          (s.$ResponsiveVideo6 = function (o) {
            var t = null,
              n = null,
              s = [],
              c = !0,
              u = !1,
              l = void 0;
            try {
              for (
                var f, p = this.props.sources[Symbol.iterator]();
                !(c = (f = p.next()).done);
                c = !0
              ) {
                var v = f.value;
                switch (v.profile) {
                  case r(d[3]).PROFILE_MAIN:
                    t = this.$ResponsiveVideo5(t, v, o);
                    break;
                  case r(d[3]).PROFILE_BASELINE:
                    n = this.$ResponsiveVideo5(n, v, o);
                    break;
                  default:
                    i(d[4])(
                      "got video candidate without a supported profile: " +
                        String(v.profile)
                    ),
                      s.push(v);
                }
              }
            } catch (o) {
              (u = !0), (l = o);
            } finally {
              try {
                c || null == p.return || p.return();
              } finally {
                if (u) throw l;
              }
            }
            return [].concat(
              i(d[5])(null != t ? [t] : []),
              i(d[5])(null != n ? [n] : []),
              s
            );
          }),
          (s.componentDidMount = function () {
            var o = this;
            a(d[6]).measure(function () {
              if (!o.$ResponsiveVideo7) {
                var t = o.$ResponsiveVideo3();
                a(d[6]).mutate(function () {
                  o.$ResponsiveVideo7 || o.setState({ width: t });
                });
              }
            });
          }),
          (s.componentWillUnmount = function () {
            this.$ResponsiveVideo7 = !0;
          }),
          (s.render = function () {
            var o = this.state.width,
              n = this.props,
              s = n.autoPlay,
              c = n.className,
              u =
                (n.downgradeImageResolution,
                n.downgradeVideoResolution,
                n.forwardedRef),
              l = (n.imageResolution, n.isDataSaverMode, n.preloadOnly),
              f = (n.sources, n.style),
              p =
                (n.toggleDataSaverConfig,
                n.videoRef,
                i(d[7])(n, [
                  "autoPlay",
                  "className",
                  "downgradeImageResolution",
                  "downgradeVideoResolution",
                  "forwardedRef",
                  "imageResolution",
                  "isDataSaverMode",
                  "preloadOnly",
                  "sources",
                  "style",
                  "toggleDataSaverConfig",
                  "videoRef",
                ])),
              v = Object.freeze(t({}, p, {}, null != s ? { autoPlay: s } : {}));
            if (null == o)
              return a(d[8]).createElement("video", {
                className: c,
                crossOrigin: i(d[9])(),
                ref: this.$ResponsiveVideo4,
                style: f,
              });
            if (l) {
              var h = this.props,
                R = h.onError,
                y = h.onLoaded,
                O = this.$ResponsiveVideo6(o);
              return (
                null != R &&
                null != y &&
                a(d[8]).createElement(i(d[10]), {
                  onError: R,
                  onLoaded: y,
                  src: O[0].src,
                  timeout: r(d[11]).TIMEOUT_DURATION,
                })
              );
            }
            return !0 === s && r(d[12]).isBrowser("Safari >= 15")
              ? a(d[8]).createElement(
                  "video",
                  i(d[13])(
                    {
                      className: c,
                      crossOrigin: i(d[9])(),
                      ref: u || this.$ResponsiveVideo4,
                      style: f,
                    },
                    v,
                    { src: this.$ResponsiveVideo6(o)[0].src }
                  )
                )
              : a(d[8]).createElement(
                  "video",
                  i(d[13])(
                    {
                      className: c,
                      crossOrigin: i(d[9])(),
                      ref: u || this.$ResponsiveVideo4,
                      style: f,
                    },
                    v
                  ),
                  this.$ResponsiveVideo6(o).map(function (o, t) {
                    return a(d[8]).createElement("source", {
                      key: t,
                      src: o.src,
                      type: o.mimeType,
                    });
                  })
                );
          }),
          n
        );
      })(a(d[8]).PureComponent),
      s = i(d[14])(
        i(d[15])(
          i(d[16])(function (o, t) {
            var n = o.sources,
              s = t.sources;
            if (n === s) return !1;
            if (n.length !== s.length) return !0;
            for (var c = 0; c < n.length; ++c)
              if (n[c].src !== s[c].src) return !0;
            return !1;
          })(n)
        )
      );
    e.default = s;
  },
  3801203,
  [
    13369345, 13369428, 13434908, 13369654, 13369445, 13369409, 13369596,
    13369417, 3, 13369843, 3801204, 3801205, 13369353, 13369825, 13369842,
    3801202, 13435284,
  ]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = function (t) {
        var n = r(d[0]).useState(function () {
            return new XMLHttpRequest();
          }),
          o = i(d[1])(n, 1)[0];
        r(d[0]).useEffect(
          function () {
            var n = t.onError,
              u = t.onLoaded,
              s = t.onTimeout,
              c = t.src,
              f = t.timeout;
            return (
              o.open("GET", c, !0),
              (o.responseType = "blob"),
              (o.onload = function (t) {
                200 === o.status ? u() : n();
              }),
              null != s && (o.ontimeout = s),
              (o.timeout = 1e3 * f),
              o.send(),
              function () {
                o.abort();
              }
            );
          },
          [t, o]
        );
      },
      n = function (n) {
        return t(n), null;
      };
    e.default = n;
  },
  3801204,
  [3, 69]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    var O;
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = {
        addFirstPhoto: "addFirstPhoto",
        addPhone: "addPhone",
        connectToFacebook: "connectToFacebook",
        editProfile: "editProfile",
        editProfilePhoto: "editProfilePhoto",
      },
      t = {
        bodyText: a(d[0]).FIRST_PHOTO_BODY,
        buttonText: a(d[0]).FIRST_PHOTO_CTA,
        headerText: a(d[0]).FIRST_PHOTO_HEADER,
        icon: r(d[1]).ICONS.CAMERA_OUTLINE_24_GREY9,
        iconAlt: a(d[0]).FIRST_PHOTO_BODY,
      },
      _ = {
        bodyText: a(d[0]).PHONE_BODY,
        buttonText: a(d[0]).PHONE_CTA,
        headerText: a(d[0]).PHONE_HEADER,
        icon: r(d[1]).ICONS.CALL_OUTLINE_24_GREY9,
        iconAlt: a(d[0]).PHONE_BODY,
      },
      E = {
        bodyText: a(d[0]).FACEBOOK_BODY,
        buttonText: a(d[0]).FACEBOOK_CTA,
        headerText: a(d[0]).FACEBOOK_HEADER,
        icon: r(d[1]).ICONS.FACEBOOK_CIRCLE_OUTLINE_24_GREY9,
        iconAlt: a(d[0]).FACEBOOK_BODY,
      },
      T = {
        bodyText: a(d[0]).EDIT_PROFILE_BODY,
        buttonText: a(d[0]).EDIT_PROFILE_CTA,
        headerText: a(d[0]).EDIT_PROFILE_HEADER,
        icon: r(d[1]).ICONS.USER_OUTLINE_24_GREY9,
        iconAlt: a(d[0]).EDIT_PROFILE_BODY,
      },
      P = {
        bodyText: a(d[0]).PROFILE_PHOTO_BODY,
        buttonText: a(d[0]).PROFILE_PHOTO_CTA,
        headerText: a(d[0]).PROFILE_PHOTO_HEADER,
        icon: r(d[1]).ICONS.CAMERA_OUTLINE_24_GREY9,
        iconAlt: a(d[0]).PROFILE_PHOTO_BODY,
      },
      I =
        ((O = {}),
        (O[o.addFirstPhoto] = t),
        (O[o.addPhone] = _),
        (O[o.connectToFacebook] = E),
        (O[o.editProfile] = T),
        (O[o.editProfilePhoto] = P),
        O);
    (e.KEYS = o),
      (e.MODULES = {
        emptyFeed: "emptyFeed",
        feed: "feed",
        profile: "profile",
      }),
      (e.KEY_UNIT_MAPPING = I);
  },
  7667729,
  [3932179, 13434927]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var O = r(d[0])(3450),
      E = r(d[0])(3401),
      _ = r(d[0])(4135),
      T = r(d[0])(102),
      P = r(d[0])(204),
      D = r(d[0])(1813),
      R = r(d[0])(3944),
      A = r(d[0])(1271),
      H = r(d[0])(3789),
      I = r(d[0])(3499),
      F = r(d[0])(3673),
      C = r(d[0])(857),
      L = r(d[0])(2186),
      B = r(d[0])(2651),
      t = r(d[0])(3868),
      N = r(d[0])(1825),
      Y = r(d[0])(3835),
      u = r(d[0])(3799),
      K = r(d[0])(1366);
    (e.GETTING_STARTED = O),
      (e.FIRST_PHOTO_HEADER = E),
      (e.FIRST_PHOTO_BODY = _),
      (e.FIRST_PHOTO_CTA = T),
      (e.FACEBOOK_BODY = P),
      (e.FACEBOOK_COMPLETED = D),
      (e.FACEBOOK_CTA = R),
      (e.FACEBOOK_HEADER = A),
      (e.PROFILE_PHOTO_BODY = H),
      (e.PROFILE_PHOTO_CTA = I),
      (e.PROFILE_PHOTO_HEADER = F),
      (e.PHONE_BODY = C),
      (e.PHONE_COMPLETED = L),
      (e.PHONE_CTA = B),
      (e.PHONE_HEADER = t),
      (e.EDIT_PROFILE_BODY = N),
      (e.EDIT_PROFILE_COMPLETED = Y),
      (e.EDIT_PROFILE_CTA = u),
      (e.EDIT_PROFILE_HEADER = K);
  },
  3932179,
  [13369406]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = r(d[0]).createAsyncComponent({
        resolve: function () {
          return r(d[2])(d[1], "SuggestedUserFeedUnitContainer");
        },
      }),
      n = r(d[0]).createAsyncComponent({
        resolve: function () {
          return r(d[2])(d[3], "InFeedStoryTray");
        },
      }),
      s = i(d[4])(function () {
        return [];
      }),
      o = (function (o) {
        function l() {
          for (var l, c = arguments.length, p = new Array(c), u = 0; u < c; u++)
            p[u] = arguments[u];
          return (
            (l = o.call.apply(o, [this].concat(p)) || this),
            (l.$VirtualFeed1 = function (o) {
              var c = o.index,
                p = o.isVisible,
                u = o.visibleIndex,
                f = l.props,
                _ = f.analyticsContext,
                h = f.itemClassName,
                I = f.items,
                y = f.onPostImpression,
                E = I.get(c);
              if (null == E)
                return (
                  i(d[6])("no item at index=" + c + ", size=" + I.size), null
                );
              switch (E.type) {
                case r(d[7]).GRAPH_IMAGE:
                case r(d[7]).GRAPH_VIDEO:
                case r(d[7]).GRAPH_SIDECAR:
                  return a(d[8]).createElement(i(d[9]), {
                    analyticsContext: _,
                    autoplay: r(d[10]).hasAutoplayEnabledOnFeed({ silent: !0 }),
                    className: h,
                    id: E.postId,
                    isVisible: p,
                    key: E.postId,
                    onImpression: y,
                    Options: s(),
                    position: c,
                    variant: r(d[11]).VARIANTS.feed,
                    visiblePosition: u,
                  });
                case r(d[7]).GRAPH_SUGGESTED_USER_FEED_UNIT:
                  return a(d[8]).createElement(t, {
                    className: h,
                    key: c,
                    position: c,
                    trackingToken: E.trackingInfo.token,
                    type: E.trackingInfo.type,
                    userIds: E.userIds,
                    variant: l.props.variant,
                  });
                case r(d[7]).GRAPH_STORIES_IN_FEED_ITEM:
                  if (
                    !1 ===
                      i(d[12])._(
                        "ig_web_feed_migration_h2_2021",
                        "93f6a0339935be6c26cf5c40a8a78156",
                        { silent: !0 }
                      ) ||
                    !0 ===
                      i(d[12])._(
                        "ig_web_feed_migration_h2_2021",
                        "51e79b60f5be65f18177871b620a4a9f"
                      )
                  ) {
                    var P, S;
                    return a(d[8]).createElement(n, {
                      className: h,
                      filteringTag: E.filteringTag,
                      hideUnitIfSeen: E.hideUnitIfSeen,
                      key:
                        null !== (P = E.trackingToken) && void 0 !== P
                          ? P
                          : "feed_stories",
                      reelIds: E.reelIds,
                      title:
                        null !== (S = E.title) && void 0 !== S
                          ? S
                          : r(d[13]).STORIES_TRAY_IN_FEED_UNIT_TITLE,
                    });
                  }
                  return null;
                default:
                  return i(d[6])("unexpected feed item type: " + E.type), null;
              }
            }),
            l
          );
        }
        i(d[5])(l, o);
        return (
          (l.prototype.render = function () {
            return a(d[8]).createElement(i(d[14]), {
              allowSampledScrollLogging: this.props.allowSampledScrollLogging,
              analyticsContext: this.props.analyticsContext,
              enablePrefetch: !0,
              enablePriorityFetching: !0,
              hasNextPage: this.props.hasNextPage,
              isFetching: this.props.isFetching,
              items: this.props.items,
              onNextPage: this.props.onNextPage,
              prefetchNextPageThreshold: this.props.prefetchNextPageThreshold,
              renderFeedItem: this.$VirtualFeed1,
              visibleCount: this.props.visibleCount,
            });
          }),
          l
        );
      })(a(d[8]).PureComponent);
    e.default = o;
  },
  7667730,
  [
    13435189, 7536640, 68, 7602176, 13369355, 13369428, 13369445, 13369476, 3,
    13173475, 13369519, 13173479, 13369520, 3801166, 13173444,
  ]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var t = (function (t) {
      function n() {
        return t.apply(this, arguments) || this;
      }
      i(d[1])(n, t);
      return (
        (n.prototype.render = function () {
          return a(d[2]).createElement(
            "div",
            { className: "_4RgfU" },
            a(d[2]).createElement(
              "div",
              { className: "SpHho" },
              r(d[3]).ZERO_FREE_BANNER
            )
          );
        }),
        n
      );
    })(a(d[2]).PureComponent);
    e.default = t;
  },
  7667731,
  [7667732, 13369428, 3, 13172933]
);
__d(function () {}, 7667732, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function n() {
      var n = r(d[0]).getSupportedFeatures(),
        t = n.edgeVapidPush,
        s = n.notifications,
        c = n.serviceWorker;
      return (
        !r(d[1]).isLegacyEdgePWA() &&
        (!t || r(d[0]).hasVapid()) &&
        r(d[2]).canUseDOM &&
        s &&
        c &&
        !r(d[3]).needsToConfirmCookies() &&
        !r(d[3]).shouldUsePrivacyFlowTrigger() &&
        window.Notification &&
        window.Notification.permission ===
          r(d[4]).NOTIFICATION_PERMISSION.default &&
        !r(d[5]).isDismissed(r(d[5]).NOTIFICIATIONS_TYPE) &&
        !o()
      );
    }
    function o() {
      return r(d[5]).isSessionDismissedHelper(
        r(d[5]).NOTIFICIATIONS_SESSIONS_TYPE
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = (function (o) {
      function t() {
        for (var t, s = arguments.length, c = new Array(s), u = 0; u < s; u++)
          c[u] = arguments[u];
        return (
          (t = o.call.apply(o, [this].concat(c)) || this),
          (t.state = { showModal: !1 }),
          (t.$NotificationsScreen1 = function () {
            n() &&
              setTimeout(function () {
                t.setState({ showModal: !0 }, function () {
                  i(d[7])._("ig_web_h1_2020_p0_ods_migration_notifications") ||
                    r(d[8]).logAction_DEPRECATED("notificationsNuxShown"),
                    i(d[9]).incr("web.notifications.notifications_nux_shown");
                });
              }, 0);
          }),
          (t.$NotificationsScreen2 = function () {
            t.setState({ showModal: !1 });
          }),
          (t.onAction = function (n) {
            r(d[0]).initalizePush("upsell"), t.$NotificationsScreen2();
          }),
          (t.onClose = function (n) {
            t.$NotificationsScreen2(),
              i(d[7])._("ig_web_h1_2020_p0_ods_migration_notifications") ||
                r(d[8]).logAction_DEPRECATED("notificationsNuxDismissed"),
              i(d[9]).incr("web.notifications.notifications_nux_dismissed"),
              r(d[5]).setDismissSessionEntryHelper(
                r(d[5]).NOTIFICIATIONS_SESSIONS_TYPE
              );
          }),
          t
        );
      }
      i(d[6])(t, o);
      var s = t.prototype;
      return (
        (s.componentDidMount = function () {
          this.$NotificationsScreen1();
        }),
        (s.render = function () {
          return this.state.showModal
            ? a(d[10]).createElement(i(d[11]), {
                onAction: this.onAction,
                onClose: this.onClose,
              })
            : null;
        }),
        t
      );
    })(a(d[10]).PureComponent);
    e.default = t;
  },
  7667733,
  [
    13369993, 13369353, 3276911, 13369351, 13369994, 13369972, 13369428,
    13369403, 13369462, 13369438, 3, 7667734,
  ]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = a(d[0]).createElement("img", {
        alt: "",
        height: "76px",
        src: "/static/images/ico/xxhdpi_launcher.png/99cf3909d459.png",
        width: "76px",
      }),
      n = (function (n) {
        function o() {
          return n.apply(this, arguments) || this;
        }
        i(d[1])(o, n);
        return (
          (o.prototype.render = function () {
            var n = a(d[0]).createElement(r(d[2]).DialogCircleMedia, {
              icon: t,
            });
            return a(d[0]).createElement(
              r(d[2]).Dialog,
              {
                body: a(d[3]).NOTIFICATIONS_MODAL_PARAGRAPH,
                media: n,
                title: a(d[3]).NOTIFICATIONS_MODAL_TITLE,
              },
              a(d[0]).createElement(
                r(d[2]).DialogItem,
                { color: "ig-primary-button", onClick: this.props.onAction },
                a(d[3]).NOTIFICATIONS_MODAL_ACTION
              ),
              a(d[0]).createElement(
                r(d[2]).DialogItem,
                { onClick: this.props.onClose },
                a(d[3]).NOTIFICATIONS_MODAL_SECONDARY_ACTION
              )
            );
          }),
          o
        );
      })(a(d[0]).PureComponent);
    e.default = n;
  },
  7667734,
  [3, 13369428, 13434927, 7667735]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var O = r(d[0])(1197),
      I = r(d[0])(1548),
      A = r(d[0])(2999),
      _ = r(d[0])(3724);
    (e.NOTIFICATIONS_MODAL_PARAGRAPH = O),
      (e.NOTIFICATIONS_MODAL_TITLE = I),
      (e.NOTIFICATIONS_MODAL_ACTION = A),
      (e.NOTIFICATIONS_MODAL_SECONDARY_ACTION = _);
  },
  7667735,
  [13369406]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = a(d[0]).createElement("img", {
        alt: "",
        height: "76px",
        src: "/static/images/ico/xxhdpi_launcher.png/99cf3909d459.png",
        width: "76px",
      }),
      n = (function (n) {
        function o() {
          return n.apply(this, arguments) || this;
        }
        i(d[1])(o, n);
        return (
          (o.prototype.render = function () {
            var n = a(d[0]).createElement(r(d[2]).DialogCircleMedia, {
              icon: t,
            });
            return a(d[0]).createElement(
              r(d[2]).Dialog,
              {
                body: a(d[3]).A2HS_MODAL_PARAGRAPH,
                media: n,
                title: a(d[3]).A2HS_MODAL_TITLE,
              },
              a(d[0]).createElement(
                r(d[2]).DialogItem,
                { color: "ig-primary-button", onClick: this.props.onAction },
                a(d[3]).A2HS_MODAL_ACTION_TITLE
              ),
              a(d[0]).createElement(
                r(d[2]).DialogItem,
                { onClick: this.props.onClose },
                r(d[4]).CANCEL_TEXT
              )
            );
          }),
          o
        );
      })(a(d[0]).PureComponent);
    (e.AddToHomeScreenModalUI = n),
      (e.AddToHomeScreenModal = function () {
        return a(d[0]).createElement(r(d[5]).AddToHomeScreenContainer, {
          addToHomeScreenUI: n,
        });
      });
  },
  3932218,
  [3, 13369428, 13434927, 3932219, 13369754, 3932220]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var _ = r(d[0])(2388),
      A = r(d[0])(468),
      t = r(d[0])(745);
    (e.A2HS_MODAL_PARAGRAPH = _),
      (e.A2HS_MODAL_TITLE = A),
      (e.A2HS_MODAL_ACTION_TITLE = t);
  },
  3932219,
  [13369406]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (c) {
        var t = c.children,
          n = r(d[0]).useState(!1),
          u = i(d[1])(n, 2),
          _ = u[0],
          o = u[1],
          f = r(d[2]).useDispatch();
        return r(d[2]).useSelector(r(d[3]).isFeedCached) &&
          !_ &&
          !0 === i(d[6])._("ig_web_feed_caching_fix")
          ? a(d[0]).createElement(
              i(d[7]),
              {
                onError: function () {
                  o(!0),
                    f(r(d[4]).revertCache()),
                    i(d[5]).incr("web.feed.cache_error");
                },
              },
              t
            )
          : t;
      });
  },
  7667736,
  [3, 69, 5, 13369777, 13369727, 13369438, 13369403, 13435216]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var t = (function (t) {
        function n() {
          for (var n, o = arguments.length, s = new Array(o), l = 0; l < o; l++)
            s[l] = arguments[l];
          return (
            (n = t.call.apply(t, [this].concat(s)) || this),
            (n.$UploadProgressBar1 = function () {
              return a(d[2]).createElement(
                r(d[3]).Box,
                {
                  alignItems: "center",
                  direction: "row",
                  flex: "grow",
                  paddingX: 2,
                },
                a(d[2]).createElement(
                  "div",
                  { className: "AbEQm" },
                  a(d[2]).createElement("div", {
                    className: "Taqwd",
                    style: { width: n.props.progress + "%" },
                  })
                ),
                a(d[2]).createElement(
                  r(d[3]).Box,
                  { marginStart: 2, width: 36 },
                  a(d[2]).createElement(
                    "div",
                    { className: "kuHp8" },
                    n.props.progress + "%"
                  )
                )
              );
            }),
            (n.$UploadProgressBar2 = function () {
              var t = n.props,
                o = t.actionNode,
                s = t.text;
              return a(d[2]).createElement(
                "div",
                { className: "o5gub" },
                a(d[2]).createElement(
                  r(d[3]).Box,
                  {
                    alignItems: "center",
                    direction: "row",
                    flex: "grow",
                    justifyContent: "between",
                  },
                  a(d[2]).createElement(
                    r(d[3]).Text.BodyEmphasized,
                    { display: "inline" },
                    s
                  ),
                  null !== o &&
                    a(d[2]).createElement(r(d[3]).Box, { marginStart: 1 }, o)
                )
              );
            }),
            n
          );
        }
        i(d[1])(n, t);
        return (
          (n.prototype.render = function () {
            var t = this.props,
              n = t.thumbnailURL,
              o = t.status;
            return a(d[2]).createElement(
              "div",
              { className: "TExId" },
              null != n &&
                "" !== n &&
                a(d[2]).createElement(
                  r(d[3]).Box,
                  { marginEnd: 2 },
                  a(d[2]).createElement(i(d[4]), {
                    src: n,
                    isVideo: !0,
                    isSquare: !0,
                  })
                ),
              "uploading" === o
                ? this.$UploadProgressBar1()
                : this.$UploadProgressBar2()
            );
          }),
          n
        );
      })(a(d[2]).PureComponent),
      n = r(d[5]).connect(function (t) {
        return {
          actionNode: t.uploadProgress.actionNode,
          progress: t.uploadProgress.progress,
          text: t.uploadProgress.text,
          status: t.uploadProgress.status,
          thumbnailURL: t.uploadProgress.thumbnailURL,
        };
      })(t);
    e.default = n;
  },
  7667737,
  [7667738, 13369428, 3, 13434927, 6291462, 5]
);
__d(function () {}, 7667738, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var t = function (t) {
      var c = t.src,
        l = t.isVideo,
        s = void 0 !== l && l,
        n = t.isSquare,
        u = void 0 !== n && n;
      return a(d[1]).createElement(
        "div",
        { className: "g5kp1 " + (u ? "_JTHj" : "") },
        a(d[1]).createElement("img", {
          className: "FuaTR",
          src: c,
          alt: r(d[2])(912),
        }),
        s &&
          a(d[1]).createElement(
            "div",
            { className: "cRc_w" },
            a(d[1]).createElement(i(d[3]), null)
          )
      );
    };
    e.default = t;
  },
  6291462,
  [6291463, 3, 13369406, 13173668]
);
__d(function () {}, 6291463, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var o = r(d[0]).useSelector(function (t) {
            return r(d[1]).getSeenCountInStoryTray(t);
          }),
          s = r(d[0]).useDispatch(),
          n = r(d[0]).useSelector(function (t) {
            return {
              broadcasts: r(d[2]).getBroadcastStoryTrayItems(t),
              dataFetchStatus: t.feed.extrasDataFetchStatus,
              feedFilter: r(d[3]).getFeedFilter(t),
              hasOwnReel: r(d[1]).userHasReel(t, i(d[4])(t.users.viewerId)),
              hasSeenZeroNUX: !!t.zero.nuxPreference.story,
              isFullySeen: r(d[1]).getIsFullySeen(t),
              loadingId: t.stories.trayLoadingId,
              newReelCount:
                t.stories.feedTray && t.stories.feedTray.count() - i(d[4])(o),
              reels: r(d[1]).getFeedStoryTrayWithoutOwn(t),
              seenReelCount: o,
              storyPrefetchFinished: t.feed.storyPrefetchComplete,
              traySession: t.stories.traySession,
              viewerId: t.users.viewerId,
              viewportWidth: t.displayProperties.viewportWidth,
            };
          }, r(d[0]).shallowEqual);
        return a(d[8]).createElement(
          r(d[9]).StoryTray,
          i(d[10])({}, t, n, {
            onLoadReel: function (t, o, n) {
              s(r(d[5]).openReelsMedia(t, "reel_feed_timeline", o, n));
            },
            onStoryItemScrollEnter: function (t, o) {
              s(
                r(d[5]).loadReelsMediaForTray(o, t, {
                  batchSize: 15,
                  fetchDistance: 5,
                })
              );
            },
            onUpdateZeroNUXPreference: function () {
              s(r(d[6]).updateZeroNUXPreference(r(d[7]).ZeroNUXMedia.story));
            },
          })
        );
      });
  },
  7667739,
  [
    5, 13369525, 13370066, 13369790, 13434908, 13370075, 13173504, 13369432, 3,
    7667740, 13369825,
  ]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var t = 80,
      o = (function (o) {
        function n() {
          for (var n, s = arguments.length, l = new Array(s), _ = 0; _ < s; _++)
            l[_] = arguments[_];
          return (
            (n = o.call.apply(o, [this].concat(l)) || this),
            (n.state = {
              isZeroBannerEligible: r(d[2]).isZeroRatingSlimEligible(),
              leftVisibleItem: -1,
              rightVisibleItem: -1,
            }),
            (n.didLogComponentLoad = !1),
            (n.didLogStoryTrayLoad = !1),
            (n.$_StoryTray2 = function () {
              var t =
                n.props.dataFetchStatus !==
                r(d[3]).EXTRAS_DATA_FETCH_STATUS.loaded;
              n.didLogComponentLoad || t
                ? !n.didLogStoryTrayLoad &&
                  t &&
                  (r(
                    d[4]
                  ).StoryTrayLoadPerformanceLogger.onStoryTrayLoadSuccess(),
                  (n.didLogStoryTrayLoad = !0))
                : (r(d[4]).StoryTrayLoadPerformanceLogger.onTrayComponentLoad({
                    hasCaching: r(d[5]).hasStoriesCaching(),
                  }),
                  (n.didLogComponentLoad = !0));
            }),
            (n.$_StoryTray3 = function (t, o) {
              n.props.onLoadReel(i(d[6])(n.props.reels), t, o);
            }),
            (n.$_StoryTray4 = function (t, o) {
              var s = n.props.reels ? n.props.reels.get(o - 1) : null;
              i(d[7]).log(function () {
                return {
                  a_pk: Number(t),
                  is_new_reel: n.props.isFullySeen(
                    null === s || void 0 === s ? void 0 : s.id
                  )
                    ? 0
                    : 1,
                  has_my_reel: i(d[6])(n.props.hasOwnReel) ? 1 : 0,
                  new_reel_count: i(d[6])(n.props.newReelCount),
                  pigeon_reserved_keyword_module: "reel_feed_timeline",
                  reel_type: r(d[8]).getTypeForLogging(
                    null === s || void 0 === s ? void 0 : s.type
                  ),
                  tray_position: o,
                  tray_session_id: n.props.traySession,
                  viewed_reel_count: i(d[6])(n.props.seenReelCount),
                };
              });
              var l = {
                containermodule: "reel_feed_timeline",
                event_name: "reel_tray_impression",
                has_my_reel: i(d[6])(n.props.hasOwnReel),
                ig_userid: n.props.viewerId,
                media_author: t,
                new_reel_count: i(d[6])(n.props.newReelCount),
                source_of_action: "reel_feed_timeline",
                tray_position: o,
                tray_session_id: n.props.traySession,
                viewed_reel_count: i(d[6])(n.props.seenReelCount),
              };
              !0 === (null === s || void 0 === s ? void 0 : s.isCloseFriends) &&
                (l.action = "close_friends_story_ring_impression"),
                r(d[8]).logStoriesEvent(l);
            }),
            (n.$_StoryTray5 = function (t, o) {
              i(d[7]).log(function () {
                return {
                  a_pk: Number(t.broadcast_owner),
                  is_new_reel: 0,
                  has_my_reel: i(d[6])(n.props.hasOwnReel) ? 1 : 0,
                  new_reel_count: i(d[6])(n.props.newReelCount),
                  pigeon_reserved_keyword_module: "reel_feed_timeline",
                  reel_type: r(d[9]).getReelTypeForLogging(t),
                  tray_position: o,
                  tray_session_id: n.props.traySession,
                  viewed_reel_count: i(d[6])(n.props.seenReelCount),
                };
              });
            }),
            (n.$_StoryTray6 = function () {
              var t = n.props.broadcasts.size;
              return 0 !== t &&
                r(d[10]).isDesktop() &&
                r(d[11]).hasLiveInStories()
                ? t
                : 0;
            }),
            (n.$_StoryTray7 = function () {
              return 0 !== n.props.broadcasts.size &&
                r(d[10]).isDesktop() &&
                r(d[11]).hasLiveInStories()
                ? n.props.broadcasts
                    .sort(function (t, o) {
                      return (
                        ((null === t || void 0 === t
                          ? void 0
                          : t.ranked_position) || 0) -
                        ((null === o || void 0 === o
                          ? void 0
                          : o.ranked_position) || 0)
                      );
                    })
                    .toList()
                : null;
            }),
            (n.$_StoryTray8 = function (o) {
              var s,
                l,
                _ = o.index,
                y = o.isVisible,
                p = n.$_StoryTray7(),
                c = n.$_StoryTray6(),
                u = n.$_StoryTray9() ? 1 : 0,
                S = {
                  isVisible: y,
                  isZeroBannerEligible: n.state.isZeroBannerEligible,
                  onClick: n.$_StoryTray3,
                  onScrollEnter: n.$_StoryTray4,
                  trayPosition: _,
                  onUpdateZeroNUXPreference: n.props.onUpdateZeroNUXPreference,
                  hasSeenZeroNUX: n.props.hasSeenZeroNUX,
                };
              if (_ < u)
                s = a(d[12]).createElement(
                  i(d[13]),
                  i(d[14])(
                    {
                      hasOwnReel: n.props.hasOwnReel,
                      viewerId: n.props.viewerId,
                    },
                    S
                  )
                );
              else if (_ < c + u && null != p) {
                var T = _ - u,
                  h = p.get(T);
                s =
                  null != h &&
                  a(d[12]).createElement(i(d[15]), {
                    broadcast: h,
                    isVisible: y,
                    onScrollEnter: n.$_StoryTray5,
                    trayPosition: _,
                  });
              } else {
                var f = _ - c - u,
                  v = i(d[6])(n.props.reels);
                (l = i(d[6])(v.get(f))),
                  (s = a(d[12]).createElement(
                    i(d[16]),
                    i(d[14])({ reel: l }, S)
                  ));
              }
              return a(d[12]).createElement(
                "div",
                {
                  className: "Fd_fQ",
                  key: l ? l.id : _,
                  style:
                    (r(d[10]).isDesktop() &&
                      !0 ===
                        i(d[17])._(
                          "ig_web_stories_tray",
                          "d8118551b4099d61db8828c411077db5"
                        )) ||
                    !r(d[5]).hasStoriesCaching()
                      ? void 0
                      : { transform: "translateX(" + _ * t + "px)" },
                },
                s
              );
            }),
            (n.$_StoryTray9 = function () {
              if (r(d[10]).isMobile()) return !0;
              var t =
                r(d[10]).isDesktop() &&
                !0 ===
                  i(d[17])._(
                    "ig_web_stories_tray",
                    "d8118551b4099d61db8828c411077db5"
                  );
              return (
                (!0 !== n.props.hideOwnStory || !t) && !!n.props.hasOwnReel
              );
            }),
            (n.$_StoryTray10 = function () {
              var t = n.props.reels,
                o = n.$_StoryTray9() ? 1 : 0,
                s = n.$_StoryTray6();
              return (null != t ? t.count() : 0) + o + s;
            }),
            (n.$_StoryTray11 = function () {
              return (
                n.props.dataFetchStatus ===
                r(d[3]).EXTRAS_DATA_FETCH_STATUS.loading
              );
            }),
            (n.$_StoryTray12 = function () {
              var t = n.props,
                o = t.reels,
                s = t.seenReelCount;
              return o && -1 !== s && o.count() - s > 0;
            }),
            (n.$_StoryTray13 = function (t) {
              var o = t.leftPct,
                s = t.rightPct,
                l = n.state,
                _ = l.leftVisibleItem,
                y = l.rightVisibleItem,
                p = Math.floor(o),
                c = Math.ceil(s);
              (_ === p && y === c) ||
                n.setState({ leftVisibleItem: p, rightVisibleItem: c });
            }),
            (n.$_StoryTray14 = function (t, o) {
              var s = n.$_StoryTray10();
              return Array.from(Array(s), function (s, l) {
                return n.$_StoryTray8({
                  index: l,
                  isVisible: l >= t && l <= o,
                });
              });
            }),
            n
          );
        }
        i(d[1])(n, o);
        var s = n.prototype;
        return (
          (s.componentDidMount = function () {
            this.$_StoryTray1(), this.$_StoryTray2();
          }),
          (s.componentDidUpdate = function () {
            this.$_StoryTray1(), this.$_StoryTray2();
          }),
          (s.$_StoryTray1 = function () {
            null != this.props.reels && this.props.onDisplayDone();
          }),
          (s.render = function () {
            var o = this.props,
              n = o.feedFilter,
              s = o.reels,
              l = o.viewportWidth,
              _ = this.state,
              y = _.leftVisibleItem,
              p = _.rightVisibleItem,
              c = this.$_StoryTray11(),
              u = this.$_StoryTray10(),
              S = this.$_StoryTray12(),
              T = Math.max(10, Math.ceil(l / t)),
              h =
                r(d[10]).isDesktop() &&
                !0 ===
                  i(d[17])._(
                    "ig_web_stories_tray",
                    "d8118551b4099d61db8828c411077db5"
                  )
                  ? a(d[12]).createElement(
                      i(d[18]),
                      {
                        animationDuration: 500,
                        autoScrollOnFocus: !1,
                        disableScrollSnap: !0,
                        enableMouseSwipe:
                          !0 ===
                          i(d[17])._(
                            "ig_web_stories_tray",
                            "34fed6fde2759ba172c0166eda460d91"
                          ),
                        gutterWidth: 10,
                        itemWidth: 80,
                        onVisibilityChange: this.$_StoryTray13,
                        overscan: 5,
                        pagerVariant: "stories",
                        pageSize: 4,
                      },
                      this.$_StoryTray14(y, p)
                    )
                  : a(d[12]).createElement(i(d[19]), {
                      className:
                        "qf6s4 " + (r(d[5]).hasStoriesCaching() ? "lGuO0" : ""),
                      containerSize: "auto",
                      direction: "horizontal",
                      estimatedItemSize: t,
                      initialRenderCount: T,
                      itemCount: u,
                      overscanCount: 4,
                      renderer: this.$_StoryTray8,
                    }),
              f = a(d[12]).createElement(
                "div",
                { className: "ku8Bn " + (null == s ? "p2GVa" : "") },
                h
              );
            return a(d[12]).createElement(
              a(d[12]).Fragment,
              null,
              ((r(d[10]).isDesktop() && u > 0) ||
                r(d[10]).isMobile() ||
                null == s) &&
                a(d[12]).createElement(
                  i(d[20]),
                  null,
                  c &&
                    a(d[12]).createElement(
                      "div",
                      { className: "u6s6p " + (c ? "" : "UZmR1") },
                      c &&
                        a(d[12]).createElement(
                          r(d[21]).Box,
                          {
                            alignItems: "center",
                            direction: "row",
                            justifyContent: "center",
                          },
                          a(d[12]).createElement(r(d[21]).Spinner, null)
                        )
                    ),
                  null == s ? a(d[12]).createElement(i(d[22]), null) : f
                ),
              r(d[10]).isMobile() &&
                !0 === S &&
                a(d[12]).createElement(
                  "div",
                  { className: "RN9GI" },
                  a(d[12]).createElement(i(d[23]), {
                    anchor: a(d[24]).QP_TOOLTIP_ANCHORS.story_tray_item,
                    filter: n,
                    slot: a(d[24]).SLOTS.feed,
                    trigger: a(d[24]).TRIGGERS.instagram_feed_tool_tip,
                  })
                ),
              i(d[25])._("ig_web_interaction_tracing") &&
                a(d[12]).createElement(r(d[26]).HeroHoldTrigger, {
                  description: "StoryTray",
                  hold: null == s,
                })
            );
          }),
          n
        );
      })(a(d[12]).PureComponent),
      n = r(d[27]).displayDoneBlocking("StoryTray", i(d[28])(o));
    (e.MOBILE_TRAY_COL_WIDTH = t), (e.StoryTray = n);
  },
  7667740,
  [
    7667741, 13369428, 13369432, 13369629, 13369764, 13369519, 13434908,
    7471111, 13369742, 13370070, 13369353, 13370063, 3, 7667742, 13369825,
    7667748, 7667744, 13369520, 13173509, 13435083, 7667749, 13434927, 7667751,
    13435300, 13369791, 13369403, 13369860, 13435109, 3801202,
  ]
);
__d(function () {}, 7667741, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = { pigeon: !1, falco: !0 },
      n = (function () {
        function n() {}
        return (
          (n.log = function (n) {
            i(d[0])._("ig_web_logging_stories") &&
              r(d[1]).FalcoLogger.log("reel_tray_impression", n(), {}, o);
          }),
          n
        );
      })();
    e.default = n;
  },
  7471111,
  [13369403, 13369414]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var t = (function (t) {
        function n() {
          for (var n, l = arguments.length, p = new Array(l), o = 0; o < l; o++)
            p[o] = arguments[o];
          return (
            (n = t.call.apply(t, [this].concat(p)) || this),
            (n.$OwnStoryTrayItem1 = function () {
              r(d[2]).isMobile() &&
                (r(d[3]).isDismissed(r(d[3]).USE_THE_APP_LI_SHEET) ||
                !0 !==
                  i(d[4])._(
                    "ig_web_h1_2020_app_upsells",
                    "af069090f87d0afc94dca34ec07d2b87",
                    { silent: !0 }
                  )
                  ? i(d[6])(n.$OwnStoryTrayItem2).handleStoryCreationClick()
                  : n.props.openAppUpsellLoggedInSheet(
                      i(d[5]).StoryCreationPage
                    ));
            }),
            (n.$OwnStoryTrayItem3 = function (t, l) {
              n.props.onOpenReel(t, l, "reel_feed_timeline");
            }),
            n
          );
        }
        i(d[1])(n, t);
        return (
          (n.prototype.render = function () {
            var t = this,
              n = this.props,
              l = n.hasOwnReel,
              p = n.profilePictureUrl,
              o = i(d[7])(n, ["hasOwnReel", "profilePictureUrl"]);
            if (!0 === l) {
              o.isAppUpsellLoggedInSheetOpen,
                o.onOpenReel,
                o.openAppUpsellLoggedInSheet;
              var s = o.reel,
                c =
                  (o.viewerId,
                  i(d[7])(o, [
                    "isAppUpsellLoggedInSheetOpen",
                    "onOpenReel",
                    "openAppUpsellLoggedInSheet",
                    "reel",
                    "viewerId",
                  ]));
              return (
                null != s || i(d[8])(0),
                a(d[9]).createElement(
                  i(d[10]),
                  i(d[11])({}, c, { onClick: this.$OwnStoryTrayItem3, reel: s })
                )
              );
            }
            return a(d[9]).createElement(
              "button",
              { className: "JdY43", onClick: this.$OwnStoryTrayItem1 },
              a(d[9]).createElement(i(d[12]), {
                className: "ctM9u",
                isLink: !1,
                profilePictureUrl: p,
                size: 56,
              }),
              this.props.isAppUpsellLoggedInSheetOpen &&
                !0 ===
                  i(d[4])._(
                    "ig_web_h1_2020_app_upsells",
                    "af069090f87d0afc94dca34ec07d2b87",
                    { silent: !0 }
                  )
                ? a(d[9]).createElement(i(d[13]), {
                    pageID: i(d[5]).StoryCreationPage,
                  })
                : i(d[4])._l("ig_web_h1_2020_app_upsells"),
              a(d[9]).createElement(
                "div",
                { className: "XdXBI" },
                r(d[14]).YOUR_STORY_TEXT
              ),
              a(d[9]).createElement(
                "div",
                { className: "TiuNS" },
                a(d[9]).createElement(i(d[15]), {
                  alt: r(d[16])(2355),
                  color: "ig-primary-button",
                  size: 16,
                })
              ),
              a(d[9]).createElement(i(d[17]), {
                entryPoint: "your_story_placeholder",
                ref: function (n) {
                  return (t.$OwnStoryTrayItem2 = n);
                },
              })
            );
          }),
          n
        );
      })(a(d[9]).Component),
      n = r(d[22]).connect(
        function (t, n) {
          var l = r(d[18]).getUserById(t, n.viewerId);
          return {
            isAppUpsellLoggedInSheetOpen: t.upsell.isAppUpsellLoggedInSheetOpen,
            profilePictureUrl: l.profilePictureUrl,
            reel: r(d[19]).getReel(t, n.viewerId),
          };
        },
        function (t) {
          return {
            openAppUpsellLoggedInSheet: function (n) {
              t(r(d[20]).openAppUpsellLoggedInSheet(n));
            },
            onOpenReel: function (n, l, p) {
              t(r(d[21]).openReel(n, l, p));
            },
          };
        }
      )(t);
    e.default = n;
  },
  7667742,
  [
    7667743, 13369428, 13369353, 13369972, 13369520, 13369600, 13434908,
    13369417, 3276909, 3, 7667744, 13369825, 13434974, 7667745, 3801166,
    7667746, 13369406, 7667722, 13369740, 13369525, 13369977, 13370075, 5,
  ]
);
__d(function () {}, 7667743, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = 0,
      o = (function (o) {
        function s() {
          for (var s, n = arguments.length, p = new Array(n), l = 0; l < n; l++)
            p[l] = arguments[l];
          return (
            (s = o.call.apply(o, [this].concat(p)) || this),
            (s.state = { isZeroNuxOpen: !1 }),
            (s.$StoryTrayItem1 = i(d[1])(function (o) {
              return "StoryTrayItem_" + t++;
            })),
            (s.$StoryTrayItem3 = function () {
              !0 === s.props.isZeroBannerEligible
                ? s.showZeroNuxOrPlay()
                : s.props.onClick(
                    s.props.reel.id,
                    s.$StoryTrayItem1(s.props.reel.id)
                  );
            }),
            (s.$StoryTrayItem2 = function () {
              s.props.onScrollEnter(
                i(d[2])(s.props.reel.userId),
                s.props.trayPosition
              );
            }),
            (s.$StoryTrayItem4 = function (t) {
              t && t.stopPropagation(), s.setState({ isZeroNuxOpen: !1 });
            }),
            (s.$StoryTrayItem5 = function (t) {
              t.stopPropagation();
              var o = s.props.onUpdateZeroNUXPreference;
              o && o(),
                s.setState({ isZeroNuxOpen: !1 }),
                s.props.onClick(
                  s.props.reel.id,
                  s.$StoryTrayItem1(s.props.reel.id)
                );
            }),
            (s.showZeroNuxOrPlay = function () {
              !0 !== s.props.hasSeenZeroNUX
                ? s.setState({ isZeroNuxOpen: !0 })
                : s.props.onClick(
                    s.props.reel.id,
                    s.$StoryTrayItem1(s.props.reel.id)
                  );
            }),
            s
          );
        }
        i(d[0])(s, o);
        var n = s.prototype;
        return (
          (n.componentDidMount = function () {
            this.props.isVisible && this.$StoryTrayItem2();
          }),
          (n.componentDidUpdate = function (t) {
            !t.isVisible && this.props.isVisible && this.$StoryTrayItem2();
          }),
          (n.render = function () {
            var t = this.props,
              o = t.isMuted,
              s = t.isSeen,
              n = t.isViewer,
              p = t.profilePictureUrl,
              l = t.username,
              u = n ? r(d[3]).YOUR_STORY_TEXT : l,
              y = null;
            return (
              !0 === this.props.isZeroBannerEligible &&
                this.state.isZeroNuxOpen &&
                (y = a(d[4]).createElement(i(d[5]), {
                  mediaKeyword: r(d[6]).ZeroNUXMedia.story,
                  onAction: this.$StoryTrayItem5,
                  onClose: this.$StoryTrayItem4,
                  profilePictureUrl: p,
                })),
              a(d[4]).createElement(r(d[7]).StoryTrayItemBase, {
                clickTargetElementId: this.$StoryTrayItem1(this.props.reel.id),
                isMuted: o || !1,
                isSeen: s,
                label: u,
                nux: y,
                onClick: this.$StoryTrayItem3,
                profilePictureUrl: p,
                username: this.props.username,
              })
            );
          }),
          s
        );
      })(a(d[4]).PureComponent),
      s = r(d[10]).connect(function (t, o) {
        var s = r(d[8]).getUserById(t, i(d[2])(o.reel.userId));
        return {
          isMuted: o.reel.muted,
          isSeen: r(d[9]).isReelSeen(o.reel),
          isViewer: t.users.viewerId === o.reel.id,
          profilePictureUrl: i(d[2])(s.profilePictureUrl),
          username: i(d[2])(s.username),
        };
      })(o);
    e.default = s;
  },
  7667744,
  [
    13369428, 13369475, 13434908, 3801166, 3, 7602180, 13369432, 13435261,
    13369740, 13369525, 5,
  ]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]), r(d[1]);
    var n = 66,
      t = !1,
      c = 64,
      l = r(d[2])(402),
      u = r(d[2])(623);
    e.default = function (s) {
      var o = s.profilePictureUrl;
      r(d[3]).useEffect(function () {
        r(d[4]).logZeroEvent({ event_name: "nux_impression" });
      }, []);
      var f = {
        nuxTitle: u,
        nuxAction: l,
        nuxIcon: a(d[3]).createElement(
          "div",
          { className: "TFHq6" },
          a(d[3]).createElement(i(d[5]), {
            className: "_0zJgH",
            seen: t,
            size: c,
          }),
          null != o &&
            "" !== o &&
            a(d[3]).createElement(i(d[6]), {
              isLink: !1,
              profilePictureUrl: o,
              size: n,
            })
        ),
        nuxIcon2: a(d[3]).createElement("div", {
          className: "coreSpriteSpinstaNux",
        }),
      };
      return a(d[3]).createElement(i(d[7]), i(d[8])({ nuxContent: f }, s));
    };
  },
  7602180,
  [
    13434998, 7602181, 13369406, 3, 13369462, 13435245, 13434974, 13173520,
    13369825,
  ]
);
__d(function () {}, 7602181, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = "logged_in_sheet",
      n = function (n) {
        var o = n.pageID,
          _ = a(d[0]).useState(!1),
          s = i(d[1])(_, 2),
          l = s[0],
          c = s[1],
          p = r(d[2]).isIgLiteCarbonUpsellsEligible(),
          E = r(d[3]).useSelector(function (t) {
            return r(d[4]).getDeepLink(t);
          }),
          I = E.android,
          T = E.ios,
          u = E.originalPath,
          A = r(d[3]).useDispatch(),
          P = a(d[0]).useState(
            r(d[5]).isDismissed(r(d[5]).USE_THE_APP_LI_SHEET)
          ),
          C = i(d[1])(P, 2),
          D = C[0],
          f = C[1],
          b = i(d[6]).DirectInboxPage,
          N = i(d[6]).StoryCreationPage,
          S = a(d[0]).useCallback(
            function () {
              switch (o) {
                case b:
                  return {
                    title: a(d[7]).APP_HIGH_INTENTION_DIRECT_TITLE,
                    body: p
                      ? a(d[7])
                          .INSTAGRAM_LITE_CARBON_APP_HIGH_INTENTION_DIRECT_BODY
                      : a(d[7]).APP_HIGH_INTENTION_DIRECT_BODY,
                  };
                case N:
                  return {
                    title: a(d[7]).APP_HIGH_INTENTION_STORIES_CREATE_TITLE,
                    body: a(d[7]).APP_HIGH_INTENTION_STORIES_CREATE_BODY,
                  };
                default:
                  return (
                    i(d[8])(
                      "We shouldn't be getting to this case since the control won't show an app upsell"
                    ),
                    {
                      title: a(d[7]).GUIDE_HEADER_TEXT_DEFAULT,
                      body: a(d[7]).GUIDE_BODY_TEXT_DEFAULT,
                    }
                  );
              }
            },
            [b, N, p, o]
          ),
          h = a(d[0]).useCallback(
            function (n) {
              r(d[9]).logAction_DEPRECATED("appSheetDismiss", {
                platform: r(d[10]).getAppPlatform(),
                source: o,
                type: t,
              }),
                r(d[11]).logLoggedInCtaEvent({
                  containermodule: o,
                  ctaType: "app_sheet",
                  ctaVersion: p ? "instagramlitecarbon" : "",
                  eventName: "dismiss",
                }),
                f(!0),
                A(r(d[12]).closeAppUpsellLoggedInSheet()),
                r(d[5]).setDismissEntry(r(d[5]).USE_THE_APP_LI_SHEET);
            },
            [A, p, o]
          ),
          O = a(d[0]).useCallback(
            function (n) {
              n.preventDefault(),
                r(d[9]).logAction_DEPRECATED("appSheetClick", {
                  platform: r(d[10]).getAppPlatform(),
                  source: o,
                  type: t,
                }),
                r(d[11]).logLoggedInCtaEvent({
                  containermodule: o,
                  ctaType: "app_sheet",
                  ctaVersion: p ? "instagramlitecarbon" : "",
                  eventName: "click",
                }),
                r(d[13]).flushLogsAndOpenInApp(
                  I,
                  T,
                  u,
                  null,
                  "logged_in_app_sheet",
                  p
                );
            },
            [I, T, p, u, o]
          ),
          H = a(d[0]).useMemo(
            function () {
              var t =
                !0 ===
                  i(d[14])._(
                    "ig_web_h1_2020_app_upsells",
                    "babe870c0e3313f8e57c49b40cadca58"
                  ) ||
                !0 ===
                  i(d[14])._(
                    "ig_web_h1_2020_app_upsells",
                    "af069090f87d0afc94dca34ec07d2b87"
                  );
              return (
                r(d[15]).isUserLoggedIn() && r(d[16]).isMobile() && !D && t
              );
            },
            [D]
          );
        a(d[0]).useEffect(
          function () {
            H &&
              !l &&
              (r(d[9]).logAction_DEPRECATED("appSheetImpression", {
                platform: r(d[10]).getAppPlatform(),
                source: o,
                type: t,
              }),
              r(d[11]).logLoggedInCtaEvent({
                containermodule: o,
                ctaType: "app_sheet",
                ctaVersion: p ? "instagramlitecarbon" : "",
                eventName: "impression",
              }),
              c(!0));
          },
          [p, l, o, H]
        );
        var L = S(),
          y = L.body,
          R = L.title;
        return (
          H &&
          a(d[0]).createElement(i(d[17]), {
            appIcon: a(d[0]).createElement(r(d[18]).IconButton, {
              alt: a(d[7]).GO_TO_THE_APP,
              icon: p
                ? r(d[18]).ICONS.QP_INSTAGRAM
                : r(d[18]).ICONS.APP_ICON_36,
              onClick: O,
            }),
            body: y,
            isIgLiteCarbon: p,
            onCallToActionClick: O,
            onClose: h,
            title: R,
          })
        );
      };
    e.default = n;
  },
  7667745,
  [
    3, 69, 13435120, 5, 13369786, 13369972, 13369600, 13435117, 13369445,
    13369462, 13369351, 13173304, 13369977, 13369975, 13369520, 13369464,
    13369353, 13435266, 13434927,
  ]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = a(d[2]).memo(function (t) {
      return !0 ===
        (r(d[0]).isUserLoggedIn()
          ? i(d[1])._(
              "ig_web_pano_updates_logged_in",
              "5674296d5992b855933c716066375b34"
            )
          : i(d[1])._(
              "ig_web_pano_updates_logged_out",
              "42f2cd6fa53e15b032c207ba139724e3"
            ))
        ? a(d[2]).createElement(i(d[3]), t)
        : a(d[2]).createElement(
            i(d[4]),
            i(d[5])({}, t, { viewBox: "0 0 48 48" }),
            a(d[2]).createElement("path", {
              d: "M24 0C10.8 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm12.3 25.5H25.5v10.7c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V25.5H11.8c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h10.7V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v10.7h10.7c.8 0 1.5.7 1.5 1.5s-.6 1.6-1.4 1.6z",
            })
          );
    });
    e.default = t;
  },
  7667746,
  [13369464, 13369520, 3, 7667747, 13434963, 13369825]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = a(d[0]).memo(function (t) {
      return a(d[0]).createElement(
        i(d[1]),
        i(d[2])({}, t, { viewBox: "0 0 24 24" }),
        a(d[0]).createElement("path", {
          d: "M12.001.504a11.5 11.5 0 1011.5 11.5 11.513 11.513 0 00-11.5-11.5zm5 12.5h-4v4a1 1 0 01-2 0v-4h-4a1 1 0 110-2h4v-4a1 1 0 112 0v4h4a1 1 0 010 2z",
        })
      );
    });
    e.default = t;
  },
  7667747,
  [3, 13434963, 13369825]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = !1;
    e.default = function (n) {
      var o = n.broadcast,
        s = n.isVisible,
        l = n.onScrollEnter,
        c = n.trayPosition,
        u = o.cobroadcasters,
        f = o.muted,
        y = r(d[0]).useDispatch(),
        p = r(d[1]).useCallback(
          function () {
            y(r(d[2]).openLivePlayerFromStoryTray(o, "live_feed_timeline", c));
          },
          [o, y, c]
        ),
        v = r(d[0]).useSelector(function (t) {
          return r(d[3]).getDisplayedBroadcasters(t, o.id);
        }).primary;
      r(d[1]).useEffect(
        function () {
          s && l(o, c);
        },
        [o, s, l, c]
      );
      var E =
        u.length > 0
          ? a(d[1]).createElement(
              r(d[4]).Box,
              { direction: "row" },
              a(d[1]).createElement(
                r(d[4]).Box,
                { marginEnd: 1, maxWidth: 44 },
                a(d[1]).createElement(
                  r(d[4]).Text,
                  { display: "truncated", size: "footnote", zeroMargin: !0 },
                  v.username
                )
              ),
              a(d[1]).createElement(
                r(d[4]).Text,
                { size: "footnote", zeroMargin: !0 },
                r(d[5]).liveBroadcasters(u.length)
              )
            )
          : v.username;
      return a(d[1]).createElement(r(d[6]).StoryTrayItemBase, {
        isLive: !0,
        isMuted: f,
        isSeen: t,
        label: E,
        onClick: p,
        profilePictureUrl: v.profile_pic_url,
        username: v.username,
      });
    };
  },
  7667748,
  [5, 3, 13370067, 13370066, 13434927, 13435264, 13435261]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function t(t) {
      return (
        t.displayProperties.viewportWidth >=
        i(d[1])["feed-with-padding-threshold-min"].value
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      r(d[0]),
      (e.default = function (l) {
        var n = r(d[2]).useSelector(t),
          c =
            r(d[3]).isDesktop() &&
            !0 ===
              i(d[4])._(
                "ig_web_stories_tray",
                "d8118551b4099d61db8828c411077db5"
              );
        return a(d[5]).createElement(
          "div",
          {
            className: "zGtbP " + (n ? "IPQK5" : "") + " " + (c ? "VideM" : ""),
          },
          i(d[6])._("ig_web_interaction_tracing")
            ? a(d[5]).createElement(
                r(d[7]).HeroPlaceholder,
                {
                  fallback: a(d[5]).createElement(i(d[8]), null),
                  name: "FeedStoryTrayWrapper",
                },
                l.children
              )
            : a(d[5]).createElement(
                a(d[5]).Suspense,
                { fallback: a(d[5]).createElement(i(d[8]), null) },
                l.children
              )
        );
      });
  },
  7667749,
  [7667750, 13434920, 5, 13369353, 13369520, 3, 13369403, 13369860, 7667751]
);
__d(function () {}, 7667750, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      r(d[0]),
      (e.default = function () {
        var t = window.innerWidth,
          n = Math.ceil(t / r(d[1]).MOBILE_TRAY_COL_WIDTH);
        return a(d[2]).createElement(
          "div",
          { className: "CfWOi" },
          i(d[3])(n, function (t) {
            return a(d[2]).createElement(
              "div",
              { key: t, className: "vyqnV" },
              a(d[2]).createElement(i(d[4]), null)
            );
          })
        );
      });
  },
  7667751,
  [7667752, 7667740, 3, 13369833, 7667753]
);
__d(function () {}, 7667752, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var t = 56,
      n = function () {
        return a(d[1]).createElement(i(d[2]), { className: "y0gra", size: t });
      };
    e.default = n;
  },
  7667753,
  [7667754, 3, 7471118]
);
__d(function () {}, 7667754, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var t = function (t) {
      var s = t.className,
        n = t.hideAvatarBorder,
        c = t.size;
      return a(d[1]).createElement(
        "div",
        { className: i(d[2])("hHOPZ", s) },
        a(d[1]).createElement(i(d[3]), {
          className: "_4CvhT",
          isLoading: !1,
          seen: !0,
          showRing: !1,
          size: c,
        }),
        a(d[1]).createElement("div", {
          className: "_7JZQt " + (n ? "" : "LO-7C"),
          style: { height: c, width: c },
        })
      );
    };
    e.default = t;
  },
  7471118,
  [7471119, 3, 13434933, 13435245]
);
__d(function () {}, 7471119, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function t(t, n) {
      var o = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        n &&
          (s = s.filter(function (n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable;
          })),
          o.push.apply(o, s);
      }
      return o;
    }
    function n(n) {
      for (var o = 1; o < arguments.length; o++) {
        var s = null != arguments[o] ? arguments[o] : {};
        o % 2
          ? t(s, !0).forEach(function (t) {
              i(d[1])(n, t, s[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
          : t(s).forEach(function (t) {
              Object.defineProperty(
                n,
                t,
                Object.getOwnPropertyDescriptor(s, t)
              );
            });
      }
      return n;
    }
    function o(t) {
      var n = t.children,
        o = t.resource;
      return a(d[5]).createElement(
        i(d[6]),
        { intrinsicDimensions: o.intrinsicDimensions },
        function (t) {
          var o = t.className;
          return a(d[5]).createElement("div", { className: o }, n);
        }
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var s = function (t) {
        return function (t, n) {
          if (r(d[2]).isReelItemExpired(t.expiringAt, n)) return null;
          return Boolean(null != t.src && null != t.dimensions) &&
            !1 === t.isVideo &&
            t.displayResources
            ? {
                type: r(d[3]).PREFETCHED_IMAGE,
                id: t.id,
                src: i(d[4])(t.src),
                srcSet: i(d[4])(t.displayResources),
                intrinsicDimensions: i(d[4])(t.dimensions),
              }
            : null;
        };
      },
      c = (function (t) {
        function c() {
          return t.apply(this, arguments) || this;
        }
        i(d[7])(c, t);
        var p = c.prototype;
        return (
          (p.componentDidMount = function () {
            var t = n({}, this.props.prefetchLogExtras, {
              dataSaver: this.props.isDataSaverMode,
              preload: this.props.preload,
            });
            r(d[8]).logIgLiteAction({
              event_name: "storiesPrefetchAttempt",
              extras: t,
            }),
              this.props.preload !== r(d[9]).PRELOAD_AUTO &&
                this.props.onLoadComplete();
          }),
          (p.render = function () {
            return (
              this.props.preload === r(d[9]).PRELOAD_AUTO &&
              a(d[5]).createElement(
                "div",
                { className: "vgS-T" },
                a(d[5]).createElement(i(d[10]), {
                  getResourceFromPost: s(this.props.prefetchContext),
                  layoutWrapper: o,
                  onLoadComplete: this.props.onLoadComplete,
                  postIds: this.props.postIds.toArray(),
                  viewKey: "storyMedia",
                })
              )
            );
          }),
          c
        );
      })(a(d[5]).Component),
      p = r(d[12]).connect(
        function (t, n) {
          var o = r(d[2]).getPrefetchablePostIds(t, n.prefetchContext);
          return {
            postIds: o,
            prefetchLogExtras: r(d[2]).getPrefetchLogExtras(t, o),
          };
        },
        function (t, n) {
          return {
            onLoadComplete: function () {
              "feed" === n.prefetchContext &&
                t({ type: r(d[11]).FEED_PAGE_STORY_PREFETCH_COMPLETE });
            },
          };
        }
      )(i(d[13])(c));
    e.default = p;
  },
  3801274,
  [
    3801275, 13369345, 13369525, 3801205, 13434908, 3, 3801179, 13369428,
    13369878, 13369956, 3801276, 13369477, 5, 3801202,
  ]
);
__d(function () {}, 3801275, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), r(d[0]);
    var t = 1.3,
      n = 1,
      o = (function (o) {
        function s() {
          for (var s, h = arguments.length, c = new Array(h), u = 0; u < h; u++)
            c[u] = arguments[u];
          return (
            (s = o.call.apply(o, [this].concat(c)) || this),
            (s.state = { height: 0, width: 0 }),
            (s.$StoryMediaLayout2 = function (o, h) {
              var c = s.props.intrinsicDimensions,
                u = s.$StoryMediaLayout1() ? n : t,
                l = o,
                y = h,
                p = l / y,
                f = c.width / c.height;
              p / f > u || f / p > u
                ? p > f
                  ? (l = y * f)
                  : (y = l / f)
                : p > f
                ? (y = l / f)
                : (l = y * f),
                s.setState({ height: y, width: l }),
                s.context.updateStoriesContext({
                  mediaDimensions: { width: l, height: y },
                });
            }),
            s
          );
        }
        i(d[1])(s, o);
        var h = s.prototype;
        return (
          (h.$StoryMediaLayout1 = function () {
            return this.props.isTallDevice && r(d[2]).isMobile();
          }),
          (h.render = function () {
            var t = this.props.children;
            "function" == typeof t || i(d[3])(0);
            var n = this.state,
              o = n.width,
              s = n.height,
              h = null;
            if (0 !== o && 0 !== s) {
              var c = { className: "y-yJ5", layoutWidth: o, layoutHeight: s };
              h = a(d[4]).createElement(
                "div",
                { className: "qbCDp", style: { width: o, height: s } },
                t(c)
              );
            }
            return a(d[4]).createElement(
              i(d[5]),
              {
                className: "JkC_e " + (r(d[2]).isDesktop() ? "dHJVu" : ""),
                onResize: this.$StoryMediaLayout2,
              },
              h
            );
          }),
          s
        );
      })(a(d[4]).Component);
    o.contextType = r(d[6]).StoriesContext;
    var s = r(d[8]).connect(function (t) {
      return { isTallDevice: r(d[7]).getIsTallDevice(t) };
    })(o);
    e.default = s;
  },
  3801179,
  [3801180, 13369428, 13369353, 3276909, 3, 13434995, 3801096, 3801181, 5]
);
__d(function () {}, 3801180, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = {
        bloksButtonAppId: "",
        bloksButtonClickCount: 0,
        hasFocus: !0,
        isBugNubActive: !1,
        isCloseFriendsDialogActive: !1,
        isExclusiveStoryDialogActive: !1,
        isHidden: !1,
        isInitialLoad: !0,
        isInitiallyFollowedByViewer: !1,
        isKeyboardActive: !1,
        isModalActive: !1,
        isMusicAvailableInCountry: !0,
        isMuted: !0 === r(d[0]).isDesktop(),
        isPaused: !1,
        isPlaybackDisabled: !1,
        isResumeOverlayActive: !1,
        isStoryShareSheetActive: !1,
        isStoryViewerListActive: !1,
        isTransitioning: !1,
        isUnfollowModalActive: !1,
        mediaDimensions: { height: 0, width: 0 },
        needsTapToStart: !1,
        postIDThatShouldShowSensitiveContentOverlay: null,
        shareClickCount: 0,
        updateStoriesContext: function () {},
        viewerHeight: 0,
        viewerIsLoggedIn: !1,
        viewerWidth: 0,
      },
      s = a(d[1]).createContext(t);
    (e.defaultContext = t), (e.StoriesContext = s);
  },
  3801096,
  [13369353, 3]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = r(d[0]).createSelector(
      function (t) {
        return t.displayProperties.viewportHeight;
      },
      function (t) {
        return t.displayProperties.viewportWidth;
      },
      function (t, n) {
        return t / n > 1.7777777777777777;
      }
    );
    e.getIsTallDevice = t;
  },
  3801181,
  [9]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function n(n) {
      var t = n.onClose,
        s = i(d[0])().data,
        o = i(d[1])(),
        c = i(d[2])(o, 2),
        u = c[0],
        l = c[1].status,
        p = i(d[3])(s),
        f = i(d[2])(p, 2),
        E = f[0],
        v = f[1],
        w = r(d[4]).useDispatch(),
        R = (function () {
          var n = i(d[5])(
            i(d[6]).mark(function n() {
              return i(d[6]).wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0),
                          (n.next = 3),
                          u({
                            answers: E.answers,
                            survey: s,
                            writeInResponses: E.writeInResponses,
                          })
                        );
                      case 3:
                        n.next = 8;
                        break;
                      case 5:
                        (n.prev = 5),
                          (n.t0 = n.catch(0)),
                          w(
                            r(d[7]).showToast({
                              text: r(d[8]).GENERIC_ERROR_MESSAGE,
                            })
                          );
                      case 8:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [[0, 5]]
              );
            })
          );
          return function () {
            return n.apply(this, arguments);
          };
        })();
      return "success" === l
        ? a(d[9]).createElement(i(d[10]), { onClose: t })
        : a(d[9]).createElement(
            i(d[11]),
            { dispatch: v, state: E },
            a(d[9]).createElement(i(d[12]), {
              loading: "loading" === l,
              onClose: t,
              onSubmit: R,
            })
          );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var s = t.onClose;
        return a(d[9]).createElement(
          i(d[13]),
          {
            errorRenderer: function () {
              return null;
            },
          },
          a(d[9]).createElement(
            a(d[9]).Suspense,
            { fallback: null },
            a(d[9]).createElement(n, { onClose: s })
          )
        );
      });
  },
  7667755,
  [
    7667756, 7667757, 69, 7667759, 5, 13369346, 13369347, 13369752, 13369754, 3,
    7667763, 7667765, 7667768, 13435216,
  ]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = "467136164230165";
    e.default = function () {
      return r(d[0]).useQuery(
        [
          "/api/v1/web/get_survey/{integration_point_id}/",
          { path: { integration_point_id: t } },
        ],
        function (t, n) {
          return r(d[1])
            .apiGet("/api/v1/web/get_survey/{integration_point_id}/", n)
            .then(function (t) {
              return t.data;
            });
        },
        { suspense: !0 }
      );
    };
  },
  7667756,
  [13173748, 13369550]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function n(n) {
      return t.apply(this, arguments);
    }
    function t() {
      return (t = i(d[0])(
        i(d[1]).mark(function n(t) {
          var s, u, o, p;
          return i(d[1]).wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (s = t.answers),
                      (u = t.survey),
                      (o = t.writeInResponses),
                      (p = {
                        answers: Object.keys(s).map(function (n) {
                          return {
                            answers: s[n].map(function (t) {
                              if (t.type === r(d[2]).ANSWER_TYPES.option) {
                                var s = !0 === t.writeInResponse ? o[n] : null;
                                return null != s && "" !== s
                                  ? s
                                  : t.value.option_value;
                              }
                              return t.value;
                            }),
                            question_id: n,
                          };
                        }),
                        pages: u.pages.map(function (n) {
                          return {
                            question_ids: n.questions.map(function (n) {
                              return n.question_id;
                            }),
                          };
                        }),
                        session_blob: u.session_blob,
                        survey_id: u.survey_id,
                      }),
                      (n.prev = 2),
                      (n.next = 5),
                      r(d[3]).apiPost(
                        "/api/v1/web/submit_survey/",
                        { body: p },
                        { options: { dataType: "json" } }
                      )
                    );
                  case 5:
                    n.next = 11;
                    break;
                  case 7:
                    throw (
                      ((n.prev = 7),
                      (n.t0 = n.catch(2)),
                      r(d[4]).logError(n.t0),
                      n.t0)
                    );
                  case 11:
                  case "end":
                    return n.stop();
                }
            },
            n,
            null,
            [[2, 7]]
          );
        })
      )).apply(this, arguments);
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        return r(d[5]).useMutation(n);
      });
  },
  7667757,
  [13369346, 13369347, 7667758, 13369550, 13369446, 13173748]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    e.ANSWER_TYPES = { text: "text", option: "option" };
  },
  7667758,
  []
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (u) {
        var n = r(d[0]).useMemo(
          function () {
            return {
              answers: {},
              page: 0,
              prevPages: [],
              survey: u,
              writeInResponses: {},
            };
          },
          [u]
        );
        return r(d[0]).useReducer(i(d[1]), n);
      });
  },
  7667759,
  [3, 7667760]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    function t(t, n) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        n &&
          (o = o.filter(function (n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable;
          })),
          s.push.apply(s, o);
      }
      return s;
    }
    function n(n) {
      for (var s = 1; s < arguments.length; s++) {
        var o = null != arguments[s] ? arguments[s] : {};
        s % 2
          ? t(o, !0).forEach(function (t) {
              i(d[0])(n, t, o[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
          : t(o).forEach(function (t) {
              Object.defineProperty(
                n,
                t,
                Object.getOwnPropertyDescriptor(o, t)
              );
            });
      }
      return n;
    }
    function s(t, s) {
      var o;
      return n({}, t, {
        page:
          null !== (o = t.prevPages[t.prevPages.length - 1]) && void 0 !== o
            ? o
            : 0,
        prevPages: t.prevPages.slice(0, -1),
      });
    }
    function o(t, s) {
      var o = r(d[1]).getNextPage(t);
      return null == o || o === t.page
        ? t
        : n({}, t, {
            page: o,
            prevPages: [].concat(i(d[2])(t.prevPages), [t.page]),
          });
    }
    function c(t, s) {
      var o;
      return n({}, t, {
        answers: n({}, t.answers, ((o = {}), (o[s.questionId] = s.answers), o)),
      });
    }
    function u(t, s) {
      var o;
      return n({}, t, {
        writeInResponses: n(
          {},
          t.writeInResponses,
          ((o = {}), (o[s.questionId] = s.writeInResponse), o)
        ),
      });
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t, n) {
        switch (n.type) {
          case r(d[3]).SURVEY_PAGE_BACK:
            return s(t);
          case r(d[3]).SURVEY_PAGE_NEXT:
            return o(t);
          case r(d[3]).SURVEY_SET_ANSWER:
            return c(t, n);
          case r(d[3]).SURVEY_SET_WRITE_IN_RESPONSE:
            return u(t, n);
          default:
            return t;
        }
      });
  },
  7667760,
  [13369345, 7667761, 13369409, 7667762]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getNextPage = function (n) {
        var t = n.survey.pages[n.page].control_node;
        switch (t.node_type) {
          case "direct":
            return t.direct_next_page_index_int;
          case "branch":
            var u,
              o = i(d[0])(t.branch_question_id),
              _ = i(d[0])(t.branch_response_maps),
              c = t.branch_default_page_index,
              p = null === (u = n.answers[o]) || void 0 === u ? void 0 : u[0];
            if (null != p && p.type === r(d[1]).ANSWER_TYPES.option) {
              var s = _.find(function (n) {
                return (
                  n.response_option_numeric_value ===
                  p.value.option_numeric_value
                );
              });
              if (null != s) return s.page_index;
            }
            return c;
        }
        return n.page;
      }),
      (e.getQuestionText = function (n, t) {
        return t.text_token_params.reduce(function (t, u) {
          var o,
            _ = u.param_name,
            c = u.question_id,
            p = null === (o = n.answers[c]) || void 0 === o ? void 0 : o[0];
          if (null != p) {
            var s =
              p.type === r(d[1]).ANSWER_TYPES.option
                ? p.value.option_text
                : p.value;
            return t.replace("{" + _ + "}", '"' + s + '"');
          }
          return t;
        }, t.body);
      });
  },
  7667761,
  [13434908, 7667758]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    (e.SURVEY_PAGE_BACK = "SURVEY_PAGE_BACK"),
      (e.SURVEY_PAGE_NEXT = "SURVEY_PAGE_NEXT"),
      (e.SURVEY_SET_ANSWER = "SURVEY_SET_ANSWER"),
      (e.SURVEY_SET_WRITE_IN_RESPONSE = "SURVEY_SET_WRITE_IN_RESPONSE");
  },
  7667762,
  []
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var n = t.onClose;
        return a(d[0]).createElement(
          r(d[1]).Modal,
          {
            "aria-label": r(d[2]).SURVEY_HEADER,
            onClose: n,
            size: r(d[3]).isMobile() ? "large" : "default",
          },
          a(d[0]).createElement(
            r(d[1]).ModalHeader,
            { onClose: n },
            r(d[2]).SURVEY_HEADER
          ),
          a(d[0]).createElement(
            r(d[1]).Box,
            {
              alignItems: "center",
              marginTop: r(d[3]).isMobile() ? 16 : void 0,
              padding: 8,
            },
            a(d[0]).createElement(r(d[1]).Icon, {
              alt: r(d[4]).INSTAGRAM_TEXT,
              icon: r(d[1]).ICONS.APP_ICON_45,
            }),
            a(d[0]).createElement(
              r(d[1]).Box,
              { marginTop: 4 },
              a(d[0]).createElement(
                r(d[1]).Text.Label,
                { textAlign: "center" },
                r(d[2]).THANKS
              )
            ),
            a(d[0]).createElement(
              r(d[1]).Box,
              { marginTop: 4 },
              a(d[0]).createElement(
                r(d[1]).Text.Body,
                { color: "ig-secondary-text", textAlign: "center" },
                r(d[2]).THANKS_TEXT
              )
            )
          )
        );
      });
  },
  7667763,
  [3, 13434927, 7667764, 13369353, 13369754]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var T = r(d[0])(1985),
      _ = r(d[0])(1948),
      E = r(d[0])(3335),
      N = r(d[0])(3101),
      t = r(d[0])(253),
      U = r(d[0])(1448);
    (e.THANKS = T),
      (e.THANKS_TEXT = _),
      (e.GIVE_FEEDBACK = E),
      (e.SURVEY_HEADER = N),
      (e.CONTINUE_BUTTON = t),
      (e.SUBMIT_BUTTON = U);
  },
  7667764,
  [13369406]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var n = t.children,
          u = t.dispatch,
          c = t.state;
        return a(d[0]).createElement(
          r(d[1]).SurveyDispatchContext.Provider,
          { value: u },
          a(d[0]).createElement(
            r(d[2]).SurveyStateContext.Provider,
            { value: c },
            n
          )
        );
      });
  },
  7667765,
  [3, 7667766, 7667767]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = a(d[0]).createContext(null);
    (e.SurveyDispatchContext = t),
      (e.useSurveyDispatch = function () {
        return i(d[1])(r(d[0]).useContext(t));
      });
  },
  7667766,
  [3, 13434908]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = a(d[0]).createContext(null);
    (e.SurveyStateContext = t),
      (e.useSurveyState = function () {
        return i(d[1])(r(d[0]).useContext(t));
      });
  },
  7667767,
  [3, 13434908]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var l = t.loading,
          n = t.onClose,
          o = t.onSubmit;
        return a(d[0]).createElement(
          r(d[1]).Modal,
          {
            "aria-label": r(d[2]).SURVEY_HEADER,
            size: r(d[3]).isMobile() ? "large" : "default",
          },
          a(d[0]).createElement(i(d[4]), {
            onClose: n,
            title: r(d[2]).SURVEY_HEADER,
          }),
          a(d[0]).createElement(i(d[5]), { loading: l, onSubmit: o })
        );
      });
  },
  7667768,
  [3, 13434927, 7667764, 13369353, 7667769, 7667770]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var u = t.onClose,
          n = t.title,
          o = r(d[0]).useSurveyDispatch(),
          l = r(d[1]).useSurveyState().page,
          c = r(d[2]).useCallback(
            function () {
              o({ type: r(d[3]).SURVEY_PAGE_BACK });
            },
            [o]
          );
        return a(d[4]).createElement(
          r(d[5]).ModalHeader,
          { onBack: l > 0 ? c : void 0, onClose: u },
          n
        );
      });
  },
  7667769,
  [7667766, 7667767, 13434929, 7667762, 3, 13434927]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var n = t.loading,
          o = t.onSubmit,
          u = r(d[0]).useSurveyDispatch(),
          l = r(d[1]).useSurveyState(),
          c = l.page,
          s = l.survey.pages[c],
          E = null == r(d[2]).getNextPage(l);
        return a(d[4]).createElement(
          r(d[5]).Box,
          { flex: "grow", overflow: "auto", padding: 6 },
          a(d[4]).createElement(
            r(d[5]).Form,
            {
              onSubmit: function () {
                E ? o() : u({ type: r(d[3]).SURVEY_PAGE_NEXT });
              },
            },
            a(d[4]).createElement(
              r(d[5]).Box,
              { minHeight: r(d[6]).isMobile() ? void 0 : 180 },
              a(d[4]).createElement(i(d[7]), { page: s })
            ),
            a(d[4]).createElement(
              r(d[5]).Button,
              {
                color: "ig-secondary-button",
                fullWidth: !0,
                large: !0,
                loading: n,
                type: "submit",
              },
              E ? r(d[8]).SUBMIT_BUTTON : r(d[8]).CONTINUE_BUTTON
            )
          )
        );
      });
  },
  7667770,
  [7667766, 7667767, 7667761, 7667762, 3, 13434927, 13369353, 7667771, 7667764]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var n = t.page,
          u = r(d[0]).useSurveyState();
        return n.questions.map(function (t) {
          return a(d[1]).createElement(
            r(d[2]).Box,
            { key: t.question_id },
            a(d[1]).createElement(
              r(d[2]).Text.Label,
              { textAlign: "center", zeroMargin: !0 },
              a(d[1]).createElement(
                "label",
                { htmlFor: t.question_id },
                r(d[3]).getQuestionText(u, t)
              )
            ),
            a(d[1]).createElement(
              r(d[2]).Box,
              { paddingY: 4 },
              a(d[1]).createElement(i(d[4]), { question: t })
            )
          );
        });
      });
  },
  7667771,
  [7667767, 3, 13434927, 7667761, 7667772]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var n = t.question;
        switch (n.question_class) {
          case "CHECKBOX":
            return a(d[0]).createElement(i(d[1]), { question: n });
          case "MESSAGE":
            return a(d[0]).createElement(i(d[2]), { question: n });
          case "RADIO":
            return a(d[0]).createElement(i(d[3]), { question: n });
          case "TEXT":
            return a(d[0]).createElement(i(d[4]), { question: n });
          default:
            return null;
        }
      });
  },
  7667772,
  [3, 7667773, 7667775, 7667776, 7667777]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (n) {
        var t = n.question,
          o = i(d[0])(t),
          u = o.answers,
          l = o.getResponseOption,
          p = o.setAnswers,
          s = o.setWriteInResponse,
          c = o.writeInResponse,
          v = function (n, t) {
            var o = l(n);
            if (null != o) {
              var s = u.filter(function (n) {
                return n.value !== o;
              });
              !0 === t &&
                (s = [].concat(i(d[1])(s), [
                  {
                    type: r(d[2]).ANSWER_TYPES.option,
                    value: o,
                    writeInResponse:
                      o ===
                      (null === c || void 0 === c ? void 0 : c.responseOption),
                  },
                ])),
                p(s);
            }
          },
          f = function (n) {
            null != c &&
              (v(c.responseOption.option_value, !0),
              null != n && s(n.target.value));
          };
        return t.response_options.map(function (n) {
          var o = n.option_numeric_value,
            l = n.option_text,
            p = n.option_value;
          return a(d[3]).createElement(
            r(d[4]).Box,
            { key: o, paddingY: 3 },
            a(d[3]).createElement(
              r(d[4]).Checkbox,
              {
                checked:
                  null !=
                  u.find(function (n) {
                    return (
                      n.type === r(d[2]).ANSWER_TYPES.option &&
                      n.value.option_value === p
                    );
                  }),
                onChange: function (n) {
                  return v(p, n);
                },
                placement: "right",
              },
              null != c && n === c.responseOption
                ? a(d[3]).createElement(
                    "div",
                    null,
                    a(d[3]).createElement(r(d[4]).TextInput, {
                      autoComplete: "off",
                      name: t.question_id,
                      onChange: f,
                      onFocus: f,
                      placeholder: l,
                      value: c.value,
                    })
                  )
                : a(d[3]).createElement(r(d[4]).Text.Body, null, l)
            )
          );
        });
      });
  },
  7667773,
  [7667774, 13369409, 7667758, 3, 13434927]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (n) {
        var s,
          t,
          o = r(d[0]).useSurveyState(),
          u = r(d[1]).useSurveyDispatch(),
          p = n.allow_write_in_response,
          _ = n.question_id,
          l = n.response_options,
          R = o.answers[_],
          S = p
            ? {
                responseOption: l[l.length - 1],
                value:
                  null !== (s = o.writeInResponses[_]) && void 0 !== s ? s : "",
              }
            : null;
        return {
          answers: null !== (t = R) && void 0 !== t ? t : [],
          getResponseOption: function (s) {
            return n.response_options.find(function (n) {
              return n.option_value === s;
            });
          },
          setAnswers: function (n) {
            u({ answers: n, questionId: _, type: r(d[2]).SURVEY_SET_ANSWER });
          },
          setWriteInResponse: function (n) {
            u({
              questionId: _,
              type: r(d[2]).SURVEY_SET_WRITE_IN_RESPONSE,
              writeInResponse: n,
            });
          },
          writeInResponse: S,
        };
      });
  },
  7667774,
  [7667767, 7667766, 7667762]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var n = t.question;
        return a(d[0]).createElement(
          r(d[1]).Box,
          { paddingY: 2 },
          a(d[0]).createElement(r(d[1]).Text.Body, null, n.message)
        );
      });
  },
  7667775,
  [3, 13434927]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (n) {
        var t = n.question,
          o = i(d[0])(t),
          u = o.answers,
          l = o.getResponseOption,
          s = o.setAnswers,
          p = o.setWriteInResponse,
          v = o.writeInResponse,
          c = u[0],
          _ =
            null != c && c.type === r(d[1]).ANSWER_TYPES.option
              ? c.value.option_value
              : void 0,
          f = function (n) {
            var t = l(n);
            null != t &&
              s([
                {
                  type: r(d[1]).ANSWER_TYPES.option,
                  value: t,
                  writeInResponse:
                    t ===
                    (null === v || void 0 === v ? void 0 : v.responseOption),
                },
              ]);
          },
          E = function (n) {
            null != v &&
              (f(v.responseOption.option_value),
              null != n && p(n.target.value));
          };
        return a(d[2]).createElement(
          r(d[3]).RadioButtonGroup,
          { name: t.question_id, onChange: f, selectedValue: _ },
          t.response_options.map(function (n) {
            var o = n.option_numeric_value,
              u = n.option_text,
              l = n.option_value;
            return a(d[2]).createElement(
              r(d[3]).RadioButton,
              { isRadioAtEnd: !0, key: o, value: l, zeroMargin: !0 },
              a(d[2]).createElement(
                r(d[3]).Box,
                { flex: "grow", paddingY: 3 },
                null != v && n === v.responseOption
                  ? a(d[2]).createElement(r(d[3]).TextInput, {
                      autoComplete: "off",
                      name: t.question_id,
                      onChange: E,
                      onFocus: E,
                      placeholder: u,
                      value: v.value,
                    })
                  : a(d[2]).createElement(r(d[3]).Text.Body, null, u)
              )
            );
          })
        );
      });
  },
  7667776,
  [7667774, 7667758, 3, 13434927]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      r(d[0]),
      (e.default = function (t) {
        var n = t.question,
          u = i(d[1])(n),
          s = u.answers,
          l = u.setAnswers,
          o = s[0],
          v =
            "text" === (null === o || void 0 === o ? void 0 : o.type)
              ? o.value
              : "";
        return a(d[2]).createElement("textarea", {
          className: "-Oa-V",
          id: n.question_id,
          maxLength: "1250",
          onChange: function (t) {
            var n = t.target.value;
            "string" == typeof n && n.length > 0
              ? l([{ type: "text", value: n }])
              : l([]);
          },
          required: n.is_required,
          value: v,
        });
      });
  },
  7667777,
  [7667778, 7667774, 3]
);
__d(function () {}, 7667778, []);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var o = t.onClose,
          n = t.onOpen,
          s = t.postId;
        r(d[0]).useEffect(
          function () {
            return function () {
              o();
            };
          },
          [o]
        );
        var l = i(d[1])(
            r(d[2]).useSelector(function (t) {
              return r(d[3]).getPostById(t, s);
            })
          ),
          u = i(d[1])(r(d[2]).useSelector(r(d[4]).getFeedPostIds));
        i(d[5])._("ig_web_h1_2020_feed", "9c701a6aa0bd917a4bf6da46933396c8") ||
          (u = []);
        var c = l.code,
          f = l.dimensions,
          P = i(d[6]).feedPage;
        return a(d[7]).createElement(
          i(d[8]),
          {
            analyticsContext: P,
            combinedPostIds: u,
            customSize: !0 === r(d[9]).isNewPostModal() ? "fullscreen" : void 0,
            dimensions: f,
            mediaLinkBuilder: r(d[10]).buildMediaLink,
            modalEntryPath: r(d[11]).FEED_PATH,
            onClose: o,
            onOpen: n,
            postCode: c || "",
            postId: s,
          },
          a(d[7]).createElement(i(d[12]), {
            analyticsContext: P + "Modal",
            autoplay: r(d[13]).hasAutoplayEnabledOnPosts(),
            id: s,
            inModal: !0,
            isVisible: !0,
            Options: [
              i(d[14]),
              i(d[15]),
              i(d[16]),
              i(d[17]),
              i(d[18]),
              i(d[19]),
              i(d[20]),
              i(d[21]),
            ],
            visiblePosition: 0,
          })
        );
      });
  },
  7667779,
  [
    13434929, 13434908, 5, 3801128, 13369777, 13369520, 13369600, 3, 13173464,
    13173423, 13369651, 13369603, 13173475, 13369519, 13173677, 13173678,
    13173683, 13173686, 13173687, 13173691, 13173698, 13173711,
  ]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = 0;
    e.default = function (n) {
      function o(t) {
        return a(d[0]).createElement(i(d[1]), null, function (o) {
          return a(d[0]).createElement(
            n,
            i(d[2])({}, t, { key: u, onStartCreation: o })
          );
        });
      }
      var u = "component-with-creation-starter-" + t++;
      return (o.displayName = "withCreationStarter(" + i(d[3])(n) + ")"), o;
    };
  },
  3932180,
  [3, 3932181, 13369825, 13435285]
);
__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = (function (t) {
      function n() {
        for (var n, o = arguments.length, s = new Array(o), c = 0; c < o; c++)
          s[c] = arguments[c];
        return (
          (n = t.call.apply(t, [this].concat(s)) || this),
          (n.$CreationSessionStarter1 = !1),
          (n.$CreationSessionStarter2 = function (t, o) {
            n.$CreationSessionStarter1 ||
              ((n.$CreationSessionStarter1 = !0),
              i(d[1])(n.$CreationSessionStarter3).selectFile(),
              n.props.onStartCreation(t, o),
              (n.$CreationSessionStarter1 = !1));
          }),
          n
        );
      }
      i(d[0])(n, t);
      return (
        (n.prototype.render = function () {
          var t = this;
          return [
            a(d[2]).createElement(r(d[3]).ImageFileForm, {
              acceptMimeTypes: ["image/jpeg"],
              key: "creation-starter-upload",
              onFileChange: this.props.onMediaSelect,
              ref: function (n) {
                return (t.$CreationSessionStarter3 = n);
              },
            }),
            this.props.children(this.$CreationSessionStarter2),
          ];
        }),
        n
      );
    })(a(d[2]).Component);
    t.defaultProps = { creationMode: r(d[4]).CreationMode.POST };
    var n = r(d[7]).connect(null, function (t) {
      return {
        onMediaSelect: function (n) {
          n.length && t(r(d[5]).creationSelectImage(n[0]));
        },
        onStartCreation: function (n, o) {
          void 0 === o && (o = r(d[4]).CreationMode.POST),
            t(r(d[6]).trackEntrypoint()),
            t(r(d[5]).startCreationSession(n, o));
        },
      };
    })(t);
    e.default = n;
  },
  3932181,
  [13369428, 13434908, 3, 13435209, 13434923, 13370043, 13369785, 5]
);
