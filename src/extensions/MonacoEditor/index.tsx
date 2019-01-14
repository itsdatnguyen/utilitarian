import * as React from 'react'
import dynamic from 'next/dynamic'
import { MonacoEditorProps as ReactMonacoEditorProps } from "react-monaco-editor";
import merge from 'lodash/merge'

const ReactMonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false })

export interface MonacoEditorProps extends ReactMonacoEditorProps {
  
}

export const MonacoEditor: React.FunctionComponent<MonacoEditorProps> = newProps => {
  const defaultProps: ReactMonacoEditorProps = {
    options: {

    }
  }

  const props = merge(defaultProps, newProps) 

  return (
    <ReactMonacoEditor {...props}/>
  )
}