import { IconSvgProps } from '@/types'
import React from 'react'

export const CreateIcon: React.FC<IconSvgProps> = ({ color, height, width, ...props }) => (
  <svg
    fill={color ? color : 'currentColor'}
    height={height ? height : '30px'}
    viewBox="0 -960 960 960"
    width={width ? width : '30px'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M448.67-280h66.66v-164H680v-66.67H515.33V-680h-66.66v169.33H280V-444h168.67v164Zm31.51 200q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Z" />
  </svg>
)
