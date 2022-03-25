import styledComponents from "styled-components";
import { Link } from "react-router-dom";
export default function MovieSession(props){
    const list = props.showtimes
    return(
        <Session>
            <span>{`${props.weekday} - ${props.date}`}</span>
            <Container>
                {list.map(e =>{
                    return (
                        <Link to={`/assentos/: ${movieId}`}>
                            <button>{e.name}</button>
                        </Link>
                    )
                })}
            </Container>
        </Session>
    )
}
const Session = styledComponents.div`
    color:black;

`
const Container = styledComponents.div`
    display:flex;

    button{
        background-color:#E8823A;
        width:85px;
        height:45px;
        color:white;
        display:flex;
        margin:20px 8px;
        border:none;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`