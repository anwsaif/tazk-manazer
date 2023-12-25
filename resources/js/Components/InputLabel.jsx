export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`mb-2.5 block font-medium text-black dark:text-white ` + className}>
            {value ? value : children}
        </label>
    );
}
