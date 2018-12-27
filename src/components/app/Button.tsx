import * as React from 'react'

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: string
}

export const Button: React.FunctionComponent<ButtonProps> = props => 
  <button {...props}>
    {props.children}

    <style jsx>{`
      button {
        padding: 0.6rem;
        background-color: var(--${props.color ? props.color : 'primary'});
        border: 0.1rem solid black;
      }
    `}</style>
  </button>