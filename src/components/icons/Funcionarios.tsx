import { IconSvgProps } from '@/types'
import React from 'react'

export const FuncionarioIcon: React.FC<IconSvgProps> = ({ color, height, width, ...props }) => (
  <svg
    fill={color ? color : 'currentColor'}
    height={height ? height : '30px'}
    viewBox="0 -960 960 960"
    width={width ? width : '30px'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M218.46-142.67q-31.42 0-53.6-22.19-22.19-22.18-22.19-53.6v-523.08q0-31.42 22.19-53.6 22.18-22.19 53.6-22.19h180.16q-1.49-31.54 21.69-58.95 23.18-27.41 59.69-27.41t59.69 27.41q23.18 27.41 21.69 58.95h180.16q31.42 0 53.6 22.19 22.19 22.18 22.19 53.6v523.08q0 31.42-22.19 53.6-22.18 22.19-53.6 22.19H218.46ZM480-797.36q12 0 20.83-8.5 8.84-8.5 8.84-20.5 0-11.49-8.84-20.58-8.83-9.09-20.83-9.09-12 0-20.5 9.09t-8.5 20.58q0 12 8.5 20.5t20.5 8.5Zm.82 392.59q54.42 0 92.14-38.04 37.71-38.05 37.71-92.32 0-54.42-37.71-92.13-37.72-37.71-92.14-37.71-54.27 0-92.31 37.71-38.05 37.71-38.05 92.13 0 54.27 38.05 92.32 38.04 38.04 92.31 38.04ZM210.77-193.85h538.46q8.46-16.23 11.54-16.02 3.08.2 5.38-18.33-56.61-54.98-128.98-87.03-72.38-32.05-157.17-32.05-84.79 0-157.17 32.05-72.37 32.05-128.98 87.03 2.3 18.53 5.38 18.33 3.08-.21 11.54 16.02Z" />
  </svg>
)
