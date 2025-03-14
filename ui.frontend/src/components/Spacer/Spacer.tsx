import type React from "react"
import '../Spacer/Spacer.css';

export interface SpacerProps {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }

export const Spacer: React.FC<SpacerProps> = ({
    top = "10px",
    bottom = "10px",
    left = "10px",
    right = "10px"
}) => {
    return (
        <div className="spacer-border" style={{marginTop: top, marginBottom: bottom, marginLeft: left, marginRight: right}}></div>
    )
}
