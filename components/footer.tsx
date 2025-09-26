import { APP_NAME } from "@/lib/constants";

export const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {`© ${currentYear} ${APP_NAME}. All rights reserved.`}
      </div>
    </footer>
  );
};
