import { MainLayout } from '../components/layouts/MainLayout'

export default function About() {
  return (
    <MainLayout>
      <h1 className={'title'}>About Page</h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/about.js</code>
      </p>
    </MainLayout>
  )
}
