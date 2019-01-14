import * as React from 'react'

import { Button, Input } from "./app";
import { GUIDService, UtilityService } from "../services";

export interface GUIDGeneratorState {
  guid: string
}

export class GUIDGenerator extends React.Component<any, GUIDGeneratorState> {

  readonly guidService = new GUIDService()
  readonly utilityService = new UtilityService();

  state = {
    guid: this.generateGuid(),
  }

  constructor(props) {
    super(props)

    this.onGenerateGuid = this.onGenerateGuid.bind(this)
    this.onCopyGuid = this.onCopyGuid.bind(this)
  }

  onGenerateGuid() {
    const newGuid = this.generateGuid()
    
    this.setState({
      guid: newGuid
    })
  }

  onCopyGuid() {
    this.utilityService.copyToClipboard(this.state.guid)
  }

  generateGuid() {
    return this.guidService.generateGuid({
      version: 4
    })
  }

  render() {
    const { guid } = this.state

    return (
      <div>
        <Button onClick={this.onGenerateGuid}>Generate New GUID</Button>
        <div className="guid-output">
          <Input value={guid} wide readOnly/>
          <Button onClick={this.onCopyGuid}>Copy GUID</Button>
        </div>
        <style jsx>{`
          .guid-output {
            max-width: 25rem;
          }
        `}</style>
      </div>
    )
  }
}
