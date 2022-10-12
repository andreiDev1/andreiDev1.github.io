const d = document;

export default function darkTheme(btn, classDark, dark, light) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  let moon = `<svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0V2H8V0H7Z" fill="black"/>
<path d="M3.35355 3.64645L1.85355 2.14645L1.14645 2.85355L2.64645 4.35355L3.35355 3.64645Z" fill="black"/>
<path d="M12.3536 4.35355L13.8536 2.85355L13.1464 2.14645L11.6464 3.64645L12.3536 4.35355Z" fill="black"/>
<path d="M7.49998 3C5.52977 3 3.85938 4.44872 3.58075 6.39913L3.5707 6.46949C3.41148 7.58398 3.73042 8.64543 4.36009 9.45895C4.74345 9.95426 5 10.427 5 10.9013V12.5C5 12.7761 5.22386 13 5.5 13H9.5C9.77614 13 10 12.7761 10 12.5V10.9013C10 10.427 10.2565 9.95423 10.6399 9.45893C11.2696 8.64541 11.5885 7.58397 11.4293 6.4695L11.4192 6.39914C11.1406 4.44873 9.4702 3 7.49998 3Z" fill="black"/>
<path d="M0 8H2V7H0V8Z" fill="black"/>
<path d="M13 8H15V7H13V8Z" fill="black"/>
<path d="M6 15H9V14H6V15Z" fill="black"/>
</svg>

`,
    sun = `<svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.07572 6.46984L4.5707 6.54056V6.54056L4.07572 6.46984ZM4.06567 6.5402L3.5707 6.46949L3.5707 6.46949L4.06567 6.5402ZM10.9242 6.46985L11.4192 6.39914V6.39914L10.9242 6.46985ZM10.9343 6.54021L10.4393 6.61091V6.61092L10.9343 6.54021ZM9.5 12.5V13C9.77614 13 10 12.7761 10 12.5H9.5ZM5.5 12.5H5C5 12.7761 5.22386 13 5.5 13V12.5ZM4.75549 9.15291L5.15088 8.84687L4.75549 9.15291ZM10.2445 9.15289L9.8491 8.84686L10.2445 9.15289ZM6 15H9V14H6V15ZM3.58075 6.39913L3.5707 6.46949L4.56064 6.61091L4.5707 6.54056L3.58075 6.39913ZM7.49998 3C5.52977 3 3.85938 4.44872 3.58075 6.39913L4.5707 6.54056C4.77895 5.08279 6.02742 4 7.49998 4V3ZM11.4192 6.39914C11.1406 4.44873 9.4702 3 7.49998 3V4C8.97255 4 10.221 5.0828 10.4293 6.54056L11.4192 6.39914ZM11.4293 6.4695L11.4192 6.39914L10.4293 6.54056L10.4393 6.61091L11.4293 6.4695ZM10.6399 9.45893C11.2696 8.64541 11.5885 7.58397 11.4293 6.46949L10.4393 6.61092C10.5585 7.44543 10.3209 8.23729 9.8491 8.84686L10.6399 9.45893ZM9 10.9013V12.5H10V10.9013H9ZM9.5 12H5.5V13H9.5V12ZM6 12.5V10.9013H5V12.5H6ZM3.5707 6.46949C3.41148 7.58398 3.73042 8.64543 4.36009 9.45895L5.15088 8.84687C4.67907 8.2373 4.44143 7.44544 4.56064 6.61091L3.5707 6.46949ZM6 10.9013C6 10.0775 5.56209 9.37814 5.15088 8.84687L4.36009 9.45895C4.74345 9.95426 5 10.427 5 10.9013H6ZM9.8491 8.84686C9.4379 9.37813 9 10.0775 9 10.9013H10C10 10.427 10.2565 9.95423 10.6399 9.45893L9.8491 8.84686ZM7 0V2H8V0H7ZM0 8H2V7H0V8ZM13 8H15V7H13V8ZM3.35355 3.64645L1.85355 2.14645L1.14645 2.85355L2.64645 4.35355L3.35355 3.64645ZM12.3536 4.35355L13.8536 2.85355L13.1464 2.14645L11.6464 3.64645L12.3536 4.35355Z" fill="black"/>
</svg>

`;

  const lightMode = () => {
    /* $selectors.forEach((el) => el.classList.remove(classDark)); */
    d.querySelector(":root").classList.add("light");
    d.querySelector(":root").classList.remove("dark");

    $themeBtn.innerHTML = moon;

    localStorage.setItem("theme", "light");
  };

  const darkMode = () => {
    /* $selectors.forEach((el) => el.classList.add(classDark)); */
    d.querySelector(":root").classList.remove("light");
    d.querySelector(":root").classList.add("dark");

    $themeBtn.innerHTML = sun;

    localStorage.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if (localStorage.getItem("theme") === "light") {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }

    if (localStorage.getItem("theme") === "light") {
      lightMode();
    }

    if (localStorage.getItem("theme") === "dark") {
      darkMode();
    }
  });
}
