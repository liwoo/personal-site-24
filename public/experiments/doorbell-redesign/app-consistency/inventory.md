# Screen-source inventory

Inventory of all **112 Dart files** under `apps/doorbell_app/lib/screens` at source snapshot `bd5798ac`. This includes primary screens, embedded pages, workflow wrappers and supporting widgets; it is not a count of distinct live pages.

[Audit findings](audit.md) · [Visual review](README.md) · [Shared design language](../design-language.md)

## Coverage legend

- **Prior proposal:** Home, search and restaurant-menu families covered in the original audit; shared rules still apply.
- **Page family:** source entry points, visible UI structure and relevant state/action blocks reviewed in this follow-up; see the family findings in the audit.
- **Supporting source:** inventoried under its page family; selected components were inspected where they affect a finding, not independently runtime-tested.
- **Workflow:** navigation/flow or state wrapper; assessed as part of the journey rather than a separate visual page.
- **Legacy / entry unproven:** commented, sample or older path; no current visible entry was established. Do not describe it as a reproduced live-page issue.
- **Registered legacy inbox:** route exists, but its message data/settings are placeholders and a visible entry was not established. Account notification settings is a different, live path.

All families require runtime verification before implementation acceptance. External provider/support/policy websites, backend routes and native OS permission dialogs are outside this inventory.

## Account

| Source | Coverage |
|---|---|
| [account_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/account/account_screen.dart) | Page family |
| [account_security_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/account/account_security_screen.dart) | Page family |
| [affiliates_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/account/affiliates_screen.dart) | Page family |
| [edit_account_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/account/edit_account_screen.dart) | Page family |
| [notification_center_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/account/notification_center_screen.dart) | Page family |
| [widgets/avatar.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/account/widgets/avatar.dart) | Supporting source |

## Announcement

| Source | Coverage |
|---|---|
| [announcement_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/announcement/announcement_screen.dart) | Page family |

## Auth

| Source | Coverage |
|---|---|
| [contact_details_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/contact_details_screen.dart) | Page family |
| [enter_pin_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/enter_pin_screen.dart) | Legacy / entry unproven |
| [identification_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/identification_screen.dart) | Legacy / entry unproven |
| [initial_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/initial_screen.dart) | Page family |
| [kill_switch_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/kill_switch_screen.dart) | Page family |
| [login.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/login.dart) | Page family |
| [otp_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/otp_screen.dart) | Page family |
| [postal_address.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/postal_address.dart) | Legacy / entry unproven |
| [registration_error_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/registration_error_screen.dart) | Legacy / entry unproven |
| [registration_success.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/registration_success.dart) | Legacy / entry unproven |
| [residential_address.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/residential_address.dart) | Legacy / entry unproven |
| [select_city.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/select_city.dart) | Page family |
| [select_location/select_location_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/select_location/select_location_screen.dart) | Page family |
| [select_location/widgets/tutorial.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/select_location/widgets/tutorial.dart) | Supporting source |
| [update_app.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/auth/update_app.dart) | Page family |

## Bundles

| Source | Coverage |
|---|---|
| [bundle_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/bundles/bundle_screen.dart) | Legacy / entry unproven |

## Cart

| Source | Coverage |
|---|---|
| [cart_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/cart/cart_screen.dart) | Page family |
| [widgets/cart_item.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/cart/widgets/cart_item.dart) | Supporting source |

## Categories

| Source | Coverage |
|---|---|
| [categories_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/categories/categories_screen.dart) | Page family |

## Checkout

| Source | Coverage |
|---|---|
| [airtel_money_payment_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/checkout/airtel_money_payment_screen.dart) | Page family |
| [checkout_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/checkout/checkout_screen.dart) | Page family |
| [payment_checkout_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/checkout/payment_checkout_screen.dart) | Page family |
| [widgets/address_picker.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/checkout/widgets/address_picker.dart) | Supporting source |
| [widgets/delivery_time.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/checkout/widgets/delivery_time.dart) | Supporting source |
| [widgets/delivery_type.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/checkout/widgets/delivery_type.dart) | Supporting source |
| [widgets/discount_field.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/checkout/widgets/discount_field.dart) | Supporting source |
| [widgets/first_order_intro.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/checkout/widgets/first_order_intro.dart) | Supporting source |
| [widgets/new_address.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/checkout/widgets/new_address.dart) | Supporting source |
| [widgets/payment.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/checkout/widgets/payment.dart) | Supporting source |
| [widgets/small_widget.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/checkout/widgets/small_widget.dart) | Supporting source |

## Courier

| Source | Coverage |
|---|---|
| [checkout_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/courier/checkout_screen.dart) | Page family |
| [courier_flow.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/courier/courier_flow.dart) | Workflow |
| [courier_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/courier/courier_screen.dart) | Page family |
| [widgets/address_selection_sheet.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/courier/widgets/address_selection_sheet.dart) | Supporting source |
| [widgets/cart_details.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/courier/widgets/cart_details.dart) | Supporting source |
| [widgets/chip_group.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/courier/widgets/chip_group.dart) | Supporting source |
| [widgets/courier_ad.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/courier/widgets/courier_ad.dart) | Supporting source |
| [widgets/courier_location_picker.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/courier/widgets/courier_location_picker.dart) | Supporting source |
| [widgets/details_builder.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/courier/widgets/details_builder.dart) | Supporting source |
| [widgets/expandable_trip_card.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/courier/widgets/expandable_trip_card.dart) | Supporting source |
| [widgets/line_item_modal.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/courier/widgets/line_item_modal.dart) | Supporting source |

## Discounts

| Source | Coverage |
|---|---|
| [deals_sheet.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/discounts/deals_sheet.dart) | Page family |
| [widgets/deals_ticket.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/discounts/widgets/deals_ticket.dart) | Supporting source |

## Ecommerce

| Source | Coverage |
|---|---|
| [ecommerce_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/ecommerce/ecommerce_screen.dart) | Page family |
| [selected_product/ecommerce_selected_product_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/ecommerce/selected_product/ecommerce_selected_product_screen.dart) | Page family |

## Faves

| Source | Coverage |
|---|---|
| [faves_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/faves/faves_screen.dart) | Page family |

## Food More Details

| Source | Coverage |
|---|---|
| [food_more_details.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/food_more_details/food_more_details.dart) | Page family |
| [widgets/choice_section.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/food_more_details/widgets/choice_section.dart) | Supporting source |
| [widgets/product_count_incrementer.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/food_more_details/widgets/product_count_incrementer.dart) | Supporting source |
| [widgets/product_variant.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/food_more_details/widgets/product_variant.dart) | Supporting source |

## Groceries

| Source | Coverage |
|---|---|
| [groceries_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/groceries/groceries_screen.dart) | Page family |
| [widgets/aisle_grid.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/groceries/widgets/aisle_grid.dart) | Supporting source |
| [widgets/grocery_quick_buy_button.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/groceries/widgets/grocery_quick_buy_button.dart) | Supporting source |

## Landing

| Source | Coverage |
|---|---|
| [landing_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/landing/landing_screen.dart) | Prior proposal |
| [widgets/food_category_card.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/landing/widgets/food_category_card.dart) | Prior proposal |
| [widgets/highest_rated_shop_card.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/landing/widgets/highest_rated_shop_card.dart) | Prior proposal |
| [widgets/highest_rated_shops_section.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/landing/widgets/highest_rated_shops_section.dart) | Prior proposal |
| [widgets/more_popular_stores_section.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/landing/widgets/more_popular_stores_section.dart) | Prior proposal |
| [widgets/popular_store_card.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/landing/widgets/popular_store_card.dart) | Prior proposal |
| [widgets/popular_stores_section.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/landing/widgets/popular_stores_section.dart) | Prior proposal |
| [widgets/service_category_item.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/landing/widgets/service_category_item.dart) | Prior proposal |
| [widgets/services_section.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/landing/widgets/services_section.dart) | Prior proposal |
| [widgets/top_bar.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/landing/widgets/top_bar.dart) | Prior proposal |

## My Orders

| Source | Coverage |
|---|---|
| [my_orders.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/my_orders/my_orders.dart) | Page family |
| [widgets/order_item.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/my_orders/widgets/order_item.dart) | Supporting source |
| [widgets/order_page.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/my_orders/widgets/order_page.dart) | Supporting source |

## Notifications

| Source | Coverage |
|---|---|
| [notifications_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/notifications/notifications_screen.dart) | Registered legacy inbox |
| [pages/notification_settings_page.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/notifications/pages/notification_settings_page.dart) | Registered legacy inbox |
| [pages/notifications_page.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/notifications/pages/notifications_page.dart) | Registered legacy inbox |
| [pages/widgets/notification_item.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/notifications/pages/widgets/notification_item.dart) | Registered legacy inbox |
| [pages/widgets/notification_leading.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/notifications/pages/widgets/notification_leading.dart) | Registered legacy inbox |

## Order Status

| Source | Coverage |
|---|---|
| [order_status_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/order_status/order_status_screen.dart) | Page family |
| [widgets/container.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/order_status/widgets/container.dart) | Supporting source |
| [widgets/order_details.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/order_status/widgets/order_details.dart) | Supporting source |
| [widgets/re-order_view.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/order_status/widgets/re-order_view.dart) | Supporting source |
| [widgets/stepper.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/order_status/widgets/stepper.dart) | Supporting source |
| [widgets/tracking_view.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/order_status/widgets/tracking_view.dart) | Supporting source |
| [widgets/view_receipt.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/order_status/widgets/view_receipt.dart) | Supporting source |

## Payments

| Source | Coverage |
|---|---|
| [phone/phone_picker.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/payments/phone/phone_picker.dart) | Page family |

## Promotions

| Source | Coverage |
|---|---|
| [promotion_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/promotions/promotion_screen.dart) | Page family |

## Rating

| Source | Coverage |
|---|---|
| [rating_popup.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/rating/rating_popup.dart) | Page family |

## Restaurant Front

| Source | Coverage |
|---|---|
| [restaurant_front_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/restaurant_front/restaurant_front_screen.dart) | Prior proposal |
| [widgets/list.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/restaurant_front/widgets/list.dart) | Prior proposal |
| [widgets/restaurant_loading.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/restaurant_front/widgets/restaurant_loading.dart) | Prior proposal |
| [widgets/screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/restaurant_front/widgets/screen.dart) | Prior proposal |
| [widgets/shop_details.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/restaurant_front/widgets/shop_details.dart) | Prior proposal |

## Search

| Source | Coverage |
|---|---|
| [search_delegate.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/search/search_delegate.dart) | Prior proposal |
| [search_landing_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/search/search_landing_screen.dart) | Prior proposal |
| [search_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/search/search_screen.dart) | Prior proposal |

## Services

| Source | Coverage |
|---|---|
| [service_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/services/service_screen.dart) | Page family |

## Shop

| Source | Coverage |
|---|---|
| [content_warning.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/shop/content_warning.dart) | Page family |
| [shop_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/shop/shop_screen.dart) | Page family |

## Splash

| Source | Coverage |
|---|---|
| [splash_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/splash/splash_screen.dart) | Page family |

## Static Content

| Source | Coverage |
|---|---|
| [terms_conditions.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/static_content/terms_conditions.dart) | Page family |

## Transactions

| Source | Coverage |
|---|---|
| [transactions_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/transactions/transactions_screen.dart) | Legacy / entry unproven |
| [widgets/filter_button.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/transactions/widgets/filter_button.dart) | Legacy / entry unproven |
| [widgets/transaction_item.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/transactions/widgets/transaction_item.dart) | Legacy / entry unproven |

## Workflows

| Source | Coverage |
|---|---|
| [add_new_address.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/workflows/add_new_address.dart) | Workflow |
| [add_shared_location_screen.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/workflows/add_shared_location_screen.dart) | Workflow |
| [guest_workflow.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/workflows/guest_workflow.dart) | Workflow |
| [login_workflow.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/workflows/login_workflow.dart) | Workflow |
| [registration.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/workflows/registration.dart) | Workflow |
| [root.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/workflows/root.dart) | Workflow |
| [signin_wall_flow.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/workflows/signin_wall_flow.dart) | Workflow |
| [submit.dart](https://github.com/Tiyeni/doorbell-app/blob/bd5798ac05f9661d3d8bbf96615f6519d5a84a7e/apps/doorbell_app/lib/screens/workflows/submit.dart) | Workflow |
