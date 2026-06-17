import type { Locale } from "./config";
import en from "./dictionaries/en.json";
import es from "./dictionaries/es.json";
import pt from "./dictionaries/pt.json";
import ar from "./dictionaries/ar.json";
import fr from "./dictionaries/fr.json";
import it from "./dictionaries/it.json";

export type Dictionary = typeof en;

// Static map: every locale in `config` must have a dictionary here, enforced at
// compile time. Adding a locale without its dictionary is a type error — no
// silent English fallback that hides missing or broken translations.
const dictionaries: Record<Locale, Dictionary> = { en, es, pt, ar, fr, it };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
