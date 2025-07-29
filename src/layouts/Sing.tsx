import { ReactNode } from 'react'

interface ISingLayoutProps {
  children: ReactNode
}

const SingLayout = (props: ISingLayoutProps) => {
  const { children } = props
  return <div className="flex h-screen w-screen items-center justify-center bg-background">{children}</div>
}

export { SingLayout }
