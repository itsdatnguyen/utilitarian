import * as React from 'react'
import dynamic from 'next/dynamic'

import { Button, TextArea } from "./app";
const MonacoEditor = dynamic(import('../extensions/MonacoEditor'), { ssr: false })
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
        return (
          <div>
            <div className="editors">
              <div className="editor">
                <MonacoEditor width="500" height="500" language="csharp" value={cSharpCode} onChange={this.onInputChange}/>
              </div>
              <div className="editor">
                <MonacoEditor width="500" height="500" language="typescript" value={typescriptOutput}/>
              </div>
            </div>
            <Button onClick={this.onConvertCode}>Convert Code</Button>
            <style jsx>{`
              .editors {
                display: flex;
              } 

              .editor {
                border: 1px solid black;
              }
            `}</style>
          </div>
        )
    }
}
