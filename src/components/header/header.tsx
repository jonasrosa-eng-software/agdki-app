import { Navbar } from '@heroui/react'
import { Persona } from '../user/persona'

const Header = () => {
  return (
    <Navbar className="fixed h-12 w-screen border-1 border-b-default-400 bg-default-200">
      <div className="flex justify-around">
        <Persona avatar="https://i.pravatar.cc/150?u=a042581f4e29026024d" statusUser="success" />
      </div>
    </Navbar>
  )
}

export { Header }
