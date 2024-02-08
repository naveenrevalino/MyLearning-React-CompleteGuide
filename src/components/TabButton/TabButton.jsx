
export default function ( props ) {

    return (
        
        <li><button className={props.isSelected ? 'active' : undefined} onClick={ props.onTabButtonClick }> { props.children } </button></li>
    );

}