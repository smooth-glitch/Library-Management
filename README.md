# 📚 Shoreditch Library — Member Dashboard (Library Management UI)

A clean, modern **Library Management Member Dashboard** built with **HTML + CSS + JavaScript**, designed to help members and staff quickly access catalog/circulation modules, view availability insights, and raise support requests. It also includes interactive **Highcharts** dashboards for catalog availability and smooth UX interactions like mobile navigation, scroll animations, and Axpert-ready deep links. [file:123][file:124]

---

## ✨ What this project does

- 🧭 **Single-page dashboard** with sections: Dashboard, About, Modules, Support. [file:123]  
- 📊 **Catalog Insights** using Highcharts:
  - Availability by Category (stacked columns) [file:123]
  - Overall Availability (donut) [file:123]
- 🔗 **Quick launch library modules** using Axpert-style links:
  - TStruct links using `data-eot` (e.g., Extension Request / Issue flows) [file:123][file:124]
  - IView links using `data-ivname` (Catalog Search, Overdues, Issued Books, Borrow History, etc.) [file:123][file:124]
- 🧾 **Support Request form** integrated with **EmailJS** for sending support tickets. [file:123]
- 📱 **Responsive UI** + mobile menu + scroll animations + parallax hero effect. [file:124][file:125]

---

## 🧱 Tech Stack

- 🧾 HTML5 [file:123]  
- 🎨 CSS3 (modern gradients, responsive layout, animation classes) [file:125]  
- 🧠 Vanilla JavaScript (navigation, animations, Axpert open helpers) [file:124]  
- 📊 Highcharts (availability dashboards) [file:123]  
- ✉️ EmailJS (support ticket form submission) [file:123]

---

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

> Some Axpert popup behaviors only work when hosted inside an Axpert environment (because they rely on `window.parent.createPopup`). [file:124]

---

## 🔗 Axpert-ready Module Launching

This UI supports **Axpert-style deep linking** using data attributes and a delegated click handler. [file:124]

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
If running inside Axpert, links open with `window.parent.createPopup`. Otherwise, the page navigates normally. [file:124]

---

## 📊 Catalog Insight Charts

This dashboard includes two Highcharts visualizations built from a small in-page dataset (`catalogRows`) used as demo/reference. [file:123]

- **Availability by Category**: stacked column showing Available vs Unavailable counts by category. [file:123]
- **Overall Availability**: donut chart summarizing total Available vs Unavailable. [file:123]
- Clicking chart items triggers the Catalog Search IView (drilldown pattern). [file:123]

---

## ✉️ Support Form (EmailJS)

The Support Request section sends tickets using EmailJS (`emailjs.sendForm`). [file:123]

### 🔧 Setup
To use your own EmailJS account:
- Replace the `publicKey`, `service id`, and `template id` values inside the EmailJS initialization block in `index.html`. [file:123]

> Security note: EmailJS keys are visible in the browser. Use EmailJS domain restrictions and template validation. [file:123]

---

## 🎨 UI/UX Features

- 📱 Mobile menu with body scroll lock/unlock. [file:124]
- 🧭 Smooth scrolling navigation with offset for fixed navbar. [file:124]
- ✨ Scroll-triggered animations using IntersectionObserver (fade-in / slide-in). [file:124]
- 🌀 Subtle parallax movement for hero section. [file:124]
- 🎭 Modern theme styling: gradients, card layouts, responsive grids, and module icon headers. [file:125]

---

## 🛠️ Customization

- **Rename library/branding**: update the navbar logo + hero text in `index.html`. [file:123]  
- **Update module mapping**: change `data-eot` (TStruct transid) and `data-ivname` (IView name) to match your Axpert setup. [file:123]  
- **Use real data for charts**: replace the demo `catalogRows` with API-fed data or Axpert data sources. [file:123]  

---

## 👤 Author

Built by **Arjun** — Library Management UI + member dashboard experience.
