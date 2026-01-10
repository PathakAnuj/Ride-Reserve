# Ride-Reserve

src/
└── app/
    ├── core/                         # App-wide infrastructure
    │   ├── guards/
    │   │   ├── auth.guard.ts
    │   │   ├── guest.guard.ts
    │   │   └── role.guard.ts
    │   ├── services/
    │   │   ├── auth.service.ts
    │   │   ├── token.service.ts
    │   │   └── api.service.ts
    │   ├── config/
    │   │   ├── api.config.ts
    │   │   └── endpoints.ts
    │   └── core.module.ts
    │
    ├── shared/                      # Reusable, stateless UI
    │   ├── components/
    │   ├── directives/
    │   ├── pipes/
    │   └── shared.module.ts
    │
    ├── layout/                      # App shells
    │   ├── public-layout/
    │   │   └── public-layout.component.ts
    │   ├── secure-layout/
    │   │   └── secure-layout.component.ts
    │   └── layout.module.ts
    │
    ├── features/
    │   ├── public/                  # 🌍 Public features (no login)
    │   │   ├── auth/
    │   │   │   ├── pages/
    │   │   │   ├── components/
    │   │   │   ├── services/
    │   │   │   ├── auth-routing.module.ts
    │   │   │   └── auth.module.ts
    │   │   │
    │   │   ├── landing/
    │   │   ├── help/
    │   │   └── about/
    │   │
    │   └── secure/                  # 🔒 Secured features (login required)
    │       ├── dashboard/
    │       │   ├── pages/
    │       │   ├── components/
    │       │   ├── services/
    │       │   ├── dashboard-routing.module.ts
    │       │   └── dashboard.module.ts
    │       │
    │       ├── booking/
    │       ├── vehicles/
    │       ├── profile/
    │       └── settings/
    │
    ├── app-routing.module.ts
    ├── app.component.ts
    └── app.module.ts


# Ride Reserve – Frontend Folder Structure

This document explains the **frontend folder structure** used in the Ride Reserve project.  
The goal of this architecture is to ensure **scalability, clarity, security, and maintainability** as the application grows.

The frontend is built using **Angular** and follows a **modular, domain-driven design** approach with a clear separation between **public** and **secured** features.

---

## 📁 Project Structure Overview

src/
├── app/
│ ├── core/
│ ├── shared/
│ ├── layout/
│ ├── features/
│ ├── app-routing.module.ts
│ ├── app.component.ts
│ └── app.module.ts
│
├── assets/
├── styles/
└── environments/

yaml
Copy code

---

## 📦 `src/app/` – Application Code

Contains all Angular-related source code.

---

## 🔹 `core/` – Application Infrastructure

**Purpose:**  
Holds app-wide singleton services and infrastructure logic.

core/
├── guards/
├── services/
├── config/
└── core.module.ts

yaml
Copy code

### Responsibilities
- Authentication & authorization
- Route protection
- HTTP communication
- Global configuration

### Rules
- Imported **once** in `AppModule`
- ❌ No components
- ❌ No feature-specific logic

---

### `core/guards/`
Manages route-level security.

- `auth.guard.ts` → Protects secured routes
- `guest.guard.ts` → Blocks logged-in users from public pages
- `role.guard.ts` → Role-based access control

---

### `core/services/`
Singleton services used across the app.

- `auth.service.ts` → Authentication state
- `token.service.ts` → Token/session handling
- `api.service.ts` → Central HTTP wrapper

---

### `core/config/`
Centralized configuration files.

- `api.config.ts` → API base URLs and versions
- `endpoints.ts` → All backend endpoints

---

## 🔹 `shared/` – Reusable UI Components

**Purpose:**  
Contains reusable, stateless components and utilities.

shared/
├── components/
├── directives/
├── pipes/
└── shared.module.ts

yaml
Copy code

### Rules
- ❌ No business logic
- ❌ No API calls
- ✅ Can be reused across features

---

## 🔹 `layout/` – Application Shells

**Purpose:**  
Defines different layouts for public and secured areas.

layout/
├── public-layout/
├── secure-layout/
└── layout.module.ts

yaml
Copy code

- `public-layout` → Login, landing, help pages
- `secure-layout` → Dashboard, booking, profile pages

---

## 🔹 `features/` – Business Features (Lazy Loaded)

Each feature represents a **business domain** and is lazy-loaded for performance.

features/
├── public/
└── secure/

yaml
Copy code

---

## 🌍 `features/public/` – Public Features

Features accessible without authentication.

features/public/
├── auth/
├── landing/
├── help/
└── about/

shell
Copy code

### `auth/` Feature
Handles authentication-related functionality.

auth/
├── pages/
├── components/
├── services/
├── auth-routing.module.ts
└── auth.module.ts

yaml
Copy code

---

## 🔒 `features/secure/` – Secured Features

Features accessible only after authentication.

features/secure/
├── dashboard/
├── booking/
├── vehicles/
├── profile/
└── settings/

shell
Copy code

### Example: `dashboard/`

dashboard/
├── pages/
├── components/
├── services/
├── dashboard-routing.module.ts
└── dashboard.module.ts

yaml
Copy code

---

## 🎨 `src/styles/` – Global Styling System

Centralized SCSS architecture for theming and consistency.

styles/
├── abstracts/
├── base/
├── components/
├── themes/
└── main.scss

markdown
Copy code

### Folder Purpose
- `abstracts/` → Variables, mixins, functions
- `base/` → Reset, typography, global styles
- `components/` → Shared component styles
- `themes/` → Light/dark or brand themes
- `main.scss` → Main stylesheet entry point

---

## 🖼 `src/assets/` – Static Assets

Stores static resources used in the UI.

assets/
├── images/
├── fonts/
├── animations/
├── mock/
└── i18n/

markdown
Copy code

- `images/` → Logos, icons, backgrounds
- `fonts/` → Custom fonts
- `animations/` → Lottie animations
- `mock/` → Mock API data
- `i18n/` → Localization files

---

## 🌍 `src/environments/` – Environment Configuration

Used for environment-specific settings.

environments/
├── environment.ts
├── environment.dev.ts
└── environment.prod.ts

yaml
Copy code

Used to manage:
- API URLs
- Feature flags
- Environment-specific variables

---

## 🧠 Architectural Principles

- **Core** → Infrastructure and enforcement
- **Shared** → Reusable UI and utilities
- **Layout** → UI shells
- **Features** → Business logic
- **Routing** → Security and access control

---

## ✅ Benefits of This Structure

- Clear separation of concerns
- Easy feature scaling
- Secure routing
- Team-friendly collaboration
- Production-ready architecture

---

## 🚨 Important Rules

- Never call APIs directly from components
- Never place authentication logic inside features
- Never import one feature module into another
- All secured routes must be guarded at the routing level

---

## 📌 Conclusion

This folder structure is designed to support **long-term growth**, **clean architecture**, and **enterprise-level Angular development**.

Follow these conventions strictly to maintain code quality and scalability.