import Link from "next/link";
import { SiteHeader } from "@/components/steal-an-egg/SiteHeader";
import { SiteFooter } from "@/components/steal-an-egg/SiteFooter";
import { Breadcrumbs } from "@/components/steal-an-egg/Breadcrumbs";
import { NativeBanner } from "@/components/steal-an-egg/NativeBanner";
import { Banner728x90 } from "@/components/steal-an-egg/Banner728x90";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { ValueCalculatorTool } from "@/components/steal-an-egg/ValueCalculatorTool";
const title = "Steal An Egg Value Calculator";
const description = "Use the Steal An Egg value calculator to estimate pet earning value, adjusted income, hourly worth and comparisons using current numbers you enter.";
const pathname = "/calculator/value/";
export const metadata = buildMetadata({title:"Steal An Egg Value Calculator \u2013 Pet Income & Worth", description, pathname});

const sections = [
  {
    "title": "How the Steal An Egg Value Calculator Works",
    "subsections": [
      {
        "title": "What “Value” Means Here",
        "paragraphs": [
          "Value means earning power: the income your selected pets contribute over time. A Steal An Egg price calculator search may be asking about trading, but this tool does not assign a sale price. Collection demand, rarity and willingness to trade are separate from earnings. Two pets with equal income can have different appeal to collectors."
        ]
      },
      {
        "title": "Formula and Inputs",
        "paragraphs": [
          "Final income per second = base income × mutation multiplier × custom size multiplier × quantity. The comparison uses a second independent set of the same inputs. The default 100 income, 1× modifiers and one pet are arithmetic examples only. They do not represent any named pet or mutation."
        ]
      }
    ]
  },
  {
    "title": "How to Calculate a Pet’s Value",
    "subsections": [
      {
        "title": "Base Income",
        "paragraphs": [
          "Enter an unmodified per-pet income rate in cash per second. If you only know the final displayed income, use that as the starting rate and leave both multipliers at 1 to avoid counting bonuses twice. Expand M or B abbreviations into digits: 1M becomes 1000000. Do not enter currency symbols or commas."
        ]
      },
      {
        "title": "Mutation Multiplier",
        "paragraphs": [
          "Enter a current multiplier only when it applies to the baseline you chose. A value of 1 means unchanged; 1.5 means one and a half times the baseline. The tool does not choose named mutation presets or assume that several mutation bonuses multiply together. Application chance is a different number from an income multiplier."
        ]
      },
      {
        "title": "Size / Weight Adjustment",
        "paragraphs": [
          "Leave this optional custom factor at 1 unless you have a supported adjustment for your baseline. The input is a multiplier, not kilograms. No kg-to-income conversion or hidden weight formula is built in. A size label or a heavier pet does not supply a numerical factor by itself."
        ]
      },
      {
        "title": "Quantity",
        "paragraphs": [
          "Quantity is the number of identical earners sharing the entered rate and modifiers. Use a whole number of at least one. For different pets, compare two separate setups or enter their already summed income with quantity 1 and neutral modifiers. Do not multiply an account-wide income total by the number of pets again."
        ]
      }
    ]
  },
  {
    "title": "Pet Value per Minute, Hour and Day",
    "subsections": [
      {
        "title": "Time-Based Earning Value",
        "paragraphs": [
          "Multiply the final per-second rate by 60 for a minute, 3600 for an hour and 86400 for a day. Selected session income multiplies by session minutes × 60. A hypothetical 100 per second produces 6000 per minute and 360000 per hour. A 30-minute session at that rate produces 180000."
        ]
      },
      {
        "title": "Difference vs Base",
        "paragraphs": [
          "The unmodified group baseline is base income × quantity. Difference vs base subtracts that group baseline from the final rate. Percentage increase divides the difference by a positive group baseline and multiplies by 100. A zero baseline gives zero earnings and an undefined percentage, displayed as a clear explanation."
        ]
      }
    ]
  },
  {
    "title": "Value Calculator vs Mutation Calculator",
    "subsections": [
      {
        "title": "Choose the Matching Tool",
        "paragraphs": [
          "This page compares pet or setup earning value, including quantity and timed totals. The Mutation Calculator focuses on custom mutation arithmetic. Calculator Home handles current cash, upgrade time, sessions and runs. Follow those focused tools when your question is about a modifier alone or affording the next purchase."
        ]
      }
    ]
  },
  {
    "title": "Does Steal An Egg Have Official Trade Values?",
    "subsections": [
      {
        "title": "Income Value vs Market Price",
        "paragraphs": [
          "This site has no verified official universal trade-price list to load into this tool. Community value lists may use their own estimates, demand scores or subjective trade units; those figures are not official prices. A daily earning projection cannot establish what another player will offer. No Win / Fair / Loss trading verdict is generated."
        ]
      }
    ]
  },
  {
    "title": "How to Compare Two Pets",
    "subsections": [
      {
        "title": "Compare Earning Power",
        "paragraphs": [
          "Enable Compare Pet B and enter its own base rate, modifiers and quantity. The tool reports A’s per-second and hourly difference against B, and the percentage relative to B when B is positive. Compare equally active setups under the same boosts. A higher result describes greater modeled earnings, not a better market trade."
        ]
      }
    ]
  },
  {
    "title": "Value Calculator Accuracy",
    "subsections": [
      {
        "title": "Recheck the Inputs After Updates",
        "paragraphs": [
          "Calculations update locally as you type and require JavaScript. They do not read your Roblox account or detect current boosts. Recheck the selected pet panel after an update or a bonus expires. Time projections assume uninterrupted earnings at a constant rate; a 24-hour total is a mathematical projection, not a promise of offline collection."
        ]
      },
      {
        "title": "Input Limits",
        "paragraphs": [
          "Blank, negative and nonnumeric entries show a field message. Quantity must be a whole number of at least one; zero income and zero session minutes are allowed. Extremely large calculations show a range message instead of an invalid result. Rounded display values are estimates; enter the fullest current rate available for useful comparisons."
        ]
      }
    ]
  }
];
const faqs = [
  {
    "question": "What does the Steal An Egg value calculator calculate?",
    "answer": "It calculates pet earning value per second, minute, hour, day and chosen session from your own income, modifiers and quantity, with optional two-setup comparison."
  },
  {
    "question": "Is this an official pet price calculator?",
    "answer": "No. Value here means earning power. This tool does not provide official trade prices or a market price database."
  },
  {
    "question": "Can I enter my pet\u2019s final displayed income?",
    "answer": "Yes. Enter that rate as base income and leave mutation and size multipliers at 1 if the displayed rate already includes them."
  },
  {
    "question": "Does weight automatically change the estimate?",
    "answer": "No. There is no kg conversion. Size is an optional custom multiplier you supply; leave it at 1 when unknown."
  },
  {
    "question": "Why is the percentage unavailable at zero income?",
    "answer": "Percentage change needs a positive reference baseline. Zero income is valid, but dividing by zero does not define a percentage."
  },
  {
    "question": "Are the default numbers real pet values?",
    "answer": "No. Default numbers are examples only, without a named pet, mutation or official price attached."
  }
];
const related = [{"label": "Calculator Home", "href": "/calculator/"}, {"label": "Mutation Calculator", "href": "/calculator/mutation/"}, {"label": "Pet Database", "href": "/pets/"}, {"label": "Best Pets", "href": "/pets/best-pets/"}, {"label": "Rarest Pets", "href": "/pets/rarest-pets/"}, {"label": "Mutations", "href": "/mutations/"}];

export default function Page() {
 const url = `${siteConfig.url}${pathname}`;
 const graph = [
 {"@type":"WebPage",name:title,url,description,inLanguage:"en"},
 {"@type":"BreadcrumbList",itemListElement:[
 {"@type":"ListItem",position:1,name:"Home",item:siteConfig.url},
 {"@type":"ListItem",position:2,name:"Calculator",item:`${siteConfig.url}/calculator/`},
 {"@type":"ListItem",position:3,name:"Value Calculator",item:url}]},
 {"@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))},
 {"@type":"WebApplication", name:title, url, description, applicationCategory:"UtilitiesApplication", operatingSystem:"Any", browserRequirements:"Requires JavaScript", featureList:["Pet earning value", "Custom modifiers and quantity", "Minute, hour, day and session totals", "Two setup income comparison"]}
 ];
 return <div className="min-h-screen bg-background">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":graph}).replace(/</g,"\\u003c")}} />
 <SiteHeader />
 <main className="pt-16">
 <div className="container mx-auto max-w-5xl px-4 py-6 md:py-10">
 <Breadcrumbs items={[{label:"Calculator",href:"/calculator/"},{label:"Value Calculator"}]} />
 <h1 className="text-3xl font-bold leading-tight text-primary md:text-5xl">{title}</h1>
 <p className="mt-4 max-w-4xl leading-7 text-muted-foreground">This Steal An Egg value calculator treats pet value as earning power from the current numbers you enter. It does not provide official trade prices. Enter income and custom modifiers to estimate cash over time or compare two setups. Default numbers are examples only.</p>
 <ValueCalculatorTool />
 </div>
 <NativeBanner />
 <div className="container mx-auto max-w-5xl px-4 pb-12">
 <div className="space-y-12 pt-6">
 {sections.map(s=><section key={s.title}><h2 className="text-2xl font-bold text-primary md:text-3xl">{s.title}</h2><div className="mt-5 grid gap-5 md:grid-cols-2">{s.subsections.map(sub=><article key={sub.title} className="min-w-0 rounded-xl border border-border bg-card p-5"><h3 className="text-lg font-bold">{sub.title}</h3>{sub.paragraphs.map(p=><p key={p} className="mt-3 leading-7 text-muted-foreground">{p}</p>)}</article>)}</div></section>)}
 </div>
 
 <Banner728x90 className="my-10" />
 <section className="mt-12"><h2 className="text-2xl font-bold text-primary">Steal An Egg Value Calculator FAQ</h2><div className="mt-5 space-y-4">{faqs.map(f=><article key={f.question} className="rounded-xl border border-border bg-card p-5"><h3 className="text-lg font-bold">{f.question}</h3><p className="mt-3 leading-7 text-muted-foreground">{f.answer}</p></article>)}</div></section>
 <nav aria-label="Related pages" className="mt-12"><h2 className="text-2xl font-bold text-primary">Continue with a focused guide</h2><div className="mt-5 flex flex-wrap gap-4">{related.map(l=><Link key={l.href} href={l.href} className="seo-link">{l.label}</Link>)}</div></nav>
 </div>
 </main><SiteFooter /></div>;
}
