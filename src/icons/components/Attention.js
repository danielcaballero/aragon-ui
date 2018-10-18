import React from "react"

const Attention = props => (
  <svg width={22} height={22} viewBox="0 0 22 22" {...props}>
    <g transform="translate(4 4)" fill="none" fillRule="evenodd">
      <rect fill={props.bg || "#DAEAEF"} width={14} height={14} rx={7} />
      <path
        d="M6.155 8.547h1.298V3.3H6.155v5.247zM6.045 11h1.529V9.537H6.045V11z"
        fill={props.color || "#6D777B"}
      />
    </g>
  </svg>
)

export default Attention
