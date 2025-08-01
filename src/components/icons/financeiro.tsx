import { IconSvgProps } from '@/types'
import React from 'react'

export const FinanceiroIcon: React.FC<IconSvgProps> = ({ color, height, width, ...props }) => (
  <svg
    fill={color ? color : 'currentColor'}
    height={height ? height : '30px'}
    viewBox="0 -960 960 960"
    width={width ? width : '30px'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M341.54-474v-230.36h79.38V-474l-39.43-39.03L341.54-474Zm185.74 87.95v-482.26h79.39v402.88l-79.39 79.38Zm-372.51 96.87v-250.56h79.38v171.18l-79.38 79.38Zm-3.08 165.85 230.62-230.62 145.95 126.41L837.9-537.69h-94.98v-51.18h182.41v182.26h-51.18v-94.98L529.69-157.13 384.26-283.38 224.2-123.33h-72.51Z" />
  </svg>
)
