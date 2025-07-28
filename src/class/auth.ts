class Persona {
  id = ''
  name = ''
  avatar = ''
  idSeguimento = ''
  isClient = true
}

export class Auth {
  isAuthenticated = true
  user: Persona = new Persona()
}
