import * as React from 'react'

import { Layout } from '../src/components/layout/Layout'
import { LoremIpsum } from "../src/components/LoremIpsumGenerator";

export default props =>
  <Layout>
    <div>
      <h1>Lorem Ipsum Generator</h1>
      <LoremIpsum></LoremIpsum>
    </div>
  </Layout>
