export type IconName =
  | "alert_circle"
  | "arrow_circle"
  | "arrow_right"
  | "calculator"
  | "card_stack"
  | "checkmark"
  | "checkmark"
  | "chevron"
  | "chevron_right"
  | "clipboard"
  | "clipboard"
  | "copy"
  | "credit_card"
  | "dashboard"
  | "dollar_sign"
  | "ellipses"
  | "export"
  | "filter"
  | "flag"
  | "import"
  | "info_circle"
  | "inventory"
  | "listings"
  | "loading"
  | "logout"
  | "notification_bell"
  | "pencil"
  | "plus_circle"
  | "plus_sign"
  | "question_circle"
  | "quote"
  | "refresh"
  | "search"
  | "settings"
  | "sparkles"
  | "storefront"
  | "trash_can"
  | "truck"
  | "x-close"
  | "thin-x"
  | "nothing-template-search"
  | "hamburger-menu"
  | "more-info"
  | "converter-arrow"
  | "blog-arrow"
  | "referrals"
  | "calendar"
  | "referral-person"
  | "referral-person-black"
  | "upgrade"
  | "upload"
  | "move"
  | "dollar-circle"
  | "feather-list"
  | "search_magnifying_glass"
  | "feather_x"
  | "feather_check";

export const Icon = ({
  icon,
  width,
  height,
  alt,
  className,
}: {
  icon: IconName;
  width: string | number;
  height: string | number;
  alt?: string;
  className?: string;
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" role="img" width={width} height={height}>
    {alt ? <title>{alt}</title> : null}
    <use href={`/icons.svg#${icon}`} />
  </svg>
);
