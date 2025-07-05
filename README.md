# 🧩 Component React Tailwind UI

Kumpulan komponen UI siap pakai menggunakan **React** dan **Tailwind CSS**, dirancang untuk mempercepat pembuatan antarmuka yang modern, responsif, dan dapat digunakan kembali.

---

## 🚀 Fitur

- ⚛️ Dibangun dengan React
- 🎨 Styling modern via Tailwind CSS
- ♻️ Komponen reusable (seperti Button, Navbar, Modal, dll)
- 🌙 Dukungan Dark Mode (opsional)
- 📦 Siap pakai untuk project dengan Vite / React

---

## 📁 Struktur Folder

```bash
component-react-tailwind-ui/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Navbar.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## ⚙️ Instalasi

1. **Clone repositori**

```bash
git clone https://github.com/username/component-react-tailwind-ui.git
cd component-react-tailwind-ui
```

2. **Install dependensi**

```bash
npm install
```

3. **Jalankan development server**

```bash
npm run dev
```

> Pastikan kamu sudah menginstall Node.js dan npm.

---

## 🧪 Cara Menggunakan Komponen

Contoh penggunaan komponen `Button`:

```jsx
import Button from './components/Button';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Button label="Klik Saya" />
    </div>
  );
}
```

---

## 🧱 Daftar Komponen (Contoh)

| Komponen  | Deskripsi                           |
|-----------|-------------------------------------|
| `Button`  | Tombol interaktif berbagai ukuran   |
| `Navbar`  | Navigasi atas responsif             |
| `Card`    | Kotak informasi dengan gambar/text  |
| `Modal`   | Dialog popup dengan backdrop        |
| `Input`   | Input field dengan label dan error  |

---

## 📄 Lisensi

MIT License © 2025 [Azril Pramudia](https://github.com/azrilpramudia)

---

## 🤝 Kontribusi

Pull request dan kontribusi sangat diterima!

Jika ingin menambahkan komponen baru:
1. Tambahkan ke folder `src/components`
2. Tambahkan dokumentasi singkat di `README.md`
3. Buat PR ke repository ini

---

## 📸 Preview (Opsional)

> Tambahkan screenshot UI jika tersedia di masa depan.
