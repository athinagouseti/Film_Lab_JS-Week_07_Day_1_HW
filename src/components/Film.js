
const Film = ({url, children}) => {

    return (
        <>
        <li>            
            <a href={url}><h2>{children}</h2></a>
        </li>
        </>
    )
};


export default Film;