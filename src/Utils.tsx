export class NavPair {
  constructor(key: string, name: string) {
    this.key = key;
    this.name = name;
  }

  key: string;
  name: string;
}

export class CarouselItem {
    constructor(url: string, title: string, type: string) {
    this.type = type;
    this.title = title
    this.url = url;
  }

  type: string;
  title: string;
  url: string;
}

export const Clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);