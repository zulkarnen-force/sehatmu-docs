date=$(date '+%Y-%m-%d %H:%M:%S')
npm run clean-api-docs all && npm run gen-api-docs all
npm run docusaurus build
git add .
git commit -m "(build) $date - update documentation"
git push