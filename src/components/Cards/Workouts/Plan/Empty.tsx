import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'

const EmptyWorkouts = () => {
    return (
        <div className="flex flex-col">
            <p className="m-4 text-center text-xs font-semibold">
                لیست تمرین شما خالی است.
            </p>
            <Link className="border-top h-16 w-full shrink-0" href="/moves">
                <Button
                    cta="اضافه کردن حرکت"
                    placeholder={
                        <Image
                            src="/icon/arrow-left.svg"
                            alt="arrow left"
                            width={24}
                            height={24}
                        />
                    }
                    alt="cta button"
                />
            </Link>
        </div>
    )
}

export default EmptyWorkouts
