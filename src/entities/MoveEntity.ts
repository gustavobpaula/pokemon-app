export interface MoveEntity {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  contest_combos: {
    normal: {
      use_after:
        | {
            name: string;
            url: string;
          }[]
        | null;
      use_before:
        | {
            name: string;
            url: string;
          }[]
        | null;
    };
    super: {
      use_after:
        | {
            name: string;
            url: string;
          }[]
        | null;
      use_before:
        | {
            name: string;
            url: string;
          }[]
        | null;
    };
  };
  contest_effect: {
    url: string;
  };
  contest_type: {
    name: string;
    url: string;
  };
  damage_class: {
    name: string;
    url: string;
  };
  effect_entries: {
    effect: string;
    short_effect: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  effect_changes: {
    effect_entries: {
      effect: string;
      short_effect: string;
    }[];
  };
  generation: {
    name: string;
    url: string;
  };
  meta: {
    ailment: {
      name: string;
      url: string;
    };
    category: {
      name: string;
      url: string;
    };
    min_hits: number | null;
    max_hits: number | null;
    min_turns: number | null;
    max_turns: number | null;
    drain: number;
    healing: number;
    crit_rate: number;
    flinch_chance: number;
    stat_chance: number;
  };
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  past_values: {
    accuracy: number | null;
    effect_chance: number | null;
    pp: number | null;
    power: number | null;
    effect_entries: {
      effect: string;
      short_effect: string;
    }[];
  };
  stat_changes: {
    change: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  super_contest_effect: {
    url: string;
  };
  target: {
    name: string;
    url: string;
  };
  type: {
    name: string;
    url: string;
  };
  learned_by_pokemon: {
    name: string;
    url: string;
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
}
