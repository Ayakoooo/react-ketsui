import { Tabs, Tab, Table, TableBody, TableRow, TableCell, TableHeader, TableColumn, Pagination } from "@heroui/react";
import { useMemo, useState } from "react";

const kanaData = [
	{ main: "あ/a い/i う/u え/e お/o", dakuten: "-", combo: "-" },
	{ main: "か/ka き/ki く/ku け/ke こ/ko", dakuten: "が/ga ぎ/gi ぐ/gu げ/ge ご/go", combo: "きゃ/kya きゅ/kyu きょ/kyo" },
	{ main: "さ/sa し/shi す/su せ/se そ/so", dakuten: "ざ/za じ/ji ず/zu ぜ/ze ぞ/zo", combo: "しゃ/sha しゅ/shu しょ/sho" },
	{ main: "た/ta ち/chi つ/tsu て/te と/to", dakuten: "だ/da ぢ/ji づ/zu で/de ど/do", combo: "ちゃ/cha ちゅ/chu ちょ/cho" },
	{ main: "な/na に/ni ぬ/nu ね/ne の/no", dakuten: "-", combo: "にゃ/nya にゅ/nyu にょ/nyo" },
	{ main: "は/ha ひ/hi ふ/fu へ/he ほ/ho", dakuten: "ば/ba び/bi ぶ/bu べ/be ぼ/bo / ぱ/pa ぴ/pi ぷ/pu ぺ/pe ぽ/po", combo: "ひゃ/hya ひゅ/hyu ひょ/hyo" },
	{ main: "ま/ma み/mi む/mu め/me も/mo", dakuten: "-", combo: "みゃ/mya みゅ/myu みょ/myo" },
	{ main: "や/ya  　ゆ/yu  　よ/yo", dakuten: "-", combo: "-" },
	{ main: "ら/ra り/ri る/ru れ/re ろ/ro", dakuten: "-", combo: "りゃ/rya りゅ/ryu りょ/ryo" },
	{ main: "わ/wa を/wo ん/n", dakuten: "-", combo: "-" },
];

export default function KanaModeTabs() {
	return (
		<section aria-labelledby="kana-mode-options" className="space-y-4 w-full">
			<div>
				<h2 className="text-2xl sm:text-4xl font-light" id="kana-mode-options">
					Options
				</h2>
				<p className=" text-tiny text-default-500">(Choose a kana type to practice. You can toggle individual rows to customize your quiz pool)</p>
			</div>
			<Tabs
				aria-label="Options"
				size="sm"
				classNames={{
					base: "w-full ",
					tabList: "flex flex-col w-full sm:flex-row bg-default-200",
				}}
			>
				<Tab key="hiragana" title={<span>あ Practice Hiragana</span>}>
					{/* Table */}
					<Table isHeaderSticky aria-label="Rows with individual Hiragana option" selectionBehavior="toggle" selectionMode="multiple" className="max-h-[20rem]" isStriped>
						<TableHeader>
							<TableColumn>Main Kana</TableColumn>
							<TableColumn>Dakuten Kana</TableColumn>
							<TableColumn>Combination Kana</TableColumn>
						</TableHeader>
						<TableBody items={kanaData}>
							{(item) => (
								<TableRow key={item.main}>
									<TableCell>{item.main}</TableCell>
									<TableCell>{item.dakuten}</TableCell>
									<TableCell>{item.combo}</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</Tab>
				<Tab key="katakana" title={<span>ア Practice Katakana</span>}>
					<div className="min-h-[20rem] grid place-content-center">
						<p className="text-default-500 text-2xl">No data found.</p>
					</div>
				</Tab>
			</Tabs>
		</section>
	);
}
