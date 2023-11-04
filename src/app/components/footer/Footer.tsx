"use client";

import PageButton from "./PageButton";
import { pagesConfigs } from "./Footer.config";

export default function Footer() {
  return (
    <div className="flex justify-between pt-3 px-6 pb-4">
      {pagesConfigs.map(({ pathname, title, Icon, buttonText, ButtonIcon }) => (
        <PageButton
          key={pathname}
          pathname={pathname}
          Icon={ButtonIcon ?? Icon}
          title={buttonText ?? title}
        />
      ))}
    </div>
  );
}
