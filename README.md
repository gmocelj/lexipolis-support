# Lexipolis — support site

Home, support (FAQ) and **privacy policy** for the
[Lexipolis](https://github.com/gmocelj/lexipolis) app, in Serbian (Latin) and English.
Static HTML and CSS without trackers. Rules have optional JavaScript for language selection
and an isolated voting example; localized pages remain readable without it. Deployed to GitHub Pages by
`.github/workflows/pages.yml` on every push to `main`.

| Page    | URL |
| ------- | --- |
| Home    | https://gmocelj.github.io/lexipolis-support/ |
| Support | https://gmocelj.github.io/lexipolis-support/support/ |
| Rules | https://gmocelj.github.io/lexipolis-support/rules/ |
| Privacy | https://gmocelj.github.io/lexipolis-support/privacy/ |

The Support and Privacy URLs are the ones in the App Store and Google Play listings
(`ios/fastlane/metadata/*/support_url.txt` and `privacy_url.txt` in the app repo).
`scripts/submit_ios.sh` refuses to submit if any of them does not return 200.

Contact for users: this repository's Issues.

## Rules source

The localized rules are generated from `assets/help/rules/*.json` in the Lexipolis app
repository, using `python3 tool/help/export_rules.py --output <staging-directory>`.
Copy the generated `rules/` and `404.html` here. Do not edit generated HTML by hand.
`rules/source-manifest.json` records source SHA-256 values. All 11 UI variants, including
both Serbian scripts, are available. Explicit `/rules/<locale>/` links keep their language;
`/rules/` detects browser language and falls back to readable English.

The app uses the same bundled content offline and gates its optional external web link.
Google Material icons are included under their Apache 2.0 license in `rules/icons/LICENSE`.
