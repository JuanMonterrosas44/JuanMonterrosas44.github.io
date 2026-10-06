document.addEventListener("DOMContentLoaded", () => {
  const btnPDF = document.getElementById("btnPDF");
  const btnLang = document.getElementById("btnLang");
  const langLabel = document.getElementById("langLabel");
  let currentLang = "es";

  const updateLanguage = (language) => {
    currentLang = language;
    document.documentElement.lang = language;
    langLabel.textContent = language === "es" ? "EN" : "ES";

    document.querySelectorAll("[data-es][data-en]").forEach((element) => {
      element.textContent = element.getAttribute(`data-${language}`);
    });
  };

  btnLang.addEventListener("click", () => {
    updateLanguage(currentLang === "es" ? "en" : "es");
  });

  btnPDF.addEventListener("click", () => {
    const originalTitle = document.title;
    const languageCode = currentLang.toUpperCase();

    document.title = `Juan_Monterrosas_Reyes_CV_${languageCode}`;
    window.addEventListener("afterprint", () => {
      document.title = originalTitle;
    }, { once: true });

    window.print();
  });
});
