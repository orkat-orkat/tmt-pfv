import { defineConfig } from 'vite'
import { VitePluginFonts } from 'vite-plugin-fonts'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    VitePluginFonts({
      google: {
        families: [
          'M PLUS 1p', 'Rampart One' ,'Kosugi Maru', 'Shippori Mincho','RocknRoll One','Noto Sans Japanese' // GoogleFontsからここに導入したいフォント名を入れる
        ],
      }
    })
  ]
})
