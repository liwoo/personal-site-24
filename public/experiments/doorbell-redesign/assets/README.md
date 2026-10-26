# Shared review assets

These files support the local design concepts. They do not change the Flutter application. `brand.css` is the common visual layer for the Home, app-wide and character/feedback concepts.

## Fonts

The concepts use the two families already referenced by the app: Nokora for reading and Numans for actions and selected headings. Font files are bundled so review does not depend on a font service or an internet connection.

| File | Upstream source | License |
|---|---|---|
| `fonts/Numans-Regular.ttf` | [Google Fonts: Numans](https://github.com/google/fonts/tree/main/ofl/numans) | [SIL Open Font License](fonts/Numans-OFL.txt) |
| `fonts/Nokora-Variable.ttf` | [Google Fonts: Nokora](https://github.com/google/fonts/tree/main/ofl/nokora), upstream name `Nokora[wght].ttf` | [SIL Open Font License](fonts/Nokora-OFL.txt) |

Downloaded for this review on 26 October 2026. The font binaries are unmodified; Nokora's local filename is simplified. Browser rendering is illustrative and is not a pixel match to Flutter's font rasterisation.

## Existing app illustrations

Copied unchanged from the repository so the concepts retain Doorbell's visual identity. Existing repository asset rights/provenance continue to apply; these are not newly generated illustrations.

| Review file | Existing app source |
|---|---|
| `illustrations/restaurants.svg` | [Chinese food](../../../apps/doorbell_app/assets/delivery/009-chinese-food.svg) |
| `illustrations/groceries.svg` | [Groceries](../../../apps/doorbell_app/assets/supermarket/014-groceries.svg) |
| `illustrations/errands.svg` | [Motorbike](../../../apps/doorbell_app/assets/delivery/001-motorbike.svg) |
| `illustrations/shops.svg` | [Shop](<../../../apps/doorbell_app/assets/supermarket/005-shop.svg>) |
| `illustrations/fresh.svg` | [Fruit](<../../../apps/doorbell_app/assets/supermarket/034-fruit.svg>) |
| `illustrations/pantry.svg` | [Pantry](<../../../apps/doorbell_app/assets/supermarket/037-pantry.svg>) |
| `illustrations/household.svg` | [Cleaning](<../../../apps/doorbell_app/assets/supermarket/026-cleaning.svg>) |

Photography and the original Home reference retain the provenance recorded in the [Home audit](../home-page/audit.md#scope-and-confidence). The character comparison's earlier image is a capture of the previous checkout proposal from commit `1d8de61c`, not a production screenshot.
