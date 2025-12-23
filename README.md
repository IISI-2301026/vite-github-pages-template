# Vite + GitHub Pages 模板

這是一個預先設定好 GitHub Actions 自動部署的 Vite 專案模板。

## 使用方法

### 1. 使用此模板建立新專案
點擊右上角的 **"Use this template"** → **"Create a new repository"**

### 2. 修改設定
編輯 `vite.config.js`，將 `base` 改成你的 repository 名稱：
```javascript
export default defineConfig({
  plugins: [vue()],
  base: '/你的repository名稱/',  // ← 改這裡
})
```

### 3. 啟用 GitHub Pages
1. 進入 **Settings** → **Pages**
2. Source 選擇 **"GitHub Actions"**

### 4. 開始開發
```bash
npm install
npm run dev
```

### 5. 部署
只要推送程式碼，GitHub Actions 會自動建置和部署：
```bash
git add .
git commit -m "更新內容"
git push
```

## 支援的框架

只需修改 `vite.config.js` 的 plugins：

- **Vue**: `import vue from '@vitejs/plugin-vue'`
- **React**: `import react from '@vitejs/plugin-react'`
- **Svelte**: `import { svelte } from '@sveltejs/vite-plugin-svelte'`

## 注意事項

- 確保 repository 是 Public
- 第一次部署需要 2-3 分鐘
- 建置輸出資料夾必須是 `dist`
