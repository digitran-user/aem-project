import type React from "react"

export interface TitleSubtitleProps {
    title?: string
    subtitle?: string
    alignment?: string,
    style?:{
        titleFont?: string
        subtitleFont?: string
    }
  }

export const TitleSubtitle: React.FC<TitleSubtitleProps> = ({
    title = "",
    subtitle = "",
    alignment = "",
    style = {
        titleFont: "",
        subtitleFont: ""
    }
}) => {
    const alignmentClasses: any = {
        left: "text-left items-start",
        center: "text-center items-center",
        right: "text-right items-end",
      }    
    return (
        <div className={`container ${alignmentClasses[alignment]}`}>
          { title != "" && <h1 className="font-bold" style={{fontSize: style.titleFont}}>{title}</h1> }
          { subtitle != "" && <p className="text-wrap my-1" style={{fontSize: style.subtitleFont}} dangerouslySetInnerHTML={{__html: subtitle}} /> }
        </div>
    )
}