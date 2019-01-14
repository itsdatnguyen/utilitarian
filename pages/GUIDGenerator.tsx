import * as React from 'react'

import { Layout } from '../src/components/layout/Layout'
import { GUIDGenerator } from "../src/components/GUIDGenerator";

export default props =>
  <Layout>
    <div>
      <h1>GUID Generator</h1>
      <GUIDGenerator></GUIDGenerator>
    </div>
  </Layout>
