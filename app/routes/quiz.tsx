import { Input } from "@heroui/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";

const hiraganaRows = {
	"a-row": {
		main: [
			{ hiragana: "あ", romaji: "a" },
			{ hiragana: "い", romaji: "i" },
			{ hiragana: "う", romaji: "u" },
			{ hiragana: "え", romaji: "e" },
			{ hiragana: "お", romaji: "o" },
		],
		dakuten: [],
		combo: [],
	},
	"ka-row": {
		main: [
			{ hiragana: "か", romaji: "ka" },
			{ hiragana: "き", romaji: "ki" },
			{ hiragana: "く", romaji: "ku" },
			{ hiragana: "け", romaji: "ke" },
			{ hiragana: "こ", romaji: "ko" },
		],
		dakuten: [
			{ hiragana: "が", romaji: "ga" },
			{ hiragana: "ぎ", romaji: "gi" },
			{ hiragana: "ぐ", romaji: "gu" },
			{ hiragana: "げ", romaji: "ge" },
			{ hiragana: "ご", romaji: "go" },
		],
		combo: [
			{ hiragana: "きゃ", romaji: "kya" },
			{ hiragana: "きゅ", romaji: "kyu" },
			{ hiragana: "きょ", romaji: "kyo" },
		],
	},
	"sa-row": {
		main: [
			{ hiragana: "さ", romaji: "sa" },
			{ hiragana: "し", romaji: "shi" },
			{ hiragana: "す", romaji: "su" },
			{ hiragana: "せ", romaji: "se" },
			{ hiragana: "そ", romaji: "so" },
		],
		dakuten: [
			{ hiragana: "ざ", romaji: "za" },
			{ hiragana: "じ", romaji: "ji" },
			{ hiragana: "ず", romaji: "zu" },
			{ hiragana: "ぜ", romaji: "ze" },
			{ hiragana: "ぞ", romaji: "zo" },
		],
		combo: [
			{ hiragana: "しゃ", romaji: "sha" },
			{ hiragana: "しゅ", romaji: "shu" },
			{ hiragana: "しょ", romaji: "sho" },
		],
	},
	"ta-row": {
		main: [
			{ hiragana: "た", romaji: "ta" },
			{ hiragana: "ち", romaji: "chi" },
			{ hiragana: "つ", romaji: "tsu" },
			{ hiragana: "て", romaji: "te" },
			{ hiragana: "と", romaji: "to" },
		],
		dakuten: [
			{ hiragana: "だ", romaji: "da" },
			{ hiragana: "ぢ", romaji: "ji" },
			{ hiragana: "づ", romaji: "zu" },
			{ hiragana: "で", romaji: "de" },
			{ hiragana: "ど", romaji: "do" },
		],
		combo: [
			{ hiragana: "ちゃ", romaji: "cha" },
			{ hiragana: "ちゅ", romaji: "chu" },
			{ hiragana: "ちょ", romaji: "cho" },
		],
	},
	"na-row": {
		main: [
			{ hiragana: "な", romaji: "na" },
			{ hiragana: "に", romaji: "ni" },
			{ hiragana: "ぬ", romaji: "nu" },
			{ hiragana: "ね", romaji: "ne" },
			{ hiragana: "の", romaji: "no" },
		],
		dakuten: [],
		combo: [
			{ hiragana: "にゃ", romaji: "nya" },
			{ hiragana: "にゅ", romaji: "nyu" },
			{ hiragana: "にょ", romaji: "nyo" },
		],
	},
	"ha-row": {
		main: [
			{ hiragana: "は", romaji: "ha" },
			{ hiragana: "ひ", romaji: "hi" },
			{ hiragana: "ふ", romaji: "fu" },
			{ hiragana: "へ", romaji: "he" },
			{ hiragana: "ほ", romaji: "ho" },
		],
		dakuten: [
			{ hiragana: "ば", romaji: "ba" },
			{ hiragana: "び", romaji: "bi" },
			{ hiragana: "ぶ", romaji: "bu" },
			{ hiragana: "べ", romaji: "be" },
			{ hiragana: "ぼ", romaji: "bo" },
			{ hiragana: "ぱ", romaji: "pa" },
			{ hiragana: "ぴ", romaji: "pi" },
			{ hiragana: "ぷ", romaji: "pu" },
			{ hiragana: "ぺ", romaji: "pe" },
			{ hiragana: "ぽ", romaji: "po" },
		],
		combo: [
			{ hiragana: "ひゃ", romaji: "hya" },
			{ hiragana: "ひゅ", romaji: "hyu" },
			{ hiragana: "ひょ", romaji: "hyo" },
		],
	},
	"ma-row": {
		main: [
			{ hiragana: "ま", romaji: "ma" },
			{ hiragana: "み", romaji: "mi" },
			{ hiragana: "む", romaji: "mu" },
			{ hiragana: "め", romaji: "me" },
			{ hiragana: "も", romaji: "mo" },
		],
		dakuten: [],
		combo: [
			{ hiragana: "みゃ", romaji: "mya" },
			{ hiragana: "みゅ", romaji: "myu" },
			{ hiragana: "みょ", romaji: "myo" },
		],
	},
	"ya-row": {
		main: [
			{ hiragana: "や", romaji: "ya" },
			{ hiragana: "ゆ", romaji: "yu" },
			{ hiragana: "よ", romaji: "yo" },
		],
		dakuten: [],
		combo: [],
	},
	"ra-row": {
		main: [
			{ hiragana: "ら", romaji: "ra" },
			{ hiragana: "り", romaji: "ri" },
			{ hiragana: "る", romaji: "ru" },
			{ hiragana: "れ", romaji: "re" },
			{ hiragana: "ろ", romaji: "ro" },
		],
		dakuten: [],
		combo: [
			{ hiragana: "りゃ", romaji: "rya" },
			{ hiragana: "りゅ", romaji: "ryu" },
			{ hiragana: "りょ", romaji: "ryo" },
		],
	},
	"wa-row": {
		main: [
			{ hiragana: "わ", romaji: "wa" },
			{ hiragana: "を", romaji: "wo" },
			{ hiragana: "ん", romaji: "n" },
		],
		dakuten: [],
		combo: [],
	},
};

type HiraganaRowKey = keyof typeof hiraganaRows;

function shuffleArray<T>(array: T[]) {
	const arr = [...array];
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

export default function Quiz() {
	const location = useLocation();
	const selectedRows = (location.state?.selectedRows ?? []) as string[];
	const kanaType = (location.state?.kanaType ?? 1) as 1 | 2 | 3;
	const kanaTypeKey = kanaType === 1 ? "main" : kanaType === 2 ? "dakuten" : "combo";

	const [answer, setAnswer] = useState("");
	const [index, setIndex] = useState(0);
	const [shuffledChars, setShuffledChars] = useState<{ hiragana: string; romaji: string }[]>([]);

	useEffect(() => {
		const allChars = selectedRows.flatMap((row) => hiraganaRows[row as HiraganaRowKey]?.[kanaTypeKey] || []);
		setShuffledChars(shuffleArray(allChars));
		setIndex(0);
		setAnswer("");
	}, [selectedRows, kanaTypeKey]);

	const currentHiragana = shuffledChars[index];

	useEffect(() => {
		if (currentHiragana?.romaji === answer.trim().toLowerCase()) {
			setIndex((prev) => prev + 1);
			setAnswer("");
		}
	}, [answer, currentHiragana]);

	if (shuffledChars.length === 0) {
		return (
			<div className="min-h-screen grid place-content-center">
				<p className="text-7xl text-center mt-8">No kana rows selected.</p>
			</div>
		);
	}

	return (
		<main className="min-h-screen grid place-content-center">
			<section>
				<p className="text-[40vh]">
					{currentHiragana?.hiragana ?? (
						<div className="flex flex-col">
							<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}>
								Done.
							</motion.span>
							<Link to={"/"} className="mx-auto text-2xl">
								Go Back.
							</Link>
						</div>
					)}
				</p>
				{currentHiragana && <Input size="lg" classNames={{ inputWrapper: "bg-default-200" }} label="Romaji" placeholder="Type the romaji" type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="w-full" />}
			</section>
		</main>
	);
}
