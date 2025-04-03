export const Button = ({
    selected = false,
    type = 'button',
    children,
    ...otherProps
}) => {
    return (
        <button
            className={selected ? 'active' : ''}
            type={type}
            {...otherProps}>
            {children}
        </button>
    );
}