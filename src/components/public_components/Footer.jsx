import styledComponents from "styled-components"
export default function Footer(props){
    let weekday = 0
    let date = 0
    if(props.session !== undefined){
        weekday = props.session 
        date = props.session
    }
    console.log(props.session)
    return (
        <FooterContainer>
            <div>
                <div className="movie-image">
                    <img src={`${props.url}`} alt="" />
                </div>
                <div className="infos">

                    <span>{props.movie}</span>
                    {weekday !== 0 ? <span>{`${weekday.weekday} ${date.date}`}</span> : null}
                </div>
            </div>

        </FooterContainer>
    )
}

const FooterContainer = styledComponents.div`
    display:flex;
    width: 375px;
    height: 117px;
    left: 0px;
    bottom: 0;
    margin-top: 20px;
    background: #DFE6ED;
    border-top: 2px solid #9EADBA;
    position: relative;
    .movie-image{
        position: absolute;
        width: 64px;
        height: 89px;
        left: 20px;
        bottom: 14px;

        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        background-color: #ffffff;
    }
    .movie-image img{
        width: 50px;
        height: 72px;
        position: absolute;
        left: 6.3px;
        top: 9px;
    }
    .infos{
        position: absolute;
        display: flex;
        flex-direction: column;
        left: 100px;
        margin-top: 30px;
    }
    .infos span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        display: flex;
        align-items: center;
        margin:0;
        color: #293845;
    }
`