import * as React from 'react'
import { SVGProps } from 'react'
const SvgSearchIcon = (props: SVGProps<SVGSVGElement> , fill: string = '#A8ACAE') => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M18.696 17.053A10.448 10.448 0 0 0 21 10.5C21 4.7 16.3 0 10.5 0S0 4.7 0 10.5 4.7 21 10.5 21a10.45 10.45 0 0 0 6.554-2.304l4.963 4.964a1.162 1.162 0 0 0 1.643-1.642l-4.964-4.965Zm-13.978-.77A8.147 8.147 0 0 1 2.322 10.5c0-2.262.914-4.299 2.396-5.782A8.149 8.149 0 0 1 10.5 2.322c2.262.001 4.299.914 5.782 2.396a8.147 8.147 0 0 1 2.396 5.782 8.147 8.147 0 0 1-2.395 5.781l-.001.002a8.15 8.15 0 0 1-5.782 2.394 8.15 8.15 0 0 1-5.782-2.395Z'
      fill={fill}
      fillRule='nonzero'
    />
  </svg>
)
export default SvgSearchIcon
