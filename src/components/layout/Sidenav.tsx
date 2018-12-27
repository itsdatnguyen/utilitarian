import * as React from 'react'

export interface SidenavProps {
  isOpen: boolean
}

export const Sidenav: React.FunctionComponent<SidenavProps> = props => 
  <nav className="sidenav">
    <div>
      {props.children}
    </div>

    <style jsx>{`
      .sidenav {
        background-color: white;
        filter: brightness(90%);
        height: 100%;
      }
    `}</style>
    <style jsx>{`
      .sidenav {
        transform: translateX(${props.isOpen ? '0' : '-200%'});
        width: ${props.isOpen ? '14rem' : '0'};
      }
    `}</style>
  </nav>