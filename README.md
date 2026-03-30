# ReactBits Copy (Next.js + Bun)

## 🇷🇺 Описание

Это проект — клон ReactBits, созданный на **Next.js + Bun** с немного изменённым дизайном и улучшенными UI/UX элементами (анимации, glass-эффекты, адаптивный navbar и т.д.).

Проект сделан для практики:

- современного фронтенда
- архитектуры Next.js (App Router)
- анимаций (Framer Motion)
- построения красивого UI

---

## ⚙️ Технологии

- Next.js (App Router)
- Bun
- TypeScript
- TailwindCSS
- Framer Motion

---

## 📁 Структура проекта

```
.
├── app/                     # App Router (страницы и layout)
│   ├── layout.tsx           # общий layout
│   ├── page.tsx             # главная страница
│   ├── globals.css          # глобальные стили
│   └── favicon.ico
│
├── components/              # UI компоненты
│   ├── other/               # мелкие/переиспользуемые компоненты
│   │   ├── GradientText.tsx
│   │   ├── MagicRings.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── sections/            # секции страницы
│   │   └── HeroSection.tsx
│   │
│   ├── Button.tsx
│   ├── Modal.tsx
│   └── Navbar.tsx
│
├── lib/                     # утилиты и хелперы
│   └── utils.ts
│
├── public/                  # статические файлы
│
├── .next/                   # билд Next.js (игнорируется)
├── node_modules/            # зависимости
│
├── конфиги:
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── tsconfig.json
│   ├── postcss.config.mjs
│   ├── eslint.config.mjs
│   └── components.json
│
├── bun.lock
├── package.json
├── README.md
├── AGENTS.md
└── CLAUDE.md
```

---

## 🚀 Установка и запуск

### 1. Установить Bun

```bash
curl -fsSL https://bun.sh/install | bash
```

---

### 2. Клонировать проект

```bash
git clone https://github.com/your-username/reactbits-copy.git
cd reactbits-copy
```

---

### 3. Установить зависимости

```bash
bun install
```

---

### 4. Запустить dev сервер

```bash
bun dev
```

Открыть:

```
http://localhost:3000
```

---

### 5. Сборка

```bash
bun run build
```

---

### 6. Продакшн запуск

```bash
bun start
```

---

## ✨ Фичи

- Адаптивный navbar (с бургер-меню)
- Анимации появления (stagger + blur)
- Glass UI элементы
- Чистая структура проекта
- Использование App Router
- Soon..

---

## ⚠️ Важно

Проект является неофициальным клоном и создан исключительно в образовательных целях.

---

---

# 🇺🇸 Description

This project is a ReactBits Copy built with **Next.js + Bun**, featuring a slightly modified design and enhanced UI/UX (animations, glass effects, responsive navbar, etc.).

It is built for:

- learning modern frontend development
- working with Next.js App Router
- practicing animations (Framer Motion)
- building clean UI systems

---

## ⚙️ Tech Stack

- Next.js (App Router)
- Bun
- TypeScript
- TailwindCSS
- Framer Motion

---

## 📁 Project Structure

```
.
├── app/                     # App Router (pages and layout)
│   ├── layout.tsx           # root layout
│   ├── page.tsx             # main page
│   ├── globals.css          # global styles
│   └── favicon.ico
│
├── components/              # UI components
│   ├── other/               # small/reusable components
│   │   ├── GradientText.tsx
│   │   ├── MagicRings.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── sections/            # page sections
│   │   └── HeroSection.tsx
│   │
│   ├── Button.tsx
│   ├── Modal.tsx
│   └── Navbar.tsx
│
├── lib/                     # utilities and helpers
│   └── utils.ts
│
├── public/                  # static assets
│
├── .next/                   # Next.js build output (ignored)
├── node_modules/            # dependencies
│
├── config files:
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── tsconfig.json
│   ├── postcss.config.mjs
│   ├── eslint.config.mjs
│   └── components.json
│
├── bun.lock
├── package.json
├── README.md
├── AGENTS.md
└── CLAUDE.md

```

---

## 🚀 Installation & Run

### 1. Install Bun

```bash
curl -fsSL https://bun.sh/install | bash
```

---

### 2. Clone repository

```bash
git clone https://github.com/your-username/reactbits-copy.git
cd reactbits-copy
```

---

### 3. Install dependencies

```bash
bun install
```

---

### 4. Run development server

```bash
bun dev
```

Open:

```
http://localhost:3000
```

---

### 5. Build project

```bash
bun run build
```

---

### 6. Start production

```bash
bun start
```

---

## ✨ Features

- Responsive navbar with burger menu
- Stagger + blur animations
- Glass UI components
- Clean architecture
- Next.js App Router usage
- Soon..

---

## ⚠️ Disclaimer

This project is for educational purposes only and is not affiliated with the original ReactBits.
