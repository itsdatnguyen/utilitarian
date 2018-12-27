import * as React from 'react'
import ReactMonacoEditor, { MonacoEditorProps as ReactMonacoEditorProps } from "react-monaco-editor";

interface MonacoEditorProps extends ReactMonacoEditorProps {
  
}

let MonacoEditor: React.FunctionComponent<MonacoEditorProps> = props => 
  <ReactMonacoEditor {...props}/>

export default MonacoEditor