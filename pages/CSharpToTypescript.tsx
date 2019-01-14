import * as React from 'react'
import { Layout } from '../src/components/layout/Layout'

import { CSharpToTypescriptConverter } from "../src/components/CSharpToTypescriptConverter";

export default props =>
  <Layout>
    <div>
      <h1>C# to Typescript Converter</h1>
    </div>
    <CSharpToTypescriptConverter/>
  </Layout>
