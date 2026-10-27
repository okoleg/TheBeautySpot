# Contact form

The homepage renders `ContactForm` immediately after `FindUs`. It submits to
FormSubmit using separate, public build settings:

| Environment | File | Recipient | Build command (from frontend) |
|---|---|---|---|
| Development | `.env.development` | `okoleg@gmail.com` | `npm run build` |
| Production | `.env.production` | `thebeautyspotma@gmail.com` | `npm run build:production` |

The receiving address is public in the built website. It is not an API key.
Both defaults are versioned. Local overrides may be placed in
`.env.development.local` or `.env.production.local`, which Git ignores.
The environment-specific files take precedence over the older `.env.local` setting.

## Activation

FormSubmit requires a one-time activation through the recipient's inbox. Submit
the published form in a normal browser, open the
activation email, and click its confirmation link.
The owner must complete this step before email delivery can be verified.
The production recipient `thebeautyspotma@gmail.com` needs its own activation
after the production build is published; activation of `okoleg@gmail.com` does
not activate this new recipient.

Official documentation: https://formsubmit.co/help and
https://formsubmit.co/documentation.

## Behavior

- Name, valid email, and a message of at least 10 characters are required.
- Phone and treatment are optional.
- A hidden honeypot rejects basic automated submissions.
- The browser posts the form directly to FormSubmit. The provider's supported
  `_captcha=false` option removes the extra verification screen; the honeypot remains.
  The native POST avoids the cross-origin preflight that was blocked by
  the provider's verification challenge during the live AJAX setup test.
- Pending submissions disable the send button and prevent duplicate sends. Inputs
  remain enabled so the browser includes them in the native POST.
- FormSubmit returns visitors to `/?contact=submitted#contact-form` after submission.
- On that return page, the thank-you message replaces the entire form and send button.
- No automatic reply is sent to the visitor.

Browser checks cover validation, native POST payload fields, the provider and
return URLs, and desktop/mobile layout with intercepted requests.

On October 16, 2026, the owner confirmed inbox activation. A real production
submission with `_captcha=false` was accepted and redirected back to the site's
confirmation URL without a CAPTCHA or activation screen. This establishes the
live submission/return path; inbox receipt still requires recipient confirmation.
Local development has a separate origin and may trigger its own activation screen.
Earlier AJAX tests encountered a provider HTTP 403 challenge; mocked UI tests
alone do not establish email delivery.

## Production migration

Production now uses `https://thebeautyspotma.com`; the Firebase-provided
`thebeautyspotma-af603.web.app` address is a fallback host, and
`thebeautyspot-3e54c.web.app` is development. Return URLs use the current browser
origin automatically. The production site's native POST and
thank-you replacement passed intercepted desktop/mobile checks. Its real
diagnostic POST on October 16 reached FormSubmit but was blocked by a Cloudflare
HTTP 403 security challenge, so delivery on this domain is not yet verified.
Test in a normal browser and check `okoleg@gmail.com` for any new-domain activation
request and the diagnostic message.

## Production recipient check

The production build now uses `thebeautyspotma@gmail.com` (development retains
`okoleg@gmail.com`). On October 16, a real button click on the live production
site posted all fields and the correct return URL to
`https://formsubmit.co/thebeautyspotma%40gmail.com`. The provider returned HTTP 403
with `cf-mitigated: challenge` and displayed its Cloudflare security verification
page. This attempt did not reach the confirmation redirect or prove delivery.
Separate intercepted desktop/mobile checks passed validation and verified that
the success return replaces the form with the thank-you message. The new
recipient's activation and inbox delivery still require owner confirmation.
