import { IconSvgProps } from '@/types'
import React from 'react'

export const CardIcon: React.FC<IconSvgProps> = ({ color, ...props }) => (
  <svg
    fill={color ? color : 'currentColor'}
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" />
  </svg>
)
