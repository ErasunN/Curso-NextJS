import { MainLayout } from "../../components/layouts/MainLayout"

function Pricing() {
  return (
      <>
        <h1 className={'title'}>Princing Page</h1>

        <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/pricing/index.js</code>
        </p>
      </>
  )
}

Pricing.getLayout = function getLayout( page ){
    return (
        <MainLayout>
            { page }
        </MainLayout>
    )
}

export default Pricing