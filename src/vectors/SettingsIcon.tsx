import { FC, SVGProps } from 'react'
import { getMenuIconColors } from '~/constants/colors'

type Props = {
    isActive?: boolean
    className?: string
} & SVGProps<SVGSVGElement>

export const SettingsIcon: FC<Props> = ({
    isActive = false,
    className,
    ...props
}) => {
    const colors = getMenuIconColors(isActive)

    return (
        <svg
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M8.19751 1.74882C8.92409 0.237699 11.0759 0.237698 11.8025 1.74882L11.8399 1.8267C12.2823 2.74686 13.3468 3.18604 14.3094 2.84554L14.537 2.76502C16.0896 2.2158 17.5719 3.73966 16.9799 5.27648C16.6101 6.23677 17.0596 7.31846 18.001 7.73415C19.5348 8.41147 19.5348 10.5886 18.001 11.266C17.0596 11.6817 16.6101 12.7633 16.9799 13.7236C17.5719 15.2604 16.0896 16.7843 14.537 16.2351L14.3094 16.1546C13.3468 15.8141 12.2823 16.2533 11.8399 17.1734L11.8025 17.2513C11.0759 18.7624 8.92409 18.7624 8.19751 17.2513L8.16007 17.1734C7.71764 16.2533 6.65315 15.8141 5.6906 16.1546L5.46299 16.2351C3.91039 16.7843 2.42809 15.2604 3.02004 13.7236C3.38992 12.7633 2.94037 11.6817 1.99901 11.266C0.465173 10.5886 0.465173 8.41147 1.99901 7.73415C2.94037 7.31846 3.38992 6.23677 3.02004 5.27648C2.42809 3.73966 3.91039 2.2158 5.46299 2.76502L5.6906 2.84554C6.65315 3.18604 7.71764 2.74686 8.16007 1.8267L8.19751 1.74882Z"
                fill={colors.bg}
            />
            <circle cx="10.25" cy="9.34998" r="3" fill={colors.accent} />
        </svg>
    )
}
