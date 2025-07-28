import { Auth } from '@/class/auth'
import { Main, MainClient } from '@/components/main/main'
import { HomeLayout } from '@/layouts/home-layout'

type HomeProps = {
  auth: Auth
}

const Home = (props: HomeProps) => {
  const { auth } = props
  return <HomeLayout>{auth.user.isClient ? <MainClient /> : <Main />}</HomeLayout>
}

export { Home }
