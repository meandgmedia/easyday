// -----------------------------------------------------------------------
// Site-wide configuration. Update the placeholders below once and they
// will flow through every page, schema block, and footer automatically.
// -----------------------------------------------------------------------

export const SITE = {
  name: "Easy Day Notary",
  shortName: "Easy Day Notary",
  tagline: "Florida Mobile & Remote Online Notary Services",
  // TODO: Replace with your live production domain before deploying.
  url: "https://easydaynotary.com",
  locale: "en_US",
  themeColor: "#0a0a0a",
};

export const CONTACT = {
  // TODO: Replace with your real business phone number.
  phoneDisplay: "(555) 555-0123",
  phoneHref: "tel:+15555550123",
  // TODO: Replace with your real business email address.
  email: "hello@easydaynotary.com",
  // TODO: Replace with the counties / cities you actually serve.
  serviceArea: "Serving Indian River, St. Lucie & Brevard Counties, Florida",
  addressLocality: "Vero Beach",
  addressRegion: "FL",
  // TODO: Replace with your real postal code if you list a public address.
  postalCode: "32960",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 3:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
};

export const SOCIAL = {
  // TODO: Replace placeholder links with your real social profiles, or remove.
  facebook: "https://facebook.com/easydaynotary",
  instagram: "https://instagram.com/easydaynotary",
  linkedin: "https://linkedin.com/company/easydaynotary",
  google: "https://g.page/easydaynotary",
};

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SERVICE_LINKS = [
  { label: "Mobile Notary", href: "/mobile-notary" },
  { label: "Remote Online Notary", href: "/remote-online-notary" },
  { label: "Loan Signings", href: "/loan-signings" },
  { label: "Apostille Services", href: "/apostille-services" },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];
