type SocialMediaLinkProps = {
  id: string;
  href: string;
  className: string;
  Icon: React.ComponentType;
  ariaLabel: string;
};

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  id,
  href,
  className,
  Icon,
  ariaLabel,
}) => (
  <a
    id={id}
    rel="noreferrer noopener"
    target="_blank"
    href={href}
    className={`mx-3 flex h-16 w-16 transform items-center justify-center 
        rounded-full text-4xl text-white duration-500 hover:-translate-y-2 hover:border-2 ${className}`}
    aria-label={ariaLabel}
  >
    <Icon />
  </a>
);

export default SocialMediaLink;
