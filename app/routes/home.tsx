import { Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Skeleton } from "@heroui/react";
import type { Route } from "./+types/home";
import KanaModeTabs from "~/components/KanaModeTabs";
import KanaIntroSection from "~/components/KanaIntroSection";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Practice Hiragana & Katakana | Kana Quiz" },
		{
			name: "description",
			content: `This app is a companion to Tofugu’s Learn Hiragana Guide and Learn Katakana Guide. Use it to practice hiragana and katakana. If you haven’t learned kana yet, check out the hiragana guide or the katakana guide, then come back here. With interactive drills, randomized quizzes, and visual
					feedback, you can reinforce your recognition of kana in a fun and effective way. Whether you're reviewing or starting fresh, this tool helps you build a solid foundation for reading and writing Japanese. Practice daily and watch your kana fluency grow!`,
		},
	];
}

export default function Home() {
	const [selectedRows, setSelectedRows] = useState<string[]>([""]);
	const [selectedKanaType, setSelectedKanaType] = useState<number>(1);

	return (
		<main className="min-h-screen space-y-4 grid place-content-center">
			{/* INTRO SECTION */}
			<section className="space-y-2 sm:space-y-4 max-w-fit sm:mb-8 mb-4">
				<KanaIntroSection />
			</section>

			{/* DIVIDER */}
			<Skeleton className="w-full min-h-[0.5rem] rounded-xl"></Skeleton>

			{/* MODE TABS */}
			<section>
				<KanaModeTabs selectedRows={selectedRows} setSelectedRows={setSelectedRows} selectedKanaType={selectedKanaType} setSelectedKanaType={setSelectedKanaType} />
			</section>

			{/* CTA SECTION */}
			<section>
				<Button className="disabled:cursor-no-drop" fullWidth as={Link} to={"/quiz"} state={{ selectedRows, kanaType: selectedKanaType }} disabled={selectedRows.length === 0}>
					Start Quiz
				</Button>
			</section>
		</main>
	);
}
