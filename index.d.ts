declare module 'chance' {
    interface Chance {
      string(options?: { length?: number; alpha?: boolean; numeric?: boolean }): string;
    }
    const Chance: new () => Chance;
    export default Chance;
  }