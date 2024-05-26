import { IconTypes } from '@/types'

export function AddIcon({ fillColor = '#000' }: IconTypes) {
  return (
    <div className="h-6 w-6">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus">
        <g fill={fillColor} className="color000000 svgShape">
          <g fill={fillColor} className="color000000 svgShape">
            <rect
              width="24"
              height="24"
              opacity="0"
              transform="rotate(180 12 12)"
              fill={fillColor}
              className="color000000 svgShape"
            ></rect>
            <path
              d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"
              fill={fillColor}
              className="color000000 svgShape"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  )
}
