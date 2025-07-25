import { Tabs, Tab, Switch, Pagination } from "@heroui/react";
import { useState } from "react";

const kanaData = [
	{ row: "A-ROW", main: "あ/a い/i う/u え/e お/o", dakuten: "", combo: "" },
	{ row: "KA-ROW", main: "か/ka き/ki く/ku け/ke こ/ko", dakuten: "が/ga ぎ/gi ぐ/gu げ/ge ご/go", combo: "きゃ/kya きゅ/kyu きょ/kyo" },
	{ row: "SA-ROW", main: "さ/sa し/shi す/su せ/se そ/so", dakuten: "ざ/za じ/ji ず/zu ぜ/ze ぞ/zo", combo: "しゃ/sha しゅ/shu しょ/sho" },
	{ row: "TA-ROW", main: "た/ta ち/chi つ/tsu て/te と/to", dakuten: "だ/da ぢ/ji づ/zu で/de ど/do", combo: "ちゃ/cha ちゅ/chu ちょ/cho" },
	{ row: "NA-ROW", main: "な/na に/ni ぬ/nu ね/ne の/no", dakuten: "", combo: "にゃ/nya にゅ/nyu にょ/nyo" },
	{ row: "HA-ROW", main: "は/ha ひ/hi ふ/fu へ/he ほ/ho", dakuten: "ば/ba び/bi ぶ/bu べ/be ぼ/bo / ぱ/pa ぴ/pi ぷ/pu ぺ/pe ぽ/po", combo: "ひゃ/hya ひゅ/hyu ひょ/hyo" },
	{ row: "MA-ROW", main: "ま/ma み/mi む/mu め/me も/mo", dakuten: "", combo: "みゃ/mya みゅ/myu みょ/myo" },
	{ row: "YA-ROW", main: "や/ya  　ゆ/yu  　よ/yo", dakuten: "", combo: "" },
	{ row: "RA-ROW", main: "ら/ra り/ri る/ru れ/re ろ/ro", dakuten: "", combo: "りゃ/rya りゅ/ryu りょ/ryo" },
	{ row: "WA-ROW", main: "わ/wa を/wo ん/n", dakuten: "", combo: "" },
];

type Props = {
	selectedRows: string[];
	setSelectedRows: React.Dispatch<React.SetStateAction<string[]>>;
	selectedKanaType: number;
	setSelectedKanaType: React.Dispatch<React.SetStateAction<number>>;
};

export default function KanaModeTabs({ selectedRows, setSelectedRows, selectedKanaType, setSelectedKanaType }: Props) {
	const [page, setPage] = useState(1);

	const handlePageChange = (p: number) => {
		setPage(p);
		setSelectedKanaType(p);
	};

	const handleToggle = (rowKey: string) => {
		setSelectedRows((prev) => (prev.includes(rowKey) ? prev.filter((r) => r !== rowKey) : [...prev, rowKey]));
	};

	const renderPages = () => {
		const getRowKey = (row: string) => row.toLowerCase();

		return kanaData
			.filter((k) => {
				if (page === 1) return true;
				if (page === 2) return !!k.dakuten;
				if (page === 3) return !!k.combo;
				return false;
			})
			.map((kana) => (
				<Switch
					key={kana.row}
					onValueChange={() => handleToggle(getRowKey(kana.row))}
					size="sm"
					classNames={{
						base: "pb-4 flex-row-reverse w-full justify-between max-w-none",
						wrapper: "bg-default-300",
					}}
				>
					<span className="text-tiny md:text-base">{kana.row} </span>
					<span className="text-tiny md:text-base text-default-500">[{page === 1 ? kana.main : page === 2 ? kana.dakuten : kana.combo}]</span>
				</Switch>
			));
	};

	return (
		<section aria-labelledby="kana-mode-options" className="space-y-4 w-full">
			<div>
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-light" id="kana-mode-options">
					Options
				</h2>
				<p className=" text-tiny text-default-500">(Choose a kana type to practice. You can toggle individual rows to customize your quiz pool)</p>
			</div>
			<Tabs
				aria-label="Options"
				size="sm"
				classNames={{
					base: "w-full",
					tabList: "flex flex-col w-full sm:flex-row bg-default-200",
				}}
			>
				<Tab key="hiragana" title={<span>あ Practice Hiragana</span>}>
					<div className="min-h-[26rem]">
						<div className="max-h-[24rem] grid place-content-center items-center">
							<p className="uppercase text-tiny text-default-500 mb-2">{page === 1 ? "Main Kana" : page === 2 ? "Dakuten Kana" : "Combo Kana"}</p>
							<div className="max-h-[20rem] h-full overflow-y-auto bg-default-200 px-2 py-4 space-y-4 rounded-md divide-y-1 divide-default-300">{renderPages()}</div>
						</div>
						<Pagination isCompact classNames={{ base: "flex justify-center items-center mt-2", item: "bg-default-300 text-foreground", next: "bg-default-300", prev: "bg-default-300" }} total={3} page={page} onChange={handlePageChange} showControls />
					</div>
				</Tab>
				<Tab key="katakana" title={<span>ア Practice Katakana</span>}>
					<div className="min-h-[26rem]">
						<div className="min-h-[24.85rem] grid place-content-center items-center">
							<div className=" h-full grid place-content-center overflow-y-auto  px-2 py-4 ">
								<p className="text-xl sm:text-2xl md:text-4xl">Currently unavailable.</p>
							</div>
						</div>
					</div>
				</Tab>
			</Tabs>
		</section>
	);
}
