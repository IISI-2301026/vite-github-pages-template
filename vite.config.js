import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // ⚠️ 重要：建立新專案後，請將 'repository-name' 改成你的 repository 名稱
  base: '/repository-name/',
})
