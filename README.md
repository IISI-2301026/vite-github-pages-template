# Vue 3 + Vite + GitHub Pages 自動部署模板

這是一個預先設定好 GitHub Actions 自動部署的 Vue 3 + Vite 專案模板。

## ✨ 特色

- ⚡️ Vue 3 + Vite - 極速開發體驗
- 🚀 GitHub Actions - 自動建置和部署
- 📦 開箱即用 - Clone 後立即可用
- 🎯 零設定煩惱 - 專注於開發

## 🚀 快速開始

### 1. 使用此模板建立新專案

點擊右上角的 **"Use this template"** → **"Create a new repository"**

輸入你的新專案名稱，例如：`my-awesome-app`

### 2. Clone 到本地
```bash
git clone https://github.com/你的帳號/my-awesome-app.git
cd my-awesome-app
```

### 3. 修改 vite.config.ts

**⚠️ 重要步驟：** 打開 `vite.config.ts`，修改 `base` 設定：
```typescript
export default defineConfig({
  plugins: [vue()],
  base: '/repository-name/',  // ← 改成你的 repository 名稱
})
```

### 4. 安裝依賴
```bash
npm install
```

### 5. 本地開發
```bash
npm run dev
```

在瀏覽器開啟 http://localhost:5173

### 6. 推送到 GitHub
```bash
git add .
git commit -m "更新專案設定"
git push
```

### 7. 啟用 GitHub Pages

1. 進入你的 repository
2. 點擊 **Settings** → **Pages**
3. 在 **Source** 下選擇 **"GitHub Actions"**
4. 完成！

等待 2-3 分鐘，你的網站就會部署到：
```
https://你的帳號.github.io/my-awesome-app/
```

## 📝 之後如何更新網站？

超簡單！只要：
```bash
# 修改你的程式碼後
git add .
git commit -m "更新內容"
git push
```

GitHub Actions 會自動建置和部署，完全不需要手動操作！

## 🛠️ 可用指令
```bash
# 開發模式
npm run dev

# 建置專案
npm run build

# 預覽建置結果
npm run preview
```

## 📂 專案結構
```
my-awesome-app/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions 自動部署設定
├── public/                  # 靜態資源
├── src/
│   ├── assets/             # 圖片、樣式等資源
│   ├── components/         # Vue 組件
│   ├── App.vue            # 根組件
│   ├── main.ts            # 入口檔案
│   └── style.css          # 全域樣式
├── index.html
├── package.json
├── vite.config.ts          # ⚠️ 記得修改 base 設定
├── tsconfig.json           # TypeScript 設定
└── README.md
```

## ⚙️ 自訂設定

### 修改框架

如果你想用 React 或其他框架：

1. 修改 `vite.config.ts` 的 plugins
2. 調整相關依賴
```typescript
// React 範例
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

### 修改部署 branch

如果你想從其他 branch 部署，修改 `.github/workflows/deploy.yml`：
```yaml
on:
  push:
    branches:
      - main  # ← 改成你想要的 branch
```

## ❓ 常見問題

### Q: 網站顯示 404 或樣式跑掉？
**A:** 確認 `vite.config.ts` 的 `base` 設定是否正確，必須是 `/repository名稱/`

### Q: Actions 執行失敗？
**A:** 
1. 檢查 Settings > Actions > General 是否允許 Actions
2. 確認 Settings > Pages > Source 選擇 "GitHub Actions"
3. 查看 Actions 頁籤的錯誤訊息

### Q: 推送後多久會更新？
**A:** 通常 2-3 分鐘，可以在 Actions 頁籤查看進度

### Q: 可以使用自訂網域嗎？
**A:** 可以！在 Settings > Pages > Custom domain 設定

## 📚 相關資源

- [Vue 3 文檔](https://vuejs.org/)
- [Vite 文檔](https://vitejs.dev/)
- [GitHub Pages 文檔](https://docs.github.com/pages)
- [GitHub Actions 文檔](https://docs.github.com/actions)

## 📄 授權

MIT License - 自由使用

---