// Every route is pre-rendered, so date-dependent text must come from the build
// rather than `new Date()` at render time — otherwise the client renders
// different text, hydration fails, and React's client re-render of `<html>`
// drops the `dark` class set by the theme script. Fixed locale and time zone
// keep the build machine and every visitor's browser in agreement.
const BUILD_DATE = new Date(__BUILD_DATE__);

const BUILD_YEAR = BUILD_DATE.getUTCFullYear();

const BUILD_MONTH = BUILD_DATE.toLocaleString('en-US', {
	month: 'long',
	year: 'numeric',
	timeZone: 'UTC',
});

export { BUILD_MONTH, BUILD_YEAR };
