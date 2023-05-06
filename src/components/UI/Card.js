import './Card.css'

function Card (props) {
  const classes = 'card ' + props.className //*********/

  return <div className={classes}>{props.children}</div> //contents inside <Card></Card> will be considered as children.
}

export default Card
