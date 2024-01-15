import clsx from 'clsx'

const Tip = ({ className }: { className?: string }) => {
    return (
        <div
            className={clsx(
                `
                border-bottom
                group 
                relative 
                flex
                h-10
                w-full
                items-center 
                justify-center
                overflow-hidden
                bg-lightGreen
                lg:border-b-0`,
                className && className
            )}>
            <p className="mx-3 text-center text-xs font-semibold text-neutral-800 sm:text-sm">
                برای ذخیره برنامه ورزشی وارد حساب کاربری شوید
            </p>
        </div>
    )
}

export default Tip
