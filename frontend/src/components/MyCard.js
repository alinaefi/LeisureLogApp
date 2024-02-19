import {
    Card,
    CardText,
    CardTitle,
    Button
  } from "reactstrap";

const MyCard = (props) => {
    return(
    <Card body>
        <CardTitle tag="h5">
            {props.item.title}
        </CardTitle>
        <CardText>
            {props.item.description}
        </CardText>
        <Button>
            Go somewhere
        </Button>
    </Card>
    )
};

export default MyCard;