# 🌿 WalkAware

**WalkAware** is a smart frontend web app that uses modern Web APIs to track your real-time **location**, **network status**, and **page visibility state**. It’s designed as a clean, responsive mini-dashboard to assist **remote workers**, **travelers**, and **digital nomads** in staying aware of their environment and connectivity status.

---

## ❗ Problem

In the age of remote work, hybrid jobs, and digital nomads, people often:
- Travel or work from places with unpredictable connectivity
- Use mobile data unknowingly for heavy browsing or streaming
- Lose track of whether they are actively using a productivity-focused tab or not
- Lack lightweight tools to check their real-time network and visibility state

---

## 💡 Solution

**WalkAware** solves this problem by:
- 📍 Displaying real-time GPS coordinates to track your current location
- 📶 Showing your active network type (Wi-Fi, 4G, etc.) so you can avoid unnecessary data consumption
- 👀 Detecting whether you're actively focused on the page or tabbed out — useful for meetings, journaling, or time tracking
- 🧑‍💻 Providing a clean and responsive UI with no login, no bloat — just pure frontend utility

---

## 🧩 Features

| Feature | Description | Web API Used |
|--------|-------------|--------------|
| 📍 Location Tracker | Get and display current latitude and longitude | [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) |
| 📶 Network Type | Show whether you're connected via Wi-Fi, 4G, etc. | [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API) |
| 👀 Visibility Detection | Detect if user is actively viewing the page | [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) |

---

## 🛠 Tech Stack

- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🌐 Web APIs (Geolocation, Network Info, Intersection Observer)
- ☁️ Hosted on [Vercel]



