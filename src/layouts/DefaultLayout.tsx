import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet /> {/* espaço onde será inserido o conteúdo */}
    </div>
  )
}
