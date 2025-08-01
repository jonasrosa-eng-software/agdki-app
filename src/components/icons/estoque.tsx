import { IconSvgProps } from '@/types'
import React from 'react'

export const EstoqueIcon: React.FC<IconSvgProps> = ({ color, height, width, ...props }) => (
  <svg
    fill={color ? color : 'currentColor'}
    height={height ? height : '30px'}
    viewBox="0 -960 960 960"
    width={width ? width : '30px'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M214.46-98.67q-31.91 0-53.85-21.94t-21.94-53.85v-461.23q-17.08-6.66-28.54-24.83-11.46-18.18-11.46-40.38v-84.64q0-31.91 21.94-53.85t53.85-21.94h611.08q31.91 0 53.85 21.94t21.94 53.85v84.64q0 22.2-11.46 40.38-11.46 18.17-28.54 24.83v461.23q0 31.91-21.94 53.85t-53.85 21.94H214.46Zm-40.33-576.61h612.41q10.77 0 17.69-6.93 6.92-6.92 6.92-17.69v-85.64q0-10.77-6.92-17.69-6.92-6.92-17.69-6.92H174.13q-10.77 0-17.69 6.92-6.93 6.92-6.93 17.69v85.64q0 10.77 6.93 17.69 6.92 6.93 17.69 6.93Zm194.25 241.41h224.24V-481H368.38v47.13Z" />
  </svg>
)
