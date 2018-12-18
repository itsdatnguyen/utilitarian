import * as React from 'react'
import {Nav} from './Nav'
import {Footer} from './Footer'
import Head from 'next/head'

import '../../../sass/index.sass'

export const Layout: React.FunctionComponent = props =>
  <div id="layout">
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Nav/>
    <main>
      {props.children}
    </main>
    <Footer/>
  </div>
