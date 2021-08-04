type Movement = {
  title: string,
  value: number,
};

export interface RoundFormat {
  id: string,
  title: string,
  moves: Movement[],
}