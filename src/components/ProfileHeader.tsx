type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarInitial: string;
};

export function ProfileHeader({ name, bio, avatarInitial }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-soft text-4xl font-display font-semibold text-white ring-4 ring-white shadow-sm">
        {avatarInitial}
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-ink">
          {name}
        </h1>
        <p className="text-sm text-muted">{bio}</p>
      </div>
    </div>
  );
}
