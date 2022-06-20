(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 9399:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb"
};


/***/ }),

/***/ 7614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(9399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./apollo-client.js
var apollo_client = __webpack_require__(8600);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./contexts/GlobalContext.jsx
var GlobalContext = __webpack_require__(2518);
;// CONCATENATED MODULE: ./components/TextBlock.js



function TextBlock({ heading , content  }) {
    // console.log(content);
    const ctx = (0,external_react_.useContext)(GlobalContext/* GlobalContext */.k);
    const toggled = ctx[0].state.toggledText;
    const logCurrent = (e)=>{
        console.log("clicked");
        ctx[0].handlers.setIsModalOpen(!ctx[0].state.isModalOpen);
        ctx[0].handlers.setShowModalContent(ctx[0].state.showModalContent);
        ctx[0].handlers.setToggledText("toggled, now go away");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "textBlock",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: heading ? heading : "Placeholder TextBlock Heading"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                    children: toggled ? toggled : "#"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    onClick: (e)=>logCurrent(`${heading}`)
                    ,
                    children: content
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/TextVisual.js

function TextVisual({ content  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "textVisual",
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: content.textVisualHeading
        })
    });
};

;// CONCATENATED MODULE: ./components/Tickets.js


function Ticket({ tickets , heading  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "tickets",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Get Yizzer Tickets"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: heading
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: tickets.map((ticket, i)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `${ticket.ticketLink}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: ticket.title
                            })
                        })
                    }, i);
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Hero.js

function Hero({ content  }) {
    let { eyebrow , heading , cta  } = content;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hero",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                children: eyebrow
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: heading
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: cta ? cta : "No CTA yet"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/PlaceHolder.js

function PlaceHolder({ heading  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "placeholder",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
            children: [
                heading,
                " - placeholder"
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Video.js

function Video({ content  }) {
    const { embedCode  } = content;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "b-video",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "o-wrapper",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "o-grid o-grid--center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "o-grid__col l:o-grid__col--span-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "b-video__video",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "o-media o-media--16:9",
                            dangerouslySetInnerHTML: {
                                __html: embedCode
                            }
                        })
                    })
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Faq.js

function Faq({ content  }) {
    const { ctaLabel , ctaLink , text , hasCta  } = content;
    console.log(hasCta);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "b-faq c-section js-faq",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "o-wrapper",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "o-grid o-grid--gap-xxl l:o-grid--reverse",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "o-grid__col l:o-grid__col--span-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "c-section__sticky",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "c-section__heading",
                                    children: ctaLabel
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "c-formatted c-section__text",
                                    dangerouslySetInnerHTML: {
                                        __html: text
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "c-section__cta",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "c-button c-button--primary",
                                        href: ctaLink
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "o-grid__col l:o-grid__col--span-8",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "b-faq__list",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "b-faq__listItem",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "b-faq__question js-faqQuestion",
                                        children: "Title"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "b-faq__answer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "b-faq__answerInner c-formatted js-faqAnswerInner",
                                            children: "Answer"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Stats.js

const Stats = ({ content , statistics  })=>{
    console.log(statistics);
    const showHorizontal = true;
    const image = "https://placedog.net/500/280";
    const ShowHorizontalComponent = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "o-wrapper",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: "c-bodyBlock__header",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "c-bodyBlock__subheading",
                            children: "SubTitle"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "c-bodyBlock__heading",
                            children: "TITLE"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "c-bodyTextVisual__stats"
                })
            ]
        })
    ;
    const ShowVerticalComponent = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                    className: "c-bodyTextVisual__visual js-parallax o-parallax",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            alt: image.title,
                            className: "c-bodyTextVisual__visualImage js-parallaxLayer o-parallax__content js-lazy",
                            "data-src": image.url,
                            src: image.url,
                            style: {
                                opacity: 1
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("noscript", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: "",
                                className: "c-bodyTextVisual__visualImage o-parallax__content",
                                src: image.url
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "o-wrapper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "c-bodyTextVisual__text",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "c-bodyBlock c-bodyTextVisual__textInner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "o-wrapper",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                                        className: "c-bodyBlock__header",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "c-bodyBlock__subheading",
                                                children: "SubTitle"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "c-bodyBlock__heading",
                                                children: "TITLE"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "c-bodyTextVisual__body",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "c-bodyTextVisual__stats"
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    ;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: showHorizontal ? /*#__PURE__*/ jsx_runtime_.jsx(ShowHorizontalComponent, {}) : /*#__PURE__*/ jsx_runtime_.jsx(ShowVerticalComponent, {})
    });
};
/* harmony default export */ const components_Stats = (Stats);

;// CONCATENATED MODULE: ./components/PageBlocks.js









function PageBlocks({ content  }) {
    const pageBlocks = Array.from(content);
    const renderOutput = pageBlocks.map((pageBlock, i)=>{
        switch(pageBlock.__typename){
            case "pageBlocks_hero_BlockType":
                return /*#__PURE__*/ jsx_runtime_.jsx(Hero, {
                    content: pageBlock
                }, pageBlock.id);
            case "pageBlocks_text_BlockType":
                return /*#__PURE__*/ jsx_runtime_.jsx(TextBlock, {
                    heading: pageBlock.heading,
                    content: pageBlock.column1
                }, pageBlock.__typename + " " + i);
            case "pageBlocks_textVisual_BlockType":
                return /*#__PURE__*/ jsx_runtime_.jsx(TextVisual, {
                    content: pageBlock
                }, pageBlock.__typename + " " + i);
            case "pageBlocks_speakers_BlockType":
                return /*#__PURE__*/ jsx_runtime_.jsx(PlaceHolder, {
                    heading: "Speakers"
                }, pageBlock.__typename);
            case "pageBlocks_sponsors_BlockType":
                return /*#__PURE__*/ jsx_runtime_.jsx(PlaceHolder, {
                    heading: "Sponsors"
                }, "spons");
            case "pageBlocks_stats_BlockType":
                return /*#__PURE__*/ jsx_runtime_.jsx(components_Stats, {
                    content: pageBlock,
                    statistics: pageBlock.stats
                }, "stats");
            case "pageBlocks_faq_BlockType":
                return /*#__PURE__*/ jsx_runtime_.jsx(Faq, {
                    content: pageBlock
                }, "faq");
            case "pageBlocks_sessions_BlockType":
                return /*#__PURE__*/ jsx_runtime_.jsx(PlaceHolder, {
                    heading: "Sessions"
                }, "sessions");
            case "pageBlocks_blocks_BlockType":
                return /*#__PURE__*/ jsx_runtime_.jsx(PlaceHolder, {
                    heading: "Blocks"
                }, "blocks" + " " + pageBlock.id);
            case "pageBlocks_video_BlockType":
                return /*#__PURE__*/ jsx_runtime_.jsx(Video, {
                    content: pageBlock
                }, "video");
            case "pageBlocks_tickets_BlockType":
                return /*#__PURE__*/ jsx_runtime_.jsx(Ticket, {
                    heading: pageBlock.heading,
                    tickets: pageBlock.tickets
                }, "tickets");
            default:
                return;
        }
    });
    return renderOutput;
};

;// CONCATENATED MODULE: ./components/Nav.js


function Nav() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/all-components`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "All Comps"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/about`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "About"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/agenda`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Agenda"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/partners`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Partners"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/faq`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Faq"
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/[slug].js










function Page({ singlePost  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Create Next App"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (Home_module_default()).main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(PageBlocks, {
                        content: singlePost["pageBlocks"]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Stats, {})
                ]
            })
        ]
    });
};
async function getServerSideProps(context) {
    const { slug  } = context.query;
    const { data  } = await apollo_client/* default.query */.Z.query({
        query: client_.gql`
    query getDublinSingle {
        entry(section: "pages", site: "tnwDublin", slug: "${slug}") {
          id
          slug
          title
          ... on pages_default_Entry {
            id
            pageBlocks {
              ... on pageBlocks_video_BlockType {
                __typename
                id
                title
                embedCode
              }
              ... on pageBlocks_tickets_BlockType {
                __typename
                id
                title
                heading
                tickets {
                  ... on tickets_default_Entry {
                    id
                    sectionHandle
                    slug
                    title
                    ticketDescription
                    ticketLink
                    ticketLinktext
                    ticketName
                    ticketPrice
                    ticketVat
                  }
                }
              }
              ... on pageBlocks_textVisual_BlockType {
                __typename
                id
                title
                textVisualHeading
                textVisualContent
                textVisualCta {
                  ... on textVisualCta_BlockType {
                    id
                    tvCtaText
                    tvCtaLink
                    tvCtaIsBlank
                  }
                }
              }
              ... on pageBlocks_text_BlockType {
                __typename
                id
                column1
                column2
                heading
              }
              ... on pageBlocks_stats_BlockType {
                __typename
                id
                title
                sources
                stats {
                  label
                  value
                }
              }
              
              ... on pageBlocks_sponsors_BlockType {
                __typename
                id
                sponsorsTitle
              }
              ... on pageBlocks_speakers_BlockType {
                __typename
                id
                title
              }
              ... on pageBlocks_signup_BlockType {
                __typename
                id
              }
              ... on pageBlocks_sessions_BlockType {
                __typename
                id
              }
              ... on pageBlocks_rewards_BlockType {
                __typename
                id
              }
              ... on pageBlocks_partners_BlockType {
                __typename
                id
              }
              ... on pageBlocks_hero_BlockType {
                __typename
                id
                heading
                eyebrow
                ctaTitle
                ctaLink
              }
              ... on pageBlocks_faq_BlockType {
                __typename
                id
                text
                hasCta
                ctaLink
                ctaLabel
              }
              ... on pageBlocks_columns_BlockType {
                __typename
                id
              }
              ... on pageBlocks_challenges_BlockType {
                __typename
                id
              }
              ... on pageBlocks_blocks_BlockType {
                __typename
                id
              }
            }
          }
        }
      }
    
    `
    });
    return {
        props: {
            singlePost: data.entry,
            slug: slug
        }
    };
}


/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,821], () => (__webpack_exec__(7614)));
module.exports = __webpack_exports__;

})();