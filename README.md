# Kidus Course Outlines

A responsive course catalog covering eight technology course areas. Each course runs for four months (16 teaching weeks), with six instructor-led hours per week and practical work. Python and SQL incorporate Kidus's supplied course outlines with timestamps and duplicated sections removed.

## Files

- `outlines/`: readable Markdown outlines for each course.
- `dist/index.html`, `dist/styles.css`, `dist/app.js`: the website.
- `dist/courses.json`: the website's course content.
- `dist/outlines/`: downloadable copies of the Markdown outlines.
- `dist/Technology_Course_Outlines_16_Weeks.docx`: complete Word handbook.
- `.github/workflows/pages.yml`: automatic GitHub Pages deployment.

## Publish from GitHub

1. Create a repository named `course-outlines` in your GitHub account. Use a public repository if your plan does not support private-repository Pages publishing.
2. Upload the contents of this package, preserving the folder structure and including `.github/workflows/pages.yml`. Do not upload the ZIP as a single file.
3. Use `main` as the default branch.
4. Open repository **Settings → Pages** and select **GitHub Actions** as the source.
5. Open **Actions → Publish course website → Run workflow** if it has not run automatically. The successful deployment shows the website URL.

GitHub Pages publishes a website to its configured audience. Check repository and Pages visibility before uploading sensitive material. The present package contains course planning content, without credentials.

## Edit a course

Edit the relevant entry in `dist/courses.json` and its matching Markdown file in both `outlines/` and `dist/outlines/`. Update the Word handbook when making curriculum changes. Commit your changes to `main`; GitHub Actions publishes the updated `dist` folder.

## Preview locally

From the repository root, run `python -m http.server 8000 --directory dist`, then open `http://localhost:8000`. A local server is required because the website fetches JSON content.

## Course directory

1. SQL
2. Python
3. Power BI
4. Azure Data Factory
5. Data Engineering
6. AWS
7. AI and Machine Learning and Statistics
8. Certificate Based Courses

Certificate preparation is a flexible 16-week framework for one selected credential per cohort. Instructor adaptation to the current official exam objectives is required. Azure Data Factory and Fabric Data Engineer preparation are distinct.
