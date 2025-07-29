import { IconSvgProps } from '@/types'
import React from 'react'

export const ArronLeft: React.FC<IconSvgProps> = ({ color, height, width, ...props }) => (
  <svg
    fill={color ? color : 'currentColor'}
    height={height ? height : '30px'}
    viewBox="0 -960 960 960"
    width={width ? width : '30px'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M400-240 160-480l240.67-240.67L448-673.33l-160 160h512.67v66.66H288l159.33 159.34L400-240Z" />
  </svg>
)
