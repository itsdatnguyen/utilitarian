import * as React from 'react'
import Head from 'next/head'
import { view } from "react-easy-state";

import { Nav } from './Nav'
import { Footer } from './Footer'
import { Sidenav } from "./Sidenav"
import { SidenavItems } from "./SidenavItems";

import { NavStore } from "../../store";

import '../../../sass/index.sass'

let LayoutComponent = class extends React.Component {

  render() {
    return (
      <div id="layout">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <Nav/>
        <div className="footer-spacing-content">
          <div className="sidenav-spacing-content">
            <div className="sidenav">
              <Sidenav isOpen={NavStore.isSidenavOpen}>
                <SidenavItems/>
              </Sidenav>
            </div>
            <main className="main">
              {this.props.children}
            </main>
          </div>
          <Footer/>
        </div>
        <style jsx>{`
          .footer-spacing-content {
            height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .sidenav-spacing-content {
            display: flex;
            flex-direction: row;
            padding-top: 4.4rem;
            flex: 1 1 auto;
          }

          .main {
            flex: 1 1 auto;
            padding: 1rem;
          }

          .footer {
            flex: 0 0 auto;
          }
        `}</style>
        <style jsx>{`
          .sidenav {
            display: ${NavStore.isSidenavOpen ? 'block' : 'none'};
          }
        `}</style>
      </div>
    )
  }
}

export const Layout = view(LayoutComponent)