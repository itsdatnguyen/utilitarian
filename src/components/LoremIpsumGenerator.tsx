import * as React from 'react'
import { lorem } from 'faker'

import { Button, Input, TextArea, Select, SelectOption } from "./app";
import { UtilityService } from '../services';

export interface LoremIpsumState {
  count: number
  loremType: LoremType,
  output: string
}

export enum LoremType {
  words = 'words',
  slug = 'slug',
  lines = 'lines',
  sentences = 'sentences',
  paragraphs = 'paragraphs',
}

export class LoremIpsum extends React.Component<any, LoremIpsumState> {

  state = {
    count: 4,
    loremType: LoremType.paragraphs,
    output: lorem.paragraphs(4)
  }

  utilityService = new UtilityService()

  loremOptions: SelectOption[] = Object.values(LoremType)
    .map(o => ({
      text: this.utilityService.capitalize(o),
      value: o
    }))

  constructor(props) {
    super(props)

    this.onCountChange = this.onCountChange.bind(this)
    this.onGenerateClicked = this.onGenerateClicked.bind(this)
    this.onLoremOptionsChange = this.onLoremOptionsChange.bind(this)
  }

  getNewLoremIpsum(count: number) {
    return lorem[this.state.loremType](count)
  }

  onCountChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      count: +event.target.value
    })
  }

  onLoremOptionsChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      loremType: event.target.value as LoremType
    })
  }

  onGenerateClicked() {
    this.setState({
      output: this.getNewLoremIpsum(this.state.count)
    })
  }

  render() {
    const { count, loremType, output } = this.state

    return (
      <div>
        <Input type="number" value={count} onChange={this.onCountChange}/>
        <Select value={loremType} options={this.loremOptions} onChange={this.onLoremOptionsChange}></Select>
        <Button onClick={this.onGenerateClicked}>Generate Lorem Ipsum</Button>     
        <TextArea value={output} readOnly></TextArea>        
      </div>
    )
  }
}
