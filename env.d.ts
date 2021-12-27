/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_API_KEY: string
  readonly VITE_APP_AUTH_DOMAIN: string
  readonly VITE_APP_PROJECT_ID: string
  readonly VITE_APP_STORAGE_BUCKET:string
  readonly VITE_APP_MESSAGING_SENDER_ID: string
  readonly VITE_APP_APP_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
