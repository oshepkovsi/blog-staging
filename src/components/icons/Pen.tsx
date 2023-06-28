import * as React from 'react'
import { SVGProps } from 'react'
const SvgPen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m19.402 7.526-.532.509-.353.338-.346-.346-2.199-2.198-.346-.346.339-.354.509-.531.007-.008c.43-.43.925-.679 1.464-.679.539 0 1.035.25 1.464.679m-.007 2.936.008-2.936m-.008 2.936.008-.008c.421-.422.686-.917.686-1.464 0-.547-.264-1.042-.686-1.464m-.008 2.936.008-2.936M3.65 20.351l.07-.334.001-.006.81-4.072.017-.084 11.6-11.599.002-.002a2.533 2.533 0 0 1 1.796-.754 2.533 2.533 0 0 1 1.796.753l.005.005a2.518 2.518 0 0 1 0 3.591l-.003.003-11.6 11.6-.082.017h-.001l-4.071.81h-.006l-.335.072ZM15.638 6.163l-.353-.353-.354.353-8.955 8.954-.486.486.613.313a4.545 4.545 0 0 1 1.98 1.98l.313.611.486-.486 8.953-8.952.354-.354-.354-.354-2.197-2.198ZM5.569 16.21l-.558-.225-.118.59-.486 2.43-.148.736.736-.148 2.43-.485.59-.118-.225-.56a4.006 4.006 0 0 0-2.22-2.22Z'
      fill='#343240'
      stroke='#A8ACAE'
    />
  </svg>
)
export default SvgPen
