import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkCardList } from "@/components/LinkCardList";
import { GithubIcon, LinkedinIcon, BlogIcon } from "@/components/icons";

const links = [
  { label: "GitHub", href: "https://github.com/", icon: <GithubIcon /> },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: <LinkedinIcon />,
  },
  { label: "Blog", href: "https://example.com/blog", icon: <BlogIcon /> },
];

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-bg px-6 py-16 sm:py-24">
      <div className="flex w-full max-w-sm flex-col gap-10">
        <ProfileHeader
          name="김클로"
          bio="세계 최강 바이브 코더"
          avatarInitial="클"
        />
        <LinkCardList links={links} />
      </div>
    </main>
  );
}
