import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkCardList } from "@/components/LinkCardList";

const links = [
  { label: "깃허브", href: "https://github.com/wxxk", icon: "😺" },
  { label: "블로그", href: "https://blog.naver.com/dwde2", icon: "🧩" },
  { label: "이메일", href: "mailto:lsw@kcc.co.kr", icon: "📨" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-gradient-to-b from-cream via-cream to-apricot px-6 py-20 sm:py-28">
      <div className="flex w-full max-w-sm flex-col gap-12 sm:gap-14">
        <ProfileHeader
          name="이상욱"
          bio="풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요"
          avatarSrc="/profile.jpg"
        />
        <LinkCardList links={links} />
      </div>
    </main>
  );
}
