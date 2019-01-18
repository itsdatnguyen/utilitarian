import * as React from 'react'

import { MonacoEditor, MonacoEditorProps } from "../extensions/MonacoEditor";

import { Button } from "./app";
import { CSharpToTypescriptService } from "../services/CSharpToTypescript";

export interface CSharpToTypescriptConverterState {
  cSharpCode: string
  typescriptOutput: string
}

export class CSharpToTypescriptConverter extends React.Component<any, CSharpToTypescriptConverterState> {

  state = {
    cSharpCode: `// test code
public class PostDetailsDto
{
    public int PostId { get; set; }
    public string GroupName { get; set; }
    public string Author { get; set; }
    public int AuthorId { get; set; }
    public string Title { get; set; }
    public string Text { get; set; }
    public DateTime CreatedDate { get; set; }
    public string[] Tags { get; set; }
    public bool IsPinned { get; set; }
    public string FileUri { get; set; }
    public int VoteRating { get; set; }
    public int UserRating { get; set; }
    public int CommentCount { get; set; }
}`,
    typescriptOutput: ''
  }

  constructor(props) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)
    this.onConvertCode = this.onConvertCode.bind(this)
  }

  onInputChange(value: string) {
    this.setState({
      cSharpCode: value
    })
  }

  onConvertCode() {
    const converterService = new CSharpToTypescriptService()
    const convertedTSCode = converterService.convertCSharpToTypescript(this.state.cSharpCode, {

    });

    this.setState({
      typescriptOutput: convertedTSCode
    })
  }

  render() {
    const { cSharpCode, typescriptOutput } = this.state

    const editorProps: MonacoEditorProps = {
      options: {
        automaticLayout: true
      }
    }

    return (
      <div>
        <div className="editors">
          <div className="editor">
            <MonacoEditor height="500" language="csharp" value={cSharpCode} onChange={this.onInputChange} {...editorProps} />
          </div>
          <div className="editor">
            <MonacoEditor height="500" language="typescript" value={typescriptOutput} {...editorProps} />
          </div>
        </div>
        <Button onClick={this.onConvertCode}>Convert Code</Button>
        <style jsx>{`
          .editors {
            display: flex;
            flex-direction: column;
            max-width: calc(100vw - 2rem)
          } 

          .editor {
            border: 1px solid black;
            margin: 0.75rem;
            flex: 1 1 auto;
          }

          @media screen and (min-width: 60rem) {
            .editors {
              flex-direction: row;              
            }

            .editor {
              max-width: 50%;
              flex: 1 1 50%;
            }
          }
        `}</style>
      </div>
    )
  }
}
