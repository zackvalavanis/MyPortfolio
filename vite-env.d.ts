
interface ImportMetaEnv {
  readonly VITE_YOUR_SERVICE_ID: string
  readonly VITE_YOUR_TEMPLATE_ID: string
  readonly VITE_YOUR_PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}