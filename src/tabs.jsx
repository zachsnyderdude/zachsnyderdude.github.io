import {
  bodyText, bodyText2, bodyText3, bodyText4, bodyText6, bodyTextSup, bodyTextSup2,
  header, smallHr, list1, list2, list3, olist,
  listContainer, listColumn, divider,
  section1, section2, section3, section4, section5, section6, section7, section8, section9,
  charizardLayout, gengarLayout,
} from "./classes";

// One row of card pictures. Each card is [file name, alt text].
function CardRow({ cards }) {
  return (
    <div className={listContainer}>
      {cards.map(([file, alt]) => (
        <img key={file} src={`/images/Cards/General Cards/${file}.png`} alt={alt} className={`${header} w-1/5`} />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Each tab is its own small component so App.jsx and main.jsx stay short.
// ---------------------------------------------------------------------------

function Overview() {
  return (
    <>
      <section className={section1}>
        <img src="/images/game_overview.png" alt="game overview" className={`${header} w-[60%]`} />
        <p className={bodyText}>
          Pokémon Arena! is a head-to-head battle game inspired by games like Dice Throne.<br />
          Players select a Pokémon and use attacks, defenses, and strategy to reduce their opponent’s HP to 0.<br />
          The game supports multiplayer and team formats, but this rulebook focuses on <strong>1v1 battles</strong>.
        </p>
      </section>

      <section className={section2}>
        <p className={bodyTextSup}>Each player:</p>
        <ul className={list1}>
          <li className={bodyText2}>Chooses 1 Pokémon</li>
          <li className={bodyText2}>Uses a unique deck</li>
          <li className={bodyText2}>Builds their stats over time</li>
          <li className={bodyText2}>Uses attacks and defenses to outplay their opponent</li>
        </ul>
      </section>
    </>
  );
}

function Mechanics() {
  return (
    <>
      <img src="/images/core_mechanics.png" alt="core mechanics" className={`${header} w-[38%]`} />

      <section className={section3}>
        <div className={listContainer}>
          <div className={listColumn}>
            <p className={bodyTextSup}>Each player selects one Pokemon to play as:</p>
            <ul className={list1}>
              <li className={bodyText3}>Charizard (Fire/Flying)</li>
              <li className={bodyText3}>Pikachu (Electric)</li>
              <li className={bodyText3}>Exeggutor (Grass/Psychic)</li>
              <li className={bodyText3}>Greninja (Water/Dark)</li>
              <li className={bodyText3}>Alolan Ninetales (Fairy/Ice)</li>
              <li className={bodyText3}>Gengar (Ghost/Poison)</li>
              <li className={bodyText3}>Lucario (Fighting/Steel)</li>
              <li className={bodyText3}>Garchomp (Ground/Dragon)</li>
            </ul>
          </div>

          <div className={divider}></div>

          <div className={listColumn}>
            <p className={bodyTextSup}>Each Pokemon has a character mat, which includes:</p>
            <ul className={list1}>
              <li className={bodyText3}>Passive ability</li>
              <li className={bodyText3}>Description</li>
              <li className={bodyText3}>Type</li>
              <li className={bodyText3}>Innate attack</li>
              <li className={bodyText3}>Slots for 4 attack moves and 2 defense moves</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Values() {
  return (
    <>
      <img src="/images/starting_values.png" alt="starting values" className={`${header} w-[36%]`} />

      <section className={charizardLayout}>
        <img src="/images/charizard_background2.webp" alt="charizard" className="w-1/2 max-[850px]:w-full" />

        <div className={`${section4} w-3/5 text-left max-[850px]:w-full max-[850px]:text-center`}>
          <p className={bodyTextSup}>Health (HP)</p>
          <ul className={list2}>
            <li className={bodyText4}>Recommended starting HP: 40</li>
            <li className={bodyText4}>Maximum HP: Starting HP + 10</li>
          </ul>

          <p className={bodyTextSup}>Starting Resources</p>
          <ul className={list2}>
            <li className={bodyText4}>5 Energy Points (EP)</li>
            <li className={bodyText4}>5 Ability Points (AP)</li>
          </ul>

          <p className={bodyTextSup}>Starting Setup</p>
          <ul className={list2}>
            <li className={bodyText4}>Draw 5 cards</li>
            <li className={bodyText4}>
              You may place:
              <ul className={list2}>
                <li className={bodyText4}>1 attack move (free)</li>
                <li className={bodyText4}>1 defense move (free)</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

function Decks() {
  return (
    <>
      <img src="/images/decks_and_cards.png" alt="decks and cards" className={`${header} w-[40%]`} />

      <section className={gengarLayout}>
        <div className={`${section5} w-2/5 text-left max-[850px]:w-full`}>
          <p className={bodyTextSup}>Each Pokémon has its own deck consisting of:</p>

          <ul className={list2}>
            <li className={bodyText4}>
              20 Attack Moves
              <ul className={list2}>
                <li className={bodyText4}>10 Attack (Atk)</li>
                <li className={bodyText4}>10 Special Attack (Sp Atk)</li>
              </ul>
            </li>
          </ul>

          <ul className={list2}>
            <li className={bodyText4}>
              10 Defense Moves
              <ul className={list2}>
                <li className={bodyText4}>5 Defense (Def)</li>
                <li className={bodyText4}>5 Special Defense (Sp Def)</li>
              </ul>
            </li>
          </ul>

          <ul className={list2}>
            <li className={bodyText4}>30 Item Cards</li>
          </ul>
        </div>

        <img src="/images/gengar.webp" alt="gengar" className="w-1/2 max-[850px]:w-full" />
      </section>

      <section className={section6}>
        <p className={bodyTextSup}>Card Rules</p>
        <ul className={list2}>
          <li className={bodyText6}>You may place 1 new move per turn</li>
          <li className={bodyText6}>Placing a move costs 3 EP</li>
          <li className={bodyText6}>
            You can have:
            <ul className={list2}>
              <li className={bodyText6}>Up to 4 attack moves</li>
              <li className={bodyText6}>Up to 2 defense moves</li>
            </ul>
          </li>
          <li className={bodyText6}>Cards that are already on the mat cannot be sold. They can only be discarded.</li>
          <li className={bodyText6}>Cards from your hand can be sold for 1 EP and 1 AP each</li>
          <li className={bodyText6}>
            Cards that are discarded from your mat or if they were sold, go into the discard pile face up
          </li>
          <li className={bodyText6}>
            If you run out of cards, reshuffle your discard pile and use that as your new deck
          </li>
          <li className={bodyText6}>
            You can have a maximum of 5 cards in your hand at a time
            <ul className={list2}>
              <li className={bodyText6}>When your turn is over, you must end it with 5 or less cards in your hand</li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}

function EnergyPoints() {
  return (
    <>
      <img src="/images/EP.png" alt="EP and AP" className={`${header} w-[45%]`} />

      <section className={section7}>
        <div className={listContainer}>
          <div className={listColumn}>
            <p className={bodyTextSup}>These are your two main resources:</p>
            <br />
            <p className={bodyTextSup2}>Energy Points (EP)</p>
            <p className={bodyText4}>Used for:</p>
            <ul className={list3}>
              <li className={bodyText4}>Placing moves (3 EP)</li>
              <li className={bodyText4}>Drawing extra moves (5 EP)</li>
              <li className={bodyText4}>Refining (see below)</li>
              <li className={bodyText4}>Leveling</li>
            </ul>
          </div>

          <div className={divider}></div>

          <div className={`${listColumn} mt-[5%]`}>
            <p className={bodyTextSup2}>Ability Points (AP)</p>
            <p className={bodyText4}>Used for:</p>
            <ul className={list3}>
              <li className={bodyText4}>Performing attacks</li>
              <li className={bodyText4}>Using defense</li>
              <li className={bodyText4}>Activating move abilities</li>
              <li className={bodyText4}>Leveling up</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={section8}>
        <div className={listContainer}>
          <div className={listColumn}>
            <p className={bodyTextSup}>Gaining Resources</p>
            <br />
            <p className={bodyTextSup2}>During your Upkeep Phase:</p>
            <ul className={list3}>
              <li className={bodyText4}>Gain 5 EP</li>
              <li className={bodyText4}>Gain 3 AP</li>
              <li className={bodyText4}>Draw 1 card</li>
            </ul>

            <p className={bodyTextSup2}>You may also gain EP/AP through:</p>
            <ul className={list3}>
              <li className={bodyText4}>Dealing damage (Grants 1 EP)</li>
              <li className={bodyText4}>Placing moves (Grants 2 AP)</li>
              <li className={bodyText4}>Buffs or abilities</li>
            </ul>
          </div>

          <div className={divider}></div>

          <div className={listColumn}>
            <p className={bodyTextSup}>Refining</p>
            <br />
            <p className={bodyTextSup2}>Refining lets you filter your deck:</p>
            <ul className={list3}>
              <li className={bodyText4}>Look at the top 3 cards</li>
              <li className={bodyText4}>Choose 1 to keep</li>
              <li className={bodyText4}>Place the other 2 on the bottom</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Turns() {
  return (
    <>
      <img src="/images/turn_structure.png" alt="turn structure" className={`${header} w-[40%]`} />

      <section className={section9}>
        <div className={listContainer}>
          <div className={listColumn}>
            <p className={bodyTextSup}>Each turn follows this order:</p>
            <ol className={olist}>
              <li className={bodyTextSup2}>
                Upkeep Phase
                <ul className={list2}>
                  <li className={bodyTextSup2}>Resolve status effects</li>
                  <li className={bodyTextSup2}>Gain 5 EP and 3 AP</li>
                  <li className={bodyTextSup2}>Draw 1 card</li>
                </ul>
              </li>
              <li className={bodyTextSup2}>
                Main Phase
                <p>You may perform any of the following:</p>
                <ul className={list2}>
                  <li className={bodyTextSup2}>Place a move (3 EP)</li>
                  <li className={bodyTextSup2}>Draw an extra card (5 EP)</li>
                  <li className={bodyTextSup2}>Refine (7 EP)</li>
                  <li className={bodyTextSup2}>Sell a card (gain 1 EP and 1 AP)</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className={divider}></div>

          <div className={listColumn}>
            <ol start={3} className={olist}>
              <li className={bodyTextSup2}>
                Attacking Phase
                <p>(See Attacking below)</p>
              </li>
            </ol>
            <ol start={4} className={olist}>
              <li className={bodyTextSup2}>
                Defensive Phase
                <p>(Occurs during your attack. See Defending below)</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

function Mats() {
  return (
    <>
      <img src="/images/mats.png" alt="pokemon mats" className={`${header} w-[37%]`} />
      <img src="/images/Charizard.png" alt="Charizard mat" className={`${header} w-1/2`} />
      <img src="/images/Pikachu.png" alt="Pikachu mat" className={`${header} w-1/2`} />
      <img src="/images/Gengar.png" alt="Gengar mat" className={`${header} w-1/2`} />
    </>
  );
}

function Stats() {
  return (
    <>
      <img src="/images/stats.png" alt="stats" className={`${header} w-[17%]`} />

      <section>
        Overview
        Stats represent how your Pokémon enhances or resists attacks beyond the base power of moves.
        There are four stats:
        Attack (Atk)
        Special Attack (Sp Atk)
        Defense (Def)
        Special Defense (Sp Def)
        Each stat ranges from 0 to 6.

        Stat Thresholds
        Stats do not directly add or subtract damage per point. Instead, they provide bonuses at specific
        thresholds:
        Attack / Special Attack
        0–1 → +0 damage
        2–3 → +1 damage
        4–5 → +2 damage
        6 → +3 damage (maximum)
        Defense / Special Defense
        0–1 → -0 damage
        2–3 → -1 damage
        4–5 → -2 damage
        6 → -3 damage (maximum)

        How Stats Work
        Attack (Atk) increases bonus damage for Attack-type moves
        Special Attack (Sp Atk) increases bonus damage for Special Attack-type moves
        Defense (Def) reduces bonus damage from Attack-type moves
        Special Defense (Sp Def) reduces bonus damage from Special Attack-type moves
        Stats only affect bonus damage, not the base damage listed on cards.
        Attack stats are always compared against the matching defense:
        Atk vs Def
        Sp Atk vs Sp Def

        Key Rules
        Stats never reduce base damage
        Maximum bonus from stats is +3 / -3
        Stats are applied before defense cards reduce damage
        If damage would be reduced to 0 or less, it instead deals 1 damage, provided the user’s relevant attacking
        stat (Attack or Special Attack) is at least 2.
      </section>
    </>
  );
}

function Attacking() {
  return (
    <>
      <img src="/images/attacking.png" alt="attacking" className={`${header} w-[26%]`} />

      <section>
        Attacking happens during the Attacking Phase of your turn. You are not required to attack.
        Each Pokémon has an Innate Attack, which requires no AP to use but is very weak. It will always deal 1
        damage. Tokens can modify it. You may only attack once per turn.

        Typing
        When attacking, compare the type of your attack move to the type of the opponent’s defense move.
        Enhanced (type advantage): +2 damage
        Weakened (type disadvantage): -2 damage
        Neutral: no change
        This system is called Typing.
        Examples:
        Fire attack vs Grass defense → Enhanced (+2)
        Fire attack vs Water defense → Weakened (-2)
        Fire attack vs Electric defense → Neutral

        Attacking Details
        Attacks require AP, listed on the card
        Stronger moves typically cost more AP
        If you don’t have enough AP (or choose not to spend it), you may use your Innate Attack instead
        Buffs and debuffs are applied before damage is calculated
        Status effects are applied after damage is dealt
        You may only use one attack per turn

        Overview
        Attacking occurs during the Attacking Phase of your turn. You may choose to attack once per turn.
        Each attack uses either:
        Attack (Atk) or
        Special Attack (Sp Atk)

        Attack Steps
        To perform an attack, resolve the following steps in order:
        1. Declare Attack
        Choose one attack move from your active moves
        Pay the required AP cost
        2. Opponent Defends
        The defending player selects one of their defense cards
        They pay the required AP cost
        3. Calculate Base Damage
        Start with the attack’s listed damage
        4. Apply Typing
        Enhanced: +2 damage (type advantage)
        Weakened: -2 damage (type disadvantage)
        Neutral: no change
        5. Apply Stat Bonuses
        Determine which stats are used:
        Attack moves use Atk vs Def
        Special Attack moves use Sp Atk vs Sp Def
        Apply stat thresholds:
        Add attacker’s bonus
        Subtract defender’s bonus
        6. Apply Defense Card
        Subtract the amount blocked by the defense card
        7. Final Damage
        Deal the remaining damage to the defending Pokémon’s HP
        If damage is 0 or less, deal 1 damage instead
        8. Resolve Effects
        Apply any status effects, buffs, or debuffs listed on the move
      </section>
    </>
  );
}

function Defending() {
  return (
    <>
      <img src="/images/defending.png" alt="defending" className={`${header} w-[26%]`} />

      <section>
        Defending occurs when your opponent attacks you.
        You may use one of your active defense cards to reduce incoming damage.

        Defending Rules
        You may use 1 defense card per attack
        Defense cards require AP to use
        You must choose a defense card after the attack is declared

        Strategy Notes
        When defending, consider:
        The type of the incoming attack (for Typing advantage)
        Whether the attack is:
        Atk → use Def
        Sp Atk → use Sp Def
        Choosing the correct defense card can significantly reduce damage.

        Defense Resolution
        During an attack:
        1. Choose a defense card
        2. Spend the required AP
        3. Apply Typing (handled during attack calculation)
        4. Subtract the defense card’s block value
        5. Remaining damage is applied to your HP
      </section>
    </>
  );
}

function Leveling() {
  return (
    <>
      <img src="/images/leveling_up.png" alt="leveling up" className={`${header} w-[26%]`} />

      <section>
        All Pokémon start at Level 0
        Max level is 8
        Spend 10 EP + 10 AP to level up
        Heal 5 HP (cannot exceed max HP cap) upon a level up
        Upon level up, levels 1–4 → gain 1 stat point
        Upon level up, levels 5–8 → gain 2 stat points
        Total stat points at max level: 12
        Each stat caps at 6
        Choose carefully—you cannot max everything
      </section>
    </>
  );
}

function Tokens() {
  return (
    <>
      <img src="/images/tokens.png" alt="tokens" className={`${header} w-[18%]`} />

      <section>
        Tokens can be obtained through using certain moves when attacking or defending. They are only usable once.
        Tokens give various different advantages.

        Token List:
        Attack Boost:
        Your next attack deals 1 additional damage. (Then discard)
        Attack Drain:
        Your next attack deals 1 less damage. (Then discard)
        Defense Boost:
        Your next defense blocks 1 additional damage. (Then discard)
        Defense Drain:
        Your next defense blocks 1 less damage. (Then discard)
        EP Boost:
        Gain 1 additional EP during your next upkeep. (Then discard)
        EP Drain:
        Gain 1 less EP during your next upkeep. (Then discard)
        AP Boost:
        Gain 1 additional AP during your next upkeep. (Then discard)
        AP Drain:
        Gain 1 less AP during your next upkeep. (Then discard)
      </section>
    </>
  );
}

function Cards() {
  return (
    <>
      <img src="/images/all_cards.png" alt="All Cards" className={`${header} w-[23%]`} />

      <hr className={smallHr} />

      <section>
        {/* Normal Attack Cards */}
        <img src="/images/Pokemon_Words/attack_cards.png" alt="Attack Cards" className={`${header} w-1/5`} />
        <hr className={smallHr} />
        <CardRow cards={[["tackle", "Tackle"], ["quick_attack", "Quick Attack"], ["scratch", "Scratch"]]} />
        <CardRow cards={[["take_down", "Take Down"], ["headbutt", "Headbutt"]]} />

        {/* Normal Special Attack Cards */}
        <hr className={smallHr} />
        <img src="/images/Pokemon_Words/special_attack_cards.png" alt="Special Attack Cards" className={`${header} w-1/4`} />
        <hr className={smallHr} />
        <CardRow cards={[["swift", "Swift"], ["hyper_beam", "Hyper Beam"], ["spit_up", "Spit Up"]]} />
        <CardRow cards={[["sonic_boom", "Sonic Boom"], ["round", "Round"]]} />

        {/* Normal Defense Cards */}
        <hr className={smallHr} />
        <img src="/images/Pokemon_Words/defense_cards.png" alt="Defense Cards" className={`${header} w-1/5`} />
        <hr className={smallHr} />
        <CardRow cards={[["growl", "Growl"], ["leer", "Leer"], ["defense_curl", "Defense Curl"]]} />
        <CardRow cards={[["growth", "Growth"], ["smokescreen", "Smokescreen"]]} />

        {/* Normal Special Defense Cards */}
        <hr className={smallHr} />
        <img src="/images/Pokemon_Words/special_defense_cards.png" alt="Special Defense Cards" className={`${header} w-[30%]`} />
        <hr className={smallHr} />
        <CardRow cards={[["scary_face", "Scary Face"], ["double_team", "Double Team"], ["copycat", "Copycat"]]} />
        {/* The original HTML had two empty card slots here with no image file yet. Add them as CardRow entries when ready. */}
      </section>
    </>
  );
}

function StatusEffects() {
  return (
    <>
      <img src="/images/status_effects.png" alt="status effects" className={`${header} w-[37%]`} />

      <section>
        Status effects are persistent conditions applied after damage is dealt. They resolve during the upkeep phase
        and can be applied by moves or abilities. Status effects remain active until removed by a move or item.

        Bleed:
        While Bleeding, take 1 damage during your upkeep phase. If already Bleeding, take 1 additional damage
        (stacks up to 3)
        Burn:
        While Burned, take 1 damage during your upkeep phase. Target cannot use bonuses from Stats.
        Paralysis:
        While Paralyzed, you must spend 1 additional AP to use attack and defense moves.
        Frozen:
        While Frozen, you do not get any effects from Boost Tokens and gain 1 less EP.
        Poison:
        While Poisoned, take 1 damage during your upkeep phase. You cannot gain HP.
        Confusion:
        While Confused, you cannot use the same move twice in a row.
        Sleep:
        While Asleep, your attacks cannot benefit from Typing.
      </section>
    </>
  );
}

function Glossary() {
  return <img src="/images/glossary.png" alt="glossary" className={`${header} w-[23%]`} />;
}

// ---------------------------------------------------------------------------
// The list of tabs. App.jsx uses it for the buttons, main.jsx uses it for the routes.
// path = the end of the URL, e.g. /home/overview
// ---------------------------------------------------------------------------
export const tabs = [
  { path: "overview", label: "Game Overview", element: <Overview /> },
  { path: "mechanics", label: "Core Mechanics", element: <Mechanics /> },
  { path: "values", label: "Starting Values", element: <Values /> },
  { path: "decks", label: "Decks and Cards", element: <Decks /> },
  { path: "ep", label: "Energy and Ability Points", element: <EnergyPoints /> },
  { path: "turns", label: "Turn Structure", element: <Turns /> },
  { path: "mats", label: "Pokémon Mats", element: <Mats /> },
  { path: "stats", label: "Stats", element: <Stats /> },
  { path: "attacking", label: "Attacking", element: <Attacking /> },
  { path: "defending", label: "Defending", element: <Defending /> },
  { path: "leveling", label: "Leveling", element: <Leveling /> },
  { path: "tokens", label: "Tokens", element: <Tokens /> },
  { path: "cards", label: "Cards", element: <Cards /> },
  { path: "status", label: "Status Effects", element: <StatusEffects /> },
  { path: "glossary", label: "Glossary", element: <Glossary /> },
];
