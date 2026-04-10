import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import V2 from './versions/V2.tsx'
import V3 from './versions/V3.tsx'
import V4 from './versions/V4.tsx'
import V5 from './versions/V5.tsx'
import VersionSwitcher from './components/VersionSwitcher.tsx'

const version = parseInt(new URLSearchParams(window.location.search).get('v') ?? '1')

const VERSIONS: Record<number, React.ComponentType> = { 1: App, 2: V2, 3: V3, 4: V4, 5: V5 }
const Page = VERSIONS[version] ?? App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
    <VersionSwitcher current={version} />
  </StrictMode>,
)
