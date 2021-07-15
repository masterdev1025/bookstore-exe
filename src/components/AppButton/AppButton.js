import { Button } from 'reactstrap';
const AppButton = (props) => {
    return (
        <Button style={{ backgroundColor: props.backgroundColor }}>{props.children}</Button>
    )
}

export default AppButton;