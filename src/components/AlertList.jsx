import { Alert } from './components/Alert';

const AlertList = () => {
    return (
        <>
            <Alert variant="info" outlined={true} elevated={false} >Info alert</Alert>
            <Alert variant="warning" outlined={false} elevated={true}>Warning alert</Alert>
            <Alert variant="error" outlined={false} elevated={true}>Error alert</Alert>
            <Alert variant="success" outlined={true} elevated={false}>Success alert</Alert>
        </>
    );
}

export default AlertList;