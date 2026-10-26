# Proposed Doorbell design language

Status: proposed for review, not implemented. This extends the [Home proposal](home-page/audit.md) across the [remaining app pages](app-consistency/audit.md). The aim is a recognisable interface throughout shopping, errands, payment and account management while preserving each task's necessary behavior and Doorbell's retro character. See the [character and feedback comparison](brand-character/README.md).

## Foundations

| Token or rule | Proposed default | Application |
|---|---|---|
| Brand action | `#2E5BFF` | Primary buttons, selected navigation and links on light surfaces |
| Main text | `#16223B` | Titles, names, prices and important information |
| Secondary text | `#566277` | Descriptions and metadata; avoid arbitrary opacity on essential text |
| Surface | `#FFFFFF` | Main reading and form surfaces |
| Subtle background | `#F3F5F9` | Page surround, quiet groups and fields |
| Divider | `#E3E7EF` | Decorative separators, not the sole boundary of a required control |
| Field boundary | `#7C879C` | Visible field outline; strengthen for focus/error |
| Selection | `#EDF1FF` or lilac `#E8E4FF`, plus blue text/icon/check | Selected choice; never colour alone |
| Discovery accents | Cream `#FFF4D6`, lilac `#E8E4FF`, mint `#E4F2E3`, peach `#FFE6D9` | Existing service illustrations, a compact offer ticket and occasional brand accents; not transaction status colours |
| Success | `#176545` on `#EDF7F0` | Confirmed success, with explicit label and icon |
| Attention | `#805400` on `#FFF5DD` | Requires action or delayed; not an error or success |
| Error / destructive | `#A12622` on `#FFF0EE` | Failed operation or destructive action, with explanation |
| Spacing | 4 / 8 / 12 / 16 / 24 / 32dp | 16–20dp screen gutters, 16dp card padding, 24dp section gaps |
| Radius | 12dp controls; 14–16dp cards; 20–24dp sheets | Pills only for compact chips/status; not every container |
| Stroke / elevation | Primary action: 2dp dark outline + 4dp hard offset shadow; fields/rows: quiet 1dp outlines | Reserve depth for primary actions and selected brand moments; avoid competing shadows on ordinary form containers |
| Type family | Nokora for reading; Numans for primary actions and selected headings | Keep both existing families, with explicit roles; names, prices and long form content retain readable Nokora weights |
| Type sizes | 24–28sp page title; 18–20sp section; 16sp body/name/action; 14sp metadata; 12–13sp nav/status | Natural wrapping; avoid underlining non-link titles |
| Touch area | At least 48 × 48 logical pixels as a product target | Back/close, increment/decrement, clear, copy, stars and menu actions; the visible icon can be 20–24dp |

These are proposed component tokens, not a claim that every existing widget meets them. Native map rendering, merchant photography and provider logos can retain their own colours. Brand blue is not a universal status colour.

## Character and visual feedback

Keep the existing retro button identity: a bold outline, crisp hard shadow and a short press response. The initial flat concepts simplified the visual identity too aggressively; the revised boards retain the layout improvements and restore these signature details. Numans and Nokora are deliberately paired, not treated as a font inconsistency by themselves.

| Moment | Visual treatment | Behavior contract |
|---|---|---|
| Primary / ready | Blue fill, white Numans label, 2dp ink outline, 4dp shadow down/right | One principal action; preserve at least 48dp of usable hit area throughout the press |
| Pressed | Face travels 2dp towards the shadow; remaining shadow is 2dp | Brief feedback during activation; cancel/release resets; no layout shift or whole-button shrink |
| Keyboard focus | Separate 3dp outer ring with clear separation | Visible without motion; retain focus semantics and a distinguishable ring on the actual surface |
| Loading | Same readable label changed to the in-progress verb, plus progress indicator; remove raised shadow | Block repeat activation; reserve label space and announce progress |
| Disabled | Muted fill/text, visible boundary, no raised shadow | Explain the missing requirement nearby; no press animation |
| Confirmed completion | Explicit success text/icon, with the next relevant action | Only show success after confirmation; button animation is not proof of success |
| Error / uncertain | Text explains failure or uncertainty and the appropriate recovery | Preserve input/order context; distinguish payment pending or unknown from failure |

Home/discovery can carry illustrated service tiles, pastel accents and a compact ticket-shaped offer. Product/cart/checkout keep one expressive primary action with quieter content. Account and forms use the same action and heading vocabulary without decorating every row. Keep the original local voice and illustrations; do not introduce unsupported claims to create personality.

Secondary actions remain outlined or text, with no raised shadow. Selection uses a marker and colour, not a raised button treatment. Avoid perpetual glow, bounce or shimmer. Reduced motion removes press translation/transition while keeping a visible colour change and focus ring. The local [feedback demo](brand-character/index.html) illustrates these states without creating an order or payment.

### Dark mode

Use the same hierarchy and component geometry, with dark-specific foreground/background pairs: page `#111827`, surface `#1B2538`, main text `#F3F6FC`, secondary text `#B8C3D6`, decorative divider `#344158`, field outline `#71809B`, links/selection foreground `#9EB4FF`. A filled primary button may retain `#2E5BFF` with white text. Preserve its outlined silhouette and depth, but validate the edge and focus ring against the dark surface; the light-mode shadow token alone may be insufficient. Supply separate semantic status backgrounds rather than applying translucent light-mode colours over arbitrary surfaces. Verify contrast in the actual Flutter theme, including selected, pressed, disabled and error states; do not assume the generated Flex theme preserves the literal input tokens.

The published boards illustrate the light direction. Dark-mode runtime verification remains an implementation acceptance task.

## Navigation and page templates

| Template | Use | Navigation and actions |
|---|---|---|
| Main destination | Home, Search, Orders, Account; Cart entry opens the existing service-cart chooser | Persistent labelled bottom navigation; selected tab reflects the destination; reserve space below content |
| Browse detail | Service list, category/collection, shop catalogue | Predictable title and Back; search scope stated; preserve query and list position when returning |
| Focused task | Product options, cart, checkout, payment, address edit, errands form | Back for a pushed step, Close for a dismissible task; one primary footer action; no competing global navigation |
| Tracking | Order status, rider map | Order identifier, status and estimate first; details/help nearby; clear return to Orders; global nav can remain absent |
| Sheet | Filters, category index, saved address, method selection | Title, one close action, scrollable content, explicit selected state, safe-area footer when confirmation is required |
| Reading | Announcement, offer details, terms/privacy | Simple title, readable content and one relevant action; imagery subordinate to the message |

The Home concept shows Search as a main destination. During migration, if it remains a full-screen modal, present Back/Close consistently rather than adding a second navigation bar. The design decision must be reflected in routing, not just in labels. Do not force all pages to use the main navigation when it would disrupt a focused task.

## Component contracts

### Buttons and action bars

- One primary blue retro action per task, using the outline/shadow contract above; secondary actions are outlined or text. Keep destructive actions visually separate.
- Use a minimum height, not a fixed height that clips scaled text. Keep the action name visible while loading, for example **Saving…** or **Checking payment…**, with a small progress indicator.
- The button itself must guard activation while disabled/loading, in addition to any request-level protection. A spinner alone is not a disabled state.
- Give footer actions real layout space plus safe-area/keyboard handling. Floating support must not overlap payment, quantity or navigation controls.
- Use a normal, labelled tap action for review-and-confirm. If press-and-hold remains a product requirement, provide an equivalent accessible confirmation action; never make a timed gesture the sole route.

### Inputs, selections and search

- Persistent label, optional/required indication, helper text where needed, then the control. A placeholder is an example, not the only label.
- The entire radio/checkbox row is tappable. Selected state includes a check or radio marker plus a border/text change.
- Inline errors explain the correction and remain associated with the field. On submit, focus/scroll to the first invalid field while retaining all values.
- Differentiate global search (**Food, groceries & shops**), service search (**Search grocery shops**), and shop search (**Search [shop] menu**). Keep a visible clear action and the entered query.
- Match product options to existing min/max rules; show **Required · choose 1** or **Optional · choose up to 2**. Do not silently choose paid modifiers in order to simplify the screen.

### Cards, money and statuses

- Shop: image/name, rating with count when known, open/closed text, fee and reliable ETA. Product: name, unit/variant, price, merchant context and one purchase control.
- Cart: name, selected options, quantity, price and explicit removal. Preserve multiple service carts and distinct merchant information.
- Use the shared currency formatter consistently with **MK**, locale-aware separators and precision appropriate to the actual value. Avoid mixing `K`, `MK`, raw numbers and inconsistent decimal policy across adjacent surfaces.
- Status text is authoritative; colour reinforces it. Map actual backend states to customer language without combining paid, accepted, dispatched and delivered into one generic success state.
- Missing data has an honest fallback. A preparation duration is not automatically a delivery ETA; a product preview limit is not the complete result count.

### Loading, empty, unavailable and errors

| State | Pattern | Example |
|---|---|---|
| Loading | Stable skeleton matching the content; named progress for an action | Loading shops / Saving address… |
| Loaded empty | Short explanation and useful next step | No saved addresses → Add an address |
| No search match | Keep query/filters; allow correction | No matches → Clear filters |
| Unavailable | Explain constraint before the action | Shop closed / Delivery fee unavailable |
| Recoverable error | Keep entered data; one retry action and secondary help | We couldn't load your orders → Retry |
| Offline | Inline status with retry, usable navigation/cached content | You're offline; reconnect to refresh |
| Payment unknown/pending | Explicit uncertainty, same order reference, status check | We haven't confirmed your payment yet |
| Confirmed success | State the completed action and next destination | Payment received → View order |

Animations should explain progress or a transition. Remove auto-scrolling suggestions, persistent glows and decorative shimmer from actionable content; support reduced motion. Local language and Doorbell's Malawi identity remain part of the design; recovery instructions must say what happened and what to do next.

## Accessibility and acceptance

Treat 4.5:1 for normal text and 3:1 for large text as the contrast baseline; verify actual rendered pairs. [W3C contrast reference](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

Verify text resizing to 200% without losing essential content or functionality. This is distinct from simply testing browser zoom or scaling an exported mockup. [W3C resizing reference](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html).

The 48dp target above is Doorbell's proposed product standard. WCAG 2.2's web minimum is 24 × 24 CSS pixels with specified exceptions; these are not interchangeable units or a claim of native-app certification. [W3C target-size reference](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

For implementation, check 360/390/412 logical-pixel widths, 100/150/200% text, light/dark mode, keyboard visible/hidden, long addresses/names, TalkBack/VoiceOver labels and focus order, hardware/system Back, and slow/offline/retry states. Loading must not announce success, and decorative icons should not add duplicate spoken labels.
