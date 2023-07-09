
import { useRouteError } from "react-router-dom";


export const ErrorPage=()=>{
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            Big Fat Error somewhere.... probably to do with router
            <a href= {'../'} className="button_link">Back to title page</a>
        </div>
    )
}