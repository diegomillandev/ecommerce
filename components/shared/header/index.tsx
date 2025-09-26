import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper justify-between">
        <div className="flex-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} Logo`}
              width={42}
              height={42}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
