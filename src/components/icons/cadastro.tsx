import { IconSvgProps } from '@/types'
import React from 'react'

export const CadastroIcon: React.FC<IconSvgProps> = ({ color, height, width, ...props }) => (
  <svg
    fill={color ? color : 'currentColor'}
    height={height ? height : '30px'}
    viewBox="0 -960 960 960"
    width={width ? width : '30px'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M732.74-414.67v-124.41H608.33v-51.18h124.41v-124.41h51.18v124.41h124.41v51.18H783.92v124.41h-51.18ZM360-512.77q-56.48 0-94.03-37.56-37.56-37.55-37.56-94.03 0-56.99 37.56-94.29 37.55-37.3 94.03-37.3 56.48 0 94.03 37.3 37.56 37.3 37.56 94.29 0 56.48-37.56 94.03-37.55 37.56-94.03 37.56ZM60-175.05v-80.85q0-30 15.88-54.31 15.88-24.32 43.81-37.53 63.34-29.8 122.35-43.64 59.02-13.85 117.9-13.85t117.88 13.85q59 13.84 122.33 43.64 27.93 13.87 43.89 37.86Q660-285.9 660-255.9v80.85H60Z" />
  </svg>
)
