"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import Workouts from "@/components/Cards/Workouts";

const WorkoutSidebar = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <aside className="absolute flex min-w-[480px] translate-x-full flex-col lg:fixed lg:h-[calc(100dvh-42px)] lg:translate-x-0">
      <header className="w-[calc(100vw - 10px)] border-bottom flex min-h-[96px] items-center justify-center">
        {isEditing ? (
          <div className="flex h-full w-full items-center justify-center">
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
      <Link href="/plan" className="border-top mb-44 h-32">
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
