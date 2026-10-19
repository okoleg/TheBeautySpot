# Square booking links

The Prices navigation item and internal Prices page have been removed. Pricing,
package, and service-page booking links now use the Square booking service list.
The site's eight service detail pages are available at `/treatments/...`.

`frontend/src/booking.ts` stores the category IDs from the public Square service
list. `getBookingUrl()` returns the general booking URL; passing a category adds
Square's `category_id` query parameter. Browser checks on October 16, 2026 verified
that each of the five categories becomes selected and appears first on the page.
This uses Square's category selection rather than attempting to script scrolling
on another domain.

Brows and Lashes now have separate pages and separate Square categories.
Specials, Skin Care, Makeup, and Body Care also link to their corresponding
Square categories. Hair Extensions and Laser have overview pages with contact
links and the general booking URL until category links and treatment details
are supplied. Header and general booking buttons retain the unfiltered URL.
The former combined `/treatments/brows-lashes` page resolves to `/treatments/brows`.

Old `/prices` and `/services/...` visits redirect to Square, preserving the
category when it can be inferred from the former route/hash. If categories are
recreated in Square, update their IDs in `booking.ts` and verify the links again.
