import { Tooltip } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SocialLink(props) {
    return (
        <>
            {!props.tooltip ? (
                <Link href={props.href}>
                    <a target="_blank" rel="noreferrer noopener" className={`${props.customColour ? "" : "hover:text-gray-300"}${props.className ? " " + props.className : ""} transition ease-in-out duration-250`}>
                        <FontAwesomeIcon icon={props.icon} />
                    </a>
                </Link>
            ) : (
                <Link href={props.href}>
                    <a target="_blank" rel="noreferrer noopener" className={`${props.customColour ? "" : "hover:text-gray-300"}${props.className ? " " + props.className : ""} transition ease-in-out duration-250`}>
                        <Tooltip title={props.tooltip} componentsProps={{
                            tooltip: {
                                sx: {
                                    bgcolor: props.tooltipColour ? props.tooltipColour : "#7289da"
                                }
                            }
                        }}>
                            <FontAwesomeIcon icon={props.icon} />
                        </Tooltip>
                    </a>
                </Link>
            )}
        </>
    );
};