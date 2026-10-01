// Google Gemini API key (AI Studio). 
// WARNING: GitHub Pages par ye file public hoti hai. Google Cloud Console -> Credentials me
// is key ko "HTTP referrers" (https://<username>.github.io/*) tak restrict zaroor karo.
window.SW_CONFIG = {
  GEMINI_API_KEY: "AQ.Ab8RN6J9S_qolfR0chuvW0p9udptTCk-e8xhI4ePWftbFMILkQ",
  GEMINI_MODEL: "gemini-3.8-flash",
  GEMINI_FALLBACK_MODELS: [],   // optional: busy hone par try karne ke liye backup model names, e.g. ["model-name"]
  MIN_WASTE_PERCENT: 50   // isse kam ho to report reject
};
