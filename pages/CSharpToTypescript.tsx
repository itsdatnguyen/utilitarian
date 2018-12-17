import * as React from 'react'
import {Home} from '../src/components/Home'
import {Layout} from '../src/components/Layout'

import { CSharpToTypescriptConverter } from "../src/components/CSharpToTypescriptConverter";

export default props =>
  <Layout>
    <CSharpToTypescriptConverter/>
  </Layout>
