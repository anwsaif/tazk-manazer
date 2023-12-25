export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
