class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i]
            item.sellIn--;
            switch (item.name) {
                case "Aged Brie":
                    if (item.quality < 50) item.quality++
                    if (item.sellIn < 0 && item.quality < 50) item.quality++;
                    break
                case "Backstage passes to a TAFKAL80ETC concert":
                    item.quality++
                    if (item.sellIn < 10) item.quality++;
                    if (item.sellIn < 5) item.quality++;
                    item.quality = Math.min(50, item.quality)
                    if (item.sellIn < 0) item.quality = 0;
                    break
                case "Sulfuras, Hand of Ragnaros":
                    item.quality = 80
                    break
                case "Conjured":
                    if (item.quality > 0) item.quality -= 2
                    if (item.quality > 0 && item.sellIn < 0 ) item.quality -= 2;
                    item.quality = Math.max(0, item.quality)
                    break
                default:
                    if (item.quality > 0) item.quality--
                    if (item.quality > 0 && item.sellIn < 0 ) item.quality--;
                    break
            }
        }
        return this.items;
    }
}

module.exports = {
    Item,
    Shop,
};
