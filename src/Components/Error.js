import {useRouteError} from "react-router-dom";
const Error = () => {
    const err = useRouteError()
    console.log(err);
    return (
        <div>
            <h3>Oops! something went wrong..</h3>
            <h5>{err.data}</h5>
            <h5>{err.status}: {err.statusText}</h5>
        </div>
    )
};

export default Error;