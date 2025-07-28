// import { ReactElement, Suspense, useEffect, useState } from 'react'
// import { SignInForm } from '../card/CardsignIn'
// import { SignUpForm } from '../card/signUp'
// import { statusExecuted, StatusExecuted } from '@/enum/sistema'
// import { addToast } from '@heroui/react'

// interface IAction {
//   keyRequired?: boolean
//   element: ReactElement
// }

// interface ISignActionsProps {
//   actKey: string
//   actLabel: string
//   action: boolean
//   onExecuted: (status: StatusExecuted) => void
// }

// const renderSignActions = (props: ISignActionsProps): IAction => {
//   const { actKey, action, onExecuted } = props
//   const actions = new Map()

//   //Criar Usuário
//   actions.set('SignUp', {
//     keyRequired: false,
//     element: <SignUpForm isOpen={action} onExecuted={onExecuted} />,
//   })

//   //Logar Usuário
//   actions.set('SignIn', {
//     keyRequired: false,
//     element: <SignInForm isOpen={action} onExecuted={onExecuted} />,
//   })

//   return actions.get(actKey)
// }

// const SignActions = (props: ISignActionsProps) => {
//   const { actLabel, onExecuted } = props
//   const [element, setElement] = useState<JSX.Element | null>()

//   useEffect(() => {
//     const rst = renderSignActions(props)

//     if (!rst) {
//       addToast({
//         title: `${actLabel}`,
//         description: `Ação não encontrada`,
//         color: 'warning',
//       })
//       onExecuted(statusExecuted.refresh)
//       return
//     }

//     setElement(rst.element)
//   }, [])

//   return <Suspense fallback={null}>{element}</Suspense>
// }

// export { SignActions }
