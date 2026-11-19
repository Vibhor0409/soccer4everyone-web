// Every figure on the site lives here so one number never reads two ways.
// Headline numbers come from the founder; tournament details from the club's Instagram.

export const INSTAGRAM = "https://www.instagram.com/seva.surat_/";
export const EMAIL = "agrawalvibhor49@gmail.com";
export const FOUNDER = { name: "Vibhor Agrawal", role: "Founder" };

export const STATS = [
  { id: "raised", prefix: "$", value: 65, suffix: "K", label: "raised in our first nine months" },
  { id: "athletes", prefix: "", value: 450, suffix: "+", label: "athletes, aged 9 to 14, trained and kitted" },
  { id: "pro", prefix: "", value: 71, suffix: "", label: "signed by professional clubs and leagues in India" },
  { id: "national", prefix: "", value: 11, suffix: "", label: "invited to national team tryouts" },
] as const;

export const FUNNEL = [
  { label: "Athletes trained and kitted", value: 450 },
  { label: "Signed to pro clubs and leagues", value: 71 },
  { label: "Called to national team tryouts", value: 11 },
] as const;

export const MODEL = [
  {
    n: "01",
    title: "Run the Sunday league",
    body: "Weekend tournaments for Surat's local teams: seven-a-side, league stage then knockouts, every team guaranteed three matches.",
  },
  {
    n: "02",
    title: "Sell the matchday",
    body: "Teams pay an entry fee of ₹4,750 a side. Local brands sponsor the prizes, the pitch and the kit.",
  },
  {
    n: "03",
    title: "Fund the kids",
    body: "Every rupee after costs buys boots, shin guards, socks and coached sessions for 9 to 14 year-olds who can't afford them.",
  },
  {
    n: "04",
    title: "Get them seen",
    body: "An AIFF-licensed coach picks and trains them. The best go on to club trials, pro leagues and national tryouts.",
  },
] as const;

export const CUP_FACTS = [
  { k: "Home ground", v: "Adajan, Surat" },
  { k: "Format", v: "7 + 3 subs, league + knockouts" },
  { k: "Guaranteed", v: "3 matches per team" },
  { k: "Brackets", v: "Boys and girls" },
  { k: "Entry", v: "₹4,750 per team" },
  { k: "Champions", v: "₹10,000 prize" },
] as const;

export const KIT = [
  { item: "Studs", note: "Proper football boots, sized to each player" },
  { item: "Shin guards", note: "The kit most kids get turned away for" },
  { item: "Stockings", note: "Match socks, so every kid is eligible to play" },
  { item: "Coaching", note: "Sessions under an AIFF-licensed coach" },
] as const;

export const SEASON = [
  {
    step: "Step 1",
    title: "The cup",
    body: "A two-day tournament in Surat with a boys' and a girls' bracket. Entry fees and sponsors fill the fund.",
  },
  {
    step: "Step 2",
    title: "Kit day",
    body: "Kids picked by an AIFF-licensed coach get boots, shin guards and stockings, handed over in person.",
  },
  {
    step: "Step 3",
    title: "The Sunday league",
    body: "Every Sunday the league plays on. Sponsors renew, entry fees repeat, and the squad of funded kids grows.",
  },
  {
    step: "Step 4",
    title: "The pathway",
    body: "Coached players move up to club trials, professional leagues and national team tryouts.",
  },
] as const;

export const BUILT = [
  {
    title: "Brand",
    body: "A name, a crest and a following built around one line: when potential meets opportunity.",
  },
  {
    title: "Revenue",
    body: "Entry fees and local sponsorships that turn a single cup into $65K raised in our first nine months.",
  },
  {
    title: "Operations",
    body: "Grounds, fixtures, referees and kit buying run in-house, so every Sunday kicks off on schedule.",
  },
  {
    title: "Outcomes",
    body: "Every athlete followed from first boots to club trials, so the money is tied to results, not good intentions.",
  },
] as const;
