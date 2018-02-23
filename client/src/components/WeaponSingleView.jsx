import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const weaponSingleView = () => (
  <Card>
    <Image src={this.props.weapon.image} />
    <Card.Content>
      <Card.Header>{this.props.state.type}</Card.Header>
      <Card.Meta>{this.props.state.cost}</Card.Meta>
      <Card.Description>{this.props.state.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
     {this.props.state.condition}
    </Card.Content>
  </Card>
)

export default weaponSingleView


