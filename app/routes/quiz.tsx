import { Button, Card, CardBody, CardFooter, Input, Select, SelectItem } from "@heroui/react";
import { useEffect, useRef, useState } from "react";

const hiraganaRows = {
	"a-row": [
		{ hiragana: "あ", romaji: "a" },
		{ hiragana: "い", romaji: "i" },
		{ hiragana: "う", romaji: "u" },
		{ hiragana: "え", romaji: "e" },
		{ hiragana: "お", romaji: "o" },
	],
	"ka-row": [
		{ hiragana: "か", romaji: "ka" },
		{ hiragana: "き", romaji: "ki" },
		{ hiragana: "く", romaji: "ku" },
		{ hiragana: "け", romaji: "ke" },
		{ hiragana: "こ", romaji: "ko" },
	],
	"sa-row": [
		{ hiragana: "さ", romaji: "sa" },
		{ hiragana: "し", romaji: "shi" },
		{ hiragana: "す", romaji: "su" },
		{ hiragana: "せ", romaji: "se" },
		{ hiragana: "そ", romaji: "so" },
	],
	"ta-row": [
		{ hiragana: "た", romaji: "ta" },
		{ hiragana: "ち", romaji: "chi" },
		{ hiragana: "つ", romaji: "tsu" },
		{ hiragana: "て", romaji: "te" },
		{ hiragana: "と", romaji: "to" },
	],
	"na-row": [
		{ hiragana: "な", romaji: "na" },
		{ hiragana: "に", romaji: "ni" },
		{ hiragana: "ぬ", romaji: "nu" },
		{ hiragana: "ね", romaji: "ne" },
		{ hiragana: "の", romaji: "no" },
	],
	"ha-row": [
		{ hiragana: "は", romaji: "ha" },
		{ hiragana: "ひ", romaji: "hi" },
		{ hiragana: "ふ", romaji: "fu" },
		{ hiragana: "へ", romaji: "he" },
		{ hiragana: "ほ", romaji: "ho" },
	],
	"ma-row": [
		{ hiragana: "ま", romaji: "ma" },
		{ hiragana: "み", romaji: "mi" },
		{ hiragana: "む", romaji: "mu" },
		{ hiragana: "め", romaji: "me" },
		{ hiragana: "も", romaji: "mo" },
	],
	"ya-row": [
		{ hiragana: "や", romaji: "ya" },
		{ hiragana: "ゆ", romaji: "yu" },
		{ hiragana: "よ", romaji: "yo" },
	],
	"ra-row": [
		{ hiragana: "ら", romaji: "ra" },
		{ hiragana: "り", romaji: "ri" },
		{ hiragana: "る", romaji: "ru" },
		{ hiragana: "れ", romaji: "re" },
		{ hiragana: "ろ", romaji: "ro" },
	],
	"wa-row": [
		{ hiragana: "わ", romaji: "wa" },
		{ hiragana: "を", romaji: "wo" },
		{ hiragana: "ん", romaji: "n" },
	],
};

type HiraganaRowKey = keyof typeof hiraganaRows;

export default function Quiz() {
	const [answer, setAnswer] = useState<string>("");
	const [rows, setRows] = useState<string[]>(["a-row"]);
	const [index, setIndex] = useState<number>(0);

	const allCharacters = rows.flatMap((row) => hiraganaRows[row as HiraganaRowKey] || []);
	const currentHiragana = allCharacters[index];

	useEffect(() => {
		if (currentHiragana?.romaji === answer.trim().toLowerCase()) {
			setIndex((prev) => prev + 1);
			setAnswer("");
		}
	}, [answer]);

	return (
		<>
			<main className="min-h-screen grid place-content-center">
				<section>
					<p className="text-[40vh]">{currentHiragana?.hiragana ?? "Done."}</p>
					<div className="flex items-center gap-4">
						<Input classNames={{ inputWrapper: "bg-default-200" }} label="Romaji" placeholder="Type the romaji" type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="w-3/4" />
						<Select className="w-1/3" classNames={{ trigger: "bg-default-200", innerWrapper: "truncate max-w-[10ch]" }} label="Rows" placeholder="Select row(s)" selectionMode="multiple" selectedKeys={new Set(rows)} onSelectionChange={(keys) => setRows(Array.from(keys as Set<string>))}>
							{Object.keys(hiraganaRows).map((row) => (
								<SelectItem key={row}>{row}</SelectItem>
							))}
						</Select>
					</div>
				</section>
			</main>
		</>
	);
}
