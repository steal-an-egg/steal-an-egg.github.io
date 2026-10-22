import { CoreSeoPage, type CoreFaq, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { MutationCalculatorTool } from "@/components/steal-an-egg/MutationCalculatorTool";
import { buildMetadata } from "@/lib/seo";

const title = "Steal An Egg Mutation Calculator – Multipliers & Income";
const description = "Use the Steal An Egg mutation calculator to estimate income with mutation multipliers, compare effects, and calculate results from verified or custom values.";
const pathname = "/calculator/mutation/";
export const metadata = buildMetadata({ title, description, pathname });

const sections: CoreSection[] = [
  {
    "title": "How to Use the Steal An Egg Mutation Calculator",
    "subsections": [
      {
        "title": "Enter Base Pet Income",
        "paragraphs": [
          "Copy the selected pet income and keep its unit consistent. Per-second input gives a per-second result. Expand abbreviations: use 1000000 for one million. Enter digits and a decimal point without currency symbols or commas.",
          "Choose a baseline that does not already include the mutation you are adding. Using the final income of an already modified pet as an unmodified baseline can count the same bonus twice. If you cannot isolate the original rate, treat the input as a hypothetical starting value and keep that limitation with your comparison."
        ]
      },
      {
        "title": "Choose or Enter a Mutation Multiplier",
        "paragraphs": [
          "Enter the multiplier you want to test. A value of 1 means no increase, 1.5 means one and a half times the baseline, and 2 means twice the baseline. The initial 100 and 2 are arithmetic examples. They do not describe a particular pet or verify a named mutation.",
          "Custom input lets you use a current panel value. The tool accepts multipliers of at least 1 and rejects a negative or blank entry."
        ]
      },
      {
        "title": "Read the Final Income",
        "paragraphs": [
          "The three results update as you type. Final Income shows the estimated total, Increase Amount shows the extra income above the starting point, and Increase Percentage describes that gain relative to the baseline. Zero base income is valid: both income amounts stay zero, while the percentage still describes the multiplier you entered."
        ]
      }
    ]
  },
  {
    "title": "Mutation Multiplier Formula",
    "subsections": [
      {
        "title": "Final Income Formula",
        "paragraphs": [
          "Final income = base income × multiplier. Increase amount = final income − base income. With a baseline of 100 and a custom multiplier of 2, the final income is 200 and the increase is 100. These are transparent calculations on your entries, without a server connection or a hidden pet database.",
          "With 250 and 1.5, multiplying gives 375; subtracting the baseline gives an increase of 125. The game panel establishes whether the entered multiplier fits your pet."
        ]
      },
      {
        "title": "Increase Percentage",
        "paragraphs": [
          "Increase percentage = (multiplier − 1) × 100. The 1.5 example therefore gives a 50% increase. A 2× total is a 100% increase, not a 200% increase: the original income already accounts for the first 100%. This distinction helps when a screenshot uses a total multiplier while a guide describes only the extra bonus."
        ]
      }
    ]
  },
  {
    "title": "Steal An Egg Mutation Multipliers",
    "subsections": [
      {
        "title": "Verified Multipliers and Custom Values",
        "paragraphs": [
          "This calculator has no fixed verified mutation presets. An income multiplier, a consumable price, and an application percentage answer different questions. A tooltip describing an application chance does not provide an earnings multiplier. Copy the field that actually describes income, then check whether it applies alone or includes another modifier.",
          "If you measure an effective multiplier yourself, divide the final income by a positive matching baseline. Keep the same pet, size, and boosts in the comparison. When the baseline is zero, that division has no defined result. Avoid deriving a ratio from rounded account totals that combine several pets."
        ]
      },
      {
        "title": "Values That Need Rechecking",
        "paragraphs": [
          "Revisit saved numbers after a balance update, a boost ending, or a pet change. A clip showing several mutations together cannot isolate the contribution of each one. This tool does not automatically multiply a list of named mutations or assume their stacking rule. Enter a combined multiplier only when you have a basis for that combined value."
        ]
      }
    ]
  },
  {
    "title": "Compare Mutations",
    "subsections": [
      {
        "title": "Enchanted, Nitro, and Spectral",
        "paragraphs": [
          "Use the named mutation guides for acquisition and application context. Enchanted has its own Essence route, Nitro has a racing-event source, and Spectral has a Halloween source. Those routes do not establish an income ranking. Choose a custom multiplier supported by the current panel rather than selecting a larger number because an item is harder to obtain."
        ]
      },
      {
        "title": "Compare Two Custom Multipliers",
        "paragraphs": [
          "Open the comparison control and enter a second multiplier. Both options use the same base income, making the totals directly comparable. For example, with 100 as the baseline, hypothetical multipliers of 2 and 3 produce 200 and 300. The difference between those totals is 100 in the same income unit.",
          "Test more options by replacing the comparison value. Record acquisition effort beside each result: a larger theoretical total does not establish that a consumable is obtainable or worth using on your target."
        ]
      },
      {
        "title": "Other Mutations and Application Chance",
        "paragraphs": [
          "Scrambled and other mutations can be modeled with the same custom arithmetic. No application-probability estimator is included because independent attempts are not established here. Income after a successful application and the probability of reaching that outcome are separate questions. The displayed result promises neither a successful roll nor a particular number of attempts."
        ]
      }
    ]
  },
  {
    "title": "Use the Estimate in Your Next Decision",
    "subsections": [
      {
        "title": "Move From One Pet to a Progression Plan",
        "paragraphs": [
          "After comparing the mutation effect, use the separate general calculator for cash, upgrade goals, and session planning. Keep the mutation estimate tied to the selected pet; it does not automatically replace the total income of your entire pen. Add only the gain you can actually use when deciding whether a target becomes easier to afford."
        ]
      },
      {
        "title": "Precision and Input Checks",
        "paragraphs": [
          "Results use browser number arithmetic and display up to six fractional digits, with scientific notation for very large or very small values. Tiny rounding differences are possible. Blank, invalid, and non-finite values produce a readable message; overflow does not become a displayed income. Entries remain in local page state and reset when you leave or reload."
        ]
      }
    ]
  }
];

const faqs: CoreFaq[] = [
  {
    "question": "What does the Steal An Egg mutation calculator calculate?",
    "answer": "It calculates final income, the increase amount, and the percentage increase from your base income and custom multiplier. A second custom multiplier can be compared against the same baseline."
  },
  {
    "question": "Does the calculator have verified mutation presets?",
    "answer": "No named presets are loaded. Enter the current multiplier yourself. The default 2× is an example input and is not assigned to Enchanted, Nitro, Spectral, or any other mutation."
  },
  {
    "question": "Can I calculate multiple mutations together?",
    "answer": "Enter a combined multiplier only if you have verified it for your setup. The calculator does not assume whether the game adds or multiplies separate mutation effects."
  },
  {
    "question": "Is this a mutation chance calculator?",
    "answer": "No. It calculates income after the multiplier you enter. It does not assume independent attempts, calculate application odds, or guarantee that a consumable will succeed."
  },
  {
    "question": "Does this tool read my Roblox account?",
    "answer": "No. Calculations run locally from your inputs. No Roblox login, server connection, or account data is needed."
  }
];

export default function Page() {
  return (
    <CoreSeoPage
      title="Steal An Egg Mutation Calculator"
      description={description}
      pathname={pathname}
      crumbs={[
  {
    "label": "Calculator",
    "href": "/calculator/"
  },
  {
    "label": "Mutation Calculator"
  }
]}
      intro={[
  "Enter base pet income and a custom mutation multiplier to estimate final income and compare two options."
]}
      leadContent={<MutationCalculatorTool />}
      sections={sections}
      faqTitle="Mutation Calculator FAQ"
      faqs={faqs}
      screenshots={[{ label: "Mutation Calculator evidence", filename: "steal-an-egg-mutation-calculator.webp", description: "Reserved for an original readable capture." }]}
      related={[
  {
    "href": "/calculator/",
    "label": "General Calculator"
  },
  {
    "href": "/mutations/",
    "label": "All Mutations"
  },
  {
    "href": "/mutations/enchanted/",
    "label": "Enchanted Mutation"
  },
  {
    "href": "/mutations/nitro/",
    "label": "Nitro Mutation"
  },
  {
    "href": "/mutations/spectral/",
    "label": "Spectral Mutation"
  },
  {
    "href": "/mutations/scrambled/",
    "label": "Scrambled Mutation"
  }
]}
      dataStatus={null}
      showVerificationNotice={false}
      screenshotHeading="Gameplay screenshots"
      screenshotDescription="An original capture will be added here. This frame is a placeholder, not a gameplay image."
      maxIntroParagraphs={99}
      maxParagraphsPerSubsection={99}
      extraSchema={[{ "@type": "WebApplication", name: "Steal An Egg Mutation Calculator", url: `https://steal-an-egg.github.io${pathname}`, applicationCategory: "UtilitiesApplication", operatingSystem: "Any", browserRequirements: "Requires JavaScript", description, featureList: ["Custom mutation income calculation", "Income increase and percentage", "Two custom multiplier comparison"] }]}
    />
  );
}
