import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarSrc: string;
};

export function ProfileHeader({ name, bio, avatarSrc }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <div className="rounded-full bg-gradient-to-br from-white/90 to-accent-soft p-[3px] shadow-[0_16px_36px_-14px_rgba(89,58,37,0.4)]">
        <div className="relative h-32 w-32 overflow-hidden rounded-full ring-1 ring-white/70 sm:h-36 sm:w-36">
          <Image
            src={avatarSrc}
            alt={`${name} 프로필 사진`}
            fill
            sizes="144px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-bold tracking-tight text-ink">
          {name}
        </h1>
        <p className="text-[15px] font-medium text-muted">{bio}</p>
      </div>
    </div>
  );
}
