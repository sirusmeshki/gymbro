"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "@/components/Button";
import Workouts from "@/components/Cards/Workouts";
import Link from "next/link";
import clsx from "clsx";

const WorkoutSidebar = ({ className }: { className?: string }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <aside className="min-w-[480px] flex flex-col lg:h-[calc(100dvh-42px)] absolute translate-x-full lg:fixed lg:translate-x-0">
      <header className="min-h-[96px] w-[calc(100vw - 10px)] border-left border-bottom flex justify-center items-center">
        {isEditing ? (
          <div className="w-full h-full flex justify-center items-center">
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
          <Button
            cta="ایجاد تغییرات"
            className="bg-lightPurple"
            // onClick={() => setIsEditing((prev) => !prev)}
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
        )}
      </header>
      <Workouts isEditing={isEditing} />
      <Link href="/plan" className="h-32 mb-44 border-top border-left">
        <Button
          cta="ساخت برنامه"
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
    </aside>
  );
};

export default WorkoutSidebar;
