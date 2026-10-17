# Square booking links

The Prices navigation item and internal Prices page have been removed. Pricing,
package, and service-page booking links now use the Square booking service list.
The site's four service detail pages remain available at `/treatments/...`.

`frontend/src/booking.ts` stores the category IDs from the public Square service
list. `getBookingUrl()` returns the general booking URL; passing a category adds
Square's `category_id` query parameter. Browser checks on October 16, 2026 verified
that each of the five categories becomes selected and appears first on the page.
This uses Square's category selection rather than attempting to script scrolling
on another domain.

The Brows & Lashes page uses Brows for its introduction and first treatment
section, and Lashes for extension/full-set/fill sections. Skin Care, Makeup, and
Body Care link to their corresponding Square categories. Header and general
booking buttons retain the unfiltered booking URL.

Old `/prices` and `/services/...` visits redirect to Square, preserving the
category when it can be inferred from the former route/hash. If categories are
recreated in Square, update their IDs in `booking.ts` and verify the links again.
