import { Link } from "@heroui/react";

export default function KanaIntroSection() {
	return (
		<>
			<h1 className="text-4xl sm:text-7xl font-light text-balance">
				<span className="font-medium">Tofugu’s </span>Learn Kana Quiz
			</h1>
			<p className="text-tiny  sm:text-base text-default-600">
				This app is a companion to Tofugu’s{" "}
				<Link underline="hover" href="https://www.tofugu.com/japanese/learn-hiragana/" isExternal showAnchorIcon>
					Learn Hiragana Guide
				</Link>{" "}
				and{" "}
				<Link underline="hover" href="https://www.tofugu.com/japanese/learn-katakana/" isExternal showAnchorIcon>
					Learn Katakana Guide
				</Link>
				{". "}
				Use it to practice hiragana and katakana. If you haven’t learned kana yet, check out the hiragana guide or the katakana guide, then come back here. With interactive drills, randomized quizzes, and visual feedback, you can reinforce your recognition of kana in a fun and effective way. Whether
				you're reviewing or starting fresh, this tool helps you build a solid foundation for reading and writing Japanese. Practice daily and watch your kana fluency grow!
			</p>
		</>
	);
}
