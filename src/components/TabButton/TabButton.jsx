
export default function ( props ) {

    return (
        
        <li><button onClick={ props.onTabButtonClick }> { props.children } </button></li>
    );

}