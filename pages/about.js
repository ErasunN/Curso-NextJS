import { BorderLayout } from '../components/layouts/BorderLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function About() {
  return (
    <>
      <h1 className={'title'}>About Page</h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/about.js</code>
      </p>
    </>
  )
}

About.getLayout = function getLayout( page ){
  return (
    <MainLayout>
      <BorderLayout>
        {page}
      </BorderLayout>
    </MainLayout>
  )
}
