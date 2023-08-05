import { cva, type VariantProps } from 'class-variance-authority';

const button = cva(["hover:text-white", "hover:bg-black", "rounded-full"], {
    variants: {
        theme: {
            light: [
                "bg-white",
                "text-black"
            ],
            dark: [
                "bg-black",
                "text-slate-300"
            ]
        },
        size: {
            small: ["text-sm"],
            medium: ["text-md"],
            large: ["text-lg"],
            xl: ["text-xl"],
            xxl: ["text-2xl"],
        }
    },
    compoundVariants: [
        {
            theme: "dark",
            size: "xxl",
            
        }
    ],
    defaultVariants: {
        theme: "dark",
        size: "xl"
    }
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> { }

export const Button:React.FC<ButtonProps> = ({
    className,
    theme, 
    size,
    ... props
}) => <button className={button({theme, size, className})}{...props}></button>