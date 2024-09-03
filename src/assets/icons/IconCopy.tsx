import React, { FC } from 'react'


interface IconCopyProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const IconCopy: FC<IconCopyProps> = (props) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M4.11133 6.18566C4.11133 5.63551 4.32987 5.1079 4.71889 4.71889C5.1079 4.32987 5.63551 4.11133 6.18566 4.11133H12.9259C13.1983 4.11133 13.468 4.16498 13.7197 4.26923C13.9714 4.37347 14.2 4.52627 14.3927 4.71889C14.5853 4.91151 14.7381 5.14018 14.8423 5.39185C14.9466 5.64352 15.0002 5.91326 15.0002 6.18566V12.9259C15.0002 13.1983 14.9466 13.468 14.8423 13.7197C14.7381 13.9714 14.5853 14.2 14.3927 14.3927C14.2 14.5853 13.9714 14.7381 13.7197 14.8423C13.468 14.9466 13.1983 15.0002 12.9259 15.0002H6.18566C5.91326 15.0002 5.64352 14.9466 5.39185 14.8423C5.14018 14.7381 4.91151 14.5853 4.71889 14.3927C4.52627 14.2 4.37347 13.9714 4.26923 13.7197C4.16498 13.468 4.11133 13.1983 4.11133 12.9259V6.18566Z" stroke="currentColor" strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.78711 11.6843C1.54833 11.5487 1.34973 11.3522 1.21148 11.1149C1.07323 10.8776 1.00026 10.608 1 10.3333V2.55556C1 1.7 1.7 1 2.55556 1H10.3333C10.9167 1 11.234 1.29944 11.5 1.77778" stroke="currentColor" strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default IconCopy