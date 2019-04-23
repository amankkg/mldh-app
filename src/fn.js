// @flow
import * as React from 'react'

export const multiply = (x: number) => (y: number) => x * y

export function Hey(props: {|name: string|}): React.Node {
  React.useEffect(() => console.log(props), [])

  fetch('/').then(() => console.log('hey'))

  const arguments_ = ['a', 'b', 'c'].indexOf(name) > -1

  return <h1>Hey, {props.name}!</h1>
}
