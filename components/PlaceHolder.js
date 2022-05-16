export default function PlaceHolder( props ){
    console.log(props);
    return(
        <div className="placeholder">
            <h1>{props.heading} - placeholder</h1>
        </div>
    )
}