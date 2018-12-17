import * as React from 'react'

import { CSharpToTypescriptService } from "../services/CSharpToTypescript";

export interface CSharpToTypescriptConverterState {
    cSharpCode: string
    typescriptOutput: string
}

export class CSharpToTypescriptConverter extends React.Component<any, CSharpToTypescriptConverterState> {

    state = {
        cSharpCode: '',
        typescriptOutput: ''
    }

    constructor(props) {
        super(props)

        this.onInputChange = this.onInputChange.bind(this)
        this.onConvertCode = this.onConvertCode.bind(this)
    }

    onInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({
            cSharpCode: event.target.value
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
                <textarea value={cSharpCode} onChange={this.onInputChange}></textarea>
                <button onClick={this.onConvertCode}>Convert Code</button>
                <div>{typescriptOutput}</div>
            </div>
        )
    }
}
