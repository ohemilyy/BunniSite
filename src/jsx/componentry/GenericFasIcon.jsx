import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GenericFasIcon(props) {
    return (
        <div className="Skills-RowItem">
            <FontAwesomeIcon icon={props.icon} size={props.size} data-tip={props.tooltip} style={props.style} />
        </div>
    );
};

export default GenericFasIcon;