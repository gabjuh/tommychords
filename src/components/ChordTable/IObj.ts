export interface IObj {
  name: string;
  base: number;
  strings: ({
    fret: number;
    finger: number;
  } | null)[];
}