import * as React from 'react'

export const Footer: React.FunctionComponent = props =>
  <footer className="footer">
    footer
    <style jsx>{`    
      .footer {
        padding: 2em;
        background-color: var(--primary);
        border-top: 1em solid var(--primary);
        border-bottom: 1em solid var(--primary);
        font-size: 1
      }
      
      .footer__text {
        color: var(--text-light-grey);
      } 
    `}</style>
  </footer>
