# SmartWaste

Static site (HTML + CSS + JS). No build step, no backend.

## Run locally
- Quick: double-click `index.html`, **or**
- Better: `python -m http.server 8000` in this folder, then open http://localhost:8000

## Host on GitHub Pages
1. Push `index.html`, `script.js`, `style.css` to a repo.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / root.
3. Open `https://<username>.github.io/<repo>/`

## Admin <-> Citizen connection
Open the site in **two tabs of the same browser**: log in as `citizen@smartwaste.com / 123456` in one and `admin@smartwaste.com / admin123` in the other. Reports, pickups, feedback, broadcasts, notifications and eco points update live between the tabs.

Note: data lives in the browser's localStorage, so it is shared between tabs, not between different devices. For real multi-device use, swap localStorage for a backend such as Firebase or Supabase.

## Route Strategy (Admin)
Admin -> **Route Strategy**. Open reports, pending pickups and smart bins that are 70%+ full become stops. Choose a strategy (Smart Hybrid, Shortest Distance, Priority First, Fill-Level First) and 1-3 trucks. The app shows the route on the map, ETA per stop, km, fuel and CO2 saved. **Assign to Crew** marks reports In Progress and sends an ETA notification to each citizen.

## Future Scope: ESP32 + Ultrasonic Smart Bins
Admin -> **Smart Bins (IoT)** simulates HC-SR04 readings (slider = distance in cm, fill % = (100-d)/95*100). At 80% an alert is sent and the bin joins the route. **Future Scope** page (both roles) has the architecture, wiring, ESP32 Arduino code and roadmap.

## AI Photo Verification (Gemini Vision)
Citizen report ki photo ab **real AI (Google Gemini)** se check hoti hai. Ye "Waste Detected %" batata hai aur report tabhi submit hoti hai jab:
- waste % >= `MIN_WASTE_PERCENT` (config.js, default 50),
- photo selected issue type se match kare,
- photo screenshot / stock / edited na lage,
- wahi photo pehle use na hui ho (SHA-256 duplicate check).
Severity (Low/Medium/High) bhi AI se aati hai. Key `config.js` me hai; use Google Cloud Console me HTTP-referrer se restrict karo.
