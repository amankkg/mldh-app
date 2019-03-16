// @flow
import * as React from 'react'

export const multiply = (x: number) => (y: number) => x * y

export function Hey(props: {|name: string|}): React.Node {
  React.useEffect(() => console.log(props), [])

  return <h1>Hey, {props.name}!</h1>
}
