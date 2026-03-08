# 🕯️ ANTIBULLAS | Semana Santa Sevilla 2026

**Antibullas** es una Aplicación Web Progresiva (PWA) diseñada para resolver uno de los mayores problemas de movilidad en Sevilla durante su semana grande: las aglomeraciones o "bullas". 

Desarrollada con un enfoque *Mobile-First*, la aplicación permite a los usuarios consultar horarios, crear itinerarios personalizados y, lo más importante, identificar zonas conflictivas en tiempo real para buscar rutas alternativas.

🔗 **[Ver proyecto en producción](https://antibullas.com)**

---

## 🚀 Características Principales

* **Offline-First (PWA):** Uso de *Service Workers* y `manifest.json` para permitir la instalación nativa en iOS/Android y garantizar el funcionamiento sin conexión a internet (crucial por la saturación de redes móviles en el centro de la ciudad).
* **Algoritmo de Tiempos Real:** Lógica en JavaScript para calcular si una cofradía está "en calle", cruzando la medianoche o si hay tiempo suficiente para desplazarse entre dos puntos de interés.
* **Mapas Integrados:** Implementación de **Leaflet.js** para renderizar ubicaciones exactas de las zonas conflictivas y trazar puntos de interés de forma interactiva.
* **Clima en Tiempo Real:** Consumo de la API gratuita de *Open-Meteo* mediante peticiones asíncronas (`fetch` / `async-await`) para alertar sobre posibles riesgos de lluvia.
* **Mi Plan (LocalStorage):** Sistema de guardado persistente en el navegador del usuario para crear y mantener su propio itinerario a lo largo de los días.

---

## 🛠️ Stack Tecnológico

Este proyecto ha sido desarrollado desde cero sin frameworks pesados para maximizar la velocidad de carga y el rendimiento en dispositivos móviles:

* **Frontend:** HTML5 semántico.
* **Estilos:** CSS3 puro (Uso de variables CSS, Flexbox, CSS Grid y media queries para diseño responsive).
* **Lógica:** Vanilla JavaScript (ES6+). Manipulación exhaustiva del DOM, renderizado dinámico de vistas y gestión de estado local.
* **Mapas:** Leaflet.js (OpenStreetMap).
* **Despliegue:** Netlify con integración de dominio personalizado y certificado SSL.

---

## 🧠 Retos Técnicos Superados

1. **Gestión de Fechas y Tiempos:** El mayor reto de la Semana Santa es que las jornadas no terminan a las 00:00, sino de madrugada. Se implementó una lógica personalizada para convertir las horas a "minutos desde el inicio de la jornada" y manejar correctamente los cruces de medianoche.
2. **Optimización de Recursos:** Al ser una app para usar en la calle, las imágenes de las hermandades y las zonas de conflicto se sirven optimizadas y cacheadas localmente para evitar el consumo de datos móviles.

---
*Creado por Antonio Tirado.*
