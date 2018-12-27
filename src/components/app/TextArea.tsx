import * as React from 'react'

export interface TextAreaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  color?: string
}

export const TextArea: React.FunctionComponent<TextAreaProps> = props => 
  <textarea {...props}>
    {props.children}

    <style jsx>{`
      textarea {
        padding: 0.6rem;
        background-color: var(--${props.color ? props.color : 'primary'});
        border: 0.1rem solid black;
      }
    `}</style>
  </textarea>
  