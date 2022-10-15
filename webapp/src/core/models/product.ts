import { Asset } from "./asset";

export class Product {
  constructor(public title: string, public description: string, public sizes: string[], public image: Asset) {
  }
}
