# Doorbell Home: usability audit and visual recommendations

26 October 2026 · source commit `1d177c71` · recommendation, not an application change.

Doorbell has a useful breadth of services and already exposes search prominently. Its largest usability gap is hierarchy: multiple promotions, small labels, moving elements and inconsistent shop presentations compete with the task of finding something to order. Simplify the existing structure before adding more discovery features.

[Review guide](../README.md) · [Interactive concepts (download/open locally)](index.html) · [Home comparison](assets/home-recommendation.png) · [Search and menu concepts](assets/search-menu-recommendation.png)

## Scope and confidence

- Reviewed the active `LandingScreenContents → SliverLandingBody` path, collapsible header, global navigation, shop cards, active search landing screen, shared result widget, search repository and restaurant menu.
- Captured the installed Android emulator app, version **0.19.18 / 2071**. The checkout declares **1.0.4 / 3606**. The existing-screen image is an **older-build visual reference**, not a freshly compiled screenshot of this checkout. Findings about current behavior come from source inspection; corresponding visual patterns are visible in that reference.
- The emulator also displayed the offline state, which replaces the navigation bar. This behavior is independently present in current source. No checkout, purchase, message or order was submitted.
- Competitor comparison uses public pages and official product documentation, not authenticated mobile-app testing. These are global design benchmarks, not a verified list of direct competitors serving Malawi.
- This is a heuristic review, not measured usability research. No conversion uplift, task-time improvement or current accessibility certification is claimed.
- Concept merchant names, prices, counts, ratings, availability and delivery times are illustrative. Stock photography is not a merchant's actual product photography. The concepts do not make API calls.

## The five requested areas

| Area | Current finding | Recommended change | Priority |
|---|---|---|---|
| Ease of use | The address is formatted as a customer name plus `@address`; shop choices often lack comparison information. | Say **Deliver to**, preserve location context, and show each shop's rating, availability, fee and reliable delivery estimate. | P0–P1 |
| Reduced clutter | Promotions precede shop discovery; recruitment, social carousels, several shop/collection formats and floating utilities compete for attention. | Shops first; one compact offers entry; move merchant registration and social links into Account. Retain transactional notices when relevant. | P1 |
| Legibility | Bottom labels are **9sp**, services **10sp**, and top-rated names are single-line labels with colour-only availability dots. | 12–13sp navigation labels, 14–16sp decision information, explicit status text, sufficient contrast and scalable layouts. | P0 |
| Menu system | Main navigation hides during scrolling and is replaced when offline. Service labels disappear on collapse. Long restaurant menus rely on horizontal tabs. | Stable labelled main navigation; keep labels with icons; add a restaurant category index and search within the menu. | P0–P2 |
| Search | Visible search is a strength, but its prompt rotates; trends move, categories shuffle, history is commented out, and results default to Products. | Stable cross-service prompt; recent searches; still suggestions; All / Shops / Food & items; useful filters and recoverable empty/error states. | P1–P2 |

Priority means implementation sequence, not a measured severity score. P0 removes immediate navigation and reading friction. P1 simplifies existing surfaces. P2 introduces capabilities needing additional data or behavior.

## Evidence and design decisions

### 1. Keep global navigation usable throughout browsing — P0

`root.dart` hides navigation after scrolling down and selects `_NetworkBanner` instead of `CustomBottomNav` when offline. `custom_bottom_nav.dart` visually gives the middle cart much more emphasis than the other destinations.

**Recommendation:** fixed bottom destinations: **Home · Search · Orders · Cart · Account**. Give all five icons text labels, with count badges only when meaningful. Reserve layout space for the bar rather than covering the last content row. Keep the current multiple-service-cart model behind Cart. Keep guest authentication gates. Profile → Account is a label recommendation, not a required route rewrite.

Do not replace navigation with connection status. Show a concise offline notice above usable cached content with a retry action. Actual ordering can remain unavailable until connectivity returns.

Evidence: [scroll behavior](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/workflows/root.dart#L267), [offline branch](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/workflows/root.dart#L359), [bottom labels](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/widgets/custom_bottom_nav.dart#L240), [offline reference capture](assets/current-home-offline.png).

### 2. Simplify the header without hiding meaning — P0

Address and search currently share thick outlines and offset shadows. The search prompt changes every three seconds. The header is budgeted at 210 logical pixels expanded or 132 collapsed, before the status inset, and service labels are removed in the collapsed state.

**Recommendation:** a plain, tappable **Deliver to / selected address** row above a single quiet search field: **Search food, groceries & shops**. Keep the four services. Let the entire labelled service row scroll away when necessary; do not leave unlabelled icons. Keep search and compact address context available on scroll. Address changes should re-evaluate availability and communicate any effect on the cart.

The preferred space saving comes from decoration and repeated content, not smaller text or disappearing navigation.

Evidence: [rotating prompt](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/landing/widgets/top_bar.dart#L32), [address](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/landing/widgets/top_bar.dart#L137), [compact service labels](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/landing/widgets/top_bar.dart#L334), [header height](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/landing/widgets/top_bar.dart#L550).

### 3. Give the Home feed a clear order — P1

The active sliver feed renders promotions, Top Rated, collections, merchant recruitment, popular stores, social media, additional collections and more stores. This is a lot of different presentation for one task.

**Recommended default order:**

1. Delivery context and search.
2. Four service shortcuts.
3. Active order status, only when an order is active.
4. A short shop section: Popular near you for first-time users; Order again when useful history exists.
5. One compact offers entry, if relevant offers exist.
6. A consistent shop list and a clear See all route.

Move merchant registration and social links into Account / About. Do not remove genuinely critical service messages: show them near the affected action, with severity expressed in text. Consolidate promotional tickets into the offers entry rather than layering both over navigation. Order again is a later addition: the Home source currently contains a TODO/commented sketch, not a finished feature.

Empty promotions currently select the skeleton even in a success state. Use skeletons only during loading; omit a successfully loaded empty promotion section. Apply the same distinction to empty collections.

Evidence: [active feed](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/landing/landing_screen.dart#L460), [empty promotions branch](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/landing/landing_screen.dart#L509), [merchant poster](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/landing/landing_screen.dart#L825), [social carousel](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/landing/landing_screen.dart#L934), [floating notices and deals](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/workflows/root.dart#L324).

### 4. Make shops comparable, not just recognisable — P1

The Top Rated section displays up to nine logos, names and coloured open/closed dots. It does not display the ratings that justify its heading. Another card variant provides ratings, fee and a time, so this useful information already exists in parts of the app.

**Recommendation:** one primary shop-card pattern with a clear name, rating plus review count, delivery fee and trustworthy ETA. One image, one optional offer badge, no decorative heart unless favourites actually work. Use plain **Closed · opens at …** text when the opening time is known; do not rely on red/green alone. Avoid putting closed shops before available matches unless the user explicitly searches for them.

The present popular card uses `prepTime` and falls back to **30–45 min**. Preparation time is not necessarily delivery time. Do not promote this to a delivery promise without a validated estimate; show **Delivery time at checkout** or another honest fallback. Do not invent zero delivery fees or ratings for missing data. Use location-aware fees rather than copying demo numbers.

Evidence: [nine-shop limit](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/landing/widgets/highest_rated_shops_section.dart#L88), [logo/status/name card](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/landing/widgets/highest_rated_shop_card.dart#L18), [popular card and fallback time](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/landing/widgets/popular_store_card.dart#L187). The heart in this card has no independent favourite handler; the parent card opens the shop.

### 5. Make legibility a design constraint — P0

Use the existing brand blue, dark neutral text, light surfaces and quiet dividers. Retain Nokora for reading and Numans for primary actions and selected headings. Keep retro outlined/shadowed primary buttons, illustrated service tiles and a compact ticket-style offer; use quiet fields and dividers around them. The [character refinement](../brand-character/README.md) applies this across the concepts without changing the task hierarchy.

| Element | Recommended baseline |
|---|---|
| Main section headings | 20–24sp, semibold |
| Shop and item names | 16sp, semibold; allow wrapping when needed |
| Fees, estimates, item descriptions | 14–16sp |
| Navigation and service labels | 12–13sp |
| Tap targets | Aim for at least 48 × 48 logical pixels |
| Spacing | 16–20dp outside margins; 8/12/16/24dp internal rhythm |
| Contrast | At least 4.5:1 for normal text; measure actual light/dark surfaces |

These sizes are design recommendations, not WCAG minimum font sizes. Verify text scaling to 200%, long shop names and addresses, dark mode, TalkBack/VoiceOver reading order, focus visibility, and explicit selected-state semantics. Fixed header height multiplied by a text-scale factor capped at 1.6 is a **risk to validate**, not proof of a reproduced 200% overflow.

Contrast and resizing references: [W3C contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum), [WCAG 2.2](https://www.w3.org/TR/WCAG22/). No contrast-failure claim was made solely from a screenshot.

### 6. Stabilise search entry — P1

The active `SearchLandingScreen` already autofocuses, debounces input by 700ms, and uses the shared Products/Shops results container. The history UI is commented out. Categories shuffle in build; trending queries shuffle and animate in two continuously moving rows.

**Recommendation:** recent searches with Clear, then a small static list of popular terms, then consistent service/category choices. Do not reshuffle on rebuild. The Home search field and bottom Search destination must open the same experience. Keep focus and keyboard behavior; the concept omits the keyboard only to show the full suggestion layout.

Aim for approximately 250–350ms idle debounce, then measure on typical local network connections. Cancel or ignore superseded searches so a slow old response cannot overwrite a newer query. Trim whitespace and handle a cleared query immediately. Request ordering is not guarded in the inspected cubit; this is a source-level reliability risk, not a reproduced live failure.

Evidence: [active search entry](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/search/search_landing_screen.dart#L49), [commented history](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/search/search_landing_screen.dart#L194), [category shuffle](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/search/search_landing_screen.dart#L234), [trend shuffle](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/search/search_landing_screen.dart#L317), [request handling](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/bloc/search/search_cubit.dart#L30).

### 7. Improve search relevance, filtering and recovery — P1–P2

Keep the current distinction between shops and products. Add **All** as the initial view, grouping matching products under their shop; retain **Shops** and **Food & items** to narrow intent. Add filters such as Open now and delivery fee only when the corresponding data is dependable. Within a grocery service, use product categories; within restaurants, use cuisine/dietary filters only where metadata supports them.

The REST wrapper defaults to four preview products and seven shops; the cubit additionally takes seven shops. A full shop-results view needs API pagination or an explicit full-results capability. Do not claim a complete result count from the size of a capped preview. The current search request scopes by city; address-level deliverability must be confirmed separately before using wording such as “delivers to you”.

Define these distinct states:

- **Loading:** stable result skeletons; preserve the query and filters.
- **No matches:** explain what was searched; offer spelling/category suggestions, Clear filters and an address check. Errands can be a secondary option, not the only next step.
- **Offline/error:** keep the query; offer Retry. Do not imply that an error means no shop carries the item.
- **Closed matches:** show the closed state and next opening time when known; keep open matches prominent.

Evidence: [existing result tabs](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/search/search_delegate.dart#L331), [preview limits and city scope](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/bloc/search/search_rest_repository.dart#L24), [shop cap](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/bloc/search/search_cubit.dart#L111), [current courier-oriented empty state](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/search/search_delegate.dart#L612). The active landing error branch currently displays a contact-support message; a separate older delegate has Retry, so do not assume that older path covers this entry point.

### 8. Give restaurant menus a visible index — P2

The menu already has horizontal category tabs and a cart shortcut. Retain those useful foundations. Add **Search [shop] menu** and a labelled or accessibly named full-category index beside the tabs. Selecting a category must reveal it and keep the active category obvious. Preserve search query, result filters and scroll position when backing out to results.

The plus affordance should open item options when modifiers are required. A compact cart bar should show the count and subtotal after items exist; do not treat it as a global cross-shop subtotal. Keep a clear back action on shop pages rather than forcing global navigation into every purchasing step.

Evidence: [restaurant category tabs](https://github.com/Tiyeni/doorbell-app/blob/1d177c71d55ba25676bdbcb94167c2ec6340effb/apps/doorbell_app/lib/screens/restaurant_front/restaurant_front_screen.dart#L292) and the existing `CustomLargeFab` cart action in that screen.

## What to take from competitors

| Reference | Verified public pattern | Doorbell implication |
|---|---|---|
| [Uber Eats](https://www.ubereats.com/gb/city/london-eng) | Address-led discovery and browsing by cuisine/dish. | Keep delivery context explicit; serve both “I know what I want” and “help me choose”. |
| [Deliveroo](https://deliveroo.co.uk/) | Postcode-first entry for restaurants, supermarkets and shops. | Search copy should describe the range of shopping services, not rotate only through food cravings. |
| [Wolt search documentation](https://explore.wolt.com/en/deu/how-search-works) | Cross-catalogue search, grouped results, recent history, filters, in-venue search and availability-aware ordering. | Extend Doorbell's existing shop/product search with stable history, useful filters and search within menus. |

These support specific interaction patterns. They do not prove the proposed layout matches every current mobile version. Competitors also contain advertising; adopting all of their promotional density would work against the clutter-reduction objective.

## Delivery sequence and validation

**First pass — presentation and behavior:** keep the navigation visible and usable offline, increase labels, simplify the header, stop decorative movement, reorder Home content, remove empty skeletons, and restore static recent-search UI. Preserve notifications, active-order status, guest gates and multiple carts.

**Second pass — discovery:** unify shop cards, complete the rating/availability presentation, add menu indexing and search, implement grouped All results, and add filters after validating their backend/data support. Add Order again only when usable history exists.

Before shipping:

- At widths equivalent to 360, 390 and 412 logical pixels, users can read all service/navigation labels and reach the last content row without obstruction.
- At 200% text scaling, essential address, search, menu and cart controls remain usable; important text wraps instead of disappearing.
- Scrolling down, up, changing tabs and losing connectivity do not remove global navigation on main destinations.
- Home search and the Search tab reach the same flow in one tap. The latest query wins under delayed/out-of-order network responses.
- Empty results, empty collections, server errors and offline states are visually distinct and recoverable.
- Changing address refreshes applicable shops/fees and flags incompatible cart contents without silently deleting them.
- A long restaurant menu is reachable by both category index and within-shop search; returning restores the original search context.
- Service actions retain guest/login behavior. Cart still exposes active carts by service; no grouping is lost in the visual simplification.
- Compare representative tasks with users: find a named shop; find a product without knowing its shop; choose a low-fee option; open Errands; return to a cart. Record completion, wrong turns, backtracking and time before and after. No baseline has been measured in this audit.

## Artifacts and checks

The two PNG boards were rendered from the local HTML and visually inspected. Browser checks verified that images loaded, no JavaScript page errors occurred, there was no document-wide horizontal overflow at 390px, and the demo's query/clear, history clear, sorting, result tabs, category index and menu no-match interactions worked. These checks validate the review artifact, not the Flutter app or production APIs.

The review package is under `docs/improvements/home-page/`. The HTML concept and all of its images are stored locally in this folder; open `index.html` in a browser to use the demo. The PNG boards provide a preview directly in GitHub. No application source or production configuration is changed by this proposal. Photographs are local copies of illustrative [pizza](https://images.unsplash.com/photo-1513104890138-7c749659a591) and [burger](https://images.unsplash.com/photo-1568901346375-23c9450c58cd) images from Unsplash.
