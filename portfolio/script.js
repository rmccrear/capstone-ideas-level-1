//* DARK MODE TOGGLE
function toggleDarkMode() {
  let darkThemeStylesheet = document.getElementById('darkThemeStylesheet');
  let darkMode = localStorage.getItem('darkMode') === 'true';
  darkMode = !darkMode;
  darkThemeStylesheet.disabled = !darkMode;
  localStorage.setItem('darkMode', darkMode.toString());
}

function applyDarkModePreference() {
  let darkMode = localStorage.getItem('darkMode');

  if (darkMode !== null) {
    let darkThemeStylesheet = document.getElementById('darkThemeStylesheet');
    darkThemeStylesheet.disabled = darkMode === 'false';
  }
}

window.onload = function () {
  applyDarkModePreference();
};

//* TOGGLE MODAL
