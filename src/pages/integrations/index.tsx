import { Layout } from '@/components/custom/layout'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { useAuth } from '@/lib/auth/hook'
import { Navigate, Outlet } from 'react-router-dom'

export default function Products() {
  const { isSignedIn } = useAuth()

  if (!isSignedIn) {
    return <Navigate to={'/sign-in'} replace={true} />
  }

  return (
    <Layout fixed>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <div className='flex w-full items-center justify-between'>
          <h1 className='text-2xl font-bold tracking-tight'>Integrations</h1>
          <div className='flex items-center space-x-4'>
            <ThemeSwitch />
            <UserNav />
          </div>
        </div>
      </Layout.Header>

      {/* ===== Content ===== */}
      <Layout.Body className='flex flex-col'>
        <Outlet />
      </Layout.Body>
    </Layout>
  )
}
