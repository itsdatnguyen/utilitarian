import * as React from 'react'

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  color?: string
  wide?: boolean
}

export const Input: React.FunctionComponent<InputProps> = props => 
  <div>
    <input {...props}/>
    <style jsx>{`
      input {
        padding: 0.6rem;
        background-color: var(--${props.color ? props.color : 'primary'});
        border: 0.1rem solid black;
        width: ${props.wide ? '100%' : 'inherit'}
      }
    `}</style>
  </div>
