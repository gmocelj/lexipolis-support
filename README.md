# Lexipolis — support site

Home, support (FAQ) and **privacy policy** for the
[Lexipolis](https://github.com/gmocelj/lexipolis) app, in Serbian (Latin) and English.
Plain HTML and CSS, without JavaScript or trackers, deployed to GitHub Pages by
`.github/workflows/pages.yml` on every push to `main`.

| Page    | URL |
| ------- | --- |
| Home    | https://gmocelj.github.io/lexipolis-support/ |
| Support | https://gmocelj.github.io/lexipolis-support/support/ |
| Privacy | https://gmocelj.github.io/lexipolis-support/privacy/ |

The Support and Privacy URLs are the ones in the App Store and Google Play listings
(`ios/fastlane/metadata/*/support_url.txt` and `privacy_url.txt` in the app repo).
`scripts/submit_ios.sh` refuses to submit if any of them does not return 200.

Contact for users: this repository's Issues.
