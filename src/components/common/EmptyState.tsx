"use client";
import { useRouter } from "next/navigation";
import { EmptyStateProps } from "@/types/props";
import Heading from "./Heading";
import Button from "./Button";

const EmptyState = ({
  title = "Now exact matches",
  subtitle = "Try changing ro removing some of your filters.",
  showBtn,
  btnLabel,
  btnPath,
}: EmptyStateProps) => {
  const router = useRouter();

  return (
    <section className="flex flex-col gap-2 justify-center items-center h-[60vh]">
      <Heading title={title} subTitle={subtitle} center />
      <div className="w-48 mt-4">
        {showBtn && (
          <Button
            label={btnLabel}
            outline
            onClick={() => router.push(btnPath)}
            btnType="button"
          />
        )}
      </div>
    </section>
  );
};

export default EmptyState;
