# Contact form

The homepage renders `ContactForm` immediately after `FindUs`. It submits to
FormSubmit using the recipient configured in `frontend/.env.local`:

```dotenv
VITE_CONTACT_EMAIL=okoleg@gmail.com
```

The receiving address is public in the built website. It is not an API key.
Copy `frontend/.env.example` to `.env.local` to configure a fresh checkout, then
set the recipient before running `npm run build` from `frontend`.

## Activation

FormSubmit requires a one-time activation through the recipient's inbox. Submit
the published form in a normal browser, complete its verification, open the
activation email, and click its confirmation link.
The owner must complete this step before email delivery can be verified.

Official documentation: https://formsubmit.co/help and
https://formsubmit.co/documentation.

## Behavior

- Name, valid email, and a message of at least 10 characters are required.
- Phone and treatment are optional.
- A hidden honeypot rejects basic automated submissions.
- The browser posts the form directly to FormSubmit, allowing its spam verification
  to run. The native POST avoids the cross-origin preflight that was blocked by
  the provider's verification challenge during the live AJAX setup test.
- Pending submissions disable the send button and prevent duplicate sends. Inputs
  remain enabled so the browser includes them in the native POST.
- FormSubmit returns visitors to `/?contact=submitted#contact-form` after submission.
- No automatic reply is sent to the visitor.

Browser checks cover validation, native POST payload fields, the provider and
return URLs, and desktop/mobile layout with intercepted requests. The earlier
AJAX checks used mocks and did not establish delivery. The live AJAX attempt was
blocked by a provider HTTP 403 verification challenge; no activation email was
confirmed. Native form activation and delivery must be completed by the owner.
