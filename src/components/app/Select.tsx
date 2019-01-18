import * as React from 'react'

export interface SelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  color?: string
  wide?: boolean
  options: SelectOption[]
}

export interface SelectOption {
  text: string
  value: string
}

export const Select: React.FunctionComponent<SelectProps> = props => 
  <div>
    <select {...props}>
      {props.options.map(o =>
        <option value={o.value} key={o.value}>{o.text}</option>
      )}
    </select>
    <style jsx>{`
      select {
        padding: 0.6rem;
        background-color: var(--${props.color ? props.color : 'primary'});
        border: 0.1rem solid black;
        width: ${props.wide ? '100%' : 'inherit'}
      }
    `}</style>
  </div>
