Download Dissenter from [https://dissenter.com](https://dissenter.com)

# Defiant Core

Defiant Core is a fork of the excellent [Brave Browser Core](https://github.com/brave/brave-browser) project, used to make the Dissenter Browser.

Follow [@getongab](https://twitter.com/getongab) on Twitter for important
announcements.

# Changes

## v66.100 (July 21, 2019)

* Huge effort to more-completely disable the BAT / Brave Rewards service, the brave extension / sync / update services
* Remove "brave" parameter that was passed to search engines DDG & Qwant
* More work on Linux (remove a keyring dependency, workaround WM_CLASS issue)
* Fix issue with newTab settings (color/image) not stacking properly
* Minor upstream update, newer Chromium build 75.0.3770.142

## v66.99 (July 3rd 2019)

* Updated to latest upstream, which includes dark mode (available in Settings -> Appearance.
* Another attempt at fixing linux naming issues.

## v65.121 (June 23rd 2019)

* The Windows build is now digitally signed!
* Changed the app tooltip name for Linux.
* Updated an npm dependency `@ctrl/tinycolor` for Linux build issue.
* Disabled the every-launch nag for extensions in Developer mode.

## v65.120 (June 16th 2019)

* Fixed problem installing extensions from the Chrome Web Store. (did you know Brave was hijacking these requests?)
* Some more search/replace text changes.

## v65.118 (June 9th 2019)

* Rebased on to the Brave release channel, 0.65.x (much better!)
* Added a menu option to visit dissenter extension settings
* Renamed menu options and re-ordered a few, for clarity
* Major changes to the new tab experience
  * topSites changed to pinned sites, with add/remove functionality
  * new default background image, can still change your own
  * tips section for new users (with close button and option to hide)
* Further work on disabling Brave rewards/ads libraries, performance improvements


## v67.62 & v67.13 (May 27th 2019)

* "Autoplay was blocked" bubble notification in the Omnibox has been removed
* The nag window about changes to the new tab page are disabled
* Dissenter extension new tab default changes (solid color, topSites enabled)
* About page updated with auto-update comments (no auto-update yet) and dedication
* Better(-ish) icon for Windows

## v67.2 (May 10th 2019)

* Default browser issue fixed on Windows
* Linux icon fixed
* Dissenter extension updated to 0.1.9
