# 📚 Shoreditch Library — Member Dashboard (Library Management UI)

A clean, modern **Library Management Member Dashboard** built with **HTML + CSS + JavaScript**, designed to help members and staff quickly access catalog/circulation modules, view availability insights, and raise support requests. It also includes interactive **Highcharts** dashboards for catalog availability and smooth UX interactions like mobile navigation, scroll animations, and Axpert-ready deep links.

---

## ✨ What this project does

- 🧭 **Single-page dashboard** with sections: Dashboard, About, Modules, Support.  
- 📊 **Catalog Insights** using Highcharts:
  - Availability by Category (stacked columns)
  - Overall Availability (donut)
- 🔗 **Quick launch library modules** using Axpert-style links:
  - TStruct links using `data-eot` (e.g., Extension Request / Issue flows)
  - IView links using `data-ivname` (Catalog Search, Overdues, Issued Books, Borrow History, etc.)
- 🧾 **Support Request form** integrated with **EmailJS** for sending support tickets.
- 📱 **Responsive UI** + mobile menu + scroll animations + parallax hero effect.


## 🧱 Tech Stack

<p align="center">
  <!-- Core -->
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="JavaScript"/>

  <!-- UI -->
  <img src="https://img.shields.io/badge/Bootstrap%205-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap 5"/>
  <img src="https://img.shields.io/badge/Bootstrap%20Icons-000000?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap Icons"/>

  <!-- Charts -->
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Chart.js"/>

  <!-- Storage -->
  <img src="https://img.shields.io/badge/LocalStorage-334155?style=for-the-badge" alt="LocalStorage"/>

  <!-- Hosting & Tools -->
  <img src="https://img.shields.io/badge/GitHub-121011?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  <img src="https://img.shields.io/badge/Git-F05033?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub Pages"/>
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify"/>
</p>

## 🚀 Getting Started

### ✅ Run locally
1. Clone this repository:

2. Run with any static server:
- VS Code → **Live Server**
- or Python:
  ```
  python -m http.server 5500
  ```

3. Open:
- `http://127.0.0.1:5500`

> Some Axpert popup behaviors only work when hosted inside an Axpert environment (because they rely on `window.parent.createPopup`).

---

## 🔗 Axpert-ready Module Launching

This UI supports **Axpert-style deep linking** using data attributes and a delegated click handler.
### 🧾 TStruct links (forms)
In `index.html`, module tiles include links like:
<a href="javascript:void(0)" data-eot="transid=breq,recordid=0">...</a>
These are converted into a TStruct URL using:
tstruct.aspx?transid=<transid>&recordid=<recordid>&act=opendummy&load=false

### 📄 IView links (reports)
Example:
<a href="javascript:void(0)" data-ivname="bsearch" data-size="modal-xl">...</a>
Converted to:
iview.aspx?ivname=<ivname>

### 🪟 Popup-first behavior
If running inside Axpert, links open with `window.parent.createPopup`. Otherwise, the page navigates normally.

---

## 📊 Catalog Insight Charts

This dashboard includes two Highcharts visualizations built from a small in-page dataset (`catalogRows`) used as demo/reference.

- **Availability by Category**: stacked column showing Available vs Unavailable counts by category.
- **Overall Availability**: donut chart summarizing total Available vs Unavailable.
- Clicking chart items triggers the Catalog Search IView (drilldown pattern).

---

## ✉️ Support Form (EmailJS)

The Support Request section sends tickets using EmailJS (`emailjs.sendForm`).

### 🔧 Setup
To use your own EmailJS account:
- Replace the `publicKey`, `service id`, and `template id` values inside the EmailJS initialization block in `index.html`.

> Security note: EmailJS keys are visible in the browser. Use EmailJS domain restrictions and template validation.

---

## 🎨 UI/UX Features

- 📱 Mobile menu with body scroll lock/unlock.
- 🧭 Smooth scrolling navigation with offset for fixed navbar.
- ✨ Scroll-triggered animations using IntersectionObserver (fade-in / slide-in).
- 🌀 Subtle parallax movement for hero section.
- 🎭 Modern theme styling: gradients, card layouts, responsive grids, and module icon headers.

---

## 🛠️ Customization

- **Rename library/branding**: update the navbar logo + hero text in `index.html`.
- **Update module mapping**: change `data-eot` (TStruct transid) and `data-ivname` (IView name) to match your Axpert setup.
- **Use real data for charts**: replace the demo `catalogRows` with API-fed data or Axpert data sources.
---

## 👤 Author

Built by **Arjun** — Library Management UI + member dashboard experience.
