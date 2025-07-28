import { IconSvgProps } from '@/types'
import React from 'react'

export const RelatorioIcon: React.FC<IconSvgProps> = ({ color, height, width, ...props }) => (
  <svg
    fill={color ? color : 'currentColor'}
    height={height ? height : '30px'}
    viewBox="0 -960 960 960"
    width={width ? width : '30px'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M332.72-491.18h294.56v-44.51H332.72v44.51Zm0 121.44h294.56v-44.52H332.72v44.52Zm0 121.43h174.56v-44.51H332.72v44.51ZM255.79-98.67q-31.41 0-53.6-22.19Q180-143.04 180-174.46v-611.08q0-31.42 22.19-53.6 22.19-22.19 53.6-22.19h322.52L780-660.64v486.18q0 31.42-22.19 53.6-22.19 22.19-53.6 22.19H255.79Zm313.59-553.02h159.44L569.38-810.15v158.46Z" />
  </svg>
)
