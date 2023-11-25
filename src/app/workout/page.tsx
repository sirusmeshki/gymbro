"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "@/components/Button";
import Workouts from "@/components/Cards/Workouts";
import Link from "next/link";
import clsx from "clsx";

const Page = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <aside className="bg-red-600 relative">
      <header className="h-20 border-bottom flex justify-center items-center">
        {isEditing ? (
          <div className="flex items-center justify-center w-full h-full">
            <Button
              cta="لغو"
              className="bg-red-200"
              onClick={() => setIsEditing((prev) => !prev)}
              placeholder={
                <Image
                  src="/icon/arrow-left.svg"
                  alt="arrow left"
                  width={24}
                  height={24}
                />
              }
              alt="edit workouts button"
            />

            <Button
              cta="ذخیره"
              className="bg-green-200"
              onClick={() => setIsEditing((prev) => !prev)}
              placeholder={
                <Image
                  src="/icon/arrow-left.svg"
                  alt="arrow left"
                  width={24}
                  height={24}
                />
              }
              alt="edit workouts button"
            />
          </div>
        ) : (
          <div className="flex w-full h-full border-left">
            <Link className="w-full h-full" href="/plan">
              <Button
                cta="ساخت برنامه"
                className="h-full border-left"
                disabled={isEditing}
                placeholder={
                  <Image
                    src="/icon/arrow-left.svg"
                    alt="arrow left"
                    width={24}
                    height={24}
                  />
                }
                alt="submit workouts button"
              />
            </Link>
            <Button
              cta="ایجاد تغییرات"
              className="bg-lightPurple flex-grow"
              placeholder={
                <Image
                  src="/icon/arrow-left.svg"
                  alt="arrow left"
                  width={24}
                  height={24}
                />
              }
              alt="edit workouts button"
            />
          </div>
        )}
      </header>

      <Workouts isEditing={isEditing} />
    </aside>
  );
};

export default Page;
