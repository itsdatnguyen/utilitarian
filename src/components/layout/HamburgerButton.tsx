import * as React from 'react'

export interface HamburgerProps {
  isOpen: boolean
  onHamburgerClicked: () => void
}

export const HamburgerButton: React.FunctionComponent<HamburgerProps> = props =>
  <button className="hamburger-button" onClick={props.onHamburgerClicked}>
    {props.isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
    
    <style jsx>{`
      .hamburger-button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 4rem;
        cursor: pointer;
      }

      .hamburger-button i {
        font-size: 1.6rem;
      }
    `}</style>
  </button>