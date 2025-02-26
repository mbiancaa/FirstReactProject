/** Inline Styles */

// const alertStyles = {
//     color: "white",
//     fontWeight: "bold"
// };

/** Dynamic Styles */
// const getBackgroundColor = (variant) => {
//     switch (variant) {
//         case "info":
//             return "blue";
//         case "success":
//             return "green";
//         case "warning":
//             return "yellow";
//         case "error":
//             return "red";
//         default:
//             throw new Error(`Unsuported varint prop value - ${variant}`);
//     }
// }

import "../styles/Alert.css";
// import css from "../styles/Alert.module.css";
import clsx from "clsx";
import { HiUser } from "react-icons/hi";


export const Alert = ({ variant, outlined, elevated, children }) => {
    // const classNames = ["alert", variant];
    // if (outlined) {
    //     classNames.push("outlined");
    // }
    return (
        <p
            // className={css.alert}
            className={clsx(
                "container",
                "alert",
                variant,
                outlined && "outlined",
                elevated && "is-elevated"
            )}
        // className={classNames.join(" ")}
        // style={{
        //     ...alertStyles,
        //     backgroundColor: getBackgroundColor(variant),
        // }}
        >
            {children}
            <HiUser size="40" className="icon-user" />
        </p>
    );
}